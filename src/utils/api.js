import {UNSPLASH_CLIENT} from 'react-native-dotenv';

export const getCollections = async () => {
  const query = await fetch(`https://api.unsplash.com/collections/?page=1&per_page=4`, {
    headers: {Authorization: `Client-ID ${UNSPLASH_CLIENT}`},
  });
  const body = await query.json();
  const response = body.map(el => ({
    title: el.title,
    description: el.description,
    cover: el.cover_photo,
    tags: el.tags,
    preview: el.preview_photos,
  }));
  // console.log(body);
  console.log(response);
};
