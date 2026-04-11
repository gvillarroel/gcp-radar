---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.899Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Key Access Justifications"
feature_slug: "key-access-justifications"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
keywords:
  - "key"
  - "access"
  - "justifications"
  - "for"
  - "ekm"
  - "lets"
  - "users"
  - "view"
---

# Key Access Justifications

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Key Access Justifications for Cloud EKM lets users view the reason for each key access request and automatically approve or deny requests based on that justification.

## Extended Definition

Key Access Justifications for Cloud EKM lets users view the reason for each key access request and automatically approve or deny requests based on that justification.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)

## Supporting Pages

### "Data residency overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each time one of your keys is requested to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along with a mechanism for you to approve or deny key access using an automated policy that you set.
- Using Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- Key Access Justifications integrate with Cloud KMS and Cloud EKM.
- Access Approval lets you require Google employees to get your explicit approval before they access your data or configurations on Google Cloud (for exclusions, see Access Approval exclusions ).

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- January 31, 2022 Cloud SQL for MySQL Feature The Key Access Justifications (KAJ) feature is now generally available in Cloud SQL.
- Cloud SQL for PostgreSQL Feature The Key Access Justifications (KAJ) feature is now generally available in Cloud SQL.
- Cloud SQL for SQL Server Feature The Key Access Justifications (KAJ) feature is now generally available in Cloud SQL.
- April 12, 2022 Cloud SQL for MySQL Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- December 11, 2025 Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( Preview ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- Access Approval enables you to require explicit approval before Google Support may access your database for support purposes.To learn about access approval, see Overview of Access Approval .
- Cloud SQL Studio : lets authorized users interact directly with the SQL database and run SQL queries from the Google Cloud console to access and manipulate data.
- Tags are key-value pairs you can apply to your resources, such as a project or a Cloud SQL instance, which are used for fine-grained access control.

