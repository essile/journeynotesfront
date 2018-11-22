import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './Auth0Config';

export default class AuthService {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.redirectUri,
    audience: AUTH_CONFIG.audience,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    console.log("morjes 1");
    this.auth0.authorize();
  }

  handleAuthentication(history) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.push("/");
        console.log("morjes 2");
      } else if (err) {
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    sessionStorage.setItem('access_token', authResult.accessToken);
    sessionStorage.setItem('id_token', authResult.idToken);
    sessionStorage.setItem('expires_at', expiresAt);
    console.log("morjes 3");
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(sessionStorage.getItem('expires_at'));
    console.log("morjes 4");
    return new Date().getTime() < expiresAt;
  }
  
  getAccessToken() {
    console.log("morjes 5");
    const accessToken = sessionStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }
  logout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
	window.location.href = '/';
  }
}