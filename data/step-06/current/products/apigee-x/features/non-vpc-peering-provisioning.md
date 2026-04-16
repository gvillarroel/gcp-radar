---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.157Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Non-VPC peering provisioning"
feature_slug: "non-vpc-peering-provisioning"
latest_feature_date: "2024-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/deprovision"
keywords:
  - "provisioned"
  - "peering"
  - "provisioning"
  - "organizations"
  - "lets"
---

# Non-VPC peering provisioning

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Non-VPC peering provisioning lets Apigee organizations be provisioned without supplying networks and IP ranges by using Private Service Connect for traffic routing; Apigee can be provisioned without VPC peering by using Private Service Connect for northbound and southbound routing.

## Extended Definition

Non-VPC peering provisioning lets Apigee organizations be provisioned without supplying networks and IP ranges by using Private Service Connect for traffic routing; Apigee can be provisioned without VPC peering by using Private Service Connect for northbound and southbound routing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)

## Supporting Pages

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- If you have a Google Cloud organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ), the constraint will apply to the following Apigee resources that are created when Apigee is provisioned: Control plane Consumer data Runtime Endpoints attachment Analytics If you are provisioning a new Apigee organization within a Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is compatible with the control plane location specified for your Apigee organization: If you provision an Apigee organization without data residency, the resource location constraint in your Google Cloud organization policy must be set to global .
- How to view the region If you have already provisioned your org ( PROJECT ID ) for use with data residency, you can use the getProjectMapping API to display the regions associated with a project: Authorize gcloud to access the Cloud Platform with your Google user credentials: gcloud auth login Call the API: curl -X GET https://apigee.googleapis.com/v1/organizations/ PROJECT ID :getProjectMapping \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Where PROJECT ID is your Apigee organization name or Google Cloud project ID.
- If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization, the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO): The regionalized Apigee organization's control plane, runtime plane, and analytics .
- The following Apigee offerings are not in scope under Apigee's FedRAMP ATO: API analytics Advanced API Security Integrated portals Apigee evaluation organizations Apigee data collectors For more information about the significance of a FedRAMP ATO, see FedRAMP Compliance .

### Deprovision Apigee API hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deprovisioning an API hub instance removes all associated resources, including APIs, versions, deployments, and any Apigee organizations (with no Apigee instances ) from your project.
- REST API Look up the project ID of the project where the API hub instance is located: curl --location 'https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /apiHubInstances:lookup' \ --header 'Authorization: Bearer $(gcloud auth print-access-token)' Replace the following: PROJECT ID : the project ID of the Google Cloudproject where the API hub instance is provisioned.
- To check the status of the deletion, run the following command: curl --location 'https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ' \ --header 'Authorization: Bearer $(gcloud auth print-access-token)' Replace the following: PROJECT ID : the project ID of the Google Cloud project where the API hub instance is provisioned.
- Delete the API hub instance: curl --location --request DELETE 'https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /apiHubInstances/ INSTANCE ID ' \ --header 'Authorization: Bearer $(gcloud auth print-access-token)' Replace the following: PROJECT ID : the project ID of the Google Cloud project where the API hub instance is provisioned.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

