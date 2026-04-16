---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:12.255Z"
product_name: "Recommender"
product_slug: "recommender"
feature_name: "Insights"
feature_slug: "insights"
latest_feature_date: "2020-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recommender/docs/insights/using-api"
  - "https://docs.cloud.google.com/recommender/docs/insights/insight-types"
  - "https://docs.cloud.google.com/recommender/docs/change-risk-recommendations"
  - "https://docs.cloud.google.com/recommender/docs/error-reporting/notification-recommender"
keywords:
  - "insights"
  - "highlight"
  - "important"
  - "patterns"
  - "in"
  - "resource"
  - "usage"
---

# Insights

Product: Recommender
Coverage: MEDIUM

## Step 02 Summary

Insights highlight important patterns in resource usage; Insights highlight important patterns in resource usage.

## Extended Definition

Insights highlight important patterns in resource usage; Insights highlight important patterns in resource usage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recommender/docs/insights/using-api](https://docs.cloud.google.com/recommender/docs/insights/using-api)
- [https://docs.cloud.google.com/recommender/docs/insights/insight-types](https://docs.cloud.google.com/recommender/docs/insights/insight-types)
- [https://docs.cloud.google.com/recommender/docs/change-risk-recommendations](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)
- [https://docs.cloud.google.com/recommender/docs/error-reporting/notification-recommender](https://docs.cloud.google.com/recommender/docs/error-reporting/notification-recommender)

## Supporting Pages

### Use the API - Insights \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/insights/using-api](https://docs.cloud.google.com/recommender/docs/insights/using-api)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is similar to the following: [ { "category": "SECURITY", "content": { "condition": { "description": "", "expression": "", "location": "", "title": "" }, "exercisedPermissions": [], "inferredPermissions": [], "member": "user:my-service-account@example-project.iam.gserviceaccount.com", "role": "roles/iam.securityReviewer" }, "description": "0 permission checks were authorized by this policy binding tuple.", "etag": "\"45f4e2c63f6952e8\"", "insightSubtype": "PERMISSIONS USAGE", "lastRefreshTime": "2020-03-06T08:00:00Z", "name": "projects/32428390823/locations/global/insightTypes/google.iam.policy.Insight/insights/a523ff7e-ed03-4143-a3a5-5b396b99cba9", "observationPeriod": "7776000s", "stateInfo": { "state": "ACTIVE", }, "targetResources": [ "//cloudresourcemanager.googleapis.com/projects/32428390823" ], } ] Note that the returned insights include the following fields: A name field in the following format: projects/ PROJECT ID /locations/ LOCATION /insightTypes/ INSIGHT TYPE ID /insights/ INSIGHT ID where INSIGHT ID uniquely identifies the insight An etag field that is associated with the current insight state.
- The output is similar to the following: { "category": "SECURITY", "content": { ... }, "description": "0 permission checks were authorized by this policy binding tuple.", "etag": "\"356ae51165729f38\"", "insightSubtype": "PERMISSIONS USAGE", "lastModifiedUser": "admin123@example-project.iam.gserviceaccount.com", "lastRefreshTime": "2020-03-06T08:00:00Z", "name": "projects/32428390823/locations/global/insightTypes/google.iam.policy.Insight/insights/a523ff7e-ed03-4143-a3a5-5b396b99cba9", "observationPeriod": "7776000s", "stateInfo": { "state": "ACCEPTED", "stateMetadata": { "priority" : "high", "tracking number": "12345" } }, "targetResources": [ "//cloudresourcemanager.googleapis.com/projects/32428390823" ], "userLastUpdateTime": "2020-03-31T20:57:50.509855Z" } Note that the value of the state field has changed to ACCEPTED .
- LOCATION ID is the Google Cloud location where resources associated with the insights are located (for example, global or us-central1-a ).
- For example: gcloud recommender insights mark-accepted \ a523ff7e-ed03-4143-a3a5-5b396b99cba9 \ --project=example-project \ --location=global \ --insight-type=google.iam.policy.Insight \ --etag='"280b34810bba8a1a"' \ --state-metadata=priority=high,tracking number=12345 --format=json REST Enter the following: curl -X POST \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: ${PROJECT}" \ --data-binary @- \ https://recommender.googleapis.com/v1/projects/${PROJECT}/locations/${LOCATION}/insightTypes/${INSIGHT TYPE}/insights/ INSIGHT ID :markAccepted \ << EOM { "etag": " etag ", "stateMetadata": STATE METADATA } EOM where: INSIGHT ID is the ID of an insight retrieved from a previous call to list insights etag is the returned etag representing the insight state STATE METADATA is an optional field with additional metadata about the operation.

### Insight types \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/insights/insight-types](https://docs.cloud.google.com/recommender/docs/insights/insight-types)
- Source ID: `site-api-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Supported insight types: Name Insight type ID Cloud Asset insights google.cloudasset.asset.Insight Dataflow insights google.dataflow.diagnostics.Insight Error Reporting notification insights google.clouderrorreporting.Insight Firewall insights google.compute.firewall.Insight GKE diagnosis insights google.container.DiagnosisInsight IAM policy insights google.iam.policy.Insight IAM service account insights science google.iam.serviceAccount.Insight Idle Compute Engine resources insights google.compute.disk.IdleResourceInsight google.compute.image.IdleResourceInsight google.compute.address.IdleResourceInsight Lateral movement insights google.iam.policy.LateralMovementInsight Managed instance group insights google.compute.instanceGroupManager.CpuUsageInsight google.compute.instanceGroupManager.CpuUsagePredictionInsight google.compute.instanceGroupManager.CpuUsageTrendInsight google.compute.instanceGroupManager.MemoryUsageInsight google.compute.instanceGroupManager.MemoryUsagePredictionInsight Network Analyzer insights google.networkanalyzer.vpcnetwork.ipAddressInsight google.networkanalyzer.vpcnetwork.connectivityInsight google.networkanalyzer.networkservices.loadBalancerInsight google.networkanalyzer.container.ipAddressInsight google.networkanalyzer.container.connectivityInsight google.networkanalyzer.container.serviceAccountInsight google.networkanalyzer.hybridconnectivity.dynamicRouteInsight Unattended project insights google.resourcemanager.projectUtilization.Insight VM instance insights google.compute.instance.CpuUsageInsight google.compute.instance.CpuUsagePredictionInsight google.compute.instance.CpuUsageTrendInsight google.compute.instance.MemoryUsageInsight google.compute.instance.MemoryUsagePredictionInsight google.compute.instance.NetworkThroughputInsight recent change insights google.cloud.RecentChangeInsight Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- A single product can have multiple insight types, where each provides a different type of insight for a different resource.
- Insight types are specific to a single Google Cloud product and resource type.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Change risk recommendations \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/change-risk-recommendations](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Action Surfaces Criteria used to determine resource importance Project Deletion Google Cloud console gcloud CLI Recommender API Project usage (API calls, networking traffic, and Google Cloud services usage) Billing Usage within the last 30 days Service account Deletion Google Cloud console gcloud CLI Recommender API Number of authentications Usage within the last 90 days IAM policy Change Google Cloud console gcloud CLI Recommender API Number of exercised permissions Usage within the last 90 days Belong to an important project Caution: Change risk recommendations won't recognize resources as important if they had sudden changes in their activity within less than 24 hours.
- Active Assist warns you of the dangers of deleting an important resource, and indicates what to do when that warning appears in the following situations: Deleting a project Deleting a service account Deleting a policy binding gcloud and API The following sections present the commands to request change risk recommendations and insights trough gcloud and the API for a Project, Service account or an IAM Policy.
- Project recommender.resourcemanagerProjectChangeRiskRecommendations.get recommender.resourcemanagerProjectChangeRiskRecommendations.list recommender.resourcemanagerProjectChangeRiskInsights.get recommender.resourcemanagerProjectChangeRiskInsights.list Service Account recommender.iamServiceAccountChangeRiskRecommendations.get recommender.iamServiceAccountChangeRiskRecommendations.list recommender.iamServiceAccountChangeRiskInsights.get recommender.iamServiceAccountChangeRiskInsights.list IAM Policy recommender.iamPolicyChangeRiskRecommendations.get recommender.iamPolicyChangeRiskRecommendations.list recommender.iamPolicyChangeRiskInsights.get recommender.iamPolicyChangeRiskInsights.list You can also grant roles/recommender.viewer role to cover these permissions.
- Insights: A similar set of commands may be used to list insights: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "x-goog-user-project: BILLING PROJECT ID " "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/global/insightTypes/google.resourcemanager.project.ChangeRiskInsight/insights" Replace the following: BILLING PROJECT ID : The billing project ID.

### "Error Reporting notification recommender and insights \_|\_ Recommender\

- URL: [https://docs.cloud.google.com/recommender/docs/error-reporting/notification-recommender](https://docs.cloud.google.com/recommender/docs/error-reporting/notification-recommender)
- Source ID: `site-api-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Opting out . roles/dataprocessing.admin These Recommender roles provide the following API permissions: Role Included permissions roles/recommender.errorReportingViewer recommender.errorReportingInsights.get recommender.errorReportingInsights.list recommender.errorReportingRecommendations.get recommender.errorReportingRecommendations.list roles/recommender.errorReportingAdmin roles/recommender.errorReportingViewer permissions, plus recommender.errorReportingInsights.update recommender.errorReportingRecommendations.update For more information about roles and about granting access, see the following: Understanding roles Managing access to projects, folders, and organizations View recommendations Recommender displays recommendations in the Google Cloud console.
- You can retrieve these insights by using the Google Cloud CLI or the Recommender API. gcloud CLI To list your Error Reporting insights by using the gcloud CLI, run the following command: gcloud recommender insights list \ --insight-type=google.clouderrorreporting.Insight \ --project= PROJECT ID \ --location=global Replace PROJECT ID with the identifier for your Google Cloud project.
- Recommender API To list your Error Reporting insights by using the Recommender API, run the following command: curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/global/recommenders/google.clouderrorreporting.Insight/insights" Replace PROJECT ID with the identifier for your Google Cloud project.
- You must have one of the following roles, which provide the necessary permissions: Task description Role View recommendations/insights roles/recommender.errorReportingViewer View and update (dismiss) recommendations/insights roles/recommender.errorReportingAdmin Opt out of recommendations/insights in Transparency and Control Center.

