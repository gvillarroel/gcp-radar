---
title: "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iap/docs/authentication-howto
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/authentication-howto
  title: "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Programmatic authentication
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to authenticate to an IAP-secured
resource from a user account or a service account.
Programmatic access refers to calling IAP-secured applications
from non-browser clients, such as command-line tools, service-to-service calls,
and mobile applications. Depending on your use case, you might want to
authenticate to IAP using user credentials or service credentials.
A user account belongs to an individual user. You authenticate a user
account when your application requires access to
IAP-secured resources on a user's behalf. For more
information, see User accounts .
Caution: Only Google Identities are supported for user account programmatic
access in IAP. Identity Platform and
Workforce Identity Federation identities are not supported for
programmatic access.
A service account represents an application instead of an
individual user. You authenticate a service account when you want to allow
an application to access your IAP-secured resources. For
more information, see Service accounts .
IAP supports the following types of credentials for programmatic
access:
OAuth 2.0 ID token - A Google-issued token for a human user or service
account with the audience claim set to the resource ID of the
IAP application.
Service account signed JWT - A self-signed or Google-issued JWT token
for a service account.
Include these credentials to IAP in the Authorization or Proxy-Authorization HTTP header of the request.
Before you begin
Before you begin, ensure you have an IAP-secured application that
you want to programmatically connect using a developer account, service
account, or mobile app credentials.
Warning: If you configured your application to use the Google-managed OAuth
2.0 client, programmatic access is blocked by default. You need to add the
OAuth 2.0 client to an allowlist so that the callers will use the client to generate credentials.
Authenticate a user account
You can enable user access to your application from a desktop or mobile app to
allow a program to interact with an IAP-secured resource.
Authenticate from a mobile app
Create or use an existing OAuth 2.0
client ID for your mobile app. To use an existing OAuth 2.0 client ID,
follow the steps in
How to share OAuth Clients .
Add the OAuth client ID to the allowlist for
programmatic access
to the application.
Get an ID token for the OAuth 2.0 client ID of the
IAP-secured resource.
Android : Use the
Google Sign-In API
to request an
OpenID Connect
(OIDC) token. Set the
requestIdToken client ID
to the client ID for the resource you're connecting to.
iOS : Use
Google Sign-In
to get an ID token.
Include the ID token in an Authorization: Bearer header to make the
authenticated request to the IAP-secured resource.
Authenticate from a desktop app
This section describes how to authenticate a user account from a desktop command
line.
To allow developers to access your application from the command line,
create a desktop OAuth 2.0 client ID or
share an existing desktop OAuth client ID .
Add the OAuth ID to the allowlist for
programmatic access
for the application.
Sign in to the application
Each developer must sign in to access an IAP-secured app. You can
package the process into a script, such as by using
gcloud CLI . The following example uses curl to sign
in and generate a token that can be used to access the application:
Sign in to your account that has access to the Google Cloud resource.
Start a local server that can echo the incoming requests.
# Example using Netcat (http://netcat.sourceforge.net/)
nc -k -l 4444
Go to the following URI, where DESKTOP_CLIENT_ID is the Desktop
app client ID:
https://accounts.google.com/o/oauth2/v2/auth?client_id= DESKTOP_CLIENT_ID &response_type=code&scope=openid%20email&access_type=offline&redirect_uri=http://localhost:4444&cred_ref=true
In the local server output, look for the request parameters:
GET /?code= CODE &scope=email%20openid%20https://www.googleapis.com/auth/userinfo.email&hd=google.com&prompt=consent HTTP/1.1
Copy the CODE value to replace
CODE in the following command, along with the
Desktop app client ID and secret:
curl --verbose \
--data client_id = DESKTOP_CLIENT_ID \
--data client_secret = DESKTOP_CLIENT_SECRET \
--data code = CODE \
--data redirect_uri = http://localhost:4444 \
--data grant_type = authorization_code \
https://oauth2.googleapis.com/token
This command returns a JSON object with an id_token field that you can use
to access the application.
Access the application
To access the app, use the id_token :
curl --verbose --header 'Authorization: Bearer ID_TOKEN ' URL
Refresh token
You can use the refresh token generated during the sign-in flow to get new ID
tokens. This is useful when the original ID token expires. Each ID token is
valid for about one hour, during which time you can make multiple requests to a
specific app.
The following example uses curl to use the refresh token to get a new ID token.
In this example, REFRESH_TOKEN is the token from the sign-in flow.
DESKTOP_CLIENT_ID and DESKTOP_CLIENT_SECRET are the same as used in the
sign-in flow:
curl --verbose \
--data client_id = DESKTOP_CLIENT_ID \
--data client_secret = DESKTOP_CLIENT_SECRET \
--data refresh_token = REFRESH_TOKEN \
--data grant_type = refresh_token \
https://oauth2.googleapis.com/token
This command returns a JSON object with a new id_token field that
you can use to access the app.
Note: The refresh token workflow is not supported for access level policies. You
must regenerate a new ID token using the full authentication flow.
Authenticate a service account
You can use a
service account JWT
or an
OpenID Connect
(OIDC) token to authenticate a service account with an
IAP-secured resource. The following table outlines some of the
differences between the different authentication tokens and their features.
Authentication features
Service account JWT
OpenID Connect token
Context-aware access support
OAuth 2.0 Client ID requirement
Token scope
URL of IAP-secured resource
OAuth 2.0 client ID
Note: Service accounts don't support
device policy attributes
with context-aware access.
Authenticate with a service account JWT
IAP supports service account JWT authentication for Google
identities, Identity Platform, and Workforce Identity Federation configured
applications.
Authenticating a service account using a JWT involves the following steps:
Grant the calling service account the
Service Account Token Creator
role ( roles/iam.serviceAccountTokenCreator ).
Warning: To follow the principle of least privilege, we recommend that you
grant the roles/iam.serviceAccountTokenCreator role on a specific target
service account resource and not at the project level. Granting
roles/iam.serviceAccountTokenCreator at the project level allows the
principal (the calling service account) to create tokens for any service
account within that project.
The role gives principals permission to create
short-lived credentials ,
like JWTs.
Create a JWT for the IAP-secured resource.
Sign the JWT using the service account private key.
Create the JWT
The created JWT should have a payload similar to the following example:
{
"iss" : SERVICE_ACCOUNT_EMAIL_ADDRESS ,
"sub" : SERVICE_ACCOUNT_EMAIL_ADDRESS ,
"aud" : TARGET_URL ,
"iat" : IAT ,
"exp" : EXP ,
}
For the iss and sub fields, specify the service
account's email address. The email address is in the client_email field of
the service account JSON file or is provided as input. Typical format:
service-account@PROJECT_ID.iam.gserviceaccount.com
For the aud field, specify the exact URL or the URL with a path wildcard
( /* ) of the IAP-secured resource—for example,
https://example.com/ or https://example.com/* . A JWT with the exact URL in
the aud field can only access that specific URL. A JWT with the path wildcard
( /* ) in the aud field can access all of the URLs that are prefixed with the
aud string without the trailing * .
For the iat field, specify the current Unix epoch time, and for the exp
field, specify a time within 3600 seconds later. This defines when the JWT
expires.
Sign the JWT
You can use one of the following methods to sign the JWT:
Use the IAM credentials API to sign a JWT without requiring
direct access to a private key.
Use a local credentials key file to sign the JWT locally.
Sign the JWT using IAM Service Account Credentials API
Use the IAM Service Account Credentials API to
sign a service account JWT .
The method fetches the private key associated with your service account and uses
it to sign the JWT payload. This allows the signing of a JWT without direct
access to a private key.
To authenticate to IAP, set up application default
credentials. For more information, see
Set up authentication for a local development environment .
gcloud
Run the following command to prepare a request with the JWT payload:
cat > claim.json << EOM
{
"iss" : " SERVICE_ACCOUNT_EMAIL_ADDRESS " ,
"sub" : " SERVICE_ACCOUNT_EMAIL_ADDRESS " ,
"aud" : " TARGET_URL " ,
"iat" : $( date +%s ) ,
"exp" : $(( ` date +%s ` + 3600 ))
}
EOM
Use the following Google Cloud CLI command to sign the payload in
claim.json :
gcloud iam service-accounts sign-jwt --iam-account = " SERVICE_ACCOUNT_EMAIL_ADDRESS " claim.json output.jwt
After a successful request, output.jwt contains a signed JWT that you can
use to access your IAP-secured resource.
Python
import datetime
import json
import google.auth
from google.cloud import iam_credentials _v1
def generate_jwt_payload ( service_account_email : str , resource_url : str ) - > str :
"""Generates JWT payload for service account.
Creates a properly formatted JWT payload with standard claims (iss, sub,
aud, iat, exp) needed for IAP authentication.
Args:
service_account_email (str): Specifies the service account that the
JWT is created for.
resource_url (str): Specifies the scope of the JWT, the URL that the
JWT will be allowed to access.
Returns:
str: JSON string containing the JWT payload with properly formatted
claims.
"""
# Create current time and expiration time (1 hour later) in UTC
iat = datetime . datetime . now ( tz = datetime . timezone . utc )
exp = iat + datetime . timedelta ( seconds = 3600 )
# Convert datetime objects to numeric timestamps (seconds since epoch)
# as required by JWT standard (RFC 7519)
payload = {
"iss" : service_account_email ,
"sub" : service_account_email ,
"aud" : resource_url ,
"iat" : int ( iat . timestamp ()),
"exp" : int ( exp . timestamp ()),
}
return json . dumps ( payload )
def sign_jwt ( target_sa : str , resource_url : str ) - > str :
"""Signs JWT payload using ADC and IAM credentials API.
Uses Google Cloud's IAM Credentials API to sign a JWT. This requires the
caller to have iap.webServiceVersions.accessViaIap permission on the
target service account.
Args:
target_sa (str): Service Account JWT is being created for.
iap.webServiceVersions.accessViaIap permission is required.
resource_url (str): Audience of the JWT and scope of the JWT token.
This is the URL of the IAP-secured application.
Returns:
str: A signed JWT that can be used to access IAP-secured applications.
Use in Authorization header as: 'Bearer <signed_jwt>'
"""
# Get default credentials from environment or application credentials
source_credentials , project_id = google . auth . default ()
# Initialize IAM credentials client with source credentials
iam_client = iam_credentials_v1 . IAMCredentialsClient ( credentials = source_credentials )
# Generate the service account resource name.
# Project should always be "-".
# Replacing the wildcard character with a project ID is invalid.
name = iam_client . service_account_path ( "-" , target_sa )
# Create and sign the JWT payload
payload = generate_jwt_payload ( target_sa , resource_url )
# Sign the JWT using the IAM credentials API
response = iam_client . sign_jwt ( name = name , payload = payload )
return response . signed_jwt
curl
Run the following command to prepare a request with the JWT payload:
cat << EOF > request.json
{
"payload" : JWT_PAYLOAD
}
EOF
Sign the JWT using the IAM
Service Account Credentials API:
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ SERVICE_ACCOUNT_EMAIL_ADDRESS :signJwt"
After a successful request, a signed JWT is returned in the response.
Use the JWT to access your IAP-secured resource.
Note: Signing the JWT using the IAM credentials API requires a
network call.
Sign the JWT from a local credential key file
JWTs are signed using the private key of the service account.
If you have a
service account key file ,
the JWT can be signed locally.
When signing the JWT locally, include a JWT header with the payload. For
the kid field in the header, use the service account's private key ID, which
is in the private_key_id field of the service account credential JSON file.
The private key from the file is used to sign the JWT.
Access the application
To access the application, include the signed JWT in the Authorization header:
curl --verbose --header 'Authorization: Bearer SIGNED_JWT ' URL
Authenticate with a service account OIDC token
To authenticate with a service account OIDC token, do the following:
Create a new OIDC client ID or use an existing one.
To create a new OAuth 2.0 client ID, do the following :
Make sure that you have registered your application to use Google Auth, if you haven't already.
Go to the Google Auth Platform page.
Go to Google Auth Platform
You will be prompted to create a project if you don't have one selected.
Click Create Client .
Select the appropriate application type and enter any additional information required.
Fill out the required information for the selected client type. To create the client, click Create .
Note: The application's client secret is shown only once, after you create the client. Store this information in a secure place such as Secret Manager because it won't be visible or accessible again.
To use an existing OAuth 2.0 client ID : Follow the steps in
How to share OAuth Clients .
Add the OAuth ID to the allowlist for
programmatic access
for the application.
Ensure that the default service account is added to the
access list for the IAP-secured project.
When making requests to the IAP-secured resource, you must
include the token in the Authorization header: Authorization: 'Bearer OIDC_TOKEN '
Note: The generated ID token must have an email claim for IAP
to accept it.
The following code samples demonstrate how to obtain an OIDC token.
Obtain an OIDC token for the default service account
To get an OIDC token for the default service account for
Compute Engine, App Engine, or Cloud Run, reference the following
code sample to generate a token to access an IAP-secured
resource:
C#
To authenticate to IAP, set up Application Default Credentials.
For more information, see Set up authentication for a local development environment .
using Google.Apis.Auth.OAuth2 ;
using System.Net.Http ;
using System.Net.Http.Headers ;
using System.Threading ;
using System.Threading.Tasks ;
public class IAPClient
{
/// <summary>
/// Makes a request to a IAP secured application by first obtaining
/// an OIDC token.
/// </summary>
/// <param name="iapClientId">The client ID observed on
/// https://console.cloud.google.com/apis/credentials. </param>
/// <param name="uri">HTTP URI to fetch.</param>
/// <param name="cancellationToken">The token to propagate operation cancel notifications.</param>
/// <returns>The HTTP response message.</returns>
public async Task<HttpResponseMessage> InvokeRequestAsync (
string iapClientId , string uri , CancellationToken cancellationToken = default )
{
// Get the OidcToken.
// You only need to do this once in your application
// as long as you can keep a reference to the returned OidcToken.
OidcToken oidcToken = await GetOidcTokenAsync ( iapClientId , cancellationToken );
// Before making an HTTP request, always obtain the string token from the OIDC token,
// the OIDC token will refresh the string token if it expires.
string token = await oidcToken . GetAccessTokenAsync ( cancellationToken );
// Include the OIDC token in an Authorization: Bearer header to
// IAP-secured resource
// Note: Normally you would use an HttpClientFactory to build the httpClient.
// For simplicity we are building the HttpClient directly.
using HttpClient httpClient = new HttpClient ();
httpClient . DefaultRequestHeaders . Authorization = new AuthenticationHeaderValue ( "Bearer" , token );
return await httpClient . GetAsync ( uri , cancellationToken );
}
/// <summary>
/// Obtains an OIDC token for authentication an IAP request.
/// </summary>
/// <param name="iapClientId">The client ID observed on
/// https://console.cloud.google.com/apis/credentials. </param>
/// <param name="cancellationToken">The token to propagate operation cancel notifications.</param>
/// <returns>The HTTP response message.</returns>
public async Task<OidcToken> GetOidcTokenAsync ( string iapClientId , CancellationToken cancellationToken )
{
// Obtain the application default credentials.
GoogleCredential credential = await GoogleCredential . GetApplicationDefaultAsync ( cancellationToken );
// Request an OIDC token for the Cloud IAP-secured client ID.
return await credential . GetOidcTokenAsync ( OidcTokenOptions . FromTargetAudience ( iapClientId ), cancellationToken );
}
}
Go
To authenticate to IAP, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"net/http"
"google.golang.org/api/idtoken"
)
// makeIAPRequest makes a request to an application protected by Identity-Aware
// Proxy with the given audience.
func makeIAPRequest ( w io . Writer , request * http . Request , audience string ) error {
// request, err := http.NewRequest("GET", "http://example.com", nil)
// audience := "IAP_CLIENT_ID.apps.googleusercontent.com"
ctx := context . Background ()
// client is a http.Client that automatically adds an "Authorization" header
// to any requests made.
client , err := idtoken . NewClient ( ctx , audience )
if err != nil {
return fmt . Errorf ( "idtoken.NewClient: %w" , err )
}
response , err := client . Do ( request )
if err != nil {
return fmt . Errorf ( "client.Do: %w" , err )
}
defer response . Body . Close ()
if _ , err := io . Copy ( w , response . Body ); err != nil {
return fmt . Errorf ( "io.Copy: %w" , err )
}
return nil
}
Java
To authenticate to IAP, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.client.http. HttpRequest ;
import com.google.api.client.http. HttpRequestInitializer ;
import com.google.api.client.http. HttpTransport ;
import com.google.api.client.http.javanet. NetHttpTransport ;
import com.google.auth.http. HttpCredentialsAdapter ;
import com.google.auth.oauth2. GoogleCredentials ;
import com.google.auth.oauth2. IdTokenCredentials ;
import com.google.auth.oauth2. IdTokenProvider ;
import com.google.common.base.Preconditions ;
import java.io.IOException ;
import java.util.Collections ;
public class BuildIapRequest {
private static final String IAM_SCOPE = "https://www.googleapis.com/auth/iam" ;
private static final HttpTransport httpTransport = new NetHttpTransport ();
private BuildIapRequest () {}
private static IdTokenProvider getIdTokenProvider () throws IOException {
GoogleCredentials credentials =
GoogleCredentials . getApplicationDefault (). createScoped ( Collections . singleton ( IAM_SCOPE ));
Preconditions . checkNotNull ( credentials , "Expected to load credentials" );
Preconditions . checkState (
credentials instanceof IdTokenProvider ,
String . format (
"Expected credentials that can provide id tokens, got %s instead" ,
credentials . getClass (). getName ()));
return ( IdTokenProvider ) credentials ;
}
/**
* Clone request and add an IAP Bearer Authorization header with ID Token.
*
* @param request Request to add authorization header
* @param iapClientId OAuth 2.0 client ID for IAP protected resource
* @return Clone of request with Bearer style authorization header with ID Token.
* @throws IOException exception creating ID Token
*/
public static HttpRequest buildIapRequest ( HttpRequest request , String iapClientId )
throws IOException {
IdTokenProvider idTokenProvider = getIdTokenProvider ();
IdTokenCredentials credentials =
IdTokenCredentials . newBuilder ()
. setIdTokenProvider ( idTokenProvider )
. setTargetAudience ( iapClientId )
. build ();
HttpRequestInitializer httpRequestInitializer = new HttpCredentialsAdapter ( credentials );
return httpTransport
. createRequestFactory ( httpRequestInitializer )
. buildRequest ( request . getRequestMethod (), request . getUrl (), request . getContent ());
}
}
Node.js
To authenticate to IAP, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const url = 'https://some.iap.url';
// const targetAudience = 'IAP_CLIENT_ID.apps.googleusercontent.com';
const { GoogleAuth } = require ( ' google-auth-library ' );
const auth = new GoogleAuth ();
async function request () {
console . info ( `request IAP ${ url } with target audience ${ targetAudience } ` );
const client = await auth . getIdTokenClient ( targetAudience );
const res = await client . fetch ( url );
console . info ( res . data );
}
request (). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
PHP
To authenticate to IAP, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
namespace Google\Cloud\Samples\Iap;
# Imports Auth libraries and Guzzle HTTP libraries.
use Google\Auth\ApplicationDefaultCredentials;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
/**
* Make a request to an application protected by Identity-Aware Proxy.
*
* @param string $url The Identity-Aware Proxy-protected URL to fetch.
* @param string $clientId The client ID used by Identity-Aware Proxy.
*/
function make_iap_request($url, $clientId)
{
// create middleware, using the client ID as the target audience for IAP
$middleware = ApplicationDefaultCredentials::getIdTokenMiddleware($clientId);
$stack = HandlerStack::create();
$stack->push($middleware);
// create the HTTP client
$client = new Client([
'handler' => $stack,
'auth' => 'google_auth'
]);
// make the request
$response = $client->get($url);
print('Printing out response body:');
print($response->getBody());
}
Python
To authenticate to IAP, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.auth.transport.requests import Request
from google.oauth2 import id_token
import requests
def make_iap_request ( url , client_id , method = "GET" , ** kwargs ):
"""Makes a request to an application protected by Identity-Aware Proxy.
Args:
url: The Identity-Aware Proxy-protected URL to fetch.
client_id: The client ID used by Identity-Aware Proxy.
method: The request method to use
('GET', 'OPTIONS', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE')
**kwargs: Any of the parameters defined for the request function:
https://github.com/requests/requests/blob/master/requests/api.py
If no timeout is provided, it is set to 90 by default.
Returns:
The page body, or raises an exception if the page couldn't be retrieved.
"""
# Set the default timeout, if missing
if "timeout" not in kwargs :
kwargs [ "timeout" ] = 90
# Obtain an OpenID Connect (OIDC) token from metadata server or using service
# account.
open_id_connect_token = id_token . fetch_id_token ( Request (), client_id )
# Fetch the Identity-Aware Proxy-protected URL, including an
# Authorization header containing "Bearer " followed by a
# Google-issued OpenID Connect token for the service account.
resp = requests . request (
method ,
url ,
headers = { "Authorization" : "Bearer {} " . format ( open_id_connect_token )},
** kwargs
)
if resp . status_code == 403 :
raise Exception (
"Service account does not have permission to "
"access the IAP-protected application."
)
elif resp . status_code != 200 :
raise Exception (
"Bad response from application: {!r} / {!r} / {!r} " . format (
resp . status_code , resp . headers , resp . text
)
)
else :
return resp . text
Ruby
To authenticate to IAP, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# url = "The Identity-Aware Proxy-protected URL to fetch"
# client_id = "The client ID used by Identity-Aware Proxy"
require "googleauth"
require "faraday"
# The client ID as the target audience for IAP
id_token_creds = Google :: Auth :: Credentials . default target_audience : client_id
headers = {}
id_token_creds . client . apply! headers
resp = Faraday . get url , nil , headers
if resp . status == 200
puts "X-Goog-Iap-Jwt-Assertion:"
puts resp . body
else
puts "Error requesting IAP"
puts resp . status
puts resp . headers
end
Obtain an OIDC token from a local service account key file
To generate an OIDC token using a service account key file, create and sign a
JWT assertion using the key file and then exchange that assertion for an ID
token. The following Bash script demonstrates this process:
Bash
#!/usr/bin/env bash
#
# Example script that generates an OIDC token using a service account key file and uses it to access an IAP-secured resource.
set -euo pipefail
get_token () {
# Get the bearer token in exchange for the service account credentials
local service_account_key_file_path = " ${ 1 } "
local iap_client_id = " ${ 2 } "
# Define the scope and token endpoint
local iam_scope = "https://www.googleapis.com/auth/iam"
local oauth_token_uri = "https://www.googleapis.com/oauth2/v4/token"
# Extract data from service account key file
local private_key_id = " $( cat " ${ service_account_key_file_path } " | jq -r '.private_key_id' ) "
local client_email = " $( cat " ${ service_account_key_file_path } " | jq -r '.client_email' ) "
local private_key = " $( cat " ${ service_account_key_file_path } " | jq -r '.private_key' ) "
# Set token timestamps (current time and expiration 10 minutes later)
local issued_at = " $( date +%s ) "
local expires_at = " $(( issued_at + 600 )) "
# Create JWT header and payload
local header = "{'alg':'RS256','typ':'JWT','kid':' ${ private_key_id } '}"
local header_base64 = " $( echo " ${ header } " | base64 | tr -d '\n' ) "
local payload = "{'iss':' ${ client_email } ','aud':' ${ oauth_token_uri } ','exp': ${ expires_at } ,'iat': ${ issued_at } ,'sub':' ${ client_email } ','target_audience':' ${ iap_client_id } '}"
local payload_base64 = " $( echo " ${ payload } " | base64 | tr -d '\n' ) "
# Create JWT signature using the private key
local signature_base64 = " $( printf %s " ${ header_base64 } . ${ payload_base64 } " | openssl dgst -binary -sha256 -sign < ( printf '%s\n' " ${ private_key } " ) | base64 | tr -d '\n')"
local assertion = " ${ header_base64 } . ${ payload_base64 } . ${ signature_base64 } "
# Exchange the signed JWT assertion for an ID token
local token_payload = " $( curl -s \
--data-urlencode "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer" \
--data-urlencode "assertion= ${ assertion } " \
https://www.googleapis.com/oauth2/v4/token ) "
# Extract just the ID token from the response
local bearer_id_token = " $( echo " ${ token_payload } " | jq -r '.id_token' ) "
echo " ${ bearer_id_token } "
}
main () {
# Check if required arguments are provided
if [[ $# -lt 3 ]] ; then
echo "Usage: $0 <service_account_key_file.json> <iap_client_id> <url>"
exit 1
fi
# Assign parameters to variables
SERVICE_ACCOUNT_KEY = " $1 "
IAP_CLIENT_ID = " $2 "
URL = " $3 "
# Generate the ID token
echo "Generating token..."
ID_TOKEN = $( get_token " ${ SERVICE_ACCOUNT_KEY } " " ${ IAP_CLIENT_ID } " )
# Access the IAP-secured resource with the token
echo "Accessing: ${ URL } "
curl --header "Authorization: Bearer ${ ID_TOKEN } " " ${ URL } "
}
# Run the main function with all provided arguments
main " $@ "
This script performs the following steps:
Extracts the service account key information from your JSON key file
Creates a JWT with the necessary fields, including the IAP
client ID as the target audience
Signs the JWT using the service account's private key
Exchanges this JWT for an OIDC token through Google's OAuth service
Uses the resulting token to make an authenticated request to your
IAP-secured resource
To use this script:
Save it to a file, for example: get_iap_token.sh
Make it executable: chmod +x get_iap_token.sh
Run it with three parameters:
./get_iap_token.sh service-account-key.json \
OAUTH_CLIENT_ID \
URL
Where:
service-account-key.json is your downloaded service account key file
OAUTH_CLIENT_ID is the OAuth client ID for your
IAP-secured resource
URL is the URL you want to access
Obtain an OIDC token by using service account impersonation
In all other cases, use the IAM credentials API to
generate an OIDC token by
impersonating a target service account right before accessing an
IAP-secured resource. This process involves the following
steps:
Provide the calling service account (the service account associated with the
code that is obtaining the ID token) with the Service Account OpenID Connect
Identity Token Creator role ( roles/iam.serviceAccountOpenIdTokenCreator ).
This gives the calling service account the ability to impersonate the target
service account.
Use the credentials provided by the calling service account to call the
generateIdToken
method on the target service account.
Set the audience field to your client ID.
For step-by-step instructions, see
Create an ID token .
Authenticate from Proxy-Authorization Header
If your application uses the Authorization request header, you can include the
ID token in a Proxy-Authorization: Bearer header instead. If a valid ID token
is found in a Proxy-Authorization header, IAP authorizes
the request with it. After authorizing the request, IAP
passes the Authorization header to your application without processing the
content.
If no valid ID token is found in the Proxy-Authorization header,
IAP continues to process the Authorization header and
strips the Proxy-Authorization header before passing the request to your
application.
What's next
Learn more about
Authorization: Bearer Tokens .
Try
Sign-In for Android
or
Sign-In for iOS .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
