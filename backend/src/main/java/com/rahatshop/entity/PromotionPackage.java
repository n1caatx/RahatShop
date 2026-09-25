package com.rahatshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name="promotion_packages")
@Data
public class PromotionPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private BigDecimal price;
    private Integer durationDays;
    private Integer priority;
    private String description;

    private Boolean active = true;

    private Instant createdAt;
    private Instant updatedAt;
}
