---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.174Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Predefined MySQL function library for Spanner"
feature_slug: "predefined-mysql-function-library-for-spanner"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "predefined"
  - "mysql"
  - "compatible"
  - "library"
  - "offers"
  - "over"
---

# Predefined MySQL function library for Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner offers a predefined library of over 80 MySQL-compatible user-defined functions that can be installed into a database to reduce migration changes from MySQL.

## Extended Definition

Spanner offers a predefined library of over 80 MySQL-compatible user-defined functions that can be installed into a database to reduce migration changes from MySQL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Disaster recovery techniques Spanner offers disaster recovery techniques to protect your data against the following disasters: Zonal failure : Spanner regional configuration provides automatic protection against zonal failures, ensuring that if one zone within a region fails, your application remains operational.
- What's next Failure scenarios and resiliency with Spanner Backups overview Create backups Create and manage backup schedules PITR overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Spanner offers the following features to help ensure high data availability: Multi-regional configurations : Spanner can maintain replicas of your data in separate zones within a single region or multiple regions to ensure data availability even if a zone or region fails.
- Optimize costs for your disaster recovery strategy You can optimize Spanner disaster recovery costs in the following ways: Multi-region configurations : Use multi-region configurations only for applications that require 99.999% availability.

### "google-cloud-spanner overview (6.111.1) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview)
- Source ID: `site-java-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Spanner Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Spanner for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- 6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1 Key Reference Links Cloud Spanner Description: Is a fully managed, mission-critical, relational database service that offers transactional consistency at global scale, schemas, SQL (ANSI 2011 with extensions), and automatic, synchronous replication for high availability.
- Understanding Version ID and Library Versions When using a Cloud client library, it's important to distinguish between two types of versions: Library Version : The version of the software package (the client library) that helps you interact with the Cloud service.
- Home Documentation Developer tools Java Client libraries Send feedback google-cloud-spanner overview (6.111.1) Stay organized with collections Save and categorize content based on your preferences.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Even when using Spanner to hold all of your game data worldwide, it offers read-write transactions with even stronger than conventional atomicity, consistency, isolation, and durability (ACID) properties.
- For high throughput applications, select a library where you can use the same Spanner client for multiple sequential requests.
- Spanner offers built-in client libraries for many popular languages, which are typically feature-rich and performant.
- Even though Spanner offers the flexibility to add and remove nodes online, it isn't an autoscaling database.

