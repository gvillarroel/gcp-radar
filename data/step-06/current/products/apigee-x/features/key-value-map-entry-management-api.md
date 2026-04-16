---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.189Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Key value map entry management API"
feature_slug: "key-value-map-entry-management-api"
latest_feature_date: "2022-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies"
keywords:
  - "value"
  - "entry"
  - "management"
  - "apis"
---

# Key value map entry management API

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee X APIs can manage key value entries in organization-, environment-, and API proxy-scoped key value maps.

## Extended Definition

Apigee X APIs can manage key value entries in organization-, environment-, and API proxy-scoped key value maps.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

### Manage deployments \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- REST To add a new deployment using the Create a deployment API: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "display name": " DISPLAY NAME ", "description": " DESCRIPTION ", "deployment type": { "enum values": { "values": [ { "id": " DEPLOYMENT TYPE " } ] } }, "resource uri": " RESOURCE URI ", "endpoints": [ " ENDPOINT " ] }' https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /deployments?deployment id= DEPLOYMENT ID Replace the following: DISPLAY NAME : (Required) The display name of the deployment.
- REST To edit a deployment, use the Patch deployment API: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "name": "projects/ HUB PROJECT /locations/ HUB LOCATION /deployments/ DEPLOYMENT ID ", "display name" : " DISPLAY NAME ", "description":" DESCRIPTION ", "endpoints": [" ENDPOINT "] } ' -X PATCH https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /deployments/ DEPLOYMENT ID ?update mask=display name,description,endpoints Replace the following: HUB PROJECT : The name of your API hub host project.
- REST To unlink a deployment from an API, use the Patch deployment API: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "deployments": [ " DEPLOYMENT NAME ", " DEPLOYMENT NAME " ] }' -X PATCH https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /apis/ API NAME /versions/ VERSION ID ?update mask=deployments Replace the following: HUB PROJECT : The name of your API hub host project.
- REST Example linking a deployment to a version: curl "https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /apis/ API NAME /versions/ VERSION ID " -H "Authorization: Bearer: $(gcloud auth print-access-token)" -X PATCH -H "Content-Type: application/json" \ '{ "deployments": " DEPLOYMENTS " }' Replace the following: HUB PROJECT : The name of your API hub host project.

### Understanding APIs and API proxies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)
- Source ID: `site-docs-reference-required-3`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By defining stable, simplified entry points to application logic and data, APIs enable developers to easily access and reuse application logic built by other developers.
- Apigee enables you to build APIs and if you have APIs already, expose them directly, while adding a management and visibility layer.
- Home Documentation Application development Apigee Guides Send feedback Understanding APIs and API proxies Stay organized with collections Save and categorize content based on your preferences.
- Apigee also enables you to build APIs by implementing applications hosted on the API Services platform—with no backend service involved.

