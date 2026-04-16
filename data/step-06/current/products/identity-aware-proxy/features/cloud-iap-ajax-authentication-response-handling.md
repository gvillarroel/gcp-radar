---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.778Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud IAP AJAX authentication response handling"
feature_slug: "cloud-iap-ajax-authentication-response-handling"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/external-identity-sessions"
  - "https://docs.cloud.google.com/iap/docs/authentication-howto"
  - "https://docs.cloud.google.com/iap/docs/customizing"
  - "https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings"
keywords:
  - "iap"
  - "ajax"
  - "authentication"
  - "response"
  - "handling"
  - "returns"
  - "http"
  - "401"
---

# Cloud IAP AJAX authentication response handling

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud IAP returns HTTP 401 for AJAX requests with missing or expired credentials instead of serving a login page.

## Extended Definition

Cloud IAP returns HTTP 401 for AJAX requests with missing or expired credentials instead of serving a login page.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions)
- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)

## Supporting Pages

### "Managing sessions with external identities \_|\_ Identity-Aware Proxy \_\

- URL: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To do this: Update your application code to handle the error. if ( response . status === 401 ) { statusElm . innerHTML = 'Login stale. <input type="button" value="Refresh" onclick="sessionRefreshClicked();"/>' ; } Add a handler that opens a window to reauthenticate the user, then closes it when the process completes. var iapSessionRefreshWindow = null ; function sessionRefreshClicked () { if ( iapSessionRefreshWindow == null ) { iapSessionRefreshWindow = window . open ( "/?gcp-iap-mode=DO SESSION REFRESH" ); window . setTimeout ( checkSessionRefresh , 500 ); } return false ; } function checkSessionRefresh () { if ( iapSessionRefreshWindow != null && ! iapSessionRefreshWindow . closed ) { // Attempting to start a new session. // XMLHttpRequests is used by the server to identify AJAX requests fetch ( '/favicon.ico' , { method : "GET" , credentials : 'include' , headers : { 'X-Requested-With' : 'XMLHttpRequest' } . then (( response ) = > { // Checking if browser has a session for the requested app if ( response . status === 401 ) { // No new session detected.
- If you're receiving a 302 status code instead of 401 in response to AJAX requests, add an X-Requested-With header with a value of XMLHttpRequest .
- Programmatically handling HTTP 401 Programmatically handling HTTP 401 status codes is the recommended way to refresh an AJAX session.
- For example, in a App Engine app, the URL might look like this: https:// PROJECT-ID .appspot.com/some/path?gcp-iap-mode=CLEAR LOGIN COOKIE What's next Create an authentication UI with FirebaseUI Create a custom authentication UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . using Google.Apis.Auth.OAuth2 ; using System.Net.Http ; using System.Net.Http.Headers ; using System.Threading ; using System.Threading.Tasks ; public class IAPClient { /// <summary> /// Makes a request to a IAP secured application by first obtaining /// an OIDC token. /// </summary> /// <param name="iapClientId">The client ID observed on /// https://console.cloud.google.com/apis/credentials. </param> /// <param name="uri">HTTP URI to fetch.</param> /// <param name="cancellationToken">The token to propagate operation cancel notifications.</param> /// <returns>The HTTP response message.</returns> public async Task<HttpResponseMessage> InvokeRequestAsync ( string iapClientId , string uri , CancellationToken cancellationToken = default ) { // Get the OidcToken. // You only need to do this once in your application // as long as you can keep a reference to the returned OidcToken.
- GetAsync ( uri , cancellationToken ); } /// <summary> /// Obtains an OIDC token for authentication an IAP request. /// </summary> /// <param name="iapClientId">The client ID observed on /// https://console.cloud.google.com/apis/credentials. </param> /// <param name="cancellationToken">The token to propagate operation cancel notifications.</param> /// <returns>The HTTP response message.</returns> public async Task<OidcToken> GetOidcTokenAsync ( string iapClientId , CancellationToken cancellationToken ) { // Obtain the application default credentials.
- For more information, see Set up authentication for a local development environment . namespace Google\Cloud\Samples\Iap; Imports Auth libraries and Guzzle HTTP libraries. use Google\Auth\ApplicationDefaultCredentials; use GuzzleHttp\Client; use GuzzleHttp\HandlerStack; / Make a request to an application protected by Identity-Aware Proxy. @param string $url The Identity-Aware Proxy-protected URL to fetch. @param string $clientId The client ID used by Identity-Aware Proxy. / function make iap request($url, $clientId) { // create middleware, using the client ID as the target audience for IAP $middleware = ApplicationDefaultCredentials::getIdTokenMiddleware($clientId); $stack = HandlerStack::create(); $stack->push($middleware); // create the HTTP client $client = new Client([ 'handler' => $stack, 'auth' => 'google auth' ]); // make the request $response = $client->get($url); print('Printing out response body:'); print($response->getBody()); } Python To authenticate to IAP, set up Application Default Credentials.
- The following Bash script demonstrates this process: Bash #!/usr/bin/env bash Example script that generates an OIDC token using a service account key file and uses it to access an IAP-secured resource. set -euo pipefail get token () { Get the bearer token in exchange for the service account credentials local service account key file path = " ${ 1 } " local iap client id = " ${ 2 } " Define the scope and token endpoint local iam scope = "https://www.googleapis.com/auth/iam" local oauth token uri = "https://www.googleapis.com/oauth2/v4/token" Extract data from service account key file local private key id = " $( cat " ${ service account key file path } " jq -r '.private key id' ) " local client email = " $( cat " ${ service account key file path } " jq -r '.client email' ) " local private key = " $( cat " ${ service account key file path } " jq -r '.private key' ) " Set token timestamps (current time and expiration 10 minutes later) local issued at = " $( date +%s ) " local expires at = " $(( issued at + 600 )) " Create JWT header and payload local header = "{'alg':'RS256','typ':'JWT','kid':' ${ private key id } '}" local header base64 = " $( echo " ${ header } " base64 tr -d '\n' ) " local payload = "{'iss':' ${ client email } ','aud':' ${ oauth token uri } ','exp': ${ expires at } ,'iat': ${ issued at } ,'sub':' ${ client email } ','target audience':' ${ iap client id } '}" local payload base64 = " $( echo " ${ payload } " base64 tr -d '\n' ) " Create JWT signature using the private key local signature base64 = " $( printf %s " ${ header base64 } . ${ payload base64 } " openssl dgst -binary -sha256 -sign < ( printf '%s\n' " ${ private key } " ) base64 tr -d '\n')" local assertion = " ${ header base64 } . ${ payload base64 } . ${ signature base64 } " Exchange the signed JWT assertion for an ID token local token payload = " $( curl -s \ --data-urlencode "grant type=urn:ietf:params:oauth:grant-type:jwt-bearer" \ --data-urlencode "assertion= ${ assertion } " \ https://www.googleapis.com/oauth2/v4/token ) " Extract just the ID token from the response local bearer id token = " $( echo " ${ token payload } " jq -r '.id token' ) " echo " ${ bearer id token } " } main () { Check if required arguments are provided if [[ $# -lt 3 ]] ; then echo "Usage: $0 <service account key file.json> <iap client id> <url>" exit 1 fi Assign parameters to variables SERVICE ACCOUNT KEY = " $1 " IAP CLIENT ID = " $2 " URL = " $3 " Generate the ID token echo "Generating token..." ID TOKEN = $( get token " ${ SERVICE ACCOUNT KEY } " " ${ IAP CLIENT ID } " ) Access the IAP-secured resource with the token echo "Accessing: ${ URL } " curl --header "Authorization: Bearer ${ ID TOKEN } " " ${ URL } " } Run the main function with all provided arguments main " $@ " This script performs the following steps: Extracts the service account key information from your JSON key file Creates a JWT with the necessary fields, including the IAP client ID as the target audience Signs the JWT using the service account's private key Exchanges this JWT for an OIDC token through Google's OAuth service Uses the resulting token to make an authenticated request to your IAP-secured resource To use this script: Save it to a file, for example: get iap token.sh Make it executable: chmod +x get iap token.sh Run it with three parameters: ./get iap token.sh service-account-key.json \ OAUTH CLIENT ID \ URL Where: service-account-key.json is your downloaded service account key file OAUTH CLIENT ID is the OAuth client ID for your IAP-secured resource URL is the URL you want to access Obtain an OIDC token by using service account impersonation In all other cases, use the IAM credentials API to generate an OIDC token by impersonating a target service account right before accessing an IAP-secured resource.

### Customize IAP \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Customize IAP settings IAP provides the following customization settings: Field Description access settings.cors settings.allow http options Control HTTP OPTIONS (CORS preflight) access settings.oauth settings.login hint Simplify login for users of a G Suite domain application settings.access denied page settings.access denied page uri Show a custom error page when access is denied application settings.csm settings.rctoken aud Issue GKE Enterprise and Istio RCTokens access settings.gcip settings Authenticate with Identity Platform access settings.ReauthSettings Set a reauthentication policy.
- See getIapSettings() and updateIapSettings() for more information: To get or set settings for a specific IAP resource type under a project: https://iap.googleapis.com/v1/projects/ PROJECT-ID /iap web/appengine- APP-ID /services/ SERVICE-ID /versions/ VERSION-ID :iapSettings To get or set settings for a project: https://iap.googleapis.com/v1/projects/ PROJECT-ID :iapSettings To get or set settings for a folder: https://iap.googleapis.com/v1/folders/ FOLDER-ID :iapSettings To get or set settings for an organization: https://iap.googleapis.com/v1/organizations/ ORGANIZATION-ID :iapSettings IAP settings roles and permissions This section describes the roles and permissions that are required to view and update IAP settings.
- See the gcloud iap settings set topic for more information: gcloud iap settings set SETTING FILE --project = PROJECT-ID \ --resource-type = RESOURCE-TYPE-NAME API To get and modify settings using the IAP API, make requests using either the GET or PATCH HTTP verbs to the selected resource endpoint in Google Cloud.
- Allow HTTP OPTIONS requests (CORS preflight) Field Default value access settings.cors settings.allow http options false The web's same-origin policy blocks browsers from sending AJAX requests between websites.

### IapSettings \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The following functions are supported: filter <list>.filter(<iter var>, <predicate>) : Returns a subset of <list> where <predicate> is true for every item. in <var> in <list> : Returns true if <list> contains <var> . selectByName <list>.selectByName(<string>) : Returns the attribute in <list> with the given <string> name, otherwise returns empty. emitAs <attribute>.emitAs(<string>) : Sets the <attribute> name field to the given <string> for propagation in selected output credentials. strict <attribute>.strict() : Ignores the x-goog-iap-attr- prefix for the provided <attribute> when propagating with the HEADER output credential, such as request headers. append <target list>.append(<attribute>) OR <target list>.append(<list>) : Appends the provided <attribute> or <list> to the end of <target list> .
- Enables redirect to primary IDP by skipping Google's login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token's hd claim matches this value since access behavior is managed by IAM policies. clientId string Optional.
- JSON representation { "allowHttpOptions" : boolean } Fields allowHttpOptions boolean Configuration to allow HTTP OPTIONS calls to skip authentication and authorization.
- The risks of client sharing are outlined here: https://cloud.google.com/iap/docs/sharing-oauth-clients#risks . clientSecret string Optional.

