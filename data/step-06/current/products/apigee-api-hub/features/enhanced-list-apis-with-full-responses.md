---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.546Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Enhanced list APIs with full responses"
feature_slug: "enhanced-list-apis-with-full-responses"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "responses"
  - "list"
  - "full"
  - "dependencies"
  - "enhanced"
  - "external"
  - "specifications"
  - "apis"
---

# Enhanced list APIs with full responses

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

The List APIs for specifications, dependencies, and external APIs now return complete responses including user-defined attributes.

## Extended Definition

The List APIs for specifications, dependencies, and external APIs now return complete responses including user-defined attributes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Find the - apiGroups: apiregistration.k8s.io block, and add the apiservices/finalizers resource to the list of resources: - apiGroups: - apiregistration.k8s.io resources: - apiservices - apiservices/finalizers verbs: - create - delete - get - patch - update Find the - apiGroups: authorization.k8s.io block, and add the - apiGroups: apigee.cloud.google.com block after the end of the block with the following text: - apiGroups: - apigee.cloud.google.com resources: - apigeetelemetries/finalizers verbs: - get - patch - update For example: - apiGroups: - authorization.k8s.io resources: - subjectaccessreviews verbs: - create - get - list - apiGroups: - apigee.cloud.google.com resources: - apigeetelemetries/finalizers verbs: - get - patch - update Apply the changes to the apigee-operator chart: Dry run: helm upgrade operator apigee-operator/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f OVERRIDES FILE \ --dry-run=server upgrade the chart: helm upgrade operator apigee-operator/ \ --install \ --namespace APIGEE NAMESPACE \ --atomic \ -f OVERRIDES FILE \ 402739748 Apigee OPEN APIproducts are limited to 50 paths.
- Metric Description apigee.googleapis.com/proxy/request count Number of requests to the Apigee proxy since the last sample was recorded. apigee.googleapis.com/proxy/response count Number of responses sent by the Apigee API proxy. apigee.googleapis.com/proxy/latencies Distribution of latencies, which are calculated from the time the request was received by the Apigee proxy to the time the response was sent from the Apigee proxy to the client. apigee.googleapis.com/target/request count Number of requests sent to the Apigee target since the last sample was recorded. apigee.googleapis.com/target/response count Number of responses received from the Apigee target since the last sample was recorded. apigee.googleapis.com/target/latencies Distribution of latencies, which are calculated from the time the request was sent to the Apigee target to the time the response was received by the Apigee proxy.
- N/A Apigee hybrid OPEN Configuring non-API proxy forwarding using httpProxy without also setting envs.httpProxy will not apply the proxy configuration to Apigee Runtime's external calls to services like Pub/Sub or other Google Cloud APIs.
- If you only specify httpProxy , you must also ensure that .googleapis.com is allowlisted for your Apigee Runtime pods to enable connectivity to these services.

### API supply chain \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: API hub supports dependencies based on either API operations (APIs stored within API hub) or external APIs (APIs that are not stored in API hub).
- API supply chain views API hub offers two ways to visualize your API supply chain: a graph view for a visual representation of dependencies and a list view for a tabular display of dependencies.
- API hub models a dependency as a directional relationship between API resources or external APIs, where one entity is the supplier and the other is the consumer .
- API supply chain enables you to visualize and manage the relationships or dependencies between your APIs, API versions, and API operations in API hub.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-required-3`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Get traffic extension details To verify that the traffic service extension was created successfully, use the following command: curl -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME " Replace TRAFFIC EXT NAME with the name of the traffic extension you just created.
- Confirm that the environment is created: curl -i -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" The list of environments should include the environment you just created.
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.

