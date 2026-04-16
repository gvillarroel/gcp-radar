---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.434Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Proxy Editor Debug tab"
feature_slug: "proxy-editor-debug-tab"
latest_feature_date: "2022-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
keywords:
  - "debugging"
  - "proxies"
  - "redesigned"
  - "includes"
  - "editor"
  - "debug"
  - "proxy"
---

# Proxy Editor Debug tab

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The new Proxy Editor includes a redesigned Debug tab for debugging API proxies.

## Extended Definition

The new Proxy Editor includes a redesigned Debug tab for debugging API proxies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)

## Supporting Pages

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.
- The Debug view also lets you see how a request or response changes as it is processed by an API proxy.
- The default is None (All transactions) , which includes all transactions in the debug data.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The text editor displays the XML code for the AccessTokenClientCredential conditional flow: <Flow name="AccessTokenClientCredential"> <Description/> <Request> <Step> <Name> GenerateAccessTokenClient </Name> </Step> </Request> <Response/> <Condition>(proxy.pathsuffix MatchesPath "/accesstoken") and (request.verb = "POST")</Condition> </Flow> A flow is a processing step in an API proxy.
- Related topics OAuth 2.0 home OAuthV2 policy Download API proxies (which shows how to bundle an API proxy into a ZIP file like the one you downloaded) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin To complete this tutorial, you must have access to an Apigee organization where you have permission to: Create and deploy API proxies Create API products Create developer apps You must also have a properly configured environment group hostname with which you can make Apigee API proxy calls.
- In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the API proxy To create the API proxy from an OpenAPI Specification: In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
- For example: http://apitest.acme.com/mock-target-api Name field content converted to all lower case Description Description of the API proxy. description property from the OpenAPI Specification Target (Existing API) Target URL invoked on behalf of this API proxy.
- Navigate to the following URL in your web browser: https://raw.githubusercontent.com/apigee/api-platform-samples/master/default-proxies/helloworld/openapi/mocktarget3.0.yaml Right-click on the displayed code and select Save As .
- Home Documentation Application development Apigee Guides Send feedback Creating an API proxy from an OpenAPI Specification Stay organized with collections Save and categorize content based on your preferences.

