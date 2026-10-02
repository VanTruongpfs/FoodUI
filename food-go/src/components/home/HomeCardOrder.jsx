function OrderCard({ icon, title, description }) {
    return (
        <button type="button"
            className="btn order-card w-100 h-100 text-start d-flex flex-column align-items-start gap-3">
            <span className="option-icon" aria-hidden="true">
                {icon}
            </span>
            <strong className="order-title">
                {title}
            </strong>
            <span className="order-description">
                {description}
            </span>
        </button>
    );
}

export default OrderCard;