/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from 'react-markdown';
import { NoSsr } from '@mui/material';

import { getPostData } from '@lib/posts';
import Date from '@components/Date';

/**
 * Post component to display a single post.
 *
 * @param {object} params - The parameters object containing the post ID.
 * @return {JSX.Element} The JSX component for displaying the post.
 */
export default async function Post({ params }) {
    const postData = await getPostData(params.id);

    const getImgWithDimensions = async (props) => {
        return (
            <div className='overflow-hidden relative'>
                <img
                    src={props.src}
                    alt={props.alt}
                    style={{
                        objectFit: "scale-down",
                        maxWidth: "96vw"
                    }}
                />
            </div>
        );
    };

    return (
        <NoSsr>
            <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>

            <div className='font-medium mb-5'>
                <Date dateString={postData.date} />
            </div>

            {/* Post Content */}
            <ReactMarkdown
                components={{
                    img: getImgWithDimensions,
                }}
            >
                {postData.content}
            </ReactMarkdown>
        </NoSsr>
    );
}
