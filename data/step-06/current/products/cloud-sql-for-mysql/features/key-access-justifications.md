---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.962Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Key Access Justifications"
feature_slug: "key-access-justifications"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/cmek"
  - "https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-cmek"
keywords:
  - "key"
  - "access"
  - "justifications"
  - "sql"
  - "supports"
  - "ekm"
  - "so"
  - "you"
---

# Key Access Justifications

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports Key Access Justifications for Cloud EKM so you can view and act on the reason for each key access request.

## Extended Definition

Cloud SQL supports Key Access Justifications for Cloud EKM so you can view and act on the reason for each key access request.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Thus, Key Access Justifications provides extra control over your data by providing a justification for each attempt to decrypt the data.
- Key Access Justifications You can use Key Access Justifications as part of Cloud EKM.
- Key Access Justifications enable you to view the reason for each Cloud EKM request.
- To learn more, see the Key Access Justifications overview .

### Data residency overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each time one of your keys is requested to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along with a mechanism for you to approve or deny key access using an automated policy that you set.
- Using Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- Key Access Justifications integrate with Cloud KMS and Cloud EKM.
- Access Approval lets you require Google employees to get your explicit approval before they access your data or configurations on Google Cloud (for exclusions, see Access Approval exclusions ).

### "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)
- Source ID: `site-docs-reference-3`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Key Access Justifications (KAJ) as part of Cloud EKM.
- Learn how to add key access justifications to your keys.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2023-06-28T21:19:09.503Z", "operationType": "REENCRYPT", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To re-encrypt your instance or replica with your new key, run the following command: POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt Before using any of the request data, make the following replacements: PROJECT ID : The project ID INSTANCE ID : The instance ID HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2023-06-28T21:22:13.663Z", "operationType": "REENCRYPT", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Automatic re-encryption backups When you re-encrypt a primary instance with a new primary key version, Cloud SQL automatically creates an on-demand backup called the re-encryption backup.

