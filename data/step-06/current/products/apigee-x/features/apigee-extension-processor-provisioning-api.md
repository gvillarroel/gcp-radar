---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.827Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Extension Processor provisioning API"
feature_slug: "apigee-extension-processor-provisioning-api"
latest_feature_date: "2025-12-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "extension provision endpoint"
  - "create traffic extensions"
  - "provision traffic extension"
  - "Extension Processor provisioning API"
  - "traffic extension provisioning API"
  - "extension processor API"
  - "Extension Processor API"
  - "traffic extension API"
---

# Apigee Extension Processor provisioning API

Product: Apigee X
Coverage: HIGH

## Step 02 Summary

The Apigee Extension Processor provisioning API is now available for creating traffic extensions.

## Extended Definition

The Apigee Extension Processor provisioning API is the API used in the documented workflow to create traffic service extensions for Extension Processor. It is invoked with an HTTP `POST` to `https://apigee.googleapis.com/v1/organizations/{ORG_NAME}/apimServiceExtensions?apimServiceExtensionId={TRAFFIC_EXT_NAME}`, with a JSON payload defining the extension processor, networking, and extension match/failover settings. In the official quickstart, this provisioning call is explicitly the required step to configure a traffic extension.

## Evidence Summary

The linked quickstart page explicitly shows the provisioning API call pattern and identifies it as the step to create/configure a traffic extension for Extension Processor.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: The page focuses on UI-driven quickstart configuration rather than APIs for provisioning traffic extensions.

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Configure the traffic extension This section describes how to configure the traffic service extension for your Extension Processor, using the following steps: Create the traffic extension with the Extension Processor provisioning API .
- Create the traffic extension with the Extension Processor provisioning API In this step, create a traffic service extension for your Extension Processor using the Extension Processor provisioning API.

