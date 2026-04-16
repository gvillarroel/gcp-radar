---
title: "Google Cloud NetApp Volumes Active Directory integration \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/about-ad
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/about-ad
  title: "Google Cloud NetApp Volumes Active Directory integration \_|\_ Google Cloud\
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
Google Cloud NetApp Volumes Active Directory integration
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how Google Cloud NetApp Volumes integrates with Active Directory
to provide identity and authentication for your Server Message Block (SMB) and
Network File System (NFS) volumes. Understanding this integration helps you
configure secure access to your file shares.
About the integration
Google Cloud NetApp Volumes integrates with Active Directory to provide directory
services for file sharing protocols, such as SMB and NFS. Active Directory
handles authentication, identity lookups, and security principal mapping through
services such as Lightweight Directory Access Protocol (LDAP),
Domain Name System (DNS), and Kerberos.
An Active Directory policy specifies how NetApp Volumes connects
to Active Directory. Storage pool configurations use these policies to define
the Active Directory settings for volumes you create within them.
Active Directory policies are region-specific, and you can configure up to five
policies per region.
File sharing protocols—such as SMB (CIFS), NFSv3 with extended groups,
and NFSv4—using security principals, rely on external directory services
to provide user identity information. NetApp Volumes relies on
Active Directory for directory services. Active Directory provides the following
services:
LDAP servers : look up objects such as users, groups, or machines
DNS servers : resolve host names and discovery of Active Directory domain
controllers
Kerberos servers : perform authentication
For more information, see Best practices for running Active Directory on Google Cloud .
Use cases for Active Directory
NetApp Volumes uses Active Directory for several use cases:
Provides SMB domain service and authentication : Active Directory serves as
the central domain service for SMB, which NetApp Volumes uses
for authentication and identity lookups for users and groups.
NetApp Volumes joins your domain as a member but doesn't
support SMB in workgroup mode.
Provides extended group support for NFSv3 : for NFSv3 with extended group
support, Active Directory provides the LDAP server required to look up
objects such as users, groups, or machine accounts.
Specifically, user ID and group ID lookups require an RFC2307bis -compliant
LDAP server.
LDAP support is enabled on storage pools during pool creation.
Extended group support ignores all group IDs sent by the NFS client in an
NFS call. Instead, it takes the user ID of the request and looks up all
group IDs for the given user ID from the LDAP server for file permission
checks.
For more information, see Manage LDAP RFC2307bis POSIX attributes .
Maps security principals to user and group IDs for NFSv4.x :
NetApp Volumes uses Active Directory to map security principals
to user IDs and group IDs for NFSv4.x.
NFSv4.x uses a principal-based authentication model, where security
principals identify users in the format user@dns_domain , as described in
RFC 7530 security considerations ,
instead of user IDs and group IDs. To map security principals to user IDs
and group IDs when you access the volume with an NFSv4.x protocol,
NetApp Volumes requires an RFC2307bis -compliant LDAP
server. NetApp Volumes only supports Active Directory LDAP
servers. LDAP support is enabled on storage pools during pool creation.
To use security principals, the following requirements must be met:
The NFS client and server must connect to the same LDAP source.
You must configure the idmapd.conf file on the NFS client. For more
information about how to configure the idmapd.conf file, see
Ubuntu documentation on how to configure the idmapd.conf file for libnfsidmap .
The dns_domain is the Active Directory domain name, and the user is the
Active Directory user's name. Use these values when you set your LDAP POSIX
attributes.
Using numeric IDs for NFSv4.1 : to use NFSv4.1 without ID mapping and
only use user IDs and group IDs similar to NFSv3, use numeric IDs to ignore
security principals. NetApp Volumes supports numeric IDs. NFS
clients use numeric IDs by default if ID mapping isn't configured.
Provides Kerberos authentication for NFSv4.x : if you use Kerberos with
NFSv4.x, you must use Active Directory as the LDAP server for security
principal lookups. Kerberos principals
are used as security identifiers. The Kerberos Key Distribution Center uses
Active Directory.
To use Kerberos with NFSv4.x, you must also complete the following steps:
Attach an Active Directory policy that contains Kerberos settings to the
pool.
Enable LDAP support on a storage pool when you create the pool.
Required permissions to create Active Directory machine accounts
To use Active Directory, NetApp Volumes must join one or more
virtual file servers to your domain as computer accounts. To join the domain,
you must provide the credentials of a domain user who has permission to join
computers to your domain. By default, only Domain Admins group members can
join computers to the domain, but Active Directory has the capability to
delegate the required permissions
to individual users or groups on a full domain or organizational unit (OU)
level.
For NetApp Volumes, it's recommended to create a dedicated domain
service account. Delegate only the necessary permissions to join new computers
to a specific OU. Once a user with Domain User or Domain Guest group
membership is created, use the following instructions to delegate the required
permissions.
Sign in to your system as a domain administrator for your Active Directory
domain.
Open the Active Directory Users and Computers MMC snap-in.
From the menu bar, select View and ensure that Advanced Features is
enabled.
A check mark is displayed if the Advanced Features is enabled.
In the task pane, expand the domain node.
Locate the OU you want to modify, right-click, and select Properties from
the context menu.
In the OU properties window, select the Security tab.
Under Security , click Advanced and then click Add .
In the Permission Entry dialog, complete the following steps:
Click Select a principal .
Enter the name of your service account or group, and click OK .
For Applies to: , select This object and all descendant objects .
Make sure the following permissions are selected:
Modify permissions
Create computer objects
Delete computer objects
Select the Apply checkbox, and then click OK .
Close the Active Directory Users and Computers MMC snap-in.
After the service account is delegated, you can provide the username and
password as Active Directory policy credentials.
For added security, during the machine account object query and creation, the
username and password that are passed to the Active Directory domain use
Kerberos encryption.
Active Directory domain controllers
To connect NetApp Volumes to your domain, the service uses
DNS-based discovery to identify a list of available domain controllers to use.
The service runs the following steps to find a domain controller to use:
Active Directory Site discovery : NetApp Volumes uses an
LDAP ping to the DNS server IP specified in the Active Directory policy to
fetch the Active Directory Site subnet information. It returns a list of
CIDRs and the Active Directory Sites which are assigned to those CIDRs.
Note: You can use the following command to manually fetch this list on a
Windows system that's joined to the domain:
Get-ADReplicationSubnet -Filter * | Select-Object Name,Site
Define site names : if the IP address of the volume matches any of the
defined subnets, the associated site name is used. Smaller subnets matches
take precedence over larger subnets matches. If the IP address of the volume
is unknown, manually create a temporary volume
with the NFS protocol type to determine /28 CIDR used.
If no site name is defined in the Active Directory, the site name configured
in the Active Directory policy is used. If no site name is configured, the
Standard, Premium, and Extreme service levels use the
Default-First-Site-Name site. If the Flex service level tries to use the
Default-First-Site-Name site, it will fail and the Flex service level
instead uses the full domain controller discovery. Note that changes to the
Active Directory site parameter are ignored by Flex service level storage
pools.
Domain controller discovery : with all necessary information acquired,
the service identifies potential domain controllers using the following DNS
query:
nslookup -type=srv _ldap._tcp.<site_name>._sites.dc._msdcs.<domain-name> <dns-server>
For full domain discovery, the service uses the following DNS query:
nslookup -type=srv _ldap._tcp.dc._msdcs.<domain-name> <dns-server>
Domain controller list generation : a list of domain controllers is
generated. NetApp Volumes constantly monitors all of them for
availability. Out of the available domain controllers, it selects one for
domain join and lookups. If the selected domain controller goes away, another
domain controller from the Available list is used automatically. Note
that the domain controller you choose isn't necessarily the specified DNS
server.
You need to provide at least one accessible domain controller for the service
to use. We recommend several for better domain controller availability. Make
sure there is a routed network path between NetApp Volumes and
the domain controllers, and that the firewall rules on your domain controllers
allow NetApp Volumes to connect.
For more information, see Active Directory design considerations and best practices .
Active Directory domain controller topologies
Once you successfully connect to Active Directory domain controllers, you can
use the following file sharing protocols:
SMB
NFSv3 with extended groups
NFSv4 with security principals and Kerberos
The following scenarios describe potential topologies. These scenarios focus on
the domain controller used by NetApp Volumes. Other domain
controllers for the same domain are described only where required. We recommend
that you deploy at least two domain controllers for redundancy and availability.
Topology
Description
Active Directory domain controller and volumes in one region
This scenario is the simplest deployment strategy where a domain
controller is in the same region as the volume.
Active Directory domain controller and volumes in separate regions
You can use a domain controller in a different region from a volume.
This configuration might negatively affect authentication and file access
performance.
Active Directory domain controllers in multiple regions using AD sites
If you use volumes in multiple regions, we recommend that you place
at least one domain controller in each region. Although the service
automatically selects the domain controller, we recommend that you
manage domain controller selection with Active Directory sites.
Active Directory domain controller in an on-premises network
You can use an on-premises domain controller over VPN, but it can
negatively affect end user authentication and file access performance.
Don't add additional Virtual Private Cloud peering hops in your network path.
VPC peering is subject to transitive routing restrictions.
Traffic isn't routed beyond the VPC peering hop that
NetApp Volumes already consumes.
Active Directory domain controller in a different VPC network
You can't place the domain controller in a different VPC
because Google Cloud VPC peering doesn't allow transitive
routing. Alternatively, you can connect the VPCs using VPN or attach
NetApp Volumes to a shared VPC network that
hosts the Active Directory domain controllers. If you attach
NetApp Volumes to a shared VPC network, then
this configuration is similar to one of the preceding scenarios.
What's next
Create an Active Directory policy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
