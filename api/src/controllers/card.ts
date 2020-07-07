import { card } from "../dao"

export function addController(): string {
	return card.addCard();
}
