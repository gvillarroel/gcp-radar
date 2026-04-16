---
title: "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/create-cluster
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage
  title: "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Enable Hive data lineage
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
Note: To provide feedback or ask questions that are related to this preview
feature, contact dataproc-lineage-support@google.com .
This document shows you how to enable and use
data lineage for
Managed Service for Apache Spark Hive jobs.
You enable Data lineage for Managed Service for Apache Spark Hive jobs
using an initialization action
when you create a cluster .
When you enable Hive Data lineage
on a cluster, Hive jobs that you submit to the cluster capture data
lineage events and publish them to Knowledge Catalog .
Visualize lineage information
A Data lineage graph displays relationships between your project
resources and the processes that created them. You can access lineage graphs
using Knowledge Catalog ,
BigQuery Studio , and
Vertex AI
in the Google Cloud console.
You can retrieve data lineage information as JSON data
using the Data Lineage API.
Pricing
Managed Service for Apache Spark Hive data lineage is offered during
Preview without additional charge. Standard
Managed Service for Apache Spark pricing applies.
Before you begin
In the Google Cloud console, on the project selector page, select the project
that contains the Managed Service for Apache Spark cluster for which you want to track
lineage.
Go to project selector
Enable the Data Lineage API and Dataplex API.
Enable the APIs
Required roles
To get the permissions that
you need to use data lineage in Managed Service for Apache Spark,
ask your administrator to grant you the
following IAM roles on the Managed Service for Apache Spark cluster VM service account :
View data lineage in Knowledge Catalog or use the Data Lineage API:
Data Lineage Viewer ( roles/datalineage.viewer )
Produce data lineage manually using the API:
Data Lineage Events Producer ( roles/datalineage.producer )
Edit data lineage using the API:
Data Lineage Editor ( roles/datalineage.editor )
Perform all operations on data lineage:
Data Lineage Administrator ( roles/datalineage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable Hive data lineage
To enable Hive data lineage on a cluster, specify the hive-lineage.sh
initialization action when
you create a Managed Service for Apache Spark cluster .
This initialization action is stored in regional buckets in Cloud Storage.
Note: See Important considerations and guidelines
when using initialization actions in production.
gcloud CLI cluster creation example:
gcloud dataproc clusters create CLUSTER_NAME \
--project PROJECT_ID \
--region REGION \
--image-version IMAGE_VERSION \
--initialization-actions gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh
Replace the following:
CLUSTER_NAME : The name of the cluster.
PROJECT_ID : Your Google Cloud project ID.
Project IDs are listed in the Project info section on
the Google Cloud console Dashboard .
REGION : The
Compute Engine region
in which to locate the cluster.
IMAGE_VERSION The intended image version for the cluster.
--initialization-actions : Specifies an installation action located in a Cloud Storage
regional location, that enables Hive data lineage .
Optionally add the Hive-BigQuery connector initialization action.
If you want to integrate BigQuery tables with Hive workloads,
you must install the Hive-BigQuery connector on the cluster. See the
Hive data lineage with BigQuery example ,
which runs a connector initialization action to
install the Hive-BigQuery connector on the cluster.
Submit a Hive job
When you submit a Hive job
to a Managed Service for Apache Spark cluster that was created with
Hive data lineage enabled ,
Managed Service for Apache Spark captures and reports the data lineage information to
Knowledge Catalog.
gcloud CLI Hive job submission example:
gcloud dataproc jobs submit hive \
--cluster = CLUSTER_NAME \
--project PROJECT_ID \
--region REGION \
--properties = hive.openlineage.namespace = CUSTOM_NAMESPACE \
--execute HIVE_QUERY
Replace the following:
CLUSTER_NAME : The name of the cluster.
PROJECT_ID : Your Google Cloud project ID.
Project IDs are listed in the Project info section on
the Google Cloud console Dashboard .
REGION : The
Compute Engine region
where your cluster is located.
CUSTOM_NAMESPACE : An optional custom Hive namespace you can specify
to identify the Hive job.
HIVE_QUERY : The Hive query to submit to the cluster.
Instead of specifying a query, you can replace the --execute HIVE_QUERY
flag with a --file SQL_FILE flag to specify the location of a file that contains
the query.
View lineage in Knowledge Catalog
A lineage graph displays relationships between your project
resources and the processes that created them. You can
view data lineage information
in the Google Cloud console, or
retrieve it from the Data Lineage API
in the form of JSON data.
Hive data lineage with BigQuery example
The example in this section consists of the following steps:
Create a Managed Service for Apache Spark cluster that has Hive data lineage
enabled and the Hive-BigQuery connector installed on the
cluster.
Run a Hive query on the cluster to copy data between Hive tables.
View the generated data lineage graph in BigQuery Studio.
Create a Managed Service for Apache Spark cluster
Run the following command in a local terminal window or in Cloud Shell
to create a Managed Service for Apache Spark cluster .
gcloud dataproc clusters create CLUSTER_NAME \
--project PROJECT_ID \
--region REGION \
--image-version IMAGE_VERSION \
--initialization-actions gs://goog-dataproc-initialization-actions- REGION /connectors/connectors.sh, gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh \
--metadata hive-bigquery-connector-version= HIVE_BQ_VERSION
Notes:
CLUSTER_NAME : The name of the cluster.
PROJECT_ID : Your Google Cloud project ID.
Project IDs are listed in the Project info section on
the Google Cloud console Dashboard .
REGION : The
Compute Engine region
in which to locate the cluster.
IMAGE_VERSION The intended image version for the cluster.
--initialization-actions : These installation actions, located in Cloud Storage,
install the Hive-BigQuery connector
and enable Hive data lineage .
HIVE_BQ_VERSION : Specifies the
Hive-BigQuery connector version .
The --metadata flag passes the version to the
connectors.sh initialization action
to install the Hive-BigQuery connector on the cluster.
Run a Hive query
Run a Hive query to perform the following actions:
Create a us_states external table with sample data input from
gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout .
Create a us_states_copy managed table in the specified BigQuery dataset.
Copy the entire data from us_states to us_states_copy .
To run the query:
In a local terminal window or in Cloud Shell ,
use a text editor, such as the vi or nano , to copy the
following Hive query statement into an hive-example.sql file, then save the
file in the current directory.
Submit the hive-example.sql file to the Managed Service for Apache Spark cluster
created earlier replacing the
--execute HIVE_QUERY flag with a
--file SQL_FILE flag to specify the location of
the saved hive-example.sql file. Note that the
PROJECT and BQ_DATASET variables must be populated.
Hive BigQueryStorageHandler
CREATE EXTERNAL TABLE us_states (
name STRING ,
post_abbr STRING
)
STORED AS PARQUET
LOCATION 'gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout' ;
CREATE TABLE us_states_copy (
name STRING ,
post_abbr STRING
)
STORED BY 'com.google.cloud.hive.bigquery.connector.BigQueryStorageHandler'
TBLPROPERTIES (
'bq.table' = ' PROJECT . BQ_DATASET .us_states_copy'
);
INSERT INTO us_states_copy SELECT * FROM us_states ;
View the data lineage graph
After the Hive job finishes successfully, view the data lineage in
BigQuery Studio in the Google Cloud console:
For information about displaying graphs in BigQuery Studio, see
View lineage in BigQuery .
For information about understanding graphs, see
Data lineage information model .
What's next
Learn more about data lineage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
