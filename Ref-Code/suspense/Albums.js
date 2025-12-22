// import {use} from 'react';
import { fetchData } from './data.js';

console.log('Albums component rendered');

export default function Albums({ artistId }) {
  // const albums = fetchData(`/${artistId}/albums`);
  const albums = use(fetchData(`/${artistId}/albums`));
  // console.log('Fetched albums:', albums);
  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}
