
import httpClient from "../services";
import Dev from "../../models/devs/devs.model";
import Geolocation from "../../models/geolocation/geolocation.model";

const get = async ({
  latitude,
  longitude,
  techs,
}) => {
  const response = await httpClient.get('/search', {
    params: {
      latitude,
      longitude,
      techs,
    },
  });
  
  const result = response.data.map(rd => (new Dev({
    ...rd,
    devId: rd._id,
    location: new Geolocation({
      latitude: rd.location.coordinates[1],
      longitude: rd.location.coordinates[0],
      geolocationId: rd.location._id,
    })
  })));
  
  return result;
};

export default {
  get,
}