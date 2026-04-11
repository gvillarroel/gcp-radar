---
title: "Use the Auto Discovery service \_|\_ Memorystore for Memcached \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/use-auto-discovery
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/use-auto-discovery
  title: "Use the Auto Discovery service \_|\_ Memorystore for Memcached \_|\_ Google\
    \ Cloud Documentation"
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
Use the Auto Discovery service
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to find and connect to your Memcached instance's Auto
Discovery service endpoint. For more information about Memorystore for Memcached's
Auto Discovery service, see Auto Discovery service overview .
Finding your instance's discovery endpoint
You can find the discovery endpoint for your Memcached instance on the
instance's details page in the Google Cloud console.
You can also view your Memcached instance's discovery endpoint by running the
following command, replacing variables with appropriate values:
gcloud memcache instances describe instance-id --project= project --region= region --format="default(discoveryEndpoint)"
The values for the discovery endpoint are listed under the
discoveryEndpoint label:
discoveryEndpoint: [IP-address]:[port-number]
Connecting to your instance's discovery endpoint using Telnet
Note: You should not use the discovery endpoint for Memcached data queries such as set and get .
To connect to your instance's discovery endpoint using Telnet, run the following
command, replacing variables with appropriate values:
telnet discovery-endpoint-ip-address discovery-endpoint-port-number
Once connected to your Memorystore for Memcached instance's discovery endpoint
using Telnet, run the following Memcached command to get the Configuration
Version ID and Node List:
config get cluster
This command returns the following information in the following format:
CONFIG cluster 0 [length-of-payload-in-next-two-lines]
[integer]
[node1-ip]|[node1-ip]|[node1-port][node2-ip]|[node2-ip]|[node2-port]
\r\n
END\r\n
The last integer of the first line represents the number of bytes contained
in the next two lines.
If you are not configuring your parser, you can ignore this line.
This line is helpful if you are programming your parser which may need
to determine the length of the bytes to read from the request.
The second line is an integer, which is the Configuration Version ID
described in Overview of Auto Discovery service architecture .
The third line is the Node List string, which contains the IP addresses and
port numbers of the current nodes in your cluster.
What's next
Learn more about Auto Discovery with the Auto Discovery service overview .
View the available Memcached configurations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
