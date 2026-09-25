INSERT INTO roles (name) VALUES ('CUSTOMER'), ('SELLER'), ('MODERATOR'), ('ADMIN');

INSERT INTO categories (name, slug, created_at) VALUES
('Elektronika', 'elektronika', CURRENT_TIMESTAMP),
('Telefonlar', 'telefonlar', CURRENT_TIMESTAMP),
('Kompüter', 'komputer', CURRENT_TIMESTAMP),
('Avtomobil', 'avtomobil', CURRENT_TIMESTAMP),
('Ev və bağ', 'ev-ve-bag', CURRENT_TIMESTAMP),
('Moda', 'moda', CURRENT_TIMESTAMP),
('Gözəllik', 'gozellik', CURRENT_TIMESTAMP),
('Uşaq', 'usaq', CURRENT_TIMESTAMP),
('İdman', 'idman', CURRENT_TIMESTAMP),
('Gaming', 'gaming', CURRENT_TIMESTAMP),
('Xidmətlər', 'xidmetler', CURRENT_TIMESTAMP),
('Digər', 'diger', CURRENT_TIMESTAMP);

INSERT INTO users (email, password_hash, created_at) VALUES
('customer@rahatshop.local', '$2a$10$wY1M3x0n7i0y2zV5VnK9VuJz9JpQ3gH7Y3aY7iY3aY7iY3aY7iY3a', CURRENT_TIMESTAMP), -- Dummy hash for Password123
('seller@rahatshop.local', '$2a$10$wY1M3x0n7i0y2zV5VnK9VuJz9JpQ3gH7Y3aY7iY3aY7iY3aY7iY3a', CURRENT_TIMESTAMP),
('admin@rahatshop.local', '$2a$10$wY1M3x0n7i0y2zV5VnK9VuJz9JpQ3gH7Y3aY7iY3aY7iY3aY7iY3a', CURRENT_TIMESTAMP);

INSERT INTO user_roles (user_id, role_id) VALUES
((SELECT id FROM users WHERE email = 'customer@rahatshop.local'), (SELECT id FROM roles WHERE name = 'CUSTOMER')),
((SELECT id FROM users WHERE email = 'seller@rahatshop.local'), (SELECT id FROM roles WHERE name = 'SELLER')),
((SELECT id FROM users WHERE email = 'admin@rahatshop.local'), (SELECT id FROM roles WHERE name = 'ADMIN'));

INSERT INTO stores (owner_id, name, slug, city, created_at) VALUES
((SELECT id FROM users WHERE email = 'seller@rahatshop.local'), 'Nicat Electronics', 'nicat-electronics', 'Bakı', CURRENT_TIMESTAMP),
((SELECT id FROM users WHERE email = 'seller@rahatshop.local'), 'Bakı Tech', 'baki-tech', 'Bakı', CURRENT_TIMESTAMP);

INSERT INTO products (seller_id, store_id, category_id, title, slug, price, currency, city, condition, sale_mode, status, created_at) VALUES
((SELECT id FROM users WHERE email = 'seller@rahatshop.local'), (SELECT id FROM stores WHERE slug = 'nicat-electronics'), (SELECT id FROM categories WHERE slug = 'telefonlar'), 'iPhone 13 Pro', 'iphone-13-pro', 1500.00, 'AZN', 'Bakı', 'SECOND_HAND', 'CONTACT', 'ACTIVE', CURRENT_TIMESTAMP),
((SELECT id FROM users WHERE email = 'seller@rahatshop.local'), (SELECT id FROM stores WHERE slug = 'baki-tech'), (SELECT id FROM categories WHERE slug = 'komputer'), 'MacBook Air M1', 'macbook-air-m1', 1800.00, 'AZN', 'Bakı', 'SECOND_HAND', 'CONTACT', 'ACTIVE', CURRENT_TIMESTAMP),
((SELECT id FROM users WHERE email = 'seller@rahatshop.local'), (SELECT id FROM stores WHERE slug = 'elektronika'), (SELECT id FROM categories WHERE slug = 'elektronika'), 'Samsung TV 4K', 'samsung-tv-4k', 900.00, 'AZN', 'Bakı', 'NEW', 'ONLINE', 'ACTIVE', CURRENT_TIMESTAMP),
((SELECT id FROM users WHERE email = 'seller@rahatshop.local'), (SELECT id FROM stores WHERE slug = 'nicat-electronics'), (SELECT id FROM categories WHERE slug = 'gaming'), 'PS5 Console', 'ps5-console', 1200.00, 'AZN', 'Bakı', 'NEW', 'ONLINE', 'ACTIVE', CURRENT_TIMESTAMP),
((SELECT id FROM users WHERE email = 'seller@rahatshop.local'), (SELECT id FROM stores WHERE slug = 'baki-tech'), (SELECT id FROM categories WHERE slug = 'telefonlar'), 'Samsung S22 Ultra', 'samsung-s22-ultra', 1400.00, 'AZN', 'Bakı', 'SECOND_HAND', 'CONTACT', 'ACTIVE', CURRENT_TIMESTAMP);

INSERT INTO promotion_packages (name, price, duration_days, priority, active, created_at) VALUES
('Basic', 1.00, 7, 1, TRUE, CURRENT_TIMESTAMP),
('VIP', 2.00, 7, 2, TRUE, CURRENT_TIMESTAMP),
('TOP', 5.00, 3, 3, TRUE, CURRENT_TIMESTAMP),
('Premium', 10.00, 7, 4, TRUE, CURRENT_TIMESTAMP);
