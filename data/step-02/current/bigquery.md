# BigQuery

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 1096
Unique features: 1397

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-02 | BigQuery Cloud resource connection DDL management in GoogleSQL |  | GoogleSQL now supports CREATE CONNECTION, ALTER CONNECTION SET OPTIONS, and DROP CONNECTION statements for managing Cloud resource connections. |
| 2026-04-02 | BigQuery DCL support for connection user and PROJECT resource types |  | BigQuery now allows GRANT and REVOKE statements to use the connection user type and PROJECT resource type for connection and project access control. |
| 2026-04-02 | BigQuery Migration Service SQL translation from Snowflake to GoogleSQL |  | BigQuery Migration Service now translates Snowflake SQL to GoogleSQL with broader Snowflake SQL coverage and improved type mapping support. |
| 2026-04-02 | BigQuery search index column granularity configuration |  | BigQuery search indexes now support setting column granularity at index creation time to improve search query performance. |
| 2026-03-31 | BigQuery OBJ.GET_READ_URL function read URL output |  | The OBJ.GET_READ_URL function now returns a STRUCT with read URL and status columns and can render image results in the Cloud console. |
| 2026-03-31 | BigQuery OBJ.MAKE_REF function metadata auto-population |  | The OBJ.MAKE_REF function now automatically fetches latest Cloud Storage metadata and populates it in the ref.details field. |
| 2026-03-31 | BigQuery ObjectRef direct and delegated access support |  | ObjectRef values in BigQuery now support running ObjectRef functions using either direct access or delegated access. |
| 2026-03-30 | AI.DETECT_ANOMALIES custom context window |  | The AI.DETECT_ANOMALIES function now supports a custom context window to control how many recent data points are used by the model. |
| 2026-03-30 | AI.EVALUATE custom context window and MASE output |  | The AI.EVALUATE function now supports a custom context window and returns mean absolute scaled error for time-series evaluation. |
| 2026-03-30 | AI.FORECAST latest timestamp parameter |  | The AI.FORECAST function now supports specifying the latest timestamp value used as the starting point for forecasting. |
| 2026-03-30 | BigQuery non-incremental materialized views over Spanner data |  | BigQuery now supports creating non-incremental materialized views over Spanner data to periodically cache results and improve query performance. |
| 2026-03-26 | BigQuery Cloud resource connections with EXPORT DATA reverse ETL to Spanner |  | BigQuery now supports using Cloud resource connections with EXPORT DATA statements to reverse ETL data from BigQuery to Spanner. |
| 2026-03-25 | BigQuery Data Transfer Service Hive managed table resource-level monitoring |  | BigQuery Data Transfer Service now provides resource-level status reporting for Hive managed tables with progress tracking and per-table granular errors. |
| 2026-03-25 | BigQuery migration assessment for Snowflake |  | BigQuery Migration Service now provides a migration assessment for Snowflake to evaluate migration complexity to BigQuery; BigQuery migration assessment is now available in preview to analyze migration complexity from Snowflake to BigQuery. |
| 2026-03-25 | BigQuery Migration Service MCP server DDL generation from SQL |  | The BigQuery Migration Service MCP server now generates DDL statements from provided SQL input queries. |
| 2026-03-25 | BigQuery Migration Service MCP server SQL translation |  | The BigQuery Migration Service MCP server now performs SQL translation tasks that convert SQL to GoogleSQL syntax. |
| 2026-03-25 | BigQuery Migration Service MCP server SQL translation explanations |  | The BigQuery Migration Service MCP server now provides explanations of SQL translations. |
| 2026-03-24 | BigQuery Data Transfer Service remote MCP server for AI agents |  | A remote MCP server in BigQuery Data Transfer Service is now available for AI agents to create, manage, and run data transfers. |
| 2026-03-23 | AI.EMBED function |  | The AI.EMBED function now generally supports creating embeddings from text or image data. |
| 2026-03-23 | AI.SIMILARITY function |  | The AI.SIMILARITY function now generally computes semantic similarity across text pairs, image pairs, or mixed text-image inputs. |
| 2026-03-23 | BigQuery data preparation from Cloud Storage and Google Drive files |  | BigQuery data preparations now support cleaning, transforming, and enriching data from files stored in Cloud Storage and Google Drive. |
| 2026-03-19 | BigQuery custom organization policies for routine operations |  | BigQuery now allows custom organization policies to allow or deny specific operations on routines. |
| 2026-03-17 | BigQuery ML automatic deployment of open models to Vertex AI |  | BigQuery ML now supports automatically deploying open models to Vertex AI endpoints with managed resource and undeployment behavior. |
| 2026-03-16 | BigQuery global default location configuration |  | BigQuery now supports configuring a global default location at the organization or project level when a request location is not provided or inferable. |
| 2026-03-11 | BigQuery query execution graph visualization |  | BigQuery now provides a visual SQL query execution graph with heatmaps to identify steps that consume the most slot-time. |
| 2026-03-09 | BigQuery conversational analytics job labeling in BigQuery Job History |  | Jobs generated by the conversational analytics agent are now labeled in BigQuery Job History for filtering and monitoring. |
| 2026-03-09 | BigQuery conversational analytics support for BigQuery ML functions |  | BigQuery conversational analytics now supports BigQuery ML functions, including AI.FORECAST, AI.DETECT_ANOMALIES, and AI.GENERATE. |
| 2026-03-09 | BigQuery conversational analytics support for partitioned tables |  | BigQuery conversational analytics now supports using partitioned tables and partition columns to optimize SQL generation, performance, and cost. |
| 2026-03-09 | Conversational analytics chat with query results in BigQuery Studio |  | BigQuery conversational analytics now supports starting conversations and chatting directly with query results in the BigQuery Studio SQL editor. |
| 2026-03-09 | Conversational analytics clickable suggested follow-up questions |  | BigQuery conversational analytics now provides clickable suggested next questions for continued analysis in the Google Cloud Console. |
| 2026-03-09 | ObjectRef integration in BigQuery conversational analytics |  | BigQuery conversational analytics now integrates ObjectRef functions to reference and analyze unstructured Cloud Storage objects like images and PDFs. |
| 2026-03-06 | BigQuery AI.EMBED function for Gemini embedding endpoint |  | BigQuery can now call the AI.EMBED function directly against the gemini-embedding-001 Vertex AI model endpoint. |
| 2026-03-06 | BigQuery AI.GENERATE_EMBEDDING with remote embedding models |  | BigQuery now supports using the AI.GENERATE_EMBEDDING function with remote models created in BigQuery for generating embeddings. |
| 2026-03-06 | BigQuery Pipelines and Connections guided workflows |  | BigQuery added a Pipelines & Connections page with guided, BigQuery-specific configuration workflows for services such as BigQuery Data Transfer Service, Datastream, and Pub/Sub. |
| 2026-03-06 | BigQuery remote models for embedding with Vertex AI |  | BigQuery can create remote models backed by the Vertex AI gemini-embedding-001 model or open embedding models from Vertex Model Garden or Hugging Face. |
| 2026-03-05 | BigQuery VECTOR_SEARCH single-vector alternate syntax |  | BigQuery added an alternate syntax for VECTOR_SEARCH to improve query performance when searching for a single vector. |
| 2026-03-04 | BigQuery continuous queries to Spanner |  | BigQuery now supports continuous queries that stream data to Spanner in real time; BigQuery now supports continuous queries to export data to Spanner in real time. |
| 2026-03-04 | BigQuery cross-region replication observability metrics |  | BigQuery now exposes Cloud Monitoring metrics for dataset replication latency and network egress bytes for cross-region replication and managed disaster recovery. |
| 2026-02-24 | BigQuery conversational analytics business glossary import review |  | BigQuery conversational analytics agents now support reviewing business glossary terms imported from Dataplex Universal Catalog. |
| 2026-02-24 | BigQuery conversational analytics custom glossary terms |  | BigQuery conversational analytics agents now support creating and reviewing custom glossary terms for agent prompt interpretation. |
| 2026-02-23 | BigQuery dataset undelete via time travel |  | BigQuery now allows undeleting a dataset within the time travel window to restore it to its pre-deletion state. |
| 2026-02-17 | BigQuery global queries |  | Global queries now allow a single query to reference data stored in more than one region. |
| 2026-02-17 | MCP control via organization policy constraint | 2026-03-17 | Control of MCP usage via the organization policy constraint gcp.managed.allowedMCPServices has been deprecated in favor of IAM deny policies; deprecated on 2026-03-17. |
| 2026-02-12 | AI.CLASSIFY multi-label classification |  | AI.CLASSIFY now supports classifying an input into multiple categories. |
| 2026-02-12 | AI.GENERATE custom output schema field descriptions |  | AI.GENERATE and AI.GENERATE_TABLE now support descriptive metadata for fields in a custom output schema. |
| 2026-02-12 | BigQuery dataset insights |  | Dataset insights now provide relationship graphs, cross-table queries, auto-generated summaries, relationship inference, and suggested analytical questions for tables in a dataset. |
| 2026-02-11 | BigQuery pipeline execution modes |  | BigQuery pipelines now support running all tasks, selected tasks, or tasks selected by tags. |
| 2026-02-09 | BigQuery table data documentation scans |  | BigQuery data documentation scans can now be scoped by insight type, executed as one-time scans, and configured with TTL-based automatic cleanup. |
| 2026-02-04 | Column-level data policies in BigQuery |  | Data policies can now be attached directly to BigQuery columns to enforce column-level access control, masking, and transformation rules; BigQuery now allows data policies to be associated directly with columns for column-level access control and masking. |
| 2026-02-02 | Parameterized queries in BigQuery Query Editor |  | The BigQuery Query Editor in Google Cloud console now supports running parameterized queries. |
| 2026-01-29 | BigQuery conversational analytics |  | Conversational analytics enables natural-language interactions with data through predefined and custom BigQuery agents and chat-based query workflows. |
| 2026-01-29 | BigQuery ML model creation in Cloud Console |  | BigQuery ML models can now be created directly from the Google Cloud console. |
| 2026-01-29 | BigQuery RANDOM_HASH masking rule |  | BigQuery added a predefined RANDOM_HASH masking rule that uses salted hashing to provide stronger security than the standard SHA-256 hash rule. |
| 2026-01-28 | BigQuery Data Transfer Service Shopify connector |  | BigQuery Data Transfer Service now supports transferring data from Shopify to BigQuery. |
| 2026-01-27 | BigQuery Data Transfer Service Mailchimp connector |  | BigQuery Data Transfer Service now supports transferring data from Mailchimp to BigQuery. |
| 2026-01-26 | BigQuery Gemini Cloud Assist resource discovery |  | BigQuery users can now use Gemini Cloud Assist to discover BigQuery resources across projects and inspect table-level metadata such as schemas. |
| 2026-01-21 | BigQuery Gemini Cloud Assist job-history insights |  | BigQuery now supports using Gemini Cloud Assist to retrieve job-history insights, including slow-query analysis and recent resource-intensive queries. |
| 2026-01-07 | BigQuery Google open-source JDBC driver for Java |  | BigQuery now supports the Google-developed open-source JDBC driver so Java applications can connect to BigQuery. |
| 2026-01-06 | BigQuery CREATE EXTERNAL TABLE and LOAD DATA option support |  | BigQuery now supports additional loading options in CREATE EXTERNAL TABLE and LOAD DATA, including time zone, date/time format, null marker, and source-column matching options. |
| 2025-12-22 | BigQuery Data Transfer Service PostgreSQL connector |  | BigQuery Data Transfer Service now supports transferring data from PostgreSQL to BigQuery. |
| 2025-12-19 | BigQuery Data Transfer Service MySQL connector |  | BigQuery Data Transfer Service now supports transferring data from MySQL to BigQuery. |
| 2025-12-19 | BigQuery Data Transfer Service SQL Server connector |  | BigQuery Data Transfer Service now supports transferring data from Microsoft SQL Server to BigQuery. |
| 2025-12-18 | BigQuery Data Transfer Service blob storage to BigLake Iceberg ingestion |  | BigQuery Data Transfer Service now supports ingesting data from blob storage sources such as S3, Azure Blob Storage, and Cloud Storage into BigLake Iceberg tables. |
| 2025-12-18 | BigQuery Data Transfer Service HubSpot connector |  | BigQuery Data Transfer Service now supports transferring data from HubSpot to BigQuery. |
| 2025-12-18 | BigQuery Data Transfer Service Klaviyo connector |  | BigQuery Data Transfer Service now supports transferring data from Klaviyo to BigQuery. |
| 2025-12-16 | BigQuery Data Transfer Service Oracle connector |  | BigQuery Data Transfer Service can ingest data directly from Oracle into BigQuery; BigQuery Data Transfer Service now supports transferring data from Oracle in preview. |
| 2025-12-10 | BigQuery remote MCP server |  | BigQuery now provides a remote MCP server that enables LLM agents to perform data-related tasks. |
| 2025-12-02 | BigQuery AI.SEARCH function |  | The AI.SEARCH function enables semantic search on tables that have autonomous embedding generation enabled. |
| 2025-12-02 | BigQuery autonomous table embeddings |  | BigQuery can automatically generate and maintain a table embedding column from a source column during CREATE TABLE and subsequent data updates. |
| 2025-12-01 | BigQuery Studio Explorer organization-level search |  | BigQuery Studio Explorer now lets users view search results by organization and switch between organizations in the dropdown. |
| 2025-11-26 | BigQuery Data Transfer Service incremental Salesforce transfers |  | BigQuery Data Transfer Service supports incremental data transfer mode for Salesforce-to-BigQuery pipelines. |
| 2025-11-24 | BigQuery SQLX default project and dataset settings |  | The SQLX options section now supports configuring default project and dataset values applied automatically to all pipeline tasks. |
| 2025-11-20 | BigQuery Agent Analytics plugin for Google ADK |  | The BigQuery Agent Analytics plugin exports ADK agent prompts, tool usage, and responses into BigQuery for analysis and visualization. |
| 2025-11-19 | BigQuery JSON_FLATTEN function |  | BigQuery added the JSON_FLATTEN function to extract non-array values from nested JSON input, including nested arrays. |
| 2025-11-19 | Gemini SQL error fixing and explanation in BigQuery |  | BigQuery can use Gemini to fix and explain SQL query errors. |
| 2025-11-18 | BigQuery generative AI Gemini 3.0 model support |  | BigQuery generative AI calls can now use Gemini 3.0 via the global Vertex AI endpoint when invoking functions like AI.GENERATE. |
| 2025-11-18 | BigQuery insights publication to Dataplex Universal Catalog |  | BigQuery can publish data insights, including recommendations and generated table and column descriptions, to Dataplex Universal Catalog. |
| 2025-11-18 | BigQuery ML AI.EMBED function |  | BigQuery ML supports the AI.EMBED function to convert text, images, audio, video, and documents into embeddings. |
| 2025-11-18 | BigQuery ML AI.GENERATE function |  | BigQuery ML supports the AI.GENERATE function for generating structured or unstructured outputs from text, images, audio, video, and documents; BigQuery ML adds the AI.GENERATE function for text analysis using a Vertex AI Gemini model. |
| 2025-11-18 | BigQuery ML AI.GENERATE_BOOL function |  | BigQuery ML adds AI.GENERATE_BOOL for returning scalar boolean outputs from generative AI prompts; BigQuery ML adds the AI.GENERATE_BOOL function for text analysis with boolean-oriented output using a Vertex AI Gemini model. |
| 2025-11-18 | BigQuery ML AI.GENERATE_DOUBLE function |  | BigQuery ML adds AI.GENERATE_DOUBLE for returning scalar double outputs from generative AI prompts; BigQuery ML adds the AI.GENERATE_DOUBLE function for text analysis with double-oriented output using a Vertex AI Gemini model. |
| 2025-11-18 | BigQuery ML AI.GENERATE_EMBEDDING function |  | BigQuery ML now offers AI.GENERATE_EMBEDDING as the preferred replacement for ML.GENERATE_EMBEDDING. |
| 2025-11-18 | BigQuery ML AI.GENERATE_INT function |  | BigQuery ML adds AI.GENERATE_INT for returning scalar integer outputs from generative AI prompts; BigQuery ML adds the AI.GENERATE_INT function for text analysis with integer-oriented output using a Vertex AI Gemini model. |
| 2025-11-18 | BigQuery ML AI.GENERATE_TABLE function |  | BigQuery ML now supports the table-valued AI.GENERATE_TABLE function for generating tabular structured output from unstructured inputs; BigQuery ML now supports AI.GENERATE_TABLE for structured data generation with support for output_schema formatting against Gemini models. |
| 2025-11-18 | BigQuery ML AI.GENERATE_TEXT function |  | BigQuery ML now offers AI.GENERATE_TEXT as the preferred replacement for ML.GENERATE_TEXT. |
| 2025-11-18 | BigQuery ML AI.SIMILARITY function |  | BigQuery ML supports the AI.SIMILARITY function for computing semantic similarity between pairs of text and/or images. |
| 2025-11-18 | Dataform-driven BigLake table creation for Apache Iceberg in BigQuery |  | Dataform can automatically create BigLake tables for Apache Iceberg datasets in BigQuery. |
| 2025-11-17 | BigQuery folders for single-file code assets |  | BigQuery now supports folders for organizing and access-control management of single file code assets such as notebooks, saved queries, data canvases, and data preparation files. |
| 2025-11-17 | BigQuery query execution graph query text heatmap |  | BigQuery now supports a query text heatmap in the execution graph to highlight query text contributing to high slot-time stages. |
| 2025-11-17 | BigQuery role-based authorization for stored procedures |  | BigQuery now supports role-based authorization for stored procedures. |
| 2025-11-17 | BigQuery SQL stored procedure sharing listings |  | SQL stored procedures can be shared through BigQuery sharing listings. |
| 2025-11-11 | BigQuery batch SQL translator |  | BigQuery includes a batch SQL translator to convert external SQL dialects into GoogleSQL; The BigQuery batch SQL translator provides dialect-to-GoogleSQL conversion for IBM DB2, Greenplum, and SQLite workloads. |
| 2025-11-11 | BigQuery dataset custom constraints via Organization Policy |  | BigQuery now allows custom organization-policy constraints to control specific fields on BigQuery dataset resources with greater granularity. |
| 2025-11-11 | BigQuery interactive SQL translator |  | BigQuery includes an interactive SQL translator to convert external SQL dialects into GoogleSQL; The BigQuery interactive SQL translator converts SQL dialects such as IBM DB2, Greenplum, and SQLite to GoogleSQL. |
| 2025-11-11 | BigQuery Overview page |  | BigQuery now provides an Overview page that serves as a hub for tutorials, feature discovery, and guided learning resources. |
| 2025-11-11 | BigQuery translation API |  | BigQuery provides a translation API for translating SQL dialects into GoogleSQL; The BigQuery translation API enables SQL dialect translation of IBM DB2, Greenplum, and SQLite into GoogleSQL. |
| 2025-11-10 | BigLake table partitioning for Apache Iceberg in BigQuery |  | BigQuery now supports partitioning for BigLake tables built on Apache Iceberg. |
| 2025-11-10 | BigQuery ML AI.DETECT_ANOMALIES function |  | BigQuery ML now offers the AI.DETECT_ANOMALIES function, including use with TimesFM models for time-series anomaly detection. |
| 2025-11-10 | BigQuery ML TimesFM 2.5 support |  | BigQuery ML now supports the TimesFM 2.5 foundational model for use in AI.FORECAST, AI.EVALUATE, and AI.DETECT_ANOMALIES. |
| 2025-11-10 | Gemini-assisted aggregation and deduplication in BigQuery Data Preparation |  | BigQuery Data Preparation can aggregate and deduplicate table data with Gemini assistance. |
| 2025-11-05 | BigQuery MATCH_RECOGNIZE clause |  | BigQuery SQL now supports the MATCH_RECOGNIZE clause for filtering and aggregating row matches. |
| 2025-11-05 | Dataplex DataScan data insights generation |  | Creating a DataScan via the Dataplex API now supports automatic generation of data insights. |
| 2025-11-05 | Multilingual data-insight descriptions in BigQuery |  | BigQuery can now generate table and column descriptions in all supported Gemini languages during data insight generation. |
| 2025-11-04 | Custom organization policies for BigQuery Migration Service |  | BigQuery Migration Service now supports custom organization policies to allow or deny operations and optionally disable AI suggestions. |
| 2025-10-31 | BigQuery-backed pivot table row capacity in Connected Sheets |  | Pivot tables backed by BigQuery in Connected Sheets now support 200,000 rows instead of 100,000. |
| 2025-10-30 | Apache Iceberg REST catalog in BigLake metastore |  | The Apache Iceberg REST catalog in BigLake metastore is now generally available. |
| 2025-10-30 | BigQuery catalog federation for Apache Iceberg REST |  | BigLake metastore Apache Iceberg REST now supports catalog federation for BigQuery. |
| 2025-10-30 | Cloud Console catalog management for Apache Iceberg REST |  | Catalog management for Apache Iceberg REST in BigLake metastore is now available in the Google Cloud console. |
| 2025-10-30 | Credential vending for Apache Iceberg REST catalog |  | The Apache Iceberg REST catalog in BigLake metastore now supports credential vending. |
| 2025-10-29 | BigQuery reservation groups |  | BigQuery reservations can be grouped to prioritize sharing idle slots within the group before exposing them to other reservations. |
| 2025-10-28 | BigQuery Data Transfer Service Facebook Ads connector |  | BigQuery Data Transfer Service now supports transferring data from Facebook Ads; BigQuery Data Transfer Service now supports transferring data from Facebook Ads in preview. |
| 2025-10-28 | BigQuery Data Transfer Service Salesforce connector |  | BigQuery Data Transfer Service now supports transferring data from Salesforce; BigQuery Data Transfer Service now supports transferring data from Salesforce in preview. |
| 2025-10-28 | BigQuery Data Transfer Service Salesforce Marketing Cloud connector |  | BigQuery Data Transfer Service now supports transferring data from Salesforce Marketing Cloud; BigQuery Data Transfer Service now supports transferring data from Salesforce Marketing Cloud in preview. |
| 2025-10-28 | BigQuery Data Transfer Service ServiceNow connector |  | BigQuery Data Transfer Service now supports transferring data from ServiceNow; BigQuery Data Transfer Service now supports transferring data from ServiceNow in preview. |
| 2025-10-28 | Subscriber email logging for shared dataset usage |  | Subscriber email logging can capture principal identifiers for jobs and queries on linked datasets and shared data exchanges. |
| 2025-10-27 | Apache Arrow streaming with Storage Write API |  | BigQuery now supports streaming data to the Storage Write API using the Apache Arrow format. |
| 2025-10-27 | BigQuery administrative jobs explorer job details page |  | The administrative jobs explorer now includes a job details page with execution graph, history, and performance comparison capabilities. |
| 2025-10-27 | BigQuery Data Engineering Agent |  | The Data Engineering Agent enables Gemini-assisted building and modification of BigQuery data ingestion pipelines. |
| 2025-10-27 | BigQuery managed AI function AI.CLASSIFY |  | The managed AI function AI.CLASSIFY is available in BigQuery for classifying text into user-defined categories. |
| 2025-10-27 | BigQuery managed AI function AI.IF |  | The managed AI function AI.IF is available in BigQuery for filtering and joining data using natural-language conditions. |
| 2025-10-27 | BigQuery managed AI function AI.SCORE |  | The managed AI function AI.SCORE is available in BigQuery for ranking text or multimodal input by quality or similarity. |
| 2025-10-23 | Conversational analytics in BigQuery |  | BigQuery introduced Early Access conversational analytics that lets users chat with data, get quick natural-language insights, and create custom agents that can also be accessed outside BigQuery. |
| 2025-10-22 | BigQuery custom constraints for sharing resources |  | BigQuery added support for Organization Policy custom constraints to apply more granular field-level controls for selected sharing resources such as data exchanges and listings. |
| 2025-10-22 | BigQuery ML built-in TimesFM forecasting model |  | BigQuery ML now offers a built-in TimesFM univariate time-series model with AI.FORECAST support for a larger context window and AI.EVALUATE for comparing forecasts against historical reference series. |
| 2025-10-21 | TransUnion entity resolution in BigQuery |  | BigQuery added support for TransUnion-backed entity resolution, making TransUnion data available as part of BigQuery entity resolution capabilities. |
| 2025-10-20 | BigQuery ML open model management as Vertex AI endpoints |  | BigQuery ML now lets users fully manage open models as Vertex AI endpoints, including querying resources, automating undeployment to control cost, and customizing deployment resources. |
| 2025-10-20 | BigQuery notebook visualization cells |  | BigQuery notebooks gained visualization cells that can automatically render charts for DataFrames with configurable columns, chart types, aggregations, colors, labels, and titles. |
| 2025-10-16 | BigQuery Studio breadcrumb navigation |  | BigQuery Studio introduced breadcrumb navigation to move between different tabs and resources in the details pane. |
| 2025-10-16 | BigQuery Studio Explorer pane restructuring |  | BigQuery Studio reorganized the Explorer pane into three sections: Explorer, Classic Explorer, and Git repository. |
| 2025-10-16 | BigQuery Studio Explorer resource search |  | BigQuery Studio added resource search in the Explorer pane, with searchable results surfaced in a new details-pane tab and filter support. |
| 2025-10-16 | BigQuery Studio Git repository access in Explorer |  | BigQuery Studio now exposes repositories through the Explorer, with a repository list tab and workspace opening directly in the Git repository pane in the left panel. |
| 2025-10-16 | BigQuery Studio Home tab What's new section |  | The BigQuery Studio Home tab now includes a What's new section listing new capabilities and changes. |
| 2025-10-16 | BigQuery Studio job history tab in Explorer |  | BigQuery Studio introduced job-history access from the Explorer pane, opening a dedicated tab that lists job histories. |
| 2025-10-16 | BigQuery Studio notebook action bar consolidation |  | BigQuery Studio consolidated the notebook action bar by default to provide more screen space while writing code. |
| 2025-10-16 | BigQuery Studio removal of job history bottom pane |  | BigQuery Studio removed the persistent bottom pane used for job history in the interface. |
| 2025-10-16 | BigQuery Studio single-tab resource opening behavior |  | BigQuery Studio now opens resources in the current tab by default, while still allowing users to open a resource in a separate tab via Ctrl or Command click. |
| 2025-10-16 | BigQuery Studio tab recovery via Recent tabs |  | BigQuery Studio added a Recent tabs area in the details pane to recover resources that were previously opened and then lost. |
| 2025-10-15 | BigQuery Studio geospatial map visualization |  | BigQuery Studio now supports interactive map visualization for geospatial query results; BigQuery Studio can render geospatial query results on interactive maps. |
| 2025-10-15 | dbt-bigquery adapter support for BigQuery DataFrames code execution |  | The dbt-bigquery adapter can now execute Python code defined in BigQuery DataFrames. |
| 2025-10-14 | BigQuery notebook SQL cells |  | BigQuery notebooks now support SQL cells for writing, editing, and running SQL queries directly in the notebook environment. |
| 2025-10-14 | Natural-language comments in SQL |  | BigQuery added support for embedding natural language comments into existing SQL statements to refine and transform SQL logic. |
| 2025-10-09 | BigQuery fair idle slot allocation across reservations |  | Enables fair allocation of idle slots across reservations within a single admin project. |
| 2025-10-09 | BigQuery reservation maximum slot limit |  | Allows configuring a maximum slot limit when creating or updating a BigQuery reservation. |
| 2025-10-08 | BigQuery reservation labeling |  | Adds support for labels on BigQuery reservations for organization and billing analysis. |
| 2025-10-08 | BigQuery reservation-level IAM policies |  | Allows setting IAM policies directly on BigQuery reservations. |
| 2025-10-08 | BigQuery runtime reservation selection for queries |  | Enables choosing which BigQuery reservation a query uses at runtime. |
| 2025-10-06 | BigQuery Data Transfer Service Google Analytics 4 reporting |  | Enables BigQuery Data Transfer Service to ingest Google Analytics 4 reporting data and custom reports. |
| 2025-10-06 | BigQuery Data Transfer Service PayPal transfer support |  | Adds BigQuery Data Transfer Service support for transferring data from PayPal. |
| 2025-10-06 | BigQuery Data Transfer Service Stripe transfer support |  | Adds BigQuery Data Transfer Service support for transferring data from Stripe. |
| 2025-10-06 | BigQuery INFORMATION_SCHEMA.SHARED_DATASET_USAGE usage-metrics fields |  | Adds shared_resource_id, shared_resource_type, and referenced table metadata fields to INFORMATION_SCHEMA.SHARED_DATASET_USAGE. |
| 2025-10-06 | Dataform workflow BigQuery job priority control |  | Allows Dataform workflows to run initiated BigQuery jobs as interactive or batch-priority jobs. |
| 2025-10-02 | BigQuery notebook gallery |  | Introduces a notebook gallery in the BigQuery web UI for discovering and using prebuilt notebook templates. |
| 2025-10-01 | BigQuery Gemini Cloud Assist query insertion |  | Allows applying SQL generated by Gemini Cloud Assist directly into the query currently open in the BigQuery editor. |
| 2025-09-29 | BigQuery credential vending mode for Apache Iceberg REST catalog |  | BigQuery now supports credential vending mode for the Apache Iceberg REST catalog in BigLake metastore to simplify access without direct Cloud Storage bucket permissions. |
| 2025-09-29 | BigQuery data preparation array unnesting |  | Adds support in BigQuery data preparation for unnesting arrays into one row per array element. |
| 2025-09-29 | BigQuery non-incremental materialized views over Spanner |  | Adds support for creating non-incremental materialized views over Spanner data in BigQuery. |
| 2025-09-25 | ARRAY_FIRST GoogleSQL function |  | The ARRAY_FIRST GoogleSQL function is now generally available in BigQuery. |
| 2025-09-25 | ARRAY_LAST GoogleSQL function |  | The ARRAY_LAST GoogleSQL function is now generally available in BigQuery. |
| 2025-09-25 | ARRAY_SLICE GoogleSQL function |  | The ARRAY_SLICE GoogleSQL function is now generally available in BigQuery. |
| 2025-09-25 | BigQuery Data Canvas destination table nodes |  | BigQuery Data Canvas now supports destination table nodes, allowing query results to be persisted to new or existing tables. |
| 2025-09-24 | BigQuery Gemini CLI integration |  | BigQuery is now integrated with Gemini CLI through dedicated BigQuery extensions for agentic command-line data exploration and analysis. |
| 2025-09-24 | BigQuery ML model monitoring metric visualization |  | BigQuery ML now supports visualizing model monitoring metrics, including outputs from ML.VALIDATE_DATA_SKEW and ML.VALIDATE_DATA_DRIFT; BigQuery ML now supports chart and graph visualization for model monitoring metrics, including ML.VALIDATE_DATA_SKEW and ML.VALIDATE_DATA_DRIFT. |
| 2025-09-22 | BigQuery federated queries for Spanner PostgreSQL databases |  | BigQuery now supports GA federated queries against Spanner PostgreSQL dialect databases through BigQuery external datasets using GoogleSQL, including cross-region queries. |
| 2025-09-16 | BigQuery SQL code completion |  | BigQuery now provides SQL code completion across all projects. |
| 2025-09-16 | FOR SYSTEM_TIME AS OF for Apache Iceberg external tables |  | BigQuery now supports querying snapshots of Apache Iceberg external tables retained in Iceberg metadata using the FOR SYSTEM_TIME AS OF clause. |
| 2025-09-16 | JSON_KEYS GoogleSQL function |  | BigQuery SQL now supports the JSON_KEYS function for extracting unique JSON keys from a JSON expression. |
| 2025-09-16 | JSONPath mode option for BigQuery JSON functions |  | BigQuery SQL now allows a mode option when using JSONPath in supported JSON functions for more flexible path matching. |
| 2025-09-15 | BigQuery advanced runtime |  | BigQuery now allows enabling the advanced runtime to improve query execution time and slot usage; BigQuery added an advanced runtime option intended to improve query execution time and slot usage. |
| 2025-09-15 | BigQuery Studio saved queries in Connected Sheets |  | The BigQuery Studio Explorer pane now supports opening saved queries directly in Connected Sheets. |
| 2025-09-11 | BigQuery migration assessment for Informatica |  | BigQuery adds a migration assessment for Informatica to evaluate the complexity of moving data from Informatica platforms to BigQuery. |
| 2025-09-11 | Gemini SQL prompt recommendations |  | Gemini can now recommend natural language prompts in the BigQuery SQL generation tool. |
| 2025-09-11 | Spark and PySpark prompt support in BigQuery Data Science Agent |  | The BigQuery Data Science Agent now supports Apache Spark and PySpark keywords in user prompts. |
| 2025-09-10 | BigQuery data preparation file loading from Cloud Storage |  | BigQuery data preparation now supports loading files directly from Cloud Storage. |
| 2025-09-09 | Batch and interactive SQL translator metadata caching |  | BigQuery’s batch and interactive translators now cache metadata to improve SQL translation latency. |
| 2025-09-09 | Reusable default Cloud resource connections in BigQuery |  | BigQuery now allows projects to configure reusable default Cloud resource connections. |
| 2025-09-08 | BigQuery Data Science Agent search shortcuts |  | The BigQuery Data Science Agent now supports @ for searching BigQuery tables and + for searching files in prompts. |
| 2025-09-08 | BigQuery pipeline tasks for tables and views |  | BigQuery pipelines now support adding tables and views as pipeline tasks. |
| 2025-09-08 | BigQuery table-valued function table parameters |  | BigQuery now supports including table parameters when creating table-valued functions. |
| 2025-09-03 | BigQuery data preparation record flattening |  | BigQuery data preparation now supports flattening records in a single operation. |
| 2025-09-03 | BigQuery managed disaster recovery soft failover |  | BigQuery now supports soft failover as part of managed disaster recovery. |
| 2025-09-03 | RESERVATIONS_TIMELINE per_second_details field |  | The INFORMATION_SCHEMA.RESERVATIONS_TIMELINE view now includes the per_second_details field for per-second reservation capacity and usage details. |
| 2025-09-02 | BigQuery automatic processing-location selection in pipelines |  | BigQuery pipeline configurations can now automatically select a processing location. |
| 2025-09-02 | BigQuery Data Science Agent support for BigQuery ML and DataFrames in prompts |  | BigQuery notebooks’ Data Science Agent prompts can now reference BigQuery ML entities and DataFrames. |
| 2025-09-02 | BigQuery multi-region listing configuration for shared datasets and linked replicas |  | BigQuery sharing now allows creating listings for multiple regions for shared datasets and linked dataset replicas. |
| 2025-09-02 | BigQuery remote model support for Vertex AI gemini-embedding-001 |  | BigQuery now supports creating a remote model from the Vertex AI gemini-embedding-001 model for use with ML.GENERATE_EMBEDDING. |
| 2025-09-02 | BigQuery remote models for open embedding generation with ML.GENERATE_EMBEDDING |  | BigQuery now supports creating remote models from open embedding models in Vertex Model Garden or Hugging Face and generating embeddings with ML.GENERATE_EMBEDDING. |
| 2025-08-28 | BigQuery query templates for data clean rooms |  | BigQuery now supports query templates in data clean rooms to predefine and restrict runnable queries. |
| 2025-08-26 | BigQuery Gemini-assisted deduplication in data preparations |  | BigQuery data preparations now support Gemini-assisted deduplication of table data. |
| 2025-08-25 | BigQuery data insights-generated table and column descriptions |  | BigQuery can now generate table and column descriptions from metadata using data insights and Gemini. |
| 2025-08-25 | BigQuery ST_REGIONSTATS raster-and-vector integration with Google Earth Engine |  | BigQuery now supports the ST_REGIONSTATS geography function to combine Earth Engine raster data with BigQuery vector data. |
| 2025-08-22 | BigQuery multi-statement transactions for BigLake Iceberg tables |  | BigQuery now supports multi-statement transactions for BigLake Iceberg tables. |
| 2025-08-18 | BigQuery console Reference panel |  | BigQuery now provides a Reference panel in the query and notebook editors for schema preview and query snippet or field-name insertion. |
| 2025-08-18 | BigQuery Data Science Agent table selector |  | The BigQuery Data Science Agent now supports selecting one or more BigQuery tables for analysis. |
| 2025-08-14 | Cross-region federated queries to Spanner |  | BigQuery now supports querying Spanner tables from regions outside the source BigQuery region via cross-region federated queries. |
| 2025-08-13 | Gemini-assisted aggregations in BigQuery Data Preparation |  | BigQuery Data Preparation now supports table aggregations with Gemini assistance. |
| 2025-08-12 | Saving BigQuery query results to Cloud Storage |  | BigQuery users can now save query results directly to Cloud Storage. |
| 2025-08-11 | BigQuery GoogleSQL chained function call syntax |  | BigQuery GoogleSQL now supports chained function call syntax for nested function readability. |
| 2025-08-11 | BigQuery resource utilization charts |  | BigQuery now provides generally available resource utilization charts. |
| 2025-08-11 | BigQuery WITH expressions for temporary variables |  | BigQuery now supports USING WITH expressions in GoogleSQL queries to define temporary variables. |
| 2025-08-06 | BigQuery advanced runtime short query optimizations |  | Enabling the advanced runtime in BigQuery includes short query optimizations. |
| 2025-08-04 | Data Science Agent for BigQuery in Colab Enterprise |  | The BigQuery Data Science Agent is now available in Colab Enterprise for exploratory analysis and ML within notebooks. |
| 2025-07-31 | BigQuery metadata curation for profile and data-quality scans |  | BigQuery metadata curation in Google Cloud console now lets users manage data profile scans and data quality scans across projects. |
| 2025-07-22 | Access Transparency support for BigQuery data preparation |  | BigQuery data preparation now supports Access Transparency for data access auditing in the GA stage. |
| 2025-07-22 | BigQuery vector index drift monitoring and rebuild |  | BigQuery now supports vector index drift measurement with VECTOR_INDEX.STATISTICS and rebuilding changed vector indexes with ALTER VECTOR INDEX REBUILD. |
| 2025-07-22 | CREATE EXTERNAL TABLE and LOAD DATA preview options |  | CREATE EXTERNAL TABLE and LOAD DATA now support preview options for null marker definition and source column matching during CSV loading. |
| 2025-07-22 | MATCH_RECOGNIZE clause |  | BigQuery now supports the MATCH_RECOGNIZE SQL clause for pattern matching, filtering, and aggregating matches across rows in a table. |
| 2025-07-21 | DISTINCT pipe operator |  | Pipe syntax queries in BigQuery now support a DISTINCT pipe operator to return distinct rows. |
| 2025-07-17 | Named windows in pipe syntax queries |  | BigQuery pipe syntax now supports named windows for window function definitions. |
| 2025-07-17 | WITH pipe operator |  | Pipe syntax queries in BigQuery now support the WITH pipe operator for defining common table expressions. |
| 2025-07-16 | BigQuery ML model creation via Google Cloud console UI |  | Users can now create BigQuery ML models directly from the Google Cloud console user interface. |
| 2025-07-16 | Comments in BigQuery collaboration assets |  | BigQuery now supports adding comments to notebooks, data canvases, data preparation files, and saved queries, including replying to comments and sharing links. |
| 2025-07-15 | Commercialization of BigQuery sharing listings |  | BigQuery sharing listings can now be commercialized through Google Cloud Marketplace. |
| 2025-07-15 | Single-operation JSON column flattening in data preparation |  | BigQuery data preparation now allows flattening JSON columns with a single operation. |
| 2025-07-07 | Google Account credentials for data preparation execution |  | BigQuery data preparations in development can now be authorized for execution using Google Account user credentials. |
| 2025-07-01 | BigQuery @@location system variable |  | BigQuery adds the @@location system variable so a query can specify the location in which it runs; BigQuery now supports the @@location system variable to set the location in which a query is executed. |
| 2025-07-01 | BigQuery Apache Hadoop migration metadata migration tool |  | BigQuery now supports the dwh-migration-dumper tool to migrate metadata needed for Hadoop permissions and data migration. |
| 2025-07-01 | BigQuery Apache Hadoop permissions migration |  | BigQuery supports migrating permissions from Apache Hadoop, Apache Hive, and Ranger HDFS to BigQuery. |
| 2025-07-01 | BigQuery HDFS table migration |  | BigQuery supports migrating tables from an HDFS data lake to Google Cloud. |
| 2025-07-01 | In-place Cloud KMS key update for BigQuery tables |  | BigQuery now supports updating a table to use a new Cloud KMS encryption key while keeping the same key reference. |
| 2025-06-30 | BigQuery Studio scheduled notebooks |  | BigQuery Studio now lets users create and manage scheduled notebooks through the Schedule details pane. |
| 2025-06-26 | BigQuery search index organization usage view |  | BigQuery provides INFORMATION_SCHEMA.SEARCH_INDEXES_BY_ORGANIZATION so organizations can monitor search index consumption by project and table. |
| 2025-06-26 | BigQuery TreeAH vector index partitioning |  | BigQuery adds PARTITION BY support in CREATE VECTOR INDEX to partition TreeAH vector indexes for partition pruning and lower I/O cost. |
| 2025-06-23 | Apache Iceberg REST catalog for BigLake metastore |  | BigQuery adds Apache Iceberg REST catalog support in BigLake metastore to enable interoperability for open source query engines with Iceberg data in Cloud Storage. |
| 2025-06-23 | Colab Enterprise Gemini assistance |  | Colab Enterprise notebooks in BigQuery can use Gemini to explain code and explain/fix errors. |
| 2025-06-18 | BigQuery data quality scan metadata publishing to Dataplex |  | BigQuery data quality scan results can now be published as Dataplex Universal Catalog metadata rather than only in Google Cloud console. |
| 2025-06-18 | Gemini-generated BigQuery metadata descriptions |  | BigQuery Data Insights can use Gemini to generate table and column descriptions from table metadata. |
| 2025-06-16 | BigQuery migration assessment for Cloudera and Apache Hadoop |  | BigQuery makes migration assessment available for workflows using Cloudera and Apache Hadoop. |
| 2025-06-16 | BigQuery ML multivariate time-series forecasting with TIME_SERIES_ID_COL |  | BigQuery ML added a TIME_SERIES_ID_COL option for ARIMA_PLUS_XREG multivariate models so users can forecast multiple time series in one model. |
| 2025-06-16 | Gemini-based batch SQL translation output review tabs |  | BigQuery SQL translation now exposes Gemini-based batch translation output for review in the code and configuration tabs. |
| 2025-06-16 | Gemini-enhanced interactive SQL translation rules |  | BigQuery SQL translation now supports creating and applying Gemini-enhanced translation rules for interactive SQL translations. |
| 2025-06-16 | Gemini-enhanced SQL translation configuration YAML |  | BigQuery now supports creating Gemini-based configuration YAML files to generate AI suggestions during SQL translation. |
| 2025-06-16 | Merchant Center best sellers report multi-client support |  | The Merchant Center best sellers report in BigQuery now supports multi-client accounts using aggregator_id and a consolidated BestSellersEntityProductMapping table. |
| 2025-06-16 | SQL-based IAM tag management for BigQuery |  | BigQuery now supports managing IAM tags on datasets and tables directly through SQL. |
| 2025-06-12 | BigQuery dark theme |  | BigQuery introduced a dark theme option in the Google Cloud Console for users who prefer a dark interface. |
| 2025-06-11 | GoogleSQL ARRAY_FIRST function |  | The ARRAY_FIRST GoogleSQL function is now available in preview and returns the first element of an array. |
| 2025-06-11 | GoogleSQL ARRAY_LAST function |  | The ARRAY_LAST GoogleSQL function is now available in preview and returns the last element of an array. |
| 2025-06-11 | GoogleSQL ARRAY_SLICE function |  | The ARRAY_SLICE GoogleSQL function is now available in preview and returns a consecutive subset of array elements. |
| 2025-06-10 | Vertex AI Provisioned Throughput support for BigQuery SQL AI generation |  | BigQuery now supports Vertex AI Provisioned Throughput for ML.GENERATE_TEXT and AI.GENERATE functions to provide consistent high throughput. |
| 2025-06-09 | Materialized views support Apache Iceberg external tables |  | BigQuery now allows materialized views to reference Apache Iceberg external tables without migration to BigQuery-managed storage. |
| 2025-06-03 | BigLake metastore naming update |  | BigQuery metastore was renamed to BigLake metastore, with the former BigLake metastore reclassified as BigLake metastore (classic). |
| 2025-06-03 | BigLake tables for Apache Iceberg naming |  | BigQuery tables for Apache Iceberg were renamed to BigLake tables for Apache Iceberg. |
| 2025-06-02 | Apache Spark demo notebook in BigQuery welcome tab |  | BigQuery now offers an Apache Spark demo notebook in the console Welcome tab to demonstrate basics of Spark notebooks and serverless Spark in BigQuery. |
| 2025-06-02 | BigQuery Spanner external datasets with authorized access |  | BigQuery now supports using Spanner external datasets with authorized views, authorized routines, and Cloud resource connections. |
| 2025-06-02 | BigQuery Studio configuration settings in console |  | BigQuery Studio gained preview configuration settings in the console to customize the UI by showing or hiding elements at project or organization scope. |
| 2025-06-02 | CREATE EXTERNAL TABLE and LOAD DATA formatting and timezone options |  | CREATE EXTERNAL TABLE and LOAD DATA now support additional preview options for date and time parsing, including time_zone, date_format, datetime_format, time_format, and timestamp_format. |
| 2025-05-29 | BigQuery Google Account credential authorization for pipelines |  | BigQuery now allows users to create, schedule, and run pipelines, notebooks, and data preparations using Google Account credentials. |
| 2025-05-29 | dbt-bigquery support for BigQuery DataFrames Python execution |  | BigQuery now lets users run Python code defined in BigQuery DataFrames through the dbt-bigquery adapter. |
| 2025-05-29 | Event-driven BigQuery transfers from Cloud Storage |  | BigQuery now supports event-driven transfers from Cloud Storage that automatically trigger transfer runs when bucket data is modified or added. |
| 2025-05-28 | BigQuery column metadata indexing |  | BigQuery now provides column metadata indexing for both BigQuery tables and external tables. |
| 2025-05-28 | BigQuery notebook serverless PySpark sessions |  | BigQuery now supports creating serverless Spark sessions to run PySpark code inside BigQuery notebooks. |
| 2025-05-27 | BigQuery optional job creation mode |  | BigQuery now offers an optional job creation mode that optimizes eligible small queries and uses caching to reduce latency. |
| 2025-05-27 | BigQuery sharing for Pub/Sub streaming data |  | BigQuery now supports sharing Pub/Sub streaming data via BigQuery sharing with additional client library support and provider usage metrics. |
| 2025-05-22 | BigQuery multi-column data preparation |  | BigQuery data preparation now supports selecting multiple columns and performing tasks such as dropping columns. |
| 2025-05-22 | BigQuery Organization Policy custom constraints |  | BigQuery now supports custom constraints with Organization Policy to control specific fields more granularly for certain BigQuery resources. |
| 2025-05-22 | BigQuery Studio IAM roles for Gemini access |  | BigQuery Studio setup now prompts for and grants BigQuery Studio User and Admin roles that include permissions to use Gemini features. |
| 2025-05-22 | BigQuery Teradata migration schema mapping output selection |  | BigQuery Data Transfer Service Teradata migrations now allow selecting BigQuery translation engine outputs to use as schema mappings. |
| 2025-05-21 | BigQuery routine access controls |  | BigQuery now supports setting access controls on SQL routines. |
| 2025-05-19 | BigQuery continuous queries |  | BigQuery continuous queries provide long-running SQL statements that continuously process streaming data, including real-time ML inference; BigQuery introduced continuous queries, enabling long-lived SQL processing pipelines for real-time analytics and replication to Pub/Sub, Bigtable, or BigQuery. |
| 2025-05-19 | Cross-regional BigQuery federated queries for Cloud Spanner |  | BigQuery now supports cross-region federated queries that allow querying Spanner tables from regions other than the BigQuery region. |
| 2025-05-14 | BigQuery cross-region batch transfer for load and export |  | BigQuery now supports cross-region batch loading and exporting data across regions and multi-regions using bq load, LOAD DATA, bq extract, or EXPORT DATA. |
| 2025-05-14 | BigQuery TreeAH vector index type |  | BigQuery vector indexes now support the TreeAH index type, using Google's ScaNN algorithm for efficient batch processing. |
| 2025-05-14 | Scheduled Snowflake-to-BigQuery data transfers |  | The BigQuery Data Transfer Service now supports scheduling automated data transfers from Snowflake to BigQuery. |
| 2025-05-13 | BigQuery GROUP BY ALL clause |  | BigQuery SQL now supports the GROUP BY ALL clause; BigQuery now provides a GROUP BY ALL clause to infer grouping keys from SELECT items. |
| 2025-05-13 | BigQuery GROUP BY ARRAY support |  | BigQuery SQL now supports GROUP BY ARRAY combined with the SELECT DISTINCT clause. |
| 2025-05-13 | BigQuery GROUP BY STRUCT support |  | BigQuery SQL now supports GROUP BY STRUCT combined with the SELECT DISTINCT clause. |
| 2025-05-12 | BigQuery execution graph query text section |  | BigQuery execution graphs now include a Query text section to link stage steps directly to the underlying query text. |
| 2025-05-12 | BigQuery multimodal workflows with BigQuery DataFrames |  | BigQuery now supports multimodal analysis and ELT workflows in SQL and Python using BigQuery DataFrames with ObjectRef/ObjectRefRuntime for unstructured data and Gemini multimodal embedding workflows. |
| 2025-05-12 | BigQuery resource utilization timeline and slot-usage views |  | BigQuery resource utilization charts now default to a six-hour timeline and include a new reservation slot usage view for monitoring idle, baseline, and autoscaled slots. |
| 2025-05-05 | BigQuery saved query autosave |  | BigQuery now automatically saves changes made to saved queries. |
| 2025-04-28 | BigQuery Dataplex automatic discovery for storage metadata tables |  | BigQuery integrates with Dataplex automatic discovery to scan Cloud Storage buckets and create BigLake, external, or object tables using extracted metadata. |
| 2025-04-28 | BigQuery SQL translation configuration YAML optimization |  | BigQuery now supports using configuration YAML files to optimize and improve performance when translating SQL queries from source databases. |
| 2025-04-24 | BigQuery Data Canvas Gemini assistant |  | BigQuery Data Canvas now includes a Gemini-powered assistant that can build and modify data canvases in response to user prompts. |
| 2025-04-23 | Fair idle slot allocation across reservations |  | BigQuery now supports fair distribution of idle slots across reservations within a single admin project. |
| 2025-04-23 | Maximum reservation slot limit |  | You can now set and configure a maximum slot limit for a BigQuery reservation when creating or updating it. |
| 2025-04-23 | Runtime reservation selection and reservation IAM policies |  | BigQuery now allows selecting the reservation used by a query at runtime and setting IAM policies directly on reservations. |
| 2025-04-21 | Fine-grained access control for BigQuery metastore Iceberg tables |  | BigQuery metastore now supports fine-grained access control for Apache Iceberg tables. |
| 2025-04-17 | BigQuery DataFrames version 2.0 |  | BigQuery DataFrames 2.0 introduces security and performance improvements, new features, and breaking changes to the BigQuery DataFrames API. |
| 2025-04-17 | Partial ordering mode in BigQuery DataFrames |  | BigQuery DataFrames now supports partial ordering mode to generate more efficient queries. |
| 2025-04-09 | Apache Arrow streaming via BigQuery Storage Write API |  | BigQuery now supports streaming data to the Storage Write API using the Apache Arrow format. |
| 2025-04-09 | ST_REGIONSTATS geography function for raster-vector analysis |  | BigQuery now supports combining raster and vector data with ST_REGIONSTATS for geospatial analysis. |
| 2025-04-08 | BigQuery metastore Apache Iceberg resource management |  | BigQuery now enables creating, viewing, modifying, and deleting Apache Iceberg resources in BigQuery metastore. |
| 2025-04-08 | BigQuery metastore integration with Apache Flink |  | BigQuery now supports connecting its metastore to Apache Flink. |
| 2025-04-08 | BigQuery ML TimesFM built-in forecasting model |  | BigQuery ML now includes a built-in TimesFM univariate time-series model accessible through AI.FORECAST. |
| 2025-04-07 | BigQuery Data Preparation |  | BigQuery Data Preparation is now generally available with Gemini-powered suggestions and support for visual pipelines and pipeline scheduling with Dataform. |
| 2025-04-07 | BigQuery ML remote models for Llama and Mistral on Vertex AI |  | BigQuery ML now supports creating and using remote models backed by Llama and Mistral models in Vertex AI via ML.GENERATE_TEXT. |
| 2025-04-07 | Smart tuning for BigQuery materialized views |  | Smart-tuning is now available for BigQuery materialized views when they are in the same project as a base table or in the query-project. |
| 2025-04-03 | BigQuery migration assessment support for Amazon Redshift Serverless |  | BigQuery migration assessment now includes source assessment support for Amazon Redshift Serverless. |
| 2025-04-02 | BigQuery Notebooks BigFrames code generation |  | BigQuery Notebooks now supports code generation for BigQuery DataFrames using the BigFrames library. |
| 2025-04-02 | Python user-defined functions in BigQuery |  | BigQuery now supports creating and using Python UDFs with support for external libraries and APIs. |
| 2025-04-01 | BigQuery ML contribution analysis models |  | BigQuery ML supports creating contribution analysis models with CREATE MODEL and generating metric insights using ML.GET_INSIGHTS; BigQuery ML now supports creating contribution analysis models with CREATE MODEL and analyzing results with ML.GET_INSIGHTS. |
| 2025-04-01 | BigQuery pipe linear query syntax |  | BigQuery pipe syntax now supports a linear query structure to make queries easier to read and maintain. |
| 2025-03-31 | BigLake managed tables support in BigQuery |  | BigQuery now supports BigLake managed tables. |
| 2025-03-31 | BigQuery CDC _CHANGE_SEQUENCE_NUMBER |  | BigQuery change data capture now supports _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering; BigQuery change data capture now supports defining _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering. |
| 2025-03-31 | BigQuery data preparation pipelines |  | BigQuery pipelines now support running data preparation tasks that execute code assets in sequence on a schedule. |
| 2025-03-31 | BigQuery Data Transfer Service for Google Search Ads Performance Max tables |  | BigQuery Data Transfer Service for Search Ads now exposes Performance Max campaign data in additional reporting tables. |
| 2025-03-31 | BigQuery Data Transfer Service skip load_match_tables option for Google Ad Manager |  | BigQuery Data Transfer Service for Google Ad Manager now allows skipping match-table loading by setting load_match_tables to FALSE. |
| 2025-03-31 | BigQuery Iceberg external table merge-on-read |  | Iceberg external tables in BigQuery now support merge-on-read, including position and equality deletes. |
| 2025-03-31 | BigQuery pipelines in BigQuery Studio |  | BigQuery Studio now supports building, scheduling, configuring notebook runtimes for, and sharing pipelines composed of SQL queries or notebooks. |
| 2025-03-31 | BigQuery row-level access policy subqueries |  | BigQuery row-level access policies now support the use of subqueries. |
| 2025-03-31 | BigQuery schedule management page |  | The BigQuery Scheduling page now supports viewing, creating, and managing schedules for data preparations, notebooks, pipelines, and scheduled queries. |
| 2025-03-31 | BigQuery Storage Read API support |  | BigQuery now supports the BigQuery Storage Read API. |
| 2025-03-31 | Google Ad Manager transfer frequency configuration in BigQuery Data Transfer Service |  | BigQuery Data Transfer Service for Google Ad Manager now supports configurable repeat frequency with a default interval of 8 hours and a minimum of 4 hours. |
| 2025-03-27 | BigQuery SQL translation metadata caching |  | BigQuery SQL translation now supports metadata caching to reduce latency on repeated translation requests. |
| 2025-03-26 | BigQuery search index column granularity |  | BigQuery search indexes can now be created with configurable column granularity to improve query performance. |
| 2025-03-24 | BigQuery Add Data dialog |  | The BigQuery Add Data dialog has been redesigned with a source-first flow and improved search and filtering for loading data. |
| 2025-03-24 | BigQuery Data Transfer Service support for Google Analytics 4 |  | BigQuery Data Transfer Service can now transfer reporting and configuration data from Google Analytics 4 into BigQuery. |
| 2025-03-24 | BigQuery reservation labels |  | BigQuery now allows labels to be attached to reservations for organization and billing analysis. |
| 2025-03-24 | KLL quantile functions |  | BigQuery now supports KLL quantile functions for efficient approximate quantile calculations. |
| 2025-03-20 | BigQuery ML remote models for Anthropic Claude |  | BigQuery ML now supports creating remote models based on Anthropic Claude in Vertex AI and using ML.GENERATE_TEXT/ML.EVALUATE with those models. |
| 2025-03-20 | BigQuery repositories and workspaces |  | BigQuery now supports repositories and workspaces for Git-based version control of BigQuery files. |
| 2025-03-17 | BigQuery EXPORT DATA reverse ETL to Spanner |  | BigQuery now supports reverse ETL from BigQuery to Spanner using EXPORT DATA statements. |
| 2025-03-17 | BigQuery external dataset for Spanner |  | BigQuery now supports creating external datasets that link to an existing Spanner database. |
| 2025-03-17 | BigQuery TYPEOF function |  | BigQuery added the TYPEOF function to return the data type of an expression. |
| 2025-03-13 | Dataform CMEK organization policy support |  | Dataform now supports using the CMEK organization policy. |
| 2025-03-13 | Gemini Cloud Assist chat in BigQuery |  | BigQuery now supports Gemini Cloud Assist chat for generating SQL queries and Python code. |
| 2025-03-12 | Default Cloud resource connections in BigQuery |  | BigQuery now lets projects define reusable default Cloud resource connections. |
| 2025-03-06 | BigQuery Data Transfer Service custom Google Ads reports |  | BigQuery Data Transfer Service now supports custom Google Ads reports using GAQL for ingesting additional report fields. |
| 2025-03-03 | BigQuery Gemini-assisted Python code completion |  | BigQuery now supports Gemini-powered Python code completion in the query editor with context-aware recommendations. |
| 2025-03-03 | BigQuery SQL CREATE AGGREGATE FUNCTION |  | BigQuery now lets users define SQL user-defined aggregate functions using the CREATE AGGREGATE FUNCTION statement. |
| 2025-02-25 | BigQuery best sellers and price competitiveness migration guides |  | BigQuery now provides migration guides for moving to the newer versions of best sellers and price competitiveness reports. |
| 2025-02-25 | BigQuery resource utilization charts enhancements |  | BigQuery resource utilization charts now include additional metrics views and more chart configuration options. |
| 2025-02-17 | BigQuery subscriber email logging |  | BigQuery now supports subscriber email logging to record user principal IDs for jobs and queries on linked datasets at listing and data exchange scope. |
| 2025-02-10 | BigQuery Data Preparation Gemini join recommendations |  | BigQuery Data Preparation now provides Gemini-powered, context-aware join operation recommendations. |
| 2025-02-06 | BigQuery JavaScript CREATE AGGREGATE FUNCTION |  | BigQuery now supports creating JavaScript user-defined aggregate functions with the CREATE AGGREGATE FUNCTION statement. |
| 2025-02-03 | BigQuery set operations BY NAME and CORRESPONDING |  | BigQuery now supports BY NAME and CORRESPONDING modifiers for set operations to align columns by name instead of position. |
| 2025-01-28 | BigQuery stored column usage reporting for vector search |  | BigQuery now exposes stored column usage information for vector-search query jobs that use stored columns. |
| 2025-01-27 | BigQuery conditional IAM ACLs for datasets |  | BigQuery now supports conditional IAM access rules on datasets using access control lists (ACLs). |
| 2025-01-27 | BigQuery ML remote open model creation |  | BigQuery ML now supports creating remote models from open models in Vertex Model Garden or Hugging Face and deploying them to Vertex AI. |
| 2025-01-27 | BigQuery ML.EVALUATE for remote models |  | BigQuery ML now supports ML.EVALUATE for evaluating remote generative AI models. |
| 2025-01-27 | BigQuery ML.GENERATE_TEXT with remote open models |  | BigQuery ML now supports using ML.GENERATE_TEXT with remote open models deployed to Vertex AI for generative AI tasks. |
| 2025-01-22 | BigQuery metastore |  | BigQuery metastore enables access and management of metadata across processing engines, including BigQuery tables and open formats such as Apache Iceberg. |
| 2025-01-21 | BigQuery data preparation testing and scheduling |  | BigQuery data preparation now allows users to test preparation workflows before deployment and schedule production runs. |
| 2025-01-21 | BigQuery ML Anthropic Claude model evaluation |  | BigQuery ML now supports evaluating Anthropic Claude models via the ML.EVALUATE function. |
| 2025-01-21 | Gemini-powered natural language data preparation in BigQuery |  | BigQuery now supports preparing data with natural language using Gemini. |
| 2025-01-17 | BigQuery Data Transfer Service MySQL source transfer |  | BigQuery Data Transfer Service now supports transferring data from MySQL sources. |
| 2025-01-17 | BigQuery Data Transfer Service PostgreSQL source transfer |  | BigQuery Data Transfer Service now supports transferring data from PostgreSQL sources. |
| 2025-01-17 | BigQuery Studio session default settings |  | BigQuery Studio adds a Settings page in the navigation menu for configuring default session settings. |
| 2025-01-16 | BigQuery migration assessment for Oracle TCO calculator |  | BigQuery migration assessment for Oracle now includes a total-cost-of-ownership calculator for compute and storage migration estimates. |
| 2025-01-16 | BigQuery navigation menu category redesign |  | BigQuery navigation has been reorganized into new menu categories. |
| 2025-01-13 | BigQuery ML multivariate time series forecasting |  | BigQuery ML ARIMA_PLUS_XREG models now support the TIME_SERIES_ID_COL option to forecast multiple time series at once. |
| 2025-01-13 | BigQuery Omni VPC allowlists |  | BigQuery Omni VPC allowlists can now restrict access to AWS S3 and Azure Blob Storage from specific BigQuery Omni VPCs; BigQuery Omni added VPC allowlists to restrict access to AWS S3 and Azure Blob Storage from specific Omni VPCs. |
| 2024-12-19 | Dataplex management and metadata indexing for BigQuery collaboration artifacts |  | BigQuery now supports managing data canvases, data preparations, notebooks, saved queries, and workflows in Dataplex with automatic metadata availability. |
| 2024-12-19 | Dataplex metadata search for BigQuery assets |  | BigQuery now supports searching and viewing metadata for data canvases, data preparations, notebooks, saved queries, and workflows in Dataplex. |
| 2024-12-19 | Sovereign Controls for EU support for BigQuery Data Transfer Service |  | The EU Sovereign Controls control package now supports BigQuery Data Transfer Service. |
| 2024-12-16 | BigQuery integration in Google Cloud Code for VS Code |  | The Google Cloud Code extension for VS Code now enables working with BigQuery datasets and BigQuery notebooks. |
| 2024-12-12 | Analytics Hub listings on Google Cloud Marketplace |  | BigQuery Analytics Hub now supports discovering, procuring, and commercializing listings on Google Cloud Marketplace. |
| 2024-12-12 | BigQuery regional endpoints |  | BigQuery regional endpoints are now generally available and route requests directly to the selected region. |
| 2024-12-11 | BigQuery cross-region dataset replication |  | BigQuery now supports replicating datasets from a source region to one or more additional regions; BigQuery supports replicating a dataset from a source region to one or more target regions. |
| 2024-12-11 | BigQuery Managed Disaster Recovery |  | BigQuery Managed Disaster Recovery is now generally available, providing managed failover and redundant compute capacity for critical workloads; BigQuery Managed Disaster Recovery introduces managed failover and redundant compute capacity for business-critical workloads during total region outages and is currently in preview for Enterprise Plus. |
| 2024-12-11 | BigQuery ML remote models on Vertex AI Gemini 2.0 Flash Exp |  | BigQuery ML now supports creating remote models from Vertex AI Gemini 2.0 Flash Exp and using ML.GENERATE_TEXT for text and multimodal content in object tables. |
| 2024-11-19 | BigQuery search indexes for INT64 and TIMESTAMP |  | BigQuery now supports search indexes on INT64 or TIMESTAMP columns and predicate optimization based on those indexes. |
| 2024-11-14 | BigQuery ML remote models on Vertex AI Gemini 1.5 Flash and Gemini 1.5 Pro |  | BigQuery ML now supports creating Gemini 1.5 Flash and Gemini 1.5 Pro remote models and running ML.GENERATE_TEXT on text and multimodal object-table content. |
| 2024-11-11 | BigQuery ML supervised tuning for Vertex AI Gemini models |  | BigQuery ML now supports supervised tuning on remote models built on Vertex AI Gemini 1.5 Flash or Gemini 1.5 Pro. |
| 2024-11-11 | BigQuery ML.EVALUATE for Vertex AI LLMs |  | BigQuery ML now supports evaluating Vertex AI LLMs, including pre-trained PaLM and Gemini models, with the ML.EVALUATE function. |
| 2024-11-06 | Gemini-assisted batch SQL translation suggestions in BigQuery |  | BigQuery now supports generating AI-powered suggestions for batch SQL translations using a Gemini-based configuration YAML file. |
| 2024-11-06 | Gemini-enhanced interactive SQL translation in BigQuery |  | BigQuery now offers interactive Gemini-enhanced SQL translation that allows customization of translated GoogleSQL queries. |
| 2024-11-06 | Gemini-generated SQL translation explanations in BigQuery |  | BigQuery now provides Gemini-generated text explanations that summarize SQL queries after interactive SQL translation. |
| 2024-11-05 | Dataplex automatic discovery for Cloud Storage metadata |  | Dataplex automatic discovery can now scan Cloud Storage buckets to extract metadata, create BigLake/external/object tables, and catalog data. |
| 2024-10-24 | BigQuery Data Preparation with Gemini |  | Introduces context-aware transformation recommendations from Gemini to help cleanse data before analysis. |
| 2024-10-21 | Airflow DAG lifecycle actions in BigQuery |  | Adds support for viewing, triggering, and pausing Airflow DAGs directly in BigQuery. |
| 2024-10-21 | BigQuery Data Transfer Service organization policies for transfer configurations |  | Adds custom organization policies that allow or deny specific operations on BigQuery Data Transfer Service transfer configurations. |
| 2024-10-21 | Notebook schedule management in BigQuery Orchestration |  | Enables managing notebook schedules from the Orchestration page in BigQuery. |
| 2024-10-14 | Fine-grained DML in BigQuery |  | Adds fine-grained DML controls to optimize UPDATE, DELETE, and MERGE statement execution. |
| 2024-10-11 | BigQuery migration assessment for Oracle |  | Adds a BigQuery migration assessment tool to evaluate the complexity of moving data from Oracle to BigQuery. |
| 2024-10-10 | BigQuery tables for Apache Iceberg |  | Introduces BigQuery tables for Apache Iceberg that allow querying Iceberg data in customer-owned cloud buckets without moving data. |
| 2024-10-10 | GeoParquet metadata support for Parquet |  | Adds support for exporting and loading Parquet files containing GeoParquet metadata. |
| 2024-10-08 | Pipe syntax for GoogleSQL |  | Adds support for pipe syntax in GoogleSQL across all query-writing contexts. |
| 2024-10-03 | BigQuery external datasets for Cloud Spanner |  | Adds the ability to create BigQuery external datasets that link directly to existing Spanner databases. |
| 2024-10-03 | BigQuery ODBC connector authentication via ADC on Compute Engine |  | Enables BigQuery ODBC connector authentication on Google Cloud VMs through Application Default Credentials using the Google internal metadata server. |
| 2024-10-03 | ODBC PrimaryKeys key sequence indexing |  | Corrects BigQuery ODBC output so PrimaryKeys key sequence values are 1-indexed to reflect column order. |
| 2024-09-30 | BigQuery flexible column names |  | BigQuery now supports flexible column names for tables and views across extracting, loading, streaming, and querying workflows. |
| 2024-09-30 | BigQuery history-based optimization controls |  | BigQuery now supports enabling, disabling, and analyzing history-based optimizations for query performance. |
| 2024-09-30 | BigQuery materialized view replica creation in Google Cloud Console |  | Users can create a materialized view replica directly from the Google Cloud Console. |
| 2024-09-30 | BigQuery operational health dashboard |  | Provides an operational health dashboard with real-time metrics for slot usage, shuffle usage, errors, and total storage. |
| 2024-09-26 | BigQuery Cloud Console tab keyboard navigation |  | The BigQuery console now provides keyboard shortcuts for tab navigation in the details pane. |
| 2024-09-24 | BigQuery CMEK automation with Cloud KMS Autokey |  | BigQuery now supports using Cloud KMS Autokey, including Cloud HSM-backed keys, to automate creation and use of CMEKs. |
| 2024-09-24 | BigQuery ML audio transcription from object tables |  | BigQuery ML supports transcribing audio files from object tables via Speech-to-Text remote models using the ML.TRANSCRIBE function. |
| 2024-09-24 | BigQuery ML Document AI processing |  | BigQuery ML supports document processing from object tables via Document AI remote models using the ML.PROCESS_DOCUMENT function. |
| 2024-09-24 | BigQuery ML embedding generation with matrix factorization models |  | BigQuery ML adds ML.GENERATE_EMBEDDING support with matrix factorization models for user and item embeddings. |
| 2024-09-24 | BigQuery ML embedding generation with PCA and autoencoder models |  | BigQuery ML adds ML.GENERATE_EMBEDDING support with PCA or autoencoder models for embeddings on structured IID data. |
| 2024-09-24 | BigQuery ML multimodal embeddings with ML.GENERATE_EMBEDDING |  | BigQuery ML now supports ML.GENERATE_EMBEDDING with a Vertex AI multimodalembedding LLM to produce text, image, and video embeddings; BigQuery ML preview support for ML.GENERATE_EMBEDDING using a Vertex AI multimodalembedding LLM to create text-and-image embeddings. |
| 2024-09-23 | BigQuery scheduled sequential code workflows |  | BigQuery now lets users create workflows that execute code assets sequentially on a scheduled basis. |
| 2024-09-19 | BigQuery ML model monitoring: ML.DESCRIBE_DATA |  | BigQuery ML introduces ML.DESCRIBE_DATA to compute descriptive statistics for training or serving datasets. |
| 2024-09-19 | BigQuery ML model monitoring: ML.TFDV_DESCRIBE |  | BigQuery ML introduces ML.TFDV_DESCRIBE to compute fine-grained descriptive statistics for training or serving data. |
| 2024-09-19 | BigQuery ML model monitoring: ML.TFDV_VALIDATE |  | BigQuery ML adds ML.TFDV_VALIDATE to compare statistics across training and serving datasets to detect anomalous differences. |
| 2024-09-19 | BigQuery ML model monitoring: ML.VALIDATE_DATA_DRIFT |  | BigQuery ML adds ML.VALIDATE_DATA_DRIFT to compare statistics across serving datasets and detect data drift. |
| 2024-09-19 | BigQuery ML model monitoring: ML.VALIDATE_DATA_SKEW |  | BigQuery ML adds ML.VALIDATE_DATA_SKEW to compare serving data statistics against training data statistics and detect skew. |
| 2024-09-16 | BigQuery classic saved query batch migration |  | BigQuery now supports batch migration of classic saved queries to the current saved query format. |
| 2024-09-16 | BigQuery vector index column storage and pre-filtering |  | BigQuery now supports storing columns in vector indexes and pre-filtering vector search data to improve query efficiency. |
| 2024-09-12 | BigQuery DataFrames partial ordering mode |  | BigQuery DataFrames now support a partial ordering mode for generating more efficient query plans. |
| 2024-09-11 | Terraform-managed BigQuery IAM tags |  | BigQuery now supports managing IAM tags on datasets and tables through Terraform. |
| 2024-09-09 | BigQuery Data Transfer Service: Display & Video 360 campaign transfer |  | BigQuery Data Transfer Service can transfer Display & Video 360 campaign reporting and configuration data, including Creative, Partner, and Advertiser tables, into BigQuery. |
| 2024-09-04 | BigQuery vector indexes |  | BigQuery now supports vector indexes to improve VECTOR_SEARCH query performance with approximate-result tradeoffs; Introduces vector indexes to accelerate VECTOR_SEARCH with more efficient (approximate) similarity retrieval. |
| 2024-09-04 | BigQuery VECTOR_SEARCH function |  | BigQuery now supports the VECTOR_SEARCH function to find semantically similar entities from embeddings; Adds the VECTOR_SEARCH function for semantic similarity search over embeddings. |
| 2024-08-29 | BigLake Delta Lake tables in BigQuery |  | BigQuery now supports Delta Lake BigLake tables for petabyte-scale tabular data storage. |
| 2024-08-29 | BigQuery Data Transfer Service incremental Teradata migration |  | BigQuery Data Transfer Service now supports incremental data transfers when migrating from Teradata data warehouses. |
| 2024-08-28 | BigQuery federated querying of AlloyDB |  | BigQuery now supports querying AlloyDB data directly through federated queries. |
| 2024-08-28 | BigQuery Gemini Data Canvas SQL and Python assistance |  | BigQuery Gemini now offers Data Canvas assistance for SQL and Python workflows. |
| 2024-08-28 | BigQuery Gemini Data insights |  | BigQuery Gemini features now include Data insights capabilities. |
| 2024-08-28 | BigQuery Gemini partitioning and clustering recommendations |  | BigQuery Gemini now provides recommendations for table partitioning and clustering. |
| 2024-08-28 | BigQuery Gemini Prompt SQL generation |  | BigQuery Gemini provides the Prompt tool to generate SQL queries. |
| 2024-08-28 | BigQuery Gemini Python code generation |  | BigQuery Gemini can generate Python code to support data workflows. |
| 2024-08-28 | BigQuery Gemini SQL query explanation |  | BigQuery Gemini can explain SQL queries to help users understand query logic. |
| 2024-08-28 | BigQuery GROUP BY and SELECT DISTINCT support for ARRAY and STRUCT types |  | BigQuery now supports GROUP BY and SELECT DISTINCT clauses when using ARRAY and STRUCT data types. |
| 2024-08-28 | BigQuery SEARCH function phrase support |  | The BigQuery SEARCH function now supports phrase-based search; The BigQuery SEARCH function now includes phrase support in preview. |
| 2024-08-26 | BigQuery EXPORT DATA to Bigtable reverse ETL |  | BigQuery EXPORT DATA statements can now write directly to Bigtable for reverse ETL scenarios. |
| 2024-08-26 | BigQuery ML Anthropic Claude remote models |  | BigQuery ML now supports creating remote models based on Anthropic Claude in Vertex AI for generative text tasks. |
| 2024-08-21 | BigQuery Python code completion |  | BigQuery now provides Python code completion for all BigQuery projects, available in preview. |
| 2024-08-20 | BigQuery ML multivariate time series anomaly detection |  | BigQuery ML now supports anomaly detection with ARIMA_PLUS_XREG multivariate time-series models for historical and new data with multiple feature columns. |
| 2024-08-19 | BigQuery insights and recommendations surfaces |  | BigQuery now lets users view recommendations through the Recommendations page in Google Cloud Console and dedicated INFORMATION_SCHEMA recommendation views. |
| 2024-08-14 | BigQuery short query optimized mode |  | BigQuery adds short query optimized mode to automatically accelerate qualifying small queries for lower latency. |
| 2024-08-12 | BigQuery time series and range SQL functions |  | BigQuery now supports time series and range functions to enable time series analysis in SQL; BigQuery now adds time series and range functions to support time series analysis. |
| 2024-08-08 | BigQuery JSON_KEYS function |  | BigQuery introduces the JSON_KEYS function to extract unique keys from a JSON expression. |
| 2024-08-08 | BigQuery JSONPath mode for JSON functions |  | BigQuery adds support for JSONPath matching modes in selected JSON functions to allow more flexible JSON data structure matching. |
| 2024-08-07 | Partition-aligned materialized views on Apache Iceberg tables |  | BigQuery now supports creating materialized views over Apache Iceberg tables that are partition-aligned with the base table using time-based transformations. |
| 2024-07-31 | BigQuery workload management autoscaler and slot tuning |  | BigQuery workload management now offers improved autoscaler behavior with immediate and finer slot scaling, 50-slot granularity, and incremental capacity commitment and autoscaling adjustments. |
| 2024-07-31 | SQL translation configuration via YAML files |  | BigQuery now supports configuration YAML files to optimize translated SQL when migrating queries from source databases. |
| 2024-07-30 | BigQuery ML.GENERATE_EMBEDDING output_dimensionality argument |  | BigQuery ML adds the output_dimensionality argument to ML.GENERATE_EMBEDDING when using Vertex AI multimodalembedding models. |
| 2024-07-29 | BigQuery administrative jobs explorer |  | BigQuery introduced an administrative jobs explorer for monitoring organization-wide job activity. |
| 2024-07-29 | BigQuery RANGE data type JSON encoding support |  | BigQuery added support for JSON encoding of the RANGE data type. |
| 2024-07-29 | BigQuery Vector indexes TreeAH index type |  | BigQuery vector indexes now support the TreeAH index type, which uses Google’s ScaNN algorithm and is optimized for batch query workloads. |
| 2024-07-25 | BigQuery IAM deny policy permissions expansion |  | BigQuery IAM deny policies now support additional permissions, including deny rules for `bigquery.tables.getData`. |
| 2024-07-25 | BigQuery table explorer |  | BigQuery added a table explorer to inspect table data and generate data exploration queries. |
| 2024-07-23 | Manifest file support for BigQuery external data on S3 and Azure Blob |  | BigQuery now supports manifest files when reading data from Amazon S3 and Azure Blob Storage. |
| 2024-07-23 | SAP Datasphere connections with network attachments in BigQuery |  | BigQuery now allows SAP Datasphere connections to be configured with network attachments for improved connection security. |
| 2024-07-22 | BigQuery CHANGES change history function |  | BigQuery added the CHANGES table-valued function to return a history of table mutations over time. |
| 2024-07-22 | BigQuery DML support for Storage Write API recent rows |  | BigQuery now allows DML operations on rows recently written through the Storage Write API. |
| 2024-07-18 | BigQuery migration assessment enhancements |  | BigQuery migration assessments now offer GA features such as automatic assessment dataset creation, configurable destination datasets, partial-result visibility, and improved progress and error details. |
| 2024-07-17 | Default storage billing model configuration for new datasets |  | BigQuery added support for configuring the default storage billing model at dataset creation time. |
| 2024-07-16 | BigQuery migration assessment aggregated results dataset |  | Migration assessments for Amazon Redshift, Teradata, and Snowflake now generate a separate highly aggregated results dataset that excludes query logs and sensitive data so it can be shared outside the project. |
| 2024-07-11 | BigQuery reverse ETL via EXPORT DATA to Spanner |  | You can use BigQuery EXPORT DATA statements to run reverse ETL workflows that write BigQuery data to Cloud Spanner. |
| 2024-07-01 | Analytics Hub featured catalog listings |  | Analytics Hub now highlights listings in the catalog's Featured section. |
| 2024-07-01 | Analytics Hub Pub/Sub topic sharing and subscription management |  | Data publishers can now share Pub/Sub topics and manage subscriptions directly within Analytics Hub. |
| 2024-07-01 | Analytics Hub public discoverability of exchanges and listings |  | Analytics Hub now supports making exchanges and listings publicly discoverable in the catalog. |
| 2024-07-01 | Analytics Hub unauthenticated public listing URLs |  | Analytics Hub now can generate unauthenticated URLs for public listings. |
| 2024-07-01 | BigQuery Cloud Console details pane tab drag-and-drop |  | The BigQuery UI now supports dragging a details pane tab to open a new column and repositioning tabs within the current or adjacent column. |
| 2024-06-27 | BigQuery IAM tag-based access control |  | BigQuery now supports using tags to conditionally grant or deny access via IAM policies on tables and datasets, including at dataset creation time. |
| 2024-06-25 | BigQuery JupyterLab plugin |  | The BigQuery JupyterLab plugin now enables data exploration, use of BigQuery DataFrames in notebooks, and notebook deployment to Cloud Composer. |
| 2024-06-21 | BigQuery migration assessment for Amazon Redshift |  | The BigQuery migration assessment specifically for Amazon Redshift is now generally available; BigQuery now provides a migration assessment preview for evaluating the complexity of migrating Amazon Redshift warehouses to BigQuery. |
| 2024-06-18 | BigQuery NULLIF collation support |  | The NULLIF conditional expression is now collation-aware and supports collation-based comparisons involving STRUCT values. |
| 2024-06-17 | BigQuery ML supervised tuning for Gemini remote models |  | BigQuery ML now supports supervised tuning of remote models based on gemini-1.0-pro-002, including via BigQuery DataFrames APIs. |
| 2024-06-13 | BigQuery notebook scheduling |  | BigQuery now allows users to schedule notebook execution. |
| 2024-06-05 | Analytics Hub data egress controls |  | Analytics Hub now supports listing-level egress controls so publishers can restrict subscribers from copying or exporting shared data. |
| 2024-06-05 | BigQuery slot recommender for capacity planning |  | The BigQuery slot recommender analyzes historical usage to recommend optimal capacity purchases for editions and on-demand workloads. |
| 2024-05-31 | BigQuery IAM conditions |  | IAM conditions are available in BigQuery to control access to BigQuery resources. |
| 2024-05-28 | BigQuery ML.GENERATE_TEXT multimodal object-table tasks with Gemini 1.5 Flash |  | BigQuery ML.GENERATE_TEXT with Vertex AI Gemini 1.5 Flash can run generative tasks on object-table image, video, audio, PDF, or text content. |
| 2024-05-28 | BigQuery ML.GENERATE_TEXT with Vertex AI Gemini 1.5 Flash |  | BigQuery ML.GENERATE_TEXT supports using remote Gemini 1.5 Flash models to perform text-based generative AI tasks on BigQuery table text. |
| 2024-05-28 | BigQuery remote models for Vertex AI Gemini 1.5 Flash |  | BigQuery ML now allows creating remote models based on the Vertex AI Gemini 1.5 Flash foundation model. |
| 2024-05-23 | BigQuery ML.GENERATE_EMBEDDING with Vertex AI multimodalembedding |  | BigQuery ML.GENERATE_EMBEDDING now supports video embeddings through a remote model based on Vertex AI multimodalembedding. |
| 2024-05-23 | BigQuery ML.GENERATE_TEXT grounding and safety controls |  | BigQuery ML.GENERATE_TEXT with Vertex AI Gemini models now supports grounding via ground_with_google_search and configurable safety attributes. |
| 2024-05-22 | BigQuery federated query for AlloyDB |  | BigQuery now supports preview federated queries against AlloyDB data. |
| 2024-05-21 | BigQuery ML.GENERATE_TEXT with Vertex AI Gemini 1.5 Pro |  | BigQuery ML.GENERATE_TEXT can use remote Gemini 1.5 Pro models for generative AI tasks, including text, image, video, audio, PDF, and object-table content. |
| 2024-05-21 | BigQuery remote models for Vertex AI Gemini 1.5 Pro |  | BigQuery ML now allows creating remote models based on the Vertex AI Gemini 1.5 Pro foundation model. |
| 2024-05-20 | BigQuery DLP AES-SIV encryption functions |  | BigQuery now supports DLP functions for AES-SIV-based encryption and decryption integration with Sensitive Data Protection. |
| 2024-05-20 | BigQuery search index for INT64 and TIMESTAMP lookup optimization |  | BigQuery search indexes can be used to optimize lookups on INT64 and TIMESTAMP data types. |
| 2024-05-14 | BigQuery Gemini-enhanced translation rules for interactive SQL translator |  | BigQuery now supports Gemini-enhanced translation rules to customize interactive SQL translator output for migration needs. |
| 2024-05-07 | BigQuery JavaScript UDAFs |  | BigQuery added support for JavaScript user-defined aggregate functions, which are created with CREATE AGGREGATE FUNCTION and currently in preview. |
| 2024-05-07 | BigQuery vector index pre-filtering |  | BigQuery now supports storing columns in vector indexes and applying pre-filters in vector searches to improve query efficiency. |
| 2024-05-06 | BigQuery AWS Glue federated datasets |  | BigQuery added the ability to create AWS Glue federated datasets via the Google Cloud Console, and the capability is generally available. |
| 2024-05-02 | Analytics Hub Provider Usage Metrics |  | Analytics Hub now provides provider usage metrics in GA, including jobs against shared data, subscriber consumption details, and processed rows and bytes. |
| 2024-05-02 | Analytics Hub Subscription Management |  | Analytics Hub Subscription Management is now generally available, allowing data publishers to manage subscriptions, view subscriber information, and revoke access. |
| 2024-04-30 | AWS Glue federated datasets |  | BigQuery added generally available AWS Glue federated datasets, defining a dataset-level connection between BigQuery and databases in AWS Glue. |
| 2024-04-30 | BigQuery interactive SQL translator configuration and debugging |  | BigQuery now lets users define translation configurations in the interactive SQL translator and use it to debug batch SQL translator jobs in GA. |
| 2024-04-30 | BigQuery materialized views over Iceberg tables |  | BigQuery materialized views can now reference Iceberg tables directly, removing the need to migrate that data into BigQuery-managed storage. |
| 2024-04-30 | BigQuery ML TRANSFORM function |  | The BigQuery ML TRANSFORM function is now generally available for preprocessing feature data using transformations defined in the model TRANSFORM clause. |
| 2024-04-30 | BigQuery ML transform-only models |  | BigQuery ML transform-only models are now generally available, enabling reusable preprocessing rules without coupling to model training; Transform-only models perform and reuse data preprocessing functions separately from model training. |
| 2024-04-29 | Workforce Identity Federation for Power BI access |  | BigQuery now supports Microsoft Entra group-based access to BigQuery data in Power BI via Workforce Identity Federation. |
| 2024-04-26 | BigQuery SQL code generation |  | BigQuery now offers SQL code generation across all projects in preview, powered by Gemini-enabled BigQuery features. |
| 2024-04-25 | BigQuery Data Transfer Service for Google Merchant Center Product Targeting report |  | The BigQuery Data Transfer Service added support for transferring the Google Merchant Center Product Targeting report. |
| 2024-04-24 | User-defined aggregate functions with SQL expressions |  | BigQuery added user-defined aggregate functions (UDAFs) that support SQL expressions via CREATE AGGREGATE FUNCTION. |
| 2024-04-18 | quantified LIKE operator |  | BigQuery introduced the quantified LIKE operator to match values against one or more patterns using ANY, SOME, and ALL. |
| 2024-04-17 | Expanded permissions support for deny policies |  | BigQuery added support for additional permissions in deny policies. |
| 2024-04-16 | Subqueries in row-level access policies |  | BigQuery now supports using subqueries within row-level access policies. |
| 2024-04-09 | and clustering |  | Gemini in BigQuery now provides recommendations for materialized views, partitioning, and clustering to reduce cost and improve performance. |
| 2024-04-09 | BigQuery ML IID embeddings with PCA or autoencoder models |  | BigQuery ML preview now supports ML.GENERATE_EMBEDDING with PCA or autoencoder models for embeddings of structured IID data. |
| 2024-04-09 | BigQuery ML matrix factorization embeddings with ML.GENERATE_EMBEDDING |  | BigQuery ML preview added ML.GENERATE_EMBEDDING support using matrix factorization models for user-item embeddings. |
| 2024-04-09 | BigQuery Studio Data canvas |  | BigQuery Studio added support for creating a data canvas with a graphical, natural-language interface for analysis workflows. |
| 2024-04-09 | Gemini for serverless Spark autotuning and troubleshooting |  | Gemini in BigQuery now supports autotuning and troubleshooting for serverless Spark workloads. |
| 2024-04-09 | Gemini in BigQuery Data canvas |  | Gemini in BigQuery added Data canvas, a natural-language interface for discovering, transforming, querying, and visualizing data. |
| 2024-04-09 | Gemini in BigQuery Data insights |  | Gemini in BigQuery introduced Data insights to provide automated, intuitive data exploration and understanding. |
| 2024-04-09 | Gemini recommendations for materialized views |  | Gemini in BigQuery now provides recommendations for materialized views, partitioning, and clustering to reduce cost and improve performance. |
| 2024-04-09 | Gemini-assisted SQL and Python code assistance in BigQuery |  | Gemini in BigQuery now offers SQL and Python code generation, completion, and explanation assistance. |
| 2024-04-09 | partitioning |  | Gemini in BigQuery now provides recommendations for materialized views, partitioning, and clustering to reduce cost and improve performance. |
| 2024-04-08 | and management of code assets |  | BigQuery Studio now supports saving, sharing, and managing versions of code assets such as notebooks and saved queries. |
| 2024-04-08 | BigQuery DataFrames |  | BigQuery DataFrames is now generally available as open-source Python libraries implementing pandas and scikit-learn APIs with server-side processing; BigQuery DataFrames, a preview Python API for data analysis and machine learning with bigframes.pandas and bigframes.ml, is now available. |
| 2024-04-08 | BigQuery materialized view recommender |  | BigQuery introduced a materialized view recommender that analyzes query history and suggests materialized view opportunities. |
| 2024-04-08 | BigQuery Studio versioning |  | BigQuery Studio now supports saving, sharing, and managing versions of code assets such as notebooks and saved queries. |
| 2024-04-08 | sharing |  | BigQuery Studio now supports saving, sharing, and managing versions of code assets such as notebooks and saved queries. |
| 2024-04-05 | BigLake access to Delta Lake tables |  | BigLake can now access Delta Lake tables in preview. |
| 2024-04-05 | BigQuery differential privacy |  | BigQuery differential privacy is now generally available for privacy-preserving data analysis. |
| 2024-04-04 | BigQuery Data Clean Rooms |  | BigQuery Data Clean Rooms are now generally available, providing a privacy-preserving environment for multi-party data collaboration; BigQuery Data Clean Rooms provide a secure environment where multiple parties can share, join, and analyze data assets without moving or revealing underlying data. |
| 2024-04-04 | BigQuery Data Clean Rooms aggregation thresholding |  | BigQuery Data Clean Rooms now support aggregation thresholding through analysis rules. |
| 2024-04-04 | BigQuery Data Clean Rooms analysis rules |  | BigQuery Data Clean Rooms now include analysis rules as a core capability. |
| 2024-04-04 | BigQuery Data Clean Rooms differential privacy with privacy budget |  | BigQuery Data Clean Rooms now support differential privacy with privacy budgeting in analysis rule enforcement. |
| 2024-04-04 | BigQuery Data Clean Rooms enhanced usage metrics |  | BigQuery Data Clean Rooms now provide enhanced usage metrics for clean room activity. |
| 2024-04-04 | BigQuery Data Clean Rooms join restriction enforcement |  | BigQuery Data Clean Rooms now allow join restrictions to be enforced via analysis rules. |
| 2024-04-04 | BigQuery Data Clean Rooms list overlap control |  | BigQuery Data Clean Rooms now enforce list overlap constraints through analysis rules. |
| 2024-04-04 | BigQuery materialized views allow_non_incremental_definition option |  | BigQuery materialized views now support the allow_non_incremental_definition option to build views from a broader set of SQL queries. |
| 2024-04-04 | BigQuery materialized views max_staleness option |  | BigQuery materialized views now support the max_staleness option to control staleness and processing cost for large, frequently changing datasets. |
| 2024-04-04 | BigQuery ML ML.DESCRIBE_DATA |  | BigQuery ML now includes ML.DESCRIBE_DATA to compute descriptive statistics for training or serving datasets. |
| 2024-04-04 | BigQuery ML ML.TFDV_DESCRIBE |  | BigQuery ML now includes ML.TFDV_DESCRIBE to produce fine-grained descriptive statistics for training or serving data. |
| 2024-04-04 | BigQuery ML ML.TFDV_VALIDATE |  | BigQuery ML now includes ML.TFDV_VALIDATE to compare training and serving statistics for detecting anomalous differences. |
| 2024-04-04 | BigQuery ML ML.VALIDATE_DATA_DRIFT |  | BigQuery ML now includes ML.VALIDATE_DATA_DRIFT to detect anomalous differences between two serving datasets. |
| 2024-04-04 | BigQuery ML ML.VALIDATE_DATA_SKEW |  | BigQuery ML now includes ML.VALIDATE_DATA_SKEW to compare serving data statistics against training data statistics for skew detection. |
| 2024-04-03 | BigQuery collation support for underscore wildcard in LIKE |  | BigQuery collation now supports the underscore wildcard in LIKE expressions. |
| 2024-04-03 | BigQuery materialized views CDC streaming update and delete support |  | BigQuery materialized views can now be configured to use tables enabled for CDC with streaming updates and deletes. |
| 2024-04-03 | BigQuery STRUCT collation comparisons |  | BigQuery collation now supports comparison of STRUCT values using =, !=, IN, and CASE. |
| 2024-04-02 | BigQuery ML ML.EVALUATE for Vertex AI models |  | BigQuery ML now supports evaluating Vertex AI LLMs with ML.EVALUATE, including text-bison, text-unicorn, gemini-pro, and tuned text-bison models. |
| 2024-04-02 | BigQuery ML supervised tuning for Vertex AI LLMs |  | BigQuery ML now supports supervised tuning of remote Vertex AI text-bison large language models. |
| 2024-04-01 | BigQuery Data Transfer Service support for Search Ads 360 Reporting API |  | The BigQuery Data Transfer Service Search Ads 360 connector now supports the Search Ads 360 Reporting API. |
| 2024-04-01 | BigQuery history-based query optimization |  | BigQuery now supports preview enablement and analysis of history-based optimizations for query execution. |
| 2024-04-01 | Search Ads 360 connector custom Floodlight and column mapping |  | The Search Ads 360 BigQuery connector now supports custom Floodlight variables and custom columns during transfer. |
| 2024-03-28 | BigQuery federated query to SAP Datasphere |  | BigQuery now supports preview federation querying of data in SAP Datasphere. |
| 2024-03-28 | BigQuery search index optimization for string comparisons |  | BigQuery now applies search-index-based optimization to string literal comparisons with =, IN, LIKE, and STARTS_WITH. |
| 2024-03-26 | BigQuery Help me code tool |  | The Help me code feature lets users generate BigQuery SQL from natural-language prompts. |
| 2024-03-26 | BigQuery remote model for Vertex AI Gemini Pro Vision |  | BigQuery now supports creating remote models based on the Vertex AI gemini-pro-vision large vision model. |
| 2024-03-26 | ML.GENERATE_TEXT for visual content in BigQuery object tables |  | BigQuery now supports using the ML.GENERATE_TEXT function with remote vision models to perform image or video captioning and visual Q&A on object table content. |
| 2024-03-21 | Incremental materialized view support for LEFT OUTER JOIN and UNION ALL |  | Incremental materialized views now support the LEFT OUTER JOIN and UNION ALL query operators. |
| 2024-03-21 | Salesforce Data Cloud integration with BigQuery |  | BigQuery can now ingest and add data from Salesforce Data Cloud. |
| 2024-03-20 | BigQuery notebook size limit increase |  | BigQuery notebooks now support a larger maximum notebook size, increased from 10 MB to 20 MB. |
| 2024-03-20 | Project notebook listing in BigQuery |  | BigQuery now provides a view of all notebooks within a project. |
| 2024-03-20 | Project saved queries listing in BigQuery |  | BigQuery now provides a view of all saved queries within a project. |
| 2024-03-19 | Apache Spark stored procedures in BigQuery |  | BigQuery now supports creating and running Spark stored procedures in Python, Java, and Scala, including a PySpark editor for Python stored procedures. |
| 2024-03-19 | Scheduled query minimum interval |  | BigQuery reduced the minimum time between scheduled query runs from 15 minutes to 5 minutes. |
| 2024-03-18 | BAG_OF_WORDS function |  | BigQuery now generally supports the BAG_OF_WORDS advanced processing function. |
| 2024-03-18 | BigQuery dataset undelete |  | BigQuery now allows users to undelete a dataset within the time travel window and restore it to its prior state. |
| 2024-03-18 | BigQuery ML hierarchical forecasts |  | BigQuery ML time series models now support hierarchical forecasting with roll-up and aggregation across all time series. |
| 2024-03-18 | COSINE_DISTANCE function |  | BigQuery now generally supports the COSINE_DISTANCE advanced processing function. |
| 2024-03-18 | EDIT_DISTANCE function |  | BigQuery now generally supports the EDIT_DISTANCE advanced processing function. |
| 2024-03-18 | EUCLIDEAN_DISTANCE function |  | BigQuery now generally supports the EUCLIDEAN_DISTANCE advanced processing function. |
| 2024-03-18 | ML.BAG_OF_WORDS function |  | BigQuery now generally supports the ML.BAG_OF_WORDS advanced processing function. |
| 2024-03-18 | ML.TF_IDF function |  | BigQuery now generally supports the ML.TF_IDF advanced processing function. |
| 2024-03-18 | Search analyzers in CREATE SEARCH INDEX |  | BigQuery now supports search index analyzer configuration in CREATE SEARCH INDEX, including LOG_ANALYZER and PATTERN_ANALYZER for use with SEARCH. |
| 2024-03-18 | TEXT_ANALYZE function |  | The TEXT_ANALYZE function is now generally available in BigQuery. |
| 2024-03-18 | TF_IDF function |  | BigQuery now generally supports the TF_IDF advanced processing function. |
| 2024-03-06 | BigQuery Duet AI for Python code generation |  | BigQuery now enables Duet AI to assist with Python code generation and completion. |
| 2024-03-06 | INFORMATION_SCHEMA.WRITE_API_TIMELINE views |  | BigQuery Storage Write API now has generally available INFORMATION_SCHEMA.WRITE_API_TIMELINE* views with per-minute ingestion statistics. |
| 2024-03-04 | BigQuery REFRESH_EXTERNAL_METADATA_CACHE system procedure |  | BigQuery now supports selectively refreshing BigLake metadata caches using the BQ.REFRESH_EXTERNAL_METADATA_CACHE system procedure. |
| 2024-02-29 | BigQuery cross-cloud joins with BigQuery Omni regions |  | BigQuery now supports cross-cloud joins for queries spanning Google Cloud and BigQuery Omni regions. |
| 2024-02-29 | BigQuery materialized view replica metadata access |  | BigQuery now allows users to retrieve information about materialized view replicas via SQL, the bq CLI, or the BigQuery API. |
| 2024-02-29 | BigQuery materialized view replicas for Amazon S3 BigLake metadata cache tables |  | BigQuery now supports creating materialized view replicas for materialized views over Amazon S3 metadata cache-enabled BigLake tables. |
| 2024-02-29 | BigQuery materialized views over Amazon S3 metadata cache-enabled BigLake tables |  | BigQuery now generally supports materialized views over Amazon S3 metadata cache-enabled BigLake tables. |
| 2024-02-29 | BigQuery SQL translation API unified workflow |  | BigQuery now combines interactive and batch SQL translation jobs into a single workflow in the SQL translation API. |
| 2024-02-28 | BigQuery external file filtering in CTAS and INSERT INTO SELECT statements |  | BigQuery now generally supports CREATE TABLE AS SELECT, CREATE TABLE IF NOT EXISTS AS SELECT, CREATE OR REPLACE TABLE AS SELECT, and INSERT INTO SELECT for filtering data from Amazon S3 and Azure Blob Storage before loading to BigQuery. |
| 2024-02-28 | BigQuery materialized views referencing logical views |  | BigQuery now allows materialized views to reference logical views. |
| 2024-02-28 | BigQuery ML ARIMA_PLUS_XREG multivariate anomaly detection |  | BigQuery ML now supports anomaly detection using multivariate time-series ARIMA_PLUS_XREG models. |
| 2024-02-27 | BigQuery DML partition-delete optimization |  | BigQuery now allows DELETE statements that target all rows in a partition to remove the partition efficiently without scanning bytes or consuming slots. |
| 2024-02-26 | BigQuery GROUP BY CUBE |  | BigQuery now generally supports the GROUP BY CUBE clause for generating all grouping set permutations. |
| 2024-02-26 | BigQuery GROUP BY GROUPING SETS |  | BigQuery now generally supports the GROUP BY GROUPING SETS clause for producing multiple grouping set aggregations. |
| 2024-02-26 | BigQuery GROUPING function |  | BigQuery now generally supports the GROUPING function for identifying aggregated groupable values in GROUP BY queries. |
| 2024-02-22 | and BERT models |  | Adds support for generating text embeddings in BigQuery using NNLM, SWIVEL, and BERT TensorFlow models. |
| 2024-02-22 | BigQuery ML remote models for Vertex AI textembedding-gecko |  | Allows creating a BigQuery ML remote model that references Vertex AI textembedding-gecko text embedding models. |
| 2024-02-22 | BigQuery ML.GENERATE_EMBEDDING function with remote models |  | Enables using ML.GENERATE_EMBEDDING with a remote model to generate text embeddings in BigQuery. |
| 2024-02-22 | BigQuery text embedding generation with NNLM |  | Adds support for generating text embeddings in BigQuery using NNLM, SWIVEL, and BERT TensorFlow models. |
| 2024-02-22 | SWIVEL |  | Adds support for generating text embeddings in BigQuery using NNLM, SWIVEL, and BERT TensorFlow models. |
| 2024-02-15 | BigQuery DataFrames GeminiTextGenerator estimator API |  | Adds the GeminiTextGenerator class in bigframes.ml.llm for creating estimator-style Gemini text generator models. |
| 2024-02-15 | BigQuery query editor result charting |  | Displays a visualization of query results in the BigQuery query editor’s Chart tab after query execution. |
| 2024-02-15 | BigQuery remote model using Vertex AI Gemini Pro |  | Allows creating a BigQuery remote model backed by the Vertex AI gemini-pro large language model. |
| 2024-02-15 | ML.GENERATE_TEXT with remote models in BigQuery |  | Supports using ML.GENERATE_TEXT with a remote model to run generative natural language tasks on BigQuery table text. |
| 2024-02-08 | BigQuery custom data masking |  | Introduces custom data masking in BigQuery with user-defined masking routines, including options such as salt-based hashing. |
| 2024-02-08 | BigQuery entity resolution |  | Provides identity resolution in BigQuery to match records across datasets without a common identifier using identity providers. |
| 2024-02-07 | BigQuery federated query plan pushdown inspection |  | Adds query plan views for inspecting SQL pushdown details in federated queries. |
| 2024-01-31 | INFORMATION_SCHEMA ORGANIZATION_OPTIONS_CHANGES view |  | Adds an information schema view that tracks organization-level and project-level configuration option changes for an organization. |
| 2024-01-31 | INFORMATION_SCHEMA PROJECT_OPTIONS_CHANGES view |  | Adds an information schema view that tracks configuration option changes for a project. |
| 2024-01-29 | BigQuery Console query result sorting |  | Adds the ability to sort query results by column in the BigQuery Cloud Console result grid. |
| 2024-01-29 | BigQuery table tags for IAM conditional access |  | Enables applying table tags in BigQuery to conditionally grant or deny access through IAM policies. |
| 2024-01-24 | BigQuery Delta Lake support for Amazon S3 and Azure tables |  | BigQuery can natively query the Delta Lake format from Amazon S3 and Azure tables. |
| 2024-01-24 | ML.EXPLAIN_FORECAST residual output for ARIMA_PLUS models |  | Adds a residual output column to ML.EXPLAIN_FORECAST for ARIMA_PLUS and ARIMA_PLUS_XREG models showing differences between actual and fitted historical values. |
| 2024-01-24 | ST_LINEINTERPOLATEPOINT geography function |  | Introduces ST_LINEINTERPOLATEPOINT for returning a point at a specific fraction along a linestring in BigQuery GIS. |
| 2024-01-16 | BigQuery cross-cloud joins across Google Cloud and BigQuery Omni regions |  | BigQuery now supports cross-cloud joins so queries can span Google Cloud and BigQuery Omni regions. |
| 2024-01-02 | Analytics Hub CMEK support for listings |  | Analytics Hub listings can include data encrypted with customer-managed encryption keys (CMEK). |
| 2023-12-18 | BigQuery Operational Health administrative resource charts |  | BigQuery Operational Health now provides administrative resource charts for slot usage, shuffle usage, job concurrency, errors, and related metrics. |
| 2023-12-14 | Apache Hive connector for BigQuery |  | The Apache Hive connector is available for BigQuery data analytics pipeline migration workflows. |
| 2023-12-14 | BigQuery Data Transfer Service federated workforce identity support |  | BigQuery Data Transfer Service can use federated workforce identities when creating transfers from most data sources. |
| 2023-12-12 | BigQuery materialized view replicas for Amazon S3 metadata cache-enabled BigLake tables |  | BigQuery now allows creating replicas of materialized views that are built over Amazon S3 metadata cache-enabled BigLake tables. |
| 2023-12-12 | BigQuery materialized views on Amazon S3 metadata cache-enabled BigLake tables |  | BigQuery now supports materialized views over Amazon S3 metadata cache-enabled BigLake tables. |
| 2023-12-07 | BigQuery ML ML.TRANSFORM function |  | The ML.TRANSFORM function enables preprocessing by applying transformations defined in a model’s TRANSFORM clause. |
| 2023-11-30 | BigQuery slot estimator project-level recommendations |  | The slot estimator now provides project-level cost-optimal commitment and autoscale recommendations for on-demand workloads. |
| 2023-11-30 | Configuration YAML support for BigQuery SQL translators |  | Configuration YAML files can now transform SQL during translation in batch, interactive, and Python client workflows. |
| 2023-11-16 | BigQuery ML expanded text-bison regional availability |  | Region availability for text-bison Vertex AI LLMs used by BigQuery ML remote models has been expanded. |
| 2023-11-16 | BigQuery ML remote model SQL syntax for Vertex AI LLMs |  | BigQuery ML remote-model SQL now supports access to text generation and text-embedding Vertex AI LLMs and newer LLM versions. |
| 2023-11-14 | BigQuery partition skew performance insights |  | BigQuery now exposes query performance insights focused on partition skew. |
| 2023-11-13 | BigQuery ML audio transcription with ML.TRANSCRIBE |  | BigQuery ML can transcribe audio files from object tables using a Speech-to-Text remote model via the ML.TRANSCRIBE function. |
| 2023-11-13 | BigQuery ML document processing with ML.PROCESS_DOCUMENT |  | BigQuery ML can process documents from object tables using a Document AI remote model via the ML.PROCESS_DOCUMENT function. |
| 2023-11-13 | BigQuery ML point-in-time feature lookup functions |  | BigQuery ML adds point-in-time feature retrieval functions that apply a common cutoff timestamp for training and inference to prevent data leakage. |
| 2023-11-07 | BigQuery batch SQL translator report enhancements |  | The batch SQL translator report view now includes a log summary and a code tab with side-by-side input/output comparison. |
| 2023-11-06 | BigQuery Data Transfer Service Display and Video 360 connector |  | BigQuery Data Transfer Service adds a preview connector to import campaign reporting and configuration data from Display & Video 360. |
| 2023-11-06 | BigQuery ML custom holiday modeling for time series |  | BigQuery ML time series models can define custom holidays, expose them through ML.HOLIDAY_INFO, and explain holiday effects via ML.EXPLAIN_FORECAST. |
| 2023-11-06 | BigQuery ML time series forecast value bounds |  | BigQuery ML now supports forecast value constraints for time series models via FORECAST_LIMIT_LOWER_BOUND and FORECAST_LIMIT_UPPER_BOUND options. |
| 2023-11-02 | BigQuery advanced text processing functions |  | BigQuery adds preview support for advanced text processing functions such as ML.BAG_OF_WORDS, ML.TF_IDF, BAG_OF_WORDS, TF_IDF, COSINE_DISTANCE, EUCLIDEAN_DISTANCE, and EDIT_DISTANCE. |
| 2023-11-02 | BigQuery text analyzer configuration for CREATE SEARCH INDEX |  | BigQuery adds support in CREATE SEARCH INDEX for text analysis configuration using LOG_ANALYZER and PATTERN_ANALYZER, including use with SEARCH-related functions. |
| 2023-11-01 | BigQuery INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE view |  | BigQuery introduces the TABLE_STORAGE_USAGE_TIMELINE INFORMATION_SCHEMA view to report total billable bytes per table per day at the project level. |
| 2023-11-01 | BigQuery INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE_BY_ORGANIZATION view |  | BigQuery adds the TABLE_STORAGE_USAGE_TIMELINE_BY_ORGANIZATION INFORMATION_SCHEMA view to report total billable bytes per table per day at the organization level. |
| 2023-11-01 | BigQuery shared cached results for Enterprise editions |  | BigQuery enables same-project users to reuse cached results from identical queries when using Enterprise or Enterprise Plus editions. |
| 2023-10-31 | BigQuery CDC via Storage Write API |  | BigQuery supports change data capture by processing and applying streamed changes in real time to existing data through the Storage Write API. |
| 2023-10-31 | DML updates for rows written via Storage Write API |  | BigQuery adds preview support for modifying recently ingested rows through DML operations after they are written using Storage Write API. |
| 2023-10-30 | BigQuery administrative resource utilization chart enhancements |  | BigQuery administrative resource charts now support project-level utilization views and filtering by billing model. |
| 2023-10-30 | BigQuery Data Transfer Service Azure Blob Storage connector |  | BigQuery Data Transfer Service now supports transferring data from Azure Blob Storage. |
| 2023-10-23 | BigQuery custom data masking expanded functions |  | BigQuery custom data masking now supports an expanded set of functions, including SHA hash functions with salt. |
| 2023-10-19 | BigQuery Apache Spark stored procedures without enrollment |  | Stored procedures for Apache Spark are now available in BigQuery without requiring enrollment. |
| 2023-10-18 | BigQuery migration assessment for Apache Hive |  | BigQuery migration assessment is available in preview to evaluate migration complexity from Apache Hive to BigQuery. |
| 2023-10-16 | BigQuery DLP AES-SIV encryption/decryption functions |  | BigQuery can now use DLP functions with AES-SIV to encrypt and decrypt data between BigQuery and DLP. |
| 2023-10-12 | ST_HAUSDORFFDISTANCE geography function |  | BigQuery now supports the GA geography function ST_HAUSDORFFDISTANCE for calculating discrete Hausdorff distance between geometries. |
| 2023-10-12 | ST_LINESUBSTRING geography function |  | BigQuery now supports the GA geography function ST_LINESUBSTRING for extracting a linestring segment by fraction. |
| 2023-10-09 | BigQuery view column descriptions |  | BigQuery view columns can now have descriptions added via CREATE VIEW or ALTER COLUMN DDL statements; BigQuery added support for defining column descriptions on views via CREATE VIEW and ALTER COLUMN statements. |
| 2023-10-09 | GROUP BY CUBE clause |  | BigQuery query syntax now supports the GROUP BY CUBE clause to generate aggregations for all grouping set permutations. |
| 2023-10-09 | GROUP BY GROUPING SETS clause |  | BigQuery query syntax now supports the GROUP BY GROUPING SETS clause to produce aggregated results for multiple grouping sets. |
| 2023-10-09 | GROUP BY ROLLUP clause |  | BigQuery query syntax now includes groupable-item sets support in the GROUP BY ROLLUP clause. |
| 2023-10-09 | GROUPING function |  | BigQuery now supports the GROUPING function to indicate whether a grouped value was aggregated. |
| 2023-10-04 | BigQuery cross-region table copy |  | BigQuery now supports copying tables across regions. |
| 2023-10-03 | Google Cloud Arbitrum One Chain dataset in Analytics Hub |  | The Google Cloud Arbitrum One Chain blockchain analytics dataset is available in preview via the Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Avalanche Contract Chain dataset in Analytics Hub |  | The Google Cloud Avalanche Contract Chain blockchain analytics dataset is available in preview via the Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Cronos Mainnet Chain dataset in Analytics Hub |  | The Google Cloud Cronos Mainnet Chain blockchain analytics dataset is available in preview via the Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Ethereum Mainnet dataset in Analytics Hub |  | The Google Cloud Ethereum Mainnet blockchain analytics dataset is available in preview via the Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Fantom Opera dataset in Analytics Hub |  | The Google Cloud Fantom Opera blockchain analytics dataset is available in preview via the Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Optimism Mainnet dataset in Analytics Hub |  | The Google Cloud Optimism Mainnet blockchain analytics dataset is available in preview via the Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Tron Mainnet dataset in Analytics Hub |  | The Google Cloud Tron Mainnet blockchain analytics dataset is available in preview via the Public Datasets Program and Analytics Hub. |
| 2023-10-02 | BigQuery native integration with Looker Studio |  | BigQuery now provides native integration with Looker Studio to improve query monitoring and performance for Looker Studio reports. |
| 2023-09-29 | BigQuery administrative query inspector |  | BigQuery administrators can use the administrative query inspector to monitor slot utilization and job performance over time. |
| 2023-09-28 | BigQuery ML point-in-time lookup functions |  | BigQuery ML now supports point-in-time feature retrieval for training and inference through functions such as ML.FEATURES_AT_TIME and ML.ENTITY_FEATURES_AT_TIME. |
| 2023-09-28 | IAM conditions for BigQuery |  | BigQuery now allows IAM conditions to be used to control access to BigQuery resources. |
| 2023-09-25 | Authorized stored procedures |  | BigQuery authorized stored procedures are now generally available and allow sharing procedures without direct underlying table access. |
| 2023-09-25 | Google AdWords support in BigQuery Data Transfer Service | 2023-09-25 | Support for Google AdWords as a source in BigQuery Data Transfer Service has been deprecated; deprecated on 2023-09-25. |
| 2023-09-25 | Materialized views over BigLake metadata cache-enabled tables |  | BigQuery materialized views over BigLake metadata cache-enabled tables can now reference structured data in Cloud Storage with GA behavior. |
| 2023-09-18 | BigQuery Data Transfer Service Search Ads 360 new reporting API support |  | BigQuery Data Transfer Service now supports Search Ads 360 transfers using the new Search Ads 360 reporting API in preview. |
| 2023-09-18 | Legacy Search Ads 360 reporting API support in BigQuery Data Transfer Service | 2024-05-31 | Support for the old Search Ads 360 reporting API in BigQuery Data Transfer Service is scheduled to be removed; deprecated on 2024-05-31. |
| 2023-09-13 | BigQuery federated datasets for AWS Glue |  | BigQuery now supports creating federated datasets that connect to existing databases in AWS Glue. |
| 2023-09-12 | BigQuery array subscript operator index access |  | BigQuery SQL now supports direct array value access by index with the array subscript operator. |
| 2023-09-12 | BigQuery STRUCT subscript operator |  | BigQuery SQL added a STRUCT subscript operator to access STRUCT fields by index, offset, or ordinal. |
| 2023-08-30 | BigQuery EXPORT DATA to Bigtable |  | BigQuery now allows using EXPORT DATA statements to directly export data to Bigtable. |
| 2023-08-29 | Asset management and version history for notebooks and saved queries |  | BigQuery Studio adds asset management and version history for notebooks and saved queries, with functionality powered by Dataform. |
| 2023-08-29 | BigQuery DataFrames support in BigQuery Studio notebooks |  | BigQuery Studio notebooks include built-in support for BigQuery DataFrames. |
| 2023-08-29 | BigQuery ML remote models with Vertex AI text-bison |  | BigQuery ML supports creating remote models backed by the Vertex AI large language model text-bison. |
| 2023-08-29 | BigQuery Studio |  | BigQuery Studio is now in preview and provides a unified environment to discover, explore, analyze, and run inference on BigQuery data. |
| 2023-08-29 | Duet AI in BigQuery |  | Duet AI in BigQuery provides an AI assistant for completing, generating, and explaining SQL queries. |
| 2023-08-29 | ML.GENERATE_TEXT function |  | BigQuery ML now supports the ML.GENERATE_TEXT function with an LLM-based remote model to perform generative natural-language tasks on table data. |
| 2023-08-29 | Python notebooks in BigQuery Studio |  | BigQuery Studio includes Python notebooks powered by Colab Enterprise with one-click Python development runtimes. |
| 2023-08-24 | ARRAY input feature type for BigQuery ML models |  | BigQuery ML now allows ARRAY to be used as an input feature type for other models. |
| 2023-08-24 | BigQuery ML inference on Vertex AI pretrained models |  | BigQuery ML inference functions now support Vertex AI pretrained models for NLP, translation, and computer vision via Cloud Vision, Cloud Natural Language, and Cloud Translation APIs. |
| 2023-08-24 | BigQuery ML remote model format support for inference |  | BigQuery ML inference now supports importing ONNX, XGBoost, and TensorFlow Lite models for in-warehouse inference. |
| 2023-08-24 | BigQuery ML remote text embedding models |  | BigQuery ML now supports creating remote models that reference Vertex AI PaLM embedding APIs such as textembedding-gecko. |
| 2023-08-24 | BigQuery ML text embedding generation with TensorFlow models |  | BigQuery ML can generate text embeddings using NNLM, SWIVEL, and BERT TensorFlow models. |
| 2023-08-24 | ML.GENERATE_TEXT_EMBEDDING function |  | BigQuery ML adds the ML.GENERATE_TEXT_EMBEDDING function to generate embeddings from text using remote embedding models. |
| 2023-08-24 | Remote model hosting on Vertex AI Prediction |  | BigQuery ML now supports hosting models remotely on Vertex AI Prediction for inference without manual data pipelines. |
| 2023-08-22 | BigQuery custom masking routines with REGEX_REPLACE |  | BigQuery allows custom masking routines using the REGEX_REPLACE scalar function to obfuscate sensitive data. |
| 2023-08-21 | Analytics Hub subscriptions |  | Analytics Hub preview introduces subscription resources for managing links between shared resources and linked datasets. |
| 2023-08-21 | BigQuery data quality monitoring |  | BigQuery now provides data quality monitoring features to help ensure data accuracy and reliability. |
| 2023-08-21 | BigQuery table data profiling |  | BigQuery now supports scanning tables to create data profiles and improve understanding of dataset quality. |
| 2023-08-10 | Exporting to Protobuf columns using BigQuery UDFs |  | BigQuery now supports exporting data as Protocol Buffer (Protobuf) columns using user-defined functions. |
| 2023-08-10 | High cardinality join performance insights |  | BigQuery now provides query performance insights for joins with high cardinality. |
| 2023-08-08 | HAVING MAX/MIN clauses for ANY_VALUE |  | BigQuery adds HAVING MAX and HAVING MIN clause support for the ANY_VALUE function. |
| 2023-08-08 | MAX_BY function |  | BigQuery introduces the MAX_BY function as a shorthand for ANY_VALUE(x HAVING MAX y). |
| 2023-08-08 | MIN_BY function |  | BigQuery introduces the MIN_BY function as a shorthand for ANY_VALUE(x HAVING MIN y). |
| 2023-08-07 | Analytics Hub routines in linked datasets |  | Analytics Hub added preview support for using BigQuery routines in linked datasets. |
| 2023-08-07 | BigQuery IAM deny policies for dataset tag bindings |  | BigQuery added deny policies for principals on dataset tag binding creation and listing. |
| 2023-08-07 | BigQuery IAM deny policies for reservations and capacity commitments |  | BigQuery added deny policies for principals on IAM permissions related to managing reservations and capacity commitments. |
| 2023-08-07 | BigQuery IAM deny policies for resource deletion |  | BigQuery added deny policies for principals on BigQuery resource deletion operations for datasets, tables, models, routines, jobs, and connections. |
| 2023-08-07 | BigQuery IAM deny policies for row access policies |  | BigQuery added deny policies for principals on row access policy creation, deletion, update, and IAM policy updates. |
| 2023-08-07 | BigQuery quantitive LIKE operator |  | BigQuery introduced the quantitive LIKE operator in preview with LIKE ANY, LIKE SOME, and LIKE ALL matching modes. |
| 2023-08-07 | BigQuery SQL JSON functions |  | BigQuery made a set of JSON SQL functions generally available, including JSON_ARRAY*, JSON_OBJECT, JSON_REMOVE, JSON_SET, JSON_STRIP_NULLS, and LAX_* conversion functions. |
| 2023-08-04 | BigQuery external table manifest files |  | BigQuery now supports using manifest files for external tables, with this capability now generally available. |
| 2023-08-03 | Analytics Hub shared dataset usage metrics |  | Analytics Hub now provides generally available usage metrics for shared datasets, including job activity, subscriber consumption by project or organization, and processed rows and bytes. |
| 2023-08-03 | BigQuery Cloud Console recently accessed resources list |  | The BigQuery Cloud Console Welcome page now supports a preview view of the 10 most recently accessed resources. |
| 2023-08-03 | BigQuery query result visualization in Chart tab |  | BigQuery query editor preview updates allow visualizing query results on the Chart tab after running a query. |
| 2023-08-03 | BigQuery SQL GRANT/REVOKE for materialized views |  | BigQuery now supports using SQL GRANT and REVOKE statements to manage access to materialized views. |
| 2023-07-31 | BigQuery Storage Write API multiplexing |  | BigQuery Storage Write API multiplexing is now generally available and allows writing to multiple destination tables through the default stream. |
| 2023-07-28 | BigQuery query queues |  | BigQuery introduced generally available query queues that automatically manage query concurrency and support optional timeout and concurrency target configuration; BigQuery query queues manage concurrency automatically, with optional custom concurrency targets for flat-rate reservations and queuing beyond that limit. |
| 2023-07-20 | BigQuery ML ARIMA_PLUS_XREG model |  | BigQuery ML made the ARIMA_PLUS_XREG model generally available for multivariate time-series forecasting using additional feature columns; BigQuery ML now supports multivariate time-series forecasting with the ARIMA_PLUS_XREG model. |
| 2023-07-20 | BigQuery ML Explainable AI enhancements |  | BigQuery ML introduced new explainability capabilities, including ML.EXPLAIN_FORECAST, ML.GLOBAL_EXPLAIN for AutoML Tables, approximation options for feature contributions, and Vertex Explainable AI support for registered models. |
| 2023-07-19 | BigQuery search indexes for string predicate optimization |  | BigQuery search indexes can optimize queries that use string comparisons with =, IN, LIKE, and STARTS_WITH in preview. |
| 2023-07-17 | BigQuery primary and foreign key table constraints |  | Primary and foreign key table constraints are now generally available, including API-based management and console visibility. |
| 2023-07-17 | BigQuery Storage Write API v1beta2 package | 2024-07-17 | The google.cloud.bigquery.storage.v1beta2 API package for BigQueryWrite is deprecated, with migration recommended to google.cloud.bigquery.storage.v1; deprecated on 2024-07-17. |
| 2023-07-12 | BigQuery ML custom holiday modeling CREATE MODEL syntax |  | BigQuery ML now supports preview custom holiday modeling for time series forecasting through a new CREATE MODEL syntax for ARIMA_PLUS and ARIMA_PLUS_XREG models. |
| 2023-07-12 | BigQuery ML ML.EXPLAIN_FORECAST holiday effect output |  | BigQuery ML now updates ML.EXPLAIN_FORECAST to include per-holiday explanation of holiday effects in time-series forecasts. |
| 2023-07-12 | BigQuery ML ML.HOLIDAY_INFO function |  | BigQuery ML introduces ML.HOLIDAY_INFO to return the list of holidays modeled by ARIMA_PLUS and ARIMA_PLUS_XREG forecasting models. |
| 2023-07-12 | BigQuery ML TRANSFORM clause feature preprocessing |  | BigQuery ML feature preprocessing via the TRANSFORM clause is now generally available, including exporting TRANSFORM-based models to TensorFlow SavedModel format. |
| 2023-07-12 | BigQuery public holidays_and_events_for_forecasting dataset |  | A new public table, bigquery-public-data.ml_datasets.holidays_and_events_for_forecasting, is available for built-in holiday lookup in BigQuery ML time series forecasting. |
| 2023-07-05 | BigQuery Analytics Hub listing data egress controls |  | BigQuery users can now restrict data egress for Analytics Hub listings, currently in preview. |
| 2023-07-05 | BigQuery fail-safe period |  | The BigQuery fail-safe period is now generally available, adding an additional seven days of emergency recovery storage after time travel; BigQuery now exposes fail-safe period information, providing seven additional days of recoverable storage beyond time travel. |
| 2023-07-05 | BigQuery LOAD DATA SQL statement |  | The LOAD DATA SQL statement now supports loading Avro, CSV, newline-delimited JSON, JSON, ORC, and Parquet files into tables. |
| 2023-07-05 | BigQuery physical-byte storage billing model |  | BigQuery datasets can use physical-byte storage billing, so active storage billing includes time travel and fail-safe bytes. |
| 2023-07-05 | BigQuery slot estimator recommendations |  | The BigQuery slot estimator now provides cost-optimal commitment and autoscale recommendations based on editions pricing and historical performance. |
| 2023-07-05 | BigQuery time travel window configuration |  | BigQuery now allows configuration of the time travel window duration between two and seven days. |
| 2023-06-30 | BigLake metadata caching for Amazon S3 tables |  | BigQuery adds metadata caching for BigLake tables that reference Amazon S3 data to improve query performance. |
| 2023-06-29 | EU Regions compliance support |  | BigQuery enables support for the EU Regions compliance program. |
| 2023-06-29 | ITAR compliance support |  | BigQuery enables support for the International Traffic in Arms Regulation (ITAR) compliance program. |
| 2023-06-29 | Sovereign Controls by partners support |  | BigQuery enables support for Sovereign Controls through partner-supported deployments. |
| 2023-06-26 | Apache Spark stored procedures in Java and Scala |  | BigQuery supports creating Apache Spark stored procedures using Java or Scala. |
| 2023-06-26 | Python stored procedures for Apache Spark via PySpark editor |  | BigQuery allows configuring stored Python procedures for Apache Spark through the Google Cloud console PySpark editor. |
| 2023-06-21 | TRUNCATE TABLE in multi-statement transactions |  | BigQuery supports the TRUNCATE TABLE statement within multi-statement transactions. |
| 2023-06-20 | BigQuery metadata cache table statistics for query planning |  | BigQuery supplies table statistics from the metadata cache to improve query plan performance. |
| 2023-06-20 | BigQuery metadata cache usage statistics |  | BigQuery provides usage statistics for metadata cache operations. |
| 2023-06-20 | BigQuery metadata caching for BigLake and object tables |  | BigQuery metadata caching is generally available for BigLake tables and object tables to reduce object-listing overhead during query planning; BigQuery added metadata caching to reduce object listing overhead and improve query performance for BigLake and object tables. |
| 2023-06-20 | BigQuery querying Apache Iceberg tables created by open-source engines |  | BigQuery supports querying Apache Iceberg tables that were created by open-source engines. |
| 2023-06-20 | Customer-managed encryption keys for BigQuery metadata cache |  | BigQuery supports protecting metadata cache data using customer-managed encryption keys. |
| 2023-06-15 | BigQuery ML.GENERATE_TEXT with remote models |  | BigQuery adds the ML.GENERATE_TEXT function for running LLM-based text generation using remote models in queries. |
| 2023-06-15 | BigQuery remote model creation with Vertex AI text-bison |  | BigQuery now supports creating a remote model in Vertex AI using the text-bison large language model. |
| 2023-06-14 | BigLake Metastore |  | BigLake Metastore is available for accessing and managing Apache Iceberg table metadata across multiple sources. |
| 2023-06-14 | BigQuery TABLE_STORAGE INFORMATION_SCHEMA view |  | BigQuery exposes the TABLE_STORAGE INFORMATION_SCHEMA view for project-level current table storage usage. |
| 2023-06-14 | BigQuery TABLE_STORAGE_BY_ORGANIZATION INFORMATION_SCHEMA view |  | BigQuery exposes the TABLE_STORAGE_BY_ORGANIZATION INFORMATION_SCHEMA view for organization-level current table storage usage. |
| 2023-06-12 | BigQuery query execution graph |  | BigQuery provides a query execution graph to diagnose performance issues and deliver query performance insights; BigQuery added a query execution graph feature to diagnose and gain insights into query performance. |
| 2023-05-25 | BigQuery partitioning and clustering recommender |  | BigQuery’s partitioning and clustering recommender analyzes tables and recommends partitioning or clustering changes for potential cost savings. |
| 2023-05-19 | EXTERNAL_QUERY SQL pushdown |  | BigQuery's EXTERNAL_QUERY federation now pushes down column selection and filters to external sources like Cloud SQL or Cloud Spanner to reduce data transfer, execution time, and cost; BigQuery's EXTERNAL_QUERY federation now supports SQL pushdown for column pruning and filter predicates when querying external databases. |
| 2023-05-18 | Query result sorting in BigQuery UI |  | BigQuery users can sort query result tables using the sort menu next to a column header. |
| 2023-05-11 | BigQuery object tables |  | Object tables provide read-only metadata tables for unstructured Cloud Storage data to enable analysis and inference workflows, including support for unstructured file governance patterns; BigQuery introduced object tables for read-only access to metadata about unstructured data stored in Cloud Storage. |
| 2023-05-11 | ML.CONVERT_COLOR_SPACE function |  | The ML.CONVERT_COLOR_SPACE function converts image pixel data from an RGB color space to another color space. |
| 2023-05-11 | ML.CONVERT_IMAGE_TYPE function |  | The ML.CONVERT_IMAGE_TYPE function converts image pixel data types in BigQuery ML image workflows. |
| 2023-05-11 | ML.DECODE_IMAGE function |  | The ML.DECODE_IMAGE BigQuery ML function decodes image data for use with ML.PREDICT. |
| 2023-05-11 | ML.DISTANCE function |  | The ML.DISTANCE function calculates the distance between two vectors for vector similarity computations. |
| 2023-05-11 | ML.LP_NORM function |  | The ML.LP_NORM function computes the LP-norm between vectors in BigQuery ML. |
| 2023-05-11 | ML.RESIZE_IMAGE function |  | The ML.RESIZE_IMAGE function rescales image data for BigQuery ML image processing. |
| 2023-05-09 | BI Engine Query Fallback Count dashboard metric |  | BigQuery now exposes BI Engine Query Fallback Count as a dashboard metric. |
| 2023-05-09 | BI Engine Top Tables Cached Bytes dashboard metric |  | BigQuery now exposes the BI Engine Top Tables Cached Bytes metric in dashboard views. |
| 2023-05-09 | BigQuery Query Execution Count dashboard metric |  | BigQuery now exposes Query Execution Count in dashboard metrics for BI Engine monitoring. |
| 2023-05-08 | Differential privacy aggregate functions |  | BigQuery added preview differential privacy support through aggregate functions including AVG, COUNT, SUM, and PERCENTILE_CONT. |
| 2023-05-08 | INFORMATION_SCHEMA.MATERIALIZED_VIEW view |  | BigQuery added an INFORMATION_SCHEMA.MATERIALIZED_VIEW view to monitor materialized view usage. |
| 2023-05-08 | Materialized view refresh job statistics |  | Enhanced job statistics now expose materialized view refresh job information for monitoring and troubleshooting. |
| 2023-05-05 | INSERT INTO SELECT from cloud object storage |  | BigQuery now allows INSERT INTO SELECT to read and filter data files from Amazon S3 and Azure Blob Storage before loading into tables. |
| 2023-05-04 | SQL translation configuration YAML |  | BigQuery SQL translation now supports configuration YAML files for batch, interactive, and Python-client SQL translators. |
| 2023-05-03 | BigQuery table cloning |  | BigQuery introduced generally available table cloning for fast, metadata-only table copies. |
| 2023-05-01 | BigQuery query queue timeout configuration |  | BigQuery users can set interactive and batch queue timeouts in default query queue configuration. |
| 2023-04-27 | JSON data type mapping for Cloud Spanner federated queries |  | BigQuery now supports JSON data type mapping when querying Cloud Spanner through federated queries. |
| 2023-04-26 | Cloud Storage custom dual-region support for BigQuery external tables |  | BigQuery added support for Cloud Storage custom dual-regions in both BigLake and non-BigLake external tables. |
| 2023-04-25 | Dynamic data masking for REPEATED RECORD columns |  | BigQuery dynamic data masking now supports masking on RECORD columns that use REPEATED mode. |
| 2023-04-24 | BigQuery Data Transfer Service Google Ads connector updates |  | The BigQuery Data Transfer Service Google Ads connector now supports the new Google Ads API with campaign support for PMax and Discovery, an 8,000-leaf-account limit, and the --table_filter option. |
| 2023-04-19 | BI Engine preferred table update propagation optimization |  | BigQuery BI Engine now propagates updates to preferred tables for existing reservations in about ten seconds instead of five minutes. |
| 2023-04-13 | Column-level rounding mode configuration for NUMERIC and BIGNUMERIC |  | BigQuery now supports setting rounding mode at the table or dataset level for parameterized NUMERIC and BIGNUMERIC columns and allows ROUND() to accept a rounding mode argument. |
| 2023-04-10 | Increased Azure and Amazon S3 federation query result size |  | BigQuery raised the maximum query result size for Azure and Amazon S3 data to 20 GiB logical bytes and updated related S3/Azure query quotas and limitations. |
| 2023-04-06 | BigQuery Add Data demo guide |  | BigQuery made the Add Data demo guide, which demonstrates adding data from popular sources, available in preview. |
| 2023-04-05 | Non-incremental materialized view SQL query support expansion |  | Non-incremental materialized views in BigQuery now support additional SQL constructs such as OUTER JOIN, UNION, HAVING, and analytic functions. |
| 2023-03-30 | BigQuery Partner Center |  | BigQuery Partner Center became generally available for discovering and trying validated partner applications. |
| 2023-03-29 | Autoscaling slots |  | Autoscaling slots are generally available in BigQuery, with slot reservations and commitments from preview mapped to BigQuery Enterprise edition. |
| 2023-03-29 | BigQuery editions with Compute (analysis) GA |  | BigQuery Compute (analysis) is generally available in Standard, Enterprise, and Enterprise Plus editions that support the autoscaling slots model. |
| 2023-03-28 | BigQuery ML Cloud AI service table-valued functions |  | BigQuery ML now supports table-valued functions for inference with Google Cloud pretrained models, including Vision, Natural Language, and Translation APIs. |
| 2023-03-28 | BigQuery ML instance_weight_col training option |  | BigQuery ML now supports the instance_weight_col training option to provide per-row weights, currently for boosted tree and random forest models with non-array feature types. |
| 2023-03-28 | BigQuery ML model artifact import for inference |  | BigQuery ML now supports importing ONNX, XGBoost, and TensorFlow Lite model artifacts for use in BigQuery ML inference. |
| 2023-03-28 | BigQuery ML remote inference via Vertex AI Prediction |  | BigQuery ML now supports running inference against models hosted remotely on Vertex AI Prediction. |
| 2023-03-28 | BigQuery ML TensorFlow version training option |  | BigQuery ML now supports the tf_version training option so users can specify the TensorFlow runtime version for model training. |
| 2023-03-28 | BigQuery ML XGBoost version training option |  | BigQuery ML now supports the xgboost_version training option so users can choose the XGBoost runtime version for training. |
| 2023-03-27 | BigQuery change data capture via Storage Write API |  | BigQuery now supports change data capture by processing and applying streamed changes in real time through the BigQuery Storage Write API. |
| 2023-03-22 | BigQuery Unicode column names |  | BigQuery now supports Unicode column names using international character sets, including alphanumeric and special characters, and existing columns can be updated using RENAME. |
| 2023-03-20 | BigQuery AutoML Tables CMEK support by region |  | BigQuery AutoML Tables now supports CMEK in available regions, except for the US and EU multi-regions. |
| 2023-03-20 | BigQuery AutoML Tables optimization objective options |  | BigQuery AutoML Tables model training now supports the OPTIMIZATION_OBJECTIVE options MAXIMIZE_PRECISION_AT_RECALL and MAXIMIZE_RECALL_AT_PRECISION. |
| 2023-03-20 | BigQuery AutoML Tables regional availability |  | BigQuery AutoML Tables features are now generally available in additional regions. |
| 2023-03-14 | BigQuery table lineage tab |  | The BigQuery table properties page now includes a Lineage tab to track data movement and transformations. |
| 2023-03-13 | BigQuery Interactive SQL Translator configuration and batch debug |  | BigQuery now allows translation configurations in the Interactive SQL Translator, including use for debugging Batch SQL Translator jobs. |
| 2023-03-10 | BigQuery CREATE TABLE AS SELECT external source file filtering |  | BigQuery now allows CREATE TABLE AS SELECT to filter data from Amazon S3 and Azure Blob Storage files before loading into destination tables. |
| 2023-03-07 | BigQuery case-insensitive collation support |  | BigQuery now provides general-availability support for case-insensitive collation across supported SQL features and operations. |
| 2023-03-02 | BigQuery WITH RECURSIVE clause |  | The WITH RECURSIVE clause is now generally available in BigQuery for recursive common table expressions. |
| 2023-02-27 | BigQuery column DEFAULT values |  | BigQuery now supports setting default values on table columns. |
| 2023-02-23 | Authorized stored procedures in BigQuery |  | BigQuery now supports authorized stored procedures so users can share stored procedures without direct access to underlying tables. |
| 2023-02-22 | BigQuery table primary and foreign key constraints |  | BigQuery now supports defining primary key and foreign key table constraints using CREATE TABLE and ALTER TABLE statements. |
| 2023-02-21 | BigQuery ALTER TABLE column rename and drop statements |  | BigQuery now generally supports ALTER TABLE statements to rename and drop columns. |
| 2023-02-15 | BigQuery bq CLI service account impersonation |  | The BigQuery bq command-line tool now supports running commands using service account impersonation. |
| 2023-02-15 | BigQuery Explorer pane focused tab resource selection |  | BigQuery Explorer pane now automatically selects the resource corresponding to the currently focused tab. |
| 2023-02-15 | BigQuery Explorer pane resource expansion via Show more |  | The BigQuery Explorer pane now lets users view all resources in a selected resource level using the Show more option. |
| 2023-02-15 | Case-insensitive datasets and tables in BigQuery |  | BigQuery now allows datasets and tables within them to be created or altered as case-insensitive. |
| 2023-02-13 | BigQuery materialized views over BigLake metadata cache-enabled tables |  | BigQuery now supports creating materialized views over BigLake metadata cache-enabled tables for structured data in Cloud Storage. |
| 2023-02-09 | BigQuery dynamic data masking formats for table columns |  | BigQuery now supports four new dynamic data masking types for table columns, including date year, email, first four characters, and last four characters masking. |
| 2023-02-09 | BigQuery Explorer pane resource refresh action |  | BigQuery Explorer pane now supports refreshing the contents of a project or dataset resource from the UI. |
| 2023-02-06 | ANY_VALUE HAVING MAX and HAVING MIN support |  | BigQuery now supports HAVING MAX and HAVING MIN clauses for the ANY_VALUE aggregation function. |
| 2023-02-06 | BigQuery INFORMATION_SCHEMA query_info telemetry |  | BigQuery now exposes a query_info column in job information views to help monitor and optimize query processing. |
| 2023-02-01 | BigQuery Data Transfer Service Azure Blob Storage source connector |  | BigQuery Data Transfer Service now supports transferring data from Azure Blob Storage into BigQuery. |
| 2023-01-31 | Azure workload identity federation for BigQuery Omni connections |  | BigQuery Omni now supports Azure workload identity federation when creating connections through the Google Cloud console. |
| 2023-01-30 | BigQuery Partner Center partner search |  | Users can search and discover BigQuery partners in the BigQuery Partner Center. |
| 2023-01-19 | BigQuery ML function ML.IMPUTER |  | Adds the ML.IMPUTER function to BigQuery ML for handling missing feature values. |
| 2023-01-19 | BigQuery ML function ML.LABEL_ENCODER |  | Adds the ML.LABEL_ENCODER function to BigQuery ML for converting labels into numeric form. |
| 2023-01-19 | BigQuery ML function ML.MAX_ABS_SCALER |  | Adds the ML.MAX_ABS_SCALER function to BigQuery ML for max-abs normalization. |
| 2023-01-19 | BigQuery ML function ML.NORMALIZER |  | Adds the ML.NORMALIZER function to BigQuery ML for feature scaling. |
| 2023-01-19 | BigQuery ML function ML.ONE_HOT_ENCODER |  | Adds the ML.ONE_HOT_ENCODER function to BigQuery ML. |
| 2023-01-19 | BigQuery ML function ML.ROBUST_SCALER |  | Adds the ML.ROBUST_SCALER function to BigQuery ML preprocessing. |
| 2023-01-19 | BigQuery ML TRANSFORM clause for model training |  | BigQuery ML now supports the TRANSFORM clause for training models that can be exported in TensorFlow SavedModel format. |
| 2023-01-19 | BigQueryCreateModelJobOp component |  | Introduces the BigQueryCreateModelJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | BigQueryDropModelJobOp component |  | Introduces the BigQueryDropModelJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | BigQueryEvaluateModelJobOp component |  | Introduces the BigQueryEvaluateModelJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | BigQueryExplainForecastModelJobOp component |  | Introduces the BigQueryExplainForecastModelJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | BigQueryExplainPredictModelJobOp component |  | Introduces the BigQueryExplainPredictModelJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | BigQueryExportModelJobOp component |  | Introduces the BigQueryExportModelJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | BigQueryForecastModelJobOp component |  | Introduces the BigQueryForecastModelJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | BigQueryPredictModelJobOp component |  | Introduces the BigQueryPredictModelJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | BigQueryQueryJobOp component |  | Introduces the BigQueryQueryJobOp component for BigQuery integration in Vertex AI Managed Pipelines. |
| 2023-01-19 | Resource Manager tags on BigQuery datasets |  | BigQuery now allows attaching Resource Manager tags to datasets so IAM policies can be conditionally applied. |
| 2023-01-17 | Sparse input support in BigQuery ML training |  | BigQuery ML training now supports sparse input data for datasets with mostly zero or empty values. |
| 2023-01-10 | ALTER CAPACITY SET OPTIONS statement |  | The ALTER CAPACITY SET OPTIONS statement is now generally available in BigQuery. |
| 2023-01-10 | ALTER RESERVATION SET OPTIONS statement |  | The ALTER RESERVATION SET OPTIONS statement is now generally available in BigQuery. |
| 2023-01-10 | CREATE ASSIGNMENT OPTIONS clause support |  | BigQuery now supports the OPTIONS clause on CREATE ASSIGNMENT statements. |
| 2023-01-10 | CREATE CAPACITY OPTIONS clause support |  | BigQuery now supports the OPTIONS clause on CREATE CAPACITY statements. |
| 2023-01-10 | CREATE RESERVATION OPTIONS clause support |  | BigQuery now supports the OPTIONS clause on CREATE RESERVATION statements. |
| 2023-01-09 | BigQuery session temporary function persistence |  | Temporary functions in BigQuery sessions now persist until the session ends. |
| 2023-01-09 | TEMP keyword OR REPLACE and IF NOT EXISTS support in sessions |  | Session statements using the TEMP keyword can now include OR REPLACE and IF NOT EXISTS. |
| 2023-01-04 | BigQuery ML image analytics with vision models |  | BigQuery ML now supports image analytics in preview using vision models and object tables for image inference. |
| 2023-01-03 | BigQuery ML deployment from Vertex AI Model Registry |  | BigQuery ML models can be deployed directly from Vertex AI Model Registry to Vertex AI endpoints. |
| 2023-01-03 | BigQuery ML integration with Vertex AI Model Registry |  | BigQuery ML is generally available with Vertex AI Model Registry for model lifecycle operations. |
| 2023-01-03 | BigQuery ML metric tracking in Vertex AI |  | Vertex AI can compare and track evaluation metrics for BigQuery ML models. |
| 2023-01-03 | BigQuery ML model governance in Vertex AI Model Registry |  | BigQuery ML models can be governed in Vertex AI with user-specified model IDs and model-type filtering. |
| 2023-01-03 | BigQuery ML model monitoring on Vertex AI endpoints |  | BigQuery ML models deployed to Vertex AI endpoints can use Vertex AI MLOps monitoring features. |
| 2023-01-03 | BigQuery ML model registration and monitoring in Vertex AI |  | BigQuery ML models can be registered and monitored through Vertex AI Model Registry. |
| 2023-01-03 | BigQuery ML model versioning in Vertex AI Model Registry |  | BigQuery ML models registered in Vertex AI Model Registry can use model versioning and revision aliases. |
| 2023-01-03 | Explainable AI for BigQuery ML in Vertex AI |  | BigQuery ML models can use built-in XAI explainability features inside Vertex AI. |
| 2022-12-22 | BigQuery table lineage tab in table properties |  | BigQuery added a Lineage tab in the table properties page so users can track how data moves and transforms. |
| 2022-12-15 | BigQuery private connection to Cloud SQL |  | BigQuery now allows access and querying of Cloud SQL data over a private connection. |
| 2022-12-08 | BigQuery demo query guide for Google Trends |  | BigQuery introduced a demo query guide for querying a public Google Trends dataset. |
| 2022-12-01 | BigQuery querying Apache Iceberg tables |  | BigQuery added support for querying Apache Iceberg tables created by open source engines. |
| 2022-11-28 | BigQuery ASCII control character support for CSV loading |  | BigQuery added support for ASCII control characters in CSV file loading. |
| 2022-11-28 | BigQuery external table schema reference file support |  | BigQuery added support for using a schema reference file when creating external tables for Avro, ORC, and Parquet data. |
| 2022-11-14 | BigQuery slot estimator |  | BigQuery introduced a slot estimator to help manage slot capacity using historical performance data; Introduces the BigQuery Slot Estimator to analyze slot utilization and estimate slot capacity needs. |
| 2022-11-09 | BigQuery LOAD DATA customer-managed encryption key support |  | BigQuery allowed destination tables created with LOAD DATA to be encrypted with customer-managed encryption keys. |
| 2022-11-09 | BigQuery LOAD DATA hive-partitioned file transfer |  | BigQuery extended LOAD DATA to support loading hive-partitioned files. |
| 2022-11-09 | BigQuery LOAD DATA regional destination support for US and US-EAST-4 |  | BigQuery added support for transferring data with LOAD DATA into US multi-region and US-EAST-4 locations. |
| 2022-11-09 | BigQuery LOAD DATA semi-structured JSON loading without schema |  | BigQuery added support in LOAD DATA for loading semi-structured JSON source data into destination JSON columns without requiring a schema. |
| 2022-11-09 | BigQuery LOAD DATA support for Amazon S3 and Azure Blob Storage |  | BigQuery enabled data transfer from Amazon S3 and Azure Blob Storage into BigQuery using the LOAD DATA statement. |
| 2022-11-07 | BigQuery console Add data workflow |  | BigQuery added an Add data experience in the Cloud Console to discover and ingest supported data sources. |
| 2022-11-03 | BigQuery wrapped keyset SQL functions |  | BigQuery introduced SQL functions for managing wrapped keysets, including create, rotate, rewrap, and encrypt/decrypt operations. |
| 2022-10-31 | BigQuery column-level data masking |  | BigQuery now supports column-level data masking to selectively obscure column values for specific user groups while preserving query access. |
| 2022-10-31 | BigQuery materialized view max_staleness option |  | The `max_staleness` materialized view option is available to improve performance and control cost for large, frequently changing datasets. |
| 2022-10-27 | BigQuery Search indexes and SEARCH() function |  | BigQuery now supports Search indexes and the SEARCH() function in Google Standard SQL for efficient lookup in unstructured and semi-structured data. |
| 2022-10-26 | BigQuery ST_ISCLOSED geography function |  | BigQuery now provides the ST_ISCLOSED geography function to check for a non-empty geography with empty boundaries. |
| 2022-10-26 | BigQuery ST_ISRING geography function |  | BigQuery now provides the ST_ISRING geography function to determine whether a geography is a linestring that is closed and simple. |
| 2022-10-24 | BigQuery BI Engine dashboard metrics |  | BigQuery now exposes BI Engine Top Tables Cached Bytes, BI Engine Query Fallback Count, and Query Execution Count as dashboard metrics. |
| 2022-10-18 | BigQuery remote functions |  | BigQuery now supports remote functions that can invoke Cloud Functions or Cloud Run services directly from Google Standard SQL queries; Remote functions for BigQuery are available in Preview, allowing user-defined functions implemented outside SQL and JavaScript. |
| 2022-10-11 | BigQuery Analytics Hub subscription management |  | Analytics Hub publishers can now view all subscriptions to a listing and remove a subscription from that listing. |
| 2022-10-11 | BigQuery stored procedures for Apache Spark |  | BigQuery now supports creating and using stored procedures for Apache Spark workloads. |
| 2022-10-10 | BigQuery multi-statement transactions |  | BigQuery now supports multi-statement transactions for executing multiple SQL statements atomically; BigQuery introduced multi-statement transactions that support atomic commit and rollback across mutating operations on one or more tables. |
| 2022-10-10 | BigQuery physical byte storage billing |  | BigQuery now allows dataset storage billing to be based on physical bytes. |
| 2022-10-05 | BigQuery query result exploration in Colab |  | BigQuery now supports exploring query results in Google Colab using Python libraries. |
| 2022-10-03 | BigQuery JSON native column type |  | BigQuery supports JSON as a native column type. |
| 2022-09-29 | ROUND_HALF_EVEN support for NUMERIC and BIGNUMERIC |  | BigQuery adds the ROUND_HALF_EVEN rounding mode for parameterized NUMERIC and BIGNUMERIC columns, with ROUND() accepting an optional rounding-mode argument. |
| 2022-09-28 | Datastream replication to BigQuery from operational databases |  | Datastream for BigQuery can replicate data and schema updates from operational databases directly into BigQuery. |
| 2022-09-26 | Open BigQuery tables in Connected Sheets |  | The BigQuery Explorer pane now allows users to open tables in Connected Sheets. |
| 2022-09-21 | BigQuery Omni on-demand pricing model |  | BigQuery Omni adds support for an on-demand pricing model. |
| 2022-09-21 | Shuffle usage ratio visibility in BigQuery admin resource charts |  | BigQuery now exposes shuffle usage ratios in the admin resource charts. |
| 2022-09-16 | BigQuery Omni daily total query result size quota |  | BigQuery Omni introduces a 1 TB per day project-level quota for total query result sizes. |
| 2022-09-16 | BigQuery Omni maximum query result size limit |  | BigQuery Omni increases the maximum query result size from 2 MB to 10 GB. |
| 2022-09-15 | BigQuery Data Transfer Service for Google Ads Google Ads API support |  | BigQuery Data Transfer Service for Google Ads now supports the new Google Ads API. |
| 2022-09-14 | BigQuery is_case_insensitive schema option |  | BigQuery adds an is_case_insensitive schema option to make dataset and table names case-insensitive. |
| 2022-09-14 | BigQuery JDBC default dataset project configuration |  | The BigQuery JDBC driver can default dataset operations to a specified project using QueryProperties.dataset_project_id. |
| 2022-09-14 | BigQuery JDBC driver external account authentication |  | The BigQuery JDBC driver can authenticate connections using external accounts for workforce or workload identity federation. |
| 2022-09-14 | BigQuery JDBC driver Private Service Connect support |  | The BigQuery JDBC driver can be configured to use Private Service Connect URLs. |
| 2022-09-14 | BigQuery JDBC getTableTypes includes MATERIALIZED_VIEW |  | The BigQuery JDBC driver's getTableTypes function now includes MATERIALIZED_VIEW in the returned table types. |
| 2022-09-14 | BigQuery JDBC JSON data type support |  | The BigQuery JDBC driver now supports the JSON data type. |
| 2022-09-14 | BigQuery JDBC transaction API support |  | The BigQuery JDBC connector now supports JDBC transaction APIs. |
| 2022-09-14 | BigQuery multi-statement transactions with sessions (JDBC) |  | BigQuery JDBC now supports multi-statement transactions within one query or across multiple queries when using sessions; BigQuery ODBC now supports multi-statement transactions within one query or across multiple queries when using sessions. |
| 2022-09-14 | BigQuery ODBC default dataset project configuration |  | The BigQuery ODBC driver can use a default project for datasets via QueryProperties.dataset_project_id. |
| 2022-09-14 | BigQuery ODBC driver external account authentication with identity providers |  | The BigQuery ODBC driver supports external account authentication for workforce or workload identity federation, with limited support for Azure AD and Okta. |
| 2022-09-14 | BigQuery ODBC driver Private Service Connect support |  | The BigQuery ODBC driver can be configured to use Private Service Connect URLs. |
| 2022-09-14 | BigQuery ODBC getTableTypes includes MATERIALIZED_VIEW |  | The BigQuery ODBC driver includes MATERIALIZED_VIEW in table type results and supports requesting it via SQLTables TABLE_TYPES_ONLY. |
| 2022-09-14 | BigQuery ODBC JSON data type support |  | The BigQuery ODBC connector now supports the JSON data type. |
| 2022-09-14 | BigQuery ODBC transaction API support |  | The BigQuery ODBC connector now supports ODBC transaction APIs. |
| 2022-09-13 | Cloud Monitoring Storage Write API quota metrics |  | Cloud Monitoring now provides GA metrics for Storage Write API concurrent connections and throughput quota usage and limits. |
| 2022-09-09 | ARIMA_PLUS HOLIDAY_REGION option |  | The ARIMA_PLUS HOLIDAY_REGION option now supports multiple region strings so the model uses the union of holidays across all specified regions. |
| 2022-09-09 | ARIMA_PLUS TREND_SMOOTHING_WINDOW_SIZE option |  | ARIMA_PLUS now includes the TREND_SMOOTHING_WINDOW_SIZE option to smooth the trend component using a centered moving average. |
| 2022-09-06 | Automatic Execution Details display for long-running queries |  | The Cloud console now automatically opens the Execution details tab for long-running queries and shows stage-by-stage timing. |
| 2022-09-06 | Query editor validation message on completion or cancellation |  | Query editors now display the query validation message when a query finishes or is canceled. |
| 2022-09-01 | CMEK organization policy support for customer-managed keys |  | Customer-managed encryption keys are now integrated with CMEK organization policies in BigQuery. |
| 2022-09-01 | Random Forest model support |  | BigQuery ML Random Forest models are now generally available. |
| 2022-09-01 | Slot recommender for on-demand billing |  | The BigQuery slot recommender now provides recommendations to customers using on-demand billing. |
| 2022-08-29 | Community-contributed UDF availability |  | Community-contributed user-defined functions are generally available via the bigquery-utils GitHub repository and the bigquery-public-data.persistent_udfs dataset. |
| 2022-08-29 | Function signature parameter-name deletion in autocomplete |  | In the query editor, selected function-signature parameters can be removed quickly with Backspace or Delete. |
| 2022-08-19 | ALTER TABLE RENAME COLUMN statement |  | The ALTER TABLE RENAME COLUMN DDL statement is now in preview for renaming table columns. |
| 2022-08-17 | Copy resource ID from Explorer pane |  | BigQuery console users can copy a resource ID from the Explorer pane via View actions. |
| 2022-08-17 | Copy table schema to clipboard from Schema view |  | BigQuery console users can copy a table schema to the clipboard from the Schema view. |
| 2022-08-17 | Default values for table columns |  | BigQuery now supports setting default values on table columns. |
| 2022-08-17 | Expandable tab titles in BigQuery console |  | BigQuery console tab titles now expand when additional space is available. |
| 2022-08-17 | F1 shortcut for editor shortcuts |  | Pressing F1 in the BigQuery query editor now opens a list of editor shortcuts. |
| 2022-08-17 | Resizable query results columns |  | Query result column widths in the BigQuery console can now be resized. |
| 2022-08-17 | Saved queries access in Explorer pane |  | Saved queries can now be accessed in the BigQuery Explorer pane by expanding your project. |
| 2022-08-17 | Saved Queries pane repositioning |  | The Saved Queries pane is no longer located at the bottom of the BigQuery console. |
| 2022-08-17 | Table search in Explorer pane |  | Users can search for tables in the Explorer pane using a dataset and table identifier. |
| 2022-08-17 | Tooltip hover delay in BigQuery console |  | Tooltips no longer appear immediately on pointer hover, reducing UI distraction. |
| 2022-08-16 | Workforce Identity Federation for BigQuery access |  | BigQuery supports Workforce Identity Federation to authenticate and authorize external identity-provider users. |
| 2022-08-15 | BigQuery Omni reservation access control DCL |  | BigQuery Omni now supports access-control Data Control Language for reservations. |
| 2022-08-15 | BigQuery Omni reservation DDL |  | BigQuery Omni now supports reservation Data Definition Language statements. |
| 2022-08-10 | BigQuery default configuration scopes |  | BigQuery now supports setting default configurations at the project or organization level. |
| 2022-08-10 | Cloud Spanner federated query execution priority |  | BigQuery now lets users manage query execution priority for Cloud Spanner federated queries. |
| 2022-08-09 | Cloud Bigtable external data source querying |  | Querying Cloud Bigtable as an external data source is now generally available in BigQuery. |
| 2022-08-03 | max_staleness materialized view option |  | BigQuery added the max_staleness option for materialized views to improve performance-cost balance on frequently changing data. |
| 2022-08-01 | CBRT SQL function |  | BigQuery now generally supports the CBRT SQL function to calculate cube roots. |
| 2022-08-01 | LOAD DATA statement |  | The BigQuery Google Standard SQL LOAD DATA statement is available in preview for loading files into a table. |
| 2022-07-28 | BigQuery subscriptions for Pub/Sub |  | BigQuery subscriptions can now write Pub/Sub messages directly to existing BigQuery tables. |
| 2022-07-27 | Inverse trigonometric SQL functions |  | BigQuery made inverse trigonometric functions generally available, including COT, COTH, CSC, CSCH, SEC, and SECH. |
| 2022-07-25 | BigLake for BigQuery |  | BigLake is now generally available in BigQuery, including using Cloud Storage data for BigQuery ML and publishing BigLake tables to Analytics Hub listings. |
| 2022-07-12 | BigQuery reservation assignment job type |  | The Cloud console now allows selecting a job type when assigning folders, organizations, or projects to a reservation. |
| 2022-07-11 | google.cloud.bigquery.reservation.v1beta1 API deprecation | September 27, 2022 | The google.cloud.bigquery.reservation.v1beta1 API package is deprecated and will be replaced by the GA v1 API package; deprecated on September 27, 2022. |
| 2022-07-07 | BigQuery Omni Azure workload identity federation |  | BigQuery Omni now supports Azure workload identity federation for Omni connections, allowing Google access to Azure tenant applications without managing application client secrets. |
| 2022-07-06 | APPENDS change history table-valued function |  | The APPENDS change history TVF provides a history of table append operations over a configurable time window. |
| 2022-06-29 | BigQuery tables.get API BASIC view mode |  | The BigQuery `tables.get()` API now supports setting the `view` field to `BASIC` to return fewer table details and reduce response latency. |
| 2022-06-23 | BI Engine preferred tables |  | BI Engine preferred tables allow acceleration to be limited to a specified set of tables in BigQuery. |
| 2022-06-15 | Deterministic AEAD encryption SQL functions |  | BigQuery now includes GA deterministic encryption functions DETERMINISTIC_ENCRYPT, DETERMINISTIC_DECRYPT_BYTES, and DETERMINISTIC_DECRYPT_STRING for column-level encryption with aggregation and joins. |
| 2022-06-14 | BigQuery Omni VPC Service Controls in Cloud console |  | BigQuery Omni now supports configuring VPC Service Control perimeters in the Cloud console, including read or write permission settings for external cloud resources. |
| 2022-06-14 | BigQuery to Data Studio query result links |  | BigQuery now allows users to open query results in Data Studio via links from the Cloud console. |
| 2022-06-13 | BigQuery @@dataset_project_id system variable |  | The `@@dataset_project_id` system variable is available in BigQuery to provide a default dataset project when one is not explicitly specified. |
| 2022-06-08 | BigQuery batch and interactive translation |  | BigQuery batch and interactive SQL translation services are generally available and support most major SQL dialects. |
| 2022-06-08 | BigQuery metadata extraction tool |  | BigQuery now provides a preview metadata extraction tool for batch translation jobs. |
| 2022-06-08 | BigQuery SQL object name mapping tool |  | BigQuery now provides a preview SQL object name mapping tool to improve the accuracy of batch translation jobs. |
| 2022-06-06 | BigQuery Resource Manager tags on datasets |  | BigQuery datasets can now be tagged with Resource Manager tags to support conditional IAM policy application. |
| 2022-06-03 | BigQuery Omni Access Control DCL |  | BigQuery Omni now supports Access Control DCL for controlling access in Omni environments. |
| 2022-06-03 | BigQuery Omni Reservation support |  | BigQuery Omni now supports Reservations, allowing workload reservations to be used with Omni. |
| 2022-05-31 | Column-level data masking |  | BigQuery now supports column-level data masking to selectively obscure column data for different user groups while preserving access to the column itself. |
| 2022-05-24 | Informatica Data Loader support for BigQuery |  | BigQuery now supports loading data via Informatica Data Loader using Informatica connectors for ingestion. |
| 2022-05-05 | BigQuery DATE/TIME/DATETIME/TIMESTAMP %J format element |  | BigQuery now supports the %J format element for DATE, TIME, DATETIME, and TIMESTAMP functions to return ISO 8601 1-based day-of-year values. |
| 2022-05-03 | ARIMA_PLUS ML.EVALUATE forecasting metrics |  | ARIMA_PLUS models in BigQuery now support ML.EVALUATE to compute additional forecasting accuracy metrics such as MAPE, SMAPE, and MSE. |
| 2022-05-03 | ARIMA_PLUS time-series length training options |  | BigQuery ARIMA_PLUS training now supports the TIME_SERIES_LENGTH_FRACTION, MIN_TIME_SERIES_LENGTH, and MAX_TIME_SERIES_LENGTH options for faster model training. |
| 2022-05-02 | Case-insensitive collation support |  | BigQuery now supports case-insensitive collation for comparison and sorting operations in supported comparison, join, ordering, grouping, scalar/aggregate, and set operations. |
| 2022-05-02 | COLLATE column clause |  | BigQuery now supports the COLLATE clause in DDL statements to apply a specific collation to individual table columns. |
| 2022-05-02 | COLLATE function in Google Standard SQL |  | BigQuery now provides the COLLATE function in Google Standard SQL to return a STRING value with an explicit collation specification. |
| 2022-05-02 | DEFAULT COLLATE clause |  | BigQuery now supports the DEFAULT COLLATE clause in DDL to apply a default collation setting across supported column data types in schemas and tables. |
| 2022-04-25 | BigQuery Admin Resource Charts |  | BigQuery Admin Resource Charts are now generally available for on-demand users to monitor organizational metrics and troubleshoot issues; Introduces Admin Resource Charts for reservation users to monitor slot usage, concurrency, job performance, errors, and bytes processed across an organization. |
| 2022-04-25 | Configurable time travel window |  | BigQuery now allows users to configure the time travel window duration between two and seven days. |
| 2022-04-25 | TABLE_STORAGE view |  | BigQuery now supports the TABLE_STORAGE view to provide a snapshot of current storage usage for tables and materialized views. |
| 2022-04-07 | BigLake |  | BigLake introduces a storage engine for querying and unifying cross-cloud data lakes and warehouses from BigQuery, with fine-grained column and row access control. |
| 2022-04-07 | BigQuery SEARCH function |  | BigQuery now includes a SEARCH function in Google Standard SQL to enable efficient text search over unstructured and semi-structured data. |
| 2022-04-07 | BigQuery search indexes |  | BigQuery now supports creating search indexes to efficiently find data elements in unstructured and semi-structured data. |
| 2022-04-06 | Analytics Hub |  | Analytics Hub enables secure data exchanges in BigQuery, letting providers publish shared dataset listings and subscribers discover and subscribe to them. |
| 2022-04-05 | BigQuery Omni cross-cloud transfer |  | BigQuery Omni now supports cross-cloud transfer capabilities for workloads spanning AWS and Azure. |
| 2022-04-01 | BigQuery ML and Vertex AI Model Registry integration |  | This feature integrates BigQuery ML with Vertex AI Model Registry so models can be managed and deployed directly from the registry. |
| 2022-03-31 | Data Signals for Google Search Trends public dataset |  | The international public dataset for Data Signals for Google Search Trends became available in Preview for discovery and sharing in Google Cloud Marketplace and Analytics Hub. |
| 2022-03-28 | Wide-and-Deep model |  | The Wide-and-Deep model feature in BigQuery ML is now generally available. |
| 2022-03-17 | BigQuery slot recommender |  | The BigQuery slot recommender provides cost and performance recommendations for on-demand customers selecting slot capacity. |
| 2022-03-16 | BigQuery external table explicit schema for Parquet/ORC/Avro |  | Users can now explicitly define schemas for BigQuery external tables over Parquet, ORC, and Avro files instead of relying on automatic schema detection. |
| 2022-03-04 | BigQuery sessions |  | BigQuery sessions is now generally available, adding support for session lifecycle control, session-wide labels, and session metadata access. |
| 2022-02-15 | BigQuery table clones |  | BigQuery table clones create lightweight writable table copies with storage costs only for data differing from the base table. |
| 2022-02-14 | INFORMATION_SCHEMA STREAMING_TIMELINE views |  | The INFORMATION_SCHEMA.STREAMING_TIMELINE_* views are now generally available for queryable streaming timeline metadata. |
| 2022-02-14 | QUALIFY clause in BigQuery Google Standard SQL |  | The QUALIFY clause allows filtering the output of analytic functions in Google Standard SQL queries. |
| 2022-02-10 | BigQuery Omni INFORMATION_SCHEMA.JOBS_* views |  | BigQuery Omni adds support for INFORMATION_SCHEMA.JOBS_* views to expose job metadata metadata in AWS and Azure. |
| 2022-02-10 | BigQuery Omni INFORMATION_SCHEMA.RESERVATION* views |  | BigQuery Omni adds support for INFORMATION_SCHEMA.RESERVATION* views to expose reservation metadata in AWS and Azure. |
| 2022-02-03 | BigQuery migration assessment |  | BigQuery migration assessment helps estimate the complexity of migrating from an existing data warehouse to BigQuery. |
| 2022-02-03 | BigQuery ML hyperparameter tuning |  | BigQuery ML hyperparameter tuning optimizes model training by searching for better hyperparameter values in CREATE MODEL workflows; BigQuery ML introduces hyperparameter tuning for CREATE MODEL to optimize model performance automatically. |
| 2022-02-02 | WITH RECURSIVE clause in Google Standard SQL |  | The WITH RECURSIVE clause enables recursive and forward references within WITH queries in BigQuery Google Standard SQL. |
| 2022-01-31 | BigQuery materialized views with INNER JOIN |  | BigQuery materialized views now support definitions that include INNER JOIN clauses. |
| 2022-01-31 | BigQuery materialized views without aggregation |  | BigQuery materialized views now support configurations that do not require aggregation. |
| 2022-01-25 | BigQuery ML Explainable AI |  | Explainable AI in BigQuery ML provides large-scale interpretation of prediction and forecasting outputs; BigQuery ML added explainable AI capabilities that attribute prediction results to individual input features for classification and regression models. |
| 2022-01-06 | BigQuery Standard SQL JSON data type |  | BigQuery Standard SQL now supports a native JSON data type for storing JSON-formatted values. |
| 2021-12-14 | BigQuery BI Engine SQL interface |  | BigQuery BI Engine provides a SQL interface for querying and interacting with in-memory acceleration capabilities. |
| 2021-12-06 | BigQuery ML anomaly detection |  | BigQuery ML anomaly detection uses the ML.DETECT_ANOMALIES function for identifying anomalies in time-series and IID data. |
| 2021-12-03 | BigQuery ML Autoencoder model |  | BigQuery ML now supports autoencoder models for unsupervised anomaly detection and feature representation tasks. |
| 2021-12-03 | BigQuery ML PCA model |  | BigQuery ML now supports the PCA model for tasks such as dimensionality reduction and feature embedding. |
| 2021-12-01 | BigQuery Data Transfer Service Audit Logging support |  | BigQuery Data Transfer Service now supports Audit Logging integration. |
| 2021-12-01 | BigQuery Data Transfer Service Cloud Logging support |  | BigQuery Data Transfer Service now supports Cloud Logging integration. |
| 2021-12-01 | BigQuery Data Transfer Service Cloud Monitoring support |  | BigQuery Data Transfer Service now supports Cloud Monitoring integration. |
| 2021-11-12 | BigQuery authorized datasets |  | Authorized datasets in BigQuery allow controlled dataset-level access to authorized views and datasets. |
| 2021-11-09 | BigQuery scripting CASE search_expression statement |  | The CASE search_expression variant was added to Google Standard SQL scripting to execute statements when a search expression matches a WHEN expression. |
| 2021-11-09 | BigQuery scripting CASE statement |  | The CASE statement was added to Google Standard SQL scripting to execute the first matching list of SQL statements when a condition is true. |
| 2021-11-09 | BigQuery scripting FOR...IN loop |  | The FOR...IN loop statement was added to BigQuery scripting to iterate over every row in a table expression. |
| 2021-11-09 | BigQuery scripting LABELS statement |  | The LABELS statement was added to BigQuery scripting to provide an unconditional jump to the end of a labelled block or loop. |
| 2021-11-09 | BigQuery scripting REPEAT statement |  | The REPEAT statement was added to BigQuery scripting to repeatedly execute SQL statements until a terminating boolean condition becomes true. |
| 2021-11-08 | INFORMATION_SCHEMA DDL column support |  | BigQuery INFORMATION_SCHEMA views now expose a DDL column for routines, schemata, and tables metadata views. |
| 2021-11-02 | BigQuery parameterized types |  | BigQuery now supports parameterized data types, including string, bytes, numeric, and bignumeric variants with precision/scale. |
| 2021-10-28 | BigQuery table snapshots |  | BigQuery table snapshots became generally available, including console support and cross-project snapshot creation from a base table; BigQuery introduces table snapshots, enabling low-cost read-only copies of a table at a specific point in time. |
| 2021-10-27 | BigQuery SQL column-level encryption with Cloud KMS |  | BigQuery now supports SQL column-level encryption using Cloud Key Management Service, including encryption of keysets in AEAD encryption functions. |
| 2021-10-25 | BigQuery Omni |  | BigQuery Omni provides a multi-cloud analytics solution and is now generally available. |
| 2021-10-12 | BigQuery Storage Write API |  | The BigQuery Storage Write API became generally available and unifies high-throughput streaming ingestion and batch loading; BigQuery Storage Write API is introduced as a streaming ingestion API with low-cost, high-throughput, exactly-once delivery. |
| 2021-10-04 | BigQuery Migration Service |  | BigQuery Migration Service entered preview with features for migrating workloads to BigQuery. |
| 2021-10-01 | ST_BUFFER geospatial function |  | BigQuery now supports the ST_BUFFER geospatial function for generating a buffer geometry around an input geography. |
| 2021-10-01 | ST_BUFFERWITHTOLERANCE geospatial function |  | BigQuery now supports ST_BUFFERWITHTOLERANCE to create buffered geographies with configurable deviation tolerance. |
| 2021-09-28 | Authorized table functions |  | BigQuery now supports authorized table functions, allowing controlled access to user-defined table functions. |
| 2021-09-28 | BigQuery table functions |  | BigQuery table functions are generally available for use in SQL query workflows; BigQuery now supports table-valued user-defined functions that return a table value. |
| 2021-09-27 | S2_CELLIDFROMPOINT geospatial function |  | BigQuery now supports S2_CELLIDFROMPOINT to return the S2 cell ID covering a point geography. |
| 2021-09-27 | S2_COVERINGCELLIDS geospatial function |  | BigQuery now supports S2_COVERINGCELLIDS to return S2 cell IDs covering a geography. |
| 2021-09-27 | ST_BOUNDINGBOX geospatial function |  | BigQuery now supports ST_BOUNDINGBOX to return a bounding box STRUCT for a geography. |
| 2021-09-27 | ST_EXTENT geospatial function |  | BigQuery now supports ST_EXTENT to return a bounding box STRUCT for a set of geographies. |
| 2021-09-17 | ST_ANGLE function |  | Adds support for the geospatial function ST_ANGLE, which computes the angle between two intersecting lines. |
| 2021-09-17 | ST_AZIMUTH function |  | Adds support for the geospatial function ST_AZIMUTH, which returns the azimuth of a segment formed by two points. |
| 2021-09-17 | ST_EXTERIORRING function |  | Adds support for the geospatial function ST_EXTERIORRING, which returns the outermost ring of a polygon geography as a linestring. |
| 2021-09-17 | ST_GEOMETRYTYPE function |  | Adds support for the geospatial function ST_GEOMETRYTYPE, which returns the OGC geometry type for a geography as a string. |
| 2021-09-17 | ST_INTERIORRINGS function |  | Adds support for the geospatial function ST_INTERIORRINGS, which returns the interior rings of a polygon geography as an array of linestring geographies. |
| 2021-09-17 | ST_NUMGEOMETRIES function |  | Adds support for the geospatial function ST_NUMGEOMETRIES, which returns the number of geometries in a geography value. |
| 2021-09-08 | BigQuery CLI job metadata deletion |  | Adds support in the bq command-line tool to delete metadata for a specific job. |
| 2021-09-08 | BigQuery session support |  | Introduces SQL sessions in BigQuery, allowing scripts and multi-statement transactions to share a session identifier, session variables, and temporary tables. |
| 2021-08-30 | BigQuery Parquet export |  | Adds support for exporting BigQuery table data in Parquet format. |
| 2021-08-19 | BigQuery Cloud Spanner federated queries |  | Adds generally available support for federated queries from BigQuery against Cloud Spanner. |
| 2021-08-06 | BigQuery ML PCA models |  | Introduces preview support for principal component analysis (PCA) model creation in BigQuery ML. |
| 2021-08-03 | ALTER COLUMN SET DATA TYPE DDL statement |  | Adds the ALTER COLUMN SET DATA TYPE statement to BigQuery data definition language. |
| 2021-08-03 | CREATE TABLE COPY statement |  | Adds support for the CREATE TABLE COPY data definition statement in BigQuery. |
| 2021-08-03 | CREATE TABLE LIKE statement |  | Adds support for the CREATE TABLE LIKE data definition statement in BigQuery. |
| 2021-07-28 | Wide-and-Deep model support in BigQuery ML |  | Introduces preview support for Wide-and-Deep models in BigQuery ML via the DNN_LINEAR_COMBINED_CLASSIFIER and DNN_LINEAR_COMBINED_REGRESSOR model types. |
| 2021-07-27 | INTERVAL data type |  | BigQuery standard SQL added support for the INTERVAL type to represent durations and amounts of time. |
| 2021-07-26 | DML job row operation statistics |  | BigQuery now returns statistics for DML query jobs showing counts of rows inserted, deleted, and updated, including exposure in INFORMATION_SCHEMA job views. |
| 2021-07-26 | Time series holiday effects for weekly models |  | BigQuery ML time series models now support holiday effects for weekly time series in addition to daily series. |
| 2021-07-19 | BigQuery workload management DCL statements |  | BigQuery added workload management DCL statements including CREATE/DROP CAPACITY, CREATE/DROP RESERVATION, and CREATE/DROP ASSIGNMENT. |
| 2021-07-19 | CONTAINS_SUBSTR SQL function |  | BigQuery standard SQL introduced the CONTAINS_SUBSTR string function. |
| 2021-07-19 | PIVOT and UNPIVOT SQL operators |  | BigQuery SQL now supports the PIVOT and UNPIVOT query operators. |
| 2021-07-07 | Materialized views with joins and without aggregation |  | BigQuery added support for materialized views without aggregation and materialized views with INNER JOIN. |
| 2021-06-28 | BigQuery ALTER COLUMN SET OPTIONS |  | BigQuery adds support for the ALTER COLUMN SET OPTIONS DDL statement. |
| 2021-06-28 | BigQuery CAST and numeric parsing enhancements |  | BigQuery adds PARSE_BIGNUMERIC and PARSE_NUMERIC functions, expands CAST format-clause support for multiple types, and broadens INT64 alias and NUMERIC/BIGNUMERIC casting support. |
| 2021-06-28 | BigQuery Data Transfer Service audit logging and monitoring |  | BigQuery Data Transfer Service gains generally available Audit Logging integration with Cloud Logging and Cloud Monitoring. |
| 2021-06-28 | BigQuery Google Trends dataset |  | The Google Trends dataset becomes available in Preview in BigQuery via Google Cloud Marketplace. |
| 2021-06-28 | Google Trends dataset in Marketplace |  | The Google Trends dataset was made available in BigQuery through Google Cloud Marketplace. |
| 2021-06-28 | GRANT and REVOKE DCL statements |  | BigQuery added access-management DCL statements, including GRANT and REVOKE for resource permissions. |
| 2021-06-28 | OBJECT_PRIVILEGES metadata object |  | BigQuery exposed OBJECT_PRIVILEGES as an INFORMATION_SCHEMA view and corresponding table for visibility into object-level privileges. |
| 2021-06-22 | BigQuery Data Transfer Service Google Merchant Center source |  | BigQuery Data Transfer Service adds support for Google Merchant Center transfers for local and regional inventories; BigQuery Data Transfer Service now supports data transfers from Google Merchant Center. |
| 2021-06-22 | BigQuery ML AUTOENCODER model type |  | BigQuery ML makes the AUTOENCODER model type available in CREATE MODEL statements. |
| 2021-06-22 | BigQuery ML ML.DETECT_ANOMALIES function |  | BigQuery ML introduces the ML.DETECT_ANOMALIES function for anomaly detection on time-series and IID random-variable data. |
| 2021-06-22 | BigQuery ML ML.PREDICT AUTOENCODER dimensionality reduction |  | BigQuery ML enables ML.PREDICT to use existing AUTOENCODER models for reducing the dimensionality of query results. |
| 2021-06-21 | BigQuery row-level security |  | BigQuery adds generally available row-level security controls on table data. |
| 2021-06-07 | BigQuery parameterized data types |  | BigQuery adds support for parameterized types including STRING(L), BYTES(L), NUMERIC(P)/NUMERIC(P,S), and BIGNUMERIC(P)/BIGNUMERIC(P,S). |
| 2021-05-20 | BigQuery GIS linestring point functions |  | BigQuery GIS adds ST_STARTPOINT, ST_ENDPOINT, and ST_POINTN functions to extract point values from linestring geographies. |
| 2021-05-20 | BigQuery GIS newline-delimited GeoJSON loading |  | BigQuery GIS adds generally available support for loading geography data from newline-delimited GeoJSON files. |
| 2021-05-19 | BigQuery ALTER TABLE RENAME TO |  | BigQuery now supports renaming tables with the ALTER TABLE RENAME TO statement in SQL. |
| 2021-05-18 | BigQuery CREATE MODEL for AutoML Tables |  | BigQuery now supports the CREATE MODEL statement for training AutoML Tables models. |
| 2021-05-10 | BigQuery SQL PIVOT operator |  | BigQuery SQL now supports the PIVOT operator for transforming row data into columns. |
| 2021-05-10 | BigQuery SQL QUALIFY clause |  | BigQuery SQL now supports the QUALIFY clause for filtering results after windowed operations. |
| 2021-05-10 | BigQuery SQL UNPIVOT operator |  | BigQuery SQL now supports the UNPIVOT operator for transforming columns into rows. |
| 2021-04-30 | BigQuery ALTER COLUMN DROP NOT NULL constraint |  | BigQuery now supports ALTER COLUMN to drop a NOT NULL constraint. |
| 2021-04-30 | BigQuery CREATE VIEW with column name list |  | BigQuery now supports CREATE VIEW statements that include an explicit column name list. |
| 2021-04-21 | BigQuery table clustering modification |  | BigQuery now allows existing non-clustered tables to become clustered and clustered tables to be reconfigured. |
| 2021-04-19 | BigQuery ML ARIMA model type | 2021-04-19 | The ARIMA model type in BigQuery ML is deprecated; deprecated on 2021-04-19. |
| 2021-04-19 | BigQuery ML ARIMA_PLUS model type |  | BigQuery ML now introduces ARIMA_PLUS models with enhanced forecasting, evaluation, and time-series configuration features. |
| 2021-04-09 | BigQuery Parquet logical type loading for ENUM and LIST |  | BigQuery now supports improved loading of Parquet ENUM and LIST logical types, including ENUM-to-STRING/BYTES conversion and LIST schema inference. |
| 2021-04-02 | BigQuery SQL ALTER TABLE DROP COLUMN |  | BigQuery standard SQL now supports the ALTER TABLE DROP COLUMN statement. |
| 2021-03-31 | BigQuery BigNumeric data type |  | BigNumeric type support is now generally available in BigQuery standard SQL. |
| 2021-03-31 | BigQuery JSON array extraction functions |  | BigQuery Standard SQL added JSON functions including JSON_EXTRACT_STRING_ARRAY, JSON_QUERY_ARRAY, and JSON_VALUE_ARRAY. |
| 2021-03-31 | BigQuery schema DDL statements |  | BigQuery Standard SQL added CREATE SCHEMA, ALTER SCHEMA, and DROP SCHEMA statements for dataset lifecycle management. |
| 2021-03-31 | BigQuery TABLESAMPLE operator |  | BigQuery Standard SQL added support for the TABLESAMPLE operator, enabling random subset queries over large tables. |
| 2021-03-31 | INFORMATION_SCHEMA views for table partitions |  | BigQuery introduced INFORMATION_SCHEMA views for table partitions. |
| 2021-03-31 | INFORMATION_SCHEMA.TABLES DDL column |  | The INFORMATION_SCHEMA.TABLES view now includes a DDL column to recreate table definitions. |
| 2021-02-25 | BigQuery BI Engine SQL interface for BI tools |  | BigQuery BI Engine added SQL-based integration with BI tools such as Looker and Tableau. |
| 2021-02-25 | BigQuery materialized views |  | BigQuery materialized views became generally available as precomputed, periodically refreshed query-result caches; BigQuery materialized views became available in beta. |
| 2021-02-16 | BigQuery table export to Parquet |  | BigQuery added support for exporting table data in Parquet format. |
| 2021-01-29 | DATETIME clustering for BigQuery clustered tables |  | BigQuery clustered tables gained support for using DATETIME columns as clustering keys. |
| 2020-12-21 | BigNumeric data type in BigQuery Standard SQL |  | BigQuery Standard SQL added the BigNumeric data type for high-precision computations. |
| 2020-12-16 | BigQuery Data Transfer Service VPC Service Controls integration |  | BigQuery Data Transfer Service became fully integrated with VPC Service Controls and can be protected by service perimeters. |
| 2020-11-23 | BigQuery ML integration with AI Platform for DNN models |  | BigQuery ML added GA support for integrating Deep Neural Network (DNN) models with AI Platform. |
| 2020-11-23 | BigQuery ML model export for online prediction |  | BigQuery ML made exporting models to Cloud Storage and using them for online prediction generally available; BigQuery ML now supports exporting models to Cloud Storage and using them for online prediction in beta. |
| 2020-11-23 | BigQuery ML XGBoost boosted tree integration with AI Platform |  | BigQuery ML added generally available support for AI Platform-based boosted tree model training using XGBoost. |
| 2020-11-17 | BigQuery column-level security |  | BigQuery now provides general availability for column-level security to enforce permissions at the column granularity; BigQuery Column-level security became available in beta. |
| 2020-11-17 | BigQuery policy tag replication across locations |  | BigQuery now allows policy tags to be replicated across locations. |
| 2020-10-26 | BigQuery SUBSTRING function |  | BigQuery standard SQL gained GA support for the SUBSTRING function. |
| 2020-10-22 | BigQuery ST_GEOGFROMGEOJSON make_valid parameter |  | The ST_GEOGFROMGEOJSON function now supports the make_valid parameter in beta mode to correct polygon issues when importing geography data. |
| 2020-10-22 | BigQuery ST_GEOGFROMTEXT new make_valid and planar parameters |  | The ST_GEOGFROMTEXT function now supports make_valid and planar parameters, with planar treating imported WKT geometries as planar when enabled. |
| 2020-10-14 | BigQuery ALTER TABLE ADD COLUMN statement |  | BigQuery now supports the ALTER TABLE ADD COLUMN statement. |
| 2020-10-14 | BigQuery ASCII function |  | BigQuery standard SQL added support for the ASCII function and marked it generally available. |
| 2020-10-14 | BigQuery CHR function |  | BigQuery standard SQL added support for the CHR function and marked it generally available. |
| 2020-10-14 | BigQuery CREATE EXTERNAL TABLE statement |  | BigQuery now supports the CREATE EXTERNAL TABLE statement. |
| 2020-10-14 | BigQuery DATE arithmetic operators |  | BigQuery standard SQL added support for DATE arithmetic operators. |
| 2020-10-14 | BigQuery DROP EXTERNAL TABLE statement |  | BigQuery now supports the DROP EXTERNAL TABLE statement. |
| 2020-10-14 | BigQuery Dynamic SQL |  | BigQuery Dynamic SQL became generally available, enabling SQL statements to be generated and executed dynamically at runtime; BigQuery now supports dynamic SQL in beta across all regions, allowing SQL statements to be generated and executed at runtime. |
| 2020-10-14 | BigQuery EXPORT DATA statement |  | BigQuery now supports the EXPORT DATA statement. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA COLUMN_FIELD_PATHS view |  | The BigQuery INFORMATION_SCHEMA COLUMN_FIELD_PATHS view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA COLUMNS view |  | The BigQuery INFORMATION_SCHEMA COLUMNS view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA PARAMETERS view |  | The BigQuery INFORMATION_SCHEMA PARAMETERS view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA ROUTINE_OPTIONS view |  | The BigQuery INFORMATION_SCHEMA ROUTINE_OPTIONS view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA ROUTINES view |  | The BigQuery INFORMATION_SCHEMA ROUTINES view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA SCHEMATA view |  | The BigQuery INFORMATION_SCHEMA SCHEMATA view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA SCHEMATA_OPTIONS view |  | The BigQuery INFORMATION_SCHEMA SCHEMATA_OPTIONS view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA TABLE_OPTIONS view |  | The BigQuery INFORMATION_SCHEMA TABLE_OPTIONS view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA TABLES view |  | The BigQuery INFORMATION_SCHEMA TABLES view became generally available. |
| 2020-10-14 | BigQuery INFORMATION_SCHEMA VIEWS view |  | The BigQuery INFORMATION_SCHEMA VIEWS view became generally available. |
| 2020-10-14 | BigQuery INITCAP function |  | BigQuery standard SQL added support for the INITCAP function and marked it generally available. |
| 2020-10-14 | BigQuery INSTR function |  | BigQuery standard SQL added support for the INSTR function and marked it generally available. |
| 2020-10-14 | BigQuery LAST_DAY function |  | BigQuery standard SQL added support for the LAST_DAY function and marked it generally available. |
| 2020-10-14 | BigQuery LEFT function |  | BigQuery standard SQL added support for the LEFT function and marked it generally available. |
| 2020-10-14 | BigQuery OCTET_LENGTH function |  | BigQuery standard SQL added support for the OCTET_LENGTH function and marked it generally available. |
| 2020-10-14 | BigQuery REGEXP_EXTRACT function positional and occurrence arguments |  | BigQuery standard SQL added support for REGEXP_EXTRACT with additional position and occurrence parameters. |
| 2020-10-14 | BigQuery REGEXP_INSTR function |  | BigQuery standard SQL added support for the REGEXP_INSTR function and marked it generally available. |
| 2020-10-14 | BigQuery REGEXP_SUBSTR function |  | BigQuery standard SQL added support for the REGEXP_SUBSTR function and marked it generally available. |
| 2020-10-14 | BigQuery RIGHT function |  | BigQuery standard SQL added support for the RIGHT function and marked it generally available. |
| 2020-10-14 | BigQuery SOUNDEX function |  | BigQuery standard SQL added support for the SOUNDEX function and marked it generally available. |
| 2020-10-14 | BigQuery TRANSLATE function |  | BigQuery standard SQL added support for the TRANSLATE function and marked it generally available. |
| 2020-10-14 | BigQuery TRUNCATE TABLE statement |  | BigQuery now supports the TRUNCATE TABLE statement. |
| 2020-10-14 | BigQuery UNICODE function |  | BigQuery standard SQL added support for the UNICODE function and marked it generally available. |
| 2020-10-14 | BigQuery Unicode table names |  | BigQuery added support for table names that use Unicode characters. |
| 2020-10-14 | Duplicate column names in BigQuery queries |  | BigQuery now allows queries to return duplicate column names. |
| 2020-10-06 | Authorized user-defined functions (UDFs) |  | BigQuery now provides Authorized user-defined functions (UDFs), which let users share query results without exposing underlying table access. |
| 2020-10-06 | BigQuery Cloud Console search and autocomplete with Data Catalog |  | BigQuery’s Cloud Console added a beta option to enable search and autocomplete powered by Data Catalog. |
| 2020-10-01 | BigQuery table-level access controls |  | BigQuery table-level access control is now available for managing permissions at the table level. |
| 2020-09-29 | BigQuery ML data frequency configuration for time series models |  | BigQuery ML time series models now allow the DATA_FREQUENCY parameter to be set when forecasting multiple time series using TIME_SERIES_ID_COL. |
| 2020-09-21 | BigQuery DATETIME column partitioning |  | BigQuery now supports using a DATETIME column as the partitioning column for time-unit partitioned tables. |
| 2020-09-21 | BigQuery time-unit partitioning granularities |  | BigQuery now supports time-unit partitioning at hourly, monthly, and yearly granularities. |
| 2020-09-11 | BQ.JOBS.CANCEL system procedure |  | BigQuery now supports the BQ.JOBS.CANCEL system procedure for programmatically canceling jobs. |
| 2020-08-27 | AUTO_ARIMA_MAX_ORDER training option |  | BigQuery ML now supports the AUTO_ARIMA_MAX_ORDER training option for time series models. |
| 2020-08-27 | BigQuery ML time series model support |  | BigQuery ML time series model support is now generally available. |
| 2020-08-26 | BigQuery INFORMATION_SCHEMA reservations views |  | BigQuery now provides INFORMATION_SCHEMA views for BigQuery reservations. |
| 2020-08-25 | BigQuery INFORMATION_SCHEMA jobs metadata by timeslice views |  | BigQuery now provides INFORMATION_SCHEMA views that expose jobs metadata by timeslice. |
| 2020-08-24 | BigQuery scheduled queries with service account credentials |  | BigQuery now supports using service account credentials for scheduled queries. |
| 2020-08-19 | BigQuery ON/USING clause join syntax without parentheses |  | BigQuery now allows consecutive ON/USING join clauses without requiring enclosing parentheses. |
| 2020-08-18 | BigQuery Reservations on-demand pricing project assignment |  | BigQuery now allows explicit assignment of projects to use on-demand pricing within Reservations. |
| 2020-08-17 | BigQuery ML Matrix Factorization model support |  | BigQuery ML Matrix Factorization model support is now generally available. |
| 2020-07-27 | BigQuery INFORMATION_SCHEMA streaming metadata views |  | BigQuery now provides INFORMATION_SCHEMA views for streaming metadata so you can retrieve historical and real-time information about data streamed into BigQuery. |
| 2020-07-16 | BigQuery GIS ST_CONVEXHULL function |  | BigQuery GIS added the ST_CONVEXHULL function, which returns the smallest convex GEOGRAPHY covering the input. |
| 2020-07-16 | BigQuery GIS ST_DUMP function |  | BigQuery GIS added the ST_DUMP function, which returns an ARRAY of component GEOGRAPHY values from a GEOGRAPHY input. |
| 2020-07-15 | BigQuery AutoML Table model training data split and validation options |  | BigQuery AutoML Table model training now supports data split and validation configuration options. |
| 2020-07-13 | BigQuery Standard SQL ASSERT statement |  | BigQuery Standard SQL now supports the ASSERT statement for validating that data meets specified expectations. |
| 2020-07-01 | BigQuery ML time series models |  | BigQuery ML now supports time series models as a beta feature. |
| 2020-06-29 | BigQuery Flex Slots |  | BigQuery Flex Slots became generally available. |
| 2020-06-26 | BigQuery region-qualified INFORMATION_SCHEMA views |  | BigQuery added beta support for region-qualified INFORMATION_SCHEMA views. |
| 2020-06-16 | BigQuery INFORMATION_SCHEMA jobs views |  | BigQuery made INFORMATION_SCHEMA views for jobs generally available. |
| 2020-06-16 | BigQuery ML AI Platform preview integration |  | BigQuery ML added a preview integration with AI Platform. |
| 2020-06-16 | BigQuery ML AutoML Tables model support |  | BigQuery ML preview integration with AI Platform now supports AutoML Tables models. |
| 2020-06-16 | BigQuery ML Deep Neural Network model support |  | BigQuery ML preview support with AI Platform now includes deep neural network (DNN) models. |
| 2020-06-16 | BigQuery ML XGBoost Boosted Tree model support |  | BigQuery ML preview support with AI Platform now includes boosted tree models using XGBoost. |
| 2020-06-16 | Top Brands report export for Google Merchant Center Best Sellers in BigQuery |  | The Top Brands report for Google Merchant Center Best Sellers exports is now available in beta for BigQuery. |
| 2020-06-09 | BigQuery clustering for non-partitioned tables |  | BigQuery now supports clustering on non-partitioned tables. |
| 2020-06-04 | BigQuery Table ACLs |  | BigQuery Table ACL (access controls) are now available in beta. |
| 2020-06-02 | BigQuery slot purchasing via bq command-line tool |  | BigQuery reservations can now be purchased using the `bq` command-line tool for flat-rate pricing and workload slot allocation. |
| 2020-06-02 | BigQuery ST_Simplify GIS function |  | Introduces the `ST_Simplify` geography function, which returns a simplified geometry by replacing portions of input with straight-line segments. |
| 2020-05-20 | BigQuery Cloud SQL federated queries |  | Cloud SQL federated queries are now generally available, allowing BigQuery to query Cloud SQL data directly; BigQuery can now query Cloud SQL data through BigQuery federated queries. |
| 2020-05-20 | BigQuery hourly partitioned tables |  | Hourly partitioned tables feature is now available in BigQuery in beta. |
| 2020-05-20 | BigQuery Trial slots |  | BigQuery trial slots are available in US and EU multi-regions as a limited promotional offering for qualified customers. |
| 2020-05-08 | BigQuery next-generation streaming |  | Next-generation BigQuery streaming has reached general availability. |
| 2020-05-01 | BigQuery JSON_EXTRACT_ARRAY function |  | The `JSON_EXTRACT_ARRAY` function is added to extract JSON document contents as a string array. |
| 2020-05-01 | BigQuery ORDER BY NULLS FIRST / NULLS LAST |  | The `ORDER BY` clause now supports `NULLS FIRST` and `NULLS LAST` to control sort ordering of null values. |
| 2020-04-17 | BigQuery ML Matrix Factorization models |  | BigQuery ML now supports Matrix Factorization models for recommendation use cases in beta. |
| 2020-04-16 | BigQuery Reservations |  | BigQuery Reservations became generally available, allowing users to purchase BigQuery slots for flat-rate pricing and allocate them for workload management; BigQuery Reservations became available in all BigQuery regions. |
| 2020-04-14 | BigQuery Data Transfer Service Google Merchant Center connector |  | BigQuery Data Transfer Service added support for Google Merchant Center best sellers data transfers; BigQuery Data Transfer Service added support for Google Merchant Center pricing competitiveness data transfers. |
| 2020-04-09 | BigQuery scheduled queries permissions |  | Scheduling queries now requires the bigquery.jobs.create permission instead of the bigquery.transfers.update permission. |
| 2020-03-31 | BigQuery Reservations INFORMATION_SCHEMA views |  | INFORMATION_SCHEMA views for BigQuery reservations reached public alpha. |
| 2020-03-30 | BigQuery scripting and stored procedures |  | BigQuery scripting and stored procedures became generally available. |
| 2020-03-02 | BigQuery Cloud Storage ORC and Parquet query support |  | Support for querying Cloud Storage data in ORC and Parquet formats became generally available in BigQuery. |
| 2020-03-02 | BigQuery external hive-partitioned data support |  | BigQuery added general availability for loading and querying externally partitioned Cloud Storage data using the default hive partitioning layout. |
| 2020-03-02 | BigQuery Storage API |  | The BigQuery Storage API became generally available; The BigQuery Storage API was introduced in beta. |
| 2020-02-27 | BigQuery Cloud Storage transfer append or refresh mode |  | Cloud Storage transfers to BigQuery now support configurable write behavior to append new data or refresh (overwrite) existing data. |
| 2020-02-26 | BigQuery Flex Slots in Reservations |  | BigQuery Flex Slots are now available in beta across all BigQuery Reservations regions. |
| 2020-02-25 | BigQuery Amazon S3 data transfer |  | BigQuery now supports data transfers from Amazon S3. |
| 2020-02-20 | BigQuery Amazon Redshift migrations |  | BigQuery now supports migrations from Amazon Redshift data warehouses. |
| 2020-02-20 | BigQuery Amazon Redshift private instance migration over VPC |  | BigQuery now supports migrating private Amazon Redshift instances to BigQuery via VPC. |
| 2020-02-20 | Data Studio custom query and view support for BigQuery |  | BigQuery now supports custom queries and views when used through Data Studio. |
| 2020-02-18 | BigQuery integer range partitioned tables |  | BigQuery now supports tables partitioned by an integer column (integer range partitioning). |
| 2020-02-14 | BigQuery INFORMATION_SCHEMA job metadata views |  | BigQuery now provides INFORMATION_SCHEMA views for both live and historical jobs metadata. |
| 2020-01-14 | BigQuery Reservations in London region |  | BigQuery Reservations is now available in the London (europe-west2) region. |
| 2019-12-20 | BigQuery ALTER TABLE and ALTER VIEW statements |  | BigQuery now supports ALTER TABLE and ALTER VIEW DDL statements for setting options on tables and views. |
| 2019-12-20 | BigQuery Reservations in Tokyo region |  | BigQuery Reservations is now available in the Tokyo (asia-northeast1) region. |
| 2019-12-19 | BigQuery ML data preprocessing |  | BigQuery ML preprocessing is now generally available, including preprocessing functions and the TRANSFORM clause for feature engineering; BigQuery ML data preprocessing functionality is available in beta. |
| 2019-12-19 | Google Play reports transfer |  | BigQuery now supports transfers of Google Play reports as a generally available capability. |
| 2019-12-19 | Third-party external data source transfers to BigQuery |  | BigQuery now generally supports third-party transfers for loading data from external data sources. |
| 2019-12-11 | Integer range partitioned tables |  | BigQuery now supports tables partitioned by an integer column (integer range partitioning). |
| 2019-12-09 | Cloud Storage transfers |  | BigQuery transfer support from Cloud Storage is now generally available; BigQuery adds support for Cloud Storage Transfers. |
| 2019-12-04 | KMEANS++ initialization |  | BigQuery ML now supports KMEANS++ initialization for k-means clustering models. |
| 2019-11-22 | INFORMATION_SCHEMA routine metadata views |  | BigQuery now exposes routine metadata through INFORMATION_SCHEMA views. |
| 2019-11-22 | Persistent standard SQL UDFs |  | Persistent standard SQL user-defined functions are now generally available in BigQuery. |
| 2019-11-21 | BigQuery ML CMEK support |  | BigQuery ML now supports customer-managed encryption keys for encrypting ML models. |
| 2019-11-21 | Scheduled queries with service account credentials |  | BigQuery now supports using service account credentials when running scheduled queries. |
| 2019-11-12 | Omitting column names in INSERT and MERGE |  | BigQuery now allows INSERT and MERGE statements without specifying column names. |
| 2019-10-31 | External table loading with default Hive partitioning on Cloud Storage |  | BigQuery supports loading and querying externally partitioned data on Cloud Storage using a default Hive partitioning layout. |
| 2019-10-31 | Querying Cloud Storage ORC/Parquet data |  | BigQuery now supports querying Cloud Storage data in ORC and Parquet formats in beta. |
| 2019-10-09 | RANGE_BUCKET function |  | BigQuery adds the RANGE_BUCKET function to find the upper-bound position of a point within a sorted array. |
| 2019-10-03 | BigQuery Data Transfer Service Search Ads 360 connector |  | BigQuery Data Transfer Service adds support for Search Ads 360 data transfers. |
| 2019-10-03 | BigQuery scripting |  | BigQuery adds support for scripting so users can run multi-statement scripts. |
| 2019-10-03 | BigQuery stored procedures |  | BigQuery introduces stored procedures for reusable SQL logic execution. |
| 2019-10-03 | BigQuery temporary tables |  | BigQuery supports the use of temporary tables during query and script execution. |
| 2019-09-30 | TensorFlow model import |  | BigQuery now supports importing TensorFlow models. |
| 2019-09-23 | k-means clustering model support |  | BigQuery ML adds support for k-means clustering models. |
| 2019-09-17 | BigQuery BI Engine availability in Frankfurt |  | BigQuery BI Engine is made available in the Frankfurt (europe-west3) region. |
| 2019-09-17 | BigQuery ML regional availability in Frankfurt |  | BigQuery ML is made available in the Frankfurt (europe-west3) region. |
| 2019-09-17 | BigQuery regional availability in Frankfurt |  | BigQuery becomes available in the Frankfurt (europe-west3) region. |
| 2019-08-30 | Cross-region dataset copy |  | BigQuery adds beta support for copying datasets, including cross-region copies. |
| 2019-08-27 | Google Sheets external table sheet/range selection |  | BigQuery external tables on Google Drive Sheets can now target a specific sheet or cell range instead of only the first sheet. |
| 2019-08-22 | Automatic reclustering of clustered tables |  | BigQuery now automatically reclusters all clustered tables. |
| 2019-08-05 | BigQuery Storage API Arrow format reading |  | The BigQuery Storage API now supports reading data in ARROW format. |
| 2019-07-19 | Scheduled queries |  | The scheduled query capability in BigQuery is now generally available; BigQuery now supports scheduling queries in Beta. |
| 2019-07-02 | BigQuery ML TensorFlow model import |  | BigQuery ML now supports importing TensorFlow models. |
| 2019-07-01 | Persistent BigQuery UDFs |  | BigQuery now supports persistent user-defined functions (UDFs). |
| 2019-06-17 | Amazon Redshift migration to BigQuery |  | BigQuery now supports migrations from Amazon Redshift data warehouses. |
| 2019-06-03 | BigQuery INSERT and MERGE without column names |  | BigQuery now allows omitting column names in INSERT and MERGE statements. |
| 2019-05-29 | BigQuery ML |  | BigQuery ML has reached general availability; BigQuery ML is now available in Beta. |
| 2019-05-15 | BigQuery table clustering by GEOGRAPHY column |  | BigQuery tables can now be clustered using a GEOGRAPHY column. |
| 2019-05-14 | BigQuery ML DROP MODEL statement |  | BigQuery ML now supports the DROP MODEL DDL statement for removing trained models. |
| 2019-05-06 | BigQuery ML IAM permissions |  | BigQuery ML IAM permissions were introduced, with an effective date for enforced enforcement on June 6, 2019. |
| 2019-04-29 | BigQuery BI Engine |  | BigQuery BI Engine expanded availability to additional regions including Los Angeles, Montreal, Northern Virginia, São Paulo, Zurich, Hong Kong, Mumbai, Taiwan, Singapore, and Sydney; BigQuery BI Engine entered beta availability. |
| 2019-04-18 | BigQuery regional availability |  | BigQuery became available in the Osaka (asia-northeast2) region. |
| 2019-04-10 | BigQuery clustered tables |  | Support for clustered tables in BigQuery became generally available; BigQuery introduced support for clustered tables in the Alpha release stage. |
| 2019-04-10 | BigQuery Data Transfer Service Amazon S3 support |  | BigQuery Data Transfer Service added support for transferring data into BigQuery from Amazon S3, with Amazon S3 transfers in beta. |
| 2019-04-10 | BigQuery ML k-means model support |  | BigQuery ML added support for the k-means model type for clustering and customer segmentation. |
| 2019-04-10 | BigQuery Standard SQL AEAD functions |  | BigQuery Standard SQL added support for AEAD encryption functions. |
| 2019-04-10 | BigQuery third-party data source transfers |  | BigQuery introduced beta support for loading data from external third-party data sources via transfers. |
| 2019-04-10 | BigQuery web UI in Cloud Console |  | The BigQuery web UI in the Google Cloud Console became generally available. |
| 2019-04-05 | BigQuery Data Transfer Service in Cloud Console |  | BigQuery Data Transfer Service became available in beta within the Google Cloud Console. |
| 2019-04-04 | BigQuery Geographic Information Systems (GIS) |  | BigQuery Geographic Information Systems (GIS) became generally available. |
| 2019-04-04 | BigQuery ML IAM permissions model |  | BigQuery ML changed IAM behavior so model permissions are handled with dedicated permissions and can be managed separately from table permissions, including new custom-role enforcement starting June 6, 2019. |
| 2019-03-27 | BigQuery Data Transfer Service on-premises warehouse migration |  | BigQuery Data Transfer Service now enables migrations from on-premises data warehouses to BigQuery using a dedicated migration agent. |
| 2019-03-27 | Teradata migration support in BigQuery Data Transfer Service |  | BigQuery Data Transfer Service added support for migrations from Teradata as a source. |
| 2019-03-11 | BigQuery availability in europe-west6 (Zurich) |  | BigQuery became available in the europe-west6 (Zurich) region. |
| 2019-03-01 | BigQuery dataset access control in Cloud Console UI |  | The Cloud Console BigQuery web UI gained support for assigning access controls to datasets. |
| 2019-02-25 | BigQuery DML MERGE statement support |  | BigQuery added general availability of DML MERGE statements. |
| 2019-02-25 | Save BigQuery query results to Google Drive |  | BigQuery users can save query results to Google Drive from the Cloud Console web UI. |
| 2019-02-15 | BigQuery availability in southamerica-east1 (São Paulo) |  | BigQuery became available in the southamerica-east1 (São Paulo) region. |
| 2019-02-04 | ALTER TABLE support for table and view options in BigQuery DDL |  | BigQuery DDL added ALTER TABLE statement support to set options on tables and views. |
| 2019-02-04 | BigQuery INFORMATION_SCHEMA metadata views |  | BigQuery introduced INFORMATION_SCHEMA views for retrieving BigQuery resource metadata. |
| 2019-01-31 | BigQuery Sandbox |  | BigQuery Sandbox became available so users can try BigQuery without a credit card or billing account. |
| 2019-01-29 | BigQuery ML linear regression optimization methods |  | BigQuery ML added support for automatic, batch gradient descent, and normal equation optimization for linear regression models. |
| 2019-01-28 | BigQuery availability in us-west2 and asia-east2 |  | BigQuery became available in the us-west2 (Los Angeles) and asia-east2 (Hong Kong) regions. |
| 2019-01-22 | BigQuery Audit Logging with BigQueryAuditMetadata format |  | BigQuery audit logging now writes enhanced log messages using the BigQueryAuditMetadata format. |
| 2018-12-18 | BigQuery regional availability in Montreal (northamerica-northeast1) |  | BigQuery became available in the Montreal region (northamerica-northeast1). |
| 2018-12-18 | BigQuery regional availability in Mumbai (asia-south1) |  | BigQuery became available in the Mumbai region (asia-south1). |
| 2018-12-13 | BigQuery ML PREDICT binary logistic regression thresholds |  | The BigQuery ML ML.PREDICT function now supports thresholds for binary logistic regression models. |
| 2018-12-13 | BigQuery ML WEIGHTS standardization |  | The BigQuery ML ML.WEIGHTS function now supports standardization. |
| 2018-12-05 | BigQuery Avro logical type conversion |  | BigQuery now supports converting Avro logical types during Avro data loads. |
| 2018-12-05 | BigQuery default partition expiration on datasets |  | BigQuery now supports setting or updating default partition expiration time at the dataset level. |
| 2018-11-13 | BigQuery regional availability in Singapore (asia-southeast1) |  | BigQuery became available in the Singapore region (asia-southeast1). |
| 2018-10-29 | BigQuery predefined IAM role bigquery.metadataViewer |  | BigQuery now supports the predefined IAM role bigquery.metadataViewer. |
| 2018-10-22 | BigQuery regional availability in Sydney (australia-southeast1) |  | BigQuery became available in the Sydney region (australia-southeast1). |
| 2018-10-17 | BigQuery sandbox for Firebase |  | BigQuery for Firebase sandbox support allows testing without a credit card or billing account and is now in beta. |
| 2018-10-10 | BigQuery DML for partitioned tables |  | BigQuery now supports DML statements against partitioned tables under general availability. |
| 2018-10-10 | BigQuery regional availability in London (europe-west2) |  | BigQuery became available in the London region (europe-west2). |
| 2018-10-10 | Date/timestamp partitioned tables |  | BigQuery supports table partitioning by DATE or TIMESTAMP columns. |
| 2018-09-19 | BigQuery ML in Tokyo region |  | BigQuery ML is available in the Tokyo (asia-northeast1) region. |
| 2018-09-13 | BigQuery ML ML.CONFUSION_MATRIX function |  | BigQuery ML now supports the ML.CONFUSION_MATRIX evaluation function. |
| 2018-09-13 | BigQuery ML multiclass logistic regression |  | BigQuery ML supports multiclass logistic regression models. |
| 2018-09-10 | BigQuery GIS |  | BigQuery Geographic Information Systems (BigQuery GIS) is now available in Beta. |
| 2018-09-10 | ORC format loading |  | BigQuery supports loading data in ORC format. |
| 2018-08-20 | Cloud Firestore data query from Cloud Storage |  | BigQuery supports querying Cloud Firestore data stored in Cloud Storage. |
| 2018-08-20 | Cloud Firestore export loading |  | BigQuery supports loading data from Cloud Firestore exports. |
| 2018-08-20 | NUMERIC data type |  | The NUMERIC data type is generally available in BigQuery. |
| 2018-07-30 | Table clustering |  | BigQuery supports clustered tables. |
| 2018-07-25 | BigQuery DDL support |  | BigQuery data definition language (DDL) support is generally available. |
| 2018-07-19 | BigQuery web UI in Google Cloud Console |  | The BigQuery web interface in the Google Cloud Console entered a Beta release. |
| 2018-07-18 | Google Play reports support in BigQuery |  | BigQuery added Beta support for importing and querying Google Play reports. |
| 2018-07-11 | BigQuery Data Transfer Service for Google Ads |  | The BigQuery Data Transfer Service integration for Google Ads became generally available. |
| 2018-06-28 | BigQuery Standard SQL FROM_BASE32 and TO_BASE32 functions |  | BigQuery Standard SQL added support for the FROM_BASE32 and TO_BASE32 functions. |
| 2018-06-28 | BigQuery Standard SQL GENERATE_TIMESTAMP_ARRAY function |  | BigQuery Standard SQL added support for the GENERATE_TIMESTAMP_ARRAY function. |
| 2018-06-28 | BigQuery Standard SQL templated SQL UDFs |  | BigQuery Standard SQL added support for templated SQL user-defined functions. |
| 2018-06-27 | BigQuery Data Transfer Service YouTube reporting support |  | BigQuery Data Transfer Service added generally available support for YouTube Channel and YouTube Content Owner reports. |
| 2018-06-18 | BigQuery ORC data loading |  | BigQuery added Beta support for loading data in ORC format. |
| 2018-06-18 | BigQuery Parquet data loading |  | BigQuery added Generally Available support for loading data in Parquet format. |
| 2018-05-15 | BigQuery NUMERIC data type |  | BigQuery added Beta support for the NUMERIC data type. |
| 2018-04-17 | BigQuery availability in Tokyo (asia-northeast1) region |  | BigQuery became available in the Tokyo (asia-northeast1) region. |
| 2018-04-17 | BigQuery jobs.listAll permission |  | BigQuery added the bigquery.jobs.listAll permission, while retaining bigquery.jobs.list with cross-user redacted metadata. |
| 2018-04-10 | BigQuery support for DML MERGE statements |  | BigQuery added support for DML MERGE statements, initially in beta. |
| 2018-04-06 | Google Ad Manager transfer support for API v201802 |  | BigQuery transfer support for Google Ad Manager was added for API version v201802. |
| 2018-03-30 | BigQuery Stackdriver slot-usage monitoring by job type |  | BigQuery added support for monitoring slot usage by job type in Stackdriver. |
| 2018-03-30 | BigQuery standard SQL ERROR function |  | BigQuery standard SQL added the ERROR function for returning errors. |
| 2018-03-30 | BigQuery standard SQL SAFE prefix |  | BigQuery standard SQL added the SAFE prefix for suppressing errors in expressions. |
| 2018-03-05 | BigQuery CREATE TABLE AS SELECT via DDL |  | BigQuery DDL gained support for creating tables from query results. |
| 2018-03-05 | BigQuery DML support for partitioned tables |  | BigQuery added support for using DML statements with partitioned tables in beta. |
| 2018-03-01 | BigQuery Parquet load support |  | BigQuery added beta support for loading Parquet files. |
| 2018-02-16 | BigQuery Google Ads transfers support for MCC accounts |  | BigQuery transfer support for Google Ads was extended to manager accounts (MCCs). |
| 2018-02-15 | BigQuery Data Transfer Service run notifications |  | BigQuery Data Transfer Service added support for run notifications in alpha. |
| 2018-02-08 | BigQuery partitioning by TIMESTAMP or DATE column |  | BigQuery added beta support for tables partitioned by TIMESTAMP or DATE columns. |
| 2018-01-17 | BigQuery data definition language support |  | BigQuery added support for data definition language (DDL), initially in beta. |
| 2018-01-08 | BigQuery Data Transfer Service Google Ads report support |  | BigQuery Data Transfer Service now supports additional Google Ads report types such as Age Range Performance, Criteria Performance, Gender Performance, Bid Goal Performance, Budget Performance, and Parental Status reports. |
| 2018-01-05 | ISO week and ISO year date-part support in BigQuery date functions |  | BigQuery now supports ISOWEEK and ISOYEAR date parts in DATE_TRUNC, DATETIME_TRUNC, TIMESTAMP_TRUNC, DATE_DIFF, and DATETIME_DIFF. |
| 2017-12-11 | BigQuery Data Transfer Service Configure Jobs for YouTube reporting |  | BigQuery now offers a Configure Jobs option so Data Transfer Service can manage YouTube Channel and Content Owner reporting jobs automatically. |
| 2017-12-11 | BigQuery Google Ads transfer excludes removed or deleted items option |  | BigQuery Google Ads transfers now allow users to exclude removed or deleted items during transfer setup. |
| 2017-12-04 | BigQuery web UI query history filter dimensions |  | The BigQuery web UI added additional dimensions for filtering query history. |
| 2017-11-30 | _PARTITIONTIME support in wildcard queries for partitioned tables |  | BigQuery now supports the _PARTITIONTIME pseudo column when querying partitioned tables with wildcard table names. |
| 2017-11-30 | BigQuery EXTRACT WEEK date part support |  | BigQuery now supports WEEK as a valid date part in the EXTRACT function. |
| 2017-11-30 | BigQuery FARM_FINGERPRINT function in Legacy SQL |  | BigQuery now supports the FARM_FINGERPRINT function in Legacy SQL. |
| 2017-11-30 | BigQuery IAM custom roles |  | IAM custom roles are now available for BigQuery. |
| 2017-11-30 | BigQuery Standard SQL DISTINCT set operators |  | BigQuery Standard SQL now supports INTERSECT DISTINCT and EXCEPT DISTINCT as set operators. |
| 2017-11-16 | BigQuery Data Transfer Service general availability |  | BigQuery Data Transfer Service reached general availability. |
| 2017-11-02 | BigQuery analytic functions NULLS modifiers |  | BigQuery now supports the IGNORE NULLS and RESPECT NULLS modifiers for FIRST_VALUE, LAST_VALUE, and NTH_VALUE. |
| 2017-11-02 | FOR SYSTEM_TIME AS OF in FROM clause |  | BigQuery Standard SQL now supports the FOR SYSTEM_TIME AS OF expression in the FROM clause. |
| 2017-09-29 | GROUP BY ROLLUP |  | GROUP BY ROLLUP is now supported in BigQuery Standard SQL. |
| 2017-09-28 | Ingestion-time partitioned tables via write/load options |  | BigQuery added support for creating ingestion-time partitioned tables by setting partitioning options when writing query results or loading data. |
| 2017-09-28 | NORMALIZE function |  | The NORMALIZE string function is now supported in BigQuery Standard SQL. |
| 2017-09-28 | NORMALIZE_AND_CASEFOLD function |  | The NORMALIZE_AND_CASEFOLD string function is now supported in BigQuery Standard SQL. |
| 2017-09-01 | PERCENTILE_CONT |  | BigQuery Standard SQL now supports the PERCENTILE_CONT analytic function. |
| 2017-09-01 | PERCENTILE_DISC |  | BigQuery Standard SQL now supports the PERCENTILE_DISC analytic function. |
| 2017-08-11 | CORR OVER support |  | The CORR statistical aggregate now supports the OVER clause in BigQuery Standard SQL. |
| 2017-08-11 | COVAR_POP OVER support |  | The COVAR_POP statistical aggregate now supports the OVER clause in BigQuery Standard SQL. |
| 2017-08-11 | COVAR_SAMP OVER support |  | The COVAR_SAMP statistical aggregate now supports the OVER clause in BigQuery Standard SQL. |
| 2017-08-02 | EXTRACT ISOWEEK |  | BigQuery Standard SQL now supports the ISOWEEK date part in the EXTRACT function. |
| 2017-08-02 | EXTRACT ISOYEAR |  | BigQuery Standard SQL now supports the ISOYEAR date part in the EXTRACT function. |
| 2017-08-02 | EXTRACT WEEK |  | BigQuery Standard SQL now supports the WEEK date part in the EXTRACT function. |
| 2017-07-27 | Snappy codec for Avro compressed data blocks |  | BigQuery announced availability of the Snappy codec for Avro compressed data blocks. |
| 2017-07-26 | FROM_HEX function |  | The FROM_HEX function is now available in BigQuery Standard SQL. |
| 2017-07-26 | TO_HEX function |  | The TO_HEX function is now available in BigQuery Standard SQL. |
| 2017-07-13 | DML support for tables with required fields |  | BigQuery added support for modifying tables that contain required fields using DML statements. |
| 2017-06-19 | and Population Data public dataset |  | BigQuery announced the availability of the World Bank Global Health, Nutrition, and Population Data public dataset. |
| 2017-06-19 | Nutrition |  | BigQuery announced the availability of the World Bank Global Health, Nutrition, and Population Data public dataset. |
| 2017-06-19 | World Bank: Education Data public dataset |  | BigQuery announced the availability of the World Bank Education Data public dataset. |
| 2017-06-19 | World Bank: Global Health |  | BigQuery announced the availability of the World Bank Global Health, Nutrition, and Population Data public dataset. |
| 2017-06-19 | World Bank: International Debt Data public dataset |  | BigQuery announced the availability of the World Bank International Debt Data public dataset. |
| 2017-06-07 | BigQuery public dataset: NHTSA Traffic Fatality Data |  | BigQuery introduced the NHTSA Traffic Fatality Data as a new public dataset. |
| 2017-06-06 | BigQuery public dataset: OpenAQ Real-time Air Quality Data |  | BigQuery introduced OpenAQ Real-time Air Quality Data as a new public dataset. |
| 2017-06-05 | Standard SQL support for OVER clause in statistical aggregate functions |  | BigQuery Standard SQL now supports using the OVER clause with statistical aggregate functions including STDDEV, STDDEV_POP, STDDEV_SAMP, VAR_POP, VAR_SAMP, and VARIANCE. |
| 2017-06-02 | Standard SQL TO_JSON_STRING function |  | BigQuery Standard SQL added support for the TO_JSON_STRING function. |
| 2017-05-23 | BigQuery Data Transfer Service transfers troubleshooting documentation |  | BigQuery added a troubleshooting documentation page focused on BigQuery Data Transfer Service transfer operations. |
| 2017-05-23 | BigQuery Data Transfer Service troubleshooting documentation |  | BigQuery added a general troubleshooting documentation page for BigQuery Data Transfer Service. |
| 2017-05-22 | BigQuery public dataset: Healthcare Common Procedure Coding System (HCPCS) Level II |  | BigQuery introduced the Healthcare Common Procedure Coding System (HCPCS) Level II as a new public dataset. |
| 2017-05-17 | BigQuery free-tier storage pricing |  | BigQuery announced free-tier pricing for storage. |
| 2017-05-12 | BigQuery public dataset: NOAA ICOADS Data |  | BigQuery introduced NOAA ICOADS Data as a new public dataset. |
| 2017-05-12 | BigQuery public dataset: RxNorm |  | BigQuery introduced RxNorm as a new public dataset. |
| 2017-05-12 | BigQuery public dataset: United States Census Bureau International Data |  | BigQuery introduced the United States Census Bureau International Data as a new public dataset. |
| 2017-05-10 | BigQuery IAM role: bigquery.jobUser |  | BigQuery added a new IAM role named bigquery.jobUser. |
| 2017-05-05 | BigQuery public dataset: Chicago Taxi Trips Data |  | BigQuery introduced the Chicago Taxi Trips Data as a new public dataset. |
| 2017-05-02 | BigQuery public dataset: Chicago Crime Data |  | BigQuery introduced the Chicago Crime Data as a new public dataset. |
| 2017-05-02 | BigQuery public dataset: EPA Historical Air Quality Data |  | BigQuery introduced the EPA Historical Air Quality Data as a new public dataset. |
| 2017-04-20 | BigQuery public dataset: United States Census Data |  | BigQuery now includes the United States Census Data public dataset. |
| 2017-03-31 | BigQuery public dataset: 1000 Cannabis Genomes Project |  | BigQuery now includes the 1000 Cannabis Genomes Project public dataset. |
| 2017-03-16 | BigQuery Standard SQL ARRAY_REVERSE function |  | BigQuery Standard SQL added support for the ARRAY_REVERSE function across STRING, BYTES, and ARRAY values. |
| 2017-03-16 | BigQuery Standard SQL REVERSE function |  | BigQuery Standard SQL added support for the REVERSE function across STRING, BYTES, and ARRAY values. |
| 2017-03-15 | BigQuery HyperLogLog++ functions |  | BigQuery Standard SQL added HyperLogLog++-based functions for estimating unique values in large datasets. |
| 2017-03-15 | Window/analytic mode for ARRAY_AGG and STRING_AGG |  | BigQuery Standard SQL now supports window (analytic) mode for ARRAY_AGG and STRING_AGG via the OVER clause. |
| 2017-03-09 | BigQuery Data Transfer Service beta availability |  | BigQuery Data Transfer Service was announced as available in beta. |
| 2017-03-08 | BigQuery public dataset: Bay Area Bike Share Trips Data |  | BigQuery now includes the Bay Area Bike Share Trips public dataset. |
| 2017-03-08 | BigQuery public dataset: San Francisco 311 Service Requests Data |  | BigQuery now includes the San Francisco 311 Service Requests public dataset. |
| 2017-03-08 | BigQuery public dataset: San Francisco Fire Department Service Calls Data |  | BigQuery now includes the San Francisco Fire Department Service Calls public dataset. |
| 2017-03-08 | BigQuery public dataset: San Francisco Police Reports Data |  | BigQuery now includes the San Francisco Police Reports public dataset. |
| 2017-03-08 | BigQuery public dataset: San Francisco Street Trees Data |  | BigQuery now includes the San Francisco Street Trees public dataset. |
| 2017-03-08 | BigQuery Standard SQL DML for non-partitioned tables |  | BigQuery Standard SQL introduced general availability of DML support for non-partitioned tables. |
| 2017-03-08 | BigQuery Standard SQL IGNORE NULLS/RESPECT NULLS in APPROX_QUANTILES |  | BigQuery Standard SQL now supports IGNORE NULLS and RESPECT NULLS modifiers for APPROX_QUANTILES. |
| 2017-03-08 | BigQuery Standard SQL IGNORE NULLS/RESPECT NULLS in ARRAY_AGG |  | BigQuery Standard SQL now supports IGNORE NULLS and RESPECT NULLS modifiers for ARRAY_AGG. |
| 2017-03-08 | Querying Google Cloud Bigtable external data sources in BigQuery |  | BigQuery added beta support for querying Google Cloud Bigtable as external data sources. |
| 2017-02-01 | BigQuery public dataset: New York City Tree Census |  | BigQuery announced the availability of the New York City Tree Census public dataset. |
| 2017-02-01 | BigQuery public dataset: US Bureau of Labor Statistics |  | BigQuery added the US Bureau of Labor Statistics public dataset. |
| 2017-02-01 | BigQuery Standard SQL BIT_COUNT function |  | BigQuery Standard SQL added the BIT_COUNT function for BYTES processing. |
| 2017-02-01 | BigQuery Standard SQL BYTES bitwise operators |  | BigQuery Standard SQL added support for bitwise operators on BYTES values. |
| 2017-02-01 | BigQuery Standard SQL FARM_FINGERPRINT function |  | BigQuery Standard SQL added the FARM_FINGERPRINT fingerprinting function. |
| 2017-02-01 | BigQuery Standard SQL LPAD function |  | BigQuery Standard SQL added the LPAD string function. |
| 2017-02-01 | BigQuery Standard SQL NET.IP_FROM_STRING function |  | BigQuery Standard SQL added the NET.IP_FROM_STRING function for IP address handling. |
| 2017-02-01 | BigQuery Standard SQL NET.IP_NET_MASK function |  | BigQuery Standard SQL added the NET.IP_NET_MASK function for IP network mask operations. |
| 2017-02-01 | BigQuery Standard SQL NET.IP_TO_STRING function |  | BigQuery Standard SQL added the NET.IP_TO_STRING function for converting IP addresses to string form. |
| 2017-02-01 | BigQuery Standard SQL NET.IP_TRUNC function |  | BigQuery Standard SQL added the NET.IP_TRUNC function for truncating IP addresses. |
| 2017-02-01 | BigQuery Standard SQL NET.IPV4_FROM_INT64 function |  | BigQuery Standard SQL added the NET.IPV4_FROM_INT64 function to convert INT64 values to IPv4 addresses. |
| 2017-02-01 | BigQuery Standard SQL NET.IPV4_TO_INT64 function |  | BigQuery Standard SQL added the NET.IPV4_TO_INT64 function to convert IPv4 addresses to INT64 values. |
| 2017-02-01 | BigQuery Standard SQL NET.SAFE_IP_FROM_STRING function |  | BigQuery Standard SQL added the NET.SAFE_IP_FROM_STRING function for IP parsing. |
| 2017-02-01 | BigQuery Standard SQL REPEAT function |  | BigQuery Standard SQL added the REPEAT string function. |
| 2017-02-01 | BigQuery Standard SQL RPAD function |  | BigQuery Standard SQL added the RPAD string function. |
| 2017-02-01 | Copying non-partitioned tables to partitioned tables |  | BigQuery added support for copying non-partitioned tables into partitioned tables. |
| 2016-12-22 | BigQuery CSV load jobs custom null markers |  | BigQuery added support for custom null markers in CSV load jobs. |
| 2016-12-22 | BigQuery public dataset: New York City Citi Bike Trips |  | BigQuery announced the availability of the New York City Citi Bike Trips public dataset. |
| 2016-12-22 | BigQuery public dataset: NYC 311 Service Requests |  | BigQuery announced the availability of the NYC 311 Service Requests public dataset. |
| 2016-12-22 | BigQuery public dataset: NYPD Motor Vehicle Collisions |  | BigQuery announced the availability of the NYPD Motor Vehicle Collisions public dataset. |
| 2016-12-22 | BigQuery Standard SQL ARRAY_AGG ORDER BY and LIMIT support |  | BigQuery Standard SQL added support for ORDER BY and LIMIT clauses inside ARRAY_AGG. |
| 2016-12-22 | BigQuery Standard SQL ARRAY_CONCAT_AGG ORDER BY and LIMIT support |  | BigQuery Standard SQL added support for ORDER BY and LIMIT clauses inside ARRAY_CONCAT_AGG. |
| 2016-12-22 | BigQuery Standard SQL CODE_POINTS_TO_BYTES function |  | BigQuery Standard SQL added the CODE_POINTS_TO_BYTES function for converting code points to bytes. |
| 2016-12-22 | BigQuery Standard SQL CODE_POINTS_TO_STRING function |  | BigQuery Standard SQL added the CODE_POINTS_TO_STRING function for converting code points to strings. |
| 2016-12-22 | BigQuery Standard SQL hash functions |  | BigQuery Standard SQL added support for hash functions. |
| 2016-12-22 | BigQuery Standard SQL parameterized queries |  | BigQuery Standard SQL added support for parameterized queries to reduce SQL injection risk from user input. |
| 2016-12-22 | BigQuery Standard SQL STRING_AGG ORDER BY and LIMIT support |  | BigQuery Standard SQL added support for ORDER BY and LIMIT clauses inside STRING_AGG. |
| 2016-12-22 | BigQuery Standard SQL TO_CODE_POINTS function |  | BigQuery Standard SQL added the TO_CODE_POINTS function for converting strings to code points. |
| 2016-12-22 | BigQuery Standard SQL URL functions |  | BigQuery Standard SQL introduced URL-related functions. |
| 2016-11-30 | IRS Form 990 public dataset |  | BigQuery made the IRS Form 990 public dataset available for querying. |
| 2016-11-30 | JSON functions in BigQuery standard SQL |  | BigQuery added JSON functions support in standard SQL. |
| 2016-11-07 | Medicare Data public dataset |  | BigQuery added a new public Medicare Data dataset. |
| 2016-11-02 | Open Images Data public dataset |  | BigQuery added a new public Open Images Data dataset. |
| 2016-11-01 | BigQuery JDBC drivers |  | BigQuery announced JDBC driver availability for client connectivity. |
| 2016-11-01 | Major League Baseball Data public dataset |  | BigQuery made a new public Major League Baseball Data dataset available. |
| 2016-11-01 | SAFE_CAST functions in BigQuery standard SQL |  | BigQuery added standard SQL safe casting functions that return NULL instead of errors on invalid casts. |
| 2016-11-01 | SQL dialect selection via query prefix |  | BigQuery enabled selecting legacy SQL or standard SQL using a query prefix. |
| 2016-09-29 | BigQuery flat-rate pricing |  | BigQuery introduced flat-rate pricing that provides unlimited querying for a fixed monthly price. |
| 2016-09-29 | BigQuery Stackdriver Monitoring integration |  | BigQuery added Stackdriver Monitoring integration to monitor BigQuery resources with charts and alerts based on BigQuery metrics. |
| 2016-09-29 | BigQuery standard SQL general availability |  | BigQuery declared standard SQL generally available, based on SQL:2011 with nested and repeated data support. |
| 2016-09-29 | Saved and shared queries |  | BigQuery added the ability to save and share queries. |
| 2016-09-29 | Standard SQL DML in BigQuery |  | BigQuery introduced DML support in standard SQL for inserting, updating, and deleting data. |
| 2016-08-26 | BigQuery predefined IAM roles access |  | Updated beta predefined IAM roles for BigQuery were made accessible to all users. |
| 2016-07-27 | BigQuery dataset labels |  | BigQuery added support for labeling datasets through the BigQuery API or command-line tool. |
| 2016-06-02 | BigQuery IAM roles (beta) |  | BigQuery announced a beta preview of Product Identity and Access Management (IAM) roles. |
| 2016-06-02 | BigQuery standard SQL (beta) |  | BigQuery announced beta availability of standard SQL based on SQL 2011 with extensions for nested and repeated data. |
| 2016-06-02 | BigQuery time-partitioned tables |  | BigQuery added support for time-partitioned tables. |
| 2016-05-06 | BigQuery Google Drive federated data source support |  | BigQuery added support for Google Drive as a federated data source that can be queried. |
| 2016-05-06 | BigQuery query results to Google Sheets |  | BigQuery added the capability to save query results to Google Sheets. |
| 2016-03-23 | BigQuery Avro source format support |  | BigQuery added support for Avro as a source format for load operations and as a federated data source via API and command-line tooling. |
| 2016-03-23 | BigQuery BYTES data type |  | BigQuery added support for the BYTES data type. |
| 2016-03-23 | BigQuery long-term storage pricing |  | BigQuery introduced long-term storage pricing. |
| 2016-03-23 | BigQuery public datasets |  | BigQuery announced the availability of BigQuery Public Datasets. |
| 2016-03-23 | BigQuery schema auto-detection for federated CSV/JSON sources |  | BigQuery can automatically detect schemas for federated CSV and JSON data when used through the API or command-line tool. |
| 2015-12-15 | BigQuery Audit Log analysis |  | BigQuery added support for analyzing Google Cloud Audit logs to track usage and access activity. |
| 2015-12-15 | BigQuery custom quotas and project-wide billing alerts |  | BigQuery introduced custom quotas with project-wide alerts to help prevent runaway spending. |
| 2015-12-15 | BigQuery immediate queryability for streaming inserts |  | BigQuery removed warm-up delay so streaming data can be queried within seconds of first insertion. |
| 2015-12-15 | BigQuery Query Explain |  | BigQuery added Query Explain to show stage-by-stage execution details for queries. |
| 2015-12-15 | BigQuery Streaming API support in EU locations |  | BigQuery introduced Streaming API availability in EU regions. |
| 2015-12-15 | BigQuery template tables for Streaming API |  | BigQuery added template tables to manage related tables used for streaming workflows. |
| 2015-08-25 | BigQuery federated querying of CSV/JSON data from Cloud Storage |  | BigQuery added the ability to query CSV and JSON data directly from Google Cloud Storage. |
| 2015-08-25 | BigQuery Format Query action |  | BigQuery added a Format Query button in the web UI to format query text. |
| 2015-08-25 | BigQuery job cancellation |  | BigQuery added the ability to cancel running jobs. |
| 2015-08-25 | BigQuery streaming buffer statistics |  | BigQuery added streaming buffer statistics for tables receiving streaming inserts to show table size and availability. |
| 2015-08-25 | BigQuery UI collapsed view for date-suffixed tables |  | The BigQuery web UI now collapses tables with date-suffix names in the navigation panel. |
| 2015-08-25 | BigQuery user-defined function (UDF) support |  | BigQuery added support for user-defined functions in the web UI; BigQuery added support for user-defined functions (UDFs). |
| 2015-04-16 | BigQuery data loading from Google Cloud Datastore |  | BigQuery added the ability to load data from Google Cloud Datastore. |
| 2015-04-16 | BigQuery table undeletion via table decorators |  | BigQuery added the ability to undelete a table using table decorators. |
| 2014-03-25 | Batch query scheduling |  | BigQuery batch query jobs now begin when idle resources are available and are promoted to interactive priority if not started within three hours. |
| 2014-03-25 | CROSS JOIN and multiple JOIN support |  | BigQuery improved JOIN capabilities by adding support for CROSS JOIN and multiple JOIN clauses. |
| 2014-03-25 | JSON functions |  | BigQuery introduced JSON functions to support JSON-oriented query operations. |
| 2014-03-25 | Parallel export |  | BigQuery added parallel export capability to improve data export performance. |
| 2014-03-25 | Table wildcard functions |  | BigQuery added table wildcard functions to query a specified set of tables efficiently. |
| 2014-03-25 | Views |  | BigQuery added support for views, which are virtual tables defined by SQL queries. |
| 2013-09-18 | Aggregate functions |  | BigQuery added new aggregate SQL functions for summarizing data. |
| 2013-09-18 | Streaming inserts |  | BigQuery added support for streaming inserts to load data continuously into tables. |
| 2013-09-18 | Table decorators |  | BigQuery added table decorators to support time-based table snapshots. |
| 2013-06-11 | Large query result support |  | BigQuery added support for returning large query results. |
| 2013-06-11 | Query caching |  | BigQuery introduced query caching to reuse results and improve repeated query performance. |
| 2013-06-11 | Window functions |  | BigQuery added support for window functions in SQL queries. |
| 2013-03-14 | GROUP EACH BY |  | Added the GROUP EACH BY SQL capability to support aggregations across highly distributed values. |
| 2013-03-14 | JOIN EACH |  | Added the JOIN EACH join syntax for joining tables regardless of input table size. |
| 2013-03-14 | Schema Update After Load |  | Added support for adding columns to an existing table schema after data is loaded via the Tables.update API. |
| 2013-03-14 | TIMESTAMP Data Type |  | Added native TIMESTAMP data type support in BigQuery. |
| 2012-10-01 | JSON and Nested/Repeated Field Import |  | Added API support for importing JSON files with nested and repeated field structures. |
| 2012-08-28 | Batch Queries |  | Introduced batch query execution that runs asynchronously on a delayed schedule and uses lower pricing than interactive queries. |
| 2012-08-28 | BigQuery Connector for Excel |  | Released the BigQuery Connector for Excel to enable querying BigQuery directly from Microsoft Excel. |
| 2012-08-17 | CSV Import Chunking for Quoted Newlines |  | Added CSV import chunking so large imports with quoted newlines can be processed in parallel via the bq tool or API. |
| 2012-07-16 | BigQuery Browser Tool Favicon |  | Updated the BigQuery Browser Tool interface with a new favicon. |
| 2012-07-16 | BigQuery Browser Tool Query Editor Drag Handle |  | Added a drag handle to resize the separator beneath the BigQuery Browser Tool query editor. |
| 2012-07-16 | BigQuery Browser Tool Syntax Highlighting |  | Added syntax highlighting support to the BigQuery Browser Tool. |
| 2012-05-30 | Token-Based Pagination for API List Operations |  | Added token-based pagination for list APIs to iterate through a consistent table snapshot. |
| 2012-02-01 | BigQuery Cloud Storage gzip load support |  | BigQuery loading jobs gained support for ingesting gzip-compressed files directly from Google Cloud Storage. |
| 2012-02-01 | BigQuery multibyte UTF-8 handling |  | BigQuery improved handling of multibyte UTF-8 character data. |
| 2012-02-01 | BigQuery project dropdown current-project highlighting |  | BigQuery now highlights the currently selected project in the projects drop-down menu. |
| 2012-02-01 | BigQuery query panel previous results |  | BigQuery added an option in the query panel to show previous query results. |
| 2012-02-01 | BigQuery unreadable file detection |  | BigQuery improved error handling by detecting unreadable files more quickly during load operations. |
| 2011-11-01 | BigQuery Web UI JSON schema Create Table support |  | The BigQuery Web UI now allows JSON-formatted schemas in the Create Table dialog. |
| 2011-10-01 | BigQuery API v2 release |  | BigQuery introduced version 2 of its REST API. |
| 2011-10-01 | BigQuery CSV export to Cloud Storage |  | BigQuery added support for exporting tables or query results to CSV files in Google Cloud Storage. |
| 2011-10-01 | BigQuery dataset ACL support |  | BigQuery added ACL support for groups of tables, also referred to as datasets. |
| 2011-10-01 | BigQuery JOIN statement support |  | BigQuery added support for SQL JOIN statements in queries. |
| 2011-10-01 | BigQuery object architecture |  | BigQuery introduced an object architecture for organizing tables, groups of tables, and queries. |
| 2011-10-01 | BigQuery web user interface |  | BigQuery introduced a new web user interface. |

Source file slug: `bigquery.md`

