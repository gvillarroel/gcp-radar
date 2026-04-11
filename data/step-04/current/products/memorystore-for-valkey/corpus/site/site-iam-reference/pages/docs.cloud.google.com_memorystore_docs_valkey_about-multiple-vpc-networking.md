---
title: "About multiple VPC networking \_|\_ Memorystore for Valkey \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/about-multiple-vpc-networking
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/about-multiple-vpc-networking
  title: "About multiple VPC networking \_|\_ Memorystore for Valkey \_|\_ Google\
    \ Cloud Documentation"
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
About multiple VPC networking
Stay organized with collections
Save and categorize content based on your preferences.
This page gives an overview of multiple VPC networking for Memorystore for Valkey. In situations where you only need one VPC network, we recommend (but don't require) using a service connection policy to provision your network, as explained in Networking .
Setting up networking for multiple VPC networks requires Memorystore users to configure and register up Private Service Connect connections.
For a tutorial on setting up multiple VPCs using only user-registered connections, see Set up multiple VPC networks using user-registered Private Service Connect connections .
For a tutorial on setting up multiple VPCs for instances provisioned with automatically registered connections, see Configure an existing instance to use multiple VPC networks .
Private Service Connect connections
This section explains essential information about Private Service Connect connections for Memorystore.
Private Service Connect connection basics
For Memorystore, a Private Service Connect
connection consists of two fundamental items:
An IP address
An established connection between a Private Service Connect endpoint and a Memorystore instance's service attachment
Private Service Connect connection types
When using Memorystore for Valkey, Private Service Connect connections fall into two categories: automatically registered and user-registered. A Memorystore for Valkey instance is compatible with both types.
User-registered Private Service Connect connections: These are self-created and self-registered connections. For Memorystore, user-registered connections are needed for multiple VPC networking setups.
Self-managing these connections has the benefit of giving you control over the subnets, IP addresses, and forwarding rules used to create them. For these connections, you are responsible for their lifecycle (including creating, registering, and deleting them).
Automatically registered Private Service Connect connections: These are connections created and registered by Private Service Connect service connectivity automation for your Memorystore instance. When you create or delete a Memorystore instance, your service connection policy manages the lifecycle of the associated connection by creating, registering, or deleting the connection automatically.
If you already have a Memorystore instance that you've been using, and you want to connect additional VPC networks, you probably have automatically registered connections. If you want to keep these connections because your existing application uses them, you can keep them and only add user-registered connections for new VPCs.
Application connection requirements
To connect your application using a multiple VPC networking setup,
Memorystore has networking requirements that you must meet.
Each VPC network that you connect to your Memorystore for Valkey instance must
have two Private Service Connect connections. These connections
can be either user-registered or registered automatically. One connection is the
discovery connection that your client uses to establish a connection to the
instance. The other connection is reserved for internal usage by the
Memorystore for Valkey backend.
For more information about connecting your client to an instance that uses
user-registered connections, see Set up a client connection .
For more information about connecting your client to an instance that uses
automatically registered connections, see Set up a client connection .
For more information about setting up connections to services through
Private Service Connect endpoints, see About accessing published services through endpoints .
Limitations
You can have between 1 and 20 VPC networks connected to a single Memorystore instance, and no more than 40 Private Service Connect connections in total
To delete a Memorystore instance connected with
user-registered Private Service Connect connections, you must delete and deregister the connections first.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
