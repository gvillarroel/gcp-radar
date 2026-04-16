---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T16:01:25.247Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Security Command Center Premium tier support"
feature_slug: "security-command-center-premium-tier-support"
latest_feature_date: "2025-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient"
keywords:
  - "security"
  - "command"
  - "center"
  - "premium"
  - "tier"
  - "access"
  - "approval"
  - "supports"
---

# Security Command Center Premium tier support

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval supports Security Command Center Premium tier.

## Extended Definition

Access Approval supports Security Command Center Premium tier.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)

## Supporting Pages

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback AccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- If the field is true, that indicates that there is some configuration issue with the activeKeyVersion configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. preferredRequestExpirationDays integer Set the default access approval request expiration time.
- If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). activeKeyVersion string The asymmetric crypto key version to use for signing approval requests.

### "REST Resource: folders.approvalRequests \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback REST Resource: folders.approvalRequests Stay organized with collections Save and categorize content based on your preferences.
- The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification. requestedAugmentedInfo object ( AugmentedInfo ) This field contains the augmented information of the request. requestedResourceProperties object ( ResourceProperties ) Properties related to the resource represented by requestedResourceName. requestedReason object ( AccessReason ) The access reason for which approval is being requested. requestedLocations object ( AccessLocations ) The locations for which approval is being requested. requestTime string ( Timestamp format) The time at which approval was requested.
- Resource: ApprovalRequest JSON representation AugmentedInfo JSON representation ResourceProperties JSON representation AccessReason JSON representation Type AccessLocations JSON representation ApproveDecision JSON representation SignatureInfo JSON representation CryptoKeyVersionAlgorithm DismissDecision JSON representation Methods Resource: ApprovalRequest A request for the customer to approve access to a resource.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . implicit boolean This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).

### Access control with IAM \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save . gcloud Run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member='user: EMAIL ID ' \ --role='roles/accessapproval.invalidator' Replace the following: ORGANIZATION ID : The organization ID.
- Click Save . gcloud Run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member='user: EMAIL ID ' \ --role='roles/accessapproval.approver' Replace the following: ORGANIZATION ID : The organization ID.
- Click Save . gcloud Run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member='user: EMAIL ID ' \ --role='roles/accessapproval.approver' Replace the following: ORGANIZATION ID : The organization ID.
- Click Save . gcloud Run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member='user: EMAIL ID ' \ --role='roles/accessapproval.viewer' Replace the following: ORGANIZATION ID : The organization ID.

### "Class AccessApprovalAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- Source ID: `site-python-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.accessapproval v1.types.ApprovalRequest A request for the customer to approve access to a resource. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. delete access approval settings delete access approval settings ( request : typing .
- Exceptions Type Description google.auth.exceptions.MutualTlsChannelError If mutual TLS transport creation failed for any reason. access approval service account path access approval service account path ( project : str ) - > str Returns a fully-qualified access approval service account string. access approval settings path access approval settings path ( project : str ) - > str Returns a fully-qualified access approval settings string. approval request path approval request path ( project : str , approval request : str ) - > str Returns a fully-qualified approval request string. approve approval request approve approval request ( request : typing .
- Format: "{projects folders organizations}/{id}/accessApprovalSettings" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It defines the following resource model: The API has a collection of ApprovalRequest resources, named approvalRequests/{approval request} The API has top-level settings per Project/Folder/Organization, named accessApprovalSettings The service also periodically emails a list of recipients, defined at the Project/Folder/Organization level in the accessApprovalSettings, when there is a pending ApprovalRequest for them to act on.

