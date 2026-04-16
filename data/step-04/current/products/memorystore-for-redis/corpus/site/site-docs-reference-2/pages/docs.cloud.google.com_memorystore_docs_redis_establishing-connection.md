---
title: "Establish a private services access connection \_|\_ Memorystore for Redis\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/establishing-connection
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/release-notes
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/establishing-connection
  title: "Establish a private services access connection \_|\_ Memorystore for Redis\
    \ \_|\_ Google Cloud Documentation"
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
Establish a private services access connection
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to establish a private services access connection for a network. Establishing a private services access
connection for a network is a prerequisite for creating a Redis instance with
the private services access connection mode designated for that network. For
more details, see Networking .
Note: We recommend that your organization's networking team / networking admin
manage these steps for setting up a private services access connection.
If you are an application developer, usually your networking team should manage
establishing a private services access connection. For more details, see Communicating networking requirements .
Private services access setup instructions
Follow these steps to setup a private services access connection for your
network:
gcloud
Enable the Service Networking API:
Enable the Service Networking API
If you are using Shared VPC, enable the API in both the Service Project
and the Host Project.
Check to see if
a private service access connection has been established for your network.
If the connection has already been established, then see Create a Redis instance that uses a centralized IP address range for instructions on how to create a
Redis instance.
Open a terminal window.
Set your default project by running the following command, replacing
variables with appropriate values:
gcloud config set core/project project-id
Reserve an IP address range in your network by running the following command:
gcloud compute addresses create reserved-range-name --global --prefix-length=24 --description= description --network= vpc-network --purpose=vpc_peering
In the command above, the CIDR prefix length is set to 24 . This value
must be 24 or less. For example, 23 is an acceptable prefix. Note
that smaller CIDR prefixes create larger IP address ranges.
For information on managing private services access, see Configuring private services access .
Create a private connection
between your network and the private services access network by running the
following command:
gcloud services vpc-peerings connect --service=servicenetworking.googleapis.com --ranges= reserved-range-name --network= vpc-network --project= project-id
Console: VPC network
Enable the Service Networking API:
Enable the Service Networking API
If you are using Shared VPC, enable the API in both the Service Project
and the Host Project.
Check to see if
a private service access connection has been established for your network.
If the connection has already been established, then see Create a Redis instance that uses a centralized IP address range
for instructions on how to create a Redis instance.
Go to the VPC Networks page in the Google Cloud console.
Go to the VPC networks page
Click the name of your network. Usually it is named "default".
Click Private services access .
Click Allocate IP ranges for services .
Click Allocate IP range .
Enter a name for your range, such as "private-services-access-range".
Enter a description for your range, such as "Range of IP addresses to
be used for the Private services access connection".
Select Automatic if you want Google to choose your range for you.
Enter a CIDR prefix of /24 or less. For example, /23 is an
acceptable prefix. Note that smaller CIDR prefixes create larger IP
address ranges.
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
Console: Redis
Enable the Service Networking API:
Enable the Service Networking API
If you are using Shared VPC, enable the API in both the Service Project
and the Host Project.
Follow the steps at Create a Redis instance on a VPC network
until you see the Advanced network options expander, and open it.
Note: If you see the Private service connection required panel, a private
services access connection has not been established yet. If you do not see
this panel, the connection has already been established for your network,
and any Redis instance created with this network uses the private services access connection mode .
Click the Set Up Connection button in the Private service
connection panel. Doing so opens a slide-out panel for setting up
private services access.
Allocate an IP range using one of the following methods:
Select an existing IP range.
Allocate a new IP range.
Enter a name for your range.
Enter a valid CIDR range with a block size of /24 . For example:
10.0.0.0/24 .
Use an automatically allocated IP range.
Click the Create Connection button.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
