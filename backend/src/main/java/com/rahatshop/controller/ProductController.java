package com.rahatshop.controller;

import com.rahatshop.dto.ProductRequest;
import com.rahatshop.dto.ProductResponse;
import com.rahatshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public Page<ProductResponse> getProducts(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String condition,
            @RequestParam(required = false) String sort,
            Pageable pageable) {
        return productService.getProducts(search, categoryId, minPrice, maxPrice, city, condition, sort, pageable);
    }

    @GetMapping("/{slug}")
    public ProductResponse getProduct(@PathVariable String slug) {
        return productService.getProductBySlug(slug);
    }

    @PostMapping("/")
    public ProductResponse createProduct(@RequestBody ProductRequest request, Authentication auth) {
        return productService.createProduct(request, auth.getName());
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id, Authentication auth) {
        productService.deleteProduct(id, auth.getName());
    }
}
