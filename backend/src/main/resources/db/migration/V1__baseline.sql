CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP
);

CREATE TABLE roles (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE user_roles (
    user_id BIGINT REFERENCES users(id),
    role_id BIGINT REFERENCES roles(id),
    PRIMARY KEY (user_id, role_id)
);

CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    parent_id BIGINT REFERENCES categories(id),
    created_at TIMESTAMP
);

CREATE TABLE stores (
    id BIGSERIAL PRIMARY KEY,
    owner_id BIGINT REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    logo_url VARCHAR(255),
    description TEXT,
    city VARCHAR(255),
    phone VARCHAR(50),
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    seller_id BIGINT REFERENCES users(id),
    store_id BIGINT REFERENCES stores(id),
    category_id BIGINT REFERENCES categories(id),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'AZN',
    condition VARCHAR(50),
    city VARCHAR(255),
    sale_mode VARCHAR(50),
    status VARCHAR(50),
    views_count INT DEFAULT 0,
    favorites_count INT DEFAULT 0,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE product_images (
    id BIGSERIAL PRIMARY KEY,
    product_id BIGINT REFERENCES products(id),
    url VARCHAR(500) NOT NULL,
    order_idx INT
);

CREATE TABLE favorites (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    product_id BIGINT REFERENCES products(id),
    created_at TIMESTAMP,
    UNIQUE (user_id, product_id)
);

CREATE TABLE promotion_packages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    duration_days INT NOT NULL,
    priority INT NOT NULL,
    description TEXT,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE promotions (
    id BIGSERIAL PRIMARY KEY,
    product_id BIGINT REFERENCES products(id),
    seller_id BIGINT REFERENCES users(id),
    promotion_package_id BIGINT REFERENCES promotion_packages(id),
    starts_at TIMESTAMP,
    expires_at TIMESTAMP,
    status VARCHAR(50),
    promotion_score INT,
    created_at TIMESTAMP
);

CREATE TABLE conversations (
    id BIGSERIAL PRIMARY KEY,
    buyer_id BIGINT REFERENCES users(id),
    seller_id BIGINT REFERENCES users(id),
    product_id BIGINT REFERENCES products(id),
    created_at TIMESTAMP
);

CREATE TABLE messages (
    id BIGSERIAL PRIMARY KEY,
    conversation_id BIGINT REFERENCES conversations(id),
    sender_id BIGINT REFERENCES users(id),
    content TEXT NOT NULL,
    timestamp TIMESTAMP,
    read BOOLEAN DEFAULT FALSE
);

CREATE TABLE notifications (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    type VARCHAR(50),
    content TEXT,
    link VARCHAR(255),
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP
);

CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    buyer_id BIGINT REFERENCES users(id),
    store_id BIGINT REFERENCES stores(id),
    product_id BIGINT REFERENCES products(id),
    rating INT,
    comment TEXT,
    created_at TIMESTAMP
);

CREATE TABLE reports (
    id BIGSERIAL PRIMARY KEY,
    reporter_id BIGINT REFERENCES users(id),
    target_type VARCHAR(50),
    target_id BIGINT,
    reason TEXT,
    status VARCHAR(50),
    created_at TIMESTAMP
);

CREATE TABLE admin_actions (
    id BIGSERIAL PRIMARY KEY,
    admin_id BIGINT REFERENCES users(id),
    action VARCHAR(255),
    target_type VARCHAR(50),
    target_id BIGINT,
    description TEXT,
    timestamp TIMESTAMP
);
