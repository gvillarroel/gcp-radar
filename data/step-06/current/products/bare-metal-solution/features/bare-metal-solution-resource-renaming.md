---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.417Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution resource renaming"
feature_slug: "bare-metal-solution-resource-renaming"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/order-bms-resources"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
  - "https://docs.cloud.google.com/iam/docs/full-resource-names"
keywords:
  - "renaming"
  - "resource"
  - "users"
---

# Bare Metal Solution resource renaming

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Users can now rename Bare Metal Solution servers, networks, storage volumes, and NFS shares.

## Extended Definition

Users can now rename Bare Metal Solution servers, networks, storage volumes, and NFS shares.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)

## Supporting Pages

### Order Bare Metal Solution resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- You can use procurements to order the following Bare Metal Solution resources: Servers ( available server configurations ) Storage ( available storage choices ) Partner Interconnect bandwidth To procure any other Bare Metal Solution resource, contact Google Cloud sales .
- As your resources are procured, you can provision them through the following options and start using them: Google Cloud console intake form Create a network UI Create a storage volume UI Create an NFS volume UI What's next Deploy your Bare Metal Solution environment .
- After you've executed a simplified, one-time Bare Metal Solution Order Form, you can order your Bare Metal Solution resources online by creating procurements through the Google Cloud console.
- The following pages show you the pods that contain your existing resources: Servers Networks Volumes NFS Shares If you're unsure about which pod to select, contact Google Cloud Sales .

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Figure 5: VPC peering and the Bare Metal Solution environment As shown in Figure 6 , use a shared VPC architecture to allow resources from different projects to access the Bare Metal Solution servers.
- If you need to allow or deny access to specific resources, use firewall policies to restrict the default behavior that permits access to all Bare Metal Solution resources.
- As shown in Figure 5 , use VPC peering to enable resources running in a different VPC in the same project or a different project to access the Bare Metal Solution servers.
- With CMU, you can leverage your existing Active Directory infrastructure to centralize the management of database users and authorization across multiple Oracle databases.

### "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- Source ID: `site-iam-reference`
- Final score: 53
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource type Full resource name format BigQuery datasets //bigquery.googleapis.com/projects/ PROJECT ID /datasets/ DATASET ID Cloud Billing accounts //cloudbilling.googleapis.com/billingAccounts/ BILLING ACCOUNT ID Cloud Run services //run.googleapis.com/projects/ PROJECT ID /locations/ LOCATION ID /services/ SERVICE ID Spanner instances //spanner.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud SQL instances //sqladmin.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud Storage buckets 1 //storage.googleapis.com/projects/ /buckets/ BUCKET ID Compute Engine instances //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE ID Compute Engine networks //compute.googleapis.com/projects/ PROJECT ID /global/networks/ NETWORK Compute Engine subnetworks //compute.googleapis.com/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK Google Kubernetes Engine clusters //container.googleapis.com/projects/ PROJECT ID /clusters/ CLUSTER ID IAM service accounts //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL IAM service account keys //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL /keys/ KEY ID Identity-Aware Proxy App Engine app service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/appengine- PROJECT ID /services/ APP SERVICE ID Identity-Aware Proxy Compute Engine backend service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/compute/services/ BACKEND SERVICE ID OR NAME Pub/Sub topics //pubsub.googleapis.com/projects/ PROJECT ID /topics/ TOPIC ID Resource Manager organizations //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION NUMBER Resource Manager folders //cloudresourcemanager.googleapis.com/folders/ FOLDER NUMBER Resource Manager projects //cloudresourcemanager.googleapis.com/projects/ PROJECT ID 1 The format shown here is compatible with IAM.
- Some Identity and Access Management (IAM) features, such as troubleshooting access issues and viewing the grantable roles on a resource , require you to provide a full resource name .
- Home Documentation Security IAM Reference Send feedback Full resource names Stay organized with collections Save and categorize content based on your preferences.
- To learn more about how full resource names are formatted, see the resource names section of the API design guide.

