---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.749Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Read pools"
feature_slug: "read-pools"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "front"
  - "pools"
  - "load"
  - "balanced"
  - "endpoint"
  - "provide"
  - "single"
  - "read"
---

# Read pools

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Read pools provide a single load-balanced endpoint in front of multiple read pool nodes to scale read workloads; Read pools provide a single load-balanced endpoint across up to 20 read pool nodes to scale large read workloads.

## Extended Definition

Read pools provide a single load-balanced endpoint in front of multiple read pool nodes to scale read workloads; Read pools provide a single load-balanced endpoint across up to 20 read pool nodes to scale large read workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### About read pools \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you want the read pool to scale in or scale out, applications that were previously connected to this single read endpoint don't need to be reconfigured, even though you can create new read pool nodes in the read pool or delete previous ones.
- Access a read pool through a single read endpoint The read pool is accessible through a single read endpoint with an immutable IP address.
- MySQL PostgreSQL SQL Server Cloud SQL read pools support load balancing for your large read workloads.
- In addition to operations that aren't supported on read replicas, the following operations aren't supported on read pools: Enable and disable replication Promote replica Restart Import Export Failover Re-encrypt Clone SSL/TLS certificates with shared CA or customer-managed CA can't be used with a read pool.

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Readers: the proactive database wellness job sqlMinRecommendedIncreaseSizeGb integer The minimum recommended increase size in GigaBytes This field is consumed by the frontend Writers: the proactive database wellness job for OOD.
- WARNING: Changing this restarts the instance. kind string This is always sql#settings . userLabels map (key: string, value: string) User-provided labels, represented as a dictionary where each label is a single key value pair.
- The list of settings for requested automatically-setup Private Service Connect (PSC) consumer endpoints that can be used to connect to this read pool node. name string Output only.
- Usually this is the load balancer's IP address OUTGOING Source IP address of the connection a read replica establishes to its external primary instance.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Readers: the proactive database wellness job sqlMinRecommendedIncreaseSizeGb integer The minimum recommended increase size in GigaBytes This field is consumed by the frontend Writers: the proactive database wellness job for OOD.
- WARNING: Changing this restarts the instance. kind string This is always sql#settings . userLabels map (key: string, value: string) User-provided labels, represented as a dictionary where each label is a single key value pair.
- The list of settings for requested automatically-setup Private Service Connect (PSC) consumer endpoints that can be used to connect to this read pool node. name string Output only.
- Usually this is the load balancer's IP address OUTGOING Source IP address of the connection a read replica establishes to its external primary instance.

