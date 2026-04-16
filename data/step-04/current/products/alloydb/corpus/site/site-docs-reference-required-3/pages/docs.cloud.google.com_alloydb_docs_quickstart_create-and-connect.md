---
title: "Create and query an AlloyDB database using the Google Cloud console \_|\_\
  \ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect
  title: "Create and query an AlloyDB database using the Google Cloud console \_|\_\
    \ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and query an AlloyDB database using the Google Cloud console
In AlloyDB for PostgreSQL, your databases are stored in clusters that contain
instances . In this quickstart, you set up a cluster, connect to its instance,
and insert and query sample data. For more information about AlloyDB
architecture, clusters, and instances, see AlloyDB overview .
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
Enable the Compute Engine, AlloyDB, Cloud Resource Manager, and Service Networking APIs.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, AlloyDB, Cloud Resource Manager, and Service Networking APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
The Service Networking API is required if you plan to configure
network connectivity to AlloyDB using a VPC network that
resides in the same Google Cloud project as AlloyDB.
The Compute Engine API and Cloud Resource Manager API are required if you plan to
configure network connectivity to AlloyDB using a VPC
network that resides in a different Google Cloud project.
Choose how to connect to AlloyDB .
Required roles
To get the permissions that
you need to create and connect to an AlloyDB database,
ask your administrator to grant you the
following IAM roles on your project:
Compute Network Admin ( roles/compute.networkAdmin )
AlloyDB Admin ( roles/alloydb.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create and connect to an AlloyDB database. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create and connect to an AlloyDB database:
compute.networks.list
compute.networks.addPeering
compute.addresses.create
servicenetworking.services.addPeering
alloydb.clusters.create
alloydb.instances.create
alloydb.instances.login
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Create a cluster and its primary AlloyDB instance
Note: To quickly set up a cluster, instance, and network for your development environment using a web interface, follow the steps in this codelab .
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click Create cluster .
In Configure your cluster , follow these steps:
In the Cluster ID field, enter my-cluster .
Enter a password. Take note of this password because you use it in this
quickstart.
Retain the default database version.
In the Region drop-down of Location , select the us-central1 (Iowa) region.
In Configure your primary instance , follow these steps:
In the Instance ID field, enter my-cluster-primary .
In Zonal availability , click Single zone .
Note: While we don't recommend a single zone instance for production, you can use a
single zone in this quickstart to minimize costs. For more information, see
Reduce costs using basic instances .
In the Machine type drop-down, select the 2 vCPU, 16 GB machine type.
In the Network drop-down of Connectivity , select the default network.
If you have a private access connection, continue to the creating a cluster step.
Otherwise, click Set up connection and follow these steps:
In Allocate an IP range , click
Use automatically assigned IP range .
Click Continue and then click Create connection .
Retain the default settings under Network security .
Click Create cluster . It might take several minutes for
AlloyDB to create the cluster and display it on the
primary cluster Overview page.
Connect to your instance and create a database in AlloyDB Studio
Note: To connect a psql client to an instance, follow the steps in Connect a psql client to an instance .
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click the name of your cluster, my-cluster , in the Resource name
column.
In the navigation pane, click AlloyDB Studio .
In the Sign in to AlloyDB Studio page, follow these steps:
Choose a database authentication method .
Select the postgres database.
Click Authenticate . The Explorer pane displays a list of the
objects in the postgres database.
To create a database, enter the following statement in the Editor 1 tab
and then click Run :
CREATE DATABASE guestbook ;
You know your database is created when the Statement executed successfully
message displays in the Results pane.
Connect to the guestbook database
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click the name of your cluster, my-cluster , in the Resource name
column.
In the navigation pane, click AlloyDB Studio .
In the Sign in to AlloyDB Studio page, follow these steps:
Select the guestbook database.
Select the postgres user.
Enter the password you created in
Create a cluster and its primary instance .
Click Authenticate . The Explorer pane displays a list of the
objects in the guestbook database.
Verify your database connection
Follow the steps in
Connect to the guestbook database .
To insert sample data into the guestbook database, enter the following in
the Editor 1 tab:
CREATE TABLE entries ( guestName VARCHAR ( 255 ),
content VARCHAR ( 255 ),
entryID SERIAL PRIMARY KEY );
INSERT INTO entries ( guestName , content ) values ( 'Alex' , 'I got here!' );
INSERT INTO entries ( guestName , content ) values ( 'Kai' , 'Me too!' );
Click Run . The Statement executed successfully message in the
Results pane indicates that data is inserted into your database.
To remove text from the Editor 1 tab so that you can run another
command, click Clear .
To select all entries in the database, enter the following query in the
Editor 1 tab:
SELECT * FROM entries ;
Click Run . Output that is similar to following appears in the
Results pane:
guestname | content | entryid
--------------+-------------+---------
Alex | I got here! | 1
Kai | Me too! | 2
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click the name of your cluster, my-cluster , in the Resource name
column.
Click delete Delete cluster .
In Delete cluster my-cluster , enter my-cluster to confirm you want to
delete your cluster.
Click Delete .
If you created a private connection when you
created a cluster , go to the Google Cloud console
Networking page
and click Delete VPC network .
What's next
Learn about other ways to connect to AlloyDB .
Enable project access to AlloyDB .
Grant access to other users .
Enable private services access .
Choose an AlloyDB machine type .
Create an AlloyDB cluster and its primary instance .
Learn about sizing recommendations .
Connect a psql client to an instance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
