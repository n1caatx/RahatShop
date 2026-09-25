package com.rahatshop.controller;

import com.rahatshop.entity.PromotionPackage;
import com.rahatshop.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/promotions")
public class PromotionController {

    @Autowired
    private PromotionService promotionService;

    @GetMapping("/packages")
    public List<PromotionPackage> getPackages() {
        return promotionService.getActivePackages();
    }

    @PostMapping("/")
    public void applyPromotion(@RequestParam Long productId, @RequestParam Long packageId, Authentication auth) {
        promotionService.applyPromotion(productId, packageId, auth.getName());
    }
}
