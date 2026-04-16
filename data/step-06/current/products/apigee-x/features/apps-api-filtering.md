---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.181Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apps API filtering"
feature_slug: "apps-api-filtering"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps"
keywords:
  - "filtering"
  - "developer"
  - "appgroup"
  - "other"
  - "apps"
  - "organizations"
  - "supports"
---

# Apps API filtering

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The organizations.apps API supports filtering apps by developer, AppGroup, and other app attributes, with pagination support.

## Extended Definition

The organizations.apps API supports filtering apps by developer, AppGroup, and other app attributes, with pagination support.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list](https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps](https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps)

## Supporting Pages

### Method: organizations.apps.list \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list](https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list)
- Source ID: `site-api-reference`
- Final score: 265
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Reference Send feedback Method: organizations.apps.list Stay organized with collections Save and categorize content based on your preferences.
- The filter expression to be used to get the list of apps, where filtering can be done on developerEmail, apiProduct, consumerKey, status, appId, appName, appType and appGroup.
- Resource path of the parent in the following format: organizations/{org} Authorization requires the following IAM permission on the specified resource parent : apigee.apps.list Query parameters Parameters status string Optional.
- Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).

### REST Resource: organizations.apps \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps](https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps)
- Source ID: `site-api-reference-required-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Reference Send feedback REST Resource: organizations.apps Stay organized with collections Save and categorize content based on your preferences.
- Resource: App JSON representation Methods Resource: App JSON representation { "appId" : string , "attributes" : [ { object ( Attribute ) } ] , "callbackUrl" : string , "createdAt" : string , "credentials" : [ { object ( Credential ) } ] , "companyName" : string , "developerId" : string , "lastModifiedAt" : string , "name" : string , "scopes" : [ string ] , "status" : string , "apiProducts" : [ { object ( ApiProductRef ) } ] , "keyExpiresIn" : string , "developerEmail" : string , "appGroup" : string } Fields appId string ID of the app. attributes[] object ( Attribute ) List of attributes. callbackUrl string Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps. createdAt string ( int64 format) Output only.
- Once set, the expiration can't be updated. json key: keyExpiresIn developerEmail string Email of the developer. appGroup string Name of the AppGroup Methods get Gets the app profile for the specified app ID. list Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- For example, ext-proc-app Developer : Select the developer you created in the previous step, or another developer from the list.
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.

