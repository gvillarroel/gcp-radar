---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.935Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Categorized API rate quotas"
feature_slug: "categorized-api-rate-quotas"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/quotas"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
keywords:
  - "categorized"
  - "rate"
  - "quotas"
  - "sql"
  - "supports"
  - "multiple"
  - "categories"
  - "enforced"
---

# Categorized API rate quotas

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Extended Definition

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)

## Supporting Pages

### Quotas and limits \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rate quotas Cloud SQL supports rate quotas, which are also known as rate limits or API quotas.
- When you use the gcloud CLI or the Google Cloud console, you're making requests to the Cloud SQL Admin API and these requests count toward your rate quotas.
- Rate quotas reset after a time interval that's specific to Cloud SQL (for example, the number of API requests per minute).
- There are multiple quotas on each kind of forwarding rules, per project, per network and per peering group .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = MYSQL 8 0 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = MYSQL 8 0 31 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 The default value for REGION is us-central1 .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you selected doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead. .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead..
- If you specify MySQL 8.4 for the database version, but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- You can enter multiple subnets in a comma-separated list.
- You can enter multiple subnets in a comma-separated list.
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- You can use Private Service Connect to connect to either a primary Cloud SQL instance or any of its read replicas from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.

