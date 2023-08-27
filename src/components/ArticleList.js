import React from 'react';
import Article from './Article';
function ArticleList(props){
    const { posts } = props;

    return (
        <main>
            {posts.map((posts) => {
                <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} posts={posts} ></Article>
            })}
            
        </main>
    );
}

export default ArticleList;