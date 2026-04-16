---
title: "Operational guidelines \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/operational-guidelines
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/operational-guidelines
  title: "Operational guidelines \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Operational guidelines
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
The Cloud SQL Service Level Agreement (SLA) excludes outages "caused by
factors outside of Google's reasonable control". This page describes some
of the user-controlled configurations that can cause an outage for a Cloud SQL
instance to be excluded.
Introduction
Cloud SQL strives to give you as much control over how your instance is
configured as possible. This includes some configurations that increase the risk
of instance downtime, depending on the load and other configuration parameters.
If your instance becomes unhealthy, and Cloud SQL determines that it was out of
compliance with the operational limits as described on this page, then the
downtime period is not covered by (or does not count against) the
Cloud SQL SLA .
This list of operational limits is presented to inform you which configurations
present these risks, ways to avoid these
configurations, and ways to mitigate the risks when the configuration is
required for your business environment.
Note: You are responsible for monitoring your instance to ensure that it
is properly sized and configured for the size and type of load it is
experiencing.
Excluded configurations
The excluded configurations fall into the following categories:
General configuration requirements
Database flag values
Resource constraints
General configuration requirements
Only Cloud SQL instances configured for high availability with at least one
dedicated CPU are covered by the Cloud SQL SLA . Shared-core instances and single-zone
instances are not covered by the SLA.
If the instance is configured and used in a way that causes the workload
to overload the instance or the instance to experience a long recovery time,
then the SLA does not apply.
We strongly advise you to set up alerts and monitoring
in Cloud Monitoring .
Database flag values
Cloud SQL lets you configure your instance using database
flags . Some of these flags, such as sync_binlog
and innodb_flush_log_at_trx_commit , can be set in ways that might compromise the
stability of the instance or the durability of its data.
For a complete list of configurable flags and their defaults,
see database flags .
Resource constraints
The following resource constraints must be avoided to retain SLA coverage:
Storage full : if your disk utilization is consistently high, and automatic
storage increase is not enabled, your instance is not properly sized for your
workload and may not be covered by the SLA .
CPU overloaded : if your CPU utilization is consistently high, your
instance is not properly sized for your workload, and may not be covered by
the SLA .
Memory overloaded : if your memory usage is consistently high, your instance
is not properly sized for your workload, and may not be covered by the SLA .
For more information, refer to the General best practices .
What's next
Optimize high memory usage in instances
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
