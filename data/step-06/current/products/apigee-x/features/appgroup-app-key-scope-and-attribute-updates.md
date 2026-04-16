---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.735Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "AppGroup App Key scope and attribute updates"
feature_slug: "appgroup-app-key-scope-and-attribute-updates"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings"
keywords:
  - "scope"
  - "appgroup"
  - "scopes"
  - "attribute"
  - "attributes"
  - "updates"
---

# AppGroup App Key scope and attribute updates

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Scopes and attributes can now be added to an AppGroup App Key through a POST operation using the appGroupAppKey API.

## Extended Definition

Scopes and attributes can now be added to an AppGroup App Key through a POST operation using the appGroupAppKey API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings)

## Supporting Pages

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- Supported system attributes Apigee API hub supports the following system attributes: Attribute Description Scope Mandatory Accreditation Indicates the accreditation status of the API version.
- The following example shows the API call update the API Visibility user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"name": "projects/test-15/locations/us-central1/attributes/API Visibility", display name" : "API Visibility Updated", "allowedValues": [ { "id": "internal", "displayName": "Internal", "description": "The API is visible internally in an organization" }, { "id": "external", "displayName": "External", "description": "The API is visible externally in an organization" }, { "id": "public", "displayName": "Public", "description": "The API is visible public in an organization" } ]}' \ -X PATCH https://autopush-apihub.sandbox.googleapis.com/v1/projects/common-dev-15/locations/us-central1/attributes/API Visibility?update mask=display name,allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to update the values of the Business unit attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"allowed values": [ { "id": "bu1", "display name": "Business unit 1", "description": "The API can be used by business unit 1" }, { "id": "bu2", "display name": "Business unit 2", "description": "The API can be used by business unit 2" }, { "id": "bu3", "display name": "Business unit 3", "description": "The API can be used by business unit 3" }]}' \ -X PATCH https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes/system-business-unit?update mask=allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The supported attributes for updateMask are: networkConfigs : updates to region and subnet fields.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Update extensions To update the extensions attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Here are some examples: Update networkConfigs (Global LB) To update the networkConfigs attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = networkConfigs \ -H "Content-Type:application/json" -d \ '{ "networkConfigs": [ { "region": " REGION ", "subnet": "projects/$PROJECT/regions/ REGION /subnetworks/ SUBNET " } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

### Create and edit attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Create and edit attributes Stay organized with collections Save and categorize content based on your preferences.
- Overview The entities you create in API hub, such as API resources, versions, and deployments, can have system and user-defined attributes associated with them.
- It's a good practice to start off your API hub journey by setting up and editing key attributes that align with your organizational needs and standards.
- When you register APIs, create versions, and perform other actions, you can apply attributes and values to build metadata-rich, searchable entities.

