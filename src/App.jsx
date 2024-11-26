import { useEffect, useState } from 'react';
import Tabs from './Tabs';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchTabs();
  }, []);

  if (loading) {
    return (
      <main className='loading-container'>
        <div className='loading'></div>
      </main>
    );
  }

  return (
    <main>
      <section>
        <Tabs tabs={tabs} />
      </section>
    </main>
  );
};
export default App;
