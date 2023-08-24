import classNames from 'classnames/bind';

import WantToo from '../../layout/WantToo/wantToo'
import DetailProducts from '../DetailProducts/detailProducts';
import styles from './productsResult.module.scss';

const cx = classNames.bind(styles);

function ProductsResult() {
    return (
        <div className={cx('content')}>
            <div className={cx('detail')}>
                <DetailProducts />
            </div>
            <WantToo/>
        </div>
    );
}

export default ProductsResult;
