/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../api/api';
import ButtonCustom from '../../globalstyle/Button/button';
import styles from './ExclusivelyYou.module.scss';

const cx = classNames.bind(styles);

function ExclusivelyYou() {
    const [demY, setDemY] = useState(24);

    function handleOnclick() {
        setDemY(demY + 24);
    }

    return (
        <div>
            <h3 className={cx('title')}>Dành riêng cho bạn</h3>
            <div className={cx('content')}>
                {api.slice(0, demY).map((item) => {
                    return (
                        <div className={cx('card-items')} key={item.itemid}>
                            <Link to={`/Lazada/ProductsResults/@${item.itemid}`}>
                                <div className={cx('card-item')}>
                                    <div className={cx('img-background')}>
                                        <img
                                            className={cx('imageBg')}
                                            src={
                                                'https://down-vn.img.susercontent.com/file/' + item.image
                                            }
                                            alt={item.name}
                                        />
                                    </div>

                                    <div className={cx('item-desc')}>
                                        <div className={cx('desc-segment')}>
                                            <div className={cx('segment-icon')}>
                                                <img
                                                    className={cx('imageLaz')}
                                                    src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png"
                                                    alt=""
                                                />
                                                <span className={cx('segment-text')}></span>
                                            </div>
                                        </div>

                                        <div className={cx('card-title')}>
                                            <span className={cx('title-txt')}>{item.name}</span>
                                        </div>

                                        <div className={cx('mod-price')}>
                                            <div className={cx('mod-first-line')}>
                                                <span className={cx('price')}>
                                                    {parseInt(
                                                        item.price_min.toString().slice(0, -5),
                                                    ).toLocaleString('vi-VN')}
                                                </span>
                                                <span className={cx('currency')}> ₫</span>
                                            </div>

                                            <div className={cx('mod-price-second')}>
                                                <span className={cx('mod-price-text')}>
                                                    <span className={cx('second-price')}>
                                                        {Math.round(
                                                            parseInt(
                                                                item.price_min.toString().slice(0, -5),
                                                            ) /
                                                                (1 - item.raw_discount / 100),
                                                        ).toLocaleString('vi-VN')}
                                                    </span>
                                                    <span className={cx('second-currency')}> ₫</span>
                                                </span>
                                                <span className={cx('mod-discount')}>
                                                    {' '}
                                                    {item.show_discount}%
                                                </span>
                                            </div>
                                        </div>

                                        <div className={cx('card-footer')}>
                                            <div className={cx('card-ratings')}>
                                                Đã bán {item.global_sold_count}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
                <ButtonCustom className={cx('btncus')} outline children={'Tải thêm'} onClick={handleOnclick} />
            </div>
        </div>
    );
}

export default ExclusivelyYou;
