---
title: "Quickstart: Create a Memorystore for Redis instance by using the gcloud CLI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/create-instance-gcloud
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/create-instance-gcloud
  title: "Quickstart: Create a Memorystore for Redis instance by using the gcloud\
    \ CLI \_|\_ Google Cloud Documentation"
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
Create a Memorystore for Redis instance by using the gcloud CLI
Learn how to create a Memorystore for Redis instance, connect to it, and then delete
it.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
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
If you haven't already, install the Google Cloud CLI .
When prompted, choose the project that you selected or created.
If you already have the Google Cloud CLI installed, then update it.
gcloud components update
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
located in the us-central1 region and is in the Basic tier. For more
information about tiers, see Redis tier capabilities .
Open a terminal window.
To set the project that you want to create your instance in as the default
project, enter the following command:
gcloud config set core/project PROJECT_ID
To create a 2 GiB Basic Tier Redis instance in the us-central1 region,
enter the following command:
gcloud redis instances create myinstance --size=2 --region=us-central1 \
--redis-version=redis_6_x
After you create the instance, to get the IP address and port number of the
instance, enter the following command:
gcloud redis instances describe myinstance --region=us-central1
If you can access to the instance, then the command returns this result:
authorizedNetwork: projects/my-project/global/networks/default
createTime: '2018-04-09T21:47:56.824081Z'
currentLocationId: us-central1-a
host: 10.0.0.27
locationId: us-central1-a
memorySizeGb: 2
name: projects/my-project/locations/us-central1/instances/myinstance
networkThroughputGbps: 2
port: 6379
redisVersion: REDIS_6_X
reservedIpRange: 10.0.0.24/29
state: READY
tier: BASIC
Make a note of your instance's host and port values. You need these
values to connect to the instance.
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
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To delete the instance, enter the following command:
gcloud redis instances delete myinstance --region=us-central1
To confirm the deletion, enter Y :
You are about to delete instance [myinstance] in [us-central1].
Any associated data will be lost.
Do you want to continue (Y/n)? Y
Delete request issued for: [myinstance]
If you can delete to the instance, then the command returns this result:
Deleted instance [myinstance].
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
