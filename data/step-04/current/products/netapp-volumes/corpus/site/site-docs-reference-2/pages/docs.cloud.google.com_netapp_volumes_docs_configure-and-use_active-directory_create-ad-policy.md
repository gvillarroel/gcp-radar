---
title: "Create an Active Directory policy \_|\_ NetApp Volumes \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/create-ad-policy
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/create-ad-policy
  title: "Create an Active Directory policy \_|\_ NetApp Volumes \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Create an Active Directory policy
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create an Active Directory policy .
Before you begin
Make sure the Active Directory service is reachable, see
Active Directory domain controllers
and Firewall rules for Active Directory access .
Configure Cloud DNS to forward DNS requests for your Windows domain to
your Windows DNS servers to enable your Google Cloud Compute Engine
virtual machines to resolve Active Directory hostnames, like the Netbios
name used by Google Cloud NetApp Volumes. For more information, see
Best practices for using Cloud DNS private forwarding zones .
This is required for on-premises Active Directory as well as Active Directory
built on Compute Engine.
When creating SMB volumes, NetApp Volumes uses secure dynamic
DNS updates to register its hostname. This process works well when you use
Active Directory DNS. If you are using a third-party DNS service to host the
zone for your Windows domain, make sure it is configured to support secure
DDNS updates. Otherwise, the creation of Flex File service type volumes will
fail.
Active Directory policy settings don't apply until you create the first volume
that requires Active Directory in the specified region. During that volume
creation, incorrect settings can cause volume creation failures.
Flex Unified storage pools in ONTAP-mode don't use Active Directory policies.
For more information about instructions, see
ONTAP-mode
tab in the following section.
Create an Active Directory policy
Use the following instructions to create an Active Directory policy using the
Google Cloud console or Google Cloud CLI or ONTAP-mode.
Console
Use the following instructions to create an Active Directory policy in the
Google Cloud console:
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Select Active Directory policies .
Click Create .
In the Create Active Directory Policy dialog, fill out the fields
shown in the following table.
Required fields are marked with an asterisk (*).
Field
Description
Applies to NFS
Applies to SMB
Applies to dual protocol
Active Directory policy name*
The unique identifier name for the policy
check
check
check
Description
Optional: you can enter a description for the policy
check
check
check
Region
Region*
Associates the Active Directory to all volumes in the specified region.
check
check
check
Active Directory connection details
Domain name*
Fully qualified domain name for the Active Directory domain.
check
check
check
DNS Servers*
Comma-separated list of a maximum of three DNS server IP addresses
used for DNS-based domain controller discovery .
check
check
check
Site
Specifies an Active Directory site to manage domain controller selection.
Use when Active Directory domain controllers in multiple regions are configured.
Defaults to Default-First-Site-Name if left empty.
check
check
check
Organizational Unit
Name of the Organizational Unit where you intend to create the
computer account for NetApp Volumes.
Defaults to CN=Computers if left empty.
check
check
check
NetBIOS Name Prefix*
NetBIOS name prefix of the server to be created.
A five-character random ID is generated automatically, for example, -6f9a ,
and appended to the prefix. The full UNC share path has the following format:
\\ NetBIOS_PREFIX >- 4-random-hexletters >. DOMAIN_NAME >\ SHARE_NAME > .
check
check
check
Enable AES Encryption for Active Directory authentication
Enables AES-128 and AES-256 encryption for Kerberos-based communication
with Active Directory
check
check
check
Active Directory credentials
Username* and Password*
Credentials for the Active Directory account with permissions to create
the compute account within the specified organizational unit.
check
check
check
SMB settings
Administrators
Domain user accounts to be added to the local Administrators group of
the SMB service.
Provide a comma-separated list of domain users or groups. The Domain
Admin group is automatically added when the service joins your domain as
a hidden group.
Administrators only use the Security Account Manager (SAM) Account name.
The SAM Account name supports a maximum of 20 characters for your
username and 64 characters for your group name.
check
check
Backup Operators
Domain user accounts to be added to the Backup Operators group of the
SMB service. The Backup Operators group allows members to backup and restore
files regardless of whether they have read or write access to the files.
Provide a comma-separated list of domain users or groups.
Backup Operators only use the Security Account Manager (SAM) Account name.
The SAM Account name supports a maximum of 20 characters for your username
and 64 characters for your group name.
check
check
Security Privilege Users
Domain accounts that require elevated privileges such as SeSecurityPrivilege
to manage security logs.
Provide a list separated by commas of domain users or groups. This is
specifically needed for the installation of a SQL Server where binaries
and system databases are stored on an SMB share. This option isn't
required if you use an administrator user during installation.
check
check
NFS settings
Kerberos Key Distribution Hostname
Hostname of the Active Directory server used as Kerberos Key Distribution
Center
NFSv4.1 with Kerberos
SMB and NFSv4.1 with Kerberos
KDC IP
IP address of the Active Directory server used as Kerberos Key Distribution
Center
NFSv4.1 with Kerberos
SMB and NFSv4.1 with Kerberos
Allow local NFS users with LDAP
Local UNIX users on clients without valid user information in
Active Directory are blocked from access to LDAP enabled volumes .
This option can be used to temporarily switch such volumes to AUTH_SYS
authentication (user ID + 1-16 groups).
check
check
Labels
Labels
Optional: add relevant labels
check
check
check
Click Create . For the Flex Unified, Standard, Premium, and Extreme
service levels: after creating an Active Directory policy and attaching it
with a storage pool, you should test the connection to the Active Directory service .
gcloud
Create an Active Directory policy:
gcloud netapp active-directories create CONFIG_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--dns = DNS_LIST \
--domain = DOMAIN_NAME \
--net-bios-prefix = NetBIOS_PREFIX \
--username = USERNAME \
--password = PASSWORD \
Replace the following information:
CONFIG_NAME : the name of the config you want to create.
The config name must be unique per region.
PROJECT_ID : project ID you are creating the
Active Directory policy in.
LOCATION : the region of you want to create the
config in. Google Cloud NetApp Volumes only supports one config per region.
DNS_LIST : a list separated by commas of up to three
IPv4 addresses of Active Directory DNS servers.
DOMAIN_NAME : the fully qualified domain name of the
Active Directory.
NetBIOS_PREFIX : NetBIOS name prefix of the server
you want to create. A five-character random ID generates automatically, such
as -6f9a , and appends to the prefix.
The full UNC share path has the following format:
\\ NetBIOS_PREFIX >- 4 -random-hexletters >. DOMAIN_NAME > \ SHARE_NAME >.
USERNAME : The name of a domain user
with permission to join the domain.
PASSWORD : Password for the username.
For more information about additional optional flags, see Google Cloud SDK documentation on Active Directory creation .
ONTAP-mode
To use Active Directory, you must join the ONTAP-mode storage virtual machine
(SVM) to a Windows domain. Identify the required ONTAP commands in the
ONTAP documentation .
The following prerequisites are already preconfigured for ONTAP-mode pools:
Existing SVM or vserver and aggregates
Network Time Protocol (NTP)
Data Logical Interfaces (LIFs), which are network interfaces, to serve SMB
or NFS requests
Complete the following steps:
Enable DNS for ONTAP SMB host-name resolution .
Create an SMB server. Choose one of the following modes:
Active Directory domain mode
Workgroup mode
For domain mode, verify that domain controllers are reachable .
Configure SMB client access to shared ONTAP storage .
ONTAP-mode also lets you connect to non-Active Directory LDAP servers, for
example, for extended group support. For more information, see
Learn about LDAP for ONTAP NFS SVMs .
After you identify the required commands, see ONTAP-mode
for instructions about how to submit ONTAP commands to the storage pool.
What's next
Test the Active Directory policy connection .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
