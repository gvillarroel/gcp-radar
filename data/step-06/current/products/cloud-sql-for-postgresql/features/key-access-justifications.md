---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.805Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Key Access Justifications"
feature_slug: "key-access-justifications"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/cmek"
  - "https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-cmek"
keywords:
  - "justifications"
  - "reason"
  - "each"
  - "view"
  - "access"
  - "lets"
---

# Key Access Justifications

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Key Access Justifications lets you view the reason for each Cloud EKM request and automate approval or denial based on that justification.

## Extended Definition

Key Access Justifications lets you view the reason for each Cloud EKM request and automate approval or denial based on that justification.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key Access Justifications enable you to view the reason for each Cloud EKM request.
- Thus, Key Access Justifications provides extra control over your data by providing a justification for each attempt to decrypt the data.
- To learn more, see the Key Access Justifications overview .
- Using Cloud KMS also lets you track key usage , view audit logs, and control key lifecycles.

### "Data residency overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each time one of your keys is requested to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along with a mechanism for you to approve or deny key access using an automated policy that you set.
- Access Approval lets you require Google employees to get your explicit approval before they access your data or configurations on Google Cloud (for exclusions, see Access Approval exclusions ).
- Using IAM permissions, Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- The audit logs include the office location of the administrator and the reason for the access.

### "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)
- Source ID: `site-iam-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- KAJ enables you to view the reason for each Cloud EKM request.
- Common reasons for failure include a missing Cloud KMS key version, a disabled or destroyed Cloud KMS key version, insufficient IAM permissions to access the Cloud KMS key version, or the Cloud KMS key version is in a different region than the Cloud SQL instance.
- You can use Key Access Justifications (KAJ) as part of Cloud EKM.
- Learn how to add key access justifications to your keys.

