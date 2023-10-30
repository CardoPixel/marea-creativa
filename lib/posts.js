import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Get the path of the posts directory.
 * @type {string}
 */
const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Get an array of sorted post data.
 * @return {Array} An array of post data objects.
 */
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Get an array of post IDs for dynamic routing.
 * @return {Array} An array of objects containing 'params' with 'id'.
 */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

/**
 * Get data for a single post based on its ID.
 * @param {string} id - The ID of the post.
 * @return {Object} An object containing post data and HTML content.
 */
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content, // Use content without processing to pass to ReactMarkdown
    ...matterResult.data,
  };
}
