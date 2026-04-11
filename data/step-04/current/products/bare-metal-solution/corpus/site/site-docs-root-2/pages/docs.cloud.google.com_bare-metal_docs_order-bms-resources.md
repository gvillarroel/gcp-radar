---
title: "Order Bare Metal Solution resources \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/order-bms-resources
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/order-bms-resources
  title: "Order Bare Metal Solution resources \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Order Bare Metal Solution resources
This document explains how to create, view, and track procurements.
After you've executed a simplified, one-time Bare Metal Solution Order Form, you
can order your Bare Metal Solution resources online by creating procurements
through the Google Cloud console. Procurements let you order resources as you scale,
without having to execute a new Bare Metal Solution Order Form every time.
Procurements are enabled for you in the Google Cloud console only after you've
signed the Order Form. Contact Google Cloud Sales
to get started on the Order Form.
Important: The procurements are billed as per the terms agreed upon in the Order
Form.
You can use procurements to order the following Bare Metal Solution resources:
Servers ( available server configurations )
Storage ( available storage choices )
Partner Interconnect bandwidth
To procure any other Bare Metal Solution resource,
contact Google Cloud sales .
Before you begin
Grant Identity and Access Management (IAM) roles that give users the necessary
permissions to create procurements.
The predefined IAM role
roles/baremetalsolution.procurementseditor
includes all the permissions that you need to create and view a procurement.
For more information about IAM roles in Bare Metal Solution,
see Configure IAM for Bare Metal Solution .
Ensure that the Bare Metal Solution API is enabled in your Google Cloud
project. For instructions, see Set up your Google Cloud project to use the Bare Metal Solution API .
Create a procurement
To create a procurement, follow these steps:
In the Google Cloud console, go to the Procurements page.
Go to Procurements
Click Create .
Enter a name for your procurement.
Select a location where your Bare Metal Solution environment is located.
From the Pod drop-down list, select a pod in which you want to create
your resources.
A pod is a unit of isolation that contains your Bare Metal Solution resources.
A region can have multiple pods.
Note: Resources in different pods cannot be connected.
The Pod drop-down list also shows the number of your existing
Bare Metal Solution resources in each pod of the selected
location.
The following pages show you the pods that contain your existing resources:
Servers
Networks
Volumes
NFS Shares
If you're unsure about which pod to select, contact
Google Cloud Sales .
Select a commitment term:
1 month (Applicable only to storage and Partner Interconnect.)
1 year
3 years
Add a server:
Click Add servers .
Select the type of the server.
For information about the types of servers available, see
Server configurations .
Enter the quantity of the servers.
Add storage:
Click Add storage .
Select the type of storage:
HDD
Performance SSD
SSD
Enter the quantity of storage.
You can add storage in increments of 1
TiB only. For example, to order 10 TiB of storage, enter 10 in the
Quantity field.
Add Partner Interconnect bandwidth:
Click Add bandwidth .
Enter the quantity of interconnect bandwidth.
You can add bandwidth in increments of 1 Gbps only. For example, to order
10 Gbps of bandwidth, enter 10 in the Quantity field.
When you add a resource, the page shows the monthly unit price, capacity of
resource, and its total price.
Click Done .
In the Procurement summary section, review the total monthly cost of your
procurement.
Click Submit .
Click Confirm .
View and track procurements
The time to fulfill an order might vary depending on the availability, type, and
quantity of the resources that you want to procure. Some procurements might require
evaluation (two business days) or additional processing (four to six weeks). You
can check the status of your procurement for detailed information.
To view details and track your procurements, follow these steps:
In the Google Cloud console, go to the Procurements page.
Go to Procurements
The Procurements page shows the following details for the procurements:
Status: The status of the procurement. A procurement can be in one of the
following states:
Pending: The procurement request is pending for evaluation or
requires additional processing.
In progress: The procurement fulfillment is in progress.
Completed: All resources are procured and fulfillment is
complete.
Name: The name of the procurement.
Location: The location of your Bare Metal Solution environment.
Created: The date of creation of the procurement.
To view more details and status of a procurement, click the name of the
procurement.
The Procurement details page shows the following information for the
selected procurement:
Name: The name of the procurement.
Status: The status of the procurement. A procurement can be in one of the
following states:
Pending: The procurement request is pending for evaluation or
requires additional processing.
In progress: The procurement fulfillment is in progress.
Completed: All resources are procured and fulfillment is
complete.
Location: The location of your Bare Metal Solution environment.
Pod: The pod in which your resources are procured.
Procurement details: The details of the procurement.
To view the status of individual resources, click the commitment. You can
view the following details:
Requested: The number of ordered resources.
Procured: The number of procured resources.
Billed: The number of billed resources.
You need not wait for the whole procurement to complete in order to start using the
resources that are procured. As your resources are procured, you can
provision them through the following options and start using them:
Google Cloud console intake form
Create a network UI
Create a storage volume UI
Create an NFS volume UI
What's next
Deploy your Bare Metal Solution environment .
Configure IAM for Bare Metal Solution .
Maintain the Bare Metal Solution environment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
