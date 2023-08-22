import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import routesConfig from '../../../config/routes';
import api from '../../../api/api';
import ButtonCustom from '../../layout/Button/button';
import styles from './LightningDeal.module.scss';

const cx = classNames.bind(styles);

function LightningDeal() {
    const [timeHour, setTimeHour] = useState();
    const [timeMn, setTimeMn] = useState();
    const [timeSe, setTimeSe] = useState();
    useEffect(() => {
        setInterval(function () {
            // eslint-disable-next-line no-unused-vars
            let todayDay = new Date();
            let hour = todayDay.getHours();
            let minute = todayDay.getMinutes();
            let second = todayDay.getSeconds();
            let prepand = hour > 12 ? ' PM ' : ' AM ';
            hour = hour > 12 ? hour - 12 : hour;
            if (hour === 12 && prepand === ' PM ') {
                if (minute === 0 && second === 0) {
                    hour = 1;
                    prepand = ' Noon';
                } else {
                    hour = 0;
                    prepand = ' PM';
                }
            }
            if (hour === 12 && prepand === ' AM ') {
                if (minute === 0 && second === 0) {
                    hour = 1;
                    prepand = ' Midnight';
                } else {
                    hour = 12;
                    prepand = ' AM';
                }
            }
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
    }, [timeMn, timeSe]);

    return (
        <>
            <div className={cx('features')}>
                <a href="//pages.lazada.vn/wow/i/vn/LandingPage/lazmall?spm=a2o4n.home.feature_nav.1.7d6a3bdcI7MWuj&amp;scm=1003.4.icms-zebra-5000379-2586391.OTHER_6502412013_7716864">
                    <div className={cx('feature')}>
                        <img
                            className={cx('feature-img')}
                            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png"
                            alt=""
                        />
                        <p className={cx('feature-txt')}>LazMall</p>
                    </div>
                </a>
                <a href="//pages.lazada.vn/wow/gcp/lazada/channel/vn/voucher/claimvoucher?spm=a2o4n.home.feature_nav.2.7d6a3bdcI7MWuj&amp;pha=true&amp;scm=1003.4.icms-zebra-5000379-2586391.OTHER_6502412016_7716864">
                    <div className={cx('feature')}>
                        <img
                            className={cx('feature-img')}
                            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1UiNthUT1gK0jSZFhXXaAtVXa.png"
                            alt=""
                        />
                        <p className={cx('feature-txt')}>Mã Giảm Giá</p>
                    </div>
                </a>
                <a href="//pages.lazada.vn/wow/gcp/route/lazada/vn/upr_1000345_lazada/channel/vn/upr-router/vn?hybrid=1&amp;data_prefetch=true&amp;wh_pid=/lazada/channel/vn/digitalgoods/nap-the-evoucher&amp;scm=1003.4.icms-zebra-5000379-2586391.OTHER_6502412018_7716864">
                    <div className={cx('feature')}>
                        <img
                            className={cx('feature-img')}
                            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DahvhO_1gK0jSZFqXXcpaXXa.png"
                            alt=""
                        />
                        <p className={cx('feature-txt')}>Nạp Thẻ & eVoucher</p>
                    </div>
                </a>
                <a href="//pages.lazada.vn/wow/gcp/route/lazada/vn/upr_1000345_lazada/channel/vn/upr-router/vn?hybrid=1&amp;data_prefetch=true&amp;wh_pid=/lazada/channel/vn/lazglobalchannel/Laz-Quoc-Te&amp;scm=1003.4.icms-zebra-5000379-2586391.OTHER_6502412019_7716864">
                    <div className={cx('feature')}>
                        <img
                            className={cx('feature-img')}
                            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1CDWbBYj1gK0jSZFuXXcrHpXa.png"
                            alt=""
                        />
                        <p className={cx('feature-txt')}>LazGlobal</p>
                    </div>
                </a>
            </div>
            <h3 className={cx('title')}>Deal Chớp Nhoáng</h3>
            <div className={cx('deal')}>
                <div className={cx('time')}>
                    <p className={cx('work')}>Đang bán</p>
                    <p className={cx('time-now')}>
                        Kết thúc trong &nbsp;
                        <button className={cx('btn')}>{timeHour}</button> :{' '}
                        <button className={cx('btn')}>{timeMn}</button> :{' '}
                        <button className={cx('btn')}>{timeSe}</button>
                    </p>
                    <Link to={routesConfig.LazFlash}>
                    <ButtonCustom outline>MUA SẮM TOÀN BỘ SẢN PHẨM</ButtonCustom>
                    </Link>
                </div>
                <div className={cx('product')}>
                    {api.slice(58, 64).map((item) => {
                        return (
                            <Link to={routesConfig.LazFlash} className={cx('product-item')} key={item.itemid}>
                                <img
                                    className={cx('product-img')}
                                    src={'https://down-vn.img.susercontent.com/file/' + item.image}
                                    alt={item.name}
                                />
                                <p className={cx('product-detail')}>{item.name}</p>
                                <p className={cx('price')}>
                                    {parseInt(item.price_min.toString().slice(0, -5)).toLocaleString(
                                        'vi-VN',
                                    )}{' '}
                                    ₫
                                </p>
                                <div className={cx('old-discount')}>
                                    <p className={cx('old-price')}>
                                        {Math.round(
                                            parseInt(item.price_min.toString().slice(0, -5)) /
                                                (1 - item.raw_discount / 100),
                                        ).toLocaleString('vi-VN')}{' '}
                                        ₫
                                    </p>
                                    <p className={cx('discount')}>{item.show_discount}%</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default LightningDeal;
