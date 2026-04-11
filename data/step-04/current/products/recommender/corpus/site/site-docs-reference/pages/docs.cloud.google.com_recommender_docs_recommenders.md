---
title: "Recommenders \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recommender/docs/recommenders
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recommender/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/recommender/docs/recommenders
  title: "Recommenders \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Recommender
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Recommenders
A recommender is a service on
Google Cloud that provides usage recommendations for Google Cloud
resources. Recommenders are specific to a single Google Cloud product and
resource type. A single product can have multiple recommenders, where each
provides a different type of recommendation for a different resource.
Recommender has the following recommenders:
Value Category
Name
Recommender ID
Short Description
Included in BigQuery Export
Cost
BigQuery edition slot recommender
google.bigquery.capacityCommitments.Recommender
Optimize BigQuery spend with slot commitments
No
BigQuery partitioning and clustering recommender
google.bigquery.table.PartitionClusterRecommender
Partition or cluster your tables
Yes
Soft delete recommender
google.storage.bucket.SoftDeleteRecommender
Enable or disable soft delete based on costs and security
No
Cloud Run CPU allocation recommender
google.run.service.CostRecommender
Switch to CPU always allocated
Yes
Cloud SQL idle instance recommender
google.cloudsql.instance.IdleRecommender
Remove unused SQL instances
Yes
Cloud SQL overprovisioned instance recommender
google.cloudsql.instance.OverprovisionedRecommender
Resize overprovisioned SQL instances
Yes
Committed use discount recommender
google.compute.commitment.UsageCommitmentRecommender
Reduce costs through Compute Engine resource-based commitments
Yes
Idle custom image recommender
google.compute.image.IdleResourceRecommender
Remove unused images
Yes
Idle GKE cluster recommender
google.container.DiagnosisRecommender
Remove unused GKE clusters
Yes
Idle IP address recommender
google.compute.address.IdleResourceRecommender
Remove unused IPs
Yes
Idle persistent disk recommender
google.compute.disk.IdleResourceRecommender
Backup and remove unused disks
Yes
Idle VM recommender
google.compute.instance.IdleResourceRecommender
Remove unused VMs
Yes
Idle reservations recommender
google.compute.IdleResourceRecommender
Delete unused resource reservations
Yes
Underutilized reservations recommender
google.compute.RightSizeResourceRecommender
Right-size underutilized reservations
Yes
Security
Identity and Access Management recommender
google.iam.policy.Recommender
Remove excess permissions
Yes
Cloud Run Service Security recommenders
google.run.service.IdentityRecommender google.run.service.SecurityRecommender
Increase Cloud Run Service security
Yes
Unattended project recommender
google.resourcemanager.projectUtilization.Recommender
Reclaim or remove unused projects
Yes
Advisory Notifications recommender
google.cloud.security.GeneralRecommender
Ensure that the right parties within your organization have access to view critical security and privacy notifications
Yes
Cloud SQL security recommender
Remove broad public IP ranges
Disable public IP connection
Enable database auditing
Remove authorized networks
Require SSL for direct connections
Rotate server certificate
Enable instance password policies
Enable user password policies
google.cloudsql.instance.SecurityRecommender
Secure Cloud SQL instances
Remove broad public IP ranges from authorized networks
Disable public IP connection to comply with your organization policy
Enable database auditing
Remove authorized networks to comply with your organization policy
Require SSL for direct connections
Rotate server certificate before it expires
Enable instance password policies
Enable user password policies
Yes
Cloud Firestore Security rules recommender
google.firestore.database.FirebaseRulesRecommender
Improve Cloud Firestore database firebase rules security. It has the following subtypes:
Update insecure policy
No
Performance
Rapid Cache recommender
google.storage.bucket.AnywhereCacheRecommender
Cache your data in Cloud Storage with Rapid Cache
Yes
Managed instance group machine type recommender
google.compute.instanceGroupManager.MachineTypeRecommender
Resize MIG machine types
Yes
VM machine type recommender
google.compute.instance.MachineTypeRecommender
Resize VM machine types
Yes
Cloud Functions minimum instances recommender
google.cloudfunctions.PerformanceRecommender
Prevent cold starts for deployed functions
Yes
Cloud SQL performance recommender
MySQL high number of open tables
MySQL high number of tables
PostgreSQL high transaction id utilization
google.cloudsql.instance.PerformanceRecommender
Improve Cloud SQL instance performance
MySQL: increase the table open cache size
MySQL: manage high number of tables
PostgreSQL: prevent transaction ID wraparound
Yes
Cloud SQL underprovisioned recommender
google.cloudsql.instance.UnderprovisionedRecommender
Optimize underprovisioned Cloud SQL instances
Yes
Reliability
GKE diagnosis recommender
google.container.DiagnosisRecommender
Mitigate risks, troubleshoot and optimize your usage of GKE
Yes
Service limit (quota) recommender
google.resourcemanager.serviceLimit.Recommender
Manage service and quota usage to avoid hitting limits
Yes
Cloud SQL Reliability recommender
google.cloudsql.instance.ReliabilityRecommender
Enable High Availability on Cloud SQL Instances
Yes
Cloud SQL out-of-disk recommender
google.cloudsql.instance.OutOfDiskRecommender
Prevent Cloud SQL out-of-disk outage
Yes
Change Risk Recommendations
google.resourcemanager.project.ChangeRiskRecommender google.iam.serviceAccount.ChangeRiskRecommender google.iam.policy.ChangeRiskRecommender
Reduce risk of misconfigurations
No
Recent Change Recommendations
google.cloud.RecentChangeRecommender
Reduce risk of misconfigurations
Yes
Cloud Firestore Reliability recommender
google.firestore.database.ReliabilityRecommender
Improve Cloud Firestore database disaster recovery plan. It has the following subtypes:
Enable scheduled backups
Enable PITR
No
Manageability
Deprecation and Breaking Changes recommender
google.cloud.deprecation.GeneralRecommender
Prevent service interruptions due to deprecations and breaking changes
Yes
Error Reporting notification recommender
google.clouderrorreporting.Recommender
Receive notifications for errors in your project
No
Google Maps Platform project management recommender
google.gmp.project.ManagementRecommender
Restrict your API keys
No
Product suggestion recommender
google.logging.productSuggestion.ContainerRecommender
Explore more helpful products
No
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
