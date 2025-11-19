
export interface ChatMessage {
  id: string;
  from_user_id: string;
  to_user_id?: string | null;
  channel_id?: string | null;
  body: string;
  sent_at: string; // ISO string
  read?: boolean;
}
