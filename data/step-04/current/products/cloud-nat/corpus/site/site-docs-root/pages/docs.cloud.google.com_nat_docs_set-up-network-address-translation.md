---
title: "Quickstart: Set up and manage network address translation with Public NAT\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/nat/docs/set-up-network-address-translation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/nat/docs
source_metadata:
  url: https://docs.cloud.google.com/nat/docs/set-up-network-address-translation
  title: "Quickstart: Set up and manage network address translation with Public NAT\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NAT
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up and manage network address translation with Public NAT
This page describes how to set up and manage network address translation
(NAT) by using Public NAT. Before setting up
Public NAT, see the
Public NAT overview .
Limitations
If you change the network tier of the automatically allocated IP addresses for
a Cloud NAT gateway, all connections on the previously allocated
IP addresses immediately close.
If you use manual NAT IP address allocation and you change the IP addresses
that are used for Cloud NAT, all connections on the previously
allocated IP addresses immediately close. To avoid this, see
Drain external IP addresses associated with NAT .
If you configure a Cloud NAT gateway with static port allocation and
you reduce the minimum ports per virtual machine (VM) instance, established NAT
connections might be broken. For more information, see
Reducing ports per VM .
If you configure a Cloud NAT gateway with dynamic port allocation
and you make any further configuration changes, established NAT connections
might be broken. When the configuration changes, the number of ports
allocated to each VM might be temporarily reset to the minimum number
configured. For more information, see
Reduce ports per VM .
If you configure a Cloud NAT gateway with dynamic port allocation and
then turn off dynamic port allocation, all VM connections that use the NAT
gateway are closed. For more information, see
Switch port allocation method .
If Endpoint-Independent Mapping is enabled, you can't configure dynamic
port allocation or NAT rules .
Cloud NAT doesn't support IP fragments.
A Cloud NAT configuration is tied to a Virtual Private Cloud (VPC)
network. So, the configuration applies to all the resources that belong to the
subnets of that network. You can't choose specific VMs to be served by a
Cloud NAT gateway.
NAT64 is available only for IPv6-only
Compute Engine VM instances, for the following machine series:
All second generation or earlier series
M3 series
For more information, see
Compute Engine terminology .
For Google Kubernetes Engine (GKE) nodes, serverless endpoints, and regional
internet network endpoint groups (NEGs), Public NAT translates
only IPv4 addresses. For more information about which
services in Google Cloud include IPv6-only support, see
IPv6 support in Google Cloud .
Before you begin
Complete the following tasks before setting up Public NAT.
Get IAM permissions
The Compute Network Admin
role
( roles/compute.networkAdmin ) includes the permissions that you need to
configure Public NAT.
Prepare your environment
Depending on whether you want to use the Google Cloud console or
gcloud CLI to set up Public NAT, configure the
following resources in Google Cloud.
Console
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
gcloud
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com
Configure DNS64
If you want to use translation from IPv6 to IPv4, or
NAT64 , you must
configure DNS64. To configure DNS64 in Cloud DNS, follow the
instructions in Configure DNS64 .
Skip this step if you want to use Cloud NAT only for IPv4 traffic.
Configure Public NAT
You configure Public NAT by creating a
Cloud NAT gateway in the source VPC network.
Each gateway is associated with a single VPC network,
region, and Cloud Router. Cloud NAT uses Cloud Router only to
group NAT configuration information and doesn't direct Cloud Router
to use Border Gateway Protocol or add routes. NAT traffic doesn't
pass through Cloud Router.
When creating a Cloud NAT gateway, you can configure the
following settings.
Setting
Supported options
Description
Source endpoint type
VM instances, GKE nodes, Serverless
Managed proxy load balancers
By default, Public NAT provides NAT services to
VM instances, GKE nodes, and serverless endpoints. To
create a Cloud NAT gateway for these resources, complete the steps
in the following section.
To create a Cloud NAT gateway for a
regional internet NEG, see
"Set up a Cloud NAT gateway" for the following:
Regional external Application Load Balancer
Regional internal Application Load Balancer
Regional external proxy Network Load Balancer
Regional internal proxy Network Load Balancer
For a full list
of Google Cloud resources that Cloud NAT supports, see
Cloud NAT overview .
Source IP version
IPv4 subnet ranges
IPv6 subnet ranges
IPv4 and IPv6 subnet ranges
Public NAT supports translation from IPv4 to IPv4
and from IPv6 to IPv4. If you want to configure NAT64,
you must also configure DNS64 .
If you configure IPv4 subnet ranges, IPv4-only VM instances and
dual-stack VM instances (using their IPv4 addresses) in IPv4-only and
dual-stack subnets can
communicate with IPv4 destinations on the internet.
If you configure IPv6 subnet ranges, IPv6-only VM
instances in IPv6-only and dual-stack subnets can communicate with
IPv4 destinations on the internet.
If you configure IPv4 and IPv6 subnet ranges,
the following applies:
IPv4-only VM instances and dual-stack VM instances
(using their IPv4 addresses) can communicate with IPv4 destinations
on the internet.
Dual-stack VM instances can't use their IPv6 addresses to
communicate with IPv4 destinations on the internet.
IPv6-only VM instances can communicate with IPv4
destinations on the internet.
Source subnets
For IPv4 traffic:
Primary and secondary ranges for all subnets
Primary ranges for all subnets
Custom
For IPv6 traffic:
All subnets
Custom
Public NAT supports the following
subnet ranges in the region for the VPC network that you
specify:
For IPv4 traffic: primary and secondary ranges.
You can restrict which subnets and subnet ranges can use
NAT.
For IPv6 traffic: internal and external ranges.
You can restrict which subnets can use NAT.
IP address allocation
Automatic (recommended)
Manual
By default, Public NAT uses automatic NAT IP address
allocation. This configuration automatically allocates the necessary
external IP addresses to provide NAT services to a region. VM instances
without external IP addresses in any subnet of the region are provided
internet access through NAT. When you use automatic NAT IP address
allocation, Google Cloud reserves IP
addresses in your project. These addresses count against your
in-use regional external IPv4 address quotas
in the project.
You can manually allocate NAT IP addresses for a
Cloud NAT gateway. These addresses count against the following
quotas:
Static regional external IPv4 addresses
In-use regional external IPv4 addresses
If you choose manual allocation,
make sure to allocate enough IP addresses to avoid dropped packets.
For more information, see
Public NAT IP addresses .
Network tier
Premium
Standard
Public NAT lets you specify
the Network Service Tiers from which
the Cloud NAT gateway allocates external IP addresses.
By default, the network tier is set to the current project-level tier.
When creating a Cloud NAT gateway with automatic
NAT IP address allocation, you can assign NAT IP addresses from either
Premium Tier or Standard Tier.
When creating a Cloud NAT gateway with manual NAT IP
address allocation, you can choose to manually assign NAT
IP addresses from either Premium Tier or Standard Tier or both, subject
to certain
conditions .
Advanced configurations
Dynamic port allocation
Endpoint-Independent Mapping
Logging
NAT timeouts
By default, Public NAT uses static port allocation,
which means that each VM is allocated the same number of ports. You can
configure dynamic port allocation with either automatic or manual NAT IP
address allocation. Using dynamic port allocation lets the
Cloud NAT gateway allocate different numbers of ports to each VM
based on usage. You can't enable
Endpoint-Independent Mapping
if your Cloud NAT gateway uses NAT rules or dynamic port
allocation.
Logging is disabled by
default. For information about NAT timeouts and their default values, see
NAT timeouts .
Create a Cloud NAT gateway
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click Get started for the first Cloud NAT gateway or
Create Cloud NAT gateway for subsequent gateways.
In the Gateway name field, enter a name for the gateway.
For NAT type , select Public .
In the Select Cloud Router section, configure the following:
In the Network field, select the VPC network in
which you want to create the gateway.
In the Region field, set the region for the gateway.
In the Cloud Router field, select or create a
Cloud Router in the region.
In the Cloud NAT mapping section, for Source endpoint type , make
sure the VM instances, GKE nodes, Serverless option is selected.
In the Source IP version field, select the source IP version and then
configure the source subnet ranges for which you want to use
Cloud NAT.
Note: Select and configure IPv6 subnet ranges only if you are
configuring NAT64 for Compute Engine VM instances.
For GKE nodes, serverless endpoints, and regional
internet NEGs, Public NAT
translates only IPv4 addresses.
For IPv4 subnet ranges, in the Source subnets field,
select one of the following:
To use Cloud NAT for primary and
secondary IP ranges for all subnets in the region, select
Primary and secondary IP ranges for all subnets .
To use Cloud NAT only for primary IP ranges,
select Primary IP ranges for all subnets .
To restrict which subnet IP ranges can use Cloud NAT,
select Custom and do the following:
In the Subnets section, select a subnet.
In the IP ranges list, select the subnet IP
ranges to include and click OK .
Optional: If you want to specify additional ranges, click
Add subnet and IP range and add another subnet.
For IPv6 subnet ranges, in the Source subnets field,
select one of the following:
To use Cloud NAT for internal and external IP ranges for
all subnets in the region, select All subnets .
To restrict which subnets can use Cloud NAT, select
Custom and do the following:
In the Subnets section, select a subnet.
Optional: If you want to specify additional subnets, click
Add subnet and add another subnet.
Configure the NAT IP address allocation type and network tier by
selecting one of the following:
To use automatic NAT IP address allocation, do the
following:
In the Cloud NAT IP addresses list, select
Automatic (recommended) .
For Network service tier , choose either
Premium or Standard .
To use manual NAT IP address allocation, do the
following:
In the Cloud NAT IP addresses list, select Manual .
For Network service tier , choose either Premium or
Standard .
Select or create a static reserved external IP address to
use for NAT.
Optional: If you want to specify additional IP addresses, click
Add IP address and then select or create an additional
static reserved external IP address.
Optional: If you want to create custom NAT rules, configure the
Cloud NAT rules section. For an example configuration, see
Create NAT rules .
Optional: Adjust any of the following settings in the
Advanced configurations section:
Whether to configure logging. By default, No logging is
selected.
Whether to change how Cloud NAT allocates ports. By
default, Enable Dynamic Port Allocation is deselected.
For static port allocation, the Minimum ports per VM instance
field is set to 64 .
To update the minimum number of ports per VM instance for
static port allocation, specify a value in the
Minimum ports per VM instance field. This value can be set
from 2 to 57344 .
To configure dynamic port allocation, select
Enable Dynamic Port Allocation and
select a value for the Minimum ports per VM instance field
(default is 32 ) and the Maximum ports per VM instance
field (default is 65536 ).
Whether to update NAT timeouts for protocol connections. For
information about these timeouts and their default values, see
NAT timeouts .
Click Create .
gcloud
To create a Cloud NAT gateway, use the
gcloud compute routers nats create command .
You can create a Cloud NAT gateway with all of its
configuration options set to their default values, or you
can customize your gateway configuration.
Create a Cloud NAT gateway with default settings
Customize configuration settings for a Cloud NAT gateway
Create a Cloud NAT gateway with default settings
Create a Cloud Router
in the region where you want to use the Cloud NAT
gateway. You need this Cloud Router to create your
Cloud NAT gateway.
Create the Cloud NAT gateway by running
one of the following commands, depending on the IP version of the
source subnet ranges for which you are configuring NAT.
Note: Configure NAT for IPv6 subnet ranges only if you are
configuring NAT64 for Compute Engine VM instances.
For GKE nodes, serverless endpoints, and regional
internet NEGs, Public NAT
translates only IPv4 addresses.
Configure Cloud NAT for IPv4 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-all-subnet-ip-ranges \
--auto-allocate-nat-external-ips
This configuration enables NAT for all IPv4 subnet ranges
in IPv4-only and dual-stack subnets in the region.
Configure Cloud NAT for IPv6 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat64-all-v6-subnet-ip-ranges \
--auto-allocate-nat-external-ips
This configuration enables NAT for all IPv6 subnet ranges
in IPv6-only and dual-stack subnets in the region.
Configure Cloud NAT for both IPv4 and IPv6
subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-all-subnet-ip-ranges \
--nat64-all-v6-subnet-ip-ranges \
--auto-allocate-nat-external-ips
This configuration enables NAT for all IPv4 and IPv6 subnet ranges
in IPv4-only, dual-stack, and IPv6-only subnets in the region.
Replace the following:
NAT_CONFIG : a name for your NAT configuration
NAT_ROUTER : the name of the Cloud Router
that you created in the previous step
REGION : the region where you want to use the
Cloud NAT gateway
Customize configuration settings for a Cloud NAT gateway
When creating a Cloud NAT gateway, you can customize its default
configuration. For a full list of flags that you can use, see
the gcloud compute routers nats create command .
Create a Cloud NAT gateway for IPv6 subnet ranges only if you are
configuring NAT64 for Compute Engine VM instances.
For GKE nodes, serverless endpoints, and regional
internet NEGs, Public NAT
translates only IPv4 addresses.
Create a Cloud NAT gateway:
Create a Cloud Router
in the region where you want to use the Cloud NAT
gateway. You need this Cloud Router to create your
Cloud NAT gateway.
Create the Cloud NAT gateway, specifying each
parameter that you want to customize.
The following examples show how to customize the source subnets, NAT IP
address allocation type, network tier, and the port allocation type.
The command that you run in each of these examples depends on the IP
version of the source subnet ranges for which you are configuring
NAT.
Restrict which source subnets can use NAT .
To create a Cloud NAT gateway that restricts which
subnets and subnet ranges can use NAT, run one of the following
commands:
Restrict which IPv4 subnet ranges can use NAT:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-custom-subnet-ip-ranges= IPV4_SUBNET_RANGES \
--auto-allocate-nat-external-ips
Restrict which IPv6 subnet ranges can use NAT:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat64-custom-v6-subnet-ip-ranges= IPV6_SUBNET_RANGES \
--auto-allocate-nat-external-ips
Restrict both IPv4 and IPv6 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-custom-subnet-ip-ranges= IPV4_SUBNET_RANGES \
--nat64-custom-v6-subnet-ip-ranges= IPV6_SUBNET_RANGES \
--auto-allocate-nat-external-ips
Replace the following:
NAT_CONFIG : a name for your NAT configuration
NAT_ROUTER : the name of the
Cloud Router that you created in the previous step
REGION : the region where you want to use the
Cloud NAT gateway
IPV4_SUBNET_RANGES : a
comma-separated list of subnet names—for example:
SUBNET_NAME_1:ALL,SUBNET_NAME_2:ALL : includes both the
primary and all secondary ranges of subnets SUBNET_NAME_1
and SUBNET_NAME_2 .
SUBNET_NAME_1,SUBNET_NAME_2 : includes only the primary
ranges of subnets SUBNET_NAME_1 and SUBNET_NAME_2 .
SUBNET_NAME:SECONDARY_RANGE_NAME : includes the
specified secondary range of subnet SUBNET_NAME and
doesn't include the primary range
SUBNET_NAME_1,SUBNET_NAME_2:SECONDARY_RANGE_NAME : includes
the primary range of subnet SUBNET_NAME_1 and
the specified secondary range of subnet SUBNET_NAME_2
IPV6_SUBNET_RANGES : a comma-separated list of
subnet names—for example, SUBNET_NAME_1,SUBNET_NAME_2
Configure manual NAT IP address allocation .
To create a Cloud NAT gateway with manual NAT
IP address allocation, run one of the following commands:
For IPv4 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-all-subnet-ip-ranges \
--nat-external-ip-pool= IP_ADDRESS_1 , IP_ADDRESS_2
For IPv6 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat64-all-v6-subnet-ip-ranges \
--nat-external-ip-pool= IP_ADDRESS_1 , IP_ADDRESS_2
If you are creating the gateway for IPv4 and IPv6 subnet ranges,
specify both the --nat-all-subnet-ip-ranges
and --nat64-all-v6-subnet-ip-ranges flags in this
command.
Replace the following:
NAT_CONFIG : a name for your NAT configuration
NAT_ROUTER : the name of the
Cloud Router that you created in the previous step
REGION : the region where you want to use the
Cloud NAT gateway
IP_ADDRESS_1 and
IP_ADDRESS_2 : the static reserved
external IP addresses that you want to use for NAT
You can specify one or more IP addresses
when using the --nat-external-ip-pool flag.
Specify the network tier . To specify the network tier from
which the Cloud NAT gateway allocates external IP
addresses, run one of the following commands:
For IPv4 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-all-subnet-ip-ranges \
--auto-allocate-nat-external-ips \
--auto-network-tier= AUTO_NETWORK_TIER
For IPv6 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat64-all-v6-subnet-ip-ranges \
--auto-allocate-nat-external-ips \
--auto-network-tier= AUTO_NETWORK_TIER
If you are creating the gateway for IPv4 and IPv6 subnet ranges,
specify both the --nat-all-subnet-ip-ranges
and --nat64-all-v6-subnet-ip-ranges flags in this
command.
Replace the following:
NAT_CONFIG : a name for your NAT configuration
NAT_ROUTER : the name of the
Cloud Router that you created in the previous step
REGION : the region where you want to use the
Cloud NAT gateway
AUTO_NETWORK_TIER : the network
tier to use when automatically allocating IP addresses for the
Cloud NAT gateway. The allowed values
are PREMIUM and STANDARD . If not specified, then
the current
project-level default
tier is associated with the Cloud NAT gateway.
You can also specify the network tier with manual
NAT IP addresses allocation. If you assign multiple IP addresses
to the gateway, all the IP addresses that you assign must
be from the same network tier.
Configure dynamic port allocation . To create a
Cloud NAT gateway with dynamic port allocation, run one the
following commands:
For IPv4 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-all-subnet-ip-ranges \
--auto-allocate-nat-external-ips \
--enable-dynamic-port-allocation \
[--min-ports-per-vm= MIN_PORTS ] \
[--max-ports-per-vm= MAX_PORTS ]
For IPv6 subnet ranges:
gcloud compute routers nats create NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat64-all-v6-subnet-ip-ranges \
--auto-allocate-nat-external-ips \
--enable-dynamic-port-allocation \
[--min-ports-per-vm= MIN_PORTS ] \
[--max-ports-per-vm= MAX_PORTS ]
If you are creating the gateway for IPv4 and IPv6 subnet ranges,
specify both the --nat-all-subnet-ip-ranges
and --nat64-all-v6-subnet-ip-ranges flags in this
command.
Replace the following:
NAT_CONFIG : a name for your NAT configuration
NAT_ROUTER : the name of the
Cloud Router that you created in the previous step
REGION : the region where you
want to use the Cloud NAT gateway
Optional: MIN_PORTS : the minimum number
of ports to allocate for each VM. If dynamic port allocation is
enabled, MIN_PORTS must be a power of 2
and can be between 32 and 32768 . The default is 32 .
Optional: MAX_PORTS : the maximum number of
ports to allocate for each VM. MAX_PORTS must
be a power of 2 and can be between 64 and 65536 .
MAX_PORTS must be greater
than MIN_PORTS . The default is 65536 .
Terraform
You can use a Terraform module
to create a Cloud Router with a NAT gateway for IPv4 traffic.
module "cloud_router" {
source = "../.."
name = "my-cloud-router"
project_id = var.project_id
network = module.vpc.network_name
region = "us-central1"
nats = [{
name = "my-nat-gateway"
source_subnetwork_ip_ranges_to_nat = "LIST_OF_SUBNETWORKS"
subnetworks = [
{
name = module.vpc.subnets["us-central1/test-subnet-01-1"].id
source_ip_ranges_to_nat = ["PRIMARY_IP_RANGE", "LIST_OF_SECONDARY_IP_RANGES"]
secondary_ip_range_names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary_ip_range[*].range_name
}
]
}]
}
The resulting NAT gateway uses the following default values:
enable_endpoint_independent_mapping = true
icmp_idle_timeout_sec = 30
min_ports_per_vm = 0
nat_ip_allocate_option = "AUTO_ONLY"
source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"
tcp_established_idle_timeout_sec = 1200
tcp_transitory_idle_timeout_sec = 30
udp_idle_timeout_sec = 30
log_config {
enable = true
filter = "ALL"
}
View a Public NAT configuration
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
To view NAT gateway details, mapping information, or configuration
details, click the name of your NAT gateway.
To view NAT status, see the Status column for your NAT gateway.
gcloud
You can view the NAT configuration details by running the following commands:
View the Public NAT gateway configuration.
gcloud compute routers nats describe NAT_CONFIG \
--router= ROUTER_NAME \
--region= REGION
Replace the following:
NAT_CONFIG : the name of your NAT configuration
ROUTER_NAME : the name of your Cloud Router
REGION : the region of the NAT to describe; if
not specified, you might be prompted to select a region
(interactive mode only)
View the mapping of the IP:port-ranges allocated to each VM's interface.
gcloud compute routers get-nat-mapping-info ROUTER_NAME \
--region= REGION
View the status of the Public NAT gateway.
gcloud compute routers get-status ROUTER_NAME \
--region= REGION
View external IP addresses assigned to a Cloud NAT gateway
By default, Cloud NAT gateways for Public NAT use
automatic IP address allocation. To view the external IP addresses that are
assigned to a Cloud NAT gateway, do the following.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click the name of your Cloud NAT gateway.
On the Cloud NAT gateway details page, view
Allocated external IP addresses .
gcloud
To list all allocated NAT IP addresses, use the following command:
gcloud compute routers get-nat-ip-info NAT_ROUTER \
--region= REGION
For more examples, see the
gcloud compute routers get-nat-ip-info command .
Update a Public NAT configuration
After you set up your Cloud NAT gateway, you can update the gateway
configuration based on your requirements. The following sections list the tasks
that you can perform to update your Cloud NAT gateway.
Update subnets configured with NAT
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your Cloud NAT gateway.
Click edit Edit .
Under NAT mapping , set Source subnets to Custom .
Select a subnet.
In the IP ranges list, select the subnet IP ranges
to include.
Optional: If you want to specify additional ranges, click Add subnet
and IP range .
Click Save .
gcloud
Use the
gcloud compute routers nats update command .
To update the source subnet ranges for an existing Cloud NAT
gateway, run one of the following commands, depending on the IP version of
the subnet ranges that you want to update:
Update IPv4 subnet ranges:
gcloud compute routers nats update NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-custom-subnet-ip-ranges= IPV4_SUBNET_RANGES
Update IPv6 subnet ranges:
gcloud compute routers nats update NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat64-custom-v6-subnet-ip-ranges= IPV6_SUBNET_RANGES
Update both IPv4 and IPv6 subnet ranges:
gcloud compute routers nats update NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-custom-subnet-ip-ranges= IPV4_SUBNET_RANGES \
--nat64-custom-v6-subnet-ip-ranges= IPV6_SUBNET_RANGES
Replace the following:
NAT_CONFIG : the name of your NAT configuration
NAT_ROUTER : the name of your Cloud Router
REGION : the region of the NAT gateway
IPV4_SUBNET_RANGES : a comma-separated list of subnet
names—for example:
SUBNET_NAME_1:ALL,SUBNET_NAME_2:ALL : includes both the
primary and all secondary ranges of subnets SUBNET_NAME_1
and SUBNET_NAME_2 .
SUBNET_NAME_1,SUBNET_NAME_2 : includes only the primary
ranges of subnets SUBNET_NAME_1 and SUBNET_NAME_2 .
SUBNET_NAME:SECONDARY_RANGE_NAME : includes the
specified secondary range of subnet SUBNET_NAME and
doesn't include the primary range
SUBNET_NAME_1,SUBNET_NAME_2:SECONDARY_RANGE_NAME : includes
the primary range of subnet SUBNET_NAME_1 and
the specified secondary range of subnet SUBNET_NAME_2
IPV6_SUBNET_RANGES : a comma-separated list of
subnet names—for example, SUBNET_NAME_1,SUBNET_NAME_2
Remove subnets from NAT
You can remove subnets from the Cloud NAT gateway that are
no longer in use.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your Cloud NAT gateway.
Click edit Edit .
Delete the subnet that you want to remove from NAT mapping.
Note: If the subnet that you deleted is the only subnet that is mapped
to the Public NAT gateway, then the system prompts you to add a
subnet. You can map a new subnet or select Primary and secondary
ranges for all subnets in the Source list.
Click Save .
gcloud
Use the
gcloud compute routers nats update command .
You can remove only IPv4 subnet ranges or IPv6 subnet ranges, but not both.
The following example disables NAT for IPv6 subnet ranges:
gcloud compute routers nats update NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--clear-nat64-subnet-ip-ranges
Replace the following:
NAT_CONFIG : the name of your NAT configuration
NAT_ROUTER : the name of your Cloud Router
REGION : the region of the NAT gateway
Update external IP addresses assigned to NAT
You can change the list of external IP addresses for a given gateway or switch
from manual to automatic IP allocation. When you do, Google Cloud removes
the previously allocated IP addresses and adds the new ones. Any existing
connections on the previously allocated IP addresses immediately close.
To let existing connections continue while preventing new connections on those
IP addresses, see the Drain external IP addresses associated with NAT
section of this document.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your Cloud NAT gateway.
Click edit Edit .
Click the NAT IP addresses list, and then select
Automatic or Manual .
If you select Manual , specify an external IP address .
For high availability, click Add IP address , and then add a second
address.
Click Save .
gcloud
Use the
gcloud compute routers nats update command .
gcloud compute routers nats update NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-external-ip-pool= IP_ADDRESS_1 , IP_ADDRESS_2
Replace the following:
NAT_CONFIG : the name of your NAT configuration.
NAT_ROUTER : the name of your Cloud Router.
REGION : the region of the NAT to update. If not specified,
you might be prompted to select a region (interactive mode only).
IP_ADDRESS_1 : a manual external IP address.
IP_ADDRESS_2 : another manual external IP address.
Important: To update multiple gateway IP addresses at the same time, you can use
the nat-external-ip-pool flag. However, all the new IP addresses that you
assign must be from the same network tier.
Update NAT by using external IP addresses from a different network tier
You can update an existing Cloud NAT gateway by changing the network
tier of the external IP addresses associated with the gateway.
Update NAT by changing the network tier of automatically allocated external IP addresses
When you change the network tier of automatically allocated external IP
addresses associated with an existing Cloud NAT gateway,
Google Cloud removes the previously allocated IP addresses and replaces
them with IP addresses from the specified network tier. Any existing
connections on the previously allocated IP addresses immediately close.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your Cloud NAT gateway name that has automatically
allocated IP addresses.
Click edit Edit .
For Network service tier , choose either Premium or Standard .
Click Save .
gcloud
Use the
gcloud compute routers nats update command .
gcloud compute routers nats update NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--auto-allocate-nat-external-ips
--auto-network-tier= AUTO_NETWORK_TIER
Replace the following:
NAT_CONFIG : the name of your NAT configuration
NAT_ROUTER : the name of your Cloud Router
REGION : the region of the NAT to create; if not specified,
you might be prompted to select a region (interactive mode only)
AUTO_NETWORK_TIER : the network tier to use when automatically
allocating IP addresses for the Cloud NAT gateway. The allowed values
are PREMIUM and STANDARD . If not specified, then the current project-level default tier
is associated with the Cloud NAT gateway.
Update NAT by changing the network tier of manually assigned IP addresses
You can update an existing NAT by manually specifying external IP addresses from a
different tier. You can assign external IP addresses from either Standard Tier or Premium
Tier or both, subject to certain conditions .
Before you specify external IP addresses from a different tier, first
drain the existing IP addresses to let existing
connections continue and prevent new connections on the existing IP addresses.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your Cloud NAT gateway name that has manually
assigned IP addresses.
Click edit Edit .
To specify IP addresses from a tier that is different from the
selected tier, either delete all the existing IP addresses or
enable draining for all the existing IP addresses.
You can't change the network tier if draining is disabled for an existing
IP address.
For Network service tier , choose either Premium or Standard .
Select an external IP address from the list of active, available IP addresses.
Note: Draining is always disabled for a newly selected IP address.
Optional: To add more IP addresses, click Add IP addresses .
Click Save .
gcloud
To update an existing gateway by manually changing the existing external IP
addresses with new ones from a different network tier, use the
--nat-external-ip-pool flag of the
gcloud compute routers nats update command .
For more information about manually changing the existing external IP addresses,
see Update external IP addresses associated with NAT .
Drain external IP addresses assigned to NAT
Before you remove a manually configured IP address, you can drain it so that
existing connections aren't disrupted. When an IP address is drained, all
existing connections continue until they expire naturally. You
can view the logs to check the status of existing
connections.
No new connections are accepted on the drained IP addresses. However, the IP
address stays associated with the NAT configuration.
You must have at least one active address in a NAT configuration, which means
that you can't drain all IP addresses in a configuration.
To see the state of your NAT IP addresses,
view Public NAT configuration .
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your Cloud NAT gateway.
Click edit Edit .
For NAT IP addresses , set the IP draining value next to the
IP address to On .
Click Save .
Note: If you want to make an existing draining IP address active, you can
set the IP draining value next to the IP address to Off . However,
if the selected network tier isn't the same as the tier of the
draining IP address, you can't disable draining.
gcloud
Use the
gcloud compute routers nats update command .
To drain an address, you must move it from the active pool to the drain
pool in the same command. If you remove it from the active pool without
adding it to the drain pool in a single command, the IP address is deleted
from service and existing connections are terminated immediately.
If you move an IP address from the drain pool to the active pool, you
undrain the IP address. If you remove a NAT IP address from both pools, you
disconnect it from the NAT configuration.
This command leaves the other fields in the NAT configuration unchanged.
gcloud compute routers nats update NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
--nat-external-ip-pool= IP_ADDRESS_2 \
--nat-external-drain-ip-pool= IP_ADDRESS_1
Where:
--nat-external-ip-pool= IP_ADDRESS_2 : updates the
active pool to omit IP_ADDRESS_1
--nat-external-drain-ip-pool= IP_ADDRESS_1 : adds IP_ADDRESS_1
to the drain pool
Replace the following:
NAT_CONFIG : the name of your NAT configuration.
NAT_ROUTER : the name of your Cloud Router.
REGION : the region of the NAT to update. If not specified,
you might be prompted to select a region (interactive mode only).
IP_ADDRESS_2 : an IP address.
IP_ADDRESS_1 : another IP address.
Update endpoint mapping
You can enable or disable Endpoint-Independent
Mapping for your gateway.
By default, this option is disabled. Switching Endpoint-Independent Mapping
from enabled to disabled (or from disabled to enabled) doesn't interrupt
existing connections.
You can't enable Endpoint-Independent Mapping if your Cloud NAT
gateway uses NAT rules or dynamic port allocation.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your Cloud NAT gateway.
Click edit Edit .
Click Advanced configurations .
To enable Endpoint-Independent Mapping, select the
Enable Endpoint-Independent Mapping checkbox. To disable
Endpoint-Independent Mapping, clear the checkbox.
Click Save .
gcloud
Use the
gcloud compute routers nats update command .
gcloud compute routers nats update NAT_CONFIG \
--router= NAT_ROUTER \
--region= REGION \
[--enable-endpoint-independent-mapping | --no-enable-endpoint-independent-mapping]
Replace the following:
NAT_CONFIG : the name of your NAT configuration
NAT_ROUTER : the name of your Cloud Router
REGION : the region of the NAT to update; if not specified,
you might be prompted to select a region (interactive mode only)
Update logging
To add, modify, or remove logging for an existing Cloud NAT
gateway, see Configuring logging .
Delete a Public NAT configuration
Deleting a gateway configuration removes the NAT configuration from a
Cloud Router. Deleting a gateway configuration doesn't delete
the router itself.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Select the checkbox next to the gateway configuration that you want to
delete.
On the more_vert Menu ,
click Delete .
gcloud
gcloud compute routers nats delete NAT_CONFIG \
--router= ROUTER_NAME \
--region= REGION
Replace the following:
NAT_CONFIG : the name of your NAT configuration
ROUTER_NAME : the name of your Cloud Router
REGION : the region of the NAT to delete; if
not specified, you might be prompted to select a region
(interactive mode only).
Quotas and limits
For quota and limit information, see Quotas and limits .
Example setups
Use Public NAT with Compute Engine
Use Public NAT with GKE
Configure IPv6-only subnets and instances with DNS64 and NAT64
What's next
Configure logging and monitoring for Cloud NAT.
Troubleshoot common issues with NAT configurations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
