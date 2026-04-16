---
title: "Configure both private services access and Private Service Connect \_|\_ Cloud\
  \ SQL for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect
  title: "Configure both private services access and Private Service Connect \_|\_\
    \ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Configure both private services access and Private Service Connect
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to configure both private services access and Private Service Connect .
By configuring private services access , you can allocate an IP address range and create a private service connection for the Virtual Private Cloud (VPC) network in your Google Cloud project. This allows resources in the VPC network to connect to your Cloud SQL instances.
By configuring Private Service Connect , you can connect to either a primary Cloud SQL instance or any of its read replicas from multiple VPC networks that belong to different groups, teams, projects, or organizations.
Create a instance that supports private services access and Private Service Connect
By creating a Cloud SQL instance that supports both private services access and Private Service Connect, you get the benefits of both services. For more information, see Connection options for instances .
By using Private Service Connect, you can connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations.
You can create a Cloud SQL instance that supports private services access and Private Service Connect by using gcloud CLI or the API.
Note: Private Service Connect
endpoints are internal IP addresses in a VPC network, which clients
in that network can access directly. Clients can use these endpoints to connect to Cloud SQL instances. You can either have Cloud SQL create endpoints automatically in your VPC network or you can create the endpoints manually. For more information, see Create a Private Service Connect endpoint .
gcloud
To create an instance that supports both private services access and Private Service Connect, use the gcloud sql instances create command:
gcloud sql instances create INSTANCE_NAME \
--project = PROJECT_ID \
--region = REGION_NAME \
--enable-private-service-connect \
--allowed-psc-projects = ALLOWED_PROJECTS \
--availability-type = AVAILABILITY_TYPE \
--no-assign-ip \
--allocated-ip-range-name = RANGE_NAME \
--enable-google-private-path \
--tier = MACHINE_TYPE \
--database-version = DATABASE_VERSION \
--network = VPC_PSA_NETWORK_PATH \
--enable-bin-log \
--psc-auto-connections = network = VPC_PSC_NETWORK_PATH ,project = SERVICE_PROJECT
Make the following replacements:
INSTANCE_NAME : the name of the instance.
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
REGION_NAME : the region name for the instance.
ALLOWED_PROJECTS : a list of allowed project IDs or numbers, separated by commas. If a project isn't contained in this list, then you can't create Private Service Connect endpoints in the project to connect to the instance.
AVAILABILITY_TYPE : enable high availability for the instance. For this parameter, specify one of the following values:
REGIONAL : enable high availability and is recommended for production instances. The instance fails over to another zone within your selected region.
ZONAL : provide no failover capability. This is the default value.
For more information about setting and removing high availability for instances, see Configure an existing instance for high availability and Deactivate high availability for an instance .
RANGE_NAME : for this optional parameter, set a range name for
which an IP range is allocated. The range name must comply with
RFC 1035 and
contain from 1 to 63 characters.
MACHINE_TYPE : the machine type for the instance.
DATABASE_VERSION : the database version for the instance (for example, MYSQL_8_0 ).
VPC_PSA_NETWORK_PATH : the name and path of the VPC network to which the instance connects (for example, "projects/ PROJECT_ID /global/networks/default" ). This network is used
for private services access connections and the private services access IP
address for the Cloud SQL instance.
VPC_PSC_NETWORK_PATH : the path to the VPC network from where the Private Service Connect endpoint needs to be created. For example: projects/my-host-project/global/networks/default .
SERVICE_PROJECT : the project where the Private Service Connect endpoint is created. If the VPC network isn't a shared VPC, then this can only be the host project for the network. If this is a shared VPC, then this can be either the host project or the service project.
Note: If you want Cloud SQL to create the Private Service Connect endpoint automatically , then you
must use the psc-auto-connections line of code. Otherwise, you
don't need it. Also, before you create your instance, you must create a service connection policy .
To learn how to connect to an instance that has Private Service Connect enabled for it, see Connect to a Cloud SQL instance .
To deactivate public IP, use the --no-assign-ip parameter.
Also, optionally, use the --enable-google-private-path parameter to allow other Google Cloud services such as
BigQuery to access data in Cloud SQL and make queries against this
data over a private IP connection. This parameter is valid only if:
You use the --no-assign-ip parameter.
You use the --network parameter to specify the name of the
VPC network that you want to use to create a private connection.
Note: After you create an instance, you can't
assign an allocated range name for that instance. After you assign a range to an
instance, you can't modify the range.
Terraform
To create an instance with both private services access and
Private Service Connect enabled, use the
google_sql_database_instance Terraform resource .
resource "google_compute_network" "peering_network" {
name = "private-network"
auto_create_subnetworks = "false"
}
resource "google_compute_global_address" "private_ip_address" {
name = "private-ip-address"
purpose = "VPC_PEERING"
address_type = "INTERNAL"
prefix_length = 16
network = google_compute_network.peering_network.id
}
resource "google_service_networking_connection" "default" {
network = google_compute_network.peering_network.id
service = "servicenetworking.googleapis.com"
reserved_peering_ranges = [google_compute_global_address.private_ip_address.name]
}
resource "google_sql_database_instance" "default" {
name = "mysql-instance"
region = "us-central1"
database_version = "MYSQL_8_0"
depends_on = [google_service_networking_connection.default]
settings {
tier = "db-f1-micro"
ip_configuration {
psc_config {
psc_enabled = true
allowed_consumer_projects = [] # Add consumer project IDs here.
}
ipv4_enabled = false
private_network = google_compute_network.peering_network.id
}
}
}
resource "google_compute_network_peering_routes_config" "peering_routes" {
peering = google_service_networking_connection.default.peering
network = google_compute_network.peering_network.name
import_custom_routes = true
export_custom_routes = true
}
resource "google_compute_address" "default" {
name = "psc-compute-address-${google_sql_database_instance.default.name}"
region = "us-central1"
address_type = "INTERNAL"
subnetwork = "default" # Replace value with the name of the subnet here.
address = "192.168.0.43" # Replace value with the IP address to reserve.
}
data "google_sql_database_instance" "default" {
name = resource.google_sql_database_instance.default.name
}
resource "google_compute_forwarding_rule" "default" {
name = "psc-forwarding-rule-${google_sql_database_instance.default.name}"
region = "us-central1"
network = "default"
ip_address = google_compute_address.default.self_link
load_balancing_scheme = ""
target = data.google_sql_database_instance.default.psc_service_attachment_link
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
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
INSTANCE_NAME : the name of the instance.
REGION_NAME : the region name for the instance.
AVAILABILITY_TYPE : enable high availability for the instance. For this parameter, specify one of the following values:
REGIONAL : enable high availability and is recommended for production instances. The instance fails over to another zone within your selected region.
ZONAL : provide no failover capability. This is the default value.
For more information about setting and removing high availability for instances, see Configure an existing instance for high availability and Deactivate high availability for an instance .
VPC_PSA_NETWORK_PATH : the path of the VPC network to which the
instance connects (for example, "projects/ PROJECT_ID /global/networks/default" ). This network is used
for private services access connections and the private services access IP
address for the Cloud SQL instance.
RANGE_NAME : for this optional parameter, set a range name for
which an IP range is allocated. The range name must comply with
RFC 1035 and
contain from 1 to 63 characters.
ALLOWED_PROJECTS : a list of allowed project IDs or numbers, separated by commas. If a project isn't contained in this list, then you can't create Private Service Connect endpoints in the project to connect to the instance.
VPC_PSC_NETWORK_PATH : the path to the VPC network from where the Private Service Connect endpoint needs to be created. For example: projects/my-host-project/global/networks/default .
SERVICE_PROJECT : the project where the Private Service Connect endpoint is created. If the VPC network isn't a shared VPC, then this can only be the host project for the network. If this is a shared VPC, then this can be either the host project or the service project.
Note: If you want Cloud SQL to create the Private Service Connect endpoint automatically , then you
must use the pscAutoConnections section of code. Otherwise, you
don't need it. Also, before you create your instance, you must create a service connection policy .
MACHINE_TYPE : the machine type for the instance.
To learn how to connect to an instance that has Private Service Connect enabled for it, see Connect to a Cloud SQL instance .
You set the ipv4Enabled parameter to false because your instance has an internal IP address.
If you set the optional enablePrivatePathForGoogleCloudServices parameter to true , then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over an internal IP connection. By setting this parameter to false , other Google Cloud services can't access data in Cloud SQL over an internal IP connection.
Note: After you create an instance, you can't
assign an allocated range name for that instance. After you assign a range to an
instance, you can't modify the range.
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances
Request JSON body:
{
"name": " INSTANCE_NAME ",
"project": PROJECT_ID ",
"region": " REGION_NAME ",
"databaseVersion": "MYSQL_8_0",
"kind": "sql#instance",
"settings": {
"availabilityType": " AVAILABILITY_TYPE ",
"backupConfiguration": {
"binaryLogEnabled": true,
"enabled": true,
"kind": "sql#backupConfiguration",
"startTime": "00:00"
},
"ipConfiguration": {
"ipv4Enabled": false,
"privateNetwork": VPC_PSA_NETWORK_PATH ,
"allocatedIpRange": " RANGE_NAME ",
"enablePrivatePathForGoogleCloudServices": true,
"pscConfig": {
"allowedConsumerProjects": [
" ALLOWED_PROJECTS "
],
"pscAutoConnections": [
{
"consumerProject":" SERVICE_PROJECT ",
"consumerNetwork":"projects/ SERVICE_PROJECT /global/networks/ VPC_PSC_NETWORK_PATH "
}
],
"pscEnabled": true
}
},
"kind": "sql#settings",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"tier": " MACHINE_TYPE "
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME ",
"status": "RUNNING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"startTime": "2023-06-14T18:48:35.499Z",
"operationType": "CREATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_NAME ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Deactivate Private Service Connect for an instance
You can deactivate Private Service Connect for an instance that has both private services access and Private Service Connect enabled for it.
When you deactivate Private Service Connect for the instance, you
can expect this operation to take 8 minutes with approximately 45 seconds of
downtime on your instance. After the operation is complete, both private
services access and Private Service Connect connectivity paths no
longer co-exist on the same instance. You can't connect to the instance by using Private Service Connect.
You can deactivate Private Service Connect for an instance by using gcloud CLI or the API.
gcloud
To deactivate Private Service Connect for an instance, use the gcloud sql instances patch command:
gcloud sql instances patch INSTANCE_NAME \
--project = PROJECT_ID \
--no-enable-private-service-connect \
--clear-allowed-psc-projects
Make the following replacements:
INSTANCE_NAME : the name of the instance
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
Terraform
To deactivate Private Service Connect for an instance, use the
google_sql_database_instance Terraform resource .
resource "google_sql_database_instance" "disable_psc_example" {
name = "mysql-disable-psc-example"
region = "us-central1"
database_version = "MYSQL_8_0"
depends_on = [google_service_networking_connection.default]
settings {
tier = "db-f1-micro"
ip_configuration {
psc_config {
psc_enabled = false
allowed_consumer_projects = [] # clear consumer projects
}
ipv4_enabled = false
private_network = google_compute_network.peering_network.id
}
}
# set `deletion_protection` to true, will ensure that one cannot accidentally delete this instance by
# use of Terraform whereas `deletion_protection_enabled` flag protects this instance at the GCP level.
deletion_protection = false
}
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
INSTANCE_NAME : the name of the instance
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME
Request JSON body:
{
"kind": "sql#instance",
"name": " INSTANCE_NAME ",
"project": " PROJECT_ID ",
"settings": {
"ipConfiguration": {
"pscConfig": {
"pscEnabled": "false",
"allowedConsumerProjects": [{}]
}
},
"kind": "sql#settings"
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME ",
"status": "RUNNING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"startTime": "2023-06-14T18:48:35.499Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_NAME ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Enable Private Service Connect for an instance
You can enable Private Service Connect for an instance that has private services access already enabled for it. You can use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks.
When you enable Private Service Connect for the instance, you
can expect this operation to take 8 minutes with approximately 45 seconds of
downtime on your instance. After the operation is complete, both private
services access and Private Service Connect connectivity paths
co-exist on the same instance.
You can enable Private Service Connect for an instance by using gcloud CLI or the API.
gcloud
To enable Private Service Connect for an instance, use the gcloud sql instances patch command:
gcloud sql instances patch INSTANCE_NAME \
--project = PROJECT_ID \
--enable-private-service-connect \
--allowed-psc-projects = ALLOWED_PROJECTS \
--psc-auto-connections = network = VPC_PSC_NETWORK_PATH ,project = SERVICE_PROJECT
Make the following replacements:
INSTANCE_NAME : the name of the instance
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
ALLOWED_PROJECTS : a list of allowed project IDs or numbers, separated by commas. If a project isn't contained in this list, then you can't create Private Service Connect endpoints in the project to connect to the instance.
VPC_PSC_NETWORK_PATH : the path to the VPC network from where the Private Service Connect endpoint is created. For example: projects/my-host-project/global/networks/default .
SERVICE_PROJECT : the project where the Private Service Connect endpoint is created. If the VPC network isn't a shared VPC, then this can only be the host project for the network. If this is a shared VPC, then this can be either the host project or the service project.
Note: If you want Cloud SQL to create the Private Service Connect endpoint automatically , then you
must use the psc-auto-connections line of code. Otherwise, you
don't need it. Also, before you can create the endpoint automatically, you must create a service connection policy .
Important: If you want to connect to a Cloud SQL instance with Private Service Connect enabled by using a DNS name , then you must rotate the server CA certificate . After the rotation of this certificate is complete, Cloud SQL adds the DNS name to the certificate, and you can use the DNS name for server identity verification.
To learn how to connect to an instance that has Private Service Connect enabled for it, see Connect to a Cloud SQL instance .
Terraform
To enable Private Service Connect for an instance, use the
google_sql_database_instance Terraform resource .
resource "google_sql_database_instance" "default" {
name = "mysql-instance"
region = "us-central1"
database_version = "MYSQL_8_0"
depends_on = [google_service_networking_connection.default]
settings {
tier = "db-f1-micro"
ip_configuration {
psc_config {
psc_enabled = true
allowed_consumer_projects = [] # Add consumer project IDs here.
}
ipv4_enabled = false
private_network = google_compute_network.peering_network.id
}
}
}
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
INSTANCE_NAME : the name of the instance.
ALLOWED_PROJECTS : a list of allowed project IDs or numbers, separated by commas. These projects override projects that are already configured to use Private Service Connect. If a project isn't contained in this list, then you can't create Private Service Connect endpoints in the project to connect to the instance.
VPC_PSC_NETWORK_PATH : the path to the VPC network from where the Private Service Connect endpoint is created. For example: projects/my-host-project/global/networks/default .
SERVICE_PROJECT : the project where the Private Service Connect endpoint is created. If the VPC network isn't a shared VPC, then this can only be the host project for the network. If this is a shared VPC, then this can be either the host project or the service project.
Note: If you want Cloud SQL to create the Private Service Connect endpoint automatically , then you
must use the pscAutoConnections section of code. Otherwise, you
don't need it. Also, before you can create the endpoint automatically, you must create a service connection policy .
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME
Request JSON body:
{
"kind": "sql#instance",
"name": " INSTANCE_NAME ",
"project": " PROJECT_ID ",
"settings": {
"ipConfiguration": {
"pscConfig": {
"pscAutoConnections": [
{
"consumerProject":" SERVICE_PROJECT ",
"consumerNetwork":"projects/ SERVICE_PROJECT /global/networks/ VPC_PSC_NETWORK_PATH "
}
],
"pscEnabled": "true",
"allowedConsumerProjects": [ ALLOWED_PROJECTS ]
}
},
"kind": "sql#settings"
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME ",
"status": "RUNNING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"startTime": "2023-06-14T18:48:35.499Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_NAME ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Important: If you want to connect to a Cloud SQL instance with Private Service Connect enabled by using a DNS name , then you must rotate the server CA certificate . After the rotation of this certificate is complete, Cloud SQL adds the DNS name to the certificate, and you can use the DNS name for server identity verification.
To learn how to connect to an instance that has Private Service Connect enabled for it, see Connect to a Cloud SQL instance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
