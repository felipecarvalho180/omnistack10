
import httpClient from "../services";
import Dev from '../../models/dev/dev.model';
import Geolocation from '../../models/geolocation/geolocation.model';

const createDev = async ({
  github_username,
  techs,
  latitude,
  longitude,
}) => {
  const response = await httpClient.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    }
  );

  const result = new Dev({
    ...response.data,
    devId: response.data._id,
    location: new Geolocation({
      ...response.data.location,
      geolocationId: response.data.location._id,
    }),
  });

  return result;
};

const getDevs = async () => {
  const response = await httpClient.get('/devs');

  const result = response.data.map(rd => (new Dev({
    ...rd,
    devId: rd._id,
    location: new Geolocation({
      ...rd.location,
      geolocationId: rd.location._id,
    }),
  })));

  return result;
};

export default {
  createDev,
  getDevs,
}