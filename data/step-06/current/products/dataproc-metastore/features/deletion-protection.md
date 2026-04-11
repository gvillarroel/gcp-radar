---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.296Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Deletion protection"
feature_slug: "deletion-protection"
latest_feature_date: "2024-05-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest/Shared.Types/DayOfWeek"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster"
keywords:
  - "deletion"
  - "protection"
  - "helps"
  - "prevent"
  - "accidental"
  - "removal"
  - "of"
  - "new"
---

# Deletion protection

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

Deletion protection helps prevent accidental removal of new or existing Dataproc Metastore services.

## Extended Definition

Deletion protection helps prevent accidental removal of new or existing Dataproc Metastore services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest/Shared.Types/DayOfWeek](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest/Shared.Types/DayOfWeek)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster)

## Supporting Pages

### Dataproc Metastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- June 30, 2024 v1 Change Dataproc Metastore managed migrations is generally available ( GA ) v1 Change Dataproc Metastore autoscaling is generally available ( GA ) May 27, 2024 v1 Feature Dataproc Metastore services can now enable deletion-protection to prevent the accidental removal of new or existing services.
- February 03, 2021 v1beta1 Feature You can create Dataproc Metastore services in cross-product networks (shared VPC) . v1beta1 Feature New Cloud Monitoring service metric is available: metastore.googleapis.com/service/request count v1beta1 Feature Dataproc Metastore suppports the use of non-RFC 1918 private IP address ranges in metastore services. v1beta1 Feature You can update the description of metadata imports under a Dataproc Metastore service. v1beta1 Fixed Fixed an issue in which a service could get stuck in the UPDATING state. v1beta1 Fixed Fixed an issue where Cloud Storage buckets with single character directories would fail request validation.
- April 16, 2024 v1 Change New Dataproc Metastore services configured with Private Service Connect can be connected from subnetworks of any region within the same VPC network.
- February 11, 2022 v1beta1 Fixed Performing import, export, backup, or restore on Spanner-backed services now returns a 4XX error since these operations aren't supported. v1beta1 Change Added additional mutual exclusion validation for Data Catalog and Spanner-backed services. v1 Fixed Fixed the issue causing request count metric spikes due to a bug in the logic of our metrics reporting pipeline.

### DayOfWeek \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest/Shared.Types/DayOfWeek](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest/Shared.Types/DayOfWeek)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- MONDAY Monday TUESDAY Tuesday WEDNESDAY Wednesday THURSDAY Thursday FRIDAY Friday SATURDAY Saturday SUNDAY Sunday Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Dataproc Metastore Reference Send feedback DayOfWeek Stay organized with collections Save and categorize content based on your preferences.
- Enums DAY OF WEEK UNSPECIFIED The day of the week is unspecified.
- Java is a registered trademark of Oracle and/or its affiliates.

### Deploy a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- This service helps you manage the metadata of your data lakes and provides interoperability between the various data processing tools you're using.
- Linux cluster-1-m 3.16.0-0.bpo.4-amd64 ... ... example-cluster@cluster-1-m: $ To start Hive and create a database and table, run the following commands in the SSH session: Start Hive. hive Create a database called myDatabase . create database myDatabase; Show the database you created. show databases; Use the database you created. use myDatabase; Create a table called myTable . create table myTable(id int,name string); List the tables under myDatabase . show tables; Describe the schema of the table you created. desc MyTable; Running these commands show an output similar to the following: $hive hive> show databases; OK default hive> create database myDatabase; OK hive> use myDatabase; OK hive> create table myTable(id int,name string); OK hive> show tables; OK myTable hive> desc myTable; OK id int name string Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- Enable the APIs Required Roles To get the permissions that you need to create a Dataproc Metastore and a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: To grant full access to all Dataproc Metastore resources, including setting IAM permissions: ( roles/metastore.admin ) on the user account or service account To grant full control of Dataproc Metastore resources: Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account To create a Managed Service for Apache Spark cluster: ( roles/dataproc.worker ) on the service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- For more information, see Cluster creation fails due to insufficient roles . gcloud CLI To create a cluster using the provided default settings, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create example-cluster \ --dataproc-metastore=projects/ PROJECT ID /locations/us-central1/services/example-service \ --region=us-central1 Replace PROJECT ID with the project ID of the project that you created your Dataproc Metastore service in.

