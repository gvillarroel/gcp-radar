---
title: "Class NetworkInterface (0.20.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types.AllocationPolicy.NetworkInterface
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/batch/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types.AllocationPolicy.NetworkInterface
  title: "Class NetworkInterface (0.20.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class NetworkInterface (0.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.20.0 (latest)
0.19.0
0.18.0
0.17.37
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.1
0.7.0
0.6.0
0.5.0
0.4.1
0.3.2
0.2.0
0.1.2
NetworkInterface ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A network interface.
Attributes
Name
Description
network
str
The URL of an existing network resource. You can specify the
network as a full or partial URL.
For example, the following are all valid URLs:
- https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}
- projects/{project}/global/networks/{network}
- global/networks/{network}
subnetwork
str
The URL of an existing subnetwork resource in the network.
You can specify the subnetwork as a full or partial URL.
For example, the following are all valid URLs:
- https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork}
- projects/{project}/regions/{region}/subnetworks/{subnetwork}
- regions/{region}/subnetworks/{subnetwork}
no_external_ip_address
bool
Default is false (with an external IP
address). Required if no external public IP
address is attached to the VM. If no external
public IP address, additional configuration is
required to allow the VM to access Google
Services. See
https://cloud.google.com/vpc/docs/configure-private-google-access
and
https://cloud.google.com/nat/docs/gce-example#create-nat
for more information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
