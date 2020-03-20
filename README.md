# angular-keycloak-execlude-pages


this project explains how to execlude some pages from keycloak authentecation.


this project has two components,first general component which the one that should execluded form authentetaction so the user can directly access it without redirect to keycloak login page.

and the second is the secure component wheras the user only access it after login.

for the project configuration you just need to add your keycloak URL , REALM and Client ID into environemt ts :
....
const keycloakConfig: KeycloakConfig = {
  url: 'ADD_YOUR_URL',
  realm: 'ADD_YOUR_REALM',
  clientId: 'ADD_YOUR_CLIENTID'
};

...


that's it :) 
