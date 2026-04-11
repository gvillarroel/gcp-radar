---
title: "Frequently asked questions \_|\_ Network Intelligence Center - Connectivity\
  \ Tests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/faq
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/support/faq
  title: "Frequently asked questions \_|\_ Network Intelligence Center - Connectivity\
    \ Tests \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Connectivity Tests
Guides
Send feedback
Frequently asked questions
Stay organized with collections
Save and categorize content based on your preferences.
This document covers commonly asked questions about Connectivity Tests.
Does Connectivity Tests send a trace packet through my VPC network?
Yes, it does (for supported configurations). The live data plane analysis
feature tests connectivity by sending multiple trace packets from the source
endpoint to the destination. For details, see the following pages:
What is reachability?
How Connectivity Tests works
Supported configurations (live data plane analysis)
Can I test a configuration where I enabled the forwarding functions of my VM instance?
No. The configuration analysis traces a packet based on the configuration of
resources in your Google Cloud projects. For virtual machine (VM) instances
that use a customized image, Connectivity Tests doesn't have access to
the forwarding or routing configurations. However, Connectivity Tests
is still helpful in such cases because you can trace connectivity issues to your
Cloud NAT gateway VM, for example. Some examples of this type of configuration
are a VM acting as a Cloud NAT gateway, or a VM acting as a third-party
firewall, such as the Palo Alto Networks VM series. Similarly, live data plane
analysis tests reachability only from the source to the forwarding VM.
Why Connectivity Tests produces multiple traces for a given test?
The Connectivity Tests configuration analysis can show multiple traces
in the following situations:
The destination is a load balancer. For more information, see
Number of traces in a test to a load balancer .
ECMP routing is being used. In this case, Connectivity Tests
configuration analysis shows a trace for each possible route.
The source endpoint has an ambiguous definition. For example, a project
can have multiple entities with the same IP address, in different Virtual Private Cloud
networks. In this case, Connectivity Tests configuration analysis
shows a trace for each source entity.
Live data plane analysis doesn't provide a breakdown into multiple traces.
What's next
Learn about Connectivity Tests
Troubleshoot Connectivity Tests
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
