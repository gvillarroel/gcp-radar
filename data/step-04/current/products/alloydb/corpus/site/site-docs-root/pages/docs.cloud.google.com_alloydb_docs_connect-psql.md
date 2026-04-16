---
title: "Connect from Compute Engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/connect-psql
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/connect-psql
  title: "Connect from Compute Engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
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
Connect from Compute Engine
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to connect the psql client tool from Compute Engine
to an AlloyDB instance.
The procedure to connect psql to an AlloyDB
instance involves these tasks:
Create a Compute Engine VM that can connect to AlloyDB
instances using private services access.
Install the psql client on the Compute Engine VM.
Get the IP address of the AlloyDB instance you want to connect
to.
Run the psql client.
The first two of these tasks are one-time operations. After you create a
Compute Engine VM and install the psql client on it, you can continue
to use the VM to connect psql to AlloyDB instances by
performing remaining tasks.
Before you begin
The Google Cloud project you are using must have been
enabled to access AlloyDB .
A VPC network in the Google Cloud project that you are using must already
be configured for private
services access to AlloyDB.
You must have one of these IAM roles in the Google Cloud project you are using:
roles/alloydb.admin (the AlloyDB Admin predefined IAM role)
roles/owner (the Owner basic IAM role)
roles/editor (the Editor basic IAM role)
If you don't have any of these roles, contact your Organization Administrator to request
access.
If the client host has a firewall, it must allow egress connections
to port 5432 on your AlloyDB instances' IP addresses.
Create a Compute Engine VM
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Select the project containing the AlloyDB instance you
want to connect to.
Click Create instance .
Click the Machine configuration section.
Enter a Name for the instance.
Configure the region and zone where you want to create the instance.
Select a machine series and the corresponding machine type.
Retain the default values in the OS and Storage section.
Click the Networking section, and set Network interfaces to the VPC network configured for private services access to AlloyDB.
If Network interfaces is not set to the VPC network
configured for private services access, expand it and then set
Network to the VPC network.
Retain the default values in the Observability section.
Click the Security section.
In Identity and API access , set Access scopes to Allow full access to all Cloud APIs .
Retain the default values in the Advanced section.
Click Create .
After the VM is created, connect to the Compute Engine VM you created using SSH.
Install the psql client tool
To install the psql client tool on your client host, see
Install the psql client tool .
If you are using a Compute Engine VM as your client host, follow these
steps to connect to your VM and install psql :
Connect to the Compute Engine VM you created using SSH.
By default, SSH connections to Compute Engine VMs use Identity-Aware Proxy.
Depending on your organization's networking policies, you might need to
create an ingress firewall
rule to allow traffic to your VMs.
Console
In the Google Cloud console, go to the VM instances
page.
Go to VM instances
In the list of virtual machine instances, click SSH in
the row of the instance you created.
gcloud
Use the gcloud compute
ssh command to connect to the instance you created.
gcloud compute ssh --project= PROJECT_ID --zone= ZONE VM_NAME
Replace the following:
PROJECT_ID : the ID of the project that contains
the instance
ZONE : the name of the zone in which the
instance is located
VM_NAME : the name of the instance
Install the psql client from the package manager:
sudo apt-get update
sudo apt-get install postgresql-client
Get the IP address of the AlloyDB instance
To get the IP address of the AlloyDB instance you want to connect
to, view that instance's settings .
Run the psql client
Connect to the VM you created using SSH.
Console
In the Google Cloud console, go to the VM instances
page.
Go to VM instances
In the list of virtual machine instances, click SSH in
the row of the instance you created.
gcloud
Use the gcloud compute
ssh command to connect to the instance you created.
gcloud compute ssh --project= PROJECT_ID --zone= ZONE VM_NAME
Replace the following:
PROJECT_ID : the ID of the project that contains
the instance.
ZONE : the name of the zone in which the
instance is located.
VM_NAME : the name of the instance.
Run the psql client tool:
psql -h IP_ADDRESS -U USERNAME -d postgres
You are prompted to enter the password of the USERNAME user.
If you're connecting for the first time, specify postgres for both the USERNAME and the database. Your command looks like the following:
psql -h IP_ADDRESS -U postgres -d postgres
Use the password that you set when you created the cluster.
What's next
Learn about other ways to connect to AlloyDB .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
