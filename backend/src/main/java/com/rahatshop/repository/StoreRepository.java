package com.rahatshop.repository;

import com.rahatshop.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store, Long> {
    Optional<Store> findBySlug(String slug);
    Optional<Store> findByOwnerId(Long ownerId);
}
