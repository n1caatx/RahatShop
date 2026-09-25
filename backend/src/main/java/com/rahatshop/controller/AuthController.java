package com.rahatshop.controller;

import com.rahatshop.dto.ApiResponse;
import com.rahatshop.dto.AuthResponse;
import com.rahatshop.dto.LoginRequest;
import com.rahatshop.dto.RegisterRequest;
import com.rahatshop.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ApiResponse<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        return new ApiResponse<>(true, "Qeydiyyat uğurlu oldu", "200", authService.register(request));
    }

    @PostMapping("/login")
    public ApiResponse<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return new ApiResponse<>(true, "Giriş uğurlu oldu", "200", authService.login(request));
    }

    @PostMapping("/refresh")
    public ApiResponse<AuthResponse> refresh(@RequestParam String token) {
        return new ApiResponse<>(true, "Token yeniləndi", "200", authService.refresh(token));
    }
}
