---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.766Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Multi-region northbound Private Service Connect routing"
feature_slug: "multi-region-northbound-private-service-connect-routing"
latest_feature_date: "2022-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "multi"
  - "northbound"
  - "routing"
  - "region"
  - "connect"
  - "private"
---

# Multi-region northbound Private Service Connect routing

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee now supports northbound Private Service Connect routing in multi-region configurations.

## Extended Definition

Apigee now supports northbound Private Service Connect routing in multi-region configurations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Configure the following details in the Connectors Task Editor page: Region: select a desired location .
- Objectives In this tutorial, you will complete the following steps: Step 1: Create an integration for custom curation Step 2: Set up custom curation in API hub Step 3: Edit existing plugin instance Step 4: Verify enriched API data Costs In this document, you use the following billable components of Google Cloud: Application Integration Integration Connectors Cloud Storage Secret Manager To generate a cost estimate based on your projected usage, use the pricing calculator .
- It also collates the response of each run in curatedAPIMetadataList , where each element of the array has the response from one particular run. /application-integration/docs/configure-private-trigger">Private Trigger (Enrich each API with spec) Trigger ID: private trigger/test-curate-1 Private 1 Invokes the sub-integration for each element in apiMetaData .
- Before you begin Before you begin this tutorial, ensure you have completed the following: Grant the following IAM roles to the service account that you want to use to create the connection: roles/secretmanager.viewer, roles/secretmanager.secretAccessor roles/storage.admin For information on granting roles, see Granting, changing, and revoking access .

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- See the "Using a Private Service Connect backend (load balancer) to access a published service" section of Private Service Connect forwarding rules for information on costs.
- The following regions are currently supported for API observation and Shadow APIs: australia-southeast1 europe-west2 europe-west9 us-central1 us-east1 us-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To manage tags for one or more results at the same time, select multiple results from the list and then Manage tags from the top of the list.
- All data collected in the source regions is processed in and accessed from this region, consistent with Google's Data Residency policies .

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the hostname configuration in the OpenAPI specification and the corresponding hostname configuration in the Apigee environment group: Component Required Configuration Example Value Supporting Information Apigee Environment Group Hostnames must be configured in the environment group. cymbal.products.com , internal.products.com Environment groups enable routing to a group of environments using a hostname.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview To expose your APIs as MCP tools using Apigee, you create and deploy a new Apigee proxy using the MCP Discovery Proxy template.
- Enable the API Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export REGION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.
- Target endpoints : In this example, the default target connection is set to ORG NAME .mcp.apigee.internal , where ORG NAME is the name of your Apigee organization.

