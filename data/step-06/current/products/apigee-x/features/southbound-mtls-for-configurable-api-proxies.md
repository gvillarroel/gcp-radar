---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.192Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Southbound mTLS for configurable API proxies"
feature_slug: "southbound-mtls-for-configurable-api-proxies"
latest_feature_date: "2022-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference"
keywords:
  - "communication"
  - "mutual"
  - "mtls"
  - "secure"
  - "configurable"
  - "southbound"
  - "proxies"
---

# Southbound mTLS for configurable API proxies

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Configurable API proxies support southbound mutual TLS for secure communication with backend services.

## Extended Definition

Configurable API proxies support southbound mutual TLS for secure communication with backend services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- N/A No ClientAuthEnabled If set to true , enables two-way TLS (also known as mutual TLS or mTLS) between Apigee and the remote peer - either the API client, or the target backend.
- Without this EKU, mTLS connections will fail for both northbound (client to Apigee) and southbound (Apigee to backend) traffic.
- This industry-wide change affects Apigee mutual TLS (mTLS) configurations in Apigee platform .
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics OAuth 2.0 home OAuthV2 policy Download API proxies (which shows how to bundle an API proxy into a ZIP file like the one you downloaded) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin To complete this tutorial, you must have access to an Apigee organization where you have permission to: Create and deploy API proxies Create API products Create developer apps You must also have a properly configured environment group hostname with which you can make Apigee API proxy calls.
- Home Documentation Application development Apigee Guides Send feedback Secure an API with OAuth 2.0 Stay organized with collections Save and categorize content based on your preferences.
- But first, you need to do a few more things: Create the API proxy you actually want to secure with OAuth 2.0.

### Endpoint properties reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- Source ID: `site-api-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Supported values are: gzip: always send message using gzip compression deflate: always send message using deflate compression none: always send message without any compression See also: Does Apigee support compression/de-compression with GZIP/deflate compression? api.timeout N/A Configure the timeout for individual API proxies (in milliseconds) You can configure API proxies, even those with streaming enabled, to time out after a specified time with a 504 Gateway Timeout status.
- See Setting io.timeout.millis and api.timeout . supports.http11 true If this is true and the client sends a 1.1 request, the target is also sent a 1.1 request, otherwise 1.0 request is sent to the target. use.proxy true If the Apigee hybrid overrides file contains the HTTP PROXY configuration, as described in Configure forward proxying for API proxies , then use this property to manage/control which proxies should not use the proxy configuration.
- If set to false , the API Proxy will skip the HTTP proxy configurations specified in the Apigee hybrid overrides file for target connections set in the proxy. use.proxy.tunneling true If this is set to true, and proxy configurations are specified Apigee hybrid overrides file as described in Configure forward proxying for API proxies , then target connections are set to use the specified tunnel.
- The minimum configurable limit is 10M and the maximum configurable limit is 30M.

