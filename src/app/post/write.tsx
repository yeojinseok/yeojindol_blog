import { useRouter } from 'next/router'
import { FormEvent, useCallback, useRef } from 'react'
import Layout from '../../components/Layout'

export default function Write() {
  const idRef = useRef<HTMLInputElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const route = useRouter()

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id.length !== 0 && title.length !== 0 && content.length !== 0) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('fetch error')
        })
        .then((v) => alert(v.message))
      //   route.push('/')
    }
    e.preventDefault()
  }, [])

  return (
    <Layout>
      <h1>write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type={'text'} name="id" required ref={idRef} placeholder="id" />
        <br />
        <input type={'text'} name="title" ref={titleRef} placeholder="title" />
        <br />
        <textarea name="title" ref={contentRef} placeholder="content" />
        <br />
        <input type={'submit'} value="create" />
      </form>
    </Layout>
  )
}
