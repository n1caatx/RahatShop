package com.rahatshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Entity
@Table(name="promotions")
@Data
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    @ManyToOne
    private User seller;

    @ManyToOne
    private PromotionPackage promotionPackage;

    private Instant startsAt;
    private Instant expiresAt;
    private String status; // ACTIVE/EXPIRED/CANCELLED
    private Integer promotionScore;
    private Instant createdAt;
}
