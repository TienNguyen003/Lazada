/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { RoomyIcon, ListIcon } from '../../icons/icon';
import WantToo from '../../layout/WantToo/wantToo';
import api from '../../../api/api';
import styles from './seachResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult() {
    const url = decodeURIComponent(useLocation().pathname.replace('/SearchResults/@', ''));

    return (
        <>
            <div className={cx('view')}>
                <p>Xem: </p>
                <RoomyIcon className={cx('icon-roomy')}/>
                <ListIcon className={cx('icon-list')}/>
            </div>
            <div className={cx('content')}>
                {api.map((item) => {
                    return item.name.includes(url) ? (
                        <div className={cx('card-items')} key={item.itemid}>
                            <Link to={`/ProductsResults/@${item.itemid}`}>
                                <div className={cx('card-item')}>
                                    <div className={cx('img-background')}>
                                        <img
                                            className={cx('imageBg')}
                                            src={'https://down-vn.img.susercontent.com/file/' + item.image}
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
                                                    {parseInt(item.price_min.toString().slice(0, -5)).toLocaleString(
                                                        'vi-VN',
                                                    )}
                                                </span>
                                                <span className={cx('currency')}> ₫</span>
                                            </div>

                                            <div className={cx('mod-price-second')}>
                                                <span className={cx('mod-price-text')}>
                                                    <span className={cx('second-price')}>
                                                        {Math.round(
                                                            parseInt(item.price_min.toString().slice(0, -5)) /
                                                                (1 - item.raw_discount / 100),
                                                        ).toLocaleString('vi-VN')}
                                                    </span>
                                                    <span className={cx('second-currency')}> ₫</span>
                                                </span>
                                                <span className={cx('mod-discount')}> {item.show_discount}%</span>
                                            </div>
                                        </div>

                                        <div className={cx('card-footer')}>
                                            <div className={cx('card-ratings')}>Đã bán {item.global_sold_count}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ) : (
                        ''
                    );
                })}
            </div>
            <WantToo />
        </>
    );
}

export default SearchResult;
