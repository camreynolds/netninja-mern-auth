import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState('')
    const { dispatch } = useAuthContext()

    const signup = async (email,password) => {
        const response = await fetch('api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({email,password})
        })
    
        const json = await response.json()
    
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
    
        if(response.ok){
            // save the user to localstorage
            localStorage.setItem('user', JSON.stringify(json))
    
            // update the authContext
            dispatch({type: 'LOGIN', payload: json})
    
            // set isLoading to false
            setIsLoading(false)
        }
    }
    
    return {signup, error, isLoading}
}