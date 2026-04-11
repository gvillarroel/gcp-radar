---
title: "Change the MTU setting of a VPC network \_|\_ Virtual Private Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network
  title: "Change the MTU setting of a VPC network \_|\_ Virtual Private Cloud \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Change the MTU setting of a VPC network
In Google Cloud, you set the MTU for each VPC network.
Virtual machine (VM) instances that use that network must be configured to use
the same MTU setting for their interfaces.
Linux VMs based on public OS images receive
the VPC network's MTU setting from the DHCP server. DHCP Option
26 contains the MTU setting.
Windows VMs don't use DHCP to configure the MTU setting. If you change the
MTU of a VPC network, you must change the MTU setting of the
VM .
For more information about VMs and MTU settings, see VMs and MTU
settings .
There are two ways to start using a VPC network with a different
MTU setting:
You can change the MTU setting of an existing VPC
network, which requires that you shut down all VMs in the network at the same
time.
You can create a new VPC network with a different MTU setting,
and migrate the VMs to it to it.
Change the MTU of a network
Each VPC network has an MTU. Do not change the network MTU while
the VMs are running. Doing so can result in a period where VMs have different
MTUs, which can lead to unreliable network connectivity.
For detailed considerations regarding changing the MTU of a network, see the
maximum transmission unit overview .
The recommended way to update the network MTU is to stop all running VM
instances, change the network MTU, then start all instances. VMs based on
public Linux images automatically configure each of their network
interfaces to use the MTU of the attached VPC network when they
start. You must manually update the MTU of Windows VMs
and VMs based on custom images that do not rely on DHCP for network MTU
configuration.
Console
Updating network MTU is not supported in the Google Cloud console.
See the Google Cloud CLI or API instructions.
gcloud
Stop all VMs.
For each zone in the network, stop all VMs in that zone.
gcloud compute instances stop INSTANCE_NAMES... \
--zone= ZONE
Update network MTU.
gcloud compute networks update NETWORK \
--mtu= MTU
Start all VMs.
For each zone in the network, start all VMs in that zone.
gcloud compute instances start INSTANCE_NAMES... \
--zone= ZONE
Replace the placeholders with valid values:
INSTANCE_NAMES... is a space-separated list of instances.
NETWORK is the name of the VPC network
whose dynamic routing mode you need to change.
MTU specifies whether the network has
an MTU of 1460 (default), 1500 , or 8896 . Review the maximum
transmission unit overview before setting the MTU to
higher than 1460 .
API
Change the MTU of an existing VPC network.
PATCH https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/ NETWORK
{
"mtu": MTU
}
Replace the placeholders with valid values:
PROJECT_ID is the ID of the project that contains the
VPC network to modify.
NETWORK is the name of the VPC network to
modify.
MTU is the maximum transmission unit of the network.
MTU can be set to anything from 1300 through 8896 (default: 1460 ).
Review the maximum transmission unit overview before
setting the MTU to higher than 1460 .
For more information, refer to the
subnetworks.patch
method.
Change the MTU setting of a Windows VM
Windows VMs based on public OS images are
configured with a fixed MTU of 1460 . Custom Windows VMs might have different
MTU settings.
To set Windows VMs to use a different MTU, do the following on each VM:
Command prompt
Open Command Prompt (cmd.exe) as Administrator.
Run the following command to determine the index of the interface that you
want to update:
netsh interface ipv4 show interface
Update the interface:
netsh interface ipv4 set interface INTERFACE_INDEX mtu= MTU store=persistent
Update the device driver configuration:
Open the Device Manager with following command:
devmgmt.msc
Expand the Network adapters category.
Right-click the Google VirtIO Ethernet Adapter / Google Ethernet Adapter device.
Select Properties .
Click the Advanced tab.
In the Init.MTUSize field, enter the MTU setting.
Click OK .
The instance briefly loses connectivity, because the driver
automatically restarts when the registry entries change.
PowerShell
Open PowerShell as Administrator.
Run the following command:
Set-NetIPInterface -InterfaceAlias INTERFACE_NAME -AddressFamily IPv4 -NlMtu MTU
Run the following command to update device driver settings:
Set-NetAdapterAdvancedProperty -Name "Ethernet" -RegistryKeyword MTU -RegistryValue MTU
You will briefly lose connectivity to the VM, because the driver
automatically restarts when the registry entries change.
Migrate VMs to a different MTU network
You might decide to migrate your services to new VMs in a new network rather
than changing the MTU of your existing network. In such a case, you might have a
server, such as a database server, that needs to be accessible to all VMs during
the migration. If so, the following general approach might help you migrate
cleanly:
Create the new network with the
new MTU.
Create any necessary firewall rules and routes in the new network.
Create a VM with multiple network
interfaces
in the old network. One interface connects to the new network using the new
MTU and the other connects to the old network using the old MTU.
Configure this new VM as a secondary server for the existing one.
Fail the primary server over to the secondary one.
Either Migrate VMs to the new
network or
create new VMs in the new network. If you create new VMs, you can create them
from scratch, from an existing image, or by creating a
snapshot of the existing VMs and
using that to populate the new persistent disks.
Configure these VMs to use the operational server in that network.
Migrate traffic to the new VMs.
If you intend to delete the old network, create a new server in the new
network, get it in sync with the existing server, and fail over to it.
Delete the old server and old network.
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
VPC performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try VPC free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
