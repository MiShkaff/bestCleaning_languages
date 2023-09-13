import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import { useEffect, useState } from 'react';
import PageArm from './components/arm/pageArm';
import PageEn from './components/en/pageEn';

function App(props) {
  const [aboutSelected, aboutSetSelected] = useState("");
  const { loading, error, data } = useFetch('http://localhost:1337/api/header-lists');
  const [mainData, setMainData] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [partnersData, setPartnersData] = useState(null);
  useEffect(() => {
    async function fetchMainData() {
      const response = await fetch('http://localhost:1337/api/mains');
      const mainData = await response.json();
      setMainData(mainData);
    }
    fetchMainData();
  }, []);

  useEffect(() => {
    async function fetchServicesData() {
      const response = await fetch('http://localhost:1337/api/services');
      const servicesData = await response.json();
      setServicesData(servicesData);
    }
    fetchServicesData();
  }, []);

  useEffect(() => {
    async function fetchPartnersData() {
      const response = await fetch('http://localhost:1337/api/partners?populate=*');
      const partnersData = await response.json();
      setPartnersData(partnersData);
    }
    fetchPartnersData();
  }, []);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  if (!mainData) return null;
  if (!servicesData) return null;
  if (!partnersData) return null;

    // console.log(partnersData)
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path='/*' element={<PageEn mainData={mainData} data={data} />} />
            <Route path='arm/*' element={<PageArm mainData={mainData} data={data} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;