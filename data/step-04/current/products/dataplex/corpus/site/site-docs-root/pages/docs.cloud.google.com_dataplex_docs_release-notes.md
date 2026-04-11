---
title: "Knowledge Catalog release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/release-notes
  title: "Knowledge Catalog release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Resources
Send feedback
Knowledge Catalog release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Knowledge Catalog. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 10, 2026
Announcement
Dataplex Universal Catalog is now called Knowledge Catalog. The API, client
library, CLI, and Identity and Access Management (IAM) names remain unchanged.
Feature
The lightweight profiling mode for data profile scans is available in
preview .
The lightweight mode provides low-latency profile scans that return results in
seconds, making it ideal for grounding AI agent responses and interactive data
exploration. For more information, see Profiling modes .
April 09, 2026
Feature
You can now specify a custom execution identity for data quality and
data profile scans. By default, scans are executed using the Service
Agent. You can now use a custom service account (Bring Your Own Service Account)
or End-User Credentials (EUC). Using a custom execution identity lets you
enforce the principle of least privilege, use fine-grained BigQuery access
controls, and unify scan processing costs directly under BigQuery.
For more information, see Configure execution identity for data quality scans and Configure execution identity for data profile scans .
March 30, 2026
Feature
Automated cataloging of Looker (Google Cloud core) metadata as well as data
lineage ingestion from BigQuery sources are now available in
preview . For more
information, see the Looker (Google Cloud core) documentation .
February 24, 2026
Feature
You can now save data profile aspects in Dataplex Universal Catalog up to 1 MB
in size. For more information, see
Quotas and limits .
February 19, 2026
Feature
When you create a data quality rule ,
you can now optionally include a
debug query
to run alongside the rule. A debug query is a SQL statement that returns up to
10 scalar values to help diagnose rule failures. This feature is available in
preview .
February 11, 2026
Feature
You can now use metadata change feeds to receive near real-time notifications
about metadata changes in Dataplex. Dataplex publishes notifications to a
Pub/Sub topic of your choice, letting you build event-driven workflows,
sync metadata to external catalogs, or trigger data quality checks.
For more information, see
About metadata change feeds .
January 29, 2026
Feature
You can control data lineage ingestion for Dataproc
at the organization, folder, or project level. This feature is in
Preview .
For more information, see
Control lineage ingestion .
January 12, 2026
Breaking
Some of the metadata that is stored in Dataplex Universal Catalog is changing.
This change brings the metadata stored in Dataplex into consistency with
metadata from the original source systems such as Vertex AI, Bigtable, Spanner,
Pub/Sub, Dataform, and Dataproc Metastore. If you have workloads that depend on
such Dataplex metadata, you must adjust them to preserve continuity. For more
information about the scope of this change and what you need to do, see
Changes to metadata stored in Dataplex Universal Catalog .
December 08, 2025
Feature
Natural language search in Dataplex Universal
Catalog is generally available ( GA ).
Natural language search extends keyword search to support natural language
queries. It lets you find resources using everyday language, eliminating the
need for complex syntax.
November 21, 2025
Feature
Data products in Dataplex Universal Catalog is now available in
preview .
A data product serves as a logical, curated package of data assets designed to
solve a specific business problem. It enables faster time to insights and
provides trust, context, and self-service access request mechanisms for data
consumers. For more information, see
About data products .
November 17, 2025
Feature
Previously, data profile scan results were published only to the Google Cloud console. You can now publish the results of a data profile scan as Dataplex Universal Catalog metadata. The latest results are saved to the entry that represents the source table. You can view the results in the Google Cloud console.
If you want to enable catalog publishing for an existing data profile scan, you must edit the scan and re-enable the publishing option.
For more information, see Use data profiling .
This feature is generally available (GA) .
September 29, 2025
Feature
Column-level lineage is generally available ( GA ).
The feature provides a granular view of your data by tracking the flow between individual columns within tables. You can perform functions such as root cause analysis, impact analysis, and data source verification for specific columns. Column-level lineage is only supported for BigQuery jobs. For more information about column-level lineage, see Column-level lineage .
September 23, 2025
Feature
You can now connect your Dataplex Universal Catalog instance to your favorite developer tools, such as the Gemini CLI and other IDEs. This integration enables AI-driven data discovery and asset management directly within your development environment. For more information, see Use Dataplex Universal Catalog with MCP, Gemini, and other agents .
September 03, 2025
Feature
Natural language search in Dataplex Universal Catalog is available in preview .
Natural language search extends keyword search to support natural language queries. It lets you find resources using everyday language, eliminating the need for complex syntax.
June 18, 2025
Feature
Previously, data quality scan results were published only to the Google Cloud console. You can now publish the results of a data quality scan as Dataplex Universal Catalog metadata. The latest results are saved to the entry that represents the source table. You can view the results in the Google Cloud console.
If you want to enable catalog publishing for an existing data quality scan, you must edit the scan and re-enable the publishing option.
For more information, see Use auto data quality .
This feature is generally available ( GA ).
May 19, 2025
Feature
Previously, Dataplex data profile scans were limited to 300 columns per BigQuery table. You can now run data profile scans on all 10,000 columns in a BigQuery table.
May 13, 2025
Feature
Bulk export of universal catalog metadata is generally available ( GA ).
You can export universal catalog metadata into Cloud Storage and then use it for tasks that require comprehensive retrieval of metadata. You can also query and analyze the exported metadata in BigQuery.
For more information, see Export metadata .
May 07, 2025
Feature
Custom connectors for managed connectivity pipelines are available for a variety of third-party data sources. These connectors are contributed by the community. For more information, see Community-contributed custom connectors .
Note: These connectors are not officially supported by Google.
May 05, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Dataplex and data lineage resources. For more information, see Manage Dataplex resources using custom constraints and Manage data lineage resources using custom constraints . This feature is generally available ( GA ).
April 28, 2025
Feature
Dataplex automatic discovery scans your data in Cloud Storage buckets to extract and catalog metadata, creating BigLake, external, or object tables for analytics and AI for insights, security, and governance. This feature is generally available (GA).
April 14, 2025
Feature
Encrypting Dataplex data with customer-managed encryption keys (CMEK) is now available.
April 09, 2025
Announcement
Dataplex Catalog has been renamed BigQuery universal catalog. You'll see this new name in the product page of the Google Cloud console, the documentation set, and the marketing collateral. Universal catalog brings together the data catalog capabilities of Dataplex Catalog and the runtime metastore capabilities of BigQuery metastore . For more information, see Introduction to data governance in BigQuery .
March 17, 2025
Feature
Dataplex and data lineage are available in the northamerica-south1 (Mexico) region.
Feature
Dataplex and data lineage are available in the europe-north2 (Stockholm) region.
March 13, 2025
Feature
Data lineage for Dataflow is generally available ( GA ). For more information, see Use data lineage in Dataflow .
February 18, 2025
Deprecated
Dataplex Attribute Store is deprecated and will be discontinued on February 18, 2026. For steps to transition to tags, policy tags, and IAM conditions, see Migrate from Attribute Store to tags and IAM conditions .
February 11, 2025
Feature
Data lineage for Dataproc Hive jobs is available in preview . For more information, see Enable Hive data lineage in Dataproc .
February 03, 2025
Deprecated
The ingestion of Dataplex entities (including those created as the output of Dataplex Discovery) is deprecated and will stop functioning by September 30, 2025. External tables in BigQuery that are published by Discovery will be ingested into Dataplex Catalog as entries. See Transition from Data Catalog to Dataplex Catalog .
January 28, 2025
Feature
Aspect-only metadata import for Dataplex Catalog metadata is generally available ( GA ). Use an aspect-only metadata job to incrementally modify aspects, without modifying other metadata that belongs to entries in the job's scope. For more information, see Import metadata using a custom pipeline .
January 20, 2025
Feature
Data lineage path visualization is available in preview .
Lineage path visualizations help you to understand the lineage links between two
selected resources. For more information, see Lineage path visualization .
December 09, 2024
Feature
You can now transition your Data Catalog content and usage to Dataplex Catalog. For more information, see Transition from Data Catalog to Dataplex Catalog .
November 05, 2024
Feature
Dataplex automatic discovery is available in public preview . Automatic discovery is a feature in BigQuery that lets you scan data in Cloud Storage buckets to extract and catalog metadata. Automatic discovery creates BigLake or external tables and object tables you can use for analytics and AI, and catalogs that data in Dataplex Catalog. For more information, see Discover and catalog Cloud storage data .
November 04, 2024
Feature
Project-based semantic search offered by Dataplex Search is available in Preview . Semantic search, powered by Gemini, simplifies the search process without the need for complex search syntax. It supports natural language queries. For more information, see Discover data using semantic search .
October 18, 2024
Feature
Data lineage is available in the following Google Cloud regions:
Berlin ( europe-west10 )
Dammam ( me-central2 )
Doha ( me-central1 )
Johannesburg ( africa-south1 )
Turin ( europe-west12 )
Data lineage is available in the following BigQuery Omni regions:
AWS - Asia Pacific (Sydney) ( aws-ap-southeast-2 )
AWS - Europe (Ireland) ( aws-eu-west-1 )
AWS - Europe (Frankfurt) ( aws-eu-central-1 )
AWS - US West (Oregon) ( aws-us-west-2 )
October 15, 2024
Feature
Dataplex is available in Dammam ( me-central2 ). For more information, see Locations and Pricing .
Breaking
Some of the BigQuery metadata that is stored in Dataplex Catalog is changing. If you have workloads that depend on BigQuery metadata, you must adjust them to preserve continuity. For more information about the scope of this change and what you need to do, see Changes to BigQuery metadata stored in Dataplex Catalog .
October 10, 2024
Feature
In the data lineage list view, you can filter lineage information based on the time that lineage occurred. For more information, see About data lineage .
September 30, 2024
Feature
Managed connectivity pipelines are generally available ( GA ). Use a managed connectivity pipeline to extract metadata from third-party sources and import it into Dataplex Catalog. You develop your own connector that extracts metadata, and use Workflows for orchestration and scheduling.
For more information, see Managed connectivity overview , Import metadata from a custom source using Workflows , and Develop a custom connector for metadata import .
Also, the metadata import API methods are GA. For more information, see Import metadata using a custom pipeline .
August 28, 2024
Feature
Data insights is generally available ( GA ). Data insights offers an automated way to explore and understand your data. It uses Gemini to generate queries based on the metadata of a table, and helps you uncover patterns, assess data quality, and perform statistical analysis.
You generate data insights in BigQuery . You can view data insights in Dataplex and in BigQuery.
August 12, 2024
Feature
Data lineage list view is available in preview .
The lineage list view displays full lineage information in a single table. For more information, see Data lineage list view .
July 29, 2024
Feature
Metadata import for Dataplex Catalog entries and their aspects is available in preview . For more information, see Import metadata .
July 24, 2024
Feature
Column-level data lineage for BigQuery is available in Preview for allowlisted users. The existing data lineage feature tracks how BigQuery data moves through your systems at the table level. Column-level lineage extends this feature to let you track BigQuery data movement at the column level.
To sign up for access, fill out the Column-level lineage sign-up
form .
July 22, 2024
Deprecated
Dataplex Explore is deprecated . Please follow the instructions for how to migrate Dataplex Explore to BigQuery Studio .
July 08, 2024
Feature
Dataplex Catalog is generally available ( GA ). Dataplex Catalog provides a platform for storing, managing, and accessing your metadata.
Note: Dataplex Catalog has started rolling out to customers. You might not see it until the rollout is complete.
For more information, see Dataplex Catalog overview , Search for data assets , Manage aspects and enrich metadata , and Manage entries and ingest custom sources .
July 03, 2024
Feature
Data Lineage now supports location organization policy. For more information, see Resource locations supported services .
June 30, 2024
Feature
Dataplex is available in the following regions:
Berlin ( europe-west10 )
Dallas ( us-south1 )
Doha ( me-central1 )
Johannesburg ( africa-south1 )
Osaka ( asia-northeast2 )
Tel Aviv ( me-west1 )
Turin ( europe-west12 )
For more information, see Locations and Pricing .
May 28, 2024
Feature
Dataplex automatic data quality supports the following capabilities:
Email notifications to alert people about the status and
results of a data quality job
Data quality scores that indicate the percentage of
rules that passed
API support for rule recommendations based on data profiling scans
For more information, see Use auto data quality and Auto data quality overview .
April 25, 2024
Feature
Dataplex automatic data quality supports the following capabilities:
The SQL assertion rule type for custom SQL rules lets you check for an invalid state of a dataset.
You can use the data reference parameter in a custom SQL rule to refer to a data source table and all of its precondition filters, instead of explicitly mentioning the table and its filters.
March 27, 2024
Feature
Data insights in Dataplex is available in Preview . Data insights offers an automated and intuitive way to explore and understand your data. It uses Gemini large language models to generate queries based on the metadata of a table, and lets you uncover patterns, assess data quality, and perform statistical analysis.
March 25, 2024
Feature
Automated cataloging of Vertex AI feature store is available in Preview . With this integration, you can discover Vertex AI feature groups and features across projects and regions using the Console or Dataplex API. Dataplex fully automates the process of ingesting and indexing metadata, while performing source IAM permission checks, providing a governed single-pane-of-glass experience for data and AI artifacts across Cloud services.
December 17, 2023
Feature
Automated cataloging of Spanner is generally available ( GA ) in Dataplex. With this integration, can discover Spanner instances, databases, and tables across projects and regions using the Console or the Dataplex API. The metadata ingestion and indexing operations are fully automated, with IAM permissions set at the data source, providing a critical foundation for data management and governance.
December 01, 2023
Feature
Automated cataloging of Vertex AI models and datasets is generally available ( GA ) in Dataplex. With this integration, you are able to discover Vertex AI models and datasets across projects and regions using the Dataplex Console and API. Dataplex fully automates the process of ingesting and indexing metadata, while performing source IAM permission checks, providing a governed single-pane-of-glass experience for data and AI artifacts across Cloud services.
October 06, 2023
Feature
Automated cataloging of Bigtable is generally available ( GA ) in Dataplex. With this integration, you can discover Bigtable tables and instances across projects and regions using the Console or theDataplex API. The metadata ingestion and indexing operations are fully automated, with IAM permissions set at the data source, providing a critical foundation for data management and governance.
October 03, 2023
Announcement
Dataplex BigLake integration is generally available ( GA ). Dataplex BigLake integration lets you upgrade a Cloud Storage bucket to managed, creating BigLake tables and Object tables instead of external tables. This allows the application of column-level, row-level, and table-level policies, enabling fine-grained security and dynamic data masking.
September 29, 2023
Feature
Dataplex is available in the following regions:
Delhi ( asia-south2 )
Melbourne ( australia-southeast2 )
Toronto ( northamerica-northeast2 )
For more information, see Locations and Pricing .
August 21, 2023
Announcement
Dataplex automatic data quality and data profiling are generally available.
Data profiling
Jump start your data analytics with statistical insights, such as average values, unique values, data bounds, and top-N.
Understand drifts and build anomaly models with the generated metadata.
Publish data quality and data profiling information in the BigQuery console. Learn more .
Profile data in BigQuery tables, views, BigLake, and external tables.
Ease deployment through a managed, serverless, and zero-copy execution.
Take advantage of advanced features such as filtering, sampling, and saving results to a central BigQuery table.
Automatic data quality
Deliver trusted data by building an end-to-end data quality monitoring pipeline.
View rule recommendations, enhance with business rules, monitor on a routine or in a pipeline, generate reports, get alerted on failures, and troubleshoot the issues.
View quality information in the BigQuery UI for every table user to see. Learn more .
Improve data quality in BigQuery tables, views, BigLake, and external tables.
Ease deployment through managed, serverless, and zero-copy execution.
Take advantage of advanced features such as filtering, sampling, and saving results to a central BigQuery table.
August 14, 2023
Feature
Data lineage at entry level for spark jobs executed in Dataproc is GA.
August 01, 2023
Feature
Dataplex is available in the following regions:
Los Angeles ( us-west2 )
Salt Lake City ( us-west3 )
Las Vegas ( us-west4 )
Columbus ( us-east5 )
Santiago ( southamerica-west1 )
Finland ( europe-north1 )
Warsaw ( europe-central2 )
Madrid ( europe-southwest1 )
Milan ( europe-west8 )
Paris ( europe-west9 )
Jakarta ( asia-southeast2 )
For more information, see Locations and Pricing .
May 18, 2023
Feature
Dataplex auto data quality (AutoDQ) and data profiling can be used on any BigQuery tables, including tables that aren't part of a Dataplex lake. You don't need to create a Dataplex lake to run Dataplex AutoDQ and data profiling.
Dataplex AutoDQ and data profiling support BigQuery views, BigLake tables, and BigQuery external tables.
Dataplex AutoDQ and data profiling support sampling your data to reduce time and cost.
March 13, 2023
Feature
Dataplex data lineage is generally available ( GA ). Data lineage lets you track how data moves through your systems: where it comes from, where it is passed to, and what transformations are applied to it.
January 30, 2023
Feature
Dataplex Attribute Store is now available in Preview . Dataplex Attribute Store lets you associate attributes (with behavior specifications, such as resource access and column access) with tables and columns.
Feature
Dataplex business glossary is now available in Preview . Dataplex business glossary lets you manage business related terminologies and definitions across the organization, and use them for describing and discovering data entries.
December 22, 2022
Feature
Dataplex data lineage is now available in Preview . Data lineage lets you track how data moves through your systems: where it comes from, where it is passed to, and what transformations are applied to it.
December 16, 2022
Feature
Dataplex BigLake integration is now available in Preview . Dataplex BigLake integration allows upgrading a Cloud Storage bucket to managed, creating BigLake tables instead of external tables. This allows the manual application of column-level, row-level, and table-level policies.
December 12, 2022
Feature
Dataplex data profiling is now available in Preview . Dataplex data profiling helps data users build deeper understanding about their data by identifying common data characteristics. Dataplex utilizes this information to recommend the data quality rules as well.
Feature
Dataplex auto data quality (AutoDQ) is now available in Preview . Dataplex auto data quality helps data users build trust in their data with a turnkey and automated product that encapsulates the entire process of data quality.
December 01, 2022
Feature
Dataplex Source and Sink plugins are generally available ( GA ) in Cloud Data Fusion for ingesting and processing data.
October 20, 2022
Feature
Data exploration workbench (Explore) is generally available ( GA ). Explore provides a fully-managed, serverless data exploration experience powered by fully-governed collaboration, one-click scheduling, and interactive querying using Spark SQL scripts and Jupyter notebooks.
July 20, 2022
Announcement
Dataplex is now unified with Data Catalog to provide a complete data management and governance experience with built-in data intelligence and automation capabilities. See Dataplex product overview .
May 23, 2022
Feature
The Dataplex Source and Sink plugins are available in Public Preview for ingesting and processing data in Cloud Data Fusion versions 6.6.0 and later.
May 02, 2022
Feature
Added support for scheduling Google-provided and custom Dataflow templates from the Dataplex page in the Cloud Console. Monitor these templates from the Dataplex page in the Cloud Console.
April 15, 2022
Feature
Dataplex Data Quality tasks support running data quality validations on BigQuery tables that may not be part of a Dataplex lake, and on GCS data that's available as a BigQuery external table .
March 25, 2022
Feature
A Dataplex source and sink are in available in Cloud Data Fusion in Alpha .
February 17, 2022
Feature
Dataplex Explore provides a fully-managed, serverless data exploration experience that enables you to query your data using Apache SparkSQL queries and Jupyter notebooks.
February 15, 2022
Announcement
Dataplex is generally available ( GA ). Dataplex is an intelligent data fabric that helps organizations to centrally manage, monitor, and govern their data across data lakes, data warehouses, and data marts with consistent controls, providing access to trusted data and powering analytics at scale.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
