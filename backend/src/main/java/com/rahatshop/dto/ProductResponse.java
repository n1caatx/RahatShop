package com.rahatshop.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class ProductResponse {
    private Long id;
    private String title;
    private String slug;
    private String description;
    private BigDecimal price;
    private String currency;
    private String condition;
    private String city;
    private String saleMode;
    private String status;
    private Integer viewsCount;
    private Integer favoritesCount;
    private String categoryName;
    private String storeName;
    private String sellerEmail;
    private List<String> imageUrls;
    private String createdAt;
}
