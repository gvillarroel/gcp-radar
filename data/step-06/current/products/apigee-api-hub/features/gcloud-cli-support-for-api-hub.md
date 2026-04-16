---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.532Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "gcloud CLI support for API hub"
feature_slug: "gcloud-cli-support-for-api-hub"
latest_feature_date: "2026-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/gcloud-cli-apihub"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments"
keywords:
  - "lifecycle"
  - "catalog"
  - "gcloud"
  - "versions"
  - "manage"
  - "adds"
---

# gcloud CLI support for API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds Google Cloud CLI support to manage API hub catalog, API versions, and lifecycle metadata from the command line.

## Extended Definition

Adds Google Cloud CLI support to manage API hub catalog, API versions, and lifecycle metadata from the command line.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/gcloud-cli-apihub](https://docs.cloud.google.com/apigee/docs/apihub/gcloud-cli-apihub)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)

## Supporting Pages

### gcloud CLI for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/gcloud-cli-apihub](https://docs.cloud.google.com/apigee/docs/apihub/gcloud-cli-apihub)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Uploading a specification gcloud CLI apihub apis versions specs create "openapi-spec" --api="my-api" --version="v1" --display-name="OpenAPI 3.0 Spec" --contents='{"openapi": "3.0.0", ...}' --contents-mime-type="application/json" --project=$PROJECT --location=$LOCATION Considerations Creating resources without specifying an ID is not supported in the CLI.
- Command group Description apis Manage top-level API resources. apis versions Manage versions associated with an API. apis versions specs Manage API specifications. deployments Manage API deployments. attributes Manage user-defined and system attributes. runtime-project-attachments Manage attachments for runtime projects.
- Listing APIs gcloud CLI apihub apis list --project=$PROJECT --location=$LOCATION Adding a version to an API gcloud CLI apihub apis versions create "v1" --api="my-api" --display-name="Version 1.0" --project=$PROJECT --location=$LOCATION You can specify the version as a positional argument or using the --version flag.
- The gcloud CLI apihub component lets you to manage your API resources within API hub directly from the command line.

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference-required-4`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows the API call update the API Visibility user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"name": "projects/test-15/locations/us-central1/attributes/API Visibility", display name" : "API Visibility Updated", "allowedValues": [ { "id": "internal", "displayName": "Internal", "description": "The API is visible internally in an organization" }, { "id": "external", "displayName": "External", "description": "The API is visible externally in an organization" }, { "id": "public", "displayName": "Public", "description": "The API is visible public in an organization" } ]}' \ -X PATCH https://autopush-apihub.sandbox.googleapis.com/v1/projects/common-dev-15/locations/us-central1/attributes/API Visibility?update mask=display name,allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to update the values of the Business unit attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"allowed values": [ { "id": "bu1", "display name": "Business unit 1", "description": "The API can be used by business unit 1" }, { "id": "bu2", "display name": "Business unit 2", "description": "The API can be used by business unit 2" }, { "id": "bu3", "display name": "Business unit 3", "description": "The API can be used by business unit 3" }]}' \ -X PATCH https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes/system-business-unit?update mask=allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to filter resources based on a user defined attribute value of String data type. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/apis?filter=attributes.projects/test-project-1/locations/us-central1/attributes/cdcb1260-ed63-4e5b-935d-4394f178da4f.string values.values:helloworld Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Manage deployments \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- Source ID: `site-docs-reference-required-3`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST To unlink a deployment from an API, use the Patch deployment API: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "deployments": [ " DEPLOYMENT NAME ", " DEPLOYMENT NAME " ] }' -X PATCH https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /apis/ API NAME /versions/ VERSION ID ?update mask=deployments Replace the following: HUB PROJECT : The name of your API hub host project.
- REST Example linking a deployment to a version: curl "https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /apis/ API NAME /versions/ VERSION ID " -H "Authorization: Bearer: $(gcloud auth print-access-token)" -X PATCH -H "Content-Type: application/json" \ '{ "deployments": " DEPLOYMENTS " }' Replace the following: HUB PROJECT : The name of your API hub host project.
- REST To add a new deployment using the Create a deployment API: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "display name": " DISPLAY NAME ", "description": " DESCRIPTION ", "deployment type": { "enum values": { "values": [ { "id": " DEPLOYMENT TYPE " } ] } }, "resource uri": " RESOURCE URI ", "endpoints": [ " ENDPOINT " ] }' https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /deployments?deployment id= DEPLOYMENT ID Replace the following: DISPLAY NAME : (Required) The display name of the deployment.
- REST To edit a deployment, use the Patch deployment API: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "name": "projects/ HUB PROJECT /locations/ HUB LOCATION /deployments/ DEPLOYMENT ID ", "display name" : " DISPLAY NAME ", "description":" DESCRIPTION ", "endpoints": [" ENDPOINT "] } ' -X PATCH https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /deployments/ DEPLOYMENT ID ?update mask=display name,description,endpoints Replace the following: HUB PROJECT : The name of your API hub host project.

