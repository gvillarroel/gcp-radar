---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.944Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "FedRAMP Moderate support for Access Approval"
feature_slug: "fedramp-moderate-support-for-access-approval"
latest_feature_date: "2023-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/assured-workloads"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings"
keywords:
  - "fedramp"
  - "moderate"
  - "access"
  - "approval"
  - "compliance"
  - "regime"
  - "supports"
  - "assured"
---

# FedRAMP Moderate support for Access Approval

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

The FedRAMP Moderate compliance regime supports Access Approval in Assured Workloads.

## Extended Definition

The FedRAMP Moderate compliance regime supports Access Approval in Assured Workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/assured-workloads](https://docs.cloud.google.com/assured-workloads/access-approval/docs/assured-workloads)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings)

## Supporting Pages

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-docs-root-3`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- If the field is true, that indicates that there is some configuration issue with the activeKeyVersion configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. preferredRequestExpirationDays integer Set the default access approval request expiration time.
- If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). activeKeyVersion string The asymmetric crypto key version to use for signing approval requests.
- Format is one of: "projects/{project}/accessApprovalSettings" "folders/{folder}/accessApprovalSettings" "organizations/{organization}/accessApprovalSettings" notificationEmails[] string A list of email addresses to which notifications relating to approval requests should be sent.

### "Introduction to Assured Workloads \_|\_ Access Approval \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/assured-workloads](https://docs.cloud.google.com/assured-workloads/access-approval/docs/assured-workloads)
- Source ID: `site-docs-root-3`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- To learn how you can be compliant with FedRAMP Moderate, FedRAMP High, and US Regions and Support compliance regimes, see Create a new folder in a workload environment for FedRAMP and US Regions and Support .
- Home Documentation Security Cloud provider access management Access Approval Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Introduction to Assured Workloads Assured Workloads lets you confidently secure and configure your workloads to support various compliance requirements.
- Assured Workloads enables regulatory compliance by focusing on data residency , data encryption , encryption key management , and platform controls .

### "Method: folders.deleteAccessApprovalSettings \_|\_ Access Approval \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings)
- Source ID: `site-docs-root-3`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: folders.deleteAccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource name : accessapproval.settings.delete Request body The request body must be empty.
- HTTP request DELETE https://accessapproval.googleapis.com/v1/{name=folders/ /accessApprovalSettings} The URL uses gRPC Transcoding syntax.
- To confirm the effective settings, call folders.getAccessApprovalSettings and verify effective setting is disabled.

