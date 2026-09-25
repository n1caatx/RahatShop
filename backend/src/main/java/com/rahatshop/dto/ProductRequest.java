package com.rahatshop.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class ProductRequest {
    private String title;
    private Long categoryId;
    private Long storeId;
    private String description;
    private BigDecimal price;
    private String condition; // NEW/SECOND_HAND
    private String city;
    private String saleMode; // CONTACT/ONLINE
}
