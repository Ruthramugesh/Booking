import { bot } from "./passenger";

export default function Footer(props: bot) {
    return (
        <div>
            <footer className="bg-dark p-3" style={{marginTop: "3rem"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="text-center text-md-start mb-3 mb-md-0">
                                <img className="h-30px" src={props.foot.image} alt="logo" style={{ height: "30px" }} />
                            </div>
                        </div>

                        <div className="col-md-4" style={{ marginLeft: "-4rem" }}>
                            <div className="text-muted text-primary-hover" style={{marginLeft: "3rem"}}>
                                <span style={{ color: "#adb5bd" }}>{props.foot.year} </span>
                                <a href="#" style={{ color: "#adb5bd", textDecoration: "none", marginRight: "11.5rem" }}>{props.foot.webestica}</a>
                            </div>
                        </div>

                        <div className="col-md-4" style={{marginLeft: "3.5rem"}}>
                            <ul className="list-inline mb-0 text-center text-md-end">
                            <li className="list-inline-item ms-2">
                                    <a href="#"><i className="fa fa-facebook-f circle-icon"></i></a>
                                </li>
                                <li className="list-inline-item ms-2">
                                    <a href="#"><i className="fa fa-instagram" style={{color: "white", marginLeft: "6px" }}></i></a>
                                </li>
                                <li className="list-inline-item ms-2">
                                    <a href="#"><i className="fa fa-linkedin" style={{color: "white", marginLeft: "6px" }}></i></a>
                                </li>
                                <li className="list-inline-item ms-2">
                                    <a href="#"><i className="fa fa-twitter" style={{color: "white", marginLeft: "6px" }}></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}