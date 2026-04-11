---
title: "Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/creating-instances
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/creating-instances
  title: "Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation"
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
Create an instance
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create a Filestore instance by using either
the Google Cloud console or the gcloud CLI.
Instructions for creating an instance
Google Cloud console
Before you begin
Enable Filestore API . It might take a few minutes for Filestore API to appear on the Service list under Quotas & System Limits .
The quota for a zonal or
regional instance starts at 0 . To
use these capacities, you must first create and receive approval for a
quota increase request
before you can create an instance.
If you need to create an instance using an
enterprise or high scale SSD tier, you must run your operations directly through
the Filestore API or by using gcloud . These create operations
are not supported through the Google Cloud console.
For more information, see Service tiers .
Google Cloud instructions
In the Google Cloud console, go to the Filestore Instances page.
Go to the Filestore Instances page
Click Create Instance .
Enter all required fields and optional fields as needed based on the
instructions in the following sections of this page.
Click Create .
gcloud
Before you begin
To use the gcloud CLI, you must either
install the gcloud CLI
or use the Cloud Shell
that's built into the Google Cloud console:
Go to the Google Cloud console
Enable Filestore API . It might take a few minutes for Filestore API to appear on the Service list under Quotas & System Limits .
gcloud command for creating a Filestore instance
You can create a Filestore instance by running the filestore
instances create command.
Quota for instances varies by project, region, and tier. For more information,
see Quotas or Request a quota increase .
gcloud filestore instances create INSTANCE_ID \
[--project= PROJECT_ID ] \
[--location= LOCATION ] \
[--description= DESCRIPTION ] \
[--performance= PERFORMANCE ] \
--tier= TIER \
--file-share=name=" FILE_SHARE_NAME ",capacity= FILE_SHARE_SIZE \
--network=name=" VPC-NETWORK ",[connect-mode= CONNECT_MODE ],[reserved-ip-range=" RESERVED_IP_ADDRESS "] \
[--labels= KEY = VALUE ,[ KEY = VALUE ,…]] \
[--kms-key= KMS_KEY ] \
[--deletion-protection] \
[--deletion-protection-reason=" PROTECTION_REASON "]
Where:
INSTANCE_ID with the instance ID of the Filestore
instance that you want to create. See Name your instance .
PROJECT_ID with the project ID of the Google Cloud project that
contains the Filestore instance. You can skip this
flag if the Filestore instance is in the gcloud default
project. You can set the default project by running the config set project
command:
gcloud config set project PROJECT_ID
LOCATION with the location where you want the
Filestore instance to reside. See
Select a location .
You can skip this flag if the Filestore instance is in
the gcloud default location. You can set the default location by running
the config set filestore/zone command:
gcloud config set filestore/zone zone
For the regional or enterprise tier, use the
config set filestore/region command:
gcloud config set filestore/region region
DESCRIPTION A description of the Filestore instance.
PERFORMANCE if you want to use the --performance flag to configure custom performance , use one of the following options:
max-iops-per-tb specifies an IOPS per TiB rate that scales IOPS linearly with instance capacity.
max-iops specifies an IOPS rate that doesn't scale IOPS with instance capacity.
The format is as follows:
--performance=max-iops-per-tb=17000
The --performance flag is required when creating regional instances with capacity lower than 1024 GiB. For more information, see small capacity Filestore instances .
Note: After activating custom performance for an instance you can't deactivate it for that instance. Instances with activated custom performance are billed according to purchased IOPS. For details, see configure custom performance and Filestore pricing .
TIER with the service tier you
want to use.
FILE_SHARE_NAME with the name you specify for the NFS file share
that is served from the instance. See
Name the file share .
FILE_SHARE_SIZE with the size you want for the file share. See
Allocate capacity .
VPC_NETWORK with the name of the VPC network you
want the instance to use. See
Select the VPC network .
If you want to specify a Shared VPC from a service project, you must
specify the fully qualified network name, which is in the format
projects/ HOST_PROJECT_ID /global/networks/ SHARED_VPC_NAME
and you must specify connect-mode=PRIVATE_SERVICE_ACCESS . For example:
--network = name = projects/host/global/networks/shared-vpc-1,connect-mode = PRIVATE_SERVICE_ACCESS
You can't specify a
legacy network
for the VPC_NETWORK value. If necessary, create a new
VPC network to use by following the instructions at
Creating a new auto mode VPC network .
CONNECT_MODE with DIRECT_PEERING or PRIVATE_SERVICE_ACCESS .
If you are specifying a Shared VPC as the network, you must also
specify PRIVATE_SERVICE_ACCESS as the connect mode.
RESERVED_IP_ADDRESS with the IP address range for the
Filestore instance. If you are specifying
connect-mode=PRIVATE_SERVICE_ACCESS , and want to use a reserved IP
address range, you must specify the name of an
allocated address range
instead of a CIDR range. See
Configure a reserved IP address .
We recommend that you skip this flag to allow Filestore to
automatically find a free IP address range and assign it to the instance.
KEY with a label that you want to add. Adding labels is not
required when creating a Filestore instance. You can also add,
delete, or update labels after you create an instance. For details, see
Managing labels .
VALUE with the value for a label.
KMS_KEY is the fully qualified name of the
Cloud KMS encryption key that you want to use when you
want to manage your own data encryption. The format looks like:
projects/ KMS_PROJECT_ID /locations/ REGION /keyRings/ KEY_RING /cryptoKeys/ KEY
PROTECTION_REASON if you choose to use the
--deletion-protection flag, you have the option of adding a note
regarding the setting. To add the note, use the optional
--deletion-protection-reason flag and include a description of the
justification for the setting you chose. For example, "All genomics data
must adhere to current organization policies." For more information, see
Deletion protection .
Example
The following command creates an instance with the following characteristics:
ID is render1 .
Project is myproject .
Region is us-central1 .
Tier is REGIONAL .
Performance uses max-iops-per-tb parameter with the value of 17000 .
File share name is my_vol .
File share size is 2 TiB.
VPC network is default .
Reserved IP address range is 10.0.7.0/29 .
Grants read and write access with root squashed to the client with IP
address 10.0.2.0 .
Deletion protection is enabled.
A justification for the deletion protection setting is provided.
gcloud filestore instances create render1 \
--project=myproject \
--region=us-central1 \
--tier=REGIONAL \
--performance=max-iops-per-tb=17000 \
--network=name="default",reserved-ip-range="10.0.7.0/29" \
--flags-file=nfs-export-options.json \
--deletion-protection \
--deletion-protection-reason="All genomics data must adhere to current
organization policies."
nfs-export-options.json file contents:
{
"--file-share":
{
"capacity": "2048",
"name": "my_vol",
"nfs-export-options": [
{
"access-mode": "READ_WRITE",
"ip-ranges": [
"10.0.0.0/29",
"10.2.0.0/29"
],
"squash-mode": "ROOT_SQUASH",
"anon_uid": 1003,
"anon_gid": 1003
},
{
"access-mode": "READ_ONLY",
"ip-ranges": [
"192.168.0.0/26"
],
"squash-mode": "NO_ROOT_SQUASH"
}
]
}
}
REST API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Filestore API :
curl --request POST \
'https://file.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /instances?instanceId= NAME ' \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data '{
"tier":" TIER ",
"networks":[
{
"network":" NETWORK "
}
],
"performanceConfig": {" PERFORMANCE "}
"fileShares":[
{"capacityGb": CAPACITY ,"name":" SHARE_NAME "}
],
"deletionProtectionEnabled": true,
"deletionProtectionReason": " PROTECTION_REASON "}' \
--compressed
Where:
PROJECT is the name of the project where your
instance will reside. For example, my-genomics-project .
LOCATION is the location where the instance
will reside. For example, us-east1 or us-central1-a .
NAME is the name of the instance you
want to create. For example, my-genomics-instance .
TIER is the name of the service tier you want
to use. For example, REGIONAL .
PERFORMANCE is the performance configuration
used to specify custom performance settings.
Note: After activating custom performance for an instance you can't deactivate it for that instance. Instances with activated custom performance are billed according to purchased IOPS. For details, see configure custom performance and Filestore pricing .
You can use only one of the provided options.
PerformanceConfig.iopsPerTb.maxIopsPerTb specifies an IOPS per TiB rate that scales IOPS linearly with instance capacity.
PerformanceConfig.fixedIops.maxIops specifies a fixed IOPS rate that doesn't scale IOPS with instance capacity.
The format is as follows:
"performanceConfig": {
"iopsPerTb" : {
"maxIopsPerTb":17000
}
}
NETWORK is the name of the network you want
to use. For example, default .
CAPACITY is the size, in GiB, you want to
allocate for the instance. For example, 1024 .
SHARE_NAME is the name of the file share. For
example, vol1 .
PROTECTION_REASON if you choose to use the
deletionProtectionEnabled flag, you have the option of adding a note
regarding the setting. To add the note, use the optional
deletionProtectionReason flag and include a description of the
justification for the setting you chose. For example, "All genomics
data must adhere to current organization policies." For more
information, see Deletion protection .
Understand instances and shares
A Filestore instance represents physical storage capacity.
A share represents an allocated portion of that storage with an individual,
unique access point.
All service tiers offer storage options with a 1:1 share–to–instance
ratio. Alternatively, Filestore multishares for GKE ,
available for enterprise-tier instances only, offers access to multiple shares
on a single instance.
Instance names, or instance IDs, are used by administrators to manage instances.
File share names are used by clients to connect to the shares exported from those
instances.
Name your instance
The name of your Filestore instance, or instance ID, is used to
identify the instance and is used in gcloud commands. Instance IDs must comply
with the <label> element of
RFC 1035 .
Specifically, they must:
Be between 1-63 characters long.
Begin with a lowercase letter.
Consist of dashes, lowercase letters, or digits.
End with lowercase letters or digits.
The instance ID must be unique in the Google Cloud project and zone where it's
located. Once an instance is created, its instance ID cannot be changed.
Configure service tier
Select the service tier that best suits your needs. Once an instance is
created, its service tier cannot be changed. The following table summarizes
capabilities available by service tier:
Capabilities of Filestore service tiers
Capability
Basic HDD and Basic SSD
Zonal
Regional
Enterprise
Capacity
1 TiB to 63.9 TiB
1 TiB to 100 TiB
100 GiB or 1 TiB to 100 TiB
1 TiB to 10 TiB
Scalability
Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB
Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB
Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB
Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB
Regional
Depending on the access to the small instances feature , you can use one of the following options:
Users with access to small instances feature: 100 GiB to 10,239 GiB . Scales up or down in increments of 1 GiB
Users without access to small instances feature: 1 TiB to 9.75 TiB . Scales up or down in increments of 256 GiB
Regional (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB
Scales up or down in increments of 256 GiB
Performance
Basic HDD : Static
Basic SSD : Performance step at 10 TiB
Configurable
Configurable
Scales linearly with capacity
Protocol
NFSv3
NFSv3, NFSv4.1
NFSv3, NFSv4.1
NFSv3, NFSv4.1
Create operations for zonal, regional,
and enterprise instances can take anywhere between 15 minutes and
one hour to complete, depending on instance size.
Filestore quota is consumed when instance creation starts but you
are not billed for the instance during this time.
For a more detailed description of capabilities available by service tier, see
Service tiers .
Allocate capacity
Allocate capacity to the amount you need when you create the instance. As you
approach your capacity limit, you can scale up the capacity as needed without
affecting runtime. To learn about how you can monitor the capacity of your
instances, see Monitoring instances .
In the gcloud CLI, you can specify the capacity in whole numbers
using either GiB or TiB . The default unit is GiB .
The following table shows the instance sizes available for each tier:
Tier
Minimum size
Maximum size
Incremental step size
Zonal
1 TiB
9.75 TiB
256 GiB
Zonal
10 TiB
100 TiB
2.5 TiB
Regional
100 GiB * or 1 TiB
10,239 GiB * or 9.75 TiB
1 GiB * or 256 GiB
Regional
10 TiB
100 TiB
2.5 TiB
Basic HDD
1 TiB
63.9 TiB
1 GiB
Basic SSD
2.5 TiB
63.9 TiB
1 GiB
Enterprise
1 TiB
10 TiB
256 GiB
*
Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB. For more information, see Small capacity Filestore instances .
The size of instances can be any whole gibibyte value or its tebibyte
equivalent that's between the minimum and maximum instance size and is divisible
by its incremental step size. For example, valid sizes for zonal-tier instances
with a higher capacity range include 10 TiB, 12.5 TiB, and 15 TiB.
Once created, basic HDD and basic SSD instances can only scale up in size. All other service tiers can scale up or down in capacity. For more information, see
Edit instances and Scale capacity .
Total capacity quota
Every project is allocated a separate capacity quota, defined by region and
service tier. Quota limits vary by service tier.
Once you have reached your quota limit, you won't be able to create more
Filestore instances or increase the capacity of your existing instances.
To see your available quota, go to the Quotas page in the Google Cloud console:
Go to the Quotas page
For information on requesting more quota, see Requesting quota increases .
Configure performance
Instance performance depends on the service tier you choose.
Regional and zonal tiers
For regional and zonal tiers you can set an IOPS per TiB ratio which allows instance IOPS to scale with capacity, or a constant IOPS value that doesn't scale with capacity but can be adjusted at any time if the capacity changes. For details on limits, see custom performance limits .
If you don't set up custom performance, performance scales linearly with capacity according to a predefined ratio. For details, see performance .
Creating Regional instances with capacity lower than 1024 GiB require enabled custom performance. The minimum IOPS value for these instances is 2,000. For more information, see low capacity Filestore instances .
Basic SSD and basic HDD tiers
For basic SSD tiers the number of IOPS is constant and doesn't change when you change capacity settings.
For basic HDD tiers the performance limits change depending if the capacity falls within the range of 1 TiB to 10 TiB or from 10 TiB to 63.9 TiB.
For additional information on performance limits and settings,
see performance .
Specify IOPS per TiB ratio
Enabling custom performance lets you to specify the ratio in the IOPS per TiB field where the performance scales based on the capacity.
If you want to use fixed IOPS, clear the Scale performance with capacity checkbox.
Assuming you have specified the following initial performance values:
Capacity : 1 TiB
IOPS per TiB : 6,000
Performance (when the Scale performance with capacity checkbox is selected): 6,000 IOPS
The following examples show how performance scales based on changed settings:
Increasing IOPS per TiB to 7,000 adjusts Performance to 7,000 IOPS.
Increasing Capacity to 2 TiB adjusts Performance to 14,000 IOPS.
Decreasing Performance to 8,000 IOPS adjusts IOPS per TiB to 4,000.
Specify fixed number of IOPS
If you clear the Scale performance with capacity checkbox, the Performance field specifies the number of IOPS you want to use. This number must be within the performance range and a multiple of 1,000.
Setting a fixed number of IOPS independently of capacity allows performance
tuning. However, this option prevents automatic performance scaling with
capacity changes. Changing capacity might require adjusting the performance value,
and the other way around.
For example, you specified the following values:
Capacity : 4 TiB
Performance 40,000 IOPS
At this point, you can increase the performance up to 68,000 IOPS, which is the limit for 4 TiB of capacity.
You want to increase performance to 70,000 IOPS which is beyond the performance range for the capacity of 4 TiB. To maintain compatibility, you must increase the capacity to 4.25 TiB or higher to fall within the performance range.
Select a location
Location refers to the Region and Zone where the Filestore
instance is located. For the best performance and to avoid cross-regional
networking charges, ensure that the Filestore instance is located
in the same region as the Compute Engine VMs that need to access them.
For more information about regions and zones, see
Geography and regions .
Select the file system protocol
Select the file system protocol that suits your needs. Filestore supports NFSv3 and NFSv4.1 protocols.
Select the VPC network
The network that you select to use with Filestore can be either a
standard VPC network or a Shared VPC network.
If you are using the gcloud CLI, you can also use VPC Network Peering with either direct peering or private services access. For more information, see Networking and IP resource requirements .
In both cases, the network that you choose must have enough available IP resources to
dedicate to the Filestore instance, otherwise the instance
fails to create due to IP address exhaustion .
Clients must be on the same network as the Filestore
instance to access the files stored on that instance. Once an instance is
created, this network selection cannot be changed.
Shared VPC network
Before you can create an instance on a
Shared VPC network
in a service project, the network administrator must first enable
private services access
for the Shared VPC network. If you are creating the instance in the host
project, private services access is not required.
Shared VPC networks are displayed in the Google Cloud console in the
format:
projects/ HOST_PROJECT_ID /global/networks/ SHARED_VPC_NAME
For detailed procedures, see
Creating an instance on a Shared VPC network .
NFS file locking
If the applications you plan to use with a Filestore instance
require NFS file locking ,
you might need to open up the ports used by Filestore in the network you choose, if either of the following options applies to your use case:
A VPC network other than the default network.
The default VPC network with changed firewall rules.
This consideration applies only to Filestore instances that use private services access or direct peering connection methods.
For more information, see Configuring firewall rules .
Configure the file share
A file share is the directory on a Filestore instance where all
shared files are stored. It is also the thing that you mount or map to on the
client VM.
The name of the file share must comply with the following:
Be between 1-32 characters long for zonal, regional, and enterprise tiers, and
1-16 characters long for basic tiers.
Begin with a letter.
Consist of uppercase or lowercase letters, numbers, and underscores.
End with a letter or number.
Configure IP-based access control
By default, a Filestore instance grants root level read and write
access to all clients, including Compute Engine VMs and
GKE clusters, that share the same Google Cloud project and
VPC network. If you want to restrict access, you can do so by
creating rules that grant specific access levels to clients based on their IP
address. Once the rules are added, all IP addresses and ranges that are not
specified in a rule are revoked access. Zonal, regional, and enterprise instances
support configuration settings for overlapping IP address ranges. For more
information, see Overlapping permissions .
The following table describes the privileges of each access level. These access
levels are only used in the Google Cloud console. In the gcloud CLI
and the API, you must specify the rule configurations directly.
Access level
Rule configuration
Description
admin
read-write
no-root-squash
The client can view and modify all files, folders, and metadata as a root user. It can also grant ownership to files or folders by setting its uid and gid , and in doing so, grant access to clients that don't have root level access to the file share.
admin-viewer
read-only
no-root-squash
The client can view all files, folders, and metadata as a root user but cannot modify them.
editor
read-write
root-squash
The client can view and modify the files, folders, and metadata according to its assigned uid and gid .
viewer
read-only
root-squash
The client can view the files, folders, and metadata according to its assigned uid and gid .
root-squash maps all requests from uid 0 and gid 0 to anon_uid and
anon_gid , respectively. This configuration removes root level access from
clients that attempt to access the file share as a root user.
When creating IP-based access rules:
You must specify an internal IP address or range and the access level granted.
At least one rule must grant admin access at the time of instance creation.
This rule can be removed once the instance is created.
Zonal, regional, and enterprise instances support configuration settings for
overlapping IP address ranges. Basic-tier instances are not supported. For more
information, see Overlapping permissions .
In the Google Cloud console, you can create up to 4 different rules ( admin ,
admin-viewer , editor , viewer ) involving up to 64 different IP addresses or
ranges.
In the gcloud CLI, you can configure up to 64 different IP addresses
or CIDR blocks per Filestore instance across a maximum of 10
different rules. A rule is defined as the combination of the access-mode ,
squash-mode , and anon_uid / anon_gid configurations. The anon_uid and
anon_gid fields have default values of 65534 and can only be configured
through the API and the gcloud CLI.
Example
Here's an example of three different IP-based access rules:
access-mode=READ_ONLY , squash-mode=ROOT_SQUASH , anon_uid=10000 .
access-mode=READ_WRITE , squash-mode=ROOT_SQUASH , anon_gid=150 .
access-mode=READ_WRITE , squash-mode=NO_ROOT_SQUASH .
To create IP-based access control rules using the gcloud CLI, use the
--flags-file flag with the
instances create or
instances update commands
and point it to a JSON configuration file. For example, if the JSON
configuration file is named nfs-export-options.json , the flag would be:
-- flags - file = nfs - export - options . json
Example JSON configuration file:
{
"--file-share":
{
"capacity": "2048",
"name": "my_vol",
"nfs-export-options": [
{
"access-mode": "READ_WRITE",
"ip-ranges": [
"10.0.0.0/29",
"10.2.0.0/29"
],
"squash-mode": "ROOT_SQUASH",
"anon_uid": 1003,
"anon_gid": 1003
},
{
"access-mode": "READ_ONLY",
"ip-ranges": [
"192.168.0.0/26"
],
"squash-mode": "NO_ROOT_SQUASH"
}
]
}
}
ip-ranges is the IP address or range to grant access to. You can specify
multiple IP addresses or ranges by separating them with a comma. Only zonal,
regional, and enterprise instances support configuration settings for
overlapping IP address ranges. For more information, see
Overlapping permissions .
access-mode is the access level to grant to the clients whose
IP address falls within ip-range . It can have the values of
READ_WRITE or READ_ONLY . The default value is READ_WRITE .
squash-mode can have the values ROOT_SQUASH or
NO_ROOT_SQUASH . ROOT_SQUASH removes root level access to the clients
whose IP address falls within ip-range , while NO_ROOT_SQUASH
enables root access. The default value is NO_ROOT_SQUASH .
anon_uid is the user ID value that you want to map to anon_uid . The
default value is 65534 .
anon_gid is the group ID value that you want to map to anon_gid . The
default value is 65534 .
Clients on non-RFC 1918 ranges
If you plan to connect
non- RFC 1918
clients to your Filestore instance, you must explicitly grant them
access to the Filestore instance using
IP-based access control .
Optional fields
The following sections describe optional fields.
Add an instance description
An instance description lets you write descriptions, notes, or instructions
for yourself and other users. For example, you can include information about:
The types of files stored in the instance.
Who has access to the instance.
Instructions for how to get access to the instance.
What the instance is used for.
Instance descriptions are limited to 2048 characters in length. There are no
restrictions on the characters that are allowed. Once a Filestore
instance is created, you can update its instance description anytime as needed.
For information on updating instance descriptions, see
Editing instances .
Add labels
Labels are key-value pairs that you can use to group related instances and store
metadata about an instance. You can add, delete, or modify labels anytime.
For more information, see Managing labels .
Configure a reserved IP address range
Each Filestore instance must have an IP address range associated
with it. Both RFC 1918
and non-RFC 1918 IP address ranges ( GA )
are supported.
Once specified, an instance's IP address range is immutable.
Users are encouraged to let Filestore automatically determine a
free IP address range and assign it to the instance. When selecting your own
range, consider the following Filestore IP resource requirements:
Must use CIDR notation.
Must be a valid VPC subnet range .
Basic instances require a block size of 29. For example, 10.123.123.0/29 .
Zonal, regional, and enterprise instances require a block size of 26. For
example, 172.16.123.0/26 .
The IP address range must not overlap with the following:
Existing subnets in the VPC network that the
Filestore instance uses.
Existing subnets in a VPC network that's peered with the one
that the Filestore instance uses. For details, see
Overlapping subnets at time of peering .
IP address ranges assigned to any other existing Filestore
instances in that network.
The 172.17.0.0/16 address range is reserved for internal Filestore
components. As a result, the following limitations apply:
Clients in this range can't be connected to Filestore instances.
Filestore instances can't be created within this IP range. For
more information, see Known issues .
There must be at least one VPC Network Peering or private services access
connections per VPC.
You can see the IP address ranges for the subnets of your network by going to
the VPC networks page in the Google Cloud console:
Go to the VPC networks page
You can get the reserved IP address range for any Filestore
instance on the Filestore instances page in the
Google Cloud console:
Go to the Filestore instances page
If you want to use private services access and specify a reserved IP address
range, you must specify the name of an
allocated address range
for the connection. If you don't specify a range name, Filestore
automatically uses any of the allocated ranges associated with the private
services access connection.
Use a customer-managed encryption key
By default, Google Cloud automatically
encrypts data when it is at rest
using encryption keys managed by Google. If you need more control over the keys
that protect your data, you can use customer-managed encryption keys (CMEK) for
Filestore. For details, see
Encrypt data with customer-managed encryption keys .
Enable deletion protection
Set the instance's deletion protection setting. By default, this setting is
disabled. For more information, see Deletion protection .
Add a deletion protection setting description
Add a description of the justification behind the deletion protection setting
you chose. For more information, see Deletion protection .
What's next
Learn how to configure an instance for use with the NFSv4.1 protocol .
Learn how to connect instances to clients:
Mount the Filestore file share on a Compute Engine VM instance .
Access Filestore instances with the Filestore CSI driver .
Use Filestore instances as external datastores for VMware ESXi
hosts in VMware Engine .
Mount file shares on remote clients .
Mount a Filestore instance to a Cloud Run service to
share data between containers and
services .
See how to retrieve instance details, such as the instance's IP address, so
that you can access the Filestore file share from clients .
Troubleshoot instance creation issues related to Filestore .
Learn more about Virtual Private Cloud (VPC) networks and subnets .
Learn more about networking and IP resource requirements for Filestore .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
