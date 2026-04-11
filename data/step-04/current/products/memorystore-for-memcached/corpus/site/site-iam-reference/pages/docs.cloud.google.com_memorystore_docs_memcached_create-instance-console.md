---
title: "Quickstart: Create a Memorystore for Memcached instance by using the Google\
  \ Cloud console \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console
  title: "Quickstart: Create a Memorystore for Memcached instance by using the Google\
    \ Cloud console \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Memorystore for Memcached is being deprecated and will be shut down on January 31, 2029. After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects. We recommend that you migrate your workloads to Memorystore for Valkey , which offers superior performance and features.
Learn more about the deprecation | Read the migration guide
Home
Documentation
Databases
Memorystore
Memorystore for Memcached
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a Memorystore for Memcached instance by using the Google Cloud console
This quickstart walks you through the steps to create a Memorystore for Memcached
instance, connect to the instance, set a value, retrieve a value, and delete the
instance.
Caution: You cannot create a Memorystore for Memcached instance without first
having a private services access connection established. See Networking
for details on the private services access connection that is required for
Memorystore for Memcached.
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
Enable the Service Networking API for your project.
Enable the Service Networking API
Enable the Memorystore for Memcached API for your project.
Enable the Memorystore for Memcached API
Creating a Memcached instance
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click the Create Instance button.
Select the configurations for your new instance on the Create a Memcached
instance page in the Google Cloud console:
Enter an instance ID using only lowercase letters, numbers, and hyphens.
Start with a letter.
For example, my-memcached-instance-1 .
Choose us-central1 from the Region dropdown.
Choose Automatically distribute from the Zone dropdown.
Enter 2 under Nodes to create two nodes.
Choose 1 GB of Memory per node .
Choose 1 for Cores per node .
Select default for the Authorized network .
Note: If you see the Private service connection required
panel, you need to establish a private services access connection .
Click Create .
After the instance is created, click the instance ID to view the instance
details page.
Write down the IP address of one of your nodes.
Connecting to your instance from a Compute Engine VM
Note: To connect to a Memcached instance, your client VM must be located in the
same region, and must be connected to the same network, as your instance.
To test the connection:
Connect to a Linux VM. For steps to connect to a Linux VM, see Quickstart Using a Linux VM .
If you used a Debian based image to create your VM instance as described in the
quickstart, install telnet using apt-get :
sudo apt-get install telnet
From the terminal, telnet to the IP address of one of the Memcached nodes.
Replace node-ip-address with the IP address of your node.
telnet node-ip-address 11211
You should see the following output with the [bracketed-variables] replaced
your project's variables:
Trying [node-ip-address]…
Connected to [node-ip-address]
In the telnet session, enter some Memcached commands:
Enter:
get greeting
Result:
END
Enter:
set greeting 1 0 11
hello world
Result:
STORED
Enter:
get greeting
Result:
VALUE greeting 1 11
hello world
END
Memorystore for Memcached supports standard open source Memcached libraries.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click the ID of the instance you want to delete.
Click the Delete button.
In the prompt that appears, enter the instance's ID.
Click the Delete button.
What's next
Connect to a Memcached instance .
Use the Auto Discovery service .
Monitor your Memcached instance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
