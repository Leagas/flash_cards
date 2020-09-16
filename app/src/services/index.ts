import { Card, Topic } from '../views/admin/model';
import { asyncRequest } from './fetch';

export const services = {
	fetchTopics: async (): Promise<Topic[]> => await asyncRequest("card/topics"),
	createCard: async (payload: Card): Promise<string> => await asyncRequest("card/create", payload, "POST")
}
