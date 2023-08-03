'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import playlist from '../models/playlist';

const Music = () => {
  const [song, setSong] = useState({
    artist: 'De La Soul',
    song: 'Betta Listen',
    url: 'https://open.spotify.com/track/2db8VSxfFglwMPmzjbYMS0?si=122e41f795714b1f',
  });

  useEffect(() => {
    setSong(playlist[Math.floor(Math.random() * playlist.length)]);
  }, []);

  return (
    <div className="fun col-start-3 col-end-23 md:col-end-15 xl:col-start-6 xl:col-end-13">
      <div className="faded flex items-center rounded-full overflow-hidden py-4 pl-5 pr-10 transition-all duration-200 ease-in-out">
        <div className="icon flex rounded-full opacity-100">
          <Image
            src={'/icons/spotify.svg'}
            width={40}
            height={40}
            alt={'Spotify'}
          />
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
