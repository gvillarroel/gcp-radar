---
title: "Receive Pub/Sub events at an internal HTTP endpoint in a VPC network \_|\_\
  \ Eventarc Standard \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/vpc-endpoints/receive-vpc-events
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/vpc-endpoints/receive-vpc-events
  title: "Receive Pub/Sub events at an internal HTTP endpoint in a VPC network \_\
    |\_ Eventarc Standard \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Standard
Guides
Send feedback
Receive Pub/Sub events at an internal HTTP endpoint in a VPC network
Stay organized with collections
Save and categorize content based on your preferences.
Standard
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This tutorial shows you how to create an internal HTTP endpoint in a
Virtual Private Cloud (VPC) network that receives Pub/Sub
message events using Eventarc. To learn more about this event
destination, see
Route events to an internal HTTP endpoint in a VPC network .
You can run the following commands using the Google Cloud CLI in either your
terminal or Cloud Shell.
Objectives
In this tutorial, you will:
Create a VPC network to provide networking for your
cloud-based resources and services. A VPC network is logically
isolated from other networks in Google Cloud.
Create a subnet. Each VPC network consists of one or more IP
address ranges called subnets . Subnets are regional resources, and have IP
address ranges associated with them.
Create VPC firewall rules so that you can allow or deny
traffic to or from VM (virtual machine) instances in your VPC
network.
Create a network attachment that lets a producer VPC network
initiate connections to a consumer VPC network.
Create a Compute Engine VM instance in the VPC
network.
Deploy a web server as an event receiver service on your VM instance.
Create an Eventarc trigger that routes Pub/Sub
events to the event receiver on your VM instance.
Establish an SSH connection to the VM instance.
Publish a message to a Pub/Sub topic to generate an event,
and view the body of the event in the SSH-in-browser tool.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Next Generation Firewall
Compute Engine
Eventarc
Pub/Sub
VPC
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Eventarc, and Pub/Sub APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com eventarc.googleapis.com pubsub.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Eventarc, and Pub/Sub APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com eventarc.googleapis.com pubsub.googleapis.com
Update Google Cloud CLI components:
gcloud components update
Sign in using your account:
gcloud auth login
Set the configuration variables used in this quickstart:
REGION = us-central1
ZONE = us-central1-a
If you are the project creator, you are granted the
basic Owner role
( roles/owner ). By default, this Identity and Access Management (IAM) role
includes the permissions necessary for full access to most Google Cloud
resources and you can skip this step.
If you are not the project creator, required permissions must be granted on
the project to the appropriate principal . For example, a principal can be
a Google Account (for end users) or a service account (for applications and
compute workloads). For more information, see the
Roles and permissions page
for your event destination.
Required permissions
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Security Admin ( roles/compute.securityAdmin )
Eventarc Admin ( roles/eventarc.admin )
Logs View Accessor ( roles/logging.viewAccessor )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Pub/Sub Publisher ( roles/pubsub.publisher )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
If you enabled the Cloud Pub/Sub service agent on or before April
8, 2021, to support authenticated Pub/Sub push requests, grant
the Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
Replace the following:
PROJECT_ID : your Google Cloud project ID
PROJECT_NUMBER : your Google Cloud project
number. You can find your project number on the
Welcome
page of the Google Cloud console or by running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
Create a custom mode VPC network
A VPC network is a virtual version of a physical network that
is implemented inside of Google's production network. It provides connectivity
for your Compute Engine VM instances.
When a custom mode VPC network is created, no subnets are
automatically created. This type of network provides you with complete control
over its subnets and IP ranges.
gcloud compute networks create NETWORK_NAME \
--subnet-mode = custom \
--bgp-routing-mode = regional \
--mtu = 1460
Replace NETWORK_NAME with a name for the
VPC network.
Note the following:
Each new network that you create must have a unique name within the same
project.
The
Border Gateway Protocol (BGP) routing mode controls the behavior of
Cloud Routers in the network and can be either global or regional . The
default is regional .
The maximum transmission unit (MTU) is the largest packet size of the network.
MTU can be set to any value from 1300 to 8896 . The default is 1460 . Before
setting the MTU to a value higher than 1460 , review
Maximum transmission unit .
For more information, see
Create and manage VPC networks .
Create an IPv4-only subnet
A network must have at least one subnet before you can use it.
When you create a subnet, you set a name, a region, and at least a primary IPv4
address range according to the subnet rules. Note that you can't create
instances in a region that has no subnet defined.
gcloud compute networks subnets create SUBNET_NAME \
--region = $REGION \
--network = NETWORK_NAME \
--range = 10 .10.10.0/24
Replace SUBNET_NAME with a name for the new subnet.
For more information, see Subnets .
Create VPC firewall rules
VPC firewall rules let you allow or deny traffic between
resources in a VPC network based on port number, tag, or
protocol.
VPC firewall rules are defined at the network level, and only
apply to the network where they are created; however, the name you choose for a
rule must be unique to the project.
Create a firewall rule for your VPC network that allows
ingress traffic from any IPv4 address ( 0.0.0.0/0 ) to any instance on the
network using port 22. This rule is not required for event delivery. However,
for the purposes of this tutorial, create the rule so that you can connect to
the VM using SSH and confirm the delivery of the event:
gcloud compute firewall-rules create RULE_NAME_ONE \
--network = projects/ PROJECT_ID /global/networks/ NETWORK_NAME \
--direction = INGRESS \
--priority = 65534 \
--action = ALLOW \
--source-ranges = 0 .0.0.0/0 \
--rules = tcp:22
Create a firewall rule for your VPC network that allows
ingress traffic from a specific IP address range to any instance on the network
using port 80 (as you will be deploying a web server on your VM that listens on
port 80):
gcloud compute firewall-rules create RULE_NAME_TWO \
--network = projects/ PROJECT_ID /global/networks/ NETWORK_NAME \
--direction = INGRESS \
--priority = 1000 \
--action = ALLOW \
--source-ranges = 10 .10.10.0/24 \
--rules = tcp:80
Replace RULE_NAME_ONE and
RULE_NAME_TWO with unique names for your firewall
rules.
Note that using --source-ranges is optional and indicates a list of IP
address blocks that are allowed to make inbound connections that match the
firewall rule to the instances on the network. In this case, the range
matches the range used in the subnet you previously created.
We recommend that you use the flag to apply your firewall rule specifically
to Eventarc traffic. If neither --source-ranges nor
--source-tags are specified, --source-ranges defaults to 0.0.0.0/0 ,
which means that the rule applies to all incoming IPv4 connections from
inside or outside the network.
For more information, see
Use VPC firewall rules .
Create a network attachment
A network attachment is a resource that lets a producer VPC
network initiate connections to a consumer VPC network through
a Private Service Connect interface .
To publish events, Eventarc uses the network attachment to
establish a connection to the internal HTTP endpoint hosted in a
VPC network.
Note: Eventarc reserves the subnet
CIDR
IP range 240.0.0.0/20 . The subnet used for the network attachment shouldn't
overlap with this range.
You can create a network attachment that automatically accepts connections from
any Private Service Connect interface that refers to the
network attachment. Create the network attachment in the same network and region
containing the HTTP destination service.
gcloud compute network-attachments create ATTACHMENT_NAME \
--region = $REGION \
--subnets = SUBNET_NAME \
--connection-preference = ACCEPT_AUTOMATIC
Replace ATTACHMENT_NAME with a name for the network
attachment.
For more information, see
About network attachments .
Create a VM instance in a specified subnet
A Compute Engine VM instance is a virtual machine that is hosted on
Google's infrastructure. The terms Compute Engine instance ,
VM instance , and VM are synonymous and are used interchangeably. VM
instances include Google Kubernetes Engine (GKE) clusters, App Engine flexible
environment instances, and other Google Cloud products built on
Compute Engine VMs.
Create a Compute Engine VM instance in the VPC
network to which you can deploy an event receiver service.
gcloud compute instances create INSTANCE_NAME \
--zone = $ZONE \
--machine-type = e2-medium \
--subnet = SUBNET_NAME
Replace INSTANCE_NAME with a name for the VM.
For more information, see
Create and start a VM instance .
Deploy an event receiver on the VM
Deploy a web server on your VM that listens on port 80, and receives and logs
events.
Establish an SSH connection to your VM instance by using the
SSH button in the Google Cloud console
to connect to your VM.
After a connection to the SSH server is established, use the SSH-in-browser
terminal to run commands on your VM instance.
In the SSH-in-browser terminal, create a text file with the filename
server.py that contains the following Python code:
#!/usr/bin/env python3
from http.server import BaseHTTPRequestHandler , HTTPServer
import logging
class S ( BaseHTTPRequestHandler ):
def _set_response ( self ):
self . send_response ( 200 )
self . send_header ( 'Content-type' , 'text/html' )
self . end_headers ()
def do_GET ( self ):
logging . info ( "GET request, \n Path: %s \n Headers: \n %s \n " , str ( self . path ), str ( self . headers ))
self . _set_response ()
self . wfile . write ( "GET request for {} " . format ( self . path ) . encode ( 'utf-8' ))
def do_POST ( self ):
content_length = int ( self . headers [ 'Content-Length' ])
post_data = self . rfile . read ( content_length )
logging . info ( "POST request, \n Path: %s \n Headers: \n %s \n\n Body: \n %s \n " ,
str ( self . path ), str ( self . headers ), post_data . decode ( 'utf-8' ))
self . _set_response ()
self . wfile . write ( "POST request for {} " . format ( self . path ) . encode ( 'utf-8' ))
def run ( server_class = HTTPServer , handler_class = S , port = 80 ):
logging . basicConfig ( level = logging . INFO )
server_address = ( '' , port )
http_server = server_class ( server_address , handler_class )
logging . info ( 'Starting HTTP Server at port %d ... \n ' , port )
try :
http_server . serve_forever ()
except KeyboardInterrupt :
pass
http_server . server_close ()
logging . info ( 'Stopping HTTP Server... \n ' )
if __name__ == '__main__' :
from sys import argv
if len ( argv ) == 2 :
run ( port = int ( argv [ 1 ]))
else :
run ()
Start the server and keep the server running for the remaining steps in this
tutorial:
sudo python3 server.py
Create an Eventarc trigger
Create an Eventarc trigger that creates a new
Pub/Sub topic and routes events to the event receiver deployed
on the VM when a message is published to the Pub/Sub topic.
After you enabled the Compute Engine API, the default service account is the
Compute Engine default service account
( PROJECT_NUMBER -compute@developer.gserviceaccount.com ).
For testing purposes, the trigger uses this default service account for its
identity.
Caution: For production environments, we strongly recommend creating a new
service account and granting it one or more IAM roles that
contain the minimum permissions required .
You shouldn't use the default service account since it is automatically granted
the highly privileged basic Editor role .
gcloud eventarc triggers create TRIGGER_NAME \
--location = $REGION \
--destination-http-endpoint-uri = http:// INSTANCE_NAME . $ZONE .c. PROJECT_ID .internal \
--network-attachment = "projects/ PROJECT_ID /regions/ $REGION /networkAttachments/ ATTACHMENT_NAME " \
--event-filters = "type=google.cloud.pubsub.topic.v1.messagePublished" \
--service-account = PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your Google Cloud
project number. You can find your project number on the
Welcome
page of the Google Cloud console or by running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
For more information about configuring your trigger, see
Route events to an internal HTTP endpoint in a VPC network .
Note: It might take several minutes to create your trigger, and then it can take
up to two minutes for the trigger to be fully functional.
Generate and view a Pub/Sub topic event
You can generate an event by publishing a message to a Pub/Sub
topic.
Find and set the Pub/Sub topic as an environment variable:
export MY_TOPIC = $( gcloud eventarc triggers describe TRIGGER_NAME \
--location = $REGION \
--format = 'value(transport.pubsub.topic)' )
Publish a message to the Pub/Sub topic to generate an event:
gcloud pubsub topics publish $MY_TOPIC --message "Hello World"
The Eventarc trigger routes the event to the internal HTTP
endpoint in your VPC network. In the SSH-in-browser terminal,
the body of the event is output. It should be similar to the following:
Body:
{
"message": {
"data": "SGVsbG8gV29ybGQ=",
"messageId": "8795720366614192",
"publishTime": "2023-08-26T13:09:48Z"
}
}
10.10.10.3 - - [26/Aug/2023 13:09:49] "POST / HTTP/1.1" 200 -
Note that if you decode the data value of SGVsbG8gV29ybGQ= from its
Base64 format, "Hello World" is returned.
You have successfully deployed an event receiver service to an internal HTTP
endpoint in a VPC network, created an Eventarc
trigger, generated an event from Pub/Sub, and confirmed that the
event was routed as expected by the trigger to the target endpoint.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
Delete the Eventarc trigger:
gcloud eventarc triggers delete TRIGGER_NAME --location = $REGION
Delete the instance:
gcloud compute instances delete INSTANCE_NAME
Delete the network attachment:
gcloud compute network-attachments delete ATTACHMENT_NAME --region = $REGION
Delete the firewall rules:
gcloud compute firewall-rules delete RULE_NAME_ONE
gcloud compute firewall-rules delete RULE_NAME_TWO
Delete the subnet:
gcloud compute networks subnets delete SUBNET_NAME --region = $REGION
Delete the VPC network:
gcloud compute networks delete NETWORK_NAME
What's next
Receive Pub/Sub events at a private HTTP endpoint in a private GKE cluster
Manage Eventarc triggers
View all event providers and destinations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
