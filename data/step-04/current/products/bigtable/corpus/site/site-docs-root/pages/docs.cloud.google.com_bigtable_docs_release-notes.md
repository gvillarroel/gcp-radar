---
title: "Bigtable release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/release-notes
  title: "Bigtable release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Resources
Send feedback
Bigtable release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Bigtable. You can periodically
check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
Note: To view release notes for the Bigtable HBase client for
Java, see the client library's
GitHub releases page .
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 09, 2026
Feature
You can use Gemini in Bigtable Studio to help you write GoogleSQL queries. This
feature is available in Preview .
For more information, see Write SQL with Gemini assistance .
April 07, 2026
Feature
You can connect to Bigtable from Java applications and other reporting tools
that support a generic JDBC adapter by using the Bigtable JDBC driver .
This feature is generally available (GA) .
Feature
You can use protocol buffer (protobuf) schemas
to query individual fields within protobuf messages stored as bytes in Bigtable.
You can query your protobuf data using GoogleSQL for Bigtable, continuous
materialized views, logical views, or BigQuery external tables. This feature is
generally available (GA) .
March 30, 2026
Feature
You can view the details of Bigtable continuous materialized views
in the Google Cloud console.
March 25, 2026
Announcement
Bigtable client for Java has modernized its Admin API. For detailed migration
steps and code examples, see
Upgrading client libraries .
March 24, 2026
Feature
You can manage Bigtable tiered storage
configuration in the Google Cloud console and view tiered storage metrics in
system insights .
For more information, see Create and manage tables .
March 06, 2026
Feature
Bigtable tools in the Agent Development Kit (ADK)
are generally available (GA) .
With these tools, you can build AI agents that interact with Bigtable to
discover metadata about Bigtable tables and instances and execute LLM-powered
SQL queries.
February 18, 2026
Announcement
New best practices are available for securing generative AI agents using Model
Context Protocol (MCP) with Google Cloud databases. This guide covers key
security measures like least privilege, native database controls, and secure
agent design to help you build safer AI applications. For more information, see
Best practices for securing agent interactions with Model Context Protocol .
Feature
You can migrate a machine learning feature management workload from Vertex AI
Feature Store (Legacy) to a Bigtable instance. For more information, see
Migrate from Vertex AI Feature Store (Legacy) to
Bigtable .
February 17, 2026
Feature
You can use the Bigtable Admin API MCP server
to enable agents and AI applications to perform a range of data-related tasks.
This feature is in Preview .
February 13, 2026
Breaking
You can use the Flink Bigtable connector
version 0.3.2 to connect to Bigtable from Apache Flink version 2.1.0.
Additionally, this version of the connector lets you specify the number of
mutations to include in each batch sent to Bigtable. This feature is
generally available (GA) .
February 02, 2026
Libraries
Java
2.72.0 (2026-01-30)
Features
Add GcRuleBuilder for safe GC rule construction ( #2758 ) ( 4a99a8c )
Handle StatusRuntimeException in CbtTestProxy, increase inbound message / metadata size ( #2763 ) ( 3e27d28 )
Regenerate protos using protoc 4
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.66.0 ( ca24007 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.56.0 ( #2765 ) ( d1020a1 )
January 30, 2026
Feature
Bigtable has a unified, customizable system insights dashboard. This dashboard
includes predefined metrics and other Google Cloud metrics. This
feature is generally available (GA) .
For more information, see Customize the system insights dashboard .
January 21, 2026
Feature
Bigtable is available in the asia-southeast3 (Bangkok) region. For more
information, see Bigtable locations .
January 19, 2026
Libraries
Java
2.71.0 (2026-01-15)
Features
Add CSM for batch write flow control ( #2685 ) ( 62ffd1b )
Bug Fixes
bigtable: Add handling for gauge metrics ( #2719 ) ( 87aa4d5 )
Create stub with BigtableClientContext so otels are closed ( #2747 ) ( 3d0a6d9 )
Update BigtableChannelPool to use the background executor ( #2753 ) ( 8f6e2df )
Use the same background executor in otel reader and monitoring c… ( #2746 ) ( 3a58f9b )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.76.0 ( #2754 ) ( be54ef6 )
Update shared dependencies ( #2752 ) ( fe1074c )
December 26, 2025
Feature
Continuous materialized views support up to five continuous materialized views
per table. This lets you create multiple asynchronous secondary indexes on a
table or have a mix of precomputed aggregate views and asynchronous secondary
indexes on the same base table. For more information, see
Continuous materialized views .
December 22, 2025
Libraries
Python
2.35.0 (2025-12-16)
Features
add basic interceptor to client (#1206) ( 6561cfac )
Add encodings for STRUCT and the Timestamp type ( 72dfdc44 )
add PeerInfo proto in Bigtable API ( 72dfdc44 )
Add Type API updates needed to support structured keys in materialized views ( 72dfdc44 )
support mTLS certificates when available (#1249) ( ca20219c )
Bug Fixes
re-export AddToCell for consistency (#1241) ( 2a5baf11 )
async client uses fixed grace period (#1236) ( 544db1cd )
Deprecate credentials_file argument ( 72dfdc44 )
Add ReadRows/SampleRowKeys bindings for materialized views ( 72dfdc44 )
retry cancelled errors (#1235) ( e3fd5d86 )
Java
2.71.0-rc1 (2025-12-19)
Features
update with latest from main ( #2740 ) ( 90e1a02 )
feat: Upgrade protobuf gen code to 4.33 ( #2741 ) ( 2b1d201 )
Dependencies
update sdk-platform-java-config to 3.55.0-rc1 ( #2738 ) ( 136f164 )
Go
1.41.0 (2025-12-15)
Features
add PeerInfo proto in Bigtable API (PiperOrigin-RevId: 829585900) ( 185951b3 )
precompute featureflags in client and reuse (#13297) ( 3b3253ac )
Add experimental Bigtable connection pool with custom load balancing strategy. (#12882) ( 7aa96127 )
Enable ALTS hard bound token in Bigtable w/ direct access (#13153) ( 90239341 )
Enable routing cookie and attempt headers for enhanced retries (#12964) ( 96cfd47a )
Bug Fixes
fix project id sent in otel (#13286) ( 4865868c )
screaming uppercase metric status (#13484) ( b35ee8fd )
Performance Improvements
parallelize the exportTimeSeries function (#13004) ( bafd691d )
December 15, 2025
Libraries
Java
2.70.1 (2025-12-12)
Dependencies
Update shared dependencies ( #2734 ) ( 2823705 )
December 12, 2025
Feature
In the Google Cloud console, you can import data into Bigtable using the
Dataflow job builder ,
a web interface for building and running Dataflow pipelines. This integration
provides a pre-populated template to import data from Pub/Sub to Bigtable. You
can also create a custom job to import data from other sources. For more
information, see Import and export data .
November 24, 2025
Libraries
Java
2.69.0 (2025-11-17)
Features
bigtable: Add internal grpc subconnections metric and add outstanding rpcs to INTERNAL_VIEW ( #2700 ) ( e3e6e99 )
bigtable: Expose a metric to track the number of outstanding rpcs (unary , streaming) in channel pool ( #2696 ) ( 140a1ad )
bigtable: Populate alts field in channel entry ( #2702 ) ( 1bfb763 )
Enable ALTS hard bound token in Bigtable w/ direct access ( #2695 ) ( d12b37d )
Java
2.70.0 (2025-11-18)
Features
Add PeerInfo proto in Bigtable API ( 0736694 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( 0736694 )
Dependencies
Update shared dependencies ( #2704 ) ( 97a8a0e )
Documentation
Update javadoc sample for BigtableTableAdminClient.listTables ( #2308 ) ( 56237d7 )
Java
2.70.0 (2025-11-18)
Features
Add PeerInfo proto in Bigtable API ( 0736694 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( 0736694 )
Dependencies
Update shared dependencies ( #2704 ) ( 97a8a0e )
Documentation
Update javadoc sample for BigtableTableAdminClient.listTables ( #2308 ) ( 56237d7 )
November 03, 2025
Feature
You can use protocol buffer (protobuf) schemas to query individual fields within protobuf messages stored as bytes in Bigtable. First, create and manage your protobuf schemas . Then, query your protobuf data using GoogleSQL for Bigtable or BigQuery external tables. This feature is in Preview .
October 28, 2025
Feature
You can use Cloud KMS Autokey in the Google Cloud console to automate the creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters.
October 27, 2025
Libraries
Java
2.68.0 (2025-10-22)
Features
Add Type API updates needed to support structured keys in materialized views ( 469290e )
Bug Fixes
Add ReadRows/SampleRowKeys bindings for materialized views ( 469290e )
deps: Update the Java code generator (gapic-generator-java) to 2.62.3 ( 469290e )
deps: Update the Java code generator (gapic-generator-java) to 2.63.0 ( ed6c03f )
Don't use String.format in Preconditions messages ( #2691 ) ( 62a1812 )
Fixed the bigtableadmin API name for snippet region tags and possibly other GAPIC attributes ( 469290e )
Dependencies
Update shared dependencies ( #2697 ) ( 611ad20 )
Python
2.34.0 (2025-10-16)
Features
Add support for Python 3.14 ( #1217 ) ( 263332a )
Feature
Bigtable provides vector and key-value store integrations for LangChain, an LLM orchestration framework.
For more information, see Build LLM-powered applications using LangChain and Perform Maximal Marginal Relevance search with LangChain on Bigtable .
October 20, 2025
Feature
You can save queries and then view and manage the saved queries in Bigtable Studio. This feature is in Preview .
October 13, 2025
Libraries
Python
2.33.0 (2025-10-06)
Features
Add support for Proto and Enum types ( #1202 ) ( 34ceb86 )
Expose universe_domain for tpc ( #1150 ) ( 451fd97 )
Bug Fixes
Fix instance registration cleanup on early iterator termination ( #1216 ) ( bbfd746 )
Refactor channel refresh ( #1174 ) ( 6fa3008 )
Java
2.67.1 (2025-10-08)
Dependencies
Update shared dependencies ( #2686 ) ( d7eaa02 )
October 07, 2025
Feature
The Cassandra-Bigtable proxy adapter , which lets you connect your Apache Cassandra-based applications to Bigtable, is generally available ( GA ).
Feature
You can connect to Bigtable from Java applications and other reporting tools that support a generic JDBC adapter by using the Bigtable JDBC driver . This feature is available in Preview .
October 06, 2025
Feature
You can optimize storage with Bigtable tiered storage , reduce storage costs, and retain data for longer. This feature is available in Preview .
September 29, 2025
Libraries
Go
1.40.1 (2025-09-26)
Features
bigtable: Add an e2e flow for direct access with instructions ( #12939 ) ( fdcdde8 )
Bug Fixes
bigtable: Release bigtable as 1.40.1 ( #12961 ) ( 33e1474 )
bigtable: Use stable stats.NewMetricSet ( #12941 ) ( 2c713d7 )
1.40.0 (2025-09-22)
Features
bigtable: Expose otel native grpc metrics in Bigtable ( #12827 ) ( e9d2efd )
Java
2.67.0 (2025-09-24)
Features
Idle channel eviction ( #2651 ) ( 70c05c9 )
Load balancing options for BigtableChannelPool ( #2667 ) ( 5adaa84 )
Bug Fixes
Add missing break; to PROTO and ENUM value type check ( #2672 ) ( 337e432 )
Remove beta api annotation for query paginator ( #2660 ) ( f68a1fa )
Dependencies
Update shared dependencies ( #2679 ) ( a5b8260 )
September 15, 2025
Libraries
Java
2.66.0 (2025-09-10)
Features
Add support for Proto and Enum types ( #2662 ) ( da3065d )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #2668 ) ( 06ac93e )
September 01, 2025
Libraries
Java
2.65.1 (2025-08-27)
Dependencies
Update shared dependencies ( #2664 ) ( 841318b )
Go
1.39.0 (2025-08-28)
Features
bigtable/admin: Add tags field to Instance proto (stable branch) ( a846564 )
bigtable/spanner: Allow disable gRPC DirectPath deps ( #12469 ) ( 2205d27 )
bigtable: Add client epoch for each call ( #12685 ) ( c9eac01 )
bigtable: Add Idempotency to Cloud Bigtable MutateRowRequest API ( 98ba6f0 )
bigtable: Add Idempotency to Cloud Bigtable MutateRowsRequest API ( ac4970b )
bigtable: Adding support to schema bundles ( #12516 ) ( 688eb13 )
bigtable: Create first response latencies instrument ( #12706 ) ( 6f34867 )
bigtable: Expose directaccess via a env variable ( #12684 ) ( 0306910 )
bigtable: Expose pinger in go client ( #12683 ) ( a330457 )
bigtable: First_response_latencies and connectivity_error_count metrics ( #10616 ) ( 3054593 )
bigtable: Publish Proto and Enum types to CBT data API ( 83f894e )
bigtable: Record client_blocking_latencies ( #12698 ) ( 5f03fb3 )
bigtable: Support universe domain ( #12567 ) ( fc59e39 )
bigtable: Update ListSchemaBundles to returns only names ( #12563 ) ( 83ea7c4 )
Bug Fixes
bigtable: Add ReadRows/SampleRowKeys bindings for materialized views ( 7616e81 )
bigtable: Fix NoopMetricsProvider panic ( #12709 ) ( 8c6da0d )
bigtable: Ignore errors while creating monitoring client and disable metrics ( #12708 ) ( 2346cf1 )
bigtable: Update routing_parameters.path_template ( c574e28 )
Performance Improvements
bigtable: Create attributes only when enabled ( #12647 ) ( aa31abc )
Documentation
bigtable: Minor comment update for field idempotency in message .google.bigtable.v2.MutateRowRequest ( ac4970b )
bigtable: Sync generated comments from the API Protos ( ac4970b )
Java
2.65.1 (2025-08-27)
Dependencies
Update shared dependencies ( #2664 ) ( 841318b )
August 28, 2025
Announcement
Bigtable tools are available in Agent Development Kit (ADK) . With these tools, you can build AI agents that can interact with Bigtable data and metadata in the following ways:
Obtain metadata about Bigtable tables and instances.
Execute LLM-powered SQL queries.
August 18, 2025
Libraries
Java
2.65.0 (2025-08-12)
Features
bigtable: Lower the value for max rpc channels as channel resize is slow (1m, 2 channel) ( #2656 ) ( d8055c1 )
August 11, 2025
Libraries
Python
2.32.0 (2025-08-01)
Features
Add Idempotency to Cloud Bigtable MutateRowsRequest API ( #1143 ) ( c3e3eb0 )
Add support for AddToCell in Data Client ( #1147 ) ( 1a5b4b5 )
Implement SQL support in test proxy ( #1106 ) ( 7a91bbf )
Modernized Bigtable Admin Client featuring selective GAPIC generation ( #1177 ) ( 58e7d37 )
Java
2.64.0 (2025-08-08)
Features
Add tags field to Instance proto (stable branch) ( 089d527 )
Dependencies
Update shared dependencies ( #2654 ) ( 4b706f4 )
Update the Java code generator (gapic-generator-java) to 2.61.0 ( 089d527 )
August 04, 2025
Announcement
You can add the Cassandra to Bigtable client for Java library to your Java project from the Maven Central repository.
Libraries
Java
2.63.0 (2025-07-30)
Features
Add Idempotency to Cloud Bigtable MutateRowsRequest API ( bc58b4f )
Add port as a parameter for the bigtable emulator ( #2645 ) ( 5acd3dc )
Add type support for Proto and Enum ( bc58b4f )
Publish Proto and Enum types to CBT data API ( ace12d5 )
Selective GAPIC autogeneration for Python Bigtable Admin ( e219c38 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( e219c38 )
Update routing_parameters.path_template ( e219c38 )
Dependencies
Update sdk-platorm-java-config to 3.50.2 ( #2646 ) ( 03e6961 )
Documentation
Sync generated comments from the API Protos ( bc58b4f )
July 31, 2025
Feature
Logical views for Bigtable are now generally available ( GA ). Logical views let you save a SQL query as a specific, shareable view of your data—even with a flexible schema—and then control who has permission to see the results.
July 21, 2025
Libraries
Java
2.62.0 (2025-07-15)
Features
Add Idempotency to Cloud Bigtable MutateRowRequest API ( b5acca6 )
Add SchemaBundles API ( b5acca6 )
bigtable: Add schema bundle support ( #2619 ) ( 7d7b9a9 )
Next release from main branch is 2.62.0 ( #2621 ) ( 202b211 )
Dependencies
Minor cleanup ( #2623 ) ( 7b230e8 )
Update shared dependencies ( #2616 ) ( eb7cfd5 )
July 07, 2025
Libraries
Go
1.38.0 (2025-06-27)
Features
bigtable/admin: Add deletion_protection support for LVs ( a95a0bf )
bigtable/admin: Add SchemaBundles API ( 116a33a )
bigtable: Add application blocking latencies ( #11349 ) ( 8f145ed )
bigtable: Add DeletionProtection support for Logical Views ( #11895 ) ( ed488b9 )
bigtable: Connectivity_error_count client side metric ( #12438 ) ( dd45fd7 )
bigtable: NewServerWithListener ( #12408 ) ( 59ea0de )
bigtable: Use delay from RetryInfo ( #11955 ) ( 0510711 )
Bug Fixes
bigtable: Correct the Bigtable monitoring client options ( #12410 ) ( bd966bc )
bigtable: Fix: upgrade gRPC service registration func ( 6a871e0 )
bigtable: Retry RST stream errors ( #11477 ) ( df43b4a )
Performance Improvements
bigtable: Refactor metric attributes for performance ( #12445 ) ( f734ec6 )
Documentation
bigtable/admin: Improved comment formatting and product naming ( 116a33a )
Change
When you undelete a table , Bigtable automatically enables deletion protection for that table.
June 30, 2025
Libraries
Java
2.61.0 (2025-06-27)
Features
Add getter for universe domain in JwtCredentialsWithAudience ( #2598 ) ( 9ad66b1 )
Bug Fixes
Add name elements for the POM.xml files ( a873719 )
Populate table id for materialized view ( #2610 ) ( 50c3fe2 )
Dependencies
Update shared dependencies ( #2605 ) ( 4cc7246 )
June 24, 2025
Feature
You can use Data Boost to analyze your Bigtable data with BigQuery without impacting the performance of the clusters that handle your application traffic. This feature is generally available ( GA ).
June 09, 2025
Libraries
Java
2.60.0 (2025-06-06)
Features
Improve error message on malformed struct ( #2592 ) ( 7f5fdf0 )
Run ExecuteQuery conformance tests ( #2557 ) ( 0bbc083 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 65782aa )
Ensure that multiple instances of a client in the same process dont clobber each other ( #2590 ) ( 8d3dca4 )
Dependencies
Update shared dependencies ( #2587 ) ( 8ec0339 )
May 29, 2025
Change
The Bigtable Spark connector supports Scala versions 2.12 and 2.13 in all connector versions and has been updated as follows:
Connector versions 0.5.0 and later support dynamic columns .
Connector versions 0.6.0 and later support custom authentication providers and efficient joins with data sources .
May 27, 2025
Announcement
You can delete logical and continuous materialized views in the Google Cloud console. For more information, see Delete a logical view or Delete a continuous materialized view .
May 26, 2025
Libraries
Python
2.31.0 (2025-05-22)
Features
Add deletion_protection support for LVs ( #1108 ) ( c6d384d )
Support authorized views ( #1034 ) ( 97a0198 )
Throw better error on invalid metadata response ( #1107 ) ( 2642317 )
Bug Fixes
Re-add py-typed file for bigtable package ( #1085 ) ( 0c322c7 )
May 19, 2025
Libraries
Java
2.59.0 (2025-05-16)
Features
bigtable: Add DeletionProtection support for Logical Views ( #2539 ) ( d9ba32b )
Dependencies
Update googleapis/sdk-platform-java action to v2.58.0 ( #2581 ) ( c9b0289 )
Update shared dependencies ( #2584 ) ( ba82675 )
May 13, 2025
Feature
You can export query results from Bigtable Studio. This feature is generally available ( GA ).
For more information, see Manage your data using Bigtable Studio .
May 12, 2025
Libraries
Java
2.58.2 (2025-05-08)
Bug Fixes
Use service name as the default audience ( #2579 ) ( af6d7bd )
Dependencies
Update shared dependencies ( #2565 ) ( 043f11b )
May 07, 2025
Feature
You can use Data Boost when you analyze your Bigtable data with BigQuery. This feature is available in Preview .
May 05, 2025
Libraries
Java
2.58.0 (2025-04-28)
Features
Add deletion_protection support for LVs ( 43c97a3 )
bigtable: Add integration tests for Materialized/Logical Views ( #2518 ) ( 4d3a7e6 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 43c97a3 )
Fix retry info algorithm setting ( #2562 ) ( c424ccb )
Use universe domain when creating the monitoring client ( #2570 ) ( 3b51e12 )
Java
2.58.1 (2025-04-28)
Bug Fixes
Close otel instance ( #2571 ) ( 422fe26 )
Java
2.58.0 (2025-04-28)
Features
Add deletion_protection support for LVs ( 43c97a3 )
bigtable: Add integration tests for Materialized/Logical Views ( #2518 ) ( 4d3a7e6 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 43c97a3 )
Fix retry info algorithm setting ( #2562 ) ( c424ccb )
Use universe domain when creating the monitoring client ( #2570 ) ( 3b51e12 )
April 29, 2025
Feature
Similarity vector search in Bigtable by finding the K-nearest neighbors is generally available ( GA ).
Feature
The MCP Toolbox for Databases includes a Bigtable connector. This feature is available in Preview .
April 25, 2025
Feature
Bigtable is supported by Database Center , which is generally available (GA). The Database Center now provides performance, availability, and data protection in the form of recommender-related health issues. You can also view these performance recommendations in Recommendation Hub .
April 21, 2025
Libraries
Go
1.37.0 (2025-04-15)
Features
bigtable: Allow configuring multicluster routing and isolation ( #11980 ) ( 19e2837 )
Bug Fixes
bigtable: Correct the retry condition of QueryExpiredViolation ( #11984 ) ( 44d8b86 )
bigtable: Update google.golang.org/api to 0.229.0 ( 3319672 )
bigtable: Use the same Backoff for idempotent and internal errors ( #11985 ) ( 8d1d015 )
Python
2.30.1 (2025-04-17)
Bug Fixes
Populate SQL app_profile_id header even when it is unset ( #1109 ) ( 17b75bd )
April 10, 2025
Feature
The Bigtable CQL client library for Java is available in Preview .
Feature
The Cassandra-Bigtable proxy adapter , which lets you connect your Apache Cassandra-based applications to Bigtable, is available in Preview .
Feature
The Bigtable Kafka sink , which lets you directly connect Apache Kafka and Google Cloud Managed Service for Apache Kafka, is now generally available ( GA ).
April 09, 2025
Feature
Continuous materialized views for Bigtable are available in Preview .
Feature
SQL support for Bigtable is generally available ( GA ), including an UNPACK feature that lets you read time series data in a tabular format.
Feature
Logical views of Bigtable tables are available in Preview .
Feature
The Bigtable Studio query editor is generally available (GA).
April 07, 2025
Libraries
Java
2.57.2 (2025-03-31)
Bug Fixes
Library should released as 2.57.2 ( #2549 ) ( 58d0bbd )
Go
1.36.0 (2025-03-31)
Features
bigtable/admin: Add MaterializedViews and LogicalViews APIs ( b323f88 )
bigtable/admin: Add MaterializedViews and LogicalViews APIs ( dd0d1d7 )
bigtable/admin: Publish row_key_schema fields in table proto and relevant admin APIs to setup a table with a row_key_schema ( 3f23a91 )
bigtable: Add Bind function to bind query params ( #11862 ) ( 24c5ae0 )
bigtable: Add datatypes for GoogleSQL ( #11816 ) ( 5a9eb10 )
bigtable: Add Execute method to execute GoogleSQL queries ( #11883 ) ( 0e53dcd )
bigtable: Add MaterializedViewName to ReadRows and SampleRowKeys ( b323f88 )
bigtable: Add methods to read ResultRow ( #11924 ) ( 8b8ca9e )
bigtable: Add PrepareQuery api and update ExecuteQuery to support it ( dd0d1d7 )
bigtable: Add PrepareStatement to run GoogleSQL queries ( #11829 ) ( ea00b17 )
bigtable: Add support for data APIs for Materialized Views ( #11796 ) ( f5ae93b )
bigtable: Add support for logical views ( #11792 ) ( 630d751 )
bigtable: Add support for materialized views for admin client ( #11793 ) ( 640be05 )
bigtable: Adding node scaling factor ( b680164 )
bigtable: Disable MV and LV tests ( #11827 ) ( 42dca03 )
bigtable: Row key schema support in admin client ( #11777 ) ( 4158bac )
Bug Fixes
bigtable: Allow GC updates on emulated aggregate column family ( #11499 ) ( 0682bfa )
bigtable: Update golang.org/x/net to 0.37.0 ( 1144978 )
Documentation
bigtable/admin: Fixed formatting of resource path strings ( dd0d1d7 )
bigtable: Update ExecuteQuery API docs to reflect changes ( dd0d1d7 )
Java
2.57.3 (2025-04-01)
Bug Fixes
Remove debug messages ( #2552 ) ( 6359834 )
March 31, 2025
Libraries
Java
2.57.0 (2025-03-24)
Features
Add PreparedStatement and update ExecuteQuery API to use it ( #2534 ) ( 49d4d09 )
Java
2.57.1 (2025-03-24)
Bug Fixes
Handling of totalTimeout on sql plan refresh ( #2541 ) ( bf49cf9 )
March 26, 2025
Change
The Monitoring page in the Google Cloud console for Bigtable has been renamed to System insights.
March 24, 2025
Libraries
Java
2.56.0 (2025-03-18)
Features
bigtable: Add support for Logical Views in Admin API ( #2519 ) ( 6dac3fd )
bigtable: Add support for Materialized Views in Admin API ( #2511 ) ( 55cd719 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 7992af0 )
Dependencies
Sdk-platform-java-config 3.45.1 ( #2517 ) ( b2af258 )
Python
2.30.0 (2025-03-18)
Features
Update ExecuteQuery to use Prepare ( #1100 ) ( 8a7abc1 )
Bug Fixes
Allow protobuf 6.x ( #1092 ) ( 1015fa8 )
Remove setup.cfg configuration for creating universal wheels ( #1097 ) ( 95f4b82 )
March 17, 2025
Libraries
Java
2.55.0 (2025-03-11)
Features
Add MaterializedViewName to ReadRows and SampleRowKeys ( 1763c6e )
Add MaterializedViews and LogicalViews APIs ( 1763c6e )
Add MaterializedViews and LogicalViews APIs ( 7340527 )
Add PrepareQuery api and update ExecuteQuery to support it ( 1763c6e )
bigtable: Add support for data APIs for materialized views ( #2508 ) ( 6310a63 )
large-row-skip: Added large-row-skip-callable with configurable rowadapter ( #2509 ) ( ba193ef )
Next release from main branch is 2.55.0 ( #2506 ) ( 4e45837 )
Publish row_key_schema fields in table proto and relevant admin APIs to setup a table with a row_key_schema ( 7340527 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 91e4369 )
Documentation
Fixed formatting of resource path strings ( 7340527 )
March 11, 2025
Feature
You can use Cloud KMS Autokey to automate the creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters. This feature is generally available (GA) .
Feature
Data lineage for Dataflow jobs is generally available (GA) in the Bigtable Beam connector ( BigtableIO ) and the Bigtable HBase Beam connector ( CloudBigtableIO ). For more information, see Tracking lineage .
March 10, 2025
Libraries
Java
2.54.0 (2025-02-28)
Features
Next release from main branch is 2.54.0 ( #2498 ) ( f967ded )
Dependencies
Update shared dependencies ( #2493 ) ( e1d09e7 )
March 04, 2025
Feature
Bigtable is available in the europe-north2 (Stockholm) region. For more information, see Bigtable locations .
March 03, 2025
Libraries
Python
2.29.0 (2025-02-26)
Features
Add support for array and float32 SQL query params ( #1078 ) ( 89b8da8 )
Bug Fixes
Grpc channel refresh ( #1087 ) ( f44b36b )
Java
2.53.0 (2025-02-21)
Features
Skip large rows ( #2482 ) ( cd7f82e )
February 24, 2025
Feature
Bigtable Data Boost , a serverless compute service designed for high-throughput read jobs and queries, is generally available (GA) .
Feature
Automated backup for Bigtable is generally available (GA) . For more information, see the Backups overview .
February 17, 2025
Libraries
Java
2.52.0 (2025-02-14)
Features
Automated backups are supported in the admin client ( #2472 ) ( 48633e6 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( 47ca299 )
Extend timeouts for check consistency ( 47ca299 )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.52.0 ( #2490 ) ( ca25d4e )
Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #2481 ) ( deb1f79 )
February 10, 2025
Libraries
Java
2.51.2 (2025-02-03)
Bug Fixes
Add known conformance test failures ( #2474 ) ( 15488fe )
Dependencies
Update shared dependencies ( #2473 ) ( 4d6d419 )
February 03, 2025
Feature
Tags data for Bigtable instances is now included in Cloud Billing data, letting you use tagged Bigtable instances to gain visibility into your resource usage and spending. For more information, see Understand standard and detailed usage cost data .
January 27, 2025
Libraries
Go
1.35.0 (2025-01-22)
Features
bigtable: Hot backups ( #11215 ) ( 238ac1c )
Bug Fixes
bigtable: Allow nil condition in conditional mutation ( #11457 ) ( d83bc05 )
bigtable: Do not retry conditional mutate ( #11437 ) ( ce8c9b1 )
bigtable: Mutate groups even after first error ( #11434 ) ( 6ffe32b )
bigtable: Retry correct mutations ( #11388 ) ( ca2c4e3 )
bigtable: Track number of readrows to set rowsLimit in subsequent requests ( #10213 ) ( abb615e )
January 20, 2025
Libraries
Python
2.28.1 (2025-01-17)
Bug Fixes
Allow empty headers for btql routing ( #1072 ) ( e7ecfeb )
January 13, 2025
Libraries
Python
2.28.0 (2025-01-08)
Features
Add generated sync client ( #1017 ) ( f974823 )
Java
2.51.1 (2025-01-10)
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.50.0 ( #2464 ) ( d63dd43 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #2461 ) ( ed24b4c )
Update googleapis/sdk-platform-java action to v2.51.1 ( #2460 ) ( 35c979f )
Java
2.51.1 (2025-01-10)
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.50.0 ( #2464 ) ( d63dd43 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #2461 ) ( ed24b4c )
Update googleapis/sdk-platform-java action to v2.51.1 ( #2460 ) ( 35c979f )
January 06, 2025
Libraries
Go
1.34.0 (2025-01-02)
Features
bigtable/admin: Add support for Cloud Bigtable Node Scaling Factor for CBT Clusters ( 7250d71 )
bigtable: Add feature flags proto for Direct Access ( 2c83297 )
bigtable: Async refresh dry run in parallel with sync refresh ( #11066 ) ( 169e309 )
Bug Fixes
bigtable: Correct the 'method' label value ( #11350 ) ( 6aa27dc )
bigtable: Resolve discrepancy between server and client qps ( #11224 ) ( c500179 )
bigtable: Update golang.org/x/net to v0.33.0 ( e9b0b69 )
bigtable: Update google.golang.org/api to v0.203.0 ( 8bb87d5 )
bigtable: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files. This change is expected to affect very few if any users of this client library. For more information, see https://togithub.com/googleapis/google-cloud-go/issues/11020. ( 8bb87d5 )
Documentation
bigtable: Add todos ( #11280 ) ( d4f2449 )
bigtable: Adding shut down log ( #11293 ) ( 6cf33a8 )
December 23, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.51.0 (2024-12-17)
Features
Introduce java.time ( #2415 ) ( bb96c3e )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.0 ( a5444a5 )
Move resource detection to the first export to avoid slow start ( #2450 ) ( cec010a )
Dependencies
Update sdk-platform-java dependencies ( #2448 ) ( 825e717 )
December 18, 2024
Feature
You can now enable 2x node scaling when you create a new Bigtable cluster. This cluster configuration lets Bigtable treat two standard nodes as a larger, single compute node, and the cluster is always scaled in increments of two nodes. This feature is generally available (GA) .
Change
The Preview of Bigtable automated backup has been expanded to let you configure the backup retention period in automated backup policies, and the default is now seven days. For more information, see Update an automated backup policy .
December 17, 2024
Feature
You can use Organization Policy Service custom constraints to manage specific operations on Bigtable resources. For more information, see Use custom organization policies . This feature is generally available (GA) .
December 16, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.50.0 (2024-12-06)
Features
Add support for Row Affinity app profiles ( #2341 ) ( cb4d60e )
December 12, 2024
Feature
Bigtable is now supported by Database Center, which is in Preview . Database Center is an AI-assisted dashboard that gives you one centralized view across your entire database fleet. With this release, Database Center displays health issues for Bigtable availability and data protection. For more information, see Database health issues .
December 11, 2024
Feature
You can now enable row-affinity routing to let Bigtable automatically ensure that single-row requests for a given row are routed to the same cluster. This feature is generally available (GA) .
Feature
You can now use the Google Cloud console to create and manage authorized views of your Bigtable tables.
Announcement
You can now select a row in a Bigtable Studio query results table to view formatted row data. For more information, see Query your data with SQL in the query editor .
December 09, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.49.0 (2024-12-03)
Features
Add support for table deletion protection ( #2430 ) ( 687b6df )
Bug Fixes
Allow factory to export to different projects ( #2374 ) ( 06b912c )
Send priming requests on the channel directly ( #2435 ) ( b76698d )
December 02, 2024
Change
To create a Bigtable instance, a user or account must be a principal in a role with the permission bigtable.clusters.create . For more information, see Bigtable access control with IAM .
November 25, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.48.0 (2024-11-19)
Features
Enable trailer optimization by default ( #2421 ) ( 7b2c4e4 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.50.0 ( 6b35b47 )
Make client side metrics tag in sync with server ( #2401 ) ( bba4183 )
Dependencies
Revert downgrade grpc to 1.67.1 #2366 ( #2414 ) ( 710fa52 )
Update dependency com.google.cloud:gapic-libraries-bom to v1.48.0 ( #2422 ) ( 2088a39 )
Update sdk-platform-java dependencies ( #2418 ) ( c12bb01 )
November 18, 2024
Feature
You can now create a Data Boost app profile and view Data Boost metrics in the Google Cloud console. Data Boost for Bigtable is in Preview . For more information, see Create and configure app profiles .
Feature
Bigtable is now available in the northamerica-south1 (Mexico) region. For more information, see Bigtable locations .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.47.0 (2024-11-13)
Features
Add an experimental feature to skip waiting for trailers for unary ops ( #2404 ) ( cf58f26 )
Add internal "deadline remaining" client side metric #2341 ( #2370 ) ( 75d4105 )
Bug Fixes
Simplify remaining deadline metric impl ( #2410 ) ( 9796d57 )
Python
Changes for google-cloud-bigtable
2.27.0 (2024-11-12)
Features
Add support for Cloud Bigtable Node Scaling Factor for CBT Clusters ( #1023 ) ( 0809c6a )
Surface retry param to Table.read_row api ( #982 ) ( a8286d2 )
Bug Fixes
Registering duplicate instance ( #1033 ) ( 2bca8fb )
November 04, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.46.0 (2024-10-29)
Features
Test proxy support SSL backend ( #2381 ) ( 3cbf4ab )
Bug Fixes
Fix client blocking latency ( #2346 ) ( 3801961 )
Fix first response latencies ( #2382 ) ( 8b2953e )
Dependencies
Update sdk-platform-java dependencies ( #2384 ) ( 81d7215 )
October 21, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.45.1 (2024-10-14)
Dependencies
Update sdk-platform-java dependencies ( #2378 ) ( 2499a3c )
deps: Update the Java code generator (gapic-generator-java) to 2.47.0 ( cdc2cc7 )
October 08, 2024
Feature
Hot backups, optimized backups to restore your data to production performance availability more efficiently, are now generally available (GA) . For more information, see Backups overview .
October 07, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.45.0 (2024-10-03)
Features
Add support for Cloud Bigtable Node Scaling Factor for CBT Clusters ( caf879c )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.46.1 ( caf879c )
Support override monitoring endpoint ( #2364 ) ( a341eb8 )
Dependencies
Downgrade grpc to 1.67.1 ( #2366 ) ( 1baecb3 )
Update dependency com.google.cloud:gapic-libraries-bom to v1.45.0 ( #2363 ) ( 9d24c45 )
September 30, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.44.1 (2024-09-26)
Bug Fixes
Add RetryCallable to the callable chain ( #2348 ) ( 0330d77 )
Pass deadline through ExecuteQuery RetrySettings ( #2355 ) ( 6bc9820 )
Time based flakiness in execute query deadline test ( #2358 ) ( b474173 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.36.1 ( #2351 ) ( 40c428e )
September 25, 2024
Announcement
You can perform similarity vector search in Bigtable by finding the K-nearest neighbors. This feature is available as part of the GoogleSQL for Bigtable Preview .
September 23, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.44.0 (2024-09-16)
Features
Add APIs to enable hot backups ( #2313 ) ( 6d004cd )
Add support for awaiting Data Boost ( #2329 ) ( 8556574 )
Dependencies
Update shared dependencies ( #2337 ) ( dc65bd5 )
August 28, 2024
Feature
The Preview of Data Boost for Bigtable has been expanded to let you use Data Boost compute resources when you read Bigtable data using a Spark application. For more information, see Use the Bigtable Spark connector .
August 26, 2024
Feature
You can use EXPORT DATA statements to directly export BigQuery data to Bigtable (reverse ETL) . This feature is generally available (GA).
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.43.0 (2024-08-22)
Features
Add fields and the BackupType proto for Hot Backups ( #2300 ) ( acaa3ff )
Allow non default service account in DirectPath ( #2312 ) ( 09d0f23 )
bigtable: Remove deprecated Bytes from BigEndianBytesEncoding ( #2309 ) ( 32f244f )
Enable hermetic library generation ( #2234 ) ( 169aea5 )
Bug Fixes
Add missing call to EqualsTester#testEquals ( #2307 ) ( 8b49f9c )
Dependencies
Update shared dependencies ( #2314 ) ( ab392ee )
August 19, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-bigtable
2.26.0 (2024-08-12)
Features
Add fields and the BackupType proto for Hot Backups ( #1010 ) ( b95801f )
Add MergeToCell to Mutation APIs ( f029a24 )
Add min, max, hll aggregators and more types ( f029a24 )
Async execute query client ( #1011 ) ( 45bc8c4 )
Bug Fixes
Use single routing metadata header ( #1005 ) ( 20eeb0a )
Documentation
Add clarification around SQL timestamps ( #1012 ) ( 6e80190 )
Corrected various type documentation ( f029a24 )
August 13, 2024
Announcement
You can now enable client-side metrics with the Bigtable client library for Go. Used in conjunction with server-side monitoring metrics, client-side metrics can provide a complete, actionable view of Bigtable performance. For more information, see Set up client-side metrics .
August 12, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.42.0 (2024-08-06)
Features
Support float32, float64, and array type query params ( #2297 ) ( a65640e )
Bug Fixes
Adapt toString tests to introduction of java.time in gax ( 93f66a7 )
Dependencies
Update shared dependencies ( 93f66a7 )
August 01, 2024
Feature
Bigtable supports querying in SQL . This feature is available in Preview . For more information, see Introduction to SQL for Bigtable .
Feature
The Bigtable Studio query editor is available in Preview . For more information, see Manage your data using Bigtable Studio .
Feature
Bigtable aggregates let you build distributed counters and aggregate your Bigtable data at write time using min, max, sum, or HLL. This feature is generally available (GA) . For more information, see Aggregate values at write time .
July 29, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
5.1.2 (2024-07-22)
Bug Fixes
Throw away excess data in order to avoid delivering duplicate data ( #1453 ) ( 069239d )
Java
Changes for google-cloud-bigtable
2.41.0 (2024-07-24)
Features
Add MergeToCell to Mutation APIs ( #2279 ) ( 0ce8a2a )
Add support for MergeToCell API ( #2258 ) ( 191d15c )
Add support for new functions ( #2287 ) ( dd6583a )
Create new environment variable to toggle directpath scoped to cloud bigtable. ( #2261 ) ( 9062944 )
Implement ExecuteQuery API for SQL support ( #2280 ) ( 25218e8 )
Dependencies
Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.4 ( #2282 ) ( d00a9e0 )
Python
Changes for google-cloud-bigtable
2.25.0 (2024-07-18)
Features
Publish ProtoRows Message ( 7ac8e14 )
Publish the Cloud Bigtable ExecuteQuery API ( 7ac8e14 )
Bug Fixes
Allow protobuf 5.x ( 7ac8e14 )
July 25, 2024
Feature
The Preview of automated backup has been expanded to let you enable and disable automated backup in the Google Cloud console. For more information, see the automated backup documentation.
July 15, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
5.1.1 (2024-07-11)
Bug Fixes
Ensure that during resumption of a scan, rows that have not been observed by the caller are re-requested ( #1444 ) ( 2d8de32 )
Remove custom readrows retry logic and rely on gax for retries ( #1422 ) ( 3e0a46e )
Java
Changes for google-cloud-bigtable
2.40.0 (2024-06-28)
Features
Add String type with Utf8Raw encoding to Bigtable API ( #2191 ) ( e7f03fc )
Bug Fixes
Add getServiceName() to EnhancedBigTableStubSettings ( #2256 ) ( da703db )
Remove grpclb ( #2033 ) ( 7355375 )
Dependencies
Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.3 ( #2268 ) ( 4573220 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2269 ) ( 69fef96 )
Update shared dependencies ( #2265 ) ( 61014ca )
June 17, 2024
Feature
The Python client library for Bigtable now offers an asynchronous API for use with asynchronous applications. The async API is generally available (GA) . To get started, see the Python hello world .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.39.5 (2024-06-10)
Bug Fixes
Make change stream unknown mod error more actionable ( #1938 ) ( e7ba045 )
Rate limiting should be ineffective when RateLimitInfo is not present ( #2243 ) ( a0ec901 )
Dependencies
Update shared dependencies ( #2252 ) ( 0131eb3 )
Python
Changes for google-cloud-bigtable
2.24.0 (2024-06-11)
Features
Add String type with Utf8Raw encoding to Bigtable API ( #968 ) ( 2a2bbfd )
Improve async sharding ( #977 ) ( fd1f7da )
Bug Fixes
backup: Backup name regex ( #970 ) ( 6ef122a )
Improve rowset revision ( #979 ) ( da27527 )
June 10, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
5.1.0 (2024-05-28)
Features
Add feature for copying backups ( #1153 ) ( 91f85b5 )
Add String type with Utf8Raw encoding to Bigtable API ( #1419 ) ( 724b711 )
Publish Automated Backups protos ( #1391 ) ( 17838ed )
Trusted Private Cloud support, use the universeDomain parameter ( #1386 ) ( c0c287e )
Bug Fixes
deps: Update dependency @google-cloud/precise-date to v4 ( #1318 ) ( 9dcef90 )
Extend timeouts for deleting snapshots, backups and tables ( #1387 ) ( 1a6f59a )
Fix flaky test by extending timeout ( #1350 ) ( 906ac79 )
Improve retry logic for streaming API calls ( #1372 ) ( e8083a4 )
Remove the watermarks ( #1313 ) ( 0126a0e )
June 03, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.39.4 (2024-05-28)
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.10.2 ( #2236 ) ( 2609103 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.2 ( #2237 ) ( 6728931 )
Update shared dependencies ( #2235 ) ( 8d38150 )
May 27, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.39.3 (2024-05-21)
Bug Fixes
Retry INTERNAL retriable auth errors ( #2239 ) ( 4cdb6da )
May 13, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.39.2 (2024-05-09)
Dependencies
Update shared dependencies ( #2221 ) ( 17f7a9a )
2.39.1 (2024-05-08)
Bug Fixes
Batch time series data when exporting client-side metric ( #2222 ) ( 1f9f169 )
Remove stale module from bom ( #2218 ) ( 7145864 )
May 06, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.39.0 (2024-04-29)
Features
Admin API changes for Data Boost ( #2181 ) ( 3b1886b )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.36.0 ( #2215 ) ( 5a9259e )
Update shared dependencies ( #2190 ) ( 3f37d8d )
May 02, 2024
Feature
The Bigtable Spark connector lets you read and write data from and to Bigtable using Spark SQL and DataFrames inside your Spark application. This feature is generally available (GA) .
April 22, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.38.0 (2024-04-15)
Features
Add Data Boost configurations to admin API ( f29c5bb )
Add feature flag for client side metrics ( #2179 ) ( f29c5bb )
Migrate to OTEL and enable metrics by default ( #2166 ) ( 1682939 )
Bug Fixes
Add more error handling ( #2203 ) ( c2a63f7 )
Fix export to log detect resource errors ( #2197 ) ( d32fbb7 )
Python
Changes for google-cloud-bigtable
2.23.1 (2024-04-15)
Bug Fixes
Use insecure grpc channel with emulator ( #946 ) ( aa31706 )
April 16, 2024
Change
Client-side metrics are enabled by default in the Bigtable client library for Java versions 2.38.0 and later.
April 11, 2024
Feature
Bigtable now integrates with LangChain, an LLM orchestration framework. For more information, see Build LLM-powered applications using LangChain . This feature is available in Preview .
April 09, 2024
Feature
Bigtable Data Boost , a serverless compute service designed for high-throughput read jobs and queries, is available in Preview .
Feature
You can control access to data in your Bigtable tables with authorized views . This feature is generally available (GA) .
Feature
Bigtable app profiles let you configure request priorities to prioritize certain workload data requests over others. This feature is now generally available (GA) .
Feature
You can now build distributed counters with Bigtable with write-time aggregates . This feature is available in Preview .
Change
Bigtable now lets you increase the retention period in the garbage collection policy for a column family in a replicated table. For more information, see Changing age-based garbage collection policies .
April 01, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.37.0 (2024-03-27)
Features
Add admin APIs for AuthorizedView ( #2175 ) ( 13d1df3 )
Support AuthorizedView in bigtable data client ( #2177 ) ( 4b255d0 )
Bug Fixes
Update the accounting of partial batch mutations ( #2149 ) ( 4158094 )
Dependencies
Update shared dependencies ( #2174 ) ( f313f14 )
March 21, 2024
Feature
You can now view Bigtable cost data with instance granularity in the Google Cloud Billing detailed export to BigQuery. For more information, see Structure of detailed cost data export .
March 19, 2024
Feature
You can now create daily backups of your Bigtable table by enabling automated backup. This feature is available in Preview . For details, see Automated backup .
March 18, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.36.0 (2024-03-13)
Features
Add models for type APIs ( #2160 ) ( 8277ea8 )
Publish new bigtable APIs for types and aggregates ( #2158 ) ( 430dffe )
March 11, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.35.1 (2024-03-07)
Dependencies
Update shared dependencies ( #2140 ) ( a6c9f9b )
2.35.0 (2024-03-05)
Features
Add authorized view bindings to Cloud Bigtable data APIs and messages ( #2144 ) ( ae89709 )
Bug Fixes
Per-connection metrics issue when using a different Bigtable project ( #2143 ) ( 8dbd680 )
February 26, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.34.0 (2024-02-21)
Features
Add the export logic for per-connection error rate metric ( #2121 ) ( d053f2d )
Create the backbone of counting errors per connection each minute. ( #2094 ) ( 7d27816 )
Dependencies
Update actions/setup-java action to v4 ( #2106 ) ( a694296 )
Update dependency com.google.cloud:gapic-libraries-bom to v1.30.0 ( #2126 ) ( f613bd0 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.25.0 ( #2113 ) ( ba1973e )
Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.1 ( #2119 ) ( 0a7ad66 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.10.1 ( #2122 ) ( 99ec284 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.1 ( #2123 ) ( 12d961a )
February 19, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.33.0 (2024-02-12)
Features
Define the metrics for collecting per connection error count. ( #2088 ) ( b212bbf )
Bug Fixes
Deflake backup integration tests due to deleteBackup timeouts ( #2105 ) ( 0948da7 )
Extend timeouts for deleting snapshots, backups and tables ( #2108 ) ( df1d307 )
Dependencies
Autogen: Set packed = false on field_behavior extension ( #2101 ) ( 7c438c6 )
Update actions/setup-java action to v4 ( #2099 ) ( a6c7c77 )
Update dependency com.google.cloud:gapic-libraries-bom to v1.29.0 ( #2109 ) ( ef88519 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.24.0 ( #2085 ) ( 3851a5e )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.10.0 ( #2091 ) ( 2516a09 )
Update protobuf to 25.2 in WORKSPACE ( #2086 ) ( 3eafcee )
February 12, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-bigtable
2.23.0 (2024-02-07)
Features
Add async data client preview ( 7088e39 )
Adding feature flags for routing cookie and retry info ( #905 ) ( 1859e67 )
Bug Fixes
Fix ValueError in test__validate_universe_domain ( #929 ) ( aa76a5a )
February 01, 2024
Feature
The Bigtable Studio query builder is generally available (GA) . The query builder lets you create and run queries and view the results directly from the Google Cloud console. For details, see Build queries in the console .
January 31, 2024
Feature
Bigtable is available in the africa-south1 (Johannesburg) region. For more information, see Bigtable locations .
January 29, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.32.0 (2024-01-25)
Features
Append version to the client name in client-side metrics. ( #2062 ) ( 9a0cdc8 )
Bug Fixes
Deps: Update the Java code generator (gapic-generator-java) to 2.32.0 ( #2060 ) ( c218ac3 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.23.0 ( #2076 ) ( 5d1079c )
Update dependency com.google.truth.extensions:truth-proto-extension to v1.3.0 ( #2058 ) ( 1622a9f )
Update shared dependencies ( #2056 ) ( f73ba40 )
January 22, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.31.0 (2024-01-12)
Features
Add a flag to add / remove routing cookie from callable chain ( #2032 ) ( 201e631 )
Adding feature flags for routing cookie and retry info ( #2031 ) ( 08c5bf1 )
Count row merging errors as internal errors ( #2045 ) ( fc7845b )
Enable feature flag when setting is enabled ( #2043 ) ( e0d90db )
Handle retry info so client respect the delay server sets ( #2026 ) ( f1b7fc7 )
Bug Fixes
Deps: Update the Java code generator (gapic-generator-java) to 2.31.0 ( #2044 ) ( d9042a5 )
Fix RetryInfo algorithm and tests ( #2041 ) ( dad7517 )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.27.0 ( #2030 ) ( a492d02 )
Update dependency com.google.truth.extensions:truth-proto-extension to v1.2.0 ( #2035 ) ( 46e1e03 )
December 28, 2023
Announcement
The Cloud Bigtable documentation now includes a Bigtable for DynamoDB users guide for those considering a migration to Bigtable.
December 18, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-bigtable
2.22.0 (2023-12-12)
Features
Add support for Cloud Bigtable request priorities in app profiles ( #871 ) ( a4d551e )
Add support for Python 3.12 ( #888 ) ( 4f050aa )
Introduce compatibility with native namespace packages ( #893 ) ( d218f4e )
Publish CopyBackup protos to external customers ( #855 ) ( 4105df7 )
Bug Fixes
Add feature flag for improved mutate rows throttling ( e5af359 )
Add lock to flow control ( #899 ) ( e4e63c7 )
Mutations batcher race condition ( #896 ) ( fe58f61 )
Require google-cloud-core 1.4.4 ( #866 ) ( 09f8a46 )
Use retry_async instead of retry in async client ( 597efd1 )
Documentation
Minor formatting ( e5af359 )
December 13, 2023
Feature
Reverse scans in Cloud Bigtable let you read a range of rows backwards. This feature is now generally available (GA) . For details, see Reverse scans .
December 11, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.30.0 (2023-12-05)
Features
Client sends routing cookie back to server ( #1888 ) ( 4c73abd )
Dependencies
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.1 ( #1990 ) ( 7ad70e3 )
Update shared dependencies ( #2016 ) ( 4e49dff )
November 13, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.29.1 (2023-11-07)
Bug Fixes
Add getPageSize() to QueryPaginator ( 42a7e36 )
Dependencies
Update shared dependencies ( #1985 ) ( 0d1f620 )
2.25.3 (2023-11-08)
Bug Fixes
A rare race condition in the row merger ( #1939 ) ( #2002 ) ( 6de74f3 )
2.23.5 (2023-11-07)
Bug Fixes
Remove javadoc external link configuration ( #1815 ) ( #1999 ) ( e7752be )
2.23.4 (2023-11-06)
Bug Fixes
A rare race condition in the row merger ( #1939 ) ( #1988 ) ( 31b084a )
November 08, 2023
Feature
Cloud Bigtable app profiles now let you configure request priorities to prioritize certain workload data requests over others. This feature is available in Preview .
October 30, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.29.0 (2023-10-26)
Features
Add APIs to enable request priorities ( #1959 ) ( befd140 )
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.28 ( #1966 ) ( 8fb09e5 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.28 ( #1967 ) ( 117e0ec )
Update shared dependencies ( #1964 ) ( bf5a9b7 )
October 16, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.28.0 (2023-10-12)
Features
Add support for Cloud Bigtable Request Priorities in App Profiles ( #1954 ) ( 8822571 )
Add test profile to push metrics to test environment ( #1921 ) ( 2104315 )
Dependencies
Update shared dependencies ( #1955 ) ( f29717e )
October 09, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.27.4 (2023-09-29)
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.21.0 ( #1942 ) ( f8d533f )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.16.1 ( #1933 ) ( 159636a )
October 06, 2023
Feature
Cloud Bigtable instance, cluster, and table metadata is automatically synced to Data Catalog , a feature of Dataplex, for improved data discovery and governance. This feature is generally available (GA) .
October 02, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.27.3 (2023-09-29)
Bug Fixes
A rare race condition in the row merger ( #1939 ) ( fccd710 )
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.27 ( #1919 ) ( 56d6b40 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.27 ( #1920 ) ( ca1dd5b )
Update gapic-generator-java to 2.26.0 ( #1936 ) ( 15cd486 )
September 25, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.25.2 (2023-09-18)
Bug Fixes
Check that all bulk mutation entries are accounted for ( #1907 ) ( #1923 ) ( e4db745 )
Make sure to propagate the response when throttling is enabled ( #1908 ) ( #1922 ) ( 7ec5dd5 )
Miscellaneous Chores
Update release tag to 2.25.2 ( #1926 ) ( 9d5868b )
September 19, 2023
Feature
Cloud Bigtable is available in the me-central2 (Dammam) region. For more information, see Bigtable locations .
September 18, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.27.2 (2023-09-13)
Bug Fixes
Check that all bulk mutation entries are accounted for ( #1907 ) ( 9ad8a00 )
Set wait timeout on watchdog ( #1913 ) ( f8ba6fe )
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.26 ( #1896 ) ( dfc4231 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.26 ( #1897 ) ( d446856 )
Update shared dependencies ( #1901 ) ( 96f2690 )
2.27.1 (2023-09-12)
Bug Fixes
Aggregate batching throttling latency per attempt and reset it between ( #1905 ) ( e6cc5f6 )
Make sure to propagate the response when throttling is enabled ( #1908 ) ( f743187 )
Dependencies
Update the Java code generator (gapic-generator-java) to 2.25.0 ( #1902 ) ( f4fe6a0 )
September 11, 2023
Feature
You can now choose not to specify the number of nodes when creating a Cloud Bigtable cluster using the gcloud CLI . This configuration lets Bigtable automatically calculate the number of nodes based on your data footprint and optimize for 50% storage utilization. To learn more, see Create an instance . This feature is generally available (GA) .
September 05, 2023
Announcement
Dataflow templates are available to stream Cloud Bigtable data change records to BigQuery or Pub/Sub. For more information, see Reading a change stream .
August 31, 2023
Feature
You can now use EXPORT DATA statements to directly export BigQuery data to Cloud Bigtable . This feature is in Preview .
August 28, 2023
Feature
Cloud Bigtable is available in the europe-west10 (Berlin) region. For more information, see Bigtable locations .
August 21, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.27.0 (2023-08-17)
Features
Copy backup API support ( #1398 ) ( 558a408 )
Publish CopyBackup protos to external customers ( #1883 ) ( d6e934f )
August 17, 2023
Feature
You can now create a copy of a Cloud Bigtable backup and store it in any project or region where you have a Bigtable instance. This feature is generally available ( GA ). To learn more, see About Bigtable backups .
August 14, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
5.0.0 (2023-08-10)
⚠ BREAKING CHANGES
Upgrade to Node 14 ( #1311 )
Miscellaneous Chores
Upgrade to Node 14 ( #1311 ) ( 4330cb2 )
Java
Changes for google-cloud-bigtable
2.26.0 (2023-08-09)
Features
Add last_scanned_row_key feature ( #1856 ) ( ef30dde )
Enable last_scanned_row_responses feature flag ( #1862 ) ( c2288c9 )
Setup 2.25.x lts branch ( #1866 ) ( 220cf4b )
Bug Fixes
Fix batcher metric labels ( #1829 ) ( 6245c12 )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.24.0 ( #1878 ) ( 0de458d )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.14.0 ( #1873 ) ( bb83064 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.24 ( #1876 ) ( d397c33 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.24 ( #1877 ) ( 1a8be60 )
Python
Changes for google-cloud-bigtable
2.21.0 (2023-08-02)
Features
Add last_scanned_row_responses to FeatureFlags ( #845 ) ( 14a6739 )
Documentation
Minor formatting ( #851 ) ( 5ebe231 )
July 31, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.25.1 (2023-07-25)
Bug Fixes
Update the readRow attempt timeouts to be in line with unary RPCs instead of scans ( #1834 ) ( 168c33e )
Dependencies
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.0 ( #1847 ) ( 825faaa )
Update shared dependencies ( #1845 ) ( 88e1892 )
Update the Java code generator (gapic-generator-java) to 2.23.1 ( #1846 ) ( 78fd837 )
July 24, 2023
Feature
Cloud Bigtable is available in the europe-west12 (Turin) and me-central1 (Doha) regions. For more information, see Bigtable locations .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.25.0 (2023-07-14)
Features
Change stream retention to create and update table ( #1823 ) ( 05fca58 )
Bug Fixes
Fix batch mutation limit ( #1808 ) ( ed24d4f )
Update default sample row key attempt timeout to 5 min ( #1827 ) ( 2f363ef )
Documentation
Fix formatting for reversed order field example ( #1836 ) ( 10a0426 )
Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( #1826 ) ( 159fe38 )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.22.0 ( #1838 ) ( fba2c49 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1833 ) ( cb160af )
Python
Changes for google-cloud-bigtable
2.20.0 (2023-07-17)
Features
rel="noreferrer noopener"})
Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( d5720f8 )
Bug Fixes
Add async context manager return types ( #828 ) ( 475a160 )
Documentation
Fix formatting for reversed order field example ( #831 ) ( fddd0ba )
July 18, 2023
Feature
Cloud Bigtable change streams are now generally available (GA) . A change stream captures changes to data in a table as the changes happen, letting you stream them for processing or analysis. For more information, see Change streams overview .
July 10, 2023
Feature
Committed use discounts are now generally available (GA) for Cloud Bigtable in exchange for a commitment to continuously spend a certain amount on Bigtable nodes for one year or three years. For details, see Committed use discounts .
July 03, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.24.1 (2023-06-27)
Bug Fixes
Remove javadoc external link configuration ( #1815 ) ( 9c71a93 )
2.24.0 (2023-06-27)
Features
Add experimental reverse scan for public preview ( #1809 ) ( f4f2e2e )
Reverse scans public preview ( #1711 ) ( 176360f )
Dependencies
Update dependency com.google.truth.extensions:truth-proto-extension to v1.1.5 ( #1801 ) ( a8961e8 )
Update dependency kr.motd.maven:os-maven-plugin to v1.7.1 ( #1792 ) ( 80acca0 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.23 ( #1800 ) ( a9172c4 )
Update shared dependencies to 3.12.0, monitoring to 3.21.0, update renovate config ( #1807 ) ( 12fc8cd )
June 30, 2023
Feature
Reverse scans in Cloud Bigtable are now available in Preview . For details, see Reverse scans .
Feature
The maximum retention period for a Cloud Bigtable backup has been increased from 30 days to 90 days, giving you more robust data protection and data quality control. This feature is generally available (GA) . For more information on how Bigtable backups work, see About backups .
June 28, 2023
Feature
The Cloud Bigtable metric Five-second maximum requests per minute is now generally available (GA) . This metric measures the maximum number of requests received in a five-second span per minute to help you identify short bursts of traffic. For a full description, see Metrics .
June 27, 2023
Feature
You can now enable batch write flow control when you use Dataflow to send batch writes to Cloud Bigtable. This generally available (GA) feature automatically rate-limits traffic to avoid cluster overload and works with Bigtable autoscaling to ensure the optimal number of nodes is available to handle the batch write. For more information, see Batch write flow control .
June 12, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.23.3 (2023-06-08)
Bug Fixes
Set wait timeout and update default attempt timeout to 30 minutes ( #1779 ) ( 11019b8 )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.20.0 ( #1785 ) ( 8ddd370 )
Update gapic-generator-java to 2.21.0 ( #1760 ) ( 05545f8 )
Update shared dependencies to 3.11.0 ( #1783 ) ( 96aaa2a )
Python
Changes for google-cloud-bigtable
2.19.0 (2023-06-08)
Features
Add ChangeStreamConfig to CreateTable and UpdateTable ( #786 ) ( cef70f2 )
Bug Fixes
Add a callback function on flush_rows ( #796 ) ( 589aa5d )
Documentation
samples: Add region tags ( #788 ) ( ecf539c )
June 05, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.6.1 (2023-05-30)
Bug Fixes
Properly handle asynchronous read from stream ( #1284 ) ( 55d86ba ). This could result in silently dropped rows in a createReadStream . The bug is active when the ReadRows stream would be piped into a consumer that would defer the processing of the rows until the next event loop run (i.e. use a Transform that would defer the callback invocation via setTimeout() ).
Java
Changes for google-cloud-bigtable
2.23.2 (2023-05-30)
Documentation
samples: Add bigtable filter snippet ( #1762 ) ( 48a6ed0 )
samples: Remove client initialization as the snippets are not used standalone ( #1768 ) ( a6ac97c )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.19.0 ( #1769 ) ( 956c851 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.10.1 ( #1767 ) ( 901b88f )
Update dependency com.google.truth.extensions:truth-proto-extension to v1.1.4 ( #1770 ) ( a94a522 )
Update doclet version to v1.9.0 ( #1761 ) ( a5d4215 )
May 29, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.6.0 (2023-05-26)
Features
Add ChangeStreamConfig to CreateTable and UpdateTable ( #1269 ) ( 2b05fa4 )
4.5.2 (2023-05-24)
Bug Fixes
Parsing for qualifiers with colon characters ( #1277 ) ( b80f533 )
May 23, 2023
Change
You can now view information about which customer-managed encryption keys (CMEK) are used to protect your Cloud Bigtable resources and projects using Cloud Key Management Service (KMS). This feature is generally available (GA) . For more information, see View key usage .
May 22, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-bigtable
2.18.1 (2023-05-11)
Bug Fixes
Revert "Feat: Threaded MutationsBatcher" ( #773 ) ( a767cff )
May 15, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.23.1 (2023-05-11)
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.18.0 ( #1749 ) ( 1d7d391 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.9.0 ( #1744 ) ( 60df07f )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.22 ( #1746 ) ( 86ea9db )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.22 ( #1747 ) ( caa4462 )
2.23.0 (2023-05-09)
Features
Resizing channel pool size based on the work load ( #1271 ) ( 7fb1a09 )
Documentation
Clean up BetaApi annotations from built in metrics API ( #1741 ) ( c2fbd04 )
Python
Changes for google-cloud-bigtable
2.18.0 (2023-05-10)
Features
Publish RateLimitInfo and FeatureFlag protos ( #768 ) ( 171fea6 )
Threaded MutationsBatcher ( #722 ) ( 7521a61 )
Bug Fixes
Pass the "retry" when calling read_rows. ( #759 ) ( 505273b )
Documentation
Fix delete from column family example ( #764 ) ( 128b4e1 )
Fix formatting of request arg in docstring ( #756 ) ( 45d3e43 )
May 08, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.5.1 (2023-04-28)
Bug Fixes
Remove bigtable instances left over when system tests run ( #1265 ) ( 0526612 )
Java
Changes for google-cloud-bigtable
2.22.0 (2023-05-02)
Features
Add APIs to enable batch write flow control ( #1730 ) ( b518d68 )
Add rate limiting callable ( #1729 ) ( ee0da11 )
Send feature flag when flow control is enabled ( #1731 ) ( ba147c3 )
Bug Fixes
Add feature flag proto to BUILD file ( #1726 ) ( 7e5c646 )
May 01, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.21.0 (2023-04-27)
Features
Track the latency a request is queued on the grpc channel ( #1604 ) ( bf3e7dd )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.17.0 ( #1722 ) ( c6f7767 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.8.0 ( #1720 ) ( aa230b5 )
April 24, 2023
Change
Cloud Bigtable is not available in the europe-west12 (Turin) region.
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.20.4 (2023-04-17)
Documentation
Make delete examples consistent with other languages ( #1710 ) ( 2d80188 )
Dependencies
Update actions/setup-go action to v4 ( #1700 ) ( 1fd13ba )
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.16.0 ( #1712 ) ( f3bb088 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.21 ( #1704 ) ( d60c946 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.21 ( #1705 ) ( 8f3d69d )
Update shared dependencies ( #1703 ) ( 076b411 )
Upgrade maven-enforcer-plugin to 3.3.0, remove duplicate entry in pom ( #1702 ) ( 392fc69 )
April 17, 2023
Announcement
The Cloud Bigtable documentation has been updated to include guidance on deleting data. For details, see Deletes .
April 10, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.20.3 (2023-04-03)
Dependencies
Upgrade shared dependencies to 3.6.0 and monitoring to 3.15.0 ( #1688 ) ( c0bad0d )
April 04, 2023
Announcement
The Cloud Bigtable documentation has been updated to include guidance on using regional endpoints. For details, see Regional endpoints .
April 03, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.5.0 (2023-03-20)
Features
Add npm run compile to the testproxy command ( #1258 ) ( 52c06a2 )
Bug Fixes
Always set the retry attempt to 0 for now ( #1251 ) ( 5ee6f19 )
Java
Changes for google-cloud-bigtable
2.20.2 (2023-03-29)
Bug Fixes
Higher application blocking latency precision ( #1676 ) ( 45ce93b )
Make ChangeStreamRecord interface serializable ( #1685 ) ( b97badb )
Mark readRow requests as unary operations ( #1679 ) ( f88bb67 )
March 31, 2023
Feature
Cloud Bigtable instance and table metadata is now automatically synced to Data Catalog, a feature of Dataplex, for improved data discovery and governance. Metadata is not synced for a project with an organization policy that restricts resource locations. To get started, see Manage data assets using Data Catalog . This feature is available in Preview .
Change
You can now use Key Visualizer for Cloud Bigtable to analyze tables that are at least 1 GB. Previously, the minimum table size required for Key Visualizer was 30 GB. For more information on troubleshooting with Key Visualizer, see the Key Visualizer overview .
March 27, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.20.1 (2023-03-21)
Bug Fixes
If new_partitions is size 0, do not enforce size check ( #1673 ) ( 07bcfd9 )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.14.0 ( #1668 ) ( 06f9615 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.5.0 ( #1670 ) ( 74cebf3 )
March 23, 2023
Feature
Cloud Bigtable is now available in the europe-west12 (Turin) region. This note is incorrect; see entry for April 24, 2023 .
March 14, 2023
Change
When you restore a backup, if the destination cluster doesn't have enough nodes to store the new table, Cloud Bigtable returns a FAILED_PRECONDITON error message. Previously, a RESOURCE_EXHAUSTED error was returned.
March 06, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.4.0 (2023-03-01)
Features
Add new_partitions field for CloseStream for Cloud Bigtable ChangeStream ( #1247 ) ( ecbdb52 )
Java
Changes for google-cloud-bigtable
2.20.0 (2023-03-02)
Features
Add getNewPartitions method to CloseStream for Bigtable ChangeStream ( #1655 ) ( 8847fed )
Add new_partitions field for CloseStream for Cloud Bigtable ChangeStream ( #1654 ) ( 0e283bf )
Bug Fixes
Fix StackOverflow in ChangeStreamStateMachine due to excessive mods ( #1648 ) ( 9e11106 )
Use org.threeten.bp.Duration for ReadChangeStreamQuery::heartbeatDura… ( #1652 ) ( 87261a9 )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.13.0 ( #1656 ) ( 1c632ec )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.4.0 ( #1657 ) ( c7a3e29 )
Python
Changes for google-cloud-bigtable
2.17.0 (2023-03-01)
Features
Add new_partitions field for CloseStream for Cloud Bigtable ChangeStream ( #740 ) ( 1adcad4 )
2.16.0 (2023-02-27)
Features
Enable "rest" transport in Python for services supporting numeric enums ( c5116e0 )
Publish the Cloud Bigtable Change Streams ( c5116e0 )
Bug Fixes
Add context manager return types ( beb5bf3 )
deps: Require google-api-core>=1.34.0,>=2.11.0 ( c5116e0 )
Documentation
Add documentation for enums ( beb5bf3 )
February 27, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.19.2 (2023-02-21)
Bug Fixes
Change types for Cloud Bigtable Changestream methods ( #1639 ) ( 908d70f )
Dependencies
Update shared deps to 3.3.0 and monitoring to 3.12.0 ( #1643 ) ( 1a54fbf )
February 20, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.3.0 (2023-02-10)
Features
Publish the Cloud Bigtable Change Streams ( #1237 ) ( 000a353 )
Bug Fixes
Out of order read rows fix ( #1231 ) ( 7dbaa6e )
Java
Changes for google-cloud-bigtable
2.19.1 (2023-02-16)
Bug Fixes
Change the return type of Heartbeat::getEstimatedLowWatermark to long ( #1631 ) ( a101494 )
Fix connectivity error count calculation ( #1632 ) ( 0803785 )
test: Fix flaky test ( #1633 ) ( fc29cd3 )
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.20 ( #1626 ) ( 0865023 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.20 ( #1627 ) ( 782e81f )
February 13, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.19.0 (2023-02-10)
Features
Support Cloud Bigtable Changestream ( #1569 ) ( c7b4fdf )
Bug Fixes
Modify ConvertExceptionCallable to retry on Goaway ( #1588 ) ( cf752ea )
Documentation
Fix javadoc code example for awaitOptimizeRestoredTableAsync ( #1617 ) ( 8b23bb9 )
2.18.4 (2023-02-06)
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.11.0 ( #1609 ) ( 88be13e )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.2.0 ( #1610 ) ( 15db117 )
February 06, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.2.0 (2023-01-31)
Features
Added SuggestConversationSummary RPC ( #1182 ) ( 355925e )
4.1.1 (2023-01-30)
Bug Fixes
deps: Use google-gax v3.5.2 ( #1186 ) ( 4b1dd6e )
Pipe metadata along ( #1178 ) ( 0822e4d )
January 30, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.18.3 (2023-01-24)
Bug Fixes
Make channel priming work with batch endpoint ( #1600 ) ( 133c7e5 )
2.18.2 (2023-01-24)
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.10.0 ( #1597 ) ( 1724d4e )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.2 ( #1595 ) ( e466191 )
January 23, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.18.1 (2023-01-17)
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.9.0 ( #1579 ) ( 70c0500 )
January 18, 2023
Announcement
Client-side metrics are now available to customers who use the Cloud Bigtable HBase client for Java version 2.6.4 or later. To learn more about using client-side monitoring metrics for performance optimization and troubleshooting, see the Client-side metrics overview .
January 16, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.18.0 (2023-01-12)
Features
Enable channel priming by default ( #1555 ) ( 303959c )
Bug Fixes
Call attemptStarted method with the request ( #1562 ) ( 325f09c )
Defer instance admin api errors to RPC time rather then client construction time ( #1576 ) ( 06a0ced )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.1 ( #1572 ) ( a68fb80 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.9.2 ( #1573 ) ( e1362aa )
Python
Changes for google-cloud-bigtable
2.15.0 (2023-01-10)
Features
Add support for python 3.11 ( #718 ) ( 803a15e )
December 19, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.17.1 (2022-12-13)
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.8.0 ( #1548 ) ( 48f136d )
December 12, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.17.0 (2022-12-07)
Features
Add a query paginator ( #1530 ) ( 5c8e1f6 )
Add test proxy to java-bigtable client ( #1498 ) ( 132b4e4 )
Implement cross-project table restore ( #1536 ) ( 335977c )
Next release from main branch is 2.17.0 ( #1514 ) ( 4fc6a93 )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom … ( #1531 ) ( ee98338 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.0 ( #1539 ) ( 3244cef )
Update dependency kr.motd.maven:os-maven-plugin to v1.7.1 ( #1518 ) ( 8309681 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.19 ( #1537 ) ( 7f7c478 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.19 ( #1538 ) ( 9d3df57 )
Python
Changes for google-cloud-bigtable
2.14.1 (2022-12-06)
Bug Fixes
Deps: Require google-api-core >=1.34.0, >=2.11.0 ( e5875cb )
Drop usage of pkg_resources ( e5875cb )
Fix timeout default values ( e5875cb )
Documentation
Samples: Snippetgen should call await on the operation coroutine before calling result ( e5875cb )
December 08, 2022
Feature
Cloud Bigtable now lets you restore from a backup to a different project. This feature is generally available (GA) . To learn more, see Bigtable backups .
Feature
The ability to configure deletion protection for a Cloud Bigtable table is now generally available (GA) . This setting prevents deletion of the table, its column families, and the instance containing the table. See Modify deletion protection for instructions.
December 07, 2022
Feature
You can now retrieve information about a Cloud Bigtable query to help you evaluate the query's performance. This feature is generally available (GA) . For more information, see Get query stats .
December 05, 2022
Feature
A new suite of client-side metrics for the Cloud Bigtable client for Java is generally available (GA) in versions 2.16.0 and later. To learn more about using the new monitoring metrics for performance optimization and troubleshooting, see the Client-side metrics overview .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-bigtable
2.14.0 (2022-11-30)
Features
Add typing to proto.Message based class attributes ( c1538d5 )
Remove enum value ReadRowsRequest.RequestStatsView.REQUEST_STATS_EFFICIENCY ( c1538d5 )
Remove field ReadIterationStats.deletes_seen ( c1538d5 )
Remove field RequestStats.read_efficiency_stats ( c1538d5 )
Remove proto ReadEfficiencyStats ( c1538d5 )
Rename field RequestStats.all_read_stats to full_read_stats_view ( c1538d5 )
Rename proto AllReadStats to FullReadStatsView ( c1538d5 )
Rename proto ReadIteratorStats to ReadIterationStats ( c1538d5 )
Bug Fixes
Add dict typing for client_options ( c1538d5 )
November 21, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-bigtable
1.7.3 (2022-11-18)
Bug Fixes
First pass on making retry configuration more consistent ( #695 ) ( c707c30 )
Make internal rst_stream errors retriable ( #699 ) ( 770feb8 )
Make sure that the proper exception type is bubbled up for ReadRows ( #696 ) ( 5c72780 )
Prevent sending full table scan when retrying (backport #554 ) ( #697 ) ( c4ae6ad )
November 15, 2022
Feature
Cloud Bigtable now lets you retrieve metadata about a table, giving you greater observability when troubleshooting. This feature is generally available (GA) . For more information, see Table stats .
November 14, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.16.0 (2022-11-11)
Features
Remove proto ReadEfficiencyStats ( #1455 ) ( f6b243d )
Bug Fixes
Fix metric client settings ( #1509 ) ( 38ac115 )
2.15.1 (2022-11-08)
Bug Fixes
Call record attempt compeletion on permanent failures ( #1502 ) ( f409c47 )
Fix the connectivity error count caculation ( #1401 ) ( 1f8cfd7 )
Only record retry count when it's > 0 ( #1488 ) ( 445a667 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.6 ( #1501 ) ( 8f61c64 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.17 ( #1495 ) ( 1b7c21a )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.17 ( #1496 ) ( 74779e3 )
1.22.0-sp.4 (2022-11-08)
Dependencies
Regenerating with new Protobuf (1.22.0-sp) ( #1491 ) ( b31cafd )
October 31, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.15.0 (2022-10-26)
Features
Add APIs for Mutation and RowMutationEntry ( #1454 ) ( a86934f )
Bug Fixes
Catch all throwables so version mismatch won't hang the client ( #1402 ) ( c03b8a4 )
Fix attempt status tag for metrics ( #1477 ) ( e54cf7d )
Rename metric names to match the external name ( #1479 ) ( 28ca7c3 )
Set a longer timeout to wait for callbacks to be executed ( #1478 ) ( 0d9ff6a )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.5.0 ( #1464 ) ( d8e58a5 )
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.6.0 ( #1476 ) ( 331dcfb )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.5 ( #1470 ) ( 557a4fb )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.15 ( #1462 ) ( 69540cb )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.16 ( #1467 ) ( 53599ca )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.15 ( #1463 ) ( a6612f9 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.16 ( #1468 ) ( fe0ddb1 )
October 24, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-bigtable
2.13.2 (2022-10-20)
Bug Fixes
Respect deadlines for column family operations ( #687 ) ( df2e64a )
October 17, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.6.3 (2022-10-14)
Dependencies
Regenerating with new Protobuf (v2.6.x) ( #1459 ) ( 3d330ca )
Python
Changes for google-cloud-bigtable
2.13.1 (2022-10-10)
Bug Fixes
Deps: Allow protobuf 3.19.5 ( #682 ) ( 0bb3420 )
October 10, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.14.1 (2022-10-05)
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.6 ( #1450 ) ( 96b1e80 )
2.14.0 (2022-10-03)
Features
Publish the RequestStats proto ( #1400 ) ( e989200 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.4 ( #1446 ) ( 81034c5 )
Python
Changes for google-cloud-bigtable
2.13.0 (2022-09-29)
Features
Publish the RequestStats proto ( #676 ) ( 199949b )
Bug Fixes
Deps: Require protobuf >= 3.20.2 ( #679 ) ( 030ef38 )
October 03, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.1.0 (2022-09-26)
Features
Publish the RequestStats proto ( #1177 ) ( 89dfc83 )
4.0.5 (2022-09-23)
Bug Fixes
Test is less restrictive to allow changes ( #1160 ) ( 7d05b96 )
Java
Changes for google-cloud-bigtable
2.13.0 (2022-09-27)
Features
Add gRPC RLS dependency ( #1248 ) ( e829b92 )
Bug Fixes
Add a UUID in the task value ( #1430 ) ( 3bfc7bc )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.5 ( #1406 ) ( d906729 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.14 ( #1411 ) ( ef7d741 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.14 ( #1412 ) ( dcae319 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.9.1 ( #1409 ) ( c1e195d )
September 29, 2022
Feature
The Cloud Bigtable observability metric high-granularity CPU utilization of hottest node is now generally available (GA) . Because of more frequent sampling, this metric is more accurate than CPU utilization of hottest node . For more information on using Bigtable metrics, see Monitoring .
September 19, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.0.4 (2022-09-14)
Bug Fixes
Use grpc-gcp v1.0.0 ( #1156 ) ( 6196424 )
4.0.3 (2022-09-09)
Bug Fixes
Update dependency uuid to v9 ( #1152 ) ( dea0425 )
Wait for instances to get created in all samples ( #1149 ) ( c9dd9c6 )
Java
Changes for google-cloud-bigtable
2.12.0 (2022-09-15)
Features
generated: Publish CBT deletion_protection field in Table, UpdateTableRequest, and UpdateTable API ( f1f3f05 )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.3 ( #1386 ) ( f460373 )
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.3 ( #1387 ) ( e339cb1 )
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.4 ( #1395 ) ( a2db183 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.2 ( #1384 ) ( ee3b256 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.3 ( #1393 ) ( df6c6c7 )
September 13, 2022
Feature
Cloud Bigtable is available in the me-west1 (Tel Aviv) region. For more information, see Bigtable locations .
September 12, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.11.2 (2022-09-07)
Bug Fixes
Make cloud-monitoring a runtime dependency ( #1371 ) ( 930d043 )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.2 ( #1373 ) ( 43b8052 )
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.2 ( #1374 ) ( 4174f0d )
September 05, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/bigtable
4.0.2 (2022-08-27)
Bug Fixes
Add operation ( #1145 ) ( 3a1e282 )
Do not import whole google-gax from proto JS ( #1553 ) ( #1148 ) ( 262d3d7 )
Use google-gax v3.3.0 ( 262d3d7 )
Java
Changes for google-cloud-bigtable
2.11.1 (2022-08-26)
Bug Fixes
Reset a measure map every time the stats are recorded ( #1364 ) ( 1683365 )
August 29, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.11.0 (2022-08-17)
Features
Add Stackdriver exporter ( #1247 ) ( 7ce915e )
Dependencies
Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.1 ( #1352 ) ( f8d97e5 )
August 22, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-bigtable
2.11.3 (2022-08-17)
Performance Improvements
Optimize row merging ( #628 ) ( c71ec70 )
2.11.2 (2022-08-11)
Bug Fixes
Deps: allow protobuf < 5.0.0 ( #631 ) ( fd54fc6 )
Deps: require proto-plus >= 1.22.0 ( fd54fc6 )
August 19, 2022
Feature
You can now use tags to allow or deny security policies on a Cloud Bigtable instance. This feature is generally available ( GA ). To learn more, see Create and manage tags .
August 15, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.10.3 (2022-08-08)
Bug Fixes
Declare 2 http libraries as runtime ( #1341 ) ( 8071de6 )
2.10.2 (2022-08-03)
Bug Fixes
Add a ReadFirstRow callable to set future in onComplete ( #1326 ) ( cb539b5 )
The metadata could be returned in trailer or header depends on i… ( #1337 ) ( c4b8c03 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3 ( #1328 ) ( bee0ca0 )
Upgrade shared config to 1.5.3, exclude google-http-client and google-http-client-gson from gax in google-cloud-bigtable-stats ( #1336 ) ( 98b3349 )
Python
Changes for google-cloud-bigtable
2.11.1 (2022-08-08)
Bug Fixes
Retry the RST Stream error in mutate rows and read rows( #624 ) ( d24574a )
August 12, 2022
Feature
Cloud Bigtable-BigQuery federation is now generally available (GA) . You can use BigQuery to query data from Cloud Bigtable and blend it with data from other federated data sources. For more information, see Querying Cloud Bigtable data .
August 11, 2022
Feature
New tooling is available to help you migrate to Cloud Bigtable from HBase clusters that are hosted on another Google Cloud service. For more information, see Migrate from HBase on Google Cloud .
August 08, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.10.1 (2022-08-01)
Bug Fixes
Retry rst stream in mutations ( #1327 ) ( 1a5b3a2 )
Dependencies
Update dependency org.junit.vintage:junit-vintage-engine to v5.9.0 ( #1323 ) ( 7655747 )
Python
Changes for google-cloud-bigtable
2.11.0 (2022-08-04)
Features
Add audience parameter ( a7a7699 )
Add satisfies_pzs output-only field ( #614 ) ( 7dc1469 )
Add storage_utilization_gib_per_node to Autoscaling target ( a7a7699 )
Cloud Bigtable Undelete Table service and message proto files ( a7a7699 )
Bug Fixes
Deps: require google-api-core >=1.32.0 and >=2.8.0 ( a7a7699 )
Require Python 3.7+ ( #610 ) ( 10d00f5 )
Performance Improvements
Improve row merging ( #619 ) ( b4853e5 )
August 01, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-bigtable
2.10.0 (2022-07-26)
Features
Add response protos ( #1246 ) ( 52d59ce )
Add response_params proto to clients ( #1303 ) ( 93edfe1 )
Add storage utilization gib per node for autoscaling ( #1317 ) ( 5282589 )
Use PingAndWarm request for channel priming ( #1179 ) ( 6629821 )
Bug Fixes
Enable integration test for google-cloud-bigtable-stats ( #1311 ) ( 7c77879 )
Fix race condition in BuiltinMetricsTracer ( #1320 ) ( 644454a )
Ignore repackaged files to fix clirr ( #1300 ) ( 99b67ba )
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.13 ( #1306 ) ( ddae354 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.13 ( #1307 ) ( c0740fe )
July 11, 2022
Feature
Cloud Bigtable is available in the us-south1 (Dallas) and europe-southwest1 (Madrid) regions. For more information, see Bigtable locations .
June 30, 2022
Feature
You are now able to configure the storage utilization target for a cluster when you use autoscaling for Cloud Bigtable. This feature is generally available (GA) .
June 28, 2022
Feature
Cloud Bigtable now gives you the option to undelete a table for up to seven days from the time of deletion using the gcloud CLI . This feature is generally available (GA) .
June 24, 2022
Feature
Cloud Bigtable is available in the us-east5 (Columbus) region. For more information, see Bigtable locations .
June 02, 2022
Feature
Cloud Bigtable now provides increased observability by letting you identify and monitor hot tablets in a cluster. This feature is generally available (GA) . To learn more, see Hot tablets .
May 05, 2022
Feature
A Cloud Bigtable table overview page in the Cloud console is now generally available (GA) . The table overview displays monitoring metrics and replication details for a selected table.
May 03, 2022
Feature
Cloud Bigtable is available in the europe-west9 (Paris) region. For more information, see Bigtable locations .
April 20, 2022
Feature
Cloud Bigtable is available in the europe-west8 (Milan) region. For more information, see Bigtable locations .
April 05, 2022
Feature
The Cloud Bigtable HBase replication library lets you replicate data from HBase to Bigtable. You can use the replication library in conjunction with existing migration tools to migrate your HBase data to Bigtable without pausing writes or taking your application offline. The replication library is now generally available (GA) .
March 25, 2022
Feature
Cloud Bigtable support for Cloud EKM is generally available ( GA ). You can now choose an externally managed key when you protect your data using customer managed encryption keys ( CMEK ). Cloud EKM includes Key Access Justification , which lets you view the reason for each Cloud EKM request.
December 20, 2021
Feature
System Event audit logs for Cloud Bigtable autoscaling are now generally available ( GA ).
December 13, 2021
Change
A Cloud Bigtable instance can now have clusters in up to 8 regions. This lets you create an instance with as many clusters as there are zones in your chosen Bigtable regions . Previously, an instance was limited to 4 clusters.
December 09, 2021
Feature
Autoscaling for Cloud Bigtable is now generally available ( GA ). Autoscaling helps prevent over-provisioning or under-provisioning by letting Cloud Bigtable automatically add or remove nodes to a cluster when usage changes. In addition, new metrics are available to help you understand how autoscaling is working.
Feature
You can now use customer managed encryption keys ( CMEK ) in Cloud Bigtable instances that are replicated across multiple regions. Previously, CMEK was limited to instances that had clusters in a single region. This feature is generally available ( GA ).
December 03, 2021
Announcement
A new tutorial is available that uses open-source benchmarking tools to evaluate Cloud Bigtable performance. For more information, see Benchmarking Bigtable with PerfKit Benchmarker – Batch Testing on GitHub.
November 16, 2021
Feature
Cloud Bigtable is available in the southamerica-west1 (Santiago) region. For more information, see Bigtable locations .
October 27, 2021
Change
The guidance on migrating data from HBase to Cloud Bigtable has been updated. You can now use new tooling designed to create Bigtable tables from existing HBase tables, import snapshots of your HBase tables, and validate the integrity of migrated data.
October 21, 2021
Feature
Cloud Bigtable app profile cluster groups let you route an app profile's traffic to a subset of an instance's clusters. This feature is generally available ( GA ).
October 04, 2021
Feature
Cloud Bigtable provides a CPU utilization by app profile, method, and table metric that gives you more granular observability into the cluster's CPU usage . This metric is generally available ( GA ).
September 30, 2021
Feature
Storage limits for Cloud Bigtable nodes have been doubled. Each node now supports twice as much storage, with no increase in per-node costs. This feature is generally available ( GA) .
August 03, 2021
Feature
Cloud Bigtable is now available in the northamerica-northeast2 (Toronto) region .
July 16, 2021
Announcement
New Dataflow templates are now available to help you import data into Cloud Bigtable. The importsnapshot template lets you import HBase snapshots into Cloud Bigtable, without the need to export data as SequenceFiles or Avro files. The sync-table template lets you validate the integrity of your imported data.
Announcement
The Cloud Bigtable documentation has been updated to include information about connection pools and when to consider resizing them.
June 29, 2021
Feature
Cloud Bigtable is now available in the asia-south2 (Delhi) region .
June 23, 2021
Feature
Console Table Management for Cloud Bigtable is now generally available. You can now use the Google Cloud Console to create, edit, and delete Cloud Bigtable tables, column families, and garbage collection policies.
June 21, 2021
Feature
Cloud Bigtable is now available in the australia-southeast2 (Melbourne) region .
May 26, 2021
Change
The Cloud Bigtable Service Level Agreement (SLA) has been updated.
May 11, 2021
Announcement
The Cloud Bigtable documentation on schema design for time series data has been updated with an emphasis on recommended design patterns.
May 10, 2021
Feature
You can now use IAM conditions to define and enforce conditional access control for Cloud Bigtable instances, clusters, and tables. This feature is generally available.
May 07, 2021
Announcement
New guidance is available to help you schedule Cloud Bigtable backups using Cloud Scheduler, Pub/Sub, and Cloud Functions.
May 06, 2021
Announcement
Cloud Bigtable now provides a Cloud Monitoring metric that reports the amount of logical storage bytes that a backup is using. The metric is backup/bytes_used , and it includes information about the source table and storage type.
May 03, 2021
Feature
The ability to restore from a Cloud Bigtable backup to a different instance is now generally available. This feature enhancement lets you use backups for a wider variety of use cases .
April 08, 2021
Feature
Cloud Bigtable support for customer-managed encryption keys (CMEK) is now generally available.
April 06, 2021
Feature
Data Access audit logging for Cloud Bigtable is now generally available.
If you previously enabled Data Access audit logs for all Google Cloud services in the Cloud Audit Logs default configuration , you might need to take additional steps to enable Data Access audit logging for Cloud Bigtable. Affected customers will see a notification at the top of the Cloud Bigtable page of the Cloud Console.
March 24, 2021
Feature
Cloud Bigtable is now available in the europe-central2 (Warsaw) region .
March 22, 2021
Change
Cloud Bigtable's Cloud Console navigation has been improved. On the Instances page, the Create Instance button is more prominent. After you navigate to an instance, the following updates are visible:
Left-pane navigation is now organized in sections.
New breadcrumb navigation on each page shows the ID of the selected instance.
Page headings are more prominent.
You can now edit or delete an instance from every page.
December 14, 2020
Fixed
Key Visualizer diagnostic messages are visible to all Cloud Bigtable customers. Review the message descriptions to learn how diagnostic messages can help you troubleshoot your Cloud Bigtable tables.
November 06, 2020
Change
The default data points used for disk load charts on the Cloud Bigtable Monitoring page have changed to reflect the maximum for a displayed alignment period. Previously, data points on the charts reflected the mean for the alignment period. This change ensures that charts clearly show the peaks that are important for monitoring the health of a Cloud Bigtable instance. Disk load charts are only applicable for HDD clusters.
October 16, 2020
Change
A tutorial is now available that demonstrates how to send a Cloud Bigtable read request using a Cloud Functions HTTP(S) request.
October 15, 2020
Change
The steps to create a new Cloud Bigtable instance and edit an existing instance have been streamlined and improved in the Google Cloud Console.
July 22, 2020
Feature
Cloud Bigtable's fully integrated backups feature is now generally available. Backups let you save a copy of a table's schema and data and restore the backup to a new table at a later time.
July 13, 2020
Change
The default data points used for CPU utilization charts on the Cloud Bigtable Monitoring page have changed. Previously, data points on the charts reflected the mean for a displayed alignment period. Now the data points reflect the maximum for the alignment period. This change ensures that charts clearly show the peaks that are important for monitoring the health of a Cloud Bigtable instance.
June 08, 2020
Feature
Cloud Bigtable is now available in the asia-southeast2 (Jakarta) region .
May 18, 2020
Change
The Cloud Bigtable Monitoring page in the Cloud Console has been redesigned. Changes to the visual experience include the following:
Views that are now split into separate tabs
A new time range picker
Updated styling on the graphs
April 20, 2020
Feature
Cloud Bigtable is now available in the us-west4 (Las Vegas) region .
April 06, 2020
Feature
Key Visualizer for Cloud Bigtable is now integrated into the Google Cloud Console . The following enhancements have been added:
Eligibility has been simplified to a minimum of 30 GB of data per table.
You can now specify the start and end time for a scan.
Performance data is now more recent.
Your performance data is retained for 14 days.
March 19, 2020
Feature
You can now create a production Cloud Bigtable instance that has one or two nodes per cluster. Prior to this change, production instances had a minimum of three nodes per cluster, and the only way to create smaller clusters was in a development instance.
Change
The Cloud Bigtable Service Level Agreement (SLA) has been updated.
February 24, 2020
Feature
Cloud Bigtable is now available in the us-west3 (Salt Lake City) region .
January 24, 2020
Feature
Cloud Bigtable is now available in the asia-northeast3 (Seoul) region .
December 11, 2019
Feature
Table-level IAM for Cloud Bigtable is now generally available.
December 05, 2019
Feature
The Ruby client library for Cloud Bigtable is now generally available.
November 05, 2019
Feature
Cloud Bigtable is now available in the europe-west3 (Frankfurt) region .
October 14, 2019
Feature
Admin Activity audit logging is now generally available.
September 25, 2019
Feature
The Cloud Bigtable client library for Java is now generally available.
September 18, 2019
Feature
The PHP client library for Cloud Bigtable is now generally available.
September 06, 2019
Feature
The Python client library for Cloud Bigtable is now generally available.
September 03, 2019
Change
Detailed descriptions and examples of write requests are now available in the Cloud Bigtable documentation.
June 27, 2019
Feature
The C++ client library for Cloud Bigtable is now generally available.
June 17, 2019
Feature
The Cloud Bigtable client library for Java for is now available in beta.
June 05, 2019
Feature
The C# client library for Cloud Bigtable is now generally available.
May 14, 2019
Change
A section on garbage collection is now available in the Cloud Bigtable documentation.
April 18, 2019
Feature
Cloud Bigtable is now available in the asia-northeast2 (Osaka) region .
April 08, 2019
Feature
Multi-region replication for Cloud Bigtable is now generally available.
March 14, 2019
Feature
A PHP client library for Cloud Bigtable is now available in beta.
March 11, 2019
Feature
Cloud Bigtable is now available in the europe-west6 (Zürich) region .
March 06, 2019
Feature
A Ruby client library for Cloud Bigtable is now available in beta.
March 05, 2019
Feature
Multi-region replication for Cloud Bigtable is now available in beta. Regional replication continues to be generally available.
February 22, 2019
Feature
Cloud Bigtable is now available in the southamerica-east1 (São Paulo) region .
November 27, 2018
Feature
Cloud Bigtable is now available in the asia-east2 (Hong Kong) region .
November 13, 2018
Feature
The Node.js client library for Cloud Bigtable is now generally available.
October 08, 2018
Change
Cloud Bigtable now enforces the limits on the amount of storage per node :
If a cluster in an instance exceeds the storage limits, all writes to the instance will fail until you add nodes to the cluster .
If you try to remove nodes from a cluster, and the change would cause the cluster to exceed the storage limits, Cloud Bigtable will deny the request.
October 05, 2018
Feature
A Python client library for Cloud Bigtable is now available in beta.
October 02, 2018
Feature
Cloud Bigtable is now available in the australia-southeast1 (Sydney) region .
September 18, 2018
Feature
Key Visualizer is now generally available.
September 06, 2018
Feature
Cloud Bigtable is now available in the asia-south1 (Mumbai) region .
September 04, 2018
Feature
Key Visualizer now includes the ability to view multiple metrics at once .
August 03, 2018
Feature
A C++ client library for Cloud Bigtable is now available in beta.
July 25, 2018
Change
The Cloud Bigtable Service Level Agreement (SLA) has been updated.
Change
Regional replication is now generally available.
July 11, 2018
Change
The Quotas & Limits page now includes all of the quotas that appear in the Google Cloud Platform Console, and it now shows quotas and limits related to application profiles . These quotas and limits are not new, but they were not previously listed in the documentation.
July 10, 2018
Feature
Key Visualizer for Cloud Bigtable is now available in beta. Use Key Visualizer to analyze your Cloud Bigtable usage in detail and troubleshoot performance issues.
Feature
Cloud Bigtable is now available in the us-west2 (Los Angeles) region .
July 09, 2018
Feature
A C# client library for Cloud Bigtable is now available in beta.
June 29, 2018
Change
Cloud Bigtable will start enforcing the limit on the amount of storage per node on October 1, 2018, rather than on July 1.
We're updating the Google Cloud Platform Console to show the new date. Until we finish rolling out that change, you'll still see the old enforcement date in the GCP Console.
June 28, 2018
Feature
A Node.js client library for Cloud Bigtable is now available in beta.
June 11, 2018
Feature
Cloud Bigtable is now available in the europe-north1 (Finland) region .
May 07, 2018
Feature
Instance-level IAM for Cloud Bigtable is now generally available.
Change
Removed the column-family permissions ( bigtable.columnfamilies.* ) from the list of IAM permissions for Cloud Bigtable. These permissions are deprecated and will not be supported in the future.
If you need to view information about a table's column families, make sure your IAM role includes the bigtable.tables.get permission.
If you need to modify a table's column families, make sure your IAM role includes the bigtable.tables.update permission.
May 03, 2018
Feature
Cloud Bigtable is now available in the us-east4 (Northern Virginia) and northamerica-northeast1 (Montréal) regions .
April 30, 2018
Feature
Cloud Bigtable is now available in the europe-west2 (London) region .
April 25, 2018
Change
The GCP Console now shows whether your instance's clusters are using too much storage based on the number of nodes they contain. Learn more about storage limits per node .
Important: Starting on July 1, 2018, Cloud Bigtable will enforce the limit on the amount of storage per node. If any cluster in an instance exceeds the limit, writes to all clusters in that instance will fail until you add nodes to each cluster that is over the limit . Also, if you try to remove nodes from your cluster, and the reduced number of nodes would cause the cluster to exceed the storage limit, Cloud Bigtable will deny the request.
Feature
Regional replication is now available in beta. Regional replication automatically makes your data available in two different zones within the same region, improving availability and durability.
Feature
The GCP Console now provides improved monitoring for Cloud Bigtable , including new charts that show each cluster's storage utilization, node count, and replication status.
March 15, 2018
Feature
Cloud Bigtable is now available in the us-west1 (Oregon) region .
February 06, 2018
Feature
Cloud Bigtable is now available in the europe-west4 (Netherlands) region .
February 02, 2018
Feature
Cloud Bigtable is now available in the asia-southeast1 (Singapore) region .
January 31, 2018
Change
IAM custom roles are now generally available.
January 02, 2018
Change
Updated this page to provide release notes for the Cloud Bigtable service. To view release notes for the Cloud Bigtable HBase client for Java, see the client library's GitHub releases page .
December 20, 2017
Feature
Admin Activity audit logging is now available in beta.
December 15, 2017
Feature
You can now add labels to your Cloud Bigtable instances .
Fixed
The REST Admin API now correctly implements the method for listing Cloud Bigtable operations .
December 07, 2017
Feature
Cloud Bigtable is now available in the asia-northeast1 (Tokyo) region .
November 28, 2017
Feature
You can now use Stackdriver Monitoring to set up alerting policies and create custom dashboards that include Cloud Bigtable metrics.
October 18, 2017
Change
The schema design documentation no longer recommends using hashed values in row keys. Use human-readable values instead.
September 19, 2017
Feature
The Identity and Access Management predefined roles for Cloud Bigtable now include a viewer role . This role provides access to basic Cloud Bigtable functionality in the Google Cloud Platform Console.
September 06, 2017
Feature
The Google Cloud Platform Console now provides graphs that show the number of rows read and written per second .
July 25, 2017
Feature
V2 of the Cloud Bigtable REST Admin API is now available. You can use this API to manage your Cloud Bigtable instances.
July 24, 2017
Feature
Identity and Access Management custom roles for Cloud Bigtable are now available in beta.
May 01, 2017
Feature
Cloud Bigtable now supports Identity and Access Management .
FEATURE
You can now monitor a Cloud Bigtable instance with Stackdriver Monitoring .
March 10, 2017
Feature
The Google Cloud Platform Console now provides graphs that show the following information about your instance :
The number of nodes in the instance's cluster.
The average CPU utilization across all nodes in the instance's cluster.
The CPU utilization of the busiest node in the instance's cluster.
March 09, 2017
Feature
You can now create a development instance of Cloud Bigtable. A development instance is a low-cost instance with performance limited to the equivalent of a single node.
June 29, 2016
Feature
Cloud Bigtable is now available in the us-east1 (South Carolina) region .
Change
Each Cloud Bigtable cluster is now contained within an instance, which is a container for your cluster. For instances created before June 29, 2016, the instance ID is identical to the cluster ID. (There is one exception to this rule: If you had multiple clusters with the same ID before June 29, 2016, your instance IDs will end with -1 , -2 , and so on, so that each instance has a unique ID.)
Feature
V2 of the Cloud Bigtable RPC API is now available. You can write custom gRPC clients that target the Data API or the Admin API .
Change
Cloud Bigtable is now generally available.
May 06, 2015
Change
Cloud Bigtable is now available in beta.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
