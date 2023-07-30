type methodTypes = 'POST' | 'GET' | 'PUT' | 'DELETE';

export default async function useFetch<T>(
    url: string,
    method: methodTypes,
    body: { query: string }
) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {},
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const result: T = await response.json();
            return result;
        } else {
            console.error('HTTP Error:', response.status);
            return null as T;
        }
    } catch (err) {
        console.error('An error occurred:', err);
        return null as T;
    }
}
