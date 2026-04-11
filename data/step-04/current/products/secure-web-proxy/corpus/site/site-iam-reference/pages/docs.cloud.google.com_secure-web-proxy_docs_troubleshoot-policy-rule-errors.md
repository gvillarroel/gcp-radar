---
title: "Troubleshoot policy and rule errors \_|\_ Secure Web Proxy \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-policy-rule-errors
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-policy-rule-errors
  title: "Troubleshoot policy and rule errors \_|\_ Secure Web Proxy \_|\_ Google\
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
Troubleshoot policy and rule errors
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to diagnose and resolve common errors related to
Secure Web Proxy policies and rules.
Secure Web Proxy gateway doesn't have an associated policy
If your Secure Web Proxy gateway isn't associated with a policy, then all
outbound HTTP and HTTPS traffic is blocked, leading to 403 Forbidden errors or
connection resets. This occurs because Secure Web Proxy
follows a deny-all posture by default and the gateway doesn't have any
associated rules to evaluate or authorize requests. As a result, all outbound
traffic is blocked until you create an explicit allow rule.
To resolve this issue,
create a security policy with the
appropriate rules and associate them
with your Secure Web Proxy gateway.
Parallel rule creation failures
Creating Secure Web Proxy rules in parallel (adding multiple rules
simultaneously) isn't supported and can result in 409 Conflict or
Resource busy errors. To make sure that your Secure Web Proxy instance is
successfully deployed, you must create the rules sequentially (one after
another).
What's next
Troubleshoot next-hop deployment errors
Troubleshoot TLS inspection errors
Secure Web Proxy release notes
Secure Web Proxy support
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
