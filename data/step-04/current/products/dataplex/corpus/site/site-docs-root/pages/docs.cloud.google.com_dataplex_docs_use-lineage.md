---
title: "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/use-lineage
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/use-lineage
  title: "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\
    \ Google Cloud Documentation"
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
Use data lineage with Google Cloud systems
Stay organized with collections
Save and categorize content based on your preferences.
View data lineage to understand the relationships between your
project's resources and the processes that created them. These relationships
show how data assets, such as tables and datasets, are transformed by processes
like queries and pipelines. This guide describes how to access lineage graphs in
Knowledge Catalog (formerly Dataplex Universal Catalog), BigQuery, and Vertex AI.
You can view data lineage details in the Google Cloud console or
retrieve them by using the Data Lineage API.
Roles and permissions
Data lineage tracks lineage information automatically when
you enable the
Data Lineage API . You don't
need any administrator or editor roles to capture lineage for your data assets.
To view data lineage, you need specific Identity and Access Management
(IAM) permissions. Lineage information is captured across projects, so you need
permissions in multiple projects.
When viewing lineage in Knowledge Catalog, BigQuery, or
Vertex AI: you need permissions to view lineage information in the
project where you are viewing it.
When viewing lineage that was recorded in other projects: you need
permissions to view lineage information in those projects where it was
recorded.
To get the permissions that
you need to view data lineage,
ask your administrator to grant you the
following IAM roles:
Data Lineage Viewer ( roles/datalineage.viewer )
on the project where lineage is recorded, and the project where lineage is viewed
View BigQuery table details:
BigQuery Data Viewer ( roles/bigquery.dataViewer )
on the table's storage project
View BigQuery job details:
BigQuery Resource Viewer ( roles/bigquery.resourceViewer )
on the job's compute project
View details for other cataloged assets:
Dataplex Catalog Viewer ( roles/dataplex.catalogViewer )
on the project where catalog entries are stored
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to view data lineage. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to view data lineage:
View BigQuery table details:
bigquery.tables.get - the table's storage project
View BigQuery job details:
bigquery.jobs.get - the job's compute project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Data lineage tracks lineage information automatically when
you enable the
Data Lineage API . You don't
need any administrator or editor roles to capture lineage for your data assets.
Types of data lineage views
You can view lineage information as a graph or a list.
By default, the lineage graph displays table-level lineage. For
BigQuery jobs, you can view column-level lineage in
both graph and list views.
The following view types are available:
Graph view : displays lineage as an interactive graph, letting you
explore relationships between data assets and columns by expanding nodes.
List view : displays lineage in a tabular format, providing simplified
and detailed representations of table-level and column-level lineage.
You can customize columns and export lineage data from this view.
The key elements in the graph are described as follows:
Nodes : represent the data entities. In the table-level view, a node
shows the table name and its columns. In the column-level view, each node
represents a specific table and its columns that have lineage.
Edges : the lines that connect nodes and represent the processes that
occur between them. Edges can feature icons or labels to provide more
information about the transformation:
Icons : In table-level view, icons appear on edges to represent
the transformation process. When you manually explore the graph,
icons on edges represent the source system of the process
(for example, BigQuery or Vertex AI).
If multiple processes are involved, a 'multiple processes' icon is
displayed. If the process source system is unknown, a gear icon is used.
When you apply filters, a gear icon is used for all processes.
Labels : In column-level view, edges are labeled to describe the
type of dependency between columns, such as Exact copy or Other .
Enable data lineage
Caution: Data lineage is enabled on a per-project basis, not a
per-service basis.
After you enable the Data Lineage API, lineage information is automatically
reported for multiple Google Cloud services in the project, depending on their
product-level lineage control.
For more details, see Data lineage considerations .
Enable data lineage to begin automatically tracking lineage
information for supported systems .
By default, enabling the API activates lineage tracking for most supported
services. To control Managed Service for Apache Spark lineage ingestion, see
Control lineage ingestion for a service .
You must enable the Data Lineage API in both the project where you view
lineage and the projects where lineage is recorded. For more information, see
Project types .
To capture lineage information, complete the following steps:
In the Google Cloud console, on the Project selector
page, select the project where you want to record lineage.
Go to Project selector
Enable the Data Lineage API.
Enable the Data Lineage API
Repeat the previous steps for each project where you want to
record lineage.
In the project where you view lineage, enable the Data Lineage API
and the Dataplex API.
Enable the APIs
Control lineage ingestion for a service
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
After you enable the Data Lineage API, the service starts automatic lineage
tracking for most supported services. You can then selectively enable or disable
lineage ingestion for specific integrations at the project, folder, or
organization level. During preview, this feature only supports configuring
ingestion for Managed Service for Apache Spark. If you disable lineage ingestion for
Managed Service for Apache Spark, it also disables lineage ingestion for Managed Service for Apache Spark
Managed Service for Apache Spark.
The configuration is hierarchical. The most specific configuration takes
precedence. For example, a project-level configuration overrides a folder-level
configuration. If no configuration is set, the service's default behavior is
used. For Managed Service for Apache Spark, the default is Enabled .
Any changes to the configuration might take up to 24 hours to propagate, but
usually become effective within two hours.
For Managed Service for Apache Spark and Managed Service for Apache Spark Managed Service for Apache Spark,
lineage data is only sent if lineage is also enabled in Managed Service for Apache Spark.
For more information, see
Managed Service for Apache Spark Spark lineage and
Managed Service for Apache Spark Managed Service for Apache Spark data lineage .
For more information about controlling lineage ingestion including how the
configuration is applied hierarchically, see Control lineage
ingestion .
Prerequisites
To control lineage ingestion, you must use the Data Lineage API.
Ensure you have a client project configured for billing and quota, as the
Data Lineage API is a client-based API .
Enable the datalineage.googleapis.com API in your client project. For
more information, see Enable data lineage .
Set the client project. For the following examples, use the
X-Goog-User-Project header. For more information, see
System parameters .
Get current configuration
To view the current lineage configuration, use the
projects.locations.config.get method. You can retrieve the configuration for
a project, folder, or organization.
The following example shows how to get the configuration for a project:
curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: CLIENT_PROJECT_ID " \
-X GET \
"https://datalineage.googleapis.com/v1/projects/ PROJECT_ID /locations/global/config"
Replace these values:
CLIENT_PROJECT_ID : The ID of your client project used for billing or quotas.
PROJECT_ID : The ID of the project whose configuration you want to view.
To get the configuration for a folder or organization, replace
projects/ PROJECT_ID with folders/ FOLDER_ID or
organizations/ ORGANIZATION_ID .
The command returns one of the following output:
If no configuration is set, you get an output with an empty
ingestion object:
{
"name" : "projects/123456789012/locations/global/config" ,
"ingestion" : {}
}
In this case, Managed Service for Apache Spark lineage ingestion uses the default
setting, which is enabled .
If Managed Service for Apache Spark lineage ingestion is explicitly enabled, you get
the following output:
{
"name" : "projects/123456789012/locations/global/config" ,
"ingestion" : {
"rules" : [
{
"integrationSelector" : {
"integration" : "DATAPROC"
},
"lineageEnablement" : {
"enabled" : true
}
}
]
},
"etag" : "Wb35wDxTTLd6Z+QAL+Yd4g=="
}
If Managed Service for Apache Spark lineage ingestion is disabled, you get the
following output:
{
"name" : "projects/123456789012/locations/global/config" ,
"ingestion" : {
"rules" : [
{
"integrationSelector" : {
"integration" : "DATAPROC"
},
"lineageEnablement" : {
"enabled" : false
}
}
]
},
"etag" : "Wb35wDxTTLd6Z+QAL+Yd4g=="
}
The etag field in the response is a checksum generated by the server based on
the current value of the configuration. When updating a configuration using
the patch method, you can include the etag value returned from a
recent get request in the request body. If you provide the etag ,
Knowledge Catalog uses it to verify that the configuration hasn't changed
since your last read request. If there's a mismatch, the update request
fails. This prevents you from unintentionally overwriting configurations made by
other users in read-modify-write scenarios. If you don't provide an etag
in your patch request, Knowledge Catalog overwrites the configuration
unconditionally.
Disable lineage ingestion for a service
To disable lineage ingestion for a specific service,
use the projects.locations.config.patch method with an ingestion rule that
sets lineageEnablement.enabled to false for the specific integration .
To prevent unintentionally overwriting configurations made by other users in
read-modify-write scenarios, you can include the etag field in the request
body. For more information, see
Get current configuration .
curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: CLIENT_PROJECT_ID " \
-X PATCH \
"https://datalineage.googleapis.com/v1/projects/ PROJECT_ID /locations/global/config" \
--data-binary @-
{
"ingestion": {
"rules": [{
"integrationSelector": {
"integration": "DATAPROC"
},
"lineageEnablement": {
"enabled": false
}
}]
},
"etag": " ETAG "
}
EOF
Replace the following:
CLIENT_PROJECT_ID : The ID of your client project used for billing or quotas.
PROJECT_ID : The ID of the project whose configuration you want to update.
ETAG : The etag value returned from a recent get request.
To disable lineage ingestion of a service for a folder or organization, replace
projects/ PROJECT_ID with folders/ FOLDER_ID or
organizations/ ORGANIZATION_ID .
Enable lineage ingestion for a service
To enable lineage ingestion for a specific service,
use the projects.locations.config.patch method with an ingestion rule that
sets lineageEnablement.enabled to true for the specific integration .
To prevent unintentionally overwriting configurations made by other users in
read-modify-write scenarios, you can include the etag field in the request
body. For more information, see
Get current configuration .
curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: CLIENT_PROJECT_ID " \
-X PATCH \
"https://datalineage.googleapis.com/v1/projects/ PROJECT_ID /locations/global/config" \
--data-binary @-
{
"ingestion": {
"rules": [{
"integrationSelector": {
"integration": "DATAPROC"
},
"lineageEnablement": {
"enabled": true
}
}]
},
"etag": " ETAG "
}
EOF
Replace the following:
CLIENT_PROJECT_ID : The ID of your client project used for billing or quotas.
PROJECT_ID : The ID of the project whose configuration you want to update.
ETAG : The etag value returned from a recent get request.
To enable lineage ingestion of a service for a folder or organization, replace
projects/ PROJECT_ID with folders/ FOLDER_ID or
organizations/ ORGANIZATION_ID .
View lineage in Knowledge Catalog
You can view data lineage information in the Knowledge Catalog web interface.
Tip: When you use data lineage with Knowledge Catalog, be aware of the
differences that are described in About data lineage in Data Catalog . Note: Depending on the volume of data being processed, it takes time for
data lineage to display a graph. For most jobs, it takes three hours,
and for some jobs it can take up to 24 hours.
To view the lineage, follow these instructions:
In the Google Cloud console, go to the Knowledge Catalog Search page.
Go to Search
Select Knowledge Catalog as the search mode.
Search for the entry you want to view, and then click it. For more
information, see Search for resources in Knowledge Catalog .
Click the Lineage tab.
The default Graph view opens, showing table-level lineage across
systems and regions. For more information, see Lineage graph view .
To manually explore the lineage graph, click Expand next to a
node to load five more nodes at a time.
For more information, see Manually explore the lineage graph .
Click a node in the Graph view.
The Details panel opens with information about the asset, such as fully
qualified name and type. For more information, see Node details .
Click an edge with a process icon in the Graph view.
The Query panel opens. For more information, see Inspect transformation logic and Audit and history of runs .
To inspect transformation logic, click the Details tab.
To see audit and history of runs, click the Runs tab.
In the Lineage explorer panel, select filter criteria—for example,
Direction , Dependency type , or Time range —and then click
Apply .
This opens a focused view within a specific region (Preview). This view
automatically expands the graph up to three levels of nodes. For more
information, see Apply filters for a focused lineage view .
In the focused Graph view, select a node, and then in the node's details
panel, click Visualize Path to visualize the lineage path from the
selected node back to the root entry (only in focused view).
For more information, see Lineage path visualization .
To view column-level lineage (only for BigQuery jobs), do one of the following:
In a focused Graph view, click the column icon on a table.
Column icon
In the Lineage explorer panel, filter by column name, and click
Apply .
For more information, see Column-level lineage .
Click restart_alt Reset .
This action removes all applied filters and takes you to the beginning of
the graph view.
Click List to switch to the list view.
The List view offers simplified and detailed tabular representations of lineage
for both table-level and column-level lineage,
synchronized with the Graph view. By default, simplified list view
is displayed, and you can toggle to detailed list view for analyzing
individual source-target relationships. You can configure which columns
are displayed and export lineage data. For more information, see Lineage list view .
View lineage in BigQuery
You can view data lineage information in the BigQuery web interface.
To view the lineage, follow these instructions:
In the Google Cloud console, go to the BigQuery page.
Open the BigQuery page
Open the table for which you want to see the data lineage.
Click the Lineage tab.
The default Graph view opens, showing table-level lineage across
systems and regions. For more information, see Lineage graph view .
To manually explore the lineage graph, click Expand next to a
node to load five more nodes at a time.
For more information, see Manually explore the lineage graph .
Click a node in the Graph view.
The Details panel opens with information about the asset, such as fully
qualified name and type. For more information, see Node details .
Click an edge with a process icon in the Graph view.
The Query panel opens. For more information, see Inspect transformation logic and Audit and history of runs .
To inspect transformation logic, click the Details tab.
To see audit and history of runs, click the Runs tab.
In the Lineage explorer panel, select filter criteria—for example,
Direction , Dependency type , or Time range —and then click
Apply .
This opens a focused view within a specific region (Preview). This view
automatically expands the graph up to three levels of nodes. For more
information, see Apply filters for a focused lineage view .
In the focused Graph view, select a node, and then in the node's details
panel, click Visualize Path to visualize the lineage path from the
selected node back to the root entry (only in focused view).
For more information, see Lineage path visualization .
To view column-level lineage (only for BigQuery jobs), do one of the following:
In a focused Graph view, click the column icon on a table.
Column icon
In the Lineage explorer panel, filter by column name, and click
Apply .
For more information, see Column-level lineage .
Click restart_alt Reset .
This action removes all applied filters and takes you to the beginning of
the graph view.
Click List to switch to the list view.
The List view offers simplified and detailed tabular representations of lineage
for both table-level and column-level lineage,
synchronized with the Graph view. By default, simplified list view
is displayed, and you can toggle to detailed list view for analyzing
individual source-target relationships. You can configure which columns
are displayed and export lineage data. For more information, see Lineage list view .
View lineage in Vertex AI
Systems such as Vertex AI Pipelines generate lineage data for
Vertex AI models and datasets. You can view data lineage information in
the Vertex AI web interface.
Note: To view the lineage of Vertex AI operations, such as the
training, test, and evaluation data used or hyperparameters applied, see
Track the lineage of pipeline artifacts .
View lineage for a managed dataset in Vertex AI
To view the lineage for a dataset, follow these instructions:
In the Google Cloud console, go to the Datasets page.
Open the Datasets page
Click the dataset for which you want to see the data lineage.
Click the Lineage tab.
The default Graph view opens, showing table-level lineage across
systems and regions. For more information, see Lineage graph view .
To manually explore the lineage graph, click Expand next to a
node to load five more nodes at a time.
For more information, see Manually explore the lineage graph .
Click a node in the Graph view.
The Details panel opens with information about the asset, such as fully
qualified name and type. For more information, see Node details .
Click an edge with a process icon in the Graph view.
The Query panel opens. For more information, see Inspect transformation logic and Audit and history of runs .
To inspect transformation logic, click the Details tab.
To see audit and history of runs, click the Runs tab.
In the Lineage explorer panel, select filter criteria—for example,
Direction , Dependency type , or Time range —and then click
Apply .
This opens a focused view within a specific region (Preview). This view
automatically expands the graph up to three levels of nodes. For more
information, see Apply filters for a focused lineage view .
In the focused Graph view, select a node, and then in the node's details
panel, click Visualize Path to visualize the lineage path from the
selected node back to the root entry (only in focused view).
For more information, see Lineage path visualization .
To view column-level lineage (only for BigQuery jobs), do one of the following:
In a focused Graph view, click the column icon on a table.
Column icon
In the Lineage explorer panel, filter by column name, and click
Apply .
For more information, see Column-level lineage .
Click restart_alt Reset .
This action removes all applied filters and takes you to the beginning of
the graph view.
Click List to switch to the list view.
The List view offers simplified and detailed tabular representations of lineage
for both table-level and column-level lineage,
synchronized with the Graph view. By default, simplified list view
is displayed, and you can toggle to detailed list view for analyzing
individual source-target relationships. You can configure which columns
are displayed and export lineage data. For more information, see Lineage list view .
Note: On the lineage graph, Vertex AI processes are preceded by the
.
These processes include Vertex AI Pipelines components and templates, and
Vertex ML Metadata artifacts, datasets, and models. If the process is
cataloged in Knowledge Catalog with a fully qualified domain name (FQN),
you can click the entry in the lineage graph to view its details. Alternatively,
to view the lineage graph details in Vertex AI, click
Open in Vertex AI in the Details panel.
View lineage for a model in Vertex AI
To view the lineage for a model, follow these instructions:
In the Google Cloud console, go to the Model Registry page.
Open the Model Registry page
Click the model for which you want to see the data lineage.
Click the Lineage tab.
The default Graph view opens, showing table-level lineage across
systems and regions. For more information, see Lineage graph view .
To manually explore the lineage graph, click Expand next to a
node to load five more nodes at a time.
For more information, see Manually explore the lineage graph .
Click a node in the Graph view.
The Details panel opens with information about the asset, such as fully
qualified name and type. For more information, see Node details .
Click an edge with a process icon in the Graph view.
The Query panel opens. For more information, see Inspect transformation logic and Audit and history of runs .
To inspect transformation logic, click the Details tab.
To see audit and history of runs, click the Runs tab.
In the Lineage explorer panel, select filter criteria—for example,
Direction , Dependency type , or Time range —and then click
Apply .
This opens a focused view within a specific region (Preview). This view
automatically expands the graph up to three levels of nodes. For more
information, see Apply filters for a focused lineage view .
In the focused Graph view, select a node, and then in the node's details
panel, click Visualize Path to visualize the lineage path from the
selected node back to the root entry (only in focused view).
For more information, see Lineage path visualization .
To view column-level lineage (only for BigQuery jobs), do one of the following:
In a focused Graph view, click the column icon on a table.
Column icon
In the Lineage explorer panel, filter by column name, and click
Apply .
For more information, see Column-level lineage .
Click restart_alt Reset .
This action removes all applied filters and takes you to the beginning of
the graph view.
Click List to switch to the list view.
The List view offers simplified and detailed tabular representations of lineage
for both table-level and column-level lineage,
synchronized with the Graph view. By default, simplified list view
is displayed, and you can toggle to detailed list view for analyzing
individual source-target relationships. You can configure which columns
are displayed and export lineage data. For more information, see Lineage list view .
Note: On the lineage graph, Vertex AI processes are preceded by the
.
These processes include Vertex AI Pipelines components and templates, and
Vertex ML Metadata artifacts, datasets, and models. If the process is
cataloged in Knowledge Catalog with a fully qualified domain name (FQN),
you can click the entry in the lineage graph to view its details. Alternatively,
to view the lineage graph details in Vertex AI, click
Open in Vertex AI in the Details panel.
What's next
Track data lineage for a BigQuery table's copy and query jobs .
Learn about data lineage information model .
Learn about data lineage considerations .
Learn about data lineage audit logging .
Learn how to troubleshoot data lineage .
Learn how to integrate with OpenLineage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
