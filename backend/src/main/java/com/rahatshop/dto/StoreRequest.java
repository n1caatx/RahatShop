package com.rahatshop.dto;

import lombok.Data;

@Data
public class StoreRequest {
    private String name;
    private String description;
    private String city;
    private String phone;
}
