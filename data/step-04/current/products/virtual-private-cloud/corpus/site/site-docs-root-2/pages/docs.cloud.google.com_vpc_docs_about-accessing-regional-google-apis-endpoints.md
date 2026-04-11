---
title: "About accessing regional endpoints through Private Service Connect endpoints\
  \ \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints
  title: "About accessing regional endpoints through Private Service Connect endpoints\
    \ \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
About accessing regional endpoints through Private Service Connect endpoints
This page provides an overview of using
Private Service Connect endpoints to access regional
endpoints for
supported Google APIs in supported regions .
Consider using regional endpoints if you want to ensure that in-transit data
remains in a particular region.
For information about other Private Service Connect configurations,
see Private Service Connect overview .
Features and compatibility
This table summarizes the features that are supported by endpoints that are used
to access regional endpoints for Google APIs.
Configuration
Details
Consumer configuration (endpoint)
Global reachability
If
global access is enabled
Cloud Interconnect traffic
Cloud VPN traffic
Access through VPC Network Peering
Connection propagation through NCC
DNS configuration
Manual DNS configuration
IP version
IPv4 or IPv6
Producer
Supported services
Supported regional Google APIs
Specifications
Public hostnames for regional endpoints have the following format:
SERVICE . REGION .rep. DOMAIN .
We recommend using the public hostnames to specify the target service in
your Private Service Connect endpoint configuration.
Note: The private hostname format is also supported:
SERVICE . REGION .p.rep. DOMAIN .
The subnet that you specify when you create an endpoint is a regular
subnet . The IP address assigned to the endpoint
is a regional internal IP address.
If you're using Shared VPC, you can create the endpoint in either
the host project or a service project.
By default, endpoints can be accessed only by clients that are in the same
region and the same VPC network (or Shared VPC
network) as the endpoint. For information about making endpoints available
in other regions, see Global access .
Architecture
Private Service Connect endpoints that have a
regional endpoint target point to a service attachment that has been created
by Google to direct traffic to the regional service endpoint.
Clients in the same region as the endpoint can send traffic to the endpoint. You
can also access the endpoint from connected
networks in the
same region. If you want to access the endpoint from other regions, configure
global access .
Figure 1.
An endpoint lets service consumers send traffic from the consumer's
VPC network to regional service endpoints for supported
Google APIs through a service attachment that is managed by Google (click
to enlarge).
Global access
When you create an endpoint, you can configure global access. Global access lets
clients in other regions access the endpoint. The endpoint is also accessible
from connected
networks .
Figure 2.
An endpoint with global access enabled can be accessed by clients in
another region, including by clients in connected networks (click to enlarge).
Supported regions and services
For a list of supported regions and services, see
Regional service endpoints .
Pricing
For pricing information, see
Virtual Private Cloud pricing .
Quotas
See the Number of Regional Endpoints per project per region quota in
Quotas and limits .
What's next
Create a Private Service Connect endpoint to
access regional Google APIs .
Learn more about
Private Service Connect .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
