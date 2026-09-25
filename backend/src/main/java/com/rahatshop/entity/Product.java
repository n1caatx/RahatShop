package com.rahatshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

@Entity
@Table(name="products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User seller;

    @ManyToOne
    private Store store;

    @ManyToOne
    private Category category;

    private String title;
    private String slug;
    private String description;
    private BigDecimal price;

    private String currency = "AZN";
    private String condition; // NEW/SECOND_HAND
    private String city;
    private String saleMode; // CONTACT/ONLINE
    private String status; // ACTIVE/PENDING/REJECTED/EXPIRED

    private Integer viewsCount = 0;
    private Integer favoritesCount = 0;

    private Instant createdAt;
    private Instant updatedAt;

    @OneToMany(mappedBy = "product")
    private List<ProductImage> images;
}
