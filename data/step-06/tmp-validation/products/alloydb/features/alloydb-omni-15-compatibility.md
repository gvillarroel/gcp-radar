---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.176Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni 15 compatibility"
feature_slug: "alloydb-omni-15-compatibility"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "compatibility"
  - "server"
  - "postgresql"
  - "version"
  - "adds"
  - "omni"
---

# AlloyDB Omni 15 compatibility

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni version 15.2.0 adds compatibility with PostgreSQL server version 15.

## Extended Definition

AlloyDB Omni version 15.2.0 adds compatibility with PostgreSQL server version 15.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Major version support timeline The following table shows the dates when AlloyDB support for compatible versions became generally available (GA): PostgreSQL compatible version AlloyDB version support GA date AlloyDB Omni version support GA Date PostgreSQL 18 March 18, 2026 Not applicable PostgreSQL 17 September 22, 2025 Not applicable PostgreSQL 16 October 23, 2024 April 8, 2025 PostgreSQL 15 January 19, 2024 October 11, 2023 PostgreSQL 14 December 12, 2022 Not applicable Major version compatibility release policy We aim to offer timely support for AlloyDB compatibility with new PostgreSQL major versions.
- Major and minor version support AlloyDB supports compatibility with the following PostgreSQL database versions: PostgreSQL compatible version AlloyDB AlloyDB Omni PostgreSQL 18 18.1 Not applicable PostgreSQL 17 (default) 17.5 17.5 PostgreSQL 16 16.9 16.8 16.3 PostgreSQL 15 15.13 15.12 15.7 15.5 15.4 15.2 PostgreSQL 14 14.18 Not applicable PostgreSQL 18 compatibility Before you use PostgreSQL 18 as your database version, consider the following: PostgreSQL 18 isn't available with AlloyDB Omni.
- We plan to support AlloyDB Omni compatibility with any one major PostgreSQL version for at least as long as the PostgreSQL community supports that same major version—that is, no less than five years.
- AlloyDB in Google Distributed Cloud : We aim to support compatibility with a new major PostgreSQL version within four months of the availability of that major version in AlloyDB Omni.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- It is specifically designed to handle complex migrations to PostgreSQL-compatible engines like AlloyDB, automating schema conversion, code remediation, and data validation to accelerate the modernization journey.
- Striim specializes in streaming data from enterprise databases that include Oracle, SQL server, MariaDB, MySQL, PostgreSQL, and over 100 other sources using log-based Change Data Capture (CDC).
- For advanced database users, DBeaver suggests a powerful SQL editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more Partner references Database driver AlloyDB for PostgreSQL Powering AlloyDB with DBeaver Partner Advantage page Direct link Hex Solution Hex Category Advanced Analytics Description Hex is a platform for collaborative analytics and data science.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Choose one of the following: 14 , for compatibility with PostgreSQL 14 15 , for compatibility with PostgreSQL 15 16 , for compatibility with PostgreSQL 16 17 , for compatibility with PostgreSQL 17, which is the default PostgreSQL version supported 18 , for compatibility with PostgreSQL 18 PASSWORD : the password to use for the default postgres user.
- VERSION : the major version of PostgreSQL that you want the cluster's database servers to be compatible with.
- In the Database version field, select the major version of PostgreSQL for your new AlloyDB cluster.
- Upgrade a cluster's major server version.

