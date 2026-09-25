package com.rahatshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Entity
@Table(name="stores")
@Data
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User owner;

    private String name;
    private String slug;
    private String logoUrl;
    private String description;
    private String city;
    private String phone;

    private Boolean verified = false;

    private Instant createdAt;
    private Instant updatedAt;
}
