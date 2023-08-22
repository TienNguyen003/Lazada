/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { nameProduct } from '../CategoryList/CategoryList';
import { apiProduct } from '../../../api/apiProductCate';
import category from '../../../api/apiCategory';
import { ListIcon } from '../../icons/icon';
import styles from './DetailLazMall.module.scss';
import WantToo from '../../layout/WantToo/wantToo';

const cx = classNames.bind(styles);

function DetailLazMall() {
    let arr = [];
    let arrCate = [];
    const url = useLocation().pathname.replace('/DetailLazMall/@', '');

    apiProduct.map((item) => {
        if (item.data.id == url) {
            arr = item.data.item;
        }
    });
    category.map((item) => {
        if (item.catid == url) {
            arrCate = item;
        }
    });

    return (
        <div>
            <div className={cx('curated-collections')}>
                <div className={cx('header-section')}>
                    <div className={cx('header-section__header')}>SIÊU SHOP THỊNH HÀNH - BUNG DEAL SIÊU PHẨM</div>
                    <div className={cx('header-section__content')}>
                        <div className={cx('image-carousel')}>
                            <div className={cx('collection-card')}>
                                <img
                                    className={cx('img__bg')}
                                    src="https://down-vn.img.susercontent.com/file/3854ad0615cfa2d15eb06a446816465d"
                                    alt=""
                                />
                                <div className={cx('card__collection-title')}>FREESHIP &amp; HOÀN XU XTRA</div>
                                <div className={cx('card__price')}>
                                    <span className={cx('txt')}>Từ</span>₫1.500
                                </div>
                            </div>
                            <div className={cx('collection-card')}>
                                <img
                                    className={cx('img__bg')}
                                    src="https://down-vn.img.susercontent.com/file/f05c3231cb59b6d0c233db3ea7a30b8f"
                                    alt=""
                                />
                                <div className={cx('card__collection-title')}>SHOP XU HƯỚNG </div>
                                <div className={cx('card__price')}>
                                    <span className={cx('txt')}>Từ</span>₫2.000
                                </div>
                            </div>
                            <div className={cx('collection-card')}>
                                <img
                                    className={cx('img__bg')}
                                    src="https://down-vn.img.susercontent.com/file/40ccf6a1162d77a99cd703885034d631"
                                    alt=""
                                />
                                <div className={cx('card__collection-title')}>HÀNG QUỐC TẾ</div>
                                <div className={cx('card__price')}>
                                    <span className={cx('txt')}>Từ</span>₫10.000
                                </div>
                            </div>
                            <div className={cx('collection-card')}>
                                <img
                                    className={cx('img__bg')}
                                    src="https://down-vn.img.susercontent.com/file/19b560edefa4b6869c0eac2f979c9f64"
                                    alt=""
                                />
                                <div className={cx('card__collection-title')}>SHOPEE MALL</div>
                                <div className={cx('card__price')}>
                                    <span className={cx('txt')}>Từ</span>₫4.000
                                </div>
                            </div>
                            <div className={cx('collection-card')}>
                                <img
                                    className={cx('img__bg')}
                                    src="https://down-vn.img.susercontent.com/file/f4499fa8d8fec743f8d8b2e63a973e79"
                                    alt=""
                                />
                                <div className={cx('card__collection-title')}>SHOP HÀNG XƯỞNG</div>
                                <div className={cx('card__price')}>
                                    <span className={cx('txt')}>Từ</span>₫2.000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className={cx('nameProduct')}>{nameProduct.replace('amp;', ' ')}</h3>
            <div className={cx('content')}>
                <div className={cx('category')}>
                    <div className={cx('cate-item')}>
                        <ListIcon />
                        <p>Tất cả Danh mục</p>
                    </div>
                    <div className={cx('cate-list')}>
                        <p>{nameProduct.replace('amp;', ' ')}</p>
                        {arrCate != undefined && arrCate.children.map((item) => console.log(item))}
                    </div>
                </div>
                <div className={cx('card')}>
                    <div className={cx('card-items')}>
                        {arr.length > 0
                            ? arr.map((item) => {
                                  return (
                                      <Link
                                          to={`/ProductsResults/@${item.itemid}`}
                                          key={item.id}
                                          className={cx('product-item')}
                                      >
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
                                                              {parseInt(
                                                                  item.price.toString().slice(0, -5),
                                                              ).toLocaleString('vi-VN')}
                                                          </span>
                                                          <span className={cx('currency')}> ₫</span>
                                                      </div>

                                                      <div className={cx('mod-price-second')}>
                                                          <span className={cx('mod-price-text')}>
                                                              <span className={cx('second-price')}>
                                                                  {Math.round(
                                                                      parseInt(
                                                                          item.price_before_discount
                                                                              .toString()
                                                                              .slice(0, -5),
                                                                      ) /
                                                                          (1 - item.raw_discount / 100),
                                                                  ).toLocaleString('vi-VN')}
                                                              </span>
                                                              <span className={cx('second-currency')}> ₫</span>
                                                          </span>
                                                          <span className={cx('mod-discount')}>
                                                              {' '}
                                                              {item.raw_discount}%
                                                          </span>
                                                      </div>
                                                  </div>

                                                  <div className={cx('card-footer')}>
                                                      <div className={cx('card-ratings')}>
                                                          Đã bán {item.global_sold_count}
                                                      </div>
                                                  </div>
                                                  <div className={cx('location')}>{item.shop_location}</div>
                                              </div>
                                          </div>
                                      </Link>
                                  );
                              })
                            : ''}
                    </div>
                </div>
            </div>
            <WantToo />
        </div>
    );
}

export default DetailLazMall;
