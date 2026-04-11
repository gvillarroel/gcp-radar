---
title: "Troubleshoot next hop deployment errors \_|\_ Secure Web Proxy \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-next-hop-deployment-errors
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-next-hop-deployment-errors
  title: "Troubleshoot next hop deployment errors \_|\_ Secure Web Proxy \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Guides
Send feedback
Troubleshoot next hop deployment errors
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to diagnose and resolve common issues that might occur
when you deploy Secure Web Proxy as next hop.
Default route isn't defined
When you configure the routing for your Secure Web Proxy instance by using
either static routes or
policy-based routes ,
you must set up a default route ( 0.0.0.0/0 ).
If you don't set up a default route, the proxy can't forward traffic to external
destinations and the following errors might occur:
Connection timeouts - 504 Gateway Timeout
No route to host - 502 Bad Gateway
Default static route doesn't have a network tag
When using a default
static route for your
Secure Web Proxy instance, you must assign a
network tag to that route. Otherwise,
you might encounter validation errors.
You must also attach the tag to your client
virtual machine (VM) instances to help ensure the traffic is routed to the
proxy.
Non-HTTP and non-HTTPS traffic is blocked
Secure Web Proxy is optimized for web-based traffic; Transmission Control
Protocol (TCP) traffic is blocked if it's routed to Secure Web Proxy and there
are no TCP proxy rules configured to handle it. This mismatch typically results
in Connection Refused or 400 Bad Request errors for protocols like Secure
Shell (SSH) and File Transfer Protocol (FTP).
To resolve such types of errors, either create specific
TCP proxy rules
to manage the traffic or update your
policy-based routes
to only forward ports such as 80 or 443 . By following any one of these
processes, you can help ensure that the TCP traffic bypasses
your Secure Web Proxy instance and follows standard Virtual Private Cloud
(VPC) routing.
Secure Web Proxy as next hop gateway fails to deploy
To fix this issue, do the following:
Verify whether an existing Secure Web Proxy instance is deployed as a next
hop in the same region. For a Virtual Private Cloud network in a region, you can deploy
only one Secure Web Proxy instance as a next hop.
Check your organization's audit logs for policies that might be preventing
the creation of Cloud NAT gateways.
Verify that no orphaned auto-generated resources—such as
swg-autogen-router or swp-autogen-nat —exist in the network; if they do,
delete the auto-generated router and then redeploy your Secure Web Proxy.
What's next
Troubleshoot TLS inspection errors
Secure Web Proxy release notes
Secure Web Proxy support
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
