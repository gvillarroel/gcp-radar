---
title: "Firestore release notes \_|\_ Firestore in Native mode \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/firestore/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/release-notes
  title: "Firestore release notes \_|\_ Firestore in Native mode \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore in Native mode
Resources
Send feedback
Firestore release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Firestore. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 13, 2026
Feature
You can now use the Usage Insights dashboard in the
Google Cloud console to monitor and analyze your billable usage for specific
Firestore databases. Usage insights help you track granular usage
data, optimize costs, and monitor historical trends.
To learn more, see the guide to analyze usage insights for Native mode and MongoDB compabatibility mode .
March 23, 2026
Feature
Regional and Multi-Regional endpoints for the Firestore API
are now Generally Available ( GA ).
You can use a Regional or a Multi-Regional endpoint to ensure that your
application's requests are transmitted, stored and processed in the same region
or multi-region as your database's location.
To learn more, see the
Firestore regional endpoints
guide.
You can also use
Private Service Connect regional endpoints
and Private Service Connect backends
to connect to the regional and the multi-regional endpoints of the
Firestore API.
March 05, 2026
Feature
Firestore Enterprise edition now supports Native mode in
all supported regions. For a list of supported regions, see
Locations .
February 17, 2026
Change
After March 17, 2026, when you enable Firestore, the Firestore
MCP server is automatically enabled.
Deprecated
Control of MCP use with organization policies is deprecated. After March 17,
2026, organization policies that use the gcp.managed.allowedMCPServices
constraint won't work, and you can control MCP use with IAM deny policies. For
more information about controlling MCP use, see
Control MCP use with IAM .
Announcement
New best practices are available for securing generative AI agents using Model Context Protocol (MCP) with Google Cloud databases. This guide covers key security measures like least privilege, native database controls, and secure agent design to help you build safer AI applications. For more information, see Best practices for securing agent interactions with Model Context Protocol .
February 10, 2026
Feature
You can now use the Firestore remote MCP server .
The Firestore remote MCP server lets you interact with documents stored
in a Firestore database from your AI application.
This feature is in Preview .
February 02, 2026
Feature
The Firestore databases page in the Google Cloud console now includes
a status column. Possible statuses include:
Ready
Cloning is in progress
Restoring from backup is in progress
Deleted
Failed
For the cloning and restore statuses, the status column updates upon completion.
January 15, 2026
Feature
Firestore Enterprise edition now supports Native mode and the Pipeline operations interface.
Pipeline operations are a new query interface for Firestore.
This interface provides advanced query functionality that includes complex
expressions. It also adds support for many new functions like min , max ,
substring , regex_match and array_contains_all .
With Firestore Enterprise edition in Native mode,
index creation is also completely optional, streamlining the process of developing new queries.
To learn more about Pipeline operations,
see the query interfaces overview .
This feature is available in Preview .
October 27, 2025
Feature
The database clone feature is now
supported at the General Availability ( GA ) level.
September 23, 2025
Feature
You can now query your databases and update data using the dedicated Gemini CLI extension for Firestore . This feature is available in beta.
September 02, 2025
Feature
Use Query insights to view query performance metrics for your database. This feature is now generally available ( GA ).
August 01, 2025
Feature
You can clone an existing database at a selected timestamp into a new database. This feature is available in Preview .
April 22, 2025
Feature
Committed use discounts are now generally available (GA) for Firestore in exchange for a commitment to continuously spend a certain amount on Firestore read/write/delete operations for one year or three years. For details, see Committed use discounts .
April 09, 2025
Feature
Firestore is now available on Database Center . You can track your Firestore resources in the fleet inventory section and the resource table in the Database Center. You can also use Database Center to monitor the following health issues for your Firestore resources:
No automated backup policy
No point-in-time recovery
For more information about Database Center, see Database Center overview . For more information about health issues supported for Firestore, see Supported health issues .
Feature
You can now use Query insights to view query performance metrics for your database . This feature is in Preview .
March 24, 2025
Feature
Cloud Firestore now supports multi-region nam7 United States (Central and East), which consists of regions us-central1 (Iowa) and us-east4 (Northern Virginia).
For a full list of supported locations, see Locations .
March 04, 2025
Feature
Firestore now supports the europe-north2 Stockholm region.
For a full list of supported locations, see Locations .
December 12, 2024
Feature
Firestore is supported by Database Center. Database Center is an AI-assisted dashboard that gives you one centralized view across your entire database fleet. Database Center displays the following health issue for Firestore:
No automated backup policy
For more information, see Database Center overview and database health issues .
December 06, 2024
Feature
You can now Manage Firestore resources using Organization Policy Service custom constraints .
December 05, 2024
Feature
You can monitor performance using client-side traces in Java and Node.js . This feature is in Preview .
November 22, 2024
Feature
You can now use Active Assist to provide recommendations
and insights that improve the reliability of your databases. This feature is generally available (GA).
For more information, see Reliability recommender .
November 18, 2024
Feature
Firestore now supports the northamerica-south1 Queretaro region.
For a full list of supported locations, see Locations .
November 06, 2024
Feature
You can now use the Firestore managed bulk delete service to delete documents in bulk. This feature is in Preview .
For more information, see Bulk delete data .
October 31, 2024
Feature
The Google Cloud console now includes a monitoring dashboard for each database. For more information, see Use the Cloud Monitoring dashboard .
October 01, 2024
Feature
You can now use customer-managed encryption keys (CMEK) in Firestore to protect your data. This feature is generally available (GA) behind an allow-list.
For more information, see Customer-managed encryption keys (CMEK) .
September 05, 2024
Feature
You can now use Firestore to perform K-nearest neighbor (KNN) vector searches. Additionally, use Firestore vector searches with inequality filters, retrieve the calculated vector distance, and specify a distance threshold. This feature is generally available (GA).
For more information, see Search with vector embeddings .
July 29, 2024
Feature
You can now apply range and inequality filters to multiple fields in a query. This feature is generally available (GA).
For more information, see Query with range and inequality filters on multiple fields overview .
June 28, 2024
Feature
Scheduled backups are now available in GA.
April 29, 2024
Feature
Firestore now supports the us-south1 Dallas region.
For a full list of supported locations, see Locations .
April 08, 2024
Feature
Firestore now supports the following additional locations:
africa-south1 Johannesburg
europe-north1 Finland
europe-southwest1 Madrid
europe-west10 Berlin
europe-west12 Turin
europe-west8 Milan
southamerica-west1 Santiago
us-central1 Iowa
us-east5 Columbus
For a full list of supported locations, see Locations .
April 05, 2024
Feature
Support for Customer-managed encryption keys (CMEK) . This feature is in Preview .
April 03, 2024
Feature
You can now use Firestore to perform K-nearest neighbor (KNN) vector searches . This feature is in Preview .
March 27, 2024
Feature
Firestore now supports using range and inequality filters on multiple fields in a single query. This feature is in Preview .
Feature
Support for Query Explain . This feature is in Preview .
Query Explain lets you submit queries and receive detailed query plan, billing and performance statistics on query execution in return. It helps you understand how your queries are executed, showing you inefficiencies.
It functions like the EXPLAIN [ANALYZE] operation in many relational database systems.
For more information, see the guide for Query Explain .
January 29, 2024
Feature
Eventarc events and Firestore events for Cloud Functions (2nd gen) are now supported at the General Availability ( GA ) level.
January 10, 2024
Feature
The ability to create multiple databases per project is now supported at the General Availability level .
January 02, 2024
Feature
Support for the europe-west1 (Belgium) and me-central2 (Dammam) locations .
December 20, 2023
Feature
Index scans in Key Visualizer are now supported at the General Availability ( GA ) level.
December 15, 2023
Feature
You can now assemble and execute sum() and avg() queries in the Google Cloud console.
Feature
You can now create and delete non-default databases in the Google Cloud console.
November 10, 2023
Feature
Support for Firestore point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now generally available (GA) .
October 18, 2023
Feature
For documents with many fields that don't require indexing, you can now add collection-level index exemptions on all fields in a collection group. To learn more, see Add a collection-level exemption . This feature is generally available (GA) .
October 17, 2023
Feature
The sum() and average() aggregation functions are now available.
October 02, 2023
Change
Updated the following index limits:
Raised the maximum number of composite indexes from 200 to 500 for projects with billing enabled. The limit is 200 for projects without billing enabled.
Raised the maximum number of single-field index configurations from 200 to 500 for projects with billing enabled. The limit is 200 for projects without billing enabled.
For more information about these limits, see Quotas and limits .
September 25, 2023
Feature
Support for europe-west9 (Paris), me-central1 (Doha), and me-west1 (Tel Aviv) .
September 11, 2023
Feature
The Google Cloud console now supports a usage dashboard for each database .
August 25, 2023
Feature
Scheduled backups now available in Preview .
Feature
You can now view and list multiple databases using the Google Cloud console. This feature is in Preview .
August 07, 2023
Feature
You can now visualize heatmap pattern for index keys and make better workload pattern predictions. To learn more, see Key Visualizer . This feature is in Preview .
July 19, 2023
Change
The project usage monitoring page has moved to a new URL under the existing project usage page. For more information, see Usage dashboard .
July 14, 2023
Feature
Support for Firestore point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now available in Preview .
July 11, 2023
Feature
Support for the northamerica-northeast2 (Toronto) region.
July 07, 2023
Feature
Multiple databases now available in Preview .
June 20, 2023
Announcement
OR queries now supported at the General Availability level .
May 23, 2023
Feature
Support for the asia-south2 (Delhi) region.
April 24, 2023
Feature
count() queries are now supported at the General Availability level .
April 17, 2023
Feature
Eventarc events and Firestore events for Cloud Functions (2nd gen) now available in Preview .
April 14, 2023
Feature
The Firestore documentation has been updated to include guidance on using regional endpoints. For details, see Regional endpoints .
March 29, 2023
Change
Firestore no longer limits the number of writes that can be passed to a Commit operation or performed in a transaction. Previously, the limit was 500. Limits for request size and the transaction time limit still apply.
March 24, 2023
Feature
OR queries now available in Preview .
March 13, 2023
Feature
Support for the europe-west4 (Netherlands) region.
January 06, 2023
Change
The Firestore indexes pages in the Google Cloud and Firebase
consoles now show the __name__ field in each composite index definition.
The __name__ field is added by default to each index definition and affects the
sorting of results . The __name__ field was always part of each index
definition but was previously hidden by the console.
December 19, 2022
Feature
Support for the australia-southeast2 (Melbourne) region.
October 17, 2022
Feature
count() queries now available in Preview .
Change
The following database limits no longer apply:
Maximum writes per second per database: 10,000
Maximum concurrent connections for mobile/web clients per database: 1,000,000
October 11, 2022
Feature
Time-to-live (TTL) policies are now supported at the General Availability level .
August 22, 2022
Feature
Added a query builder and table view to the Firestore data section in the Google Cloud console. Use the query builder to filter and compare many documents at once. To learn more, see Query data in the Google Cloud console .
July 19, 2022
Feature
Time-to-live (TTL) policies now available in Preview .
June 01, 2022
Feature
Support for VPC Service Controls is now available in General Availability .
May 13, 2022
Announcement
Firebase App Check now supports Firestore at the General Availability release level. Use App Check in your mobile or web app to ensure that only your app can access your Firestore data.
April 28, 2022
Feature
The datastore.databases.getMetadata permission now supports custom Identity and Access Management roles.
January 12, 2022
Feature
Support for VPC Service Controls is now available in Preview .
December 15, 2021
Feature
Key Visualizer for Firestore is now generally available ( GA ).
November 12, 2021
Feature
Firebase App Check now supports the Firestore iOS and Android SDKs.
Announcement
Dartpad , Flutter's online editor, now supports Firestore. For an example, see this sample app .
Announcement
The Firestore Unity and C++ SDKs are now supported at the General Availability release level.
November 04, 2021
Feature
DATA_READ and DATA_WRITE Data Access audit logs are now supported at the General Availability release level . See Firestore audit logging information .
September 09, 2021
Feature
Firestore triggers for Cloud Functions are now supported at the General Availability release level .
September 02, 2021
Feature
Added DATA_READ and DATA_WRITE Data Access audit logs. See Firestore audit logging information . This feature is available in Preview .
July 22, 2021
Change
This feature was released on September 2, 2021 .
The DATA_READ and DATA_WRITE Data Access audit logs feature has been moved to a future release. It is not currently available.
July 16, 2021
Feature
This feature release was moved to September 2, 2021 .
Added DATA_READ and DATA_WRITE Data Access audit logs. See Firestore audit logging information . This feature is available in Preview .
June 15, 2021
Feature
Support for Identity and Access Management custom roles .
June 14, 2021
Feature
Support for the following additional locations:
asia-southeast1 Singapore
us-west1 Oregeon
asia-east1 Taiwan
See the full list of locations .
April 13, 2021
Feature
Support for the europe-central2 (Warsaw) region.
February 25, 2021
Feature
A Firestore connector for Workflows is now available in public preview.
February 09, 2021
Feature
Firestore now offers beta support for C++ through the Firebase C++ SDK .
October 28, 2020
Feature
You can now start import and export operations from the Google Cloud Console .
September 30, 2020
Feature
Firestore now supports the not equals != and not-in query operators .
September 16, 2020
Feature
You can now use the goog-firestoremanaged billing report label to view costs related to import and export operations.
September 11, 2020
Feature
You can now view your Firestore Security Rules in the Cloud Console .
June 22, 2020
Feature
The Google Cloud console now includes a Firestore usage dashboard .
June 08, 2020
Feature
Support for the asia-southeast2 (Jakarta) .
April 20, 2020
Feature
Support for us-west4 region (Las Vegas) .
March 11, 2020
Feature
Support for us-west3 (Salt Lake City) and asia-northeast3 (Seoul) .
November 07, 2019
Feature
Cloud Firestore now supports the in and array-contains-any query operators .
July 08, 2019
Feature
Added the Active Connections and Snapshot Listeners Cloud Firestore metrics to Stackdriver Monitoring. To learn more about using these metrics to set up dashboards and alerts, see Monitoring usage .
May 07, 2019
Feature
Cloud Firestore now supports collection group queries . A collection group consists of all collections with the same ID. By default, queries retrieve results from a single collection in your database. Use a collection group query to retrieve documents from a collection group instead of from a single collection.
April 18, 2019
Feature
Support for asia-northeast2 region (Osaka) .
April 15, 2019
Feature
Support for europe-west6 region (Zürich) .
March 28, 2019
Feature
You can now use the increment operation to increase or decrease the current value of a numeric field by a given amount. For more on this feature, see our announcement .
January 31, 2019
Feature
Cloud Firestore now supports the following 10 additional locations:
Multi-region
eur3 Europe
North America (regional)
us-west2 Los Angeles
northamerica-northeast1 Montréal
us-east4 Northern Virginia
South America (regional)
southamerica-east1 São Paulo
Europe (regional)
europe-west2 London
Asia (regional)
asia-south1 Mumbai
asia-east2 Hong Kong
asia-northeast1 Tokyo
Australia (regional)
australia-southeast1 Sydney
For a full list of supported multi-regions and regions, see Cloud Firestore Locations .
Feature
General Availability release of Cloud Firestore. The Cloud Firestore SLA is now in effect, including 99.999% availability for multi-region instances and 99.99% availability for regional instances.
October 29, 2018
Feature
We added a Cloud Firestore emulator you can use for local testing. To set up the emulator, see Testing Cloud Firestore Security Rules .
August 09, 2018
Feature
We added two new features to help you work with arrays:
Array contains queries : query for documents that contain a particular array value.
Array transforms : the arrayUnion() and arrayRemove() functions allow you to directly modify array field values.
August 08, 2018
Feature
You can now manage your Cloud Firestore instance from the Google Cloud Platform console .
Feature
Added support for importing and exporting of documents, see Exporting and Importing Data .
Feature
You can now add single-field index exemptions to exempt specific fields from automatic indexing.
Feature
You can now create a Cloud Firestore database in Datastore mode . Datastore mode allows you to use Cloud Datastore client libraries with an improved Cloud Firestore storage layer, removing eventual consistency limitations.
Feature
Cloud Firestore now supports the europe-west3 and us-east1 regions, see Cloud Firestore Locations .
June 13, 2018
Change
Added code examples for the Ruby server client library .
May 16, 2018
Change
Documentation updates:
New page on Cloud Firestore indexes . This page describes Cloud Firestore index types, the relationship between queries and indexes, and index merging for equality filters.
Added code examples for the C# server client library .
May 11, 2018
Change
We raised the Cloud Firestore Security Rules limits for document access calls.
April 03, 2018
Change
The Firebase SDK for Cloud Functions v1.0.0 is now available and introduces some breaking changes, see the Cloud Firestore section of the Firebase SDK for Cloud Functions Migration Guide .
March 29, 2018
Feature
Cloud Firestore Security Rules now support the getAfter() function. Use this function to enforce data validation for atomic operations .
February 23, 2018
Feature
New documentation page on Cloud Firestore Security Rules and queries.
This page clarifies how Cloud Firestore Security Rules evaluate query requests. Read this page to learn how to write queries that satisfy your security rules and how to write security rules based on query properties like limit and orderby .
February 08, 2018
Feature
New Cloud Firestore server client libraries:
C#
PHP
Ruby
January 18, 2018
Change
Overhaul of the Cloud Firestore Security Rules documentation. These improved pages add more examples and give a clearer introduction to the structure of Cloud Firestore Security Rules:
Getting Started with Security Rules
Structuring Security Rules
Writing Conditions for Security Rules
January 10, 2018
Feature
Cloud Firestore Security Rules now offer the ability to limit read or write access to data based on query parameters. Learn more about query-based rules .
October 03, 2017
Feature
Beta release of Cloud Firestore.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
