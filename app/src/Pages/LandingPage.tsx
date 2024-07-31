import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"




const LandingPage: React.FC = () => {

    return (
        <>
        <div className="flex items-center justify-center min-h-screen">
        <Link to='/home'>
        <Button>Explore More !</Button>
        </Link>
         
        </div>
        
        </>
    )
}
export default LandingPage