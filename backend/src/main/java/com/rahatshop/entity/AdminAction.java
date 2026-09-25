package com.rahatshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Entity
@Table(name="admin_actions")
@Data
public class AdminAction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User admin;

    private String action;
    private String targetType;
    private Long targetId;
    private String description;

    private Instant timestamp;
}
