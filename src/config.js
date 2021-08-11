const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`,
    issuer: 'https://redacted.okta.com/oauth2/default',
    clientId: 'redacted',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
        scopes: ['openid', 'email', 'groups']
    }
};

const oktaSignInConfig = {
    baseUrl: 'https://redacted.okta.com',
    clientId: 'redacted',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
        scopes: ['openid', 'email', 'groups']
    }
    // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};

export { oktaAuthConfig, oktaSignInConfig };