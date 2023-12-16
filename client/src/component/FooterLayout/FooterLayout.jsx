import "./FooterLayout.scss"
import LogoWhite from "../../assets/logo/logowhite.png"
function FooterLayout() {
    return (
        <footer className="footer-section">
            <div className="container-app">

            
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={LogoWhite} className="img-fluid" alt="logo" /></a>
                            </div>
                            <div className="footer-text">
                                <p>Shop Mạnh Cường rất hân hạnh được phục vụ quý khách. Với phương châm Đầy đủ - Tận tình - Chất lượng hi vọng quý khách có một trải nghiệm ưng ý với Mạnh Cường Shop.
                                    Cảm ơn quý khách đã ghé thăm
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-social-icon">
                                <span>Theo dõi</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Đăng ký</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Mọi vấn đề quý khách gặp phải, đừng ngần ngại chia sẻ với chúng tôi</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Địa chỉ</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>SĐT</h4>
                                <span>9876543210</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Email</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2023, ManhCuongShop.com</p>
                            </div>
                        </div>
                </div>
            </div></div>
        </footer>
    )
}
export default FooterLayout