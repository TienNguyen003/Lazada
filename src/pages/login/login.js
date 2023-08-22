import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import ButtonCustom from '../../component/layout/Button/button';
import routesConfig from '../../config/routes';
import styles from './login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login')}>
            <div className={cx('intro')}>
                <p className={cx('title')}>
                    Chào mừng đến với Lazada. Đăng nhập ngay!
                </p>
                <p className={cx('transfer')}>
                    Thành viên mới?{' '}
                    <Link
                        to={routesConfig.Register}
                        className={cx('trans-res')}
                    >
                        Đăng kí
                    </Link>{' '}
                    tại đây
                </p>
            </div>
            <div className={cx('form-login')}>
                <div className={cx('normally')}>
                    <div className={cx('user')}>
                        <p className={cx('txtName')}>
                            Số điện thoại hoặc email
                        </p>
                        <input
                            className={cx('ip-name')}
                            type="text"
                            placeholder="Vui lòng nhập số điện thoại hoặc email của bạn"
                        />
                    </div>
                    <div className={cx('pass')}>
                        <p className={cx('txtName')}>Mật khẩu</p>
                        <input
                            className={cx('ip-pass')}
                            type="password"
                            placeholder="Vui lòng nhập mật khẩu của bạn"
                        />
                    </div>
                    <div className={cx('forgot-pass')}>
                    <Link
                        to={routesConfig.FamiliarPass}
                        className={cx('forgot')}
                    >
                        Quên mật khẩu?
                    </Link>
                    </div>
                </div>
                <div className={cx('third-party')}>
                    <ButtonCustom
                        className={cx('btn-log')}
                        children={'ĐĂNG NHẬP'}
                    ></ButtonCustom>
                    <p className={cx('txt-third')}>Hoặc, đăng nhập bằng</p>
                    <ButtonCustom
                        className={cx('fb')}
                        href={'https://www.facebook.com/'}
                        children={'Facebook'}
                    />
                    <ButtonCustom
                        className={cx('gg')}
                        href={'https://www.google.com/'}
                        children={'Google'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
