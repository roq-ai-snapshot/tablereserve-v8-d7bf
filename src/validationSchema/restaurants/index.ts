import * as yup from 'yup';
import { reservationValidationSchema } from 'validationSchema/reservations';
import { waiterValidationSchema } from 'validationSchema/waiters';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  table_capacity: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
  reservation: yup.array().of(reservationValidationSchema),
  waiter: yup.array().of(waiterValidationSchema),
});
