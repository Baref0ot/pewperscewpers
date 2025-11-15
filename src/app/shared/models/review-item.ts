export interface ReviewItem {
  id: string;
  customer_name: string;
  rating: number;          // 1–5
  comment: string;
  createdAt: string;       // ISO
  image_url?: string;
  serviceId?: string;
}
