---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.940Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "000 table limit support"
feature_slug: "000-table-limit-support"
latest_feature_date: "2023-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/quotas"
  - "https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote"
keywords:
  - "000"
  - "table"
  - "limit"
  - "sql"
  - "mysql"
  - "supports"
  - "up"
  - "500"
---

# 000 table limit support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports up to 500,000 tables on instances meeting the minimum hardware requirements.

## Extended Definition

Cloud SQL for MySQL supports up to 500,000 tables on instances meeting the minimum hardware requirements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote)

## Supporting Pages

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- Source ID: `site-docs-reference-3`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL built-in database authentication Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes how built-in authentication works on Cloud SQL instances and how database administrators can set password policies for local database users.
- Note: User password policy options are supported on Cloud SQL for MySQL 8.0 and later.
- The Set password to expire option is also supported on Cloud SQL for MySQL 5.7.

### Method: instances.demote \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote)
- Source ID: `site-docs-reference-3`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Method: instances.demote Stay organized with collections Save and categorize content based on your preferences.

### Quotas and limits \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Table limit Cloud SQL for MySQL has a limit of 50,000 tables by default, or 500,000 tables for an instance if you meet the minimum hardware requirements of at least 32 cores and a minimum of 200G of memory.
- If the number of active tables is significantly larger than both the Cloud SQL table defaults and the open tables recommendation by MySQL, then Cloud SQL recommends configuring the table open cache and table definition cache database flags with your instance's active table count.
- The following table provides information about the metric, APIs, and default limit for each category: Category Metric APIs Default limit Connect sqladmin.googleapis.com/connect The number of requests that are made per minute per user per region to use the APIs in this category.
- Home Documentation Databases Cloud SQL MySQL Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

