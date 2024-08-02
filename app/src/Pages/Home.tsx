import { Button } from "@/components/ui/button"
import AccordionComp from "@/Custom-Components/AccordionComp"
import Card from "@/Custom-Components/Card"
import Navbar from "@/Custom-Components/Navbar"
import { Link } from "react-router-dom"
 

 















 const Home: React.FC = () => {

    return (
        <>
        <Navbar/>
        <Card/>
        <div className=" flex items-center justify-center min-h-screen " >
            <Link to='/stress-query'>
            <Button> Feeling Stressed ! </Button>
            </Link>
           
        </div>
        <AccordionComp/>
        </>
    )
 }
 export default Home