---
title: "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for MySQL\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/connect-connectors
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect
  title: "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\
    \ MySQL \_|\_ Google Cloud Documentation"
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
Connect to an instance using Private Service Connect
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to use Private Service Connect to connect to a
Cloud SQL instance.
You can use Private Service Connect to connect to either a primary Cloud SQL instance or any of its read replicas from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.
Before you begin
Support for using Private Service Connect with a Cloud SQL instance is available for gcloud CLI versions 416.0.0 and later.
User roles
The following table provides information about the roles required to use Private Service Connect with a Cloud SQL instance:
Role
Description
compute.networkAdmin
Grants full control over the VPC network that initiates a connection to a Cloud SQL instance. You can create and manage IP addresses, firewall rules, service connection policies, and Private Service Connect endpoints .
If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator.
dns.admin
Grants full control over Cloud DNS resources, including DNS zones and records.
cloudsql.admin
Provides full control of a Cloud SQL instance and controls the instance over its lifecycle.
cloudsql.instanceUser
Provides access to the Cloud SQL instance. If you connect through the Cloud SQL Auth Proxy client, then you must have the Cloud SQL Client role . If you connect directly, then you don't need any Identity and Access Management (IAM) roles and permissions .
Create a Private Service Connect endpoint
Private Service Connect endpoints are internal IP addresses in a
consumer VPC network, which clients in that network can access
directly. Clients can use these endpoints to connect to Cloud SQL
instances.
You can either have Cloud SQL
create a Private Service Connect endpoint automatically
in your VPC, or you can
create the endpoint manually .
Create the endpoint automatically
To have Cloud SQL create the Private Service Connect endpoint
automatically, do the following:
Create a service connection policy
in your VPC network. With this policy, you can provision
Private Service Connect endpoints automatically.
Create a Cloud SQL instance
with Private Service Connect enabled for the instance, and configure
the instance to create Private Service Connect endpoints automatically.
Retrieve the endpoint for the instance . This
lets you use the endpoint to connect to the instance.
Create a service connection policy
A service connection policy lets you authorize a specified service class to create a Private Service Connect endpoint in your consumer VPC network. You can use the service connection policy to let Cloud SQL create Private Service Connect endpoints automatically.
You can create a service connection policy by using the Google Cloud console, gcloud CLI , or the API.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service
Connect
Click the Connection Policies tab.
Click Create connection policy .
Enter a Name for the connection policy.
Specify the service class by doing the following:
For Source service class , select Google services .
From the Service class menu, select google-cloud-sql because Cloud SQL is the managed service for the connection policy.
In the Target endpoints scope section, select a Network and
Region to which this policy applies.
In the Policy section, select one or more subnets from the
Subnetworks menu. The subnets are used to allocate IP addresses for
endpoints.
Optional: Specify a Connection limit for the policy. The limit
determines how many endpoints can be created by using this connection
policy. If you don't specify a connection limit, then there's no limit.
Click Create policy .
gcloud
To create a service connection policy, use the
service-connection-policies create command .
gcloud network-connectivity service-connection-policies create POLICY_NAME \
--network= NETWORK \
--project= PROJECT_ID \
--region= REGION \
--service-class= SERVICE_CLASS \
--subnets=https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNETS \
--psc-connection-limit= LIMIT \
--description=" DESCRIPTION " \
--producer-instance-location= PRODUCER_INSTANCE_LOCATION \
--allowed-google-producers-resource-hierarchy-level= RESOURCE_HIERARCHY_LEVEL
Replace the following:
POLICY_NAME : the name of your service connection
policy.
NETWORK : the network to which this policy applies.
PROJECT_ID : the project ID or number of the
VPC network's project. For Shared VPC networks,
you must deploy service connection policies in the host project because these
policies aren't supported in service projects.
REGION : the region to which this policy applies. The
same policy must exist for every region in which you want to automate
service connectivity.
SERVICE_CLASS : the producer-supplied resource
identifier of the service class. For Cloud SQL, the service class is google-cloud-sql .
SUBNETS : one or more
regular consumer subnets that are used to
allocate IP addresses for Private Service Connect endpoints. These
IP addresses are allocated automatically and returned to the subnet's pool
as managed service instances are created and deleted. The
subnets must be in the same region as the service connection policy. If multiple connection policies
share the same region, then you can
reuse the same subnetwork in these policies. You can enter multiple subnets in a comma-separated
list.
LIMIT : the maximum number of endpoints that you can create by using this policy. If you don't specify a limit, then there's no limit.
DESCRIPTION : an optional description of the
service connection policy.
PRODUCER_INSTANCE_LOCATION : use this optional flag
to specify whether to authorize a custom hierarchy of the locations for a
Cloud SQL instance. You can set the value of PRODUCER_INSTANCE_LOCATION to only one of the following:
custom-resource-hierarchy-levels : the instance must be located in one of the projects, folders, or organizations that you provide as a value for the allowed-google-producers-resource-hierarchy-level parameter.
none : the instance is in the same project as the service connection policy.
RESOURCE_HIERARCHY_LEVEL : a list of projects,
folders, or organizations where the instance is located. This list is in the form of
projects/ PROJECT_ID , folders/ FOLDER_ID , or organizations/ ORGANIZATION_ID .
For example, the following command creates a service connection policy
for the google-cloud-sql service class that allocates IP
addresses from the managed-services subnet. A maximum of 10 Private Service Connect endpoints can be created by using
this policy. The endpoints must be created in projects that are in the same
organization as the managed service instance. The Cloud SQL instance is located in the myproject project.
gcloud network-connectivity service-connection-policies create cloud-sql-policy \
--network=default \
--project=my-project \
--region=us-central1 \
--service-class=google-cloud-sql \
--subnets=managed-service-subnet \
--psc-connection-limit=10 \
--producer-instance-location=custom-resource-hierarchy-levels \
--allowed-google-producers-resource-hierarchy-level=projects/myproject
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your project.
REGION : the region of your service connection policy.
POLICY_NAME : the name of your service connection policy.
DESCRIPTION : an optional description of your service connection policy.
NETWORK : the network of your service connection policy.
LIMIT : the maximum number of endpoints that you can create by using this policy. If you don't specify a limit, then there's no limit.
SUBNETS : one or more regular consumer subnets that are used to allocate IP addresses for Private Service Connect endpoints. These IP addresses are allocated automatically and returned to the subnet's pool as managed service instances are created and deleted. The subnets must be in the same region as the service connection policy. If multiple connection policies
share the same region, then you can
reuse the same subnetwork in these policies. You can enter multiple subnets in a comma-separated
list.
SERVICE_CLASS : the producer-supplied resource identifier of the service class.
HTTP method and URL:
POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY_NAME
Request JSON body:
{
"description": " DESCRIPTION ",
"network": "projects/ PROJECT_ID /global/networks/ NETWORK ",
"pscConfig": {
"limit": " LIMIT ",
"subnetworks": [
"projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNET "
]
},
"serviceClass": " SERVICE_CLASS "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ REGION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata",
"createTime": "2023-08-15T16:59:29.236110917Z",
"target": "projects/ PROJECT_ID /locations/ REGION /serviceConnectionPolicies/ POLICY_NAME ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
Create a Cloud SQL instance
You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.
Note: After you create the instance, a Private Service Connect endpoint is automatically created in the VPC networks that you specify. However, the endpoint might not be created because of reasons such as the specified network doesn't exist, there's no valid service connection policy, or there aren't any available IP addresses. If this occurs, then the endpoint won't be created. Optionally, you can create Private Service Connect endpoints manually .
gcloud
To create an instance with Private Service Connect enabled for the instance, use the gcloud sql instances create command:
gcloud sql instances create INSTANCE_NAME \
--project = PROJECT_ID \
--region = REGION_NAME \
--enable-private-service-connect \
--allowed-psc-projects = ALLOWED_PROJECTS \
--availability-type = AVAILABILITY_TYPE \
--no-assign-ip \
--tier = MACHINE_TYPE \
--database-version = DATABASE_VERSION \
--psc-auto-connections = network = CONSUMER_NETWORK ,project = CONSUMER_PROJECT \
--enable-bin-log
Make the following replacements:
INSTANCE_NAME : the name of the instance.
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
REGION_NAME : the region name for the instance.
ALLOWED_PROJECTS : a comma-separated list of allowed project IDs or numbers from where Private Service Connect endpoints can connect to Cloud SQL instances.
If a project isn't contained in this list, then you can't create Private Service Connect endpoints in the project to connect to the instance.
AVAILABILITY_TYPE : enables high availability for the instance. For this parameter, specify one of the following values:
REGIONAL : enables high availability and is recommended for production instances. The instance fails over to another zone within your selected region.
ZONAL : provides no failover capability. This is the default value.
For more information about setting and removing high availability for instances, see Configure an existing instance for high availability and Deactivate high availability for an instance .
MACHINE_TYPE : the machine type for the instance.
DATABASE_VERSION : the database version for the instance (for example, MYSQL_8_0 ).
CONSUMER_NETWORK : the path to the VPC network from where Private Service Connect endpoints need to be created. For example: projects/my-host-project/global/networks/default .
CONSUMER_PROJECT : the project where the Private Service Connect endpoint is created. If you're using a Shared VPC network, then this can be either the host project or the service project.
Any projects that you specify in the auto-connection parameters are added to your allowed projects automatically. Optionally, for any projects where you want to create Private Service Connect endpoints manually , you can add these projects to your list of allowed projects.
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
INSTANCE_NAME : the name of the instance.
REGION_NAME : the region name for the instance.
AVAILABILITY_TYPE : enables high availability for the instance. For this parameter, specify one of the following values:
REGIONAL : enables high availability and is recommended for production instances. The instance fails over to another zone within your selected region.
ZONAL : provides no failover capability. This is the default value.
For more information about setting and removing high availability for instances, see Configure an existing instance for high availability and Deactivate high availability for an instance .
ALLOWED_PROJECTS : a comma-separated list of allowed project IDs or numbers from where Private Service Connect endpoints can connect to Cloud SQL instances.
If a project isn't contained in this list, then you can't create Private Service Connect endpoints in the project to connect to the instance.
MACHINE_TYPE : the machine type for the instance.
CONSUMER_NETWORK : the VPC network where you want to allow automatic creation of Private Service Connect endpoints.
PARENT_PROJECT : the project that contains the network CONSUMER_NETWORK . If you don't specify a different project in CONSUMER_PROJECT , endpoints are automatically created in PARENT_PROJECT CONSUMER_PROJECT : Optional. Only specify this if CONSUMER_NETWORK is a Shared VPC network and you want to allow automatic creation of Private Service Connect endpoints in a service project.
Any projects that you specify in the auto-connection parameters are added to your allowed projects automatically. Optionally, for any projects where you want to create Private Service Connect endpoints manually , you can add these projects to your list of allowed projects.
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
"pscConfig": {
"allowedConsumerProjects": [
" ALLOWED_PROJECTS "
],
"pscAutoConnections": [
{
"consumerProject":" CONSUMER_PROJECT ",
"consumerNetwork":"projects/ PARENT_PROJECT /global/networks/ CONSUMER_NETWORK "
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
Retrieve the endpoint
By retrieving the internal IP address, which is the Private Service Connect endpoint for an instance, you can use this endpoint to connect to the instance .
gcloud
To view information about an instance, including the IP address that's the Private Service Connect endpoint for the instance, use the gcloud sql instances describe command:
gcloud sql instances describe INSTANCE_NAME \
--project = PROJECT_ID \
--format = 'json(settings.ipConfiguration.pscConfig.pscAutoConnections)'
Make the following replacements:
INSTANCE_NAME : the name of the Cloud SQL instance. If this instance has Private Service Connect enabled for it, then Private Service Connect endpoints in VPC networks can connect to it.
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
In the response, note the value that appears next to the pscConfig:pscAutoConnections:ipAddress field. This value is the internal IP address that's also the Private Service Connect endpoint for the instance.
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
INSTANCE_NAME : the name of the Cloud SQL instance. If this instance has Private Service Connect enabled for it, then Private Service Connect endpoints in VPC networks can connect to it.
HTTP method and URL:
GET https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#instance",
"state": "RUNNABLE",
"databaseVersion": "MYSQL_8_0",
"settings": {
"authorizedGaeApplications": [],
"tier": "db-custom-2-7680",
"kind": "sql#settings",
"availabilityType": "REGIONAL",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration": {
"authorizedNetworks": [],
"pscConfig": {
"allowedConsumerProjects": [
" ALLOWED_PROJECTS "
],
"pscAutoConnections": {
consumerNetwork:"projects/ PARENT_PROJECT /global/networks/ CONSUMER_NETWORK ",
consumerNetworkStatus:" CONSUMER_NETWORK_STATUS ",
consumerProject:" CONSUMER_PROJECT ",
ipAddress:" IP_ADDRESS ",
status:" STATUS "
},
"pscEnabled": true
},
"ipv4Enabled": false
},
}
The following fields exist for instances that have Private Service Connect enabled for them:
allowedConsumerProjects : a list of the allowed projects for the instance. You can create Private Service Connect endpoints from any VPC networks in these projects to the service attachment of the instance.
pscAutoConnections : the allowed VPC network, the status of the service connection policy, and the status of the IP address that's the endpoint for the instance.
pscEnabled : whether an instance has Private Service Connect enabled for it.
To see how to construct the underlying REST API request for this task, see the instances:get page.
Create the endpoint manually
To create the Private Service Connect endpoint manually, do the
following:
Create a Cloud SQL instance
with Private Service Connect enabled for the instance.
Get the service attachment URI . You use
this URI to create the Private Service Connect endpoint.
Reserve an internal IP address for the Private Service Connect
endpoint and create an endpoint with that
address.
Create a Cloud SQL instance
You can create an instance with Private Service Connect enabled for the instance by using gcloud CLI , Terraform, or the API.
Note: You can now create an instance that supports
both private services access and Private Service Connect. By using Private Service Connect, you can connect to either a primary instance or any of its read replicas from multiple VPC networks. For more information, see Configure both private services access and Private Service Connect .
gcloud
To create an instance with Private Service Connect enabled for the instance, use the gcloud sql instances create command:
gcloud sql instances create INSTANCE_NAME \
--project = PROJECT_ID \
--region = REGION_NAME \
--enable-private-service-connect \
--allowed-psc-projects = ALLOWED_PROJECTS \
--availability-type = AVAILABILITY_TYPE \
--no-assign-ip \
--tier = MACHINE_TYPE \
--database-version = DATABASE_VERSION \
--enable-bin-log
Make the following replacements:
INSTANCE_NAME : the name of the instance.
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
REGION_NAME : the region name for the instance.
ALLOWED_PROJECTS : a comma-separated list of allowed project IDs or numbers from where Private Service Connect endpoints can connect to Cloud SQL instances.
If a project isn't contained in this list, then you can't create Private Service Connect endpoints in the project to connect to the instance.
AVAILABILITY_TYPE : enable high availability for the instance. For this parameter, specify one of the following values:
REGIONAL : enables high availability and is recommended for production instances. The instance fails over to another zone within your selected region.
ZONAL : provides no failover capability. This is the default value.
For more information about setting and removing high availability for instances, see Configure an existing instance for high availability and Deactivate high availability for an instance .
MACHINE_TYPE : the machine type for the instance.
DATABASE_VERSION : the database version for the instance (for example, MYSQL_8_0 ).
Terraform
To create an instance with Private Service Connect enabled for the instance, use the google_sql_database_instance Terraform resource .
resource "google_sql_database_instance" "default" {
name = "mysql-instance"
region = "us-central1"
database_version = "MYSQL_8_0"
settings {
tier = "db-f1-micro"
availability_type = "REGIONAL"
backup_configuration {
enabled = true
binary_log_enabled = true
}
ip_configuration {
psc_config {
psc_enabled = true
allowed_consumer_projects = [] # Add consumer project IDs here.
}
ipv4_enabled = false
}
}
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
AVAILABILITY_TYPE : enables high availability for the instance. For this parameter, specify one of the following values:
REGIONAL : enables high availability and is recommended for production instances. The instance fails over to another zone within your selected region.
ZONAL : provides no failover capability. This is the default value.
For more information about setting and removing high availability for instances, see Configure an existing instance for high availability and Deactivate high availability for an instance .
ALLOWED_PROJECTS : a comma-separated list of allowed project IDs or numbers from where Private Service Connect endpoints can connect to Cloud SQL instances.
If a project isn't contained in this list, then you can't create Private Service Connect endpoints in the project to connect to the instance.
MACHINE_TYPE : the machine type for the instance.
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
"pscConfig": {
"allowedConsumerProjects": [
" ALLOWED_PROJECTS "
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
Get the service attachment
After creating a Cloud SQL instance with Private Service Connect enabled, get the service attachment URI and use it to create the Private Service Connect endpoint.
gcloud
To view summary information about an instance with Private Service Connect enabled, such as the pscServiceAttachmentLink field which displays the URI that points to the service attachment of the instance, use the gcloud sql instances describe command:
gcloud sql instances describe INSTANCE_NAME \
--project = PROJECT_ID
Note: The service attachment URI is used to create the Private Service Connect endpoint.
Make the following replacements:
INSTANCE_NAME : the name of the Cloud SQL instance to which Private Service Connect endpoints in VPC networks can connect
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
The following example shows a sample output for this command:
gcloud sql instances describe myinstance \
--project = 12345
...
pscServiceAttachmentLink: projects/45678/regions/myregion/serviceAttachments/myserviceattachment
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
INSTANCE_NAME : the name of the instance
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
...
pscServiceAttachmentLink: "projects/ PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME "
}
The pscServiceAttachmentLink field displays the URI that points to the service attachment of the instance.
Create a Private Service Connect endpoint
You can reserve an internal IP address for the Private Service Connect endpoint and create an endpoint with that address. To create the endpoint, you need the service attachment URI and the projects that are allowed for the instance.
gcloud
To reserve an internal IP address for the Private Service Connect endpoint, use the gcloud compute addresses create command:
gcloud compute addresses create ADDRESS_NAME \
--project = PROJECT_ID \
--region = REGION_NAME \
--subnet = SUBNET_URI \
--addresses = INTERNAL_IP_ADDRESS
Make the following replacements:
ADDRESS_NAME : the name of the internal IP address.
PROJECT_ID : the ID or project number of the Google Cloud project for the endpoint.
REGION_NAME : the region name for the endpoint.
SUBNET_URI : the subnet name for the IP address. The format is: projects/ SUBNET_PROJECT_ID /regions/ REGION_NAME /subnetworks/ SUBNET_NAME .
If the subnet is in a Shared VPC network, then we recommend that the SUBNET_PROJECT_ID is the host project.
INTERNAL_IP_ADDRESS : the IP address to reserve. This IP address must be within the subnet's primary IP range. The IP address can be an RFC 1918 address or a subnet with non-RFC ranges. If you don't want to specify the IP address because you want Google Cloud to reserve an available IP address in the subnet, then omit this flag.
Note: If both the VPC network and the subnet support
internal IPv4 and IPv6 IP addresses, then you can reserve an IPv6 address for the
endpoint by adding the following line of code:
--ip-version=IPV6
To verify that the IP address is reserved, use the gcloud compute addresses list command:
gcloud compute addresses list ADDRESS_NAME \
--project = PROJECT_ID
In the response, verify that a RESERVED status appears for the IP address.
To create the Private Service Connect endpoint and point it to the Cloud SQL service attachment, use the gcloud compute forwarding-rules create command:
gcloud compute forwarding-rules create ENDPOINT_NAME \
--address = ADDRESS_NAME \
--project = PROJECT_ID \
--region = REGION_NAME \
--network = NETWORK_URI \
--target-service-attachment = SERVICE_ATTACHMENT_URI \
--allow-psc-global-access
Make the following replacements:
ENDPOINT_NAME : the name of the endpoint
NETWORK_URI : the URI of the VPC network for the endpoint. The format is:
projects/ NETWORK_PROJECT_ID /global/networks/ NETWORK_NAME .
If you want to use a Shared VPC network, then specify the host project as the NETWORK_PROJECT_ID .
SERVICE_ATTACHMENT_URI : the URI of the service attachment
By using the optional --allow-psc-global-access parameter, clients from all regions can access this forwarding rule.
To verify that the service attachment accepts the endpoint, use the gcloud compute forwarding-rules describe command:
gcloud compute forwarding-rules describe ENDPOINT_NAME \
--project = PROJECT_ID \
--region = REGION_NAME
In the response, verify that an ACCEPTED status appears for the pscConnectionStatus field. The endpoint can connect to the service attachment.
Terraform
To create a Private Service Connect endpoint, use the google_sql_database_instance Terraform resource .
Use the following sample to create an IPv4 Private Service Connect endpoint.
resource "google_compute_address" "default" {
name = "psc-compute-address-${google_sql_database_instance.default.name}"
region = "us-central1"
address_type = "INTERNAL"
subnetwork = "default" # Replace value with the name of the subnet here.
address = "10.128.0.43" # Replace value with the IP address to reserve.
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
allow_psc_global_access = true
}
Use the following sample to create an IPv6 Private Service Connect endpoint.
resource "google_compute_network" "ipv6_default" {
name = "net-ipv6"
auto_create_subnetworks = false
enable_ula_internal_ipv6 = true
}
resource "google_compute_subnetwork" "ipv6_default" {
name = "subnet-internal-ipv6"
ip_cidr_range = "10.0.0.0/16"
region = "us-central1"
stack_type = "IPV4_IPV6"
ipv6_access_type = "INTERNAL"
network = google_compute_network.ipv6_default.id
}
resource "google_compute_address" "ipv6_default" {
name = "psc-compute-ipv6-address-${google_sql_database_instance.default.name}"
region = "us-central1"
address_type = "INTERNAL"
subnetwork = google_compute_subnetwork.ipv6_default.name
ip_version = "IPV6"
}
resource "google_compute_forwarding_rule" "ipv6_ilb_example" {
name = "ipv6-psc-forwarding-rule-${google_sql_database_instance.default.name}"
region = "us-central1"
load_balancing_scheme = ""
target = data.google_sql_database_instance.default.psc_service_attachment_link
network = google_compute_network.ipv6_default.name
subnetwork = google_compute_subnetwork.ipv6_default.name
ip_address = google_compute_address.ipv6_default.id
allow_psc_global_access = true
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
Reserve an internal IP address for the Private Service Connect endpoint.
Note: You can't use the API to reserve an internal IP address for the endpoint. To reserve this address, use the gcloud compute addresses create command.
Verify that the IP address is reserved.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint
REGION_NAME : the name of the region
ADDRESS_NAME : the name of the IP address
HTTP method and URL:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /addresses/ ADDRESS_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /addresses/ ADDRESS_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /addresses/ ADDRESS_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "compute#address",
"id": " ADDRESS_ID ",
"creationTimestamp": "2024-05-09T11:20:50.114-07:00",
"name": " ADDRESS_NAME ",
"description": "This is the name of the internal IP address.",
"address": " IP_ADDRESS ",
"status": "RESERVED",
"region": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME ",
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /addresses/ ADDRESS_NAME ",
"networkTier": "PREMIUM",
"labelFingerprint": " LABEL_FINGERPRINT_ID ",
"addressType": "EXTERNAL"
}
In the response, verify that a RESERVED status appears for the IP address.
Create the Private Service Connect endpoint and point it to the Cloud SQL service attachment.
Note: You can't use the API to create the Private Service Connect endpoint. To create this endpoint, use the gcloud compute forwarding-rules create command.
Verify that the service attachment accepts the endpoint.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint
REGION_NAME : the name of the region
ENDPOINT_NAME : the name of the endpoint
HTTP method and URL:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "compute#forwardingRule",
"id": " ENDPOINT_ID ",
"creationTimestamp": "2024-05-09T12:03:21.383-07:00",
"name": " ENDPOINT_NAME ",
"region": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME ",
"IPAddress": " IP_ADDRESS ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME ",
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME ",
"network": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/default",
"serviceDirectoryRegistrations": [
{
"namespace": "goog-psc-default"
}
],
"networkTier": "PREMIUM",
"labelFingerprint": " LABEL_FINGERPRINT_ID ",
"fingerprint": " FINGERPRINT_ID ",
"pscConnectionId": " CONNECTION_ID ",
"pscConnectionStatus": "ACCEPTED",
"allowPscGlobalAccess": true
}
In the response, verify that an ACCEPTED status appears for the pscConnectionStatus field. The endpoint can connect to the service attachment.
Connect to a Cloud SQL instance
You can connect to a Cloud SQL instance with Private Service Connect enabled by using an internal IP address, a DNS record, the Cloud SQL Auth Proxy, the Cloud SQL Language Connectors, or other Google Cloud applications.
Configure a DNS managed zone and a DNS record
Cloud SQL doesn't create DNS records automatically. Instead, the instance lookup API response provides a suggested DNS name. We recommend that you create the DNS record in a private DNS zone in the corresponding VPC network. This provides a consistent way of using the Cloud SQL Auth Proxy to connect from different networks.
Important: If you're using the Cloud SQL Auth Proxy or the Cloud SQL Language Connectors , then set up a DNS record which matches the recommended DNS name provided for the instance. For more information, see Connect using the Cloud SQL Auth Proxy .
For more information about best practices for private DNS zones, including how to allow on-premises hosts to query DNS records that are hosted in these zones, see Best practices for Cloud DNS private zones .
gcloud
To view summary information about a Cloud SQL instance, including the DNS name of the instance, use the gcloud sql instances describe command:
gcloud sql instances describe INSTANCE_NAME \
--project = PROJECT_ID
Make the following replacements:
INSTANCE_NAME : the name of the Cloud SQL instance
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
In the response, verify that the DNS name appears. This name has the following pattern: INSTANCE_UID . PROJECT_DNS_LABEL . REGION_NAME .sql.goog. . For example: 1a23b4cd5e67.1a2b345c6d27.us-central1.sql.goog. .
Note: DNS names always end with a period ( . ).
If you want to use a custom DNS name to connect to a Cloud SQL instance instead of using the predefined DNS name in this section, then configure the custom subject alternative name (SAN) setting while creating the instance. The custom DNS name that you insert into the custom SAN setting is added to the SAN field of the server certificate of the instance. This lets you use the custom DNS name with hostname validation securely.
For more information about configuring the custom SAN setting, see Create instances .
To create a private DNS zone, use the gcloud dns managed-zones create command. This zone is associated with the VPC network that's used to connect to the Cloud SQL instance through the Private Service Connect endpoint.
Note: For each VPC network, create a DNS zone.
gcloud dns managed-zones create ZONE_NAME \
--project = PROJECT_ID \
--description = " DESCRIPTION " \
--dns-name = DNS_NAME \
--networks = NETWORK_NAME \
--visibility = private
Make the following replacements:
ZONE_NAME : the name of the DNS zone
PROJECT_ID : the ID or project number of the Google Cloud project that contains the zone
DESCRIPTION : a description of the zone (for example, a DNS zone for the Cloud SQL instance)
DNS_NAME : the name of the DNS suffix for the zone, such as REGION_NAME .sql.goog. (where REGION_NAME is the region name for the zone)
NETWORK_NAME : the name of the VPC network
After you create the Private Service Connect endpoint , to create a DNS record in the zone, use the gcloud dns record-sets create command:
gcloud dns record-sets create DNS_RECORD \
--project = PROJECT_ID \
--type = RRSET_TYPE \
--rrdatas = RR_DATA \
--zone = ZONE_NAME
Make the following replacements:
DNS_RECORD : the name of the DNS record. This record is set to the DNS name that you retrieved from the Cloud SQL instance earlier in this procedure (for example, 1a23b4cd5e67.1a2b345c6d27.us-central1.sql.goog. ).
RRSET_TYPE : the resource record type of the DNS record set. If
the internal IP address that you reserved
for the Private Service Connect endpoint is IPv4, then specify
A for this parameter. Otherwise, if the IP address for the
endpoint is IPv6, then specify AAAA .
RR_DATA : the IP address allocated for the Private Service Connect endpoint (for example, 198.51.100.5 ). You can also enter multiple values such as rrdata1 rrdata2 rrdata3 (for example, 10.1.2.3 10.2.3.4 10.3.4.5 ).
REST
Get the DNS name of a Cloud SQL instance.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
INSTANCE_NAME : the name of the instance
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
...
"dnsName": " INSTANCE_ID . PROJECT_DNS_LABEL . REGION_NAME .sql.goog."
}
The dnsName field displays the DNS name of the Cloud SQL instance. DNS names always end with a period ( . ).
Create a private DNS zone. This zone is associated with the VPC network that's used to connect to the Cloud SQL instance through the Private Service Connect endpoint.
Note: For each VPC network, create a DNS zone.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the DNS zone
ZONE_NAME : the name of the zone
DESCRIPTION : a description of the zone (for example, a DNS zone for the Cloud SQL instance)
DNS_NAME : the name of the DNS suffix for the zone, such as REGION_NAME .sql.goog. (where REGION_NAME is the region name for the zone)
NETWORK_NAME : the name of the VPC network
HTTP method and URL:
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones
Request JSON body:
{
"name": " ZONE_NAME ",
"description": " DESCRIPTION ",
"dnsName": " DNS_NAME ",
"visibility": "private",
"privateVisibilityConfig": {
"kind": "dns#managedZonePrivateVisibilityConfig",
"networks": [
{
"kind": "dns#managedZonePrivateVisibilityConfigNetwork",
"networkUrl": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/ NETWORK_NAME "
}
]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": " ZONE_NAME ",
"dnsName": " DNS_NAME ",
"description": " DESCRIPTION ",
"id": " ID ",
"nameServers": [
"ns-gcp-private.googledomains.com."
],
"creationTime": "2024-05-10T17:05:34.607Z",
"visibility": "private",
"privateVisibilityConfig": {
"networks": [
{
"networkUrl": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/ NETWORK_NAME ",
"kind": "dns#managedZonePrivateVisibilityConfigNetwork"
}
],
"gkeClusters": [],
"kind": "dns#managedZonePrivateVisibilityConfig"
},
"cloudLoggingConfig": {
"kind": "dns#managedZoneCloudLoggingConfig"
},
"kind": "dns#managedZone"
}
After you create the Private Service Connect endpoint , create a DNS record in the zone.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the DNS zone.
ZONE_NAME : the name of the zone.
DNS_RECORD : the name of the DNS record. This record is set to the DNS name that you retrieved from the Cloud SQL instance earlier in this procedure (for example, 1a23b4cd5e67.1a2b345c6d27.us-central1.sql.goog. ).
RRSET_TYPE : the resource record type of the DNS record set. If
the internal IP address that you reserved
for the Private Service Connect endpoint is IPv4, then specify
A for this parameter. Otherwise, if the IP address for the
endpoint is IPv6, then specify AAAA .
TTL : the time to live (TTL) for the record set in the number of seconds (for example, 300 ).
RR_DATA : the IP address allocated for the Private Service Connect endpoint (for example, 198.51.100.5 ). You can also enter multiple values such as rrdata1 rrdata2 rrdata3 (for example, 10.1.2.3 10.2.3.4 10.3.4.5 ).
HTTP method and URL:
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ ZONE_NAME
Request JSON body:
{
"deletions": []
"additions": [
{
"name": " DNS_RECORD ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"rrdatas": [
" RR_DATA "
]
}
]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ ZONE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ ZONE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"additions": [
{
"name": " DNS_RECORD ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"rrdatas": [
" RR_DATA "
],
"signatureRrdatas": [],
"kind": "dns#resourceRecordSet"
}
],
"deletions": [],
"startTime": "2024-05-10T17:29:44.375Z",
"id": " CHANGE_ID ",
"status": "pending",
"kind": "dns#change"
}
Note: If you're using this DNS record to connect to the Cloud SQL instance , then make a note of the CHANGE_ID value.
Connect directly using a DNS record
Before connecting to a Cloud SQL instance using a DNS record, do the following:
Create a Private Service Connect endpoint .
Confirm that the service attachment of the instance accepts the endpoint. To verify that the status of the endpoint is ACCEPTED , check the status .
Configure a DNS managed zone and a DNS record .
After you meet these conditions, use the DNS record to connect to the instance from any VPC network where you created the endpoint.
mysql --host = DNS_RECORD --user = USERNAME -p
Make the following replacements:
DNS_RECORD : the endpoint's DNS record
USERNAME : the name of the user that's connecting to the instance
Connect directly through an internal IP address
Before connecting to a Cloud SQL instance with Private Service Connect enabled, do the following:
Create a Private Service Connect endpoint .
Confirm that the service attachment of the instance accepts the endpoint. To verify that the status of the endpoint is ACCEPTED , check the status .
After you meet these conditions, use the endpoint's IP address to access the instance from any VPC network where you created the endpoint.
Retrieve the internal IP address of the Private Service Connect
endpoint using the name of the endpoint's IP address.
Note: You can use the commands in this section to
retrieve the internal IP addresses of all endpoints that are created both
manaully and automatically. To retrieve the internal IP addresses of
endpoints that are created automatically, see Retrieve the endpoint .
gcloud
To retrieve the IP address, use the gcloud compute addresses describe command:
gcloud compute addresses describe ADDRESS_NAME \
--project = PROJECT_ID \
--region = REGION_NAME
Make the following replacements:
ADDRESS_NAME : the name of the endpoint's IP address
PROJECT_ID : the ID or project number of the Google Cloud project that contains the endpoint
REGION_NAME : the region name for the endpoint
In the response, verify that an IP address appears for the address field. This is the internal IP address.
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the endpoint
REGION_NAME : the region name for the endpoint
ADDRESS_NAME : the name of the endpoint's IP address
HTTP method and URL:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /addresses/ ADDRESS_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /addresses/ ADDRESS_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /addresses/ ADDRESS_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "compute#address",
"id": " ADDRESS_ID ",
"creationTimestamp": "2024-05-09T11:20:50.114-07:00",
"name": " ADDRESS_NAME ",
"description": "This is the name of the internal IP address.",
"address": " IP_ADDRESS ",
"status": "RESERVED",
"region": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME ",
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /addresses/ ADDRESS_NAME ",
"networkTier": "PREMIUM",
"labelFingerprint": " LABEL_FINGERPRINT_ID ",
"addressType": "EXTERNAL"
}
The internal IP address is the value that's associated with the address field.
Alternatively, retrieve the internal IP address of the Private Service Connect
endpoint using the service attachment of the Cloud SQL instance.
gcloud
To retrieve the IP address, use the gcloud compute forwarding-rules list command:
gcloud compute forwarding-rules list \
--filter = "TARGET: REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME " \
--project = PROJECT_ID
Make the following replacements:
REGION_NAME : the region name for the endpoint
PROJECT_ID : the ID or project number of the Google Cloud project that contains the endpoint
SERVICE_ATTACHMENT_NAME : the name of the service attachment for the Cloud SQL instance
In the response, verify that an IP address appears. This is the internal IP address.
The following is a sample response:
NAME
REGION
IP_ADDRESS
TARGET
myInstance
us-central1
10.10.10.10
us-central1/serviceAttachments/a-123456789e0a-psc-service-attachment-abc123d4e5f67gh8
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the endpoint
REGION_NAME : the region name for the endpoint
SERVICE_ATTACHMENT_PROJECT_ID : the ID or project number of the Google Cloud project that contains the service attachment
SERVICE_ATTACHMENT_NAME : the name of the service attachment for the Cloud SQL instance
HTTP method and URL:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules?target="https://www.googleapis.com/compute/v1/projects/ SERVICE_ATTACHMENT_PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME "
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules?target="https://www.googleapis.com/compute/v1/projects/ SERVICE_ATTACHMENT_PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME ""
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules?target="https://www.googleapis.com/compute/v1/projects/ SERVICE_ATTACHMENT_PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME "" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "compute#forwardingRuleList",
"id": "projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules",
"items": [
{
"kind": "compute#forwardingRule",
"id": " FORWARDING_RULE_ID ",
"creationTimestamp": "2023-10-31T13:04:37.168-07:00",
"name": " FORWARDING_RULE_NAME ",
"region": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME ",
"IPAddress": " IP_ADDRESS ",
"target": "https://www.googleapis.com/compute/v1/projects/ SERVICE_ATTACHMENT_PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME ",
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ FORWARDING_RULE_NAME ",
"network": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/ VPC_NETWORK_NAME ",
"serviceDirectoryRegistrations": [
{
"namespace": "goog-psc-default"
}
],
"networkTier": "PREMIUM",
"labelFingerprint": " LABEL_FINGERPRINT_ID ",
"fingerprint": " FINGERPRINT_ID ",
"pscConnectionId": " PSC_CONNECTION_ID ",
"pscConnectionStatus": "CLOSED",
"allowPscGlobalAccess": true
}
],
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules"
}
The internal IP address is the value that's associated with the IPAddress field.
To connect to the Cloud SQL instance, use the internal IP address.
mysql --host = IP_ADDRESS --user = USERNAME -p
Make the following replacements:
IP_ADDRESS : the endpoint's IP address
USERNAME : the name of the user that's connecting to the instance
Connect using the Cloud SQL Auth Proxy
The Cloud SQL Auth Proxy is a connector that provides secure access to an instance with Private Service Connect enabled without a need for authorized networks or for configuring SSL.
To allow Cloud SQL Auth Proxy client connections, set up a DNS record which matches the recommended DNS name that's provided for the instance. The DNS record is a mapping between a DNS resource and a domain name.
If you're connecting through Private Service Connect, then Cloud SQL Auth Proxy
version v2.5.0
or later is required.
Download and install the Cloud SQL Auth Proxy
To connect to instances with Private Service Connect enabled, you must download and install the binary for the Cloud SQL Auth Proxy . The binary that you download depends on the operating system, and whether it uses a 32-bit or 64-bit kernel. Most newer hardware uses a 64-bit kernel.
If you're unsure whether your machine is running a 32-bit or 64-bit kernel, then use the uname -a command for Linux or macOS. For Windows, see the Windows documentation .
Start the Cloud SQL Auth Proxy
The Cloud SQL Auth Proxy supports connections to instances with Private Service Connect enabled. For more information, see Start the Cloud SQL Auth Proxy .
View summary information about a Cloud SQL instance, including the connection name of the instance.
gcloud
To view summary information about a Cloud SQL instance, use the gcloud sql instances describe command.
gcloud sql instances describe INSTANCE_NAME \
--project = PROJECT_ID \
--format = 'value(connectionName)'
Make the following replacements:
INSTANCE_NAME : the name of the Cloud SQL instance
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
The connection name is in the format of PROJECT_ID : REGION_NAME : INSTANCE_NAME .
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
INSTANCE_NAME : the name of the instance
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
...
"connectionName": " PROJECT_ID : REGION_NAME : INSTANCE_NAME "
}
The connection name is in the format of PROJECT_ID : REGION_NAME : INSTANCE_NAME .
Copy the instance connection name.
Launch the Cloud SQL Auth Proxy:
./cloud-sql-proxy INSTANCE_CONNECTION_NAME --psc
Replace INSTANCE_CONNECTION_NAME with the instance connection name that you copied in the previous step.
Note: Use the psc flag to start the Cloud SQL Auth Proxy to connect to instances with Private Service Connect enabled.
Connect using the Cloud SQL Language Connectors
The Cloud SQL Language Connectors are
libraries that provide secure access to a Cloud SQL instance with
Private Service Connect enabled without a need for authorized networks
or for configuring SSL.
To allow connections with Cloud SQL Language Connectors, set up a DNS record
which matches the recommended DNS name that's provided for the
instance. The DNS record is a mapping between a DNS resource and a domain name.
The Cloud SQL Language Connectors support Private Service Connect connections
through the PSC IP type within their respective libraries.
Cloud SQL Python Connector
(v1.3.0 or later)
Cloud SQL Go Connector
(v1.4.0 or later)
Cloud SQL Java Connector
(v1.13.0 or later)
Cloud SQL Node.js Connector
(v0.5.0 or later)
Connect from App Engine Standard, Cloud Run, or Cloud Run functions
To connect to Cloud SQL instances with Private Service Connect enabled, you can use App Engine Standard or Cloud Run .
In these supported serverless environments, both the Cloud SQL Language Connectors and direct TCP connections by using an IP address and port number are supported. For direct TCP connections, this is the IP address that you reserve when you create the Private Service Connect endpoint . You can specify the IP address as the address for the database host.
If you create a DNS record for the endpoint, then you can specify this record for the host.
Connect from BigQuery
To access data in Cloud SQL and make queries against this
data over an internal IP connection, use the --enable-google-private-path parameter . This parameter is valid only if:
You use the --no-assign-ip parameter.
You use the --network parameter to specify the name of the
VPC network that you want to use to create an internal connection.
Configure outbound connectivity for your Cloud SQL instance
You can configure your Private Service Connect-enabled
Cloud SQL instance to have outbound connectivity with your network
using a Private Service Connect interface and a
network attachment . For more information
about how Private Service Connect outbound connectivity works
and its limitations, see
Private Service Connect outbound connectivity overview .
To use outbound connectivity with your Cloud SQL instance,
you need to:
Create
or update a
network attachment. This network attachment is used by the Cloud SQL
instance to connect to your network's Private Service Connect
interface.
The network attachment must be in the same region as your Cloud SQL
instance, and be
set up to accept connections
either automatically or manually using a list from
Private Service Connect interfaces.
Note: If a Cloud SQL instance is configured for
high availability ,
then the instance requires two IP addresses: one for the primary instance
and one for the standby instance.
Get the Cloud SQL tenant project ID.
Use the gcloud sql instances describe
command to retrieve details about the instance. You can find the tenant
project ID in the service attachment URL shown in the output:
ADMIN_PROJECT= PROJECT_ID
INSTANCE_NAME= INSTANCE_NAME
TENANT_PROJECT_ID=$(gcloud --project=$ADMIN_PROJECT sql instances describe $INSTANCE_NAME | grep pscServiceAttachmentLink | cut -f 2 -d "/")
Replace the following:
PROJECT_ID : the project ID for the Google Cloud
project you're using.
INSTANCE_NAME : the name of the
Private Service Connect-enabled Cloud SQL instance
that you want to set up for outbound connectivity.
Save the value for the tenant project ID to later include in the list of accepted project IDs .
This is required when you create or update a network attachment in your Google Cloud project .
Identify your network that you want to receive Cloud SQL outbound
connections from and ensure it has a Private Service Connect
interface.
Enable outbound connections to your Cloud SQL
instance using the network attachment.
You can also disable outbound connectivity at any
time when you no longer require outbound connections to your instance.
For more information about Private Service Connect outbound
connectivity, see
Private Service Connect outbound connections .
Enable outbound connections for your Cloud SQL instance
To enable outbound connectivity for your Cloud SQL instance,
you need to first
create
or update a network
attachment in your Google Cloud project.
Note: Enabling Private Service Connect outbound
connectivity requires downtime. You can expect this operation to take
about 8 minutes to complete with an approximate downtime of 3 minutes.
gcloud
To enable outbound connectivity, run the following command:
gcloud beta sql instances patch INSTANCE_NAME \
--psc-network-attachment-uri= NETWORK_ATTACHMENT_URI \
--project= PROJECT_ID
Replace the following:
INSTANCE_NAME : the name of the
Private Service Connect-enabled Cloud SQL instance
that you want to set up for outbound connectivity.
NETWORK_ATTACHMENT_URI : the URI of the network
attachment within your Google Cloud project that you want to use to
connect to your network's Private Service Connect interface.
PROJECT_ID : the project ID for the Google Cloud
project you're using.
You can confirm that Private Service Connect outbound
connectivity was enabled successfully by running
gcloud sql instances describe .
If you see psc-network-attachment-uri in the output, then
Private Service Connect outbound connectivity was enabled
successfully.
REST v1
To enable outbound connectivity, run the following command:
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your project.
NETWORK_ATTACHMENT_URI : the URI of the network attachment in your project.
INSTANCE_ID : the name of your Cloud SQL instance.
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"ipConfiguration": {
"pscConfig: {
"networkAttachmentUri": " NETWORK_ATTACHMENT_URI "
"kind": "sql#settings"
}
},
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": USER ,
"insertTime": "2025-05-13T20:44:23.064Z",
"operationType": "UPDATE",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID ","
}
REST v1beta4
To enable outbound connectivity, run the following command:
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your project.
NETWORK_ATTACHMENT_URI : the URI of the network attachment in your project.
INSTANCE_ID : the name of your Cloud SQL instance.
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"ipConfiguration": {
"pscConfig: {
"networkAttachmentUri": " NETWORK_ATTACHMENT_URI "
}
},
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": USER ,
"insertTime": "2025-05-13T20:44:23.064Z",
"operationType": "UPDATE",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID ","
}
For troubleshooting information related to Private Service Connect
outbound connectivity, see
Private Service Connect troubleshooting .
Disable outbound connections for your Cloud SQL instance
Note: Disabling Private Service Connect outbound
connectivity requires downtime. You can expect this operation to take
about 8 minutes to complete with an approximate downtime of 3 minutes.
gcloud
To disable outbound connectivity, run the following command:
gcloud beta sql instances patch INSTANCE_NAME \
--clear-psc-network-attachment-uri \
--project= PROJECT_ID
Replace the following:
INSTANCE_NAME : the name of the
Private Service Connect-enabled Cloud SQL instance
that you want to set up for outbound connectivity.
PROJECT_ID : the project ID for the Google Cloud
project you're using.
REST v1
To disable outbound connectivity, run the following command:
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your project.
NETWORK_ATTACHMENT_URI : the URI of the network attachment in your project. To disable, set to null .
INSTANCE_ID : the name of your Cloud SQL instance.
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"ipConfiguration": {
"pscConfig: {
"networkAttachmentUri": null,
"kind": "sql#settings"
}
},
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": USER ,
"insertTime": "2025-05-13T20:44:23.064Z",
"operationType": "UPDATE",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID ","
}
REST v1beta4
To disable outbound connectivity, run the following command:
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your project.
NETWORK_ATTACHMENT_URI : the URI of the network attachment in your project. To disable, set to null .
INSTANCE_ID : the name of your Cloud SQL instance.
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"ipConfiguration": {
"pscConfig: {
"networkAttachmentUri": null,
"kind": "sql#settings"
}
},
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": USER ,
"insertTime": "2025-05-13T20:44:23.064Z",
"operationType": "UPDATE",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID ","
}
Test connectivity
To test inbound connectivity to a Cloud SQL instance with Private Service Connect enabled, set the IP address of the Private Service Connect endpoint to be the destination IP address.
gcloud
To create a connectivity test for a Cloud SQL instance with Private Service Connect enabled, use the gcloud network-management connectivity-tests create command:
gcloud network-management connectivity-tests create CONNECTIVITY_TEST_NAME \
--source-instance = SOURCE_INSTANCE \
--destination-cloud-sql-instance = DESTINATION_CLOUD_SQL_INSTANCE \
--destination-network = DESTINATION_NETWORK \
--destination-port = DESTINATION_PORT \
--protocol = tcp
Make the following replacements:
CONNECTIVITY_TEST_NAME : the name of the connectivity test.
SOURCE_INSTANCE : the URI for the Compute Engine instance where the source IP address is located (for example, projects/myproject/zones/myzone/instances/myinstance ).
DESTINATION_CLOUD_SQL_INSTANCE : the URL for the Cloud SQL instance (for example, projects/myproject/instances/myinstance ).
DESTINATION_NETWORK : the URI for the VPC network where the destination IP address is located (for example, projects/myproject/global/networks/mynetwork ).
DESTINATION_PORT : the port number reserved for the instance. For Cloud SQL for MySQL instances, the port number is 3306 .
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
CONNECTIVITY_TEST_NAME : the name of the connectivity test.
SOURCE_IP_ADDRESS : the IP address of the source Compute Engine instance.
SOURCE_INSTANCE : the URI for the Compute Engine instance where the source IP address is located (for example, projects/myproject/zones/myzone/instances/myinstance ).
SOURCE_NETWORK : the URI for the VPC network where the source IP address is located (for example, projects/myproject/global/networks/mynetwork ).
DESTINATION_IP_ADDRESS : the IP address of the destination Cloud SQL instance.
DESTINATION_PORT : the port number reserved for the instance. For Cloud SQL for MySQL instances, the port number is 3306 .
DESTINATION_NETWORK : the URI for the VPC network where the destination IP address is located (for example, projects/myproject/global/networks/mynetwork ).
HTTP method and URL:
POST https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT_ID /locations/global/connectivityTests?testId= CONNECTIVITY_TEST_NAME
Request JSON body:
{
"source": {
"ipAddress": " SOURCE_IP_ADDRESS ",
"instance": " SOURCE_INSTANCE ",
"network": " SOURCE_NETWORK "
},
"destination": {
"ipAddress": " DESTINATION_IP_ADDRESS ",
"port": DESTINATION_PORT ,
"network": " DESTINATION_NETWORK ",
"projectId": " PROJECT_ID "
},
"protocol": "TCP"
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT_ID /locations/global/connectivityTests?testId= CONNECTIVITY_TEST_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT_ID /locations/global/connectivityTests?testId= CONNECTIVITY_TEST_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/global/operations/operation- OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.networkmanagement.v1.OperationMetadata",
"createTime": "2024-05-23T16:43:49.313981473Z",
"target": "projects/ PROJECT_ID /locations/global/connectivityTests/ CONNECTIVITY_TEST_NAME ",
"verb": "create",
"cancelRequested": false,
"apiVersion": "v1"
},
"done": false
}
Note: In addition to testing connectivity, you can restrict connectivity to Private Service Connect endpoints from service consumers in a VPC network. To do this, use the gcloud compute firewall-rules create command to create a network egress firewall rule. This rule applies to the IP address of an endpoint. For the rule, define the source to be all VMs in the VPC network and specify a tag or service account.
Limitations
You can set up to 20 Private Service Connect endpoints that connect
to the service attachment of a Cloud SQL instance with
Private Service Connect enabled.
If you need to connect from more VPC networks, then use Private Service Connect
endpoint propagation through NCC. For more information,
see Private Service Connect endpoint propagation .
You can have up to 64,512 concurrent connections with Private Service Connect to a Cloud SQL instance.
The following flags are invalidated or impacted:
--no-assign-ip: use this flag because instances with Private Service Connect enabled aren't supported to use other connectivity types such as external IP connections
--authorized-networks: you can't use this flag to add authorized networks
--network: you can't use this flag because it's associated with private services access
--allocated-ip-range-name: you can't use this flag because allowed IP range names aren't supported
You can't configure an instance that has Private Service Connect enabled to use private services access or external IP connections.
You can't enable external IP connections on an instance with Private Service Connect enabled.
You can't enable private services access or add authorized networks to the instance.
You can't change the connectivity type of the instance.
You can't use the gcloud sql connect command, Cloud Shell, Cloud Build, Database Migration Service, or Datastream to connect to Cloud SQL instances with Private Service Connect enabled.
When testing connectivity to a Cloud SQL instance with Private Service Connect enabled , you can't set the following items:
The instance's internal IP address or DNS name as the destination directly
The instance as the source
The IP address of the Private Service Connect endpoint as the source
IP-based allowlisting by using authorized networks isn't supported.
IP-based allowlisting enforced by Context-Aware Access isn't supported.
If your network project contains instances that use the old
Cloud SQL network architecture, then you can't create a
Private Service Connect instance. Cloud SQL provides tools
to help you upgrade your instances from the old network architecture to the
new network architecture. For more information or to check the network
architecture of the Cloud SQL instances in your project and perform
any necessary upgrades, see
Upgrade an instance to the new network architecture .
Troubleshoot
This section contains information about issues associated with Cloud SQL instances with Private Service Connect enabled along with steps for troubleshooting the issues.
Issue
Troubleshooting
The service attachment of the instance doesn't accept the Private Service Connect endpoint.
Check the endpoint's status.
gcloud
To check the status, use the gcloud compute forwarding-rules describe command.
gcloud compute forwarding-rules describe ENDPOINT_NAME \
--project = PROJECT_ID \
--region = REGION_NAME \
| grep pscConnectionStatus
Make the following replacements:
ENDPOINT_NAME : the name of the endpoint
PROJECT_ID : the ID or project number of the Google Cloud project that contains the endpoint
REGION_NAME : the region name for the endpoint
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint
REGION_NAME : the name of the region
ENDPOINT_NAME : the name of the endpoint
HTTP method and URL:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "compute#forwardingRule",
"id": " ENDPOINT_ID ",
"creationTimestamp": "2024-05-09T12:03:21.383-07:00",
"name": " ENDPOINT_NAME ",
"region": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME ",
"IPAddress": " IP_ADDRESS ",
"target": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_NAME ",
"selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION_NAME /forwardingRules/ ENDPOINT_NAME ",
"network": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/default",
"serviceDirectoryRegistrations": [
{
"namespace": "goog-psc-default"
}
],
"networkTier": "PREMIUM",
"labelFingerprint": " LABEL_FINGERPRINT_ID ",
"fingerprint": " FINGERPRINT_ID ",
"pscConnectionId": " CONNECTION_ID ",
"pscConnectionStatus": "ACCEPTED",
"allowPscGlobalAccess": true
}
Verify that the status of the endpoint is ACCEPTED . If the status is PENDING , then the instance isn't allowing the Google Cloud project that contains the endpoint. Make sure that the network project in which the endpoint is created is allowed. For more information, see Edit an instance with Private Service Connect enabled .
ERROR: (gcloud.compute.forwarding-rules.create) Could not fetch resource: The resource 'projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET_NAME' was not found
This error message can occur when reserving a static internal IP address for the Private Service Connect endpoint.
Make sure the subnet specified exists in the project specified by the URI. If you want to create an endpoint in a service project but use a subnet from a Shared VPC network,
you need to specify the subnet by its URI and use the host project's project ID in the URI.
For more information, see Create the endpoint manually .
ERROR: (gcloud.compute.forwarding-rules.create) Could not fetch resource:
- The resource 'projects/PROJECT_ID/global/networks/NETWORK_NAME' was not found
This error message can occur when you create a Private Service Connect endpoint manually.
Make sure the network specified exists in the project specified by the URI. If you want to create an endpoint in a service project but use a Shared VPC network,
you need to specify the network by its URI and use the host project's project ID in the URI.
For more information, see Create the endpoint manually .
Invalid consumer network status for PSC auto connection .
The consumer network is either not configured correctly, or not
configured at all, and therefore, no endpoint is available to connect to. To
connect to the endpoint, you'll need to check the status of the endpoint,
and fix the error before trying to connect again.
To check the status of an endpoint,
see Retrive the endpoint .
The status of the endpoint can be one of the following:
CONNECTION_POLICY_MISSING : there is no matching service
connection policy on the consumer network. Service connection policies
are configured by network, by region. To reconfigure the network,
see Update a service connection policy .
CONSUMER_INSTANCE_PROJECT_NOT_ALLOWLISTED : there is a
matching service connection policy, but the
Service
instance scope field in the policy is not configured to allow
connection to this Cloud SQL instance. Update the policy to
configure the value of the Service instance scope field
( --producer-instance-location ) with the project, folder, or
organization where the Cloud SQL instance resides. To reconfigure
the service connection policy, see
Update a service connection policy .
POLICY_LIMIT_REACHED : the service connection policy
has reached its endpoint limit. To resolve, you'll need to increase the
endpoint limit by
updating the service connection policy .
No permission to create a service connection policy .
You don't have the required permissions to create a service
connection policy. To create a service connection policy, you need the
Compute Network Admin IAM role. For more information,
see Roles and permissions .
The network attachment is unable to accept connections from the
Private Service Connect interface when
using
Private Service Connect outbound connectivity .
If your external network is unable to accept connections from
the Private Service Connect interface,
then the connection policies on your network attachment may not be
configured correctly.
Network attachments need to be configured to either
accept all connections automatically, or configured manually
with a list of accepted connections.
For more information, see Connection policies .
Use the following command to verify the accepted connections
in your network attachment:
gcloud compute network-attachments describe default
--region = REGION_ID
If the Private Service Connect interface isn't on the accepted
list, then update your network attachment . For more information, see
Manage network attachments .
What's next
Learn more about private IP .
Learn more about Private Service Connect .
Learn more about creating a read replica of an instance with Private Service Connect enabled.
Learn more about cloning an instance with Private Service Connect enabled.
Learn more about viewing summary information about instances with Private Service Connect enabled.
Learn more about setting and removing high availability for an instance with Private Service Connect enabled.
Learn more about editing and deleting an instance with Private Service Connect enabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
