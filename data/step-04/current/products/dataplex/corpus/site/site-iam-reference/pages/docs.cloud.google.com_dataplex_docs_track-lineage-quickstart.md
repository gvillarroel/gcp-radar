---
title: "Track data lineage for a BigQuery table \_|\_ Knowledge Catalog \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart
  title: "Track data lineage for a BigQuery table \_|\_ Knowledge Catalog \_|\_ Google\
    \ Cloud Documentation"
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
Track data lineage for a BigQuery table
This document describes how to track the lineage of data in BigQuery
tables.
Data lineage is the process of tracking where data comes
from, how it's transformed, and where it moves over time. Understanding
data lineage is crucial for ensuring compliance,
troubleshooting data issues, and performing root-cause analysis.
This quickstart shows you how to get started with data lineage for
BigQuery tables:
Copy two tables from a publicly available new_york_taxi_trips dataset.
Combine the total number of taxi rides from both tables into a new table.
View a lineage visualization graph for all three operations.
Before you begin
Set up your project:
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
Enable the Dataplex, BigQuery, and Data Lineage APIs.
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
Enable the Dataplex, BigQuery, and Data Lineage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Caution: Data lineage is enabled on a per-project basis, not a
per-service basis.
After you enable the Data Lineage API, lineage information is automatically
reported for multiple Google Cloud services in the project, depending on their
product-level lineage control.
For more details, see Data lineage considerations .
Required roles
To get the permissions that
you need to view lineage visualization graphs,
ask your administrator to grant you the
following IAM roles:
Dataplex Catalog Viewer ( roles/dataplex.catalogViewer )
on the Knowledge Catalog (formerly Dataplex Universal Catalog) resource project
Data Lineage Viewer ( roles/datalineage.viewer )
on the project where you use BigQuery
BigQuery Data Viewer ( roles/bigquery.dataViewer )
on the project where you use BigQuery
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Add a public dataset to your project
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the left pane, click explore Explorer :
If you don't see the left pane, click last_page Expand left pane to open the pane.
In the Explorer pane, click Add data .
In the Add data pane, select Public datasets .
In the Marketplace pane, search for NYC TLC Trips and click the
NYC TLC Trips result.
Click View dataset .
This adds the public dataset's project as a reference that you can view in the
Explorer pane. The details pane shows Dataset info , including information
such as Dataset ID , Data location , and Last modified date.
Create a dataset in your project
In the left pane, click explore Explorer :
In the Explorer pane, select the project where you want to create the
dataset.
Click more_vert Actions and click Create
dataset .
On the Create dataset page, in the Dataset ID field, enter:
data_lineage_demo . Leave the other fields with their default values.
Click Create dataset .
In the Explorer pane, click Datasets , and then click the newly added
data_lineage_demo .
The details pane shows its Dataset info .
Copy two publicly accessible tables to your dataset
Open a query editor: In the details pane, next to the tab called
data_lineage_demo , click add_box
SQL query . This step creates a tab called Untitled .
In the query editor, copy the first table by entering the following
query. Replace PROJECT_ID with your project's
identifier .
CREATE TABLE ` PROJECT_ID . data_lineage_demo . nyc_green_trips_2021 `
COPY ` bigquery - public - data . new_york_taxi_trips . tlc_green_trips_2021 `
Click play_circle Run . This step
creates the first table, called nyc_green_trips_2021 .
In the Query results pane, click Go to table . This step displays
the contents of the first table.
In the query editor, copy the second table by replacing the previous
query with the following query. Replace PROJECT_ID with your
project's
identifier .
CREATE TABLE ` PROJECT_ID . data_lineage_demo . nyc_green_trips_2022 `
COPY ` bigquery - public - data . new_york_taxi_trips . tlc_green_trips_2022 `
Click play_circle Run . This step
creates the second table, called nyc_green_trips_2022 .
In the Query results pane, click Go to table . This step displays
the contents of the second table.
Aggregate data into a new table
In the query editor, enter the following query. Replace PROJECT_ID with
your
project's identifier .
CREATE TABLE ` PROJECT_ID . data_lineage_demo . total_green_trips_22_21 `
AS SELECT vendor_id , COUNT ( * ) AS number_of_trips
FROM (
SELECT vendor_id FROM ` PROJECT_ID . data_lineage_demo . nyc_green_trips_2022 `
UNION ALL
SELECT vendor_id FROM ` PROJECT_ID . data_lineage_demo . nyc_green_trips_2021 `
)
GROUP BY vendor_id
Click play_circle Run . This step
creates a combined table, called total_green_trips_22_21 .
In the Query results pane, click Go to table . This step displays
the combined table.
View the lineage graph in Knowledge Catalog
In the Google Cloud console, go to the Knowledge Catalog Search page.
Go to Search
If your search platform is set to Data Catalog , in the
Choose search platform menu, select Knowledge Catalog .
In the Search box, enter total_green_trips_22_21 and click Search .
From the results list, click total_green_trips_22_21 . This step displays
the BigQuery table Details tab.
Click the Lineage tab.
Note: It might take some time for automatic lineage to pick up these changes. If
you don't see the lineage graph yet, check again after several minutes.
Figure 1. Data lineage with node details
In the lineage graph, each rectangular node represents a table, either an
original, copied, or combined table. You can do the following:
To show or hide the origin of a table, click + (Expand) or -
(Collapse).
To show table information, click a node. This step displays a node
Details pane.
To show process information, click
.
This step displays a process Details pane showing the job that
transformed a source table to a target table.
Figure 2. Data lineage with process details
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the project
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
Delete the dataset
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the left pane, click explore Explorer :
In the Explorer pane, search for the data_lineage_demo dataset that
you created.
Click the dataset, and then click Delete .
Confirm your delete action.
What's next
Learn more about data lineage .
Learn how to run BigQuery
queries .
Learn how to
use data lineage .
Learn about Knowledge Catalog pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
