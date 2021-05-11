const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// se crea una interface donde va tener el contrato de como sera la respuesta de la request
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// funcion asincrona que obtiene los datos de la rquest y se le agrega el tipado
async function fetchPost() {
  const response = await fetch(API_URL);
  const post = await response.json();
  return post as Post[];
}

// se crea otra funcion para iterar
async function run() {
  const post: Post[] = await fetchPost();
  post.map(item => console.log(item));
}

run();
