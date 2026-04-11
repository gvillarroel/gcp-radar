---
title: "Private network access overview \_|\_ Service Directory \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-directory/docs/private-network-access-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/private-network-access-overview
  title: "Private network access overview \_|\_ Service Directory \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Guides
Send feedback
Private network access overview
Stay organized with collections
Save and categorize content based on your preferences.
Private network access enables supported Google Cloud products to send HTTP requests
to a customer Virtual Private Cloud (VPC) network resource. The requests are sent
over the private network while enforcing
Identity and Access Management (IAM) and
VPC Service Controls .
The network resources supported as destinations are:
Virtual machine (VM) instances
Internal passthrough Network Load Balancers
Regional internal Application Load Balancers
On-premises IP addresses, reached through Cloud Interconnect or
Cloud VPN
With Private Service Connect , you
can create private endpoints within your VPC network by using
internal IP addresses. Private network access extends the capability and helps
Google Cloud services connect directly to VPC networks.
Private network access offers the following features:
Provides a unified way of managing customer network,
security, and access policies applied to all network paths.
Enables Google Cloud products to reach one or more HTTP(S) endpoints in
customer private networks through the private network of Google rather than
the internet. It also provides a VPC Service Controls-compliant option. The
communication helps in providing better security, managing network security
policies, and protecting against exfiltration while using Google Cloud
features such as HTTP
Push .
The following diagram shows how Dialogflow connects to a
Google Cloud VM through the internet without private network access. Note that
Dialogflow runs within Google Cloud.
Dialogflow connectivity without private network access (click to enlarge)
The following diagram shows how Dialogflow connects to a
Google Cloud VM through the private network with private network access.
Dialogflow connectivity with private network access (click to enlarge)
For detailed information about VPC Service Controls, see the VPC Service Controls
documentation .
For information about how to configure private network access, see Configuring
private network access .
For information about how you can use Service Directory private network access with
Dialogflow, see Using Service Directory for
private network access .
Quotas and limits
The following quotas and limits apply for private network access:
Service Directory limits apply when you
use private network access.
Calls from Google Cloud services that use private network access don't count against
your quotas.
Service Directory pricing applies for calls from
Google Cloud services that use private network access. Because Service Directory
charges are per API call against the Service Directory service, each
private network access is charged as one API call.
What's next
To learn about Service Directory, see Service Directory
overview .
To learn how to configure private network access, see Configure
private network access .
To find solutions for common problems that you might experience when using
Service Directory, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
