---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:55:46.925Z"
product_name: "Apigee Integrated Portal"
product_slug: "apigee-integrated-portal"
feature_name: "AsyncAPI publishing in Integrated Portal"
feature_slug: "asyncapi-publishing-in-integrated-portal"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "documents"
  - "asyncapi"
  - "publishing"
  - "apis"
  - "adds"
---

# AsyncAPI publishing in Integrated Portal

Product: Apigee Integrated Portal
Coverage: MEDIUM

## Step 02 Summary

Adds support for publishing APIs from AsyncAPI documents so asynchronous API documentation can be rendered in the portal.

## Extended Definition

Adds support for publishing APIs from AsyncAPI documents so asynchronous API documentation can be rendered in the portal.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis](https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### Publishing your APIs \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis](https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Publishing an AsyncAPI document renders documentation that allows developers to browse the documentation for asynchronous APIs to understand its channels and payloads.
- Response payload: { " status ":" success " , " message ":" Api documentation updated " , " requestId ":"645138278" , " data ": { " graphqlDocumentation ": { " schema ": { " displayName ": " Hello World 2" }, " endpointUri ": " https : // demo . google . com / graphql " } } } AsyncAPI curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs/ API DOC /documentation" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"asyncApiDocumentation": { "spec":{ "displayName":" DISPLAY NAME ", "contents":" CONTENTS "} } }' Replace the following: ORG NAME with the name of the organization.
- Response payload: { "status": "success", "message": "ApiDoc updated", "requestId": "197181831", "data": { "siteId": "my-org-myportal", "title": "Hello World 2", "description": "Simple hello world example.", "modified": "1698884328000", "anonAllowed": true, "imageUrl": "/files/book-tree.jpg", "id": "408567", "requireCallbackUrl": true, "categoryIds": [ "88fbfd1d-9300-49f7-bfc2-531ade4c63d4", "630c4cf9-109a-48b0-98cc-ef4c12ae4474" ], "published": PUBLISHED TRUE OR FALSE , "apiProductName": "Hello World 2" } } Publish or unpublish an API Publishing is the process of making your APIs available to app developers for consumption.
- Click Save . curl To update OpenAPI, AsyncAPI, or GraphQL documentation contents using organizations.sites.apidocs.updateDocumentation : OpenAPI curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs/ API DOC /documentation" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"oasDocumentation": { "spec":{ "displayName":" DISPLAY NAME ", "contents":" CONTENTS "} } }' Replace the following: ORG NAME with the name of the organization.

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

