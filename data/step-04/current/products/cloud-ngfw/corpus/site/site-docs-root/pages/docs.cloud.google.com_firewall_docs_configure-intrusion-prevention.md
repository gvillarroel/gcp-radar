---
title: "Configure intrusion detection and prevention service \_|\_ Cloud Next Generation\
  \ Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/configure-intrusion-prevention
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/configure-intrusion-prevention
  title: "Configure intrusion detection and prevention service \_|\_ Cloud Next Generation\
    \ Firewall \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Configure intrusion detection and prevention service
Stay organized with collections
Save and categorize content based on your preferences.
To enable intrusion detection and prevention service in your network, you must set up
multiple Cloud Next Generation Firewall components. This document provides a high-level
workflow that describes how to configure these components and enable threat
detection and prevention.
Configure intrusion detection and prevention service without TLS inspection
To configure intrusion detection and prevention service in your network, perform the
following tasks.
Note: The following workflow provides a high-level sequence of steps required to
configure intrusion detection and prevention service in your network. This workflow assumes
that you have already set up your Virtual Private Cloud (VPC) network, subnets,
VM instances, and other required Google Cloud resources and components.
Create a security profile of type Threat prevention . Set up threat or
severity overrides as required by your network. You can create one
or more profiles. To learn how to create threat prevention security profiles,
see Create a threat prevention security profile .
Create a security profile group with the security profile created in the
preceding step. To learn how to create a security profile group,
see Create a security profile group .
Create a firewall endpoint in the same zone as your workloads where you want
to enable threat prevention.
You can create a firewall endpoint with or without jumbo frame support.
To learn how to create
a firewall endpoint, see Create a firewall endpoint .
Associate the firewall endpoint with one or more VPC networks
where you want to enable threat detection and prevention. Make sure that you're
running your workloads in the same zone as the firewall endpoint.
A firewall endpoint with jumbo frame support can accept packets only up to
8,500 bytes. Alternatively, a firewall endpoint without jumbo frame support
can accept packets only up to 1,460 bytes. If you need intrusion detection and prevention service, we recommend that you
configure the associated
VPC networks to use the maximum transmission unit (MTU)
limits of 8,500 bytes and 1,460 bytes. For more information, see
Supported packet size .
Caution: A firewall endpoint doesn't perform intrusion detection and prevention service for
a VPC network if the network is configured with an MTU that's greater than the
firewall endpoint's limit.
To learn
how to associate a firewall endpoint with a VPC network,
see Create firewall endpoint associations .
You can use global network firewall policies
or hierarchical firewall policies to
configure intrusion detection and prevention service.
In a new or existing global firewall policy, add a firewall policy rule with
Layer 7 inspection enabled ( apply_security_profile_group action) and
specify the name of the security profile group that you created
in the preceding step. Make sure that the firewall policy is associated
with the same VPC network as the workloads that require
inspection. To learn more about global network firewall policy and the
parameters required to create a firewall policy rule with threat
prevention enabled, see Create global network firewall policy and
Create a rule .
You can also use a hierarchical firewall policy to add a firewall policy
rule with a security profile group configured. To learn more about the
parameters required to create hierarchical firewall policy rules with
threat prevention enabled, see Create a
rule .
Configure intrusion detection and prevention service with TLS inspection
To configure intrusion detection and prevention service with
Transport Layer Security (TLS) inspection
in your network, perform the following tasks.
Note: The following workflow provides a high-level sequence of steps required to
configure intrusion detection and prevention service with TLS inspection in your network.
This workflow assumes that you have already set up your VPC
network, subnets, VM instances, and other required Google Cloud resources
and components.
Create a security profile of type Threat prevention . Set up threat or
severity overrides as required by your network. You can create one
or more profiles. To learn how to create threat prevention security profiles,
see Create a threat prevention security profile .
Create a security profile group with the security profile created in the
preceding step. To learn how to create a security profile group,
see Create a security profile group .
Create a CA pool and a trust config, and add them to your TLS inspection
policy. To learn how to enable TLS inspection in Cloud NGFW, see
Set up TLS inspection .
Create a firewall endpoint in the same zone as your workloads where you want
to enable threat prevention.
You can create a firewall endpoint with or without jumbo frame support.
To learn how to create
a firewall endpoint, see Create a firewall endpoint .
Associate the firewall endpoint with one or more VPC networks
where you want to enable threat detection and prevention. Add the TLS
inspection policy you created in the preceding step to the firewall endpoint
association. Make sure that you're running your workloads in the same zone
as the firewall endpoint.
A firewall endpoint with jumbo frame support can accept packets only up to
8,500 bytes. Alternatively, a firewall endpoint without jumbo frame support
can accept packets only up to 1,460 bytes. If you need intrusion detection and prevention service, we recommend that you
configure the associated
VPC networks to use the maximum transmission unit (MTU)
limits of 8,500 bytes and 1,460 bytes. For more information, see
Supported packet size .
Caution: A firewall endpoint doesn't perform intrusion detection and prevention service for
a VPC network if the network is configured with an MTU that's greater than the
firewall endpoint's limit.
To learn how to associate a firewall endpoint with
a VPC network and enable TLS inspection,
see Create firewall endpoint associations .
You can use global network firewall policies
or hierarchical firewall policies to
configure intrusion detection and prevention service.
In a new or existing global firewall policy, add a firewall policy rule with
Layer 7 inspection enabled ( apply_security_profile_group action) and
specify the name of the security profile group that you created
in the preceding step. To enable TLS inspection, specify the
--tls-inspect flag. Make sure that the firewall policy is associated
with the same VPC network as the workloads that require
inspection. To learn more about global network firewall policy and the
parameters required to create a firewall policy rule with threat
prevention enabled, see Create global network firewall policy and
Create a rule .
You can also use a hierarchical firewall policy to add a firewall policy
rule with a security profile group configured. To learn more about the
parameters required to create hierarchical firewall policy rules with
threat prevention enabled, see Create a
rule .
Example deployment model
Figure 1 shows an example deployment with intrusion detection and prevention service configured for
two VPC networks in the same region but two different
zones.
Figure 1. Deploy intrusion detection and prevention service in a region (click to enlarge).
The example deployment has the following threat prevention configuration:
Two security profile groups:
Security profile group 1 with security profile Security profile 1 .
Security profile group 2 with security profile Security profile 2 .
Customer VPC 1 ( VPC 1 ) has firewall policy with security profile group
set to Security profile group 1 .
Customer VPC 2 ( VPC 2 ) has firewall policy with security profile group
set to Security profile group 2 .
Firewall endpoint Firewall endpoint 1 performs threat detection and
prevention for workloads running on VPC 1 and VPC 2 in zone us-west1-a .
Firewall endpoint Firewall endpoint 2 performs threat detection and
prevention with TLS inspection enabled for workloads running on VPC 1 and
VPC 2 in zone us-west1-b .
What's next
Security profile overview
Security profile group overview
Firewall endpoint overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
