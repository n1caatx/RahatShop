package com.rahatshop.dto;

import lombok.Data;

@Data
public class StoreResponse {
    private Long id;
    private String name;
    private String slug;
    private String description;
    private String city;
    private String logoUrl;
    private boolean verified;
    private String ownerEmail;
    private Integer productCount;
    private String createdAt;
}
