---
title: "Dataproc Metastore release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/release-notes
  title: "Dataproc Metastore release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Resources
Send feedback
Dataproc Metastore release notes
Stay organized with collections
Save and categorize content based on your preferences.
These release notes apply to the core Dataproc Metastore product. You can periodically check this page for announcements about new or updated features, bug fixes, known issues, and deprecated functionality.
See Dataproc Metastore version policy for a list of current and past supported software versions.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 13, 2026
v1 & v1beta & v1alpha
Deprecated
The Hive Metastore versions 1.2.2 and 2.2.0 are deprecated. You can no longer create services with these versions. Existing services will continue to function.
January 13, 2026
v1 & v1beta1
Deprecated
Multi-region and custom dual region support for Dataproc Metastore is deprecated. You can no longer create new multi-region or custom dual region services. Existing services will continue to function.
August 20, 2025
v1 & v1beta1
Change
Backported HIVE-26882 to version 3.1.2. Hive Metastore now supports performing transactional checks of table parameters before altering a table.
v1 & v1beta1
Change
Backported HIVE-28121 to version 3.1.2. Hive Metastore now uses direct SQL for transactionally altering table parameters.
April 22, 2025
v1beta1
Feature
Dataproc Metastore multi-regional services now support the use of customer-managed encryption keys (CMEKs) -- (in preview ).
March 31, 2025
v1
Feature
Dataproc Metastore federation now supports multi-regional Dataproc Metastore services.
September 05, 2024
v1 & v1beta1
Feature
Dataproc Metastore supports custom region configurations . A custom region configuration lets your service run workloads from two separate regions.
June 30, 2024
v1
Change
Dataproc Metastore managed migrations is generally available ( GA )
v1
Change
Dataproc Metastore autoscaling is generally available ( GA )
May 27, 2024
v1
Feature
Dataproc Metastore services can now enable deletion-protection to prevent the accidental removal of new or existing services.
April 16, 2024
v1
Change
New Dataproc Metastore services configured with Private Service Connect can be connected from subnetworks of any region within the same VPC network.
Existing services configured with Private Service Connect do not inherit this change and continue to only support access from the VPC subnetworks that were specified during service creation.
April 01, 2024
v1beta1
Feature
Dataproc Metastore now supports managed migrations .
Managed migration is an automated feature that helps you migrate data from a self-managed Hive Metastore to a Dataproc Metastore service, without any sizable down time.
v1beta1
Feature
Dataproc Metastore now supports autoscaling . Autoscaling automatically increases or decreases the scaling factor required to run your workloads.
March 08, 2024
v1
Feature
Dataproc Metastore now supports scheduled backups . Backups can be scheduled to run at user-specified cron job intervals, including running daily, weekly, or monthly.
November 06, 2023
v1
Feature
The Data Catalog Sync feature is generally available ( GA ). With this launch, Data Catalog also now supports syncing metadata from Dataproc Metastore services using the Spanner Database.
October 31, 2023
v1
Feature
Dataproc Metastore is available in the following multi-regional configurations , nam11 and eur5 .
October 25, 2023
v1
Feature
Dataproc Metastore is now available in the me-central2 (Dammam) region. For more information, see Dataproc Metastore locations .
Note: Currently, Dataproc Metastore services created in me-central2 can't be attached to Dataproc clusters.
October 16, 2023
v1
Feature
Dataproc Metastore now supports multi-regional configurations .
May 31, 2023
v1
Feature
Dataproc Metastore gRPC endpoints are generally available ( GA ).
v1
Feature
Metadata federation support for BigQuery and BigLake is generally available ( GA ).
May 08, 2023
v1
Feature
Administrator interface is generally available ( GA ). The GA release adds support for altering Hive table properties.
March 27, 2023
v1beta1
Feature
Metadata federation now supports Dataplex lakes as a metadata source (in preview )
March 09, 2023
v1
Feature
Dataproc Metastore 2 is now Generally Available ( GA ). Dataproc Metastore 2 provides horizontal scalability through fine grained scaling options. For more information, see Datproc Metastore versions .
v1
Feature
The Spanner database type is generally available ( GA ).
v1
Feature
Auxiliary versions is generally available ( GA ).
January 19, 2023
v1
Feature
Dataproc Metastore is available in the following regions: asia-east2 (Hong Kong), europe-central2 (Warsaw), europe-north1 (Finland), and us-west4 (Las Vagas). For more information, see Dataproc Metastore locations .
December 05, 2022
v1beta1
Feature
Dataproc Metastore administrator interface is available in preview .
The administrator interface provides you with a centralized tool to inspect and manage the metadata stored in your Dataproc Metastore service.
September 23, 2022
v1beta1
Feature
Metadata federation now supports BigQuery datasets as a metadata source (in preview ).
July 18, 2022
v1
Feature
Dataproc Metastore is available in the following regions: us-west2 (Los Angeles), us-west3 (Salt Lake City), europe-west4 (Netherlands), europe-west6 (Zürich), and asia-east1 (Taiwan). For more information, see Dataproc Metastore locations .
Note that these services are immediately available through the gcloud CLI and the REST API. Cloud console availability will vary by region over the next few weeks.
June 30, 2022
v1
Feature
Metadata federation is generally available ( GA ).
Metadata federation lets you access metadata that is stored in multiple Dataproc Metastore instances.
To set up a federation, you create a federation service and then configure multiple Dataproc Metastore instances as your backend metastores. The federation service then exposes a single gRPC endpoint, which you can use to access metadata across all of your metastore instances.
v1
Feature
Private Service Connect for Dataproc Metastore is generally available ( GA ).
June 06, 2022
v1beta1
Change
Updated Dataproc Metastore auxiliary versions to support the Spanner database type.
March 01, 2022
v1beta1
Feature
gRPC endpoint protocol is available in Preview .
February 28, 2022
v1beta1
Fixed
Fixed the issue causing metadata batch sync from Dataproc Metastore to Data Catalog to not work.
February 19, 2022
v1
Fixed
Fixed the issue causing Dataproc Metastore service creation to fail with the error NO_MATCHING_ACCESS_LEVEL due to a known issue where dns.googleapis.com is in the service perimeter but not in the allowlist.
February 11, 2022
v1beta1
Fixed
Performing import, export, backup, or restore on Spanner-backed services now returns a 4XX error since these operations aren't supported.
v1beta1
Change
Added additional mutual exclusion validation for Data Catalog and Spanner-backed services.
v1
Fixed
Fixed the issue causing request_count metric spikes due to a bug in the logic of our metrics reporting pipeline.
February 04, 2022
v1 & v1beta1
Change
Data Catalog sync users must request roles/metastore.metadataViewer to view synced Dataproc Metastore entries in Data Catalog. The roles/metastore.Admin and roles/metastore.Editor no longer support metastore databases and tables permissions.
v1 & v1beta1
Issue
Creating a Dataproc Metastore service results in the error NO_MATCHING_ACCESS_LEVEL due to dns.googleapis.com in the service perimeter but not in the allowlist. To work around this issue, remove dns.googleapis.com from the perimeter during API calls.
v1 & v1beta1
Issue
The request_count metric spikes due to a bug in the logic of our metrics reporting pipeline.
January 26, 2022
v1beta1
Feature
Spanner database type is available in Preview .
v1beta1
Feature
Dataproc Metastore Auxiliary versions are available in Preview .
January 07, 2022
v1
Change
Dataproc Metastore is available in the following regions:
asia-northeast3 (Seoul)
southamerica-east1 (São Paulo)
For more information, see Locations .
December 14, 2021
v1 & v1beta1
Issue
An Apache Log4j 2 vulnerability that impacted Dataproc clusters has been addressed (see Recreate and update a cluster , which provides guidance to Dataproc users). Dataproc Metastore users do not need to take any action; the fix applied by Dataproc Metastore is sufficient to address the issue.
November 29, 2021
v1
Fixed
Fixed the issue causing Dataproc Metastore service creations in a VPC-SC perimeter to fail due to a known issue that requires Google-managed service accounts to have access to Dataproc Metastore and Cloud Storage APIs.
November 24, 2021
v1
Issue
Dataproc Metastore service creations in a VPC-SC perimeter may fail due to a known issue that requires Google-managed service accounts to have access to Dataproc Metastore and Cloud Storage APIs.
To work around this issue, or if you encounter a VPC-SC issue of type NO_MATCHING_ACCESS_LEVEL while creating your Dataproc Metastore service, create an access level for your service so it can access the APIs inside the service perimeter.
November 15, 2021
v1beta1
Feature
Private Service Connect with Dataproc Metastore is available in Preview .
October 07, 2021
v1 & v1beta1
Fixed
Fixed the issue causing Dataproc Metastore service creations with CMEK enabled to fail if a service without CMEK enabled has never been created before in the project.
September 30, 2021
v1
Feature
CMEK integration with Dataproc Metastore is generally available ( GA ).
September 16, 2021
v1beta1
Issue
For new projects, Dataproc Metastore service creations with CMEK enabled fail if a service without CMEK enabled has never been created before.
To work around this issue, create a service without CMEK enabled first.
September 06, 2021
v1
Change
The default Dataproc Metastore service creation version is changed to Hive 3.1.2.
August 30, 2021
v1
Announcement
Hive version 3.1.2 will become the default Dataproc Metastore service creation version in 1 week on September 6, 2021.
August 24, 2021
v1beta1
Fixed
Fixed the issue causing metadata changes introduced through imports and backups to not be reflected in Data Catalog due to broken batch sync.
August 20, 2021
v1beta1
Feature
CMEK integration with Dataproc Metastore is available in Preview .
August 05, 2021
v1
Announcement
Hive version 3.1.2 will become the default Dataproc Metastore service creation version in 5 weeks on September 6, 2021.
July 30, 2021
v1
Feature
Dataproc Metastore backups and restores support cross-service restoration of metadata.
v1
Change
Dataproc Metastore is available in the following regions:
asia-southeast1 (Singapore)
europe-west1 (Belgium)
northamerica-northeast1 (Montréal)
For more information, see Locations .
July 29, 2021
v1beta1
Issue
There is an issue with Dataproc Metastore to Data Catalog batch sync. Metadata changes introduced through imports and backups will not be reflected in Data Catalog until batch sync is restored.
July 22, 2021
v1
Feature
Avro based imports and exports are generally available ( GA ).
July 09, 2021
v1
Feature
Backing up and restoring service metadata are generally available ( GA ).
June 25, 2021
v1
Change
The metadata import history is limited to 25. The oldest import is automatically deleted when the 26th import is created.
v1
Feature
Dataproc Metastore performs a Hive metadata schema validation when importing metadata into a service .
For SQL dump, it verifies the tables in the SQL dump file.
For Avro import, it verifies the Avro file names.
Both approaches ensure that all tables exist in the import source.
If the verification fails, the operation fails with INVALID_ARGUMENT code and an error message describing which table is missing.
April 15, 2021
v1
Change
The asynchronous workflows logs have labels that appear in Cloud logging.
v1
Change
You no longer need to manually override metastore.expression.proxy to use PartitionProxyForMetastore in Hive 3.1.2.
March 31, 2021
v1
Announcement
Dataproc Metastore is generally available ( GA ).
v1
Feature
Dataproc Metastore supports backing up and restoring service metadata and configuration. This feature is available in Preview .
v1
Feature
Dataproc Metastore supports asynchronous background tasks through the Canary release channel .
v1
Feature
You can enable sync from a Dataproc Metastore service to Data Catalog . This feature is available in Preview .
v1
Feature
Dataproc Metastore imports and exports support Avro storage format. This feature is available in Preview .
March 03, 2021
v1beta1
Fixed
Fixed an issue where specifying a Cloud Storage URI without an object would return an internal error.
v1beta1
Fixed
Fixed an issue where the metastore.googleapis.com/service/health metric didn't show up for some services.
February 19, 2021
v1beta1
Fixed
Fixed an issue where services would fail to create in projects with project IDs that contain the colon "(:)" character.
v1beta1
Deprecated
The MetadataImport.DatabaseDump.source_database field is deprecated. It will be removed from the v1beta API channel no earlier than August 18, 2021.
v1beta1
Change
Hive configuration overrides are rejected if either the key or value contains a newline or "<" character.
v1beta1
Issue
Logs query builder doesn't work when selecting location and service ID.
February 16, 2021
v1beta1
Security
You must have storage.objects.get permission on the Cloud Storage object in order to import metadata from the Cloud Storage file.
February 03, 2021
v1beta1
Feature
You can create Dataproc Metastore services in cross-product networks (shared VPC) .
v1beta1
Feature
New Cloud Monitoring service metric is available:
metastore.googleapis.com/service/request_count
v1beta1
Feature
Dataproc Metastore suppports the use of non-RFC 1918 private IP address ranges in metastore services.
v1beta1
Feature
You can update the description of metadata imports under a Dataproc Metastore service.
v1beta1
Fixed
Fixed an issue in which a service could get stuck in the UPDATING state.
v1beta1
Fixed
Fixed an issue where Cloud Storage buckets with single character directories would fail request validation.
January 19, 2021
v1beta1
Fixed
Fixed the Dataproc Metastore Cloud Logging and Monitoring issue.
January 08, 2021
v1beta1
Issue
Dataproc Metastore Cloud Logging and Monitoring is unavailable. The issue will be fixed shortly.
December 14, 2020
v1beta1
Announcement
Dataproc Metastore is available in Preview .
v1beta1
Breaking
Legacy Dataproc Metastore services created during private Preview (prior to December 14, 2020 at 12:00 PM Pacific Standard Time) will be automatically deleted on January 29, 2021.
The Thrift endpoints of legacy services will continue to function normally, but certain pre-existing functionality such as metadata imports will cease to work. Furthermore, new features (including those announced on December 14, 2020) and bugfixes will not be available to legacy services.
To ensure you receive the newest features, patches, and stability, we strongly recommend you recreate legacy Dataproc Metastore services. Since the new metadata export feature is not available for legacy services, if you need help migrating metadata from a legacy service, the Dataproc Metastore team will be happy to assist you with a manual migration.
Please contact dataproc-metastore-support@google.com with any questions or to request help migrating metadata.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
