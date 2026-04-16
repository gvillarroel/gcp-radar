---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.544Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API details card standardization in UI"
feature_slug: "api-details-card-standardization-in-ui"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "standardization"
  - "standardized"
  - "layout"
  - "card"
  - "details"
  - "page"
---

# API details card standardization in UI

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub standardized the card layout on the API details page in the user interface.

## Extended Definition

API hub standardized the card layout on the API details page in the user interface.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Select one or more of the following to filter this page: Select product API hub API Monitoring/Analytics Apigee Apigee in VS Code Archive deployments Connectors Documentation hybrid Integration Integrated portal Monetization UI Select status FIXED OPEN Apigee 1-10 Apigee 1-9 hybrid 1.16 hybrid 1.15 hybrid 1.14 hybrid 1.13 hybrid 1.12 hybrid 1.11 hybrid 1.10 hybrid 1.9 hybrid 1.8 hybrid 1.7 hybrid 1.6 hybrid 1.5 hybrid 1.4 hybrid 1.3 This section lists known issues for Apigee components.
- To distinguish actual spikes in requests vs. this issue, please consult the API Analytics page (specifically the Proxy Performance and Target Performance pages) Affected Metrics: apigee.googleapis.com/proxyv2/request count apigee.googleapis.com/proxyv2/response count apigee.googleapis.com/targetv2/request count apigee.googleapis.com/targetv2/response count New metrics You can use the new metrics to avoid this issue.
- For example, use of the following basepaths for two proxies deployed in the same environment may result in a 404 error when calling Proxy-2 : Proxy-1: /a/v1/b Proxy-2: /a/ /c In this case, calls to the explicit base path will resolve successfully, but calls to the Proxy-2 may return a 404 , if the wildcard path is evaluated as /a/v1/c .
- 378686709 Apigee Apigee hybrid FIXED in Apigee (support call required) FIXED in hybrid 1.14.3 and hybrid 1.15.1 ( procedure required ) The use of wildcards ( ) in Apigee proxy basepaths may conflict with other explicit basepaths, resulting in a 404 error.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-required-3`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go to the Instances page in the Google Cloud console to select an instance and view its details: Go to Instances You can use Extension Processor with a Subscription or Pay-as-you-go Apigee organization.
- On the Apps page, click + Create On the Create App page, complete the required fields in the App Details section using the following values: App name : Enter a name for the App.
- In the App Details page, in the Credential section, click visibility off to display the value of the App Secret .
- In the App Details page, in the Credential section, click visibility off to display the value of the Key .

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference-required-4`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to filter resources based on a user defined attribute value of String data type. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/apis?filter=attributes.projects/test-project-1/locations/us-central1/attributes/cdcb1260-ed63-4e5b-935d-4394f178da4f.string values.values:helloworld Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can perform the following edits on a user defined attribute: Update the attribute name Add new attribute value Delete an existing attribute value Console To edit a user defined attribute, do the following steps: In the Google Cloud console, go to the API hub > Settings page.
- View user defined attributes Console To view all the user defined attributes, in the Google Cloud console, go to the API hub > Settings page.

