---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.776Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "External identity authentication for IAP"
feature_slug: "external-identity-authentication-for-iap"
latest_feature_date: "2020-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/tutorial-gce"
  - "https://docs.cloud.google.com/iap/docs/authentication-howto"
  - "https://docs.cloud.google.com/iap/docs/enabling-app-engine"
  - "https://docs.cloud.google.com/iap/docs/enabling-cloud-run"
keywords:
  - "external"
  - "identity"
  - "authentication"
  - "for"
  - "iap"
  - "aware"
  - "proxy"
  - "can"
---

# External identity authentication for IAP

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Identity-Aware Proxy can authenticate users with external identities.

## Extended Definition

Identity-Aware Proxy can authenticate users with external identities.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)

## Supporting Pages

### "Setting up IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up IAP To set up IAP for your project, follow these steps: In the Google Cloud console, go to the Security > Identity-Aware Proxy page and select the project that you want to enable IAP for.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Setting up IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- GO TO THE IDENTITY-AWARE PROXY PAGE If you haven't configured your project's OAuth consent screen, you're prompted to do so: Caution: Don't enter any confidential information on the OAuth consent screen.
- This guide describes how to set up a Compute Engine instance with Identity-Aware Proxy (IAP).

### "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . namespace Google\Cloud\Samples\Iap; Imports Auth libraries and Guzzle HTTP libraries. use Google\Auth\ApplicationDefaultCredentials; use GuzzleHttp\Client; use GuzzleHttp\HandlerStack; / Make a request to an application protected by Identity-Aware Proxy. @param string $url The Identity-Aware Proxy-protected URL to fetch. @param string $clientId The client ID used by Identity-Aware Proxy. / function make iap request($url, $clientId) { // create middleware, using the client ID as the target audience for IAP $middleware = ApplicationDefaultCredentials::getIdTokenMiddleware($clientId); $stack = HandlerStack::create(); $stack->push($middleware); // create the HTTP client $client = new Client([ 'handler' => $stack, 'auth' => 'google auth' ]); // make the request $response = $client->get($url); print('Printing out response body:'); print($response->getBody()); } Python To authenticate to IAP, set up Application Default Credentials.
- For more information, see Set up authentication for a local development environment . url = "The Identity-Aware Proxy-protected URL to fetch" client id = "The client ID used by Identity-Aware Proxy" require "googleauth" require "faraday" The client ID as the target audience for IAP id token creds = Google :: Auth :: Credentials . default target audience : client id headers = {} id token creds . client . apply! headers resp = Faraday . get url , nil , headers if resp . status == 200 puts "X-Goog-Iap-Jwt-Assertion:" puts resp . body else puts "Error requesting IAP" puts resp . status puts resp . headers end Obtain an OIDC token from a local service account key file To generate an OIDC token using a service account key file, create and sign a JWT assertion using the key file and then exchange that assertion for an ID token.
- For more information, see Set up authentication for a local development environment . from google.auth.transport.requests import Request from google.oauth2 import id token import requests def make iap request ( url , client id , method = "GET" , kwargs ): """Makes a request to an application protected by Identity-Aware Proxy.
- For more information, see Set up authentication for a local development environment . import ( "context" "fmt" "io" "net/http" "google.golang.org/api/idtoken" ) // makeIAPRequest makes a request to an application protected by Identity-Aware // Proxy with the given audience. func makeIAPRequest ( w io .

### "Enabling IAP for App Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enabling IAP for App Engine Stay organized with collections Save and categorize content based on your preferences.
- Turning on IAP On the Identity-Aware Proxy page, under Applications , find the application you want to restrict access to.
- This page explains how to secure an App Engine instance with Identity-Aware Proxy (IAP) .
- Go to the Identity-Aware Proxy page Select the project you want to secure with IAP.

### Enable IAP for Cloud Run \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enable IAP for Cloud Run Stay organized with collections Save and categorize content based on your preferences.
- Can't set up IAP through the gcloud CLI The IAP service account is not provisioned If you are seeing this error, run the following command: gcloud beta services identity create --service=iap.googleapis.com --project=[PROJECT ID] IAP service account doesn't need run.routes.invoke permission During the IAP with Cloud Run Preview, Cloud Run didn't perform the run.routes.invoke permission check for calls from IAP that use the Cloud Run Invoker role.
- There are two ways to enable Identity-Aware Proxy for your Cloud Run services.
- Setting up IAP access Go to the Identity-Aware Proxy page .

