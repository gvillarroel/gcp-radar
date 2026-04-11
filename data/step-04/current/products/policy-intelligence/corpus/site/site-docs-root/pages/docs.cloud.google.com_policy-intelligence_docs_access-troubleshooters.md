---
title: "Access-related troubleshooters \_|\_ Policy Intelligence \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/access-troubleshooters
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/access-troubleshooters
  title: "Access-related troubleshooters \_|\_ Policy Intelligence \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Guides
Send feedback
Access-related troubleshooters
Stay organized with collections
Save and categorize content based on your preferences.
To help you understand and remedy access issues,
Policy Intelligence offers the following troubleshooters:
Policy Troubleshooter
VPC Service Controls violation analyzer
Policy Troubleshooter for Chrome Enterprise Premium
Policy Troubleshooter
Preview
— Troubleshooting principal access boundary policies
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Policy Troubleshooter helps you understand whether a principal
can access a resource. Given a principal, a resource, and a permission,
Policy Troubleshooter examines the allow policies, deny policies,
and principal access boundary (PAB) policies that impact the principal's access.
Then, it tells you whether, based on those policies, the principal can use
the specified permission to access the resource. It also lists the relevant
policies and explains how they affect the principal's access.
To learn how to use Policy Troubleshooter to troubleshoot
IAM allow policies, deny policies, and principal access boundary (PAB)
policies, see Troubleshooting access .
To learn about the different types of policies that IAM supports,
see Policy types .
VPC Service Controls violation analyzer
The VPC Service Controls violation analyzer helps you troubleshoot access issues
caused by improperly configured VPC Service Controls service
perimeters . Given a unique denial ID, the VPC Service Controls
violation analyzer investigates the denial and reports why a service perimeter
denied a request.
To learn how to use the VPC Service Controls violation analyzer, see Diagnose an
access denial using unique ID in violation analyzer .
Policy Troubleshooter for Chrome Enterprise Premium
The Policy Troubleshooter for Chrome Enterprise Premium helps organizations using
Chrome Enterprise Premium understand why an end user is denied access. Policy
Troubleshooter evaluates both your policies and the end user's context—for
example, their location or device details—to determine why access was
denied.
The Chrome Enterprise Premium Policy Troubleshooter is a premium feature and requires a
Chrome Enterprise Premium license.
To learn how to use Policy Troubleshooter to troubleshoot Chrome Enterprise Premium,
see Troubleshooting by using the Policy Troubleshooter for
Chrome Enterprise Premium .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
