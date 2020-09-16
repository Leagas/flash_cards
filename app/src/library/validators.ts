export const isRequired = (value: string): string => {
	if (value !== null && value !== undefined) {
		return ""
	}

	return "This field is required"
}

export const minLength = (value: string): string => {
	if (value.length > 0) {
		return ""
	}

	return "Does not meet the minimum length"
}
