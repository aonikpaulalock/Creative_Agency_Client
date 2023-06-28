import { useEffect, useState } from "react"

const usePorfolio = () => {
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetch("http://localhost:1000/projects")
      .then(res =>  res.json())
      .then(data => {
        setPortfolio(data)
      })
  }, [])

return [portfolio, setPortfolio]

}
export default usePorfolio;