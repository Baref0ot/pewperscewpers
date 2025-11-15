
export interface ServiceItem {
  is_addon: any;
  price: any;
  id: number;
  name: string;
  description: string;
  icon?: string;        // e.g., material icon name or URL
  priceFrom?: number;   // optional for “starting at”
  rating?: number;      // 0–5
  featured?: boolean;
  image_url?: string;
}
