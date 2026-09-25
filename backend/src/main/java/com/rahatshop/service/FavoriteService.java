package com.rahatshop.service;

import com.rahatshop.dto.ProductResponse;
import com.rahatshop.entity.Favorite;
import com.rahatshop.entity.Product;
import com.rahatshop.entity.User;
import com.rahatshop.repository.FavoriteRepository;
import com.rahatshop.repository.ProductRepository;
import com.rahatshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public void addFavorite(Long productId, String userEmail) {
        User u = userRepository.findByEmail(userEmail).orElseThrow();
        Product p = productRepository.findById(productId).orElseThrow();
        if (!favoriteRepository.existsByUserIdAndProductId(u.getId(), productId)) {
            Favorite f = new Favorite();
            f.setUser(u);
            f.setProduct(p);
            f.setCreatedAt(Instant.now());
            favoriteRepository.save(f);
        }
    }

    @Transactional
    public void removeFavorite(Long productId, String userEmail) {
        User u = userRepository.findByEmail(userEmail).orElseThrow();
        favoriteRepository.deleteByUserIdAndProductId(u.getId(), productId);
    }

    public List<ProductResponse> getUserFavorites(String userEmail) {
        User u = userRepository.findByEmail(userEmail).orElseThrow();
        return favoriteRepository.findByUserId(u.getId()).stream()
                .map(f -> {
                    Product p = f.getProduct();
                    ProductResponse r = new ProductResponse();
                    r.setId(p.getId());
                    r.setTitle(p.getTitle());
                    return r;
                }).collect(Collectors.toList());
    }

    public boolean isFavorite(Long productId, String userEmail) {
        User u = userRepository.findByEmail(userEmail).orElseThrow();
        return favoriteRepository.existsByUserIdAndProductId(u.getId(), productId);
    }
}
