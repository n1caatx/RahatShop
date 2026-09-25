package com.rahatshop.controller;

import com.rahatshop.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/dashboard")
    public Map<String, Object> getDashboard() {
        return adminService.getDashboardStats();
    }

    @GetMapping("/products")
    public void getProducts() {}

    @PutMapping("/products/{id}/approve")
    public void approveProduct(@PathVariable Long id) {
        adminService.approveProduct(id, 1L); // stub adminId
    }

    @PutMapping("/products/{id}/reject")
    public void rejectProduct(@PathVariable Long id, @RequestBody String reason) {
        adminService.rejectProduct(id, 1L, reason);
    }

    @GetMapping("/users")
    public void getUsers() {}

    @GetMapping("/reports")
    public void getReports() {}

    @PutMapping("/promotion-packages")
    public void managePromotionPackages() {}
}
