package com.rahatshop.repository;

import com.rahatshop.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByStoreId(Long storeId);
    boolean existsByBuyerIdAndProductId(Long buyerId, Long productId);
}
