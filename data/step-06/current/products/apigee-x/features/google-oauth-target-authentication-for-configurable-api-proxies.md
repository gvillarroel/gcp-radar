---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.772Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Google OAuth target authentication for configurable API proxies"
feature_slug: "google-oauth-target-authentication-for-configurable-api-proxies"
latest_feature_date: "2022-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "oauth"
  - "securing"
  - "authentication"
  - "configurable"
  - "backend"
  - "target"
  - "proxies"
---

# Google OAuth target authentication for configurable API proxies

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Configurable API proxies now support Google authentication for securing backend target services using Google OAuth.

## Extended Definition

Configurable API proxies now support Google authentication for securing backend target services using Google OAuth.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this case it is important to NOT include the "client credentials" type because it allows a client to get access to a token with no user authentication -- > < GrantType>client credentials < / GrantType > < / SupportedGrantTypes > < GrantType>request . queryparam . grant type < / GrantType > < GenerateResponse / > < / OAuthV2 > The configuration includes the following: The <Operation> , which can be one of several predefined values, defines what the policy is going to do.
- Related topics OAuth 2.0 home OAuthV2 policy Download API proxies (which shows how to bundle an API proxy into a ZIP file like the one you downloaded) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Remove Header Authorization – An Assign Message policy that removes the access token after it's checked, so that it doesn't get passed to the target service. (If the target service needed the OAuth 2.0 access token, you wouldn't use this policy).
- Description Enter: hello world protected by OAuth 2.0 Target (Existing API) Enter: https://mocktarget.apigee.net/ip This defines the target URL that Apigee invokes on a request to the API proxy.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $ORG NAME $REGION $INSTANCE $VPC NETWORK NAME $SUBNET Configure an authentication token To configure an authentication token, run the following command: export TOKEN = $( gcloud auth print-access-token ) echo $TOKEN Configure a load balancer for a backend service The following sections describe the steps to set up a global external Application Load Balancer for a backend service, using httpbin.org as an example: Create a global external Application Load Balancer .
- Create a target proxy To create a target proxy for the load balancer to process service extension traffic, use the following command: gcloud compute target-https-proxies create TARGET PROXY NAME \ --global \ --ssl-certificates SSL CERT NAME \ --global-ssl-certificates \ --url-map URL MAP NAME \ --global-url-map Where: TARGET PROXY NAME is the name of the target proxy you want to create.
- With the successful application of the AssignMessage policy, the client's successful request (containing the API key) to Apigee in the example scenario is modified further to include a Google authentication token in the request header, as required by the Google-authenticated backend service.
- Add the AssignMessage policy for Google authentication If you want to use your Extension Processor to provide API management for a Google-authenticated service, you can inject a Google access token or Google ID token into requests sent to the backend service using the AssignMessage policy .

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Edit the XML to add the following configuration under <HTTPTargetConnection> : <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> Click Save .
- Add Google authentication to the API proxy You must also add Google authentication to the API proxy's target endpoint to enable proxy calls to the target.
- Target (Existing API) : Enter the URL of the backend service that the proxy calls.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.

