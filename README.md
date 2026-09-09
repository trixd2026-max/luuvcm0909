# luuvcm0909 — Bản lưu Vườn Của Mít (09/09/2026)

Đây là **bản sao lưu đầy đủ** của repository gốc [vuoncuamit](https://github.com/trixd2026-max/vuoncuamit).

| Mục | Link |
|-----|------|
| **Repo gốc** | https://github.com/trixd2026-max/vuoncuamit |
| **Web app live** | https://vuoncuamit.vercel.app |
| **Vercel gốc** | https://vercel.com/trixd2026-9658s-projects/vuoncuamit |
| **Repo bản lưu này** | https://github.com/trixd2026-max/luuvcm0909 |

Commit hiện tại trùng với `main` của repo gốc (SHA `3555415`).

---

## Deploy bản lưu lên Vercel (1–2 phút)

1. Mở [Vercel Dashboard](https://vercel.com/dashboard) → **Add New… → Project**
2. Import repository **`trixd2026-max/luuvcm0909`**
3. **Project Name**: `luuvcm0909`
4. Framework Preset: để Vercel tự detect (Vite / TanStack Start)
5. Build Command: `npm run build`
6. Nhấn **Deploy**

Sau khi xong bạn sẽ có:
`https://luuvcm0909.vercel.app`

### Biến môi trường

App **không bắt buộc** `.env` để chạy cơ bản. Cấu hình Google Sheet + webhook Apps Script được lưu trên trình duyệt qua trang `/quan-ly`.

---

## Tính năng chính (giống bản gốc)

- Cửa hàng, đặt giỏ trái cây, tráp cưới hỏi, hoa viếng
- Giỏ hàng + thanh toán, tra cứu đơn
- Trang quản lý `/quan-ly` (PIN mặc định: `662166`)
- Đồng bộ sản phẩm & đơn hàng qua Google Sheet + Apps Script

## Công nghệ

React 19 · TanStack Router/Start · Tailwind CSS 4 · Radix UI · Zustand · Google Sheet

## Chạy local

```bash
git clone https://github.com/trixd2026-max/luuvcm0909.git
cd luuvcm0909
npm install
npm run dev          # http://0.0.0.0:8080
```

```bash
npm run build
npm run typecheck
npm run lint
```

## Cấu hình quan trọng

- **PIN admin** (`/quan-ly`): `662166` (nên đổi sau lần đầu)
- Ảnh sản phẩm: `public/products/`
- Apps Script mẫu: `public/apps-script.gs`
- Cache header ảnh: đã có trong `vercel.json`

## Liên hệ shop

- Zalo / ĐT: **0345 662 166** (Chị Hằng)
- ĐT 2: 0942 223 984
- Facebook: https://www.facebook.com/profile.php?id=61579721713679
- Địa chỉ: Xóm 1B, Thôn Phụng Sơn, xã Tuy Phước Đông, tỉnh Gia Lai
