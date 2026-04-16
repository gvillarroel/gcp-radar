---
title: "Basic roles and permissions \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/access-control-basic-roles
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/admin-intro
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/access-control-basic-roles
  title: "Basic roles and permissions \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Basic roles and permissions
BigQuery supports IAM
basic roles for project-level access.
Caution: Avoid using basic roles. They predate IAM and grant
excessive and uneven access. Use
predefined IAM
roles instead.
Basic roles for projects
By default, granting access to a project also grants access to datasets within
it. Default access can be overridden on a per-dataset basis. The following table
describes what access is granted to members of the basic
IAM roles.
Basic role
Capabilities
Viewer
Can start a job in the project. Additional dataset roles are
required depending on the job type.
Can list and get all jobs, and update jobs that they started for
the project
If you create a dataset in a project that contains any viewers,
BigQuery grants those users the
bigquery.dataViewer
predefined role for the new dataset.
Editor
Same as Viewer , plus:
Can create a new dataset in the project
If you create a dataset in a project that contains any
editors, BigQuery grants those users the
bigquery.dataEditor
predefined role for the new dataset.
Owner
Same as Editor , plus:
Can revoke or change any project role
Can list all datasets in the project
Can delete any dataset in the project
Can list and get all jobs run on the project, including jobs
run by other project users
If you create a dataset, BigQuery grants all
project owners the
bigquery.dataOwner predefined
role for the new dataset.
Exception: When a user runs a query, an
anonymous dataset
is created to store the cached results table. Only the user
that runs the query is given OWNER access to the
anonymous dataset.
Don't confuse the OWNER basic role
with the BigQuery Admin
( roles/bigquery.admin ) IAM role. BigQuery
Admin provides a number of permissions that aren't granted by the
OWNER basic role. If you're granting project-level access
to BigQuery, use IAM roles instead of
basic roles.
Basic roles for projects are granted or revoked through the
Google Cloud console . When a project is created,
the Owner role is granted to the user who created the
project.
For more information about how to grant or revoke access for project roles, see
Granting, changing, and revoking access to resources
in the IAM documentation.
Basic roles for datasets
The following basic roles apply at the dataset level.
Dataset role
Capabilities
READER
Can read, query, copy or export tables in the dataset. Can read
routines in the dataset
Can call
get
on the dataset
Can call
get and
list on
tables in the dataset
Can call
get and
list on
routines in the dataset
Can call
list on
table data for tables in the dataset
The
BigQuery Data Viewer
( roles/bigquery.dataViewer ) predefined IAM
role is mapped to the READER BigQuery basic
role. When you grant BigQuery Data Viewer to a principal at the dataset
level, the principal is granted READER access to the
dataset.
WRITER
Same as READER , plus:
Can edit or append data in the dataset
Can call
insert ,
insertAll ,
update
or delete
on tables
Can use tables in the dataset as destinations for load,
copy or query jobs
Can call
insert ,
update ,
or delete
on routines
The
BigQuery Data Editor
( roles/bigquery.dataEditor ) predefined IAM
role is mapped to the WRITER BigQuery basic
role. When you grant BigQuery Data Editor to a principal at the dataset
level, the principal is granted WRITER access to the
dataset.
OWNER
Same as WRITER , plus:
Can call
update
on the dataset
Can call
delete
on the dataset
A dataset must have at least one entity with the
OWNER role. A user with the OWNER role can't
remove their own OWNER role.
The
BigQuery Data Owner
( roles/bigquery.dataOwner ) predefined IAM
role is mapped to the OWNER BigQuery basic
role. When you grant BigQuery Data Owner to a principal at the dataset
level, the principal is granted OWNER access to the
dataset.
For more information on assigning roles at the dataset level, see
Controlling access to datasets .
When you create a new dataset, BigQuery adds default dataset access for
the following entities. Roles that you specify on dataset creation overwrite the
default values.
Entity
Dataset role
All users with Viewer access to the project
READER
All users with Editor access to the project
WRITER
All users with Owner access to the project,
and the dataset creator
OWNER
Exception: When a user runs a query, an
anonymous dataset
is created to store the cached results table. Only the user that runs
the query is given OWNER access to the anonymous dataset.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
