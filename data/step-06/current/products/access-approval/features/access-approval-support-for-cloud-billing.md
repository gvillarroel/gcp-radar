---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.040Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Cloud Billing"
feature_slug: "access-approval-support-for-cloud-billing"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services"
keywords:
  - "access"
  - "approval"
  - "billing"
---

# Access Approval support for Cloud Billing

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Cloud Billing is supported by Access Approval.

## Extended Definition

Cloud Billing is supported by Access Approval.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Supporting Pages

### Supported services \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Asset Inventory GA None Cloud Billing Preview None Cloud Build GA None Cloud Composer GA None Cloud Data Fusion GA None Cloud Deploy GA None Cloud DNS GA None Cloud Domains GA None Cloud External Key Manager (Cloud EKM) GA None Cloud Run functions GA None Cloud Healthcare API GA None Cloud Interconnect GA None Cloud Key Management Service (Cloud KMS) GA None Cloud Logging GA None Cloud NAT GA None Cloud OS Login API GA None Cloud Run GA None Cloud Scheduler GA None Cloud SQL GA None Cloud Service Mesh GA None Cloud Storage GA None Cloud Tasks GA None Cloud TPU GA None Cloud Trace GA None Cloud VPN GA None Cloud Workstations GA None Compute Engine GA None Connect Agent GA None Dialogflow CX GA None Database Center GA None Dataflow GA None Dataform GA None Knowledge Catalog GA None Managed Service for Apache Spark GA None Google Distributed Cloud GA None Document AI GA None Eventarc GA None External passthrough Network Load Balancer GA None Filestore GA None Firebase Data Connect GA None Firebase Security Rules GA None Firestore GA None Flow Analyzer GA None Gemini Enterprise GA None GKE Connect GA None GKE Hub GA None GKE Hub API GA None GKE Identity Service GA None Google Cloud Armor GA Access Approval is available for regional Google Cloud Armor security policies.
- Identity-Aware Proxy GA None Image streaming GA None Infrastructure Manager GA None Integration Connectors GA None Internal passthrough Network Load Balancer GA None Google Kubernetes Engine GA None Looker (Google Cloud core) GA None Looker Studio GA None Memorystore for Redis GA None Memorystore for Redis Cluster GA None Memorystore for Valkey GA None Model Armor GA None Cloud Monitoring GA None NCC Gateway GA None Network Connectivity Center GA None Org Lifecycle API GA None Organization Policy Service GA None Parameter Manager GA None Persistent Disk GA None Pub/Sub GA None regional external Application Load Balancer GA None regional external proxy Network Load Balancer GA None regional internal Application Load Balancer GA None regional internal proxy Network Load Balancer GA None Resource Manager GA None Secret Manager GA None Secure Source Manager GA None Secure Web Proxy GA None Security Command Center GA Access Approval supports the Security Command Center Premium tier.
- Supported Google Cloud services Access Approval supports the following Google Cloud services: Supported service Launch stage Notes Access Context Manager GA None Access Transparency GA None AlloyDB for PostgreSQL GA None Apigee GA The following Apigee features are not supported by Access Approval: Apigee portal Features in the Preview launch stage Additionally, Apigee Hybrid customers must upgrade to the latest version to get full Access Approval support.
- App Hub GA None Application Integration GA None Artifact Analysis GA None Artifact Registry GA None Automotive AI Agent GA None Backup for GKE GA None Backup and DR Service GA Workloads that depend on a management console and backup/recovery appliances are not supported by Access Approval.

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

### Access Approval audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/access-approval/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN WRITE google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Access Approval. google.cloud.accessapproval.v1.AccessApproval The following audit logs are associated with methods belonging to google.cloud.accessapproval.v1.AccessApproval .
- Filter for this method : protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest" UpdateAccessApprovalSettings Method : google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettings Audit log type : Admin activity Permissions : accessapproval.settings.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequest" DeleteAccessApprovalSettings Method : google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettings Audit log type : Admin activity Permissions : accessapproval.settings.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequest" InvalidateApprovalRequest Method : google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequest Audit log type : Admin activity Permissions : accessapproval.requests.invalidate - ADMIN WRITE Method is a long-running or streaming operation : No.

