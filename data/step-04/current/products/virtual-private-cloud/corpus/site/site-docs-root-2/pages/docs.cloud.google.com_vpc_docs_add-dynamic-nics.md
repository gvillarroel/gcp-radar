---
title: "Add Dynamic Network Interfaces to an instance \_|\_ Virtual Private Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/add-dynamic-nics
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/add-dynamic-nics
  title: "Add Dynamic Network Interfaces to an instance \_|\_ Virtual Private Cloud\
    \ \_|\_ Google Cloud Documentation"
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
Add Dynamic Network Interfaces to an instance
This page describes how to add a Dynamic Network Interface (NIC) to an existing
Compute Engine instance.
For information about creating new instances,
see Create VMs with multiple network interfaces .
Before you begin
Before adding Dynamic NICs to an instance, do the following:
Make sure you are familiar with the properties and limitations of
Dynamic NICs as described in the
multiple network interfaces
overview.
If necessary, view your instance's existing network interfaces by
following the instructions in
View network interfaces for an instance .
Add a Dynamic NIC
The following sections describe how to add a Dynamic NIC to an
individual instance or instances that are part of a managed instance group (MIG).
When you add a Dynamic NIC, you might observe a propagation
delay. This delay is typically a few seconds, but it can be, in rare cases, up
to one minute.
Add a Dynamic NIC to an instance
This section describes how to add a Dynamic NIC to an instance.
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click the name of the instance for which you want to add a Dynamic NIC.
On the instance details page, click Edit .
In the Dynamic Network Interfaces section, click Add a Dynamic Network Interface and do the following:
In the Interface type field, select VPC .
In the Parent network interface field, select the parent vNIC for
which to create the Dynamic NIC.
In the VLAN ID field, enter the VLAN ID of the Dynamic NIC.
For Network and Subnetwork , select the network
and subnetwork that you want to use.
Select one of the following options for the IP stack type for the
Dynamic NIC:
IPv4 (single-stack)
IPv4 and IPv6 (dual-stack)
IPv6 (single-stack)
For Dynamic NICs with IPv4 addresses, do the following:
For Primary internal IPv4 address , select one of the following:
Ephemeral (Automatic) to automatically assign a new
ephemeral IPv4 address
Ephemeral (Custom) to manually specify a new ephemeral IPv4 address
A reserved static internal IPv4 address from the list
Reserve static internal IPv4 address to reserve and assign a new static internal IPv4 address
For External IPv4 address , select one of the following:
Ephemeral to assign a new ephemeral IPv4 address
None to not assign an external IPv4 address
A reserved static IPv4 address from the list
Reserve static external IP address to reserve and assign a new static external IPv4 address
You can optionally assign one or more
alias IP ranges to the
network interface. To assign an alias IP range, do the following:
In Alias IP ranges , click
add Add IP range .
In Subnet range , select a subnet primary IPv4 address range
or a subnet secondary IPv4 address range to use.
For Alias IP range , enter an IP range in CIDR notation.
This range must be an unused range of the subnet IP range that
you selected.
For more information about assigning alias IP ranges to VM network
interfaces, see Configure alias IP ranges .
For Dynamic NICs with IPv6 addresses, configure an internal
or external IPv6 address range, depending on the access type of the
connected subnet. For the Primary internal IPv6 address or
External IPv6 address , select from the following:
Ephemeral (Automatic) to automatically assign a new ephemeral IPv6 address range
Ephemeral (Custom) to manually specify a new ephemeral IPv6 address range
A reserved static IPv6 address range from the list
Reserve static internal IPv6 address or Reserve static external IPv6 address to reserve and assign a new static IPv6 address range
To finish editing the properties of the Dynamic NIC, click Done .
To save your configuration, click Save .
gcloud
To add a Dynamic NIC to an existing instance, use the
gcloud compute instances network-interfaces add command .
gcloud compute instances network-interfaces add INSTANCE_NAME \
--zone= ZONE \
--vlan= VLAN_ID \
--parent-nic-name= PARENT_VNIC_NAME \
--network= NETWORK \
--subnetwork= SUBNET
Replace the following:
INSTANCE_NAME : the name of the instance to add
the Dynamic NIC to
ZONE : the zone of the instance
VLAN_ID : the VLAN ID of the Dynamic NIC
PARENT_VNIC_NAME : the name of the parent vNIC,
such as nic0
NETWORK : the network where the Dynamic NIC attaches
SUBNET : the subnet where the Dynamic NIC attaches
Alternatively, you can add a Dynamic NIC to an instance when
updating instance properties. For more information, see
Update instance properties .
API
To add a Dynamic NIC to an existing instance, use the
instances.addNetworkInterface method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ INSTANCE_NAME /addNetworkInterface
{
"subnetwork": "regions/ REGION /subnetworks/ SUBNET ",
"parentNicName": " PARENT_VNIC_NAME ",
"vlan": " VLAN_ID "
}
Replace the following:
PROJECT_ID : the ID of the project that contains
the instance
ZONE : the zone that contains the instance
INSTANCE_NAME : the name of the instance to add a
Dynamic NIC to
REGION : the region that contains the instance
SUBNET : the subnet where the Dynamic NIC
attaches
PARENT_VNIC_NAME : the name of the parent vNIC,
such as nic0
VLAN_ID : the VLAN ID of the Dynamic NIC
Alternatively, you can add a Dynamic NIC to an instance when
updating instance properties. For more information, see
Update instance properties .
Add a Dynamic NIC to instances in a MIG
This section describes how to add a Dynamic NIC to instances
in a MIG by creating a new instance template and applying the configuration
to the MIG. Updating an existing instance template is not supported.
For more information about creating instance templates, see
Create instance templates .
To view existing instance templates, see
Get, list, and delete instance templates .
Console
Go to the Instance templates page.
Go to Instance templates
Click the instance template that you want to copy and update.
Click Create similar .
Expand the Advanced options section, and then expand the Networking section.
In the Dynamic Network Interfaces section, click Add a Dynamic Network Interface and do the following:
In the Interface type field, select VPC .
In the Parent network interface field, select the parent vNIC for
which to create the Dynamic NIC.
In the VLAN ID field, enter the VLAN ID of the Dynamic NIC.
For Network and Subnetwork , select the network
and subnetwork that you want to use.
Select one of the following options for the IP stack type for the
Dynamic NIC:
IPv4 (single-stack)
IPv4 and IPv6 (dual-stack)
IPv6 (single-stack)
For Dynamic NICs with IPv4 addresses, do the following:
For Primary internal IPv4 address , select one of the following:
Ephemeral (Automatic) to automatically assign a new
ephemeral IPv4 address
Ephemeral (Custom) to manually specify a new ephemeral IPv4 address
A reserved static internal IPv4 address from the list
Reserve static internal IPv4 address to reserve and assign a new static internal IPv4 address
For External IPv4 address , select one of the following:
Ephemeral to assign a new ephemeral IPv4 address
None to not assign an external IPv4 address
A reserved static IPv4 address from the list
Reserve static external IP address to reserve and assign a new static external IPv4 address
You can optionally assign one or more
alias IP ranges to the
network interface. To assign an alias IP range, do the following:
In Alias IP ranges , click
add Add IP range .
In Subnet range , select a subnet primary IPv4 address range
or a subnet secondary IPv4 address range to use.
For Alias IP range , enter an IP range in CIDR notation.
This range must be an unused range of the subnet IP range that
you selected.
For more information about assigning alias IP ranges to VM network
interfaces, see Configure alias IP ranges .
For Dynamic NICs with IPv6 addresses, configure an internal
or external IPv6 address range, depending on the access type of the
connected subnet. For the Primary internal IPv6 address or
External IPv6 address , select from the following:
Ephemeral (Automatic) to automatically assign a new ephemeral IPv6 address range
Ephemeral (Custom) to manually specify a new ephemeral IPv6 address range
A reserved static IPv6 address range from the list
Reserve static internal IPv6 address or Reserve static external IPv6 address to reserve and assign a new static IPv6 address range
To finish editing the properties of the Dynamic NIC, click Done .
To create the instance template, click Create .
Follow the steps to
apply new VM configurations in a MIG .
If you want to update the instances without restarting or recreating them,
set the minimal action to REFRESH . For more information, see the following:
Control the disruption level during a rolling update
Control the disruption level during selective updates
gcloud
To create a new instance template that adds a Dynamic NIC,
use the gcloud compute instance-templates create command .
Include the --network-interface flag for each network interface from
your existing instance template and add a new network interface that
specifies the vlan key to create a Dynamic NIC.
The following example adds a Dynamic NIC under nic0 . You
can specify additional network interfaces and
properties as needed. For more examples of how to create instances with
multiple network interfaces, see Create VMs with multiple network interfaces .
gcloud compute instance-templates create INSTANCE_TEMPLATE_NAME \
--network-interface=network= NETWORK_A ,subnet= SUBNET_A \
--network-interface=network= NETWORK_B ,subnet= SUBNET_B ,vlan= VLAN_ID
Replace the following:
INSTANCE_TEMPLATE_NAME : a name for the new instance template.
NETWORK_A , NETWORK_B : the network where the interface
attaches.
SUBNET_A , SUBNET_B : the subnet where the interface attaches.
VLAN_ID : a VLAN ID. Specifying a VLAN ID configures
the network interface as a Dynamic NIC. You must place a
Dynamic NIC after its parent vNIC in the command.
Follow the steps to
apply new VM configurations in a MIG .
If you want to update the instances without restarting or recreating them,
set the minimal action to REFRESH . For more information, see the following:
Control the disruption level during a rolling update
Control the disruption level during selective updates
API
To create a new instance template that adds a Dynamic NIC,
use the instanceTemplates.insert method to create a global instance template or the
regionInstanceTemplates.insert method to create a regional instance template.
In the networkInterfaces field, specify each network interface from your
existing instance template and add a new network interface
that includes the vlan field to create a Dynamic NIC.
The following example adds a Dynamic NIC under nic0 . You
can specify additional network interfaces and
properties as needed. For more examples of how to create instances with
multiple network interfaces, see Create VMs with multiple network interfaces .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/instanceTemplates
{
....
"networkInterfaces": [
{
"subnetwork": "regions/ REGION /subnetworks/ SUBNET_A "
},
{
"subnetwork": "regions/ REGION /subnetworks/ SUBNET_B ",
"vlan": " VLAN_ID "
},
additional network interfaces...
],
other instance settings...
}
Replace the following:
PROJECT_ID : the ID of the project that contains the
instance template.
REGION : the region that contains the instances.
SUBNET_A , SUBNET_B : the subnets where each network interface
is located.
VLAN_ID : a VLAN ID. Specifying a VLAN ID configures
the network interface as a Dynamic NIC. You must place a
Dynamic NIC after its parent vNIC the request.
Follow the steps to
apply new VM configurations in a MIG .
If you want to update the instances without restarting or recreating them,
set the minimal action to REFRESH . For more information, see the following:
Control the disruption level during a rolling update
Control the disruption level during selective updates
Configure the guest OS for Dynamic NICs
This section describes how to complete the additional guest OS configuration
that is required when you add Dynamic NICs to a new or existing
instance.
Choose one of the following configuration options:
Configuration option
Description
Configure automatic management of
Dynamic NICs (Recommended)
Use the guest agent for the automatic management of
Dynamic NICs.
The guest environment
includes the guest agent ,
which automates the installation and management of VLAN interfaces in the
root namespace on Linux distributions of Google Cloud OS images.
If you configure the automatic management of Dynamic NICs,
use guest agent version 20251205.00 or later.
While support for this functionality was introduced in guest agent version
20250204.02 , there are known issues with the installation and management of Dynamic NICs in some subsequent guest agent versions.
Configure the guest OS manually
Run commands in the guest OS to install the Dynamic NICs.
If you use this option, your configuration doesn't automatically persist after
a restart of the instance. To cause the configurations to persist after a
restart, use the recommended method for configuring persistent network
interfaces for your Linux distribution. For example, see
NetworkConfiguration
for Debian and interfaces
for Ubuntu.
Configure automatic management of Dynamic NICs
This section describes how to configure the automatic management of
Dynamic NICs by using the guest agent.
You only need to complete these steps once per instance.
If you added a Dynamic NIC to an instance for
which you already completed these steps, then you don't need to repeat them.
To configure the automatic management of Dynamic NICs:
Connect to the instance
by using SSH.
Ensure that the instance is running guest agent version
20251205.00 or later:
To determine whether the instance is running the guest agent, run
the appropriate command listed in Installed packages for the guest
environment .
If your instance isn't running the guest agent, install the guest
environment .
If your instance is running the guest agent,
update the guest environment .
Installing or updating the guest environment ensures that you have the
latest version of the guest agent. You can confirm the version by
following the steps in Validating the guest
environment .
Configure the guest agent to manage Dynamic NICs:
Open or create your guest environment configuration file.
edit /etc/default/instance_configs.cfg
Add the following to the configuration file, then save your changes and exit the
editor.
[NetworkInterfaces]
vlan_setup_enabled = true
manage_primary_nic = true
For information about these settings, see the following:
vlan_setup_enabled = true : configures the guest agent to
install and manage Dynamic NICs
manage_primary_nic = true : an additional setting required for the
guest agent to manage Dynamic NICs created under
nic0
For more information about editing the guest agent configuration file, see
Configuration
in the guest agent documentation.
Restart the guest agent by running the following command. Alternatively,
you can restart the instance.
sudo systemctl restart google-guest-agent.service
List the network interfaces on your instance to see
that the guest agent installed your Dynamic NICs.
For example, the following command displays a name such as a-gcp.ens4.11 for a
Dynamic NIC with a VLAN ID of 11 created as a child of the
ens4 interface.
sudo ip -d addr
Configure the guest OS manually
To configure Dynamic NICs in the guest OS of an instance manually:
Connect to the instance
by using SSH.
If the instance is running the guest agent, disable the automatic
management of Dynamic NICs. You can determine whether the
instance is running the guest agent by using the appropriate command
listed in Installed packages for the guest
environment .
To disable the automatic management of Dynamic NICs:
Open or create your guest environment configuration file.
edit /etc/default/instance_configs.cfg
Add the following to the configuration file, then save your changes and exit the
editor.
[NetworkInterfaces]
vlan_setup_enabled = false
manage_primary_nic = false
For more information about editing the guest agent configuration file, see
Configuration
in the guest agent documentation.
Restart the guest agent by running the following command. Alternatively,
you can restart the instance.
sudo systemctl restart google-guest-agent.service
For each Dynamic NIC that you created, do the following:
Get the MAC address of the Dynamic NIC. To find the MAC
address, query the metadata server by running the following command:
curl http://metadata.google.internal/computeMetadata/v1/instance/vlan-network-interfaces/ VNIC_NUMBER / VLAN_ID /mac -H "Metadata-Flavor: Google"
Replace VNIC_NUMBER / VLAN_ID with the
number of the parent vNIC and the VLAN ID of the Dynamic NIC.
For example, 0/2 for nic0.2 or 1/4 for nic1.4 .
Configure a subinterface in the guest OS of the instance. For example,
on a Debian VM, run the following commands:
sudo modprobe 8021q
sudo ip link add link VNIC_NAME name VNIC_NAME . VLAN_ID type vlan id VLAN_ID
sudo ip addr add IP_ADDRESS dev VNIC_NAME . VLAN_ID
sudo ip link set dev VNIC_NAME . VLAN_ID address MAC_ADDRESS
sudo ip link set up VNIC_NAME . VLAN_ID
Replace the following:
VNIC_NAME : the name of the parent vNIC assigned by the
operating system, such as eth1 or ens4
IP_ADDRESS : the IP address of the Dynamic NIC
that you created
VLAN_ID : the VLAN ID that you assigned to the
Dynamic NIC
MAC_ADDRESS : the MAC address that you got in the
previous step
What's next
Configure routing for an additional interface
View network interfaces for an instance
Update the network interfaces for an instance
Delete Dynamic NICs from an instance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
