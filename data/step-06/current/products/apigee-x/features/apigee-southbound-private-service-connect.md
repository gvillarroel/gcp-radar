---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.768Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee southbound Private Service Connect"
feature_slug: "apigee-southbound-private-service-connect"
latest_feature_date: "2022-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint"
keywords:
  - "southbound"
  - "routing"
  - "connect"
  - "private"
  - "target"
  - "supports"
---

# Apigee southbound Private Service Connect

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee now supports Private Service Connect for southbound routing to target services across VPC networks beyond the peered network.

## Extended Definition

Apigee now supports Private Service Connect for southbound routing to target services across VPC networks beyond the peered network.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Create API proxies in Apigee To get started, you'll first need to register the following sample API proxies in your Apigee project: API proxy name Configuration details Base config Revision config Orders API Proxy template: Reverse proxy Target: https://mocktarget.apigee.net Change target endpoint to: https://mocktarget.apigee.net/xml Products API Users API Note: Ensure that each proxy has at least one revision deployed to an environment, and the environment must be part of an environment group.
- Objectives In this tutorial, you will complete the following steps: Step 1: Create an integration for custom curation Step 2: Set up custom curation in API hub Step 3: Edit existing plugin instance Step 4: Verify enriched API data Costs In this document, you use the following billable components of Google Cloud: Application Integration Integration Connectors Cloud Storage Secret Manager To generate a cost estimate based on your projected usage, use the pricing calculator .
- It also collates the response of each run in curatedAPIMetadataList , where each element of the array has the response from one particular run. /application-integration/docs/configure-private-trigger">Private Trigger (Enrich each API with spec) Trigger ID: private trigger/test-curate-1 Private 1 Invokes the sub-integration for each element in apiMetaData .
- Before you begin Before you begin this tutorial, ensure you have completed the following: Grant the following IAM roles to the service account that you want to use to create the connection: roles/secretmanager.viewer, roles/secretmanager.secretAccessor roles/storage.admin For information on granting roles, see Granting, changing, and revoking access .

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Target endpoints : In this example, the default target connection is set to ORG NAME .mcp.apigee.internal , where ORG NAME is the name of your Apigee organization.
- The following table shows the hostname configuration in the OpenAPI specification and the corresponding hostname configuration in the Apigee environment group: Component Required Configuration Example Value Supporting Information Apigee Environment Group Hostnames must be configured in the environment group. cymbal.products.com , internal.products.com Environment groups enable routing to a group of environments using a hostname.
- The target mcp.apigee.internal is also supported for backward compatibility. (Optional) Add a security policy to the MCP Discovery Proxy Before deploying your MCP Discovery Proxy, you can add security policies to enforce security requirements.
- MCP in Apigee supports the following OpenAPI versions: 3.0.0 3.0.1 3.0.2 3.0.3 This quickstart uses a sample OpenAPI 3.0.x specification with three API operations: GET /artists : Returns a list of artists.

### Step 5: Change the target endpoint \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update the <URL> element to append xml to the existing URL: <TargetEndpoint name="default"> <HTTPTargetConnection> <URL>https://mocktarget.apigee.net/ xml </URL> </HTTPTargetConnection> </TargetEndpoint> Select File > Save or ⌘S to save your edits.
- Home Documentation Application development Apigee Guides Send feedback Step 5: Change the target endpoint Stay organized with collections Save and categorize content based on your preferences.
- Expand the helloworld API proxy bundle and click default.xml in the targets folder to open the file in the editor.
- Change your proxy's target endpoint to one that returns more meaningful data.

