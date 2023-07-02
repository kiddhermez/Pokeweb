export default async function getInfo<T>(url: string) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {},
        });

        if (response.ok) {
            const result: T = await response.json();
            return result;
        } else {
            // Handle specific HTTP error codes here
            console.error('HTTP Error:', response.status);
        }
    } catch (err) {
        console.error('An error occurred:', err);
    }
}
