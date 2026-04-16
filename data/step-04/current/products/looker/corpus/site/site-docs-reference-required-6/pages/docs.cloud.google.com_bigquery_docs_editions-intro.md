---
title: "Understand BigQuery editions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/editions-intro
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/information-schema-jobs
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/editions-intro
  title: "Understand BigQuery editions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Understand
BigQuery editions
BigQuery provides three editions which support different types of
workloads and the features associated with them. You can enable editions when
you reserve BigQuery
capacity .
BigQuery also provides an on-demand (per TiB processed)
model . You can choose to use editions and
the on-demand model at the same time on a per-project basis. For more information about BigQuery editions pricing, see BigQuery pricing .
Each edition provides a set of capabilities at a different price point to meet
the requirements of different types of organizations. You can create a
reservation or a capacity
commitment associated with an
edition. To change the edition associated with a reservation, you must delete
and recreate the reservation with the new edition type. For more information,
see Update a
reservation .
Reservations configured to use slots
autoscaling automatically scale to
accommodate the demands of their workloads. Capacity commitments are not
required to purchase slots, but can reduce costs. Because BigQuery editions are a
property of compute power, not storage, you can query datasets regardless of how
they are stored provided your edition supports the capabilities that you want to
use. Slots from all editions are subject to the same quota. Your quota is not
fulfilled on a per-edition basis. For more information about quotas, see Quotas
and limits .
BigQuery editions features
The following tables lists the features available in each edition. Features
outside of your edition are blocked or lack capabilities.
Don't use edition tiers to restrict access to specific features, because the
features assigned to each edition can change over time. For example, don't
assign projects to Standard edition reservations as a way of disallowing
access to BigQuery ML.
Administration features
Standard
Enterprise
Enterprise Plus
On-demand pricing
Pricing model
Slot-hours (1 minute minimum)
Slot-hours (1 minute minimum)
Slot-hours (1 minute minimum)
Pay per query with free tier
Monthly Service Level Objective (SLO)
>=99.9%
>=99.99%
>=99.99%
>=99.99%
Compliance controls
No access to compliance controls through Assured Workloads
No access to compliance controls through Assured Workloads
Compliance controls through Assured Workloads
Compliance controls through Assured Workloads
Business Intelligence acceleration
No access to query acceleration through BI Engine
Query acceleration through BI Engine
Query acceleration through BI Engine
Query acceleration through BI Engine
Workload management
Users cannot set the maximum concurrency target
Advanced workload management ( idle capacity sharing , target concurrency )
Advanced workload management ( idle capacity sharing , target concurrency )
On-demand users don't have access to Advanced workload management
Compute model
Autoscaling
Autoscaling + Baseline
Autoscaling + Baseline
On-demand
Maximum reservation size
1,600 slots
Quota
Quota
Quota
Maximum reservations per administration project
10 reservations per administration project, up to 16,000 slots per organization
200
200
No access to reservations
Commitment plans
No access to capacity commitments
1-year commitment at 20% discount or 3-year commitment at 40% discount
1-year commitment at 20% discount or 3-year commitment at 40% discount
No access to capacity commitments
Assignments
Project assignments
Project, folder, or organization assignments
Project, folder, or organization assignments
No assignments
Supported assignment types
QUERY ,
PIPELINE
QUERY ,
CONTINUOUS ,
PIPELINE ,
ML_EXTERNAL ,
BACKGROUND ,
BACKGROUND_COLUMN_METADATA_INDEX ,
BACKGROUND_CHANGE_DATA_CAPTURE ,
BACKGROUND_SEARCH_INDEX_REFRESH
QUERY ,
CONTINUOUS ,
PIPELINE ,
ML_EXTERNAL ,
BACKGROUND ,
BACKGROUND_COLUMN_METADATA_INDEX ,
BACKGROUND_CHANGE_DATA_CAPTURE ,
BACKGROUND_SEARCH_INDEX_REFRESH
On-demand pricing doesn't support assignments
Managed disaster recovery
No access to managed disaster recovery
No access to managed disaster recovery
Managed disaster recovery
No access to managed disaster recovery
Data export
No access to exporting data to Bigtable , Spanner ,
or AlloyDB
Exporting data to Bigtable , Spanner
or AlloyDB
Exporting data to Bigtable , Spanner
or AlloyDB
No access to exporting data to Bigtable , Spanner
or AlloyDB
Note: BigQuery Enterprise Plus edition supports
Assured Workloads platform controls
for regulatory compliance regimes, including FedRAMP, CJIS, IL4, and ITAR.
Analysis features
Standard
Enterprise
Enterprise Plus
On-demand pricing
Data sharing
Entity resolution framework
Publish and subscribe to datasets
Data clean room subscriptions
Egress controls
Entity resolution framework
Publish and subscribe to datasets
Data clean room subscriptions
Egress controls
Entity resolution framework
Publish and subscribe to datasets
Data clean room subscriptions
Egress controls
Entity resolution framework
Publish and subscribe to datasets
Data clean room subscriptions
Egress controls
Materialized views
Query existing materialized views directly
Create materialized views
Automatic refresh of materialized views
Manual refresh of materialized views
Direct query of materialized views
Smart tuning
Create materialized views
Automatic refresh of materialized views
Manual refresh of materialized views
Direct query of materialized views
Smart tuning
Create materialized views
Automatic refresh of materialized views
Manual refresh of materialized views
Direct query of materialized views
Smart tuning
Cached results
Single-user caching
Cross-user caching
Cross-user caching
Single-user caching
Continuous queries
No access to continuous queries
Continuous queries
Continuous queries
No access to continuous queries
Search
Access to the SEARCH function without access to search indexes
Query acceleration with search indexes
Query acceleration with search indexes
Query acceleration with search indexes
Vector search
Access to the VECTOR_SEARCH function without access to vector indexes
Query acceleration with vector indexes
Query acceleration with vector indexes
Query acceleration with vector indexes
Unstructured data
Run SQL queries on object tables
Perform ML inference on object tables using remote models:
Google models hosted in Vertex AI
Cloud AI services
Custom models deployed to Vertex AI
Perform ML inference on object tables using remote models:
Google models hosted in Vertex AI
Cloud AI services
Custom models deployed to Vertex AI
Perform ML inference on object tables using remote models:
Google models hosted in Vertex AI
Cloud AI services
Custom models deployed to Vertex AI
Multi-cloud analytics
Not available
BigQuery Omni support
Not available
BigQuery Omni support
Integrated machine learning
No access to BigQuery ML
BigQuery ML
BigQuery ML
BigQuery ML
Workload management
Users cannot set the maximum concurrency target
Advanced workload management ( idle capacity sharing , target concurrency )
Advanced workload management ( idle capacity sharing , target concurrency )
On-demand users don't have access to Advanced workload management
Supported assignment types
QUERY ,
PIPELINE
QUERY ,
CONTINUOUS ,
PIPELINE ,
ML_EXTERNAL ,
BACKGROUND ,
BACKGROUND_COLUMN_METADATA_INDEX ,
BACKGROUND_CHANGE_DATA_CAPTURE ,
BACKGROUND_SEARCH_INDEX_REFRESH
QUERY ,
CONTINUOUS ,
PIPELINE ,
ML_EXTERNAL ,
BACKGROUND ,
BACKGROUND_COLUMN_METADATA_INDEX ,
BACKGROUND_CHANGE_DATA_CAPTURE ,
BACKGROUND_SEARCH_INDEX_REFRESH
On-demand pricing doesn't support assignments
VPC Service Controls
No VPC Service Controls Support
VPC Service Controls Support
VPC Service Controls Support
VPC Service Controls Support
Data export
No access to exporting data to Bigtable ,
exporting data to Spanner ,
or exporting data to AlloyDB for PostgreSQL
Exporting data to Bigtable ,
exporting data to Spanner ,
or exporting data to AlloyDB for PostgreSQL
Exporting data to Bigtable ,
exporting data to Spanner ,
or exporting data to AlloyDB for PostgreSQL
No access to exporting data to Bigtable ,
exporting data to Spanner ,
or exporting data to AlloyDB for PostgreSQL
Storage encryption
Google-owned and Google-managed encryption keys
Customer-managed keys (CMEK)
Google-owned and Google-managed encryption keys
Customer-managed keys (CMEK)
Google-owned and Google-managed encryption keys
Customer-managed keys (CMEK)
Google-owned and Google-managed encryption keys
Fine-grained security controls
No access to fine-grained security controls
Column-level access control
Row-level security
Dynamic data masking
Custom data masking
Column-level access control
Row-level security
Dynamic data masking
Custom data masking
Column-level access control
Row-level security
Dynamic data masking
Custom data masking
BigQuery Graph
No access to BigQuery Graph
BigQuery Graph
BigQuery Graph
No access to BigQuery Graph
Note: BigQuery automatically encrypts all data
at rest. By default, Google manages the encryption keys used to protect your
data. You can also use customer-managed encryption keys
(CMEK) in the Enterprise
edition and Enterprise Plus edition.
What's next
For more information on slots autoscaling, see Introduction to slots autoscaling .
For more information on reservations, see Introduction to Reservations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
