import { useState } from 'react';
import '../styles/Page.css';
import '../styles/Blog.css';
import StoryLibrary from '../Data/Blogs.json';
import line from '../assets/line.svg';
import Search from '../assets/Search.svg';

export default function Stories() {
    const [articles, setArticles] = useState(3);
    function handleLoadMore() {
        if ((articles) < StoryLibrary.length)
            setArticles(articles + 3);
    }

    return (
        <div className='Page'>
            <div className='TopPart'>
                <div className='HeadTag'>Discover <span style={{ color: "#5E1A89" }}>Our Storie</span>s here!</div>
                <div className='HeadDesc'>A blog about great health related experiences.</div>
                <div className='SearchBar'><input type="text" name="emailAddress" className="SearchBtn"
                    placeholder="Search for stories, articles, keywords" value="" /></div>
                <img className='SearchGlasses' src={Search} alt='search'></img>
            </div>
            <div className="Stories">
                {StoryLibrary.map((story) => (
                    <div key={story.id} className='EachStory' style={story.id <= articles ? {} : { display: "none" }}>
                        <div>
                            <div className='StoryImage'><img src={story.Img} alt='StoryImage'></img></div>
                            <div className='StoryName'>{story.Title}</div>
                            <div className='StoryDate'>{story.Date}</div>
                            <div className='StoryDesc'>{story.Description}</div>

                        </div>

                        <div>
                            <div className='line'><img src={line} alt='line'></img></div>
                            <div className='StoryFooter'>
                                <div className='AuthorDetails'>
                                    <div className='AuthorImg'><img src={story.AuthorImg} alt='AuthorImage'></img></div>
                                    <div className='AuthorName'>{story.AuthorName}</div>
                                </div>
                                <div>
                                    <button className='ReadBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='Load'><button className='LoadBtn' onClick={handleLoadMore} style={articles === StoryLibrary.length ? { display: "none" } : {}}>{articles === StoryLibrary.length ? "" : "Load More"}</button></div>
        </div>
    );
}