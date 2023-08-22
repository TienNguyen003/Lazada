import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faFire, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBuromobelexperte, faShopify } from '@fortawesome/free-brands-svg-icons';

import styles from './toolbar.module.scss';

const cx = classNames.bind(styles);

function ToolBar({ className, up, quick, mall, industry, you }) {
    return (
        <div className={cx('icon', className)}>
            <div className={cx('icon-up')}>
                <div className={cx('icon-contain', up)}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            </div>

            <div className={cx('icon-move')}>
                <div className={cx('overbg')}>
                    <div className={cx('icon-contain', quick)}>
                        <FontAwesomeIcon icon={faFire} className={cx('icon-item')} />
                    </div>
                </div>
                <div className={cx('hovered-text')}>Deal Chớp Nhoáng</div>
            </div>

            <div className={cx('icon-move')}>
                <div className={cx('overbg')}>
                    <div className={cx('icon-contain', mall)}>
                        <FontAwesomeIcon icon={faShopify} className={cx('icon-item')} />
                    </div>
                </div>
                <div className={cx('hovered-text')}>LazMall</div>
            </div>

            <div className={cx('icon-move')}>
                <div className={cx('overbg')}>
                    <div className={cx('icon-contain', industry)}>
                        <FontAwesomeIcon icon={faBuromobelexperte} className={cx('icon-item')} />
                    </div>
                </div>
                <div className={cx('hovered-text')}>Danh mục ngành hàng</div>
            </div>

            <div className={cx('icon-move')}>
                <div className={cx('overbg', 'last-icon')}>
                    <div className={cx('icon-contain', you)}>
                        <FontAwesomeIcon icon={faUser} className={cx('icon-item')} />
                    </div>
                </div>
                <div className={cx('hovered-text')}>Dành riêng cho bạn</div>
            </div>
        </div>
    );
}

export default ToolBar;
