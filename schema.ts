// schema.ts
import {createSchema, table, string, number} from '@rocicorp/zero';

const messages = table('messages')
  .columns({
    id: number(),
    body: string(),
  })
  .primaryKey('id');

export const schema = createSchema({
  tables: [messages],
});

export type Schema = typeof schema;

// schema.ts
import {ANYONE_CAN_DO_ANYTHING, definePermissions} from '@rocicorp/zero';

export const permissions = definePermissions<unknown, Schema>(schema, () => ({
  messages: ANYONE_CAN_DO_ANYTHING,
}));
