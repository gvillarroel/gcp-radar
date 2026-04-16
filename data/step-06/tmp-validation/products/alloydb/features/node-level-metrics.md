---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.068Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Node-level metrics"
feature_slug: "node-level-metrics"
latest_feature_date: "2026-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
keywords:
  - "monitor"
  - "level"
  - "metrics"
  - "node"
  - "read"
---

# Node-level metrics

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Node-level metrics let you monitor AlloyDB read pool nodes in Google Cloud console and Metrics Explorer for detailed troubleshooting.

## Extended Definition

Node-level metrics let you monitor AlloyDB read pool nodes in Google Cloud console and Metrics Explorer for detailed troubleshooting.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Connect Anomalo to AlloyDB for complete data quality monitoring Integrating Anomalo with AlloyDB Partner Advantage page Direct link DataDog Solution DataDog Category Data observability Description Datadog is a monitoring and analytics tool for information technology (IT) and DevOps teams that can be used to determine performance metrics and event monitoring for infrastructure and cloud services.
- If required, enterprises can fine-tune Anomalo's monitoring using no-code key metrics and validation rules, or by defining any custom SQL check.
- Partner references Connecting ThoughtSpot with AlloyDB Adding a Google AlloyDB connection, Partner Advantage page Direct link Data governance, modeling, and security Collibra Solution Collibra Category Data governance Description Collibra data intelligence cloud combines data silos on a complete and scalable cloud-services platform, design easy-to-use intuitive workflows for data creators and innovators, use an open and flexible architecture to connect data applications, trust in data that's secure and compliant with enterprise-level standards.
- Partner references AlloyDB Configuration in Skyvia Skyvia AlloyDB Connector Partner Advantage page Direct link Data Quality and Observability Anomalo Solution Anomalo Data Quality Category Data Quality Description Anomalo addresses the data quality problem by monitoring enterprise data and automatically detecting and root-causing data issues, allowing teams to resolve any issues with their data before making decisions, running operations, or powering models.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The output looks similar to the following: postgres=# select from perfsnap.g$snapshots; snap id snap time instance id node id snap description snap type is baseline ---------+-------------------------------+--------------+---------------------------------+-------------------+-----------+------------- 1 2023-11-13 22:13:43.159237+00 perf-primary sab3-perf-primary-cab835ef-4cm8 Manual snapshot Manual f 2 2023-11-13 22:53:40.49565+00 perf-primary sab3-perf-primary-cab835ef-4cm8 Automatic snapshot Automatic f 3 2023-11-13 22:56:42.57094+00 perf-replica sab3-perf-replica-b9250422-tz4n Automatic snapshot Automatic f 4 2023-11-13 22:56:42.59476+00 perf-replica sab3-perf-replica-b9250422-63q3 Automatic snapshot Automatic f 5 2023-11-13 23:11:55.23157+00 perf-replica sab3-perf-replica-b9250422-tz4n Manual snapshot Manual f (5 rows) Note: To support basic metrics tracking, AlloyDB automatically takes a snapshot once a day.
- When used on a read pool node, the report helps identify if replication lag is caused by system resource constraints, such as CPU or memory, or specific query conflicts, such as buffer pins.
- Modify the frequency of automated snapshots Automated snapshots are taken for primary instance and read nodes once per day by default.
- Smaller read nodes may not be able to keep up with the primary's WAL generation rate during heavy write workloads.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Based on the previous seven days of Query Insights data, you can monitor query performance at the application level and trace the source of problematic queries across the application stack by action, controller, framework, route, application, and database driver.
- In addition, standard query insights metrics are available in system metrics in Cloud Monitoring to keep the functionalities of the standard query insights intact.
- Storing data for primary instances consumes about 180 GB and might increase based on the number of read pool nodes present in the cluster.
- Limitations The metrics exposed by advanced query insights features aren't available using a Cloud Monitoring API.

