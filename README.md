# luuvcm0909 — Bản lưu Vườn Của Mít (09/09/2026)

Đây là **bản sao lưu độc lập** của repository gốc [vuoncuamit](https://github.com/trixd2026-max/vuoncuamit).

| Mục | Link |
|-----|------|
| **Repo gốc** | https://github.com/trixd2026-max/vuoncuamit |
| **Web app gốc** | https://vuoncuamit.vercel.app |
| **Repo bản lưu** | https://github.com/trixd2026-max/luuvcm0909 |
| **Web app bản lưu** | https://luuvcm0909-backup.vercel.app |

---

## Cấu hình Sheet độc lập (đã set mặc định trong code)

| Thành phần | Giá trị |
|------------|--------|
| **Sheet sản phẩm** | `1aGIUXvT6ar5Qz98v4WZQDXJeY-O47ZEfttRa4uBb1sg` |
| **Sheet báo cáo** | `16l7cPxO1Hia8BqxWORv_1eD_djo1BpKyMlWMAv35A5Q` |
| **Webhook Apps Script** | `https://script.google.com/macros/s/AKfycbz7NwM3e7-hl7C_EDxi1pYx_ILvCfwcBFwHhK9avLve-aPgilA7sJAKaCYmEdt1VCvi/exec` |
| Tab sản phẩm | `san-pham-vuon-cua-mit` (gid `1069887904`) |
| Tab đơn hàng | `DonHang` |

Cấu hình này **không dùng chung** với bản gốc. Đơn hàng / tồn kho trên bản lưu ghi vào Sheet riêng.

> **Lưu ý trình duyệt:** Nếu bạn đã mở site bản lưu trước khi đổi Sheet, localStorage còn giữ cấu hình cũ. Vào `/quan-ly` → kiểm tra Sheet ID → **Lưu và đồng bộ** (hoặc xóa localStorage domain `luuvcm0909-backup.vercel.app`).

---

## Tính năng

- Cửa hàng, đặt giỏ trái cây, tráp cưới hỏi, hoa viếng
- Giỏ hàng + thanh toán, tra cứu đơn
- Trang quản lý `/quan-ly` (PIN mặc định: `662166`)
- Đồng bộ sản phẩm & đơn hàng qua Google Sheet + Apps Script (Sheet riêng)

## Chạy local

```bash
git clone https://github.com/trixd2026-max/luuvcm0909.git
cd luuvcm0909
npm install
npm run dev          # http://0.0.0.0:8080
```

## Liên hệ shop

- Zalo / ĐT: **0345 662 166** (Chị Hằng)
- ĐT 2: 0942 223 984
- Facebook: https://www.facebook.com/profile.php?id=61579721713679
- Địa chỉ: Xóm 1B, Thôn Phụng Sơn, xã Tuy Phước Đông, tỉnh Gia Lai
