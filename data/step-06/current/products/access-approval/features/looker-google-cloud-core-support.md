---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T16:01:25.261Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Looker (Google Cloud core) support"
feature_slug: "looker-google-cloud-core-support"
latest_feature_date: "2024-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager"
keywords:
  - "looker"
  - "core"
  - "access"
  - "approval"
  - "supports"
---

# Looker (Google Cloud core) support

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval supports Looker (Google Cloud core); Access Approval supports Looker (Google Cloud core).

## Extended Definition

Access Approval supports Looker (Google Cloud core); Access Approval supports Looker (Google Cloud core).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager)

## Supporting Pages

### "Class AccessApprovalAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- Source ID: `site-python-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Format: "{projects folders organizations}/{id}/accessApprovalSettings" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample get access approval service account(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample delete access approval settings(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample update access approval settings(): Create a client client = accessapproval v1 .

### "Class AccessApprovalClient (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)
- Source ID: `site-python-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Format: "{projects folders organizations}/{id}/accessApprovalSettings" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 def sample get access approval service account(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 def sample delete access approval settings(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 def sample update access approval settings(): Create a client client = accessapproval v1 .

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- If the field is true, that indicates that there is some configuration issue with the activeKeyVersion configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. preferredRequestExpirationDays integer Set the default access approval request expiration time.
- If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). activeKeyVersion string The asymmetric crypto key version to use for signing approval requests.
- Format is one of: "projects/{project}/accessApprovalSettings" "folders/{folder}/accessApprovalSettings" "organizations/{organization}/accessApprovalSettings" notificationEmails[] string A list of email addresses to which notifications relating to approval requests should be sent.

### "Class ListApprovalRequestsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.accessapproval v1.types.ListApprovalRequestsMessage The initial request object. response google.cloud.accessapproval v1.types.ListApprovalRequestsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListApprovalRequestsResponse ], ], request : google . cloud . accessapproval v1 . types . accessapproval .
- ListApprovalRequestsResponse ], ], request : google . cloud . accessapproval v1 . types . accessapproval .
- ListApprovalRequestsMessage , response : google . cloud . accessapproval v1 . types . accessapproval .

