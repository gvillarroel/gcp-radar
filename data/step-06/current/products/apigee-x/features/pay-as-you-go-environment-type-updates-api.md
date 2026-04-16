---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.174Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Pay-as-you-go environment type updates API"
feature_slug: "pay-as-you-go-environment-type-updates-api"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies"
keywords:
  - "type"
  - "updates"
  - "environment"
  - "apis"
---

# Pay-as-you-go environment type updates API

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee APIs can upgrade or downgrade the type of an existing Pay-as-you-go environment.

## Extended Definition

Apigee APIs can upgrade or downgrade the type of an existing Pay-as-you-go environment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.
- When this operation completes, you should see a response similar to the following: { "name" : "projects/976063410430/locations/us-west1/indexes/5695338290484346880/operations/9084564741162008576" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.aiplatform.v1.CreateIndexOperationMetadata" , "genericMetadata" : { "createTime" : "2025-04-25T18:45:27.996136Z" , "updateTime" : "2025-04-25T18:45:27.996136Z" } } } For more information on creating Vector Search indexes, see Create an index .
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- Test the semantic caching policies To test the semantic caching policies: Send a request to the proxy using the following command: curl https:// $RUNTIME HOSTNAME / PROXY NAME -H 'Content-Type: application/json' --data '{ "contents": [ { "role": "user", "parts": [ { "text": "Why is the sky blue?" } ] } ] }' Replace PROXY NAME with the basepath of the API proxy you deployed in the previous step.

### Understanding APIs and API proxies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)
- Source ID: `site-docs-reference-required-3`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In an API proxy configuration, there are two types of endpoints: ProxyEndpoint: Defines the way client apps consume your APIs.
- Home Documentation Application development Apigee Guides Send feedback Understanding APIs and API proxies Stay organized with collections Save and categorize content based on your preferences.
- By defining stable, simplified entry points to application logic and data, APIs enable developers to easily access and reuse application logic built by other developers.
- You can visualize API proxies as shown by the graphic below: API proxy types Apigee supports two proxy types: Standard proxies include only standard policies .

### "Auto-register APIs from Google Cloud projects \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page applies to Apigee and Apigee hybrid . orgs path.developers.apps.keys.create API % endsetvar % --> orgs path.environments.analytics.reports.dailysupp API % endsetvar % --> orgs path.environments analytics reports dailysummary d1 results API % endsetvar % --> This page describes how to automatically register APIs from Google Cloud projects to API hub.
- Additional attributes representing the Apigee instance type ( Apigee X and Hybrid Environment and Apigee X and Hybrid Organization ) are automatically created and added to any proxy API deployments that are imported.
- This auto-registration process enables API hub to register API resources from multiple Google Cloud services, ensuring that all your APIs are captured in the central repository and that your API data remains synchronized with your API deployments.
- Home Documentation Application development Apigee Guides Send feedback Auto-register APIs from Google Cloud projects Stay organized with collections Save and categorize content based on your preferences.

