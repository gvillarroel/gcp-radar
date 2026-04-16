---
title: "Configure Dataproc Hub \_|\_ Managed Service for Apache Spark \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/tutorials/dataproc-hub-admins
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/tutorials/dataproc-hub-admins
  title: "Configure Dataproc Hub \_|\_ Managed Service for Apache Spark \_|\_ Google\
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
Send feedback
Configure Dataproc Hub
Stay organized with collections
Save and categorize content based on your preferences.
Dataproc Hub and
Vertex AI Workbench user-managed notebooks are
deprecated. On January 30, 2025, support for user-managed notebooks
will end and the ability to create user-managed notebooks instances
will be removed. For alternative notebook solutions on Google Cloud, see:
Install
the Jupyter component on your Managed Service for Apache Spark cluster .
Create
a Managed Service for Apache Spark-enabled
Vertex AI Workbench instance .
Dataproc Hub is a customized JupyterHub server.
Admins configure and create Dataproc Hub instances that can spawn single-user
Managed Service for Apache Spark clusters to host Jupyter and JupyterLab notebook environments (see Use Dataproc Hub ).
Launch Notebooks for multiple users. You can create a Managed Service for Apache Spark-enabled
Vertex AI Workbench instance
or install the Managed Service for Apache Spark JupyterLab plugin
on a VM to to serve notebooks to multiple users.
Objectives
Define a Managed Service for Apache Spark cluster configuration (or use one
of the predefined config files).
Set Dataproc Hub instance environment variables.
Create a Dataproc Hub instance.
Before you begin
If you haven't already done so, create a Google Cloud project and a Cloud Storage bucket.
Setting up your project
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
Enable the Dataproc, Compute Engine, and Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Enable the Dataproc, Compute Engine, and Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Creating a Cloud Storage bucket
in your project to hold the data used in this tutorial.
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click add_box Create .
On the Create a bucket page, enter your bucket information. To go to the next
step, click Continue .
In the Get started section, do the following:
Enter a globally unique name that meets the
bucket naming requirements .
To add a
bucket label ,
expand the Labels section ( expand_more ),
click add_box
Add label , and specify a key and a value for your label.
In the Choose where to store your data section, do the following:
Select a Location type .
Choose a location where your bucket's data is permanently stored from the Location type drop-down menu.
If you select the dual-region location type, you can
also choose to enable turbo replication by using the
relevant checkbox.
To set up cross-bucket replication , select
Add cross-bucket replication via Storage Transfer Service and
follow these steps:
Set up cross-bucket replication
In the Bucket menu, select a bucket.
In the Replication settings section,
click Configure to configure settings for the
replication job.
The Configure cross-bucket replication pane
appears.
To filter objects to replicate by object name prefix,
enter a prefix that you want to include or exclude objects from, then click add
Add a prefix .
To set a storage class for the replicated objects,
select a storage class from the Storage class menu.
If you skip this step, the replicated objects will use the
destination bucket's storage class by default.
Click Done .
In the Choose how to store your data section, do the following:
Select a default storage class for the bucket or
Autoclass for automatic storage class management of your
bucket's data.
To enable hierarchical namespace , in the
Optimize storage for data-intensive workloads section, select
Enable hierarchical namespace on this bucket .
Note: You cannot enable hierarchical namespace in existing
buckets.
In the Choose how to control access to objects section, select
whether or not your bucket enforces public access prevention ,
and select an access control method for your bucket's objects.
Note: You cannot change the Prevent public access setting if this setting is enforced at an organization policy .
In the Choose how to protect object data section, do the
following:
Select any of the options under Data protection that you
want to set for your bucket.
To enable soft delete , click the
Soft delete policy (For data recovery) checkbox,
and specify the number of days you want to retain objects
after deletion.
To set Object Versioning , click the
Object versioning (For version control) checkbox,
and specify the maximum number of versions per object and the number of days after which
the noncurrent versions expire.
To enable the retention policy on objects and buckets, click the Retention (For compliance) checkbox, and then do the following:
To enable Object Retention Lock , click the
Enable object retention checkbox.
To enable Bucket Lock , click the Set bucket retention policy checkbox, and choose a unit of time and a length of time for your retention period.
To choose how your object data will be encrypted, expand the
Data encryption section ( expand_more ), and select a
Data encryption method .
Click Create .
Define a cluster configuration
A Dataproc Hub instance creates a cluster from configuration values
contained in a YAML cluster configuration file.
Predefined cluster configs:
You can use the following predefined config files located in
Cloud Storage:
example-cluster config: Sets up a standard Jupyter component
cluster with one master and 2 worker nodes
example-single-node config: Sets up a Jupyter component
cluster with one node
To view these public Cloud Storage config files, run:
gcloud storage cat gs://dataproc-spawner-dist/example-configs/example-cluster.yaml
gcloud storage cat gs://dataproc-spawner-dist/example-configs/example-single-node.yaml
Create a quickstart hub. To create a hub using the
predefined cluster configs, skip to
Create a Managed Service for Apache Spark Hub
instance . The Cloud Storage location of the
predefined cluster configs listed above is the default value of the
DATAPROC_CONFIGS environment variable field.
Your cluster configuration can specify any feature or component available
to Managed Service for Apache Spark clusters (such as machine type, initialization
actions, and optional components). The cluster image version must be
1.4.13 or higher. Attempting to spawn a cluster with an image version lower
than 1.4.13 will cause an error and fail.
Note: Admins can allow users to override some of the predefined cluster configuration
parameters. For more information, see DATAPROC_ALLOW_CUSTOM_CLUSTERS in
Set Dataproc Hub instance environment values .
Sample YAML cluster configuration file
clusterName: cluster-name
config:
softwareConfig:
imageVersion: 2.2-ubuntu22
optionalComponents:
- JUPYTER
Each configuration must be saved in Cloud Storage .
You can create and save multiple configuration files to give
users a choice when they
use Dataproc Hub
to create their Managed Service for Apache Spark cluster notebook environment.
There are two ways to create a YAML cluster configuration file:
Create YAML cluster configuration file from the console
Export a YAML cluster configuration file from an existing cluster
Create YAML cluster configuration file from the console
Open the Create a cluster page
in the Google Cloud console, then select and fill in the fields to
specify the type of cluster the Dataproc Hub will spawn for users.
The region and zone settings will be overridden when the
user's cluster is spawned: the spawned cluster's region will be
the region where the Dataproc Hub is located, and the user will select
a zone within this region.
At the bottom of the left panel, select "Equivalent REST".
Copy the generated JSON block, excluding the leading POST request line,
then paste the JSON block into an online JSON-to-YAML
converter (search online for "Convert JSON to YAML").
Some JSON to YAML converters generate a first line containing "---".
The inclusion of this line in the YAML file is optional.
Copy the converted YAML into a local cluster-config-filename .yaml file.
Export a YAML cluster configuration file from an existing cluster
Create a cluster that matches your
requirements.
Export the cluster configuration to a local cluster-config-filename .yaml file.
gcloud dataproc clusters export cluster-name \
--destination cluster-config-filename .yaml \
--region region
Save the YAML configuration file in Cloud Storage
Copy your local YAML cluster configuration file to your
Cloud Storage bucket.
gcloud storage cp cluster-config-filename .yaml gs:// bucket-name /
Set Dataproc Hub instance environment variables
The administrator can set the hub environment variables listed in the table, below,
to set attributes of the Managed Service for Apache Spark clusters that will be
spawned by hub users.
Note: If hub environment variables are not set, Managed Service for Apache Spark
will use default values, including setting DATAPROC_CONFIGS
to the Cloud Storage location of the predefined cluster configs (see
Define a cluster configuration ).
Variable
Description
Example
NOTEBOOKS_LOCATION
Cloud Storage bucket or bucket folder that contains user notebooks. The
`gs://` prefix is optional. Default: The
Managed Service for Apache Spark staging bucket .
gs:// bucket-name /
DATAPROC_CONFIGS
Comma delimited list of strings of the Cloud Storage paths to
YAML cluster config files . The `gs://`
prefix is optional. Default: gs://dataproc-spawner-dist/example-configs/ . which contains predefined example-cluster.yaml and example-single-node.yaml .
gs:// cluster-config-filename .yaml
DATAPROC_LOCATIONS_LIST
Zone suffixes in region where the Dataproc Hub instance
is located. Users can select one of these zones as the zone where their
Managed Service for Apache Spark cluster will be spawned. Default: "b".
b,c,d
DATAPROC_DEFAULT_SUBNET
Subnet on which Dataproc Hub instance will spawn Managed Service for Apache Spark
clusters.
Default: the Dataproc Hub instance subnet.
https://www.googleapis.com/compute/v1/projects/ project-id /regions/ region /subnetworks/ subnet-name
DATAPROC_SERVICE_ACCOUNT
Service account
that Managed Service for Apache Spark VMs will run as. Default: If not set, the
default Managed Service for Apache Spark service account
is used.
service-account @ project-id .iam.gserviceaccount.com
SPAWNER_DEFAULT_URL
Whether to show the Jupyter or JupyterLab UI on spawned
Managed Service for Apache Spark clusters by default.
Default: "/lab".
`/` or `/lab`, for Jupyter or JupyterLab, respectively.
DATAPROC_ALLOW_CUSTOM_CLUSTERS
Whether to allow users to customize their Managed Service for Apache Spark clusters.
Default: false.
"true" or "false"
DATAPROC_MACHINE_TYPES_LIST
List of machine types that users are allowed to choose for their spawned
Managed Service for Apache Spark clusters, if cluster customization
(DATAPROC_ALLOW_CUSTOM_CLUSTERS) is enabled.
Default: empty (all machine types are allowed).
n1-standard-4,n1-standard-8,e2-standard-4,n1-highcpu-4
NOTEBOOKS_EXAMPLES_LOCATION
Cloud Storage path to notebooks bucket or bucket folder to be
downloaded to the spawned Managed Service for Apache Spark cluster
when the cluster starts.
Default: empty.
gs:// bucket-name /
Setting hub environment variables
There are two ways to set hub environment variables:
Set hub environment variables from the console
Set hub environment variables in a text file
Set hub environment variables from the console
When you create a Dataproc Hub instance
from the User-Managed Notebooks tab on the
Dataproc→Workbench
page in the Google Cloud console, you can click the Populate
button to open a Populate Dataproc Hub form that allows you to set each
environment variable.
Set hub environment variables in a text file
Create the file. You can use a text editor to set
Dataproc Hub instance environment variables in a local file.
Alternatively, you can create the file by running the following command
after filling in placeholder values and changing or adding variables and their values.
cat <<EOF > environment-variables-file
DATAPROC_CONFIGS=gs:// bucket / cluster-config-filename.yaml
NOTEBOOKS_LOCATION=gs:// bucket /notebooks
DATAPROC_LOCATIONS_LIST=b,c
EOF
Save the file in Cloud Storage. Copy your local
Dataproc Hub instance environment variables
file to your Cloud Storage bucket.
gcloud storage cp environment-variable-filename gs:// bucket-name / folder-name/
Set Identity and Access Management (IAM) roles
Dataproc Hub includes the following identities with the
following abilities:
Administrator: creates a Dataproc Hub instance
Data and ML user: accesses the Dataproc Hub UI
Dataproc Hub service account: represents Dataproc Hub
Managed Service for Apache Spark service account: represents the Managed Service for Apache Spark cluster that
Dataproc Hub creates.
Each identity requires specific roles or permissions to perform their associated
tasks. The table below summarizes IAM roles and permissions required by each
identity.
Identity
Type
Role or permission
Dataproc Hub administrator
User or Service account
roles/notebooks.admin
Dataproc Hub user
User
notebooks.instances.use ,
dataproc.clusters.use
Dataproc Hub
Service account
roles/dataproc.hubAgent
Dataproc
Service account
roles/dataproc.worker
By default, the Dataproc Hub instance
and Managed Service for Apache Spark cluster nodes run as the project
default Compute Engine service account .
Create a Dataproc Hub instance
Before you begin: To create a Managed Service for Apache Spark Hub instance
from the Google Cloud console, your user account must have
compute.instances.create permission. Also, the service account of the
instance—the Compute Engine default service account or your
user-specified service account listed in
IAM & admin > Service Accounts (see
Managed Service for Apache Spark VM service account )— must have iam.serviceAccounts.actAs
permission.
Go to the
Dataproc→Workbench
page in the Google Cloud console, then select the User-Managed Notebooks
tab.
If not pre-selected as a filter, click in the Filter box, then select **Environment:Dataproc Hub"".
Click New Notebook→Dataproc Hub .
On the Create a user-managed notebook page, provide the following information:
Notebook name : Dataproc Hub instance name.
Region : Select a region
for the Dataproc Hub instance. Managed Service for Apache Spark
clusters spawned by this Dataproc Hub instance will also be
created in this region.
For best performance, select a geographically
close region.
Zone : Select a zone within the selected region.
Environment:
Environment : Select Dataproc Hub .
Select a script to run after creation (optional): You can insert or
browse and select an
initialization action
script or executable to run on the spawned Managed Service for Apache Spark cluster.
Populate Dataproc Hub (optional) : Click Populate to open a form that
allows you to set each of the hub environment variables (see
Set Dataproc Hub instance environment variables
for a description of each variable). Managed Service for Apache Spark uses
default values for any unset environment variables. As an alternative,
you can set Metadata key:value pairs to set environment variables
(see next item).
Metadata :
If you created a text file that
contains your hub environment variable settings (see
Setting hub environment variables ),
provide the name of the file as the key and the gs:// bucket-name / folder-name / environment-variable-filename
Cloud Storage location of the file as the value .
Managed Service for Apache Spark uses default values for any unset
environment variables.
Machine configuration:
Machine Type : Select the Compute Engine machine type .
Set other machine configuration options.
Other Options :
You can expand and set or replace default values in the Disks ,
Networking , Permission , Security , and Environment upgrade and system health
sections.
Click Create to launch the Dataproc Hub instance.
The Open JupyterLab link for the Dataproc Hub instance becomes
active after the instance is created. Users click this link to open the
JupyterHub server page to configure and create a Managed Service for Apache Spark JupyterLab
cluster (see Use Dataproc Hub ).
Clean up
Delete the Dataproc Hub instance
To delete your Dataproc Hub instance:
gcloud compute instances delete --project=${PROJECT} ${INSTANCE_NAME}
Delete the bucket
To delete the Cloud Storage bucket you created in
Before you begin , including the data files
stored in the bucket:
gcloud storage rm gs://${BUCKET_NAME} --recursive
What's next
Use Dataproc Hub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
