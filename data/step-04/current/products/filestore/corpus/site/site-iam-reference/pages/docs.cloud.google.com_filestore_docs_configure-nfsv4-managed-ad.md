---
title: "Create a Filestore instance with Managed Microsoft AD \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/create-instance-console
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/configure-nfsv4-managed-ad
  title: "Create a Filestore instance with Managed Microsoft AD \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Create a Filestore instance with Managed Microsoft AD
Stay organized with collections
Save and categorize content based on your preferences.
Create a Filestore instance that uses the NFSv4.1 protocol with Managed Microsoft AD.
Before you begin
Before you create a new Filestore instance ensure you have enough quota.
Instance quota ranges by the region location and service tier you want to use.
To increase available quota, you must submit a quota increase request .
Create the Managed Microsoft AD domain
If you want to use Managed Microsoft AD with a Filestore instance, the
Managed Microsoft AD domain must be created before the Filestore
instance.
Both the Managed Microsoft AD domain and the Filestore
instance must use the same VPC
while on the same project.
If your Managed Microsoft AD service is hosted in a project separate from
the Filestore instance you want to use, then the Filestore
VPC network needs to be peered to the Managed Microsoft AD domain.
For more information, see
Deploy Managed Microsoft AD with cross-project access using domain peering .
Complete all the setup steps to create a Filestore instance .
Ensure that Managed Microsoft AD users have POSIX RFC 2307
and RFC 2307bis
fields populated, similar to the following.
For more information on how to configure objects in Managed Microsoft AD,
see Managed Active Directory objects .
Active Directory Users and Computers
The following steps describe the attributes you need to set for LDAP
users and groups. You can manage POSIX attributes by using the Active
Directory Users and Computers MMC snap-in.
Open the Attribute Editor as follows:
Click Start .
Click Windows Administrative Tools , and select
Active Directory Users and Computers .
The Active Directory Users and Computers window opens.
Select the domain name that you want to view. To expand its contents,
click the arrow_right expander arrow.
In the Active Directory Users and Computers View menu, select
Advanced Features .
In the left pane, double-click Users .
In the users list, double-click a user to see its Attribute Editor
tab.
LDAP users must have the following attributes set:
uid
uidNumber
cn
gidNumber
objectClass
Each user must have a unique uidNumber . Note that the value for the
uid attribute is case sensitive. For the objectClass attribute,
user is the default setting on most Active Directory (AD) deployments.
The following is an example:
uid: Alice
uidNumber: 139
gidNumber: 555
objectClass: user
LDAP groups must have the following attributes set:
cn
gidNumber
objectClass
Each group must have a unique gidNumber . Note that the value for the
cn attribute is case sensitive. For the objectClass attribute,
group is the default setting on most AD deployments. The following is
an example:
cn: AliceGroup
gidNumber: 555
objectClass: group
Grant Filestore access to create and manage objects in
Managed Microsoft AD using the
gcloud projects add-iam-policy-binding
command:
gcloud projects add-iam-policy-binding MANAGED_MICROSOFT_AD_PROJECT_ID \
--member=serviceAccount:service-$(gcloud projects describe PROJECT_ID \
--format='value(projectNumber)')@cloud-filer.iam.gserviceaccount.com \
--role=roles/managedidentities.filestoreintegrator
Replace the following:
MANAGED_MICROSOFT_AD_PROJECT_ID is the project ID of the
project where the Managed Microsoft AD domain is located.
PROJECT_ID is the project ID of the project where the
Filestore instance is located.
You might see an error, similar to the following:
INVALID_ARGUMENT: Service account service-123456789012@cloud-filer.iam.gserviceaccount.com does not exist.
If so, use the following command to resolve it:
gcloud beta services identity create --service=file.googleapis.com --project \ MANAGED_MICROSOFT_AD_PROJECT_ID
Create a Filestore instance with Managed Microsoft AD
Google Cloud console
Set up the instance parameters
In the Google Cloud console, go to the Filestore instances
page.
Go to the Filestore instances page
Click Create Instance .
Specify the basic parameters of the instance:
In the Instance ID field, enter the name you want to use for the
Filestore instance.
In Instance Type , select Regional or Zonal .
To create an enterprise instance, you must run operations
directly through the Filestore API.
In Allocated Capacity , enter the capacity you want to use. You must
enter a value between 1 TB and 10 TB, in increments of
256 GiB (0.25 TiB).
In Region , select the region you want to use.
In VPC Network , select the network you want to use for the
Filestore instance and NFS clients.
If Managed Microsoft AD is in the same project as the Filestore
instance, the VPC network needs to be authorized in the
Managed Microsoft AD domain.
If Managed Microsoft AD is in a separate project, then the VPC
network should be configured with Active Directory network peering on
the Managed Microsoft AD configuration.
In Allocated IP range , select
Use an automatically allocated IP range (recommended) .
In Protocol , select NFSv4.1 .
Configure the instance's authentication settings
Configure the instance's authentication settings.
Click Authentication .
Select the project hosting Managed Microsoft AD. For the purpose
of this guide, we'll assume the current project is the one we want to
use.
In the Join an Active Directory domain list, select the
Managed Microsoft AD domain you want to use.
In the Computer account name field, enter the computer account name
you want to use to identify the Filestore instance in the
Managed Microsoft AD domain. The name is limited to 15
alphanumeric characters.
In the File share name field, enter the name of the share as it
will be used by the NFSv4.1 clients.
In the Access Control pane, complete either of the following steps:
If using Managed Microsoft AD, select
Restrict access by IP address or range .
Set the access rule by IP or subnet you want to define. For the
purpose of this guide, use the following settings:
In the IP address or range 1 field, enter the IP address
or range you want to use.
Click the Access 1 drop-down list, and select Admin .
Click the Mount sec= 1 drop-down list, and select the
sys checkbox.
The Filestore default / owner is root . To
enable access to the instance for other users and groups,
you must create an access rule that enables management VM
access using the Admin role and the sec=sys security
setting.
If you're not using Managed Microsoft AD, select
Grant access to all clients on the VPC network .
If Managed Microsoft AD is not used, the only supported
security setting is sec=sys .
Click Create to create the instance.
gcloud
Install and initialize the gcloud CLI .
If you already have the gcloud CLI installed, run the following
command to update it:
gcloud components update
Run the gcloud beta filestore instances create
command to create a Filestore zonal,
regional, or enterprise instance:
gcloud beta filestore instances create INSTANCE-ID \
--description=" DESCRIPTION " \
--region= LOCATION \
--tier= TIER \
--protocol= PROTOCOL \
--file-share=name=" FILE_SHARE_NAME ",capacity= CAPACITY TB \
--network=name=" VPC_NETWORK ",connect-mode= CONNECT_MODE ,reserved-ip-range=" RESERVED_IP_RANGE " \
--managed-ad=domain=projects/ MANAGED_AD_PROJECT_ID /locations/global/domains/ MANAGED_AD_DOMAIN_NAME ,computer= DOMAIN_COMPUTER_ACCOUNT \
--project= CONSUMER_PROJECT_ID
Where:
INSTANCE_ID is the instance ID of the Filestore
instance that you want to create. See
Name your instance .
DESCRIPTION is a description for the instance you want to use.
LOCATION is the location where you want the Filestore instance to reside.
TIER is the service tier you want to use.
PROTOCOL is NFS_v4_1 .
FILE_SHARE_NAME is the name you specify for the NFS file share that is served from the instance.
CAPACITY is the size you want for the file share, between 1 TiB to 10 TiB.
VPC_NETWORK is the name of the VPC network you want the instance to use. See Select the VPC network .
If you want to specify a Shared VPC from a service project, you must specify the fully-qualified network name, which is in the following format:
projects/ HOST_PROJECT_ID /global/networks/ SHARED_VPC_NAME
Specify connect-mode=PRIVATE_SERVICE_ACCESS , similar
to the following:
--network=name=projects/host/global/networks/shared-vpc-1,connect-mode=PRIVATE_SERVICE_ACCESS
You can't specify a legacy network
for the vpc_network value. If necessary, create a
new VPC network to use by following the
instructions in Create an auto mode VPC network .
MANAGED_AD_PROJECT_ID is the project ID where the
Managed Microsoft AD service is located.
MANAGED_AD_DOMAIN_NAME is the domain name of the
Managed Microsoft AD service you want to use. You choose this domain name when creating a Managed Microsoft AD domain.
DOMAIN_COMPUTER_ACCOUNT is any name that you want the
cluster to be called in the domain.
CONSUMER_PROJECT_ID is the project ID of the project that
contains the Filestore instance.
CONNECT_MODE is DIRECT_PEERING or PRIVATE_SERVICE_ACCESS .
If you are specifying a Shared VPC as the network, you must
also specify PRIVATE_SERVICE_ACCESS as the connect mode. This flag
is required for VPC Network Peering, which is a requirement when
using Managed Microsoft AD.
RESERVED_IP_RANGE is the IP address range for the
Filestore instance. If you are specifying
connect-mode=PRIVATE_SERVICE_ACCESS , and want to use a reserved
IP address range, you must specify the name of an
allocated address range
instead of a CIDR range. See
Configure a reserved IP address .
We recommend that you skip this flag to allow Filestore
to automatically find a free IP address range and assign it to
the instance.
Disconnect a Managed Microsoft AD from a Filestore instance
Google Cloud console
Disconnect a Filestore instance connected to Managed Microsoft AD.
In the Google Cloud console, go to the Filestore Instances page.
Go to the Filestore instances page
Click the instance ID of the instance you want to edit.
In the NFS mount point pane, under Protocol , next to
Directory service name , click
delete Disconnect AD domain .
In the Disconnect from domain failed window, read the alert, then,
click Edit instance .
At least one rule in Access control must be mapped to
the Administrator role with the sys mount security setting, such as,
Access=Admin Mount and sec= sys .
In the Edit share pane, locate the rule where
Access is set to Admin . Click Mount sec= ... , and select
sys to add that option to the existing setting.
Click OK .
Click Save .
Next to Directory service name , click
delete Disconnect AD domain .
In the field in the Disconnect from domain? window, enter the name
of the domain from which you want to disconnect.
Click Disconnect .
Edit the access rules
Refresh the page. Note that Directory service name is now set to
None .
Click Edit .
In the Edit share pane, locate any rule that sets access for a role
other than Admin , such as Editor . In the rule, click
Mount sec= ... , and select sys to add it to the existing
setting. Click OK .
Click Save .
Refresh the page.
The rule settings update.
Reconnect a Managed Microsoft AD to a Filestore instance
Google Cloud console
Reconnect a Filestore instance to Managed Microsoft AD.
In the NFS mount point pane, under Protocol , next to
Directory service name , click
edit Join AD domain .
In the Join this instance to an Active Directory Domain window,
select Use domains from the current project , in the
Join an Active Directory Domain menu, select the domain you want to
use.
In the Computer account name menu, enter a name.
Click Join Domain .
Refresh the page. Note that Directory service name has been updated
with your selection.
Click Edit .
In the Edit share pane, click
Mount sec= ... in all applicable rules and remove the sys
selection. Click OK .
Click Save .
Refresh the page.
The rule settings update.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
