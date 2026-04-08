---
title: "REST Resource: projects.locations.connectors \_|\_ Virtual Private Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1beta1/projects.locations.connectors
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/reference/vpcaccess/rest/v1beta1/projects.locations.connectors
  title: "REST Resource: projects.locations.connectors \_|\_ Virtual Private Cloud\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.connectors | Virtual Private Cloud | Google Cloud Documentation
Skip to main content
/
Console
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Console
On this page
Resource: Connector
State
Subnet
Methods create
delete
get
list
patch
Home
Documentation
Networking
Virtual Private Cloud
Was this helpful?
Send feedback
REST Resource: projects. locations. connectors
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: Connector
State
Subnet
Methods create
delete
get
list
patch
Resource: Connector
JSON representation
State
Subnet
JSON representation
Methods
Resource: Connector
Definition of a Serverless VPC Access connector.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"network" : string ,
"ipCidrRange" : string ,
"state" : enum ( State ) ,
"minThroughput" : integer ,
"maxThroughput" : integer ,
"connectedProjects" : [
string
] ,
"subnet" : {
object ( Subnet )
} ,
"machineType" : string ,
"minInstances" : integer ,
"maxInstances" : integer
}
Fields
name
string
The resource name in the format projects/*/locations/*/connectors/* .
network
string
Name of a VPC network.
ip Cidr Range
string
The range of internal addresses that follows RFC 4632 notation. Example: 10.132.0.0/28 .
state
enum ( State )
Output only. State of the VPC access connector.
min Throughput
integer
Minimum throughput of the connector in Mbps. Default and min is 200. If both min-throughput and min-instances are provided, min-instances takes precedence over min-throughput.
max Throughput
integer
Maximum throughput of the connector in Mbps. Default is 300, max is 1000. If both max-throughput and max-instances are provided, max-instances takes precedence over max-throughput.
connected Projects[]
string
Output only. List of projects using the connector.
subnet
object ( Subnet )
The subnet in which to house the VPC Access Connector.
machine Type
string
Machine type of VM Instance underlying connector. Default is e2-micro
min Instances
integer
Minimum value of instances in autoscaling group underlying the connector.
maxInstances
integer
Maximum value of instances in autoscaling group underlying the connector.
State
State of a connector.
Enums
STATE_UNSPECIFIED
Invalid state.
READY
Connector is deployed and ready to receive traffic.
CREATING
An Insert operation is in progress. Transient condition.
DELETING
A Delete operation is in progress. Transient condition.
ERROR
Connector is in a bad state, manual deletion recommended.
UPDATING
The connector is being updated.
Subnet
The subnet in which to house the connector
JSON representation
{
"name" : string ,
"projectId" : string
}
Fields
name
string
Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName } the correct input for this field would be {subnetName}
projectId
string
Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.
Methods
create
Creates a Serverless VPC Access connector, returns an operation.
delete
Deletes a Serverless VPC Access connector.
get
Gets a Serverless VPC Access connector.
list
Lists Serverless VPC Access connectors.
patch
Updates a Serverless VPC Access connector, returns an operation.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
