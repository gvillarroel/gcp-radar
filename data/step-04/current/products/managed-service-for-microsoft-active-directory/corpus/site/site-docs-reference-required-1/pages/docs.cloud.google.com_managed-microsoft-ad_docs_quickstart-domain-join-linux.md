---
title: "Quickstart: Join a Linux VM to a domain \_|\_ Managed Service for Microsoft\
  \ Active Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux
  title: "Quickstart: Join a Linux VM to a domain \_|\_ Managed Service for Microsoft\
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
Stay organized with collections
Save and categorize content based on your preferences.
Join a Linux VM to a domain
This page shows you how to join a Linux VM, running supported Linux
distributions , to a
domain in Managed Service for Microsoft Active Directory using the System Security Services Daemon (SSSD).
Managed Microsoft AD interoperability works for many Linux distributions
and other connectivity tools. Learn about
these open source connectivity tools .
Before you begin
Verify that you have the permissions required to complete this guide .
Create a Managed Microsoft AD domain .
Create a Linux VM .
When you create the VM, make sure that you complete the following tasks:
On the Public images tab, select the appropriate distribution. For
example, Ubuntu 22.04 LTS or Red Hat Enterprise Linux 8 .
Select a Linux version that Managed Microsoft AD
supports .
Create the VM in the project that hosts your Managed Microsoft AD domain.
If your Managed Microsoft AD domain has a Shared VPC
as an authorized network, you can also create the VM in any of the
Shared VPC service projects.
Create the VM on a VPC network that you have peered with the
Managed Microsoft AD domain.
Install realmd on the VM. Learn about
realm .
See
Ubuntu
and Red
Hat
documentation for instructions.
The following are some sample commands:
Ubuntu 22.04 LTS or later
apt-get update
apt-get install realmd sssd packagekit
RHEL 8 or later
sudo yum install realmd oddjob oddjob-mkhomedir
sssd adcli
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Google Cloud Managed Identities Admin ( roles/managedidentities.admin )
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
Service Account User ( roles/iam.serviceAccountUser )
Service Account Token Creator ( roles/iam.serviceAccountTokenCreator )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Join a Linux VM to a domain
To join a Linux VM to a domain, you need the following information:
The domain name of your Managed Microsoft AD domain. For example,
mydomain.example.com .
The username and password of an account that has permissions to join a VM to
the domain. By default, members of the Cloud Service Domain Join Accounts
group have these permissions. For more information about the default groups
that Managed Microsoft AD creates, see
Groups .
The username must be in the following format:
USERNAME @ DOMAIN_NAME . The domain name part of the
username must be in uppercase. For example, user@MYDOMAIN.EXAMPLE.COM .
You can join the Linux VM to the Managed Microsoft AD domain using the
realm
join
command. The following is a sample command:
realm join DOMAIN_NAME -U ' USERNAME @ DOMAIN_NAME '
For verbose output, add the -v flag at the end of the command.
Specify account location with realm join
By default, the realm join command creates a machine account that is located at:
CN= ACCOUNT_NAME ,OU=Computers,OU=Cloud,DC= MACHINE ,DC= MID_LEVEL ,DC= EXTENSION
To specify where to create the account, use the --computer-ou flag to provide
the path for the realm join command. The following example shows how to
specify the path:
--computer-ou="OU= CUSTOM_OU ,DC= MACHINE ,DC= MID_LEVEL ,DC= EXTENSION "
The user must have the permissions that are required to create accounts in the specified OU.
Remove a Linux VM from a domain
To remove a Linux VM from a domain, you need the domain name of your
Managed Microsoft AD domain and the username of your user account.
You can remove a Linux VM from the Managed Microsoft AD domain using the
realm
leave
command. The following is a sample command:
realm leave DOMAIN_NAME -U ' USERNAME @ DOMAIN_NAME '
What's next
Connect to a Managed Microsoft AD domain .
Learn about the delegated administrator account .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
