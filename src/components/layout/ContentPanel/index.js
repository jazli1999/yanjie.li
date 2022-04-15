import { Routes, Route } from 'react-router';
import Home from '../../containers/Articles';
import Article from '../../containers/Article';
import Category from '../../containers/Category';
import AboutMe from '../../containers/AboutMe';

function ContentPanel() {
    return (
        <div className="white-shadowed content-holder">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/article/:slug" element={<Article />} exact />
                <Route path="/category/:slug" element={<Category />} exact />
                <Route path="/about-me" element={<AboutMe />} exact />
            </Routes>
        </div>
    )
}

export default ContentPanel;