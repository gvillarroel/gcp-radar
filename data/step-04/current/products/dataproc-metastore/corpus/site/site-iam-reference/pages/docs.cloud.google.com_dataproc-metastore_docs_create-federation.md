---
title: "Create a metadata federation service \_|\_ Dataproc Metastore \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/create-federation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/create-federation
  title: "Create a metadata federation service \_|\_ Dataproc Metastore \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Create a metadata federation service
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create a metadata federation service for
Dataproc Metastore. A federation service lets you access metadata that
is stored in multiple sources from a single gRPC endpoint.
For more information about how federation works and its limitations, see About
metadata federation .
Before you begin
Enable Dataproc Metastore .
Create a Dataproc Metastore service that uses the gRPC
endpoint.
Optional: If you're using a BigQuery source for federation,
complete the following:
Enable the BigQuery API in the project that contains
the BigQuery source.
Enable the Resource Manager API .
Optional: If you're using a Knowledge Catalog Lake as a source for
federation ( Preview ), complete the following:
Enable the Dataplex API in the project that contains
a Knowledge Catalog Lake as a source.
Required Roles
To get the permissions that
you need to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege,
ask your administrator to grant you the
following IAM roles:
To access the federation service:
Federation accessor ( roles/metastore.federationAccessor )
on the user account or service account
To grant full control of all Dataproc Metastore resources:
Dataproc Metastore editor ( roles/metastore.editor )
on the user account or service account
To complete metadata operations on a Dataproc Metastore configured with a federation service:
Metastore owner ( metastore.metadataEditor )
on the user account or service account
To create a Managed Service for Apache Spark cluster:
Managed Service for Apache Spark worker ( roles/dataproc.worker )
on on the Managed Service for Apache Spark VM service account
(Optional) To access BigQuery datasets:
Use an appropriate BigQuery predefined role applicable for your use case
on the user account or service account
(Optional) To access Knowledge Catalog Lakes ( Preview ):
Use an appropriate Knowledge Catalog predefined role applicable for your use case
on the user account or service account
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege:
To create a Dataproc Metastore:
metastore.services.create
on the user account or service account
To list, get, create, update, and delete a federation service:
metastore.federations.create, metastore.federations.update, metastore.federations.delete, metastore.federations.get metastore.federations.list
on the user account or service account
To complete metadata operations on a Dataproc Metastore:
metastore.services.get, metastore.services.use, metastore.databases.create, metastore.databases.update, metastore.databases.deletemetastore.databases.get,metastore.databases.list, metastore.databases.getIamPolicy, metastore.tables.create, metastore.tables.update, metastore.tables.delete, metastore.tables.get, metastore.tables.list, metastore.tables.getIamPolicy
on the user account or service account
(Optional) To access BigQuery datasets:
For more information, see BigQuery permissions
on the user account or service account
(Optional) To access Knowledge Catalog Lakes ( Preview ):
For more information, see Knowledge Catalog permissions
on the user account or service account
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Manage Dataproc Metastore access with Identity and Access Management .
Create a federation service
The following instructions show you how to create a federation service and
attach it to a source. After you complete these steps, you can attach your
federation service to a Managed Service for Apache Spark cluster.
To learn more about federation sources and their limitations, see metadata sources .
Note: Federation services are only available through gRPC endpoints.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Open Dataproc Metastore
In the Managed Service for Apache Spark navigation menu, click Federation .
The Federated metastore services page opens.
In the Federated metastore menu bar, click Create .
The Create federation service page opens.
In the Federation name field, enter a unique name for your service.
For more information, see Resource naming convention .
Select the Data location .
Make sure you create your federation service in the same regions of your
Dataproc Metastore sources.
Select the Hive Version .
To add a source for your federation service, click Add a Source .
You can add one or more sources. The first source that you add in this
list is automatically set as your primary metastore. You can update the
source ordering after creation.
For the Source type , select your federation source.
You can choose a Dataproc Metastore instance, a
project that contains one or more BigQuery datasets,
or a Knowledge Catalog lake ( Preview) ).
In the Source field, enter the following information:
For a Dataproc Metastore service .
In the Selected project field, click Browse and select
the project that contains the Dataproc Metastore you
want to use as a source.
Make sure your Dataproc Metastore sources are
using a Hive version that is compatible with your federation
service. Your primary metastore must use a Hive version that is
greater than or equal to your federation service.
In the Metastore service drop-down, select the
Dataproc Metastore that you want to use as a source.
(Optional) Select the Show Metastore services outside my
region checkbox. This lists Dataproc Metastore
service from other regions.
For BigQuery.
In the Selected project field, click Browse and select
the project ID of the project that contains the BigQuery Dataset.
For Knowledge Catalog ( Preview ).
In the Selected project field, click Browse and select
the project ID of the project that contains the Knowledge Catalog Lake.
Click Done .
To create and start the service, click Submit .
You can now attach your federation service to a Managed Service for Apache Spark cluster .
gcloud CLI
To create a federation with Dataproc Metastore, run the
following command.
gcloud metastore federations create FEDERATION \
--location LOCATION \
--backends RANK = BACKEND_METASTORE \
--hive-metastore-version HIVE_VERSION
Replace the following:
FEDERATION : The name of your
Dataproc Metastore federation service.
LOCATION : The Google Cloud region to create
the federation in.
RANK : A ranking number for each of your backend
metastores used to resolve database name collisions. The federation
service queries lower ranked numbers first. For example, a backend
metastore with a rank of 1 is queried before a metastore with a rank
of 2 . This value must be an integer. For example,
--backends 1=first_backend_metastore, 2=second_backend_metastore .
BACKEND_METASTORE : The relative resource of
each backend metastore in the following format:
METASTORE_TYPE:METASTORE_NAME . For Dataproc Metastore
services, use dpms:SERVICE_ID . The SERVICE_ID can be found in the
following location: projects/<project>/locations/<location>/services/<service-id> .
HIVE_VERSION : The version of Hive Metastore
(either 3.1.2 or 2.3.6).
Update a federation service
The following instructions show you how to update a federation service. You can
complete the following tasks:
Add a source to a federation service.
Remove a source from a federation service.
Change the source ordering of the sources contained in a federation service.
Delete a federation service permanently. After you delete a service, all of
its resources are released.
Console
https://cloud.google.com/dataproc-metastore/docs/create-federation
In the Google Cloud console, open the Dataproc Metastore page:
Open Dataproc Metastore
In the Managed Service for Apache Spark navigation menu, click Federation .
The Federated metastore services page opens.
On the Federated metastore services page, click the name of the
service name that you want to update.
The Service detail page opens.
In the menu bar, click Edit .
The Edit service page opens.
Choose the values that you want to update.
To update the service, click Submit .
gcloud CLI
To update a federation with Dataproc Metastore, run the
following command.
gcloud metastore federations update FEDERATATON \
--location = LOCATION \
--backends RANK1 = BACKEND_METASTORE1,RANK2 = BACKEND_METASTORE2
FEDERATION : The name of your
Dataproc Metastore federation service.
LOCATION : The Google Cloud region to create
the federation.
RANK : A ranking number for each of your backend
metastores used to resolve database name collisions. The federation
service queries lower ranked numbers first. For example, a backend
metastore with a rank of 1 is queried before a metastore with a rank
of 2 . This value must be an integer. For example,
--backends 2=first_backend_metastore, 2=second_backend_metastore .
BACKEND_METASTORE : The relative resource of
each backend metastore in the following format:
METASTORE_TYPE:METASTORE_NAME . For Dataproc Metastore
services, use dpms:SERVICE_ID . The SERVICE_ID can be found in the
following location: projects/<project>/locations/<location>/services/<service-id> .
HIVE_VERSION : The version of Hive Metastore
(either 3.1.2 or 2.3.6).
Attach a Managed Service for Apache Spark cluster to a federation service
The following instructions show you how to create a Managed Service for Apache Spark
cluster and attach a federation service endpoint as its metastore.
Before you start these instructions, complete all the steps listed in Before
you begin and create a federation
service .
gcloud CLI
To create a Managed Service for Apache Spark cluster and attach a federation endpoint,
run the following gcloud Managed Service for Apache Spark clusters create command.
Note: The following command doesn't support the --dataproc-metastore flag.
gcloud dataproc clusters create CLUSTER_NAME \
--region= LOCATION \
--project= PROJECT_ID \
--scopes=https://www.googleapis.com/auth/cloud-platform \
--image-version= IMAGE_VERSION \
--service-account= SERVICE_ACCOUNT \
--optional-components=DOCKER \
--initialization-actions=gs://metastore-init-actions/metastore-grpc-proxy/metastore-grpc-proxy.sh \
--metadata="proxy-uri= FEDERATION_URI ,hive-version= FEDERATION_VERSION " \
--properties="hive:hive.metastore.uris=thrift://localhost:9083,hive:hive.metastore.warehouse.dir= WAREHOUSE_DIR "
Replace the following:
CLUSTER_NAME : the name of your new Managed Service for Apache Spark
cluster.
PROJECT_ID : the Google Cloud project ID of the project you're
creating the Managed Service for Apache Spark cluster in.
LOCATION : the region of your
Managed Service for Apache Spark cluster.
IMAGE_VERSION : the Managed Service for Apache Spark
image version that you want to use.
Make sure the Managed Service for Apache Spark image that you're using in this
command is compatible with the Hive version used with your federation
service. For more information, see Managed Service for Apache Spark image version list .
SERVICE_ACCOUNT optional: the service account
that you're using to create your Managed Service for Apache Spark cluster.
If unspecified, the cluster uses your default Compute Engine service
account.
FEDERATION_URI : the endpoint URI of your
federation service.
FEDERATION_VERSION : the Hive version that your
federation service is using.
WAREHOUSE_DIR : the warehouse directory of your
primary Dataproc Metastore.
What's next
Create a service
Update and delete a service
Version policy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
