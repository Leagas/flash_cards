type Database = {
	query: () => void
}

export const db: Database = {} as  Database

export function init_db() {
	db.query = () => {

	}
}
