---
title: "Manage Active Directory objects \_|\_ Managed Service for Microsoft Active\
  \ Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/manage-active-directory-objects
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/manage-active-directory-objects
  title: "Manage Active Directory objects \_|\_ Managed Service for Microsoft Active\
    \ Directory \_|\_ Google Cloud Documentation"
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
Manage Active Directory objects
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to manage the Active Directory objects in your
Managed Service for Microsoft Active Directory domain.
Before you begin
Before managing your Active Directory objects, you should complete the following
steps:
Create a Managed Microsoft AD domain .
Join your Windows VM to the domain .
Install Remote Server Administration Tools (RSAT).
Install RSAT
To manage the Active Directory objects, you need to install
RSAT
only once on every Managed Microsoft AD domain.
To install RSAT, complete the following steps:
Connect to the Windows VM .
On the Windows VM, open the Add Roles and Features
Wizard .
In the Add Roles and Features Wizard , navigate to the Select
features page. You can either select
Features from the sidebar menu or click Next until you view the
Select features page.
On the Select features page, expand Remote Server Administration
Tools from the Features list, and then expand Role Administration
Tools .
Under Role Administration Tools , select AD DS and AD LDS Tools . This
enables the following features:
Active Directory module for Windows PowerShell
AD LDS Snap-Ins and Command-Line Tools
Active Directory Administrative Center
AD DS Snap-Ins and Command-Line Tools
Note: Managed Microsoft AD doesn't support the Active Directory Recycle Bin feature.
Optional: If you want, you can enable the following features as well:
Group Policy Management
DNS Server Tools (under Role Administration Tools )
Click Next .
On the Confirmation page, click Install .
On the Results page, click Close .
Manage objects
For security reasons, you cannot directly access the domain controller using
either Remote Desktop Protocol (RDP) or any other tools. Instead, you can
connect to a domain-joined VM using RDP and use the standard AD tools to work
remotely with the Active Directory objects in your domain.
To manage your Active Directory objects, complete the following steps:
Connect to the Windows VM that you have joined with the
Managed Microsoft AD domain. For more information, see Connect to Windows
VMs using
RDP .
Open the Active Directory Users and Computers console ( dsa.msc ).
Select the Active Directory domain name, and expand the item.
To manage your Active Directory objects, use the organizational units
(OU) provided by
Managed Microsoft AD. Although you have full control of the objects in the
Cloud OU, you can update only some attributes of the objects in the Cloud
Service Objects OU.
You must have necessary permissions to manage your Active Directory objects. For
information about which users have permissions on which Active Directory
objects, see Default Active Directory
objects .
You can perform only a few Active Directory administrative tasks on your domain
such as creating trust, extending the schema, and disabling SID filtering. You need
to use the Google Cloud console, gcloud CLI, or APIs to perform these tasks,
and not the standard AD tools.
Organizational units
Managed Microsoft AD provides two OUs, Cloud and Cloud Service Objects .
Managed Microsoft AD creates Cloud in your Managed Microsoft AD domain to
host all of your AD objects. You have full administrative access to this OU. You
can use the Cloud OU to create users, groups, computers, or further sub-OUs.
The Cloud Service Objects OU hosts AD objects that Managed Microsoft AD
creates and manages. Only Google Cloud can create objects under this
OU, but you can update some of their attributes.
For more information about the groups under the Cloud Service Objects OU, see
Groups .
You can manage only the Cloud and Cloud Service Objects OUs.
Managed Microsoft AD reserves Active Directory object creation for other OUs.
This provides the added benefit of increased security, and helps you to
administer AD policies that apply to OUs.
Note: Managed Microsoft AD doesn't support DNS aging and scavenging. However,
you can login as a delegated administrator ( setupadmin ) and edit the stale DNS
records manually for the VMs joined to your domain.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
