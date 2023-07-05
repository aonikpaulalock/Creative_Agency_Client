import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
const useDetailsData = () => {
  const { dynamicId } = useParams()
  const [details, setDetails] = useState({})
  console.log(details)
  useEffect(() => {
    fetch(`https://creative-agency-server-azure.vercel.app/project/${dynamicId}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data)
      })
  }, [dynamicId])
  return [details, setDetails]

}
export default useDetailsData;