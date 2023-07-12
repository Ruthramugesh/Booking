import { list } from "./passenger";

export default function Details(props: list) {
    return (
        <div>
            <div className="card" style={{ marginLeft: "2.7rem", marginRight: "2.7rem", marginTop: "3rem", borderRadius: "1rem" }}>
                <div className="card-body">
                    <div className="d-sm-flex align-items-center">
                        <img className="avatar-img rounded-circle" src="https://booking.webestica.com/assets/images/avatar/01.jpg" alt="logo" style={{ height: "5rem" }} />
                        <h4 style={{ marginLeft: "1rem", fontSize: "2rem", fontWeight: "700" }}><span style={{fontWeight: "400", fontSize: "1.75rem"}}>{props.group.hi}</span>{props.group.name}</h4>
                        <a href="#" className="btn btn-sm btn-primary-soft mb-0 ms-auto flex-shrink-0" style={{fontWeight: "600"}}><i className="bi bi-plus-lg fa-fw me-2"></i>{props.group.listing}</a>
                    </div>
                    <div className="offcanvas-body p-3 p-xl-0">
                        <div className="navbar navbar-expand-xl">
                            <ul className="navbar-nav navbar-offcanvas-menu" style={{marginLeft: "10px", marginTop: "1rem", fontWeight: "500"}}>

                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{paddingRight: "2rem"}}><i className="bi bi-house-door fa-fw me-1"></i>{props.group.dashboard}</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{paddingRight: "2rem"}}><i className="bi bi-journals fa-fw me-1"></i>{props.group.listings}</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{paddingRight: "2rem"}}><i className="bi bi-bookmark-heart fa-fw me-1"></i>{props.group.booking}</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{paddingRight: "2rem"}}><i className="bi bi-bell fa-fw me-1"></i>{props.group.activities}</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{paddingRight: "2rem"}}><i className="bi bi-graph-up-arrow fa-fw me-1"></i>{props.group.earnings}</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{paddingRight: "2rem"}}><i className="bi bi-star fa-fw me-1"></i>{props.group.reviews}</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{paddingRight: "2rem"}}><i className="bi bi-gear fa-fw me-1"></i>{props.group.settings}</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdoanMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="bi bi-list-ul fa-fw me-1"></i>{props.group.dropdown}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}