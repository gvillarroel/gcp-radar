---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.277Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pgrouting extension support for PostgreSQL 18"
feature_slug: "pgrouting-extension-support-for-postgresql-18"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
keywords:
  - "pgrouting"
  - "extension"
  - "for"
  - "postgresql"
  - "18"
  - "makes"
  - "the"
  - "available"
---

# pgrouting extension support for PostgreSQL 18

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Pgrouting extension support for PostgreSQL 18 makes the pgrouting extension available on PostgreSQL 18.

## Extended Definition

Pgrouting extension support for PostgreSQL 18 makes the pgrouting extension available on PostgreSQL 18.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The following extensions are also now available for PostgreSQL 18: pg hint plan pgrouting anonymizer pg wait sampling tds fdw plpgsql check For more information about these extensions, see Configure PostgreSQL extensions .
- Extensions The following extensions aren't available for PostgreSQL 18: pgRouting plpgsql check pg hint plan pgrouting anonymizer pg wait sampling tds fdw For more information, see Configure PostgreSQL extensions .
- The following information applies to flags and extensions for PostgreSQL 18: Flags The following new flags are available for PostgreSQL 18 only: autovacuum vacuum max threshold autovacuum worker slots enable distinct reordering enable self join elimitation io max concurrency io method io workers log lock failures max active replecation origins track cost delay timing vacuum max eager freeze failure rate vacuum truncate For more information, see Configure database flags .
- The following extensions are available for PostgreSQL 18: anon pg hint plan pg wait sampling plpgsql check tds fdw To use these versions of the extensions and plugins, update your instance to [PostgreSQL version].R20251004.01 14 .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The following extensions are also now available for PostgreSQL 18: pg hint plan pgrouting anonymizer pg wait sampling tds fdw plpgsql check For more information about these extensions, see Configure PostgreSQL extensions .
- Extensions The following extensions aren't available for PostgreSQL 18: pgRouting plpgsql check pg hint plan pgrouting anonymizer pg wait sampling tds fdw For more information, see Configure PostgreSQL extensions .
- The following information applies to flags and extensions for PostgreSQL 18: Flags The following new flags are available for PostgreSQL 18 only: autovacuum vacuum max threshold autovacuum worker slots enable distinct reordering enable self join elimitation io max concurrency io method io workers log lock failures max active replecation origins track cost delay timing vacuum max eager freeze failure rate vacuum truncate For more information, see Configure database flags .
- The following extensions are available for PostgreSQL 18: anon pg hint plan pg wait sampling plpgsql check tds fdw To use these versions of the extensions and plugins, update your instance to [PostgreSQL version].R20251004.01 14 .

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Note: You must configure all the non-RFC 1918 IP address ranges as authorized networks of the Cloud SQL for PostgreSQL instances.
- DATABASE VERSION : The version of the PostgreSQL database (for example, POSTGRES 14 ) NUMBER OF CPU : The number of CPUs MEMORY IN GB : The amount of memory (in GB) REGION NAME : The region name To specify the name of your VPC network, use the --network parameter.
- Specifically, these are: 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Assigning different VPC networks to Cloud SQL for PostgreSQL instances with private IP addresses provides better isolation than attaching all of them to the default VPC network.

