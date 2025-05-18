import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error.message || error}`);
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}

async function test() {
  const post = await fetchData<Post>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(post.title);
}

test();
