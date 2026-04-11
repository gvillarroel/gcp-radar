---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.077Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Drive - List task"
feature_slug: "drive-list-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "NONE"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/list"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/list"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/list"
keywords:
  - "Drive file listing task"
  - "List Drive resources"
  - "Drive List task"
  - "Drive list task"
  - "Apigee Integration Drive task"
  - "Drive List"
  - "List"
---

# Drive - List task

Product: Apigee Integration
Coverage: NONE

## Step 02 Summary

Adds an integration task to list Drive resources in preview.

## Extended Definition

No evidence in the provided Google Cloud documentation excerpts confirms a feature named "Drive - List task." The cited pages only describe Apigee Integrations REST `list` methods for other resource types (`suspensions`, `authConfigs`, and `certificates`), which list matching resources and require corresponding IAM `*.list` permissions on the parent resource.

## Evidence Summary

These pages define generic Apigee Integrations list endpoints and their IAM permissions, but provide no mention of a Google Drive list integration task.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/list](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/list)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/list](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/list)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/list](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/list)

## Supporting Pages

### "Method: projects.locations.products.integrations.executions.suspensions.list\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/list](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/list)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- IAM Permissions Requires one of the following IAM permissions on the parent resource, depending on the resource type: integrations.apigeeSuspensions.list integrations.suspensions.list For more information, see the IAM documentation .
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.integrations.executions.suspensions.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Path parameters Query parameters Request body Response body Authorization Scopes IAM Permissions Lists suspensions associated with a specific execution.
- Response body If successful, the response body contains an instance of ListSuspensionsResponse .

### "Method: projects.locations.products.authConfigs.list \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/list](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/list)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- If unspecified, defaults to 100. pageToken string The token returned in the previous response. filter string Filtering as supported in List filter syntax and usage . readMask string ( FieldMask format) The mask which specifies fields that need to be returned in the AuthConfig's response.
- IAM Permissions Requires the following IAM permissions on the parent resource: integrations.apigeeAuthConfigs.list integrations.authConfigs.list integrations.securityAuthConfigs.list For more information, see the IAM documentation .
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.authConfigs.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Path parameters Query parameters Request body Response body Authorization Scopes IAM Permissions Lists all auth configs that match the filter.

### "Method: projects.locations.products.certificates.list \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/list](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/list)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- If unspecified, defaults to 100. pageToken string The token returned in the previous response. filter string Filtering as supported in List filter syntax and usage . readMask string ( FieldMask format) The mask which specifies fields that need to be returned in the Certificate's response.
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.certificates.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permissions on the parent resource: integrations.apigeeCertificates.list integrations.certificates.list For more information, see the IAM documentation .
- HTTP request Path parameters Query parameters Request body Response body Authorization Scopes IAM Permissions List all the certificates that match the filter.

