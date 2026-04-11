---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:30.030Z"
product_name: "Apigee Analytics"
product_slug: "apigee-analytics"
feature_name: "Apigee Analytics regional expansion to Hong Kong and São Paulo"
feature_slug: "apigee-analytics-regional-expansion-to-hong-kong-and-s-o-paulo"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "NONE"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/export-data"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "expansion"
  - "regional"
  - "hong"
  - "kong"
  - "apigee"
  - "analytics"
  - "to"
  - "and"
---

# Apigee Analytics regional expansion to Hong Kong and São Paulo

Product: Apigee Analytics
Coverage: NONE

## Step 02 Summary

Introduces Apigee Analytics availability in the Hong Kong (asia-east2) and São Paulo (southamerica-east1) regions.

## Extended Definition

No cited official documentation confirms a regional expansion of Apigee Analytics to Hong Kong (asia-east2) or São Paulo (southamerica-east1). The provided sources only describe Apigee Analytics feature functionality (metrics/dimensions/filters, data export, and monitoring/traffic filtering in MCP), so evidence for this specific region-availability feature is not present.

## Evidence Summary

The cited pages document Apigee Analytics capabilities and permissions but do not include any statement about launching Analytics in Asia-east2 or South America-east1.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/export-data](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/export-data)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Analytics metrics, dimensions, and filters reference Stay organized with collections Save and categorize content based on your preferences.
- For example, the Apigee sample target http://mocktarget.apigee.net includes several resources, including /user?user={name} resource and query parameter to return a custom greeting to the name provided.
- For example, if an API proxy's base URL is https://apigeedocs-test.apigee.net/hello/ , and a call is made to https://apigeedocs-test.apigee.net/hello/json , the pathsuffix is /json .
- To determine the original client IP Address, accessed through the ax resolved client ip dimension, Apigee uses the ax true client ip and the x forwarded for ip dimensions.

### Exporting data from Analytics \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/export-data](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/export-data)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following tests a Cloud Storage data repository configuration: curl "https://apigee.googleapis.com/v1/organizations/myorg/analytics/datastores:test" \ -X POST \ -H "Content-type:application/json" \ -H "Authorization: Bearer $TOKEN" \ -d \ '{ "displayName": "My Cloud Storage datastore", "targetType": "gcs", "datastoreConfig": { "projectId": "my-project", "bucketName": "my-bucket", "path": "my/analytics/path" } }' The following provides an example of the response if the test is successful: { "state": "completed", } The following provides an example of the response if the test failed: { "state": "failed", "error": "<error message>" } In this case, address the issues raised in the error message and re-test the data repository configuration.
- The organization and environment must support monetization to set this option, otherwise omit the dataset property from the payload: '{ "name": "Export raw results to Cloud Storage", "description": "Export raw results to Cloud Storage for last 24 hours", "dateRange": { "start": "2018-06-08", "end": "2018-06-09" }, "outputFormat": "json", "datastoreName": "My Cloud Storage data repository", "dataset":"mint" }' --> About export API quotas To prevent overuse of expensive data export API calls, Apigee enforces a quota of 15 calls per day per organization on calls to the organizations/{org}/environments/{env}/analytics/exports API.
- You can export analytics data to the following data repositories: Google Cloud Storage Google BigQuery Steps to export your analytics data The following steps summarize the process used to export your analytics data: Note: You must have Apigee Analytics Editor and Apigee Org Administrator permissions to manage datastores and export data.
- Apigee Analytics collects and analyzes a broad spectrum of data that flows across your APIs and provides visualization tools, including interactive dashboards, custom reports, and other tools that identify trends in API proxy performance.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Apigee Analytics allows you to filter metrics to distinguish between standard API traffic and MCP-specific traffic, and to see usage volume for tools/list versus tools/call requests.
- Monitoring and analytics You can monitor MCP traffic and view tool-level metrics using Apigee Analytics.
- The following table shows the hostname configuration in the OpenAPI specification and the corresponding hostname configuration in the Apigee environment group: Component Required Configuration Example Value Supporting Information Apigee Environment Group Hostnames must be configured in the environment group. cymbal.products.com , internal.products.com Environment groups enable routing to a group of environments using a hostname.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview To expose your APIs as MCP tools using Apigee, you create and deploy a new Apigee proxy using the MCP Discovery Proxy template.

