import { Routes, Route } from 'react-router';
import Home from '../../containers/Articles';
import Article from '../../containers/Article';

function ContentPanel() {
    return (
        <div className="white-shadowed content-holder">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/article/:slug" element={<Article />} exact />
            </Routes>
        </div>
    )
}

export default ContentPanel;