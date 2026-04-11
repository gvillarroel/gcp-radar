---
title: "Quickstart: Create a Memorystore for Redis instance by using Terraform \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform
  title: "Quickstart: Create a Memorystore for Redis instance by using Terraform \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a Memorystore for Redis instance by using Terraform
Learn how to create a Memorystore for Redis instance, connect to it, and then delete
it.
This quickstart uses the Google Cloud Platform provider
for Terraform.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Memorystore for Redis API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Memorystore for Redis API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
If you haven't already, install the Google Cloud SDK .
When prompted, choose the project that you selected or created.
If you already have the Google Cloud SDK installed, then update it.
gcloud components update
Enable the Memorystore for Redis API.
Memorystore for Redis
Have a Terraform file to which you can add the Memorystore resource. For
instructions on setting up Terraform with Google Cloud, see Getting Started with the Google Cloud Provider .
Required roles
To get the permissions that
you need to create a Memorystore for Redis instance,
ask your administrator to grant you the
following IAM roles on the project:
Cloud Memorystore Redis Admin ( roles/redis.admin )
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
Service Account User ( roles/iam.serviceAccountUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a Memorystore for Redis instance
In this section, you create a 2-GB Memorystore for Redis instance that's
located in the us-central1 region and is in the Basic tier. For more information
about tiers, see Redis tier capabilities .
Add the following resource to your Terraform configuration file:
resource "google_redis_instance" "my_memorystore_redis_instance" {
name = "myinstance"
tier = "BASIC"
memory_size_gb = 2
region = "us-central1"
redis_version = "REDIS_6_X"
}
Add the following output value
to your Terraform configuration file to print the IP address of the
instance. You need this address to connect to your instance.
output "host" {
description = "The IP address of the instance."
value = "${google_redis_instance.my_memorystore_redis_instance.host}"
}
Run the terraform init command.
Run the terraform plan command, and then review the instance to be created.
To create the instance, run the terraform apply command.
Connect to the Memorystore for Redis instance from a Compute Engine VM
You can connect to the Memorystore for Redis instance from any Compute Engine
VM that uses the instance's authorized network with a supported RFC 1918 IP address .
If you don't have a Compute Engine VM that uses that same authorized
network as your instance, then create one and connect to the VM by using SSH. To
do this, follow the steps in Create a Linux VM instance in Compute Engine .
Use apt-get to install telnet :
sudo apt-get install telnet
From the terminal, telnet to the IP address of the instance. Replace
VARIABLES with appropriate values.
telnet INSTANCE_IP_ADDRESS 6379
If you can connect to the instance, then the command returns this result:
Trying INSTANCE_IP_ADDRESS …
Connected to INSTANCE_IP_ADDRESS
In the telnet session, enter some Redis commands:
Enter:
PING
Result:
PONG
Enter
SET HELLO WORLD
Result:
+OK
Enter:
GET HELLO
Result:
$5
WORLD
Clean up
To avoid incurring charges to your Google Cloud account for the resources used
on this page, follow these steps.
Remove the google_redis_instance resource from your Terraform configuration
file.
To delete the resource, run the terraform init , terraform plan , and
terraform apply commands.
Optional . If you created a Compute Engine VM for this quickstart,
then delete it.
What's next
Learn more about creating and managing instances .
Learn about other ways to connect to your Redis instance .
Learn about the characteristics of a Redis instance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
