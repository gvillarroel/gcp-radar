---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.351Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Delete integration"
feature_slug: "delete-integration"
latest_feature_date: "2023-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/delete"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/delete"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/delete"
keywords:
  - "associated"
  - "delete"
  - "entire"
  - "versions"
  - "ability"
  - "adds"
---

# Delete integration

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Adds the ability to delete an entire integration and all associated versions in one operation.

## Extended Definition

Adds the ability to delete an entire integration and all associated versions in one operation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/delete](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/delete)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/delete](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/delete)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/delete](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/delete)

## Supporting Pages

### "Method: projects.locations.products.integrations.versions.delete \_|\_ Apigee\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/delete](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/delete)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IAM Permissions Requires one of the following IAM permissions on the name resource, depending on the resource type: integrations.apigeeIntegrationVers.delete integrations.integrationVersions.delete For more information, see the IAM documentation .
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.integrations.versions.delete Stay organized with collections Save and categorize content based on your preferences.
- HTTP request DELETE https://integrations.googleapis.com/v1/{name=projects/ /locations/ /products/ /integrations/ /versions/ } The URL uses gRPC Transcoding syntax.
- This RPC throws an exception if the version being deleted is DRAFT, and if the lockedBy user is not the same as the user performing the Delete.

### "Method: projects.locations.products.authConfigs.delete \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/delete](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/delete)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- IAM Permissions Requires one of the following IAM permissions on the name resource, depending on the resource type: integrations.apigeeAuthConfigs.delete integrations.authConfigs.delete integrations.securityAuthConfigs.delete For more information, see the IAM documentation .
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.authConfigs.delete Stay organized with collections Save and categorize content based on your preferences.
- HTTP request DELETE https://integrations.googleapis.com/v1/{name=projects/ /locations/ /products/ /authConfigs/ } The URL uses gRPC Transcoding syntax.
- HTTP request Path parameters Request body Response body Authorization Scopes IAM Permissions Deletes an auth config.

### "Method: projects.locations.products.certificates.delete \_|\_ Apigee \_\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/delete](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/delete)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- HTTP request Path parameters Request body Response body Authorization Scopes IAM Permissions Delete a certificate HTTP request DELETE https://integrations.googleapis.com/v1/{name=projects/ /locations/ /products/ /certificates/ } The URL uses gRPC Transcoding syntax.
- IAM Permissions Requires one of the following IAM permissions on the name resource, depending on the resource type: integrations.apigeeCertificates.delete integrations.certificates.delete For more information, see the IAM documentation .
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.certificates.delete Stay organized with collections Save and categorize content based on your preferences.
- The name that is associated with the Certificate.

