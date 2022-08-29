import { starshipsApi } from 'redux/starships/query';

export const rootQueryMiddleware = [starshipsApi.middleware];
