/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import api from '../../../api/api';
import ButtonCustom from '../../layout/Button/button';
import { apiProduct } from '../../../api/apiProductCate';
import { ApartIcon, CartIcon, HeartIcon, PlusIcon, StarIcon, ShopIcon, DownIcon, TickIcon } from '../../icons/icon';
import styles from './detailProducts.module.scss';

const cx = classNames.bind(styles);

function DetailProducts() {
    const apiP = api;
    const apiCateP = apiProduct;
    const [data, setData] = useState([]);

    const date = new Date();
    const getDay = date.getDate();
    const getMonth = date.getMonth();

    const url = decodeURIComponent(useLocation().pathname.replace('/ProductsResults/@', ''));
    useEffect(() => {
        apiP.map((item) => {
            if (item.itemid == url) {
                setData(item);
            }
        });
        apiCateP.map((item) => {
            item.data.item.map((item) => {
                if (item.itemid == url) {
                    setData(item);
                }
            });
        });
    }, [apiCateP, apiP, url]);

    console.clear();

    const handleDown = () => {
        const quantity = document.querySelector('.detailProducts_quanti-updown__zfz7y');
        if (quantity.value > 1) {
            quantity.value = quantity.value - 1;
        }
    };
    const handleUp = () => {
        const quantity = document.querySelector('.detailProducts_quanti-updown__zfz7y');
        quantity.value = +quantity.value + 1;
    };
    const handleClickImg = (e) => {
        const listImg = document.querySelectorAll('.detailProducts_img-item__9VagE');
        for (let i = 0; i < listImg.length; i++) {
            listImg[i].className = listImg[i].className.replace(' detailProducts_active-img__Kh1Vf', '');
        }
        const img = document.querySelector('.detailProducts_img__sqmdA');
        img.src = e.target.src;
        e.target.classList.add('detailProducts_active-img__Kh1Vf');
    };

    const items = [];
    for (let i = 0; i < Math.floor(data.shop_rating); i++) {
        items.push(<StarIcon key={i} className={cx('icon')} />);
    }

    const handleClickBtn = (e) => {
        const imgCenter = document.querySelector('.detailProducts_img__sqmdA');

        if (e.target.className == 'Button_title__vdxIi') {
            const tick = document.querySelector('.detailProducts_product-variation__tick__yAaGU');
            tick.html = `<div className={cx('product-variation__tick')}>
                            <TickIcon className={cx('icon-tick')} />
                        </div>`;

            const parent = e.target.parentElement;
            parent.classList.add('.detailProducts_active-btn__8F1bN');
            const parentID = parent.dataset.id;
            const parentName = parent.dataset.name;
            data.tier_variations.map((item) => {
                if (item.name == parentName) {
                    if (item.images !== null) {
                        imgCenter.src = 'https://down-vn.img.susercontent.com/file/' + item.images[parentID];
                    }
                }
            });
        } else {
            const parentID = e.target.dataset.id;
            const parentName = e.target.dataset.name;
            data.tier_variations.map((item) => {
                if (item.name == parentName) {
                    if (item.images !== null) {
                        imgCenter.src = 'https://down-vn.img.susercontent.com/file/' + item.images[parentID];
                    }
                }
            });
        }
    };

    return (
        <div className={cx('content')}>
            <div className={cx('detail-products')}>
                <div className={cx('img-product')}>
                    <img className={cx('img')} src={'https://down-vn.img.susercontent.com/file/' + data.image} alt="" />
                    <div className={cx('list')}>
                        {data.images !== undefined &&
                            data.images.map((item, index) => {
                                return (
                                    <img
                                        key={index}
                                        onClick={(e) => handleClickImg(e)}
                                        className={cx('img-item')}
                                        src={'https://down-vn.img.susercontent.com/file/' + item}
                                        alt=""
                                    />
                                );
                            })}
                    </div>
                    <div className={cx('utilities')}>
                        <div className={cx('share-product')}>
                            <h3 className={cx('title')}>Chia sẻ:</h3>
                            <div className={cx('icon-address')}>
                                <img
                                    src="https://cdn.pixabay.com/photo/2016/07/03/18/35/messenger-1495274_1280.png"
                                    alt=""
                                    className={cx('img-address')}
                                />
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                                    alt=""
                                    className={cx('img-address')}
                                />
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/145/145808.png"
                                    alt=""
                                    className={cx('img-address')}
                                />
                                <img
                                    src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                                    alt=""
                                    className={cx('img-address')}
                                />
                            </div>
                        </div>
                        <div className={cx('pull-left')}></div>
                        <div className={cx('like-product')}>
                            <HeartIcon />
                            <p className={cx('like-count')}>Đã thích ({data.liked_count})</p>
                        </div>
                    </div>
                </div>

                <div className={cx('products')}>
                    <div className={cx('name-product')}>
                        <span className={cx('item-center')}>Yêu thích+</span>
                        <span className={cx('item-name')}>{data.name}</span>
                    </div>

                    <div className={cx('rate')}>
                        <div className={cx('rating')}>
                            <div className={cx('item-rate')}>{Math.floor(data.shop_rating)}</div>
                            {items}
                        </div>
                        <div className={cx('evaluate')}>
                            <div className={cx('quantity-eva')}>{data.cmt_count}</div>
                            <div className={cx('txt')}>Đánh giá</div>
                        </div>
                        <div className={cx('sold')}>
                            <div className={cx('quantity-sold')}>{data.sold}</div>
                            <div className={cx('txt')}>Đã bán</div>
                        </div>
                        <div className={cx('txt')}>Tố cáo</div>
                    </div>

                    {data.price_min_before_discount !== undefined && (
                        <div className={cx('item-price')}>
                            <div className={cx('price-befor')}>
                                {data.price_min == data.price_max
                                    ? `₫${parseInt(
                                          data.price_min_before_discount.toString().slice(0, -5),
                                      ).toLocaleString('vi-VN')}`
                                    : `₫
                                    ${parseInt(data.price_min_before_discount.toString().slice(0, -5)).toLocaleString(
                                        'vi-VN',
                                    )}
                                    - ₫
                                    ${parseInt(data.price_max_before_discount.toString().slice(0, -5)).toLocaleString(
                                        'vi-VN',
                                    )}`}
                            </div>
                            <div className={cx('price-after')}>
                                <div className={cx('price')}>
                                    {data.price_min == data.price_max
                                        ? `₫${parseInt(data.price_min.toString().slice(0, -5)).toLocaleString('vi-VN')}`
                                        : `₫${parseInt(data.price_min.toString().slice(0, -5)).toLocaleString(
                                              'vi-VN',
                                          )} - ₫
                                    ${parseInt(data.price_max.toString().slice(0, -5)).toLocaleString('vi-VN')}`}
                                </div>
                                <div className={cx('discount')}>{data.raw_discount}% giảm</div>
                            </div>
                        </div>
                    )}

                    {data.voucher_info != null && (
                        <div className={cx('discount-shop')}>
                            <p className={cx('txt-trans')}>Mã Giảm Giá Của Shop</p>
                            <div className={cx('dc-shopit')}>
                                <div className={cx('mini-voucher')}>{data.voucher_info.label}</div>
                            </div>
                        </div>
                    )}

                    {data.add_on_deal_info != null && (
                        <div className={cx('discount-shop')}>
                            <p className={cx('txt-trans')}>Deal Sốc</p>
                            <div className={cx('dc-shopit')}>
                                <div className={cx('mini-voucher')}>{data.add_on_deal_info.add_on_deal_label}</div>
                            </div>
                        </div>
                    )}

                    {data.bundle_deal_info != null && (
                        <div className={cx('discount-shop')}>
                            <p className={cx('txt-trans')}>Combo Khuyến Mãi</p>
                            <div className={cx('dc-shopit')}>
                                <div className={cx('mini-voucher')}>{data.bundle_deal_info.bundle_deal_label}</div>
                            </div>
                        </div>
                    )}

                    <div className={cx('transport')}>
                        <div className={cx('transport-to')}>
                            <p className={cx('txt-trans')}>Vận chuyển</p>
                            <img
                                className={cx('img-to')}
                                src="https://static.vecteezy.com/system/resources/previews/000/425/787/original/vector-delivery-truck-icon.jpg"
                                alt=""
                            />
                            <div className={cx('item-to')}>
                                <div className={cx('address-to')}>
                                    <div className={cx('txt-transto')}>Vận chuyển tới</div>
                                    <p className={cx('address')}>Phường Cầu Diễn, Quận Nam Từ Liêm</p>
                                    <DownIcon className={cx('icon-down')} />
                                </div>
                                <div className={cx('address-to')}>
                                    <div className={cx('txt-transto')}>Phí vận chuyển</div>
                                    <Tippy
                                        placement="bottom"
                                        render={(atts) => (
                                            <div className={cx('giaohang')} tabIndex="-1" {...atts}>
                                                <div className={cx('speed-trans')}>
                                                    <p>
                                                        Nhanh <br />{' '}
                                                        <p className={cx('time-trans')}>
                                                            Giao hàng trước {getDay + 7} tháng {getMonth + 1} -{' '}
                                                            {getDay + 9} tháng {getMonth + 1}
                                                        </p>
                                                    </p>
                                                    <p>₫28.700</p>
                                                </div>
                                                <div className={cx('speed-trans')}>
                                                    <p>
                                                        Tiết kiệm
                                                        <br />{' '}
                                                        <p className={cx('time-trans')}>
                                                            Giao hàng trước {getDay + 10} tháng {getMonth + 1} -{' '}
                                                            {getDay + 12} tháng {getMonth + 1}
                                                        </p>
                                                    </p>
                                                    <p>₫20.925</p>
                                                </div>
                                            </div>
                                        )}
                                    >
                                        <div className={cx('price-trans')}>₫20.925 - ₫28.700</div>
                                    </Tippy>
                                    <DownIcon className={cx('icon-down')} />
                                </div>
                            </div>
                        </div>

                        <div>
                            {data.tier_variations !== undefined &&
                                data.tier_variations.map((item, id) => {
                                    return (
                                        <div className={cx('classify')} key={id} onClick={(e) => handleClickBtn(e)}>
                                            <p className={cx('txt-trans', 'txt-classify')}>{item.name}</p>
                                            <div className={cx('btn-classify')}>
                                                {item.options.map((option, id) => {
                                                    return (
                                                        <ButtonCustom
                                                            key={id}
                                                            data-id={id}
                                                            data-name={item.name}
                                                            className={cx('product-variation')}
                                                            children={option}
                                                            small
                                                        >
                                                            {option}
                                                            <div className={cx('product-variation__tick')}></div>
                                                        </ButtonCustom>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}

                            <div className={cx('select-quanti')}>
                                <div className={cx('txt-trans')}>Số lượng</div>
                                <div className={cx('number-product')}>
                                    <div className={cx('up-down')}>
                                        <button className={cx('down')} onClick={handleDown}>
                                            <ApartIcon />
                                        </button>
                                        <input className={cx('quanti-updown')} type="text" value={1} />
                                        <button className={cx('up')} onClick={handleUp}>
                                            <PlusIcon />
                                        </button>
                                    </div>
                                    <div className={cx('txt')}>{data.stock} sản phẩm có sẵn</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('buy-product')}>
                        <div className={cx('buy')}>
                            <img
                                className={cx('cart-img')}
                                src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-orange.png"
                                alt="Cart"
                            />
                            <p>Thêm vào giỏ hàng</p>
                        </div>
                        <div className={cx('buy', 'now')}>Mua ngay</div>
                    </div>

                    <div className={cx('pull-bottom')}></div>

                    {data.shopee_verified === true && (
                        <div className={cx('banner')}>
                            <div className={cx('days7')}>
                                <img
                                    className={cx('days-img')}
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/6c502a2641457578b0d5f5153b53dd5d.png"
                                    alt=""
                                />
                                <Tippy
                                    // interactive
                                    placement="bottom"
                                    render={(atts) => (
                                        <div className={cx('text-tl')} tabIndex="-1" {...atts}>
                                            Cam kết đổi trả hàng miễn phí trong vòng 7 ngày kể từ ngày nhận hàng.
                                        </div>
                                    )}
                                >
                                    <p>7 ngày miễn phí trả hàng</p>
                                </Tippy>
                            </div>
                            <div className={cx('days7')}>
                                <img
                                    className={cx('days-img')}
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/511aca04cc3ba9234ab0e4fcf20768a2.png"
                                    alt=""
                                />
                                <Tippy
                                    // interactive
                                    placement="bottom"
                                    render={(atts) => (
                                        <div className={cx('text-tl')} tabIndex="-1" {...atts}>
                                            Cam kết hàng chính hãng 100%.
                                        </div>
                                    )}
                                >
                                    <p>Hàng chính hãng 100%</p>
                                </Tippy>
                            </div>
                            <div className={cx('days7')}>
                                <img
                                    className={cx('days-img')}
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/16ead7e0a68c3cff9f32910e4be08122.png"
                                    alt=""
                                />
                                <Tippy
                                    // interactive
                                    placement="bottom"
                                    render={(atts) => (
                                        <div className={cx('text-tl')} tabIndex="-1" {...atts}>
                                            Đơn hàng được vận chuyển miễn phí.
                                        </div>
                                    )}
                                >
                                    <p>Miễn phí vận chuyển</p>
                                </Tippy>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('detail-shop')}>
                <img
                    className={cx('img-shop')}
                    src={'	https://down-vn.img.susercontent.com/file/' + data.image}
                    alt=""
                />
                <div className={cx('info-shop')}>
                    <p className={cx('name-shop')}>{data.shop_name}</p>
                    <p className={cx('online')}>Online 25 Phút Trước</p>
                    <div className={cx('fc')}>
                        <div className={cx('chat')}>
                            <CartIcon />
                            <p className={cx('txt-shop')}>Chat Ngay</p>
                        </div>
                        <div className={cx('view')}>
                            <ShopIcon />
                            <p className={cx('txt-shop')}>Xem Shop</p>
                        </div>
                    </div>
                </div>
                <div className={cx('quality')}>
                    <div className={cx('quality-item')}>
                        <p className={cx('txt-quality')}>Đánh Giá</p>
                        <p className={cx('quantity-item')}>{data.cmt_count}</p>
                    </div>
                    <div className={cx('quality-item')}>
                        <p className={cx('txt-quality')}>Tỉ Lệ Phản Hồi</p>
                        <p className={cx('quantity-item')}>{data.raw_discount + 3}%</p>
                    </div>
                    <div className={cx('quality-item')}>
                        <p className={cx('txt-quality')}>Tham Gia</p>
                        <p className={cx('quantity-item')}>vài tháng trước</p>
                    </div>
                    <div className={cx('quality-item')}>
                        <p className={cx('txt-quality')}>Sản Phẩm</p>
                        <p className={cx('quantity-item')}>{data.stock}</p>
                    </div>
                    <div className={cx('quality-item')}>
                        <p className={cx('txt-quality')}>Thời Gian Phản Hồi</p>
                        <p className={cx('quantity-item')}>trong vài giờ</p>
                    </div>
                    <div className={cx('quality-item')}>
                        <p className={cx('txt-quality')}>Người Theo Dõi</p>
                        <p className={cx('quantity-item')}>1.7k</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProducts;
