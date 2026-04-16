---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.755Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Pay-as-you-go pricing attribute updates"
feature_slug: "pay-as-you-go-pricing-attribute-updates"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "lower"
  - "attribute"
  - "attributes"
  - "pricing"
  - "updates"
---

# Pay-as-you-go pricing attribute updates

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Updates Pay-as-you-go pricing attributes to lower initial onboarding cost and better align ongoing charges to usage.

## Extended Definition

Updates Pay-as-you-go pricing attributes to lower initial onboarding cost and better align ongoing charges to usage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows the API call update the API Visibility user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"name": "projects/test-15/locations/us-central1/attributes/API Visibility", display name" : "API Visibility Updated", "allowedValues": [ { "id": "internal", "displayName": "Internal", "description": "The API is visible internally in an organization" }, { "id": "external", "displayName": "External", "description": "The API is visible externally in an organization" }, { "id": "public", "displayName": "Public", "description": "The API is visible public in an organization" } ]}' \ -X PATCH https://autopush-apihub.sandbox.googleapis.com/v1/projects/common-dev-15/locations/us-central1/attributes/API Visibility?update mask=display name,allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to update the values of the Business unit attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"allowed values": [ { "id": "bu1", "display name": "Business unit 1", "description": "The API can be used by business unit 1" }, { "id": "bu2", "display name": "Business unit 2", "description": "The API can be used by business unit 2" }, { "id": "bu3", "display name": "Business unit 3", "description": "The API can be used by business unit 3" }]}' \ -X PATCH https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes/system-business-unit?update mask=allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to filter resources based on a user defined attribute value of String data type. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/apis?filter=attributes.projects/test-project-1/locations/us-central1/attributes/cdcb1260-ed63-4e5b-935d-4394f178da4f.string values.values:helloworld Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Audit logging for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.apihub.v1.ApiHubPlugin.GetPlugin google.cloud.apihub.v1.Provisioning.LookupApiHubInstance google.cloud.apihub.v1.RuntimeProjectAttachmentService.ListRuntimeProjectAttachments google.cloud.apihub.v1.RuntimeProjectAttachmentService.LookupRuntimeProjectAttachment ADMIN WRITE google.cloud.apihub.v1.ApiHubPlugin.DisablePlugin google.cloud.apihub.v1.ApiHubPlugin.EnablePlugin google.cloud.apihub.v1.HostProjectRegistrationService.CreateHostProjectRegistration google.cloud.apihub.v1.Provisioning.CreateApiHubInstance (LRO) google.cloud.apihub.v1.RuntimeProjectAttachmentService.CreateRuntimeProjectAttachment DATA READ google.cloud.apihub.v1.ApiHub.GetApi google.cloud.apihub.v1.ApiHub.GetAttribute google.cloud.apihub.v1.ApiHub.GetDeployment google.cloud.apihub.v1.ApiHub.GetExternalApi google.cloud.apihub.v1.ApiHub.GetSpec google.cloud.apihub.v1.ApiHub.GetSpecContents google.cloud.apihub.v1.ApiHub.GetVersion google.cloud.apihub.v1.ApiHub.ListApis google.cloud.apihub.v1.ApiHub.ListAttributes google.cloud.apihub.v1.ApiHub.ListDeployments google.cloud.apihub.v1.ApiHub.ListExternalApis google.cloud.apihub.v1.ApiHub.ListSpecs google.cloud.apihub.v1.ApiHub.ListVersions DATA WRITE google.cloud.apihub.v1.ApiHub.CreateApi google.cloud.apihub.v1.ApiHub.CreateAttribute google.cloud.apihub.v1.ApiHub.CreateDeployment google.cloud.apihub.v1.ApiHub.CreateExternalApi google.cloud.apihub.v1.ApiHub.CreateSpec google.cloud.apihub.v1.ApiHub.CreateVersion google.cloud.apihub.v1.ApiHub.DeleteApi google.cloud.apihub.v1.ApiHub.DeleteAttribute google.cloud.apihub.v1.ApiHub.DeleteDeployment google.cloud.apihub.v1.ApiHub.DeleteExternalApi google.cloud.apihub.v1.ApiHub.DeleteSpec google.cloud.apihub.v1.ApiHub.DeleteVersion google.cloud.apihub.v1.ApiHub.UpdateApi google.cloud.apihub.v1.ApiHub.UpdateAttribute google.cloud.apihub.v1.ApiHub.UpdateDeployment google.cloud.apihub.v1.ApiHub.UpdateExternalApi google.cloud.apihub.v1.ApiHub.UpdateSpec google.cloud.apihub.v1.ApiHub.UpdateVersion API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for API hub. google.cloud.apihub.v1.ApiHub The following audit logs are associated with methods belonging to google.cloud.apihub.v1.ApiHub .
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.ApiHub.ListAttributes" ListDeployments Method : google.cloud.apihub.v1.ApiHub.ListDeployments Audit log type : Data access Permissions : apihub.deployments.list - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.ApiHub.CreateApi" CreateAttribute Method : google.cloud.apihub.v1.ApiHub.CreateAttribute Audit log type : Data access Permissions : apihub.attributes.create - DATA WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.ApiHub.DeleteApi" DeleteAttribute Method : google.cloud.apihub.v1.ApiHub.DeleteAttribute Audit log type : Data access Permissions : apihub.attributes.delete - DATA WRITE Method is a long-running or streaming operation : No.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The supported attributes for updateMask are: networkConfigs : updates to region and subnet fields.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Update extensions To update the extensions attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Here are some examples: Update networkConfigs (Global LB) To update the networkConfigs attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = networkConfigs \ -H "Content-Type:application/json" -d \ '{ "networkConfigs": [ { "region": " REGION ", "subnet": "projects/$PROJECT/regions/ REGION /subnetworks/ SUBNET " } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

