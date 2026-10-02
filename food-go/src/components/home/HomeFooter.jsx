function HomeFooter() {
    return (
        <footer className="home-footer d-flex align-items-center justify-content-between flex-wrap gap-3">
            <button type="button" className="btn btn-outline-light rounded-pill footer-button"
            ><i class="bi bi-person-standing"></i> Barrierefrei
            </button>

            <p className="footer-message mb-0">
                Tippe auf eine Auswahl, um zu starten.
            </p>

            <button type="button" className="btn btn-outline-light rounded-pill footer-button">
                <i class="bi bi-exclamation-circle"></i> Allergene
            </button>
        </footer>
    );
}

export default HomeFooter;