import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useDetailsData = () => {
  const { dynamicId } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://creative-agency-server-azure.vercel.app/project/${dynamicId}`);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [dynamicId]);

  return [details, setDetails, loading];
};

export default useDetailsData;
