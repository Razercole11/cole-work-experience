import { ZodError } from 'zod';

export function parseError(error: ZodError): Record<string, string>;
export function parseError(error: unknown): string;

/**
 * Parses an error and returns the error as a string
 *
 * @export
 * @param {unknown} error
 * @returns {string}
 *
 * @example
 * try {
 *  throw new Error('Test');
 * } catch (error) {
 *  const parsedError = parseError(error);
 *  console.log(parsedError); // Test
 * }
 */
export default function parseError(error: unknown): string | Record<string, string> {
	if (typeof error === 'string') {
		return error;
	}

	if (error instanceof ZodError) {
		const fieldErrors: Record<string, string> = {};
		error.errors.forEach((error) => {
			const path = error.path;
			const fieldKey = path[0];

			fieldErrors[fieldKey] = error.message;
		});
		return fieldErrors;
	}

	if (error instanceof Error) {
		return error.message;
	}

	return 'An error has occurred';
}
