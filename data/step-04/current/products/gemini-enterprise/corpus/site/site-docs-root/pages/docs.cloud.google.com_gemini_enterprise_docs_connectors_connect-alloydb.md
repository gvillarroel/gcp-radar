---
title: "Import from AlloyDB for PostgreSQL \_|\_ Gemini Enterprise \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb
  title: "Import from AlloyDB for PostgreSQL \_|\_ Gemini Enterprise \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Import from AlloyDB for PostgreSQL
Stay organized with collections
Save and categorize content based on your preferences.
To ingest data from AlloyDB for PostgreSQL, use the following steps to create
a data store and ingest data using either the Google Cloud console or the API.
If your AlloyDB for PostgreSQL data is in the same project as
Gemini Enterprise project, go to Import data from
AlloyDB for PostgreSQL .
If your AlloyDB for PostgreSQL data is in a different project than your
Gemini Enterprise project, go to Set up AlloyDB for PostgreSQL
access .
Set up AlloyDB for PostgreSQL access from a different project
To give Gemini Enterprise access to AlloyDB for PostgreSQL data that's
in a different project, follow these steps:
Replace the following PROJECT_NUMBER variable with your
Gemini Enterprise project number, and then copy the contents of this
code block. This is your Gemini Enterprise service account
identifier:
service- PROJECT_NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com
Switch to the Google Cloud project where your AlloyDB for PostgreSQL data
resides.
Go to the IAM page.
IAM
Click Grant Access .
For New principals , enter the Gemini Enterprise service account
identifier and
select the Cloud AlloyDB > Cloud AlloyDB Admin role.
Click Save .
Switch back to your Gemini Enterprise project.
Next, go to Import data from AlloyDB for PostgreSQL .
Import data from AlloyDB for PostgreSQL
Console
To use the console to ingest data from AlloyDB for PostgreSQL, follow these
steps:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
In the navigation menu, click Data Stores .
Click Create Data Store .
On the Select a data source page, select AlloyDB .
Specify the project ID, location ID, cluster ID, database ID, and table ID
of the data that you plan to import.
Click Continue .
Choose a region for your data store.
Enter a name for your data store.
Click Create .
To check the status of your ingestion, go to the Data Stores page
and click your data store name to see details about it on its Data page.
When the status column on the Activity tab changes from In progress
to Import completed , the ingestion is complete.
Depending on the size of your data, ingestion can take several
minutes or several hours.
REST
To use the command line to create a data store and ingest data from
AlloyDB for PostgreSQL, follow these steps:
Create a data store.
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: PROJECT_ID " \
"https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT_ID /locations/global/collections/default_collection/dataStores?dataStoreId= DATA_STORE_ID " \
-d '{
"displayName": " DISPLAY_NAME ",
"industryVertical": "GENERIC",
"solutionTypes": ["SOLUTION_TYPE_SEARCH"],
}'
Replace the following:
PROJECT_ID : the ID of your project.
DATA_STORE_ID : the ID of the data store. The ID can
contain only lowercase letters, digits, underscores, and hyphens.
DISPLAY_NAME : the display name of the data store. This might
be displayed in the Google Cloud console.
Import data from AlloyDB for PostgreSQL.
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https://discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/collections/default_collection/dataStores/ DATA_STORE_ID /branches/0/documents:import" \
-d '{
"alloyDbSource": {
"projectId": " ALLOYDB_PROJECT_ID ",
"locationId": " LOCATION_ID ",
"clusterId": " CLUSTER_ID ",
"databaseId": " DATABASE_ID ",
"tableId": " TABLE_ID ",
},
"reconciliationMode": " RECONCILIATION_MODE ",
"autoGenerateIds": " AUTO_GENERATE_IDS ",
"idField": " ID_FIELD ",
}'
Replace the following:
PROJECT_ID : the ID of your Gemini Enterprise project.
DATA_STORE_ID : the ID of the data store. The ID can
contain only lowercase letters, digits, underscores, and hyphens.
ALLOYDB_PROJECT_ID : the ID of your
AlloyDB for PostgreSQL project.
LOCATION_ID : the ID of your AlloyDB for PostgreSQL
location.
CLUSTER_ID : the ID of your AlloyDB for PostgreSQL
cluster.
DATABASE_ID : the ID of your AlloyDB for PostgreSQL
database.
TABLE_ID : the ID of your AlloyDB for PostgreSQL
table.
RECONCILIATION_MODE : optional. Values are FULL and
INCREMENTAL . Default is INCREMENTAL . Specifying INCREMENTAL
causes an incremental refresh of data from AlloyDB for PostgreSQL to your
data store. This does an upsert operation, which adds new documents and
replaces existing documents with updated documents with the same ID.
Specifying FULL causes a full rebase of the documents in your data store. In other words, new and updated documents are added to your data store, and documents that are not in AlloyDB for PostgreSQL are removed
from your data store. The FULL mode is helpful if you want to
automatically delete documents that you no longer need.
AUTO_GENERATE_IDS : optional. Specifies whether to
automatically generate document IDs. If set to true , document IDs
are generated based on a hash of the payload. Note that generated
document IDs might not remain consistent over multiple imports. If
you auto-generate IDs over multiple imports, Google highly
recommends setting reconciliationMode to FULL to maintain
consistent document IDs.
ID_FIELD : optional. Specifies which fields are the
document IDs.
Next steps
To attach your data store to an app, create an app and select your data store
following the steps in
Create a search app .
To preview how your search results appear after your app and data store are
set up, see
Preview search results .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
