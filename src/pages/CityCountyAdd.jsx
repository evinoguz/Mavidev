import React, { useState, useEffect } from 'react';
import CityCountyService from '../services/CityCountyService';
import { Dropdown, Button } from 'semantic-ui-react';
//import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CityCountyAdd() {
  const [cities, setCities] = useState([]);
  const [counties, setCounties] = useState([]);
  const [selectCity, setSelectCity] = useState([]);
  const [selectCounty, setSelectCounty] = useState([]);
  const [itemAdd, setItemAdd] = useState(0);



  useEffect(() => {
    let citycountyService = new CityCountyService();
    citycountyService
    .getCities()
    .then((result) => setCities(result.data.data));
  }, []);

  useEffect(() => {
    let citycountyService = new CityCountyService();
    citycountyService
      .getCounties(selectCity.cityId)
      .then((result) => setCounties(result.data.data));
  }, [selectCity]);

 useEffect(() => {
   let citycountyService = new CityCountyService();
   citycountyService
     .postCityCountAdd({ county: { countyId: itemAdd } })
     .then((result) => {
       toast.success(result.data.message, {
         className: 'custom-toast',
         draggable: true,
         position: toast.POSITION.BOTTOM_RIGHT,
       });
     })
 }, [itemAdd]);

 
  const handleAddToCityCounty = () => {
    if (selectCounty) {
      setItemAdd(selectCounty.countyId);
    };
  };
 
  const cancel = () => {
    setSelectCity([]);
    setSelectCounty([]);
  };

  return (
    <div>
      <div style={{ width: '30%', float: 'left' }}>
        <Dropdown
          placeholder={'İl seçiniz...'}
          text={selectCity.cityName}
          fluid
          selection
          clearable
          item
        >
          <Dropdown.Menu>
            {cities.map((city) => (
              <Dropdown.Item
                key={city.cityId}
                onClick={() => setSelectCity(city)}
              >
                {city.cityName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div style={{ width: '30%', float: 'left', marginLeft: 5 }}>
        <Dropdown
          placeholder={'İlçe seçiniz...'}
          text={selectCounty.countyName}
          fluid
          selection
          clearable
          item
        >
          <Dropdown.Menu>
            {counties.map((county) => (
              <Dropdown.Item
                key={county.countyId}
                onClick={() => setSelectCounty(county)}
              >
                {county.countyName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div style={{ width: '20%', float: 'left', marginLeft: 10 }}>
        <Button.Group>
          <Button onClick={() => cancel()}>İptal</Button>
          <Button.Or />
          <Button
            onClick={() => handleAddToCityCounty()}
            // as={NavLink}
            // to="/citycounty/list"
            positive
          >
            Kaydet
          </Button>
        </Button.Group>
      </div>
      <ToastContainer />
    </div>
  );
}
