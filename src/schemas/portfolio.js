import { schema } from 'normalizr';
import { user } from 'schemas/user';

export const portfolio = new schema.Entity('portfolios', {
  user_id: user
});
