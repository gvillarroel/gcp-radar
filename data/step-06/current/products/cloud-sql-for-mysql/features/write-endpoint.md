---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.889Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Write endpoint"
feature_slug: "write-endpoint"
latest_feature_date: "2025-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip"
keywords:
  - "write"
  - "endpoint"
  - "feature"
  - "provides"
  - "global"
  - "dns"
  - "always"
  - "resolves"
---

# Write endpoint

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature provides a global DNS write endpoint that always resolves to the current primary Cloud SQL instance; The write endpoint provides a global DNS name that resolves to the current primary private IP Cloud SQL instance to avoid application connection changes after failover or switchover.

## Extended Definition

This feature provides a global DNS write endpoint that always resolves to the current primary Cloud SQL instance; The write endpoint provides a global DNS name that resolves to the current primary private IP Cloud SQL instance to avoid application connection changes after failover or switchover.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)

## Supporting Pages

### "Connect to an instance using a write endpoint \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)
- Source ID: `site-docs-reference-3`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write endpoints always end with the .global.sql-psa.goog. suffix, similar to the following example: 103uufa2svq8u.2rb3qdj9tkf4d.global.sql-psa.goog.
- A write endpoint is a global domain name service (DNS) name that resolves to the IP address of the current primary instance automatically.
- The write endpoint always ends with the .global.sql-psa.goog. suffix.
- Connect database clients with database instances using write endpoint over an SSL/TLS connection mysql To connect database clients to instances using a write endpoint over an SSL/TLS connection, run the following command: mysql -uroot -pcloudsql -h 103uufa2svq8u.2rb3qdj9tkf4d.global.sql-psa.goog. \ --ssl-ca = SERVER CA SSL \ --ssl-cert = SSL CERT \ --ssl-key = SSL KEY \ --ssl-verify-server-cert Make the following replacements: SERVER CA SSL : the name of the server certificate authority SSL file.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Generate the write endpoint A write endpoint is a global domain name service (DNS) name that resolves to the IP address of the current primary instance automatically.
- Note: Cloud SQL generates a write endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following: If you haven't already enabled the Cloud DNS API, enable the Cloud DNS API for your Google Cloud project.
- Note: Cloud SQL generates a write endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following: Enable the Cloud DNS API for your Google Cloud project (if this API isn't enabled).
- Note: Cloud SQL generates a write endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following: Enable the Cloud DNS API for your Google Cloud project (if this API isn't enabled).

### Configure private IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- Source ID: `site-docs-reference-3`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A write endpoint is a global domain name service (DNS) name that resolves to the IP address of the current primary instance automatically.
- How Cloud SQL creates a write endpoint If you enable the Cloud DNS API for your Google Cloud project, and then you create a primary Cloud SQL Enterprise Plus edition instance , promote the replica for the instance , or upgrade the instance from Cloud SQL Enterprise edition , Cloud SQL generates a write endpoint automatically and assigns it to the instance.
- Assign a write endpoint to an instance If you don't enable the Cloud DNS API for your Google Cloud project, and then you create, promote, or upgrade your instance, Cloud SQL doesn't assign the write endpoint to the instance automatically.
- If the primary instance changes during the switchover or failover processes, then Cloud SQL assigns the write endpoint to the failover replica because this replica is the new primary instance.

