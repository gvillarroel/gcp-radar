---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:12.260Z"
product_name: "Recommender"
product_slug: "recommender"
feature_name: "Recommender API"
feature_slug: "recommender-api"
latest_feature_date: "2020-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recommender/docs/using-api"
  - "https://docs.cloud.google.com/recommender/docs/change-risk-recommendations"
  - "https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender"
  - "https://docs.cloud.google.com/recommender/docs/unattended-project-recommender"
keywords:
  - "recommender"
  - "api"
  - "the"
  - "provides"
  - "programmatic"
  - "access"
  - "to"
  - "recommendations"
---

# Recommender API

Product: Recommender
Coverage: MEDIUM

## Step 02 Summary

The Recommender API provides programmatic access to recommendations; The Recommender API provides programmatic access to recommendations.

## Extended Definition

The Recommender API provides programmatic access to recommendations; The Recommender API provides programmatic access to recommendations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recommender/docs/using-api](https://docs.cloud.google.com/recommender/docs/using-api)
- [https://docs.cloud.google.com/recommender/docs/change-risk-recommendations](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)
- [https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender](https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender)
- [https://docs.cloud.google.com/recommender/docs/unattended-project-recommender](https://docs.cloud.google.com/recommender/docs/unattended-project-recommender)

## Supporting Pages

### Use the API - Recommendations \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/using-api](https://docs.cloud.google.com/recommender/docs/using-api)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: gcloud recommender recommendations list \ --project=example-project \ --location=us-central1-a \ --recommender=google.compute.instance.MachineTypeRecommender \ --format=json REST Enter the following: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: ${PROJECT}" \ "https://recommender.googleapis.com/v1/projects/${PROJECT}/locations/${LOCATION}/recommenders/${RECOMMENDER}/recommendations" For example: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: example-project" \ "https://recommender.googleapis.com/v1/projects/example-project/locations/us-central1-a/recommenders/google.compute.instance.MachineTypeRecommender/recommendations" This operation outputs the current VM instance sizing recommendations in the target project as a list of Recommendation entities in the specified format.
- For example: gcloud recommender recommendations mark-succeeded \ a523ff7e-ed03-4143-a3a5-5b396b99cba9 \ --project=example-project \ --location=us-central1-a \ --recommender=google.compute.instance.MachineTypeRecommender \ --etag='"5e3a63cccf1e0964"' \ --state-metadata=priority=high,tracking number=12345 \ --format=json REST Enter the following curl -X POST \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: ${PROJECT}" \ --data-binary @- \ https://recommender.googleapis.com/v1/projects/${PROJECT}/locations/${LOCATION}/recommenders/${RECOMMENDER}/recommendations/ RECOMMENDATION ID : STATE CHANGE \ << EOM { "etag": " ETAG " "stateMetadata": STATE METADATA } EOM where: RECOMMENDATION ID is the ID of a recommendation that you retrieved from a previous call to list recommendations.
- For example: curl -X POST \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: example-project" \ --data-binary @- \ https://recommender.googleapis.com/v1/projects/example-project/locations/us-central1-a/recommenders/google.compute.instance.MachineTypeRecommender/recommendations/8f20d509-83d2-45d2-8152-1b8d5d7d5831:markSucceeded \ << EOM { "etag": "\"280b34810bba8a1a\"" "stateMetadata": { "priority" : "high", "tracking number": "12345" } } EOM This operation returns the Recommendation entity in the specified format after the operation has taken place.
- The output is similar to the following: [ { "content": { "operationGroups": [ { "operations": [ { "action": "test", "path": "/machineType", "resource": "//compute.googleapis.com/projects/example-project/zones/us-central1-a/instances/instance-1", "resourceType": "compute.googleapis.com/Instance", "valueMatcher": { "matchesPattern": ". zones/us-central1-a/machineTypes/n1-standard-4" } }, { "action": "replace", "path": "/machineType", "resource": "//compute.googleapis.com/projects/example-project/zones/us-central1-a/instances/instance-1", "resourceType": "compute.googleapis.com/Instance", "value": "zones/us-central1-a/machineTypes/custom-2-5120" } ] } ] }, "description": "Save cost by changing machine type from n1-standard-4 to custom-2-5120.", "etag": "\"280b34810bba8a1a\"", "lastRefreshTime": "2019-06-28T06:49:21Z", "name": "projects/32428390823/locations/us-central1-a/recommenders/google.compute.instance.MachineTypeRecommender/recommendations/a523ff7e-ed03-4143-a3a5-5b396b99cba9", "primaryImpact": { ... }, "stateInfo": { "state": "ACTIVE" }, "recommenderSubtype": "CHANGE MACHINE TYPE" } ] Note that the returned recommendations include the following fields: A name field in the following format: projects/ PROJECT ID /locations/ LOCATION /recommenders/ RECOMMENDER ID /recommendations/ RECOMMENDATION ID where RECOMMENDATION ID uniquely identifies the recommendation An etag field that is associated with the current recommendation state.

### Change risk recommendations \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/change-risk-recommendations](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)
- Source ID: `site-api-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recommendations To list recommendations for the project where you've enabled the Recommender API, run the following command: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "x-goog-user-project: BILLING PROJECT ID " "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/global/ recommenders/google.resourcemanager.project.ChangeRiskRecommender/recommendations" Replace the following: BILLING PROJECT ID : The billing project ID.
- Recommendations: To list recommendations for a Service Account where you've enabled the Recommender API, run the following command: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "x-goog-user-project: BILLING PROJECT ID " "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/global/ recommenders/google.iam.serviceAccount.ChangeRiskRecommender/recommendations" Replace the following: PROJECT ID : The project ID.
- Recommendations: To list recommendations for an IAM Policy where you've enabled the Recommender API, run the following command: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/global/\recommenders/google.iam.policy.ChangeRiskRecommender/recommendations" Replace the following: PROJECT ID : The project ID.
- Service account Insights and recommendations about a Service Account can be accessed through the Google Cloud console, gcloud , or the Recommender API for all customers. gcloud To view recommendations and insights using gcloud , follow the steps below.

### Service limit (quota) recommender \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender](https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recommender ID Here are the service limit (quota) recommender ID and insight type: google.resourcemanager.serviceLimit.Recommender google.resourcemanager.serviceLimit.Insight Required IAM permissions To access the list of service limit recommendations and insights, the following permissions are required: recommender.resourcemanagerServiceLimitRecommendations.get recommender.resourcemanagerServiceLimitRecommendations.list recommender.resourcemanagerServiceLimitInsights.get recommender.resourcemanagerServiceLimitInsights.list To update recommendations and insights (for example, to dismiss a recommendation), the following permissions are required: recommender.resourcemanagerServiceLimitRecommendations.update recommender.resourcemanagerServiceLimitInsights.update Viewing service limit (quota) recommendations Insights and recommendations can be accessed through the Cloud Console, gcloud , or the Recommender API for all customers.
- To list recommendations in a different project while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /\ recommenders/google.resourcemanager.serviceLimit.Recommender/recommendations" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).
- Recommendations To list recommendations for the project where you've enabled the Recommender API, run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /\ recommenders/google.resourcemanager.serviceLimit.Recommender/recommendations" Replace the following: PROJECT ID : The project ID.
- To list recommendations in a different project while using a project where you've enabled the Recommender API (as in the previous step), run the following command: gcloud recommender recommendations list \ --billing-project= BILLING PROJECT ID \ --project= PROJECT ID \ --location= LOCATION \ --recommender=google.resourcemanager.serviceLimit.Recommender Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).

### Unattended project recommender \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/unattended-project-recommender](https://docs.cloud.google.com/recommender/docs/unattended-project-recommender)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recommender ID Here are the unattended project recommender ID and insight type: google.resourcemanager.projectUtilization.Recommender google.resourcemanager.projectUtilization.Insight Required IAM permissions To access the list of recommendations and insights, the following permissions are required: recommender.resourcemanagerProjectUtilizationRecommendations.get recommender.resourcemanagerProjectUtilizationRecommendations.list recommender.resourcemanagerProjectUtilizationInsights.get recommender.resourcemanagerProjectUtilizationInsights.list To update recommendations and insights (for example, to dismiss a recommendation), the following permissions are required: recommender.resourcemanagerProjectUtilizationRecommendations.update recommender.resourcemanagerProjectUtilizationInsights.update Viewing unattended project recommendations This section describes how to check for unattended insights and recommendations using gcloud , and using curl to send requests to the recommender API. gcloud To view recommendations and insights using gcloud , follow the steps below.
- To list unattended project recommendations that are using a specific Billing Account, while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/billingAccounts/ BILLING ACCOUNT ID /locations/global/\ recommenders/google.resourcemanager.projectUtilization.Recommender/recommendations" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).
- To list unattended project recommendations for the entire organization, while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/organizations/ ORGANIZATION ID /locations/global/\ recommenders/google.resourcemanager.projectUtilization.Recommender/recommendations" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).
- To list unattended project recommendations in a different project while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/global/\ recommenders/google.resourcemanager.projectUtilization.Recommender/recommendations" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).

