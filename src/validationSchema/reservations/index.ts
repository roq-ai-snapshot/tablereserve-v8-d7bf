import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_time: yup.date().required(),
  number_of_guests: yup.number().integer().required(),
  preferences: yup.string(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
