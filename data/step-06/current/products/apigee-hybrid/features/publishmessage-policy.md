---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.855Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "PublishMessage policy"
feature_slug: "publishmessage-policy"
latest_feature_date: "2022-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
keywords:
  - "publishmessage"
  - "allowing"
  - "proxy"
  - "policy"
  - "adds"
---

# PublishMessage policy

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee hybrid v1.7.0 adds the PublishMessage policy, allowing API proxy flows to publish messages to Google Cloud Pub/Sub.

## Extended Definition

Apigee hybrid v1.7.0 adds the PublishMessage policy, allowing API proxy flows to publish messages to Google Cloud Pub/Sub.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)

## Supporting Pages

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When using multiple, different response cache policies in a proxy, follow these guidelines to ensure discrete behavior for each: Execute each policy based on mutually exclusive conditions.
- Enabling CORS Before publishing your APIs, you'll need to add the CORS policy to the request PreFlow of the ProxyEndpoint to support client-side cross-origin requests.
- Whenever possible, try to have the response cache policy that populates the cache execute at the ProxyEndpoint response PostFlow as late as possible.
- For example, to reuse a policy, store it in source control so that developers can sync to it and use it in their own proxy development environments.

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-required-3`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.
- The policy is added to the /policies folder for the API proxy and opened in the editor.

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-reference-required-3`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add an XML to JSON policy Next, you'll add the XML to JSON policy to the View XML Response conditional flow that was generated automatically when you created the API proxy from the OpenAPI Specification.
- The target service still returns its block of XML, but now the policy in the API proxy will convert the response to JSON.
- Add the XML to JSON policy to the View XML Response conditional flow in the API proxy.
- For example: http://apitest.acme.com/mock-target-api Name field content converted to all lower case Description Description of the API proxy. description property from the OpenAPI Specification Target (Existing API) Target URL invoked on behalf of this API proxy.

