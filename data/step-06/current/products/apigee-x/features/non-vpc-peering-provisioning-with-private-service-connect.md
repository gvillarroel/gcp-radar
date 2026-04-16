---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.742Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Non-VPC peering provisioning with Private Service Connect"
feature_slug: "non-vpc-peering-provisioning-with-private-service-connect"
latest_feature_date: "2024-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
keywords:
  - "option"
  - "peering"
  - "provisioning"
  - "connect"
  - "private"
  - "added"
---

# Non-VPC peering provisioning with Private Service Connect

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Added a non-VPC peering provisioning option using Private Service Connect without requiring networks or IP ranges during provisioning.

## Extended Definition

Added a non-VPC peering provisioning option using Private Service Connect without requiring networks or IP ranges during provisioning.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Objectives In this tutorial, you will complete the following steps: Step 1: Create an integration for custom curation Step 2: Set up custom curation in API hub Step 3: Edit existing plugin instance Step 4: Verify enriched API data Costs In this document, you use the following billable components of Google Cloud: Application Integration Integration Connectors Cloud Storage Secret Manager To generate a cost estimate based on your projected usage, use the pricing calculator .
- It also collates the response of each run in curatedAPIMetadataList , where each element of the array has the response from one particular run. /application-integration/docs/configure-private-trigger">Private Trigger (Enrich each API with spec) Trigger ID: private trigger/test-curate-1 Private 1 Invokes the sub-integration for each element in apiMetaData .
- Before you begin Before you begin this tutorial, ensure you have completed the following: Grant the following IAM roles to the service account that you want to use to create the connection: roles/secretmanager.viewer, roles/secretmanager.secretAccessor roles/storage.admin For information on granting roles, see Granting, changing, and revoking access .
- Data mapping task (Construct GCS request payload) Input: connectorInputPayload (Fetch spec from GCS) .SET PROPERTY( apiMetadata .GET PROPERTY("api") .GET PROPERTY("displayName") .TO STRING() .CONCAT(".yaml") .TO LOWERCASE() , "ObjectFilePath" ) Output: ConnectorInputPayload (Fetch spec from GCS) Constructs the input payload for ConnectorInputPayload .

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- See Version Negotiation in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token A successful response looks similar to the following: { "id":1, "jsonrpc":"2.0", "result": { "capabilities": { "tools": { "listChanged":false } }, "protocolVersion":"2025-11-25", "serverInfo": { "name":"cymbal.products.com", "version":"1.0.0" } } } List available MCP tools In this step, you send a request to the tools/list method to confirm the list of tools available in your MCP endpoint.
- The target mcp.apigee.internal is also supported for backward compatibility. (Optional) Add a security policy to the MCP Discovery Proxy Before deploying your MCP Discovery Proxy, you can add security policies to enforce security requirements.
- See Protocol version header in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token The method returns all the tools that the MCP endpoint supports.
- Target endpoints : In this example, the default target connection is set to ORG NAME .mcp.apigee.internal , where ORG NAME is the name of your Apigee organization.

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- See the "Using a Private Service Connect backend (load balancer) to access a published service" section of Private Service Connect forwarding rules for information on costs.
- Enable Shadow API Discovery Shadow API Discovery is part of the Advanced API Security add-on and is available for Google Cloud projects with or without Apigee provisioning.
- Enable observation job (Optional) .

