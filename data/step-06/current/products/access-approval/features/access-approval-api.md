---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.088Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval API"
feature_slug: "access-approval-api"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings"
keywords:
  - "access"
  - "approval"
  - "provides"
  - "managing"
  - "settings"
  - "requests"
---

# Access Approval API

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval provides an API for managing approval settings and approval requests; Access Approval provides an API for managing approval settings and approval requests.

## Extended Definition

Access Approval provides an API for managing approval settings and approval requests; Access Approval provides an API for managing approval settings and approval requests.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings)

## Supporting Pages

### "Review and approve access requests using the Google-managed signing key\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Review Default Settings Default settings govern the behavior of Access Approval requests.
- Required roles To get the permissions that you need to set up Access Approval and approve access requests, ask your administrator to grant you the following IAM roles on your project: View and update Access Approval configuration and approve access requests: Access Approval Config Editor ( roles/accessapproval.configEditor ) View Access Approval configuration and approve access requests: Access Approval Approver ( roles/accessapproval.approver ) View Access Approval configuration and access requests and download log reports: Access Approval Viewer ( roles/accessapproval.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add yourself as an approver for Access Approval requests and configure notifications To add yourself as an approver so you can review and approve access requests, do the following: Go to the Access Approval page in the Google Cloud console.
- Example Defaults: Disabled: product.googleapis.com/project/12345/ Enabled: product.googleapis.com/project/12345/instances/abcde Approval Request Default Expiration Days : Set the default expiration for Access Approval requests.

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Format is one of: "projects/{project}/accessApprovalSettings" "folders/{folder}/accessApprovalSettings" "organizations/{organization}/accessApprovalSettings" notificationEmails[] string A list of email addresses to which notifications relating to approval requests should be sent.
- JSON representation EnrolledService JSON representation EnrollmentLevel RequestScopeMaxWidthPreference CustomerApprovalApprovalPolicy JSON representation JustificationBasedApprovalPolicy Settings on a Project/Folder/Organization related to Access Approval.
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- JSON representation { "name" : string , "notificationEmails" : [ string ] , "enrolledServices" : [ { object ( EnrolledService ) } ] , "enrolledAncestor" : boolean , "activeKeyVersion" : string , "ancestorHasActiveKeyVersion" : boolean , "invalidKeyVersion" : boolean , "preferredRequestExpirationDays" : integer , "preferNoBroadApprovalRequests" : boolean , "notificationPubsubTopic" : string , "requireCustomerVisibleJustification" : boolean , "requestScopeMaxWidthPreference" : enum ( RequestScopeMaxWidthPreference ) , "approvalPolicy" : { object ( CustomerApprovalApprovalPolicy ) } , "effectiveApprovalPolicy" : { object ( CustomerApprovalApprovalPolicy ) } } Fields name string The resource name of the settings.

### "Class AccessApprovalSettings (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings)
- Source ID: `site-python-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Format is one of: - "projects/{project}/accessApprovalSettings" - "folders/{folder}/accessApprovalSettings" - "organizations/{organization}/accessApprovalSettings". notification emails MutableSequence[str] A list of email addresses to which notifications relating to approval requests should be sent.
- If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). active key version str The asymmetric crypto key version to use for signing approval requests.
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 AccessApprovalSettings ( mapping = None , , ignore unknown fields = False , kwargs ) Settings on a Project/Folder/Organization related to Access Approval.
- Home Documentation Developer tools Python Client libraries Send feedback Class AccessApprovalSettings (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

