'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Music = () => {
    const [song, setSong] = useState({
        artist: 'De La Soul',
        song: 'Betta Listen',
        url: 'https://open.spotify.com/track/2db8VSxfFglwMPmzjbYMS0?si=122e41f795714b1f'
    });

    const list = [
        {
            artist: 'De La Soul',
            song: 'Betta Listen',
            url: 'https://open.spotify.com/track/2db8VSxfFglwMPmzjbYMS0?si=122e41f795714b1f'
        },
        {
            artist: 'SpinalE',
            song: "L'esperimento del Cocktail",
            url: 'https://open.spotify.com/track/65WPqfj6BOqZgWjmPDdVCJ?si=ee9ce7b8732740d9'
        },
        {
            artist: 'Niels-Henning Ørsted Pedersen',
            song: 'Morning Fun',
            url: 'https://open.spotify.com/track/6erpkauC5PeFkRKO6Oj7rL?si=671b5cf7d44840a8'
        },
        {
            artist: 'Jazz Liberatorz',
            song: "Cin D'oeil",
            url: 'https://open.spotify.com/track/0Smxi47vM9rcOiUXsYuxER?si=fcaa7c6a447049de'
        },
        {
            artist: 'Rodrigo y Gabriela',
            song: 'Ixtapa',
            url: 'https://open.spotify.com/track/3augrYFaThwiMRYjDScWmv?si=1208c7de679542e3'
        },
        {
            artist: 'Martin Hayes Quartet',
            song: "Brennan's Reel",
            url: 'https://open.spotify.com/track/3HidYV1TitmxDpP0gTNPti?si=3bc5f63b42104142'
        },
        {
            artist: 'Thelonious Monk',
            song: 'North of The Sunset',
            url: 'https://open.spotify.com/track/0uy4Zg0yVfzMyqRG9bkRnK?si=80627ae09f4b4504'
        },
        {
            artist: 'Little Brother',
            song: 'The Way You Do It',
            url: 'https://open.spotify.com/track/2K1egclbZdZMjtxXswQznk?si=6a258cc64dbf4a3e'
        },
        {
            artist: 'Pete Rock, InI',
            song: 'Microphonist Wanderlust',
            url: 'https://open.spotify.com/track/3rZd9MtjF6Wp9jzcXOCf7L?si=0a027f0b095548e8'
        },
        {
            artist: 'Duke Ellington, John Coltrane',
            song: 'Stevie',
            url: 'https://open.spotify.com/track/6Ylpg33fqhQfJrXLwSxnzh?si=f3cf885ec4704257'
        },
        {
            artist: 'Outkast',
            song: 'Slump',
            url: 'https://open.spotify.com/track/4ufZSKCI84Pd2ZlWTJcu4i?si=92a84fac05e540b1'
        }
    ];

    useEffect(() => {
        setSong(list[Math.floor(Math.random() * list.length)]);
    }, []);

    return (
        <div className="fun col-start-3 col-end-23 md:col-end-13 xl:col-end-11">
            <div className="faded flex items-center rounded-full overflow-hidden py-4 pl-5 pr-10 transition-all duration-200 ease-in-out">
                <div className="icon flex rounded-full opacity-100">
                    <Image src={'/icons/spotify.svg'} width={40} height={40} alt={'Spotify'} />
                </div>
                <div className="track-list flex flex-col overflow-hidden flex-1 ml-5">
                    <div className="artist opacity-80 text-sm">Now Playing...</div>
                    <div className="song font-bold tracking-normal overflow-ellipsis overflow-hidden whitespace-nowrap text-sm">
                        <Link href={song.url} target="_blank" rel="nofollow noreferrer">
                            {`${song.song} by ${song.artist}`}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;
