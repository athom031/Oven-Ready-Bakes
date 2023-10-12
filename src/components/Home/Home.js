import './Home.css';
import InstagramEmbed from '../Miscellaneous/InstagramEmbed';

function Home() {
    return (
        <div>
            <div>
                Title will go here
            </div>

            <div className='horizontal-row-body'>
                <div>
                    Oven Ready Bakes Intro
                </div>
                <div>
                    <InstagramEmbed />
                </div>
            </div>
        </div>
    );
}


export default Home;
