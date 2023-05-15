import { useLocation } from "react-router-dom"

export const MainView = () => {
    const location = useLocation()
    const user = location.state

    return (
        <>
            <h1>Hola</h1>
            <span>
                username - {user.username}
            </span>
        </>

    )
}