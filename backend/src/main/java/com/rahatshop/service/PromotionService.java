package com.rahatshop.service;

import com.rahatshop.entity.Promotion;
import com.rahatshop.entity.PromotionPackage;
import com.rahatshop.repository.PromotionPackageRepository;
import com.rahatshop.repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class PromotionService {

    @Autowired
    private PromotionRepository promotionRepository;

    @Autowired
    private PromotionPackageRepository promotionPackageRepository;

    public List<PromotionPackage> getActivePackages() {
        return promotionPackageRepository.findByActiveTrue();
    }

    public Promotion applyPromotion(Long productId, Long packageId, String sellerEmail) {
        Promotion p = new Promotion();
        p.setCreatedAt(Instant.now());
        return promotionRepository.save(p);
    }
}
