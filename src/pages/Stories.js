import { useState } from 'react';
import '../styles/Page.css';
import '../styles/Stories.css';
import StoryLibrary from '../Data/Stories.json';
import line from '../assets/line.svg';

export default function Stories () {
    const [articles,setArticles] =  useState(6);
    function handleLoadMore() {
        if((articles)<StoryLibrary.length)
        setArticles(articles+3);
    }

    return(
        <div className='Page'>
        <div className='TopPart'>
            <div className='HeadTag'>Discover <span style={{color:"#7774F0"}}>Cool Storie</span>s here!</div>
            <div className='HeadDesc'>A blog about great health related experiences.</div>
            <div className='SearchBar'><input type="text" name="emailAddress" className="fontAwesome SearchBtn" 
            placeholder="Search for stories, articles, keywords                                                                                      &#xf002;" value=""/></div>
        </div>
        <div className="Stories">
            {StoryLibrary.map((story)=> (
                <div key={story.id} className='EachStory'style={story.id<=articles?{}:{display:"none"}}>
                    <div className='StoryImage'><img src={story.Img} alt='StoryImage'></img></div>
                    <div className='Tags'>
                        {story.Tags.map((tag) =>(
                            <div className='EachTag'>{tag}</div>
                        ))}
                    </div>
                    <div className='StoryName'>{story.Title}</div>
                    <div className='StoryDate'>{story.Date}</div>
                    <div className='StoryDesc'>{story.Description}</div>
                    <div className='line'><img src={line} alt='line'></img></div>
                    <div className='StoryFooter'>
                        <div className='AuthorDetails'>
                            <div className='AuthorImg'><img src={story.AuthorImg} alt='AuthorImage'></img></div>
                            <div className='AuthorName'>{story.AuthorName}</div>
                        </div>
                        <div>
                            <button className='ReadBtn'>Read More<i class="fa-solid fa-circle-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                ))}
        </div>
        <div className='Load'><button className='LoadBtn' onClick={handleLoadMore} style={articles===StoryLibrary.length?{display:"none"}:{}}>{articles===StoryLibrary.length?"":"Load More"}</button></div>
        </div>
    );
}