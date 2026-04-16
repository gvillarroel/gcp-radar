---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T16:01:25.242Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Google Cloud NetApp Volumes"
feature_slug: "google-cloud-netapp-volumes"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging"
keywords:
  - "netapp"
  - "volumes"
  - "is"
  - "available"
  - "for"
  - "use"
  - "in"
  - "access"
---

# Google Cloud NetApp Volumes

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Google Cloud NetApp Volumes is available for use in Access Approval.

## Extended Definition

Google Cloud NetApp Volumes is available for use in Access Approval.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)

## Supporting Pages

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). activeKeyVersion string The asymmetric crypto key version to use for signing approval requests.
- More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services enrollmentLevel enum ( EnrollmentLevel ) The enrollment level of the service.
- We recommend setting this value to 30 days. preferNoBroadApprovalRequests boolean This field is used to set a preference for granularity of an access approval request.

### Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following resource, and paste it in your main.tf file. main.tf variable "parent value" { type = string } variable "email 1" { type = string } variable "email 2" { type = string } resource "google folder" "my folder" { display name = "my-folder" parent = var.parent value parent = "organizations/123456789" } resource "google folder access approval settings" "folder access approval" { folder id = google folder.my folder.folder id notification emails = [ var.email 1 , var.email 2 ] enrolled services { cloud product = "all" } } Enter values for the following variables: email 1 and email 2 : provide the email addresses of users who you want to set as reviewers for the access requests for this project.
- What's next Using Terraform with Google Cloud Using Terraform with Access Approval Getting started with Terraform on Google Cloud Kickstart Terraform on Google Cloud with Cloud Shell Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To enable a user or service account to approve access requests for a project, grant them the Access Approval Approver ( roles/accessapproval.approver ) IAM role. parent value : name of the folder in which you want to create the my folder folder.
- Enabling Access Approval using Terraform Terraform is an open-source infrastructure-as-code software tool that lets you manage your Access Approval requests.

### "Review and approve access requests using a custom signing key \_|\_ Access\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Assured Workloads Cloud provider access management Access Approval Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Optional) Configure Access Approval with a custom signing key This document shows how to set up Access Approval using the Google Cloud console to add an optional custom signing key for Access Approval requests.
- Get the email address of the service account The email address for the service account is of the following form: service- PROJECT NUMBER @gcp-sa-accessapproval.iam.gserviceaccount.com Replace PROJECT NUMBER with the project number.
- To use a custom signing key, you must grant the Cloud KMS CryptoKey Signer/Verifier ( roles/cloudkms.signerVerifier ) IAM role to the Access Approval service account for your project.
- For example, the email address is service-p123456789@gcp-sa-accessapproval.iam.gserviceaccount.com for a service account in a project whose project number is 123456789 .

### Access Approval audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Access Approval audit logs use the service name accessapproval.googleapis.com .
- Permission type Methods ADMIN WRITE google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Access Approval. google.cloud.accessapproval.v1.AccessApproval The following audit logs are associated with methods belonging to google.cloud.accessapproval.v1.AccessApproval .
- Filter for this method : protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest" UpdateAccessApprovalSettings Method : google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings Audit log type : Admin activity Permissions : accessapproval.settings.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest" DeleteAccessApprovalSettings Method : google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings Audit log type : Admin activity Permissions : accessapproval.settings.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

