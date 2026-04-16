---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T16:01:25.346Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Organization Policy Service support"
feature_slug: "organization-policy-service-support"
latest_feature_date: "2021-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/updateAccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getAccessApprovalSettings"
keywords:
  - "organization"
  - "policy"
  - "access"
  - "approval"
  - "supports"
---

# Organization Policy Service support

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval supports Organization Policy Service.

## Extended Definition

Access Approval supports Organization Policy Service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/updateAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/updateAccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getAccessApprovalSettings)

## Supporting Pages

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- JSON representation EnrolledService JSON representation EnrollmentLevel RequestScopeMaxWidthPreference CustomerApprovalApprovalPolicy JSON representation JustificationBasedApprovalPolicy Settings on a Project/Folder/Organization related to Access Approval.
- If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). activeKeyVersion string The asymmetric crypto key version to use for signing approval requests.
- Format is one of: "projects/{project}/accessApprovalSettings" "folders/{folder}/accessApprovalSettings" "organizations/{organization}/accessApprovalSettings" notificationEmails[] string A list of email addresses to which notifications relating to approval requests should be sent.

### "Method: organizations.updateAccessApprovalSettings \_|\_ Access Approval\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/updateAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/updateAccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Format is one of: "projects/{project}/accessApprovalSettings" "folders/{folder}/accessApprovalSettings" "organizations/{organization}/accessApprovalSettings" Query parameters Parameters updateMask string ( FieldMask format) The update mask applies to the Access Approval settings .
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.updateAccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- HTTP request PATCH https://accessapproval.googleapis.com/v1/{settings.name=organizations/ /accessApprovalSettings} The URL uses gRPC Transcoding syntax.
- Response body If successful, the response body contains an instance of AccessApprovalSettings .

### "Method: organizations.deleteAccessApprovalSettings \_|\_ Access Approval\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.deleteAccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- HTTP request DELETE https://accessapproval.googleapis.com/v1/{name=organizations/ /accessApprovalSettings} The URL uses gRPC Transcoding syntax.
- To confirm the effective settings, call organizations.getAccessApprovalSettings and verify effective setting is disabled.
- Authorization requires the following IAM permission on the specified resource name : accessapproval.settings.delete Request body The request body must be empty.

### "Method: organizations.getAccessApprovalSettings \_|\_ Access Approval \_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/getAccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.getAccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- Format: "{projects folders organizations}/{id}/accessApprovalSettings" Authorization requires the following IAM permission on the specified resource name : accessapproval.settings.get Request body The request body must be empty.
- HTTP request Path parameters Request body Response body Authorization scopes Gets the Access Approval settings associated with a project, folder, or organization.
- HTTP request GET https://accessapproval.googleapis.com/v1/{name=organizations/ /accessApprovalSettings} The URL uses gRPC Transcoding syntax.

