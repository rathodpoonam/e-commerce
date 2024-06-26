import React from 'react'
import './css/footer.css'

const Footer1 = () => {
    return (
        <div>
            <div className=" Footer">
                <div className=" container sb_footer section_padding">
                    <div className="sb_footer-links">

                        <div className="sb_footer-links_div">
                            <h5>Quick Links</h5>
                            <hr />
                            <a className="link" href="/home">
                                <p className="para">Home</p>
                            </a>
                            <a className="link" href="/healtplan">
                                <p className="para">Plain T-shirt</p>
                            </a>
                            <a className="link" href="/healtplan">
                                <p className="para">Kids T-shirt</p>
                            </a>
                            <a className="link" href="/healtplan">
                                <p className="para">Combo Pack</p>
                            </a>
                        </div>
                        <div className="sb_footer-links_div">
                            <h5>For business</h5>
                            <hr />
                            <a className="link" href="/employee">
                                <p className="para">Employee</p>
                            </a>
                            <a className="link" href="/healtplan">
                                <p className="para">Health plan</p>
                            </a>
                        </div>
                        <div className="sb_footer-links_div">
                            <h5>Social Media</h5>
                            <hr />
                            <div className="socialmedia">
                                <div className="social">
                                    <box-icon className="" type='logo' name='facebook-circle'></box-icon>
                                </div>
                                <div className="social">

                                    <box-icon type='logo' name='twitter'></box-icon>
                                </div>
                                <div className="social">

                                    <box-icon className="social" name='instagram' type='logo'  ></box-icon>
                                </div>
                                <div className="social">

                                    <box-icon className="social" name='linkedin' type='logo'  ></box-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <hr />
                        <p className="">@{new Date().getFullYear()}All right reserved</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer1;