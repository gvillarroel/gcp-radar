---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:52.534Z"
product_name: "Recommender"
product_slug: "recommender"
feature_name: "Recommendation dismissal via Recommender API"
feature_slug: "recommendation-dismissal-via-recommender-api"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recommender/docs/reference/rest/v1/organizations.locations.recommenders.recommendations/get"
  - "https://docs.cloud.google.com/recommender/docs/reference/rest/v1/projects.locations.recommenders.recommendations/list"
  - "https://googleapis.dev/python/recommender/latest/_modules/google/cloud/recommender_v1beta1/types/recommendation.html"
keywords:
  - "recommendation"
  - "dismissal"
  - "via"
  - "recommender"
  - "api"
  - "allows"
  - "recommendations"
  - "to"
---

# Recommendation dismissal via Recommender API

Product: Recommender
Coverage: MEDIUM

## Step 02 Summary

Allows recommendations to be dismissed through the Recommender API.

## Extended Definition

Allows recommendations to be dismissed through the Recommender API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recommender/docs/reference/rest/v1/organizations.locations.recommenders.recommendations/get](https://docs.cloud.google.com/recommender/docs/reference/rest/v1/organizations.locations.recommenders.recommendations/get)
- [https://docs.cloud.google.com/recommender/docs/reference/rest/v1/projects.locations.recommenders.recommendations/list](https://docs.cloud.google.com/recommender/docs/reference/rest/v1/projects.locations.recommenders.recommendations/list)
- [https://googleapis.dev/python/recommender/latest/_modules/google/cloud/recommender_v1beta1/types/recommendation.html](https://googleapis.dev/python/recommender/latest/_modules/google/cloud/recommender_v1beta1/types/recommendation.html)

## Supporting Pages

### Method: organizations.locations.recommenders.recommendations.get | Recommender | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/reference/rest/v1/organizations.locations.recommenders.recommendations/get](https://docs.cloud.google.com/recommender/docs/reference/rest/v1/organizations.locations.recommenders.recommendations/get)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: organizations.locations.recommenders.recommendations.get Recommender Google Cloud Documentation Source URL: https://docs.cloud.google.com/recommender/docs/reference/rest/v1/organizations.locations.recommenders.recommendations/get GET https://recommender.googleapis.com/v1/{name=organizations/ /locations/ /recommenders/ /recommendations/ }

### Method: projects.locations.recommenders.recommendations.list | Recommender | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/reference/rest/v1/projects.locations.recommenders.recommendations/list](https://docs.cloud.google.com/recommender/docs/reference/rest/v1/projects.locations.recommenders.recommendations/list)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.recommenders.recommendations.list Recommender Google Cloud Documentation Source URL: https://docs.cloud.google.com/recommender/docs/reference/rest/v1/projects.locations.recommenders.recommendations/list Lists recommendations for the specified Cloud Resource.

### google.cloud.recommender_v1beta1.types.recommendation — google-cloud-recommender documentation

- URL: [https://googleapis.dev/python/recommender/latest/_modules/google/cloud/recommender_v1beta1/types/recommendation.html](https://googleapis.dev/python/recommender/latest/_modules/google/cloud/recommender_v1beta1/types/recommendation.html)
- Source ID: `site-python-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- google.cloud.recommender v1beta1.types.recommendation — google-cloud-recommender documentation Source URL: https://googleapis.dev/python/recommender/latest/ modules/google/cloud/recommender v1beta1/types/recommendation.html [docs]class Recommendation(proto.Message): r&quot;&quot;&quot;A recommendation along with a suggested action.
- E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc Attributes: name (str): Name of recommendation. description (str): Free-form human readable summary in English.

