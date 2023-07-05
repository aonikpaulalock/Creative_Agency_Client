import { useEffect, useState } from "react"

const usePorfolio = () => {
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetch("https://creative-agency-server-azure.vercel.app/projects")
      .then(res =>  res.json())
      .then(data => {
        setPortfolio(data)
      })
  }, [])

return [portfolio, setPortfolio]

}
export default usePorfolio;