---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.353Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Apigee Integration trials"
feature_slug: "apigee-integration-trials"
latest_feature_date: "2022-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/resolve"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions/list"
keywords:
  - "evaluation"
  - "trials"
  - "orgs"
  - "available"
  - "makes"
  - "integrations"
---

# Apigee Integration trials

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Makes Apigee Integrations available in Apigee Evaluation orgs so users can try the feature without billing charges.

## Extended Definition

Makes Apigee Integrations available in Apigee Evaluation orgs so users can try the feature without billing charges.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/resolve](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/resolve)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions/list](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions/list)

## Supporting Pages

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-required-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- The Integrations page appears listing all the integrations available in the Google Cloud project.
- The Integrations page appears listing all the integrations available in the Google Cloud project.
- The Integrations page appears listing all the integrations available in the Google Cloud project.
- The Integrations page appears listing all the integrations available in the Google Cloud project.

### "Method: projects.locations.products.integrations.executions.list \_|\_ Apigee\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions/list](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions/list)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- IAM Permissions Requires the following IAM permissions on the parent resource: integrations.apigeeExecutions.list integrations.executions.list integrations.securityExecutions.list For more information, see the IAM documentation .
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.integrations.executions.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://integrations.googleapis.com/v1/{parent=projects/ /locations/ /products/ /integrations/ }/executions The URL uses gRPC Transcoding syntax.

### "Method: projects.locations.products.integrations.executions.suspensions.resolve\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/resolve](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/resolve)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Path parameters Parameters name string Required. projects/{gcpProjectId}/locations/{location}/products/{product}/integrations/{integration name}/executions/{execution name}/suspensions/{suspensionId} Request body The request body contains data with the following structure: JSON representation { "suspension" : { object ( Suspension ) } } Fields suspension object ( Suspension ) Suspension, containing the eventExecutionInfoId, taskId, and state to set on the corresponding suspension record.
- IAM Permissions Requires one of the following IAM permissions on the name resource, depending on the resource type: integrations.apigeeSuspensions.resolve integrations.suspensions.resolve For more information, see the IAM documentation .
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.integrations.executions.suspensions.resolve Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://integrations.googleapis.com/v1/{name=projects/ /locations/ /products/ /integrations/ /executions/ /suspensions/ }:resolve The URL uses gRPC Transcoding syntax.

