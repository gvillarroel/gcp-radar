---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.751Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Pay-as-you-go environment type management APIs"
feature_slug: "pay-as-you-go-environment-type-management-apis"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "management"
  - "environment"
  - "type"
  - "apis"
---

# Pay-as-you-go environment type management APIs

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee added API operations to upgrade or downgrade existing Pay-as-you-go environments to add or remove feature capabilities and manage billing/resource usage.

## Extended Definition

Apigee added API operations to upgrade or downgrade existing Pay-as-you-go environments to add or remove feature capabilities and manage billing/resource usage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.
- Attach the new environment to the new environment group: curl -H "Authorization: Bearer $TOKEN " -X POST \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /envgroups/ ENV GROUP NAME /attachments" -H "content-type:application/json" -d \ '{ "name": " ENV GROUP NAME ", "environment": " ENV NAME " }' Where: ENV GROUP NAME is the name of the environment group you are creating.
- Attach the newly created environment to your Apigee instance: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /instances/ $INSTANCE /attachments" -H "Content-Type:application/json" -d \ '{ "environment": " ENV NAME " }' Where ENV NAME is the name of the environment you created in the previous step.
- Create the Apigee environment group: curl -H "Authorization: Bearer $TOKEN " -X POST \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /envgroups" -H "Content-Type:application/json" -d \ '{ "name": " ENV GROUP NAME ", "hostnames": [" ENV GROUP HOSTNAME "] }' Where: ENV GROUP NAME is the name of the environment group you are creating.

### Manage deployments \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST To add a new deployment using the Create a deployment API: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "display name": " DISPLAY NAME ", "description": " DESCRIPTION ", "deployment type": { "enum values": { "values": [ { "id": " DEPLOYMENT TYPE " } ] } }, "resource uri": " RESOURCE URI ", "endpoints": [ " ENDPOINT " ] }' https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /deployments?deployment id= DEPLOYMENT ID Replace the following: DISPLAY NAME : (Required) The display name of the deployment.
- REST To edit a deployment, use the Patch deployment API: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "name": "projects/ HUB PROJECT /locations/ HUB LOCATION /deployments/ DEPLOYMENT ID ", "display name" : " DISPLAY NAME ", "description":" DESCRIPTION ", "endpoints": [" ENDPOINT "] } ' -X PATCH https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /deployments/ DEPLOYMENT ID ?update mask=display name,description,endpoints Replace the following: HUB PROJECT : The name of your API hub host project.
- REST To unlink a deployment from an API, use the Patch deployment API: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -d '{ "deployments": [ " DEPLOYMENT NAME ", " DEPLOYMENT NAME " ] }' -X PATCH https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /apis/ API NAME /versions/ VERSION ID ?update mask=deployments Replace the following: HUB PROJECT : The name of your API hub host project.
- REST Example linking a deployment to a version: curl "https://apihub.googleapis.com/v1/projects/ HUB PROJECT /locations/ HUB LOCATION /apis/ API NAME /versions/ VERSION ID " -H "Authorization: Bearer: $(gcloud auth print-access-token)" -X PATCH -H "Content-Type: application/json" \ '{ "deployments": " DEPLOYMENTS " }' Replace the following: HUB PROJECT : The name of your API hub host project.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.
- When this operation completes, you should see a response similar to the following: { "name" : "projects/976063410430/locations/us-west1/indexes/5695338290484346880/operations/9084564741162008576" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.aiplatform.v1.CreateIndexOperationMetadata" , "genericMetadata" : { "createTime" : "2025-04-25T18:45:27.996136Z" , "updateTime" : "2025-04-25T18:45:27.996136Z" } } } For more information on creating Vector Search indexes, see Create an index .
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- Test the semantic caching policies To test the semantic caching policies: Send a request to the proxy using the following command: curl https:// $RUNTIME HOSTNAME / PROXY NAME -H 'Content-Type: application/json' --data '{ "contents": [ { "role": "user", "parts": [ { "text": "Why is the sky blue?" } ] } ] }' Replace PROXY NAME with the basepath of the API proxy you deployed in the previous step.

