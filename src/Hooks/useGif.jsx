import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const useGif = () => {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchData(tag) {
        // Check if API key is configured
        if (!API_KEY || API_KEY === 'your_api_key_here') {
            setError('Giphy API key not configured. Please add your API key to the .env file.')
            setLoading(false)
            return
        }

        setLoading(true)
        setError('')
        
        try {
            const response = await axios.get(tag ? `${url}&tag=${tag}` : url)
            const imageSource = response.data.data.images.downsized_large.url
            setGif(imageSource)
        } catch (err) {
            console.error('Error fetching GIF:', err)
            if (err.response?.status === 401) {
                setError('Invalid API key. Please check your Giphy API key in the .env file.')
            } else if (err.response?.status === 429) {
                setError('Rate limit exceeded. Please try again later.')
            } else {
                setError('Failed to fetch GIF. Please try again.')
            }
            // Set a placeholder image or keep the previous image
            setGif('')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData('car')
    }, [])

    return { gif, loading, fetchData, error }
}

export default useGif
