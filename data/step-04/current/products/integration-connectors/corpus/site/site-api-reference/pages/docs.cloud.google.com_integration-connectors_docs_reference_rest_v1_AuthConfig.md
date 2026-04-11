---
title: "AuthConfig \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/AuthConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/AuthConfig
  title: "AuthConfig \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Reference
Send feedback
AuthConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
UserPassword
JSON representation
Oauth2JwtBearer
JSON representation
JwtClaims
JSON representation
Oauth2ClientCredentials
JSON representation
SshPublicKey
JSON representation
Oauth2AuthCodeFlow
JSON representation
Oauth2AuthCodeFlowGoogleManaged
JSON representation
AuthConfig defines details of a authentication type.
JSON representation
{
"authType" : enum ( AuthType ) ,
"additionalVariables" : [
{
object ( ConfigVariable )
}
] ,
"authKey" : string ,
// Union field type can be only one of the following:
"userPassword" : {
object ( UserPassword )
} ,
"oauth2JwtBearer" : {
object ( Oauth2JwtBearer )
} ,
"oauth2ClientCredentials" : {
object ( Oauth2ClientCredentials )
} ,
"sshPublicKey" : {
object ( SshPublicKey )
} ,
"oauth2AuthCodeFlow" : {
object ( Oauth2AuthCodeFlow )
} ,
"oauth2AuthCodeFlowGoogleManaged" : {
object ( Oauth2AuthCodeFlowGoogleManaged )
}
// End of list of possible types for union field type .
}
Fields
authType
enum ( AuthType )
The type of authentication configured.
additionalVariables[]
object ( ConfigVariable )
List containing additional auth configs.
authKey
string
Identifier key for auth config
Union field type . Supported auth types. type can be only one of the following:
userPassword
object ( UserPassword )
UserPassword.
oauth2JwtBearer
object ( Oauth2JwtBearer )
Oauth2JwtBearer.
oauth2ClientCredentials
object ( Oauth2ClientCredentials )
Oauth2ClientCredentials.
sshPublicKey
object ( SshPublicKey )
SSH Public Key.
oauth2AuthCodeFlow
object ( Oauth2AuthCodeFlow )
Oauth2AuthCodeFlow.
oauth2AuthCodeFlowGoogleManaged
object ( Oauth2AuthCodeFlowGoogleManaged )
Oauth2AuthCodeFlowGoogleManaged.
UserPassword
Parameters to support Username and Password Authentication.
JSON representation
{
"username" : string ,
"password" : {
object ( Secret )
}
}
Fields
username
string
Username.
password
object ( Secret )
Secret version reference containing the password.
Oauth2JwtBearer
Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
JSON representation
{
"clientKey" : {
object ( Secret )
} ,
"jwtClaims" : {
object ( JwtClaims )
}
}
Fields
clientKey
object ( Secret )
Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate. This private key will be used to sign JWTs used for the jwt-bearer authorization grant. Specified in the form as: projects/*/secrets/*/versions/* .
jwtClaims
object ( JwtClaims )
JwtClaims providers fields to generate the token.
JwtClaims
JWT claims used for the jwt-bearer authorization grant.
JSON representation
{
"issuer" : string ,
"subject" : string ,
"audience" : string
}
Fields
issuer
string
Value for the "iss" claim.
subject
string
Value for the "sub" claim.
audience
string
Value for the "aud" claim.
Oauth2ClientCredentials
Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
JSON representation
{
"clientId" : string ,
"clientSecret" : {
object ( Secret )
}
}
Fields
clientId
string
The client identifier.
clientSecret
object ( Secret )
Secret version reference containing the client secret.
SshPublicKey
Parameters to support Ssh public key Authentication.
JSON representation
{
"username" : string ,
"sshClientCert" : {
object ( Secret )
} ,
"certType" : string ,
"sshClientCertPass" : {
object ( Secret )
}
}
Fields
username
string
The user account used to authenticate.
sshClientCert
object ( Secret )
SSH Client Cert. It should contain both public and private key.
certType
string
Format of SSH Client cert.
sshClientCertPass
object ( Secret )
Password (passphrase) for ssh client certificate if it has one.
Oauth2AuthCodeFlow
Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details.
JSON representation
{
"authCode" : string ,
"pkceVerifier" : string ,
"redirectUri" : string ,
"clientId" : string ,
"clientSecret" : {
object ( Secret )
} ,
"scopes" : [
string
] ,
"enablePkce" : boolean ,
"authUri" : string
}
Fields
authCode
string
Authorization code to be exchanged for access and refresh tokens.
pkceVerifier
string
PKCE verifier to be used during the auth code exchange.
redirectUri
string
Redirect URI to be provided during the auth code exchange.
clientId
string
Client ID for user-provided OAuth app.
clientSecret
object ( Secret )
Client secret for user-provided OAuth app.
scopes[]
string
Scopes the connection will request when the user performs the auth code flow.
enablePkce
boolean
Whether to enable PKCE when the user performs the auth code flow.
authUri
string
Auth URL for Authorization Code Flow
Oauth2AuthCodeFlowGoogleManaged
Parameters to support Oauth 2.0 Auth Code Grant Authentication using Google Provided OAuth Client. See https://tools.ietf.org/html/rfc6749#section-1.3.1 for more details.
JSON representation
{
"authCode" : string ,
"redirectUri" : string ,
"scopes" : [
string
]
}
Fields
authCode
string
Optional. Authorization code to be exchanged for access and refresh tokens.
redirectUri
string
Optional. Redirect URI to be provided during the auth code exchange.
scopes[]
string
Required. Scopes the connection will request when the user performs the auth code flow.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
