---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.755Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "One-click provisioning for Pay-as-you-go"
feature_slug: "one-click-provisioning-for-pay-as-you-go"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/deprovision"
keywords:
  - "click"
  - "introduces"
  - "provisioning"
---

# One-click provisioning for Pay-as-you-go

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Introduces GA one-click provisioning with smart defaults to simplify onboarding for new Pay-as-you-go Apigee organizations.

## Extended Definition

Introduces GA one-click provisioning with smart defaults to simplify onboarding for new Pay-as-you-go Apigee organizations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Under the <Set> element, add the following child elements: <Set> <Authentication> <HeaderName>Authorization</HeaderName> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> </Set> Click Save .
- Configure the traffic extension This section describes how to configure the traffic service extension for your Extension Processor, using the following steps: Create the traffic extension with the Extension Processor provisioning API .
- Operation: Click Edit and configure the following paths and methods: Path: /get with Method: GET Path: / TARGET PROXY NAME with Method: GET TARGET PROXY NAME is the name of the proxy that processes extension traffic.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- When you click Deploy , Apigee begins deploying the proxy and provisioning downstream components.
- You can view the proxy's target and server endpoints by clicking View in the Endpoint summary column of the Revisions table.
- Deploy the MCP Discovery Proxy To deploy the MCP Discovery Proxy: Click Deploy to open the Deploy API proxy pane.
- During this time, which may take several minutes, the UI will show a Provisioning status for the deployment.

### Deprovision Apigee API hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Deprovisioning an API hub instance removes all associated resources, including APIs, versions, deployments, and any Apigee organizations (with no Apigee instances ) from your project.
- Deprovision an API hub instance To deprovision an API hub instance, do the following: Warnings: Deprovisioning an API hub instance deletes all the data associated with the instance.
- Note: Deprovisioning an API hub instance doesn't impact or delete any existing Apigee data, such as API proxies or proxy deployments.
- Grant the Cloud API hub Provisioning Admin ( roles/apihub.provisioningAdmin ) role on the default service account.

