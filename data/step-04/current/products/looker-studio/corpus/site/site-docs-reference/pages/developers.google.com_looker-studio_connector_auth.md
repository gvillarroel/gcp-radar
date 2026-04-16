---
title: "Authentication \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/auth
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector
source_metadata:
  url: https://developers.google.com/looker-studio/connector/auth
  title: "Authentication \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Authentication
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Community connectors support OAuth 2.0, Path/Username/Password, Path/Key, Username/Password, Username/Token, Key, and None authentication methods.
Depending on the authentication type, specific functions such as getAuthType() , resetAuth() , isAuthValid() , authCallback() , get3PAuthorizationUrls() , and setCredentials() need to be implemented within the connector.
Credentials should be stored securely using supported authentication types and the Properties Service, avoiding reliance on connector configuration fields.
For OAuth 2.0, the OAuth2 for Apps Script library should be utilized, following setup instructions and creating an OAuth2 service within the connector project.
The setCredentials() function is crucial for USER_PASS , USER_TOKEN , KEY , PATH_USER_PASS , and PATH_KEY authentication types to store user credentials using the Properties Service.
Community connectors support the following authentication methods:
OAuth 2.0
Path/Username/Password
Path/Key
Username/Password
Username/Token
Key
None
Depending on which method you are using, you must provide additional functions
in your connector.
The following table indicates which functions you must define depending on the
authentication type of your connector.
OAUTH2
PATH_USER_PASS PATH_KEY USER_PASS USER_TOKEN KEY
NONE
getAuthType()
required
required
required
resetAuth()
required
required
isAuthValid()
required
required
authCallback()
required
get3PAuthorizationUrls()
required
setCredentials()
required
Warning: To ensure credentials are kept secret, your connector must use a
supported authentication type and should not rely on connector configuration (i.e. getConfig )
fields to obtain credentials.
getAuthType()
This function should return the authentication type for the connector.
OAUTH2
data-studio/auth.gs
View on GitHub
/**
* Returns the Auth Type of this connector.
* @return {object} The Auth type.
*/
function getAuthTypeOAuth2 () {
const cc = DataStudioApp . createCommunityConnector ();
return cc . newAuthTypeResponse (). setAuthType ( cc . AuthType . OAUTH2 ). build ();
}
PATH_USER_PASS
/**
* Returns the Auth Type of this connector .
* @ return { object } The Auth type .
*/
function getAuthType () {
var cc = DataStudioApp . createCommunityConnector ();
return cc . newAuthTypeResponse ()
. setAuthType ( cc . AuthType . PATH_USER_PASS )
. setHelpUrl ( 'https://www.example.org/connector-auth-help' )
. build ();
}
PATH_KEY
/**
* Returns the Auth Type of this connector .
* @ return { object } The Auth type .
*/
function getAuthType () {
var cc = DataStudioApp . createCommunityConnector ();
return cc . newAuthTypeResponse ()
. setAuthType ( cc . AuthType . PATH_KEY )
. setHelpUrl ( 'https://www.example.org/connector-auth-help' )
. build ();
}
USER_PASS
data-studio/auth.gs
View on GitHub
/**
* Returns the Auth Type of this connector.
* @return {object} The Auth type.
*/
function getAuthTypeUserPass () {
const cc = DataStudioApp . createCommunityConnector ();
return cc
. newAuthTypeResponse ()
. setAuthType ( cc . AuthType . USER_PASS )
. setHelpUrl ( "https://www.example.org/connector-auth-help" )
. build ();
}
USER_TOKEN
data-studio/auth.gs
View on GitHub
/**
* Returns the Auth Type of this connector.
* @return {object} The Auth type.
*/
function getAuthTypeUserToken () {
const cc = DataStudioApp . createCommunityConnector ();
return cc
. newAuthTypeResponse ()
. setAuthType ( cc . AuthType . USER_TOKEN )
. setHelpUrl ( "https://www.example.org/connector-auth-help" )
. build ();
}
KEY
data-studio/auth.gs
View on GitHub
/**
* Returns the Auth Type of this connector.
* @return {object} The Auth type.
*/
function getAuthTypeKey () {
const cc = DataStudioApp . createCommunityConnector ();
return cc
. newAuthTypeResponse ()
. setAuthType ( cc . AuthType . KEY )
. setHelpUrl ( "https://www.example.org/connector-auth-help" )
. build ();
}
NONE
data-studio/auth.gs
View on GitHub
/**
* Returns the Auth Type of this connector.
* @return {object} The Auth type.
*/
function getAuthTypeNone () {
const cc = DataStudioApp . createCommunityConnector ();
return cc . newAuthTypeResponse (). setAuthType ( cc . AuthType . NONE ). build ();
}
Note: See getAuthType() for the full documentation.
resetAuth()
This function will clear any credentials stored for the user for the third-party
service.
OAUTH2
data-studio/auth.gs
View on GitHub
/**
* Resets the auth service.
*/
function resetAuthOAuth2 () {
getOAuthService (). reset ();
}
PATH_USER_PASS
/**
* Resets the auth service .
*/
function resetAuth () {
var userProperties = PropertiesService . getUserProperties ();
userProperties . deleteProperty ( 'dscc.path' );
userProperties . deleteProperty ( 'dscc.username' );
userProperties . deleteProperty ( 'dscc.password' );
}
PATH_KEY
/**
* Resets the auth service .
*/
function resetAuth () {
var userProperties = PropertiesService . getUserProperties ();
userProperties . deleteProperty ( 'dscc.path' );
userProperties . deleteProperty ( 'dscc.key' );
}
USER_PASS
data-studio/auth.gs
View on GitHub
/**
* Resets the auth service.
*/
function resetAuthUser () {
const userProperties = PropertiesService . getUserProperties ();
userProperties . deleteProperty ( "dscc.username" );
userProperties . deleteProperty ( "dscc.password" );
}
USER_TOKEN
data-studio/auth.gs
View on GitHub
/**
* Resets the auth service.
*/
function resetAuthUserToken () {
const userTokenProperties = PropertiesService . getUserProperties ();
userTokenProperties . deleteProperty ( "dscc.username" );
userTokenProperties . deleteProperty ( "dscc.password" );
}
KEY
data-studio/auth.gs
View on GitHub
/**
* Resets the auth service.
*/
function resetAuthKey () {
const userProperties = PropertiesService . getUserProperties ();
userProperties . deleteProperty ( "dscc.key" );
}
Note: See resetAuth() for the full documentation.
isAuthValid()
This function is called to determine if the authentication for the third-party
service is valid. If authentication is valid then it is expected that calls to
getData() and getSchema() will not fail due to
unauthorized access. If the auth is not valid then the user may receive a
notification to start the authorization flow.
OAUTH2
data-studio/auth.gs
View on GitHub
/**
* Returns true if the auth service has access.
* @return {boolean} True if the auth service has access.
*/
function isAuthValidOAuth2 () {
return getOAuthService (). hasAccess ();
}
PATH_USER_PASS
/**
* Returns true if the auth service has access .
* @ return { boolean } True if the auth service has access .
*/
function isAuthValid () {
var userProperties = PropertiesService . getUserProperties ();
var path = userProperties . getProperty ( 'dscc.path' );
var userName = userProperties . getProperty ( 'dscc.username' );
var password = userProperties . getProperty ( 'dscc.password' );
// This assumes you have a validateCredentials function that
// can validate if the path , userName and password are correct .
return validateCredentials ( path , userName , password );
}
PATH_KEY
/**
* Returns true if the auth service has access .
* @ return { boolean } True if the auth service has access .
*/
function isAuthValid () {
var userProperties = PropertiesService . getUserProperties ();
var path = userProperties . getProperty ( 'dscc.path' );
var key = userProperties . getProperty ( 'dscc.key' );
// This assumes you have a validateCredentials function that
// can validate if the path and key are correct .
return validateCredentials ( path , key );
}
USER_PASS
data-studio/auth.gs
View on GitHub
/**
* Returns true if the auth service has access.
* @return {boolean} True if the auth service has access.
*/
function isAuthValidUserPass () {
const userProperties = PropertiesService . getUserProperties ();
const userName = userProperties . getProperty ( "dscc.username" );
const password = userProperties . getProperty ( "dscc.password" );
// This assumes you have a validateCredentials function that
// can validate if the userName and password are correct.
return validateCredentials ( userName , password );
}
USER_TOKEN
data-studio/auth.gs
View on GitHub
/**
* Returns true if the auth service has access.
* @return {boolean} True if the auth service has access.
*/
function isAuthValidUserToken () {
const userProperties = PropertiesService . getUserProperties ();
const userName = userProperties . getProperty ( "dscc.username" );
const token = userProperties . getProperty ( "dscc.token" );
// This assumes you have a validateCredentials function that
// can validate if the userName and token are correct.
return validateCredentials ( userName , token );
}
KEY
data-studio/auth.gs
View on GitHub
/**
* Returns true if the auth service has access.
* @return {boolean} True if the auth service has access.
*/
function isAuthValidKey () {
const userProperties = PropertiesService . getUserProperties ();
const key = userProperties . getProperty ( "dscc.key" );
// This assumes you have a validateKey function that can validate
// if the key is valid.
return validateKey ( key );
}
Note: See isAuthValid() for the full documentation.
OAUTH2
Add and setup OAuth2 for Apps Script Library
Follow the setup instructions for the OAuth2 for Apps Script
library to add it to your connector project. Then follow the first step in the
usage guide to create an OAuth2 service in your connector
project. Your OAuth2 service can have any valid function name but make sure to
use the same name while referring to the OAuth2 service in your code.
For example, an OAuth2 service named exampleService :
data-studio/auth.gs
View on GitHub
/**
* Returns the configured OAuth Service.
* @return {Service} The OAuth Service
*/
function getOAuthService () {
return OAuth2 . createService ( "exampleService" )
. setAuthorizationBaseUrl ( "..." )
. setTokenUrl ( "..." )
. setClientId ( "..." )
. setClientSecret ( "..." )
. setPropertyStore ( PropertiesService . getUserProperties ())
. setCallbackFunction ( "authCallback" )
. setScope ( "..." );
}
authCallback()
This function is called to complete the OAuth 2.0 flow. The callback response
from the third-party auth service is provided as an argument and should be
handled by this function.
Example of handling the OAuth 2.0 callback using the OAuth2 for Apps Script
library:
data-studio/auth.gs
View on GitHub
/**
* The OAuth callback.
* @param {object} request The request data received from the OAuth flow.
* @return {HtmlOutput} The HTML output to show to the user.
*/
function authCallback ( request ) {
const authorized = getOAuthService (). handleCallback ( request );
if ( authorized ) {
return HtmlService . createHtmlOutput ( "Success! You can close this tab." );
}
return HtmlService . createHtmlOutput ( "Denied. You can close this tab" );
}
get3PAuthorizationUrls()
This function is called to get the URL that is required to initiate the auth
flow for the third-party service. If isAuthValid returns false then the URL
returned will be displayed to the user as a button or link so that they can
authorize access to the third-party service. See the reference for
get3PAuthorizationUrls() .
Example of returning the authorization Url using the OAuth2 for Apps Script
library:
data-studio/auth.gs
View on GitHub
/**
* Gets the 3P authorization URL.
* @return {string} The authorization URL.
* @see https://developers.google.com/apps-script/reference/script/authorization-info
*/
function get3PAuthorizationUrls () {
return getOAuthService (). getAuthorizationUrl ();
}
Note: If you are using Apps Script Advanced Services or
Google APIs for your connector, you might need to get your Connector verified.
See OAuth Client Verification for details.
USER_PASS , USER_TOKEN , KEY , PATH_USER_PASS , and PATH_KEY
The following is only needed for the USER_PASS , USER_TOKEN , KEY ,
PATH_USER_PASS , and PATH_KEY authentication flows.
setCredentials()
setCredentials is called after the user enters either their credential
information on the community connector configuration page. You should use the
Properties Service to save the credentials on a per-user
basis using UserProperties .
PATH_USER_PASS
/**
* Sets the credentials.
* @param {Request} request The set credentials request.
* @return {object} An object with an errorCode.
*/
function set Credentials ( request ) {
var creds = request . pathUserPass ;
var path = creds . path ;
var username = creds . username ;
var password = creds . password ;
// Optional
// Check if the provided path , username and password are valid through
// a call to your service . You would have to have a `checkForValidCreds`
// function defined for this to work .
var validCreds = checkForValidCreds ( path , username , password );
if ( ! validCreds ) {
return {
errorCode : 'INVALID_CREDENTIALS'
} ;
}
var userProperties = PropertiesService . getUserProperties ();
userProperties . set Property ( 'dscc.path' , path );
userProperties . set Property ( 'dscc.username' , username );
userProperties . set Property ( 'dscc.password' , password );
return {
errorCode : 'NONE'
} ;
}
PATH_KEY
/**
* Sets the credentials.
* @param {Request} request The set credentials request.
* @return {object} An object with an errorCode.
*/
function set Credentials ( request ) {
var creds = request . pathKey ;
var path = creds . path ;
var key = creds . key ;
// Optional
// Check if the provided path and key are valid through
// a call to your service . You would have to have a `checkForValidCreds`
// function defined for this to work .
var validCreds = checkForValidCreds ( path , key );
if ( ! validCreds ) {
return {
errorCode : 'INVALID_CREDENTIALS'
} ;
}
var userProperties = PropertiesService . getUserProperties ();
userProperties . set Property ( 'dscc.path' , path );
userProperties . set Property ( 'dscc.key' , key );
return {
errorCode : 'NONE'
} ;
}
USER_PASS
data-studio/auth.gs
View on GitHub
/**
* Sets the credentials.
* @param {Request} request The set credentials request.
* @return {object} An object with an errorCode.
*/
function setCredentialsUserPass ( request ) {
const creds = request . userPass ;
const username = creds . username ;
const password = creds . password ;
// Optional
// Check if the provided username and password are valid through a
// call to your service. You would have to have a `checkForValidCreds`
// function defined for this to work.
const validCreds = checkForValidCreds ( username , password );
if ( ! validCreds ) {
return {
errorCode : "INVALID_CREDENTIALS" ,
};
}
const userProperties = PropertiesService . getUserProperties ();
userProperties . setProperty ( "dscc.username" , username );
userProperties . setProperty ( "dscc.password" , password );
return {
errorCode : "NONE" ,
};
}
USER_TOKEN
data-studio/auth.gs
View on GitHub
/**
* Sets the credentials.
* @param {Request} request The set credentials request.
* @return {object} An object with an errorCode.
*/
function setCredentialsUserToken ( request ) {
const creds = request . userToken ;
const username = creds . username ;
const token = creds . token ;
// Optional
// Check if the provided username and token are valid through a
// call to your service. You would have to have a `checkForValidCreds`
// function defined for this to work.
const validCreds = checkForValidCreds ( username , token );
if ( ! validCreds ) {
return {
errorCode : "INVALID_CREDENTIALS" ,
};
}
const userProperties = PropertiesService . getUserProperties ();
userProperties . setProperty ( "dscc.username" , username );
userProperties . setProperty ( "dscc.token" , token );
return {
errorCode : "NONE" ,
};
}
KEY
data-studio/auth.gs
View on GitHub
/**
* Sets the credentials.
* @param {Request} request The set credentials request.
* @return {object} An object with an errorCode.
*/
function setCredentialsKey ( request ) {
const key = request . key ;
// Optional
// Check if the provided key is valid through a call to your service.
// You would have to have a `checkForValidKey` function defined for
// this to work.
const validKey = checkForValidKey ( key );
if ( ! validKey ) {
return {
errorCode : "INVALID_CREDENTIALS" ,
};
}
const userProperties = PropertiesService . getUserProperties ();
userProperties . setProperty ( "dscc.key" , key );
return {
errorCode : "NONE" ,
};
}
Note: See setCredentials() for the full documentation.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
