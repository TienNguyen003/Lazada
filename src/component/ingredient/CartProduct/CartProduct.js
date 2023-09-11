import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { ApartIcon, PlusIcon } from '../../icons/icon';
import styles from './CartProduct.module.scss';

const cx = classNames.bind(styles);

function CartProduct() {
    const detailProducts = localStorage.getItem('detailProducts')
        ? JSON.parse(localStorage.getItem('detailProducts'))
        : [];

    const handleDown = () => {
        const quantity = document.querySelector('.CartProduct_quanti-updown__M5C7W');
        if (quantity.value > 1) {
            quantity.value = quantity.value - 1;
        }
    };
    const handleUp = () => {
        const quantity = document.querySelector('.CartProduct_quanti-updown__M5C7W');
        quantity.value = +quantity.value + 1;
    };

    return (
        <div className={cx('contain')}>
            <div className={cx('products')}>
                <div className={cx('select')}>
                    <input type="checkbox" className={cx('checkbox')} />
                    <p className={cx('txt-all')}>CHỌN TẤT CẢ</p>
                    <p className={cx('txt-delete')}>XÓA</p>
                </div>
                <div className={cx('item-products')}>
                    {detailProducts.map((item, id) => {
                        return (
                            <div className={cx('detail-products')} key={id}>
                                <input type="checkbox" className={cx('checkbox')} />
                                <img className={cx('img-products')} src={item[3]} alt="item" />
                                <p className={cx('name-products')}>{item[0]}</p>
                                <div className={cx('cart-item')}>
                                    <p className={cx('price-products')}>
                                        {parseInt(item[1]).toLocaleString('vi-VN')} ₫
                                    </p>
                                    <p className={cx('txt-delete')}>XÓA</p>
                                </div>
                                <div className={cx('up-down')}>
                                    <button className={cx('down')} onClick={handleDown}>
                                        <ApartIcon />
                                    </button>
                                    <input className={cx('quanti-updown')} type="text" value={item[2]} readOnly />
                                    <button className={cx('up')} onClick={handleUp}>
                                        <PlusIcon />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('delivery')}>
                <div className={cx('address')}>
                    <p className={cx('location__label')}>Địa điểm</p>
                    <p className={cx('location__address')}>
                    <FontAwesomeIcon icon={faLocationDot} className={cx('icon-location')}/>
                        Add Shipping Address
                    </p>
                </div>
                <div className={cx('info-products')}>
                    <p className={cx('txt-products')}>Thông tin đơn hàng</p>
                    <div className={cx('transport-fee')}>
                        <div className={cx('transport')}>
                            <p>Tạm tính (0 sản phẩm)</p>
                            <p>0 ₫</p>
                        </div>
                        <div className={cx('transport')}>
                            <p>Phí vận chuyển</p>
                            <p>0 ₫</p>
                        </div>
                    </div>
                    <div className={cx('voucher-discount')}>
                        <input type="text" className={cx('voucher')} placeholder="Mã giảm giá (mã chỉ áp dụng 1lần)" />
                        <div className={cx('btn-apply')}>ÁP DỤNG</div>
                    </div>
                    <div className={cx('price-all')}>
                        <p className={cx('txt-price')}>Tổng cộng</p>
                        <div className={cx('order-total-fee')}>
                            <p className={cx('price')}>99.800 ₫</p>
                            <small className={cx('total-fee-tip')}>Đã bao gồm VAT (nếu có)</small>
                        </div>
                    </div>
                    <div className={cx('btn-cart')}>XÁC NHẬN GIỎ HÀNG(3)</div>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
