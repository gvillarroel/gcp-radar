---
title: "Use delegated administrator account \_|\_ Managed Service for Microsoft Active\
  \ Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/how-to-use-delegated-admin
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/how-to-use-delegated-admin
  title: "Use delegated administrator account \_|\_ Managed Service for Microsoft\
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
Use delegated administrator account
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to use the delegated administrator account and manage its credentials in Managed Service for Microsoft Active Directory.
Overview
When you create a Managed Microsoft AD domain, Managed Microsoft AD automatically creates a delegated administrator account. You can use this account to manage the domain.
After you log into this account, you can perform the following tasks:
Manage data and Active Directory objects.
Manage other service administrators.
Use standard Active Directory tools.
Learn more about
the rights that are automatically granted to the delegated administrator account .
Note:
The Domain and Enterprise administrator accounts of Managed Microsoft AD
domains are reserved for use by Google Cloud.
Get account name
By default, the delegated administrator account is named setupadmin . After domain
creation, you can't change the username. You can specify a custom username only when you
create a domain . If you specify a custom username, make sure that you follow the naming conventions of
SAM-Account-Name
attribute .
To retrieve the name of the delegated administrator account, complete the following steps:
Console
In the Google Cloud console, go to the Managed Microsoft AD page.
Go to Managed Microsoft AD
Under FQDN , select the domain to get the delegated administrator
account name for.
The account name is listed under Admin name .
gcloud
Run the following command:
gcloud active-directory domains describe DOMAIN_NAME
The response is YAML containing information about the domain. The delegated
administrator account name is listed under the managedIdentitiesAdminName
field:
managedIdentitiesAdminName: setupadmin
Reset the password
If you forget the password for the delegated administrator account, you can't retrieve the existing password. However, you can
reset the password.
To reset the delegated administrator account's password, you must have any one of the following IAM roles:
Google Cloud Managed Identities Admin ( roles/managedidentities.admin )
Google Cloud Managed Identities Domain Admin ( roles/managedidentities.domainAdmin )
For more information, see
Cloud Managed Identities roles .
Warning:
Resetting the password returns a new password in human-readable,
plain-text form. Ensure that your screen is secure before you run the command and
click Confirm .
Console
In the Google Cloud console, go to the Managed Microsoft AD page.
Go to Managed Microsoft AD
Under FQDN , select the domain to reset the delegated administrator
password for.
On the Domain details page, select the Set Password .
In the Set password dialog, click Confirm .
The new password is displayed in the New password dialog.
gcloud
Run the following command:
gcloud active-directory domains reset-admin-password DOMAIN_NAME
This operation can take up to 60 seconds to complete.
Disable password expiration
By default, the password for the delegated administrator account expires after
42 days. Make sure that you change the password before it expires.
You can use fine-grained password policies (FGPP) to disable password expiration for the delegated administrator account. Using FGPP, you can set the value of Maximum password age policy setting in the required password settings objects (PSO) to "0" and enforce the password policy on the delegated administrator account.
To disable password expiration for your delegated administrator account, you must be a member of the Cloud Service Fine Grained Password Policy Administrators group.
To add a user to this group, run the following command in PowerShell:
Add-ADGroupMember -Identity 'Cloud Service Fine Grained Password Policy Administrators'
-Members USER
Replace USER with the name of the user which you want to add to Cloud Service Fine Grained Password Policy Administrators group.
For more information, see Delegate permissions to manage policies .
Log off from the delegated administrator account.
Note: If you add setupadmin to the Cloud Service Fine Grained Password Policy Administrators group, you have to restart the VM instead of logging off from the account.
To disable password expiration for your delegated administrator account, do the following:
Login as a member of the Cloud Service Fine Grained Password Policy Administrators group.
To modify the value of MaxPasswordAge property to "0", run the following command in PowerShell:
Set-ADFineGrainedPasswordPolicy -Identity PSO -MaxPasswordAge 0
Replace PSO with the name of the PSO in which you want to disable the password expiration policy using FGPP. For example, PSO-10 .
For more information about Set-ADFineGrainedPasswordPolicy cmdlet, see Modify a pre-created password policy .
To apply the password policy to your delegated administrator account, run the following command in PowerShell:
Add-ADFineGrainedPasswordPolicySubject PSO -Subjects DELEGATED_ADMINISTRATOR_ACCOUNT
Replace the following:
PSO : Name of the PSO in which you have disabled the password expiration policy. For example, PSO-10 .
DELEGATED_ADMINISTRATOR_ACCOUNT : Name of the delegated administrator account for which you want to disable password expiration. For example, setupadmin .
For more information about Add-ADFineGrainedPasswordPolicySubject cmdlet, see Add a user or group to a password policy .
Using Active Directory Domain Services tools
To access Active Directory Domain Services (AD DS) tools, you must use the
delegated administrator account. When you
connect to the VM instance ,
be sure to log in with the delegated administrator account. You cannot switch
accounts after connecting to the VM or provide additional credentials. After
connecting to the VM, you can use the Add Roles and Features Wizard to enable the AD DS tools. Learn more about
enabling AD DS tools .
Create a UPN suffix
The names of the current domain and the root domain are the default user
principal name (UPN) suffixes. Adding alternative domain names provides
additional security and simplifies user login names.
To create a UPN suffix, complete the following steps:
Connect to the VM instance
with the delegated administrator account.
Open Server Manager .
From Tools , select Active Directory Domains and Trusts .
In the Active Directory Domains and Trusts management console,
right-click Active Directory Domains and Trusts in the left pane, and
then select Properties .
In the dialog box, in the Alternate UPN suffixes box, type the name of
the new UPN suffix.
Click Add , and then click OK .
When you add a new user account to Active Directory, you should see the
new UPN suffix available in the list when setting the username.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
