---
title: "Configure private services access \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access
  title: "Configure private services access \_|\_ Cloud SQL for MySQL \_|\_ Google\
    \ Cloud Documentation"
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
Configure private services access
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to configure private services access
in your VPC network.
Private services access is implemented as a
VPC peering connection between your
VPC network and the underlying Google Cloud VPC
network where your Cloud SQL instance resides. The private connection
enables VM instances in your VPC network and the services that you access to
communicate exclusively by using internal IP addresses. VM instances don't need
Internet access or external IP addresses to reach services that are available
through private services access .
Before you begin
Cloud SQL requires private services access for each
VPC network that's used for private IP connections.
To get the permissions that
you need to manage a private services access connection,
ask your administrator to grant you the
Compute Network Admin ( roles/compute.networkAdmin )
IAM role on on the project that hosts your Cloud SQL instance.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to manage a private services access connection. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage a private services access connection:
compute.addresses.create
compute.addresses.list
compute.globalAddresses.create
compute.globalAddresses.createInternal
compute.globalAddresses.list
compute.networks.list
compute.networks.use
servicenetworking.services.addPeering
serviceusage.services.list
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Important: If you're using a Shared VPC network ,
then you need to enable the same APIs, add the same user, and provide the same
permissions to the user in the host project.
Configure private services access for Cloud SQL
Important: When you create a private connection between your VPC
network and the Cloud SQL service, it becomes available for use by
any Google service that supports private services access. If you later delete
the private connection, you remove private connectivity
to your Cloud SQL instances and any other service that is using
that connection . Removing the private connection does not delete
or deprovision any resources.
There are two parts to the private services access configuration process:
Selecting an existing, or allocating a new IP address range.
You also have the option of allowing Google to allocate the range for
you. In this case, Google will automatically allocate an IP range of
prefix-length /24 and use the name default-ip-range .
If you're going to create instances in multiple regions or for different
database types, then you must have a minimum /24 range of IP addresses available
for each region or database type. This includes other applications such as Filestore or Memorystore . For a new region or database type, Cloud SQL must have a free /24 range.
Creating a private connection from your VPC network to the
underlying service producer network.
Allocate an IP address range
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Select the VPC network that you want to use.
Select the Private services access tab.
Select the Allocated IP ranges for services tab.
Click Allocate IP range .
For the Name of the allocated range, specify
google-managed-services-VPC_NETWORK_NAME , where VPC_NETWORK_NAME is
the name of the VPC network you are connecting (for
example, google-managed-services-default ). The
Description is optional.
Select the Custom option, then enter the IP address range to allocate, in CIDR notation.
Click Allocate to create the allocated range.
gcloud
Do one of the following:
To specify an address range and a prefix length (subnet mask), use the
addresses and prefix-length flags. For example, to allocate the CIDR
block 192.168.0.0/16 , specify 192.168.0.0 for the address and 16 for the prefix length.
gcloud compute addresses create google-managed-services- VPC_NETWORK_NAME \
--global \
--purpose = VPC_PEERING \
--addresses = 192 .168.0.0 \
--prefix-length = 16 \
--network = projects/ PROJECT_ID /global/networks/ VPC_NETWORK_NAME
To specify a prefix length (subnet mask) only, use the
prefix-length flag. When you omit the address range, Google Cloud
automatically selects an unused address range in your VPC
network. The following example selects an unused IP address range with a
16 bit prefix length.
gcloud compute addresses create google-managed-services- VPC_NETWORK_NAME \
--global \
--purpose = VPC_PEERING \
--prefix-length = 16 \
--network = projects/ PROJECT_ID /global/networks/ VPC_NETWORK_NAME
Replace VPC_NETWORK_NAME with the name of your VPC
network, such as my-vpc-network .
The following example allocates an IP range that allows resources in the
VPC network my-vpc-network to connect to Cloud SQL
instances using private IP.
gcloud compute addresses create google-managed-services-my-vpc-network \
--global \
--purpose = VPC_PEERING \
--prefix-length = 16 \
--network = projects/myprojectid/global/networks/myvpcnetwork \
--project = my-project
Terraform
To allocate an IP address range, use a Terraform resource .
resource "google_compute_global_address" "private_ip_address" {
name = "private-ip-address"
purpose = "VPC_PEERING"
address_type = "INTERNAL"
prefix_length = 16
network = google_compute_network.peering_network.id
}
Apply the changes
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
Delete the changes
Remove resources previously applied with your Terraform configuration by running the following
command and entering yes at the prompt:
terraform destroy
Create a private connection
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Select the VPC network that you want to use.
Select the Private service connection tab.
Select the Private connections to services tab.
Click Create connection to create a private connection between your
network and a service producer.
For the Assigned allocation , select one or more existing allocated
ranges that are not being used by other service producers.
Click Connect to create the connection.
gcloud
Create a private connection.
gcloud services vpc-peerings connect \
--service = servicenetworking.googleapis.com \
--ranges = google-managed-services- VPC_NETWORK_NAME \
--network = VPC_NETWORK_NAME \
--project = PROJECT_ID
The command initiates a long-running Cloud SQL instance operation,
returning an operation ID.
Check whether the operation was successful.
gcloud services vpc-peerings operations describe \
--name = OPERATION_ID
You can specify more than one allocated range when you create a private
connection. For example, if a range has been exhausted, you can assign
additional allocated ranges. The service uses IP addresses from all the
provided ranges in the order that you specified.
Terraform
To create a private connection, use a Terraform resource .
resource "google_service_networking_connection" "default" {
network = google_compute_network.peering_network.id
service = "servicenetworking.googleapis.com"
reserved_peering_ranges = [google_compute_global_address.private_ip_address.name]
}
A service account in the service- HOST_PROJECT_NUMBER @service-networking.iam.gserviceaccount.com format is granted the servicenetworking.serviceAgent role
while the private connection is created because the account is provisioned just-in-time .
If you see an error about either the compute.globalAddresses.list permission or
the compute.projects.get permission for the project, run this gcloud command:
gcloud projects add-iam-policy-binding HOST_PROJECT_NAME \
--member = serviceAccount:service- HOST_PROJECT_NUMBER @service-networking.iam.gserviceaccount.com \
--role = roles/servicenetworking.serviceAgent
Change the private service access configuration
You can change the allocated address range of a private service connection
without modifying any existing Cloud SQL instances. To change
the private IP address of an existing Cloud SQL instance, follow
these steps .
To change the allocated address range:
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Select the VPC network that you want to use.
Select the Private service connection tab.
Select the Allocated IP ranges for services tab.
Select the name of the range you want to delete.
Note: Before you delete the range, make a note of its name. You need this name later in this procedure.
Click Release .
Click Allocate IP range .
Create a new range with the same name and new range
The name matters because the private connection has already been
established using that address name.
Note: After modifying or removing an allocated address range, update VPC
peerings. Use the following command, and make sure to use the
--force argument:
gcloud services vpc-peerings update \
--network = VPC_NETWORK_NAME \
--ranges = ALLOCATED_RANGES \
--service = servicenetworking.googleapis.com \
--force
Cloud SQL does not automatically delete the old
subnet with the old IP range. The range is marked as unusable and cannot be used
again in the project. This allows existing instances to stay in that subnet. To
permanently remove the subnet, all Cloud SQL instances using an address in
the range must be deleted. The subnet is deleted four days after the last
instance in the subnet is deleted.
Change the private IP address of an existing Cloud SQL instance
To change the private IP address of an existing Cloud SQL instance, move
the instance from its original network to a temporary VPC
network. Then, change the private service access
configuration of the instance's original network and move the
Cloud SQL instance back to its original network.
To move to a different VPC network, follow all but the final step
(moving the instance back) in the following procedure. In this case, the
TEMPORARY_VPC_NETWORK_NAME
is the new VPC network. Also,
delete
the old private connection .
It can take a few days for the deleted private connection to disappear from the
Google Cloud console.
If the Cloud SQL instance is hosted in a Shared VPC network,
the VPC_NETWORK_NAME
variables used in the following instructions must be the host project's
VPC network names. To specify a network with a Shared VPC
network, use the full URL of the
network—for example, projects/HOST_PROJECT/global/networks/NETWORK_NAME .
Note: If the project that's hosting the
VPC network operates in dual stack mode, then there are
considerations to keep in mind for using this project. For more information,
see Plan to upgrade all Cloud SQL instances in a network project .
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Create a temporary VPC network .
Create an IP allocation in the temporary VPC network .
Create a private connection in the temporary VPC network .
Move the Cloud SQL instance to the temporary VPC network.
gcloud beta sql instances patch INSTANCE_ID \
--project = PROJECT_ID \
--network = projects/ PROJECT_ID /global/networks/ TEMPORARY_VPC_NETWORK_NAME \
--no-assign-ip
Change the private service access configuration in
the original network to add a new allocated range or delete existing ones.
Move the Cloud SQL instance back to the original VPC
network.
gcloud beta sql instances patch INSTANCE_ID \
--project = PROJECT_ID \
--network = projects/ PROJECT_ID /global/networks/ ORIGINAL_VPC_NETWORK_NAME \
--no-assign-ip
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
