---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.193Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Service networking and instance creation UI updates"
feature_slug: "service-networking-and-instance-creation-ui-updates"
latest_feature_date: "2022-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "networking"
  - "revised"
  - "creation"
  - "includes"
  - "updates"
  - "instance"
---

# Service networking and instance creation UI updates

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Apigee UI includes updates for service networking and instance creation to support revised network IP CIDR requirements.

## Extended Definition

The Apigee UI includes updates for service networking and instance creation to support revised network IP CIDR requirements.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $ORG NAME $REGION $INSTANCE $VPC NETWORK NAME $SUBNET Configure an authentication token To configure an authentication token, run the following command: export TOKEN = $( gcloud auth print-access-token ) echo $TOKEN Configure a load balancer for a backend service The following sections describe the steps to set up a global external Application Load Balancer for a backend service, using httpbin.org as an example: Create a global external Application Load Balancer .
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export ORG NAME = $PROJECT ID export REGION = REGION export INSTANCE = INSTANCE export VPC NETWORK NAME = VPC NETWORK NAME export SUBNET = SUBNET Where: PROJECT ID is the ID of the project with your Apigee instance.
- Attach the newly created environment to your Apigee instance: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /instances/ $INSTANCE /attachments" -H "Content-Type:application/json" -d \ '{ "environment": " ENV NAME " }' Where ENV NAME is the name of the environment you created in the previous step.

### ExtractVariables policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- This includes: PreFlow: ProxyEndpoint and TargetEndpoint (Request and Response) PostFlow: ProxyEndpoint and TargetEndpoint (Request and Response) PostClientFlow: ProxyEndpoint (Response only, using the MessageLogging policy >) Error Flows Tip: If you do not see the newly extracted variable show up in the Debug tool , try removing the <VariablePrefix> element if you added it.
- The following request contains two query parameters named "w": http://myCo.com/basepath/v1/a/b/c/d?w=1&w=2 To reference these query parameters in the ExtractVariables policy, you use indexes, where the first instance of the query parameter has no index, the second is at index 2, the third at index 3, etc.
- To reference query parameters with the same name in the policy, use indexes where the first instance of the query parameter has no index, the second is at index 2, the third at index 3, and so on.
- If multiple query parameters have the same name, use indexed referencing, where the first instance of the query parameter has no index, the second is at index 2, the third at index 3, etc.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export REGION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.
- To obtain these values, use the following commands: echo $PUBLIC DOMAIN NAME echo $INDEX ENDPOINT ID Upsert index URL : This Vertex AI service updates the index with new or modified entries.
- Time-sensitive responses : Configure a short TTL (for example, five minutes) for responses that require real-time or frequent updates.

