---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.400Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Key Access Justifications"
feature_slug: "key-access-justifications"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/cmek"
  - "https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview"
keywords:
  - "key"
  - "access"
  - "justifications"
  - "lets"
  - "you"
  - "view"
  - "the"
  - "reason"
---

# Key Access Justifications

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Key Access Justifications lets you view the reason for each Cloud EKM request and automate approval or denial based on that justification.

## Extended Definition

Key Access Justifications lets you view the reason for each Cloud EKM request and automate approval or denial based on that justification.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- April 12, 2022 Cloud SQL for MySQL Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- Cloud SQL for PostgreSQL Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- Cloud SQL for SQL Server Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- January 31, 2022 Cloud SQL for MySQL Feature The Key Access Justifications (KAJ) feature is now generally available in Cloud SQL.

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key Access Justifications enable you to view the reason for each Cloud EKM request.
- Thus, Key Access Justifications provides extra control over your data by providing a justification for each attempt to decrypt the data.
- To learn more, see the Key Access Justifications overview .
- Customer-managed encryption keys use the following format: projects / [ KMS PROJECT ID ] / locations / [ LOCATION ] / keyRings / [ KEY RING ] / cryptoKeys / [ KEY NAME ] If Cloud SQL is unable to access the key (such as if you disable the key version), Cloud SQL suspends the instance.

### "Data residency overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using IAM permissions, Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- Each time one of your keys is requested to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along with a mechanism for you to approve or deny key access using an automated policy that you set.
- Access Approval lets you require Google employees to get your explicit approval before they access your data or configurations on Google Cloud (for exclusions, see Access Approval exclusions ).
- Cloud SQL also lets you add another layer of encryption to data using customer-managed encryption keys (CMEK) .

