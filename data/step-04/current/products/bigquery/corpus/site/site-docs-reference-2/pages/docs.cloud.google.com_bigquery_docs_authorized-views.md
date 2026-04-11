---
title: "Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/authorized-views
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/authorized-views
  title: "Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Authorized views
This document describes how to create authorized views and authorized
materialized views in BigQuery. As a data administrator, you can create
an authorized view to share a subset of data in a dataset to specific users
and groups (principals). Principals can view the data you share and run queries
on it, but they can't access the source dataset directly.
View types
A logical view is the default view type for BigQuery, and
a materialized view is a precomputed view that periodically caches the results
of a query for increased performance and efficiency.
An authorized view for a logical view is called an authorized view, but an
authorized view for a materialized view is called an
authorized materialized view .
If a logical view relies on a large or computationally expensive query , then you can create a materialized view
instead. To understand the use cases of logical and materialized view, see
Overview of logical and materialized views .
High-level steps for creating authorized views
To create and share a view, review these high-level steps, which are the same
for authorized logical views and authorized materialized views.
Note: You can also share all views in a dataset .
Create a dataset to contain your source data.
Run a query to load data into a destination table in the source dataset.
Create a dataset to contain your authorized view.
Create an authorized view from a SQL query that restricts the columns
that your data analysts can see in the query results.
Grant your data analysts permission to run query jobs.
Grant your data analysts access to the dataset that contains the authorized
view.
Grant the authorized view access to the source dataset.
Alternatives
Although authorized views are flexible and scalable, one of the following
methods might better apply to your use case:
Set row-level policies on a table.
Set column-level policies on a table.
Store data in a separate table.
Share all views in a dataset (authorized datasets).
Use row-level or column-level security, or separate tables
By setting row-level access policies on a table, or by creating a separate table
to hold sensitive data, a data administrator can restrict a user's ability
to view that data. Storing data in a separate table isolates the data and
removes the ability to see how many rows exist in the table.
In addition, by creating and applying policy tags, a data administrator can
restrict the user's ability to view columns in a table.
Storing data in a separate table is the most secure but least flexible method.
Setting row-level policies is flexible and secure, while sharing authorized
views is flexible and provides the best performance.
To compare these methods in detail, see the following resources:
Comparison of authorized views, row-level security, and separate tables
Introduction to row-level security
Example use cases for row-level security
Introduction to column-level access control
Share all views in a dataset
If you want to give a collection of views access to a dataset without having to
authorize each individual view, you can group the views together into a dataset,
and then give the dataset that contains the views access to the dataset that
contains the data.
You can then give principals access to the dataset
containing the group of views, or to individual views in the dataset, as
needed. A dataset that has access to another dataset is called an
authorized dataset . The dataset that authorizes another dataset to access its
data is called the shared dataset .
A dataset's access control list can have up to 2,500 total authorized
resources, including
authorized views ,
authorized datasets ,
and
authorized functions .
If you exceed this limit due to a large number of authorized views, consider grouping the
views into authorized datasets.
As a best practice, group related views into authorized datasets when you design new
BigQuery architectures, especially multi-tenant architectures.
For more information, see Authorized datasets
and Authorize a dataset .
Limitations
When you make an authorized view or authorized materialized view in another
dataset, the source data dataset and authorized view dataset must be in
the same regional location .
When you delete an authorized view, it can take up to 24 hours to remove
the authorized view from the list of views. During this time, you cannot access
the authorized view, but the deleted authorized view can appear in the list of
views, and counts against the authorized view
limit . This limit can prevent the creation of
additional authorized views if the new authorized view would exceed that limit.
Before you begin
Grant Identity and Access Management (IAM) roles
that give users the necessary permissions
to query the authorized views or authorized materialized views that you share.
Authorized views and VPC Service Controls
When using authorized views in a VPC Service Controls perimeter, ingress rules
allowing principals access to the project containing the view must also include
access to any projects that contain the source data from which the view is
accessing data. The principal does not need Identity and Access Management permissions on the
source data projects, but the ingress rule must permit access to
BigQuery in the data source project in addition to the project
containing the view.
Required roles
To create or update an authorized view, you need permissions to the dataset that
contains the view and to the dataset that provides access to the view.
You also need to grant users or groups access to the project and dataset that
contain the view.
Note: You can't change the SQL query of an authorized view unless you're a data
owner.
Admin permissions on the dataset that contains the view
Views are treated as table resources in BigQuery, so creating a
view requires the same permissions as creating a table. You must also have
permissions to query any tables that are referenced by the view's SQL query.
To create a view, you need the bigquery.tables.create IAM
permission. The roles/bigquery.dataEditor predefined IAM role
includes the permissions that you need to create a view.
Additionally, if you have the bigquery.datasets.create permission, you can
create views in the datasets that you create. To create a view for data that you
don't own, you must have bigquery.tables.getData permission for that table.
For more information on IAM roles and permissions in
BigQuery, see Predefined roles and
permissions .
Admin permissions on the second dataset that gives access to the view
To update dataset properties, you need the following IAM permissions:
bigquery.datasets.update
bigquery.datasets.setIamPolicy (only required when updating dataset access
controls in the Google Cloud console)
The roles/bigquery.dataOwner predefined IAM role includes the
permissions that you need to update dataset properties.
Additionally, if you have the bigquery.datasets.create permission, you can
update properties of the datasets that you create.
For more information on IAM roles and permissions in
BigQuery, see Predefined roles and permissions .
User permissions on the project and dataset for the view
To share an authorized view with users or groups, you must grant the users or
groups the following IAM permissions:
The roles/bigquery.jobUser IAM role to the project
that contains the authorized view. This role grants the bigquery.jobs.create
permission which is required to run query jobs against the view.
The roles/bigquery.dataViewer IAM role to the
dataset that contains the authorized view. This role grants the
bigquery.tables.getData which is required to query the view.
Work with authorized views
The following sections describe how to work with authorized views and authorized
materialized views.
Create an authorized view
To create an authorized view, choose one of the following options. For complete
steps to authorize, share, and delete an authorized view, see the
tutorial Create an authorized view .
Console
Go to the BigQuery page.
Go to BigQuery
In the query editor, type the query that you want to base the
authorized view on.
Click Save > Save view .
In the Save view dialog, do the following:
For Project , type the project in which to save the view.
For Dataset , type the dataset in which to save the view. This
must be a different dataset than the dataset used in the source
query.
For Table , type the name of the view.
Click Save .
Grant
necessary permissions
to users who can use the authorized view.
In the Explorer pane, select the dataset used in the source query.
In the Details pane, click Sharing >
Authorize views .
In the Authorized views pane, for Authorized view , type
the fully qualified name of the view, in the format
PROJECT_ID . DATASET_ID . VIEW_NAME .
Click Add authorization .
Terraform
To authenticate to BigQuery, set up Application Default
Credentials. For more information, see
Set up authentication for client libraries .
Note: To create BigQuery objects using Terraform, you must
enable the Cloud Resource Manager API .
# Creates an authorized view.
# Create a dataset to contain the view.
resource "google_bigquery_dataset" "view_dataset" {
dataset_id = "view_dataset"
description = "Dataset that contains the view"
location = "us-west1"
}
# Create the view to authorize.
resource "google_bigquery_table" "movie_view" {
project = google_bigquery_dataset.view_dataset.project
dataset_id = google_bigquery_dataset.view_dataset.dataset_id
table_id = "movie_view"
description = "View to authorize"
view {
query = "SELECT item_id, avg(rating) FROM `movie_project.movie_dataset.movie_ratings` GROUP BY item_id ORDER BY item_id;"
use_legacy_sql = false
}
}
# Authorize the view to access the dataset
# that the query data originates from.
resource "google_bigquery_dataset_access" "view_authorization" {
project = "movie_project"
dataset_id = "movie_dataset"
view {
project_id = google_bigquery_table.movie_view.project
dataset_id = google_bigquery_table.movie_view.dataset_id
table_id = google_bigquery_table.movie_view.table_id
}
}
# Specify the IAM policy for principals that can access
# the authorized view. These users should already
# have the roles/bigqueryUser role at the project level.
data "google_iam_policy" "principals_policy" {
binding {
role = "roles/bigquery.dataViewer"
members = [
"group:example-group@example.com",
]
}
}
# Set the IAM policy on the authorized view.
resource "google_bigquery_table_iam_policy" "authorized_view_policy" {
project = google_bigquery_table.movie_view.project
dataset_id = google_bigquery_table.movie_view.dataset_id
table_id = google_bigquery_table.movie_view.table_id
policy_data = data.google_iam_policy.principals_policy.policy_data
}
To apply your Terraform configuration in a Google Cloud project, complete the steps in the
following sections.
Prepare Cloud Shell
Launch Cloud Shell .
Set the default Google Cloud project
where you want to apply your Terraform configurations.
You only need to run this command once per project, and you can run it in any directory.
export GOOGLE_CLOUD_PROJECT= PROJECT_ID
Environment variables are overridden if you set explicit values in the Terraform
configuration file.
Prepare the directory
Each Terraform configuration file must have its own directory (also
called a root module ).
In Cloud Shell , create a directory and a new
file within that directory. The filename must have the
.tf extension—for example main.tf . In this
tutorial, the file is referred to as main.tf .
mkdir DIRECTORY && cd DIRECTORY && touch main.tf
If you are following a tutorial, you can copy the sample code in each section or step.
Copy the sample code into the newly created main.tf .
Optionally, copy the code from GitHub. This is recommended
when the Terraform snippet is part of an end-to-end solution.
Review and modify the sample parameters to apply to your environment.
Save your changes.
Initialize Terraform. You only need to do this once per directory.
terraform init
Optionally, to use the latest Google provider version, include the -upgrade
option:
terraform init -upgrade
Apply the changes
Review the configuration and verify that the resources that Terraform is going to create or
update match your expectations:
terraform plan
Make corrections to the configuration as necessary.
Apply the Terraform configuration by running the following command and entering yes
at the prompt:
terraform apply
Wait until Terraform displays the "Apply complete!" message.
Open your Google Cloud project to view
the results. In the Google Cloud console, navigate to your resources in the UI to make sure
that Terraform has created or updated them.
Note: Terraform samples typically assume that the required APIs are
enabled in your Google Cloud project.
Manage users or groups for authorized views
After authorizing a view, you can maintain access to it by completing the
following tasks for a dataset, table, or view:
View the access policy.
Grant access.
Revoke access.
Deny access.
For more information, see
Control access to resources using IAM .
Remove authorization to a view
Note: If you remove a view, wait 24 hours before reusing the view name, or use
a unique name. For more information, see
Quotas and limits .
To remove authorization to a view, select one of the following options:
Console
Go to the BigQuery page in the Google Cloud console.
Go to BigQuery
In the left pane, click explore Explorer :
If you don't see the left pane, click last_page Expand left pane to open the pane.
In the Explorer pane, expand your project, click Datasets , and
then select a dataset.
Click Overview > Tables , and then select a table.
Click person_add
Sharing > Authorize views .
Click delete
to Remove authorization .
Click Close .
bq
To remove authorization from a view, use the bq rm command. Enter
the table_id for the view you want to remove authorization from.
bq rm \
project_id:dataset:table_id
API
Call the tables.delete
method and use the projectID , datasetID , and tableID properties to
remove the authorized view for your dataset. For more information, see
Tables .
Quotas and limits
Authorized views are subject to dataset limits. For more information, see
Dataset limits .
If you remove an authorized view, it can take up to 24 hours for all
references to the view to be removed from the system. To avoid errors,
either wait 24 hours before reusing the name of a removed view, or create a
unique name for your view.
Advanced topics
The following sections describe advanced methods of using authorized views.
Combine row-level security with authorized views
The data displayed in a logical view or a materialized view is filtered
according to the underlying source table's row-level access policies.
For details about how row-level security interacts with materialized views, see
Use row-level security with other BigQuery features .
Combine column-level security with authorized views
The impact of column-level security on views is independent of whether or not
the view is an authorized view.
For a detailed description of how permissions are applied, see
Query views for column-level
security.
Use BigQuery sharing with authorized views
BigQuery sharing (formerly Analytics Hub) is a data exchange platform with the following
capabilities:
Lets you share data and insights at scale across organizational boundaries.
Uses a robust security and privacy framework.
Supports publishing a BigQuery dataset, called a
shared dataset , and its associated authorized views and authorized datasets,
to a set of subscribers.
A linked dataset is a read-only BigQuery dataset that serves as
a pointer or reference to a shared dataset. Subscribing to a
Sharing listing creates a linked dataset in your project
but not a copy of the dataset, so subscribers can read the data but cannot add
or update objects within it.
Materialized views that refer to tables in the linked dataset are
not supported .
For more information, see
Introduction to Sharing .
What's next
For a tutorial on creating an authorized view, see
Create an authorized view .
To create a logical view, see Create logical views .
To create a materialized view, which supports other types of access control,
see Create materialized views .
To get view metadata, see
Getting information about views .
To manage views, see Manage views .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
