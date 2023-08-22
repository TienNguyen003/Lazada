/* eslint-disable react/jsx-no-target-blank */
import classNames from 'classnames/bind';
import styles from './mess.module.scss';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function MessFixed() {
    const btnRef = useRef();
    const contactRef = useRef();
    function handleShowC(e) {
        contactRef.current.classList.toggle('mess_visiable__1z1u4');
    }

    return (
        <div className={cx('mess')}>
            <div className={cx('contact')} ref={contactRef}>
                <div className={cx('silvers')}>
                    Created with by❤️ <p className={cx('name')}>Nguyen Tien</p>
                </div>
                <div className={cx('txt')}>Get in touch on</div>
                <div className={cx('contact-icon')}>
                    <a
                        className={cx('link-img')}
                        target="_blank"
                        href="https://github.com/TienNguyen003"
                    >
                        <img
                            className={cx('img-icon')}
                            src="https://i.pinimg.com/originals/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.png"
                            alt=""
                        />
                    </a>
                    <a
                        className={cx('link-img')}
                        target="_blank"
                        href="https://www.facebook.com/tien.candy17"
                    >
                        <img
                            className={cx('img-icon')}
                            src="https://anh.eva.vn/upload/4-2016/images/2016-11-30/1480494815-facebook-sao-viet.png"
                            alt=""
                        />
                    </a>
                    <a
                        className={cx('link-img')}
                        target="_blank"
                        href="https://www.instagram.com/candyy17033/"
                    >
                        <img
                            className={cx('img-icon')}
                            src="https://tech12h.com/sites/default/files/styles/inbody400/public/field/image/unnamed_1.png"
                            alt=""
                        />
                    </a>
                    <a
                        className={cx('link-img')}
                        target="_blank"
                        href="https://twitter.com/"
                    >
                        <img
                            className={cx('img-icon')}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <div
                className={cx('btn')}
                ref={btnRef}
                onClick={(e) => handleShowC(e)}
            >
                Get in Touch
            </div>
        </div>
    );
}

export default MessFixed;
