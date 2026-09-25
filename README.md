# RahatShop

**Axtar. Tap. Al. Sat.**

RahatShop – Azərbaycanda sadə, sürətli və etibarlı marketplace platforması.

## Texnologiyalar

| Komponent | Texnologiya |
|-----------|-------------|
| Backend | Java 21, Spring Boot 3.2, Spring Security, JJWT, Flyway |
| Frontend | Next.js 14, TypeScript, TailwindCSS, React 18 |
| Verilənlər bazası | PostgreSQL 16 |
| Konteyner | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Test | JUnit 5, Mockito, Jest, React Testing Library |

## Başlamaq üçün

### Tələblər
- Docker və Docker Compose
- Java 21 (backend‑i lokal işlətmək üçün)
- Node.js 20 (frontend‑i lokal işlətmək üçün)
- PostgreSQL 16 (Docker‑siz istifadə üçün)

### Docker ilə işə salma (tövsiyə olunur)

```bash
cd docker
docker compose up -d --build
```

Xidmətlər:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8080/api
- **PostgreSQL:** localhost:5432

### Lokal inkişaf

**Backend:**
```bash
cd backend
./mvnw spring-boot:run
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Test hesabları (yalnız inkişaf üçün)

| Hesab | E‑mail | Şifrə | Rol |
|-------|--------|--------|-----|
| Müştəri | customer@rahatshop.local | Password123 | CUSTOMER |
| Satıcı | seller@rahatshop.local | Password123 | SELLER |
| Admin | admin@rahatshop.local | Password123 | ADMIN |

> ⚠️ Bu hesablar yalnız inkişaf mühiti üçündür. Produksiya mühitində istifadə etməyin.

## Ətraf mühit dəyişənləri

`.env.example` faylını `.env` olaraq kopyalayın və dəyərləri tənzimləyin:

```bash
cp .env.example .env
```

| Dəyişən | Açıqlama | Default |
|---------|----------|---------|
| POSTGRES_DB | Verilənlər bazası adı | rahatshop |
| POSTGRES_USER | DB istifadəçi adı | rahatshop_user |
| POSTGRES_PASSWORD | DB şifrəsi | 2345 |
| JWT_SECRET | JWT imzalama açarı | (dəyişdirin) |
| BACKEND_PORT | Backend portu | 8080 |
| FRONTEND_PORT | Frontend portu | 3000 |

## API sənədləri

Əsas endpoint‑lər:

```
POST   /api/auth/register     – Qeydiyyat
POST   /api/auth/login        – Giriş
GET    /api/categories         – Kateqoriyalar
GET    /api/products           – Məhsullar (pagination, filter)
GET    /api/products/{slug}    – Məhsul detalı
POST   /api/products           – Məhsul yarat (auth)
GET    /api/stores/{slug}      – Mağaza detalı
POST   /api/stores             – Mağaza yarat (auth)
POST   /api/favorites/{id}     – Favoritə əlavə et
GET    /api/promotions/packages – Promosyon paketləri
GET    /api/admin/dashboard     – Admin panel (ADMIN role)
```

## Layihə strukturu

```
RahatShop/
├─ backend/          # Spring Boot API
├─ frontend/         # Next.js UI
├─ docker/           # Docker Compose
├─ .github/workflows/ # CI/CD
└─ docs/             # Sənədlər
```

## Lisenziya

Bu layihə özəl (private) repodur. Bütün hüquqlar qorunur.

---

© 2024 RahatShop
