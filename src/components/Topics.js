import '../styles/Topics.css';
import MainImg from '../assets/MainTopic.jpeg';
import Topic1 from '../assets/Topic1.png';

export default function Topics() {
    return(
        <>
        <div className='HeadTopic'><div>Topics for <span style={{color:"#7774F0"}}>You</span></div><div className='ViewAll'>View All</div></div>
        <div className='AllContent'>
            <div className='MainArticle'>
                <img src={MainImg} alt='MainArticle' className='MainImg'></img>
                <div className='MainTopicDate'>1 Month Ago</div>
                <div className='MainTopicHead'>The 6 Biggest Benefits Of EMR</div>
                <div className='MainTopicDesc'>Feel the power of world-class hospital, clinical and laboratory management system. Leverage the patient experience & overall business profitability & productivity. </div>
                <div className='MainTopicRead'>Read</div>
            </div>
            <div className='sideArticles'>
                <div className='article'>
                    <img src={Topic1} alt='Topic1' className='SideArticleImg'></img>
                    <div className='SideArticleDesc'>
                        <div className='SideArticleTopic'>Teleconsultation -A Boon Against ...</div>
                        <div className='SideArticleDate'>21 March 2021</div>
                    </div>
                </div>
                <div className='article'>
                    <img src={Topic1} alt='Topic1' className='SideArticleImg'></img>
                    <div className='SideArticleDesc'>
                        <div className='SideArticleTopic'>Teleconsultation -A Boon Against ...</div>
                        <div className='SideArticleDate'>21 March 2021</div>
                    </div>
                </div>
                <div className='article'>
                    <img src={Topic1} alt='Topic1' className='SideArticleImg'></img>
                    <div className='SideArticleDesc'>
                        <div className='SideArticleTopic'>Teleconsultation -A Boon Against ...</div>
                        <div className='SideArticleDate'>21 March 2021</div>
                    </div>
                </div>
            </div>
            <div className='sideArticles'>
                <div className='article'>
                    <img src={Topic1} alt='Topic1' className='SideArticleImg'></img>
                    <div className='SideArticleDesc'>
                        <div className='SideArticleTopic'>Teleconsultation -A Boon Against ...</div>
                        <div className='SideArticleDate'>21 March 2021</div>
                    </div>
                </div>
                <div className='article'>
                    <img src={Topic1} alt='Topic1' className='SideArticleImg'></img>
                    <div className='SideArticleDesc'>
                        <div className='SideArticleTopic'>Teleconsultation -A Boon Against ...</div>
                        <div className='SideArticleDate'>21 March 2021</div>
                    </div>
                </div>
                <div className='article'>
                    <img src={Topic1} alt='Topic1' className='SideArticleImg'></img>
                    <div className='SideArticleDesc'>
                        <div className='SideArticleTopic'>Teleconsultation -A Boon Against ...</div>
                        <div className='SideArticleDate'>21 March 2021</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}