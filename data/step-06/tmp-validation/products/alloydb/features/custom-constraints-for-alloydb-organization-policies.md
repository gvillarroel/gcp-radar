---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.093Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Custom constraints for AlloyDB organization policies"
feature_slug: "custom-constraints-for-alloydb-organization-policies"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "constraints"
  - "define"
  - "organization"
  - "policies"
  - "custom"
---

# Custom constraints for AlloyDB organization policies

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

Custom constraints for AlloyDB organization policies let you define organization policy constraints for backups, clusters, and instance fields; AlloyDB supports organization policies that use custom constraints.

## Extended Definition

Custom constraints for AlloyDB organization policies let you define organization policy constraints for backups, clusters, and instance fields; AlloyDB supports organization policies that use custom constraints.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- You might also be able to get the required permissions through custom roles or other predefined roles .
- Required roles To get the permissions that you need to complete the tasks in this tutorial, ask your administrator to grant you the following IAM roles on your project: Databases Admin ( roles/iam.databasesAdmin ) Kubernetes Engine Cluster Admin ( roles/container.clusterAdmin ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account Admin( roles/iam.serviceAccountAdmin ) Kubernetes Engine Admin( roles/container.admin ) Artifact Registry Administrator( roles/artifactregistry.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- If no IP range is assigned, click Allocate custom IP range to allocate a new internal IP RANGE NAME and configure the connection .
- New customers also get $300 in free credits to run, test, and deploy workloads.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- You must have one of these IAM roles in the Google Cloud project that you're using: roles/alloydb.admin (the AlloyDB Admin predefined IAM role) roles/owner (the Owner basic IAM role) roles/editor (the Editor basic IAM role) If you don't have any of these roles, contact your Organization Administrator to request access.
- Optional: To encrypt this cluster using a customer-managed encryption key (CMEK) instead of the default Google-managed encryption, provide the following arguments: --kms-key= KEY ID \ --kms-keyring= KEYRING ID \ --kms-location= LOCATION ID \ --kms-project= PROJECT ID Replace the following: KEY ID : the ID of the CMEK key to use.
- If your VPC network contains more than one IP address range that has Considerations when using the C4A Axion-based machine series AlloyDB offers a C4A machine series based on Google Axion, Google's custom Arm-based processor.
- Optional: To encrypt this cluster using a customer-managed encryption key (CMEK) instead of Google-managed encryption, follow these additional steps: Click Advanced encryption options .

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- You must have one of these IAM roles in the Google Cloud project you are using: roles/alloydb.admin (the AlloyDB Admin predefined IAM role) roles/owner (the Owner basic IAM role) roles/editor (the Editor basic IAM role) If you don't have any of these roles, contact your Organization Administrator to request access.
- For details, see the Google Developers Site Policies .
- Optional: Set custom flags to your instance.

