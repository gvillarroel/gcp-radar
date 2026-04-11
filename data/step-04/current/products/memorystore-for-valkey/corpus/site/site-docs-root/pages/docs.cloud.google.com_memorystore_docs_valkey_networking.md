---
title: "Networking \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/networking
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/networking
  title: "Networking \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
Networking
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use networking for Memorystore for Valkey. The page also
describes the following information about networking:
Networking setup guidance
Supported networking architectures
Frequently asked questions
Note: Memorystore for Valkey also supports networking for multiple VPCs. For
more information about multiple VPC networks, see About multiple VPC networking .
Networking setup guidance
As a reader of this page, you likely fit into one of two roles. Each role has
different tasks that you have to accomplish. However, there might be an overlap
between the roles.
Knowing which role you fit into and your role's goals helps you accomplish your
instance creation and networking tasks quickly and efficiently.
You might fit into the following roles:
Role 1: Valkey Admin
Your goal is to create a Memorystore for Valkey instance . You're reading this page to learn if you have the required prerequisites to create the instance.
After you know that a service connection policy is established for your
network, get the full network name (that has the format of
projects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID ) from your Network
Admin so that you can use it to create the instance.
Role 2: Network Admin
Your goal is to find out if a service connection policy is created for the
network and if it's located in the region where the Valkey Admin wants to
deploy a Memorystore for Valkey instance.
If the service connection policy isn't created, then create it . This policy lets
Memorystore automate private connectivity to the
Memorystore service.
To create a service connection policy, you must have the required roles . For more information about
configuring and managing a service connection policy, see
Configure service connection policies .
Note : When you create the service connection
policy, use the gcp-memorystore service class. For each
combination of a network, region, and service class, you can create only
one policy.
When creating the service connection policy, you can use the connection
limit to ensure enough address space for your instances. Here's how to
estimate this limit.
To determine the connection limit, multiply the number of instances
that you want to create in the region where you're defining the service
connection policy by two. So, if you want to create five instances in the
region, then specify 10 for the connection limit.
If you don't know how many instances you plan to create, then don't
specify a connection limit. Also, if the limit is reached, then you can
increase it by
updating the service connection policy .
Your next goal is to provide the network name to the Valkey Admin so that
they can use it to create the instance.
Memorystore for Valkey has the following networking characteristics:
The only networking connectivity method that you can use for
Memorystore for Valkey is Private Service Connect service
connectivity automation. This method is enabled by service connection
policies. For more information, see About service connection policies .
If the correct service connection policy exists, then as you create the
instance, service connectivity automation deploys connectivity for the
instance automatically.
Prerequisites required before creating an instance
As described in About service connection policies ,
a service connection policy is unique to your project, network, region, and
service class. If you want to create an instance, then make sure that the
following conditions are met:
The service connection policy must exist for your project, network, region,
and gcp-memorystore service class.
You must enable the necessary APIs.
Note: For more information about how Memorystore for Valkey creates a
Private Service Connect endpoint and the lifecycle of that
endpoint, see Deploy a managed service instance and configure connectivity .
Communicate networking requirements
If you're a Valkey Admin, then ask your Network Admin if a service connection
policy exists for the region, network, and gcp-memorystore service class where
you want to create your instance .
After your Network Admin creates the policy, ask them for the full network name
(that has the format of projects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID )
so that you can use it to create the instance.
Send your Network Admin a link to this page so that they can understand the
service connection policy prerequisites that they need for you to create
the instance.
Important: Make sure that your Network Admin doesn't configure the
service
instance scope in the service connection policy. Instead, the Network Admin
must leave the default settings for the policy.
Memorystore for Valkey doesn't support custom service instance scopes. It
supports deploying only Private Service Connect endpoints
automatically through the authorization of a service connection policy that's
in the same Google Cloud project as the instance.
For more information about deploying Private Service Connect
endpoints in Google Cloud projects other than the project that hosts the
instance, see
Set up multiple VPC networks using user-registered
Private Service Connect connections and Set up multiple VPC
networks for instances provisioned with automatically registered Private Service Connect
connections .
Enable APIs
As a Valkey Admin, before you can create a Memorystore for Valkey instance, you
must enable all of the APIs listed in Before you begin .
Shared VPC
In addition to standard Virtual Private Cloud (VPC) networks ,
Memorystore for Valkey supports Shared VPC
networks.
Shared VPC setups have a host project and one or more service projects.
The Network Admin defines the service connection policy for
Memorystore for Valkey in the host project. Valkey Admins use service projects
to create Memorystore for Valkey instances.
For a quickstart on creating an instance with Shared VPC, see Instance provisioning on a Shared VPC network .
Reserved network addresses
After you create an instance ,
Memorystore for Valkey reserves the following network addresses for the
instance:
Discovery endpoint : the primary network address that your application uses
to connect to your instance .
Internal backend : the Memorystore for Valkey backend service uses this
network address for management and operational purposes.
Memorystore for Valkey uses both network addresses to serve the traffic for your
instance.
Supported networking architectures
Memorystore for Valkey supports the network architectures described in this
section.
Same network, project, and region client access example
In this example, the client and Memorystore for Valkey endpoint IP addresses are
located in the same network, project, and region.
Same network and project, but multi-region client access example
In this example, the client and Memorystore for Valkey endpoint IP addresses are
located in the same network and project, but in multiple regions.
Shared VPC client access example
In this example, the clients are located in different Shared VPC
projects. Although clients in this example are in the same region,
Memorystore for Valkey supports clients from different regions.
IP1 and IP2 are IP addresses created on the Consumer VPC 1 network. This is
a Shared VPC network across the VPC 1 host project, Consumer service
project 1, and Consumer service project 2. The
Private Service Connect endpoints in this example are resources
(forwarding rules) that are created in Consumer service project 2.
On-premises access example
This diagram shows an example of a client connecting to
Memorystore for Valkey from an on-premises network using Cloud Interconnect
and Cloud Router. Although the Cloud Interconnect and
Cloud Router infrastructure is used, the client machines in the
on-premises network connect to Valkey using the Memorystore for Valkey endpoint
IP addresses. For example, in the diagram in this section, clients connect to
10.142.0.10 and 10.142.0.11 directly.
For more information about finding your instance's discovery endpoint IP
address, see View your instance's discovery endpoint .
Multi-VPC network access
If your clients reside in different VPC networks, then you can
use Memorystore for Valkey to have your clients access the same instance. For
each consumer VPC network, Memorystore for Valkey creates a
separate pair of Private Service Connect endpoints. Your clients
in this network are configured to access the instance through the discovery endpoint in the network.
To connect to Memorystore for Valkey across multiple VPC
networks, do one of the following:
If the instance has automatically registered
Private Service Connect connections , then set up connectivity
from the VPC networks to the instance.
If the instance isn't provisioned with automatically registered
Private Service Connect connections, then set up multiple
VPC networks by using user-registered VPC connections .
Frequently asked questions
This section covers networking FAQs for Memorystore for Valkey.
Do you need a service connection policy?
It depends. For network connectivity, you have two options: a
service connection policy or
user-registered Private Service Connect connections . If you choose a multi-VPC
setup, then you can either use the second option or both options together.
User-registered Private Service Connect connections enable you to
connect multiple VPC networks, if needed. If you don't need multiple VPC
networks, then you can also establish connectivity by using a user-registered
connection. However, we recommend using a service connection policy because the
process is more straightforward.
Why must you enable the Network Connectivity and Service Consumer Management APIs?
Memorystore for Valkey uses Private Service Connect service
connectivity automation to automate deployment and connectivity in the consumer
network. For automation to work, you must enable these APIs. If you don't, then
instance creation operations fail.
Which permissions do you need to set up networking in Memorystore for Valkey?
If you want to perform the Valkey Admin tasks described on this page, then
you need the memorystore.admin
role. To see which roles you need for different Memorystore for Valkey
permissions, see Permissions and their roles .
If you want to perform the Network Admin tasks described on this page, then
you need the compute.networkAdmin
role.
Which ports do you need to set up networking in Memorystore for Valkey?
Your application connects to Memorystore for Valkey by using an IP address and
the 6379 port. As part of this connection, it requests the topology of an
instance.
The request's response contains a list of the data nodes in the instance and
their associated ports. For each node, Memorystore for Valkey uses a port in the
11000-to-13047 range. Therefore, in your firewall, you must allow access to both
the 6379 port and to all ports in this range.
How can you set up connectivity for your on-premises network?
In addition to the guidance on this page, you can learn about setting up
on-premises connectivity by using the following links:
Access endpoints from hybrid networks
On-premises and hybrid access
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
