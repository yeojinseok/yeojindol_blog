import { getAllPostIds, getPostData } from '@/lib/posts'
import Date from '../../components/Data'
import utilStyles from '../../../styles/utils.module.css'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getData(id: string) {
  // Add the "await" keyword like this:
  const postData = await getPostData(id)

  return postData
}

export default async function Post({params}:{params: {id: string}}) {

  const postData = await getData(params.id);

  return (
<>
      {/* <Head> */}
      <title>{postData.title}</title>
      {/* </Head> */}
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </>
  )
}