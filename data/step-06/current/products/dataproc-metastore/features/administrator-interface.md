---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.720Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Administrator interface"
feature_slug: "administrator-interface"
latest_feature_date: "2023-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/authentication"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequestOrBuilder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.BackendMetastoreOrBuilder"
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
Coverage: MEDIUM

## Step 02 Summary

The administrator interface provides a centralized tool to inspect and manage metadata and supports altering Hive table properties; The administrator interface provides a centralized tool to inspect and manage the metadata stored in a Dataproc Metastore service.

## Extended Definition

The administrator interface provides a centralized tool to inspect and manage metadata and supports altering Hive table properties; The administrator interface provides a centralized tool to inspect and manage the metadata stored in a Dataproc Metastore service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequestOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequestOrBuilder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.BackendMetastoreOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.BackendMetastoreOrBuilder)

## Supporting Pages

### Dataproc Metastore administrator interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- Source ID: `site-iam-reference`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The administrator interface provides you with a centralized tool to inspect and manage the metadata stored in your Dataproc Metastore service, all without having to connect to a Managed Service for Apache Spark cluster or a Hive instance.
- Required roles To get the permissions that you need to use the Dataproc Metastore administrator interface, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: To query Dataproc Metastore metadata: Metadata query administrator ( roles/metastore.metadataQueryAdmin ) on the user account or service account To alter the resource location of your metadata, including databases, tables and partitions, or move a table to another database: Metadata mutate administrator ( roles/metastore.metadataMutateAdmin ) on the user account or service account Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Dataproc Metastore administrator interface: To query Dataproc Metastore metadata: metastore.services.queryMetadata To alter or move Dataproc Metastore tables: metastore.services.mutateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- As a result, the administrator interface can help you save time and help decrease the amount of Google Cloud resources required to retrieve your data.

### Authenticate to Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.
- Google Cloud CLI When you use the gcloud CLI to access Dataproc Metastore, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- How you authenticate to Dataproc Metastore depends on the interface you use to access the API and the environment where your code is running.
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .

### "Interface AlterMetadataResourceLocationRequestOrBuilder (2.89.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequestOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AlterMetadataResourceLocationRequestOrBuilder)
- Source ID: `site-java-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Interface AlterMetadataResourceLocationRequestOrBuilder (2.89.0) Stay organized with collections Save and categorize content based on your preferences.
- 2.89.0 (latest) 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.4 2.3.0 2.2.0 2.1.9 public interface AlterMetadataResourceLocationRequestOrBuilder extends MessageOrBuilder Implements MessageOrBuilder Methods getLocationUri() public abstract String getLocationUri () Required.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- The relative resource name of the metastore service to mutate metadata, in the following format: projects/{project id}/locations/{location id}/services/{service id} . string service = 1 [(.google.api.field behavior) = REQUIRED, (.google.api.resource reference) = { ... } Returns Type Description String The service. getServiceBytes() public abstract ByteString getServiceBytes () Required.

### "Interface BackendMetastoreOrBuilder (2.89.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.BackendMetastoreOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.BackendMetastoreOrBuilder)
- Source ID: `site-java-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Interface BackendMetastoreOrBuilder (2.89.0) Stay organized with collections Save and categorize content based on your preferences.
- 2.89.0 (latest) 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.4 2.3.0 2.2.0 2.1.9 public interface BackendMetastoreOrBuilder extends MessageOrBuilder Implements MessageOrBuilder Methods getMetastoreType() public abstract BackendMetastore .
- MetastoreType getMetastoreType () The type of the backend metastore. .google.cloud.metastore.v1.BackendMetastore.MetastoreType metastore type = 2; Returns Type Description BackendMetastore.MetastoreType The metastoreType. getMetastoreTypeValue() public abstract int getMetastoreTypeValue () The type of the backend metastore. .google.cloud.metastore.v1.BackendMetastore.MetastoreType metastore type = 2; Returns Type Description int The enum numeric value on the wire for metastoreType. getName() public abstract String getName () The relative resource name of the metastore that is being federated.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

