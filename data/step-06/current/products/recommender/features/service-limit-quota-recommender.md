---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:12.233Z"
product_name: "Recommender"
product_slug: "recommender"
feature_name: "Service limit (quota) recommender"
feature_slug: "service-limit-quota-recommender"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender"
  - "https://docs.cloud.google.com/recommender/docs/deprecation-change-recommender"
  - "https://docs.cloud.google.com/recommender/docs/recommenders"
  - "https://docs.cloud.google.com/recommender/docs/unattended-project-recommender"
keywords:
  - "limit"
  - "quota"
  - "recommender"
  - "identifies"
  - "resources"
  - "that"
  - "are"
  - "approaching"
---

# Service limit (quota) recommender

Product: Recommender
Coverage: MEDIUM

## Step 02 Summary

Identifies resources that are approaching service quota limits; Identifies resources that may be approaching their quota limits.

## Extended Definition

Identifies resources that are approaching service quota limits; Identifies resources that may be approaching their quota limits.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender](https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender)
- [https://docs.cloud.google.com/recommender/docs/deprecation-change-recommender](https://docs.cloud.google.com/recommender/docs/deprecation-change-recommender)
- [https://docs.cloud.google.com/recommender/docs/recommenders](https://docs.cloud.google.com/recommender/docs/recommenders)
- [https://docs.cloud.google.com/recommender/docs/unattended-project-recommender](https://docs.cloud.google.com/recommender/docs/unattended-project-recommender)

## Supporting Pages

### Service limit (quota) recommender \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender](https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender)
- Source ID: `site-api-reference`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: The service limit recommender generates insights and recommendations for all quotas except the following: Quotas that are specified on dimensions other than project, location, or time (e.g. "per organization", "per folder", "per user", "per resource", or "per VPC" quotas) Google Search Indexing and YouTube quotas The IAM quota ServiceAccountsPerProject , in cases where a project is newly created or has not been used extensively Pricing Please refer to recommender pricing .
- Service limit (quota) recommender The service limit recommender analyzes usage of service quotas by projects in your organization and provides recommendations that help you identify resources that may be getting close to their quota limits.
- Recommender ID Here are the service limit (quota) recommender ID and insight type: google.resourcemanager.serviceLimit.Recommender google.resourcemanager.serviceLimit.Insight Required IAM permissions To access the list of service limit recommendations and insights, the following permissions are required: recommender.resourcemanagerServiceLimitRecommendations.get recommender.resourcemanagerServiceLimitRecommendations.list recommender.resourcemanagerServiceLimitInsights.get recommender.resourcemanagerServiceLimitInsights.list To update recommendations and insights (for example, to dismiss a recommendation), the following permissions are required: recommender.resourcemanagerServiceLimitRecommendations.update recommender.resourcemanagerServiceLimitInsights.update Viewing service limit (quota) recommendations Insights and recommendations can be accessed through the Cloud Console, gcloud , or the Recommender API for all customers.
- To list recommendations in a different project while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /\ recommenders/google.resourcemanager.serviceLimit.Recommender/recommendations" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).

### "Cloud deprecation and breaking changes general recommender \_|\_ Recommender\

- URL: [https://docs.cloud.google.com/recommender/docs/deprecation-change-recommender](https://docs.cloud.google.com/recommender/docs/deprecation-change-recommender)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List Recommendations curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /recommenders/google.cloud.deprecation.GeneralRecommender/recommendations" List Insights curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /insightTypes/google.cloud.deprecation.GeneralInsight/insights" Replace the following: BILLING PROJECT ID with ID of the project that you've enabled with the Recommender API.
- It identifies Cloud resources that will be affected by upcoming deprecations and breaking changes while providing guidelines on how to manage them.
- List recommendations gcloud recommender recommendations list \ --billing-project = BILLING PROJECT ID \ --project = PROJECT ID \ --location = LOCATION \ --recommender = google.cloud.deprecation.GeneralRecommender \ --format = yaml List Insights gcloud recommender insights list \ --billing-project = BILLING PROJECT ID \ --project = PROJECT ID \ --location = LOCATION \ --insight-type = google.cloud.deprecation.GeneralInsight \ --format = yaml Replace the following: BILLING PROJECT ID with ID of the project that you've enabled with the Recommender API.
- Ensure that you have the following roles: Description Roles View recommendations recommender.cloudDeprecationRecommendationViewer View and update recommendations recommender.cloudDeprecationRecommendationAdmin Required roles This section describes the roles and necessary permissions to use the Cloud deprecation and breaking changes general recommender .

### Recommenders \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/recommenders](https://docs.cloud.google.com/recommender/docs/recommenders)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It has the following subtypes: Update insecure policy No Performance Rapid Cache recommender google.storage.bucket.AnywhereCacheRecommender Cache your data in Cloud Storage with Rapid Cache Yes Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Resize MIG machine types Yes VM machine type recommender google.compute.instance.MachineTypeRecommender Resize VM machine types Yes Cloud Functions minimum instances recommender google.cloudfunctions.PerformanceRecommender Prevent cold starts for deployed functions Yes Cloud SQL performance recommender MySQL high number of open tables MySQL high number of tables PostgreSQL high transaction id utilization google.cloudsql.instance.PerformanceRecommender Improve Cloud SQL instance performance MySQL: increase the table open cache size MySQL: manage high number of tables PostgreSQL: prevent transaction ID wraparound Yes Cloud SQL underprovisioned recommender google.cloudsql.instance.UnderprovisionedRecommender Optimize underprovisioned Cloud SQL instances Yes Reliability GKE diagnosis recommender google.container.DiagnosisRecommender Mitigate risks, troubleshoot and optimize your usage of GKE Yes Service limit (quota) recommender google.resourcemanager.serviceLimit.Recommender Manage service and quota usage to avoid hitting limits Yes Cloud SQL Reliability recommender google.cloudsql.instance.ReliabilityRecommender Enable High Availability on Cloud SQL Instances Yes Cloud SQL out-of-disk recommender google.cloudsql.instance.OutOfDiskRecommender Prevent Cloud SQL out-of-disk outage Yes Change Risk Recommendations google.resourcemanager.project.ChangeRiskRecommender google.iam.serviceAccount.ChangeRiskRecommender google.iam.policy.ChangeRiskRecommender Reduce risk of misconfigurations No Recent Change Recommendations google.cloud.RecentChangeRecommender Reduce risk of misconfigurations Yes Cloud Firestore Reliability recommender google.firestore.database.ReliabilityRecommender Improve Cloud Firestore database disaster recovery plan.
- Recommenders A recommender is a service on Google Cloud that provides usage recommendations for Google Cloud resources.
- Recommender has the following recommenders: Value Category Name Recommender ID Short Description Included in BigQuery Export Cost BigQuery edition slot recommender google.bigquery.capacityCommitments.Recommender Optimize BigQuery spend with slot commitments No BigQuery partitioning and clustering recommender google.bigquery.table.PartitionClusterRecommender Partition or cluster your tables Yes Soft delete recommender google.storage.bucket.SoftDeleteRecommender Enable or disable soft delete based on costs and security No Cloud Run CPU allocation recommender google.run.service.CostRecommender Switch to CPU always allocated Yes Cloud SQL idle instance recommender google.cloudsql.instance.IdleRecommender Remove unused SQL instances Yes Cloud SQL overprovisioned instance recommender google.cloudsql.instance.OverprovisionedRecommender Resize overprovisioned SQL instances Yes Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through Compute Engine resource-based commitments Yes Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Yes Idle GKE cluster recommender google.container.DiagnosisRecommender Remove unused GKE clusters Yes Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Yes Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Yes Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Yes Idle reservations recommender google.compute.IdleResourceRecommender Delete unused resource reservations Yes Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations Yes Security Identity and Access Management recommender google.iam.policy.Recommender Remove excess permissions Yes Cloud Run Service Security recommenders google.run.service.IdentityRecommender google.run.service.SecurityRecommender Increase Cloud Run Service security Yes Unattended project recommender google.resourcemanager.projectUtilization.Recommender Reclaim or remove unused projects Yes Advisory Notifications recommender google.cloud.security.GeneralRecommender Ensure that the right parties within your organization have access to view critical security and privacy notifications Yes Cloud SQL security recommender Remove broad public IP ranges Disable public IP connection Enable database auditing Remove authorized networks Require SSL for direct connections Rotate server certificate Enable instance password policies Enable user password policies google.cloudsql.instance.SecurityRecommender Secure Cloud SQL instances Remove broad public IP ranges from authorized networks Disable public IP connection to comply with your organization policy Enable database auditing Remove authorized networks to comply with your organization policy Require SSL for direct connections Rotate server certificate before it expires Enable instance password policies Enable user password policies Yes Cloud Firestore Security rules recommender google.firestore.database.FirebaseRulesRecommender Improve Cloud Firestore database firebase rules security.
- It has the following subtypes: Enable scheduled backups Enable PITR No Manageability Deprecation and Breaking Changes recommender google.cloud.deprecation.GeneralRecommender Prevent service interruptions due to deprecations and breaking changes Yes Error Reporting notification recommender google.clouderrorreporting.Recommender Receive notifications for errors in your project No Google Maps Platform project management recommender google.gmp.project.ManagementRecommender Restrict your API keys No Product suggestion recommender google.logging.productSuggestion.ContainerRecommender Explore more helpful products No Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Unattended project recommender \_|\_ Recommender \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recommender/docs/unattended-project-recommender](https://docs.cloud.google.com/recommender/docs/unattended-project-recommender)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To list unattended project recommendations that are using a specific Billing Account, while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/billingAccounts/ BILLING ACCOUNT ID /locations/global/\ recommenders/google.resourcemanager.projectUtilization.Recommender/recommendations" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).
- To list unattended project recommendations for the entire organization, while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/organizations/ ORGANIZATION ID /locations/global/\ recommenders/google.resourcemanager.projectUtilization.Recommender/recommendations" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).
- To list unattended project recommendations in a different project while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: BILLING PROJECT ID " \ "https://recommender.googleapis.com/v1/projects/ PROJECT ID /locations/global/\ recommenders/google.resourcemanager.projectUtilization.Recommender/recommendations" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).
- To list usage insights that are using a specific Billing Account, while using a project where you've enabled the Recommender API (as in the previous step), run the following command: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID /" \ "https://recommender.googleapis.com/v1/billingAccounts/ BILLING ACCOUNT ID /locations/global/\ insightTypes/google.resourcemanager.projectUtilization.Insight/insights" Replace the following: BILLING PROJECT ID : The ID of the project that you've enabled with the Recommender API (this would be the same PROJECT ID as given in the previous step).

