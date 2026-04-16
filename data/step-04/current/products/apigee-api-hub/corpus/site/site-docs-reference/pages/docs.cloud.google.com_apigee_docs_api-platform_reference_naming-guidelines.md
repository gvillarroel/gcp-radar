---
title: "Naming guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/naming-guidelines
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/naming-guidelines
  title: "Naming guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Resources
Send feedback
Naming guidelines
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
The following table lists naming guidelines for common Apigee components:
Named Item
Maximum characters
Allowed characters
API key
255
Alphanumeric and the following: _ -
API product
100 (1)
Alphanumeric, space, and the following: _ - . # $ %
App: developer and company
Alphanumeric, space, and the following: _ - . # $ % . Must begin with an alpha character or digit
Email ID
Valid email address syntax. (Hybrid only) lower case only
Environment name
32
Alphanumeric, space, and the following: _ - .
Instance name
32
Lowercase alphanumeric, hyphens, and numbers. Must begin with an alpha character; cannot end with a hyphen. Follows the pattern /^[a-z0-9-]+$/
Key value map (KVM) name
Alphanumeric, space, and the following: _ - . # $ %
Key value map (KVM) key name
Alphanumeric, space, and the following: _ - . $
Organization name
32
Lowercase letters only; it should not contain spaces, underscores, or periods.
Password for Apigee administrators
>=8, <= 100
Alphanumeric, special characters. The password must have at least one lowercase character, one uppercase character, one number, and one special character.
Policy name (or step definition)
237
Alphanumeric, space, and the following: _ - .
Proxy name
2048 (2)
Alphanumeric, space, and special characters. Long names with many special characters might cause rendering or other issues and should be avoided.
Resource file names
255
Alphanumeric, space, and the following: : / \ ! @ # $ % ^ & { } [ ] ( ) _ + - = , . ~ '
Resource file types
255
Alphanumeric and the following: _ - .
(1) Total length including organization name and product display name, in this form: <org_name>@@@<display_name> . For example, "MyOrg1@@@API Product Name".
(2) Including http:// or https://.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
