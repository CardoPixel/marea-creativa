import Date from '@components/Date'

import { getPostData } from '@lib/posts'

/**
 * Generate metadata for a post.
 *
 * @param {object} params - The parameters object containing the post ID.
 * @return {object} An object with metadata, including the post title.
 */
export async function generateMetadata({ params }) {
    const postData = await getPostData(params.id)

    return {
        title: postData.title,
    }
}

// -< Post >-
/**
 * Post component to display a single post.
 *
 * @param {object} params - The parameters object containing the post ID.
 * @return {JSX.Element} The JSX component for displaying the post.
 */
export default async function Post({ params }) {
    const postData = await getPostData(params.id)

    return (
        <>
            {/* Post Title */}
            <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>

            <div className='font-medium mb-5'>
                <Date dateString={postData.date} />
            </div>

            {/* Post Content */}
            <div
                className=''
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </>
    )
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/