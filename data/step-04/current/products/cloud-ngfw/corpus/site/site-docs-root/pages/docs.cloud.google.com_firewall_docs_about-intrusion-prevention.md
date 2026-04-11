---
title: "Intrusion detection and prevention service overview \_|\_ Cloud Next Generation\
  \ Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/about-intrusion-prevention
  title: "Intrusion detection and prevention service overview \_|\_ Cloud Next Generation\
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
Intrusion detection and prevention service overview
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Next Generation Firewall intrusion detection and prevention service continuously
monitors your Google Cloud workload traffic for any malicious activity and
takes preemptive actions to prevent it. The malicious activity can include threats
such as intrusions, malware, spyware, and command-and-control attacks
on your network.
Cloud NGFW intrusion detection and prevention service works by creating Google-managed
zonal firewall endpoints that use packet intercept technology to transparently
inspect the workloads for the configured threat signatures and protect them
against threats. These threat prevention capabilities are powered by
Palo Alto Networks threat prevention technologies.
Cloud NGFW supports the following threat signature categories:
Anti-spyware
Vulnerability protection
Antivirus
For more information about the threat categories, see Default threat
signatures .
Intrusion detection and prevention service is offered as part of Cloud Next Generation Firewall Enterprise
capabilities. For more information,
see Cloud NGFW Enterprise and
Cloud NGFW pricing .
This document provides a high-level overview of the various Cloud NGFW
intrusion detection and prevention service components and how these components provide
advanced protection capabilities for your Google Cloud workloads in
Virtual Private Cloud (VPC) networks.
How intrusion detection and prevention service works
Intrusion detection and prevention service processes the traffic in the following sequence:
Firewall policy rules are applied to the traffic to and from the virtual
machine (VM) instances or Google Kubernetes Engine (GKE) clusters, in the
network.
The matched traffic is intercepted, and the packets are sent to the firewall
endpoint for Layer 7 inspection.
The firewall endpoint scans the packets for configured threat signatures.
If a threat is detected, the action configured in the security profile
is performed on that packet.
Figure 1 describes a simplified deployment model of intrusion detection and prevention service.
Figure 1. Sample deployment model of intrusion detection and prevention service (click to enlarge).
The rest of the section explains the components and configurations required
to set up intrusion detection and prevention service.
Security profiles and security profile groups
Cloud NGFW references security profiles and security profile groups to
implement deep packet inspection for intrusion detection and prevention service.
Security profiles are generic policy structures that are used in
intrusion detection and prevention service to override specific threat prevention
scenarios. To configure intrusion detection and prevention service, you define a security
profile of type threat-prevention . To learn more about security profiles,
see Security profile overview .
Security profile groups can contain a maximum of one security profile
per threat-prevention type, per group.
To configure intrusion detection and prevention service, firewall policy rules reference
these security profile groups to enable threat detection and prevention
for network traffic. To learn more about security profile groups,
see Security profile group overview .
Firewall endpoint
A firewall endpoint is an organization-level resource created in a specific zone
that can inspect traffic in the same zone.
For intrusion detection and prevention service, the firewall endpoint scans the
intercepted traffic for any threats. If a threat is detected, an action
associated with the threat is performed on that packet. This action can be a
default action, or an action (if configured) in the threat-prevention security profile.
To learn more about firewall endpoints and how to configure them, see
Firewall endpoint overview .
Firewall policies
Firewall policies apply directly
to all traffic moving in and out of the VM. You can use
hierarchical firewall policies and
global network firewall policies
to configure firewall policy rules with Layer 7 inspection.
Note: Cloud NGFW Enterprise capabilities are only available through
firewall policies. In this document, the term firewall rules refers to the
firewall policy rules, not the VPC firewall rules.
Firewall policy rules
Firewall policy rules enable you to control the type of
traffic to be intercepted and inspected. To configure the intrusion detection and prevention service,
create a firewall policy rule to do the following:
Identify the type of traffic to be inspected by using multiple
Layer 3 and Layer 4 firewall policy rule components .
For the matched traffic, specify the security profile group name for
the apply_security_profile_group action.
For the complete intrusion detection and prevention service workflow,
see Configure intrusion detection and prevention service .
You can also use secure tags in
firewall rules to configure intrusion detection and prevention service. You can build on any
segmentation that you have set up by using tags in your network, and enhance
the traffic inspection logic to include intrusion detection and prevention service.
Inspect encrypted traffic
Cloud NGFW supports Transport Layer Security (TLS) interception and
decryption to inspect selected encrypted traffic for threats. TLS lets you
inspect both inbound and outbound connections, including traffic to and from
the internet and traffic within Google Cloud.
To learn more about TLS inspection in Cloud NGFW, see
TLS inspection overview .
To learn how to enable TLS inspection in Cloud NGFW, see
Set up TLS inspection .
Threat signatures
Cloud NGFW threat detection and prevention capabilities are powered
by Palo Alto Networks threat prevention technologies.
Cloud NGFW supports a default set of threat signatures with
predefined severity levels to help protect your network. You can also override
the default actions associated with these threat signatures by using security
profiles.
To learn more about threat signatures, see Threat signatures overview .
To view the threats detected in your network, see View threats .
Limitations
Firewall endpoints ignore X-Forwarded-For (XFF) headers. Therefore, these
headers are not included in the VPC firewall rules logging.
Firewall endpoints can support IP packets of a limited size only. For more
information, see Supported packet size .
Intranode visibility for Google Kubernetes Engine (GKE) is unsupported. For more
information, see
Setting up intranode visibility .
What's next
Configure intrusion detection and prevention service
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
