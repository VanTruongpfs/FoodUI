import HomeHeader from "../components/home/HomeHeader.jsx";
import HomeHero from "../components/home/HomeHero.jsx";
import OrderCard from "../components/home/HomeCardOrder.jsx";
import HomeFooter from "../components/home/HomeFooter.jsx";


function HomePage() {
    return (
        <main className="home-screen mx-auto">
            <HomeHeader />

            <HomeHero />

            <section
                className="row g-4"
                aria-label="Bestellart auswählen"
            >
                <div className="col-12 col-sm-6">
                    <OrderCard
                        icon={<i className="fa-solid fa-utensils" aria-hidden="true" />}
                        title="Hier essen"
                        description="Am Platz genießen"
                    />
                </div>

                <div className="col-12 col-sm-6">
                    <OrderCard
                        icon={<i className="bi bi-bag"></i>}
                        title="Mitnehmen"
                        description="Für unterwegs"
                    />
                </div>
            </section>

            <HomeFooter />
        </main>
    );
}

export default HomePage;
