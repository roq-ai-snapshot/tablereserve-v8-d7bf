import { ReservationInterface } from 'interfaces/reservation';
import { WaiterInterface } from 'interfaces/waiter';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';

export interface RestaurantInterface {
  id?: string;
  name: string;
  user_id: string;
  organization_id: string;
  table_capacity: number;
  created_at?: Date;
  updated_at?: Date;
  reservation?: ReservationInterface[];
  waiter?: WaiterInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    reservation?: number;
    waiter?: number;
  };
}
