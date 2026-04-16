---
title: "Partner Cross-Cloud Interconnect for AWS overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-aws-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-aws-overview
  title: "Partner Cross-Cloud Interconnect for AWS overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Send feedback
Partner Cross-Cloud Interconnect for AWS overview
Stay organized with collections
Save and categorize content based on your preferences.
Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) provides multicloud connectivity between Google Cloud
and AWS. It lets you connect any
Google Cloud and AWS resources privately in
available paired locations . Partner Cross-Cloud Interconnect for AWS supports connections at multiple speeds
for traffic that is exchanged between Google Cloud and
AWS.
Partner Cross-Cloud Interconnect for AWS provides an on-demand and reliable method
for establishing cross-cloud transport, without having to manually set up
networking components.
This connectivity is represented as region-to-region transport with an
SLA-protected, coordinated underlay built with AWS that can be set up on-demand,
and sized up and down based on your needs.
Partner Cross-Cloud Interconnect for AWS is intended for you if you meet one or more
of the following criteria:
Run workload in distributed regions
Have low bandwidth needs
Are an application owner with no networking expertise
Want cross-cloud connectivity without a having to manage the physical
infrastructure
Partner Cross-Cloud Interconnect for AWS is an evolution of
Cross-Cloud Interconnect. The Partner Cross-Cloud Interconnect for AWS API
incorporates redundancy directly into the underlying resources. Unlike
Cross-Cloud Interconnect, where you have to establish and manage
redundancy for your connections, Google Cloud can handle this at the
service level with Partner Cross-Cloud Interconnect for AWS. This means that the
Partner Cross-Cloud Interconnect for AWS service
is designed with inherent fault tolerance, ensuring a more stable and reliable
connection without requiring you to configure complex redundant setups. While
Google and the remote cloud provider each offer their own SLAs for their
respective portions of the connection, these are fully managed and abstracted
away on both sides, ensuring a unified and simplified reliability experience.
Partner Cross-Cloud Interconnect for AWS provides the following benefits:
Lower bandwidth options when you don't need increments of 10 Gbps or 100 Gbps:
Partner Cross-Cloud Interconnect for AWS offers greater flexibility with bandwidth
options. Unlike dedicated interconnect connections that typically require
high-capacity links (10G/100G increments), Partner Cross-Cloud Interconnect for AWS
provides lower bandwidth options. This flexibility lets you select bandwidth
amounts that precisely match your needs, leading to potential cost savings
for use cases that don't require large data transfer capabilities. The
ability to size bandwidth up and down on demand further enhances your
flexibility.
Fully managed reliability characteristics, avoiding nuances in per-cloud
SLA definitions.
Minimal lead time due to prebuilt connectivity: by pre-building and managing
the cross-cloud connectivity infrastructure, Google Cloud
reduces the time it takes for you to establish your connections. You don't
have to wait for physical links or set up complex provisioning processes.
Eliminates the need for coordination or third-party involvement for physical
connection issues: Google Cloud takes on the responsibility for the
underlying physical infrastructure and its reliability, eliminating the need to
deal with potential issues or coordinate with multiple third-party providers.
Minimal networking knowledge: route exchange between the two CSPs
is handled automatically, rather than copying and pasting resource information
between the two or maintaining large, complex configurations to
deploy region to region connectivity across the clouds.
You can use VPC Network Peering
or Network Connectivity Center (NCC)
to connect the Partner Cross-Cloud Interconnect for AWS attachment.
Comparison to Cross-Cloud Interconnect
The following table describes the differences between
Partner Cross-Cloud Interconnect for AWS and Cross-Cloud Interconnect.
Interconnect connection type
Cross-Cloud Interconnect
Partner Cross-Cloud Interconnect for AWS
Description
Provides dedicated connectivity between Google Cloud and
providers like OCI, AWS, Azure, and Alibaba
Provides dedicated connectivity between Google Cloud and
providers like AWS
Needs physical provisioning
Yes
No
Needs physical attachments and ports
Yes
No
Connection increments
10 Gbps or 100 Gbps
Granular pre approved speeds starting from 1 Gbps to 100 Gbps
Provisioning time
1-4 weeks
Minutes
Connection ordering
Must be initiated from Google Cloud
Bidirectional; can be initiated from Google Cloud or
Amazon Web Services
Resiliency
Must be configured manually
Built into the product
Quota
Transport resources are enforced by a per-project per-region quota. By default,
each project is limited to a single transport resource per region.
What's next?
To find answers to common questions about Cloud Interconnect
architecture and features, see the
Cloud Interconnect FAQ .
To find out more about Cloud Interconnect, see the
Cloud Interconnect overview .
To learn about best practices when planning for and configuring
Cloud Interconnect, see
Best practices .
To find Google Cloud resource names, see the
Cloud Interconnect APIs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
