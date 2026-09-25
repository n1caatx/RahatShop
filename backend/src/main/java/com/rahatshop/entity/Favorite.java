package com.rahatshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Entity
@Table(name="favorites", uniqueConstraints=@UniqueConstraint(columnNames={"user_id","product_id"}))
@Data
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Product product;

    private Instant createdAt;
}
