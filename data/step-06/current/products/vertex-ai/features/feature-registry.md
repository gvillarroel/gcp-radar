---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.102Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Feature Registry"
feature_slug: "feature-registry"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup"
keywords:
  - "feature"
  - "registry"
  - "enables"
  - "registration"
  - "sources"
  - "bigquery"
  - "creating"
  - "groups"
---

# Feature Registry

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Feature Registry enables registration of feature data sources in BigQuery by creating feature groups and features.

## Extended Definition

Feature Registry enables registration of feature data sources in BigQuery by creating feature groups and features.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup)

## Supporting Pages

### Create a feature view instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- Source ID: `site-docs-reference-3`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While creating a feature view, you can associate features with it in the following ways: Add feature groups and features from Feature Registry : Associate with existing feature groups and features from the Feature Registry.
- Note that you can configure vector retrieval and manage embeddings only if the feature view is created by specifying a BigQuery source URI and not from feature groups and features from Feature Registry.
- To associate multiple BigQuery data sources with the same feature view, you can specify multiple feature groups.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view from a BigQuery source If you want to serve features online without registering your BigQuery data source using feature groups and features, you can create a feature view by specifying the URI of the BigQuery data source.

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two types of Vertex AI Feature Store resources in the Feature Registry: Feature Registry resources for feature data Feature Registry resources for feature monitoring Feature Registry resources for feature data To register your feature data in the Feature Registry, you need to create the following Vertex AI Feature Store resources: Feature group ( FeatureGroup ): A FeatureGroup resource is associated with a specific BigQuery source table or view.
- Vertex AI Feature Store data model and resources This section explains the data models and resources associated with the following aspects of Vertex AI Feature Store: Data source preparation in BigQuery Feature Registry setup Online serving setup Online serving Data source preparation in BigQuery During online serving, Vertex AI Feature Store uses feature data from BigQuery data sources.
- An online store instance doesn't specify the source of the feature data, but contains FeatureView resources that specify the feature data sources in either BigQuery or the Feature Registry.
- Feature Registry setup After you've prepared your data sources in BigQuery, you can register those data sources, including specific feature columns, in the Feature Registry.

### Create a feature group \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup)
- Source ID: `site-docs-reference-3`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Aggregate features from multiple sources : Use feature groups to aggregate specific columns from multiple BigQuery data sources when you create a feature view instance .
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureGroups?feature group id= FEATUREGROUP NAME Request JSON body: { "service agent type": " SERVICE AGENT TYPE ", "big query": { "entity id columns": " ENTITY ID COLUMNS ", "big query source": { "input uri": " BIGQUERY SOURCE URI ", } "time series": { "timestamp column": "" TIMESTAMP COLUMN "", }, "static data source": STATIC DATA SOURCE , "dense": DENSE } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- However, you must register your feature data by creating feature groups and features in the following scenarios: Use historical data in time series format to train a model : If the feature data source contains latest as well as historical feature data with multiple feature records for the same entity ID, then format this data as a time series by adding the feature timestamp column.
- Serve null feature values : During online serving, if you want to serve only the latest feature values, including null values, then register your featured data source by creating feature groups with the dense parameter set to true .

