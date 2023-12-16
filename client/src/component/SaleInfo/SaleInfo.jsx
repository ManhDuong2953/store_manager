import "./SaleInfo.scss";
import Crawn from "../FrientlyCustomer/CrawnLabel"
export default function SaleInfo() {
    return (
        <div className="container-app context-app">
            <header>
                <h1>Ưu Đãi Khách Hàng Thân Thiết </h1>
            </header>
            <main>
            <h5>
                Chúng tôi xin giới thiệu "Ưu Đãi Khách Hàng Thân Thiết" - nơi bạn sẽ tìm thấy những ưu đãi hấp dẫn dành cho khách hàng thân thiết của chúng tôi. Hãy cùng khám phá các chương trình ưu đãi đặc biệt và trải nghiệm mua sắm thú vị như chưa từng có!
            </h5>
                <section class="rank">
                    <h2>Khách hàng mới Đồng <Crawn.CrawnTransparent /></h2>
                    <p>Ưu đãi giảm 1% khi mua sản phẩm đầu tiên.</p>
                    <p>
                        Đây là mức ưu đãi cho khách hàng mới đến với chúng tôi! Với đơn hàng đầu tiên có giá trị trên $100, bạn sẽ nhận ngay ưu đãi giảm 1%. Hãy khám phá những sản phẩm phong phú và đa dạng tại cửa hàng của chúng tôi và tận hưởng mức giá hấp dẫn nhất dành riêng cho bạn!
                    </p>
                </section>
                <section class="rank">
                    <h2>Khách hàng Đồng <Crawn.CrawnBronze /></h2>
                    <p>Ưu đãi giảm 5% khi mua trên 30 sản phẩm.</p>
                    <p>
                        Chào mừng bạn đã đạt rank Đồng! Bằng cách mua trên 30 sản phẩm trong mỗi đơn hàng, bạn sẽ nhận ngay ưu đãi giảm 5%. Hãy khám phá những sản phẩm phong phú và đa dạng tại cửa hàng của chúng tôi và tận hưởng mức giá hấp dẫn nhất dành riêng cho bạn!
                    </p>
                </section>

                <section class="rank">
                    <h2>Khách hàng Bạc <Crawn.CrawnSilver /></h2>
                    <p>Ưu đãi giảm 15% khi mua trên 120 sản phẩm.</p>
                    <p>
                        Xin chúc mừng bạn đã lên rank Bạc! Với mỗi đơn hàng trị giá từ 120 sản phẩm trở lên, bạn sẽ được giảm giá ngay 15%. Đây là cơ hội tuyệt vời để bạn tiết kiệm và sắm những món đồ bạn yêu thích. Chúng tôi cam kết mang đến trải nghiệm mua sắm thú vị và đáng nhớ cho bạn!
                    </p>
                </section>

                <section class="rank">
                    <h2>Khách hàng Vàng <Crawn.CrawnGold /></h2>
                    <p>Ưu đãi giảm 30% khi mua trên 850 sản phẩm.</p>
                    <p>
                        Chúc mừng bạn đã đạt rank Vàng - một thành tựu đáng tự hào! Khi bạn mua trên 850 sản phẩm trong mỗi đơn hàng, bạn sẽ được giảm giá 30%, giúp bạn tiết kiệm một cách ấn tượng. Bắt đầu cuộc hành trình rank Vàng của bạn và tận hưởng trọn vẹn niềm vui mua sắm cùng chúng tôi!
                    </p>
                </section>

                <section class="rank">
                    <h2>Khách hàng Kim Cương <Crawn.CrawnDiamond /></h2>
                    <p>Ưu đãi giảm 45% khi mua trên 5000 sản phẩm.</p>
                    <p>
                        Xin chúc mừng bạn đã đạt tới đỉnh cao rank Kim Cương - sự thành công đích thực! Với mỗi đơn hàng từ 5000 sản phẩm trở lên, bạn sẽ nhận được mức giảm giá 45%, giúp bạn thỏa sức mua sắm những sản phẩm xa xỉ và sang trọng nhất. Chúng tôi trân trọng sự ủng hộ của bạn và hy vọng sẽ tiếp tục cùng bạn chia sẻ những trải nghiệm mua sắm đáng nhớ!
                    </p>
                </section>
            </main>
        </div>
    )
}