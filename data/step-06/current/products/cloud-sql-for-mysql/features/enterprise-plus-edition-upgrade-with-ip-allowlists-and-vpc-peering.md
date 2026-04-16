---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.935Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Enterprise Plus edition upgrade with IP allowlists and VPC Peering"
feature_slug: "enterprise-plus-edition-upgrade-with-ip-allowlists-and-vpc-peering"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint"
keywords:
  - "enterprise"
  - "plus"
  - "edition"
  - "upgrade"
  - "ip"
  - "allowlists"
  - "vpc"
  - "peering"
---

# Enterprise Plus edition upgrade with IP allowlists and VPC Peering

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL instances can be upgraded to Enterprise Plus edition while using IP allowlists and VPC Peering.

## Extended Definition

Cloud SQL for MySQL instances can be upgraded to Enterprise Plus edition while using IP allowlists and VPC Peering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)

## Supporting Pages

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- By using in-place upgrade , you can upgrade your instances to Cloud SQL Enterprise Plus edition with near-zero downtime or switch to Cloud SQL Enterprise edition.
- You can upgrade your Cloud SQL instances to the Cloud SQL Enterprise Plus edition using in-place upgrade with sub-second downtime.
- How can I upgrade to the Cloud SQL Enterprise Plus edition?
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = MYSQL 8 0 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = MYSQL 8 0 31 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 The default value for REGION is us-central1 .
- For Cloud SQL Enterprise Plus edition instances: gcloud sql instances create INSTANCE NAME \ --region = REGION \ --tier = TIER \ --database-version = DATABASE VERSION \ --edition = ENTERPRISE PLUS Note : If you specify a database version earlier than MySQL 8.4 (or don't specify a database version) and you don't specify an edition, then the default Cloud SQL edition of the instance is Enterprise.
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you selected doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead. .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead..

### "Connect to an instance using a write endpoint \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)
- Source ID: `site-docs-reference-3`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you upgrade an existing Cloud SQL Enterprise edition instance to an Cloud SQL Enterprise Plus edition instance, Cloud SQL automatically generates the write endpoint if the previously listed prerequisites are met.
- If you already have a Cloud SQL Enterprise Plus edition instance without the write endpoint and you want Cloud SQL to generate a write endpoint automatically, then create a replica that's enabled for advanced disaster recovery .
- The Cloud SQL instance must be Cloud SQL Enterprise Plus edition .
- Limitations Write endpoints aren't available for Cloud SQL Enterprise edition instance creations.

