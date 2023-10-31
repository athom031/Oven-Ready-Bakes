import './Home.css';
import InstagramEmbeding from '../Miscellaneous/InstagramEmbeding';

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
                    <InstagramEmbeding />
                </div>
            </div>
        </div>
    );
}


export default Home;
