---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.536Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Vertex AI Extensions support in Apigee API hub"
feature_slug: "vertex-ai-extensions-support-in-apigee-api-hub"
latest_feature_date: "2025-09-08"
deprecation_date: "2025-09-08"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform"
keywords:
  - "capability"
  - "extensions"
  - "deprecates"
  - "deprecated"
  - "vertex"
---

# Vertex AI Extensions support in Apigee API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Deprecates the Vertex AI Extensions capability in API hub; deprecated on 2025-09-08.

## Extended Definition

Deprecates the Vertex AI Extensions capability in API hub; deprecated on 2025-09-08.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-required-3`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

### Provision API hub in the Cloud console \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- Source ID: `site-docs-root-required-3`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- If the Enable Vertex search capability option is enabled (the default), you must select the multi-region location in which to store your Vertex AI-based search data, the data associated with the Semantic Search feature of API hub.
- If you deselect the Enable Vertex search capability option, Semantic Search is disabled, and the multi-region selector is hidden.
- Step 2: Location You need to select two locations: First, the physical location (region) where you'd like to host your Apigee API hub instance, and second, the multi-region in which your Vertex AI search data will be stored: From the drop-down list, select the region in which you want your API hub instance to be hosted.
- Note: When selected, the Vertex search option automatically provisions Vertex AI in a Google Cloud region that exists within the same multi-region as the region in which API hub is hosted.

### Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- Source ID: `site-iam-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Using CMEK resource "google apihub api hub instance" "apihub-instance-search"{ project = " PROJECT ID " api hub instance id = " API HUB INSTANCE ID " description = " DESCRIPTION " location = " LOCATION " config { encryption type = "CMEK" cmek key name = "projects/ PROJECT ID /locations/ HUB LOCATION /keyRings/ KEY RING ID /cryptoKeys/ KEY ID " disable search = SEMANTIC SEARCH BOOLEAN vertex location = " VERTEX AI LOCATION " } } Replace the following: PROJECT ID : the ID of the Google Cloud project.
- VERTEX AI LOCATION : the location of the Vertex AI instance where the data is stored.
- See Vertex AI Locations for a list of supported locations.

