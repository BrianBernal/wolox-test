import fetch from '../fetch';
import authRoutes from '../routes/auth';

/**
 * All setup of services to external API
 */

export default {
  async signup(payload) {
    const response = await fetch('post', authRoutes.signup, payload);
    return response;
  },

  async login(payload) {
    const response = await fetch('post', authRoutes.login, payload);
    return response;
  },
};
