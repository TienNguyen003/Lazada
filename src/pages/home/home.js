import classNames from 'classnames/bind';

import styles from './home.module.scss';
import ToolBar from '../../component/layout/ToolBar/toolbar';
import CategoryList from '../../component/ingredient/CategoryList/CategoryList';
import LightningDeal from '../../component/ingredient/LightningDeal/LightningDeal';
import ExclusivelyYou from '../../component/ingredient/ExclusivelyYou/ExclusivelyYou';
import LazMall from '../../component/ingredient/LazMall/lazmall';
import Banner from '../../component/ingredient/Banner/banner';

const cx = classNames.bind(styles);

function Home() {
    window.onscroll = function () {
        const toolbarCus = document.getElementsByClassName('toolbarCus');
        const upWeb = document.getElementsByClassName('upWeb');
        const quick = document.getElementsByClassName('quick');
        const laxmall = document.getElementsByClassName('laxmall');
        const industry = document.getElementsByClassName('industry');
        const forYou = document.getElementsByClassName('forYou');

        if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
            if (toolbarCus[0] !== undefined) {
                toolbarCus[0].style.display = 'block';
            }
            if (upWeb[0] !== undefined) {
                upWeb[0].onclick = () => {
                    window.scrollTo({
                        top: 0,
                        behavior: `smooth`,
                    });
                };
            }
            if (quick[0] !== undefined) {
                quick[0].onclick = () => {
                    window.scrollTo({
                        top: 594,
                        behavior: `smooth`,
                    });
                };
            }
            if (laxmall[0] !== undefined) {
                laxmall[0].onclick = () => {
                    window.scrollTo({
                        top: 1035,
                        behavior: `smooth`,
                    });
                };
            }
            if (industry[0] !== undefined) {
                industry[0].onclick = () => {
                    window.scrollTo({
                        top: 1378,
                        behavior: `smooth`,
                    });
                };
            }
            if (forYou[0] !== undefined) {
                forYou[0].onclick = () => {
                    window.scrollTo({
                        top: 1743,
                        behavior: `smooth`,
                    });
                };
            }
        } else {
            if (toolbarCus[0] !== undefined) {
                toolbarCus[0].style.display = 'none';
            }
        }
    };

    return (
        <div className={cx('home')}>
            <Banner />
            <LightningDeal />
            <LazMall />
            <CategoryList />
            <ExclusivelyYou />
            <ToolBar
                className={cx('toolbarCus')}
                up={cx('upWeb')}
                quick={cx('quick')}
                mall={cx('laxmall')}
                industry={cx('industry')}
                you={cx('forYou')}
            />
        </div>
    );
}

export default Home;
