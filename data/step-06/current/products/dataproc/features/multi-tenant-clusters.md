---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.578Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Multi-tenant clusters"
feature_slug: "multi-tenant-clusters"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/delete-service"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete"
keywords:
  - "multi"
  - "tenant"
  - "clusters"
  - "dataproc"
  - "supports"
  - "let"
  - "multiple"
  - "users"
---

# Multi-tenant clusters

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports multi-tenant clusters that let multiple users run isolated workloads on a shared cluster.

## Extended Definition

Dataproc supports multi-tenant clusters that let multiple users run isolated workloads on a shared cluster.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster)
- [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete)

## Supporting Pages

### "Delete a GKE virtual cluster \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Method: projects.locations.operations.delete \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- HTTP request DELETE https://dataproc.googleapis.com/v1/{name=projects/ /locations/ /operations/ } The URL uses gRPC Transcoding syntax.

### Delete a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Disable deletion-protection To disable deletion-protection on a Dataproc Metastore service, run following gcloud metastore services update command with the --no=deletion-protection option. gcloud metastore services update SERVICE \ --location= LOCATION \ --no-deletion-protection What's next Cloud audit logging Dataproc Metastore IAM and access control Service access Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required roles To get the permission that you need to delete a Dataproc Metastore service, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Click Submit . gcloud CLI To enable deletion-protection on a new Dataproc Metastore service, run the following gcloud metastore services create command. gcloud metastore services update SERVICE \ --location= LOCATION \ --instance-size INSTANCE SIZE \ --deletion-protection Replace the following: SERVICE : The name of the Dataproc Metastore service you're deleting.
- Return to the Dataproc Metastore page, and verify that your deleted service no longer appears in the list. gcloud CLI To delete a service, run the following gcloud metastore services delete command. gcloud metastore services delete SERVICE \ --location= LOCATION Replace the following: SERVICE : The name of the Dataproc Metastore service you're deleting.

