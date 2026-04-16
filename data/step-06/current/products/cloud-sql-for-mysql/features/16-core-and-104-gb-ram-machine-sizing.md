---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:52.003Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "16-core and 104 GB RAM machine sizing"
feature_slug: "16-core-and-104-gb-ram-machine-sizing"
latest_feature_date: "2016-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
  - "https://docs.cloud.google.com/sql/docs/mysql/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "16"
  - "core"
  - "104"
  - "gb"
  - "ram"
  - "machine"
  - "sizing"
  - "sql"
---

# 16-core and 104 GB RAM machine sizing

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL Second Generation supports instances with up to 16 cores and 104 GB of RAM.

## Extended Definition

Cloud SQL for MySQL Second Generation supports instances with up to 16 cores and 104 GB of RAM.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- Better performance with enhanced machine series options : high performance machine series availability that provides a balanced price-to-performance ratio, or optimized price-performance to deliver consistent performance for high-demand workloads.
- Regional availability For detailed information about available Cloud SQL regions, and what editions and machines series are supported in each region, see Region availability overview .
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications requiring less stringent availability and performance requirements.

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- Source ID: `site-docs-reference-required-5`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No What's next Plan and prepare to create a new instance.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- The edition you choose affects the machine series and location you can use for your instance.
- This edition also includes the core capabilities of Cloud SQL.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Custom For the Dedicated core machine type, instead of selecting a predefined configuration, select the Custom button to create an instance with a custom configuration.
- For Cloud SQL Enterprise edition instances, Cloud SQL offers the general purpose shared core , general purpose dedicated core , and the N4 machine series.
- For Shared core, each machine type is classified by the number of CPUs (cores) and amount of memory for your instance.
- Machine type and storage Machine type --tier Used to specify a shared-core instance ( db-f1-micro or db-g1-small ).

