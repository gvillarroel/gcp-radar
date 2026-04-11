---
title: "Use the BigLake metastore Iceberg REST catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog
  title: "Use the BigLake metastore Iceberg REST catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
BigLake
Guides
Send feedback
Use the BigLake metastore Iceberg REST catalog
Stay organized with collections
Save and categorize content based on your preferences.
The Apache Iceberg REST catalog in BigLake metastore is the recommended way
to use BigLake metastore for new workflows. It creates interoperability
between your query engines by offering a single source of truth for all of your
Iceberg data. It lets query engines, such as
Apache Spark, discover, read metadata from, and manage
Iceberg tables in a consistent way.
This approach is a good choice if you use open source engines to access
data in Cloud Storage and need interoperability with other engines,
including BigQuery. It supports features like credential
vending for fine-grained access control and cross-region
replication and disaster
recovery .
In contrast, the custom Iceberg catalog for
BigQuery is an
earlier integration. While existing workflows can continue to use it, the REST
catalog offers a more standardized and feature-rich experience.
Before you begin
Familiarize yourself with BigLake metastore and the Iceberg REST catalog overview before
continuing.
Verify that billing is enabled for your Google Cloud project .
Enable the BigLake API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
To get the permissions that
you need to use the Iceberg REST catalog in BigLake metastore,
ask your administrator to grant you the
following IAM roles:
Perform administrative tasks, such as managing catalog user access, storage access, and the catalog's credential vending mode:
BigLake Admin ( roles/biglake.admin )
on the project
Storage Admin ( roles/storage.admin )
on the Cloud Storage bucket
Read table data in credential vending mode:
BigLake Viewer ( roles/biglake.viewer )
on the project
Write table data in credential vending mode:
BigLake Editor ( roles/biglake.editor )
on the project
Read catalog resources and table data in non-credential vending mode:
BigLake Viewer ( roles/biglake.viewer )
on the project
Storage Object Viewer ( roles/storage.objectViewer )
on the Cloud Storage bucket
Manage catalog resources and write table data in non-credential vending mode:
BigLake Editor ( roles/biglake.editor )
on the project
Storage Object User ( roles/storage.objectUser )
on the Cloud Storage bucket
Perform data manipulation language (DML) operations with BigQuery catalog federation:
BigQuery Data Editor ( roles/bigquery.dataEditor )
on the project
Storage Admin ( roles/storage.admin )
on the Cloud Storage bucket. If you use query engines such as Managed Service for Apache Spark to perform DML operations, grant these roles to the service account that you use to run jobs in that engine.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Limitations
The Iceberg REST catalog is subject to the following
limitations:
General limitations
Trino is only supported with BigQuery catalog federation when
using Managed Service for Apache Spark on Compute Engine 2.3 image versions
2.3.16 and later.
When using credential vending mode, you must set the io-impl property to
org.apache.iceberg.gcp.gcs.GCSFileIO . The default,
org.apache.iceberg.hadoop.HadoopFileIO , isn't supported.
Table limitations
Tables managed through the REST catalog do not support fine-grained access
control (FGAC), such as row-level and column-level security.
Data limitations
Only Parquet files are supported. For more details on how
BigQuery handles Parquet files, see Loading Parquet data from Cloud Storage .
The Iceberg metadata.json file size is limited to 1MB.
To request an increase to this limit, contact your Google account team.
Query limitations
Views over Iceberg tables managed by the REST catalog
can't be created in BigQuery.
Iceberg metadata tables (such as .snapshots or
.files ) can't be queried in BigQuery using five-part name
identifiers; you can query these tables using Spark.
Set up the Iceberg REST catalog
Before you set up your catalog, we recommend reading the Iceberg REST catalog overview
to understand its resource hierarchy, catalog types, and naming structure.
The following are the general steps to follow when using the
Apache Iceberg REST catalog in BigLake metastore:
Based on the Iceberg REST catalog overview , choose your catalog
warehouse location (either Cloud Storage or BigQuery).
If you are using a Cloud Storage gs:// warehouse,
create a catalog that points to your warehouse location.
Configure your client application to use the
Iceberg REST catalog.
Create a namespace or schema to organize
your tables.
Create and query tables using your configured client.
Create a catalog
You can create a catalog that uses either end-user credentials or credential
vending mode.
With end-user credentials, the catalog passes the identity of the end user
accessing it to Cloud Storage for authorization checks.
Credential vending is a storage access delegation mechanism that lets
BigLake metastore administrators control permissions directly on
BigLake metastore resources, eliminating the need for catalog users to
have direct access to Cloud Storage buckets. It lets
BigLake administrators give users permissions on specific
data files.
Note: Familiarize yourself with the location
requirements
before creating a catalog. If your catalog uses a multi-region bucket and you
want to use it with the BigQuery multi-regions ( US or EU ),
you must delete and recreate the catalog to specify the primary location.
End-user credentials
Console
Open the BigLake page in the Google Cloud console.
Go to BigLake
Click Create catalog .
In the Select a Cloud Storage bucket field, enter the name of the
Cloud Storage bucket to use with your catalog. Alternatively, click
Browse to choose an existing bucket or create a
new one. You can only have one catalog per Cloud Storage
bucket.
For Authentication method , select End-user credentials .
Click Create .
gcloud
Use the
gcloud biglake iceberg catalogs create command .
gcloud biglake iceberg catalogs create \
CATALOG_NAME \
--project PROJECT_ID \
--catalog-type gcs-bucket \
--credential-mode end-user \
[ --primary-location LOCATION ]
Replace the following:
CATALOG_NAME : a name for your catalog. For
managed BigLake tables for Apache Iceberg ,
this name often matches the Cloud Storage bucket ID used with the
REST catalog—for example, if your bucket is gs://bucket-id ,
the catalog name might be bucket-id . This name is also used
as the catalog identifier when
querying these tables from BigQuery .
PROJECT_ID : your Google Cloud project ID.
LOCATION : (Optional) The primary region for the catalog.
For Cloud Storage US or EU multi-region buckets, specify
US or EU to ensure the catalog is accessible from
the corresponding BigQuery regions. For more information,
see Catalog regions .
Credential vending mode
A catalog administrator enables credential vending when creating or updating a
catalog. As a catalog user, you can then instruct the
Iceberg REST catalog to return downscoped storage
credentials by specifying the access delegation when you
configure the Iceberg REST catalog .
Console
In the Google Cloud console, open the BigLake page.
Go to BigLake
Click
add_box
Create catalog . The Create catalog page opens.
For Select a Cloud Storage bucket , enter the name of the
Cloud Storage bucket to use with your catalog. Alternatively, click
Browse to choose from a list of existing buckets or to create a
new one. You can only have one catalog per Cloud Storage
bucket.
For Authentication method , select Credential vending mode .
Click Create .
Your catalog is created and the Catalog details page
opens.
Under Authentication method , click Set bucket permissions .
In the dialog, click Confirm .
This verifies that your catalog's service account has the
Storage Object User role on your storage bucket.
Configure client application
After you create a catalog, configure your client application to use it. These
examples show you how to configure with or
without credential vending.
Cluster
To use Spark with the Iceberg REST
catalog on Managed Service for Apache Spark, first create a cluster that includes
the Iceberg component:
gcloud dataproc clusters create CLUSTER_NAME \
--enable-component-gateway \
--project = PROJECT_ID \
--region = REGION \
--optional-components = ICEBERG \
--image-version = DATAPROC_VERSION
Replace the following:
CLUSTER_NAME : a name for your cluster.
PROJECT_ID : your Google Cloud project ID.
REGION : the region for the Managed Service for Apache Spark cluster.
DATAPROC_VERSION : the Managed Service for Apache Spark image
version, for example 2.2 .
After you create the cluster, configure your Spark session to use the
Iceberg REST catalog:
import pyspark
from pyspark.context import SparkContext
from pyspark.sql import SparkSession
catalog_name = " CATALOG_NAME "
spark = SparkSession . builder . appName ( " APP_NAME " ) \
. config ( f 'spark.sql.catalog. { catalog_name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .type' , 'rest' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .warehouse' , ' WAREHOUSE_PATH ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.x-goog-user-project' , ' PROJECT_ID ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest-metrics-reporting-enabled' , 'false' ) \
. config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \
. config ( 'spark.sql.defaultCatalog' , ' CATALOG_NAME ' ) \
. getOrCreate ()
Replace the following:
CATALOG_NAME : the name of your
Iceberg REST catalog.
APP_NAME : a name for your
Spark session.
WAREHOUSE_PATH : The path to your warehouse.
Use gs:// CLOUD_STORAGE_BUCKET_NAME . To use
BigQuery catalog federation , see
Use catalog federation with BigQuery .
PROJECT_ID : the project that is billed for using the
Iceberg REST catalog, which might be different from the
project that owns the Cloud Storage bucket. For details about
project configuration when using a REST API, see
System parameters .
Configure with credential vending
To use credential vending, you
must use a catalog in credential vending mode and add
the X-Iceberg-Access-Delegation header to Iceberg
REST catalog requests with a value of vended-credentials by adding the
following line to the SparkSession builder:
. config ( f 'spark.sql.catalog. { catalog_name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' )
Example with credential vending
The following example configures the query engine with credential vending:
import pyspark
from pyspark.context import SparkContext
from pyspark.sql import SparkSession
catalog_name = " CATALOG_NAME "
spark = SparkSession . builder . appName ( " APP_NAME " ) \
. config ( f 'spark.sql.catalog. { catalog_name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .type' , 'rest' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .warehouse' , 'gs:// CLOUD_STORAGE_BUCKET_NAME ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.x-goog-user-project' , ' PROJECT_ID ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest-metrics-reporting-enabled' , 'false' ) \
. config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \
. config ( 'spark.sql.defaultCatalog' , ' CATALOG_NAME ' ) \
. getOrCreate ()
For more information, see the
Headers in the RESTCatalog
section of the Iceberg documentation.
Managed Service for Apache Spark clusters support Google authorization flows for Iceberg in the following releases:
Managed Service for Apache Spark on Compute Engine 2.2 image versions
2.2.65 and later.
Managed Service for Apache Spark on Compute Engine 2.3 image versions
2.3.11 and later.
Serverless
Submit a PySpark batch workload to Managed Service for Apache Spark
with the following configuration:
gcloud dataproc batches submit pyspark PYSPARK_FILE \
--project = PROJECT_ID \
--region = REGION \
--version = RUNTIME_VERSION \
--properties = "\
spark.sql.defaultCatalog= CATALOG_NAME ,\
spark.sql.catalog. CATALOG_NAME =org.apache.iceberg.spark.SparkCatalog,\
spark.sql.catalog. CATALOG_NAME .type=rest,\
spark.sql.catalog. CATALOG_NAME .uri=https://biglake.googleapis.com/iceberg/v1/restcatalog,\
spark.sql.catalog. CATALOG_NAME .warehouse= WAREHOUSE_PATH ,\
spark.sql.catalog. CATALOG_NAME .io-impl=org.apache.iceberg.gcp.gcs.GCSFileIO,\
spark.sql.catalog. CATALOG_NAME .header.x-goog-user-project= PROJECT_ID ,\
spark.sql.catalog. CATALOG_NAME .rest.auth.type=org.apache.iceberg.gcp.auth.GoogleAuthManager,\
spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions,\
spark.sql.catalog. CATALOG_NAME .rest-metrics-reporting-enabled=false"
Replace the following:
PYSPARK_FILE : the gs:// Cloud Storage path to your PySpark application file.
PROJECT_ID : your Google Cloud project ID.
REGION : the region for the Managed Service for Apache Spark batch workload.
RUNTIME_VERSION : the Managed Service for Apache Spark runtime version, for example 2.2 .
CATALOG_NAME : the name of your
Iceberg REST catalog.
WAREHOUSE_PATH : The path to your warehouse.
Use gs:// CLOUD_STORAGE_BUCKET_NAME . To use
BigQuery catalog federation , see
Use catalog federation with BigQuery .
Configure with credential vending
To use credential vending, you must use a
catalog in credential vending mode and add the
X-Iceberg-Access-Delegation header to Iceberg REST
catalog requests with a value of vended-credentials by adding the following
line to the Managed Service for Apache Spark configurations:
. config ( f 'spark.sql.catalog. { catalog_name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' )
Example with credential vending
The following example configures the query engine with credential vending:
gcloud dataproc batches submit pyspark PYSPARK_FILE \
--project = PROJECT_ID \
--region = REGION \
--version = RUNTIME_VERSION \
--properties = "\
spark.sql.defaultCatalog= CATALOG_NAME ,\
spark.sql.catalog. CATALOG_NAME =org.apache.iceberg.spark.SparkCatalog,\
spark.sql.catalog. CATALOG_NAME .type=rest,\
spark.sql.catalog. CATALOG_NAME .uri=https://biglake.googleapis.com/iceberg/v1/restcatalog,\
spark.sql.catalog. CATALOG_NAME .warehouse=gs:// CLOUD_STORAGE_BUCKET_NAME ,\
spark.sql.catalog. CATALOG_NAME .header.x-goog-user-project= PROJECT_ID ,\
spark.sql.catalog. CATALOG_NAME .rest.auth.type=org.apache.iceberg.gcp.auth.GoogleAuthManager,\
spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions,\
spark.sql.catalog. CATALOG_NAME .gcs.oauth2.refresh-credentials-endpoint=https://oauth2.googleapis.com/token, \
spark.sql.catalog. CATALOG_NAME .rest-metrics-reporting-enabled=false,
spark.sql.catalog. CATALOG_NAME .header.X-Iceberg-Access-Delegation=vended-credentials "
For more information, see the
Headers in the RESTCatalog
section of the Iceberg documentation.
Managed Service for Apache Spark supports Google authorization flows for Iceberg in the following runtime versions:
Managed Service for Apache Spark 2.2
runtimes 2.2.60 and later
Managed Service for Apache Spark 2.3
runtimes 2.3.10 and later
Trino
To use Trino with the Iceberg REST catalog, create a
Managed Service for Apache Spark cluster with the Trino component and configure catalog
properties using the gcloud dataproc clusters create --properties flag. The following example creates a
Trino catalog named CATALOG_NAME :
gcloud dataproc clusters create CLUSTER_NAME \
--enable-component-gateway \
--region = REGION \
--image-version = DATAPROC_VERSION \
--network = NETWORK_ID \
--optional-components = TRINO \
--properties = "\
trino-catalog: CATALOG_NAME .connector.name=iceberg,\
trino-catalog: CATALOG_NAME .iceberg.catalog.type=rest,\
trino-catalog: CATALOG_NAME .iceberg.rest-catalog.uri=https://biglake.googleapis.com/iceberg/v1/restcatalog,\
trino-catalog: CATALOG_NAME .iceberg.rest-catalog.warehouse= WAREHOUSE_PATH ,\
trino-catalog: CATALOG_NAME .iceberg.rest-catalog.biglake.project-id= PROJECT_ID ,\
trino-catalog: CATALOG_NAME .iceberg.rest-catalog.rest.auth.type=org.apache.iceberg.gcp.auth.GoogleAuthManager"
Replace the following:
CLUSTER_NAME : a name for your cluster.
REGION : the Managed Service for Apache Spark cluster region.
DATAPROC_VERSION : Managed Service for Apache Spark image version, for example 2.2 .
NETWORK_ID : cluster network ID. For more information, see Managed Service for Apache Spark cluster network configuration .
CATALOG_NAME : the name of your Trino catalog using
the Iceberg REST catalog.
WAREHOUSE_PATH : The path to your warehouse.
Use gs:// CLOUD_STORAGE_BUCKET_NAME .
PROJECT_ID : your Google Cloud project ID to
use for BigLake metastore.
After cluster creation, connect to the main VM instance, and use the Trino CLI:
trino --catalog = CATALOG_NAME
Managed Service for Apache Spark Trino supports Google authorization flows for Iceberg in the following releases:
Managed Service for Apache Spark on Compute Engine 2.2 runtime versions
2.2.65 and later
Managed Service for Apache Spark on Compute Engine 2.3 runtime versions
2.3.11 and later
Managed Service for Apache Spark on Compute Engine 3.0 is not supported.
Configure with credential vending
Credential vending isn't supported on Managed Service for Apache Spark Trino.
Iceberg 1.10 or later
Open source Iceberg 1.10 and later releases have built-in
support for Google authorization flows in GoogleAuthManager . The following is an example of how to configure Apache Spark to use the BigLake metastore Iceberg REST catalog.
import pyspark
from pyspark.context import SparkContext
from pyspark.sql import SparkSession
catalog_name = " CATALOG_NAME "
spark = SparkSession . builder . appName ( " APP_NAME " ) \
. config ( f 'spark.sql.catalog. { catalog_name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .type' , 'rest' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .warehouse' , ' WAREHOUSE_PATH ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.x-goog-user-project' , ' PROJECT_ID ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest-metrics-reporting-enabled' , 'false' ) \
. config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \
. config ( 'spark.sql.defaultCatalog' , ' CATALOG_NAME ' ) \
. getOrCreate ()
Replace the following:
CATALOG_NAME : the name of your
Iceberg REST catalog.
APP_NAME : a name for your
Spark session.
WAREHOUSE_PATH : The path to your warehouse.
Use gs:// CLOUD_STORAGE_BUCKET_NAME . To use
BigQuery catalog federation , see
Use catalog federation with BigQuery .
PROJECT_ID : the project that is billed for using the
Iceberg REST catalog, which might be different from
the project that owns the Cloud Storage bucket. For details about
project configuration when using a REST API, see
System parameters .
Configure with credential vending
The preceding example doesn't use credential vending. To use credential
vending, you must use a
catalog in credential vending mode and add the
X-Iceberg-Access-Delegation header to Iceberg REST
catalog requests with a value of vended-credentials by adding the following
line to the SparkSession builder:
. config ( f 'spark.sql.catalog. { catalog_name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' )
Example with credential vending
The following example configures the query engine with credential vending:
import pyspark
from pyspark.context import SparkContext
from pyspark.sql import SparkSession
catalog_name = " CATALOG_NAME "
spark = SparkSession . builder . appName ( " APP_NAME " ) \
. config ( f 'spark.sql.catalog. { catalog_name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .type' , 'rest' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .warehouse' , 'gs:// CLOUD_STORAGE_BUCKET_NAME ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.x-goog-user-project' , ' PROJECT_ID ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest-metrics-reporting-enabled' , 'false' ) \
. config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \
. config ( 'spark.sql.defaultCatalog' , ' CATALOG_NAME ' ) \
. getOrCreate ()
For more information, see the
Headers in the RESTCatalog
section of the Iceberg documentation.
Prior Iceberg releases
For open source Iceberg releases prior to 1.10, you can
configure standard OAuth authentication by configuring a session with the
following:
import pyspark
from pyspark.context import SparkContext
from pyspark.sql import SparkSession
catalog_name = " CATALOG_NAME "
spark = SparkSession . builder . appName ( " APP_NAME " ) \
. config ( 'spark.jars.packages' , 'org.apache.iceberg:iceberg-spark-runtime-3.5_2.12:1.9.1,org.apache.iceberg:iceberg-gcp-bundle:1.9.1' ) \
. config ( f 'spark.sql.catalog. { catalog_name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .type' , 'rest' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .warehouse' , ' WAREHOUSE_PATH ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.x-goog-user-project' , ' PROJECT_ID ' ) \
. config ( f "spark.sql.catalog. { catalog_name } .token" , " TOKEN " ) \
. config ( f "spark.sql.catalog. { catalog_name } .oauth2-server-uri" , "https://oauth2.googleapis.com/token" ) \
. config ( f 'spark.sql.catalog. { catalog_name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest-metrics-reporting-enabled' , 'false' ) \
. config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \
. config ( 'spark.sql.defaultCatalog' , ' CATALOG_NAME ' ) \
. getOrCreate ()
Replace the following:
CATALOG_NAME : the name of your
Iceberg REST catalog.
APP_NAME : a name for your
Spark session.
WAREHOUSE_PATH : The path to your warehouse.
Use gs:// CLOUD_STORAGE_BUCKET_NAME . To use
BigQuery catalog federation , see
Use catalog federation with BigQuery .
PROJECT_ID : the project that is billed for using the
Iceberg REST catalog, which might be different from
the project that owns the Cloud Storage bucket. For details about
project configuration when using a REST API, see
System parameters .
TOKEN : your authentication token, which is valid for
one hour—for example, a token generated using
gcloud auth application-default print-access-token .
Configure with credential vending
The preceding example doesn't use credential vending. To use credential
vending, you must use a
catalog in credential vending mode and add the
X-Iceberg-Access-Delegation header to Iceberg REST
catalog requests with a value of vended-credentials by adding the following
line to the SparkSession builder:
. config ( f 'spark.sql.catalog. { catalog_name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' )
Example with credential vending
The following example configures the query engine with credential vending:
import pyspark
from pyspark.context import SparkContext
from pyspark.sql import SparkSession
catalog_name = " CATALOG_NAME "
spark = SparkSession . builder . appName ( " APP_NAME " ) \
. config ( f 'spark.sql.catalog. { catalog_name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .type' , 'rest' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .warehouse' , 'gs:// CLOUD_STORAGE_BUCKET_NAME ' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.x-goog-user-project' , ' PROJECT_ID ' ) \
. config ( f "spark.sql.catalog. { catalog_name } .token" , " TOKEN " ) \
. config ( f "spark.sql.catalog. { catalog_name } .oauth2-server-uri" , "https://oauth2.googleapis.com/token" ) \
. config ( f 'spark.sql.catalog. { catalog_name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \
. config ( f 'spark.sql.catalog. { catalog_name } .rest-metrics-reporting-enabled' , 'false' ) \
. config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \
. config ( 'spark.sql.defaultCatalog' , ' CATALOG_NAME ' ) \
. getOrCreate ()
For more information, see the
Headers in the RESTCatalog
section of the Iceberg documentation.
Create a namespace or schema
After you configure your client, create a namespace or schema to organize your
tables. The syntax for creating a namespace or schema varies depending on your
query engine. The following examples show how to create them using Spark and Trino.
Caution: If you're using credential vending, don't create
namespaces or schemas within other namespaces or schemas, because doing
so can grant users access to unintended resources.
Spark
Cloud Storage warehouse
spark . sql ( "CREATE NAMESPACE IF NOT EXISTS NAMESPACE_NAME ;" )
spark . sql ( "USE NAMESPACE_NAME ;" )
Replace NAMESPACE_NAME with a name for your namespace.
Trino
Cloud Storage warehouse
CREATE SCHEMA IF NOT EXISTS CATALOG_NAME . SCHEMA_NAME ;
USE CATALOG_NAME . SCHEMA_NAME ;
Replace the following:
CATALOG_NAME : the name of your Trino catalog using
the Iceberg REST catalog.
SCHEMA_NAME : a name for your schema.
Query tables in BigQuery
How you query tables that you create through the
Iceberg REST catalog in BigQuery depends
on whether you are using a Cloud Storage bucket warehouse or
BigQuery federation .
Cloud Storage bucket warehouse : If you configured your client
with a gs:// warehouse path, query tables from BigQuery
using the four-part name (P.C.N.T) project.catalog.namespace.table .
For more information on P.C.N.T structure, see Iceberg REST catalog concepts .
The catalog component is the name of your BigLake metastore catalog
resource. For more information on querying tables, see
Query a table .
BigQuery federation : If you configured your client with a
bq:// warehouse path, tables that you create are visible in
BigQuery and can be queried directly using standard
BigQuery SQL:
SELECT * FROM ` NAMESPACE_NAME . TABLE_NAME ` ;
Replace the following:
NAMESPACE_NAME : the name of your namespace.
TABLE_NAME : the name of your table.
Use catalog federation with BigQuery
To learn about catalog federation, see Iceberg REST catalog concepts .
To enable federation, configure your client with the
bq://projects/ PROJECT_ID warehouse format in
the WAREHOUSE_PATH field in the client configuration examples in
Configure client application .
You can also choose to include a BigQuery location to
restrict future requests to a single location using the
bq://projects/ PROJECT_ID /locations/ LOCATION
format.
Because these resources are managed by BigQuery, you must have
the applicable required permissions .
After you configure your client for federation, you can create a namespace for
your federated tables.
Spark
To use BigQuery catalog federation,
include the LOCATION and DBPROPERTIES clauses:
spark . sql ( "CREATE NAMESPACE IF NOT EXISTS NAMESPACE_NAME LOCATION 'gs:// BUCKET_NAME / NAMESPACE_NAME ' WITH DBPROPERTIES ('gcp-region' = ' LOCATION ');" )
spark . sql ( "USE NAMESPACE_NAME ;" )
Replace the following:
NAMESPACE_NAME : a name for your namespace.
BUCKET_NAME : the Cloud Storage bucket
that you're using with your catalog.
LOCATION : a
BigQuery location . The default
value is the US multi-region.
Trino
To use BigQuery catalog federation,
include the LOCATION and gcp-region properties:
CREATE SCHEMA IF NOT EXISTS CATALOG_NAME . SCHEMA_NAME WITH ( LOCATION = 'gs:// BUCKET_NAME / SCHEMA_NAME ' , "gcp-region" = ' LOCATION ' );
USE CATALOG_NAME . SCHEMA_NAME ;
Replace the following:
CATALOG_NAME : the name of your Trino catalog using
the Iceberg REST catalog.
SCHEMA_NAME : a name for your schema.
BUCKET_NAME : the Cloud Storage bucket
that you're using with your catalog.
LOCATION : a
BigQuery location . The default
value is the US multi-region.
Pricing
For pricing details, see
BigLake pricing .
What's next
Learn how to
manage catalogs in the Google Cloud console .
Learn about BigLake tables for Apache Iceberg .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
