---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:55:46.929Z"
product_name: "Apigee Integrated Portal"
product_slug: "apigee-integrated-portal"
feature_name: "Integrated portal APIs"
feature_slug: "integrated-portal-apis"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "availability"
  - "delivers"
  - "users"
  - "apis"
---

# Integrated portal APIs

Product: Apigee Integrated Portal
Coverage: MEDIUM

## Step 02 Summary

Delivers GA availability of APIs that let users manage integrated portal entities and reference documentation via API calls; Introduces public preview availability of APIs for managing integrated portal entities and reference documentation via API calls.

## Extended Definition

Delivers GA availability of APIs that let users manage integrated portal entities and reference documentation via API calls; Introduces public preview availability of APIs for managing integrated portal entities and reference documentation via API calls.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis](https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### Publishing your APIs \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis](https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Include one of the following in the update call: When not enrolled in the Preview release of the audience management feature: "anonAllowed": true, # Anonymous users can see the API "anonAllowed": false, # Only registered users can see the API To edit the API: Use the organizations.sites.apidocs.get call to return the current values: curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs/ API DOC " \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Use the organizations.sites.apidocs.update call to edit the API.
- Response payload: { "status": "success", "message": "one page of apidocs returned", "requestId": "918815495", "data": [ { "siteId": "my-org-myportal", "title": "Hello New World", "description": "Simple hello new world example", "specId": "apigee", "modified": "1699146887000", "anonAllowed": true, "imageUrl": "/files/camper1.jpg?v=1695841491415", "id": "381054", "categoryIds": [ "e0518597-ece2-4d7d-ba7c-d1793df0f8db", "61c1014c-89c9-40e6-be3c-69cca3505620" ], "published": true, "apiProductName": "Hello New World" } ], "nextPageToken": "7zcqrin9l6xhi4nbrb9" } Page token: Use pageToken to retrieve subsequent pages when there are more than one: curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs ?pageSize= PAGE SIZE &pageToken= PAGE TOKEN " \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Replace: PAGE SIZE with the number of list items to return in one page.
- The APIs tab lets you: View the details of the APIs available on your portal Add an API to your portal Edit an API on your portal by performing one or more of the following tasks: Manage the API documentation Publish or unpublish an API Manage the visibility of an API Manage the callback URL for an API Manage the image for an API card Tag an API using categories Edit the API title and description Remove an API from your portal Manage the categories Quickly identify orphaned APIs whose associated API product has been removed from Google Cloud console , and re-create the API product or delete the API from your portal curl To list APIs using organizations.sites.apidocs/list : curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Replace the following: ORG NAME with the name of the organization.
- Response payload: { " status ":" success " , " message ":" Api documentation updated " , " requestId ":"645138278" , " data ": { " graphqlDocumentation ": { " schema ": { " displayName ": " Hello World 2" }, " endpointUri ": " https : // demo . google . com / graphql " } } } AsyncAPI curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs/ API DOC /documentation" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"asyncApiDocumentation": { "spec":{ "displayName":" DISPLAY NAME ", "contents":" CONTENTS "} } }' Replace the following: ORG NAME with the name of the organization.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Step 2: Create an API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

