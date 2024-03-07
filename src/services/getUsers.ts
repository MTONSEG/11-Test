import { instance } from './axios.config'

export const getUsers = async <T>(query = undefined) => {
	const currentQuery = query ? `?${query}` : ''

	try {
		const response = await instance.get<T>(`/users${currentQuery}`)

		return response.data
	} catch (error) {
		console.error('Error fetching users:', error)
	}
}
