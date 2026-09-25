package com.rahatshop.repository;

import com.rahatshop.entity.PromotionPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PromotionPackageRepository extends JpaRepository<PromotionPackage, Long> {
    List<PromotionPackage> findByActiveTrue();
}
