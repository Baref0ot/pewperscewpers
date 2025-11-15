// app/features/customer/customer.service.ts
import { Injectable } from '@angular/core';
import { ReviewItem } from '../../shared/models/review-item';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  /**
   * Returns a small set of highlighted reviews/testimonials.
   * Mocked for now; replace with HttpClient later.
   */
  async getFeaturedReviews(): Promise<ReviewItem[]> {
    const reviews: ReviewItem[] = [
      { id: 'r1', customer_name: 'Alex P.', rating: 5, comment: 'Incredible attention to detail!', createdAt: new Date().toISOString() },
      { id: 'r2', customer_name: 'Jamie L.', rating: 4, comment: 'On time and very friendly.',     createdAt: new Date().toISOString() },
      { id: 'r3', customer_name: 'Taylor S.', rating: 5, comment: 'My house has never looked better!', createdAt: new Date().toISOString() }
    ];
    return Promise.resolve(reviews);
  }
}