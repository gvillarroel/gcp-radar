---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T15:57:29.233Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Transparency logs include accessApprovals field"
feature_slug: "access-transparency-logs-include-accessapprovals-field"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
keywords:
  - "audit log accessApprovals"
  - "Access Transparency log entry"
  - "Cloud Logging accessApprovals"
  - "Access Transparency logs schema"
  - "accessApprovals field"
  - "accessApprovals"
---

# Access Transparency logs include accessApprovals field

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Transparency logs were updated to include a new field named accessApprovals for Access Approval-related access grants.

## Extended Definition

Access Transparency logs were updated to include a new field named accessApprovals for Access Approval-related access grants.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report](https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)

## Supporting Pages

### "Introduction to Access Transparency \_|\_ Access Approval \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency)
- Source ID: `site-docs-root-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Generate or download an Access Transparency report \_|\_ Access Approval\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report](https://docs.cloud.google.com/assured-workloads/access-approval/docs/export-access-transparency-report)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- Format is one of: "projects/{project}/accessApprovalSettings" "folders/{folder}/accessApprovalSettings" "organizations/{organization}/accessApprovalSettings" notificationEmails[] string A list of email addresses to which notifications relating to approval requests should be sent.
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback AccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- This field is read only (not settable via projects.updateAccessApprovalSettings method).

