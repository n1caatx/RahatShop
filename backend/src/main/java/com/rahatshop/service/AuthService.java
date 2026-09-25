package com.rahatshop.service;

import com.rahatshop.dto.AuthResponse;
import com.rahatshop.dto.LoginRequest;
import com.rahatshop.dto.RegisterRequest;
import com.rahatshop.entity.Role;
import com.rahatshop.entity.User;
import com.rahatshop.repository.RoleRepository;
import com.rahatshop.repository.UserRepository;
import com.rahatshop.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email artıq mövcuddur");
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setCreatedAt(Instant.now());

        Role role = roleRepository.findByName(request.getRole())
                .orElseThrow(() -> new RuntimeException("Rol tapılmadı"));
        user.setRoles(Set.of(role));

        userRepository.save(user);

        return login(new LoginRequest(){{ setEmail(request.getEmail()); setPassword(request.getPassword()); }});
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("İstifadəçi tapılmadı"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new RuntimeException("Şifrə yanlışdır");
        }

        Set<String> roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toSet());

        String access = jwtUtil.generateAccessToken(user.getEmail(), roles);
        String refresh = jwtUtil.generateRefreshToken(user.getEmail());

        return new AuthResponse(access, refresh, user.getEmail(), roles);
    }

    public AuthResponse refresh(String refreshToken) {
        if (jwtUtil.validateToken(refreshToken)) {
            String email = jwtUtil.getEmailFromToken(refreshToken);
            User user = userRepository.findByEmail(email).orElseThrow();
            Set<String> roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toSet());
            String newAccess = jwtUtil.generateAccessToken(email, roles);
            return new AuthResponse(newAccess, refreshToken, email, roles);
        }
        throw new RuntimeException("Yanlış token");
    }
}
