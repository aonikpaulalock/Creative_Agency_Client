import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
const useDetailsBlog = () => {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  console.log(details)
  useEffect(() => {
    fetch(`https://creative-agency-server-azure.vercel.app/blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data)
      })
  }, [id])
  return [details, setDetails]

}
export default useDetailsBlog;