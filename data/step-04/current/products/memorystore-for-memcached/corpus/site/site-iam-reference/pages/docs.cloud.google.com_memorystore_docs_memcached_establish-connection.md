---
title: "Establish a private services access connection \_|\_ Memorystore for Memcached\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/establish-connection
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/establish-connection
  title: "Establish a private services access connection \_|\_ Memorystore for Memcached\
    \ \_|\_ Google Cloud Documentation"
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
Establish a private services access connection
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to establish a private services access connection for a
network. Any network on which you provision a Memorystore for Memcached instance must
have a private services access connection. Otherwise, you cannot select that
network when creating a Memorystore for Memcached instance. See Networking
for more details.
We recommend that your organization's networking team / networking admin manage
these steps for setting up a private services access connection before allowing
application developers to provision Memcached instances.
If you are an application developer, usually your networking team should manage
establishing a private services access connection. For more details, see Communicating networking requirements .
There are three ways to set up a private services access connection.
Gcloud (Recommended)
Establishes a private services access connection before the Memcached
instance creation process.
Console: VPC network
Establishes the connection before the Memcached instance creation process.
Console: Memcached
Establishes the connection during the Memcached instance creation process.
gcloud
Enable the Service Networking API:
Enable the Service Networking API
Check to see if
a private service access connection has been established for your network.
If the connection has already been established, see Creating Memcached instances for instructions on how to create a
Memcached instance.
Open a terminal window.
Set your default project by running the following command, replacing
variables with appropriate values:
gcloud config set core/project project-id
Reserve an IP address range in your network by running the following command:
gcloud compute addresses create reserved-range-name --global --prefix-length=24 --description= description --network= vpc-network --purpose=vpc_peering
Memorystore chooses a CIDR range for you automatically so you
don't have to specify it. However, you can set the CIDR prefix length.
For this example, the length is set to 24 . This value must be at
least 24 , but you can set it to any smaller prefix length, such as
23 . This creates a larger IP address range.
For information on managing private services access, see Configuring private services access .
Create a private connection
between your network and the private services access network by running the
following command:
gcloud services vpc-peerings connect --service=servicenetworking.googleapis.com --ranges= reserved-range-name --network= vpc-network --project= project-id
Console: VPC network
Enable the Service Networking API:
Enable the Service Networking API
Check to see if
a private service access connection has been established for your network.
If the connection has already been established, see Creating Memcached instances for instructions on how to create a
Memcached instance.
Go to the VPC Networks page in the Google Cloud console.
Go to the VPC networks page
Click the name of your network. Usually it is named "default".
Click Private service connection .
Click Allocate IP ranges for services .
Click Allocate IP range .
Enter a name for your range, such as "private-services-access-range".
Enter a description for your range, such as "Range of IP addresses to
be used for the Private services access connection".
Select Automatic if you want Google to choose your range for you.
Enter a CIDR prefix of /24 or less. For example, /23 is an
acceptable prefix.
Select Custom if you want to choose the range yourself.
Enter your desired range with a CIDR prefix of /24 or less.
Click Allocate .
Click Private connections to services .
Click the Create connection button.
Under the Assigned allocation dropdown, select the range you just
created in the steps above.
Click Ok .
Click Connect .
Refresh the page to see your new connection listed under the Private
connections to services tab.
Console: Memcached
Enable the Service Networking API:
Enable the Service Networking API
Check to see if
a private service access connection has been established for your network.
If the connection has already been established, see Creating Memcached instances for instructions on how to create a
Memcached instance.
Follow the steps at Creating Memcached instances
until you see a panel that says, Private service connection required .
Note: you do not need to complete the instance creation steps in order
to establish a private services access connection. You can establish the
connection for your network, and abandon the instance creation process,
if you wish.
Click the Set Up Connection button in the Private service
connection panel. Doing so opens a slide out panel for setting up
private services access.
Enable the Service Networking API.
Allocate an IP range using one of the following methods:
Select an existing IP range.
Allocate a new IP range.
Enter a name for your range.
Enter a valid CIDR range with a block size of /24 . For example:
10.0.0.0/24 .
Use an automatically allocated IP range.
Click the Create Connection button.
What's next
Create a Memcached instance .
Connect to a Memcached instance .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
