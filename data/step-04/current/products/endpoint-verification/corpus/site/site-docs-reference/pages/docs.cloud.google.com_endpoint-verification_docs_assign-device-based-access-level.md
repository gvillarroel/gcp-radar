---
title: "Assign device-based access levels \_|\_ Endpoint Verification \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/assign-device-based-access-level
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/creating-device-access-level
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/assign-device-based-access-level
  title: "Assign device-based access levels \_|\_ Endpoint Verification \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Endpoint Verification
Guides
Send feedback
Assign device-based access levels
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how administrators can assign the device-based access levels
to control access to applications. These applications include
Google Workspace resources and the
applications that are protected by
Identity-Aware Proxy on
Google Cloud (also known as IAP-secured resources).
Before you begin
To complete the tasks on this page, you must have one of the following roles:
Access Context Manager Admin ( roles/accesscontextmanager.policyAdmin )
Access Context Manager Editor ( roles/accesscontextmanager.policyEditor )
Assign device-based access levels on resources
The way you assign device-based access levels depends on whether you are
using Google Workspace or Google Cloud resources:
Google Workspace
As an administrator, you can assign one or more access levels for the apps
by using Context-Aware Access from the Google Admin console. If you select
multiple access levels, devices must satisfy the conditions only in
one of the access levels to be granted access to the app.
Note: If you want user devices to satisfy conditions in more than one access
level (a logical AND of access levels), create an access level with all the
required conditions.
Assign access levels for Google Workspace applications
from the Google Workspace Admin console:
From the Admin console Home page, go to Security > Context-Aware Access .
Go to Context-Aware Access
Click Assign access levels .
You see a list of apps.
In the Organizational units section, select your organizational unit
or group.
Select the app for which you want to assign an access level, and click Assign .
You see a list of all access levels. Access levels are a shared resource
between Google Workspace, Cloud Identity, and Google Cloud so you
might see access levels that you didn't create in the list.
Select one or more access levels for the app.
To apply the access levels to users on desktop and mobile apps (and
on the browser), select Apply to Google desktop and mobile apps .
This checkbox applies to built-in apps only.
Click Save .
The access level name displays in the assigned access levels list next to
the app.
Google Cloud
You assign an access level to an IAP-secured resource by
updating its IAM policy.
For instructions, see
Apply an access level for IAP-secured resources
in the Chrome Enterprise Premium documentation.
What's next
Manage access levels
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
