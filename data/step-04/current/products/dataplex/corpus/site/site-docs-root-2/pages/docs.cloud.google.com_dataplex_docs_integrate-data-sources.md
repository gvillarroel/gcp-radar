---
title: "Integrate data sources with Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/integrate-data-sources
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/integrate-data-sources
  title: "Integrate data sources with Knowledge Catalog \_|\_ Google Cloud Documentation"
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
Guides
Send feedback
Integrate data sources with Knowledge Catalog
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to integrate data sources with
Knowledge Catalog (formerly Dataplex Universal Catalog). Knowledge Catalog can import and maintain
up-to-date metadata from Google Cloud data sources.
With metadata ingested, Knowledge Catalog does the following:
Makes the existing metadata discoverable through search. For more
information, see
Search for data assets in Knowledge Catalog .
Allows the members of your organization to enrich your data with additional
business metadata by using aspects. For more information, see
Manage aspects and enrich metadata .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Dataplex API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Dataplex API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Integrate AlloyDB for PostgreSQL
After you enable the Knowledge Catalog integration on
your AlloyDB for PostgreSQL cluster
Preview ,
Knowledge Catalog automatically retrieves metadata from AlloyDB for PostgreSQL
resources, including clusters, instances, databases, tables, columns, and
views.
Knowledge Catalog retrieves metadata only from
AlloyDB for PostgreSQL primary instances and not from read replicas.
For more information, see
Manage your AlloyDB for PostgreSQL resources using Knowledge Catalog .
Integrate Cloud SQL
After you enable the Knowledge Catalog integration on
your Cloud SQL instance , Knowledge Catalog
automatically retrieves metadata from Cloud SQL resources, including
instances, databases, tables, columns, and views.
Knowledge Catalog retrieves metadata only from
Cloud SQL primary instances and not from read replicas.
For more information, see
Manage your Cloud SQL resources using Knowledge Catalog .
What's next
Learn how to search for assets
in Knowledge Catalog.
Learn about metadata management in Knowledge Catalog .
Learn how to enrich entries and entry links with metadata by using aspects .
Learn how to manage entries and ingest custom sources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
