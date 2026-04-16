---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.069Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Vertex AI Search support"
feature_slug: "access-approval-support-for-vertex-ai-search-support"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services"
keywords:
  - "access"
  - "approval"
  - "vertex"
  - "ai"
  - "search"
---

# Access Approval support for Vertex AI Search support

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Vertex AI Search support is supported by Access Approval.

## Extended Definition

Vertex AI Search support is supported by Access Approval.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Supporting Pages

### Supported services \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Asset Inventory GA None Cloud Billing Preview None Cloud Build GA None Cloud Composer GA None Cloud Data Fusion GA None Cloud Deploy GA None Cloud DNS GA None Cloud Domains GA None Cloud External Key Manager (Cloud EKM) GA None Cloud Run functions GA None Cloud Healthcare API GA None Cloud Interconnect GA None Cloud Key Management Service (Cloud KMS) GA None Cloud Logging GA None Cloud NAT GA None Cloud OS Login API GA None Cloud Run GA None Cloud Scheduler GA None Cloud SQL GA None Cloud Service Mesh GA None Cloud Storage GA None Cloud Tasks GA None Cloud TPU GA None Cloud Trace GA None Cloud VPN GA None Cloud Workstations GA None Compute Engine GA None Connect Agent GA None Dialogflow CX GA None Database Center GA None Dataflow GA None Dataform GA None Knowledge Catalog GA None Managed Service for Apache Spark GA None Google Distributed Cloud GA None Document AI GA None Eventarc GA None External passthrough Network Load Balancer GA None Filestore GA None Firebase Data Connect GA None Firebase Security Rules GA None Firestore GA None Flow Analyzer GA None Gemini Enterprise GA None GKE Connect GA None GKE Hub GA None GKE Hub API GA None GKE Identity Service GA None Google Cloud Armor GA Access Approval is available for regional Google Cloud Armor security policies.
- Identity-Aware Proxy GA None Image streaming GA None Infrastructure Manager GA None Integration Connectors GA None Internal passthrough Network Load Balancer GA None Google Kubernetes Engine GA None Looker (Google Cloud core) GA None Looker Studio GA None Memorystore for Redis GA None Memorystore for Redis Cluster GA None Memorystore for Valkey GA None Model Armor GA None Cloud Monitoring GA None NCC Gateway GA None Network Connectivity Center GA None Org Lifecycle API GA None Organization Policy Service GA None Parameter Manager GA None Persistent Disk GA None Pub/Sub GA None regional external Application Load Balancer GA None regional external proxy Network Load Balancer GA None regional internal Application Load Balancer GA None regional internal proxy Network Load Balancer GA None Resource Manager GA None Secret Manager GA None Secure Source Manager GA None Secure Web Proxy GA None Security Command Center GA Access Approval supports the Security Command Center Premium tier.
- Currently supported: Online prediction Batch prediction Vertex AI Model Registry AI Platform Training AI Platform Pipelines Vertex AI Model Monitoring Vector Search Vertex AI model tuning Vertex AI Agent Engine GA None Vertex AI Search GA None Virtual Private Cloud (VPC) GA None VM Manager GA None Web Risk GA None Workflows GA None Workforce Identity Federation GA None Workload Identity Federation GA None What's next Release notes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Supported Google Cloud services Access Approval supports the following Google Cloud services: Supported service Launch stage Notes Access Context Manager GA None Access Transparency GA None AlloyDB for PostgreSQL GA None Apigee GA The following Apigee features are not supported by Access Approval: Apigee portal Features in the Preview launch stage Additionally, Apigee Hybrid customers must upgrade to the latest version to get full Access Approval support.

### Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following resource, and paste it in your main.tf file. main.tf variable "parent value" { type = string } variable "email 1" { type = string } variable "email 2" { type = string } resource "google folder" "my folder" { display name = "my-folder" parent = var.parent value parent = "organizations/123456789" } resource "google folder access approval settings" "folder access approval" { folder id = google folder.my folder.folder id notification emails = [ var.email 1 , var.email 2 ] enrolled services { cloud product = "all" } } Enter values for the following variables: email 1 and email 2 : provide the email addresses of users who you want to set as reviewers for the access requests for this project.
- What's next Using Terraform with Google Cloud Using Terraform with Access Approval Getting started with Terraform on Google Cloud Kickstart Terraform on Google Cloud with Cloud Shell Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To enable a user or service account to approve access requests for a project, grant them the Access Approval Approver ( roles/accessapproval.approver ) IAM role. parent value : name of the folder in which you want to create the my folder folder.
- Home Documentation Security Cloud provider access management Access Approval Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- If the field is true, that indicates that there is some configuration issue with the activeKeyVersion configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. preferredRequestExpirationDays integer Set the default access approval request expiration time.
- If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). activeKeyVersion string The asymmetric crypto key version to use for signing approval requests.
- Format is one of: "projects/{project}/accessApprovalSettings" "folders/{folder}/accessApprovalSettings" "organizations/{organization}/accessApprovalSettings" notificationEmails[] string A list of email addresses to which notifications relating to approval requests should be sent.

