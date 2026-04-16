---
title: "Quickstart: Join a Windows VM manually to a domain \_|\_ Managed Service for\
  \ Microsoft Active Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows
  title: "Quickstart: Join a Windows VM manually to a domain \_|\_ Managed Service\
    \ for Microsoft Active Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Join a Windows VM manually to a domain
This document explains how to join a Windows VM to a Managed Microsoft AD
domain.
Before you begin
Before you begin, complete the following tasks:
Create a Managed Microsoft AD
domain .
Create a Windows
VM .
When you create the VM, make sure that you complete the following tasks:
Create the VM with a Windows version that Managed Microsoft AD
supports .
Create the VM in the project that hosts your Managed Microsoft AD
domain. If your Managed Microsoft AD domain has
Shared VPC as an authorized network, you
can alternatively create the VM in any of the Shared VPC service
projects.
Create the VM on a VPC network that you have peered with
the Managed Microsoft AD domain.
Join the Windows VM
Before you join the Windows VM to the domain, connect to the Windows
VM .
To join the VM to the domain, you need the following information:
The domain name
of your Managed Microsoft AD domain.
The username and password of an account that has permissions to join a VM to
the domain. By default, members of the Cloud Service Domain Join Accounts
group have these permissions. For more information about the default groups
that Managed Microsoft AD creates, see
Groups .
You can join the Windows VM to the Managed Microsoft AD domain either using
the Windows
GUI
or
PowerShell .
For information about common issues that you can encounter while joining a VM
manually to a domain, see Unable to join a VM manually to a
domain .
What's next
Join a Windows VM automatically to a
domain .
Manage Active Directory objects in your
Managed Microsoft AD domain.
Connect to a Managed Microsoft AD
domain .
Learn about the delegated administrator
account .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
