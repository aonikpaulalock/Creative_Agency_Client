import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const useDetailsBlog = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://creative-agency-server-azure.vercel.app/blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      });
  }, [id]);

  return [details, setDetails, loading,];
};

export default useDetailsBlog;
