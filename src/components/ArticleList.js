import Article from "./Article";
import blogData from "../data/blog";


function ArticleList(){
    const posts = blogData.posts
    return (
        <main>
            {posts.map((element) => {
                return(
                    <Article key={element.id} title={element.title} date={element.date} preview={element.preview} />
                )
            })}
        </main>
    )

}

export default ArticleList;