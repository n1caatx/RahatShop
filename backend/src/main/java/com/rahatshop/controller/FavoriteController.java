package com.rahatshop.controller;

import com.rahatshop.dto.ProductResponse;
import com.rahatshop.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @PostMapping("/{productId}")
    public void add(@PathVariable Long productId, Authentication auth) {
        favoriteService.addFavorite(productId, auth.getName());
    }

    @DeleteMapping("/{productId}")
    public void remove(@PathVariable Long productId, Authentication auth) {
        favoriteService.removeFavorite(productId, auth.getName());
    }

    @GetMapping("/")
    public List<ProductResponse> getFavorites(Authentication auth) {
        return favoriteService.getUserFavorites(auth.getName());
    }
}
