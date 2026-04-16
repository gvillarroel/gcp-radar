---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.768Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Pay-as-you-go gateway node limit"
feature_slug: "apigee-pay-as-you-go-gateway-node-limit"
latest_feature_date: "2022-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "gateway"
  - "limit"
  - "node"
  - "pricing"
---

# Apigee Pay-as-you-go gateway node limit

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Pay-as-you-go pricing model now enforces a maximum of 1,000 Apigee gateway nodes per region across all environments.

## Extended Definition

The Pay-as-you-go pricing model now enforces a maximum of 1,000 Apigee gateway nodes per region across all environments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
- Home Documentation Application development Apigee Guides Send feedback Advanced API Security for multiple Apigee organizations and gateways Stay organized with collections Save and categorize content based on your preferences.
- Apigee Advanced API Security is available as an additional add-on for your API hub instance to help you manage and govern the security posture of your APIs across multiple Apigee organizations, environments, and gateways.
- Enable Advanced API Security for your API hub instance To enable and configure Advanced API Security for your API hub instance, see Configure Advanced API Security for multiple Apigee organizations and gateways .

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference-2`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Go to Apigee Entitlements and billing Whether the paid organization uses a Subscription or Pay-as-you-go pricing model, the items that are metered for billing purposes are: environments, API calls, and proxy deployments.
- One commonly-used type of metadata can define a service plan, which can specify access limits on API calls, stipulate security requirements, allow monitoring and analytics, and provide additional features.
- Just as there is no charge to create a Google Cloud project, under the Pay-as-you-go pricing model, there is no charge to create an Apigee organization.
- Sometimes referred to as eval orgs , these organizations are time-limited and lack the scalability and flexibility of production organizations.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.
- Increase quotas for dependent services If you experience performance bottlenecks resulting from higher queries per second (QPS), you may need to increase the following quotas for dependent services in your Google Cloud project: Online prediction requests per minute per region (select by region) Regional online prediction requests per base model per minute per region (select by region and the textembedding-gecko model) Matching Engine stream update requests per minute per region (select by region) To increase a quota for one of these services: Go to the Quota & System Limits page: Go to Quota & System Limits In the filter bar, enter name of the specific quota you want to increase, along with the region and model , name if relevant.
- In Apigee hybrid installations, support for the semantic caching policies is limited to installations on Google Cloud Platform.
- Limitations The following limitations apply to the semantic caching policies: The maximum cacheable text size is 256 KB.

