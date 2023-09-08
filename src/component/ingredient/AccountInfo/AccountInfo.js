import classNames from 'classnames/bind';

import styles from './AccountInfo.module.scss';

const cx = classNames.bind(styles);

function AccountInfo() {
    const userName = localStorage.getItem('UserName') ? JSON.parse(localStorage.getItem('UserName')) : '';
    const accountName = localStorage.getItem('TaiKhoan') ? JSON.parse(localStorage.getItem('TaiKhoan')) : '';

    return (
        <div className={cx('info')}>
            <div className={cx('introduction')}>
                <p className={cx('member-info')}>Xin chào, {userName}</p>
                <div className={cx('manage')}>
                    <h3 className={cx('txt-manage')}>Quản lý tài khoản</h3>
                    <div className={cx('detail-manage')}>
                        <p>Thông tin cá nhân</p>
                        <p>Số địa chỉ</p>
                        <p>Tùy chọn thanh toán</p>
                    </div>
                </div>
                <div className={cx('manage')}>
                    <h3 className={cx('txt')}>Đơn hàng của tôi</h3>
                    <div className={cx('detail-manage')}>
                        <p>Đơn hàng đổi trả</p>
                        <p>Đơn hàng hủy</p>
                    </div>
                </div>
                <h3 className={cx('txt')}>Nhận xét của tôi</h3>
                <h3 className={cx('txt')}>Sản phẩm yêu thích</h3>
                <h3 className={cx('txt')}>Bán hàng trên Lazada</h3>
            </div>
            <div className={cx('manage-acc')}>
                <h3 className={cx('txt-manage-acc')}>Quản lý tài khoản</h3>
                <div className={cx('item')}>
                    <div className={cx('info-acc')}>
                        <div className={cx('edit-info')}>
                            <p className={cx('txt-edit')}>Thông tin cá nhân</p>
                            <span>|</span>
                            <p className={cx('link-edit')}>Chỉnh sửa</p>
                        </div>
                        <p className={cx('member-info-manage')}>{userName}</p>
                        <p className={cx('member-info-manage')}>{accountName}</p>
                    </div>
                    <div className={cx('contact-info')}>
                        <div className={cx('info-acc')}>
                            <div className={cx('edit-info')}>
                                <p className={cx('txt-edit')}>Số địa chỉ</p>
                                <span>|</span>
                                <p className={cx('link-edit')}>Thêm</p>
                            </div>
                            <p className={cx('member-info-manage')}>Lưu thông tin địa chỉ giao hàng</p>
                        </div>
                        <div className={cx('address')}>
                            <p className={cx('member-info-manage')}>Lưu thông tin địa chỉ thanh toán</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfo;
