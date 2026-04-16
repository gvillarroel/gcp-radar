---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.736Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee API hub enablement for existing organizations"
feature_slug: "apigee-api-hub-enablement-for-existing-organizations"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
keywords:
  - "enablement"
  - "organizations"
  - "enabled"
  - "existing"
  - "regions"
---

# Apigee API hub enablement for existing organizations

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Existing Apigee organizations in supported regions can be enabled for Apigee API hub, including hybrid organizations in API hub-supported regions.

## Extended Definition

Existing Apigee organizations in supported regions can be enabled for Apigee API hub, including hybrid organizations in API hub-supported regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)

## Supporting Pages

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Enable, disable, and delete observation jobs To change whether an existing observation job is enabled (active), select either Enable or Disable from the Actions menu in the row for that job in the Observation jobs page.
- The following regions are currently supported for API observation and Shadow APIs: australia-southeast1 europe-west2 europe-west9 us-central1 us-east1 us-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View API Observations To view API Observations for enabled observation jobs, choose the API Observations tab and then select the Observation job from the list.
- See Manage Advanced API Security for Subscription organizations Pay-as-you-go customers must enable the add-on for at least one environment.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Here are some examples: Update networkConfigs (Global LB) To update the networkConfigs attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = networkConfigs \ -H "Content-Type:application/json" -d \ '{ "networkConfigs": [ { "region": " REGION ", "subnet": "projects/$PROJECT/regions/ REGION /subnetworks/ SUBNET " } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following curl request returns a list of all API proxies in an organization using the organizations API : curl https://apigee.googleapis.com/v1/organizations/ ORG ID /apis While you may have created only one organization, you can be authorized in other organizations as a user or administrator with specific permissions.
- For example, your company might define multiple organizations on Apigee to support different developer communities, even though internally, the same people build all of the API proxies and API products and are therefore members of all of your organizations.
- While the rest of this topic goes into more depth about organizations, here are a few practical points: An Apigee organization is distinct from and subsidiary to a Google Cloud organization.
- Home Documentation Application development Apigee Guides Send feedback Understanding organizations Stay organized with collections Save and categorize content based on your preferences.

