import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faTruck, faBoxOpen, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

import { SearchIcon } from '../../icons/icon';
import routesConfig from '../../../config/routes';
import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [input, setInput] = useState('');
    const [inputChange, setInputChange] = useState('');

    const refSpare = useRef();
    const refCare = useRef();

    useEffect(() => {
        setInput(inputChange);
    }, [inputChange]);

    const handelShowSpare = () => {
        refSpare.current.classList.toggle('header_visible__wTqLE');
    };
    const handelShowCare = () => {
        refCare.current.classList.toggle('header_visible__wTqLE');
    };

    return (
        <>
            <div className={cx('links-list')}>
                <div className={cx('spare')} onClick={() => handelShowSpare()}>
                    Tiết kiệm hơn với ứng dụng
                </div>
                <div className={cx('sell')}>
                    <Link to={routesConfig.SalesTogether} className={cx('sell')}>
                        Bán hàng cùng lazada
                    </Link>
                </div>
                <div className={cx('care')} onClick={() => handelShowCare()}>
                    Chăm sóc khách hàng
                </div>
                <div className={cx('check')}>
                    <Link to={routesConfig.CheckOrder} className={cx('check')}>
                        Kiểm tra đơn hàng
                    </Link>
                </div>
                <div className={cx('login')}>
                    <Link to={routesConfig.Login} className={cx('login')}>
                        Đăng nhập
                    </Link>
                </div>
                <div className={cx('register')}>
                    <Link to={routesConfig.Register} className={cx('register')}>
                        Đăng ký
                    </Link>
                </div>
                <div className={cx('select')}>Chọn ngôn ngữ</div>
            </div>
            <div className={cx('header')}>
                <div className={cx('icon')}>
                    <Link to={routesConfig.Home} className={cx('info')}>
                        <img
                            className={cx('icon-img')}
                            src="//laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className={cx('search')}>
                    <input
                        className={cx('search-ip')}
                        type="text"
                        placeholder="Tìm kiếm trên Lazada"
                        onBlur={(e) => setInputChange(e.target.value)}
                    />
                    <Link
                        to={`/SearchResults/@${input}`}
                        className={cx('search-icon')}
                        onClick={() => {
                            setInput(inputChange);
                        }}
                    >
                        <div>
                            <SearchIcon />
                        </div>
                    </Link>
                </div>
                <div className={cx('cart')}>
                    <img
                        className={cx('cart-img')}
                        src="//lzd-img-global.slatic.net/g/tps/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png"
                        alt="Cart"
                    />
                </div>
            </div>

            <div className={cx('show-clickSpare')} ref={refSpare}>
                <div className={cx('title-click')}>Tải ứng dụng để có trải nghiệm tốt nhất</div>
                <div className={cx('infoSpare')}>
                    <img
                        className={cx('qr')}
                        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1Grg0txYaK1RjSZFnXXa80pXa.png"
                        alt="qr code"
                    />
                    <div className={cx('dowapp-benefits')}>
                        <Link to={routesConfig.LinkApp} className={cx('sell')}>
                            <p className={cx('detail__benefits')}>Mua sắm thông qua ứng dụng của chúng tôi để được:</p>
                            <ul className={cx('detail__benefits-des')}>
                                <li className={cx('benefits-des-detail')}>Voucher độc quyền</li>
                                <li className={cx('benefits-des-detail')}>Deal tốt hơn</li>
                                <li className={cx('benefits-des-detail')}>Các khuyến mãi chỉ dành cho bạn</li>
                                <li className={cx('benefits-des-detail')}>Luôn cập nhật đầu tiên</li>
                            </ul>
                        </Link>
                    </div>
                </div>
                <input className={cx('ip-exp')} placeholder="eg. 0123456789" />
                <div className={cx('header__down')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                        className={cx('down__img', 'google')}
                        alt="img"
                    />
                    <img
                        src="https://www.techhub.in.th/wp-content/uploads/2013/12/appstore.jpg"
                        className={cx('down__img', 'appstore')}
                        alt="img"
                    />
                </div>
                <p className={cx('nameME')}>TienNguyen available</p>
            </div>
            <div className={cx('show-care')} ref={refCare}>
                <div className={cx('custom-info')}>
                    <FontAwesomeIcon icon={faUserTie} className={cx('icon-show')}></FontAwesomeIcon>
                    <Link to={routesConfig.CheckOrder} className={cx('txtCus')}>
                        Trung tâm hỗ trợ
                    </Link>
                </div>
                <div className={cx('custom-info')}>
                    <FontAwesomeIcon icon={faCreditCard} className={cx('icon-show')}></FontAwesomeIcon>

                    <Link to={routesConfig.PaymentOrder} className={cx('txtCus')}>
                        Đơn hàng & Thanh toán
                    </Link>
                </div>
                <div className={cx('custom-info')}>
                    <FontAwesomeIcon icon={faTruck} className={cx('icon-show')} />
                    <Link to={routesConfig.Delivery} className={cx('txtCus')}>
                        Giao hàng & Nhận hàng
                    </Link>
                </div>
                <div className={cx('custom-info')}>
                    <FontAwesomeIcon icon={faBoxOpen} className={cx('icon-show')} />
                    <Link to={routesConfig.CheckOrder} className={cx('txtCus')}>
                        Đổi trả hàng & Hoàn tiền
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;
