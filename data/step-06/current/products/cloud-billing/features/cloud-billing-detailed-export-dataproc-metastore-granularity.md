---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.565Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing detailed export Dataproc Metastore granularity"
feature_slug: "cloud-billing-detailed-export-dataproc-metastore-granularity"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/iam/docs/full-resource-names"
  - "https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities"
  - "https://docs.cloud.google.com/iam/docs/roles-overview"
keywords:
  - "billing"
  - "detailed"
  - "export"
  - "dataproc"
  - "metastore"
  - "granularity"
  - "now"
  - "supports"
---

# Cloud Billing detailed export Dataproc Metastore granularity

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing detailed export now supports granular Dataproc Metastore cost data and allows filtering by resource.name or resource.global_name.

## Extended Definition

Cloud Billing detailed export now supports granular Dataproc Metastore cost data and allows filtering by resource.name or resource.global_name.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)

## Supporting Pages

### "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource type Full resource name format BigQuery datasets //bigquery.googleapis.com/projects/ PROJECT ID /datasets/ DATASET ID Cloud Billing accounts //cloudbilling.googleapis.com/billingAccounts/ BILLING ACCOUNT ID Cloud Run services //run.googleapis.com/projects/ PROJECT ID /locations/ LOCATION ID /services/ SERVICE ID Spanner instances //spanner.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud SQL instances //sqladmin.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud Storage buckets 1 //storage.googleapis.com/projects/ /buckets/ BUCKET ID Compute Engine instances //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE ID Compute Engine networks //compute.googleapis.com/projects/ PROJECT ID /global/networks/ NETWORK Compute Engine subnetworks //compute.googleapis.com/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK Google Kubernetes Engine clusters //container.googleapis.com/projects/ PROJECT ID /clusters/ CLUSTER ID IAM service accounts //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL IAM service account keys //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL /keys/ KEY ID Identity-Aware Proxy App Engine app service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/appengine- PROJECT ID /services/ APP SERVICE ID Identity-Aware Proxy Compute Engine backend service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/compute/services/ BACKEND SERVICE ID OR NAME Pub/Sub topics //pubsub.googleapis.com/projects/ PROJECT ID /topics/ TOPIC ID Resource Manager organizations //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION NUMBER Resource Manager folders //cloudresourcemanager.googleapis.com/folders/ FOLDER NUMBER Resource Manager projects //cloudresourcemanager.googleapis.com/projects/ PROJECT ID 1 The format shown here is compatible with IAM.

### "Resource types with built-in identities \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- Source ID: `site-iam-reference`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- Source ID: `site-iam-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- For a list of permissions in the Writer role, see the role details in the Google Cloud console: Go to Writer role Admin ( roles/admin ) All of the permissions in the Writer role, plus permissions for actions like the following: Completing sensitive tasks, like managing tag bindings for Compute Engine resources Managing roles and permissions for a project and all resources within the project Setting up billing for a project The Admin role doesn't contain all permissions for all Google Cloud resources.
- For a list of permissions in the Editor role, see the role details in the Google Cloud console: Go to Editor role Owner ( roles/owner ) All Editor permissions, plus permissions for actions like the following: Completing sensitive tasks, like managing tag bindings for Compute Engine resources Managing roles and permissions for a project and all resources within the project Setting up billing for a project The Owner role doesn't contain all permissions for all Google Cloud resources.
- For example, it doesn't contain permissions to modify your Cloud Billing payment information or create IAM deny policies.
- For example, it doesn't contain permissions to modify your Cloud Billing payment information or create IAM deny policies.

