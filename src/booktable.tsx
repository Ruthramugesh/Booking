import { useEffect, useState } from "react";
import axios from "axios";
import { persons } from "./passenger";

export default function Booktable(props: persons) {
    const [gethotel, sethotel] = useState<any>([]);

    useEffect(() => {
        tabledata();
    }, [])

    useEffect(() => {

    }, [gethotel])

    const tabledata = async () => {
        let people = await axios.get("http://localhost:2000/api/getall").then(resp => {
            sethotel(resp.data)
        })
    }

    return (
        <div>
            <div className="row">
            <h1 style={{ fontWeight: "700", fontSize: "2rem", textAlign: "left", marginLeft: "3rem", marginTop: "3rem" }}><i className="bi bi-bookmark-heart fa-fw me-1"></i>{props.box.title}</h1>
            </div>
            <div className="card" style={{marginLeft: "2.7rem", marginRight: "2.7rem", marginTop: "1rem", marginBottom: "1rem",}}>
                <div className="col-12">
                    <div className="card border">

                        <div className="card-header border-bottom" style={{ backgroundColor: "white" }}>
                            <h5 className="card-title" style={{textAlign: "left", fontWeight: "700", fontSize: "25px"}}>{props.box.name}
                                <span className="badge" style={{ backgroundColor: "rgba(81, 67, 217, 0.1)", color: "#5143d9", marginLeft: "10px", fontWeight: "400" }}>{props.box.room}</span>
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="row g-3 align-items-center justify-content-between mb-3">
                                <div className="col-md-8">
                                    <form className="rounded position-relative">
                                        <input className="form-control pe-5" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit" style={{color: "#747579"}}><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="col-md-3">
                                    <form className="d-flex">

                                        <div className="choices__inner" style={{ width: "257px" }}>
                                            <select className="form-select js-choice choices__input" aria-label=".form-select-sm" data-choice="active" style={{ cursor: "pointer" }}>
                                                <option value="" data-custom-properties="[object Object]">Sort by</option>
                                            </select>
                                        </div>


                                        {/*  <s className="form-select js-choice choices__input" role="select" placeholder="Sort by" />
                         <select className="form-select js-choice choices__input" placeholder="Sort by" aria-label=".form-select-sm" data-choice="active"></select>
                        <div className="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="3" data-value="" data-custom-properties="[object Object]" aria-selected="true">Sort by</div> */}
                                    </form>
                                </div>
                            </div>
                            <div className="table-responsive border-0" style={{ textAlign: "left", marginBottom: "3rem" }}>
                                <table className="table align-middle p-4 mb-0 table-hover table-shrink">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Payment</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    {
                                        gethotel.map((data: any) => {

                                            return (
                                                <>
                                                    <tbody className="border-top-0">
                                                        <tr>
                                                            <td><h6 className="mb-0">{data.Sno}</h6></td>
                                                            <td><h6 className="mb-0"><a href="#" style={{ color: "black", textDecoration: "none", }}>{data.Name}</a></h6></td>
                                                            <td>{data.Type}</td>
                                                            <td><h6 className="mb-0">{data.Date}</h6></td>
                                                            <td><div className="badge text-bg-success">{data.Status}</div></td>
                                                            <td><div className="badge bg-success bg-opacity-10 text-success">{data.Payment}</div></td>
                                                            <td><a className="btn btn-sm btn-light mb-0">{data.Action}</a></td>
                                                        </tr>
                                                    </tbody>
                                                </>
                                            )
                                        })

                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}