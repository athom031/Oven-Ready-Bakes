import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramEmbeding = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/reel/CugSmsosGPp/" width={550} />
        </div>
    );
}

export default InstagramEmbeding;
