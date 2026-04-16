---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.057Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Regional external proxy Network Load Balancer support"
feature_slug: "access-approval-support-for-regional-external-proxy-network-load-balancer-support"
latest_feature_date: "2024-12-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services"
keywords:
  - "access"
  - "approval"
  - "regional"
  - "external"
  - "proxy"
  - "network"
  - "load"
  - "balancer"
---

# Access Approval support for Regional external proxy Network Load Balancer support

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Regional external proxy Network Load Balancer support is supported by Access Approval.

## Extended Definition

Regional external proxy Network Load Balancer support is supported by Access Approval.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Supporting Pages

### Supported services \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Identity-Aware Proxy GA None Image streaming GA None Infrastructure Manager GA None Integration Connectors GA None Internal passthrough Network Load Balancer GA None Google Kubernetes Engine GA None Looker (Google Cloud core) GA None Looker Studio GA None Memorystore for Redis GA None Memorystore for Redis Cluster GA None Memorystore for Valkey GA None Model Armor GA None Cloud Monitoring GA None NCC Gateway GA None Network Connectivity Center GA None Org Lifecycle API GA None Organization Policy Service GA None Parameter Manager GA None Persistent Disk GA None Pub/Sub GA None regional external Application Load Balancer GA None regional external proxy Network Load Balancer GA None regional internal Application Load Balancer GA None regional internal proxy Network Load Balancer GA None Resource Manager GA None Secret Manager GA None Secure Source Manager GA None Secure Web Proxy GA None Security Command Center GA Access Approval supports the Security Command Center Premium tier.
- Cloud Asset Inventory GA None Cloud Billing Preview None Cloud Build GA None Cloud Composer GA None Cloud Data Fusion GA None Cloud Deploy GA None Cloud DNS GA None Cloud Domains GA None Cloud External Key Manager (Cloud EKM) GA None Cloud Run functions GA None Cloud Healthcare API GA None Cloud Interconnect GA None Cloud Key Management Service (Cloud KMS) GA None Cloud Logging GA None Cloud NAT GA None Cloud OS Login API GA None Cloud Run GA None Cloud Scheduler GA None Cloud SQL GA None Cloud Service Mesh GA None Cloud Storage GA None Cloud Tasks GA None Cloud TPU GA None Cloud Trace GA None Cloud VPN GA None Cloud Workstations GA None Compute Engine GA None Connect Agent GA None Dialogflow CX GA None Database Center GA None Dataflow GA None Dataform GA None Knowledge Catalog GA None Managed Service for Apache Spark GA None Google Distributed Cloud GA None Document AI GA None Eventarc GA None External passthrough Network Load Balancer GA None Filestore GA None Firebase Data Connect GA None Firebase Security Rules GA None Firestore GA None Flow Analyzer GA None Gemini Enterprise GA None GKE Connect GA None GKE Hub GA None GKE Hub API GA None GKE Identity Service GA None Google Cloud Armor GA Access Approval is available for regional Google Cloud Armor security policies.
- App Hub GA None Application Integration GA None Artifact Analysis GA None Artifact Registry GA None Automotive AI Agent GA None Backup for GKE GA None Backup and DR Service GA Workloads that depend on a management console and backup/recovery appliances are not supported by Access Approval.
- Supported Google Cloud services Access Approval supports the following Google Cloud services: Supported service Launch stage Notes Access Context Manager GA None Access Transparency GA None AlloyDB for PostgreSQL GA None Apigee GA The following Apigee features are not supported by Access Approval: Apigee portal Features in the Preview launch stage Additionally, Apigee Hybrid customers must upgrade to the latest version to get full Access Approval support.

### AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 31
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allowed values are listed below (case-sensitive): all GA Access Context Manager Anthos Identity Service AlloyDB for PostgreSQL Apigee Application Integration App Hub Artifact Registry Anthos Service Mesh Access Transparency BigQuery Certificate Authority Service Cloud Bigtable CCAI Assist and Knowledge Cloud Dataflow Cloud Dataproc CEP Security Gateway Compliance Evaluation Service Cloud Firestore Cloud Healthcare API Chronicle Cloud AI Companion Gateway - Titan Google Cloud Armor Cloud Asset Inventory Cloud Asset Search Cloud Deploy Cloud DNS Cloud Latency Cloud Memorystore for Redis CloudNet Control Cloud Riptide Cloud Tasks Cloud Trace Cloud Data Transfer Cloud Composer Integration Connectors Contact Center AI Insights Cloud Pub/Sub Cloud Run Resource Manager Cloud Spanner Database Center Cloud Dataform Cloud Data Fusion Dataplex Dialogflow Customer Experience Edition Cloud DLP Document AI Edge Container Edge Network Cloud EKM Eventarc Firebase Data Connect Firebase Rules App Engine Cloud Build Compute Engine Cloud Functions (2nd Gen) Cloud Filestore Cloud Interconnect Cloud NetApp Volumes Cloud Storage Generative AI App Builder Google Kubernetes Engine Backup for GKE API GKE Connect GKE Hub Hoverboard Cloud HSM Cloud Identity and Access Management Cloud Identity-Aware Proxy Infrastructure Manager Identity Storage Service Key Access Justifications Cloud Key Management Service Cloud Logging Looker (Google Cloud core) Looker Studio Management Hub Model Armor Cloud Monitoring Cloud NAT Connectivity Hub External passthrough Network Load Balancer OIDC One Organization Policy Service Org Lifecycle Persistent Disk Parameter Manager Private Services Access Regional Internal Application Load Balancer Storage Batch Operations Cloud Security Command Center Secure Source Manager Seeker Service Provisioning Speaker ID Secret Manager Cloud SQL Cloud Speech-to-Text Traffic Director Cloud Text-to-Speech USPS Andromeda Vertex AI Virtual Private Cloud (VPC) VPC Access VPC Service Controls Troubleshooter VPC virtnet Cloud Workstations Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. all ga-only appengine.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigtable.googleapis.com container.googleapis.com cloudkms.googleapis.com cloudresourcemanager.googleapis.com cloudsql.googleapis.com compute.googleapis.com dataflow.googleapis.com dataproc.googleapis.com dlp.googleapis.com iam.googleapis.com logging.googleapis.com orgpolicy.googleapis.com pubsub.googleapis.com spanner.googleapis.com secretmanager.googleapis.com speakerid.googleapis.com storage.googleapis.com Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
- JUSTIFICATION BASED APPROVAL ENABLED EXTERNAL JUSTIFICATIONS Customer initiated support access reasons are pre-approved instantly.
- If the field is true, that indicates that there is some configuration issue with the activeKeyVersion configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. preferredRequestExpirationDays integer Set the default access approval request expiration time.
- If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). activeKeyVersion string The asymmetric crypto key version to use for signing approval requests.

### "Python Client for Access Approval \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest)
- Source ID: `site-python-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-access-approval Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-access-approval Next Steps Read the Client Library Documentation for Access Approval to see other available methods on the client.
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 Access Approval : enables controlling access to your organization’s data by Google personnel.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Access Approval Stay organized with collections Save and categorize content based on your preferences.
- Read the Access Approval Product documentation to learn more about the product and see How-to Guides.

