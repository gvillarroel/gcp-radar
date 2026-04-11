---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:39.215Z"
product_name: "Apigee Integrated Portal"
product_slug: "apigee-integrated-portal"
feature_name: "GraphQL schema publishing"
feature_slug: "graphql-schema-publishing"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis"
keywords:
  - "publish GraphQL schema"
  - "schema-based API publishing"
  - "GraphQL schema publishing"
  - "GraphQL API publication"
  - "GraphQL portal publish"
  - "schema publish"
  - "integrated portal GraphQL"
  - "GraphQL"
---

# GraphQL schema publishing

Product: Apigee Integrated Portal
Coverage: MEDIUM

## Step 02 Summary

Adds the ability to publish APIs to the integrated portal using a GraphQL schema.

## Extended Definition

Apigee Integrated Portal allows GraphQL API documentation to be published/updated in portal API docs by calling `organizations.sites.apidocs.updateDocumentation` (PATCH on `organizations/{ORG_NAME}/sites/{SITE_ID}/apidocs/{API_DOC}/documentation`) with a `graphqlDocumentation` payload containing `schema` data (`displayName`, `contents`) and `endpointUri`. In this workflow, updating the GraphQL documentation is done via the same Save/PATCH pattern used for OpenAPI and AsyncAPI docs. The documentation page also indicates published APIs appear on the portal’s APIs page via links to their API reference content.

## Evidence Summary

This page provides practical API examples and payload fields for GraphQL documentation (`graphqlDocumentation.schema` and `endpointUri`) in portal API doc update calls, plus notes that these docs are surfaced from the portal APIs page.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis](https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis)

## Supporting Pages

### Publishing your APIs \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis](https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Response payload: { " status ":" success " , " message ":" Api documentation updated " , " requestId ":"645138278" , " data ": { " graphqlDocumentation ": { " schema ": { " displayName ": " Hello World 2" }, " endpointUri ": " https : // demo . google . com / graphql " } } } AsyncAPI curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs/ API DOC /documentation" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"asyncApiDocumentation": { "spec":{ "displayName":" DISPLAY NAME ", "contents":" CONTENTS "} } }' Replace the following: ORG NAME with the name of the organization.
- Response payload: { "status":"success", "message":"Api documentation updated", "requestId":"645138278", "data": { "oasDocumentation": { "spec": { "displayName": "Hello World 2" }, "Format": "YAML" } } } GraphQL curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs/ API DOC /documentation" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"graphqlDocumentation": { "schema":{"displayName":" DISPLAY NAME ", "contents":" CONTENTS "}, "endpointUri": " ENDPOINT URI " } }' Replace the following: ORG NAME with the name of the organization.
- Click Save . curl To update OpenAPI, AsyncAPI, or GraphQL documentation contents using organizations.sites.apidocs.updateDocumentation : OpenAPI curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs/ API DOC /documentation" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"oasDocumentation": { "spec":{ "displayName":" DISPLAY NAME ", "contents":" CONTENTS "} } }' Replace the following: ORG NAME with the name of the organization.
- See: SmartDocs (OpenAPI) GraphQL Explorer AsyncAPI A link to the API reference page is added to the APIs page The APIs page (included with the sample portal ) provides a list of all APIs published to your portal, listed in alphabetical order, with links to the respective API reference documentation for more information.

