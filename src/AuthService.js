import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './Auth0Config';
import history from './history';

//Code reproduced with minor changes from https://auth0.com/docs/... 
//Copyright (c) 2015-current Auth0, Inc. <support@auth0.com> (http://auth0.com)

export default class AuthService {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.redirectUri,
    audience: AUTH_CONFIG.audience,
    responseType: 'token id_token',
    scope: 'openid'

  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
  }

  login() {
    // console.log("morjes 1");
    this.auth0.authorize();
  }

  handleAuthentication(history) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/");
        // console.log("morjes 2");
      } else if (err) {
        history.replace("/");
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    sessionStorage.setItem('access_token', authResult.accessToken);
    sessionStorage.setItem('id_token', authResult.idToken);
    sessionStorage.setItem('expires_at', expiresAt);
    // console.log("morjes 3");
    history.replace("/");
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(sessionStorage.getItem('expires_at'));
    // console.log("morjes 4");
    return new Date().getTime() < expiresAt;
  }
  
  getAccessToken() {
    // console.log("morjes 5");
    const accessToken = sessionStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }
  logout() {
    var logoutIframe = window.document.createElement("iframe");
    logoutIframe.setAttribute('style','display:none;')
    logoutIframe.setAttribute('src','https://journeynotes.eu.auth0.com/v2/logout');
    window.document.body.appendChild(logoutIframe);
    
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
	window.location.href = '/';
  }
}