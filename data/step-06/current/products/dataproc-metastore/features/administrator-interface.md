---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.299Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Administrator interface"
feature_slug: "administrator-interface"
latest_feature_date: "2023-05-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/authentication"
keywords:
  - "administrator"
  - "interface"
  - "the"
  - "provides"
  - "centralized"
  - "tool"
  - "to"
  - "inspect"
---

# Administrator interface

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

The administrator interface provides a centralized tool to inspect and manage metadata and supports altering Hive table properties; The administrator interface provides a centralized tool to inspect and manage the metadata stored in a Dataproc Metastore service.

## Extended Definition

The administrator interface provides a centralized tool to inspect and manage metadata and supports altering Hive table properties; The administrator interface provides a centralized tool to inspect and manage the metadata stored in a Dataproc Metastore service.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)

## Supporting Pages

### Dataproc Metastore administrator interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The administrator interface provides you with a centralized tool to inspect and manage the metadata stored in your Dataproc Metastore service, all without having to connect to a Managed Service for Apache Spark cluster or a Hive instance.
- Required roles To get the permissions that you need to use the Dataproc Metastore administrator interface, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: To query Dataproc Metastore metadata: Metadata query administrator ( roles/metastore.metadataQueryAdmin ) on the user account or service account To alter the resource location of your metadata, including databases, tables and partitions, or move a table to another database: Metadata mutate administrator ( roles/metastore.metadataMutateAdmin ) on the user account or service account Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Dataproc Metastore administrator interface: To query Dataproc Metastore metadata: metastore.services.queryMetadata To alter or move Dataproc Metastore tables: metastore.services.mutateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- As a result, the administrator interface can help you save time and help decrease the amount of Google Cloud resources required to retrieve your data.

### Dataproc Metastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- The administrator interface provides you with a centralized tool to inspect and manage the metadata stored in your Dataproc Metastore service.
- December 05, 2022 v1beta1 Feature Dataproc Metastore administrator interface is available in preview .
- May 08, 2023 v1 Feature Administrator interface is generally available ( GA ).
- February 03, 2021 v1beta1 Feature You can create Dataproc Metastore services in cross-product networks (shared VPC) . v1beta1 Feature New Cloud Monitoring service metric is available: metastore.googleapis.com/service/request count v1beta1 Feature Dataproc Metastore suppports the use of non-RFC 1918 private IP address ranges in metastore services. v1beta1 Feature You can update the description of metadata imports under a Dataproc Metastore service. v1beta1 Fixed Fixed an issue in which a service could get stuck in the UPDATING state. v1beta1 Fixed Fixed an issue where Cloud Storage buckets with single character directories would fail request validation.

### Authenticate to Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.
- Google Cloud CLI When you use the gcloud CLI to access Dataproc Metastore, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- How you authenticate to Dataproc Metastore depends on the interface you use to access the API and the environment where your code is running.
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .

