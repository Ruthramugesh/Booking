import { top } from "./passenger"

export default function Booking(props: top) {
    return (
        <div>
            <nav className="navbar navbar-expand-xl" style={{ backgroundColor: "white" }}>

                <div className="container-fluid" style={{ marginLeft: "0px", marginRight: "-2.5rem", marginTop: "-1px" }}>
                    {/* <a className="navbar-brand" */}
                    <img src={props.book.booklogo} alt="logo" style={{ height: "40px", marginLeft: "30px", marginTop: "20px" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav navbar-nav-scroll">

                            <div className="collapse navbar-collapse" style={{ fontWeight: "500", marginLeft: "30px", marginTop: "20px", }}>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {props.book.listing}
                                    </a>
                                </li>
                                <li className="nav-item dropdown" style={{ marginLeft: "10px" }}>
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {props.book.pages}
                                    </a>
                                </li>
                                <li className="nav-item dropdown" style={{ marginLeft: "10px" }}>
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {props.book.account}
                                    </a>
                                </li>
                                <li className="nav-item" style={{ marginLeft: "10px" }}>
                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {props.book.contact}
                                    </a>
                                </li>

                            </div>

                        </ul>
                        <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto" style={{ marginTop: "20px", marginRight: "2rem" }}>
                            <i className="fa fa-bell-o" style={{ fontSize: "21px", marginRight: "20px" }}></i>
                            <a className="avatar avatar-xs p-0" href="#">
                                <img className="avatar-img rounded-circle" src={props.book.girllogo} alt="avatar" style={{ height: "35px" }} /></a>
                            <li className="nav-item ms-3 d-none d-sm-block" >
                                <a className="btn btn-sm btn-primary-soft mb-0" href="#" style={{ fontWeight: "600" }}>
                                    <i className="bi bi-lightning-charge"></i>{props.book.upgrade}</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
} 