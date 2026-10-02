import foodImage from "../../assets/bowls.svg";

function HomeHeader() {
    return (
        <header className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div className="brand d-flex align-items-center gap-3">
                <span className="brand-icon">
                    <img src={foodImage} alt="" />
                </span>

                <span>FoodGo</span>
            </div>

            <nav className="d-flex gap-2" aria-label="Sprache auswählen">
                <button type="button" className="btn language active">
                    DE
                </button>

                <button type="button" className="btn language">
                    EN
                </button>

                <button type="button" className="btn language">
                    中文
                </button>
            </nav>
        </header>
    );
}
export default HomeHeader;
