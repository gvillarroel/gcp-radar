---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.125Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Identity and Access Management support"
feature_slug: "identity-and-access-management-support"
latest_feature_date: "2016-09-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient"
keywords:
  - "identity"
  - "and"
  - "access"
  - "management"
  - "lets"
  - "users"
  - "control"
  - "permissions"
---

# Identity and Access Management support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Identity and Access Management support lets users control permissions for Dataproc clusters, jobs, and operations with IAM.

## Extended Definition

Identity and Access Management support lets users control permissions for Dataproc clusters, jobs, and operations with IAM.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)

## Supporting Pages

### Dataproc Metastore: Access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control](https://docs.cloud.google.com/dataproc-metastore/docs/iam-and-access-control)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access control options for users To give users the ability to create and manage your Dataproc Metastore resources, you can add users as team members to your project or to specific resources and grant them permissions using IAM roles .
- Google Cloud offers Identity and Access Management (IAM) , which lets you give more granular access to specific Google Cloud resources and prevents unwanted access to other resources.
- This page explains the ways you can add new users to your project and how to set access control for your Dataproc Metastore resources.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Dataproc Metastore: Access control with IAM Stay organized with collections Save and categorize content based on your preferences.

### "Google Kubernetes Engine Identity and Access Management roles and identity\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Google Kubernetes Engine Identity and Access Management roles and identity Stay organized with collections Save and categorize content based on your preferences.
- When you create the Managed Service for Apache Spark on GKE cluster, add the following properties for Managed Service for Apache Spark to use your GSA instead of the default GSA: --properties "dataproc:dataproc.gke.agent.google-service-account=${DPGKE GSA}" \ --properties "dataproc:dataproc.gke.spark.driver.google-service-account=${DPGKE GSA}" \ --properties "dataproc:dataproc.gke.spark.executor.google-service-account=${DPGKE GSA}" \ Run the following commands to assign necessary Workload Identity permissions to the service accounts: Assign your GSA the dataproc.worker role to allow it to act as agent: gcloud projects add-iam-policy-binding \ --role=roles/dataproc.worker \ --member="serviceAccount:${DPGKE GSA}" \ "${PROJECT}" Assign the agent KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/agent]" \ "${DPGKE GSA}" Grant the spark-driver KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/spark-driver]" \ "${DPGKE GSA}" Grant the spark-executor KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/spark-executor]" \ "${DPGKE GSA}" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: The following command assigns roles to the default Managed Service for Apache Spark VM service account to allow Spark workloads running on Managed Service for Apache Spark on GKE cluster VMs to access Cloud Storage buckets and BigQuery data sets in the project. gcloud projects add-iam-policy-binding \ --role=roles/storage.objectAdmin \ --role=roles/bigquery.dataEditor \ --member=" project-number -compute@developer.gserviceaccount.com" \ "${PROJECT}" Custom IAM configuration Managed Service for Apache Spark on GKE uses GKE workload identity to link the default Managed Service for Apache Spark VM service account (data plane identity) to the three GKE service accounts (KSAs) .
- Assign roles Grant permissions to the Managed Service for Apache Spark VM service account to allow the spark-driver and spark-executor to access project resources, data sources, data sinks, and any other services required by your workload.

### "Class BatchControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description .policy pb2.Policy Defines an Identity and Access Management (IAM) policy.
- Returns Type Description .policy pb2.Policy Defines an Identity and Access Management (IAM) policy.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .
- TestIamPermissionsResponse Tests the specified IAM permissions against the IAM access control policy for a function.

