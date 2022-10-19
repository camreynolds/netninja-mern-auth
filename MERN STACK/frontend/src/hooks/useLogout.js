import { useAuthContext } from './useAuthContext'
import { useWorkoutContext } from './useWorkoutsContext'

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch: workoutsDispatch} = useWorkoutContext()
    

    const logout = () => {
        // remove user from localstorage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})

        // dispatch workout action to clean global workout state
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}
};