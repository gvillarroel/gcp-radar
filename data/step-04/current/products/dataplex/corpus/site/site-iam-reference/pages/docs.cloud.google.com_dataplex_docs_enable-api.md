---
title: "Enable Dataplex Universal Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/enable-api
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/enable-api
  title: "Enable Dataplex Universal Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Guides
Send feedback
Enable Dataplex Universal Catalog
Stay organized with collections
Save and categorize content based on your preferences.
Before you can use Dataplex Universal Catalog, you must enable the necessary APIs in your
Google Cloud project. This document shows you how to enable the
Dataplex Universal Catalog API and other required services.
As a security measure, an organization can control who has permission to enable
APIs. In some cases, enabling APIs start billing, so organizations can restrict
access to control costs. For information about Service Usage on
Google Cloud, see
Enabling and disabling services .
Before you begin
Create a Google Cloud project
and enable billing .
To enable and disable the Dataplex API, you need the
Owner Editor role. For more information about roles and permissions,
see Access control with IAM .
Enable Dataplex Universal Catalog
You can use an existing project with Dataplex Universal Catalog or create
a new one. We recommend that you create a new project. If you are using a new Google Cloud project or a project in which the BigQuery API is enabled, the Dataplex API is enabled by default. However, you still need to enable the Dataproc API and Dataproc Metastore API.
To keep resources created by the lake within your project, separate from one another, create a project per lake instance.
To create a project and enable Dataplex Universal Catalog, follow these steps:
In the Google Cloud console, select or create a project .
Make sure that billing is enabled for
your project.
Enable the Dataplex, Managed Service for Apache Spark, and Dataproc Metastore APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Note: If you also enable the
Data Lineage API , it incurs charges
separately from the Dataplex API. For more information, see
Dataplex Universal Catalog pricing and
Data lineage considerations .
Disable Dataplex Universal Catalog
If you use Dataplex Universal Catalog in a project that also uses BigQuery,
be aware of the
effects on BigQuery behavior
when you disable Dataplex Universal Catalog.
To avoid additional charges, complete the following steps before you disable
Dataplex Universal Catalog:
In the Google Cloud console, delete each lake instance in your project.
To delete a lake, you must first delete the individual assets and zones. For
more information, see Delete a lake .
To avoid charges, delete all Cloud Storage buckets for zones within your
lake. You can delete the Cloud Storage buckets before or after disabling
the API.
Wait until in-progress service operations for deleting lakes complete.
Look for an empty list of lake instances on the Dataplex Universal Catalog page.
In the Google Cloud console, delete all custom entry groups in your project. Deleting an entry group removes all entries that belong to the entry group. For more information, see Delete Entry Group .
Select the project to disable the Dataplex API in.
Go to the Enabled APIs & services page.
Go to Enabled APIs & services
Click Cloud Dataplex API .
Click Disable API . Confirm when prompted.
To disable the following APIs, repeat the steps:
Data Lineage API (if enabled)
What's next
Learn how to search for resources .
Learn how to measure data quality .
Learn about catalog management concepts .
Follow a quickstart:
Track data lineage for a BigQuery table .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
