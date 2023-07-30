import useFetch from './hooks/useFetch';

interface data<T> {
    data: T;
}

export default async function getInfo<T>(query: string) {
    const result = await useFetch<data<T>>(
        'https://beta.pokeapi.co/graphql/v1beta',
        'POST',
        { query: query }
    );
    return result.data;
}
