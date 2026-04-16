---
title: "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/editions-intro
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/editions-intro
  title: "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\
    \ Documentation"
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
Cloud SQL editions overview
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
Cloud SQL for MySQL
editions is a tier-based pricing model where each edition
provides different performance, availability, observability, and data protection
characteristics to support your various business and application needs.
Cloud SQL offers the following editions:
Cloud SQL Enterprise Plus edition : provides the best performance,
availability, and observability to run applications. These are in addition
to the core capabilities of Cloud SQL.
Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL
and is suitable for applications requiring less stringent availability
and performance requirements.
Cloud SQL editions features
The following table provides an overview of key features enhancements available
for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition:
Cloud SQL Enterprise Plus edition
Cloud SQL Enterprise edition
Database versions
MySQL 8.0, 8.4 Note: If the database version for
your instance is MySQL 8.4, then the default Cloud SQL
edition is Enterprise Plus.
MySQL 5.6, 5.7, 8.0, 8.4
Availability SLA
99.99% (includes maintenance)
99.95% (excludes maintenance)
Performance
Machine series
N2
C4A
General purpose shared core
General purpose dedicated core
N4
Machine configuration limits
N2 machine series
Up to 128 vCPU
Up to 864 GB RAM
1:8 core:memory ratio
C4A machine series
Up to 72 vCPU
Up to 576 GB RAM
1:8 core:memory ratio
General purpose shared core
1 vCPU
Up to 1.7 GB RAM
1:6.5 core:memory ratio
General purpose dedicated core
Up to 96 vCPU
Up to 624 GB RAM
1:6.5 core:memory ratio
N4 machine series
Up to 80 vCPU
Up to 624 GB RAM
1:8 core:memory ratio
Data cache
Yes
No
Optimized writes
Yes
No
Point-in-time log retention
Up to 35 days
Up to 7 days
Read pools
Yes
No
Availability
Maintenance downtime
Planned operations downtime
Sub-second downtime
Few minutes
Advanced disaster recovery (DR)
Yes
No
Write endpoint for advanced disaster recovery (DR)
Yes
No
Write endpoint connectivity
Yes
No
Managed Connection Pooling
Yes
No
Observability
AI-assisted troubleshooting
Yes
No
Query insights
30 day metric retention
1 MB query length
200 query plan sample maximum
Wait event analysis
Index advisor recommendations
7 day metric retention
4500 bytes query length
20 query plan sample maximum
Enhanced recommenders
Yes
No
Cloud SQL Enterprise Plus edition enhancements
Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance,
availability, and observability.
Performance
Cloud SQL Enterprise Plus edition offers the following performance enhancements:
Improved read performance : delivers up to 4x improved read performance
using the data cache, which leverages a fast, local SSD to storage data
pages that are read frequently.
Enhanced write performance : delivers up to 3x higher write throughput
and up to 98% lower write latency, which makes it suitable for
write-intensive applications requiring low latency and high throughput.
Engine autotuning : autotune engine configurations to match the
capabilities of the underlying instance platform.
Enhanced storage : high performance network block storage service,
managed by Google Cloud Hyperdisk that offers scalability with a suite of
data persistence and management capabilities.
Managed read pools : operational simplicity and scaling for your large
read workloads using autoscaling.
Better performance with enhanced machine series options : high performance
machine series availability that provides a balanced price-to-performance
ratio, or optimized price-performance
to deliver consistent performance for high-demand workloads.
Availability
Cloud SQL Enterprise Plus edition provides the following availability enhancements:
Near-zero downtime : sub-second downtime for maintenance and planned
operations, including patching and scaling.
Advanced disaster recovery (DR): configure disaster recovery
with cross-regional replication for failover, and perform disaster recovery
drills with zero data loss and minimal recovery time objective (RTO).
Managed Connection Pooling : optimize database connection management
for your instances using pooling.
Observability
Cloud SQL Enterprise Plus edition provides the following observability enhancements:
Query insights : advanced query performance diagnostics and filtering
with up to 30-day metric retention, up to 1 MB query length limit, and a
200 query plan sample maximum.
Enhanced metrics : fine-grained metrics such as wait events and granular
query plan samples for faster root-cause analysis and intelligent index
recommendations.
AI-assisted troubleshooting : resolve complex database performance
issues like slow queries and high database load with predictive and
prescriptive troubleshooting.
How can I upgrade to the Cloud SQL Enterprise Plus edition?
You can upgrade your Cloud SQL instances to the Cloud SQL Enterprise Plus edition using
in-place upgrade
with sub-second downtime. After the upgrade is complete, your instance retains
the configurations set prior to the upgrade.
Regional availability
For detailed information about available Cloud SQL regions, and what
editions and machines series are supported in each region, see
Region availability overview .
Pricing
For more information about Cloud SQL editions pricing, see
Cloud SQL pricing .
Cloud SQL editions FAQs
This section provides answers to frequently asked questions
about Cloud SQL editions.
Does Cloud SQL Enterprise Plus edition support all engines?
Yes. Cloud SQL Enterprise Plus edition is supported on Cloud SQL for MySQL, Cloud SQL for PostgreSQL,
and Cloud SQL for SQL Server.
Can I mix and match editions?
Yes, you can. Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition provide different levels of
database performance availability and data protection capabilities. You can select
the Cloud SQL editions that best meets your varying application needs.
Can I migrate between editions?
By using
in-place upgrade ,
you can upgrade your instances to Cloud SQL Enterprise Plus edition
with near-zero downtime
or switch to Cloud SQL Enterprise edition.
What if a Cloud SQL instance was created before the Cloud SQL editions launch?
Cloud SQL Enterprise edition supports all existing capabilities of Cloud SQL
available as of July 12, 2023, at the same price. All existing instances before
the launch of Cloud SQL editions on July 12, 2023 are updated to a
Cloud SQL Enterprise edition instance automatically.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
