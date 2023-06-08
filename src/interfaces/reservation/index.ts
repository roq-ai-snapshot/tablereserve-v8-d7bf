import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface ReservationInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  reservation_time: Date;
  number_of_guests: number;
  preferences?: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}
