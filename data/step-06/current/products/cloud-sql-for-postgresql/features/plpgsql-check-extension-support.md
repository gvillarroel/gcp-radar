---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.285Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "plpgsql_check extension support"
feature_slug: "plpgsql-check-extension-support"
latest_feature_date: "2025-09-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "plpgsql"
  - "check"
  - "extension"
  - "makes"
  - "the"
  - "available"
  - "in"
  - "sql"
---

# plpgsql_check extension support

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Plpgsql_check extension support makes the plpgsql_check extension available in Cloud SQL for PostgreSQL.

## Extended Definition

Plpgsql_check extension support makes the plpgsql_check extension available in Cloud SQL for PostgreSQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- On Linux, the length is usually defined as 108, and you can use the following command to check: cat /usr/include/linux/un.h grep "define UNIX PATH MAX" Docker To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- On Linux, the length is usually defined as 108, and you can use the following command to check: cat /usr/include/linux/un.h grep "define UNIX PATH MAX" Use the Cloud SQL Auth Proxy to connect to multiple instances You can use one local Cloud SQL Auth Proxy client to connect to multiple Cloud SQL instances.
- The Cloud SQL Auth Proxy checks for each of the following items, in the following order, using the first one it finds to attempt to authenticate: Credentials supplied by the credentials-file flag.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- On Linux, the length is usually defined as 108, and you can use the following command to check: cat /usr/include/linux/un.h grep "define UNIX PATH MAX" Docker To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- On Linux, the length is usually defined as 108, and you can use the following command to check: cat /usr/include/linux/un.h grep "define UNIX PATH MAX" Use the Cloud SQL Auth Proxy to connect to multiple instances You can use one local Cloud SQL Auth Proxy client to connect to multiple Cloud SQL instances.
- The Cloud SQL Auth Proxy checks for each of the following items, in the following order, using the first one it finds to attempt to authenticate: Credentials supplied by the credentials-file flag.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- The following extensions are available for PostgreSQL 18: anon pg hint plan pg wait sampling plpgsql check tds fdw To use these versions of the extensions and plugins, update your instance to [PostgreSQL version].R20251004.01 14 .
- The following extensions are also now available for PostgreSQL 18: pg hint plan pgrouting anonymizer pg wait sampling tds fdw plpgsql check For more information about these extensions, see Configure PostgreSQL extensions .
- Extensions The following extensions aren't available for PostgreSQL 18: pgRouting plpgsql check pg hint plan pgrouting anonymizer pg wait sampling tds fdw For more information, see Configure PostgreSQL extensions .
- Cloud SQL for PostgreSQL adds support for the following extensions: Extensions plpgsql check 2.8 is available for PostgreSQL version 14 and later. roaringbitmap 0.5 is available for PostgreSQL version 12 and later.

