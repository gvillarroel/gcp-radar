---
title: "Private Service Connect with Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb
  title: "Private Service Connect with Dataproc Metastore \_|\_ Google Cloud Documentation"
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
Private Service Connect with Dataproc Metastore
Stay organized with collections
Save and categorize content based on your preferences.
With Private Service Connect, you can create a
Dataproc Metastore service that doesn't use VPC
peering . This page explains what Private Service Connect is
and how to use it as an alternative networking option for
Dataproc Metastore.
How Dataproc Metastore works with VPC
Dataproc Metastore protects its metadata access by only exposing private
IP endpoints. It also restricts connectivity to VMs in your VPC network by
using VPC peering.
Dataproc Metastore requires the following configurations
per region for each VPC network:
1 peering quota
/17 and /20 CIDR
blocks
As a result, setting up VPC peering and IP address reservations
can be difficult on crowded VPC networks. Similarly, a VPC
network may not have enough peering quota to accommodate additional peering
requests. Both of these limitations can prevent you from creating new
Dataproc Metastore service.
To circumvent these issues, you can use
Dataproc Metastore with Private Service Connect.
How Dataproc Metastore works with Private Service Connect
Private Service Connect provides a private connection to
Dataproc Metastore metadata across VPC networks.
To use Private Service Connect with Dataproc Metastore,
the following configurations are required:
A single address reservation in the subnetwork.
A forwarding rule targeting the service attachment that exposes the Dataproc Metastore
endpoint. The address reservation and forwarding rule are created as a part of
the Dataproc Metastore service create call.
Considerations
Dataproc Metastore services that use Private Service Connect
only support access from VPC networks of the subnetworks specified during the service
creation.
Dataproc Metastore reserves addresses and creates forwarding
rules in each of the specified subnetworks. Each subnetwork has a Thrift
endpoint URI that you can use to access the Dataproc Metastore
metadata endpoint from.
Limitations
Dataproc Metastore services that use the gRPC endpoints protocol
don't support Private Service Connect.
Reverse connectivity is not supported with Private Service Connect.
This means you can't use a Kerberos configuration with Private Service Connect.
You can't dynamically add or remove subnets from a Dataproc Metastore
service that is configured with Private Service Connect. Instead, you
must recreate a service if you'd like to add or remove subnets.
You can't update a Dataproc Metastore service that uses Private Service Connect
to use VPC or the other way around.
Create a Dataproc Metastore service with Private Service Connect
The following instructions demonstrate how to configure Private Service Connect
during service creation.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Go to Dataproc Metastore
At the top of the Dataproc Metastore page, click Create .
The Create service page opens.
Configure your service as needed.
Under Network configuration , click Make services accessible in multiple VPC subnetworks .
Select the Subnetworks . You can specify up to 5 subnetworks.
Click Done .
Click Submit .
Verify the service's network configuration:
In the Google Cloud console, open the Dataproc Metastore page:
Go to Dataproc Metastore
On the Dataproc Metastore page, click the service name of the
service want like to view.
The Service detail page for that service
opens.
Under the Configuration tab, verify that the details show multiple VPC
subnetwork URIs.
gcloud
Run the following gcloud metastore services create command to
create a service with Private Service Connect:
gcloud metastore services create SERVICE \
--location= LOCATION \
--consumer-subnetworks="projects/ PROJECT_ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT_ID /regions/ LOCATION /subnetworks/ SUBNET2 "
or
gcloud metastore services create SERVICE \
--location= LOCATION \
--network-config-from-file= NETWORK_CONFIG_FROM_FILE
Verify that the creation was successful.
REST
Follow the API instructions to create a service
by using the API Explorer.
In the create request parameters, use the Network Config field to
configure Private Service Connect. You can specify 1 to 5 subnetworks.
"network_config": {
"consumers": [
{"subnetwork": "projects/ PROJECT_ID /regions/ LOCATION /subnetworks/ SUBNET1 "},
{"subnetwork": "projects/ PROJECT_ID /regions/ LOCATION /subnetworks/ SUBNET2 "}
]
}
What's next
VPC Network Peering overview
Private Service Connect
Service networking
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
