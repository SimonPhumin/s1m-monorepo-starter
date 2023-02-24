import * as fs from 'fs';
interface CommandResult {
	success: string;
	error: string;
}

export const readJsonFile = (path: string) => {
	const data: Buffer = fs.readFileSync(path);

	return JSON.parse(data.toString());
};

export const createResponse = (code: number, msg: string) => ({
	status: {
		code,
		msg
	}
});
