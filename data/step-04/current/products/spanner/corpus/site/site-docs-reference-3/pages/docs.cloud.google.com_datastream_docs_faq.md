---
title: "FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/faq
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/faq
  title: "FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
FAQ
Stay organized with collections
Save and categorize content based on your preferences.
In this page, you find answers to frequently asked questions (FAQ) about using
Datastream. This FAQ is associated with:
General questions about Datastream and change data capture (CDC)
General source behavior and limitations
MySQL source behavior and limitations
Oracle source behavior and limitations
PostgreSQL source behavior and limitations (including AlloyDB for PostgreSQL)
SQL Server source behavior and limitations
Salesforce source behavior and limitations
BigQuery destination behavior
Cloud Storage destination behavior
Common use cases for using Datastream
How Datastream integrates with Google Cloud data services
Security and connectivity
Monitoring Datastream
Pricing
Additional information about Datastream
General questions about Datastream and change data capture (CDC)
Question
Answer
What's Datastream?
Datastream is a serverless and easy-to-use change data capture (CDC) and replication service. Datastream enables seamless replication of data from relational database sources such as AlloyDB for PostgreSQL, PostgreSQL, MySQL, SQL Server and Oracle, as well as from Salesforce and MongoDB, directly into BigQuery. Datastream offers the scale, speed, security, and simplicity that modern businesses need. With a serverless, autoscaling architecture, Datastream lets you set up an ELT (Extract, Load, and Transform) pipeline for low-latency data replication enabling near real-time insights.
Datastream also has the ability to synchronize data streams across heterogeneous databases and applications reliably and with minimal latency. You can integrate the service with Dataflow templates to replicate databases into Cloud SQL or Spanner for database synchronization, or take advantage of the event stream directly from Cloud Storage to realize event-driven architectures.
What are the methods by which Datastream streams data?
Datastream streams data from a source to a destination by one of two methods:
CDC: Capturing ongoing changes from the source in real time.
Backfill: Providing a historical snapshot of data that exists in a table.
What's CDC?
CDC is an approach to data integration that lets you integrate and analyze data faster, using fewer system resources. It's a method for pulling only the latest changes (updates, inserts, or deletes) from a data source, often by reading the log of changes that the source keeps for its own internal transactional integrity.
CDC is a highly-efficient mechanism for limiting the impact on the source when loading new data into operational data stores and data warehouses, and it eliminates the need for bulk-load updating and inconvenient batch windows by enabling incremental loading or near real-time streaming of data changes into a data destination.
CDC can be used in many use cases that derive value from constant access to data changes as they happen, such as analytics, synchronizing data across geographically distributed systems, and event-driven architectures.
What's backfill?
In addition to ongoing changes, Datastream also uses backfill to pull all existing data from a source, and then stream the data into a destination. As a result, the destination is "backfilled" with all historical data from the source. There are two types of backfill:
Incremental : The default type of backfill for tables. During incremental backfill, Datastream fetches data from ranges of rows in multiple batches, and streams the data to a destination batch by batch.
Full dump : During full dump backfill, Datastream pulls all the data at once, and streams it into a destination.
Are there any limitations you need to consider when performing a backfill?
For information about backfill constraints, see the known limitations pages for the respective source types:
MySQL
Oracle
PostgreSQL (including AlloyDB for PostgreSQL)
SQL Server
Salesforce
MongoDB
What's the recommended order for CDC and backfill operations?
In most cases, there's no special consideration here. When backfill is enabled on a stream, Datastream performs both backfill and CDC at the same time. In some edge cases, for example when replicating very large tables that can't be backfilled using Datastream, you might need to load the data into BigQuery first before starting the stream.
Can I monitor the status of CDC and backfill operations?
You can monitor the backfill status per object:
In the Google Cloud console, go to the Streams page.
Click the stream that you want to monitor.
Click the Objects tab.
The CDC status is effectively the stream status. If the CDC operation fails, then the entire stream fails.
Additional object-level metrics are available in Cloud Monitoring. For more information, see the Cloud Monitoring documentation .
What's a change stream versus replication?
A change stream is a sequence of events that Datastream emits to a destination for the purposes of downstream consumption. The result of a change stream being written to Cloud Storage is a set of files that contain change log events from a specific table over a period of time. The events represent inserts, updates, and deletes to that table, and the events can be consumed and processed downstream of Cloud Storage by services like Dataflow for use cases like event-driven architectures.
Replication in the Datastream context means a 1:1, up-to-date representation of the source table in the destination. For example, a table in Oracle whose changes are replicated continuously to a BigQuery table, where the BigQuery table is kept up-to-date using the changes streamed from the Oracle table. Replication leverages change streams by consuming each change event and using it to update the destination. Datastream enables direct replication into BigQuery, and supports additional destinations like Cloud SQL and Spanner through integration with Dataflow, by leveraging templates that pull the change stream events from Cloud Storage and updating the destination tables accordingly.
Does Datastream require an agent on the source?
You don't have to install an agent on the source. Datastream uses existing interfaces (such as Oracle LogMiner) to get the data out of the source.
How many tables can I include in a single stream?
Datastream can handle up to 10,000 tables in a single stream. There's no technical reason to split a database into multiple streams, although there might be some business considerations to use different streams for different logical flows, for example when replicating large transactions from PostgreSQL sources . However, each stream adds load on the source database. Such load is negligible for CDC, but can be significant for backfill.
What about the performance impact of Datastream's usage on a production database?
CDC is a highly efficient mechanism for limiting the impact on the source when new data is loaded into destination data stores and data warehouses. CDC also eliminates the need for bulk-load updating and inconvenient batch windows by enabling incremental loading or near real-time streaming of data changes into a destination.
In addition, Datastream minimizes the impact of an initial backfill by limiting the number of simultaneous backfill tasks, and offering you the control to decide which objects to backfill, and when to backfill them.
Can you copy the log files from the source to Google Cloud?
No. Datastream queries the logs directly on the database server, and only changes to the specified tables are written to the destination.
Can Datastream also transfer historical data?
Yes. By default, Datastream gets all historical data from the database tables of your source that you specify, in parallel to the CDC stream. Datastream provides you with the flexibility to obtain historical data from either some or all database tables in your source. In addition, when you configure your stream, you can choose to disable historical backfill.
Does Datastream guarantee exactly-once delivery?
No. Datastream is at-least-once delivery. The additional metadata that Datastream writes to each event can be used to remove duplicate data.
Can Datastream handle encrypted databases?
Yes.
Can Datastream stream specific tables and columns from a source?
Yes. With Datastream, you can specify include and exclude lists for tables and schemas, to stream only the data that you want from a source to a destination. For included tables, you can exclude specific columns of the tables to further fine-tune exactly which data you want to be streamed into the destination. However, materialized views can't be replicated.
How do you move a stream to another project or region?
Create a stream in a new region or project with the same configuration as the existing stream, but don't select the Backfill historical data checkbox.
Start the stream that you created.
After the stream that you created has a status of RUNNING , pause the existing stream .
Optionally, modify the new stream by selecting the Backfill historical data checkbox. Existing data in tables added to the stream in the future will be streamed from the source into the destination.
How does Datastream handle uncommitted transactions in the database log files?
When database log files contain uncommitted transactions, if any transactions are rolled back, then the database reflects this in the log files as "reverse" data manipulation language (DML) operations. For example, a rolled-back INSERT operation will have a corresponding DELETE operation. Datastream reads these operations from the log files.
What's Datastream's regional availability?
To view a listing of the regions where Datastream is available, see IP allowlists and regions .
General source behavior and limitations
Question
Answer
Which sources does Datastream support?
Datastream supports streaming data from Oracle, MySQL, PostgreSQL, AlloyDB for PostgreSQL, SQL Server, Salesforce, and MongoDB sources, both cloud-hosted and self-managed. For information about source-specific versions, see the following pages:
MySQL source
Oracle source
PostgreSQL source (including AlloyDB for PostgreSQL)
SQL Server source
Salesforce source
MongoDB source
Can Datastream handle encrypted databases?
Yes.
How does Datastream extract data from the sources?
For MySQL, Datastream processes the MySQL binary log to extract change events.
For Oracle, Datastream uses LogMiner and supplemental logging settings to extract data from Oracle's redo logs.
For PostgreSQL and AlloyDB for PostgreSQL, Datastream relies on PostgreSQL's logical decoding feature. Logical decoding exposes all changes committed to the database and allows consuming and processing these changes.
For SQL Server, Datastream tracks data manipulation language (DML) changes using transaction logs .
Can you copy log files directly from a source to Google Cloud?
Datastream doesn't copy the entirety of the log files, but queries the log files directly from the database server, and only replicates changes from the specified tables to the destination.
What are the limitations on the data that Datastream can process?
There are general limitations, and limitations that apply to specific database sources.
General limitations include:
Event size: Maximum 100 MB row size limit for Cloud Storage destination and 20 MB row size limit for BigQuery.
Some data definition language (DDL) operations aren't supported during replication, including:
Dropping a column from the middle of a table. This may cause a data discrepancy because values are associated with the wrong column.
Changing the data type of a column. This may cause a data discrepancy because data isn't mapped properly to the correct Datastream unified type, and the data may get corrupted.
Cascading deletes are ignored.
Table truncation is ignored.
For source-specific limitations, see the following pages:
MySQL limitations
Oracle limitations
PostgreSQL limitations (including AlloyDB for PostgreSQL and AlloyDB Omni)
SQL Server limitations
Salesforce limitations
MongoDB limitations
Which data is included in every event that's generated by Datastream?
Each generated event (for inserts, updates, and deletes) includes the entire row of data from the source, with the data type and value of each column. Each event also includes event metadata that can be used to establish ordering and ensure exactly-once delivery.
Does Datastream guarantee ordering?
Although Datastream doesn't guarantee ordering, it provides additional metadata for each event. This metadata can be used to ensure eventual consistency in the destination. Depending on the source, rate and frequency of changes, and other parameters, eventual consistency can generally be achieved within a 1-hour window.
Does Datastream guarantee exactly-once delivery?
Datastream is at-least-once delivery. You can eliminate duplicate data by using additional metadata that Datastream writes to each event.
How does Datastream represent data types from the source for use in downstream processing?
When writing to a schemaless destination, such as Cloud Storage, Datastream simplifies downstream processing of data across sources by normalizing data types across all sources. Datastream takes the original source data type (for example, a MySQL or PostgreSQL NUMERIC type or an Oracle NUMBER type), and normalizes it into a Datastream unified type .
Unified types represent a loss-less superset of all possible source types, and normalization means that data from different sources can be processed with minimum effort and queried downstream in a source-agnostic way.
How does Datastream handle structure (schema) changes in the source?
Datastream fetches the schema from the source periodically. Schemas are stored in Datastream's internal schema registry, and each event references the schema at the time that it was generated. This allows Datastream to track schema changes and adjust based on these changes, ensuring that all data is streamed and loaded to the destination properly. However, in between schema fetches, some schema changes may go undetected, potentially causing data discrepancies.
I deleted (dropped) a column in my source database, but it still appears in my destination. Why?
Datastream doesn't delete columns in the destination. You must delete columns manually. This behaviour is intentional, because in some cases, you might prefer to keep the deleted column in the destination. For example, Datastream interprets renaming a column in the source as deleting a column and adding another column. You don't want to lose the original column in the destination in this case.
The stream fails to start due to a validation failure, but I think it's an error or I want to try running the stream regardless. How can I get past this validation?
You can start the stream using the API by adding the force=true flag and skipping the validation checks. Note that skipping validations doesn't guarantee that the stream will be able to run, and it may still fail if the database is missing the necessary configuration or permissions.
Can I restart a failed stream?
You can fix a stream with the Failed status by addressing the errors reported by Datastream. For more information, see Troubleshoot a stream .
You can also recover a stream with the Failed permanently status. For more information, see Recover a stream .
Does Datastream lock database tables?
No. Datastream doesn't need to lock the tables.
The limitation pages for each source specify that streams can have up to 10,000 tables. Does this mean that Datastream can't run CDC operations in parallel for more than 10,000 tables at same time?
No. The limit mentioned is per stream. You can have multiple streams with the total number of tables exceeding 10,000 tables.
MySQL source behavior and limitations
Question
Answer
How does Datastream get data out of MySQL?
Datastream uses MySQL's binary log to extract the change events from MySQL
Does Datastream support Cloud SQL for MySQL read replica instances?
Yes, Datastream supports read replica instances for Cloud SQL for MySQL versions 5.7 and 8.0.
You can enable binary logging on these instances. To do so, execute the following gcloud CLI command:
gcloud sql instances patch INSTANCE_NAME -- enable-bin-log
For more information, see Binary logging on read replicas .
What permissions at minimum does Datastream need to replicate data from a source MySQL database?
You must grant the following permissions to your Datastream user to replicate data from a MySQL database:
SELECT
REPLICATION SLAVE
REPLICATION CLIENT
Does Datastream support binary log compression?
No, Datastream does not support compressing transaction events with binary log transaction compression. Disable binary log transaction compression to use the change data capture functionality for MySQL in Datastream.
Your organization doesn't permit granting the SELECT permission on all its tables and databases. Can you still use Datastream?
You can grant the SELECT permission to the particular tables that you want to replicate or to the entire schema in a database. To do so, run one of the following commands:
GRANT SELECT ON DATABASE_NAME . TABLE_NAME TO USER_NAME @'%';
or
GRANT SELECT ON DATABASE_NAME .* TO USER_NAME @'%';
Replace the following:
DATABASE_NAME : The name of your MySQL database.
TABLE_NAME : The name of the table to which you're granting the SELECT permission.
USER_NAME : The name of the user to whom you're granting the SELECT permission.
If you want to restrict the permissions to a particular hostname, replace the % character with the specific IP address or address range.
Oracle source behavior and limitations
Question
Answer
How does Datastream get data out of Oracle?
Datastream uses Oracle LogMiner to extract the data from Oracle's redo logs.
Does Datastream require a GoldenGate license from Oracle?
No. Datastream doesn't require a GoldenGate license because it uses Oracle LogMiner to read the data from the database's redo logs .
What happens when Oracle LogMiner isn't supported anymore?
Oracle LogMiner is still supported in all generally available Oracle releases, and Datastream will continue to support LogMiner in all future releases. Oracle has discontinued support for the LogMiner CONTINUOUS_MINE option , however this option isn't used by Datastream, hence this deprecation has no impact on Datastream.
Does Datastream support encryption of data in-transit from Oracle databases?
Datastream supports encryption of data in-transit based on Oracle Net Services . Datastream runs in REQUESTED mode.
Does Datastream support Secure Sockets Layer (SSL) and Transport Layer Security (TLS) encryption?
Yes, Datastream supports the TCPS protocol for SSL/TLS-encrypted connections to Oracle sources.
Does Datastream support Oracle multi-tenant architecture, specifically Container Databases (CDBs) and Pluggable Databases (PDBs)?
Yes, Datastream supports Oracle multi-tenant architecture (CDB/PDB), however, you can only replicate a single pluggable database in a stream.
Your organization doesn't permit granting the GRANT SELECT ANY TABLE permission. Can you still use Datastream?
If you can't grant the GRANT SELECT ANY TABLE permission, then you can grant SELECT permissions to the following list of tables:
ALL_COL_COMMENTS
ALL_CONS_COLUMNS
ALL_CONSTRAINTS
ALL_DB_LINKS
ALL_EXTERNAL_TABLES
ALL_IND_COLUMNS
ALL_INDEXES
ALL_LOG_GROUPS
ALL_MVIEWS
ALL_OBJECTS
ALL_PART_TABLES
ALL_SEQUENCES
ALL_SOURCE
ALL_SYNONYMS
ALL_TAB_COLS
ALL_TAB_COLUMNS
ALL_TAB_COMMENTS
ALL_TABLES
ALL_TRIGGERS
ALL_TRIGGER_COLS
ALL_TYPES
ALL_USERS
ALL_VIEWS
DATABASE_PROPERTIES
DBA_ROLE_PRIVS
DUAL
PRODUCT_COMPONENT_VERSION
ROLE_SYS_PRIVS
USER_ROLE_PRIVS
USER_TAB_PRIVS
To stream changes using Datastream, you also need read access to all tables included in the stream.
To start the stream, bypass the validation using the API. For more information see Start a stream .
Does Datastream support replication from Oracle read-replica instances?
Datastream supports replication from Oracle read-replica instances as long as the instance is configured according to the configuration guidelines .
Does Datastream support Oracle SCAN RAC databases?
Yes, it does. However, you can't establish direct connectivity to databases using the Single Client Access Name (SCAN) feature in Oracle Real Application Clusters (RAC) environments using Datastream. To overcome this limitation, connect directly to one of the nodes, or use the Oracle Connection Manager . You can also create a private connectivity configuration using reverse proxy solutions like HAProxy.
PostgreSQL source behavior and limitations
Question
Answer
How does Datastream get data out of PostgreSQL?
Datastream uses PostgreSQL's logical decoding feature to extract the change events from PostgreSQL
Does Datastream support replication from AlloyDB for PostgreSQL or AlloyDB Omni sources?
Yes. Datastream supports both of these sources. For information about configuring your source AlloyDB for PostgreSQL database, see Configure an AlloyDB for PostgreSQL database . For information about configuring your source AlloyDB Omni database, see Configure a self-managed PostgreSQL database .
Does Datastream support replication from a PostgreSQL read replica instance?
No, Datastream doesn't support replication from read replica instances for PostgreSQL.
Does Datastream support Row-Level Security (RLS) ?
Datastream doesn't support replication of tables with RLS enabled. However, you can bypass this limitation by using the BYPASSRLS clause:
ALTER USER USER_NAME BYPASSRLS;
Replace USER_NAME with the name of the user that Datastream uses to connect to the database, and for whom you want to bypass RLS policies.
Does Datastream support concurrent CDC operations when replicating from a PostgreSQL source?
No. PostgreSQL replication relies on the concept of replication slots, and replication slots don't support concurrent connections. There can only be one CDC task reading from the replication slot at a time. For example, if you delete a large number of records from the source database, the replication slot might get overloaded with delete events. Any subsequent changes to the source are delayed until the delete events already in the replication slot queue are processed.
For information about the suggested approach when replicating large transaction data, see Diagnose issues .
Does Datastream support Secure Sockets Layer (SSL) and Transport Layer Security (TLS) encryption?
Yes, Datastream supports SSL/TLS-encrypted connections.
SQL Server source behavior and limitations
Question
Answer
Which SQL Server editions does Datastream support?
Datastream supports SQL Server database versions that support change data capture. For a full list of supported SQL Server versions and editions, see Versions .
How does the Datastream CDC replication work for SQL Server sources?
The Datastream data ingestion process utilizes transaction logs or change tables, depending on the source configuration. For more information, see Source SQL Server database .
What permissions at minimum does Datastream need to replicate data from a source SQL Server database?
You must grant the following roles and permissions to your Datastream user to replicate data from a SQL Server database:
For the change tables CDC method:
db_owner
db_denydatawriter
Additionally, for the transaction logs CDC method:
SELECT permissions on the database and for the sys.fn_dblog function
SELECT permissions on the dbo.sysjobs table
VIEW SERVER STATE
For detailed information about configuring your source, see the respective configuration pages for your database type.
Why do you need configuration such as changing polling intervals and setting up a truncation safeguard when using transaction logs?
When you replicate data from a SQL Server source using transaction logs, if a log gets truncated before Datastream reads it, data loss occurs. Changing polling intervals and setting up truncation safeguard is optional, but provides an additional layer of protection to ensure that Datastream can read the data even in scenarios where downtime or connectivity issues occur. For more information, see Configure a source SQL Server database .
What CDC method to select when replicating from a SQL Server source?
You can select one of the two available CDC methods, based on your source SQL Server database configuration:
Transaction logs: select this method to process changes directly from the database logs. This method provides the best performance and is more efficient, but requires additional configuration steps which may not be supported by your database.
Change tables: select this method to process changes from dedicated change tables. This method is easier to configure and has fewer limitations, but supports lower throughput and increases the load on your database.
For more information, see Overview of SQL Server as a source .
Salesforce source behavior and limitations
Question
Answer
What's a Salesforce org?
A Salesforce organization, also referred to as an org , is your dedicated deployment of Salesforce, similar to a database instance. An org has a defined set of licensed users and stores all customer data and applications.
What are Salesforce objects, records and fields?
An object is a class entity, and is similar to a table in relational databases nomenclature. They can be standard or custom. Standard objects are included in Salesforce by default, while custom objects are created by users to store data specific to their use-case.
A record is a specific instance of an object, similar to a row in relational databases.
A field is a specific attribute of an object, similar to a column in relational databases.
Does Datastream support Salesforce calculated fields?
Datastream partially supports Salesforce calculated fields (formula fields). Replicating these fields is subject to certain constraints. For more information, see Known limitations .
BigQuery destination behavior
Question
Answer
How do Datastream and BigQuery work together to replicate changes from the source database?
Datastream continuously reads the change stream from the source database, and streams the upsert and delete events to the BigQuery destination tables using the Storage Write API . BigQuery then applies the changes to the table based on the table staleness configuration.
How are Data Manipulation Language (DML) operations applied in BigQuery?
In the Append-only mode, data is appended in BigQuery as a stream of changes, with a separate row for each INSERT , UPDATE-INSERT , UPDATE-DELETE , and DELETE event.
In the Merge mode (default), when Datastream creates a table in BigQuery, it sets the primary keys on the table according to the primary keys defined in the source. BigQuery processes the events and applies changes to the underlying BigQuery table based on the source table primary keys. If the source table doesn't have a primary key, it's treated as if the Append-only mode was used.
How do Datastream and BigQuery handle event ordering?
BigQuery uses the event metadata and an internal change sequence number (CSN) to apply the events to the table in the correct order. For more information about event metadata, see Events and streams .
How are BigQuery costs calculated when used with Datastream?
BigQuery costs are calculated and charged separately from Datastream. To learn how to control your BigQuery costs, see
BigQuery CDC pricing .
What's the maximum row size that Datastream supports when streaming data into BigQuery?
The maximum row size that Datastream supports is 20 MB.
When you stream to BigQuery, tables are prefixed with _ . Can you change this behavior so that the tables in BigQuery follow the same structure as they have on the source database?
When you configure datasets for a BigQuery destination, you create a dataset for each schema or a single dataset for all schemas. When you create a dataset for each schema, each schema in the source is mapped to a dataset in BigQuery, and all the tables in the source schema are mapped to the tables in the dataset. When you select the single dataset for all schemas option, the table names are prefixed with _ , as per the table naming convention in BigQuery.
Can CDC capture source schema changes, for example, when a column is inserted or deleted in the source? Are such changes automatically reflected in the already populated tables in the destination BigQuery datasets?
Datastream detects new columns automatically and adds them to the destination schema for the new rows, but not the ones already replicated to the destination. Deleted columns are ignored, and Datastream populates them with NULL values in the destination. You can then manually delete these columns in BigQuery.
Cloud Storage destination behavior
Question
Answer
How are files created in Cloud Storage?
Datastream creates a folder for each table. In each folder, Datastream rotates the file (or creates a new file) whenever it reaches the user-defined threshold of size or time. Datastream also rotates the file whenever a schema change is detected. The filename will be composed of a unique schema key (based on a hash of the schema), followed by the timestamp of the first event in the file. For security purposes, these filenames aren't meant to be read or understood by people.
If data in Cloud Storage isn't ordered, then how can the events be reordered before loading them into the destination?
Each event contains several metadata fields that uniquely identify the row in the log files, and let you sort the events. These fields include:
For Oracle sources:
rs_id (record set ID), which is actually composed of three values (for example, 0x0073c9.000a4e4c.01d0 ). The rs_id uniquely identifies the record within the redo log.
ssn (SQL sequence number), which is used when the record in the redo log is too long. Because of this, Oracle LogMiner splits the record into multiple rows.
For MySQL sources:
log_file , from which Datastream pulls events in CDC replication.
log_position , which identifies the offset of the record in the MySQL binary log.
For PostgreSQL sources:
source_timestamp , which is the timestamp when the record changed on the source. If the source_timestamp values for the events you're sorting are identical, then compare lsn values.
lsn (log sequence number), which identifies the offset of the record in the WAL log file.
For more information about metadata fields, see Source-specific metadata .
If multiple files are created for the same timestamp, then in which order should they be processed?
Because ordering within and across files isn't guaranteed, the best way to determine the order to process the files for the source is to get all events from all files for the specific timestamp, and then apply ordering using the method mentioned earlier in this section.
How are primary key updates handled? Is there before and after information in the event?
When a row's primary key changes, Datastream generates two events for the change: an UPDATE-DELETE and an UPDATE-INSERT . The UPDATE-DELETE event represents the data before the update and UPDATE-INSERT represents the data after the update. For more information about source-specific metadata, see Events and streams .
What's the maximum row size that Datastream supports when streaming data into Cloud Storage?
The maximum row size that Datastream supports is 100 MB.
Use cases
Question
Answer
What are some common use cases for using Datastream?
Datastream is a CDC and replication service, which means it's flexible across various use cases that can benefit from access to continuously streaming change data. The most common use cases for Datastream are:
Analytics: By directly replicating data into BigQuery, customers can access up-to-date operational data in BigQuery. Customers can use this continuously updated data in BigQuery to build up-to-date dashboards over their data. This can be used, for example, for monitoring of systems and for deriving up to date insights about the state of their business.
Database replication and synchronization scenarios: By integrating Datastream with Dataflow templates for loading data into Cloud SQL or Spanner, you can get up-to-date replication of your source data in these databases. You can use this continuously updated data in the destination databases for a low downtime database migration from the source to the destination, or for hybrid-cloud configurations , where the source and destination reside in different hosting environments.
Event-driven architectures: Modern microservices-based architectures rely on central hubs of data that are updated with events continuously from across your organization to be event-driven. By continuously writing event data into destinations such as BigQuery and Cloud Storage, you can build event-driven architectures that are based on consumption of event data from these destinations.
Integrations
Question
Answer
How does Datastream integrate with Google Cloud data services?
Datastream complements and enhances the Google Cloud data suite by providing CDC data replication from sources to various Google Cloud services. By integrating seamlessly with these services, Datastream fits into the larger Google Cloud ecosystem.
Datastream integrates with the following data services:
BigQuery: Datastream uses the BigQuery Write API to integrate with BigQuery directly. Datastream writes the change events directly to the BigQuery dataset where the changes are merged continuously (UPSERT) with the existing data.
Dataflow: Datastream can integrate with Dataflow using Dataflow templates. These templates read data from Cloud Storage and load that data into BigQuery, Cloud SQL for PostgreSQL, or Spanner. The purpose of these templates is to maintain up-to-date replicated source tables in the destinations. The templates are available in the Dataflow UI, and are built for Datastream-generated files for out-of-the-box processing.
Cloud Storage: Datastream integrates with Cloud Storage by writing to it as a change streaming destination.
Cloud SQL and Spanner: by using Datastream and Dataflow templates, you can maintain up-to-date replicated tables in the databases.
Does the Datastream-to-BigQuery template in Dataflow have any limitations for the number of data manipulation language (DML) operations?
No. The template uses the streaming inserts API to load data into BigQuery. As a result, there's no limit to the number of DML operations. However, some quota limitations are applicable.
Security and connectivity
Question
Answer
Is Datastream a secure service for sensitive data?
Datastream supports multiple secure, private connectivity configurations to protect data in transit as it's streamed from a source to a destination. After the data is replicated, it's encrypted, by default, and leverages BigQuery's or Cloud Storage's security controls. Any data that's buffered by Datastream is encrypted at rest.
Which connectivity options are available for connecting your sources to Datastream?
There are three types of connectivity methods that you can configure:
IP allowlist: This method provides you with public connectivity by allowlisting Datastream's regional IP addresses on the source. When you create your stream, Datastream displays these IP addresses in the UI.
Forward SSH tunnel: This method provides you with secure connectivity over public networks by leveraging a customer-configured SSH bastion in addition to allowlisting regional IP addresses.
Private connectivity over VPC peering: Use this method to connect to your Google Cloud-hosted databases over Google Cloud's internal network, or take advantage of an existing VPN or Interconnect connection by establishing VPC peering between Datastream's private network and your organization's Google Cloud VPC.
How can I limit Datastream's processing of sensitive data?
Datastream lets specify which specific data elements (schemas, tables, and columns) of your source you want to stream into a destination, and which elements you want to exclude from being streamed.
Database logs may contain change data from elements that were excluded in your stream definition. Because you can't filter these elements at the source, Datastream will read, but ignore, any data associated with the elements.
How does Datastream keep database credentials secure?
Whether you use Secret Manager to store your password or enter your password manually when you create your connection profile, all user metadata is encrypted in transit and at rest, and Google stores it in its proprietary storage systems. Access to this metadata is tracked and audited.
Why does the Create a private connectivity configuration page state that you must grant the roles/compute.networkAdmin role to the Datastream service account to create a private connectivity configuration on a shared VPC?
The networkAdmin role is required only to create the VPC peering. After the peering is established, you no longer need the role. If your organization doesn't permit granting the networkAdmin role to the Datastream service account, then create a custom role with the following specific permissions:
Select IP ranges dynamically
compute.routes.get
compute.routes.list
compute.subnetworks.get
compute.subnetworks.list
Create peered networks
compute.globalOperations.get
compute.networks.addPeering
compute.networks.removePeering
compute.networks.get
Reserve IP addresses
compute.globalAddresses.get
compute.globalAddresses.create
compute.globalAddresses.createInternal
compute.globalAddresses.delete
compute.globalAddresses.deleteInternal
compute.networks.use
compute.networks.listPeeringRoutes
Can I use Private Service Connect to create a private connectivity configuration?
Datastream supports Private Service Connect interfaces as a private connectivity configuration. A Private Service Connect interface is a resource that lets a producer Virtual Private Cloud (VPC) network initiate connections to and receive connections from a network attachment in a consumer VPC network. For more information, see Configure Private Service Connect interfaces .
Monitor Datastream
Question
Answer
How do I know when all of my historical data has been copied to the destination?
Datastream provides information about its current status in the log files. A log entry is created to indicate when a table is done backfilling.
Latency occasionally goes up and then gradually decreases over time. Is this to be expected?
Datastream scales up automatically when event throughput generated by the source increases. However, to protect both the source database as well as Datastream, there are limits to how many concurrent connections and processes Datastream can open at any time. Temporary spikes in latency are expected when there's a significant increase in event throughput, and are expected to decrease gradually as the backlog of events is processed.
Pricing
Question
Answer
How is Datastream priced?
Datastream is priced based on the volume (GB) of data processed from your source into a destination.
To learn more about pricing information for Datastream, see Pricing .
How do you calculate the size of the data?
Billing is calculated based on the size of the data that's processed by Datastream. Datastream charges only for data that's streamed into the destination.
If you use Datastream with BigQuery or Dataflow, then what do you pay for?
Each service is priced and charged for separately.
Additional information
Question
Answer
What if I have additional questions or issues with using Datastream?
Google's support team can provide support if you're having issues with using Datastream. In addition, the troubleshooting guide handles common issues that you may face while using Datastream.
What's next
Find out more about Datastream .
Learn about key concepts and features of Datastream.
Learn about sources that Datastream supports.
Learn about destinations that Datastream supports.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
