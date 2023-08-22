import classNames from 'classnames/bind';

import styles from './linkApp.module.scss';

const cx = classNames.bind(styles);

function LinkApp() {
    return (
        <div className={cx('zebra-page')}>
            <img
                className={cx('thumb')}
                src="//laz-img-cdn.alicdn.com/images/ims-web/TB18H55fQomBKNjSZFqXXXtqVXa.jpg_1200x1200q75.jpg_.webp"
                alt=""
            />
            <img
                className={cx('thumb')}
                src="//laz-img-cdn.alicdn.com/images/ims-web/TB17iy2a3ZC2uNjSZFnXXaxZpXa.jpg_1200x1200q75.jpg_.webp"
                alt=""
            />
            <img
                className={cx('thumb')}
                src="//laz-img-cdn.alicdn.com/images/ims-web/TB1Gfe5fQomBKNjSZFqXXXtqVXa.jpg_1200x1200q75.jpg_.webp"
                alt=""
            />
            <img
                className={cx('thumb')}
                src="//laz-img-cdn.alicdn.com/images/ims-web/TB18kS2a3ZC2uNjSZFnXXaxZpXa.jpg_1200x1200q75.jpg_.webp"
                alt=""
            />
            <img
                className={cx('thumb')}
                src="//laz-img-cdn.alicdn.com/images/ims-web/TB1U42kfRjTBKNjSZFuXXb0HFXa.jpg_1200x1200q75.jpg_.webp"
                alt=""
            />
        </div>
    );
}

export default LinkApp;
