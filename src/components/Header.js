import React from 'react'

const Header = () => {
    return (
        <div className="booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="">
                <div className="bg-dark shadow" style={{ padding: "40px" }}>
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="text" className="form-control py-3 datetimepicker-input"
                                            placeholder="Category" data-target="#date1" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="date" id="date2" data-target-input="nearest">
                                        <input type="text" className="form-control py-3 datetimepicker-input" placeholder="City" data-target="#date2" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select py-3">
                                        <option selected>Cehck In</option>
                                        <option value="1">Date</option>
                                        <option value="2">Date</option>
                                        <option value="3">Date</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select py-3">
                                        <option selected>Check Out</option>
                                        <option value="1">Date</option>
                                        <option value="2">Date</option>
                                        <option value="3">Date</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary py-3 w-100">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Header