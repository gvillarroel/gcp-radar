---
title: "Deploy a Dataproc Metastore service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/create-service
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster
  title: "Deploy a Dataproc Metastore service \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Deploy a Dataproc Metastore service
This page shows you how to create a Dataproc Metastore service
and connect to it from a Managed Service for Apache Spark cluster. After, you SSH into the
cluster, launch an instance of Apache Hive, and run some basic queries.
Dataproc Metastore provides you with a fully compatible Hive
Metastore (HMS), which is the established standard in the open source big data
ecosystem for managing technical metadata. This service helps you manage the
metadata of your data lakes and provides interoperability between the various
data processing tools you're using.
Note: This guide shows you how to configure Dataproc Metastore
using the provided default options. To learn how to configure
Dataproc Metastore with advanced settings, see Create a
metastore .
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
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc Metastore, Dataproc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Dataproc Metastore, Dataproc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required Roles
To get the permissions that
you need to create a Dataproc Metastore and a Managed Service for Apache Spark cluster,
ask your administrator to grant you the
following IAM roles:
To grant full access to all Dataproc Metastore resources, including setting IAM permissions:
( roles/metastore.admin )
on the user account or service account
To grant full control of Dataproc Metastore resources:
Dataproc Metastore Editor ( roles/metastore.editor )
on the user account or service account
To create a Managed Service for Apache Spark cluster:
( roles/dataproc.worker )
on the service account
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create a Dataproc Metastore and a Managed Service for Apache Spark cluster. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a Dataproc Metastore and a Managed Service for Apache Spark cluster:
To create a Dataproc Metastore service:
metastore.services.create
on the user account or service account
To create a Managed Service for Apache Spark cluster:
Managed Service for Apache Spark worker ( roles/dataproc.worker )
on on the service account
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Dataproc Metastore IAM overview .
Create a Dataproc Metastore service
The following instructions show you how to create a basic
Dataproc Metastore service using the provided default settings.
Console
In the Google Cloud console, go to the Dataproc Metastore page.
Go to
Dataproc Metastore
In the navigation menu, click +Create .
The Create Metastore service dialog opens.
Select Dataproc Metastore 2 .
In the Service name field, enter example-service .
In the Data location field, select us-central1 .
For the remaining service configuration options, use the provided
defaults.
To create and start the service, click Submit .
Your new metastore service appears on the Dataproc Metastore page. The
status displays Creating until the service is ready to use. When it's
ready, the status changes to Active . Provisioning the service might take
a couple of minutes.
The following screenshot shows an example of the Create service page
using some of the provided defaults.
gcloud CLI
gcloud metastore services create example-service \
--location=us-central1 \
--instance-size=MEDIUM
REST
Follow the API instructions to create a service
by using the APIs Explorer.
Create a Managed Service for Apache Spark cluster and connect to Dataproc Metastore
Next, you create a Managed Service for Apache Spark cluster and connect to your metastore
from the cluster. After that, your cluster uses the metastore service as its HMS.
The cluster you create here uses the default provided settings.
Console
In the Google Cloud console, go to the Dataproc Clusters page.
Go to
Managed Service for Apache Spark Clusters
In the navigation bar, select +Create cluster .
The Create a cluster dialog opens providing multiple infrastructure choices that
you can choose from.
In the Cluster on Compute Engine row, select Create .
The Create a Managed Service for Apache Spark cluster on Compute Engine page
opens.
In the Cluster Name field, enter example-cluster .
In the Region and Zone menus, select us-central1 .
For the remaining Set up cluster options, use the provided defaults.
In the navigation menu, click the Customize cluster (optional) tab.
In the Dataproc Metastore section, select the metastore
service you created earlier.
If you followed this tutorial as-is, it's named example-service .
For the remaining service configuration options, use the provided defaults.
To create the cluster, click Create .
Your new cluster appears in the Clusters list. The cluster status
displays Provisioning until the cluster is ready to use. When it's
ready, the status changes to Active . Provisioning the cluster might
take a couple of minutes.
Note: The Managed Service for Apache Spark cluster creation process can fail
if your service account doesn't have the appropriate roles. For more
information, see Cluster creation fails due to insufficient roles .
gcloud CLI
To create a cluster using the provided default settings, run the
following gcloud dataproc clusters create
command:
gcloud dataproc clusters create example-cluster \
--dataproc-metastore=projects/ PROJECT_ID /locations/us-central1/services/example-service \
--region=us-central1
Replace PROJECT_ID with the project ID of the
project that you created your Dataproc Metastore service in.
Note: The Managed Service for Apache Spark cluster creation process can fail if your
service account doesn't have the appropriate roles. For more information,
see Cluster creation fails due to insufficient roles .
REST
Follow the API instructions to create a cluster
by using the APIs Explorer.
Connect to Apache Hive with a Managed Service for Apache Spark cluster
These next steps show you how to run some example commands in Apache Hive to create
a database and a table.
Next, open an SSH session on the Managed Service for Apache Spark cluster and launch a
Hive session.
In the Google Cloud console, go to the VM
Instances page.
In the list of virtual machine instances, click SSH next to example-cluster .
A browser window opens in your home directory on the node with an output similar
to the following:
Connected, host fingerprint: ssh-rsa ...
Linux cluster-1-m 3.16.0-0.bpo.4-amd64 ...
...
example-cluster@cluster-1-m:~$
To start Hive and create a database and table, run the following commands in the SSH session:
Start Hive.
hive
Create a database called myDatabase .
create database myDatabase;
Show the database you created.
show databases;
Use the database you created.
use myDatabase;
Create a table called myTable .
create table myTable(id int,name string);
List the tables under myDatabase .
show tables;
Describe the schema of the table you created.
desc MyTable;
Running these commands show an output similar to the following:
$hive
hive> show databases;
OK
default
hive> create database myDatabase;
OK
hive> use myDatabase;
OK
hive> create table myTable(id int,name string);
OK
hive> show tables;
OK
myTable
hive> desc myTable;
OK
id int
name string
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
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
If the project that you plan to delete is attached to an organization,
expand the Organization list in the Name column.
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Alternatively, you can delete the resources used in this tutorial:
Delete the Dataproc Metastore service.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Go to Dataproc Metastore
In the service list, select example-service .
In the navigation bar, click Delete .
The Delete service dialog opens.
In the dialog, click Delete
Your service no longer appears in the Service list .
gcloud CLI
To delete your service, run the following gcloud metastore services
delete command.
gcloud metastore services delete example-service \
--location=us-central1
REST
Follow the API instructions to delete a service
by using the APIs Explorer.
All deletions succeed immediately.
Delete the Cloud Storage bucket
for the Dataproc Metastore service.
Note: Deleting the Dataproc Metastore service doesn't
automatically delete its bucket.
Delete the Managed Service for Apache Spark cluster
that used the Dataproc Metastore service.
What's next
Grant basic Dataproc Metastore IAM roles to users
Import metadata into a service
Dataproc Metastore overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
