import classNames from 'classnames/bind';
import styles from './order.module.scss';
import Topics from '../Topics/topics'

const cx = classNames.bind(styles);

function PaymentOrder() {
    return (
        <div className={cx('paymentOrder')}>
            <div className={cx('primary')}>
                <h1 className={cx('title')}>Thanh toán</h1>
                <div className={cx('payment')}>
                    <div className={cx('detail')}>
                        <h2 className={cx('txt')}>Các phương thức thanh toán</h2>
                        <p className={cx('viewMore')}>Xem thêm</p>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Cập nhật về việc ngừng hỗ trợ trả góp 0% lãi suất đối với ngân hàng CitiBank
                            </p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Các lỗi thanh toán khi đặt hàng</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Lazada cung cấp các phương thức thanh toán nào?</p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div className={cx('detail')}>
                        <h2 className={cx('txt')}>LazPayLater</h2>
                        <p className={cx('viewMore')}>Xem thêm</p>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Cách sử dụng LazPayLater</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Cách thanh toán hóa đơn LazPayLater</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Hóa đơn LazPayLater quá hạn là gì?</p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div>
                        <h2 className={cx('txt')}>Ví MoMo</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Hướng dẫn liên kết thanh toán MoMo</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Các lỗi thanh toán với MoMo cần lưu ý</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Hướng dẫn hủy liên kết MoMo trên tài khoản Lazada</p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div>
                        <h2 className={cx('txt')}>Ví Viettel Money</h2>
                        <p>Xem thêm</p>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Hướng dẫn hủy ví điện tử Viettel Money </p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Các lỗi thanh toán thường gặp khi thanh toán bằng Viettel Money
                            </p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Các câu hỏi thường gặp về ví điện tử Viettel Money</p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div>
                        <h2 className={cx('txt')}>Ví ZaloPay</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Thanh toán qua ZaloPay khi nhận hàng</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Hướng dẫn liên kết thanh toán ZaloPay </p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div>
                        <h2 className={cx('txt')}>Ví VNPT Money</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Hướng dẫn liên kết ví VNPT Money</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Các lỗi thường gặp khi liên kết với ví điện tử VNPT Money cần lưu ý
                            </p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Hướng dẫn hủy liên kết với ví VNPT Money</p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div>
                        <h2 className={cx('txt')}>Thẻ Tín Dụng/ Thẻ Ghi Nợ</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Hướng dẫn thanh toán qua hình thức Thẻ Tín Dụng/ Thẻ Ghi Nợ
                            </p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Một số lỗi thường gặp khi thanh toán bằng Thẻ tín dụng/ Thẻ ghi nợ
                            </p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Các câu hỏi thường gặp khi thanh toán bằng Thẻ Tín Dụng/ Thẻ Ghi Nợ
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div>
                        <h2 className={cx('txt')}>Đặt vé máy bay trực tuyến</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Đặt vé máy bay trực tuyến cùng Lazada</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Các bước đặt vé máy bay trực tuyến trên Lazada</p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div>
                        <h2 className={cx('txt')}>Trả góp</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Các câu hỏi thường gặp liên quan đến chương trình trả góp 0% lãi suất
                            </p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Tôi có thể trả góp 0% lãi suất bằng thẻ tín dụng trong bao lâu?
                            </p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>
                                Làm thế nào để tham gia chương trình “Trả góp 0% Lãi suất” của Lazada?
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div>
                        <h2 className={cx('txt')}>Thẻ Starbucks eGift </h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Cách mua thẻ Starbucks eGift thông qua ứng dụng Lazada</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Thông tin về thẻ Starbucks eGift</p>
                        </div>
                        <div className={cx('content')}>
                            <p className={cx('text-content')}>Các câu hỏi thường gặp về Starbucks eGift</p>
                        </div>
                    </div>
                </div>
            </div>

            <Topics />
        </div>
    );
}

export default PaymentOrder;
