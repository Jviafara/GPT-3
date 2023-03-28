import React from 'react';
import { Article } from '../../components';
import './blog.css';
import { b1, b2, b3, b4, b5 } from './import';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container__groupA">
                    <Article
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        date="Sep 26, 2021"
                        image={b1}
                    />
                </div>
                <div className="gpt3__blog-container__groupB">
                    <Article
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        date="Sep 26, 2021"
                        image={b2}
                    />
                    <Article
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        date="Sep 26, 2021"
                        image={b3}
                    />
                    <Article
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        date="Sep 26, 2021"
                        image={b4}
                    />
                    <Article
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                        date="Sep 26, 2021"
                        image={b5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
