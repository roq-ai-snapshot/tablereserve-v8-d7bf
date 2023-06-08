const mapping: Record<string, string> = {
  organizations: 'organization',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
  waiters: 'waiter',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
