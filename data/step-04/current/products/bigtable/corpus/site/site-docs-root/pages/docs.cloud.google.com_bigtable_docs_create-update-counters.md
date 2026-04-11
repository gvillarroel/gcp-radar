---
title: "Quickstart: Create and update counters in Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/create-update-counters
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/create-update-counters
  title: "Quickstart: Create and update counters in Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and update counters in Bigtable
Learn how to create and update counters in Bigtable using aggregates ,
table cells that aggregate values at write time. This quickstart uses the
Google Cloud CLI and the
cbt CLI
to create three counters:
A counter that keeps a running sum
A counter that keeps track of the minimum of all added values
A counter that keeps track of the maximum of all added values
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
After initializing the gcloud CLI, update it and install the required components:
gcloud components update
gcloud components install cbt
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Bigtable API and Cloud Bigtable Admin API APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable bigtable.googleapis.com bigtableadmin.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
After initializing the gcloud CLI, update it and install the required components:
gcloud components update
gcloud components install cbt
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Bigtable API and Cloud Bigtable Admin API APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable bigtable.googleapis.com bigtableadmin.googleapis.com
Run the following commands to ensure that the gcloud CLI is up
to date and includes the
cbt CLI
:
gcloud components update
gcloud components install cbt
Create a Bigtable instance
Use the bigtable instances create
command to create
an instance.
gcloud bigtable instances create counters-quickstart-instance \
--display-name = "Counters quickstart instance" \
--cluster-config = id = "counters-quickstart-cluster" ,zone = "us-east1-c"
Connect to your instance
Configure the
cbt CLI
to use your project and
instance by creating a .cbtrc file.
echo project = PROJECT_ID >> ~/.cbtrc && echo instance = counters-quickstart-instance >> ~/.cbtrc
Replace PROJECT_ID with the ID of the project that you are using.
Verify that you set up the .cbtrc file correctly.
cat ~/.cbtrc
The terminal displays the contents of the .cbtrc file, which looks similar
to the following:
project = PROJECT_ID
instance = counters-quickstart-instance
Now you can use the
cbt CLI
with your instance.
Create a table with aggregate column families
Use the cbt createtable
command to create a table named counters_quickstart_table that has three
aggregate column families. Configure each column family with a different
aggregation type:
Column family max_family is type Max with an input type of Integer .
Column family min_family is type Min with an input type of Integer .
Column family sum_family is type Sum with an input type of Integer .
cbt createtable counters_quickstart_table families = sum_family:never:intsum,min_family:never:intmin,max_family:never:intmax
List your column families by running the cbt
ls command.
cbt ls counters_quickstart_table
The shell displays output similar to the following:
Family Name GC Policy
----------- ---------
max_family <never>
min_family <never>
sum_family <never>
Create counters in the table
Use the cbt
addtocell
command to write an initial value of 5 to a new column in each of the
three column families, using a row key of row-key1 and a timestamp of 0 .
This operation creates aggregate cells, which you use as counters.
cbt addtocell counters_quickstart_table row-key1 sum_family:sum_column = 5 @0
cbt addtocell counters_quickstart_table row-key1 min_family:min_column = 5 @0
cbt addtocell counters_quickstart_table row-key1 max_family:max_column = 5 @0
Read the data
To view the counter values as integers rather than bytes, define a yaml
file that
cbt CLI
can use to format the output. Run the following:
echo "families:" > cbtformat.yaml
echo " max_family:" >> cbtformat.yaml
echo " default_encoding: BigEndian" >> cbtformat.yaml
echo " default_type: INT64" >> cbtformat.yaml
echo " min_family:" >> cbtformat.yaml
echo " default_encoding: BigEndian" >> cbtformat.yaml
echo " default_type: INT64" >> cbtformat.yaml
echo " sum_family:" >> cbtformat.yaml
echo " default_encoding: BigEndian" >> cbtformat.yaml
echo " default_type: INT64" >> cbtformat.yaml
Verify that you set up the cbtformat.yaml file correctly.
cat ~/cbtformat.yaml
The terminal displays the contents of the cbtformat.yaml file, which looks
similar to the following:
families:
max_family:
default_encoding: BigEndian
default_type: INT64
min_family:
default_encoding: BigEndian
default_type: INT64
sum_family:
default_encoding: BigEndian
default_type: INT64
Use the cbt read command to pass
the yaml file and read the data that you added to the table. The table now
has three columns, each with a different aggregation type.
cbt read counters_quickstart_table format-file = $HOME /cbtformat.yaml
The shell displays output similar to the following. The values are formatted
as integers, and the timestamps are in UTC format.
row-key1
max_family:max_column @ 1970 /01/01-00:00:00.000000
5
min_family:min_column @ 1970 /01/01-00:00:00.000000
5
sum_family:sum_column @ 1970 /01/01-00:00:00.000000
5
Update the counters
Add a value of 3 to each column in the table, using the same timestamps
that you used when you created the cells. In each column, the cell value is
merged with the existing value based on the cell's aggregation type.
cbt addtocell counters_quickstart_table row-key1 sum_family:sum_column = 3 @0
cbt addtocell counters_quickstart_table row-key1 min_family:min_column = 3 @0
cbt addtocell counters_quickstart_table row-key1 max_family:max_column = 3 @0
Use the cbt read command again to read the data in the table. Each cell now
contains an aggregated value.
cbt read counters_quickstart_table format-file = $HOME /cbtformat.yaml
The sum_column contains the sum of 5 and 3 (8), min_column contains the
minimum of the two values that were written to it (3), and max_column
contains the maximum of the two values that were written to it (5).
row-key1
max_family:max_column @ 1970 /01/01-00:00:00.000000
5
min_family:min_column @ 1970 /01/01-00:00:00.000000
3
sum_family:sum_column @ 1970 /01/01-00:00:00.000000
8
Optional: Query the table in the Google Cloud console with SQL.
In the Google Cloud console, open the Bigtable instances page.
Go to instances list
Select counters-quickstart-instance from the list.
In the navigation menu, click Bigtable Studio .
Click the Editor tab.
Paste this query into the editor:
SELECT * FROM `counters_quickstart_table`
Click Run . The results of the query are displayed in the Results
table and look similar to the following:
_key
max_family
min_family
sum_family
row-key1
{ "max_column": 5 }
{ "min_column": 5 }
{ "sum_column": 8 }
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
In the terminal, delete the table counters_quickstart_table :
cbt deletetable counters_quickstart_table
Delete the instance:
cbt deleteinstance counters-quickstart-instance
Delete the .cbtrc file:
rm ~/.cbtrc
Delete the formatting file:
rm ~/cbtformat.yaml
Optional: Revoke credentials from the gcloud CLI:
gcloud auth revoke
What's next
Learn more about aggregates.
Use SQL to query Bigtable data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
