import classNames from 'classnames/bind';

import styles from './productsResult.module.scss';
import DetailProducts from '../DetailProducts/detailProducts';

const cx = classNames.bind(styles);

function ProductsResult() {
    return (
        <div className={cx('content')}>
            <div className={cx('detail')}>
                <DetailProducts />
            </div>
        </div>
    );
}

export default ProductsResult;
