import { useMediaQuery } from "@mui/material"
import Navbar from "./Navbar"
import bgHeroMobile from "../assets/images/image-hero-mobile.jpg"
import bgHeroDesktop from "../assets/images/image-hero-desktop.jpg"

export default function Header() {
    // media query for background hero image
    const isHeaderMobile = useMediaQuery('(max-width: 767px)');
    
    return (
        <div className="bg-hero-container">
            <img 
                src={(isHeaderMobile ? bgHeroMobile : bgHeroDesktop)} 
                alt="hero" 
                className="bg-hero-img" 
            />
            <Navbar />
        </div>
    )
}