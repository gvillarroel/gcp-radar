---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.833Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "SemanticCacheLookup policy"
feature_slug: "semanticcachelookup-policy"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "cache hit decision"
  - "semantic cache lookup"
  - "lookup semantic cache"
  - "vector cache key"
  - "LLM semantic retrieval"
  - "semantic cache"
  - "SCL policy"
  - "SemanticCacheLookup policy"
---

# SemanticCacheLookup policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

SemanticCacheLookup policy is generally available and enables semantic-caching lookups in Apigee API proxies.

## Extended Definition

In Apigee API proxies, the SemanticCacheLookup policy performs semantic-cache lookups by extracting the user prompt from a request and converting it into a numerical representation via a Text embeddings API call, which is then used for semantic retrieval matching. The tutorial also documents how to configure related Google Cloud resources (such as an AI Platform index endpoint/index and service-account permissions) needed to support semantic caching behavior.

## Evidence Summary

The provided Apigee tutorial page contributes practical configuration details for semantic caching and explicitly describes the SemanticCacheLookup policy’s request-to-embedding transformation as part of its lookup flow.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: The page provides practical details about semantic cache usage and policy configuration, but it is framed as a how-to tutorial rather than a definitive lifecycle/availability definition.

Evidence snippets:
- Deploy the index to the endpoint using the following command: INDEX ENDPOINT ID = $( gcloud ai index-endpoints list \ --project = $PROJECT ID \ --region = $REGION \ --format = "json" jq -c -r \ '.[] select(.displayName=="semantic-cache-index-endpoint") .name split("/") .[5]' \ ) && INDEX ID = $( gcloud ai indexes list \ --project = $PROJECT ID \ --region = $REGION \ --format = "json" jq -c -r \ '.[] select(.displayName=="semantic-cache-index") .name split("/") .[5]' \ ) && gcloud ai index-endpoints deploy-index \ $INDEX ENDPOINT ID \ --deployed-index-id = semantic cache \ --display-name = semantic-cache \ --index = $INDEX ID \ --region = $REGION \ --project = $PROJECT ID Note: The command to deploy the index to the endpoint requires jq .
- For example: gcloud iam service-accounts create ai-client \ --description = " semantic cache client " \ --display-name = " ai-client " Grant the service account the AI Platform User role using the following command: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/aiplatform.user" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.
- For this tutorial, set the Target (Existing API) to: REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /publishers/google/models/gemini-2.0-flash-001:generateContent Enter the following Semantic Cache URLs : Note: You can also add these URLs to the XML configuration in the Proxy editor on the Develop tab.
- When the proxy receives a request, the SemanticCacheLookup policy extracts the user prompt from the request and converts the prompt into a numerical representation using the Text embeddings API.

