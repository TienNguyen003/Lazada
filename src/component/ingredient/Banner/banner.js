import classNames from 'classnames/bind';
import { useEffect } from 'react';

import styles from './banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    useEffect(() => {
        //khai báo biến slideIndex đại diện cho slide hiện tại
        var slideIndex = 0;

        // Lấy ra slide và button
        var slides = document.getElementsByClassName('banner_mySlides__1HWJo');
        var dots = document.getElementsByClassName('banner_dot__jnCHo');

        //Khai bào hàm hiển thị slide
        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            } // ẩn tất cả slide
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(
                    ' banner_active__W9VGL',
                    '',
                );
            } // ẩn tất cả button
            if (slides[slideIndex] !== undefined) {
                slides[slideIndex].style.display = 'block'; // thêm slide đang click : block
                dots[slideIndex].className += ' banner_active__W9VGL'; // thêm btn click class : active
            }
            //chuyển đến slide tiếp theo
            slideIndex++;
            setTimeout(showSlides, 5000);
            //nếu đang ở slide cuối cùng thì chuyển về slide đầu
            if (slideIndex > slides.length - 1) {
                slideIndex = 0;
            }
        }

        //mặc định hiển thị slide đầu tiên
        showSlides((slideIndex = 0));
    });

    return (
        <div className={cx('slideShow')}>
            <div className={cx('slideshow-container')}>
                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="//icms-image.slatic.net/images/ims-web/96851066-1405-4314-88fb-687964909fe0.jpg"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/a9de80d6-b4d0-4005-b037-e49a7600ecc3.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/73accfd5-de37-4c1a-bea5-1d1a79fb5f04.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/47a43b39-479a-4cc8-8d4b-eb0a1c3ab9af.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/b04bed0d-1be0-4c02-ab54-0f51e63870bc.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://icms-image.slatic.net/images/ims-web/ced948cb-3401-48bb-bde7-eb41e9514874.jpg"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/2b0a8924-3f77-4609-83b4-f2a9c87472cb.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/d4e7b954-6d91-4287-a483-81c5c7999b10.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/cd8a8f71-1d80-4c4b-8566-269de7aecea1.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/72d7d41f-c940-46d9-8fde-0acbd35d10f1.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img
                        className={cx('img')}
                        src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/c9cccc9f-f137-43c8-bc81-54ca3d76753d.jpg_2200x2200q90.jpg_.webp"
                        alt=""
                    />
                </div>
            </div>
            <br />

            <div className={cx('button__next-slide')}>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
            </div>
        </div>
    );
}

export default Banner;
