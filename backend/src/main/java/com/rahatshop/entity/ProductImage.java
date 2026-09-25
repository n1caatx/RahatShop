package com.rahatshop.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="product_images")
@Data
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    private String url;
    private Integer orderIdx;
}
