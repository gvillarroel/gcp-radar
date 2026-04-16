---
title: "Datastream release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/release-notes
  title: "Datastream release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Resources
Send feedback
Datastream release notes
Stay organized with collections
Save and categorize content based on your preferences.
Datastream release notes
This page documents production updates to Datastream. Check this page for
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
Feature
Datastream is now integrated with Knowledge Catalog.
This integration lets you search for and browse your Datastream
resources, such as streams, connection profiles, and connectivity configurations
directly in Knowledge Catalog.
For more information, see
the documentation .
April 07, 2026
Feature
You can now use the
Datastream remote MCP server
to enable LLM agents to perform data-related tasks, such as managing and
monitoring your streams, connection profiles, and stream objects.
This feature is in
Preview .
January 28, 2026
Feature
Datastream now supports Spanner as a source. For more
information, see the
Datastream documentation .
December 17, 2025
Feature
Datastream is now available in the following regions:
europe-west10 (Berlin)
europe-west12 (Turin)
me-central1 (Doha)
me-west1 (Tel Aviv)
For the list of all available regions, see IP allowlists and regions .
November 17, 2025
Feature
Datastream now supports partitioning and clustering for BigQuery destinations. For more information, see the documentation .
September 30, 2025
Feature
Datastream support for Salesforce as a source is now generally available (GA) . For more information, see the documentation .
September 23, 2025
Feature
Datastream support for MongoDB as a source is now generally available (GA) . For more information, see the documentation .
June 30, 2025
Feature
Datastream is now available in the northamerica-south1 (Mexico) region. For the list of all available regions, see IP allowlists and regions .
June 23, 2025
Feature
Datastream now supports BigLake Iceberg tables as a destination both in the
Google Cloud console and the Datastream API.
For more information, see the Datastream documentation .
May 26, 2025
Feature
Datastream now supports MongoDB as a source. The feature is in Preview .
For more information, see the Datastream documentation .
May 15, 2025
Feature
Global transaction identifier (GTID)-based replication for MySQL sources is now generally available (GA) .
May 13, 2025
Feature
Datastream is now available in the europe-north2 (Stockholm) region. For the list of all available regions, see IP allowlists and regions .
May 05, 2025
Feature
You can now use Private Service Connect interfaces as a private connectivity method in Datastream. For more information, see the documentation .
April 09, 2025
Feature
The Datastream API now supports streaming data to BigLake managed tables.
For more information, see Stream data to BigLake managed tables (BLMT) .
March 20, 2025
Feature
You can now use Secret Manager to securely store authentication resources with Datastream. For more information, see Use Secret Manager to store sensitive data .
February 27, 2025
Feature
Datastream now supports Salesforce as a source. The feature is in Preview .
For more information, see the Datastream documentation .
December 09, 2024
Feature
Datastream now supports binary log reader as a CDC method for Oracle sources. The feature is in Preview .
For more information, see the Datastream documentation .
November 12, 2024
Feature
Datastream now supports global transaction identifier (GTID)-based replication for MySQL sources. The feature is in Preview .
GTID-based replication supports failovers and managed database clusters, such as Cloud SQL Enterprise Plus edition. For more information, see the Datastream documentation .
October 23, 2024
Feature
Datastream is now available in the europe-southwest1 (Madrid) region. For the list of all available regions, see IP allowlists and regions .
October 18, 2024
Feature
Datastream is now available in the us-south1 (Dallas) region. For the list of all available regions, see IP allowlists and regions .
October 11, 2024
Feature
Datastream is now available in the me-central2 (Dammam) region. For the list of all available regions, see IP allowlists and regions .
October 07, 2024
Feature
The maximum row size that Datastream supports when streaming data to Cloud Storage is now increased to 100 MB.
July 23, 2024
Feature
Datastream support for SQL Server as a source is now generally available (GA) . For more information, see the documentation .
July 10, 2024
Feature
Datastream is now available in the us-east5 (Columbus) region. For the list of all available regions, see IP allowlists and regions .
June 21, 2024
Feature
Datastream now supports the change tables CDC method for SQL Server sources. For more information, see the Source SQL Server database page.
June 19, 2024
Feature
Datastream now supports the append-only write mode when ingesting data to BigQuery. For more information, see Configure write mode .
March 15, 2024
Feature
Datastream now supports SQL Server as a source. The feature is in Preview . For more information, see Streamlining data integration with SQL Server source support in Datastream and the Datastream documentation .
January 26, 2024
Feature
You can now recover a stream for an Oracle source. You can also start your Oracle source stream from a specific position. For more information, see Recover a stream and Manage streams .
January 23, 2024
Feature
Datastream now supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources.
January 16, 2024
Feature
The maximum event size that Datastream supports when streaming data to BigQuery is now increased to 20 MB.
November 22, 2023
Feature
Datastream now supports SSL/TLS encryption for connections to PostgreSQL sources that don't require client certificates.
November 10, 2023
Feature
You can now stream the following large object data types for Oracle sources:
BLOB
CLOB
NCLOB
Note: For Datastream to stream large object data types to the destination, you need to pass the streamLargeObjects flag in your request to create or update a stream. For more information, see Enable streaming of large objects for Oracle sources .
November 09, 2023
Feature
You can now start a stream from a specific binary log position for MySQL sources using the Datastream API. For more information, see Start a stream from a specific binary log position .
Feature
You can now recover a permanently failed stream. For more information, see Recover a stream .
October 20, 2023
Feature
Support for the PostgreSQL ARRAY data type is now added in Datastream.
Note: The data already streamed to the destination isn't updated automatically. To populate existing rows with the ARRAY values, you need to backfill the affected tables.
September 10, 2023
Feature
Datastream now supports SSL/TLS encryption for Oracle sources. For more information, see the Datastream API reference documentation.
September 07, 2023
Announcement
The Datastream BigQuery Migration Toolkit is now launched. The toolkit is an open-source software that simplifies migrating from the Dataflow Datastream to BigQuery template to the Datastream native BigQuery replication solution. For more information, see the toolkit documentation .
June 30, 2023
Feature
Support for ENUM and CITEXT data types is now added for PostgreSQL sources.
June 07, 2023
Feature
The maximum event size that Datastream supports is now increased. The new limit is 10 MB when streaming data to BigQuery and 30 MB when streaming to Cloud Storage.
May 11, 2023
Feature
Datastream now supports backfill for PostgreSQL tables of any size. For more information, click here .
April 17, 2023
Feature
Datastream now supports Oracle multi-tenant (CDB/PDB) architecture. For information about configuring pluggable databases for use with Datastream, click here .
April 04, 2023
Feature
Datastream support for BigQuery as destination is now generally available (GA) . For more information, click here .
Feature
Datastream support for PostgreSQL as source is now generally available (GA) . For more information, click here .
February 27, 2023
Feature
Terraform now supports Datastream private connectivity , connection profile , and stream resources. For more information, see Getting started with Terraform and Datastream .
February 21, 2023
Feature
You can now set the number of maximum concurrent backfill tasks for a stream using the Datastream API. To learn more, see Manage streams .
January 11, 2023
Feature
The validate_only and force parameters were added to the projects.locations.connectionProfiles resource in the Datastream API. To learn more, see the Datastream API reference documentation .
September 15, 2022
Announcement
We have introduced changes to Datastream pricing. For more information, see the Pricing page.
Feature
Datastream now supports BigQuery as a destination. Click here to access the documentation.
Feature
Datastream now supports PostgreSQL as source. Click here to access the documentation.
August 30, 2022
Feature
You can now set the number of maximum concurrent CDC tasks for a stream using the Datastream API. To learn more, see Manage streams .
June 16, 2022
Feature
Datastream now supports the use of tags on its resources, which include private connectivity configurations, connection profiles, and streams. Tags are key-value pairs that you can apply to your Datastream resources for fine-grained access control. To learn more, see Access control with tags . To use tags, see Manage tags .
June 10, 2022
Announcement
Datastream is now HIPAA compliant.
May 13, 2022
Feature
Datastream now supports backfilling Oracle database tables that have more than 100 million rows. Click here to access the documentation.
December 14, 2021
Feature
Datastream now supports customer-managed encryption keys (CMEK). Click here to access the documentation.
November 30, 2021
Announcement
Datastream is now generally available (GA) in all Google Cloud regions.
As part of this launch, the Stream details page now has an OBJECTS tab with detailed information about each object included in the stream (backfill status, object-level errors, and so on).
Click here to access the documentation.
May 26, 2021
Announcement
Datastream is a serverless and easy-to-use change data capture (CDC) and replication service. It allows you to synchronize data across heterogeneous databases and applications reliably, and with minimal latency and downtime.
Datastream supports streaming from Oracle and MySQL databases into Cloud Storage. The service offers streamlined integration with Dataflow templates to power up-to-date materialized views in BigQuery for analytics, replicate your databases into Cloud SQL or Spanner for database synchronization, or leverage the event stream directly from Cloud Storage to realize event-driven architectures.
Benefits of Datastream include:
Being serverless so there are no resources to provision or manage, and the service scales up and down automatically, as needed, with minimal downtime.
Easy-to-use setup and monitoring experiences that achieve super-fast time-to-value.
Integration across the best of Google Cloud data services' portfolio for data integration across Datastream, Dataflow, Data Fusion, Pub/Sub, BigQuery, and more.
Synchronizing and unifying data streams across heterogeneous databases and applications.
Security, with private connectivity options and the security you expect from Google Cloud.
Being accurate and reliable, with transparent status reporting and robust processing flexibility in the face of data and schema changes.
Supporting multiple use cases, including analytics, database replication, and synchronization for migrations and hybrid-cloud configurations, and for building event-driven architectures.
Documentation for Datastream includes a quickstart, conceptual content, how to use this service through the user interface, REST API calls, and gcloud, an API tutorial, and reference, support, and resource-related information. Click here to access the documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
