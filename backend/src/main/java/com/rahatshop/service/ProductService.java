package com.rahatshop.service;

import com.rahatshop.dto.ProductRequest;
import com.rahatshop.dto.ProductResponse;
import com.rahatshop.entity.Product;
import com.rahatshop.entity.User;
import com.rahatshop.repository.ProductRepository;
import com.rahatshop.repository.UserRepository;
import com.rahatshop.util.SlugUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public Page<ProductResponse> getProducts(String search, Long categoryId, BigDecimal minPrice, BigDecimal maxPrice, String city, String condition, String sort, Pageable pageable) {
        // Implementation with Specifications can be added here
        return productRepository.findAll(pageable).map(this::mapToDto);
    }

    public ProductResponse getProductBySlug(String slug) {
        Product p = productRepository.findBySlug(slug).orElseThrow();
        p.setViewsCount(p.getViewsCount() + 1);
        productRepository.save(p);
        return mapToDto(p);
    }

    public ProductResponse createProduct(ProductRequest request, String sellerEmail) {
        User seller = userRepository.findByEmail(sellerEmail).orElseThrow();
        Product p = new Product();
        p.setTitle(request.getTitle());
        p.setSlug(SlugUtil.generateSlug(request.getTitle()) + "-" + System.currentTimeMillis());
        p.setDescription(request.getDescription());
        p.setPrice(request.getPrice());
        p.setCondition(request.getCondition());
        p.setCity(request.getCity());
        p.setSaleMode(request.getSaleMode());
        p.setStatus("PENDING");
        p.setSeller(seller);
        p.setCreatedAt(Instant.now());
        p.setUpdatedAt(Instant.now());

        productRepository.save(p);
        return mapToDto(p);
    }

    public void deleteProduct(Long id, String email) {
        Product p = productRepository.findById(id).orElseThrow();
        if (p.getSeller().getEmail().equals(email)) {
            productRepository.delete(p);
        }
    }

    private ProductResponse mapToDto(Product p) {
        ProductResponse r = new ProductResponse();
        r.setId(p.getId());
        r.setTitle(p.getTitle());
        r.setSlug(p.getSlug());
        r.setDescription(p.getDescription());
        r.setPrice(p.getPrice());
        r.setCurrency(p.getCurrency());
        r.setCondition(p.getCondition());
        r.setCity(p.getCity());
        r.setSaleMode(p.getSaleMode());
        r.setStatus(p.getStatus());
        r.setViewsCount(p.getViewsCount());
        r.setFavoritesCount(p.getFavoritesCount());
        r.setSellerEmail(p.getSeller().getEmail());
        if (p.getCategory() != null) r.setCategoryName(p.getCategory().getName());
        if (p.getStore() != null) r.setStoreName(p.getStore().getName());
        return r;
    }
}
