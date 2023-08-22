import classNames from 'classnames/bind';
import styles from './topics.module.scss';

const cx = classNames.bind(styles);

function Exchange() {
    return (
        <div className={cx('p2')}>
            <div className={cx('topics')}>
                <h3 className={cx('title-topics')}>Topics</h3>
                <div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01VNRHwE1ONtkk00tKv_!!6000000001694-55-tps-64-64.svg"
                                alt="New user"
                            />
                            <span className={cx('context-txt')}>New user</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN010jbrSM1uZroFlwaxQ_!!6000000006052-55-tps-64-64.svg"
                                alt="My Account"
                            />
                            <span className={cx('context-txt')}>My Account</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01einRAZ25B6AD0ynwM_!!6000000007487-55-tps-64-64.svg"
                                alt="Vouchers &amp; Promotions"
                            />
                            <span className={cx('context-txt')}>Vouchers &amp; Promotions</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01rIWJ0K1QXB0ooGyXn_!!6000000001985-55-tps-64-64.svg"
                                alt="Returns/Refunds"
                            />
                            <span className={cx('context-txt')}>Returns/Refunds</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01AmwFeL1KNCgp9uCQU_!!6000000001151-55-tps-64-64.svg"
                                alt="Shipping &amp; Delivery"
                            />
                            <span className={cx('context-txt')}>Shipping &amp; Delivery</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01g4H4HF1mNwZVIs1W9_!!6000000004943-55-tps-64-64.svg"
                                alt="Payments"
                            />
                            <span className={cx('context-txt')}>Payments</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01Uq4Z4v1ZcyZ3g5gkn_!!6000000003216-55-tps-64-64.svg"
                                alt="Products on Lazada"
                            />
                            <span className={cx('context-txt')}>Products on Lazada</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01DVrT3t1cuKQ1zQg2J_!!6000000003660-55-tps-64-64.svg"
                                alt="Data Privacy"
                            />
                            <span className={cx('context-txt')}>Data Privacy</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN012HNUUv1VBGA4ZBEFr_!!6000000002614-2-tps-64-64.png"
                                alt="Choice Product"
                            />
                            <span className={cx('context-txt')}>Choice Product</span>
                        </p>
                    </div>
                    <div>
                        <p className={cx('content-topics')}>
                            <img
                                className={cx('img-topics')}
                                src="//lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01coooYw28x8YNiZ573_!!6000000007998-55-tps-64-64.svg"
                                alt="Other Topics"
                            />
                            <span className={cx('context-txt')}>Other Topics</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('contact')}>
                <div className={cx('contact-nd')}>
                    <h3>Still Need Help?</h3>
                    <div className={cx('txt-ct')}>
                        We're here to assist you 24/7, anytime you need us.
                        <br />
                        Please click "Chat Now" below. You can also contact us on our hotline at{' '}
                        <strong>19006509.</strong>
                        <br />
                    </div>
                    <div className={cx('btn')}>Chat now</div>
                </div>
            </div>
        </div>
    );
}

export default Exchange;
