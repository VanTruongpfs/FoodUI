import foodImage from "../../assets/bowls.svg";

function HomeHero(){
    return (
        <section aria-labelledby="home-title">
            <h1 id="home-title" className="home-title">
                Frisch
                <br />
                aus dem
                <br />
                Wok.
            </h1>

            <div className="hero-art mx-auto d-flex align-items-center justify-content-center">
                <img src={foodImage} alt="" />
            </div>
        </section>
    );
}
export default HomeHero;
