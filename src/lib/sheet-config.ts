import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SheetConfig = {
  sheetId: string;
  csvUrl: string;
  gid: string;
  sheetName: string;
  webhookUrl: string;
  /** Tab đơn hàng trên Sheet (thường cùng file sản phẩm) */
  ordersSheetName: string;
  /**
   * Sheet ID riêng chỉ khi đơn nằm file khác.
   * Để trống = dùng sheetId (sản phẩm) — đúng với thực tế hiện tại.
   */
  ordersSheetId: string;
  /** Sheet ID ghi snapshot báo cáo (có thể khác file sản phẩm) */
  reportSheetId: string;
  reportWebhookUrl: string;
};

/** Sheet sản phẩm + tab DonHang — bản lưu độc lập (09/09/2026) */
const PRODUCT_SHEET_ID = "1aGIUXvT6ar5Qz98v4WZQDXJeY-O47ZEfttRa4uBb1sg";
/** Sheet báo cáo riêng — bản lưu độc lập */
const REPORT_SHEET_ID = "16l7cPxO1Hia8BqxWORv_1eD_djo1BpKyMlWMAv35A5Q";
const REPORT_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbz7NwM3e7-hl7C_EDxi1pYx_ILvCfwcBFwHhK9avLve-aPgilA7sJAKaCYmEdt1VCvi/exec";

const empty: SheetConfig = {
  sheetId: PRODUCT_SHEET_ID,
  csvUrl: "",
  gid: "1069887904",
  sheetName: "san-pham-vuon-cua-mit",
  webhookUrl: REPORT_WEBHOOK,
  ordersSheetName: "DonHang",
  ordersSheetId: "", // trống → đọc đơn từ sheetId (sản phẩm)
  reportSheetId: REPORT_SHEET_ID,
  reportWebhookUrl: REPORT_WEBHOOK,
};

type State = SheetConfig & {
  setConfig: (patch: Partial<SheetConfig>) => void;
  connected: () => boolean;
  /** Sheet ID dùng để đọc đơn */
  ordersId: () => string;
};

export const useSheetConfig = create<State>()(
  persist(
    (set, get) => ({
      ...empty,
      setConfig: (patch) => set(patch),
      connected: () => Boolean(get().sheetId.trim() || get().csvUrl.trim()),
      ordersId: () => {
        const o = get().ordersSheetId.trim();
        if (o) return o;
        return get().sheetId.trim();
      },
    }),
    { name: "vcm-sheet" },
  ),
);

export { PRODUCT_SHEET_ID, REPORT_SHEET_ID, REPORT_WEBHOOK };
