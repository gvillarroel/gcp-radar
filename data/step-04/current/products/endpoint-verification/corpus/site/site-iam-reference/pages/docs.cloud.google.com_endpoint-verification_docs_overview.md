---
title: "Endpoint Verification overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/troubleshoot-issues-user
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/overview
  title: "Endpoint Verification overview \_|\_ Google Cloud Documentation"
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
Endpoint Verification overview
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the basic concepts of Endpoint Verification.
Endpoint Verification lets security administrators or security operations
professionals secure Google Cloud, on-premises apps and resources, and
Google Workspace apps.
Endpoint Verification is part of Google Cloud
Chrome Enterprise Premium and is available to all
Google Cloud, Cloud Identity, Google Workspace for Business, and
Google Workspace for Enterprise customers.
When to use Endpoint Verification
Use Endpoint Verification when you want an overview of the security posture of the
devices that are used to access your organization's resources, such as laptops
and desktops.
As a security administrator or security operations professional, your goal is to
manage secure access to your organization's resources. The employees of your
organization can use either the company-owned devices or their unmanaged
personal devices to access the organization's resources. When Endpoint Verification
is installed on the devices that access your organization's resources, it
collects and reports device inventory information. You can use this device
inventory information to manage secure access to your organization's resources.
When paired with the other offerings of Chrome Enterprise Premium, Endpoint Verification helps
enforce fine-grained access control on your Google Cloud resources.
How Endpoint Verification works
Endpoint Verification consists of a Chrome extension that collects and reports
device inventory information by constantly syncing with Google Cloud.
Endpoint Verification creates an inventory of devices with Chrome browser that
access your organization's data.
For example, after Endpoint Verification is deployed on devices that are used to
access Google Cloud resources, Endpoint Verification populates information
about those devices. As an administrator, you can review the
device information including encryption status, OS, and other details, and use
this information to manage access control.
For more information, see Device attributes collected by Endpoint Verification .
How Endpoint Verification works with Access Context Manager
Access Context Manager , which is part of Google Cloud
Chrome Enterprise Premium ,
lets security administrators or security operations professionals define
fine-grained and attribute-based access control for projects and resources in
Google Cloud and resources in Google Workspace.
Access Context Manager references the device attributes collected by Endpoint Verification to
enforce fine-grained access control with access levels .
The following diagram shows how Endpoint Verification works with Access Context Manager:
How Endpoint Verification works with third-party clients
In Chrome Enterprise Premium and third-party client integrations ,
third-party clients such as CrowdStrike and Microsoft Intune collect
real-time device information. Endpoint Verification communicates with these
third-party clients to collect their device information and makes them available
for Access Context Manager .
Access Context Manager references the device attributes collected by Endpoint Verification and
third-party clients to enforce fine-grained access control with access levels .
The following diagram shows how Endpoint Verification and third-party clients work
with Access Context Manager:
What's next
Quickstart: Set up Endpoint Verification on your devices
Device attributes collected by Endpoint Verification
Deploy Endpoint Verification
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
