package com.rahatshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Entity
@Table(name="reports")
@Data
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User reporter;

    private String targetType; // PRODUCT/STORE/USER
    private Long targetId;
    private String reason;
    private String status; // PENDING/REVIEWED/RESOLVED

    private Instant createdAt;
}
