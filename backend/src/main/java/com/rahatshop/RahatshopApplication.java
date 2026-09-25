package com.rahatshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * RahatShop‑backend əsas tətbiq sinifi.
 * Bu sinif Spring Boot‑un işə salınmasını təmin edir.
 */
@SpringBootApplication
public class RahatshopApplication {
    public static void main(String[] args) {
        // Tətbiqi işə salırıq
        SpringApplication.run(RahatshopApplication.class, args);
    }
}
