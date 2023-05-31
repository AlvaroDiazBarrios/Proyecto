import { Gallery } from "./Gallery"
import { Header } from "./Header"


export const HomePage = () => {


    return (
        <div className="flex flex-column" >
            <Header />
            <div className="flex m-2" >
                <Gallery />
            </div>
        </div>
    )
}