---
title: "Create a group Managed Service Account \_|\_ Managed Service for Microsoft\
  \ Active Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/create-gmsa
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/create-gmsa
  title: "Create a group Managed Service Account \_|\_ Managed Service for Microsoft\
    \ Active Directory \_|\_ Google Cloud Documentation"
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
Create a group Managed Service Account
Stay organized with collections
Save and categorize content based on your preferences.
This topic shows you how to create a group Managed Service Account (gMSA) in
Managed Service for Microsoft Active Directory. You should follow
these standard instructions
for setting up the account and incorporate the following special considerations
for Managed Microsoft AD.
Do not create KDS root key
Usually, the first time you create a gMSA in a domain, you need to generate a
Key Distribution Service (KDS) root key. Managed Microsoft AD generates a KDS
root key for you when you create the domain, so you can skip that step from
the standard instructions .
View the KDS root key
Before you begin, be sure that the Active Directory Sites and Services tool is
installed from
Remote Server Administration Tools (RSAT) .
To view the KDS root key, complete the following steps:
In Windows, launch the Active Directory Sites and Services tool. To launch
this tool, you can open the Run command dialog box, and then enter
dssite.msc .
In the Active Directory Sites and Services tool, select the View tab.
In the View menu, select Show Services Node .
In the left pane, select Services > Group Key Distribution Service > Master
Root Keys .
The right pane shows a list of keys for your domain. Select a key to view its
details.
Note that running the Get-KdsRootKey PowerShell cmdlet returns an empty
response even though a valid KDS root key exists. You can only see the key when
you run the Get-KdsRootKey cmdlet as the Domain Admin.
Create account under Managed Service Accounts container
For a Managed Microsoft AD domain, new gMSAs should be created
under the Managed Service Accounts container. By default,
the New-ADServiceAccount cmdlet creates new gMSAs in this location. For more information, see
New-ADServiceAccount cmdlet .
Delegate administration of Managed Service Accounts
You can delegate the administration of the Managed Service Accounts container to a user by
adding them to Cloud Service Managed Service Account Administrators group.
For more information about the groups that Managed Microsoft AD creates for you, see Groups .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
