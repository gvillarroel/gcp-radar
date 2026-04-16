---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.432Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "New Proxy Editor"
feature_slug: "new-proxy-editor"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "configuring"
  - "simplifies"
  - "deploying"
  - "policies"
  - "them"
  - "adding"
  - "editor"
  - "proxy"
---

# New Proxy Editor

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The new Proxy Editor simplifies adding policies to an API proxy, configuring them, and deploying the proxy.

## Extended Definition

The new Proxy Editor simplifies adding policies to an API proxy, configuring them, and deploying the proxy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The text editor displays the XML code for the AccessTokenClientCredential conditional flow: <Flow name="AccessTokenClientCredential"> <Description/> <Request> <Step> <Name> GenerateAccessTokenClient </Name> </Step> </Request> <Response/> <Condition>(proxy.pathsuffix MatchesPath "/accesstoken") and (request.verb = "POST")</Condition> </Flow> A flow is a processing step in an API proxy.
- You'll see that two policies have been added to the request flow of the API proxy: Verify OAuth v2.0 Access Token – Checks the API call to make sure a valid OAuth 2.0 token is present.
- You'll use them in a later step, where you call the API proxy that will exchange these credentials for an OAuth 2.0 access token.
- In the API proxy editor, click the Develop tab.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test the semantic caching policies To test the semantic caching policies: Send a request to the proxy using the following command: curl https:// $RUNTIME HOSTNAME / PROXY NAME -H 'Content-Type: application/json' --data '{ "contents": [ { "role": "user", "parts": [ { "text": "Why is the sky blue?" } ] } ] }' Replace PROXY NAME with the basepath of the API proxy you deployed in the previous step.
- For this tutorial, set the Target (Existing API) to: REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /publishers/google/models/gemini-2.0-flash-001:generateContent Enter the following Semantic Cache URLs : Note: You can also add these URLs to the XML configuration in the Proxy editor on the Develop tab.
- If you wish, you can provide a variable in this element to hold the value of the URL, as shown in the following example: <URL>https://{URL VARIABLE}</URL> Configure the semantic caching policies View the XML configuration of each policy by clicking on the policy name in the Detail view of the API proxy's Develop tab.
- SemanticCacheLookup and SemanticCachePopulate policies containing default values are already attached to the proxy request and response flows.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a service account to deploy the API proxy Before creating the API proxy, create a service account with the permissions required to deploy an API proxy that has Model Armor related policies: Create the service account: gcloud iam service-accounts create SERVICE ACCOUNT NAME \ --description = " DESCRIPTION " \ --display-name = " SERVICE ACCOUNT DISPLAY NAME " Where: SERVICE ACCOUNT NAME is the name of the service account.
- Save the template name as an environment variable: export TEMPLATE NAME = TEMPLATE NAME Create an Apigee API proxy with Model Armor policies This section describes how to create an Apigee API proxy with Model Armor policies.
- Edit the SanitizeUserPrompt and SanitizeModelResponse XML Before you can deploy the API proxy, you must edit the XML of the SanitizeUserPrompt and SanitizeModelResponse policies.
- Once you have selected the API proxy with your policies in the API proxies page of the UI, select the Develop tab.

