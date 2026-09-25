package com.rahatshop.repository;

import com.rahatshop.entity.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PromotionRepository extends JpaRepository<Promotion, Long> {
    List<Promotion> findByProductId(Long productId);
    List<Promotion> findBySellerId(Long sellerId);
}
