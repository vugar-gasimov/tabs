import { useEffect, useState } from 'react';
import Tabs from './Tabs';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const tabsRawData = await fetch(url);
        const tabsData = await tabsRawData.json();
        setTabs(tabsData);
      } catch (error) {
        console.log(error?.response?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTabs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <main>
      <Tabs tabs={tabs} />
    </main>
  );
};
export default App;
