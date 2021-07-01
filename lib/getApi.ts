import axios from 'axios';

interface BookResponse {
  title: string;
  link: string;
  image: string;
  author: string;
  price: number;
  discount: number;
  publisher: string;
  pubdate: number;
  isbn: number;
  description: string;
}
export const getApi = async (keyword: string) => {
  try {
    const { data } = await axios.get(
      'http://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/book.json',
      {
        params: {
          query: `${keyword}`,
          display: 10,
          start: 1,
        },
        headers: {
          'X-Naver-Client-Id': process.env.NEXT_PUBLIC_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_CLIENT_SECRET,
        },
      },
    );
    console.log('[SUCCESS]GET book data');
    return data;
  } catch {
    console.log('[FAIL]GET book data');
    return null;
  }
};
