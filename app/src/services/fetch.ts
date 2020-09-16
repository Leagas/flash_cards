const getPayload = (config: any, payload: any) => {
	if (config["Content-Type"] === "multipart/form-data") {
		return payload
	}

	return JSON.stringify(payload)
}

export const asyncRequest = async (
	url: string,
	payload: any | undefined = undefined,
	method: string = "GET",
	headers: any = {}
): Promise<any> => {
	const config: any = {
		method: method,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
	}

	if (payload) {
		config.body = getPayload(config, payload)
	}

	const response = await fetch(`http://localhost:3000/${url}`, config)

	if (!response.ok) {
		throw Error(response.statusText)
	}

	try {
		return await response.json()
	} catch (err) {
		throw Error(err)
	}
}
