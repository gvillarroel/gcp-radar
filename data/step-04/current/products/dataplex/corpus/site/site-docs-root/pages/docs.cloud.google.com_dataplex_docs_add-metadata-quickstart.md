---
title: "Quickstart: Add metadata to a BigQuery table \_|\_ Knowledge Catalog \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/add-metadata-quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/add-metadata-quickstart
  title: "Quickstart: Add metadata to a BigQuery table \_|\_ Knowledge Catalog \_\
    |\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Add metadata to a BigQuery table
Learn how to get started with metadata management in Dataplex Universal Catalog.
This quickstart shows you how to add metadata to a BigQuery table.
In this quickstart, you do the following things:
Create a BigQuery dataset and table based on a public dataset.
Create a template that defines a set of related metadata fields.
The template is called an aspect type . The set of related metadata
fields, which describe the business and technical metadata for your data
assets, is called an aspect .
Add metadata to the table.
In Dataplex Universal Catalog, each data asset is represented as an entry . To
attach metadata to a data asset, you add aspects to the entry.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Dataplex and BigQuery APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Dataplex and BigQuery APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to add metadata to a BigQuery table,
ask your administrator to grant you the
following IAM roles on the project:
Dataplex Catalog Admin ( roles/dataplex.catalogAdmin )
BigQuery Data Owner ( roles/bigquery.dataOwner )
BigQuery Job User ( roles/bigquery.jobUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a dataset and a table
In the Google Cloud console, go to the BigQuery Studio page.
Go to BigQuery Studio
Create a dataset:
In the left pane, click explore Explorer :
If you don't see the left pane, click last_page Expand left pane to open the pane.
In the Explorer pane, find your project. Click
more_vert View actions ,
and then click Create dataset .
In the Dataset ID field, enter catalog_demo_dataset .
Keep the default values for the other fields.
Click Create dataset .
Copy a public table to your dataset:
In the Explorer pane, search for the table named
bigquery-public-data.new_york_citibike.citibike_stations . You
might need to set the search scope to include the bigquery-public-data
project.
This table is part of the NYC Citi Bike Trips dataset, a public dataset
that contains data about a bike share program.
Select the citibike_stations table.
Click Copy . Enter the following information:
Project : select your project.
Dataset : select catalog_demo_dataset .
Table : enter bike_stations .
Click Copy .
In the Explorer pane, locate the catalog_demo_dataset dataset, and
confirm that the bike_stations table is listed in the dataset.
Define a metadata template: create an aspect type
In the Google Cloud console, go to the Dataplex Universal Catalog Catalog
page.
Go to Catalog
Click the Aspect types & tag templates tab, and then click the Custom
tab.
Click Create aspect type .
In the Aspect type ID field, enter data-governance-demo .
For Location , select global .
In the Template section, click
Add field . Use the information in the following table to add several
fields to the aspect type:
Name
Type
Is required
Description
source-of-data-asset
Text
No
-
retention-date
Date and time
No
-
data-classification
Enum
Add the values Public , Sensitive ,
and Confidential .
Yes
-
has-pii
Boolean
Yes
Whether the data asset has personally identifiable information
Click Save .
Add metadata to the table: add an aspect to the entry
In the Google Cloud console, go to the Dataplex Universal Catalog Search
page.
Go to Search
In the search box, enter catalog_demo_dataset .
Select the bike_stations table.
Add a custom aspect to the entry:
In the Tags & aspects section, next to
Optional tags & aspects , click
add Add .
Select the data-governance-demo aspect type.
This creates an aspect that uses your aspect type as a template.
Enter the following values:
Source of data asset : Copied from NYC Citi Bike Trips public dataset
Retention date : enter a date.
Data classification : Public
Has PII : False
Click Save .
To see the metadata values that you added, in the Tags & aspects
section, select the data-governance-demo aspect.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the project
The easiest way to stop billing is to delete the project that you created
for this quickstart.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete individual resources
If you want to reuse your project, delete the resources that you created.
Delete the dataset:
In the Google Cloud console, go to the BigQuery Studio page.
Go to BigQuery Studio
In the left pane, click explore Explorer :
In the Explorer pane, search for the catalog_demo_dataset dataset.
Click
more_vert View actions ,
and then click Delete . Confirm when prompted.
Delete the aspect type:
In the Google Cloud console, go to the Dataplex Universal Catalog Catalog page.
Go to Catalog
Click the Aspect types & tag templates tab, and then click the
Custom tab.
Click the data-governance-demo aspect type.
Click Delete . Confirm when prompted.
What's next
Learn more about
metadata management .
Learn how to search for resources .
Learn how to work with aspects and aspect types .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
