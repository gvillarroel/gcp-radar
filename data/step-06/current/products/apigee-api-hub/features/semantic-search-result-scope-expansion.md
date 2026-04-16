---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.547Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Semantic Search result scope expansion"
feature_slug: "semantic-search-result-scope-expansion"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
keywords:
  - "displays"
  - "results"
  - "result"
  - "scope"
  - "expansion"
  - "semantic"
  - "search"
---

# Semantic Search result scope expansion

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Semantic Search now displays results across multiple API hub entities, including APIs, deployments, specifications, and versions.

## Extended Definition

Semantic Search now displays results across multiple API hub entities, including APIs, deployments, specifications, and versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-required-3`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.
- The following sections describe the steps to create and configure the semantic caching policies: Configure a service account for the Vector Search index.
- The semantic caching policies use LLM APIs, which can result in higher latencies in the 100s of milliseconds.
- A semantic similarity search performs using Vector Search to find similar prompts.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Edit apigee-operator/templates/ helpers.tpl and remove the following bold lines: {{- define "metricsSA" -}} {{- $metricsName := "apigee-metrics" }} {{- $telemetryName := "apigee-telemetry" -}} {{- $generatedName := include "orgScopeEncodedName" (dict "name" .Values.org) -}} {{- if .Values.gcp.workloadIdentity.enabled -}} {{- printf "%s-sa" $metricsName -}} {{- else if .Values.serviceAccountSecretProviderClass -}} {{- else if .Values.multiOrgCluster -}} {{- printf "%s-%s" $metricsName $generatedName -}} {{- else -}} {{- printf "%s-%s" $metricsName $telemetryName -}} {{- end -}} {{- end -}} The resulting section should look like the following: {{- define "metricsSA" -}} {{- $metricsName := "apigee-metrics" }} {{- $telemetryName := "apigee-telemetry" -}} {{- $generatedName := include "orgScopeEncodedName" (dict "name" .Values.org) -}} {{- if .Values.gcp.workloadIdentity.enabled -}} {{- printf "%s-sa" $metricsName -}} {{- else if .Values.multiOrgCluster -}} {{- printf "%s-%s" $metricsName $generatedName -}} {{- else -}} {{- printf "%s-%s" $metricsName $telemetryName -}} {{- end -}} {{- end -}} Reapply the apigee-operator chart. helm upgrade operator apigee-operator/ \ --namespace APIGEE NAMESPACE \ --atomic \ -f overrides .yaml 419856132 hybrid 1.14.2 and newer FIXED in hybrid 1.14.3 and hybrid 1.15.0 If gateway.networking.k8s.io/v1 is installed in your cluster, apigee-ingressgateway-manager may fail to upgrade.
- This results in the Message Processor returning a 500 error with a "Duplicate Header "authorization"" message.
- This happens where there is a reduction in API traffic (which results in a scale down of API gateways).
- Note that in some cases this issue results in excessive log volume.

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference-required-4`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Attributes are useful to you in the following ways: You can filter your resource search results based on attributes.
- Therefore, having more attributes will make it easy for you to narrow down your search results.
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- Supported system attributes Apigee API hub supports the following system attributes: Attribute Description Scope Mandatory Accreditation Indicates the accreditation status of the API version.

