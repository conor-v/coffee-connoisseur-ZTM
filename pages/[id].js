import { useRouter } from 'next/router'

const Dynamic = () => {
  const router = useRouter()

  return (
    <div>
      <p>page {router.query.id}</p>
    </div>
  )
}

export default Dynamic