---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.769Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee X KVM management APIs"
feature_slug: "apigee-x-kvm-management-apis"
latest_feature_date: "2022-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
keywords:
  - "managing"
  - "management"
  - "value"
  - "apis"
  - "adds"
---

# Apigee X KVM management APIs

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee X adds APIs for managing key-value entries in key value maps at organization, environment, and API proxy scopes.

## Extended Definition

Apigee X adds APIs for managing key-value entries in key value maps at organization, environment, and API proxy scopes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows the API call update the API Visibility user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"name": "projects/test-15/locations/us-central1/attributes/API Visibility", display name" : "API Visibility Updated", "allowedValues": [ { "id": "internal", "displayName": "Internal", "description": "The API is visible internally in an organization" }, { "id": "external", "displayName": "External", "description": "The API is visible externally in an organization" }, { "id": "public", "displayName": "Public", "description": "The API is visible public in an organization" } ]}' \ -X PATCH https://autopush-apihub.sandbox.googleapis.com/v1/projects/common-dev-15/locations/us-central1/attributes/API Visibility?update mask=display name,allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to update the values of the Business unit attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"allowed values": [ { "id": "bu1", "display name": "Business unit 1", "description": "The API can be used by business unit 1" }, { "id": "bu2", "display name": "Business unit 2", "description": "The API can be used by business unit 2" }, { "id": "bu3", "display name": "Business unit 3", "description": "The API can be used by business unit 3" }]}' \ -X PATCH https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes/system-business-unit?update mask=allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- The following example shows the API call to filter resources based on a user defined attribute value of String data type. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/apis?filter=attributes.projects/test-project-1/locations/us-central1/attributes/cdcb1260-ed63-4e5b-935d-4394f178da4f.string values.values:helloworld Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Organizing client app ownership \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Managing AppGroups using the Apigee APIs Use these APIs to manage AppGroups in your orgs: Activities Link View and manage AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups View and manage the apps that belong to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps View and manage the app keys associated to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys View and manage AppGroup subscriptions to API products https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions See also AppGroup subscription management .
- Description Permissions Manage AppGroups and associated apps and keys. apigee.appgroups.list apigee.appgroups.get apigee.appgroups.create apigee.appgroups.update apigee.appgroups.delete Manage AppGroup apps. apigee.appgroupapps.list apigee.appgroupapps.get apigee.appgroupapps.create apigee.appgroupapps.manage apigee.appgroupapps.delete Manage app keys for AppGroups: apigee.appkeys.get apigee.appkeys.create apigee.appkeys.manage apigee.appkeys.delete Manage AppGroup subscriptions and monetization configurations. apigee.appgroupbalances.adjust apigee.appgroupbalances.get apigee.appgroupbalances.update apigee.appgroupmonetizationconfigs.get apigee.appgroupmonetizationconfigs.update apigee.appgroupsubscriptions.create apigee.appgroupsubscriptions.get apigee.appgroupsubscriptions.list apigee.appgroupsubscriptions.update Viewing and managing AppGroups This section shows how to view and manage AppGroups.
- View and manage AppGroup monetization configurations and balances (if enabled) https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.balance See also Use AppGroups to manage API product subscriptions and Manage prepaid balances .
- IAM roles and permissions To control permissions required for AppGroup management, you can view and grant permissions or roles using the permissions panel on the IAM & Admin > IAM page in your Google Cloud project.

