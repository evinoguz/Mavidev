import axios from 'axios';

export default class CityCountyService {
  getCities() {
    return axios.get('http://localhost:8080/api/city/getall');
  }
  getCounties(value) {
    return axios.get('http://localhost:8080/api/city/county/getByCity?cityId='+value);
  }
  getCityCountyList() {
    return axios.get('http://localhost:8080/api/city_county/getall');
  }
  postCityCountAdd(value) {
    return axios.post('http://localhost:8080/api/city_county/add',value);
  }
}
