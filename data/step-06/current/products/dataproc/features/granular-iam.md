---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.105Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Granular IAM"
feature_slug: "granular-iam"
latest_feature_date: "2018-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam"
keywords:
  - "granular"
  - "iam"
  - "lets"
  - "users"
  - "assign"
  - "roles"
  - "and"
  - "permissions"
---

# Granular IAM

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Granular IAM lets users assign IAM roles and permissions on a per-cluster basis; Granular IAM provides job, operation, and workflow template permissions for Dataproc resources.

## Extended Definition

Granular IAM lets users assign IAM roles and permissions on a per-cluster basis; Granular IAM provides job, operation, and workflow template permissions for Dataproc resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- September 27, 2017 Feature Cloud Dataproc Granular IAM (Beta) – Now you can set IAM roles and their corresponding permissions on a per-cluster basis.
- March 22, 2018 Feature Granular IAM permissions are now available for Cloud Dataproc jobs, operations, and workflow templates in Beta.
- Cloud Dataproc IAM permissions allow users to perform specific actions on Cloud Dataproc clusters, jobs, and operations.
- This feature allows you to set IAM roles and their corresponding permissions on a per-cluster basis.

### Dataproc Metastore: Access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access control options for users To give users the ability to create and manage your Dataproc Metastore resources, you can add users as team members to your project or to specific resources and grant them permissions using IAM roles .
- Google Cloud offers Identity and Access Management (IAM) , which lets you give more granular access to specific Google Cloud resources and prevents unwanted access to other resources.
- For example, for a given resource, such as a project, you can assign the roles/metastore.admin role to a Google Account and that account can control Dataproc Metastore resources in the project, but cannot manage other resources.
- To see a list of capabilities of each Dataproc Metastore role and API methods that a specific role grants permission to, review Dataproc Metastore IAM roles .

### "Google Kubernetes Engine Identity and Access Management roles and identity\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you create the Managed Service for Apache Spark on GKE cluster, add the following properties for Managed Service for Apache Spark to use your GSA instead of the default GSA: --properties "dataproc:dataproc.gke.agent.google-service-account=${DPGKE GSA}" \ --properties "dataproc:dataproc.gke.spark.driver.google-service-account=${DPGKE GSA}" \ --properties "dataproc:dataproc.gke.spark.executor.google-service-account=${DPGKE GSA}" \ Run the following commands to assign necessary Workload Identity permissions to the service accounts: Assign your GSA the dataproc.worker role to allow it to act as agent: gcloud projects add-iam-policy-binding \ --role=roles/dataproc.worker \ --member="serviceAccount:${DPGKE GSA}" \ "${PROJECT}" Assign the agent KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/agent]" \ "${DPGKE GSA}" Grant the spark-driver KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/spark-driver]" \ "${DPGKE GSA}" Grant the spark-executor KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/spark-executor]" \ "${DPGKE GSA}" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: The following command assigns roles to the default Managed Service for Apache Spark VM service account to allow Spark workloads running on Managed Service for Apache Spark on GKE cluster VMs to access Cloud Storage buckets and BigQuery data sets in the project. gcloud projects add-iam-policy-binding \ --role=roles/storage.objectAdmin \ --role=roles/bigquery.dataEditor \ --member=" project-number -compute@developer.gserviceaccount.com" \ "${PROJECT}" Custom IAM configuration Managed Service for Apache Spark on GKE uses GKE workload identity to link the default Managed Service for Apache Spark VM service account (data plane identity) to the three GKE service accounts (KSAs) .
- Assign roles Grant permissions to the Managed Service for Apache Spark VM service account to allow the spark-driver and spark-executor to access project resources, data sources, data sinks, and any other services required by your workload.
- To create and use a different Google service account (GSA) to link to the KSAs: Create the GSA (see Creating and managing service accounts ). gcloud CLI example: gcloud iam service-accounts create "dataproc-${USER}" \ --description "Used by Managed Service for Apache Spark on GKE workloads." Notes: The example sets the GSA name as "dataproc-${USER}", but you can use a different name.

