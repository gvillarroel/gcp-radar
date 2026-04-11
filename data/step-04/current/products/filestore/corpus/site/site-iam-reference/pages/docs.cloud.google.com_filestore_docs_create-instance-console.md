---
title: "Quickstart: Create a Filestore instance using the Google Cloud console \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/create-instance-console
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/create-instance-console
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/create-instance-console
  title: "Quickstart: Create a Filestore instance using the Google Cloud console \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a Filestore instance using the Google Cloud console
This quickstart shows you how to perform basic operations in Filestore
using this Google Cloud console. In the quickstart, you will:
Create a Filestore instance.
Mount the file share from that instance on a Compute Engine client VM instance.
Create a file on the mounted file share.
Delete the Filestore instance.
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
Enable the Filestore API.
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
Enable the Filestore API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Important: If you choose to use an existing project with this quickstart,
it must have a non-legacy default VPC network with unmodified firewall
rules. Production Filestore instances can have other
network configurations, see Networking
for more information.
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Create and manage Filestore instances:
Cloud Filestore Editor ( roles/file.editor )
Create and manage Compute Engine instances:
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
Create, modify, and delete networking resources, except for firewall rules:
Compute Network Admin ( roles/compute.networkAdmin )
Run operations on IAM service accounts:
Service Account User ( roles/iam.serviceAccountUser )
Manage network and related Google Cloud resources:
Network Administrator ( roles/iam.networkAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Create a Compute Engine VM instance to be the client
In the Google Cloud console, go to the VM Instances page.
Go to the Compute Engine instances page
Click Create Instance and configure the instance as follows.
Set Name to nfs-client .
Set Zone to us-central1-c .
Keep the default boot disk.
In the Networking > Firewall section, select the Allow HTTP traffic checkbox.
Keep the network as default .
Click Create to create the instance.
Create a Filestore instance
This quickstart shows how to create an instance in the Regional tier with custom performance enabled. For details on creating instances, see create an instance .
In the Google Cloud console, go to the Filestore Instances page.
Go to the Filestore Instances page
Click Create Instance and configure the instance as follows:
Set Instance ID to nfs-server .
Set Instance type to Regional .
In Capacity , enter 1 TiB .
In Performance , click the Custom performance toggle to enable custom performance. By default, you get 12,000 IOPS in the Performance field. The Scale performance with capacity checkbox is checked, so if you change the value in the Capacity field, performance scales accordingly. For details on configuration options, see configure performance .
Note: After activating custom performance for an instance you can't deactivate it for that instance. Instances with activated custom performance are billed according to purchased IOPS. For details, see configure custom performance and Filestore pricing .
Set Region to us-central1 .
Set VPC network to default .
Set File share name to vol1 .
Set Allocated IP range to Use an automatically allocated IP range .
Set Access controls to Grant access to all clients .
Click Create .
Mount the Filestore file share on the client
In the Google Cloud console, go to the VM Instances page.
Go to the VM instances page
In the list of VM instances, click the SSH button for nfs-client to
open a terminal window connected to that instance.
Install NFS by running the following commands:
sudo apt-get -y update &&
sudo apt-get -y install nfs-common
Make a mount directory for the Filestore file share by running the following command:
sudo mkdir -p /mnt/test
Mount the file share by running the mount command
and specifying the Filestore instance IP address and
file share name:
sudo mount MOUNT-POINT-DIRECTORY /mnt/test
where:
MOUNT-POINT-DIRECTORY is the path to the directory where the Filestore file share is mounted. For example: 10.0.0.2:/vol1
Optional: Confirm that the Filestore file share is
mounted:
df - h -- type = nfs
Make the file share accessible by changing the permissions:
sudo chmod go + rw / mnt / test
Important: We recommend setting more specific permissions in a production
environment. For more information, see
Configuring access on a file share .
Create a file on the file share
In the terminal window that is connected to the nfs-client instance, create a file
named testfile by running the following command:
echo 'This is a test' > /mnt/test/testfile
Confirm that the file was created by running the following command:
ls /mnt/test
and verifying that testfile is listed.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the Google Cloud project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete the Filestore instance
In the Google Cloud console, go to the Filestore Instances page.
Go to the Filestore instances page
Click the nfs-server instance ID to open the instance details page.
Click Delete delete .
When prompted, type the instance ID.
Click Delete .
Delete the Compute Engine instance
In the Google Cloud console, go to the Filestore Instances page.
Go to the VM instances page
Select the checkbox next to the nfs-client instance name.
Click Delete delete .
When prompted, click Delete again.
What's next
Read the Filestore Overview to learn more about the basics of Filestore.
Set up a Filestore instance on your own by following the instructions at Creating Instances .
Read the Access Control page to learn how to control access to Filestore operations
and the resources on an instance.
See how to copy data to or from a Filestore instance .
See how to transfer large datasets from Cloud Storage to Filestore .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
