# BigQuery

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 1096
Unique features: 1337

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-02 | Cloud resource connection DDL in GoogleSQL |  | GoogleSQL supports CREATE CONNECTION, ALTER CONNECTION SET OPTIONS, and DROP CONNECTION statements for managing Cloud resource connections. |
| 2026-04-02 | Connection and project access control in GoogleSQL |  | GoogleSQL supports connection user and PROJECT resource types in GRANT and REVOKE statements for managing connection and project access. |
| 2026-04-02 | Search index column granularity |  | BigQuery search indexes can store additional column information to optimize search query performance; BigQuery search indexes can now be created with column granularity to store more column information and improve query performance. |
| 2026-04-02 | Snowflake SQL to GoogleSQL translation |  | BigQuery Migration Service translates Snowflake SQL to GoogleSQL with broader SQL and data type support. |
| 2026-03-31 | OBJ.GET_READ_URL |  | The OBJ.GET_READ_URL function returns a STRUCT with a read URL and status information and can render image results in the Cloud console. |
| 2026-03-31 | OBJ.MAKE_REF metadata population |  | The OBJ.MAKE_REF function automatically fetches current Cloud Storage metadata and stores it in ref.details. |
| 2026-03-31 | ObjectRef direct and delegated access |  | BigQuery ObjectRef functions support both direct access and delegated access modes. |
| 2026-03-30 | AI.DETECT_ANOMALIES custom context window |  | The AI.DETECT_ANOMALIES function supports a custom context window for choosing how many recent data points the model uses. |
| 2026-03-30 | AI.EVALUATE time-series context window and MASE output |  | The AI.EVALUATE function supports a custom context window and outputs mean absolute scaled error for time series evaluation. |
| 2026-03-30 | AI.FORECAST latest timestamp parameter |  | The AI.FORECAST function supports specifying the latest timestamp value for forecasting. |
| 2026-03-30 | Non-incremental materialized views over Spanner |  | BigQuery can create non-incremental materialized views over Spanner data to cache results and improve query performance. |
| 2026-03-26 | EXPORT DATA to Spanner with Cloud resource connections |  | BigQuery EXPORT DATA statements can use Cloud resource connections to reverse ETL data into Spanner. |
| 2026-03-25 | BigQuery Migration Service MCP server |  | The BigQuery Migration Service MCP server lets users perform SQL translation, DDL generation, and translation explanation tasks. |
| 2026-03-25 | Hive managed table resource-level status reporting |  | BigQuery Data Transfer Service provides resource-level status reporting for Hive managed tables with progress tracking and table-specific error details. |
| 2026-03-25 | Snowflake migration assessment |  | BigQuery migration assessment for Snowflake evaluates the complexity of migrating from Snowflake to BigQuery. |
| 2026-03-24 | BigQuery Data Transfer Service remote MCP server |  | The BigQuery Data Transfer Service remote MCP server enables AI agents to create, manage, and run data transfers. |
| 2026-03-23 | AI.EMBED |  | The AI.EMBED function creates embeddings from text or image data in BigQuery; AI.EMBED converts text, images, audio, video, or documents into embeddings. |
| 2026-03-23 | AI.SIMILARITY |  | The AI.SIMILARITY function computes semantic similarity for text pairs, image pairs, and text-to-image pairs; AI.SIMILARITY computes semantic similarity between pairs of text, pairs of images, or text and image inputs. |
| 2026-03-23 | File-based data preparation sources |  | BigQuery data preparations can clean, transform, and enrich files from Cloud Storage and Google Drive. |
| 2026-03-19 | Routine operation organization policies |  | BigQuery supports custom organization policies to allow or deny specific operations on routines. |
| 2026-03-17 | Automatic deployment of open models to Vertex AI endpoints |  | BigQuery ML can automatically deploy open models to Vertex AI endpoints with managed lifecycle and reservation support. |
| 2026-03-16 | Global default location |  | BigQuery supports a global default location at the organization or project level when request location is unset or cannot be inferred. |
| 2026-03-11 | Query execution graph visualization |  | BigQuery provides a visual SQL-to-execution mapping with a heatmap to help understand and debug query performance. |
| 2026-03-09 | Chat with BigQuery results |  | BigQuery Studio lets users start conversations and chat directly with query results. |
| 2026-03-09 | Conversational analytics BigQuery ML function support |  | BigQuery conversational analytics supports BigQuery ML functions such as AI.FORECAST, AI.DETECT_ANOMALIES, and AI.GENERATE in conversational workflows. |
| 2026-03-09 | Conversational analytics job labels |  | Jobs initiated by BigQuery conversational analytics are labeled in Job History for filtering, auditing, and cost analysis. |
| 2026-03-09 | Conversational analytics ObjectRef support |  | BigQuery conversational analytics can use ObjectRef functions to reference and interact with unstructured Cloud Storage data. |
| 2026-03-09 | Conversational analytics partitioned table support |  | BigQuery conversational analytics can use partitioned tables and partition columns to optimize generated queries. |
| 2026-03-09 | Conversational analytics suggested questions |  | BigQuery conversational analytics suggests clickable follow-up questions in the Google Cloud console. |
| 2026-03-06 | Direct AI.EMBED support for gemini-embedding-001 |  | The AI.EMBED function can be used directly with the gemini-embedding-001 model endpoint. |
| 2026-03-06 | Pipelines & Connections page |  | The Pipelines & Connections page provides guided BigQuery-specific configuration workflows for data integration services. |
| 2026-03-06 | Remote embedding models for AI.GENERATE_EMBEDDING |  | BigQuery can create remote models from Vertex AI and deployed open embedding models for use with AI.GENERATE_EMBEDDING. |
| 2026-03-05 | Alternate VECTOR_SEARCH syntax for single vectors |  | BigQuery supports an alternate VECTOR_SEARCH syntax optimized for single-vector searches. |
| 2026-03-04 | Continuous queries to Spanner |  | BigQuery continuous queries can stream data to Spanner in real time. |
| 2026-03-04 | Replication monitoring metrics |  | Cloud Monitoring provides BigQuery metrics for dataset replication latency and network egress bytes in cross-region replication and managed disaster recovery. |
| 2026-02-24 | Conversational analytics glossary terms |  | BigQuery conversational analytics agents can use custom glossary terms and imported Dataplex business glossary terms to better interpret prompts. |
| 2026-02-23 | Dataset undeletion within time travel window |  | BigQuery can restore a deleted dataset to its previous state if it is still within the time travel window. |
| 2026-02-17 | Global queries |  | BigQuery global queries let a single query reference data stored in more than one region. |
| 2026-02-17 | MCP control with organization policies | 2026-03-17 | BigQuery is deprecating the use of organization policies with the gcp.managed.allowedMCPServices constraint to control MCP use in favor of IAM deny policies; deprecated on 2026-03-17. |
| 2026-02-12 | AI.CLASSIFY multi-label classification |  | The AI.CLASSIFY function supports classifying input into multiple categories. |
| 2026-02-12 | Custom output schema field descriptions |  | AI.GENERATE and AI.GENERATE_TABLE support descriptions for fields in custom output schemas. |
| 2026-02-12 | Dataset insights |  | BigQuery dataset insights generate summaries, relationship graphs, cross-table queries, and analytical suggestions for a dataset. |
| 2026-02-11 | Selective pipeline execution methods |  | BigQuery pipelines can be run as all tasks, selected tasks, or tasks matching selected tags. |
| 2026-02-09 | Configurable data documentation scan scope |  | BigQuery data documentation scans can be limited to generating SQL queries, descriptions, or all insights. |
| 2026-02-09 | Data documentation scan TTL |  | BigQuery data documentation scans support a time-to-live setting for automatic deletion after completion. |
| 2026-02-09 | One-time data documentation scans |  | BigQuery supports one-time data documentation scans that execute immediately when created. |
| 2026-02-04 | Column-level data policy association |  | BigQuery lets administrators associate data policies directly with columns for access control, masking, and transformations; Data policies can be associated directly with columns to control access and apply masking and transformation rules. |
| 2026-02-02 | Parameterized queries in query editor |  | The BigQuery query editor in the Google Cloud console supports passing parameterized queries. |
| 2026-01-29 | BigQuery ML model creation in Google Cloud console |  | Users can create BigQuery ML models directly in the Google Cloud console; BigQuery ML models can be created through the Google Cloud console user interface. |
| 2026-01-29 | Conversational analytics |  | BigQuery conversational analytics enables natural language analysis through sample agents, custom agents, and supported BigQuery ML functions; Conversational analytics lets users chat with BigQuery data, create custom agents, and access those agents outside BigQuery for natural-language analysis. |
| 2026-01-29 | RANDOM_HASH masking rule |  | BigQuery provides a predefined RANDOM_HASH data masking rule that uses a salted hash algorithm for stronger protection. |
| 2026-01-28 | Shopify connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer data from Shopify to BigQuery. |
| 2026-01-27 | Mailchimp connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer data from Mailchimp to BigQuery. |
| 2026-01-26 | Gemini Cloud Assist resource discovery |  | Gemini Cloud Assist can discover BigQuery resources across projects, including table schemas and data locations. |
| 2026-01-21 | Gemini Cloud Assist job history insights |  | Gemini Cloud Assist can answer questions about BigQuery job history, including slow and resource-intensive queries. |
| 2026-01-07 | BigQuery JDBC driver |  | The Google-developed open source JDBC driver lets Java applications connect to BigQuery. |
| 2026-01-06 | Date and time format options for CREATE EXTERNAL TABLE and LOAD DATA |  | CREATE EXTERNAL TABLE and LOAD DATA support custom date, datetime, time, and timestamp format options for source files. |
| 2026-01-06 | NULL marker options for CSV loads |  | CREATE EXTERNAL TABLE and LOAD DATA support null_markers to define which CSV strings represent NULL values. |
| 2026-01-06 | Source column matching for data loads |  | CREATE EXTERNAL TABLE and LOAD DATA support matching source columns to schema columns by name or position. |
| 2026-01-06 | Time zone option for CREATE EXTERNAL TABLE and LOAD DATA |  | CREATE EXTERNAL TABLE and LOAD DATA support a time_zone option for interpreting loaded data. |
| 2025-12-22 | PostgreSQL connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer data from PostgreSQL to BigQuery. |
| 2025-12-19 | Microsoft SQL Server connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer data from Microsoft SQL Server to BigQuery. |
| 2025-12-19 | MySQL connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer data from MySQL to BigQuery. |
| 2025-12-18 | Blob storage to BigLake Iceberg transfer |  | BigQuery Data Transfer Service can load data from blob storage sources into BigLake Iceberg tables in BigQuery. |
| 2025-12-18 | HubSpot connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer data from HubSpot to BigQuery. |
| 2025-12-18 | Klaviyo connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer data from Klaviyo to BigQuery. |
| 2025-12-16 | Oracle connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer data from Oracle to BigQuery. |
| 2025-12-10 | BigQuery remote MCP server |  | The BigQuery remote MCP server enables LLM agents to perform data-related tasks in BigQuery. |
| 2025-12-02 | AI.SEARCH |  | AI.SEARCH enables semantic search on tables that have autonomous embedding generation enabled. |
| 2025-12-02 | Autonomous embedding generation |  | Autonomous embedding generation maintains an embeddings column on a table from a source column and automatically updates embeddings when the source data changes. |
| 2025-12-01 | BigQuery Studio cross-organization Explorer search |  | BigQuery Studio Explorer search can show results from the current organization and lets users switch organizations from a drop-down menu. |
| 2025-11-26 | BigQuery Data Transfer Service incremental Salesforce transfers |  | BigQuery Data Transfer Service supports incremental data transfers from Salesforce to BigQuery. |
| 2025-11-24 | Dataform SQLX default project and dataset |  | Dataform SQLX options can define a default project and dataset for pipelines so all tasks inherit those defaults. |
| 2025-11-20 | BigQuery Agent Analytics plugin |  | The BigQuery Agent Analytics plugin for the Agent Development Kit exports agent interaction logs to BigQuery for analysis and visualization. |
| 2025-11-19 | Gemini SQL error fixing and explanation |  | Gemini in BigQuery can fix and explain errors in SQL queries. |
| 2025-11-19 | JSON_FLATTEN |  | JSON_FLATTEN extracts all non-array values from a JSON value, including values under consecutively nested arrays. |
| 2025-11-18 | AI.GENERATE |  | AI.GENERATE produces free-text or structured generative AI output from unstructured inputs such as text, images, audio, video, and documents; BigQuery ML now supports the AI.GENERATE function for Gemini-based text analysis. |
| 2025-11-18 | AI.GENERATE_BOOL |  | AI.GENERATE_BOOL generates boolean scalar values for filtering, scoring, and counting workflows; BigQuery ML now supports the AI.GENERATE_BOOL function for Gemini-based text analysis with boolean output. |
| 2025-11-18 | AI.GENERATE_DOUBLE |  | AI.GENERATE_DOUBLE generates numeric double scalar values for filtering, scoring, and counting workflows; BigQuery ML now supports the AI.GENERATE_DOUBLE function for Gemini-based text analysis with double output. |
| 2025-11-18 | AI.GENERATE_EMBEDDING |  | AI.GENERATE_EMBEDDING is the preferred table-valued function for generating embeddings with simplified column names compared with ML.GENERATE_EMBEDDING. |
| 2025-11-18 | AI.GENERATE_INT |  | AI.GENERATE_INT generates integer scalar values for filtering, scoring, and counting workflows; BigQuery ML now supports the AI.GENERATE_INT function for Gemini-based text analysis with integer output. |
| 2025-11-18 | AI.GENERATE_TABLE |  | AI.GENERATE_TABLE produces structured table output from unstructured inputs including text, images, audio, and video; BigQuery ML now supports AI.GENERATE_TABLE with output_schema to generate structured Gemini output that can be converted into tables. |
| 2025-11-18 | AI.GENERATE_TEXT |  | AI.GENERATE_TEXT is the preferred table-valued function for generating text output with simplified column names compared with ML.GENERATE_TEXT. |
| 2025-11-18 | Dataform BigLake Apache Iceberg table creation |  | Dataform can automatically create BigLake tables for Apache Iceberg in BigQuery. |
| 2025-11-18 | Dataplex Universal Catalog publishing for data insights |  | BigQuery can publish data insights, including query recommendations and generated table and column descriptions, to Dataplex Universal Catalog. |
| 2025-11-18 | Gemini 3.0 support for BigQuery generative AI functions |  | BigQuery generative AI functions such as AI.GENERATE can now use the Gemini 3.0 model through the global Vertex AI endpoint. |
| 2025-11-17 | Folders for BigQuery Studio code assets |  | Folders can organize and control access to single-file code assets such as notebooks, saved queries, data canvases, and data preparation files. |
| 2025-11-17 | Query text heatmap |  | The query text heatmap in the query execution graph shows which SQL text contributes most to slot-consuming stages and links that text to plan details. |
| 2025-11-17 | Role-based authorization for stored procedures |  | BigQuery stored procedures can now use role-based authorization. |
| 2025-11-17 | Stored procedure sharing listings |  | BigQuery sharing listings can now include SQL stored procedures for sharing. |
| 2025-11-11 | Batch SQL translator |  | The batch SQL translator converts supported SQL dialects such as Apache Impala SQL into GoogleSQL in batch workflows; BigQuery Migration Service includes a Batch SQL Translator for translating SQL in batch workflows. |
| 2025-11-11 | BigQuery Overview page |  | The BigQuery Overview page provides a central hub for tutorials, features, resources, and guided paths for users of different skill levels. |
| 2025-11-11 | Custom organization constraints for BigQuery datasets |  | Organization Policy custom constraints can enforce granular controls on specific fields of BigQuery dataset resources. |
| 2025-11-11 | Interactive SQL translator |  | The interactive SQL translator converts supported SQL dialects such as Apache Impala SQL into GoogleSQL in an interactive workflow; BigQuery Migration Service includes an Interactive SQL Translator for translating SQL interactively. |
| 2025-11-11 | SQL translation API |  | The SQL translation API translates supported SQL dialects into GoogleSQL programmatically. |
| 2025-11-10 | AI.DETECT_ANOMALIES |  | AI.DETECT_ANOMALIES uses a TimesFM model to detect anomalies in time series data against historical baselines. |
| 2025-11-10 | BigLake Apache Iceberg table partitioning |  | BigLake tables for Apache Iceberg in BigQuery now support partitioning. |
| 2025-11-10 | Gemini-assisted aggregation in data preparation |  | Gemini assistance in BigQuery data preparation can aggregate table data. |
| 2025-11-10 | Gemini-assisted deduplication in data preparation |  | Gemini assistance in BigQuery data preparation can deduplicate table data. |
| 2025-11-10 | TimesFM 2.5 model support |  | BigQuery ML supports the TimesFM 2.5 time series foundation model for AI.FORECAST, AI.EVALUATE, and AI.DETECT_ANOMALIES. |
| 2025-11-05 | Data insights generation in Dataplex API DataScans |  | Data insights can now be generated when creating a DataScan through the Dataplex API. |
| 2025-11-05 | MATCH_RECOGNIZE |  | MATCH_RECOGNIZE lets SQL queries filter and aggregate row-pattern matches across rows in a table. |
| 2025-11-05 | Multilingual generated data descriptions |  | Generated data insights can now create table and column descriptions in all supported Gemini languages. |
| 2025-11-04 | BigQuery Migration Service custom organization policies |  | BigQuery Migration Service supports custom organization policies to allow or deny specific migration operations, including disabling AI suggestions. |
| 2025-10-31 | Connected Sheets pivot table row capacity increase |  | Pivot tables backed by BigQuery in Connected Sheets now support up to 200,000 rows instead of 100,000. |
| 2025-10-30 | Apache Iceberg REST catalog |  | The Apache Iceberg REST catalog in BigLake metastore provides an Iceberg-compatible catalog service. |
| 2025-10-30 | BigQuery catalog federation |  | BigLake metastore's Apache Iceberg REST catalog supports BigQuery catalog federation. |
| 2025-10-30 | Console catalog management for Apache Iceberg REST catalog |  | The Apache Iceberg REST catalog in BigLake metastore can now be managed in the Google Cloud console. |
| 2025-10-30 | Credential vending |  | BigLake metastore's Apache Iceberg REST catalog supports credential vending for catalog access. |
| 2025-10-29 | Reservation groups |  | Reservation groups let related reservations prioritize idle slot sharing within the group before sharing with other reservations in the project. |
| 2025-10-28 | BigQuery Data Transfer Service Facebook Ads connector |  | BigQuery Data Transfer Service can transfer data from Facebook Ads into BigQuery. |
| 2025-10-28 | BigQuery Data Transfer Service Salesforce connector |  | BigQuery Data Transfer Service can transfer data from Salesforce into BigQuery. |
| 2025-10-28 | BigQuery Data Transfer Service Salesforce Marketing Cloud connector |  | BigQuery Data Transfer Service can transfer data from Salesforce Marketing Cloud into BigQuery. |
| 2025-10-28 | BigQuery Data Transfer Service ServiceNow connector |  | BigQuery Data Transfer Service can transfer data from ServiceNow into BigQuery. |
| 2025-10-28 | Subscriber email logging |  | Subscriber email logging records the principal identifiers of users who run jobs and queries against linked datasets; Subscriber email logging records principal identifiers for users who run jobs and queries against linked datasets. |
| 2025-10-27 | Administrative jobs explorer job comparison |  | The administrative jobs explorer can compare two jobs to identify discrepancies and query performance improvement opportunities. |
| 2025-10-27 | Administrative jobs explorer job details page |  | The administrative jobs explorer now includes a job details page for diagnosing and troubleshooting queries. |
| 2025-10-27 | Administrative jobs explorer Performance tab |  | The administrative jobs explorer Performance tab compiles execution graphs, SQL text, execution history, performance variance, and system load for a query. |
| 2025-10-27 | AI.CLASSIFY |  | AI.CLASSIFY uses Gemini to classify text into user-defined categories. |
| 2025-10-27 | AI.IF |  | AI.IF uses Gemini to filter or join text and multimodal data based on natural-language conditions. |
| 2025-10-27 | AI.SCORE |  | AI.SCORE uses Gemini to rate text or multimodal inputs for ranking by quality, similarity, or other criteria. |
| 2025-10-27 | Apache Arrow support in Storage Write API |  | The Storage Write API can now stream data to BigQuery using the Apache Arrow format. |
| 2025-10-27 | Data Engineering Agent |  | The Data Engineering Agent uses Gemini in BigQuery to build and modify data pipelines that ingest data into BigQuery. |
| 2025-10-22 | Built-in TimesFM forecasting model |  | BigQuery ML provides a built-in TimesFM univariate time series forecasting model for forecasting and forecast evaluation. |
| 2025-10-22 | Custom organization constraints for BigQuery sharing resources |  | Organization Policy custom constraints can enforce granular controls on specific fields of BigQuery sharing resources such as exchanges and listings. |
| 2025-10-21 | TransUnion support for entity resolution |  | BigQuery entity resolution now supports TransUnion as a data provider. |
| 2025-10-20 | Notebook visualization cells |  | Visualization cells automatically generate customizable charts from DataFrames in notebooks. |
| 2025-10-20 | Vertex AI endpoint management for BigQuery-managed open models |  | BigQuery ML can fully manage open models as Vertex AI endpoints, including deployment, undeployment, and machine type customization. |
| 2025-10-16 | BigQuery Studio breadcrumbs |  | BigQuery Studio provides breadcrumbs for navigation across tabs and resources in the details pane. |
| 2025-10-16 | BigQuery Studio Explorer pane reorganization |  | BigQuery Studio reorganizes the left pane into Explorer, Classic Explorer, and Git repository sections while retaining the full resource tree in Classic Explorer. |
| 2025-10-16 | BigQuery Studio Git repository pane |  | Opening a workspace in a repository now opens it in the Git repository pane in the left pane of BigQuery Studio. |
| 2025-10-16 | BigQuery Studio job history tab |  | BigQuery Studio provides job history through a dedicated Explorer entry that opens job histories in a new tab. |
| 2025-10-16 | BigQuery Studio recent tabs |  | BigQuery Studio includes a Recent tabs view in the details pane to help users rediscover previously opened resources. |
| 2025-10-16 | BigQuery Studio repositories tab |  | BigQuery Studio now provides repository access through a Repositories entry in the Explorer pane that opens a list of repositories in a new tab. |
| 2025-10-16 | BigQuery Studio resource search |  | The BigQuery Studio Explorer pane can search for BigQuery resources across an organization and refine results with filters. |
| 2025-10-16 | BigQuery Studio tab management |  | BigQuery Studio improves tab behavior by opening resources in the same tab by default, supporting modifier-key new tabs, and letting users pin tabs with double-click. |
| 2025-10-16 | BigQuery Studio What's new section |  | The BigQuery Studio Home tab includes a What's new section that lists new capabilities and changes. |
| 2025-10-16 | Notebook consolidated action bar |  | The notebook action bar is consolidated by default to provide more space for writing code. |
| 2025-10-15 | dbt-bigquery support for BigQuery DataFrames Python |  | The dbt-bigquery adapter can run Python code defined in BigQuery DataFrames. |
| 2025-10-15 | Geospatial result map visualization |  | BigQuery Studio can visualize geospatial query results on an interactive map. |
| 2025-10-14 | Natural-language SQL comments for code refinement |  | BigQuery can use natural-language comments embedded in SQL to refine and transform existing code. |
| 2025-10-14 | Notebook SQL cells |  | SQL cells let users write, edit, and run SQL queries on BigQuery data directly from notebooks. |
| 2025-10-09 | Fair idle slot allocation across reservations |  | Idle slots can be allocated fairly across reservations within a single admin project so each reservation receives an approximately equal share of available capacity; BigQuery can now distribute idle slots approximately equally across reservations within a single admin project. |
| 2025-10-09 | Reservation maximum slot limit |  | Reservations can now be configured with a maximum slot limit when they are created or updated; BigQuery reservations can now be configured with a maximum slot limit when created or updated. |
| 2025-10-08 | Reservation IAM policies |  | IAM policies can now be set directly on reservations for finer-grained resource control. |
| 2025-10-08 | Reservation labels |  | Reservations can now be labeled for organization and billing analysis; BigQuery reservations can be labeled for organization and billing analysis. |
| 2025-10-08 | Runtime reservation selection |  | Queries can now choose which reservation to use at runtime; BigQuery now lets queries specify which reservation to use at runtime. |
| 2025-10-06 | BigQuery Data Transfer Service Google Analytics 4 reporting transfer |  | BigQuery Data Transfer Service can transfer Google Analytics 4 reporting data and custom reports into BigQuery. |
| 2025-10-06 | BigQuery Data Transfer Service PayPal connector |  | BigQuery Data Transfer Service can transfer data from PayPal. |
| 2025-10-06 | BigQuery Data Transfer Service Stripe connector |  | BigQuery Data Transfer Service can transfer data from Stripe. |
| 2025-10-06 | Dataform workflow job priority |  | BigQuery lets Dataform workflows set query jobs to interactive or batch priority. |
| 2025-10-06 | INFORMATION_SCHEMA.SHARED_DATASET_USAGE extended schema |  | The INFORMATION_SCHEMA.SHARED_DATASET_USAGE view includes new fields for usage metrics on external tables and routines. |
| 2025-10-02 | BigQuery notebook gallery |  | The BigQuery web UI includes a notebook gallery for discovering and using prebuilt notebook templates. |
| 2025-10-01 | Gemini Cloud Assist SQL apply to editor |  | BigQuery can apply SQL generated in Gemini Cloud Assist chat to the query open in the editor. |
| 2025-09-29 | BigLake metastore credential vending for Iceberg REST catalog |  | BigLake metastore supports credential vending mode for the Apache Iceberg REST catalog to avoid direct Cloud Storage access for catalog users. |
| 2025-09-29 | BigQuery data preparation array unnesting |  | BigQuery data preparation can unnest arrays by expanding each array element into its own row. |
| 2025-09-29 | Spanner non-incremental materialized views |  | BigQuery can create non-incremental materialized views over Spanner data to periodically cache query results. |
| 2025-09-25 | ARRAY_FIRST function |  | The ARRAY_FIRST GoogleSQL function returns the first element of an array; The ARRAY_FIRST GoogleSQL function returns the first element of an input array. |
| 2025-09-25 | ARRAY_LAST function |  | The ARRAY_LAST GoogleSQL function returns the last element of an array; The ARRAY_LAST GoogleSQL function returns the last element of an input array. |
| 2025-09-25 | ARRAY_SLICE function |  | The ARRAY_SLICE GoogleSQL function returns a slice of an array; The ARRAY_SLICE GoogleSQL function returns an array containing consecutive elements from an input array. |
| 2025-09-25 | BigQuery data canvas destination table nodes |  | BigQuery data canvas supports destination table nodes for persisting query results to new or existing tables. |
| 2025-09-24 | BigQuery ML model monitoring metric visualization |  | BigQuery ML can visualize model monitoring metrics from ML.VALIDATE_DATA_SKEW and ML.VALIDATE_DATA_DRIFT output; BigQuery ML can visualize model monitoring metrics from ML.VALIDATE_DATA_SKEW and ML.VALIDATE_DATA_DRIFT with charts and graphs. |
| 2025-09-24 | Gemini CLI extensions for BigQuery |  | BigQuery integrates with Gemini CLI extensions to enable agentic natural-language workflows from the command line. |
| 2025-09-22 | Spanner PostgreSQL federated queries |  | BigQuery external datasets can run federated GoogleSQL queries against PostgreSQL dialect databases in Spanner, including cross-region queries. |
| 2025-09-16 | Apache Iceberg external table time travel |  | BigQuery can query retained snapshots of Apache Iceberg external tables with FOR SYSTEM_TIME AS OF. |
| 2025-09-16 | BigQuery SQL code completion |  | BigQuery provides SQL code completion across all projects. |
| 2025-09-16 | JSON function path mode |  | Some BigQuery JSON functions support a mode option for JSONPath matching flexibility. |
| 2025-09-16 | JSON_KEYS function |  | The JSON_KEYS function extracts unique JSON keys from a JSON expression; The BigQuery JSON_KEYS function extracts unique JSON keys from a JSON expression. |
| 2025-09-15 | BigQuery advanced runtime |  | BigQuery advanced runtime improves query execution time and slot usage; BigQuery advanced runtime improves query execution time and slot usage. |
| 2025-09-15 | Connected Sheets saved query opening |  | BigQuery Studio can open saved queries in Connected Sheets from the Explorer pane. |
| 2025-09-11 | BigQuery migration assessment for Informatica |  | BigQuery provides a migration assessment for Informatica to evaluate migration complexity. |
| 2025-09-11 | Data Science Agent Spark prompt keywords |  | The Data Science Agent in BigQuery recognizes Apache Spark and PySpark keywords in prompts. |
| 2025-09-11 | Gemini SQL generation prompt recommendations |  | Gemini recommends natural-language prompts in the BigQuery SQL generation tool. |
| 2025-09-10 | BigQuery data preparation Cloud Storage file loading |  | BigQuery data preparations can load files from Cloud Storage. |
| 2025-09-09 | Default Cloud resource connections |  | BigQuery supports reusable default Cloud resource connections at the project level; BigQuery projects can define reusable default Cloud resource connections. |
| 2025-09-09 | SQL translator metadata caching |  | BigQuery batch and interactive SQL translators cache metadata to improve translation latency. |
| 2025-09-08 | BigQuery pipelines table and view tasks |  | BigQuery pipelines can add tables and views as tasks. |
| 2025-09-08 | Data Science Agent file upload search shortcut |  | The Data Science Agent in BigQuery supports + syntax to search files for upload. |
| 2025-09-08 | Data Science Agent table search shortcut |  | The Data Science Agent in BigQuery supports @ syntax to search project tables. |
| 2025-09-08 | Table-valued function table parameters |  | BigQuery table-valued functions can include table parameters. |
| 2025-09-03 | BigQuery data preparation record flattening |  | BigQuery data preparation can flatten records in a single operation. |
| 2025-09-03 | Managed disaster recovery soft failover |  | BigQuery supports soft failover with managed disaster recovery. |
| 2025-09-03 | RESERVATIONS_TIMELINE per_second_details field |  | The INFORMATION_SCHEMA.RESERVATIONS_TIMELINE view includes a per_second_details field for per-second capacity, usage, and autoscale details. |
| 2025-09-02 | BigQuery pipelines automatic processing location selection |  | BigQuery pipelines can automatically select a processing location in pipeline configurations. |
| 2025-09-02 | Data Science Agent BigQuery ML prompt references |  | The Data Science Agent in BigQuery notebooks can reference BigQuery ML in prompts. |
| 2025-09-02 | Data Science Agent DataFrames prompt references |  | The Data Science Agent in BigQuery notebooks can reference DataFrames in prompts. |
| 2025-09-02 | Multi-region BigQuery sharing listings |  | BigQuery sharing supports listings for shared datasets and linked dataset replicas across multiple regions. |
| 2025-09-02 | Remote model for gemini-embedding-001 |  | BigQuery can create a remote model based on Vertex AI gemini-embedding-001 for use with ML.GENERATE_EMBEDDING. |
| 2025-09-02 | Remote models for open embedding models |  | BigQuery can create remote models from open embedding models deployed to Vertex AI and use them with ML.GENERATE_EMBEDDING. |
| 2025-08-28 | Data clean room query templates |  | BigQuery data clean rooms support query templates to predefine and restrict runnable queries. |
| 2025-08-26 | Gemini-assisted deduplication in data preparations |  | BigQuery data preparations can deduplicate table data with Gemini assistance. |
| 2025-08-25 | Data insights generated descriptions |  | BigQuery data insights can use Gemini to generate table and column descriptions from table metadata. |
| 2025-08-25 | ST_REGIONSTATS function |  | The ST_REGIONSTATS geography function combines Earth Engine raster data with vector data stored in BigQuery. |
| 2025-08-22 | BigLake Iceberg multi-statement transactions |  | BigQuery supports multi-statement transactions for BigLake Iceberg tables. |
| 2025-08-18 | BigQuery Reference panel |  | The BigQuery console Reference panel previews schema details, opens resources in new tabs, and inserts snippets or field names into queries and notebooks. |
| 2025-08-18 | Data Science Agent table selector |  | The Data Science Agent in BigQuery includes a table selector for choosing one or more tables to analyze. |
| 2025-08-14 | BigQuery Studio geospatial result map visualization |  | BigQuery Studio can visualize geospatial query results on an interactive map. |
| 2025-08-14 | Spanner cross-region federated queries |  | BigQuery supports cross-region federated queries against Spanner tables outside the source BigQuery region. |
| 2025-08-13 | Gemini-assisted aggregation in data preparations |  | BigQuery data preparations can aggregate table data with Gemini assistance. |
| 2025-08-12 | Save query results to Cloud Storage |  | BigQuery can save query results directly to Cloud Storage. |
| 2025-08-11 | BigQuery resource utilization charts |  | BigQuery provides resource utilization charts for monitoring usage; BigQuery resource utilization charts provide metric views and additional chart configuration options. |
| 2025-08-11 | GoogleSQL chained function call syntax |  | GoogleSQL supports chained function call syntax to improve readability of deeply nested function calls. |
| 2025-08-11 | GoogleSQL WITH expressions |  | GoogleSQL supports WITH expressions for creating temporary variables in queries. |
| 2025-08-06 | BigQuery advanced runtime short query optimizations |  | Short query optimizations are included when the BigQuery advanced runtime is enabled. |
| 2025-08-04 | Data Science Agent for Colab Enterprise and BigQuery |  | The Data Science Agent automates exploratory data analysis, machine learning tasks, and insight generation in Colab Enterprise notebooks with BigQuery. |
| 2025-07-31 | Continuous queries export to Spanner |  | Continuous queries can export BigQuery data to Spanner in real time. |
| 2025-07-31 | Metadata curation page for data profile and data quality scans |  | The Metadata curation page lets you manage data profile scans and data quality scans across a project in the Google Cloud console. |
| 2025-07-22 | Access Transparency for BigQuery data preparation |  | Access Transparency supports BigQuery data preparation workloads. |
| 2025-07-22 | ALTER VECTOR INDEX REBUILD statement |  | The ALTER VECTOR INDEX REBUILD statement rebuilds a vector index when table data has changed enough to require it. |
| 2025-07-22 | CREATE EXTERNAL TABLE and LOAD DATA null_markers option |  | The null_markers option defines which strings in CSV files are treated as NULL values when creating external tables or loading data. |
| 2025-07-22 | CREATE EXTERNAL TABLE and LOAD DATA source_column_match option |  | The source_column_match option controls whether loaded columns are matched to schema columns by position or by name. |
| 2025-07-22 | MATCH_RECOGNIZE clause |  | The MATCH_RECOGNIZE clause filters and aggregates pattern matches across rows in SQL queries. |
| 2025-07-22 | VECTOR_INDEX.STATISTICS function |  | The VECTOR_INDEX.STATISTICS function measures drift between current table data and the data used when a vector index was created. |
| 2025-07-21 | DISTINCT pipe operator |  | The DISTINCT pipe operator selects distinct rows in pipe syntax queries. |
| 2025-07-17 | Named windows in pipe syntax |  | Named windows can be used in BigQuery pipe syntax queries. |
| 2025-07-17 | WITH pipe operator |  | The WITH pipe operator defines common table expressions in pipe syntax queries. |
| 2025-07-16 | Comments in BigQuery Studio assets |  | Users can add, reply to, and share links to comments on notebooks, data canvases, data preparation files, and saved queries. |
| 2025-07-15 | Commercialized BigQuery sharing listings on Google Cloud Marketplace |  | BigQuery sharing listings can be commercialized through Google Cloud Marketplace. |
| 2025-07-15 | JSON column flattening in data preparation |  | BigQuery data preparation can flatten JSON columns in a single operation. |
| 2025-07-07 | Google Account authorization for development data preparation execution |  | Google Account user credentials can authorize running a data preparation in development. |
| 2025-07-01 | @@location system variable |  | The @@location system variable sets the location where a query runs; The @@location system variable lets you set the location where a query runs. |
| 2025-07-01 | Apache Hadoop and Hive permission migration to BigQuery |  | Permissions can be migrated from Apache Hadoop, Apache Hive, and Ranger HDFS to BigQuery. |
| 2025-07-01 | Cloud KMS key update for BigQuery tables |  | A Cloud KMS encryption key can be updated by updating the table with the same key. |
| 2025-07-01 | dwh-migration-dumper tool |  | The dwh-migration-dumper tool migrates metadata needed for Hadoop permissions and data migration to BigQuery. |
| 2025-07-01 | HDFS data lake table migration to Google Cloud |  | Tables can be migrated from an HDFS data lake to Google Cloud for BigQuery use. |
| 2025-06-30 | Scheduled notebooks in BigQuery Studio |  | BigQuery Studio can create and manage scheduled notebooks from the Schedule details pane. |
| 2025-06-26 | Partitioned TreeAH vector indexes |  | The PARTITION BY clause in CREATE VECTOR INDEX can partition TreeAH vector indexes for partition pruning and lower I/O costs. |
| 2025-06-26 | SEARCH_INDEXES_BY_ORGANIZATION information schema view |  | The INFORMATION_SCHEMA.SEARCH_INDEXES_BY_ORGANIZATION view reports search index management consumption by project and table. |
| 2025-06-23 | Apache Iceberg REST catalog in BigLake metastore |  | The Apache Iceberg REST catalog in BigLake metastore enables open source query engines to access Iceberg data in Cloud Storage. |
| 2025-06-23 | Gemini code explanation in Colab Enterprise notebooks |  | Gemini assistance in Colab Enterprise notebooks can explain code. |
| 2025-06-23 | Gemini error fixing and explanation in Colab Enterprise notebooks |  | Gemini assistance in Colab Enterprise notebooks can fix errors and explain them. |
| 2025-06-18 | Data quality scan result publishing to Dataplex Universal Catalog |  | Data quality scan results can be published as Dataplex Universal Catalog metadata on the source table entry. |
| 2025-06-18 | Gemini-generated table and column descriptions |  | Data insights can use Gemini to generate table and column descriptions from table metadata. |
| 2025-06-16 | BigQuery migration assessment for Cloudera and Apache Hadoop |  | BigQuery migration assessment supports workflows that use Cloudera and Apache Hadoop. |
| 2025-06-16 | Gemini-based SQL translation configuration YAML generation |  | Gemini-enhanced SQL translation can create configuration YAML files that generate AI suggestions for batch or interactive translations. |
| 2025-06-16 | Gemini-enhanced SQL translation output review |  | Batch SQL translation output can be reviewed with Gemini-based suggestions in the code and configuration tabs. |
| 2025-06-16 | Gemini-enhanced SQL translation rules |  | Interactive SQL translation can use Gemini-enhanced translation rules to customize SQL inputs. |
| 2025-06-16 | Merchant Center best sellers report for multi-client accounts |  | The Merchant Center best sellers report supports multi-client accounts with consolidated best-selling product analysis across sub-accounts. |
| 2025-06-16 | Multi-time-series forecasting in ARIMA_PLUS_XREG |  | BigQuery ML can forecast multiple time series at once by using TIME_SERIES_ID_COL in ARIMA_PLUS_XREG multivariate models. |
| 2025-06-16 | SQL management of IAM tags on datasets and tables |  | IAM tags on BigQuery datasets and tables can be managed using SQL. |
| 2025-06-12 | Dark theme for BigQuery |  | BigQuery in the Google Cloud console supports a dark theme. |
| 2025-06-10 | Vertex AI Provisioned Throughput for ML.GENERATE_TEXT and AI.GENERATE |  | Vertex AI Provisioned Throughput can be used with ML.GENERATE_TEXT and AI.GENERATE for consistent high request throughput on supported Gemini models. |
| 2025-06-09 | Iceberg external tables in materialized views |  | Materialized views can reference Iceberg external tables without migrating the data to BigQuery-managed storage. |
| 2025-06-03 | BigLake metastore |  | BigLake metastore is the generally available renamed form of BigQuery metastore; BigLake metastore (classic) is the new name for the feature formerly known as BigLake metastore. |
| 2025-06-03 | BigLake tables for Apache Iceberg in BigQuery |  | BigLake tables for Apache Iceberg in BigQuery are the generally available renamed form of BigQuery tables for Apache Iceberg. |
| 2025-06-02 | Apache Spark demo notebook in BigQuery console |  | The BigQuery console Welcome tab includes an Apache Spark demo notebook for learning Spark notebooks and serverless Spark in BigQuery. |
| 2025-06-02 | Authorized routines for Spanner external datasets |  | Spanner external datasets can be used with authorized routines. |
| 2025-06-02 | Authorized views for Spanner external datasets |  | Spanner external datasets can be used with authorized views. |
| 2025-06-02 | BigQuery Studio configuration settings |  | Configuration settings let administrators customize the BigQuery Studio experience by showing or hiding user interface elements for a project or organization. |
| 2025-06-02 | Cloud resource connections for Spanner external datasets |  | Spanner external datasets can be used with Cloud resource connections. |
| 2025-06-02 | CREATE EXTERNAL TABLE and LOAD DATA date_format option |  | The date_format option defines how date values are formatted in source files for CREATE EXTERNAL TABLE or LOAD DATA. |
| 2025-06-02 | CREATE EXTERNAL TABLE and LOAD DATA datetime_format option |  | The datetime_format option defines how datetime values are formatted in source files for CREATE EXTERNAL TABLE or LOAD DATA. |
| 2025-06-02 | CREATE EXTERNAL TABLE and LOAD DATA time_format option |  | The time_format option defines how time values are formatted in source files for CREATE EXTERNAL TABLE or LOAD DATA. |
| 2025-06-02 | CREATE EXTERNAL TABLE and LOAD DATA time_zone option |  | The time_zone option specifies a time zone to use when loading data with CREATE EXTERNAL TABLE or LOAD DATA. |
| 2025-06-02 | CREATE EXTERNAL TABLE and LOAD DATA timestamp_format option |  | The timestamp_format option defines how timestamp values are formatted in source files for CREATE EXTERNAL TABLE or LOAD DATA. |
| 2025-05-29 | BigQuery DataFrames in dbt-bigquery |  | The dbt-bigquery adapter can run Python code defined in BigQuery DataFrames. |
| 2025-05-29 | Event-driven Cloud Storage to BigQuery transfers |  | Transfers from Cloud Storage to BigQuery can run automatically when data is added or modified in a bucket. |
| 2025-05-29 | Google Account authorization for pipelines and scheduling workflows |  | Google Account user credentials can authorize creating, scheduling, and running pipelines and scheduling notebooks and data preparations. |
| 2025-05-28 | Column metadata indexing |  | Column metadata indexing is available for both BigQuery tables and external tables. |
| 2025-05-28 | Serverless Spark sessions in BigQuery notebooks |  | BigQuery notebooks can create serverless Spark sessions and run PySpark code. |
| 2025-05-27 | Optional job creation mode |  | Optional job creation mode speeds up eligible small queries by automatically optimizing them and using a cache to reduce latency. |
| 2025-05-27 | Pub/Sub streaming data sharing in BigQuery sharing |  | BigQuery sharing can share Pub/Sub streaming data with additional client library support and provider usage metrics. |
| 2025-05-22 | Custom constraints for BigQuery Organization Policy |  | Custom constraints for Organization Policy let you enforce granular controls on specific fields of supported BigQuery resources. |
| 2025-05-22 | Gemini in BigQuery IAM roles |  | Gemini in BigQuery can now be used through the BigQuery Studio User and BigQuery Studio Admin roles, which include the required permissions. |
| 2025-05-22 | Multi-column data preparation |  | BigQuery data preparation can apply preparation tasks, including dropping columns, across multiple selected columns at once. |
| 2025-05-22 | Teradata schema mapping from translation output |  | BigQuery Data Transfer Service migrations from Teradata can use BigQuery translation engine outputs as schema mapping input. |
| 2025-05-21 | Routine access controls |  | BigQuery now lets you set access controls on routines. |
| 2025-05-19 | Continuous queries |  | Continuous queries run long-lived SQL statements for real-time analytics, processing, and ML inference on incoming BigQuery data. |
| 2025-05-19 | Cross-region Spanner federated queries |  | BigQuery federated queries can now access Spanner tables in regions different from the BigQuery region. |
| 2025-05-14 | Cross-region batch load and export |  | BigQuery now supports loading and exporting data between any regions or multi-regions with a single statement or command. |
| 2025-05-14 | Snowflake to BigQuery scheduled transfers |  | BigQuery Data Transfer Service can now schedule automated data transfers from Snowflake to BigQuery. |
| 2025-05-14 | TreeAH vector index type |  | BigQuery vector indexes now support the TreeAH index type based on Google's ScaNN algorithm for efficient batch embedding processing; BigQuery vector indexes support the TreeAH index type, which uses Google's ScaNN algorithm and is optimized for batch queries with many query vectors. |
| 2025-05-13 | GROUP BY ALL |  | BigQuery SQL now generally supports the GROUP BY ALL clause; BigQuery supports the GROUP BY ALL clause to infer grouping keys from SELECT items. |
| 2025-05-13 | GROUP BY ARRAY |  | BigQuery SQL now generally supports grouping by ARRAY values, including use with SELECT DISTINCT. |
| 2025-05-13 | GROUP BY STRUCT |  | BigQuery SQL now generally supports grouping by STRUCT values, including use with SELECT DISTINCT. |
| 2025-05-12 | Execution graph query text view |  | BigQuery execution graphs now show query text sections that relate stage steps back to the original query text. |
| 2025-05-12 | Multimodal data features |  | BigQuery and BigQuery DataFrames now support multimodal analysis, transformation, embeddings, and ELT workflows across SQL and Python. |
| 2025-05-12 | Resource utilization chart enhancements |  | BigQuery resource utilization charts now include interface improvements such as a longer default timeline and a reservation slot usage view. |
| 2025-05-05 | Saved query autosave |  | BigQuery now automatically saves changes made to saved queries. |
| 2025-04-28 | Dataplex automatic discovery in BigQuery |  | Dataplex automatic discovery in BigQuery scans Cloud Storage data to extract metadata and create analytics-ready BigLake, external, or object tables. |
| 2025-04-28 | SQL translation configuration YAML |  | BigQuery SQL translation can use configuration YAML files to optimize translated query performance. |
| 2025-04-24 | Data canvas assistant |  | BigQuery data canvas now includes a Gemini-powered assistant that can construct and modify canvases from user prompts. |
| 2025-04-23 | Reservation-level IAM policies |  | BigQuery now lets you set IAM policies directly on reservations for finer-grained resource control. |
| 2025-04-21 | Fine-grained access control for Iceberg tables |  | BigQuery metastore Iceberg tables now support fine-grained access control. |
| 2025-04-17 | BigQuery DataFrames 2.0 |  | BigQuery DataFrames 2.0 introduces new features along with security, performance, and API changes. |
| 2025-04-17 | Partial ordering mode in BigQuery DataFrames |  | BigQuery DataFrames now supports partial ordering mode to generate more efficient queries. |
| 2025-04-09 | Apache Arrow support for Storage Write API |  | BigQuery Storage Write API now supports streaming data in Apache Arrow format. |
| 2025-04-09 | Raster analysis with ST_REGIONSTATS |  | BigQuery geospatial analysis can now combine raster and vector data by using the ST_REGIONSTATS geography function. |
| 2025-04-08 | Apache Flink connectivity for BigQuery metastore |  | BigQuery metastore can now connect to Apache Flink. |
| 2025-04-08 | Apache Iceberg resource management in BigQuery metastore |  | BigQuery metastore now supports creating, viewing, modifying, and deleting Apache Iceberg resources. |
| 2025-04-08 | TimesFM forecasting model in BigQuery ML |  | BigQuery ML now provides a built-in TimesFM univariate forecasting model that can be used with AI.FORECAST. |
| 2025-04-07 | BigQuery data preparation |  | BigQuery data preparation provides Gemini-powered suggestions, visual preparation pipelines, and scheduled execution with Dataform. |
| 2025-04-07 | Remote models for Llama and Mistral in BigQuery ML |  | BigQuery ML can now create remote models backed by Llama and Mistral AI models in Vertex AI for text generation tasks. |
| 2025-04-07 | Smart-tuning for materialized views across project placement |  | BigQuery smart-tuning for materialized views now works when views share a project with a base table or with the querying project. |
| 2025-04-03 | Amazon Redshift Serverless migration assessment support |  | BigQuery migration assessment now supports Amazon Redshift Serverless as a source environment. |
| 2025-04-02 | BigFrames code generation in BigQuery Notebooks |  | BigQuery Notebooks can now generate DataFrames code that uses BigFrames libraries from prompts. |
| 2025-04-02 | Python user-defined functions |  | BigQuery now supports Python user-defined functions that can use additional libraries and external APIs. |
| 2025-04-01 | Contribution analysis models in BigQuery ML |  | BigQuery ML now supports contribution analysis models created with CREATE MODEL and analyzed with ML.GET_INSIGHTS. |
| 2025-04-01 | Pipe syntax |  | BigQuery pipe syntax provides a linear query structure intended to improve query readability and maintainability. |
| 2025-03-31 | _CHANGE_SEQUENCE_NUMBER for BigQuery CDC |  | BigQuery change data capture now supports defining _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering. |
| 2025-03-31 | BigQuery pipelines |  | BigQuery Studio now supports scheduled pipelines composed of SQL queries or notebooks, with runtime and sharing options. |
| 2025-03-31 | Data preparation tasks in BigQuery pipelines |  | BigQuery pipelines can now include scheduled data preparation tasks that execute code assets in sequence. |
| 2025-03-31 | Merge-on-read for Iceberg external tables |  | BigQuery Iceberg external tables now support merge-on-read, including position deletes and equality deletes. |
| 2025-03-31 | Performance Max data in Search Ads transfers |  | BigQuery Data Transfer Service for Search Ads now includes Performance Max campaign data in supported tables. |
| 2025-03-31 | Repeat frequency configuration for Google Ad Manager transfers |  | BigQuery Data Transfer Service for Google Ad Manager now lets you configure transfer repeat frequency. |
| 2025-03-31 | Row-level access policies for BigLake managed tables |  | BigQuery row-level access policies are now supported for BigLake managed tables. |
| 2025-03-31 | Row-level access policies with BigQuery Storage Read API |  | BigQuery row-level access policies are now supported with the BigQuery Storage Read API. |
| 2025-03-31 | Scheduling page |  | BigQuery's Scheduling page now centralizes schedule viewing, creation, and management for multiple asset types. |
| 2025-03-31 | Skip match table loading for Google Ad Manager transfers |  | BigQuery Data Transfer Service for Google Ad Manager can now skip loading match tables by setting load_match_tables to FALSE. |
| 2025-03-31 | Subqueries in row-level access policies |  | BigQuery row-level access policies now support subqueries; BigQuery supports using subqueries in row-level access policies. |
| 2025-03-27 | Metadata caching for SQL translation |  | BigQuery SQL translation now supports metadata caching to reduce latency for subsequent translation requests. |
| 2025-03-24 | BigQuery Add Data dialog source-first experience |  | The Add Data dialog provides a source-first workflow with improved search and filtering for loading data into BigQuery. |
| 2025-03-24 | BigQuery Data Transfer Service Google Analytics 4 connector |  | BigQuery Data Transfer Service can transfer reporting and configuration data from Google Analytics 4 into BigQuery. |
| 2025-03-24 | KLL quantile functions |  | KLL quantile functions let you efficiently compute approximate quantiles in BigQuery. |
| 2025-03-20 | BigQuery ML Anthropic Claude remote models |  | BigQuery ML supports remote models based on Anthropic Claude in Vertex AI for text generation and evaluation. |
| 2025-03-20 | BigQuery repositories |  | BigQuery repositories provide Git-based version control for files stored in BigQuery. |
| 2025-03-20 | BigQuery workspaces |  | BigQuery workspaces let you edit code within repositories and support version-controlled development. |
| 2025-03-17 | EXPORT DATA reverse ETL to Spanner |  | EXPORT DATA statements can write BigQuery data to Spanner for reverse ETL workflows; EXPORT DATA statements can reverse ETL BigQuery data into Spanner. |
| 2025-03-17 | Spanner external datasets |  | BigQuery can create external datasets that link to existing databases in Spanner; BigQuery can create external datasets that link to existing databases in Spanner. |
| 2025-03-17 | TYPEOF function |  | The TYPEOF function returns the data type of an expression in BigQuery. |
| 2025-03-13 | Dataform CMEK organization policy support |  | Dataform supports the customer-managed encryption keys organization policy. |
| 2025-03-13 | Gemini Cloud Assist chat for SQL and Python generation |  | Gemini Cloud Assist chat can generate SQL queries and Python code in BigQuery. |
| 2025-03-06 | BigQuery Data Transfer Service Google Ads custom reports |  | BigQuery Data Transfer Service supports custom Google Ads reports using GAQL queries in transfer configurations. |
| 2025-03-03 | Gemini in BigQuery Python code completion |  | Gemini in BigQuery provides context-aware Python code completion in the query editor; Gemini in BigQuery provides Python code completion for BigQuery projects. |
| 2025-03-03 | SQL user-defined aggregate functions |  | BigQuery supports SQL user-defined aggregate functions through the CREATE AGGREGATE FUNCTION statement; BigQuery supports user-defined aggregate functions written with SQL expressions using the CREATE AGGREGATE FUNCTION statement. |
| 2025-02-25 | Best sellers and price competitiveness migration guides |  | Migration guides help users transition best sellers and price competitiveness reports to newer versions. |
| 2025-02-10 | Data preparation join recommendations |  | BigQuery data preparation provides Gemini-powered context-aware recommendations for join operations. |
| 2025-02-06 | JavaScript user-defined aggregate functions |  | BigQuery supports JavaScript user-defined aggregate functions through the CREATE AGGREGATE FUNCTION statement; BigQuery supports creating JavaScript user-defined aggregate functions with the CREATE AGGREGATE FUNCTION statement. |
| 2025-02-03 | BY NAME and CORRESPONDING set operation modifiers |  | The BY NAME and CORRESPONDING modifiers let set operations match columns by name instead of position. |
| 2025-01-28 | Stored column usage information for vector search |  | BigQuery can display stored column usage information for query jobs that perform vector search with stored columns. |
| 2025-01-27 | BigQuery ML open model remote models |  | BigQuery ML supports remote models based on Vertex Model Garden or Hugging Face open models for generation and evaluation. |
| 2025-01-27 | Conditional IAM access on datasets with ACLs |  | BigQuery datasets that use access control lists can be configured with conditional IAM access. |
| 2025-01-22 | BigQuery metastore |  | BigQuery metastore provides shared metadata management across processing engines including BigQuery and Apache Spark. |
| 2025-01-21 | BigQuery ML Anthropic Claude evaluation |  | BigQuery ML can evaluate Anthropic Claude models with the ML.EVALUATE function. |
| 2025-01-21 | Data preparation test runs |  | BigQuery data preparation lets you test data preparations before deployment and production scheduling. |
| 2025-01-21 | Natural language data preparation with Gemini |  | Gemini in BigQuery lets users prepare data using natural language. |
| 2025-01-17 | BigQuery Data Transfer Service MySQL connector |  | BigQuery Data Transfer Service can transfer data from MySQL into BigQuery. |
| 2025-01-17 | BigQuery Data Transfer Service PostgreSQL connector |  | BigQuery Data Transfer Service can transfer data from PostgreSQL into BigQuery. |
| 2025-01-17 | BigQuery Studio default session settings |  | BigQuery Studio lets users configure default settings that apply when a session starts. |
| 2025-01-16 | BigQuery migration assessment for Oracle TCO calculator |  | The BigQuery migration assessment for Oracle includes a total cost of ownership calculator for migration cost estimates. |
| 2025-01-16 | BigQuery navigation menu categories |  | BigQuery has a reorganized navigation menu with new categories. |
| 2025-01-13 | ARIMA_PLUS_XREG multiple time series forecasting |  | ARIMA_PLUS_XREG models support forecasting multiple time series at once by using the TIME_SERIES_ID_COL option. |
| 2025-01-13 | BigQuery Omni VPC allowlists |  | BigQuery Omni VPC allowlists restrict access to AWS S3 buckets and Azure Blob Storage from specific BigQuery Omni VPCs; BigQuery Omni VPC allowlists restrict access to AWS S3 buckets and Azure Blob Storage from specific BigQuery Omni VPCs. |
| 2024-12-19 | Dataplex management for BigQuery assets |  | Dataplex can manage data canvases, data preparations, notebooks, saved queries, and workflows with automatic metadata availability. |
| 2024-12-19 | Dataplex metadata search for BigQuery assets |  | The Dataplex console can search and display metadata for data canvases, data preparations, notebooks, saved queries, and workflows. |
| 2024-12-19 | Sovereign Controls for EU support for BigQuery Data Transfer Service |  | The Sovereign Controls for EU control package supports BigQuery Data Transfer Service. |
| 2024-12-16 | Google Cloud Code extension support for BigQuery datasets and notebooks |  | The Google Cloud Code extension for VS Code supports working with BigQuery datasets and notebooks from VS Code. |
| 2024-12-12 | Analytics Hub listings on Google Cloud Marketplace |  | Analytics Hub listings can be discovered, procured, and commercialized through Google Cloud Marketplace. |
| 2024-12-12 | Regional endpoints |  | BigQuery regional endpoints route request traffic directly to a specified region to support data residency and sovereignty requirements. |
| 2024-12-11 | BigQuery Managed Disaster Recovery |  | BigQuery Managed Disaster Recovery provides managed failover and redundant compute capacity for business-critical workloads; BigQuery Managed Disaster Recovery provides managed failover and redundant compute capacity for business-critical workloads. |
| 2024-12-11 | BigQuery ML Gemini 2.0 Flash remote models |  | BigQuery ML supports remote models based on Vertex AI gemini-2.0-flash-exp for text and multimodal generative tasks. |
| 2024-12-11 | Cross-region dataset replication |  | BigQuery can replicate a dataset from its source region to one or more other regions; Cross-region dataset replication lets you replicate a dataset from a source region to one or more other regions. |
| 2024-11-19 | Search indexes on INT64 and TIMESTAMP columns |  | BigQuery search indexes can be created on INT64 and TIMESTAMP columns to optimize predicates on those fields. |
| 2024-11-14 | BigQuery ML Gemini 1.5 remote models |  | BigQuery ML supports remote models based on Vertex AI gemini-1.5-flash and gemini-1.5-pro for text and multimodal generation. |
| 2024-11-11 | BigQuery ML supervised tuning for Gemini remote models |  | BigQuery ML supports supervised tuning for remote models based on Vertex AI Gemini 1.5 Flash and Gemini 1.5 Pro. |
| 2024-11-11 | BigQuery ML Vertex AI LLM evaluation |  | BigQuery ML can evaluate Vertex AI large language models with the ML.EVALUATE function. |
| 2024-11-06 | Gemini SQL translation batch AI suggestions |  | Batch SQL translations can generate AI suggestions using Gemini based on a configuration YAML file. |
| 2024-11-06 | Gemini SQL translation explanations |  | Interactive SQL translation can request Gemini-generated text explanations that summarize translated SQL queries. |
| 2024-11-06 | Gemini-enhanced interactive SQL translation customization |  | Interactive SQL translation can use Gemini-enhanced translations to customize translated GoogleSQL queries. |
| 2024-11-05 | Dataplex automatic discovery |  | Dataplex automatic discovery scans Cloud Storage data to extract metadata and create BigLake, external, and object tables for analytics and AI. |
| 2024-10-24 | Gemini context-aware transformation recommendations |  | Gemini provides context-aware transformation recommendations to help cleanse data for analysis in BigQuery data preparation. |
| 2024-10-21 | Airflow DAG management in BigQuery |  | BigQuery lets users view, trigger, and pause Airflow DAGs directly in the product. |
| 2024-10-21 | Custom organization policies for BigQuery Data Transfer Service transfer configurations |  | Custom organization policies let administrators allow or deny specific operations on BigQuery Data Transfer Service transfer configurations. |
| 2024-10-21 | Notebook scheduling management on Orchestration page |  | BigQuery lets users manage notebook schedules from the Orchestration page. |
| 2024-10-14 | Fine-grained DML |  | Fine-grained DML optimizes execution of UPDATE, DELETE, and MERGE statements on BigQuery tables. |
| 2024-10-11 | BigQuery migration assessment for Oracle |  | The BigQuery migration assessment for Oracle evaluates the complexity of migrating data from Oracle data warehouses to BigQuery. |
| 2024-10-10 | BigQuery tables for Apache Iceberg |  | BigQuery tables for Apache Iceberg bring BigQuery storage optimization to Apache Iceberg tables stored in user-controlled cloud buckets without moving the data. |
| 2024-10-10 | GeoParquet metadata support for Parquet import and export |  | BigQuery can export and load Parquet files that include GeoParquet metadata. |
| 2024-10-08 | GoogleSQL pipe syntax |  | GoogleSQL pipe syntax provides a linear query structure intended to make queries easier to read, write, and maintain. |
| 2024-10-03 | ODBC driver Application Default Credentials authentication on Google Cloud VMs |  | The BigQuery ODBC driver supports authentication through Application Default Credentials using the Google internal metadata server on Google Cloud Compute Engine VMs. |
| 2024-09-30 | Flexible column names |  | Flexible column names let BigQuery tables and views use expanded naming support for extracting, loading, streaming, and querying data. |
| 2024-09-30 | History-based query optimizations |  | BigQuery supports enabling, disabling, and analyzing history-based optimizations for queries; BigQuery lets users enable, disable, and analyze history-based optimizations for queries. |
| 2024-09-30 | Materialized view replica creation in Google Cloud console |  | BigQuery lets users create materialized view replicas directly from the Google Cloud console. |
| 2024-09-30 | Operational health dashboard |  | The operational health dashboard provides a real-time single-pane view of key metrics such as slot usage, shuffle usage, errors, and total storage. |
| 2024-09-26 | Details pane keyboard shortcuts |  | The BigQuery cloud console supports keyboard shortcuts for controlling tab navigation in the details pane. |
| 2024-09-24 | BigQuery ML audio transcription with Speech-to-Text remote models |  | BigQuery ML can transcribe audio files from BigQuery object tables by using Speech-to-Text-based remote models and the ML.TRANSCRIBE function. |
| 2024-09-24 | BigQuery ML document processing with Document AI remote models |  | BigQuery ML can process documents from BigQuery object tables by using Document AI-based remote models and the ML.PROCESS_DOCUMENT function. |
| 2024-09-24 | BigQuery ML embedding generation with matrix factorization models |  | BigQuery ML can use ML.GENERATE_EMBEDDING with matrix factorization models to create embeddings for user or item data. |
| 2024-09-24 | BigQuery ML embedding generation with PCA and autoencoder models |  | BigQuery ML can use ML.GENERATE_EMBEDDING with PCA and autoencoder models to create embeddings for structured IID data. |
| 2024-09-24 | BigQuery ML multimodal embedding generation |  | BigQuery ML can use ML.GENERATE_EMBEDDING with Vertex AI multimodalembedding remote models to create multimodal embeddings spanning text, image, and video; BigQuery ML can generate multimodal embeddings from text and images by using ML.GENERATE_EMBEDDING with a Vertex AI multimodal embedding remote model. |
| 2024-09-24 | Cloud KMS Autokey for CMEKs |  | BigQuery supports Cloud KMS Autokey to automate creation and use of customer-managed encryption keys, including with Cloud HSM. |
| 2024-09-23 | Scheduled workflows for code assets |  | BigQuery can create workflows that execute code assets in sequence at a scheduled time. |
| 2024-09-19 | BigQuery ML model monitoring functions |  | BigQuery ML provides model monitoring functions for descriptive statistics, data skew detection, data drift detection, and TensorFlow Data Validation-style analysis. |
| 2024-09-16 | Batch migration of classic saved queries |  | BigQuery can batch migrate classic saved queries to saved queries. |
| 2024-09-16 | BigQuery ML contribution analysis models |  | BigQuery ML can create contribution analysis models with CREATE MODEL and use ML.GET_INSIGHTS to explain changes in key metrics across multidimensional data. |
| 2024-09-16 | Stored columns and pre-filtering for vector search |  | BigQuery vector indexes can store columns and support pre-filtering in vector searches to improve query efficiency. |
| 2024-09-12 | BigQuery DataFrames partial ordering mode |  | BigQuery DataFrames supports a partial ordering mode that generates more efficient queries. |
| 2024-09-11 | Terraform management of IAM tags on datasets and tables |  | Terraform can manage IAM tags on BigQuery datasets and tables. |
| 2024-09-09 | Display & Video 360 connector for BigQuery Data Transfer Service |  | BigQuery Data Transfer Service can transfer campaign reporting and configuration data from Display & Video 360 into BigQuery. |
| 2024-09-04 | BigQuery vector indexes |  | BigQuery vector indexes accelerate VECTOR_SEARCH with a trade-off toward more approximate results. |
| 2024-09-04 | BigQuery vector search |  | BigQuery vector search lets users search embeddings to identify semantically similar entities. |
| 2024-08-29 | Delta Lake BigLake tables |  | BigLake supports Delta Lake tables for open source tabular data stored at petabyte scale. |
| 2024-08-29 | Incremental Teradata transfers in BigQuery Data Transfer Service |  | BigQuery Data Transfer Service supports incremental transfers when migrating data from Teradata data warehouses to BigQuery. |
| 2024-08-28 | AlloyDB federated queries |  | BigQuery can query data in AlloyDB by using federated queries; BigQuery supports querying data in AlloyDB through federated queries. |
| 2024-08-28 | Gemini in BigQuery data canvas |  | Gemini in BigQuery provides a data canvas experience for working with BigQuery data. |
| 2024-08-28 | Gemini in BigQuery data insights |  | Gemini in BigQuery provides data insights capabilities within BigQuery; Gemini in BigQuery provides automated data insights to help users explore and understand data. |
| 2024-08-28 | Gemini in BigQuery partitioning and clustering recommendations |  | Gemini in BigQuery provides recommendations for partitioning and clustering. |
| 2024-08-28 | Gemini in BigQuery Python code generation |  | Gemini in BigQuery can generate Python code. |
| 2024-08-28 | Gemini in BigQuery SQL explanation |  | Gemini in BigQuery can explain SQL queries. |
| 2024-08-28 | Gemini in BigQuery SQL generation |  | Gemini in BigQuery can generate SQL queries from prompts. |
| 2024-08-28 | GROUP BY and SELECT DISTINCT support for ARRAY and STRUCT |  | BigQuery supports using the GROUP BY clause and the SELECT DISTINCT clause with ARRAY and STRUCT data types. |
| 2024-08-28 | Phrase support for SEARCH function |  | The BigQuery SEARCH function supports phrase queries; The SEARCH function supports phrase-based search queries. |
| 2024-08-26 | BigQuery ML remote models for Anthropic Claude on Vertex AI |  | BigQuery ML can create remote models based on Anthropic Claude in Vertex AI and use ML.GENERATE_TEXT for generative text tasks on BigQuery data. |
| 2024-08-26 | EXPORT DATA to Bigtable |  | BigQuery EXPORT DATA statements can directly export data to Bigtable for reverse ETL workflows; EXPORT DATA statements can directly export BigQuery data to Bigtable. |
| 2024-08-20 | BigQuery ML anomaly detection for multivariate time series models |  | BigQuery ML multivariate time series ARIMA_PLUS_XREG models can perform anomaly detection on historical or new data with multiple feature columns. |
| 2024-08-19 | BigQuery insights and recommendations in Google Cloud console |  | BigQuery insights and recommendations can be viewed on the Recommendations page in the Google Cloud console. |
| 2024-08-19 | BigQuery insights and recommendations INFORMATION_SCHEMA views |  | BigQuery provides INFORMATION_SCHEMA views for insights and recommendations, including INSIGHTS, RECOMMENDATIONS, and RECOMMENDATIONS_BY_ORGANIZATION. |
| 2024-08-14 | Short query optimized mode |  | Short query optimized mode lowers latency for small queries by automatically accelerating eligible queries. |
| 2024-08-12 | Time series and range functions |  | BigQuery provides time series and range functions to support time series analysis; BigQuery provides time series and range functions for time series analysis. |
| 2024-08-08 | JSONPath mode support in JSON functions |  | Some BigQuery JSON functions support selectable JSONPath modes that provide flexibility in how paths match JSON data structures. |
| 2024-08-07 | Materialized views over Apache Iceberg tables |  | BigQuery can create materialized views over Apache Iceberg tables when the view is partition-aligned with the base table using time-based partition transformations. |
| 2024-07-31 | 50-slot increment capacity management |  | BigQuery workload management supports purchasing capacity commitments and setting baseline and autoscale slot values in 50-slot increments. |
| 2024-07-31 | Consecutive capacity decreases without reset delay |  | BigQuery workload management allows multiple consecutive capacity reductions after one minute has passed since the most recent capacity increase without resetting the minimum-delay timer. |
| 2024-07-31 | SQL translation configuration YAML files |  | BigQuery SQL translation supports configuration YAML files to optimize and improve performance of translated SQL; SQL translation configuration YAML files let users transform SQL code during query translation across batch, interactive, and Python client workflows. |
| 2024-07-31 | Workload management autoscaler immediate scale-up |  | BigQuery workload management autoscaling now scales up immediately. |
| 2024-07-31 | Workload management autoscaler precision improvements |  | BigQuery workload management autoscaling now scales more precisely. |
| 2024-07-30 | ML.GENERATE_EMBEDDING output_dimensionality for multimodalembedding models |  | BigQuery ML supports the output_dimensionality argument in ML.GENERATE_EMBEDDING for remote models based on Vertex AI multimodalembedding models. |
| 2024-07-29 | Administrative jobs explorer |  | The administrative jobs explorer helps users quickly monitor job activity across their organization. |
| 2024-07-29 | RANGE data type JSON encoding support |  | The BigQuery RANGE data type is supported as a JSON encoding. |
| 2024-07-25 | Expanded IAM deny policy permission support |  | IAM deny policies support additional BigQuery permissions, including bigquery.tables.getData for denying table read access; Deny policies support a broader set of permissions. |
| 2024-07-25 | Table explorer |  | Table explorer lets users inspect table data and create data exploration queries. |
| 2024-07-23 | Manifest files for Amazon S3 and Azure Blob Storage |  | Manifest files are supported for data in Amazon S3 and Azure Blob Storage. |
| 2024-07-23 | SAP Datasphere connections with network attachments |  | SAP Datasphere connections can be configured with network attachments to help secure connectivity. |
| 2024-07-22 | BigQuery continuous queries |  | BigQuery continuous queries run long-lived SQL statements for real-time processing, ML inference, and reverse ETL on incoming data. |
| 2024-07-22 | CHANGES change history function |  | The CHANGES table-valued function returns a time-windowed history of table changes across DDL, DML, loads, streaming, and partition deletions. |
| 2024-07-22 | DML on recently written Storage Write API rows |  | BigQuery supports using DML to modify rows that were recently written through the Storage Write API. |
| 2024-07-18 | Migration assessment details page diagnostics |  | The migration assessment details page shows additional assessment information and errors. |
| 2024-07-18 | Migration assessment progress and partial reporting |  | BigQuery migration assessments can display partial report data, progress, and estimated completion time while running. |
| 2024-07-18 | Migration assessment result dataset management |  | BigQuery migration assessments can automatically create a dataset for results or store results in a selected empty dataset. |
| 2024-07-17 | Default storage billing model for new datasets |  | BigQuery lets users configure the default storage billing model for newly created datasets. |
| 2024-07-16 | Aggregated migration assessment results dataset |  | Migration assessments for Amazon Redshift, Teradata, and Snowflake can create a highly aggregated results dataset without query logs for safer sharing. |
| 2024-07-01 | Draggable details pane tabs |  | The BigQuery console lets users drag details pane tabs into new columns or positions for side-by-side comparison and rearrangement. |
| 2024-07-01 | Featured listings in Analytics Hub catalog |  | Analytics Hub can highlight listings in the Featured section of the catalog. |
| 2024-07-01 | Pub/Sub sharing in Analytics Hub |  | Analytics Hub lets data publishers share Pub/Sub topics and manage subscriptions. |
| 2024-07-01 | Publicly discoverable Analytics Hub exchanges and listings |  | Analytics Hub exchanges and listings can be made publicly discoverable. |
| 2024-07-01 | Unauthenticated URLs for public Analytics Hub listings |  | Analytics Hub can generate unauthenticated URLs for public listings. |
| 2024-06-27 | BigQuery resource tags for IAM conditional access |  | BigQuery supports tags on tables and datasets for conditionally granting or denying access with IAM policies. |
| 2024-06-25 | BigQuery JupyterLab plugin |  | The BigQuery JupyterLab plugin lets users explore data, use BigQuery DataFrames in notebooks, and deploy DataFrames notebooks to Cloud Composer. |
| 2024-06-21 | BigQuery migration assessment for Amazon Redshift |  | BigQuery migration assessment for Amazon Redshift evaluates the complexity of migrating a Redshift data warehouse to BigQuery; BigQuery migration assessment evaluates the complexity of moving from Amazon Redshift to BigQuery. |
| 2024-06-18 | NULLIF collation support |  | The NULLIF conditional expression supports collation, including collation-enabled comparisons with the STRUCT data type. |
| 2024-06-17 | Supervised tuning for Gemini remote models in BigQuery ML |  | BigQuery ML supports supervised tuning for remote models based on gemini-1.0-pro-002, including through the BigQuery DataFrames Python API. |
| 2024-06-13 | Notebook scheduling |  | BigQuery notebooks can be scheduled to run automatically. |
| 2024-06-05 | Analytics Hub data egress controls |  | Analytics Hub data egress controls let publishers restrict subscribers from copying or exporting shared data. |
| 2024-06-05 | Slot recommender for editions |  | The slot recommender for editions analyzes historical usage to recommend optimal capacity purchasing for edition and on-demand workloads. |
| 2024-05-31 | IAM conditions for BigQuery resources |  | BigQuery supports IAM conditions to control access to BigQuery resources; BigQuery supports IAM conditions to control access to BigQuery resources. |
| 2024-05-30 | Change sequence numbers for BigQuery CDC |  | BigQuery change data capture supports defining a _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering. |
| 2024-05-28 | Gemini 1.5 Flash remote models in BigQuery ML |  | BigQuery ML supports creating remote models based on the Vertex AI gemini-1.5-flash foundation model. |
| 2024-05-28 | ML.GENERATE_TEXT for object table multimodal content with Gemini 1.5 Flash |  | ML.GENERATE_TEXT can use Gemini 1.5 Flash remote models for generative AI tasks on image, video, audio, PDF, or text content stored in BigQuery object tables. |
| 2024-05-28 | ML.GENERATE_TEXT for table text with Gemini 1.5 Flash |  | ML.GENERATE_TEXT can use Gemini 1.5 Flash remote models for generative natural language tasks on text stored in BigQuery tables. |
| 2024-05-23 | Grounding with Google Search in ML.GENERATE_TEXT |  | ML.GENERATE_TEXT supports grounding Gemini model responses with Google Search to improve specificity and factuality. |
| 2024-05-23 | Safety settings in ML.GENERATE_TEXT |  | ML.GENERATE_TEXT supports configurable safety settings for Gemini model responses. |
| 2024-05-23 | Video embeddings in ML.GENERATE_EMBEDDING |  | ML.GENERATE_EMBEDDING supports creating video embeddings with remote models based on Vertex AI multimodal embedding models. |
| 2024-05-22 | Batch SQL translator support for IBM DB2 |  | The batch SQL translator can translate IBM DB2 SQL, Greenplum SQL, and SQLite into GoogleSQL. |
| 2024-05-22 | Greenplum |  | The interactive SQL translator can translate IBM DB2 SQL, Greenplum SQL, and SQLite into GoogleSQL; The translation API can translate IBM DB2 SQL, Greenplum SQL, and SQLite into GoogleSQL. |
| 2024-05-22 | Interactive SQL translator support for IBM DB2 |  | The interactive SQL translator can translate IBM DB2 SQL, Greenplum SQL, and SQLite into GoogleSQL. |
| 2024-05-22 | Translation API support for IBM DB2 |  | The translation API can translate IBM DB2 SQL, Greenplum SQL, and SQLite into GoogleSQL. |
| 2024-05-21 | Gemini 1.5 Pro remote models in BigQuery ML |  | BigQuery ML supports creating remote models based on the Vertex AI gemini-1.5-pro foundation model. |
| 2024-05-21 | ML.GENERATE_TEXT for object table multimodal content with Gemini 1.5 Pro |  | ML.GENERATE_TEXT can use Gemini 1.5 Pro remote models for generative AI tasks on image, video, audio, PDF, or text content stored in BigQuery object tables. |
| 2024-05-21 | ML.GENERATE_TEXT for table text with Gemini 1.5 Pro |  | ML.GENERATE_TEXT can use Gemini 1.5 Pro remote models for generative natural language tasks on text stored in BigQuery tables. |
| 2024-05-20 | DLP functions with Sensitive Data Protection |  | BigQuery DLP functions support AES-SIV encryption and decryption with Sensitive Data Protection. |
| 2024-05-20 | Search indexes for INT64 and TIMESTAMP |  | BigQuery search indexes can optimize lookups on INT64 and TIMESTAMP columns. |
| 2024-05-14 | Gemini-enhanced translation rules |  | The interactive SQL translator supports Gemini-enhanced translation rules for customizing SQL translation results. |
| 2024-05-07 | Pre-filtering in vector searches |  | BigQuery vector searches support pre-filtering data to improve query efficiency. |
| 2024-05-07 | Stored columns in vector indexes |  | BigQuery vector indexes can store columns to improve query efficiency. |
| 2024-05-06 | AWS Glue federated dataset creation in Google Cloud console |  | BigQuery lets users create AWS Glue federated datasets from the Google Cloud console. |
| 2024-05-02 | Analytics Hub Provider Usage Metrics |  | Analytics Hub Provider Usage Metrics reports jobs, subscriber consumption details, and rows and bytes processed for shared data. |
| 2024-05-02 | Analytics Hub subscription management |  | Analytics Hub Subscription Management lets data publishers manage subscriptions, inspect subscribers, and revoke access to shared data; Analytics Hub subscription management adds a subscription resource that represents the connection between a shared resource and a linked dataset. |
| 2024-04-30 | AWS Glue federated datasets |  | AWS Glue federated datasets create dataset-level connections between BigQuery and existing databases in AWS Glue. |
| 2024-04-30 | Batch SQL translator job debugging in interactive SQL translator |  | The BigQuery interactive SQL translator can be used to debug batch SQL translator jobs. |
| 2024-04-30 | Iceberg tables in materialized views |  | BigQuery materialized views can reference Iceberg tables without migrating the data into BigQuery-managed storage. |
| 2024-04-30 | ML.TRANSFORM function |  | The ML.TRANSFORM function preprocesses input data by applying transformations captured in a model's TRANSFORM clause. |
| 2024-04-30 | Transform-only models |  | Transform-only models apply preprocessing rules to input data and return preprocessed results without training a model; Transform-only models apply preprocessing functions to input data and return preprocessed data without model training. |
| 2024-04-30 | Translation configurations in interactive SQL translator |  | The BigQuery interactive SQL translator supports specifying translation configurations. |
| 2024-04-29 | Power BI access for Microsoft Entra groups via Workforce Identity Federation |  | Users in Microsoft Entra groups can access BigQuery data in Power BI through Workforce Identity Federation. |
| 2024-04-26 | SQL code generation |  | BigQuery provides SQL code generation capabilities for projects using Gemini in BigQuery. |
| 2024-04-25 | Google Merchant Center Product Targeting report transfer |  | BigQuery Data Transfer Service for Google Merchant Center supports the Product Targeting report. |
| 2024-04-18 | Quantified LIKE operator |  | The quantified LIKE operator supports LIKE ANY, LIKE SOME, and LIKE ALL pattern matching against lists or arrays of patterns; The quantified LIKE operator matches a search value against multiple patterns with LIKE ANY, LIKE SOME, or LIKE ALL conditions. |
| 2024-04-09 | BigQuery clustering recommendations |  | BigQuery recommends clustering strategies to reduce cost and improve performance. |
| 2024-04-09 | BigQuery data canvas |  | Data canvas provides a graphical interface for discovering, transforming, querying, and visualizing data with natural language; Data canvas provides a graphical interface for discovering, transforming, querying, and visualizing data with natural language. |
| 2024-04-09 | BigQuery materialized view recommendations |  | BigQuery recommends materialized views to reduce query cost and improve performance. |
| 2024-04-09 | BigQuery ML matrix factorization embedding generation |  | BigQuery ML can generate embeddings for user or item data by using ML.GENERATE_EMBEDDING with matrix factorization models. |
| 2024-04-09 | BigQuery ML structured data embedding generation |  | BigQuery ML can generate embeddings for structured IID data by using ML.GENERATE_EMBEDDING with PCA or autoencoder models. |
| 2024-04-09 | BigQuery partitioning recommendations |  | BigQuery recommends partitioning strategies to reduce cost and improve performance. |
| 2024-04-09 | Gemini in BigQuery for serverless Spark autotuning and troubleshooting |  | Gemini in BigQuery helps optimize and explain serverless Spark workloads. |
| 2024-04-09 | Gemini in BigQuery SQL and Python code assistance |  | Gemini in BigQuery assists with SQL and Python code generation, completion, and explanation. |
| 2024-04-08 | BigQuery DataFrames |  | BigQuery DataFrames is an open source Python library set that implements pandas and scikit-learn APIs with server-side processing; BigQuery DataFrames is a Python API for data analysis and machine learning in BigQuery. |
| 2024-04-08 | BigQuery materialized view recommender |  | The BigQuery materialized view recommender analyzes past query jobs to identify opportunities for materialized views. |
| 2024-04-08 | BigQuery Studio |  | BigQuery Studio lets users save, share, and manage versions of code assets such as notebooks and saved queries; BigQuery Studio provides an integrated environment to discover, explore, analyze, and run inference on data in BigQuery. |
| 2024-04-05 | BigLake support for Delta Lake tables |  | BigLake can access Delta Lake tables from BigQuery. |
| 2024-04-05 | Differential privacy |  | BigQuery supports differential privacy for privacy-preserving analysis. |
| 2024-04-04 | BigQuery data clean rooms enhanced usage metrics |  | BigQuery data clean rooms provide enhanced usage metrics for monitoring clean room activity. |
| 2024-04-04 | BigQuery data clean rooms with analysis rules |  | BigQuery data clean rooms provide a privacy-preserving environment for multiple parties to share and augment data using analysis rules. |
| 2024-04-04 | BigQuery ML model monitoring |  | BigQuery ML model monitoring provides functions to compute descriptive statistics and detect skew or drift in training and serving data. |
| 2024-04-04 | Data clean room analysis rule aggregation thresholding |  | BigQuery data clean rooms can enforce aggregation thresholding through analysis rules. |
| 2024-04-04 | Data clean room analysis rule differential privacy with privacy budgeting |  | BigQuery data clean rooms can enforce differential privacy with privacy budgeting through analysis rules. |
| 2024-04-04 | Data clean room analysis rule join restrictions |  | BigQuery data clean rooms can enforce join restrictions through analysis rules. |
| 2024-04-04 | Data clean room analysis rule list overlap |  | BigQuery data clean rooms can enforce list overlap controls through analysis rules. |
| 2024-04-04 | Materialized views allow_non_incremental_definition option |  | The allow_non_incremental_definition option lets materialized views support a wider range of SQL queries. |
| 2024-04-04 | Materialized views max_staleness option |  | The max_staleness option lets materialized views deliver high performance with controlled costs on frequently changing datasets. |
| 2024-04-03 | Collation support for STRUCT comparisons |  | BigQuery collation supports STRUCT comparisons with =, !=, IN, and CASE. |
| 2024-04-03 | Collation support for underscore in LIKE |  | BigQuery collation supports the underscore wildcard in the LIKE operator. |
| 2024-04-03 | Materialized views with CDC-enabled tables |  | BigQuery materialized views can be configured with tables that use CDC streaming update and delete operations. |
| 2024-04-02 | BigQuery ML evaluation for Vertex AI LLMs |  | BigQuery ML can evaluate supported Vertex AI large language models by using the ML.EVALUATE function. |
| 2024-04-02 | BigQuery ML supervised tuning for Vertex AI text-bison remote models |  | BigQuery ML supports supervised tuning for remote models based on Vertex AI text-bison language models. |
| 2024-04-01 | Search Ads 360 connector for new Reporting API |  | BigQuery Data Transfer Service for Search Ads 360 supports the new Search Ads 360 Reporting API, including custom Floodlight variables and custom columns. |
| 2024-03-28 | Federated queries for SAP Datasphere |  | BigQuery can query data in SAP Datasphere by using federated queries. |
| 2024-03-28 | Search index optimization for string comparisons |  | BigQuery search index optimization applies to string literal comparisons using =, IN, LIKE, and STARTS_WITH. |
| 2024-03-26 | BigQuery ML remote models for Vertex AI gemini-pro-vision |  | BigQuery ML can create remote models based on the Vertex AI gemini-pro-vision model for vision generative AI tasks. |
| 2024-03-26 | BigQuery ML vision generative AI with ML.GENERATE_TEXT |  | BigQuery ML can use ML.GENERATE_TEXT with gemini-pro-vision remote models to perform image and video understanding tasks on visual content in object tables. |
| 2024-03-26 | Help me code |  | Help me code uses natural language to generate SQL queries for BigQuery. |
| 2024-03-21 | Incremental materialized views with LEFT OUTER JOIN |  | Incremental materialized views support LEFT OUTER JOIN queries. |
| 2024-03-21 | Incremental materialized views with UNION ALL |  | Incremental materialized views support UNION ALL queries. |
| 2024-03-21 | Salesforce Data Cloud ingestion |  | BigQuery can ingest data from Salesforce Data Cloud. |
| 2024-03-20 | Increased maximum notebook size |  | BigQuery notebooks support a maximum size of 20 MB. |
| 2024-03-20 | Notebook listing |  | BigQuery lets users view a list of all notebooks in a project. |
| 2024-03-20 | Saved query listing |  | BigQuery lets users view a list of all saved queries in a project. |
| 2024-03-19 | Five-minute scheduled queries |  | BigQuery scheduled queries can run as frequently as every five minutes. |
| 2024-03-19 | PySpark editor for Spark stored procedures |  | BigQuery provides a PySpark editor for creating stored Python procedures for Apache Spark. |
| 2024-03-19 | Spark stored procedures |  | BigQuery can create and run Spark stored procedures written in Python, Java, and Scala. |
| 2024-03-18 | BAG_OF_WORDS function |  | The BAG_OF_WORDS function creates bag-of-words representations for text data in BigQuery. |
| 2024-03-18 | COSINE_DISTANCE function |  | The COSINE_DISTANCE function computes cosine distance between vectors in BigQuery. |
| 2024-03-18 | Dataset undeletion |  | BigQuery can recover a deleted dataset within the time travel window to its deleted state. |
| 2024-03-18 | EDIT_DISTANCE function |  | The EDIT_DISTANCE function computes edit distance between strings in BigQuery. |
| 2024-03-18 | EUCLIDEAN_DISTANCE function |  | The EUCLIDEAN_DISTANCE function computes Euclidean distance between vectors in BigQuery. |
| 2024-03-18 | Hierarchical forecasting in BigQuery ML |  | BigQuery ML time series models support hierarchical forecasts that aggregate and roll up values across series. |
| 2024-03-18 | LOG_ANALYZER |  | BigQuery provides the LOG_ANALYZER analyzer for text processing in search and analysis functions; BigQuery supports the LOG_ANALYZER text analyzer for search-related functions. |
| 2024-03-18 | ML.BAG_OF_WORDS |  | ML.BAG_OF_WORDS generates bag-of-words representations for text data in BigQuery; The ML.BAG_OF_WORDS function provides bag-of-words text feature processing in BigQuery. |
| 2024-03-18 | ML.TF_IDF |  | ML.TF_IDF computes TF-IDF representations for text data in BigQuery ML; The ML.TF_IDF function provides TF-IDF text feature processing in BigQuery. |
| 2024-03-18 | PATTERN_ANALYZER |  | BigQuery provides the PATTERN_ANALYZER analyzer for text processing in search and analysis functions; BigQuery supports the PATTERN_ANALYZER text analyzer for search-related functions. |
| 2024-03-18 | Search index text analysis configuration |  | BigQuery supports text analysis configuration options for CREATE SEARCH INDEX and related text analysis capabilities; BigQuery supports text analysis configuration options in CREATE SEARCH INDEX DDL. |
| 2024-03-18 | TEXT_ANALYZE function |  | The TEXT_ANALYZE function analyzes text by using BigQuery text analyzers. |
| 2024-03-18 | TF_IDF function |  | The TF_IDF function computes TF-IDF values for text data in BigQuery. |
| 2024-03-06 | Duet AI in BigQuery Python code assistance |  | Duet AI in BigQuery assists with Python code generation and code completion. |
| 2024-03-06 | INFORMATION_SCHEMA.WRITE_API_TIMELINE views |  | The INFORMATION_SCHEMA.WRITE_API_TIMELINE views provide per-minute aggregated ingestion statistics for the BigQuery Storage Write API. |
| 2024-03-04 | Selective metadata cache refresh for BigLake tables |  | BigQuery can selectively refresh metadata cache for BigLake tables by using the BQ.REFRESH_EXTERNAL_METADATA_CACHE system procedure. |
| 2024-02-29 | Cross-cloud joins |  | BigQuery supports joins across Google Cloud and BigQuery Omni regions; BigQuery supports queries that join data across Google Cloud and BigQuery Omni regions. |
| 2024-02-29 | Materialized view replicas over Amazon S3 metadata cache-enabled BigLake tables |  | BigQuery cross-cloud supports materialized view replicas over Amazon S3 metadata cache-enabled BigLake tables to improve performance and reduce egress costs; BigQuery supports materialized view replicas for materialized views on Amazon S3 metadata cache-enabled BigLake tables. |
| 2024-02-29 | Materialized views over Amazon S3 metadata cache-enabled BigLake tables |  | BigQuery cross-cloud supports materialized views over Amazon S3 metadata cache-enabled BigLake tables; BigQuery supports materialized views on Amazon S3 metadata cache-enabled BigLake tables. |
| 2024-02-29 | SQL translation API unified workflow |  | The SQL translation API combines interactive and batch translation into a single workflow for translation jobs. |
| 2024-02-28 | BigQuery ML anomaly detection for multivariate time series |  | BigQuery ML ARIMA_PLUS_XREG models can detect anomalies in historical or new multivariate time series data. |
| 2024-02-28 | Cross-cloud CTAS and INSERT INTO SELECT statements |  | BigQuery supports CREATE TABLE AS SELECT and INSERT INTO SELECT statements with billing enabled to filter data from Amazon S3 and Azure Blob Storage before loading into BigQuery tables. |
| 2024-02-28 | Materialized views referencing logical views |  | BigQuery materialized views can reference logical views. |
| 2024-02-27 | Partition deletion optimization for DML |  | BigQuery DML can delete entire partitions efficiently when a DELETE statement targets all rows in a partition. |
| 2024-02-26 | BigQuery Data Transfer Service for Facebook Ads |  | BigQuery Data Transfer Service can transfer data from Facebook Ads. |
| 2024-02-26 | BigQuery Data Transfer Service for Oracle |  | BigQuery Data Transfer Service can transfer data from Oracle. |
| 2024-02-26 | BigQuery Data Transfer Service for Salesforce |  | BigQuery Data Transfer Service can transfer data from Salesforce. |
| 2024-02-26 | BigQuery Data Transfer Service for Salesforce Marketing Cloud |  | BigQuery Data Transfer Service can transfer data from Salesforce Marketing Cloud. |
| 2024-02-26 | BigQuery Data Transfer Service for ServiceNow |  | BigQuery Data Transfer Service can transfer data from ServiceNow. |
| 2024-02-26 | GROUP BY CUBE |  | BigQuery supports the GROUP BY CUBE clause for producing aggregated data across grouping set permutations; BigQuery queries support the GROUP BY CUBE clause for aggregating over grouping set permutations. |
| 2024-02-26 | GROUP BY GROUPING SETS |  | BigQuery supports the GROUP BY GROUPING SETS clause for producing aggregated data over one or more grouping sets; BigQuery queries support the GROUP BY GROUPING SETS clause for aggregating over one or more grouping sets. |
| 2024-02-26 | GROUPING function |  | The GROUPING function checks whether a groupable value in a GROUP BY clause is aggregated. |
| 2024-02-22 | BigQuery ML remote models for Vertex AI textembedding-gecko |  | BigQuery ML can create remote models that reference Vertex AI textembedding-gecko text embedding models. |
| 2024-02-22 | BigQuery ML text embedding generation with ML.GENERATE_EMBEDDING |  | BigQuery ML can generate text embeddings for text stored in BigQuery by using ML.GENERATE_EMBEDDING with remote models. |
| 2024-02-22 | TensorFlow text embedding generation in BigQuery |  | BigQuery can generate text embeddings with the NNLM, SWIVEL, and BERT TensorFlow models. |
| 2024-02-15 | BigQuery DataFrames GeminiTextGenerator |  | BigQuery DataFrames provides the GeminiTextGenerator class for estimator-like Gemini text generation models. |
| 2024-02-15 | BigQuery ML remote models for Vertex AI gemini-pro |  | BigQuery ML can create remote models based on the Vertex AI gemini-pro large language model. |
| 2024-02-15 | BigQuery ML text generation with gemini-pro |  | BigQuery ML can use ML.GENERATE_TEXT with gemini-pro remote models for generative language tasks on text in BigQuery tables. |
| 2024-02-15 | Query result chart visualization |  | BigQuery can visualize query results in the Chart tab of the query editor. |
| 2024-02-08 | Custom data masking |  | BigQuery supports custom data masking routines such as salt-based hashing. |
| 2024-02-08 | Entity resolution |  | BigQuery entity resolution matches records across datasets when a common identifier is missing by using supported identity providers. |
| 2024-02-07 | Query plan visibility for federated query SQL pushdowns |  | BigQuery query plans can show details of SQL pushdowns in federated queries. |
| 2024-01-31 | ORGANIZATION_OPTIONS_CHANGES view |  | The ORGANIZATION_OPTIONS_CHANGES information schema view shows organization and project option configuration change history. |
| 2024-01-31 | PROJECT_OPTIONS_CHANGES view |  | The PROJECT_OPTIONS_CHANGES information schema view shows project option configuration change history. |
| 2024-01-31 | Vector indexes |  | BigQuery supports vector indexes to accelerate VECTOR_SEARCH with approximate results. |
| 2024-01-31 | Vector search |  | BigQuery supports semantic similarity search over embeddings by using the VECTOR_SEARCH function. |
| 2024-01-29 | Sorted query results in Cloud console |  | The BigQuery Cloud console lets you sort query results by column. |
| 2024-01-29 | Table tags for IAM policies |  | BigQuery lets you use tags on tables to conditionally allow or deny access with IAM policies. |
| 2024-01-24 | Delta Lake support for Amazon S3 and Azure tables |  | BigQuery natively supports the Delta Lake format for Amazon S3 and Azure tables. |
| 2024-01-24 | Residual output in ML.EXPLAIN_FORECAST |  | BigQuery ML adds a residual column to ML.EXPLAIN_FORECAST output for ARIMA_PLUS and ARIMA_PLUS_XREG models. |
| 2024-01-24 | ST_LINEINTERPOLATEPOINT |  | The ST_LINEINTERPOLATEPOINT geography function returns a point at a specified fraction along a linestring. |
| 2024-01-02 | CMEK support for Analytics Hub listings |  | Analytics Hub listings can include data encrypted with customer-managed encryption keys. |
| 2023-12-18 | Operational Health administrative resource charts |  | Operational Health provides administrative resource charts for slot usage, shuffle usage, concurrency, errors, and related metrics. |
| 2023-12-14 | Apache Hive connector |  | The Apache Hive connector supports data analytics pipeline migration to BigQuery. |
| 2023-12-14 | Federated workforce identity support in BigQuery Data Transfer Service |  | BigQuery Data Transfer Service supports federated workforce identities for creating transfers from most data sources. |
| 2023-12-07 | ML.TRANSFORM |  | The ML.TRANSFORM function preprocesses input data by applying transformations captured in a model's TRANSFORM clause. |
| 2023-11-30 | Configuration YAML files for SQL translation |  | BigQuery SQL translation supports configuration YAML files to transform SQL code during translation. |
| 2023-11-30 | Project-level slot estimator recommendations for on-demand workloads |  | The slot estimator provides project-level cost-optimal commitment and autoscale recommendations for on-demand workloads. |
| 2023-11-16 | Expanded region support for Vertex AI text-bison models |  | BigQuery ML expands region availability for Vertex AI text-bison large language models. |
| 2023-11-16 | Expanded remote model SQL syntax for Vertex AI LLMs |  | BigQuery ML remote model SQL syntax supports access to all text generation and text embedding Vertex AI large language models and their versions. |
| 2023-11-14 | Partition skew query performance insights |  | BigQuery provides query performance insights for partition skew. |
| 2023-11-13 | Audio transcription with ML.TRANSCRIBE |  | BigQuery can transcribe audio files from object tables by using Speech-to-Text-based remote models with ML.TRANSCRIBE. |
| 2023-11-13 | Document processing with ML.PROCESS_DOCUMENT |  | BigQuery can process documents from object tables by using Document AI-based remote models with ML.PROCESS_DOCUMENT. |
| 2023-11-13 | ML.ENTITY_FEATURES_AT_TIME |  | The ML.ENTITY_FEATURES_AT_TIME function retrieves features for multiple entities at multiple point-in-time cutoffs to avoid data leakage; The ML.ENTITY_FEATURES_AT_TIME function retrieves features for multiple entities at multiple point-in-time cutoffs to avoid data leakage. |
| 2023-11-13 | ML.FEATURES_AT_TIME |  | The ML.FEATURES_AT_TIME function retrieves features using a shared point-in-time cutoff to avoid data leakage; The ML.FEATURES_AT_TIME function retrieves features using a shared point-in-time cutoff to avoid data leakage. |
| 2023-11-07 | Side-by-side SQL translation code comparison |  | The batch SQL translator provides a code tab with side-by-side comparison of input and output files. |
| 2023-11-07 | SQL translation report log summary |  | The batch SQL translator shows a log summary of issues for a translation job. |
| 2023-11-06 | Custom holiday modeling for time series models |  | BigQuery ML time series forecasting supports custom holiday modeling and holiday effect explanations. |
| 2023-11-06 | Display & Video 360 transfers |  | BigQuery Data Transfer Service can transfer campaign reporting and configuration data from Display & Video 360 into BigQuery. |
| 2023-11-06 | Forecast bounds for time series models |  | BigQuery ML time series forecasting lets you set lower and upper bounds on forecasted values. |
| 2023-11-02 | BAG_OF_WORDS |  | The BAG_OF_WORDS function provides bag-of-words text processing in BigQuery. |
| 2023-11-02 | COSINE_DISTANCE |  | The COSINE_DISTANCE function computes cosine distance in BigQuery. |
| 2023-11-02 | EDIT_DISTANCE |  | The EDIT_DISTANCE function computes edit distance in BigQuery. |
| 2023-11-02 | EUCLIDEAN_DISTANCE |  | The EUCLIDEAN_DISTANCE function computes Euclidean distance in BigQuery. |
| 2023-11-02 | TEXT_ANALYZE |  | The TEXT_ANALYZE function provides text analysis in BigQuery. |
| 2023-11-02 | TF_IDF |  | The TF_IDF function provides TF-IDF text processing in BigQuery. |
| 2023-11-01 | Shared cached query results |  | BigQuery can reuse cached results from the same query run by other users in the same project for Enterprise editions. |
| 2023-11-01 | TABLE_STORAGE_USAGE_TIMELINE view |  | The TABLE_STORAGE_USAGE_TIMELINE information schema view shows daily total billable bytes per table at the project level. |
| 2023-11-01 | TABLE_STORAGE_USAGE_TIMELINE_BY_ORGANIZATION view |  | The TABLE_STORAGE_USAGE_TIMELINE_BY_ORGANIZATION information schema view shows daily total billable bytes per table at the organization level. |
| 2023-10-31 | Change data capture with Storage Write API |  | BigQuery supports change data capture by processing and applying streamed changes in real time with the BigQuery Storage Write API. |
| 2023-10-31 | DML on recently streamed rows |  | BigQuery lets you use DML to modify rows that were recently written through the Storage Write API. |
| 2023-10-30 | Azure Blob Storage transfers |  | BigQuery Data Transfer Service can transfer data from Azure Blob Storage into BigQuery. |
| 2023-10-30 | Billing model filtering in administrative resource charts |  | Administrative resource charts support filtering resource utilization data by billing model. |
| 2023-10-30 | Project-level administrative resource charts |  | Administrative resource charts support viewing resource utilization at the project level. |
| 2023-10-23 | Expanded custom data masking functions |  | Custom data masking supports an expanded set of functions, including salted SHA hash functions. |
| 2023-10-19 | Stored procedures for Apache Spark without enrollment |  | BigQuery supports Apache Spark stored procedures without requiring enrollment. |
| 2023-10-18 | Migration assessment for Apache Hive |  | BigQuery migration assessment can evaluate the complexity of migrating an Apache Hive warehouse to BigQuery. |
| 2023-10-16 | DLP AES-SIV encryption and decryption functions |  | BigQuery supports DLP functions for AES-SIV encryption and decryption interoperability with Cloud DLP. |
| 2023-10-12 | ST_HAUSDORFFDISTANCE |  | The ST_HAUSDORFFDISTANCE geography function computes the discrete Hausdorff distance between two geometries. |
| 2023-10-12 | ST_LINESUBSTRING |  | The ST_LINESUBSTRING geography function returns a segment of a linestring between specified fractions. |
| 2023-10-09 | Enhanced GROUP BY ROLLUP |  | BigQuery queries support groupable item sets in the GROUP BY ROLLUP clause. |
| 2023-10-09 | GROUPING |  | The GROUPING function indicates whether a groupable value in the GROUP BY clause is aggregated. |
| 2023-10-09 | View column descriptions |  | BigQuery lets you add descriptions to view columns by using CREATE VIEW or ALTER COLUMN statements; View column descriptions let users add descriptions to view columns with CREATE VIEW or ALTER COLUMN statements. |
| 2023-10-05 | Migration assessment for Snowflake |  | BigQuery migration assessment can evaluate the complexity of migrating a Snowflake warehouse to BigQuery. |
| 2023-10-04 | Cross-region table copy |  | BigQuery lets you copy tables across regions. |
| 2023-10-03 | Google Cloud Blockchain Analytics Arbitrum One Chain dataset |  | BigQuery provides the Google Cloud Blockchain Analytics Arbitrum One Chain dataset through Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Blockchain Analytics Avalanche Contract Chain dataset |  | BigQuery provides the Google Cloud Blockchain Analytics Avalanche Contract Chain dataset through Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Blockchain Analytics Cronos Mainnet Chain dataset |  | BigQuery provides the Google Cloud Blockchain Analytics Cronos Mainnet Chain dataset through Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Blockchain Analytics Ethereum Mainnet dataset |  | BigQuery provides the Google Cloud Blockchain Analytics Ethereum Mainnet dataset through Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Blockchain Analytics Fantom Opera dataset |  | BigQuery provides the Google Cloud Blockchain Analytics Fantom Opera dataset through Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Blockchain Analytics Optimism Mainnet dataset |  | BigQuery provides the Google Cloud Blockchain Analytics Optimism Mainnet dataset through Public Datasets Program and Analytics Hub. |
| 2023-10-03 | Google Cloud Blockchain Analytics Tron Mainnet dataset |  | BigQuery provides the Google Cloud Blockchain Analytics Tron Mainnet dataset through Public Datasets Program and Analytics Hub. |
| 2023-10-02 | Native BigQuery integration in Looker Studio |  | Looker Studio includes native BigQuery integration for monitoring, performance improvements, and broader BigQuery feature support. |
| 2023-09-29 | Administrative query inspector |  | Administrative query inspector helps BigQuery administrators monitor slot utilization and job performance over time. |
| 2023-09-25 | Authorized stored procedures |  | Authorized stored procedures let you share procedures without granting direct access to the underlying tables; Authorized stored procedures let users share stored procedures without granting direct access to the underlying tables. |
| 2023-09-25 | Google AdWords transfers | 2023-09-25 | BigQuery Data Transfer Service support for Google AdWords transfers is deprecated; deprecated on 2023-09-25. |
| 2023-09-25 | Materialized views over BigLake metadata cache-enabled Cloud Storage tables |  | BigQuery supports materialized views over BigLake metadata cache-enabled tables that reference structured data in Cloud Storage. |
| 2023-09-18 | Old Search Ads 360 reporting API support | 2024-05-31 | BigQuery Data Transfer Service support for the old Search Ads 360 reporting API will end; deprecated on 2024-05-31. |
| 2023-09-18 | Search Ads 360 transfers with new reporting API |  | BigQuery Data Transfer Service supports transfers from Search Ads 360 by using the new Search Ads 360 reporting API. |
| 2023-09-13 | Federated datasets with AWS Glue |  | BigQuery lets you create a federated dataset that connects to an existing database in AWS Glue. |
| 2023-09-12 | Array subscript operator direct indexing |  | The BigQuery array subscript operator can return an array element directly by index. |
| 2023-09-12 | STRUCT subscript operator |  | The STRUCT subscript operator lets you access a STRUCT field by index, offset, or ordinal. |
| 2023-08-29 | bigframes.ml API |  | Bigframes.ml provides a Python API for BigQuery ML with partial scikit-learn compatibility. |
| 2023-08-29 | bigframes.pandas DataFrame API |  | Bigframes.pandas provides a DataFrame API on top of BigQuery with partial pandas compatibility. |
| 2023-08-29 | BigQuery ML remote models for Vertex AI text-bison |  | BigQuery ML can create remote models based on the Vertex AI text-bison large language model; BigQuery ML can create remote models based on the Vertex AI text-bison large language model. |
| 2023-08-29 | BigQuery Studio notebook and saved query asset management |  | BigQuery Studio provides asset management and version history for notebooks and saved queries through Dataform. |
| 2023-08-29 | BigQuery Studio Python notebooks |  | BigQuery Studio includes Python notebooks powered by Colab Enterprise with one-click runtimes and built-in support for BigQuery DataFrames. |
| 2023-08-29 | Data clean rooms |  | Data clean rooms provide a secure environment for multiple parties to share, join, and analyze data without moving or revealing the underlying data. |
| 2023-08-29 | Duet AI in BigQuery |  | Duet AI in BigQuery helps users complete, generate, and explain SQL queries. |
| 2023-08-29 | ML.GENERATE_TEXT |  | The ML.GENERATE_TEXT function performs generative natural language tasks on text stored in BigQuery tables by using an LLM-based remote model; The ML.GENERATE_TEXT function performs generative natural language tasks on text stored in BigQuery tables by using an LLM-based remote model. |
| 2023-08-24 | ARRAY input support for BigQuery ML models |  | BigQuery ML supports the ARRAY type as an input feature type for models. |
| 2023-08-24 | BigQuery ML inference on Vertex AI pretrained models |  | BigQuery ML functions can run inference on Vertex AI pretrained models for natural language processing, translation, and computer vision tasks. |
| 2023-08-24 | BigQuery ML remote embedding models for Vertex AI textembedding-gecko |  | BigQuery ML can create remote models that reference the Vertex AI textembedding-gecko embedding model. |
| 2023-08-24 | Imported model inference in BigQuery ML |  | BigQuery ML can import ONNX, XGBoost, and TensorFlow Lite models for inference in the BigQuery ML inference engine. |
| 2023-08-24 | ML.GENERATE_TEXT_EMBEDDING |  | The ML.GENERATE_TEXT_EMBEDDING function embeds text stored in BigQuery by using a remote embedding model. |
| 2023-08-24 | TensorFlow text embedding generation in BigQuery ML |  | BigQuery ML can generate text embeddings with the NNLM, SWIVEL, and BERT TensorFlow models. |
| 2023-08-24 | Vertex AI remote model hosting for BigQuery ML inference |  | BigQuery ML can use models hosted remotely on Vertex AI Prediction for inference without manual data pipelines. |
| 2023-08-22 | Custom masking routines |  | Custom masking routines let you create masking rules with REGEX_REPLACE to obfuscate sensitive data. |
| 2023-08-21 | Data profiling |  | Data profiling scans tables to create profiles that help users understand their data. |
| 2023-08-21 | Data quality monitoring |  | Data quality monitoring scans tables to help ensure data is accurate and reliable. |
| 2023-08-10 | High cardinality join performance insights |  | Query performance insights can identify performance issues related to high cardinality joins. |
| 2023-08-10 | Protobuf export with user-defined functions |  | User-defined functions can export BigQuery data as Protocol Buffer columns. |
| 2023-08-08 | ANY_VALUE HAVING MAX clause |  | The ANY_VALUE function supports a HAVING MAX clause in queries and materialized views. |
| 2023-08-08 | ANY_VALUE HAVING MIN clause |  | The ANY_VALUE function supports a HAVING MIN clause in queries and materialized views. |
| 2023-08-08 | MAX_BY |  | MAX_BY returns a value associated with the maximum of another expression as a synonym for ANY_VALUE(x HAVING MAX y). |
| 2023-08-08 | MIN_BY |  | MIN_BY returns a value associated with the minimum of another expression as a synonym for ANY_VALUE(x HAVING MIN y). |
| 2023-08-07 | Analytics Hub routines in linked datasets |  | Analytics Hub supports using routines in linked datasets. |
| 2023-08-07 | IAM deny policies for BigQuery permissions |  | BigQuery supports IAM deny policies for selected reservation management, resource deletion, dataset tag binding, and row access policy permissions. |
| 2023-08-07 | JSON_ARRAY |  | JSON_ARRAY creates a JSON array. |
| 2023-08-07 | JSON_ARRAY_APPEND |  | JSON_ARRAY_APPEND appends JSON data to the end of a JSON array. |
| 2023-08-07 | JSON_ARRAY_INSERT |  | JSON_ARRAY_INSERT inserts JSON data into a JSON array. |
| 2023-08-07 | JSON_OBJECT |  | JSON_OBJECT creates a JSON object. |
| 2023-08-07 | JSON_REMOVE |  | JSON_REMOVE produces JSON with specified JSON data removed. |
| 2023-08-07 | JSON_SET |  | JSON_SET inserts or replaces JSON data. |
| 2023-08-07 | JSON_STRIP_NULLS |  | JSON_STRIP_NULLS removes JSON null values. |
| 2023-08-07 | LAX_BOOL |  | LAX_BOOL attempts to convert a JSON value to a SQL BOOL value. |
| 2023-08-07 | LAX_FLOAT64 |  | LAX_FLOAT64 attempts to convert a JSON value to a SQL FLOAT64 value. |
| 2023-08-07 | LAX_INT64 |  | LAX_INT64 attempts to convert a JSON value to a SQL INT64 value. |
| 2023-08-07 | LAX_STRING |  | LAX_STRING attempts to convert a JSON value to a SQL STRING value. |
| 2023-08-04 | Manifest files for external tables |  | BigQuery external tables can use manifest files. |
| 2023-08-03 | Analytics Hub shared dataset usage metrics |  | Analytics Hub provides usage metrics for shared datasets, including jobs, subscriber consumption details, and rows and bytes processed. |
| 2023-08-03 | Query result chart visualization in BigQuery console |  | The BigQuery query editor Chart tab visualizes query results after a query runs. |
| 2023-08-03 | Recently accessed resources in BigQuery console |  | The BigQuery console Welcome page shows the 10 most recently accessed resources. |
| 2023-08-03 | SQL GRANT and REVOKE for materialized views |  | SQL statements can GRANT or REVOKE access to materialized views. |
| 2023-07-31 | BigQuery Storage Write API multiplexing |  | Storage Write API multiplexing lets the default stream write to multiple destination tables with shared connections. |
| 2023-07-28 | Query queues |  | Query queues automatically determine query concurrency based on available slots and queue additional queries when concurrency limits are reached; Query queues let BigQuery manage concurrency dynamically and queue excess queries until resources are available. |
| 2023-07-20 | ARIMA_PLUS_XREG multivariate time series forecasting |  | The ARIMA_PLUS_XREG model performs multivariate time series forecasting with extra feature columns in BigQuery ML. |
| 2023-07-20 | ML.EXPLAIN_FORECAST for ARIMA_PLUS_XREG |  | ML.EXPLAIN_FORECAST provides forecast explanations for ARIMA_PLUS_XREG models. |
| 2023-07-19 | Search index optimization for string predicate queries |  | BigQuery search indexes can optimize some queries that use equals, IN, LIKE, or STARTS_WITH with string literals. |
| 2023-07-17 | google.cloud.bigquery.storage.v1beta2 BigQueryWrite API package | 2024-07-17 | The google.cloud.bigquery.storage.v1beta2 package for BigQueryWrite operations is a deprecated beta API package for the BigQuery Storage Write API; deprecated on 2024-07-17. |
| 2023-07-17 | Primary and foreign key table constraints |  | Primary and foreign key table constraints let you define and manage relational constraints, including through the BigQuery API and console. |
| 2023-07-12 | BigQuery ML TRANSFORM clause preprocessing |  | BigQuery ML supports feature preprocessing with the TRANSFORM clause, including model export and deployment support. |
| 2023-07-12 | Custom holiday modeling for time series forecasting |  | BigQuery ML supports custom holiday modeling for ARIMA_PLUS and ARIMA_PLUS_XREG time series forecasting models. |
| 2023-07-12 | Forecasting holidays public reference table |  | The bigquery-public-data.ml_datasets.holidays_and_events_for_forecasting table provides lookup data for built-in holidays used in forecasting models. |
| 2023-07-12 | Holiday effect explanations in ML.EXPLAIN_FORECAST |  | ML.EXPLAIN_FORECAST includes an explanation of the holiday effect for each holiday included in a time series forecasting model. |
| 2023-07-12 | ML.HOLIDAY_INFO |  | ML.HOLIDAY_INFO returns the list of holidays modeled by an ARIMA_PLUS or ARIMA_PLUS_XREG time series forecasting model. |
| 2023-07-06 | Spanner Data Boost |  | Spanner Data Boost executes analytics queries and data exports with near-zero impact on existing workloads in a provisioned Spanner instance. |
| 2023-07-05 | Analytics Hub data egress restrictions |  | Analytics Hub listings can restrict data egress. |
| 2023-07-05 | Configurable time travel window |  | The time travel window can be configured from two to seven days; This feature lets you set the time travel retention window from two to seven days. |
| 2023-07-05 | Fail-safe period |  | The fail-safe period provides an additional seven days of data storage after the time travel window for emergency recovery; The fail-safe period provides an additional seven days of data storage after the time travel window for emergency recovery. |
| 2023-07-05 | LOAD DATA SQL statement |  | The LOAD DATA SQL statement loads Avro, CSV, newline delimited JSON, JSON, ORC, or Parquet files into a table. |
| 2023-07-05 | Physical bytes storage billing |  | Datasets can use physical bytes as the storage billing model, including bytes used for time travel and fail-safe storage; BigQuery can use physical bytes as a storage billing model. |
| 2023-07-05 | Slot estimator commitment and autoscale recommendations |  | The slot estimator provides cost-optimal commitment and autoscale recommendations based on editions pricing and historical performance metrics. |
| 2023-06-30 | Metadata caching for BigLake tables on Amazon S3 |  | Metadata caching is available for BigLake tables that reference Amazon S3 data to improve query performance. |
| 2023-06-29 | EU Regions and Support with Sovereignty Controls compliance support |  | BigQuery supports the EU Regions and Support with Sovereignty Controls compliance program. |
| 2023-06-29 | ITAR compliance support |  | BigQuery supports the International Traffic in Arms Regulation compliance program. |
| 2023-06-29 | Sovereign Controls by Partners compliance support |  | BigQuery supports the Sovereign Controls by Partners compliance program. |
| 2023-06-26 | Apache Spark stored procedures in Java and Scala |  | BigQuery can create stored procedures for Apache Spark by using Java or Scala. |
| 2023-06-26 | PySpark editor options for stored Python procedures |  | The Google Cloud console PySpark editor can add options for stored Python procedures for Apache Spark. |
| 2023-06-21 | TRUNCATE TABLE in multi-statement transactions |  | TRUNCATE TABLE is supported within multi-statement transactions. |
| 2023-06-20 | Customer-managed encryption keys for metadata cache |  | Metadata cache data can be protected with customer-managed encryption keys. |
| 2023-06-20 | Metadata cache usage statistics |  | Metadata caching includes statistics on metadata cache usage. |
| 2023-06-20 | Metadata caching |  | Metadata caching improves query performance for BigLake tables and object tables that reference large numbers of objects; Metadata caching can improve query performance for BigLake tables and object tables by avoiding repeated Cloud Storage object listing. |
| 2023-06-20 | Querying Apache Iceberg tables created by open source engines |  | BigQuery supports querying Apache Iceberg tables created by open source engines. |
| 2023-06-20 | Table statistics for metadata caching |  | Metadata caching includes table statistics to improve query plan performance. |
| 2023-06-14 | TABLE_STORAGE INFORMATION_SCHEMA view |  | The TABLE_STORAGE INFORMATION_SCHEMA view provides a project-level snapshot of current table storage usage. |
| 2023-06-14 | TABLE_STORAGE_BY_ORGANIZATION INFORMATION_SCHEMA view |  | The TABLE_STORAGE_BY_ORGANIZATION INFORMATION_SCHEMA view provides an organization-level snapshot of current table storage usage. |
| 2023-06-12 | Query execution graph |  | The query execution graph helps diagnose query performance issues and provides query performance insights; The query execution graph helps diagnose BigQuery query performance issues and provides performance insights. |
| 2023-05-25 | BigQuery partitioning and clustering recommender |  | The partitioning and clustering recommender analyzes BigQuery tables and suggests partitioning or clustering changes for potential cost savings. |
| 2023-05-19 | EXTERNAL_QUERY SQL pushdown |  | EXTERNAL_QUERY SQL pushdown reduces transferred data for federated queries by applying column pruning and filter pushdowns to supported external sources; EXTERNAL_QUERY SQL pushdown reduces transferred data for federated queries by applying column pruning and filter pushdowns to supported external sources. |
| 2023-05-18 | Query results column sorting |  | Query results column sorting lets users sort query results from the menu next to a column name. |
| 2023-05-11 | Object tables |  | Object tables are read-only tables that store metadata for unstructured data in Cloud Storage so it can be analyzed with BigQuery capabilities; Object tables are read-only BigQuery tables that store metadata for unstructured Cloud Storage objects. |
| 2023-05-09 | BigQuery dashboard BI Engine metrics |  | BigQuery dashboard BI Engine metrics expose Top Tables Cached Bytes, Query Fallback Count, and Query Execution Count in dashboards. |
| 2023-05-08 | Differential privacy aggregate functions |  | Differential privacy aggregate functions anonymize query results using differentially private AVG, COUNT, SUM, and PERCENTILE_CONT operations. |
| 2023-05-08 | Materialized view usage monitoring |  | Materialized view usage monitoring lets users track materialized view usage and refresh jobs through INFORMATION_SCHEMA and enhanced job statistics. |
| 2023-05-05 | INSERT INTO SELECT filtering for Amazon S3 and Azure Blob Storage |  | INSERT INTO SELECT can filter data from Amazon S3 and Azure Blob Storage files before appending the results into BigQuery tables. |
| 2023-05-03 | Table clones |  | Table clones let users create lightweight copies of BigQuery tables; Table clones provide lightweight writable copies of tables that store only data differing from the base table. |
| 2023-05-01 | Query queue timeout configuration |  | Query queue timeout configuration lets users set interactive and batch queue timeouts in the default configuration. |
| 2023-04-27 | Cloud Spanner federated query JSON type mapping |  | Cloud Spanner federated query JSON type mapping enables the JSON data type in federated queries to Cloud Spanner. |
| 2023-04-26 | Cloud Storage custom dual-region support for external tables |  | BigLake and non-BigLake external tables can use Cloud Storage custom dual-region locations. |
| 2023-04-25 | Dynamic data masking for repeated RECORD columns |  | Dynamic data masking supports RECORD columns configured in REPEATED mode. |
| 2023-04-24 | BigQuery Data Transfer Service Google Ads API connector |  | The BigQuery Data Transfer Service Google Ads connector supports the newer Google Ads API and related transfer capabilities. |
| 2023-04-19 | BI Engine preferred tables propagation improvement |  | Updates to preferred tables for existing BI Engine reservations now propagate much faster. |
| 2023-04-13 | Rounding mode for NUMERIC and BIGNUMERIC columns |  | BigQuery supports configurable rounding modes for parameterized NUMERIC and BIGNUMERIC columns and in the ROUND function. |
| 2023-04-10 | Federated query maximum result size for Azure and Amazon S3 data |  | Queries against Azure and Amazon S3 data support a maximum result size of 20 GiB logical bytes with updated related limits. |
| 2023-04-06 | Add data demo guide |  | The add data demo guide walks users through adding data to BigQuery from common sources. |
| 2023-04-05 | Non-incremental materialized views |  | Non-incremental materialized views support a broader set of SQL queries including OUTER JOIN, UNION, HAVING, and analytic functions. |
| 2023-03-30 | BigQuery Partner Center |  | BigQuery Partner Center helps users discover and try validated partner applications; BigQuery Partner Center lets users search for BigQuery partners. |
| 2023-03-29 | Autoscaling slots |  | Autoscaling slots automatically scale slot capacity for BigQuery workloads. |
| 2023-03-29 | BigQuery editions compute pricing |  | BigQuery editions provide Standard, Enterprise, and Enterprise Plus compute options with autoscaling slot support. |
| 2023-03-28 | BigQuery ML instance weight column |  | BigQuery ML supports specifying a column of training example weights for certain boosted tree and random forest models. |
| 2023-03-28 | BigQuery ML model import for ONNX |  | BigQuery ML can import model artifacts in ONNX, XGBoost, and TensorFlow Lite formats for inference. |
| 2023-03-28 | BigQuery ML remote inference with Vertex AI Prediction |  | BigQuery ML can perform inference against models hosted remotely on Vertex AI Prediction. |
| 2023-03-28 | BigQuery ML TensorFlow version selection |  | BigQuery ML lets users specify the TensorFlow version used during model training. |
| 2023-03-28 | BigQuery ML XGBoost version selection |  | BigQuery ML lets users specify the XGBoost version used during model training. |
| 2023-03-28 | Cloud AI service table-valued functions |  | Cloud AI service table-valued functions let BigQuery invoke pretrained Cloud Vision, Natural Language, and Translation models in queries. |
| 2023-03-28 | XGBoost |  | BigQuery ML can import model artifacts in ONNX, XGBoost, and TensorFlow Lite formats for inference. |
| 2023-03-27 | Change data capture |  | Change data capture applies streamed changes in real time to existing data by using the BigQuery Storage Write API. |
| 2023-03-22 | Unicode column names |  | Unicode column names allow BigQuery columns to use international character sets, alphanumeric characters, and special characters. |
| 2023-03-20 | AutoML Tables additional region availability |  | AutoML Tables models are available in additional regions. |
| 2023-03-20 | AutoML Tables CMEK support |  | AutoML Tables models support customer-managed encryption keys in available regions except the US and EU multi-regions. |
| 2023-03-20 | AutoML Tables optimization objective options |  | AutoML Tables models support additional OPTIMIZATION_OBJECTIVE settings for maximizing precision at recall and recall at precision. |
| 2023-03-14 | Data lineage tab |  | The Lineage tab in table properties shows how data moves and transforms through BigQuery. |
| 2023-03-13 | Interactive SQL Translator translation configurations |  | The BigQuery Interactive SQL Translator supports translation configurations and debugging for Batch SQL translator jobs. |
| 2023-03-10 | CREATE TABLE AS SELECT filtering for Amazon S3 and Azure Blob Storage |  | CREATE TABLE AS SELECT can filter data from Amazon S3 and Azure Blob Storage files before loading the results into BigQuery tables. |
| 2023-03-07 | Case-insensitive collation support |  | Case-insensitive collation support enables case-insensitive behavior across supported queries, views, materialized views, table functions, and BI Engine; Case-insensitive collation support lets string comparison and sorting ignore case in supported operations. |
| 2023-03-02 | WITH RECURSIVE |  | The WITH RECURSIVE clause lets queries include recursive common table expressions; WITH RECURSIVE enables recursive common table expressions in Google Standard SQL for BigQuery. |
| 2023-02-27 | Default column values |  | Default column values let users define default values on columns in BigQuery tables; BigQuery tables can define default values for columns. |
| 2023-02-22 | Primary and foreign key constraints |  | BigQuery supports defining primary key and foreign key table constraints. |
| 2023-02-21 | ALTER TABLE DROP COLUMN |  | ALTER TABLE DROP COLUMN lets users remove columns from BigQuery tables; The ALTER TABLE DROP COLUMN statement lets BigQuery remove columns from tables through SQL. |
| 2023-02-21 | ALTER TABLE RENAME COLUMN |  | ALTER TABLE RENAME COLUMN lets users rename columns in BigQuery tables; The ALTER TABLE RENAME COLUMN statement lets you rename columns in a table. |
| 2023-02-15 | bq service account impersonation |  | The bq command-line tool supports running commands with service account impersonation. |
| 2023-02-15 | Case-insensitive datasets and tables |  | Case-insensitive datasets and tables let users configure dataset and table names to behave case-insensitively. |
| 2023-02-15 | Explorer pane focused tab selection |  | The Explorer pane automatically selects the resource corresponding to the currently focused tab. |
| 2023-02-15 | Explorer pane search level expansion |  | The Explorer pane can show all resources at the searched resource's level through the Show more action. |
| 2023-02-13 | Materialized views over BigLake metadata cache-enabled tables |  | BigQuery can create materialized views over BigLake metadata cache-enabled tables that reference structured data in Cloud Storage. |
| 2023-02-09 | Additional dynamic data masking types |  | Dynamic data masking supports additional mask types for date year, email, first four characters, and last four characters. |
| 2023-02-09 | Explorer pane resource refresh |  | The Explorer pane lets users refresh the contents of a project or dataset resource. |
| 2023-02-06 | ANY_VALUE HAVING MAX and HAVING MIN |  | The ANY_VALUE function supports HAVING MAX and HAVING MIN clauses. |
| 2023-02-06 | query_info in INFORMATION_SCHEMA jobs views |  | The query_info column in INFORMATION_SCHEMA jobs views exposes query processing details for monitoring and optimization. |
| 2023-02-01 | BigQuery Data Transfer Service for Azure Blob Storage |  | The BigQuery Data Transfer Service can transfer data from Azure Blob Storage into BigQuery. |
| 2023-01-31 | Azure workload identity federation for BigQuery Omni connections |  | BigQuery Omni connections support Azure workload identity federation and connection creation in the Google Cloud console; Azure workload identity federation lets BigQuery Omni connections use Azure-managed applications without client secrets. |
| 2023-01-19 | BigQuery ML components for Vertex AI Managed Pipelines |  | BigQuery ML provides managed pipeline components for Vertex AI to build, run, and track ML workflows. |
| 2023-01-19 | BigQuery ML TRANSFORM clause model export |  | BigQuery ML can train models with the TRANSFORM clause and export them in TensorFlow SavedModel format. |
| 2023-01-19 | ML.IMPUTER |  | ML.IMPUTER is a BigQuery ML preprocessing function for filling missing values. |
| 2023-01-19 | ML.LABEL_ENCODER |  | ML.LABEL_ENCODER is a BigQuery ML preprocessing function for label encoding categorical values. |
| 2023-01-19 | ML.MAX_ABS_SCALER |  | ML.MAX_ABS_SCALER is a BigQuery ML preprocessing function for scaling by maximum absolute value. |
| 2023-01-19 | ML.NORMALIZER |  | ML.NORMALIZER is a BigQuery ML preprocessing function for feature normalization. |
| 2023-01-19 | ML.ONE_HOT_ENCODER |  | ML.ONE_HOT_ENCODER is a BigQuery ML preprocessing function for one-hot encoding categorical values. |
| 2023-01-19 | ML.ROBUST_SCALER |  | ML.ROBUST_SCALER is a BigQuery ML preprocessing function for robust feature scaling. |
| 2023-01-19 | Resource Manager tags on datasets |  | BigQuery datasets can have Resource Manager tags attached for conditional IAM policy application; Datasets can have Resource Manager tags attached so IAM policies can be applied conditionally. |
| 2023-01-17 | ARIMA_PLUS_XREG multivariate forecasting |  | BigQuery ML supports multivariate time-series forecasting with the ARIMA_PLUS_XREG model and extra feature columns. |
| 2023-01-17 | Sparse input support in BigQuery ML |  | BigQuery ML model training supports sparse input data with mostly zero or empty values. |
| 2023-01-10 | Reservations SQL OPTIONS clause support |  | BigQuery reservation management SQL supports OPTIONS clauses in ALTER and CREATE capacity, reservation, and assignment statements. |
| 2023-01-09 | Session-scoped temporary functions |  | Temporary functions created in a BigQuery session persist until the session ends. |
| 2023-01-09 | TEMP statements with OR REPLACE and IF NOT EXISTS in sessions |  | Session statements that use the TEMP keyword can also use OR REPLACE and IF NOT EXISTS. |
| 2023-01-04 | BigQuery ML image analytics with vision models |  | BigQuery ML can import vision models and run inference on image data accessed through object tables. |
| 2023-01-03 | BigQuery ML integration with Vertex AI Model Registry |  | BigQuery ML integrates with Vertex AI Model Registry for model registration, deployment, monitoring, and evaluation tracking. |
| 2022-12-22 | Lineage tab |  | The Lineage tab in table properties shows how data moves and transforms through BigQuery. |
| 2022-12-15 | Cloud SQL private connectivity |  | BigQuery can access and query Cloud SQL data over a private connection. |
| 2022-12-08 | Demo query guide |  | The demo query guide helps users query a Google Trends public dataset in BigQuery. |
| 2022-12-01 | Apache Iceberg table querying |  | BigQuery can query Apache Iceberg tables created by open source engines. |
| 2022-11-28 | ASCII control characters in CSV load jobs |  | BigQuery load jobs support ASCII control characters in CSV files. |
| 2022-11-28 | Reference schema files for external tables |  | BigQuery can use a reference file with the expected schema when creating external tables from Avro, ORC, and Parquet files. |
| 2022-11-14 | Slot estimator |  | The slot estimator helps manage BigQuery slot capacity using historical performance metrics. |
| 2022-11-09 | LOAD DATA cross-cloud transfers |  | The LOAD DATA statement can transfer data from Amazon S3 and Azure Blob Storage into BigQuery. |
| 2022-11-07 | Add data |  | The Add data feature in the Cloud console helps users find and ingest data sources for BigQuery. |
| 2022-11-03 | KEYS.NEW_WRAPPED_KEYSET |  | KEYS.NEW_WRAPPED_KEYSET creates a wrapped keyset directly in BigQuery. |
| 2022-11-03 | KEYS.REWRAP_KEYSET |  | KEYS.REWRAP_KEYSET rewraps a keyset directly in BigQuery. |
| 2022-11-03 | KEYS.ROTATE_WRAPPED_KEYSET |  | KEYS.ROTATE_WRAPPED_KEYSET rotates a wrapped keyset directly in BigQuery. |
| 2022-10-31 | Column-level data masking |  | Column-level data masking selectively obscures column values for specific groups of users; Column-level data masking selectively obscures column data for different groups of users. |
| 2022-10-31 | max_staleness materialized view option |  | The max_staleness option for materialized views balances query performance and cost for frequently changing datasets; The max_staleness option lets materialized views balance freshness, performance, and cost for large changing datasets. |
| 2022-10-27 | SEARCH function |  | The SEARCH function lets BigQuery users find specific data elements in unstructured text and semi-structured data with GoogleSQL. |
| 2022-10-27 | Search indexes |  | Search indexes accelerate finding specific data elements in unstructured text and semi-structured data with GoogleSQL. |
| 2022-10-26 | ST_ISCLOSED |  | ST_ISCLOSED returns TRUE for a non-empty geography whose elements each have an empty boundary. |
| 2022-10-26 | ST_ISRING |  | ST_ISRING checks whether a geography is a closed and simple linestring. |
| 2022-10-24 | BI Engine dashboard metrics |  | BigQuery dashboards can display BI Engine metrics including Top Tables Cached Bytes, Query Fallback Count, and Query Execution Count. |
| 2022-10-18 | Remote functions |  | Remote functions let BigQuery GoogleSQL queries invoke functions hosted in Cloud Functions or Cloud Run; Remote functions let BigQuery call functions implemented outside SQL and JavaScript, including external libraries and services. |
| 2022-10-11 | Analytics Hub publisher subscription management |  | Analytics Hub publishers can view subscriptions to a listing and remove subscriptions from that listing. |
| 2022-10-11 | Stored procedures for Apache Spark |  | BigQuery supports stored procedures for Apache Spark workloads. |
| 2022-10-10 | Multi-statement transactions |  | BigQuery supports transactions that span multiple SQL statements; Multi-statement transactions let BigQuery execute multiple mutating operations atomically with commit or rollback. |
| 2022-10-05 | Colab query result exploration |  | BigQuery query results can be explored in Colab with Python libraries. |
| 2022-10-03 | JSON data type |  | BigQuery supports JSON as a native column type; BigQuery standard SQL supports a native JSON data type for storing JSON data. |
| 2022-09-29 | ROUND function rounding mode argument |  | The ROUND function accepts a rounding mode as an optional argument in BigQuery. |
| 2022-09-29 | ROUND_HALF_EVEN rounding mode |  | BigQuery supports the ROUND_HALF_EVEN rounding mode for parameterized NUMERIC and BIGNUMERIC columns. |
| 2022-09-28 | Datastream for BigQuery |  | Datastream for BigQuery replicates data and schema updates from operational databases directly into BigQuery. |
| 2022-09-26 | Connected Sheets table opening from Explorer |  | BigQuery tables can be opened in Connected Sheets directly from the Explorer pane. |
| 2022-09-21 | BigQuery Omni on-demand pricing |  | BigQuery Omni supports an on-demand pricing model. |
| 2022-09-21 | Shuffle usage ratios in admin resource charts |  | Admin resource charts can display shuffle usage ratios for BigQuery workloads. |
| 2022-09-16 | BigQuery Omni maximum query result size increase |  | BigQuery Omni increases the maximum query result size limit from 2 MB to 10 GB. |
| 2022-09-16 | BigQuery Omni total query result size quota increase |  | BigQuery Omni increases the project quota for total query result sizes to 1 TB per day. |
| 2022-09-15 | Google Ads API support in BigQuery Data Transfer Service |  | The BigQuery Data Transfer Service for Google Ads supports the new Google Ads API. |
| 2022-09-14 | is_case_insensitive schema option |  | The is_case_insensitive schema option makes a dataset and its table names case-insensitive. |
| 2022-09-14 | JDBC default dataset project selection |  | The BigQuery JDBC driver supports configuring a default project for datasets with dataset_project_id. |
| 2022-09-14 | JDBC external account authentication |  | The BigQuery JDBC driver supports authentication with external accounts through workforce or workload identity federation. |
| 2022-09-14 | JDBC JSON data type support |  | The BigQuery JDBC driver supports the JSON data type. |
| 2022-09-14 | JDBC MATERIALIZED_VIEW table type support |  | The BigQuery JDBC driver includes MATERIALIZED_VIEW in getTableTypes results. |
| 2022-09-14 | JDBC Private Service Connect support |  | The BigQuery JDBC driver can connect by using Private Service Connect URLs. |
| 2022-09-14 | JDBC transaction APIs |  | The BigQuery JDBC driver supports JDBC transaction APIs. |
| 2022-09-14 | ODBC default dataset project selection |  | The BigQuery ODBC driver supports configuring a default project for datasets with dataset_project_id. |
| 2022-09-14 | ODBC external account authentication |  | The BigQuery ODBC driver supports limited external account authentication with workforce or workload identity federation using Azure AD and Okta. |
| 2022-09-14 | ODBC JSON data type support |  | The BigQuery ODBC driver supports the JSON data type. |
| 2022-09-14 | ODBC MATERIALIZED_VIEW table type support |  | The BigQuery ODBC driver includes MATERIALIZED_VIEW in table type results. |
| 2022-09-14 | ODBC Private Service Connect support |  | The BigQuery ODBC driver can connect by using Private Service Connect URLs. |
| 2022-09-14 | ODBC transaction APIs |  | The BigQuery ODBC driver supports ODBC transaction APIs. |
| 2022-09-13 | Storage Write API quota monitoring metrics |  | Cloud Monitoring exposes quota usage and limit metrics for Storage Write API concurrent connections and throughput. |
| 2022-09-09 | ARIMA_PLUS multi-region HOLIDAY_REGION support |  | ARIMA_PLUS models support multiple region strings in the HOLIDAY_REGION option to use the union of holidays. |
| 2022-09-09 | ARIMA_PLUS TREND_SMOOTHING_WINDOW_SIZE option |  | ARIMA_PLUS models support the TREND_SMOOTHING_WINDOW_SIZE option to smooth time-series trend components. |
| 2022-09-06 | Automatic Execution details display for long-running queries |  | The Cloud console automatically opens the Execution details tab for long-running BigQuery queries. |
| 2022-09-06 | Query validation message on completion or cancellation |  | The BigQuery query editor shows the query validation message when a query completes or is canceled. |
| 2022-09-01 | CMEK integration with organization policies |  | This feature integrates customer-managed encryption keys with CMEK organization policies. |
| 2022-09-01 | Random Forest model |  | The Random Forest model lets BigQuery ML train and use random forest models for machine learning workloads. |
| 2022-09-01 | Slot recommender for on-demand billing |  | The slot recommender provides reservation recommendations for customers using on-demand billing. |
| 2022-08-29 | Community-contributed UDFs |  | Community-contributed user-defined functions are available through the bigquery-utils repository and the public persistent_udfs dataset. |
| 2022-08-29 | Query editor function signature parameter removal |  | This query editor feature lets you remove parameter names from an autocompleted function signature with Backspace or Delete. |
| 2022-08-17 | Cloud console metadata copy to clipboard |  | The Cloud console can copy selected schema fields and resource IDs to the clipboard. |
| 2022-08-17 | Expandable tab titles |  | Cloud console tab titles expand when more space is available so longer names are easier to read. |
| 2022-08-17 | Explorer pane saved queries access |  | Saved queries can be accessed directly from the Explorer pane under a project. |
| 2022-08-17 | Explorer pane table search |  | The Explorer pane can search for tables by dataset and table name. |
| 2022-08-17 | Query editor F1 shortcuts help |  | The query editor can show additional editor shortcuts when you press F1. |
| 2022-08-17 | Resizable query result columns |  | Query results can be viewed in resizable columns in the Cloud console. |
| 2022-08-16 | Workforce identity federation for BigQuery |  | Workforce identity federation lets users from external identity providers authenticate and access BigQuery resources. |
| 2022-08-15 | BigQuery Omni reservation DDL and access control DCL |  | BigQuery Omni supports reservation DDL and access control DCL statements. |
| 2022-08-10 | Cloud Spanner federated query execution priority |  | This feature lets you manage query execution priority for Cloud Spanner federated queries. |
| 2022-08-10 | Project and organization default configurations |  | BigQuery can apply default configurations at the project or organization level. |
| 2022-08-09 | Google Cloud Bigtable external data source querying |  | BigQuery can query external data sources stored in Google Cloud Bigtable. |
| 2022-08-01 | CBRT SQL function |  | The CBRT function computes the cube root of a value in SQL. |
| 2022-08-01 | LOAD DATA statement |  | The LOAD DATA statement loads data from one or more files into a table. |
| 2022-07-28 | Pub/Sub BigQuery subscriptions |  | Pub/Sub BigQuery subscriptions can write messages directly to an existing BigQuery table. |
| 2022-07-27 | Inverse trigonometric SQL functions |  | This function set adds trigonometric and hyperbolic functions including COT, COTH, CSC, CSCH, SEC, and SECH. |
| 2022-07-25 | Analytics Hub publishing for BigLake tables |  | BigLake tables can be published as Analytics Hub listings. |
| 2022-07-25 | BigLake |  | BigLake is a storage engine for querying and governing data across cloud data lakes and warehouses; BigLake is a storage engine for querying and unifying cross-cloud data lakes and warehouses with fine-grained table access controls. |
| 2022-07-25 | BigQuery ML with BigLake Cloud Storage data |  | BigQuery ML can build models using Cloud Storage data through BigLake tables. |
| 2022-07-12 | Reservation assignment by job type |  | Reservations can assign folders, organizations, or projects by specific job type in the Cloud console. |
| 2022-07-11 | google.cloud.bigquery.reservation.v1beta1.api package | 2022-09-27 | The google.cloud.bigquery.reservation.v1beta1.api package is the beta BigQuery Reservation API package superseded by the v1 API; deprecated on 2022-09-27. |
| 2022-07-06 | APPENDS change history TVF |  | The APPENDS table-valued function returns the history of table append operations over a time window. |
| 2022-06-29 | tables.get BASIC view |  | The tables.get API method can return a BASIC view that omits some storage statistics to reduce latency. |
| 2022-06-23 | BI Engine preferred tables |  | BI Engine preferred tables let you limit BI Engine acceleration to a specified set of tables. |
| 2022-06-15 | Deterministic AEAD encryption functions |  | Deterministic AEAD SQL functions provide column-level encryption and decryption while supporting aggregation and joins. |
| 2022-06-14 | Data Studio exploration from query results |  | BigQuery query results in the Cloud console can link directly to Data Studio for exploration. |
| 2022-06-14 | VPC Service Controls for BigQuery Omni external clouds |  | This feature lets you configure VPC Service Controls perimeters and read or write permissions for BigQuery Omni access to external clouds. |
| 2022-06-13 | @@dataset_project_id system variable |  | The @@dataset_project_id system variable sets a default project when a dataset project is not specified in a query. |
| 2022-06-08 | SQL metadata extraction tools |  | SQL metadata extraction tools extract metadata to improve the accuracy of batch SQL translation jobs. |
| 2022-06-08 | SQL object name mapping |  | SQL object name mapping tools improve the accuracy of batch SQL translation jobs by mapping source and target object names. |
| 2022-06-08 | SQL translation services |  | Batch and interactive translation services translate SQL across major SQL dialects. |
| 2022-06-03 | BigQuery Omni reservation and access control DCL |  | BigQuery Omni supports reservation and access control DCL statements. |
| 2022-05-24 | Informatica Data Loader integration |  | Informatica Data Loader connectors can load data into BigQuery. |
| 2022-05-05 | %J format element |  | The %J format element provides the ISO 8601 1-based day of the year for date and time functions. |
| 2022-05-03 | ARIMA_PLUS fast training options |  | ARIMA_PLUS models support TIME_SERIES_LENGTH_FRACTION, MIN_TIME_SERIES_LENGTH, and MAX_TIME_SERIES_LENGTH options for faster training. |
| 2022-05-03 | ARIMA_PLUS forecasting accuracy metrics |  | ARIMA_PLUS models can use ML.EVALUATE to calculate forecasting accuracy metrics such as MAPE, SMAPE, and MSE. |
| 2022-05-02 | COLLATE clause |  | The COLLATE clause applies a collation specification to a specific table column in supported DDL statements. |
| 2022-05-02 | COLLATE function |  | The COLLATE function returns a STRING value with a collation specification applied. |
| 2022-05-02 | DEFAULT COLLATE clause |  | The DEFAULT COLLATE clause applies a default collation specification to supported columns in schemas and tables. |
| 2022-04-25 | BigQuery Admin Resource Charts for on-demand users |  | BigQuery Admin Resource Charts let administrators monitor key metrics and troubleshoot usage across an organization for on-demand workloads. |
| 2022-04-25 | TABLE_STORAGE view |  | The TABLE_STORAGE view provides a snapshot of current storage usage for tables and materialized views. |
| 2022-04-07 | Search indexes and SEARCH function |  | Search indexes and the SEARCH function let GoogleSQL efficiently find data in unstructured text and semi-structured data. |
| 2022-04-06 | Analytics Hub |  | Analytics Hub lets organizations create secure data exchanges and share analytics assets through publishable listings. |
| 2022-04-05 | BigQuery Omni cross-cloud transfer |  | BigQuery Omni cross-cloud transfer moves data across clouds including AWS and Azure. |
| 2022-04-01 | BigQuery ML and Vertex AI Model Registry integration |  | This integration sends BigQuery ML models to Vertex AI Model Registry for lifecycle management and deployment. |
| 2022-03-31 | Data Signals for Google Search Trends public dataset |  | The international public dataset for Data Signals for Google Search Trends is available through Google Cloud Marketplace and Analytics Hub. |
| 2022-03-28 | BigQuery ML Wide-and-Deep model |  | BigQuery ML supports training Wide-and-Deep models for classification and regression workloads; BigQuery ML supports Wide-and-Deep classifier and regressor models through DNN_LINEAR_COMBINED model types. |
| 2022-03-17 | BigQuery slot recommender |  | The BigQuery slot recommender analyzes on-demand usage to recommend slot capacity purchase options and cost-performance tradeoffs. |
| 2022-03-16 | Explicit schema for external tables |  | BigQuery external tables over Parquet, ORC, and Avro can be created with an explicitly specified schema instead of relying on auto-detection. |
| 2022-03-04 | BigQuery sessions |  | BigQuery sessions let you group SQL activity across scripts and transactions with shared session state and metadata; BigQuery sessions let SQL activity share a session identifier, session variables, temporary tables, and session-level metadata across scripts and transactions. |
| 2022-02-14 | INFORMATION_SCHEMA streaming timeline views |  | INFORMATION_SCHEMA.STREAMING_TIMELINE_* views expose streaming timeline metadata in BigQuery. |
| 2022-02-14 | QUALIFY clause |  | The QUALIFY clause lets Google Standard SQL queries filter results produced by analytic functions; The QUALIFY clause filters query results based on window function output in BigQuery SQL. |
| 2022-02-10 | BigQuery Omni INFORMATION_SCHEMA JOBS views |  | BigQuery Omni supports INFORMATION_SCHEMA.JOBS_* views for querying job metadata across supported clouds. |
| 2022-02-10 | BigQuery Omni INFORMATION_SCHEMA RESERVATION views |  | BigQuery Omni supports INFORMATION_SCHEMA.RESERVATION* views for querying reservation metadata across supported clouds. |
| 2022-02-03 | BigQuery migration assessment |  | BigQuery migration assessment evaluates the complexity of migrating an existing data warehouse to BigQuery. |
| 2022-02-03 | BigQuery ML hyperparameter tuning |  | BigQuery ML hyperparameter tuning searches for optimal hyperparameters when training models with CREATE MODEL statements. |
| 2022-01-31 | Materialized views with inner join |  | BigQuery supports materialized views defined with inner joins; BigQuery materialized views can include inner joins in their definitions. |
| 2022-01-31 | Materialized views without aggregation |  | BigQuery supports materialized views that do not require aggregation. |
| 2022-01-25 | BigQuery ML Explainable AI |  | Explainable AI in BigQuery ML helps interpret prediction and forecasting results at scale; Explainable AI in BigQuery ML shows how input features contribute to classification and regression predictions. |
| 2021-12-14 | BigQuery BI Engine SQL interface |  | The BigQuery BI Engine SQL interface provides SQL-based access to BI Engine acceleration capabilities; BigQuery BI Engine can serve popular BI tools through an SQL interface. |
| 2021-12-06 | BigQuery ML anomaly detection |  | BigQuery ML anomaly detection uses ML.DETECT_ANOMALIES with supported models to identify anomalies in time-series and IID data. |
| 2021-12-03 | BigQuery ML autoencoder model |  | BigQuery ML supports autoencoder models for feature embedding and unsupervised anomaly detection. |
| 2021-12-03 | BigQuery ML PCA model |  | BigQuery ML supports principal component analysis models for dimensionality reduction and related tasks; BigQuery ML supports principal component analysis models for dimensionality reduction and related machine learning workflows. |
| 2021-12-01 | BigQuery Data Transfer Service Audit Logging |  | BigQuery Data Transfer Service supports Audit Logging for transfer-related activity visibility. |
| 2021-12-01 | BigQuery Data Transfer Service Cloud Logging |  | BigQuery Data Transfer Service supports Cloud Logging for transfer operational logs. |
| 2021-12-01 | BigQuery Data Transfer Service Cloud Monitoring |  | BigQuery Data Transfer Service supports Cloud Monitoring for transfer metrics and observability. |
| 2021-11-12 | Authorized datasets |  | Authorized datasets let BigQuery share dataset access across authorized resources without granting direct table access. |
| 2021-11-09 | Scripting CASE search_expression statement |  | The scripting CASE search_expression statement executes the first SQL statement block whose WHEN expression matches the search expression. |
| 2021-11-09 | Scripting CASE statement |  | The scripting CASE statement executes the first SQL statement block whose boolean condition evaluates to true. |
| 2021-11-09 | Scripting FOR...IN statement |  | The scripting FOR...IN statement iterates over each row returned by a table expression. |
| 2021-11-09 | Scripting LABELS statement |  | The scripting LABELS statement provides an unconditional jump to the end of the labeled block or loop. |
| 2021-11-09 | Scripting REPEAT statement |  | The scripting REPEAT statement repeatedly executes SQL statements until a boolean condition becomes true. |
| 2021-11-08 | INFORMATION_SCHEMA DDL column |  | BigQuery INFORMATION_SCHEMA views for routines, schemata, and tables expose a DDL column containing the resource creation statement. |
| 2021-11-02 | Parameterized types |  | BigQuery supports parameterized data types such as bounded STRING and BYTES and precision-constrained NUMERIC and BIGNUMERIC types; Parameterized types let BigQuery define STRING, BYTES, NUMERIC, and BIGNUMERIC values with explicit length, precision, or scale constraints. |
| 2021-10-28 | Table snapshots |  | Table snapshots create point-in-time copies of tables, including support for console management and cross-project snapshot creation; Table snapshots create low-cost, read-only copies of BigQuery tables at a specific point in time. |
| 2021-10-27 | SQL column-level encryption with Cloud KMS |  | BigQuery supports SQL column-level encryption using Cloud KMS to encrypt keysets within AEAD functions. |
| 2021-10-25 | BigQuery Omni |  | BigQuery Omni provides multi-cloud analytics capabilities across Google Cloud and other cloud environments. |
| 2021-10-12 | BigQuery Storage Write API |  | The BigQuery Storage Write API unifies high-throughput streaming ingestion and batch loading in a single API; The BigQuery Storage Write API is a stream-based ingestion API with low cost, high throughput, exactly-once delivery, and real-time latency. |
| 2021-10-01 | ST_BUFFER |  | ST_BUFFER returns a GEOGRAPHY representing a buffer around an input geography using a segment-based approximation. |
| 2021-10-01 | ST_BUFFERWITHTOLERANCE |  | ST_BUFFERWITHTOLERANCE returns a GEOGRAPHY representing a buffer around an input geography using a tolerance-based approximation. |
| 2021-09-28 | Authorized table functions |  | Authorized table functions let BigQuery table functions run with delegated access to referenced data. |
| 2021-09-28 | Table functions |  | Table functions let BigQuery queries return tables from parameterized function definitions; Table functions are user-defined functions that return tables in BigQuery. |
| 2021-09-27 | S2_CELLIDFROMPOINT |  | S2_CELLIDFROMPOINT returns the S2 cell ID covering a point geography. |
| 2021-09-27 | S2_COVERINGCELLIDS |  | S2_COVERINGCELLIDS returns an array of S2 cell IDs that cover a geography. |
| 2021-09-27 | ST_BOUNDINGBOX |  | ST_BOUNDINGBOX returns a STRUCT representing the bounding box of a geography. |
| 2021-09-27 | ST_EXTENT |  | ST_EXTENT returns a STRUCT representing the bounding box of a set of geographies. |
| 2021-09-17 | ST_ANGLE |  | ST_ANGLE returns the angle between two intersecting lines. |
| 2021-09-17 | ST_AZIMUTH |  | ST_AZIMUTH returns the azimuth of a line segment formed by two points. |
| 2021-09-17 | ST_EXTERIORRING |  | ST_EXTERIORRING returns a linestring geography corresponding to the outer ring of a polygon geography. |
| 2021-09-17 | ST_GEOMETRYTYPE |  | ST_GEOMETRYTYPE returns the OGC geometry type of a geography as a string. |
| 2021-09-17 | ST_INTERIORRINGS |  | ST_INTERIORRINGS returns an array of linestring geographies corresponding to the interior rings of a polygon geography. |
| 2021-09-17 | ST_NUMGEOMETRIES |  | ST_NUMGEOMETRIES returns the number of geometries in a geography. |
| 2021-09-08 | Job metadata deletion with bq |  | The bq command-line tool can delete metadata for a specific job. |
| 2021-08-30 | Parquet export |  | BigQuery can export table data in Parquet format; BigQuery supports exporting table data in Parquet format. |
| 2021-08-23 | BigQuery Admin Resource Charts |  | BigQuery Admin Resource Charts provide reservation administrators with organization-wide visibility into slot usage, concurrency, execution time, errors, and processed bytes; BigQuery Admin Resource Charts provide reservation administrators with organization-wide visibility into slot usage, concurrency, and job execution metrics. |
| 2021-08-23 | BigQuery Slot Estimator |  | BigQuery Slot Estimator analyzes slot utilization to estimate required slot capacity and forecast performance impacts of capacity changes. |
| 2021-08-19 | Cloud Spanner federated queries |  | BigQuery supports federated queries against Cloud Spanner. |
| 2021-08-03 | ALTER COLUMN SET DATA TYPE |  | BigQuery supports the ALTER COLUMN SET DATA TYPE DDL statement to change a column's data type. |
| 2021-08-03 | CREATE TABLE COPY |  | CREATE TABLE COPY creates a new table by copying an existing table. |
| 2021-08-03 | CREATE TABLE LIKE |  | CREATE TABLE LIKE creates a new table using the schema definition of an existing table. |
| 2021-07-27 | INTERVAL type |  | BigQuery supports an INTERVAL type for representing durations and amounts of time. |
| 2021-07-26 | DML statistics |  | BigQuery DML query jobs return inserted, deleted, and updated row statistics, including exposure in INFORMATION_SCHEMA.JOBS_BY_* views. |
| 2021-07-26 | Holiday effects for weekly time series |  | BigQuery time series models support holiday effects for weekly time series in addition to daily time series. |
| 2021-07-19 | CONTAINS_SUBSTR |  | CONTAINS_SUBSTR is a BigQuery standard SQL function for substring containment checks. |
| 2021-07-19 | CREATE ASSIGNMENT |  | CREATE ASSIGNMENT is a workload management DCL statement for creating reservation assignments in BigQuery. |
| 2021-07-19 | CREATE CAPACITY |  | CREATE CAPACITY is a workload management DCL statement for creating capacity resources in BigQuery reservations management. |
| 2021-07-19 | CREATE RESERVATION |  | CREATE RESERVATION is a workload management DCL statement for creating reservation resources in BigQuery. |
| 2021-07-19 | DROP ASSIGNMENT |  | DROP ASSIGNMENT is a workload management DCL statement for removing reservation assignments in BigQuery. |
| 2021-07-19 | DROP CAPACITY |  | DROP CAPACITY is a workload management DCL statement for removing capacity resources in BigQuery reservations management. |
| 2021-07-19 | DROP RESERVATION |  | DROP RESERVATION is a workload management DCL statement for removing reservation resources in BigQuery. |
| 2021-07-19 | PIVOT operator |  | The PIVOT operator rotates row values into columns in BigQuery SQL queries; The PIVOT operator rotates row values into columns in BigQuery SQL queries. |
| 2021-07-19 | UNPIVOT operator |  | The UNPIVOT operator transforms columns into rows in BigQuery SQL queries; The UNPIVOT operator transforms columns into rows in BigQuery SQL queries. |
| 2021-07-07 | Non-aggregate materialized views |  | BigQuery materialized views can be defined without aggregation to cache query results for broader workloads. |
| 2021-06-28 | Access management DCL statements |  | BigQuery supports data control language statements for access management, including GRANT and REVOKE. |
| 2021-06-28 | ALTER COLUMN SET OPTIONS |  | The ALTER COLUMN SET OPTIONS statement lets BigQuery modify column options through SQL. |
| 2021-06-28 | BigQuery Data Transfer Service observability integration |  | BigQuery Data Transfer Service supports audit logging, Cloud Logging, and Cloud Monitoring for operational visibility. |
| 2021-06-28 | CAST format clause |  | The CAST format clause adds formatting support when casting values between supported BigQuery data types. |
| 2021-06-28 | Google Trends dataset |  | The Google Trends dataset provides BigQuery-accessible trend data through Google Cloud Marketplace; The Google Trends dataset provides BigQuery-accessible trend data through Google Cloud Marketplace. |
| 2021-06-28 | INFORMATION_SCHEMA.OBJECT_PRIVILEGES view |  | The INFORMATION_SCHEMA.OBJECT_PRIVILEGES view exposes object privilege metadata in BigQuery. |
| 2021-06-28 | INT64 aliases |  | BigQuery supports alternate SQL aliases for INT64, including INT, SMALLINT, INTEGER, BIGINT, TINYINT, and BYTEINT. |
| 2021-06-28 | PARSE_BIGNUMERIC |  | PARSE_BIGNUMERIC converts string input into the BIGNUMERIC data type in BigQuery. |
| 2021-06-28 | PARSE_NUMERIC |  | PARSE_NUMERIC converts string input into the NUMERIC data type in BigQuery. |
| 2021-06-28 | ST_GEOGFROM |  | ST_GEOGFROM creates GEOGRAPHY values from supported input representations in BigQuery. |
| 2021-06-22 | AUTOENCODER model type |  | The AUTOENCODER model type adds TensorFlow-based deep learning for sparse representations, anomaly detection, and dimensionality reduction in BigQuery ML. |
| 2021-06-22 | AUTOENCODER support in ML.PREDICT |  | ML.PREDICT can use trained AUTOENCODER models to reduce the dimensionality of query results in BigQuery ML. |
| 2021-06-22 | Google Merchant Center inventory transfers |  | BigQuery Data Transfer Service supports Google Merchant Center data transfers for local and regional inventories. |
| 2021-06-22 | Hyperparameter tuning |  | Hyperparameter tuning searches for optimal training parameters for BigQuery ML models created with CREATE MODEL. |
| 2021-06-22 | ML.DETECT_ANOMALIES |  | ML.DETECT_ANOMALIES performs anomaly detection in BigQuery ML for supported time-series and IID data models. |
| 2021-06-21 | Row-level security |  | Row-level security restricts access to table rows in BigQuery based on policy rules. |
| 2021-05-20 | GeoJSON loading |  | BigQuery GIS supports loading geography data from newline-delimited GeoJSON files. |
| 2021-05-20 | ST_ENDPOINT |  | ST_ENDPOINT returns the ending point of a linestring geography in BigQuery GIS. |
| 2021-05-20 | ST_POINTN |  | ST_POINTN returns the point at a specified position from a linestring geography in BigQuery GIS. |
| 2021-05-20 | ST_STARTPOINT |  | ST_STARTPOINT returns the starting point of a linestring geography in BigQuery GIS. |
| 2021-05-19 | Table renaming |  | BigQuery supports renaming tables through SQL with ALTER TABLE RENAME TO. |
| 2021-05-18 | AutoML Tables CREATE MODEL |  | The CREATE MODEL statement can train AutoML Tables models on structured data in BigQuery ML. |
| 2021-04-30 | ALTER COLUMN DROP NOT NULL |  | BigQuery supports dropping a NOT NULL constraint from a column with ALTER COLUMN. |
| 2021-04-30 | CREATE VIEW with column name list |  | BigQuery supports defining a view with an explicit column name list in CREATE VIEW statements. |
| 2021-04-21 | Clustering specification modification |  | BigQuery supports converting tables between clustered and non-clustered layouts and updating clustered columns. |
| 2021-04-19 | ARIMA model type | 2021-04-19 | The ARIMA model type is the legacy BigQuery ML forecasting model superseded by ARIMA_PLUS; deprecated on 2021-04-19. |
| 2021-04-19 | ARIMA_PLUS models |  | ARIMA_PLUS models add explainable forecasting, richer evaluation, multiple ID columns, higher scale, new training options, and finer frequency support in BigQuery ML. |
| 2021-04-09 | Parquet ENUM and LIST loading support |  | BigQuery improves Parquet loading by supporting ENUM conversion to STRING or BYTES and schema inference for LIST logical types. |
| 2021-03-31 | BIGNUMERIC data type |  | The BIGNUMERIC data type provides high-precision numeric computation in BigQuery; The BIGNUMERIC data type provides high-precision numeric computation in BigQuery. |
| 2021-03-31 | Dataset DDL statements |  | BigQuery supports CREATE SCHEMA, ALTER SCHEMA, and DROP SCHEMA statements for dataset lifecycle management. |
| 2021-03-31 | INFORMATION_SCHEMA partition views |  | INFORMATION_SCHEMA partition views provide metadata about table partitions in BigQuery. |
| 2021-03-31 | INFORMATION_SCHEMA.TABLES DDL column |  | The DDL column in INFORMATION_SCHEMA.TABLES exposes table recreation SQL in BigQuery metadata. |
| 2021-03-31 | JSON array extraction functions |  | BigQuery supports JSON_EXTRACT_STRING_ARRAY, JSON_QUERY_ARRAY, and JSON_VALUE_ARRAY for extracting arrays from JSON values. |
| 2021-03-31 | TABLESAMPLE operator |  | The TABLESAMPLE operator lets BigQuery query random subsets of data from large tables. |
| 2021-02-25 | Materialized views |  | Materialized views are precomputed views that cache query results to improve performance and reduce cost in BigQuery; BigQuery supports materialized views for precomputed query results. |
| 2021-01-29 | DATETIME clustering columns |  | Clustered BigQuery tables support the DATETIME type as a clustering column. |
| 2020-12-16 | BigQuery Data Transfer Service VPC Service Controls integration |  | BigQuery Data Transfer Service can be protected by VPC Service Controls service perimeters. |
| 2020-11-23 | AI Platform integration for boosted tree models |  | BigQuery ML integrates with AI Platform for boosted tree models, including support for related model creation and feature importance workflows. |
| 2020-11-23 | AI Platform integration for DNN models |  | BigQuery ML integrates with AI Platform for Deep Neural Network model training workflows. |
| 2020-11-23 | Model export to Cloud Storage for online prediction |  | BigQuery ML models can be exported to Cloud Storage and used for online prediction. |
| 2020-11-17 | Column-level security |  | BigQuery column-level security restricts access to columns using policy tags, including replication across locations; BigQuery supports access control policies at the column level. |
| 2020-10-26 | SUBSTRING function |  | The SUBSTRING function extracts portions of strings in BigQuery SQL. |
| 2020-10-22 | ST_GEOGFROMGEOJSON make_valid parameter |  | The make_valid parameter lets ST_GEOGFROMGEOJSON attempt to correct polygon issues when importing geography data. |
| 2020-10-22 | ST_GEOGFROMTEXT make_valid parameter |  | The make_valid parameter lets ST_GEOGFROMTEXT attempt to correct polygon issues when importing geography data. |
| 2020-10-22 | ST_GEOGFROMTEXT planar parameter |  | The planar parameter lets ST_GEOGFROMTEXT treat imported WKT geometries as having planar edges. |
| 2020-10-14 | ALTER TABLE ADD COLUMN statement |  | BigQuery Standard SQL supports the ALTER TABLE ADD COLUMN statement. |
| 2020-10-14 | ASCII function |  | BigQuery Standard SQL supports the ASCII string function. |
| 2020-10-14 | CHR function |  | BigQuery Standard SQL supports the CHR string function. |
| 2020-10-14 | Core INFORMATION_SCHEMA views |  | BigQuery provides generally available INFORMATION_SCHEMA views for datasets, tables, columns, routines, parameters, and related metadata. |
| 2020-10-14 | CREATE EXTERNAL TABLE statement |  | BigQuery Standard SQL supports the CREATE EXTERNAL TABLE statement. |
| 2020-10-14 | DATE arithmetic operators |  | BigQuery standard SQL supports arithmetic operators for DATE values. |
| 2020-10-14 | DROP EXTERNAL TABLE statement |  | BigQuery Standard SQL supports the DROP EXTERNAL TABLE statement. |
| 2020-10-14 | Duplicate column names in query results |  | BigQuery queries can return duplicate column names in result sets. |
| 2020-10-14 | Dynamic SQL |  | Dynamic SQL lets BigQuery generate and execute SQL statements at runtime with EXECUTE IMMEDIATE; BigQuery supports dynamic SQL to generate and execute SQL statements at runtime. |
| 2020-10-14 | EXPORT DATA statement |  | BigQuery Standard SQL supports the EXPORT DATA statement. |
| 2020-10-14 | INITCAP function |  | BigQuery Standard SQL supports the INITCAP string function. |
| 2020-10-14 | INSTR function |  | BigQuery Standard SQL supports the INSTR string search function. |
| 2020-10-14 | LAST_DAY function |  | BigQuery Standard SQL supports the LAST_DAY date function. |
| 2020-10-14 | LEFT function |  | BigQuery Standard SQL supports the LEFT string function. |
| 2020-10-14 | OCTET_LENGTH function |  | BigQuery Standard SQL supports the OCTET_LENGTH string length function. |
| 2020-10-14 | REGEXP_EXTRACT function |  | BigQuery Standard SQL supports additional position and occurrence parameters for the REGEXP_EXTRACT function. |
| 2020-10-14 | REGEXP_INSTR function |  | BigQuery Standard SQL supports the REGEXP_INSTR regular expression search function. |
| 2020-10-14 | REGEXP_SUBSTR function |  | BigQuery Standard SQL supports the REGEXP_SUBSTR regular expression substring function. |
| 2020-10-14 | RIGHT function |  | BigQuery Standard SQL supports the RIGHT string function. |
| 2020-10-14 | SOUNDEX function |  | BigQuery Standard SQL supports the SOUNDEX phonetic matching function. |
| 2020-10-14 | TRANSLATE function |  | BigQuery Standard SQL supports the TRANSLATE string replacement function. |
| 2020-10-14 | TRUNCATE TABLE statement |  | BigQuery Standard SQL supports the TRUNCATE TABLE statement. |
| 2020-10-14 | UNICODE function |  | BigQuery Standard SQL supports the UNICODE character code function. |
| 2020-10-14 | Unicode table names |  | BigQuery supports table names that use Unicode characters. |
| 2020-10-06 | Authorized user-defined functions |  | Authorized user-defined functions let you share query results without exposing the underlying tables. |
| 2020-10-06 | Data Catalog-powered search and autocomplete |  | The Cloud console can use Data Catalog-powered search and autocomplete for BigQuery resources. |
| 2020-10-01 | Table-level access control |  | BigQuery supports access control policies at the table level; BigQuery supports access control policies at the table level. |
| 2020-09-29 | Configurable DATA_FREQUENCY for multi-time-series forecasting |  | BigQuery ML time series models let you set DATA_FREQUENCY explicitly when forecasting multiple time series with TIME_SERIES_ID_COL. |
| 2020-09-21 | DATETIME column partitioning |  | BigQuery supports using a DATETIME column as the partitioning column for time-unit partitioned tables. |
| 2020-09-21 | Hourly time-unit partitioning |  | BigQuery supports creating time-unit partitions with hourly granularity; BigQuery supports creating partitioned tables with hourly time-unit granularity. |
| 2020-09-21 | Monthly time-unit partitioning |  | BigQuery supports creating time-unit partitions with monthly granularity. |
| 2020-09-21 | Yearly time-unit partitioning |  | BigQuery supports creating time-unit partitions with yearly granularity. |
| 2020-09-11 | BQ.JOBS.CANCEL system procedure |  | BigQuery provides the BQ.JOBS.CANCEL system procedure to cancel jobs. |
| 2020-08-27 | AUTO_ARIMA_MAX_ORDER training option |  | BigQuery ML time series models support the AUTO_ARIMA_MAX_ORDER training option. |
| 2020-08-27 | Time series models |  | BigQuery ML supports time series models for forecasting; BigQuery ML supports time series models for forecasting. |
| 2020-08-26 | INFORMATION_SCHEMA reservation views |  | BigQuery provides INFORMATION_SCHEMA views for reservation metadata; BigQuery provides INFORMATION_SCHEMA views for reservation metadata. |
| 2020-08-25 | INFORMATION_SCHEMA jobs-by-timeslice views |  | BigQuery provides INFORMATION_SCHEMA views for jobs metadata by timeslice. |
| 2020-08-24 | Scheduled queries with service account credentials |  | BigQuery scheduled queries can use service account credentials; BigQuery scheduled queries can run using service account credentials. |
| 2020-08-19 | Optional parentheses in consecutive JOIN clauses |  | BigQuery SQL allows parentheses to be omitted in consecutive ON or USING join clauses. |
| 2020-08-18 | On-demand pricing assignment with Reservations |  | BigQuery Reservations lets you explicitly assign projects to use on-demand pricing. |
| 2020-08-17 | Matrix Factorization models |  | BigQuery ML supports Matrix Factorization models for recommendation workloads; BigQuery ML supports Matrix Factorization models for recommendation workloads. |
| 2020-07-27 | INFORMATION_SCHEMA streaming metadata views |  | BigQuery provides INFORMATION_SCHEMA views for historical and real-time streaming metadata. |
| 2020-07-16 | ST_CONVEXHULL function |  | BigQuery GIS supports the ST_CONVEXHULL function to return the smallest convex geography covering the input. |
| 2020-07-16 | ST_DUMP function |  | BigQuery GIS supports the ST_DUMP function to return an array of simple geography components from the input. |
| 2020-07-15 | Data split and validation options for AutoML Tables training |  | BigQuery ML supports data split and validation options for AutoML Tables model training. |
| 2020-07-13 | ASSERT statement |  | BigQuery Standard SQL supports the ASSERT statement for validating expected data conditions. |
| 2020-06-29 | Flex slots |  | BigQuery Reservations supports Flex slots for short-term slot commitments. |
| 2020-06-26 | Region-qualified INFORMATION_SCHEMA views |  | BigQuery supports region-qualified INFORMATION_SCHEMA views. |
| 2020-06-16 | AI Platform integration for BigQuery ML |  | BigQuery ML integrates with AI Platform for supported model types. |
| 2020-06-16 | AutoML Tables models in BigQuery ML |  | BigQuery ML supports AutoML Tables models through preview AI Platform integration. |
| 2020-06-16 | Deep neural network models in BigQuery ML |  | BigQuery ML supports deep neural network models through preview AI Platform integration. |
| 2020-06-16 | INFORMATION_SCHEMA jobs views |  | BigQuery provides INFORMATION_SCHEMA views for jobs metadata. |
| 2020-06-16 | Top Brands report for Google Merchant Center Best Sellers exports |  | BigQuery Data Transfer Service supports the Top Brands report for Google Merchant Center Best Sellers exports. |
| 2020-06-16 | XGBoost boosted tree models in BigQuery ML |  | BigQuery ML supports boosted tree models using XGBoost through preview AI Platform integration. |
| 2020-06-09 | Clustering for non-partitioned tables |  | BigQuery supports clustering on tables that are not partitioned. |
| 2020-06-02 | Slot purchases with bq command-line tool |  | BigQuery Reservations lets you purchase slots using the bq command-line tool. |
| 2020-06-02 | ST_Simplify function |  | BigQuery GIS supports the ST_Simplify function to return a simplified geography. |
| 2020-05-20 | Cloud SQL federated queries |  | BigQuery supports federated queries against Cloud SQL data; BigQuery supports federated queries across BigQuery and Cloud SQL data. |
| 2020-05-20 | Trial slots |  | BigQuery offers Trial slots for qualified customers in supported multi-regions. |
| 2020-05-08 | Next generation streaming |  | BigQuery supports next generation streaming for data ingestion. |
| 2020-05-01 | JSON_EXTRACT_ARRAY function |  | BigQuery supports the JSON_EXTRACT_ARRAY function to extract JSON contents as a string array. |
| 2020-05-01 | NULLS FIRST and NULLS LAST in ORDER BY |  | BigQuery ORDER BY supports NULLS FIRST and NULLS LAST to control null sorting behavior. |
| 2020-04-22 | Export BigQuery ML models to Cloud Storage |  | BigQuery ML supports exporting models to Cloud Storage for external use. |
| 2020-04-22 | Online prediction with exported BigQuery ML models |  | Exported BigQuery ML models can be used for online prediction. |
| 2020-04-16 | BigQuery Reservations |  | BigQuery Reservations lets you purchase slots for flat-rate pricing and allocate them for workload management; BigQuery Reservations lets customers purchase and allocate slots for workload management and flat-rate pricing. |
| 2020-04-14 | Google Merchant Center Best Sellers data transfers |  | BigQuery Data Transfer Service supports Google Merchant Center Best Sellers data transfers. |
| 2020-04-09 | Scheduling queries with bigquery.jobs.create permission |  | BigQuery lets users schedule queries with the bigquery.jobs.create permission instead of requiring bigquery.transfers.update. |
| 2020-04-02 | BigQuery Reservations regional availability |  | BigQuery Reservations is available in all BigQuery regions. |
| 2020-03-30 | Scripting |  | BigQuery supports SQL scripting for multi-statement workflows. |
| 2020-03-30 | Stored procedures |  | BigQuery supports stored procedures for reusable procedural SQL logic; BigQuery stored procedures let users save and run reusable procedural SQL logic. |
| 2020-03-23 | Google Merchant Center pricing competitiveness data transfers |  | BigQuery Data Transfer Service supports Google Merchant Center pricing competitiveness data transfers. |
| 2020-03-02 | BigQuery Storage API |  | The BigQuery Storage API provides high-throughput access to read data from BigQuery storage; The BigQuery Storage API provides high-throughput access to BigQuery table data. |
| 2020-03-02 | Cloud Storage external queries for ORC and Parquet |  | BigQuery supports querying Cloud Storage data stored in ORC and Parquet formats; BigQuery can query Cloud Storage data stored in ORC and Parquet formats. |
| 2020-03-02 | Hive-partitioned external data on Cloud Storage |  | BigQuery can load and query externally partitioned data stored in Cloud Storage using the default Hive partitioning layout; BigQuery can load and query externally partitioned data stored in Cloud Storage using the default Hive partitioning layout. |
| 2020-02-27 | Cloud Storage to BigQuery transfer write modes |  | Cloud Storage transfers to BigQuery can append data or refresh data by overwriting the destination. |
| 2020-02-26 | BigQuery Flex Slots |  | BigQuery Flex Slots provide short-term slot commitments for reservation-based workload management. |
| 2020-02-25 | Amazon S3 to BigQuery transfers |  | BigQuery Data Transfer Service can transfer data from Amazon S3 into BigQuery. |
| 2020-02-20 | Amazon Redshift private instance migration with VPC |  | BigQuery supports migrating private Amazon Redshift instances using VPC connectivity. |
| 2020-02-20 | Amazon Redshift to BigQuery migration |  | BigQuery supports migration of Amazon Redshift data warehouses into BigQuery; BigQuery supports migration of Amazon Redshift data warehouses into BigQuery. |
| 2020-02-20 | Data Studio custom queries and views |  | BigQuery supports custom queries and views from Data Studio. |
| 2020-02-18 | Integer range partitioned tables |  | BigQuery tables can be partitioned by integer range on an integer column; BigQuery tables can be partitioned by integer range on an integer column. |
| 2020-02-14 | INFORMATION_SCHEMA jobs metadata views |  | INFORMATION_SCHEMA provides views for live and historical BigQuery jobs metadata. |
| 2019-12-20 | ALTER TABLE statement options |  | The ALTER TABLE statement lets users set options on BigQuery tables. |
| 2019-12-20 | ALTER VIEW statement options |  | The ALTER VIEW statement lets users set options on BigQuery views. |
| 2019-12-19 | BigQuery ML data preprocessing |  | BigQuery ML includes data preprocessing functions and the TRANSFORM clause for feature engineering; BigQuery ML includes data preprocessing functions and the TRANSFORM clause for feature engineering. |
| 2019-12-19 | Google Play report transfers |  | BigQuery Data Transfer Service can transfer Google Play reports into BigQuery. |
| 2019-12-19 | Third-party data transfers |  | BigQuery Data Transfer Service can load data from supported third-party external data sources. |
| 2019-12-09 | Cloud Storage transfers |  | BigQuery Data Transfer Service can transfer data from Cloud Storage into BigQuery. |
| 2019-12-04 | KMEANS++ cluster initialization |  | BigQuery ML supports KMEANS++ for improved initialization of k-means model clusters. |
| 2019-11-22 | INFORMATION_SCHEMA routine metadata views |  | INFORMATION_SCHEMA provides views to inspect metadata for BigQuery routines. |
| 2019-11-22 | Persistent SQL UDFs |  | BigQuery supports persistent standard SQL user-defined functions stored for reuse; BigQuery supports persistent standard SQL user-defined functions stored for reuse. |
| 2019-11-21 | BigQuery ML customer-managed encryption keys |  | BigQuery ML supports customer-managed Cloud KMS keys to encrypt ML models. |
| 2019-11-12 | Omitted column names in INSERT and MERGE |  | BigQuery supports omitting column names in INSERT and MERGE statements; BigQuery supports omitting column names in INSERT and MERGE statements. |
| 2019-10-09 | RANGE_BUCKET function |  | RANGE_BUCKET returns the 0-based upper-bound bucket position of a point within a sorted array. |
| 2019-10-03 | BigQuery scripting |  | BigQuery scripting lets users execute multi-statement SQL scripts. |
| 2019-10-03 | Search Ads 360 transfers |  | BigQuery Data Transfer Service can transfer Search Ads 360 data into BigQuery. |
| 2019-10-03 | Temporary tables |  | BigQuery temporary tables store intermediate query results for short-lived use. |
| 2019-09-30 | TensorFlow model import |  | BigQuery ML can import TensorFlow models for use in BigQuery; BigQuery ML can import TensorFlow models for use in BigQuery. |
| 2019-09-23 | K-means clustering models |  | BigQuery ML supports creating and using k-means clustering models. |
| 2019-09-17 | BigQuery BI Engine |  | BigQuery BI Engine accelerates analytics with in-memory query processing for BI workloads; BigQuery BI Engine is an in-memory analysis service for accelerating BI queries in BigQuery. |
| 2019-09-17 | BigQuery ML |  | BigQuery ML lets users create and run machine learning models using SQL in BigQuery; BigQuery ML lets users create and run machine learning models using SQL in BigQuery. |
| 2019-08-30 | Dataset copy |  | BigQuery supports copying datasets, including across regions. |
| 2019-08-27 | Google Sheets external table sheet and range selection |  | BigQuery external tables linked to Google Sheets can target a specific sheet or cell range. |
| 2019-08-22 | Automatic re-clustering |  | BigQuery automatically re-clusters clustered tables to maintain clustering over time. |
| 2019-08-05 | BigQuery Storage API Arrow format |  | The BigQuery Storage API supports reading BigQuery data in Arrow format. |
| 2019-07-19 | Scheduled queries |  | Scheduled queries let users run BigQuery queries automatically on a defined schedule. |
| 2019-07-01 | Google Merchant Center transfers |  | BigQuery Data Transfer Service can transfer Google Merchant Center data into BigQuery. |
| 2019-05-15 | GEOGRAPHY-based clustering |  | BigQuery supports clustering tables by using a GEOGRAPHY column. |
| 2019-05-14 | DROP MODEL statement |  | BigQuery ML supports the DROP MODEL DDL statement for deleting models. |
| 2019-05-06 | BigQuery ML IAM permissions |  | BigQuery ML provides IAM permissions for controlling access to machine learning resources. |
| 2019-04-29 | BigQuery BI Engine regional availability in Hong Kong |  | BigQuery BI Engine is available in the Hong Kong region. |
| 2019-04-29 | BigQuery BI Engine regional availability in Los Angeles |  | BigQuery BI Engine is available in the Los Angeles region. |
| 2019-04-29 | BigQuery BI Engine regional availability in Montréal |  | BigQuery BI Engine is available in the Montréal region. |
| 2019-04-29 | BigQuery BI Engine regional availability in Mumbai |  | BigQuery BI Engine is available in the Mumbai region. |
| 2019-04-29 | BigQuery BI Engine regional availability in Northern Virginia |  | BigQuery BI Engine is available in the Northern Virginia region. |
| 2019-04-29 | BigQuery BI Engine regional availability in São Paulo |  | BigQuery BI Engine is available in the São Paulo region. |
| 2019-04-29 | BigQuery BI Engine regional availability in Singapore |  | BigQuery BI Engine is available in the Singapore region. |
| 2019-04-29 | BigQuery BI Engine regional availability in Sydney |  | BigQuery BI Engine is available in the Sydney region. |
| 2019-04-29 | BigQuery BI Engine regional availability in Taiwan |  | BigQuery BI Engine is available in the Taiwan region. |
| 2019-04-29 | BigQuery BI Engine regional availability in Zürich |  | BigQuery BI Engine is available in the Zürich region. |
| 2019-04-18 | BigQuery regional availability in Osaka |  | BigQuery is available in the Osaka region. |
| 2019-04-10 | BigQuery clustered tables |  | Clustered tables organize table data by clustered columns to improve query performance and cost efficiency; Clustered tables organize table data by clustered columns to improve query performance and cost efficiency. |
| 2019-04-10 | BigQuery Data Transfer Service Amazon S3 transfers |  | BigQuery Data Transfer Service supports loading data into BigQuery from Amazon S3. |
| 2019-04-10 | BigQuery Data Transfer Service third-party transfers |  | BigQuery Data Transfer Service supports transfers from external third-party data sources. |
| 2019-04-10 | BigQuery ML k-means models |  | BigQuery ML supports k-means models for clustering and customer segmentation. |
| 2019-04-10 | BigQuery standard SQL AEAD encryption functions |  | BigQuery standard SQL supports AEAD encryption functions for encryption and decryption operations. |
| 2019-04-10 | BigQuery web UI |  | The BigQuery web UI in the Cloud console provides a browser-based interface for working with BigQuery resources and queries; The BigQuery web UI in the Cloud console provides a browser-based interface for working with BigQuery resources and queries. |
| 2019-04-05 | BigQuery Data Transfer Service in Cloud console |  | BigQuery Data Transfer Service is available through the Cloud console for configuring managed data transfers. |
| 2019-04-04 | BigQuery GIS |  | BigQuery GIS adds geospatial data types and functions for spatial analytics in BigQuery; BigQuery GIS adds geospatial data types and functions for spatial analytics in BigQuery. |
| 2019-04-04 | BigQuery ML beta-era custom IAM role model permission behavior | 2019-06-06 | BigQuery ML separates model permissions from table permissions by enforcing new IAM permissions for models; deprecated on 2019-06-06. |
| 2019-03-27 | BigQuery Data Transfer Service Teradata migrations |  | BigQuery Data Transfer Service supports database migration from Teradata to BigQuery with a migration agent. |
| 2019-03-11 | BigQuery regional availability in Zürich |  | BigQuery is available in the Zürich region. |
| 2019-03-01 | BigQuery web UI dataset access controls |  | The BigQuery web UI supports assigning access controls to BigQuery datasets. |
| 2019-02-25 | BigQuery DML MERGE statements |  | BigQuery supports DML MERGE statements for combining insert, update, and delete logic in a single statement. |
| 2019-02-25 | BigQuery web UI export to Google Drive |  | The BigQuery web UI supports saving query results to Google Drive. |
| 2019-02-15 | BigQuery regional availability in São Paulo |  | BigQuery is available in the São Paulo region. |
| 2019-02-04 | BigQuery ALTER TABLE SET OPTIONS |  | BigQuery Data Definition Language supports ALTER TABLE statements for setting options on tables and views. |
| 2019-02-04 | BigQuery INFORMATION_SCHEMA |  | BigQuery INFORMATION_SCHEMA views expose resource metadata through SQL queries. |
| 2019-01-31 | BigQuery sandbox |  | BigQuery sandbox lets users try BigQuery without a credit card or billing account. |
| 2019-01-29 | BigQuery ML linear regression optimization strategies |  | BigQuery ML supports automatic, batch gradient descent, and normal equation optimization strategies for linear regression models. |
| 2019-01-28 | BigQuery regional availability in Hong Kong |  | BigQuery is available in the Hong Kong region. |
| 2019-01-28 | BigQuery regional availability in Los Angeles |  | BigQuery is available in the Los Angeles region. |
| 2019-01-22 | BigQuery audit logging BigQueryAuditMetadata format |  | BigQuery audit logging writes enhanced audit messages using the BigQueryAuditMetadata format. |
| 2018-12-18 | BigQuery regional availability in Montréal |  | BigQuery is available in the Montréal region. |
| 2018-12-18 | BigQuery regional availability in Mumbai |  | BigQuery is available in the Mumbai region. |
| 2018-12-13 | BigQuery ML ML.PREDICT thresholds for binary logistic regression |  | The BigQuery ML ML.PREDICT function supports thresholds for binary logistic regression models. |
| 2018-12-13 | BigQuery ML ML.WEIGHTS standardization |  | The BigQuery ML ML.WEIGHTS function supports standardization. |
| 2018-12-05 | BigQuery Avro logical type conversion |  | BigQuery supports converting Avro logical types when loading Avro data. |
| 2018-12-05 | BigQuery dataset default partition expiration |  | BigQuery lets users set or update a default partition expiration time on a dataset. |
| 2018-11-13 | BigQuery regional availability in Singapore |  | BigQuery is available in the Singapore region. |
| 2018-10-29 | BigQuery metadataViewer IAM role |  | BigQuery supports the predefined bigquery.metadataViewer IAM role for metadata access. |
| 2018-10-22 | BigQuery regional availability in Sydney |  | BigQuery is available in the Sydney region. |
| 2018-10-17 | BigQuery sandbox for Firebase |  | BigQuery sandbox for Firebase lets users try BigQuery without a credit card or billing account. |
| 2018-10-10 | BigQuery column-based partitioned tables |  | BigQuery supports tables partitioned on a DATE or TIMESTAMP column. |
| 2018-10-10 | BigQuery DML on partitioned tables |  | BigQuery supports using DML statements against partitioned tables. |
| 2018-10-10 | BigQuery regional availability in London |  | BigQuery is available in the London region. |
| 2018-10-03 | BigQuery Data Transfer Service Cloud Storage transfers |  | BigQuery Data Transfer Service supports transfers from Cloud Storage. |
| 2018-09-19 | BigQuery ML regional availability in Tokyo |  | BigQuery ML is available in the Tokyo region. |
| 2018-09-13 | BigQuery ML ML.CONFUSION_MATRIX |  | BigQuery ML provides the ML.CONFUSION_MATRIX evaluation function. |
| 2018-09-13 | BigQuery ML multiclass logistic regression |  | BigQuery ML supports multiclass logistic regression models. |
| 2018-09-11 | BigQuery scheduled queries |  | BigQuery supports scheduling queries to run automatically. |
| 2018-09-10 | BigQuery ORC data loading |  | BigQuery supports loading data in ORC format. |
| 2018-08-20 | BigQuery Cloud Firestore export loading |  | BigQuery supports loading Cloud Firestore export data. |
| 2018-08-20 | BigQuery NUMERIC data type |  | BigQuery provides the NUMERIC data type for exact decimal values. |
| 2018-08-20 | BigQuery querying Cloud Firestore data in Cloud Storage |  | BigQuery supports querying Cloud Firestore data stored in Cloud Storage. |
| 2018-07-25 | BigQuery data definition language |  | BigQuery Data Definition Language supports SQL statements for defining and modifying schema objects; BigQuery supports data definition language statements. |
| 2018-07-18 | BigQuery Data Transfer Service for Google Play reports |  | BigQuery Data Transfer Service can ingest Google Play reports. |
| 2018-07-11 | BigQuery Data Transfer Service for Google Ads |  | BigQuery Data Transfer Service can ingest Google Ads data. |
| 2018-06-28 | FROM_BASE32 function |  | BigQuery standard SQL includes the FROM_BASE32 conversion function. |
| 2018-06-28 | GENERATE_TIMESTAMP_ARRAY function |  | BigQuery standard SQL includes the GENERATE_TIMESTAMP_ARRAY function. |
| 2018-06-28 | Templated SQL UDFs |  | BigQuery standard SQL supports templated user-defined functions. |
| 2018-06-28 | TO_BASE32 function |  | BigQuery standard SQL includes the TO_BASE32 conversion function. |
| 2018-06-27 | BigQuery Data Transfer Service for YouTube Channel reports |  | BigQuery Data Transfer Service can ingest YouTube Channel reports. |
| 2018-06-27 | BigQuery Data Transfer Service for YouTube Content Owner reports |  | BigQuery Data Transfer Service can ingest YouTube Content Owner reports. |
| 2018-06-18 | ORC load support |  | BigQuery can load data from ORC files. |
| 2018-06-18 | Parquet load support |  | BigQuery can load data from Parquet files. |
| 2018-05-15 | NUMERIC data type |  | BigQuery supports the NUMERIC data type. |
| 2018-04-17 | BigQuery availability in Tokyo region |  | BigQuery is available in the Tokyo region (asia-northeast1). |
| 2018-04-17 | bigquery.jobs.listAll permission |  | BigQuery provides the bigquery.jobs.listAll permission for listing all jobs with controlled visibility of other users' job details. |
| 2018-04-10 | DML MERGE statements |  | BigQuery supports DML MERGE statements. |
| 2018-04-06 | Google Ad Manager transfer API v201802 support |  | BigQuery Data Transfer Service for Google Ad Manager supports API version v201802. |
| 2018-03-30 | ERROR function |  | BigQuery standard SQL includes the ERROR function for returning errors. |
| 2018-03-30 | SAFE prefix |  | BigQuery standard SQL supports the SAFE prefix to suppress errors. |
| 2018-03-30 | Slot usage monitoring by job type |  | BigQuery lets you monitor slot usage by job type in Stackdriver. |
| 2018-03-05 | CREATE TABLE AS SELECT |  | BigQuery data definition language supports creating a table from a query result. |
| 2018-03-05 | DML on partitioned tables |  | BigQuery supports using DML statements with partitioned tables. |
| 2018-03-01 | Parquet file load support |  | BigQuery supports loading Parquet files. |
| 2018-02-16 | Google Ads transfer manager account support |  | BigQuery Data Transfer Service for Google Ads supports manager accounts (MCCs). |
| 2018-02-15 | BigQuery Data Transfer Service run notifications |  | BigQuery Data Transfer Service can send notifications for transfer runs. |
| 2018-02-08 | Column-based partitioned tables |  | BigQuery supports partitioning tables by a TIMESTAMP or DATE column. |
| 2018-01-08 | Google Ads transfer Age Range Performance Report support |  | BigQuery Data Transfer Service for Google Ads supports the Age Range Performance Report. |
| 2018-01-08 | Google Ads transfer Bid Goal Performance Report support |  | BigQuery Data Transfer Service for Google Ads supports the Bid Goal Performance Report. |
| 2018-01-08 | Google Ads transfer Budget Performance Report support |  | BigQuery Data Transfer Service for Google Ads supports the Budget Performance Report. |
| 2018-01-08 | Google Ads transfer Criteria Performance Report support |  | BigQuery Data Transfer Service for Google Ads supports the Criteria Performance Report. |
| 2018-01-08 | Google Ads transfer Gender Performance Report support |  | BigQuery Data Transfer Service for Google Ads supports the Gender Performance Report. |
| 2018-01-08 | Google Ads transfer Parental Status Performance Report support |  | BigQuery Data Transfer Service for Google Ads supports the Parental Status Performance Report. |
| 2018-01-05 | ISOWEEK date part support in truncation and difference functions |  | BigQuery supports the ISOWEEK date part in DATE_TRUNC, DATETIME_TRUNC, TIMESTAMP_TRUNC, DATE_DIFF, and DATETIME_DIFF. |
| 2018-01-05 | ISOYEAR date part support in truncation and difference functions |  | BigQuery supports the ISOYEAR date part in DATE_TRUNC, DATETIME_TRUNC, TIMESTAMP_TRUNC, DATE_DIFF, and DATETIME_DIFF. |
| 2017-12-11 | Configure Jobs option for YouTube transfers |  | BigQuery Data Transfer Service can manage YouTube Channel and Content Owner reporting jobs through the Configure Jobs option. |
| 2017-12-11 | Exclude removed or deleted items in Google Ads transfers |  | BigQuery Data Transfer Service for Google Ads can exclude removed or deleted items during transfer setup. |
| 2017-12-04 | Additional query history filtering dimensions in BigQuery web UI |  | The BigQuery web UI supports additional dimensions for filtering query history. |
| 2017-11-30 | _PARTITIONTIME support with wildcard queries over partitioned tables |  | BigQuery supports the _PARTITIONTIME pseudocolumn in wildcard table queries over partitioned tables. |
| 2017-11-30 | EXCEPT DISTINCT operator |  | BigQuery standard SQL supports the EXCEPT DISTINCT set operator. |
| 2017-11-30 | FARM_FINGERPRINT function in legacy SQL |  | BigQuery legacy SQL includes the FARM_FINGERPRINT function. |
| 2017-11-30 | IAM custom roles for BigQuery |  | BigQuery supports IAM custom roles. |
| 2017-11-30 | INTERSECT DISTINCT operator |  | BigQuery standard SQL supports the INTERSECT DISTINCT set operator. |
| 2017-11-30 | WEEK date part support in EXTRACT |  | BigQuery supports WEEK as a date part for the EXTRACT function; BigQuery standard SQL supports WEEK as a date part for the EXTRACT function. |
| 2017-11-16 | BigQuery Data Transfer Service |  | BigQuery Data Transfer Service automates scheduled data ingestion into BigQuery from supported sources; BigQuery Data Transfer Service automates data transfers from supported sources into BigQuery. |
| 2017-11-02 | FOR SYSTEM_TIME AS OF expression |  | BigQuery supports the FOR SYSTEM_TIME AS OF expression in the FROM clause. |
| 2017-11-02 | IGNORE NULLS modifier in analytic functions |  | BigQuery standard SQL supports the IGNORE NULLS modifier in FIRST_VALUE, LAST_VALUE, and NTH_VALUE. |
| 2017-11-02 | RESPECT NULLS modifier in analytic functions |  | BigQuery standard SQL supports the RESPECT NULLS modifier in FIRST_VALUE, LAST_VALUE, and NTH_VALUE. |
| 2017-09-29 | GROUP BY ROLLUP |  | BigQuery standard SQL supports GROUP BY ROLLUP. |
| 2017-09-28 | Ingestion-time partitioned table creation from query or load jobs |  | BigQuery supports creating ingestion-time partitioned tables by specifying partitioning options when writing query results or loading data into a new table. |
| 2017-09-28 | NORMALIZE function |  | BigQuery standard SQL includes the NORMALIZE string function. |
| 2017-09-28 | NORMALIZE_AND_CASEFOLD function |  | BigQuery standard SQL includes the NORMALIZE_AND_CASEFOLD string function. |
| 2017-09-01 | PERCENTILE_CONT function |  | BigQuery standard SQL includes the PERCENTILE_CONT analytic function. |
| 2017-09-01 | PERCENTILE_DISC function |  | BigQuery standard SQL includes the PERCENTILE_DISC analytic function. |
| 2017-08-11 | CORR support with OVER clause |  | BigQuery standard SQL supports using CORR with the OVER clause. |
| 2017-08-11 | COVAR_POP support with OVER clause |  | BigQuery standard SQL supports using COVAR_POP with the OVER clause. |
| 2017-08-11 | COVAR_SAMP support with OVER clause |  | BigQuery standard SQL supports using COVAR_SAMP with the OVER clause. |
| 2017-08-02 | ISOWEEK date part support in EXTRACT |  | BigQuery standard SQL supports ISOWEEK as a date part for the EXTRACT function. |
| 2017-08-02 | ISOYEAR date part support in EXTRACT |  | BigQuery standard SQL supports ISOYEAR as a date part for the EXTRACT function. |
| 2017-07-27 | Snappy codec support for Avro compressed data blocks |  | BigQuery supports the Snappy codec for Avro compressed data blocks. |
| 2017-07-26 | FROM_HEX function |  | BigQuery standard SQL includes the FROM_HEX function. |
| 2017-07-26 | TO_HEX function |  | BigQuery standard SQL includes the TO_HEX function. |
| 2017-07-13 | DML on tables with required fields |  | BigQuery supports using DML statements to modify tables with required fields. |
| 2017-06-05 | STDDEV support with OVER clause |  | BigQuery standard SQL supports using STDDEV with the OVER clause. |
| 2017-06-05 | STDDEV_POP support with OVER clause |  | BigQuery standard SQL supports using STDDEV_POP with the OVER clause. |
| 2017-06-05 | STDDEV_SAMP support with OVER clause |  | BigQuery standard SQL supports using STDDEV_SAMP with the OVER clause. |
| 2017-06-05 | VAR_POP support with OVER clause |  | BigQuery standard SQL supports using VAR_POP with the OVER clause. |
| 2017-06-05 | VAR_SAMP support with OVER clause |  | BigQuery standard SQL supports using VAR_SAMP with the OVER clause. |
| 2017-06-05 | VARIANCE support with OVER clause |  | BigQuery standard SQL supports using VARIANCE with the OVER clause. |
| 2017-06-02 | TO_JSON_STRING function |  | BigQuery standard SQL includes the TO_JSON_STRING function. |
| 2017-05-22 | Healthcare Common Procedure Coding System (HCPCS) Level II public dataset |  | The BigQuery public datasets program includes the Healthcare Common Procedure Coding System (HCPCS) Level II dataset. |
| 2017-05-17 | BigQuery storage free tier pricing |  | BigQuery offers a free tier for storage pricing. |
| 2017-05-12 | NOAA ICOADS public dataset |  | The BigQuery public datasets program includes the NOAA ICOADS dataset. |
| 2017-05-12 | RxNorm public dataset |  | The BigQuery public datasets program includes the RxNorm dataset. |
| 2017-05-12 | United States Census Bureau International Data public dataset |  | The BigQuery public datasets program includes the United States Census Bureau International Data dataset. |
| 2017-05-10 | bigquery.jobUser IAM role |  | BigQuery provides the predefined IAM role bigquery.jobUser. |
| 2017-05-05 | Chicago Taxi Trips public dataset |  | The BigQuery public datasets program includes the Chicago Taxi Trips dataset. |
| 2017-05-02 | Chicago Crime Data public dataset |  | The BigQuery public datasets program includes the Chicago Crime Data dataset. |
| 2017-05-02 | EPA Historical Air Quality Data public dataset |  | The BigQuery public datasets program includes the EPA Historical Air Quality Data dataset. |
| 2017-04-20 | United States Census Data public dataset |  | The BigQuery public datasets program includes the United States Census Data dataset. |
| 2017-03-31 | 1000 Cannabis Genomes Project public dataset |  | The BigQuery public datasets program includes the 1000 Cannabis Genomes Project dataset. |
| 2017-03-16 | REVERSE and ARRAY_REVERSE functions |  | BigQuery Standard SQL provides the REVERSE and ARRAY_REVERSE functions for reversing STRING, BYTES, and ARRAY values. |
| 2017-03-15 | Analytic ARRAY_AGG and STRING_AGG |  | BigQuery Standard SQL supports ARRAY_AGG and STRING_AGG in analytic mode with the OVER clause. |
| 2017-03-15 | HyperLogLog++ approximate distinct count functions |  | BigQuery Standard SQL provides HyperLogLog++-based functions for estimating unique values in large datasets. |
| 2017-03-08 | Bay Area Bike Share Trips public dataset |  | The BigQuery public datasets program includes the Bay Area Bike Share Trips dataset. |
| 2017-03-08 | Data Manipulation Language for nonpartitioned tables |  | BigQuery Standard SQL supports Data Manipulation Language operations on nonpartitioned tables. |
| 2017-03-08 | Google Cloud Bigtable external data source queries |  | BigQuery can query external data stored in Google Cloud Bigtable. |
| 2017-03-08 | IGNORE NULLS and RESPECT NULLS modifiers |  | BigQuery Standard SQL supports the IGNORE NULLS and RESPECT NULLS modifiers for ARRAY_AGG and APPROX_QUANTILES. |
| 2017-03-08 | San Francisco 311 Service Requests public dataset |  | The BigQuery public datasets program includes the San Francisco 311 Service Requests dataset. |
| 2017-03-08 | San Francisco Fire Department Service Calls public dataset |  | The BigQuery public datasets program includes the San Francisco Fire Department Service Calls dataset. |
| 2017-03-08 | San Francisco Police Reports public dataset |  | The BigQuery public datasets program includes the San Francisco Police Reports dataset. |
| 2017-03-08 | San Francisco Street Trees public dataset |  | The BigQuery public datasets program includes the San Francisco Street Trees dataset. |
| 2017-02-01 | BIT_COUNT for BYTES |  | BigQuery Standard SQL provides the BIT_COUNT function for BYTES values. |
| 2017-02-01 | Bitwise operators for BYTES |  | BigQuery Standard SQL supports bitwise operators for BYTES values. |
| 2017-02-01 | Copying non-partitioned tables to partitioned tables |  | BigQuery supports copying data from non-partitioned tables into partitioned tables. |
| 2017-02-01 | FARM_FINGERPRINT function |  | BigQuery Standard SQL provides the FARM_FINGERPRINT function for fingerprinting values. |
| 2017-02-01 | LPAD |  | BigQuery Standard SQL provides the LPAD, RPAD, and REPEAT string functions. |
| 2017-02-01 | NET IP address functions |  | BigQuery Standard SQL provides NET functions for parsing, formatting, masking, truncating, and converting IP addresses. |
| 2017-02-01 | New York City Tree Census public dataset |  | The BigQuery public datasets program includes the New York City Tree Census dataset. |
| 2017-02-01 | RPAD |  | BigQuery Standard SQL provides the LPAD, RPAD, and REPEAT string functions. |
| 2017-02-01 | US Bureau of Labor Statistics public dataset |  | The BigQuery public datasets program includes the US Bureau of Labor Statistics dataset. |
| 2016-12-22 | Code point functions |  | BigQuery Standard SQL provides the TO_CODE_POINTS, CODE_POINTS_TO_BYTES, and CODE_POINTS_TO_STRING functions. |
| 2016-12-22 | Custom null markers for CSV load jobs |  | BigQuery load jobs for CSV files support custom null markers. |
| 2016-12-22 | Hash functions |  | BigQuery Standard SQL provides hash functions. |
| 2016-12-22 | New York City Citi Bike Trips public dataset |  | The BigQuery public datasets program includes the New York City Citi Bike Trips dataset. |
| 2016-12-22 | NYC 311 Service Requests public dataset |  | The BigQuery public datasets program includes the NYC 311 Service Requests dataset. |
| 2016-12-22 | NYPD Motor Vehicle Collisions public dataset |  | The BigQuery public datasets program includes the NYPD Motor Vehicle Collisions dataset. |
| 2016-12-22 | ORDER BY and LIMIT in aggregate functions |  | BigQuery Standard SQL supports ORDER BY and LIMIT clauses inside ARRAY_AGG, ARRAY_CONCAT_AGG, and STRING_AGG. |
| 2016-12-22 | Parameterized queries |  | BigQuery Standard SQL supports parameterized queries to safely pass user input into queries. |
| 2016-12-22 | URL functions |  | BigQuery Standard SQL provides URL functions. |
| 2016-11-30 | IRS Form 990 public dataset |  | The BigQuery public datasets program includes the IRS Form 990 dataset. |
| 2016-11-30 | JSON functions |  | BigQuery Standard SQL provides JSON functions; JSON functions provide built-in query functions for working with JSON data in BigQuery. |
| 2016-11-07 | Medicare public dataset |  | The BigQuery public datasets program includes the Medicare dataset. |
| 2016-11-02 | Open Images public dataset |  | The BigQuery public datasets program includes the Open Images dataset. |
| 2016-11-01 | JDBC drivers |  | BigQuery provides JDBC drivers for connecting external tools and applications. |
| 2016-11-01 | Major League Baseball public dataset |  | The BigQuery public datasets program includes the Major League Baseball dataset. |
| 2016-11-01 | Query prefix SQL variant selection |  | BigQuery lets you choose legacy SQL or Standard SQL by setting a query prefix. |
| 2016-11-01 | Safe casting functions |  | BigQuery Standard SQL provides safe casting functions that return NULL instead of errors on invalid casts. |
| 2016-09-29 | BigQuery Stackdriver Monitoring |  | BigQuery integrates with Stackdriver Monitoring to monitor resources and create charts and alerts from BigQuery metrics. |
| 2016-09-29 | Data Manipulation Language |  | BigQuery Standard SQL supports Data Manipulation Language for inserting, updating, and deleting data. |
| 2016-09-29 | Flat-rate pricing |  | BigQuery offers flat-rate pricing for unlimited querying at a fixed monthly price. |
| 2016-09-29 | ODBC drivers |  | BigQuery provides ODBC drivers for connecting external tools and applications. |
| 2016-09-29 | Saved and shared queries |  | BigQuery lets users save and share queries. |
| 2016-09-29 | Standard SQL |  | BigQuery supports Standard SQL based on the SQL 2011 standard with extensions for nested and repeated data; Standard SQL provides SQL 2011-based query support with extensions for nested and repeated data. |
| 2016-08-26 | BigQuery predefined IAM roles |  | BigQuery provides predefined IAM roles for access control. |
| 2016-07-27 | Dataset labels |  | BigQuery supports labeling datasets through the API and command-line tool. |
| 2016-06-02 | Product Identity and Access Management roles |  | BigQuery supports product-specific Identity and Access Management roles. |
| 2016-06-02 | Time-partitioned tables |  | BigQuery supports time-partitioned tables for organizing data by time partitions. |
| 2016-05-06 | Google Drive federated data source |  | Google Drive federated data sources let BigQuery query supported Google Drive documents without loading them first. |
| 2016-05-06 | Google Sheets query result export |  | Google Sheets query result export lets BigQuery save query results directly to Google Sheets. |
| 2016-03-23 | Avro source format support |  | Avro source format support lets BigQuery use Avro files for load operations and federated data sources. |
| 2016-03-23 | BigQuery Public Datasets |  | BigQuery Public Datasets provides access to shared public datasets that can be queried directly in BigQuery. |
| 2016-03-23 | BYTES data type |  | The BYTES data type lets BigQuery store and query raw binary data values. |
| 2016-03-23 | Long-term storage pricing |  | Long-term storage pricing provides a pricing model for data retained in BigQuery over extended periods. |
| 2016-03-23 | Schema auto-detection for federated data sources |  | Schema auto-detection for federated data sources lets BigQuery infer CSV and JSON schemas automatically. |
| 2015-12-15 | Custom quotas |  | Custom quotas let BigQuery set project-wide billing alerts to help prevent runaway costs. |
| 2015-12-15 | Google Cloud Audit Logs analysis |  | Google Cloud Audit Logs analysis lets BigQuery analyze audit logs to track usage and access. |
| 2015-12-15 | Low-latency streaming query availability |  | Low-latency streaming query availability lets recently streamed data be queried within seconds of first insertion. |
| 2015-12-15 | Query explain |  | Query explain shows stage-by-stage execution details for BigQuery queries. |
| 2015-12-15 | Streaming API regional support in EU |  | Streaming API regional support in EU lets BigQuery stream data into datasets in EU locations. |
| 2015-12-15 | Template tables |  | Template tables let BigQuery manage related tables used for streaming inserts. |
| 2015-08-25 | Cloud Storage federated data source |  | Cloud Storage federated data sources let BigQuery query CSV and JSON data directly from Google Cloud Storage. |
| 2015-08-25 | Date-suffixed table grouping in web UI |  | Date-suffixed table grouping in the web UI collapses tables with date suffixes into a single navigation item. |
| 2015-08-25 | Format Query button |  | The Format Query button formats SQL queries in the BigQuery web UI. |
| 2015-08-25 | Job cancellation |  | Job cancellation lets BigQuery users cancel running jobs. |
| 2015-08-25 | Streaming buffer statistics |  | Streaming buffer statistics provide table size and availability details for tables receiving streaming inserts. |
| 2015-08-25 | User-defined functions (UDFs) |  | User-defined functions let BigQuery define and execute custom functions in queries; User-defined functions let BigQuery define and execute custom functions in queries. |
| 2015-04-16 | Cloud Datastore data loading |  | Cloud Datastore data loading lets BigQuery import data from Google Cloud Datastore. |
| 2015-04-16 | Table undeletion with table decorators |  | Table undeletion with table decorators lets BigQuery recover deleted tables using decorators. |
| 2014-03-25 | Batch queries |  | Batch queries run queries asynchronously using idle resources and can fall back to interactive priority after a delay; Batch queries let BigQuery execute queries later at lower cost than immediate interactive queries. |
| 2014-03-25 | Enhanced JOIN support |  | Enhanced JOIN support adds CROSS JOIN and multiple JOIN operations to BigQuery queries. |
| 2014-03-25 | Parallel export |  | Parallel export lets BigQuery export data using parallelized output processing. |
| 2014-03-25 | Table wildcard functions |  | Table wildcard functions let BigQuery query a selected set of tables efficiently. |
| 2014-03-25 | Views |  | Views provide virtual tables defined by SQL queries in BigQuery. |
| 2013-09-18 | Aggregate functions |  | Aggregate functions provide additional built-in functions for aggregating query results in BigQuery. |
| 2013-09-18 | Streaming inserts |  | Streaming inserts let BigQuery ingest rows continuously without load jobs. |
| 2013-09-18 | Table decorators |  | Table decorators provide time-based table snapshots for querying historical table states. |
| 2013-06-11 | Large query results |  | Large query results support lets BigQuery return query outputs larger than standard result limits. |
| 2013-06-11 | Query caching |  | Query caching lets BigQuery reuse prior query results to improve performance and reduce repeated processing. |
| 2013-06-11 | Window functions |  | Window functions let BigQuery perform analytic calculations across related rows in query results. |
| 2013-03-14 | GROUP EACH BY |  | GROUP EACH BY supports aggregations over more distributed values in BigQuery queries. |
| 2013-03-14 | JOIN EACH |  | JOIN EACH lets BigQuery join tables of any size. |
| 2013-03-14 | Schema column addition |  | Schema column addition lets BigQuery add columns to an existing table schema after data is loaded. |
| 2013-03-14 | TIMESTAMP data type |  | The TIMESTAMP data type lets BigQuery store and query timestamp values. |
| 2012-10-01 | JSON import support |  | JSON import support lets BigQuery import JSON files through the API. |
| 2012-10-01 | Nested and repeated fields |  | Nested and repeated fields let BigQuery represent hierarchical and repeated data structures in tables. |
| 2012-08-28 | BigQuery Connector for Excel |  | BigQuery Connector for Excel lets users run BigQuery queries from Microsoft Excel. |
| 2012-08-17 | CSV chunked import |  | CSV chunked import lets BigQuery process CSV imports in parallel when quoted newlines are disabled. |
| 2012-07-16 | Resizable query editor in Browser Tool |  | The resizable query editor in the BigQuery Browser Tool lets users adjust the separator below the query editor. |
| 2012-07-16 | Syntax highlighting in Browser Tool |  | Syntax highlighting in the BigQuery Browser Tool improves query editing readability. |
| 2012-05-30 | Token-based pagination |  | Token-based pagination lets BigQuery API clients page through a consistent table snapshot for list operations. |
| 2012-02-01 | Gzip file loading from Cloud Storage |  | Gzip file loading from Cloud Storage lets BigQuery load compressed files directly from Google Cloud Storage. |
| 2012-02-01 | Multibyte UTF-8 handling |  | Multibyte UTF-8 handling improves BigQuery support for multibyte UTF-8 characters during data loading. |
| 2012-02-01 | Previous query results in Browser Tool |  | Previous query results in the BigQuery Browser Tool let users reopen earlier query outputs from the query panel. |
| 2012-02-01 | Project refresh in Browser Tool |  | Project refresh in the BigQuery Browser Tool lets users refresh the projects list from the menu. |
| 2012-02-01 | Unreadable file detection |  | Unreadable file detection improves how quickly BigQuery identifies files that cannot be read during loading. |
| 2011-11-01 | JSON schema format in Create Table dialog |  | JSON schema format in the Create Table dialog lets the BigQuery web UI use the same schema format as the API and command-line client. |
| 2011-10-01 | BigQuery object architecture |  | The BigQuery object architecture defines resource objects for tables, groups of tables, and queries. |
| 2011-10-01 | Dataset access control lists |  | Dataset access control lists let BigQuery manage permissions on groups of tables. |
| 2011-10-01 | Export to CSV in Cloud Storage |  | Export to CSV in Cloud Storage lets BigQuery write table or query results to CSV files in Google Cloud Storage. |
| 2011-10-01 | JOIN statements |  | JOIN statements let BigQuery combine rows from multiple tables in a query. |
| 2011-10-01 | REST API |  | The REST API provides programmatic access to BigQuery resources and operations. |
| 2011-10-01 | Web user interface |  | The web user interface provides a browser-based way to use BigQuery. |

Source file slug: `bigquery.md`

