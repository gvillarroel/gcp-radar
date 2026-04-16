---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.745Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Gemini Code Assist API management mock servers"
feature_slug: "gemini-code-assist-api-management-mock-servers"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership"
keywords:
  - "mock"
  - "release"
  - "servers"
  - "management"
  - "gemini"
  - "assist"
  - "preview"
  - "code"
---

# Gemini Code Assist API management mock servers

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Preview release adds Google Cloud-based remote mock servers for API management in Gemini Code Assist for easier API testing and validation.

## Extended Definition

Preview release adds Google Cloud-based remote mock servers for API management in Gemini Code Assist for easier API testing and validation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)

## Supporting Pages

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- For example: http://mocktarget.apigee.net servers property from the OpenAPI Specification The following provides an excerpt from the OpenAPI Specification showing the properties that are used to pre-populate the fields. openapi: 3.0.0 info: description : OpenAPI Specification for the Apigee mock target service endpoint. version: 1.0.0 title : Mock Target API paths: /: get: summary: View personalized greeting operationId: View a personalized greeting description: View a personalized greeting for the specified or guest user. parameters: - name: user in: query description: Your user name. required: false schema: type: string responses: "200": description: Success ... servers : - url: http://mocktarget.apigee.net - url: https://mocktarget.apigee.net ...
- Navigate to the following URL in your web browser: https://raw.githubusercontent.com/apigee/api-platform-samples/master/default-proxies/helloworld/openapi/mocktarget3.0.yaml Right-click on the displayed code and select Save As .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For example: http://apitest.acme.com/mock-target-api Name field content converted to all lower case Description Description of the API proxy. description property from the OpenAPI Specification Target (Existing API) Target URL invoked on behalf of this API proxy.

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- The following regions are currently supported for API observation and Shadow APIs: australia-southeast1 europe-west2 europe-west9 us-central1 us-east1 us-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Overview Preview — Shadow API Discovery This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Organizing client app ownership \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- Source ID: `site-iam-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Note: AppGroup management in Apigee UI in Cloud console will be considered in a future release.
- Managing AppGroups using the Apigee APIs Use these APIs to manage AppGroups in your orgs: Activities Link View and manage AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups View and manage the apps that belong to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps View and manage the app keys associated to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys View and manage AppGroup subscriptions to API products https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions See also AppGroup subscription management .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- IAM roles and permissions To control permissions required for AppGroup management, you can view and grant permissions or roles using the permissions panel on the IAM & Admin > IAM page in your Google Cloud project.

