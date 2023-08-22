import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import routesConfig from '../../config/routes';
import styles from './familiarPass.module.scss';

const cx = classNames.bind(styles);

function FamiliarPass() {
    return (
        <div className={cx('familiar')}>
            <div className={cx('intro')}>
                <p className={cx('title')}>Quên mật khẩu?</p>
            </div>
            <div className={cx('form-familiar')}>
                <div className={cx('normally')}>
                    <div className={cx('title-form')}>
                        Vui lòng nhập tài khoản bạn muốn lấy lại mật khẩu.
                    </div>
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
                    <div className={cx('slide')}>
                        
                    </div>
                    <div className={cx('forgot-pass')}>
                        <Link
                            to={routesConfig.Login}
                            className={cx('forgot')}
                        >
                            Quay lại
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FamiliarPass;
