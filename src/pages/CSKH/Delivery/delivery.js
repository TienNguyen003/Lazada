import classNames from 'classnames/bind';
import styles from './delivery.module.scss';
import Topics from '../Topics/topics'

const cx = classNames.bind(styles);

function Delivery() {
    return (
        <div className={cx('delivery')}>
            <div className={cx('primary')}>
                <h1 className={cx('title')}>Giao hàng & Nhận hàng</h1>
                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Giao nhanh 24h</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/thong-tin-ve-giao-hang-dam-bao-cua-dich-vu-giao-nhanh-24h-16406.html"
                            >
                                Thông tin về Giao hàng đảm bảo của dịch vụ Giao nhanh 24h
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a className={cx('text-content')} href="/helpcenter/thong-tin-ve-giao-nhanh-24h-15197.html">
                                Thông tin về Giao nhanh 24h
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/dieu-khoan-va-dieu-kien-dam-bao-giao-hang-dung-han-16516.html"
                            >
                                Điều Khoản Và Điều Kiện Đảm Bảo Giao Hàng Đúng Hạn
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Nhận hàng</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/thoi-gian-toi-nhan-duoc-hang-la-khi-nao-14661.html"
                            >
                                Thời gian tôi nhận được hàng là khi nào?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/huong-dan-chon-loai-dia-chi-nhan-hang-de-duoc-nhan-kien-hang-nhanh-chong-15190.html"
                            >
                                Hướng dẫn chọn LOẠI ĐỊA CHỈ nhận hàng để được nhận kiện hàng nhanh chóng
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Giao hàng</h2>
                        <a
                            className={cx('viewMore')}
                            href="/helpcenter/shipping-and-delivery/Giao-hang/"
                        >
                            Xem thêm
                        </a>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/vi-sao-don-hang-cua-ban-giao-khong-thanh-cong-14536.html"
                            >
                                Vì sao đơn hàng của bạn giao không thành công?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/cac-buoc-cap-nhat-dia-chi-giao-hang-va-tai-khoan-ngan-hang-9441.html"
                            >
                                Các bước cập nhật địa chỉ giao hàng và tài khoản ngân hàng
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/co-khu-vuc-han-che-nao-ma-lazada-khong-nhan-giao-hang-den-khong-5634.html"
                            >
                                Có khu vực hạn chế nào mà Lazada không nhận giao hàng đến không?
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Tình trạng đơn hàng</h2>
                        <a
                            className={cx('viewMore')}
                            href="/helpcenter/shipping-and-delivery/track-your-order/"
                        >
                            Xem thêm
                        </a>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/lam-the-nao-de-bat-thong-bao-tren-ung-dung-lazada-14647.html"
                            >
                                Làm thế nào để bật thông báo trên ứng dụng Lazada?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/cap-nhat-trang-thai-yeu-cau-khieu-nai-voi-cham-soc-khach-hang-tai-trung-tam-ho-tro-15073.html"
                            >
                                Cập nhật trạng thái yêu cầu khiếu nại với Chăm sóc khách hàng tại Trung tâm hỗ trợ
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/cac-moc-thoi-gian-giao-hang-du-kien-tai-lazada-5734.html"
                            >
                                Các mốc thời gian giao hàng dự kiến tại Lazada
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Điểm lấy hàng</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a className={cx('text-content')} href="/helpcenter/diem-lay-hang-la-gi-5644.html">
                                Điểm lấy hàng là gì?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/huong-dan-nhan-hang-tai-diem-lay-hang-ilogic-smartbox-8494.html"
                            >
                                Hướng dẫn nhận hàng tại điểm lấy hàng iLogic Smartbox
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Các phương thức giao hàng</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/cac-phuong-thuc-giao-hang-tai-lazada-14651.html"
                            >
                                Các phương thức giao hàng tại Lazada
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/lam-sao-de-toi-xem-hinh-thuc-giao-hang-cua-mot-san-pham-5667.html"
                            >
                                Làm sao để tôi xem hình thức giao hàng của một sản phẩm?
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Phí vận chuyển</h2>
                        <a
                            className={cx('viewMore')}
                            href="/helpcenter/shipping-and-delivery/shipping-fee/"
                        >
                            Xem thêm
                        </a>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/tong-gia-tri-don-hang-da-bao-gom-phi-van-chuyen-chua-5747.html"
                            >
                                Tổng giá trị đơn hàng đã bao gồm phí vận chuyển chưa?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/Vì-sao-Lazadavn-có-nhiều-mức-phí-vận-chuyển-khác-nhau-5752.html"
                            >
                                Vì sao Lazada.vn có nhiều mức phí vận chuyển khác nhau?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/Điều-gì-sẽ-xảy-ra-khi-tôi-mua-nhiều-sản-phẩm-từ-cùng-một-người-bán-hoặc-nhiều-người-bán-khác-nhau-5645.html"
                            >
                                Điều gì sẽ xảy ra khi tôi mua nhiều sản phẩm từ cùng một người bán hoặc nhiều người bán
                                khác nhau?
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Giao hàng hỏa tốc</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a className={cx('text-content')} href="/helpcenter/giao-hang-hoa-toc-la-gi-5653.html">
                                Giao hàng hỏa tốc là gì?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/lam-the-nao-kiem-tra-duoc-san-pham-toi-chon-co-ap-dung-dich-vu-giao-hang-hoa-toc-hay-khong-5692.html"
                            >
                                Làm thế nào kiểm tra được sản phẩm tôi chọn có áp dụng dịch vụ Giao hàng Hỏa tốc hay
                                không?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/cac-khu-vuc-nao-duoc-ap-dung-dich-vu-giao-hang-hoa-toc-5624.html"
                            >
                                Các khu vực nào được áp dụng dịch vụ giao hàng Hỏa tốc?
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('pdtop')}>
                    <div className={cx('delivery-item')}>
                        <h2 className={cx('txt')}>Giao hàng 2 giờ</h2>
                    </div>
                    <div>
                        <div className={cx('content')}>
                            <a className={cx('text-content')} href="/helpcenter/giao-hang-2-gio-la-gi-15503.html">
                                Giao hàng 2 giờ là gì?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/how-can-i-check-if-my-selected-product-is-eligible-for-instant-delivery-15505.html"
                            >
                                Làm thế nào kiểm tra được sản phẩm tôi chọn có áp dụng dịch vụ Giao hàng 2 giờ hay
                                không?
                            </a>
                        </div>
                        <div className={cx('content')}>
                            <a
                                className={cx('text-content')}
                                href="/helpcenter/thong-tin-don-vi-van-chuyen-ap-dung-dich-vu-giao-hang-2-gio-15507.html"
                            >
                                Thông tin đơn vị vận chuyển áp dụng dịch vụ Giao hàng 2 giờ
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Topics />
        </div>
    );
}

export default Delivery;
