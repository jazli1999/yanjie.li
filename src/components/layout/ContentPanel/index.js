import { Routes, Route } from 'react-router';
import Article from '../../containers/Article';
import Category from '../../containers/Category';
import AboutMe from '../../containers/AboutMe';

function ContentPanel() {
    return (
        <div className="white-shadowed content-holder">
            <Routes>
                <Route path="/" element={<AboutMe />} exact />
                <Route path="/article/:slug" element={<Article />} exact />
                <Route path="/category/:slug" element={<Category />} exact />
                <Route path="/about-me" element={<AboutMe />} exact />
            </Routes>
        </div>
    )
}

export default ContentPanel;