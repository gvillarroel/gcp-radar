---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.557Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "cross db ownership chaining flag"
feature_slug: "cross-db-ownership-chaining-flag"
latest_feature_date: "2023-10-09"
deprecation_date: "2023-10-09"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/flags"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/best-practices"
keywords:
  - "cross"
  - "db"
  - "ownership"
  - "chaining"
  - "flag"
  - "database"
  - "sql"
  - "server"
---

# cross db ownership chaining flag

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

The cross db ownership chaining database flag is a SQL Server compatibility setting for cross-database ownership chaining; deprecated on 2023-10-09.

## Extended Definition

The cross db ownership chaining database flag is a SQL Server compatibility setting for cross-database ownership chaining; deprecated on 2023-10-09.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)

## Supporting Pages

### "Configure database flags \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 32767 No contained database authentication boolean on off No cross db ownership chaining boolean on off This flag is deprecated for all SQL Server versions.
- For example, to set the 1204 , remote access , and remote query timeout (s) flags, you can use the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = "1204" = on, "remote access" = on, "remote query timeout (s)" = 300 Terraform To add database flags, use a Terraform resource . resource "google sql database instance" "instance" { name = "sqlserver-instance-flags" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { database flags { name = "1204" value = "on" } database flags { name = "remote access" value = "on" } database flags { name = "remote query timeout (s)" value = "300" } tier = "db-custom-2-7680" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For help determining the best MAXDOP and cost threshold for parallelism values for your servers, see the following resources: Server configuration: max degree of parallelism Best practices: Database settings to modify Changing the default value helps address the following potential issues: If the max degree of parallelism (MAXDOP) flag is set to 0 , then instances or client applications that require SharePoint downloads fail.
- Using the max degree of parallelism (MAXDOP) flag, you can control the number of threads at three levels: Instance level, using database flags Database scope, using TSQL Query level, using query hints Note that if the instance is resized, then the flag value remains unchanged. max server memory (mb) The max server memory (mb) flag limits the amount of memory that Cloud SQL can allocate for its internal pools.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- Source ID: `site-docs-reference-required-4`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Feature Per-instance CA Shared CA Customer-managed CA CA structure Separate CA for each instance Root CA and subordinate CAs shared across instances in the same region CA hierarchy that you create and manage Cryptographic attributes RSA 2048-bit key with SHA256 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 256-bit key with SHA384 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 256-bit key with SHA384 algorithm CA validity period 10 years 25 years for root CA and 10 years for subordinate CAs Configurable Server certificate validity period 10 years 1 year 1 year User-initiated rotation of CA?
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- In Cloud SQL, specify the CA pool and CUSTOMER MANAGED CAS CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create or edit the instance.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Authorize with SSL/TLS certificates Stay organized with collections Save and categorize content based on your preferences.

### "General best practices \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- Source ID: `site-docs-reference-required-4`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- If you must manually manage the flag's value, we recommend using the following formula to set the max server memory (mb) database flag: Reserve 1.4 GB of memory for the OS and agents.
- Trace flag settings Trace flags in SQL Server are used to set certain characteristics, alter the behavior of SQL Server databases, or debug issues in SQL Server.
- Some SQL Server trace flags are supported in Cloud SQL and can be set using database flags .
- The following table has recommended values and percentages of total RAM for some popular virtual machine (VM) tiers: Instance tier (MB) max server memory (mb) % (Total) 3840 1440 37 4096 1632 39 5792 2912 50 8192 4704 57 11584 7248 62 16384 10848 66 23168 16800 72 32768 25200 76 46336 37072 80 65568 53888 82 92704 77648 83 131136 111248 84 185440 158784 85 262272 226000 86 370880 321056 86 524544 455488 86 741792 645600 87 To monitor the memory usage for your instance, use the following metrics : database/memory/usage database/sqlserver/memory/buffer cache hit ratio database/sqlserver/memory/memory grants pending database/sqlserver/memory/page life expectancy For more information, see Monitor Cloud SQL instances .

