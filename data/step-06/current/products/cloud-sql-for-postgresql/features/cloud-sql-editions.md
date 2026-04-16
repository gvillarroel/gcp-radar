---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.787Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL editions"
feature_slug: "cloud-sql-editions"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
keywords:
  - "editions"
  - "different"
  - "performance"
  - "offers"
  - "availability"
  - "enterprise"
  - "plus"
---

# Cloud SQL editions

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL offers Enterprise and Enterprise Plus editions with different performance and availability characteristics.

## Extended Definition

Cloud SQL offers Enterprise and Enterprise Plus editions with different performance and availability characteristics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/choose-edition](https://docs.cloud.google.com/sql/docs/postgres/choose-edition)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)

## Supporting Pages

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/choose-edition](https://docs.cloud.google.com/sql/docs/postgres/choose-edition)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- Each edition provides different performance, availability, observability, and data protection characteristics to support your business and application needs.
- For details about Cloud SQL editions and the enhancements offered by the Cloud SQL Enterprise Plus edition, see Cloud SQL editions overview .

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud SQL Enterprise Plus edition instances, Cloud SQL offers predefined machine types for your instances in the N2 and C4A machine series.
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 See Custom instance configuration for more information about how to size --cpu and --memory .
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID REGION : the region DATABASE VERSION : enum string of the database version (for example, POSTGRES 18 ) PASSWORD : the password for the root user MACHINE TYPE : enum string of the machine (tier) type, as: db-custom-[CPUS]-[MEMORY MBS] EDITION TYPE : your Cloud SQL edition Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID REGION : the region DATABASE VERSION : enum string of the database version (for example, POSTGRES 18 ) PASSWORD : the password for the root user MACHINE TYPE : enum string of the machine (tier) type, as: db-custom-[CPUS]-[MEMORY MBS] EDITION TYPE : your Cloud SQL edition Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- These editions provide different levels of availability, performance and data protection.
- Cloud SQL offers two editions , Enterprise and Enterprise Plus.
- For Cloud SQL Enterprise Plus edition for SQL Server instances, you can also choose from performance-optimized machines (up to 128 CPUs and 864 GiB of memory) and memory-optimized machines (up to 16 CPUs and 512 GiB of memory).
- For Cloud SQL Enterprise Plus edition instances, you can choose from Performance-optimized machines (up to 128 CPUs and 864 GiB of memory) and Memory-optimized machines (up to 16 CPUs and 512 GiB of memory).

