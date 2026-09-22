import './Hero.css';

const Hero = (props) => {
    return(
        <div className="hero-container" style={{left:`${props.pos.x}%`, top:`${props.pos.y}%`}}>
            <div className="hero-graphic">
            </div>
        </div>
    )
}

export default Hero;
