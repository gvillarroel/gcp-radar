---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.441Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Provisioning wizard auto-allocation of /22 and /28 IP ranges"
feature_slug: "provisioning-wizard-auto-allocation-of-22-and-28-ip-ranges"
latest_feature_date: "2022-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "allocation"
  - "auto"
  - "wizard"
  - "ranges"
  - "provisioning"
---

# Provisioning wizard auto-allocation of /22 and /28 IP ranges

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Apigee provisioning wizard can automatically allocate /22 and /28 IP address ranges instead of requiring a larger /21 range.

## Extended Definition

The Apigee provisioning wizard can automatically allocate /22 and /28 IP address ranges instead of requiring a larger /21 range.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Auto-register Apigee proxies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Auto-register Apigee proxies Stay organized with collections Save and categorize content based on your preferences.
- Auto-register Apigee proxies In the Google Cloud console, go to the API hub page.
- Before you begin You must have completed the API hub provisioning steps.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Discover MCP tools in API hub Once your MCP Discovery Proxy is deployed, its API operations are automatically ingested into API hub and made discoverable as MCP tools.
- The API Hub ingestion pipeline automatically maps the paths defined in your OpenAPI specification to individual MCP tools listed in the hub.
- During this time, which may take several minutes, the UI will show a Provisioning status for the deployment.
- When you click Deploy , Apigee begins deploying the proxy and provisioning downstream components.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Configure the traffic extension This section describes how to configure the traffic service extension for your Extension Processor, using the following steps: Create the traffic extension with the Extension Processor provisioning API .
- Create the traffic extension with the Extension Processor provisioning API In this step, create a traffic service extension for your Extension Processor using the Extension Processor provisioning API.
- For more details about provisioning paid Apigee instances, see Before you begin .

