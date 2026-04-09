---
title: "Manage your AlloyDB resources using Dataplex Universal Catalog \_|\_ AlloyDB\
  \ for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
  title: "Manage your AlloyDB resources using Dataplex Universal Catalog \_|\_ AlloyDB\
    \ for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Manage your AlloyDB resources using Dataplex Universal Catalog
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can search for and manage your AlloyDB for PostgreSQL resources using
Dataplex Universal Catalog, which is a platform for storing, managing, and accessing your
metadata. You can use Dataplex Universal Catalog to discover and understand your
AlloyDB metadata. Use Dataplex Universal Catalog to help you with
the following:
Analysis, including dependencies and suitability for a use case
Change management
Schema evolution
Dataplex Universal Catalog automatically retrieves the following metadata
from AlloyDB:
Resource type
Metadata retrieved
Clusters, databases, and instances
Name
Location (region)
Schema, columns, tables, views
Name
Location (region)
Description
Schema
Note: Dataplex Universal Catalog refers to the resources in
AlloyDB and in other Google Cloud services as assets . In this
document, we refer to AlloyDB resources—instances, databases,
tables, and views—as AlloyDB assets. We also use the term
assets to refer to both the resources and Dataplex Universal Catalog metadata for
those resources.
Types of metadata discovery
Dataplex Universal Catalog metadata discovery is an automated process that scans
connected data sources—like AlloyDB—to identify data
assets (like tables, views, and databases) and extract their technical
metadata like schemas, descriptions, and locations into the Dataplex Universal Catalog
catalog.
This process runs periodically to keep the catalog synchronized with source
systems. For AlloyDB, cluster and instance metadata is discovered
by default. Database, schema, table, and view metadata discovery is enabled by
default on new clusters. For clusters created before this default was put in
place, you can manually enable the integration .
Keyword and natural language search
Dataplex Universal Catalog supports keyword and natural language searches.
Keyword search lets you find resources using specific keywords, filters, and a
defined syntax. For example, you might enter system=AlloyDB AND type=Database
to view all AlloyDB databases.
Natural language search (Preview) uses AI to understand semantic queries. It
lets you find resources using everyday language, eliminating the need for complex syntax. For example, you can enter queries like List all AlloyDB tables related to sales .
For more information,
see Search syntax for Dataplex Universal Catalog .
Example: Discovering an AlloyDB database schema
To understand the metadata discovery process, consider the example of
an AlloyDB cluster named user-data-cluster with
Dataplex Universal Catalog integration enabled. Inside this cluster's primary
instance, you have a database named profiles which contains a table customers
( id , email , signup_date ) and a view active_users ( id , email ).
AlloyDB is synced periodically to Dataplex Universal Catalog, the following
resources are available:
Clusters
Columns
Databases
Instances
Tables
Views
After discovery is complete, you can search for these assets— customers
table and active_users —in the Dataplex Universal Catalog
page of the Google Cloud console or using the API, view their schemas, and enrich
them with additional business or operational metadata.
Enrich metadata using aspects
Aspect types are reusable resources that you can use as templates for
aspects. Aspect types help you avoid duplication of work and incomplete aspects.
You can use Dataplex Universal Catalog to create the aspect types that you need.
After you create custom aspect types, you can attach aspects to your AlloyDB
assets. Attaching aspects to AlloyDB assets lets you do the following:
Add business metadata to the assets
Search for assets by business metadata and other custom metadata
To learn more about creating aspect types and attaching aspects to AlloyDB,
see Manage aspects and enrich metadata .
Metadata discovery workflow
By default, cluster and instance resources are ingested and discoverable. You
only need to enable the Dataplex Universal Catalog integration for your AlloyDB
cluster if you want to ingest and discover database, schema, table and view resources.
To discover AlloyDB database, schema, table and view resources,
you must enable the Dataplex Universal Catalog integration for your AlloyDB
cluster using the AlloyDB API when you create a new cluster
or when you update an existing cluster. For more information, see
Create a cluster and its primary instance .
Search for your AlloyDB assets using the Dataplex Universal Catalog
search page in the Google Cloud console. For more information, see
Search for resources in Dataplex Universal Catalog .
To add more context to your AlloyDB assets, you can attach
aspects to your assets. Aspects are custom metadata entries that help with
data governance and analysis. For example, you can use an aspect to label a
column that contains personally identifiable information (PII).
For more information, see Manage aspects and enrich metadata .
You can now navigate through your AlloyDB resources following
this hierarchy: Cluster > Database > Schema > Table or View > Column.
This provides a detailed view of your data landscape.
For more information, see Search for resources in Dataplex Universal Catalog .
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
Enable the Dataplex API for the project.
Enable the Dataplex API
Check permissions.
You need certain Identity and Access Management (IAM) roles and permissions to
search for and attach entries to AlloyDB assets. For details, see
Required IAM roles and permissions
for Dataplex Universal Catalog .
Required IAM roles
This section describes the roles and permissions required to search for resources
and to access the search results.
Required roles for accessing search results
To search for and view AlloyDB metadata in
Dataplex Universal Catalog, principals must have permissions to view
AlloyDB resources, including the
dataplex.projects.search permission.
To grant principals—such as users,
groups, or service accounts—these permissions, assign them the
AlloyDB Viewer ( roles/alloydb.viewer )
IAM role on the project that contains the AlloyDB
resources.
Dataplex Universal Catalog operation
AlloyDB resource
Roles or permissions required
Search for AlloyDB resources
Cluster
alloydb.clusters.get
Columns
alloydb.databases.get
Instance
alloydb.instances.get
Database
alloydb.databases.get
Tables
alloydb.databases.get
Views
alloydb.databases.get
Caution: If you grant the roles/alloydb.viewer role at the project level,
principals with this role can view the metadata for all
AlloyDB instances in the project.
If you don't want to use the predefined AlloyDB Viewer role, then you can
assign a custom role that includes alloydb.clusters.get , alloydb.instances.get ,
and alloydb.databases.get permissions.
For more information about granting roles, see
Manage access .
For more information about AlloyDB IAM roles, see
IAM roles and permissions for AlloyDB .
Required roles for searching entries
To search for entries, you need at least one of the following
IAM roles on the
project that is used for search:
Dataplex Catalog Admin ( roles/dataplex.catalogAdmin )
Dataplex Catalog Editor ( roles/dataplex.catalogEditor )
Dataplex Catalog Viewer ( roles/dataplex.catalogViewer )
Permissions on search results are checked
independently of the selected project. For more information, see
Search for data assets with Dataplex Universal Catalog .
Enable the integration of Dataplex Universal Catalog on your AlloyDB cluster
By default, cluster and instance resources are ingested and discoverable. The Dataplex Universal Catalog integration for database, schema, table, and view resources is enabled by default when you create a new AlloyDB cluster. This allows Dataplex Universal Catalog to sync this metadata for discovery and management. To prevent this metadata from being synced, you can disable the integration .
You control this integration using the cluster-level dataplexConfig flag in the AlloyDB API . If you don't specify this flag during cluster creation, dataplexConfig.enabled defaults to true . To disable integration, set enabled to false . To activate the export of AlloyDB metadata—such as databases, schemas, and tables—to Cloud Storage buckets, set enabled to true . This data is then available for use by Dataplex Universal Catalog. This feature is only applicable to primary instances.
To view data for secondary clusters, you must enable this flag separately.
Note: Resource-level metadata, like cluster and instance metadata,
is always enabled and can't be disabled.
Create a cluster
Use the POST method to create an AlloyDB cluster. If you omit the dataplexConfig from the request, Dataplex Universal Catalog integration is enabled by default for database, schema, table, and view metadata.
For a complete list of parameters for this call, see
Method: projects.locations.clusters.create .
For information about cluster settings, see
View cluster and instance settings .
Don't include sensitive or personally identifiable information in your cluster
ID because it's externally visible. You don't need to include the project ID in
the cluster name. This is done automatically where appropriate, for example, in
the log files.
Note: Adding labels to AlloyDB resources is supported only
with Terraform and REST API. You cannot use the Google Cloud console or the
Google Cloud CLI to manage labels.
To create a cluster with
Dataplex Universal Catalog integration enabled, save the request body in a file named
cluster_request.json :
{
"databaseVersion" : " DATABASE_VERSION " ,
"initialUser" : {
"user" : " INITIAL_USERNAME " ,
"password" : " INITIAL_USER_PASSWORD "
},
"labels" : {
"test" : "alloydb-cluster-full"
}
}
To disable Dataplex Universal Catalog integration for database, schema, table, and
view resources, include "dataplexConfig": { "enabled": false } in the request
body:
{
"databaseVersion" : " DATABASE_VERSION " ,
"initialUser" : {
"user" : " INITIAL_USERNAME " ,
"password" : " INITIAL_USER_PASSWORD "
},
"labels" : {
"test" : "alloydb-cluster-full"
},
"dataplexConfig" : {
"enabled" : false
}
}
Make the following replacements:
DATABASE_VERSION : enum string of the database
version—for example, POSTGRES_16 .
INITIAL_USERNAME : the username that you use for the
default postgres user.
INITIAL_USER_PASSWORD : the password that you use for
the default postgres user.
Use the following HTTP method and URL:
POST https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /clusters?cluster_id= CLUSTER_ID
Make the following replacements:
PROJECT_ID : the ID or
project number
of the Google Cloud project that contains the cluster.
LOCATION_ID : the ID of the cluster's region.
CLUSTER_ID : the ID of the cluster that you create. The
cluster ID must begin with a lowercase letter and can contain lowercase
letters, numbers, and hyphens.
To send your request, use one of the following options:
curl (Linux, macOS, or Cloud Shell)
The following command assumes that you signed into the
Google Cloud CLI with your user account by running
gcloud init
or gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI. You
can check the active account by running
gcloud auth list .
Save the request body in a file named request.json
and execute the following command:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /clusters?cluster_id= CLUSTER_ID "
PowerShell (Windows)
The following command assumes that you signed into the
Google Cloud CLI with your user account by running
gcloud init
or gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI. You
can check the active account by running
gcloud auth list .
Save the request body in a file named request.json
and execute the following command:
$cred = gcloud auth print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }
Invoke-WebRequest `
-Method POST `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-InFile request.json `
-Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /clusters?cluster_id= CLUSTER_ID "| Select-Object -Expand Content
You receive a JSON response similar to the following:
Response
{
"kind" : "alloydb#operation" ,
"targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT_ID/clusters/CLUSTER_ID" ,
"status" : "PENDING" ,
"user" : "user@example.com" ,
"insertTime" : "2024-09-25T22:19:33.735Z" ,
"operationType" : "CREATE" ,
"name" : "OPERATION_ID" ,
"targetId" : "CLUSTER_ID" ,
"selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT_ID/operations/OPERATION_ID" ,
"targetProject" : "PROJECT_ID"
}
Enable the Dataplex Universal Catalog integration for your AlloyDB cluster
To update specific fields of an existing cluster, use the PATCH method on
the projects.locations.clusters resource .
Use the following HTTP method and URL:
PATCH https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID
Make the following replacements:
PROJECT_ID : the ID or
project number
of the Google Cloud project that contains the cluster.
CLUSTER_ID : the name of the cluster.
Request JSON body:
{
"dataplexConfig" : {
"enabled" : true
}
}
To send your request, use one of the following options:
curl (Linux, macOS, or Cloud Shell)
The following command assumes that you signed into the
Google Cloud CLI with your user account by running
gcloud init
or gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI. You
can check the active account by running
gcloud auth list .
Save the request body in a file named request.json
and execute the following command:
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID "
PowerShell (Windows)
The following command assumes that you signed into the
Google Cloud CLI with your user account by running
gcloud init
or gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI. You
can check the active account by running
gcloud auth list .
Save the request body in a file named request.json
and execute the following command:
$cred = gcloud auth print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }
Invoke-WebRequest `
-Method PATCH `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-InFile request.json `
-Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID "| Select-Object -Expand Content
You receive a JSON response similar to the following:
Response
{
"kind" : "alloydb#operation" ,
"targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT_ID/clusters/CLUSTER_ID" ,
"status" : "PENDING" ,
"user" : "user@example.com" ,
"insertTime" : "2024-09-25T22:19:33.735Z" ,
"operationType" : "UPDATE" ,
"name" : "OPERATION_ID" ,
"targetId" : "CLUSTER_ID" ,
"selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT_ID/operations/OPERATION_ID" ,
"targetProject" : "PROJECT_ID"
}
Verify Dataplex Universal Catalog integration on your AlloyDB cluster
To verify that the Dataplex Universal Catalog integration is enabled on an
existing cluster, use the GET method.
Use the following HTTP method and URL:
GET https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID
Make the following replacements:
PROJECT_ID : the ID or
project number
of the Google Cloud project that contains the cluster.
CLUSTER_ID : the cluster ID.
To send your request, use one of the following options:
curl (Linux, macOS, or Cloud Shell)
The following command assumes that you signed into the
Google Cloud CLI with your user account by running
gcloud init
or gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI. You
can check the active account by running
gcloud auth list .
Save the request body in a file named request.json
and execute the following command:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID "
PowerShell (Windows)
The following command assumes that you signed into the
Google Cloud CLI with your user account by running
gcloud init
or gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI. You
can check the active account by running
gcloud auth list .
Save the request body in a file named request.json
and execute the following command:
$cred = gcloud auth print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }
Invoke-WebRequest `
-Method GET `
-Headers $headers `
-Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID "| Select-Object -Expand Content
You receive a JSON response for the entire Cluster proto. Look for the
dataplexConfig message inside the proto:
{
"dataplexConfig":
{
"enabled": true
}
}
Deactivate the integration of Dataplex Universal Catalog on your AlloyDB cluster
Use the following example to deactivate the integration. When you disable this
feature, only the cluster and instance metadata is available.
Use the following HTTP method and URL:
PATCH https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID
Make the following replacements:
PROJECT_ID : the ID or
project number
of the Google Cloud project that contains the cluster.
CLUSTER_ID : the cluster ID.
Request JSON body:
{
"dataplexConfig" : {
"enabled" : false
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
The following command assumes that you signed into the
Google Cloud CLI with your user account by running
gcloud init
or gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI. You
can check the active account by running
gcloud auth list .
Save the request body in a file named request.json
and execute the following command:
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID "
PowerShell (Windows)
The following command assumes that you signed into the
Google Cloud CLI with your user account by running
gcloud init
or gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI. You
can check the active account by running
gcloud auth list .
Save the request body in a file named request.json
and execute the following command:
$cred = gcloud auth print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }
Invoke-WebRequest `
-Method PATCH `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-InFile request.json `
-Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT_ID /clusters/ CLUSTER_ID "| Select-Object -Expand Content
You receive a JSON response similar to the following:
Response
{
"kind" : "alloydb#operation" ,
"targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT_ID/clusters/CLUSTER_ID" ,
"status" : "PENDING" ,
"user" : "user@example.com" ,
"insertTime" : "2024-01-16T02:32:12.281Z" ,
"operationType" : "UPDATE" ,
"name" : "OPERATION_ID" ,
"targetId" : "CLUSTER_ID" ,
"selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT_ID/operations/OPERATION_ID" ,
"targetProject" : "PROJECT_ID"
}
Enrich AlloyDB assets with aspects
Aspect types are reusable resources that you can use as templates for aspects.
Aspect types help you avoid duplication of work and incomplete aspects. You can
use Dataplex Universal Catalog to create the aspect types that you need.
After you create custom aspect types, you can attach aspects to your
AlloyDB assets. Attaching aspects to AlloyDB
assets lets you do the following:
Add business metadata to the assets
Search for assets by business metadata and other custom metadata
To learn more about creating aspect types and attaching aspects to AlloyDB,
see Manage aspects and enrich metadata .
Search for AlloyDB assets
Use the Dataplex Universal Catalog search page in the Google Cloud console
to search for AlloyDB assets.
Go to the Dataplex Universal Catalog Search page.
Go to Search
In Choose search platform , select Dataplex Universal Catalog .
In the Filters panel, click Systems , and then select AlloyDB .
Optional. In Type aliases , you can filter the search results to a
specific type of AlloyDB asset by the selecting one or more
of the following type alias:
Database
Database schema
Cluster
Instance
Service
Table
View
Note: Service is a type alias for an AlloyDB instance.
Use queries to perform keyword search
You can use the search field in Dataplex Universal Catalog to perform
keyword search queries. For example, you might enter system=AlloyDB AND type=Database to view all AlloyDB databases.
For more information,
see Search syntax for Dataplex Universal Catalog .
To view all AlloyDB assets, enter system=AlloyDB .
Then you can enter specific keywords. For example, to view all AlloyDB databases:
system=AlloyDB AND type=Database
To view all AlloyDB tables, enter the following query:
system=AlloyDB AND type=Table
You can also use parentheses and the logical operators AND and OR for
complex expressions. To learn more about the expressions that you can use in
the search field, see Search syntax for Dataplex Universal Catalog .
You can directly enter search queries for specific AlloyDB assets into the
search field. The format of the query string is as follows:
type = "projects/dataplex-types/locations/global/entryTypes/ QUERY_STRING "
Replace the following:
QUERY_STRING : use the following list to identify a
query string based on the type of AlloyDB asset that you want
to query:
alloydb-database
alloydb-cluster
alloydb-instance
alloydb-table
alloydb-schema
alloydb-view
An example query might look like the following:
type="projects/1234567890/locations/global/entryTypes/alloydb-cluster"
Search by aspect type
Dataplex Universal Catalog includes a few built-in aspect types that you can use
to perform searches.
To search by aspect type, follow these steps:
In the Aspects panel, click the Add more aspect types menu.
Optional. Select AlloyDB Access to filter the results by
AlloyDB dialect.
Select one or more of the following aspect types to limit the search
results to that type.
AlloyDB Database
AlloyDB Cluster
AlloyDB Instance
AlloyDB View
AlloyDB Schema
AlloyDB Table
Click OK .
In the results table, click the name of the asset to view the metadata
for that asset.
Optional: Enhance or view your assets. You can do any of the following:
To add a rich text description
of the asset, in Overview , click Add .
To attach an aspect to the asset, in Aspects , click Add .
To view member databases for an instance, click the Entry List tab,
and then click Show all children entries in search . If
the Entry List tab doesn't appear, then the cluster has no databases.
In Entry details , view the full details of the asset. Click
the entry name to drill down to additional entries.
Natural Language search in AlloyDB
Natural language search (Preview) uses AI to understand semantic queries. It
lets you find resources using everyday language, eliminating the need for
complex syntax. For example, you can enter queries like
List all AlloyDB tables related to sales .
For more information,
see Search syntax for Dataplex Universal Catalog .
Syntax search in AlloyDB
Keyword search lets you find resources using specific keywords, filters, and a
defined syntax. For example, you might enter system=AlloyDB AND type=Database
to view all AlloyDB databases.
For more information,
see Search syntax for Dataplex Universal Catalog .
Example workflow - Drill down from cluster to columns
To drill down from cluster to columns, follow these steps:
Go to the Dataplex Universal Catalog Search page.
Go to Search
For the Choose search platform option, select Dataplex Universal Catalog .
In the Filters panel , select Systems and then AlloyDB .
Alternatively, enter system=AlloyDB in the search field.
Select a cluster name.
On the AlloyDB details page, click the Entry list tab, and then
click Show all children entries in search . Dataplex Universal Catalog
displays the databases in the cluster.
Note: If there is no Entry list tab, then return to the Search
page and choose a different cluster.
On the AlloyDB database details page, click the Entry list tab,
and then click View child entries in search . Dataplex Universal Catalog
displays the tables in the cluster.
Select a table name, and then on the AlloyDB table details page,
click Schema to view the table columns.
Optional: To add an aspect type to a column, click the Add aspect
button.
Pricing
There is no charge for storing AlloyDB technical metadata in Dataplex Universal Catalog.
Standard Dataplex Universal Catalog pricing applies for API calls and
additional business metadata enrichment. For more information, see the
Dataplex Universal Catalog pricing page .
Resource usage
Dataplex Universal Catalog periodically extracts data from your clusters. The
extraction process requires a certain amount of CPU usage. Clusters with
smaller machine types—for example, machines that share larger
schemas (10,000 or more tables)—can use a small amount of their CPU during the
extraction process.
Limitations
A maximum of one million tables per database is allowed.
It can take up to 48 hours for updates to your database to be reflected
in Dataplex Universal Catalog.
The extraction process typically takes a few minutes, but time to completion
depends on the CPU size and the table count.
When an instance doesn't exist or is not running, it can take 7 days for
metadata to be deleted.
What's next
About data catalog management in Dataplex Universal Catalog
Dataplex Universal Catalog Identity and Access Management roles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
