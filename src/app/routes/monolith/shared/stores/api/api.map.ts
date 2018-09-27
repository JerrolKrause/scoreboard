/**
Adding a new endpoints:
1. Create a new property in the ApiProps enum in api.actions.ts
2. Create a new entry in this api.map. Add endpoint, store property and entity
3. Add the end data location in the main store state in api.store.service.ts
*/

import { AppStore } from '$shared';
import { ApiProps } from './api.props';
import { createEntity } from '$api';
import { Models } from '$models';

export const ApiMap: AppStore.ApiMapping = {
  // Users Example
  users: {
    endpoint: '//jsonplaceholder.typicode.com/users',
    storeProperty: ApiProps.users,
    entity: createEntity<Models.User>('id'),
  },
};
