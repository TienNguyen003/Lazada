import classNames from 'classnames/bind';
import styles from './sales.module.scss';

const cx = classNames.bind(styles);

function SalesTogether() {
    return (
        <div className={cx('sale')}>
            <img
                className={cx('img-sale')}
                src="https://lzd-img-global.slatic.net/g/gcp/lazada/39ab79bf-949b-47fb-aa21-34b005636449_VN-1188-667.png_1188x667q80.png_.webp"
                alt=""
            />
            <img
                className={cx('res-sale')}
                src="https://lzd-img-global.slatic.net/g/gcp/lazada/906f7fc9-2e9a-421e-b187-7e195716b791_VN-1189-101.png_1188x101q80.png_.webp"
                alt=""
            />
            <img
                src="https://lzd-img-global.slatic.net/g/gcp/lazada/6f007389-d2ba-48ea-8b7f-4abeaa1918b7_VN-1189-86.png_1188x86q80.png_.webp"
                alt=""
            />
            <img
                className={cx('img-store')}
                src="https://lzd-img-global.slatic.net/g/gcp/lazada/97233cfc-7070-42c4-ae47-7ab654a8d766_VN-1189-127.png_1188x127q80.png_.webp"
                alt=""
            />
        </div>
    );
}

export default SalesTogether;
