import classNames from 'classnames/bind';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes/routes';
import Header from './component/layout/header/header';
import Footer from './component/layout/footer/footer';
import MessFixed from './component/layout/messFixed/mess';
import styles from "./App.module.scss"

const cx = classNames.bind(styles);

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className={cx("app")}>
                <Routes>
                    {publicRoutes.map((item, index) => {
                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Routes>
            </div>
            <Footer />
            <MessFixed/>
        </BrowserRouter>
    );
}

export default App;
