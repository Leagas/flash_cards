type Logger = {
	[key: string]: (msg: string) => boolean
}

const out = (out: string) => process.stdout.write(out)

export const Log: Logger = {
	ok: (msg) => out(`\x1b[32m${msg}`),
	info: (msg) => out(`\x1b[36m${msg}`),
	warn: (msg) => out(`\x1b[33m${msg}`),
	error: (msg) => out(`\x1b[31m${msg}`),
}
