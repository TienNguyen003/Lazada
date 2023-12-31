/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import routesConfig from '../../config/routes';
import ButtonCustom from '../../component/layout/Button/button';
import styles from './register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    const itemName = localStorage.getItem('Name') ? JSON.parse(localStorage.getItem('Name')) : [];
    const itemPass = localStorage.getItem('Passwork') ? JSON.parse(localStorage.getItem('Passwork')) : [];
    const itemUser = localStorage.getItem('NameUser') ? JSON.parse(localStorage.getItem('NameUser')) : [];

    const arr = [];

    useEffect(() => {
        itemName.forEach((item) => {
            arr.push(item);
        });
    });

    const handleClickRes = (e) => {
        let check = [];
        const resNameUser = document.querySelector('.register_ip-nameUser__oLMzD').value;
        const resName = document.querySelector('.register_ip-name__WaBh8').value;
        const resPass = document.querySelector('.register_ip-pass__kDBYK').value;

        if (
            resNameUser.trim() == '' ||
            resName.trim() == '' ||
            resName.length < 10 ||
            resPass.trim() == '' ||
            resPass.length < 6
        ) {
            alert('Tạo tài khoản thất bại');
        } else {
            arr.map((item) => {
                if (resName == item) {
                    alert('Tài khoản đã được đăng kí! Vui lòng thử lại');
                    check.push(0);
                } else {
                    check.push(1);
                }
            });
        }

        let checkAcc = check.every(function (item) {
            return item > 0;
        });

        if (checkAcc) {
            alert('Tạo tài khoản thành công');
            // them tai khoan
            itemName.push(resName);
            itemPass.push(resPass);
            itemUser.push(resNameUser);
            localStorage.setItem('Name', JSON.stringify(itemName));
            localStorage.setItem('Passwork', JSON.stringify(itemPass));
            localStorage.setItem('NameUser', JSON.stringify(itemUser));
        }
    };

    return (
        <div className={cx('register')}>
            <div className={cx('intro')}>
                <p className={cx('title')}>Tạo tài khoản Lazada</p>
                <p className={cx('transfer')}>
                    Bạn đã là thành viên?{' '}
                    <Link to={routesConfig.Login} className={cx('trans-res')}>
                        Đăng nhập
                    </Link>{' '}
                    tại đây
                </p>
            </div>
            <div className={cx('form-res')}>
                <div className={cx('normally')}>
                    <div className={cx('user')}>
                        <p className={cx('txtName')}>Họ Tên</p>
                        <input className={cx('ip-nameUser')} type="text" placeholder="Họ Tên" />
                    </div>
                    <div className={cx('user')}>
                        <p className={cx('txtName')}>Số điện thoại</p>
                        <input
                            className={cx('ip-name')}
                            type="text"
                            placeholder="Nhập số điện thoại của bạn"
                            pattern="[0-9]*"
                            inputMode="numeric"
                        />
                    </div>
                    <div className={cx('pass')}>
                        <p className={cx('txtName')}>Mật khẩu</p>
                        <input
                            className={cx('ip-pass')}
                            type="password"
                            placeholder="Tối thiểu 6 ký tự với số, chữ cái và ký tự."
                        />
                    </div>
                    <div className={cx('user')}>
                        <p className={cx('txtName')}>Ngày sinh</p>
                        <input className={cx('ip-name')} type="text" placeholder="Nhập ngày tháng năm sinh của bạn" />
                    </div>
                </div>
                <div className={cx('third-party')}>
                    <ButtonCustom
                        className={cx('btn-log')}
                        children={'ĐĂNG KÍ'}
                        onClick={(e) => handleClickRes(e)}
                    ></ButtonCustom>
                    <div className={cx('check')}>
                        <input className={cx('check-res')} type="checkbox" aria-checked="false" value="on" />
                        <p className={cx('txtYes')}>Tôi muốn cập nhật thông tin ưu đãi qua SMS</p>
                    </div>
                    <div className={cx('policy')}>
                        <span>
                            Tôi đã đọc và đồng ý với{' '}
                            <a
                                className={cx('link')}
                                href="https://pages.lazada.vn/wow/gcp/route/lazada/vn/upr_1000345_lazada/channel/vn/upr-router/vn?hybrid=1&amp;data_prefetch=true&amp;prefetch_replace=1&amp;at_iframe=1&amp;wh_pid=/lazada/channel/vn/legal/terms-of-use"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Điều Khoản Sử Dụng
                            </a>{' '}
                            và{' '}
                            <a
                                className={cx('link')}
                                href="https://pages.lazada.vn/wow/gcp/route/lazada/vn/upr_1000345_lazada/channel/vn/upr-router/vn?hybrid=1&amp;data_prefetch=true&amp;prefetch_replace=1&amp;at_iframe=1&amp;wh_pid=/lazada/channel/vn/legal/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chính Sách Bảo Mật của Lazada
                            </a>{' '}
                            của Lazada, bao gồm quyền thu thập, sử dụng, và tiết lộ dữ liệu cá nhân của tôi theo pháp
                            luật quy định.
                        </span>
                    </div>
                    <p className={cx('txt-third')}>Hoặc, đăng kí bằng</p>
                    <ButtonCustom outline className={cx('email')} children={'Đăng ký bằng Email'} />
                    <div className={cx('social-network')}>
                        <ButtonCustom className={cx('fb')} href={'https://www.facebook.com/'} children={'Facebook'} />
                        <ButtonCustom className={cx('gg')} href={'https://www.google.com/'} children={'Google'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
