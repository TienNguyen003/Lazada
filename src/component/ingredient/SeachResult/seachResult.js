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

    const handleClickListIcon = (e) => {
        const roomy = document.querySelector('.seachResult_icon-roomy__DPPDc');
        roomy.classList.add('seachResult_active__hHJ3F');
        e.target.classList.remove('seachResult_active__hHJ3F');
        const content = document.querySelector('.seachResult_content__XM8ab');
        content.classList.add('seachResult_active-content__qUVIw');
        const cards = content.querySelectorAll('.seachResult_card-items__JEtOF');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('seachResult_active-cards__YqVcW');
            const card = cards[i].querySelector('.seachResult_card-item__LVNjM');
            card.classList.add('seachResult_active-card__tEn3o');
        }

        const arrImg = document.querySelectorAll('.seachResult_arr-img__PjP-e');
        for (let j = 0; j < arrImg.length; j++) {
            arrImg[j].style.display = 'block';
        }
    };

    const handleClickRoomy = (e) => {
        const roomy = document.querySelector('.seachResult_icon-list__IprHl');
        roomy.classList.add('seachResult_active__hHJ3F');
        e.target.classList.remove('seachResult_active__hHJ3F');
        const content = document.querySelector('.seachResult_content__XM8ab');
        content.classList.remove('seachResult_active-content__qUVIw');
        const cards = content.querySelectorAll('.seachResult_card-items__JEtOF');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('seachResult_active-cards__YqVcW');
            const card = cards[i].querySelector('.seachResult_card-item__LVNjM');
            card.classList.remove('seachResult_active-card__tEn3o');
        }

        const arrImg = document.querySelectorAll('.seachResult_arr-img__PjP-e');
        for (let j = 0; j < arrImg.length; j++) {
            arrImg[j].style.display = 'none';
        }
    };

    console.clear();

    return (
        <>
            <div className={cx('view')}>
                <p>Xem: </p>
                <RoomyIcon className={cx('icon-roomy')} onClick={(e) => handleClickRoomy(e)} />
                <ListIcon className={cx('icon-list', 'active')} onClick={(e) => handleClickListIcon(e)} />
            </div>
            <div className={cx('content')}>
                {api.map((item) => {
                    return item.name.includes(url) ? (
                        <div className={cx('card-items')} key={item.itemid}>
                            <Link to={`/Lazada/ProductsResults/@${item.itemid}`}>
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

                                        <div className={cx('arr-img')}>
                                            {item.images.map((item, id) => {
                                                return (
                                                    <img
                                                        key={id}
                                                        className={cx('img-item')}
                                                        src={'https://down-vn.img.susercontent.com/file/' + item}
                                                        alt={item.name}
                                                    />
                                                );
                                            })}
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
