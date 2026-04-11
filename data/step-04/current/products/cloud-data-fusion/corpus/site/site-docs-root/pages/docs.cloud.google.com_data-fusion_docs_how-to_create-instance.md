---
title: "Create a public instance \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance
  title: "Create a public instance \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Create a public instance
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create a Cloud Data Fusion
instance .
Before you begin
Enable the Cloud Data Fusion API .
The following permission is required to create Cloud Data Fusion
instances: instances.create . For more information, see Access control .
Cloud Data Fusion instances run as the Compute Engine
default service account . For information about the
types and roles available, see Service accounts .
By default, Cloud Data Fusion executes pipelines using a
Dataproc cluster in your project. Ensure that your project meets
the Dataproc networking requirements .
New projects start with a default network .
The default network is pre-populated with a firewall rule default-allow-ssh ,
that allows incoming connections on TCP port 22 from any source to any instance
in the network. In versions earlier than 6.2.0, if this rule to allow ingress on TCP
port 22 doesn't exist in the network used by your Cloud Data Fusion
instance, you must create this rule .
Create an instance
Caution: After you create a Cloud Data Fusion instance, you cannot
change its edition.
Console
If the API is enabled , the
Cloud Data Fusion section in the Google Cloud console shows an
Instances page, where you can create and manage your
Cloud Data Fusion instances.
In the console, go to the Cloud Data Fusion page.
Click Instances , and then click Create an instance .
Create an instance
Enter an Instance name .
Enter a Description for your instance.
Specify the Region in which to create the instance.
Specify the Cloud Data Fusion Version .
Select an Edition .
The default is Basic .
Optional: Click Add accelerators to select accelerators to use in
your instance.
Specify the Dataproc service account
to use for running your Cloud Data Fusion pipeline in
Dataproc. The default is the
Compute Engine account. Regardless of version, make sure that a
service account has appropriate Identity and Access Management roles for your needs. For
more information, see
Granting service account user permission .
Optional: Specify any advanced options. If you don't specify anything,
the following defaults are used:
Category
Setting
Description
Default
Private IP
Enable internal IP addresses
Create the
Cloud Data Fusion instance with an internal IP address.
Disabled
Advanced monitoring and logging
Enable Dataproc Cloud Logging
Enable Dataproc Cloud Monitoring
View
advanced pipeline logs in Cloud Logging .
Disabled
Dataplex Universal Catalog data lineage
integration
Enable or disable integration with Dataplex Universal Catalog
data lineage
View
lineage in Dataplex Universal Catalog .
Disabled
Encryption
Use a customer-managed encryption key (CMEK)
Use
role-based access control in versions 6.5 and later.
Disabled
Labels
A key-value pair
The resource labels for the instance to use to annotate any
related underlying resources, such as Compute Engine
VMs. Label keys and label values can only contain letters,
numbers, dashes, and underscores. Label keys must start with a
letter or number.
None
Maintenance
Enable maintenance window
Set the window of time when Cloud Data Fusion can perform
maintenance operations on the instance. For more information, see
Configure maintenance windows .
Disabled
Click Create . It takes up to 30 minutes for the instance
creation process to complete.
While Cloud Data Fusion creates your instance, a progress
wheel displays next to the instance name on the Instances page. After
completion, it turns into a green check mark and indicates that you can
start using the instance.
After you create an instance, you cannot add or remove the options for
Cloud Logging and Cloud Monitoring
or Private IP .
To update these options with the Cloud Data Fusion API, call the
PATCH method.
API
Create an instance:
To create a Cloud Data Fusion instance with the
Cloud Data Fusion REST API ,
construct an
instances.create
API request, filling in the
Instance
resource with your configuration information.
What's next
Learn more about Cloud Data Fusion .
Work through a tutorial .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
