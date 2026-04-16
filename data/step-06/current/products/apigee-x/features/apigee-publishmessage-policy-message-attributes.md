---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.734Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee PublishMessage policy message attributes"
feature_slug: "apigee-publishmessage-policy-message-attributes"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
keywords:
  - "publishmessage"
  - "adding"
  - "attributes"
  - "message"
  - "supports"
  - "policy"
---

# Apigee PublishMessage policy message attributes

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The PublishMessage policy now supports adding string key/value attributes to messages sent to Pub/Sub.

## Extended Definition

The PublishMessage policy now supports adding string key/value attributes to messages sent to Pub/Sub.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- With the successful application of the AssignMessage policy, the client's successful request (containing the API key) to Apigee in the example scenario is modified further to include a Google authentication token in the request header, as required by the Google-authenticated backend service.
- Add the AssignMessage policy for Google authentication If you want to use your Extension Processor to provide API management for a Google-authenticated service, you can inject a Google access token or Google ID token into requests sent to the backend service using the AssignMessage policy .
- The following sections describe how to use the AssignMessage policy to inject a Google authentication token into requests sent to the backend service using the Extension Processor: Attach the AssignMessage policy to the proxy.
- Attach the AssignMessage policy to the proxy To add the AssignMessage policy to your proxy: In the Google Cloud console, go to the Proxy Development > API Proxies page.

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to get the system attributes for all the resources. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/attributes?filter=definition type=SYSTEM DEFINED Edit a system attribute of type Enum Caution: Avoid adding sensitive data to system attributes.
- The following example shows the API call to get the user attributes for the API resource. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/attributes?filter=definition type=USER DEFINED Add a new user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- Supported system attributes Apigee API hub supports the following system attributes: Attribute Description Scope Mandatory Accreditation Indicates the accreditation status of the API version.

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The XMLtoJSON policy used in this tutorial converts the payload of the API's response message from XML to JSON.
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- Home Documentation Application development Apigee Guides Send feedback Step 6: Attach a policy Stay organized with collections Save and categorize content based on your preferences.

