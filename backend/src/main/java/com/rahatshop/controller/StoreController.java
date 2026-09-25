package com.rahatshop.controller;

import com.rahatshop.dto.StoreRequest;
import com.rahatshop.dto.StoreResponse;
import com.rahatshop.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stores")
public class StoreController {

    @Autowired
    private StoreService storeService;

    @GetMapping("/")
    public List<StoreResponse> getAll() {
        return storeService.getAllStores();
    }

    @GetMapping("/{slug}")
    public StoreResponse getBySlug(@PathVariable String slug) {
        return storeService.getStoreBySlug(slug);
    }

    @PostMapping("/")
    public StoreResponse create(@RequestBody StoreRequest request, Authentication auth) {
        return storeService.createStore(request, auth.getName());
    }
}
