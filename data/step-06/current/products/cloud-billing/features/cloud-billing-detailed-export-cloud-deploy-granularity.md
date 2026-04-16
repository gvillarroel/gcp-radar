---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.562Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing detailed export Cloud Deploy granularity"
feature_slug: "cloud-billing-detailed-export-cloud-deploy-granularity"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/iam/docs/full-resource-names"
  - "https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities"
  - "https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary"
keywords:
  - "billing"
  - "detailed"
  - "export"
  - "deploy"
  - "granularity"
  - "now"
  - "supports"
  - "granular"
---

# Cloud Billing detailed export Cloud Deploy granularity

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing detailed export now supports granular Cloud Deploy cost data, with usage viewable and filterable using resource.name or resource.global_name.

## Extended Definition

Cloud Billing detailed export now supports granular Cloud Deploy cost data, with usage viewable and filterable using resource.name or resource.global_name.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary)

## Supporting Pages

### "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- Source ID: `site-iam-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource type Full resource name format BigQuery datasets //bigquery.googleapis.com/projects/ PROJECT ID /datasets/ DATASET ID Cloud Billing accounts //cloudbilling.googleapis.com/billingAccounts/ BILLING ACCOUNT ID Cloud Run services //run.googleapis.com/projects/ PROJECT ID /locations/ LOCATION ID /services/ SERVICE ID Spanner instances //spanner.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud SQL instances //sqladmin.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud Storage buckets 1 //storage.googleapis.com/projects/ /buckets/ BUCKET ID Compute Engine instances //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE ID Compute Engine networks //compute.googleapis.com/projects/ PROJECT ID /global/networks/ NETWORK Compute Engine subnetworks //compute.googleapis.com/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK Google Kubernetes Engine clusters //container.googleapis.com/projects/ PROJECT ID /clusters/ CLUSTER ID IAM service accounts //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL IAM service account keys //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL /keys/ KEY ID Identity-Aware Proxy App Engine app service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/appengine- PROJECT ID /services/ APP SERVICE ID Identity-Aware Proxy Compute Engine backend service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/compute/services/ BACKEND SERVICE ID OR NAME Pub/Sub topics //pubsub.googleapis.com/projects/ PROJECT ID /topics/ TOPIC ID Resource Manager organizations //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION NUMBER Resource Manager folders //cloudresourcemanager.googleapis.com/folders/ FOLDER NUMBER Resource Manager projects //cloudresourcemanager.googleapis.com/projects/ PROJECT ID 1 The format shown here is compatible with IAM.

### "Resource types with built-in identities \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Analyze your AI spend with the AI Cost Summary Agent \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permissions required to use the AI Cost Summary Agent To use the AI Cost Summary widget, you need a role that includes the following permissions on the Cloud Billing account: billing.anomalies.list billing.billingAccountPrices.list billing.billingAccountServices.list billing.billingAccountSkus.list To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM role on your Cloud Billing account: Billing Account Viewer Billing Account Administrator Analyze your AI spend The AI Cost Summary Agent is presented as a widget on the Billing Overview page for your Cloud Billing account.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Analyze your AI spend with the AI Cost Summary Agent Stay organized with collections Save and categorize content based on your preferences.
- To use the AI Cost Summary Agent, complete the following steps: In the Google Cloud console, go to the Billing Overview page for your Cloud Billing account.
- Go to your Cloud Billing account At the prompt, choose the Cloud Billing account for which you'd like to analyze your AI spend.

