---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.154Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee connected Cloud project limit increase"
feature_slug: "apigee-connected-cloud-project-limit-increase"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits"
keywords:
  - "connected"
  - "project"
  - "longer"
  - "increase"
  - "limits"
  - "limit"
---

# Apigee connected Cloud project limit increase

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee no longer limits an instance to 50 connected Cloud projects and now allows up to 100 Private Service Connect network endpoint groups per project.

## Extended Definition

Apigee no longer limits an instance to 50 connected Cloud projects and now allows up to 100 Private Service Connect network endpoint groups per project.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Increase quotas for dependent services If you experience performance bottlenecks resulting from higher queries per second (QPS), you may need to increase the following quotas for dependent services in your Google Cloud project: Online prediction requests per minute per region (select by region) Regional online prediction requests per base model per minute per region (select by region and the textembedding-gecko model) Matching Engine stream update requests per minute per region (select by region) To increase a quota for one of these services: Go to the Quota & System Limits page: Go to Quota & System Limits In the filter bar, enter name of the specific quota you want to increase, along with the region and model , name if relevant.
- You can monitor the status on the Quotas & System Limits page using the Increase requests tab.
- For more information, see the Cache value size on the Apigee Limits page.
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.

### "Enforce monetization limits in API proxies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)
- Source ID: `site-docs-reference-required-3`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See also: Attaching a policy to a flow Verifying access tokens Monitoring and debugging the authentication policy using Debug Enforce subscriptions on API products Attach the MonetizationLimitsCheck policy to API proxies to enforce subscriptions on the API product by developer or AppGroup: If no active rate plan exists for the API product fetched during the proxy call execution, the product is deemed non-monetized, the MonetizationLimitsCheck policy does not fetch any further data, and the policy has no effect.
- For more information, see: Creating an API proxy Editing an API proxy Attaching a policy to a flow Debugging the MonetizationLimitsCheck policy using Debug MonetizationLimitsCheck policy Enforce monetization quotas in API proxies Note: If you add a quota after the API product has been in use, the quota calculation starts from the next monetized transaction.
- When you attach the MonetizationLimitsCheck policy to an API proxy, Apigee populates the mint.limitscheck. and mint.subscription flow variables, as described in Debugging the MonetizationLimitsCheck policy and the mint flow variable reference.
- Home Documentation Application development Apigee Guides Send feedback Enforce monetization limits in API proxies Stay organized with collections Save and categorize content based on your preferences.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- If you experience performance bottlenecks resulting from higher queries per second (QPS), you may need to increase the following quotas for dependent services in your Google Cloud project: Online prediction requests per minute per region Regional online prediction requests per base model per minute per region Matching Engine stream update requests per minute per region To increase a quota for one of these services, reach out to Google Cloud support.
- The accuracy of Model Armor may be reduced by limits on the maximum number of tokens processed by Model Armor in each prompt and response.
- For more information, including the token limits for each filter, see Tokens .
- Model Armor token limits vary depending upon the filters used.

