package com.rahatshop.service;

import com.rahatshop.entity.AdminAction;
import com.rahatshop.repository.AdminActionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private AdminActionRepository adminActionRepository;

    public Map<String, Object> getDashboardStats() {
        return Map.of("users", 0, "products", 0);
    }

    public void approveProduct(Long productId, Long adminId) {
        AdminAction action = new AdminAction();
        action.setAction("APPROVE_PRODUCT");
        action.setTargetId(productId);
        action.setTargetType("PRODUCT");
        action.setTimestamp(Instant.now());
        adminActionRepository.save(action);
    }

    public void rejectProduct(Long productId, Long adminId, String reason) {
        AdminAction action = new AdminAction();
        action.setAction("REJECT_PRODUCT");
        action.setTargetId(productId);
        action.setTargetType("PRODUCT");
        action.setDescription(reason);
        action.setTimestamp(Instant.now());
        adminActionRepository.save(action);
    }
}
