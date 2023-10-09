import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import category from '../../../api/apiCategory';
import styles from './CategoryList.module.scss';

const cx = classNames.bind(styles);

export let nameProduct;

function CategoryList() {
    useEffect(() => {
        const category = document.querySelectorAll('.CategoryList_cate-item__tZbk9');
        for (let i = 0; i < category.length; i++) {
            // eslint-disable-next-line no-loop-func
            category[i].onclick = () => {
                const nameItem = category[i].querySelector('.CategoryList_cate-txt__N1-sX').innerHTML;
                nameProduct = nameItem;
            };
        }
    });

    return (
        <>
            <h3 className={cx('title')}>Danh mục ngành hàng</h3>
            <div className={cx('category')}>
                {category.slice(0, 16).map((item) => {
                    return (
                        <div key={item.catid}>
                            <Link to={`/Lazada/DetailLazMall/@${item.catid}`} className={cx('cate-item')}>
                                <img
                                    className={cx('cate-img')}
                                    src={'https://down-vn.img.susercontent.com/file/' + item.image}
                                    alt=""
                                />
                                <p className={cx('cate-txt')}>{item.display_name}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default CategoryList;

//https://shopee.vn/api/v4/pages/get_homepage_category_list
