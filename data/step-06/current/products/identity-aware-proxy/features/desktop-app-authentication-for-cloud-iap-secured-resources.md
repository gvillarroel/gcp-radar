---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.781Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Desktop app authentication for Cloud IAP-secured resources"
feature_slug: "desktop-app-authentication-for-cloud-iap-secured-resources"
latest_feature_date: "2017-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/authentication-howto"
  - "https://docs.cloud.google.com/iap/docs/configuring-reauth"
  - "https://docs.cloud.google.com/iap/docs/enabling-app-engine"
  - "https://docs.cloud.google.com/iap/docs/enabling-cloud-run"
keywords:
  - "desktop"
  - "app"
  - "authentication"
  - "for"
  - "iap"
  - "secured"
  - "resources"
  - "applications"
---

# Desktop app authentication for Cloud IAP-secured resources

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Desktop applications can authenticate to Cloud IAP-secured resources.

## Extended Definition

Desktop applications can authenticate to Cloud IAP-secured resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)
- [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)

## Supporting Pages

### "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . using Google.Apis.Auth.OAuth2 ; using System.Net.Http ; using System.Net.Http.Headers ; using System.Threading ; using System.Threading.Tasks ; public class IAPClient { /// <summary> /// Makes a request to a IAP secured application by first obtaining /// an OIDC token. /// </summary> /// <param name="iapClientId">The client ID observed on /// https://console.cloud.google.com/apis/credentials. </param> /// <param name="uri">HTTP URI to fetch.</param> /// <param name="cancellationToken">The token to propagate operation cancel notifications.</param> /// <returns>The HTTP response message.</returns> public async Task<HttpResponseMessage> InvokeRequestAsync ( string iapClientId , string uri , CancellationToken cancellationToken = default ) { // Get the OidcToken. // You only need to do this once in your application // as long as you can keep a reference to the returned OidcToken.
- Authenticate with a service account JWT IAP supports service account JWT authentication for Google identities, Identity Platform, and Workforce Identity Federation configured applications.
- For more information, see Set up authentication for a local development environment . namespace Google\Cloud\Samples\Iap; Imports Auth libraries and Guzzle HTTP libraries. use Google\Auth\ApplicationDefaultCredentials; use GuzzleHttp\Client; use GuzzleHttp\HandlerStack; / Make a request to an application protected by Identity-Aware Proxy. @param string $url The Identity-Aware Proxy-protected URL to fetch. @param string $clientId The client ID used by Identity-Aware Proxy. / function make iap request($url, $clientId) { // create middleware, using the client ID as the target audience for IAP $middleware = ApplicationDefaultCredentials::getIdTokenMiddleware($clientId); $stack = HandlerStack::create(); $stack->push($middleware); // create the HTTP client $client = new Client([ 'handler' => $stack, 'auth' => 'google auth' ]); // make the request $response = $client->get($url); print('Printing out response body:'); print($response->getBody()); } Python To authenticate to IAP, set up Application Default Credentials.
- For more information, see Set up authentication for a local development environment . url = "The Identity-Aware Proxy-protected URL to fetch" client id = "The client ID used by Identity-Aware Proxy" require "googleauth" require "faraday" The client ID as the target audience for IAP id token creds = Google :: Auth :: Credentials . default target audience : client id headers = {} id token creds . client . apply! headers resp = Faraday . get url , nil , headers if resp . status == 200 puts "X-Goog-Iap-Jwt-Assertion:" puts resp . body else puts "Error requesting IAP" puts resp . status puts resp . headers end Obtain an OIDC token from a local service account key file To generate an OIDC token using a service account key file, create and sign a JWT assertion using the key file and then exchange that assertion for an ID token.

### IAP reauthentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, mobile and desktop applications cannot reauthenticate users because the resources that require reauthentication are inaccessible to these applications.
- IAP reauthentication (or, reauth) is designed to enforce reauthentication policies for IAP-protected services and applications (or, apps).
- Run the following command: gcloud iap settings set SETTING FILE [--organization= ORGANIZATION --folder= FOLDER --project=/ PROJECT --resource-type= RESOURCE TYPE --service= SERVICE --version= VERSION To set a reauthentication policy on the resources within an organization, run the following command: gcloud iap settings set SETTING FILE --organization= ORGANIZATION To set a reauthentication policy on the resources within a folder, run the following command: gcloud iap settings set SETTING FILE --folder= FOLDER To set a reauthentication policy on all web type resources within a project, run the following command: gcloud iap settings set SETTING FILE --project= PROJECT --resource-type=iap web To set a reauthentication policy on an App Engine service within a project, run the following command: gcloud iap settings set SETTING FILE --project= PROJECT --resource-type=app-engine --service= SERVICE Where SETTING FILE is: accessSettings : reauthSettings : method : "LOGIN" maxAge : "3600s" policyType : "MINIMUM" Replace the following: FOLDER : The folder ID.
- IAP reauthentication lets service and application owners or Google Cloud administrators require authenticated end users to reauthenticate after a specified time when accessing an IAP-protected service or application and limit how long a user can access a IAP-protected service or application before authentication is required.

### "Enabling IAP for App Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to specify the project that contains the applications that you want to protect with IAP. gcloud config set project PROJECT ID To enable IAP, run the following command. gcloud iap web enable --resource-type=app-engine --versions= version Add principals who should have the IAP-secured Web App user role to the project. gcloud projects add-iam-policy-binding PROJECT ID \ --member= PRINCIPAL IDENTIFIER \ --role=roles/iap.httpsResourceAccessor Replace PROJECT ID with your project ID.
- Only principals with the IAP-Secured Web App User ( roles/iap.httpsResourceAccessor ) role on the project will be given access. gcloud Before you set up your project and IAP, you need an up-to-date version of the gcloud CLI.
- In the Add principals dialog that appears, enter the email addresses of groups or individuals who should have the IAP-secured Web App User role for the project.
- If you want to allow access to users outside of your organization, see Enable IAP for external applications .

### Enable IAP for Cloud Run \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable access to users outside your organization, or without an organization, update the OAuth client configuration to use a custom OAuth client as described in Enable IAP for external applications .
- In the Add Principal dialog, enter the accounts of groups or individuals who should have the IAP-secured Web App User role for the project.
- See Managing access to IAP-secured resources for more information.
- Google Group : admins@googlegroups.com Service account : server@example.iam.gserviceaccount.com Google Workspace domain : example.com Select Cloud IAP > IAP-secured Web App User from the Roles drop-down list.

