import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import api from '../../../api/api';
import styles from './lazflash.module.scss';

const cx = classNames.bind(styles);

function Lazflash() {
    const [timeHour, setTimeHour] = useState();
    const [timeMn, setTimeMn] = useState();
    const [timeSe, setTimeSe] = useState();

    useEffect(() => {
        // thoi gian
        setInterval(function () {
            // eslint-disable-next-line no-unused-vars
            let todayDay = new Date();
            let hour = todayDay.getHours();
            let minute = todayDay.getMinutes();
            let second = todayDay.getSeconds();
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (minute < 10) {
                minute = '0' + minute;
            }
            if (second < 10) {
                second = '0' + second;
            }
            setTimeHour(hour);
            setTimeMn(minute);
            setTimeSe(second);
        }, 1000);

        // tab active
        const hours = document.querySelectorAll('.lazflash_goldenHour__dIeWg');
        const tabBorder = document.getElementsByClassName('lazflash_tab-border__5Aajj');
        for (let i = 0; i < hours.length; i++) {
            hours[i].onclick = () => {
                for (let j = 0; j < tabBorder.length; j++) {
                    tabBorder[j].classList.remove('lazflash_active__3vAdh');
                }
                tabBorder[i].classList.add('lazflash_active__3vAdh');
            };
        }

        // window scroll
        const navigation = document.querySelector('.lazflash_navigation__MrLbY');
        if (document.body.scrollTop > 340 || document.documentElement.scrollTop > 340) {
            navigation.classList.add('lazflash_positionFixed__fEhA+');
        } else {
            navigation.classList.remove('lazflash_positionFixed__fEhA+');
        }
    }, [timeMn, timeSe]);

    return (
        <div className={cx('lazflash')}>
            <div className={cx('flash-sale-banner')}></div>
            <div className={cx('navigation')}>
                <a href="#salePro" className={cx('link')}>
                    <div className={cx('goldenHour')}>
                        <p className={cx('hour')}>Đang bán</p>
                        <div className={cx('tab-border', 'active')}></div>
                    </div>
                </a>
                <p className={cx('time-now')}>
                    Kết thúc trong &nbsp;
                    <button className={cx('btn-time')}>{timeHour}</button> :{' '}
                    <button className={cx('btn-time')}>{timeMn}</button> :{' '}
                    <button className={cx('btn-time')}>{timeSe}</button>
                </p>
                <div className={cx('pull-left')}></div>
                <div className={cx('time-sale')}>
                    {timeHour >= 20 ? (
                        ''
                    ) : (
                        <a href="#twentyhours">
                            <div className={cx('goldenHour')}>
                                <p className={cx('hour')}>20:00</p>
                                <div className={cx('tab-border')}></div>
                            </div>
                        </a>
                    )}
                    <a href="#midnight">
                        <div className={cx('goldenHour')}>
                            <p className={cx('hour')}>00:00 Ngày mai</p>
                            <div className={cx('tab-border')}></div>
                        </div>
                    </a>
                    <a href="#twelvetomorrow">
                        <div className={cx('goldenHour')}>
                            <p className={cx('hour')}>12:00 Ngày mai</p>
                            <div className={cx('tab-border')}></div>
                        </div>
                    </a>
                    {timeHour >= 20 ? (
                        ''
                    ) : (
                        <a href="#twentytomorrow">
                            <div className={cx('goldenHour')}>
                                <p className={cx('hour')}>20:00 Ngày mai</p>
                                <div className={cx('tab-border')}></div>
                            </div>
                        </a>
                    )}
                </div>
            </div>

            <h3 className={cx('title')} id="salePro">
                Đang bán
            </h3>
            <div className={cx('products')}>
                {api.slice(300, 318).map((item) => {
                    return (
                        <div className={cx('flash-unit')} key={item.itemid}>
                            <div className={cx('flash-unit-image')}>
                                <img
                                    className={cx('image')}
                                    src={'https://down-vn.img.susercontent.com/file/' + item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div className={cx('unit-content')}>
                                <div className={cx('sale-title')}>{item.name}</div>
                                <div className={cx('sale-price')}>
                                    {parseInt(item.price_min.toString().slice(0, -5)).toLocaleString(
                                        'vi-VN',
                                    )}
                                </div>
                                <div className={cx('origin-price')}>
                                    <span className={cx('origin-price-value')}>
                                        {Math.round(
                                            parseInt(item.price_min.toString().slice(0, -5)) /
                                                (1 - item.raw_discount / 100),
                                        ).toLocaleString('vi-VN')}
                                    </span>
                                    <span className={cx('discount')}>-{item.show_discount}%</span>
                                </div>
                                <div className={cx('action-wrap')}>
                                    <div className={cx('item-button')}>Mua ngay</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {timeHour >= 20 ? (
                ''
            ) : (
                <>
                    <h3 className={cx('title')} id="twentyhours">
                        20:00
                    </h3>
                    <div className={cx('products')}>
                        {api.slice(400, 418).map((item) => {
                            return (
                                <div className={cx('flash-unit')} key={item.itemid}>
                                    <div className={cx('flash-unit-image')}>
                                        <img
                                            className={cx('image')}
                                            src={
                                                'https://down-vn.img.susercontent.com/file/' + item.image
                                            }
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className={cx('unit-content')}>
                                        <div className={cx('sale-title')}>{item.name}</div>
                                        <div className={cx('sale-price')}>
                                            {timeHour < 20
                                                ? '????'
                                                : parseInt(
                                                      item.price_min.toString().slice(0, -5),
                                                  ).toLocaleString('vi-VN')}
                                        </div>
                                        <div className={cx('origin-price')}>
                                            <span className={cx('origin-price-value')}>
                                                {timeHour < 20
                                                    ? '????'
                                                    : Math.round(
                                                          parseInt(
                                                              item.price_min.toString().slice(0, -5),
                                                          ) /
                                                              (1 - item.raw_discount / 100),
                                                      ).toLocaleString('vi-VN')}
                                            </span>
                                            <span className={cx('discount')}>
                                                -{item.show_discount}%
                                            </span>
                                        </div>
                                        <div className={cx('action-wrap')}>
                                            <div className={cx('item-button')}>Mua ngay</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}

            <h3 className={cx('title')} id="midnight">
                00:00 Ngày mai
            </h3>
            <div className={cx('products')}>
                {api.slice(215, 233).map((item) => {
                    return (
                        <div className={cx('flash-unit')} key={item.itemid}>
                            <div className={cx('flash-unit-image')}>
                                <img
                                    className={cx('image')}
                                    src={'https://down-vn.img.susercontent.com/file/' + item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div className={cx('unit-content')}>
                                <div className={cx('sale-title')}>{item.name}</div>
                                <div className={cx('sale-price')}>
                                    {timeHour < 24
                                        ? '????'
                                        : parseInt(
                                              item.price_min.toString().slice(0, -5),
                                          ).toLocaleString('vi-VN')}
                                </div>
                                <div className={cx('origin-price')}>
                                    <span className={cx('origin-price-value')}>
                                        {timeHour < 24
                                            ? '????'
                                            : Math.round(
                                                  parseInt(item.price_min.toString().slice(0, -5)) /
                                                      (1 - item.raw_discount / 100),
                                              ).toLocaleString('vi-VN')}
                                    </span>
                                    <span className={cx('discount')}>-{item.show_discount}%</span>
                                </div>
                                <div className={cx('action-wrap')}>
                                    <div className={cx('item-button')}>Mua ngay</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <h3 className={cx('title')} id="twelvetomorrow">
                12:00 Ngày mai
            </h3>
            <div className={cx('products')}>
                {api.slice(333, 351).map((item) => {
                    return (
                        <div className={cx('flash-unit')} key={item.itemid}>
                            <div className={cx('flash-unit-image')}>
                                <img
                                    className={cx('image')}
                                    src={'https://down-vn.img.susercontent.com/file/' + item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div className={cx('unit-content')}>
                                <div className={cx('sale-title')}>{item.name}</div>
                                <div className={cx('sale-price')}>
                                    {timeHour < 24
                                        ? '????'
                                        : parseInt(
                                              item.price_min.toString().slice(0, -5),
                                          ).toLocaleString('vi-VN')}
                                </div>
                                <div className={cx('origin-price')}>
                                    <span className={cx('origin-price-value')}>
                                        {timeHour < 24
                                            ? '????'
                                            : Math.round(
                                                  parseInt(item.price_min.toString().slice(0, -5)) /
                                                      (1 - item.raw_discount / 100),
                                              ).toLocaleString('vi-VN')}
                                    </span>
                                    <span className={cx('discount')}>-{item.show_discount}%</span>
                                </div>
                                <div className={cx('action-wrap')}>
                                    <div className={cx('item-button')}>Mua ngay</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {timeHour >= 20 ? (
                ''
            ) : (
                <>
                    <h3 className={cx('title')} id="twentytomorrow">
                        20:00 Ngày mai
                    </h3>
                    <div className={cx('products')}>
                        {api.slice(105, 123).map((item) => {
                            return (
                                <div className={cx('flash-unit')} key={item.itemid}>
                                    <div className={cx('flash-unit-image')}>
                                        <img
                                            className={cx('image')}
                                            src={
                                                'https://down-vn.img.susercontent.com/file/' + item.image
                                            }
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className={cx('unit-content')}>
                                        <div className={cx('sale-title')}>{item.name}</div>
                                        <div className={cx('sale-price')}>
                                            {timeHour < 20
                                                ? '????'
                                                : parseInt(
                                                      item.price_min.toString().slice(0, -5),
                                                  ).toLocaleString('vi-VN')}
                                        </div>
                                        <div className={cx('origin-price')}>
                                            <span className={cx('origin-price-value')}>
                                                {timeHour < 20
                                                    ? '????'
                                                    : Math.round(
                                                          parseInt(
                                                              item.price_min.toString().slice(0, -5),
                                                          ) /
                                                              (1 - item.raw_discount / 100),
                                                      ).toLocaleString('vi-VN')}
                                            </span>
                                            <span className={cx('discount')}>
                                                -{item.show_discount}%
                                            </span>
                                        </div>
                                        <div className={cx('action-wrap')}>
                                            <div className={cx('item-button')}>Mua ngay</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

export default Lazflash;
