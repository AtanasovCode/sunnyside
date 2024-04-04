import heroImageDesktop from '../assets/desktop/image-header.jpg';

const Hero = () => {
    return (
        <div className="w-full h-[100vh] relative overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0">
                <img src={heroImageDesktop} alt="hero iamge desktop" />
            </div>
        </div>
    );
}

export default Hero;