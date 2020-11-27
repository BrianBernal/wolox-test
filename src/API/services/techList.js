import fetch from '../fetch';
import techListRoutes from '../routes/techList';

export default {
  async getTechList() {
    const response = await fetch('get', techListRoutes.getTechList);
    return response;
  },
};
