---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.150Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Extension Processor"
feature_slug: "apigee-extension-processor"
latest_feature_date: "2025-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "exposed"
  - "adds"
  - "capabilities"
  - "extension"
  - "processor"
  - "management"
  - "through"
---

# Apigee Extension Processor

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Apigee Extension Processor adds Apigee API management capabilities to services exposed through Cloud Load Balancing.

## Extended Definition

The Apigee Extension Processor adds Apigee API management capabilities to services exposed through Cloud Load Balancing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary](https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the AssignMessage policy for Google authentication If you want to use your Extension Processor to provide API management for a Google-authenticated service, you can inject a Google access token or Google ID token into requests sent to the backend service using the AssignMessage policy .
- The following sections guide you through the steps to configure the key elements of the Apigee Extension Processor: Configure a load balancer for a backend service .
- Create the Extension Processor proxy The Extension Processor proxy is an Apigee API proxy that is used to apply API management policies to the load balancer traffic.
- To learn more about the suggested use cases and benefits of using the Apigee Extension Processor for API management, see Apigee Extension Processor overview .

### Glossary \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary](https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- An Apigee service in the management plane that processes incoming analytics, debug, and deployment status data and makes it available to you through the Apigee hybrid UI or the Apigee APIs .
- M management plane The Google-hosted central services that communicate with the runtime plane through service accounts.
- These services communicate through service accounts with the management plane.
- For more information, see About the runtime plane . central management infrastructure (or plane) See management plane . container[ized] image See image. control plane See management plane .

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Optional Type Array of <FormParam> elements Parent Element <Add> Child Elements <FormParam> The <FormParams> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Add > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < / Add > < / AssignMessage > Example 1 The following example adds a single form parameter ( answer ) and a static value ( 42 ) to the request: <AssignMessage name="AM-add-formparams-1"> <Add> <FormParams> <FormParam name="answer">42</FormParam> </FormParams> </Add> <AssignTo>request</AssignTo> </AssignMessage> Example 2 The following example gets the value of the name query parameter and adds it to the request as a form parameter, and then removes the query parameter: <AssignMessage name="AM-Swap-QueryParam-to-FormParams"> <Add> <FormParam name="name">{request.queryparam.name}</FormParam> </Add> <Remove> <QueryParam name="name"/> </Remove> </AssignMessage> Note that this example does not specify a target with <AssignTo> .
- Examples The following examples show some of the ways in which you can use the AssignMessage policy: 1: Add header The following example adds a header to the request with the <Add> element: <AssignMessage name="AM-add-headers-1"> <Add> <Headers> <Header name="partner-id">{verifyapikey.VAK-1.developer.app.partner-id}</Header> </Headers> </Add> <AssignTo>request</AssignTo> </AssignMessage> 2: Remove payload The following example deletes the payload from the response with the <Remove> element: < AssignMessage name = "AM-remove-1" > < DisplayName>remove - 1 < / DisplayName > < Remove > < Payload>true < / Payload > < / Remove > < AssignTo>response < / AssignTo > < / AssignMessage > 3: Modify response The following example modifies an existing response object by adding a header to it: <AssignMessage name="AM-modify-response"> <Set> <Headers> <Header name="Cache-Hit">{lookupcache.LookupCache-1.cachehit}</Header> </Headers> </Set> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <AssignTo>response</AssignTo> </AssignMessage> This example does not create a new message.
- Optional Type Boolean Parent Element <Copy> Child Elements None The <Version> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <Copy source=" VARIABLE NAME "> <Version>[false true]</Version> </Copy> </AssignMessage> Example 1 The following example sets <Version> to true on the request, which copies the version from the default request object to a new, custom request object: < AssignMessage name = "copy-version-1" > < Copy source = "request" > < Version>true < / Version > < / Copy > < AssignTo createNew = "true" transport = "http" type = "request" > MyCustomRequest < / AssignTo > < / AssignMessage > You can use <Copy> / <Version> only when the following criteria are met: The Message type for both source and destination is request <DisplayName> Use in addition to the name attribute to label the policy in the management UI proxy editor with a different, more natural-sounding name.
- Optional Type Array of <QueryParam> elements Parent Element <Add> Child Elements <QueryParam> The <QueryParams> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <Add> <QueryParams> <QueryParam name=" QUERYPARAM NAME "> QUERYPARAM VALUE </QueryParam> ... </QueryParams> </Add> </AssignMessage> Example 1 The following example adds the query parameter myParam to the request and assigns the value 42 to it: <AssignMessage name="AM-add-queryparams-1"> <Add> <QueryParams> <QueryParam name="myParam">42</QueryParam> </QueryParams> </Add> <AssignTo>request</AssignTo> </AssignMessage> You can use <QueryParams> only when the following criteria are met: HTTP verbs: GET , POST , PATCH , DELETE Message type: Request In addition, you can only set query parameters when the <AssignTo> element's type attribute is a request message.

