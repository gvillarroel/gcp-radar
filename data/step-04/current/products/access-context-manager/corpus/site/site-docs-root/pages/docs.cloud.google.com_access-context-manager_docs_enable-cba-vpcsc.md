---
title: "Enforce certificate-based access with VPC Service Controls \_|\_ Access Context\
  \ Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-vpcsc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-vpcsc
  title: "Enforce certificate-based access with VPC Service Controls \_|\_ Access\
    \ Context Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Guides
Send feedback
Enforce certificate-based access with VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
To protect Google Cloud services in your projects and mitigate the risk of data
exfiltration, you can specify VPC Service Controls service perimeters at an
organization, folder, or project level. Applying a service perimeter provides
you with fine-grained control over the ingress policy as well as which services
and resources to protect.
For more information about the benefits of service perimeters, see Overview of VPC Service Controls .
Applying a CBA ingress policy to service perimeters
Applying CBA access levels to service perimeters allows you to grant access to
perimeter-protected resources from only trusted devices. For more information
about creating a CBA access level, see Create access levels for certificate-based access .
The following diagram illustrates a basic example of restricting access to
Cloud Storage sensitive data from unknown devices by associating a CBA access
level with a service perimeter:
To apply a CBA ingress policy to a service perimeter, complete the following steps:
In the Google Cloud console navigation menu, click Security , and then click
VPC Service Controls .
Go to the VPC Service Controls page
On the VPC Service Controls page, in the table, click the name of
the service perimeter that you want to modify.
On the Edit VPC Service Perimeter page, click Access Levels .
For the Choose Access Level , select the CBA access level.
Click Save .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
