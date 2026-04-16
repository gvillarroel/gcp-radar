---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:28.015Z"
product_name: "Apigee Adapter for Envoy"
product_slug: "apigee-adapter-for-envoy"
feature_name: "JWT customattributes claim forwarding"
feature_slug: "jwt-customattributes-claim-forwarding"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "customattributes"
  - "forwarding"
  - "include"
  - "forward"
  - "claim"
  - "jwts"
---

# JWT customattributes claim forwarding

Product: Apigee Adapter for Envoy
Coverage: MEDIUM

## Step 02 Summary

JWTs can include a `customattributes` claim and forward its value to the target in the `x-apigee-customattributes` header when `append_metadata_headers` is enabled.

## Extended Definition

JWTs can include a `customattributes` claim and forward its value to the target in the `x-apigee-customattributes` header when `append_metadata_headers` is enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Create a global forwarding rule To create a global forwarding rule for the load balancer, use the following command: gcloud compute forwarding-rules create FORWARDING RULE NAME \ --load-balancing-scheme = EXTERNAL MANAGED \ --network-tier = PREMIUM \ --address = IP ADDRESS \ --target-https-proxy = TARGET PROXY NAME \ --ports = 443 \ --global Where: FORWARDING RULE NAME is the name of the forwarding rule you want to create.
- Note: Once the traffic extension is created, the name , lbForwardingRule , and network fields can't be changed.

### Step 5: Change the target endpoint \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

