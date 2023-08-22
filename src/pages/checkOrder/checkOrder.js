import classNames from 'classnames/bind';

import { SearchIcon } from '../../component/icons/icon';
import styles from './checkOrder.module.scss';

const cx = classNames.bind(styles);

function CheckOrder() {
    return (
        <div className={cx('care')}>
            <div className={cx('banner')}>
                <p className={cx('txt-banner')}>Lazada giúp được gì cho bạn</p>
                <div className={cx('search')}>
                    <input
                        className={cx('ip-banner')}
                        placeholder="Nhập từ khóa (mã giảm giá, hủy đơn hàng,...)"
                    />
                    <SearchIcon className={cx('icon-banner')}></SearchIcon>
                </div>
            </div>
            <h3 className={cx('title-sp')}>Chủ đề</h3>
            <div className={cx('topics')}>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
                <div className={cx('shopping')}>
                    <img
                        className={cx('img-sp')}
                        src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01X8Ae5L1qTfy6us981_!!6000000005497-55-tps-70-91.svg"
                        alt=""
                    />
                    <p className={cx('txt-sp')}>Kênh mua sắm thông minh</p>
                </div>
            </div>
            <h3 className={cx('title-sp')}>Bạn vẫn cần trợ giúp?</h3>
            <div className={cx('need-help')}>
                <div className={cx('need')}>
                    <img
                        className={cx('icon-help')}
                        src="https://laz-img-cdn.alicdn.com/imgextra/i2/O1CN01VTe9ED1MxxZUgiC5Y_!!6000000001502-55-tps-24-22.svg"
                        alt=""
                    />
                    <div className={cx('txt-help')}>
                        <p className={cx('title-help')}>Chat with LAZADA</p>
                        <p className={cx('detail-help')}>
                            Talk to CLEO, Our 24/7 virtual customer officer. Get
                            support from our Customer Care Specialists,
                            available 24/7.
                        </p>
                    </div>
                </div>
                <div className={cx('need')}>
                    <img
                        className={cx('icon-help')}
                        src="https://laz-img-cdn.alicdn.com/imgextra/i1/O1CN01tDSafQ1NBhRaJ5jj0_!!6000000001532-55-tps-24-24.svg"
                        alt=""
                    />
                    <div className={cx('txt-help')}>
                        <p className={cx('title-help')}>Call LAZADA</p>
                        <p className={cx('detail-help')}>
                            Hotline: 19006509. Customer service 24/7 hotline
                            (1000 VND/min).
                        </p>
                    </div>
                </div>
                <div className={cx('need')}>
                    <img
                        className={cx('icon-help')}
                        src="https://laz-img-cdn.alicdn.com/imgextra/i4/O1CN01rGJm081sTKmS80qR3_!!6000000005767-55-tps-96-96.svg"
                        alt=""
                    />
                    <div className={cx('txt-help')}>
                        <p className={cx('title-help')}>
                            LAZADA Facebook Community
                        </p>
                        <p className={cx('detail-help')}>
                            Lazada Vietnam official online buyer community. Get
                            advice and help from your fellow Lazada customers!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOrder;

//https://shopee.vn/api/v4/homepage/get_daily_discover?bundle=daily_discover_main&item_card=3&limit=60&need_tab=true&offset=0&view_session_id=3a96edc8-bf30-450d-a2ae-1121e50e8875 : api
//https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhsw2l6q2t3545_tn : img