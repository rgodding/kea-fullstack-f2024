import React, { useEffect } from 'react'
import apiClient from '../services/api-client'

interface Response<T> {
    count: number
    results: T[]
}
const useData = <T>(path: string) => {
    const [data, setData] = React.useState<T[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<Error | null>(null)

    useEffect(() => {
        apiClient
        .get<Response<T>>(path)
        .then((res) => setData(res.data.results))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [path]);
    
    return { data, loading, error }
}
export default useData