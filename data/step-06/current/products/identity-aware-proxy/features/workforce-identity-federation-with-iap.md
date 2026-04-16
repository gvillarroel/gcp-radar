---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.773Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Workforce Identity Federation with IAP"
feature_slug: "workforce-identity-federation-with-iap"
latest_feature_date: "2025-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings"
  - "https://docs.cloud.google.com/iap/docs/concepts-overview"
  - "https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto"
  - "https://docs.cloud.google.com/iap/docs/authentication-howto"
keywords:
  - "workforce"
  - "identity"
  - "federation"
  - "with"
  - "iap"
  - "aware"
  - "proxy"
  - "can"
---

# Workforce Identity Federation with IAP

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Identity-Aware Proxy can use Workforce Identity Federation to let external workforce identities access protected resources; Identity-Aware Proxy supports Workforce Identity Federation so extended workforce identities can access protected applications without Cloud Identity sync.

## Extended Definition

Identity-Aware Proxy can use Workforce Identity Federation to let external workforce identities access protected resources; Identity-Aware Proxy supports Workforce Identity Federation so extended workforce identities can access protected applications without Cloud Identity sync.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
- [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview)
- [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)

## Supporting Pages

### IapSettings \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
- Source ID: `site-api-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Reference Send feedback IapSettings Stay organized with collections Save and categorize content based on your preferences.
- Only one workforce pool is accepted. oauth2 object ( OAuth2 ) OAuth 2.0 settings for IAP to perform OIDC flow with workforce identity federation services.
- JSON representation AccessSettings JSON representation GcipSettings JSON representation CorsSettings JSON representation OAuthSettings JSON representation ReauthSettings JSON representation Method PolicyType AllowedDomainsSettings JSON representation WorkforceIdentitySettings JSON representation OAuth2 JSON representation IdentitySource ApplicationSettings JSON representation CsmSettings JSON representation AccessDeniedPageSettings JSON representation AttributePropagationSettings JSON representation OutputCredentials The IAP configurable settings.
- OAuth2 The OAuth 2.0 Settings JSON representation { "clientId" : string , "clientSecret" : string , "clientSecretSha256" : string } Fields clientId string The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server. clientSecret string Input only.

### Identity-Aware Proxy overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to configure IAP with Workforce Identity Federation .
- How IAP works When an application or resource is protected by IAP, it can only be accessed through the proxy by principals , also known as users, who have the correct Identity and Access Management (IAM) role .
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Identity-Aware Proxy overview Stay organized with collections Save and categorize content based on your preferences.
- This page describes the basic concepts of Identity-Aware Proxy (IAP), a Google Cloud global service.

### "Setting up context-aware access with Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Setting up context-aware access with Identity-Aware Proxy Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to extend Identity-Aware Proxy (IAP) access policies using access levels and the Identity and Access Management (IAM) Conditions Framework .
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group" : EXAMPLE GROUP@GOOGLE.COM , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Content-Type:application/json" \ -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${IAP BASE URL}/compute/services/${BACKEND SERVICE NAME}:setIamPolicy \ -d @${JSON NEW POLICY} Use hostname and path conditions Access to your app can be secured using the hostname and path of a request URL.
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group: EXAMPLE GROUP@GOOGLE.COM " , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${GAE BASE URL}:setIamPolicy -d @${JSON NEW POLICY} App Engine services and versions You can also update the IAM policy of a App Engine service, all versions, or a specific version of a service.

### "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . import ( "context" "fmt" "io" "net/http" "google.golang.org/api/idtoken" ) // makeIAPRequest makes a request to an application protected by Identity-Aware // Proxy with the given audience. func makeIAPRequest ( w io .
- Authenticate with a service account JWT IAP supports service account JWT authentication for Google identities, Identity Platform, and Workforce Identity Federation configured applications.
- Returns: The page body, or raises an exception if the page couldn't be retrieved. """ Set the default timeout, if missing if "timeout" not in kwargs : kwargs [ "timeout" ] = 90 Obtain an OpenID Connect (OIDC) token from metadata server or using service account. open id connect token = id token . fetch id token ( Request (), client id ) Fetch the Identity-Aware Proxy-protected URL, including an Authorization header containing "Bearer " followed by a Google-issued OpenID Connect token for the service account. resp = requests . request ( method , url , headers = { "Authorization" : "Bearer {} " . format ( open id connect token )}, kwargs ) if resp . status code == 403 : raise Exception ( "Service account does not have permission to " "access the IAP-protected application." ) elif resp . status code != 200 : raise Exception ( "Bad response from application: {!r} / {!r} / {!r} " . format ( resp . status code , resp . headers , resp . text ) ) else : return resp . text Ruby To authenticate to IAP, set up Application Default Credentials.
- For more information, see Set up authentication for a local development environment . namespace Google\Cloud\Samples\Iap; Imports Auth libraries and Guzzle HTTP libraries. use Google\Auth\ApplicationDefaultCredentials; use GuzzleHttp\Client; use GuzzleHttp\HandlerStack; / Make a request to an application protected by Identity-Aware Proxy. @param string $url The Identity-Aware Proxy-protected URL to fetch. @param string $clientId The client ID used by Identity-Aware Proxy. / function make iap request($url, $clientId) { // create middleware, using the client ID as the target audience for IAP $middleware = ApplicationDefaultCredentials::getIdTokenMiddleware($clientId); $stack = HandlerStack::create(); $stack->push($middleware); // create the HTTP client $client = new Client([ 'handler' => $stack, 'auth' => 'google auth' ]); // make the request $response = $client->get($url); print('Printing out response body:'); print($response->getBody()); } Python To authenticate to IAP, set up Application Default Credentials.

