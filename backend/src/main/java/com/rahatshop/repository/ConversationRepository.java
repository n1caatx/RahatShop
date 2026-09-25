package com.rahatshop.repository;

import com.rahatshop.entity.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface ConversationRepository extends JpaRepository<Conversation, Long> {
    List<Conversation> findByBuyerIdOrSellerId(Long buyerId, Long sellerId);
    Optional<Conversation> findByBuyerIdAndSellerIdAndProductId(Long buyerId, Long sellerId, Long productId);
}
