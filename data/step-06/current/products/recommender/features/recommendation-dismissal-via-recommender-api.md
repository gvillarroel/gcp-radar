---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:12.241Z"
product_name: "Recommender"
product_slug: "recommender"
feature_name: "Recommendation dismissal via Recommender API"
feature_slug: "recommendation-dismissal-via-recommender-api"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq"
  - "https://docs.cloud.google.com/recommender/docs/change-risk-recommendations"
  - "https://docs.cloud.google.com/recommender/docs/using-api"
  - "https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsAsyncPager"
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

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq)
- [https://docs.cloud.google.com/recommender/docs/change-risk-recommendations](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)
- [https://docs.cloud.google.com/recommender/docs/using-api](https://docs.cloud.google.com/recommender/docs/using-api)
- [https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsAsyncPager)

## Supporting Pages

### "Export recommendations to BigQuery \_|\_ Recommender \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq)
- Source ID: `site-docs-root`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This organization corresponds to the one that the export is being set up for. recommender.resources.export - Allows you to export recommendations to BigQuery The following permissions are required to export negotiated prices for cost savings recommendations: billing.resourceCosts.get at project level - Allows exporting negotiated prices for project level recommendations billing.accounts.getSpendingInformation at billing account level - Allows exporting negotiated prices for billing account level recommendations Without these permissions, cost savings recommendations will be exported with standard prices instead of negotiated prices.
- To have both these permissions available, you can grant the following role: Project owner role - roles/owner There are multiple roles that contain the permission billing.resourceCosts.get to export negotiated prices for cost savings project level recommendations - you can grant any one of them: Project Owner role - roles/owner Project Viewer role - roles/viewer Project Editor role - roles/editor There are multiple roles that contain the permission billing.accounts.getSpendingInformation to export negotiated prices for cost savings billing account level recommendations - you can grant any one of them: Billing Account Administrator role - roles/billing.admin Billing Account Costs Manager role - roles/billing.costsManager Billing Account Viewer role - roles/billing.viewer You must grant the following role at the organization level: Recommendations Exporter ( roles/recommender.exporter ) role on the Google Cloud console.
- Pricing Exporting recommendations to BigQuery is available to all Recommender customers based on their Recommender pricing tier .
- Viewing cost savings for recommendations where the recommendation duration is displayed in days SELECT name , recommender , target resources , case primary impact . cost projection . cost . units is null when true then round ( primary impact . cost projection . cost . nanos power ( 10 , - 9 ), 2 ) else round ( primary impact . cost projection . cost . units + ( primary impact . cost projection . cost . nanos power ( 10 , - 9 )), 2 ) end as dollar amt , primary impact . cost projection . duration . seconds / ( 60 60 24 ) as duration in days FROM < project > . < dataset > . recommendations export WHERE DATE ( PARTITIONTIME ) = "<date>" and primary impact . category = "COST" Viewing the list of unused IAM roles SELECT FROM < project > . < dataset > . recommendations export WHERE DATE ( PARTITIONTIME ) = "<date>" and recommender = "google.iam.policy.Recommender" and recommender subtype = "REMOVE ROLE" Viewing a list of granted roles that must be replaced by smaller roles SELECT FROM < project > . < dataset > . recommendations export WHERE DATE ( PARTITIONTIME ) = "<date>" and recommender = "google.iam.policy.Recommender" and recommender subtype = "REPLACE ROLE" Viewing insights for a recommendation SELECT recommendations . name as recommendation name , insights . name as insight name , recommendations . cloud entity id , recommendations . cloud entity type , recommendations . recommender , recommendations . recommender subtype , recommendations . description , recommendations . target resources , recommendations . recommendation details , recommendations . state , recommendations . last refresh time as recommendation last refresh time , insights . insight type , insights . insight subtype , insights . category , insights . description , insights . insight details , insights . state , insights . last refresh time as insight last refresh time FROM < project > . < dataset > . recommendations export as recommendations , < project > . < dataset > . insights export as insights WHERE DATE ( recommendations .

### Change risk recommendations \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/change-risk-recommendations](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View the full risk assessment at: https://console.cloud.google.com/home/recommendations/view-link/projects/123456/locations/global/recommenders/google.resourcemanager.project.ChangeRiskRecommender/recommendations/reco-id-0000-0000-000000000 Do you want to continue (Y/n)? n Service account deletion The following command deletes a Service Account: gcloud alpha iam service-accounts delete example@ PROJECT ID .iam.gserviceaccount.com --recommend = yes You will see the following supported risky changes with recommendations: You are about to delete service account [example@ PROJECT ID .iam.gserviceaccount.com] Deleting this service account (SA) will delete all associated key IDs, and will prevent the account from authenticating to any Google Cloud service API.
- Resource Action Surfaces Criteria used to determine resource importance Project Deletion Google Cloud console gcloud CLI Recommender API Project usage (API calls, networking traffic, and Google Cloud services usage) Billing Usage within the last 30 days Service account Deletion Google Cloud console gcloud CLI Recommender API Number of authentications Usage within the last 90 days IAM policy Change Google Cloud console gcloud CLI Recommender API Number of exercised permissions Usage within the last 90 days Belong to an important project Caution: Change risk recommendations won't recognize resources as important if they had sudden changes in their activity within less than 24 hours.
- Method not visible to labels: {PUBLIC}' Make sure that the project config is set to a project that is allowlisted for using Alpha Recommender API with the following command: gcloud config set project PROJECT ID Project IAM policy binding deletion The following command deletes a Project IAM Policy Binding: gcloud alpha projects remove-iam-policy-binding PROJECT ID --member = YOUR EMAIL@DOMAIN.COM --role = roles/owner --recommend = yes You will see the following supported risky changes with recommendations: You are about to delete the role [roles/owner].
- View the full risk assessment at: https://console.cloud.google.com/home/recommendations/view-link/projects/123456/locations/global/recommenders/google.iam.serviceAccount.ChangeRiskRecommender/recommendations/reco-id-0000-0000-000000000 Do you want to continue (Y/n)? n If you see the following error: ERROR: ( gcloud.alpha.iam.service-accounts.delete ) NOT FOUND: Method not found. - '@type' : type.googleapis.com/google.rpc.DebugInfo detail: 'Method ListInsights not found for service recommender.googleapis.com.

### Use the API - Recommendations \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/using-api](https://docs.cloud.google.com/recommender/docs/using-api)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is similar to the following: [ { "content": { "operationGroups": [ { "operations": [ { "action": "test", "path": "/machineType", "resource": "//compute.googleapis.com/projects/example-project/zones/us-central1-a/instances/instance-1", "resourceType": "compute.googleapis.com/Instance", "valueMatcher": { "matchesPattern": ". zones/us-central1-a/machineTypes/n1-standard-4" } }, { "action": "replace", "path": "/machineType", "resource": "//compute.googleapis.com/projects/example-project/zones/us-central1-a/instances/instance-1", "resourceType": "compute.googleapis.com/Instance", "value": "zones/us-central1-a/machineTypes/custom-2-5120" } ] } ] }, "description": "Save cost by changing machine type from n1-standard-4 to custom-2-5120.", "etag": "\"280b34810bba8a1a\"", "lastRefreshTime": "2019-06-28T06:49:21Z", "name": "projects/32428390823/locations/us-central1-a/recommenders/google.compute.instance.MachineTypeRecommender/recommendations/a523ff7e-ed03-4143-a3a5-5b396b99cba9", "primaryImpact": { ... }, "stateInfo": { "state": "ACTIVE" }, "recommenderSubtype": "CHANGE MACHINE TYPE" } ] Note that the returned recommendations include the following fields: A name field in the following format: projects/ PROJECT ID /locations/ LOCATION /recommenders/ RECOMMENDER ID /recommendations/ RECOMMENDATION ID where RECOMMENDATION ID uniquely identifies the recommendation An etag field that is associated with the current recommendation state.
- For example: gcloud recommender recommendations list \ --project=example-project \ --location=us-central1-a \ --recommender=google.compute.instance.MachineTypeRecommender \ --format=json REST Enter the following: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: ${PROJECT}" \ "https://recommender.googleapis.com/v1/projects/${PROJECT}/locations/${LOCATION}/recommenders/${RECOMMENDER}/recommendations" For example: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: example-project" \ "https://recommender.googleapis.com/v1/projects/example-project/locations/us-central1-a/recommenders/google.compute.instance.MachineTypeRecommender/recommendations" This operation outputs the current VM instance sizing recommendations in the target project as a list of Recommendation entities in the specified format.
- For example: gcloud recommender recommendations mark-succeeded \ a523ff7e-ed03-4143-a3a5-5b396b99cba9 \ --project=example-project \ --location=us-central1-a \ --recommender=google.compute.instance.MachineTypeRecommender \ --etag='"5e3a63cccf1e0964"' \ --state-metadata=priority=high,tracking number=12345 \ --format=json REST Enter the following curl -X POST \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: ${PROJECT}" \ --data-binary @- \ https://recommender.googleapis.com/v1/projects/${PROJECT}/locations/${LOCATION}/recommenders/${RECOMMENDER}/recommendations/ RECOMMENDATION ID : STATE CHANGE \ << EOM { "etag": " ETAG " "stateMetadata": STATE METADATA } EOM where: RECOMMENDATION ID is the ID of a recommendation that you retrieved from a previous call to list recommendations.
- For example: curl -X POST \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: example-project" \ --data-binary @- \ https://recommender.googleapis.com/v1/projects/example-project/locations/us-central1-a/recommenders/google.compute.instance.MachineTypeRecommender/recommendations/8f20d509-83d2-45d2-8152-1b8d5d7d5831:markSucceeded \ << EOM { "etag": "\"280b34810bba8a1a\"" "stateMetadata": { "priority" : "high", "tracking number": "12345" } } EOM This operation returns the Recommendation entity in the specified format after the operation has taken place.

### "Class ListRecommendationsAsyncPager (2.21.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.recommender v1.types.ListRecommendationsRequest The initial request object. response google.cloud.recommender v1.types.ListRecommendationsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListRecommendationsAsyncPager (2.21.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListRecommendations requests and continue to iterate through the recommendations field on the corresponding responses.
- This class thinly wraps an initial ListRecommendationsResponse object, and provides an aiter method to iterate through its recommendations field.

