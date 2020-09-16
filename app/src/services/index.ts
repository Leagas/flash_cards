import { Topic } from '../views/admin/model';
import { Fetch } from './fetch';

export const services = {
	fetchTopics: async (): Promise<Topic[]> => await Fetch("card/topics")
}
