import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/logementsjson.json';
import Carrousel from './Carrousel'; 
import "../styles/components/fichedatacontainer.scss"
import Fichetitle from './Fichetitle';
import Errorpage from './Errortext';
import Fichetags from './Fichetags';
import Ficheratings from './Ficheratings';
import Fichecollapsible from './Fichecollapsible';
import Fichehost from './Fichehost';

const Fichedatacontainer = () => {
  const { id } = useParams();
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const selectedLogement = data.find(item => item.id === id);
      setSelectedData(selectedLogement);
    };

    fetchData();
  }, [id]);

  return (
    <div className='data-container'>
      {selectedData ? (
        <div className='data'>
        <Carrousel data={selectedData} />
        <div className='ficheinfos'>
          <div className='title-tags'>
          <Fichetitle data={selectedData}/>
          <Fichetags data={selectedData}/>
          </div>
          <div className='ratings-host'>
          <Ficheratings rating={selectedData.rating}/>
          <Fichehost data={selectedData}/>
          </div>
        </div>
        <Fichecollapsible data={selectedData}/>
        </div>
      )
       : (
        <Errorpage/>
      )}
    </div>
  );
};

export default Fichedatacontainer;