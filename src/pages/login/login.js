/* eslint-disable eqeqeq */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import ButtonCustom from '../../component/layout/Button/button';
import routesConfig from '../../config/routes';
import styles from './login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const handleClickLog = (e) => {
        const ipName = document.querySelector('.login_ip-name__mZQtb').value;
        const ipPass = document.querySelector('.login_ip-pass__5f2U7').value;

        const itemName = localStorage.getItem('Name') ? JSON.parse(localStorage.getItem('Name')) : [];
        const itemPass = localStorage.getItem('Passwork') ? JSON.parse(localStorage.getItem('Passwork')) : [];
        const itemUser = localStorage.getItem('NameUser') ? JSON.parse(localStorage.getItem('NameUser')) : [];

        for (let i = 0; i < itemName.length; i++) {
            if (ipName == itemName[i] && ipPass == itemPass[i]) {
                alert('Đăng nhập thành công');
                window.location = 'http://localhost:3000/Lazada'
                localStorage.setItem('Status', JSON.stringify('Có'));
                localStorage.setItem('UserName', JSON.stringify(itemUser[i]));
                localStorage.setItem('TaiKhoan', JSON.stringify(ipName));
            }
        }
    };

    return (
        <div className={cx('login')}>
            <div className={cx('intro')}>
                <p className={cx('title')}>Chào mừng đến với Lazada. Đăng nhập ngay!</p>
                <p className={cx('transfer')}>
                    Thành viên mới?{' '}
                    <Link to={routesConfig.Register} className={cx('trans-res')}>
                        Đăng kí
                    </Link>{' '}
                    tại đây
                </p>
            </div>
            <div className={cx('form-login')}>
                <div className={cx('normally')}>
                    <div className={cx('user')}>
                        <p className={cx('txtName')}>Số điện thoại hoặc email</p>
                        <input
                            className={cx('ip-name')}
                            type="text"
                            placeholder="Vui lòng nhập số điện thoại hoặc email của bạn"
                        />
                    </div>
                    <div className={cx('pass')}>
                        <p className={cx('txtName')}>Mật khẩu</p>
                        <input className={cx('ip-pass')} type="password" placeholder="Vui lòng nhập mật khẩu của bạn" />
                    </div>
                    <div className={cx('forgot-pass')}>
                        <Link to={routesConfig.FamiliarPass} className={cx('forgot')}>
                            Quên mật khẩu?
                        </Link>
                    </div>
                </div>
                <div className={cx('third-party')}>
                    <ButtonCustom
                        className={cx('btn-log')}
                        children={'ĐĂNG NHẬP'}
                        onClick={(e) => handleClickLog(e)}
                    ></ButtonCustom>
                    <p className={cx('txt-third')}>Hoặc, đăng nhập bằng</p>
                    <ButtonCustom className={cx('fb')} href={'https://www.facebook.com/'} children={'Facebook'} />
                    <ButtonCustom className={cx('gg')} href={'https://www.google.com/'} children={'Google'} />
                </div>
            </div>
        </div>
    );
}

export default Login;
