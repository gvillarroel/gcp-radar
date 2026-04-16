---
title: "Running Windows Server Failover Clustering \_|\_ Compute Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering
  title: "Running Windows Server Failover Clustering \_|\_ Compute Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Running Windows Server Failover Clustering
Stay organized with collections
Save and categorize content based on your preferences.
You can create a failover cluster using Windows Server on Google Cloud Platform
(GCP). A group of servers works together to provide higher availability (HA) for
your Windows applications. If one cluster node fails, another node can take
over running the software. You can configure the failover to happen
automatically, which is the usual configuration, or you can manually trigger a
failover.
This tutorial assumes you are familiar with failover clustering, Active
Directory (AD), and administration of Windows Server.
For a brief overview of networking in GCP, see
GCP for Data Center Pros: Networking .
Architecture
This tutorial walks you through how to create an example failover cluster on
Compute Engine. The example system contains the following two servers:
A primary Compute Engine VM instance running Windows Server 2016 in zone a .
A second instance, configured to match the primary instance in zone b .
Additionally, you deploy an AD domain contoller, which, for this tutorial,
serves the following purposes:
Provides a Windows domain.
Resolves hostnames to IP addresses.
Hosts the file share witness that acts as a third "vote" to
achieve the required quorum for the cluster .
You can create the domain controller in any zone. This tutorial uses zone c .
In a production system, you can host the file share witness elsewhere, and you
don't need a separate AD system only to support your failover cluster. See
What's next
for links to articles about using AD on GCP.
The two servers that you will use to deploy the failover cluster are located in
different zones to ensure that each server
is on a different physical machine and to protect against the unlikely
possibility of a zonal failure.
The following diagram describes the architecture you deploy by following this
tutorial.
Shared storage options
This tutorial does not cover setting up a file server for high-availability
shared storage.
Google Cloud supports multiple shared storage solutions that you can
use with Windows Server Failover Clustering, including:
SIOS Datakeeper Cluster Edition
Native Microsoft Windows options
For information about other possible shared storage solutions, see:
GCP Windows Partners
File servers on Compute Engine .
Understanding the network routing
When the cluster fails over, requests must go to the newly active node. The
clustering technology normally handles routing by using
address resolution protocol
(ARP), which associates IP addresses with MAC addresses. In GCP, the Virtual
Private Cloud (VPC) system uses
software-defined networking ,
which doesn't leverage MAC addresses. This means the changes broadcast by ARP
don't affect routing at all. To make routing work, the cluster requires some
software-level help from the
Internal Load Balancer .
Usually, internal load balancing distributes incoming network traffic among
multiple backend instances that are internal to your VPC, to share the load.
For failover clustering, you instead use internal load balancing to route all
traffic to just one instance: the currently active cluster node. Here's how
internal load balancing detects the correct node:
Each VM instance runs a Compute Engine agent instance that provides
support for Windows failover clustering. The agent keeps track of the IP
addresses for the VM instance.
The load balancer's frontend provides the IP address for incoming traffic
to the application.
The load balancer's backend provides a health check. The health check
process periodically pings the agent on each cluster node by using the
fixed IP address of the VM instance through a particular port. The default
port is 59998.
The health check includes the application's IP address as a payload in
the request.
The agent compares the IP address in the request to the list of IP
addresses for the host VM. If the agent finds a match, it responds with a
value of 1. Otherwise, it responds with 0.
The load balancer marks any VM that passes the health check as healthy .
At any moment, only one VM ever passes the health check because only one VM
has the IP address for the workload.
What happens during a failover
When a failover happens in the cluster, the following changes take place:
Windows failover clustering changes the status of the active node to indicate
that it has failed.
Failover clustering moves any cluster resources and roles from the failing
node to the best node, as defined by the quorum. This action includes moving the
associated IP addresses.
Failover clustering broadcasts ARP packets to notify hardware-based network
routers that the IP addresses have moved. For this scenario, GCP networking
ignores these packets.
After the move, the Compute Engine agent on the VM for the failing node
changes its response to the health check from 1 to 0, because the VM no longer
hosts the IP address specified in the request.
The Compute Engine agent on the VM for the newly active node likewise changes
its response to the health check from 0 to 1.
The internal load balancer stops routing traffic to the failing node and
instead routes traffic to the newly active node.
Putting it together
Now that you've reviewed some of the concepts, here are some details to notice
about the architecture diagram:
The Compute Engine agent for the VM named wsfc-2 is responding to
the health check with the value 1, indicating it is the active cluster
node. For wsfc-1 , the response is 0.
The load balancer is routing requests to wsfc-2 , as indicated by the arrow.
The load balancer and wsfc-2 both have the IP address 10.0.0.9 . For
the load balancer, this is the specified frontend IP address. For the VM,
it's the IP address of the application. The failover cluster sets this IP
address on the currently active node.
The failover cluster and wsfc-2 both have the IP address 10.0.0.8 .
The VM has this IP address because it currently hosts the cluster resources.
Advice for following this tutorial
This tutorial has a lot of steps. Sometimes, you are asked to follow steps in
external documents, such as Microsoft documentation. Don't miss the notes
in this document providing specifics for following the external steps.
This tutorial uses Cloud Shell in the Google Cloud console. Though it's possible
to use the Google Cloud console user interface or the gcloud CLI to set up
failover clustering, this tutorial mainly uses Cloud Shell to make it easy for
you. This approach helps you to complete the tutorial faster. When more
appropriate, some steps use the Google Cloud console instead.
It's a good idea to take snapshots of your
Compute Engine persistent disks
along the way. If something goes wrong, you can use a snapshot to avoid
starting over from the beginning. This tutorial suggests good times to take the
snapshots.
If you find that things aren't working as you expect, there might be
instructions in the section you're reading. Otherwise, refer to the
Troubleshooting
section.
Objectives
Create a network.
Install Windows Server 2016 on two Compute Engine VMs.
Install and configure Active Directory on a third instance of
Windows Server.
Set up the failover cluster, including a file share witness for
the quorum and a role for the workload.
Set up the internal load balancer.
Test the failover operation to verify that the cluster is working.
Costs
This tutorial uses Compute Engine images that include Windows Server
licenses. This means the cost to run this tutorial can be significant if you
leave VMs running. It's a good idea to stop the VMs when you're not using them.
See the Pricing Calculator
for an estimate of the costs to complete this tutorial.
Before you begin
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
Start an instance of Cloud Shell.
Go to Cloud Shell
Creating the network
Your cluster requires a custom network. Use VPC to create a custom network and
one subnetwork by running gcloud commands in Cloud Shell.
Create the network:
gcloud compute networks create wsfcnet --subnet-mode custom
The name of the network you created is wsfcnet .
Create a subnetwork. Replace [YOUR_REGION] with a nearby GCP region:
gcloud compute networks subnets create wsfcnetsub1 --network wsfcnet --region [YOUR_REGION] --range 10.0.0.0/16
The name of the subnetwork you created is wsfcnetsub1 .
Notice that the
CIDR
range for IP addresses in this subnetwork is 10.0.0.0/16 . This is an example
range used for this tutorial. In production systems, work with your network
administrators to allocate appropriate ranges for IP addresses for your
systems.
Create firewall rules
By default, your network is closed to external traffic. You must open ports in
the firewall to enable remote connections to the servers. Use gcloud commands
in Cloud Shell to create the rules.
For this tutorial, open port 3389 on the main network to
enable RDP connections. In the following command, replace
[YOUR_IPv4_ADDRESS] with the IP address of the computer you use to
connect to your VM instances. In a production system,
you can provide an IP address range or a series of addresses .
gcloud compute firewall - rules create allow - rdp --network wsfcnet --allow tcp:3389 --source-ranges [YOUR_IPv4_ADDRESS]
On the subnetwork, allow all protocols on all ports to enable the
servers to communicate with each other. In production systems, consider
opening only specific ports, as needed.
gcloud compute firewall-rules create allow-all-subnet --network wsfcnet --allow all --source-ranges 10.0.0.0/16
Notice that the source-ranges value matches the CIDR range you used to create
the subnetwork.
View your firewall rules:
gcloud compute firewall-rules list
You should see output similar to the following:
NAME NETWORK DIRECTION PRIORITY ALLOW DENY DISABLED
allow-all-subnet wsfcnet INGRESS 1000 all False
allow-rdp wsfcnet INGRESS 1000 tcp:3389 False
Enabling failover clustering in Compute Engine
To enable failover clustering in the Compute Engine agent,
you need to add the flag enable-wsfc=true to your VM definitions either by
specifying it as custom metadata for the VM or by creating a
configuration file on each VM, as described in the Compute Engine
documentation .
This tutorial defines the flag as custom metadata when the VMs are created, as
described in the next section. The tutorial also relies on the default
behavior for wsfc-addrs and wsfc-agent-port , so you don't need to set
these values.
Creating the servers
Next, create the 3 servers. Use the gcloud command in Cloud Shell.
Create the first cluster-node server
Create a new Compute Engine instance. Configure the instance as follows:
Name the instance wsfc-1 .
Set the --zone flag to a convenient zone near you. For example,
us-central1-a .
Set the --machine-type flag to n1-standard-2.
Set the --image-project flag to windows-cloud .
Set the --image-family flag to windows-2016 .
Set the --scopes flag to https://www.googleapis.com/auth/compute .
Set the --can-ip-forward flag to enable IP forwarding.
Set the --private-network-ip flag to 10.0.0.4 .
Set the network to wsfcnet and the subnetwork to wsfcnetsub1 .
Use the --metadata parameter to set enable-wsfc=true .
Run the following command, replacing [YOUR_ZONE_1] with the name
of your first zone:
gcloud compute instances create wsfc - 1 --zone [YOUR_ZONE_1] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.4 --network wsfcnet --subnet wsfcnetsub1 --metadata enable-wsfc=true
Create the second cluster-node server
For the second server, follow the same steps, except:
Set the instance name to: wsfc-2 .
Set the --zone flag to a different zone than the zone that you used
for the first server. For example, us-central1-b .
Set the --private-network-ip flag to 10.0.0.5 .
Replace [YOUR_ZONE_2] with the name of your second zone:
gcloud compute instances create wsfc - 2 --zone [YOUR_ZONE_2] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.5 --network wsfcnet --subnet wsfcnetsub1 --metadata enable-wsfc=true
Create the third server for Active Directory
For the domain controller, follow the same steps, except:
Set the instance name to: wsfc-dc .
Set the --zone flag to a different zone than the zones that you used
for the other servers. For example, us-central1-c .
Set the --private-network-ip flag to 10.0.0.6 .
Omit --metadata enable-wsfc=true .
Replace [YOUR_ZONE_3] with the name of your zone:
gcloud compute instances create wsfc - dc --zone [YOUR_ZONE_3] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.6 --network wsfcnet --subnet wsfcnetsub1
View your instances
You can see the details about the instances you created.
gcloud compute instances list
You will see output similar to the following:
NAME ZONE MACHINE_TYPE PREEMPTIBLE INTERNAL_IP EXTERNAL_IP STATUS
wsfc-1 us-central1-a n1-standard-2 10.0.0.4 35.203.131.133 RUNNING
wsfc-2 us-central1-b n1-standard-2 10.0.0.5 35.203.130.194 RUNNING
wsfc-dc us-central1-c n1-standard-2 10.0.0.6 35.197.27.2 RUNNING
Connecting to your VMs
To connect to a Windows-based VM, you must first generate a password for the VM.
You can then connect to the VM using RDP.
Generating passwords
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click the name of the VM instance for which you need a new password.
On the instance details page, click the Set Windows Password
button. A password is generated for you. Copy the password and store it in a
secure place.
Connecting through RDP
The Compute Engine documentation provides details about how to connect to your
Windows VM instances by using RDP. You can either:
Use an existing client.
Add a Chrome RDP plugin to your browser and then
connect through the
Google Cloud console.
Whenever this tutorial tells you to connect to a Windows instance, use your
preferred RDP connection.
Configuring Windows networking
The internal IP addresses that you assigned when you created the VMs are
static. To ensure that Windows treats the IP addresses as static, you need to
add them, along with the IP addresses of the default gateway and the DNS
server, to the Windows Server networking configuration.
Use RDP to connect to wsfc-1 , wsfc-2 , and wsfc-dc ,
and repeat the following steps for each instance:
In Server Manager, in the left pane, select Local Server .
In the Ethernet entry of the Properties pane, click
IPv4 address assigned by DHCP, IPv6 enabled .
Right-click Ethernet and select Properties .
Double-click Internet Protocol Version 4 (TCP/IPv4) .
Select Use the following IP address .
Enter the internal IP address that you assigned to the VM when you
created it.
For wsfc-1 , enter "10.0.0.4".
For wsfc-2 enter "10.0.0.5".
For wsfc-dc enter "10.0.0.6".
For Subnet mask , enter "255.255.0.0".
For Default gateway , enter 10.0.0.1 , the IP address that was
automatically reserved for the default gateway when you created the subnet
wsfcnetsub1 .
The IP address for the default gateway is always the second
address in the primary IP range for a subnet. See
Unusable addresses in IPv4 subnet ranges .
For wsfc-1 and wsfc-2 only:
Click Use the following DNS server addresses .
For Preferred DNS server , enter "10.0.0.6".
Close all the dialog boxes.
You lose RDP connectivity because these changes reset the virtual network
adapter for the VM instance.
Close the RDP session and then reconnect to the instance.
If a dialog box from the previous step is still open, close it.
In the properties section for the local server, verify that the
Ethernet setting reflects the local server IP address ( 10.0.0.4 ,
10.0.0.5 , or 10.0.0.6 ). If it doesn't, re-open the Internet
Protocol Version 4 (TCP/IPv4) dialog box and update the setting.
This is a good time to take snapshots of wsfc-1 and wsfc-2 .
Setting up Active Directory
Now, set up the domain controller.
Use RDP to connect to the server named wsfc-dc .
Using the Windows Computer Management desktop app, set a password for the
local Administrator account .
Enable the local Administrator account.
Follow the steps in the Microsoft instructions below to set up the domain
controller, with these additional notes. You can use default values for most
settings.
Select the DNS Server role check box. This step is not specified in the
instructions.
Select the Restart the destination server automatically if
required check box.
Promote the file server to a domain controller.
During the Add a new forest step, name your domain "WSFC.TEST".
Set the NetBIOS domain name to "WSFC" (the default).
Microsoft instructions
This is a good time to take a snapshot of wsfc-dc .
Create the domain user account
It can take some time for wsfc-dc to restart. Before joining servers to the
domain, use RDP to sign in to wsfc-dc to validate that the domain controller
is running.
You need a domain user that has administrator privileges for the cluster
servers. Follow these steps:
On the domain controller ( wsfc-dc ) click Start , and then type
dsa to find and open the Active Directory Users and Computers app.
Right-click WSFC.TEST , point to New , and then click User .
For the Full name and the User logon name , enter cluster-admin .
Click Next .
Enter and confirm a password for the user. Select password options in the
dialog box. For example, you can set the password to never expire.
Confirm the settings and then click Finish .
Make cluster-admin an administrator on wsfc-dc :
Right-click cluster-admin and select Add to a group .
Type Administrators , and click OK .
This tutorial uses the WSFC.TEST\cluster-admin account as an administrator
account wherever such an account is required. In a production system, follow
your usual security practices for allocating accounts and permissions. For more
information, see
Overview of Active Directory accounts needed by a failover cluster .
Join the servers to the domain
Add the two cluster-node servers to the WSFC.TEST domain. Perform the
following steps on each cluster-node server ( wsfc-1 and wsfc-2 ):
In Server Manager > Local Server , in the Properties pane, click
WORKGROUP .
Click Change .
Select Domain and then enter "WSFC.TEST".
Click OK .
Provide the credentials for WSFC.TEST\cluster-admin to join the domain.
Click OK .
Close the dialog boxes and follow the prompts to restart the server.
In Server Manager , make cluster-admin an administrator on wsfc-1 and
wsfc-2 . Alternatively, you can manage administrative privileges by
using a group policy.
On the Tools menu, select Computer Management > Local Users
and Groups > Groups > Administrators , and then click Add .
Enter "cluster-admin" and the click Check names .
Click OK .
This is a good point to take snapshots of all three VMs.
Setting up failover clustering
Reserve an IP address for the cluster in Compute Engine
When you create the failover cluster, you assign an IP address to create an administrative access point. In a production environment, you might
use an IP address from a separate subnet.
However, in this tutorial you reserve an IP address from the subnet you
already created. Reserving the IP address prevents conflicts with other IP
assignments.
Open a terminal on a host VM or open Cloud Shell.
Go to Cloud Shell
Reserve an IP address. For this tutorial, use 10.0.0.8 :
gcloud compute addresses create cluster-access-point --region [YOUR_REGION] --subnet wsfcnetsub1 --addresses 10.0.0.8
To confirm the reservation of the IP address:
gcloud compute addresses list
Create the cluster
To create and configure the failover cluster:
Use RDP to connect wsfc-1 and wsfc-2 .
Follow the steps in the Microsoft instructions below, with these additional
notes:
Install the Failover Clustering feature on wsfc-1 and wsfc-2 . Don't
install the Failover Clustering feature on wsfc-dc .
Run the Failover Cluster Manager app as the domain user
WSFC.TEST\cluster-admin . Otherwise, you might encounter permissions
issues.
It's a good idea to always run Failover Cluster Manager this way or to
connect to a server as cluster-admin to ensure you have the required
permissions.
Add wsfc-1 and wsfc-2 to the cluster as nodes.
When validating the configuration:
On the Testing Options ​ page, select Run only tests I
select ​, ​and then click Next​ .
On the Test Selection ​ page, clear Storage because the
Storage​ option will fail when running on Compute Engine (as it
would for separate standalone physical servers).
Common issues you might encounter during cluster validation include:
Only one network interface between replicas . You can
ignore this one, because it doesn't apply in a cloud-based setup.
Windows Updates not the same on both replicas . If you
configured your Windows instances to apply updates
automatically, one of the nodes might
have applied updates that the other hasn't downloaded yet. You should
keep the servers in identical configurations.
Pending reboot . You've made changes to one of the servers,
and it needs a reboot to apply. Don't ignore this one.
The servers do not all have the same domain role . You can
ignore this one.
The servers are not all in the same Organizational Unit (OU) .
This tutorial doesn't use an OU at all, but in a production system
consider putting your cluster in its own OU. The Microsoft
instructions describe this best practice.
Unsigned drivers were found . You can ignore this one.
On the Summary page, you can select Create the cluster now using
the validated nodes to continue on to create the cluster, rather than
closing the wizard and reopening it.
In the Create Cluster Wizard, on the Access point page:
Name your cluster "testcluster".
In the Address field, enter the IP address that you reserved earlier, 10.0.0.8 .
Microsoft instructions
Add the cluster administrator
Adding a domain account as an administrator for the cluster enables you to
perform actions on the cluster from tools such as Windows PowerShell. Add the
cluster-admin domain account as a cluster admin.
On the cluster node that hosts the cluster resources, in Failover Cluster
Manager, select your cluster in the left pane and then click Properties
in the right pane.
Select the Cluster Permissions tab.
Click Add and then add cluster-admin .
With cluster-admin selected in the Group or user names list , select
Full Control in the Permissions pane.
Click Apply and OK .
This is a good point to take snapshots.
Creating the file share witness
You have a two-node failover cluster, but the cluster uses a voting mechanism to
decide which node should be active. To achieve a quorum, you can add a
file share witness.
This tutorial simply adds a shared folder to the domain controller server.
If this server were to go offline at the same time one of the cluster nodes is
restarting, the entire cluster could stop working because the remaining server
can't vote by itself. For this tutorial, the assumption is that the GCP
infrastructure features, such as
Live Migration
and
automatic restart ,
provide enough reliability to keep the shared folder alive.
If you want to create a more-highly-available file share witness, you have these
options:
Use a cluster of Windows Servers to provide the share by using
Storage Spaces Direct .
This Windows Server 2016 feature can provide a highly available share for
the quorum witness. For example, you could create a cluster for your Active
Directory domain controller to provide both highly available domain
services and provide the file share witness at the same time.
Use data replication software, such as SIOS Datakeeper, with Windows
Failover Server Clustering for synchronous or asynchronous replication.
Follow these steps to create the file share for the witness:
Connect to wsfc-dc . This server hosts the file share.
In Explorer, browse to the C drive.
In the title bar, click the New Folder button.
Name the new folder shares .
Double-click the shares folder to open it.
Add a new folder and name it clusterwitness-testcluster .
Configure sharing for the file share witness
You must set permissions on the file share witness folder to enable the cluster
to use it.
From Explorer, right-click the clusterwitness-testcluster folder and
select Properties .
On the Sharing tab, click Advanced Sharing .
Select Share this folder .
Click Permissions and then click Add .
Click Object Types , select Computers , and then click OK .
Add the machine account testcluster$ .
Give Full Control permissions to testcluster$ .
Click Apply and then close all the dialog boxes.
Add the file share witness to the failover cluster
Now, configure the failover cluster to use the file share witness as a quorum
vote.
On the computer that hosts the cluster resources ( wsfc-1 ), open
the Failover Cluster Manager.
In the left pane, right-click the name of the cluster
( testcluster.WSFC.TEST ) then point to More Actions , and then click
Configure Cluster Quorum Settings .
On the Select Quorum Configuration Option panel, choose
Select the quorum witness .
On the Select Quorum Witness panel , choose
Configure a file share witness .
For the File Share Path , enter the path to the shared folder, such as
\\wsfc-dc\clusterwitness-testcluster .
Confirm the settings and then click Finish .
Testing the failover cluster
Your Windows Server failover cluster should now be working. You can test
manually moving cluster resources between your instances. You're not done yet,
but this is a good checkpoint to validate that everything you've done so far is
working.
On wsfc-1 , note the name of the Current Host Server in Failover
Cluster Manager.
Run Windows PowerShell as cluster-admin .
In PowerShell, run the following command to change the current host server:
Move-ClusterGroup -Name "Cluster Group"
You should see the name of the current host server change to the other VM.
If this didn't work, review the previous steps and see if you missed anything.
The most common issue is a missing firewall rule that is
blocking access on the network. Refer to the
Troubleshooting
section for more issues to check.
Otherwise, you can now move on to setting up the internal load balancer, which
is required in order to route network traffic to the current host server in the
cluster.
This is a good time to take snapshots.
Adding a role to the failover cluster
In Windows failover clustering, roles host clustered workloads. You can use a
role to specify in the cluster the IP address that your application uses. For
this tutorial, you add a role for the test workload, which is the Internet
Information Services (IIS) web server, and assign an IP address to the role.
Reserve an IP address for the role in Compute Engine
To prevent IP addressing conflicts within your subnet in Compute Engine, reserve the IP address for the role.
Open a terminal on a host VM or open Cloud Shell.
Go to Cloud Shell
Reserve an IP address. For this tutorial, use 10.0.0.9 :
gcloud compute addresses create load-balancer-ip --region [YOUR_REGION] --subnet wsfcnetsub1 --addresses 10.0.0.9
To confirm the reservation of the IP address:
gcloud compute addresses list
Add the role
Follow these steps:
In Failover Cluster Manager, in the Actions pane, select
Configure Role .
In the Select Role page, select Other Server .
In the Client Access Point page, enter the name IIS .
Set the address to 10.0.0.9 .
Skip Select Storage and Select Resource Types .
Confirm the settings and then click Finish .
Creating the internal load balancer
Create and configure the internal load balancer, which is required in order
to route network traffic to the active cluster host node. You will use the
Google Cloud console, because the user interface gives you a good view into
how internal load balancing is organized.
You will also create a Compute Engine instance group for each zone
in the cluster, which the load balancer uses to manage the cluster nodes.
Create the instance groups
Create an instance group in each zone that contains
a cluster node and then add each node to the instance group in its zone.
Don't add the domain controller wsfc-dc to an instance group.
Create an instance group for each zone in the cluster, replacing [ZONE_1]
with the name of your first zone and [ZONE_2] with the name of your second:
gcloud compute instance-groups unmanaged create wsfc-group-1 --zone=[ZONE_1]
gcloud compute instance-groups unmanaged create wsfc-group-2 --zone=[ZONE_2]
Add the server in each zone to the instance group for that zone:
gcloud compute instance-groups unmanaged add-instances wsfc-group-1 --instances wsfc-1 --zone [ZONE_1]
gcloud compute instance-groups unmanaged add-instances wsfc-group-2 --instances wsfc-2 --zone [ZONE_2]
Confirm that your instance groups were created and that each group
contains one instance:
gcloud compute instance-groups unmanaged list
NAME ZONE NETWORK NETWORK_PROJECT MANAGED INSTANCES
wsfc-group-1 us-central1-a wsfcnet exampleproject No 1
wsfc-group-2 us-central1-b wsfcnet exampleproject No 1
Create the load balancer
Start your configuration
In the Google Cloud console, go to the Load balancing page.
Go to Load
balancing
Click Create load balancer .
For Type of load balancer , select Network Load Balancer
(TCP/UDP/SSL) and click Next .
For Proxy or passthrough , select Passthrough load
balancer and click Next .
For Public facing or internal , select Internal and
click Next .
Click Configure .
Basic configuration
For Name , enter "wsfc-lb".
Select your current region.
Select wsfcnet for Network .
Configure the backend
Recall that the GCP internal load balancer uses a periodic health check to
determine the active node. The health check pings the Compute Engine cluster
host agent that is running on the active cluster node. The health check payload
is the IP address of the application, which is represented by the clustered
role. The agent responds with a value of 1 if the node is active or 0 if it is
not.
Click Backend configuration .
Under Backends , add each instance group that you created by selecting
its name and clicking Done .
Create a health check.
For Name , enter "wsfc-hc".
Accept the default Protocol setting of TCP and change the
Port to "59998" for cluster host agent responses.
For Request , enter "10.0.0.9".
For Response , enter "1".
For Check interval , enter "2".
For Timeout enter "1".
Click Save and continue .
Configure the frontend
The frontend configuration creates a forwarding rule that defines how the load
balancer handles incoming requests. For this tutorial, to keep it simple, you
will test the system by making requests between the VMs in the subnetwork.
In your production system, you probably want to open the system up to external
traffic, such as Internet traffic. To do this, you can
create a bastion host
that accepts external traffic and forwards it to your internal network. Using a
bastion host is not covered in this tutorial.
In the center pane, click Frontend configuration .
For Name , enter "wsfc-lb-fe".
Select your subnetwork ( wsfcnetsub1 ).
For Internal IP , select load-balancer-ip (10.0.0.9) . This is the same
IP address that you set for the role.
For Ports , enter "80".
Click Done .
Review and finalize
To see a summary of the internal load balancer settings, in the center
pane, click Review and finalize . The summary appears in the right pane.
Click Create . It takes a moment to create the load balancer.
Create firewall rules for the health check
You might have noticed that the Google Cloud console notified you that the
health-check system would require a firewall rule to enable the health checks to
reach their targets. In this section, you set up the firewall rule.
Note: The documentation about
setting up an internal load balancer
instructs you to create a firewall rule for the load balancer itself. For this
tutorial, this is not needed because you already
created a rule
that allows all traffic between nodes on the subnet, and the load balancer is
operating within this CIDR range and using only allowed ports.
In the Google Cloud console, go to the Cloud Shell .
Go to Cloud Shell
Run the following command to create the firewall rule:
gcloud compute firewall-rules create allow-health-check --network wsfcnet --source-ranges 130.211.0.0/22,35.191.0.0/16 --allow tcp:59998
Open the Windows Firewall
On each cluster node, wsfc-1 and wsfc-2 , create a firewall rule in the
Windows firewall to allow the load balancer to access each Windows system.
Open the Windows Firewall with Advanced Security app.
In the left navigation pane, select Inbound Rules .
In the right navigation pane, select New Rule .
On the Rule Type panel, select Custom as the rule type and click Next .
On the Program panel, accept the default and click Next .
On the Protocol and Ports panel:
In the Protocol type: field, select TCP .
In the Local port: field, select Specific Ports and enter
59998 .
On the Scope panel, under Which remote IP addresses does this rule
apply to :
Select These IP addresses: .
Add each of the following IP address to the This IP address or subnet
field by clicking Add :
130.211.0.0/22
35.191.0.0/16
Click Next .
On the Action panel, accept Allow the connection and click Next .
On the Profile panel, accept the defaults and click Next .
Specify a name for the firewall rule and click Finish .
Validating the load balancer
After your internal load balancer is running, you can inspect its status to
validate that it can find a healthy instance, and then test failover again.
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click the name of the load balancer ( wsfc-lb ).
In the Backend section of the summary, you should see the instance
groups listed.
In the following image from the details page of the wsfc-lb load balancer,
instance group wsfc-group-1 contains the active
node, as indicated by 1 / 1 in the Healthy column. Instance group
wsfc-group-2 contains the inactive node, as indicated by 0 / 1 .
If both instance groups show 0 / 1 , the load balancer might still be
syncing with the nodes. Sometimes, you need to do at least one failover
action to get the load balancer to find the IP address.
In Failover Cluster Manager, expand the cluster name and click on Roles .
In the Owner Node column, note the server name for the IIS role.
Start a failover by right-clicking the IIS role and selecting
Move > Best Possible Node . This action moves the
role to the other node, as shown in the Owner Node column.
Wait until the Status shows Running .
Return to the Load balancer details page, click Refresh , and verify
that the 1 / 1 and 0 / 1 values in the Healthy column
have switched instance groups.
Tip: You can use the gcloud CLI to check which instance is healthy, where
[REGION] is your region:
gcloud compute backend-services get-health wsfc-lb --region=[REGION]
The output looks like the following:
backend: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-a/instanceGroups/wsfc-group-1
status:
healthStatus:
- healthState: HEALTHY
instance: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-a/instances/wsfc-1
ipAddress: 10.0.0.4
port: 80
kind: compute#backendServiceGroupHealth
---
backend: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-b/instanceGroups/wsfc-group-2
status:
healthStatus:
- healthState: UNHEALTHY
instance: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-b/instances/wsfc-2
ipAddress: 10.0.0.5
port: 80
kind: compute#backendServiceGroupHealth
Installing your application
Now that you have a cluster, you can set up your
application on each node and configure it for running in a clustered
environment.
For this tutorial, you need to set up something that can demonstrate that
the cluster is really working with the internal load balancer. Set up IIS on
each VM to serve a simple web page.
You're not setting up IIS for HA in the cluster. You are creating separate
IIS instances that each serve a different web page. After a failover, the web
server serves its own content, not shared content.
Setting up your application or IIS for HA is beyond the scope of this
tutorial.
Set up IIS
On each cluster node,
install IIS .
On the Select role services page, be sure that Default Document
is selected under Common HTTP Features .
On the Confirmation page, select the checkbox that enables
automatic restarting of the destination server.
Validate that each web server is working.
Use RDP to connect to the VM named wsfc-dc .
In Server Manager, click Local Server in the navigation pane on the
left side of the window.
in the Properties section at the top, turn off
IE Enhanced Security Configuration .
Open Internet Explorer.
Browse to the IP address of each server:
http://10.0.0.4/
http://10.0.0.5/
In each case, you see the Welcome page, which is the default IIS web
page.
Edit the default web pages
Change each default web page so you can easily see which server is currently
serving the page.
Use RDP to connect to the VM named wsfc-1 .
Run Notepad as administrator.
Open C:\inetpub\wwwroot\iisstart.htm in Notepad. Remember to browse for
All Files , not just text files.
In the <title> element, change the text to the name of the current
server. For example:
<title>wsfc-1</title>
Save the HTML file.
Repeat these steps for wsfc-2 , setting the <title> element to wsfc-2 .
Now, when you view a web page served from one of these servers, the name of the
server appears as the title in the Internet Explorer tab.
Test the failover
Use RDP to connect to the VM named wsfc-dc .
Open Internet Explorer.
Browse to the IP address of the load balancer role:
http://10.0.0.9/
You see the Welcome page with the name of the current server
displayed in the tab title.
Stop the current server to simulate a failure. In Cloud Shell, run the
following command, replacing
[INSTANCE_NAME] with the name of the current server you saw in the previous
step, such as wsfc-1 :
gcloud compute instances stop [ INSTANCE_NAME ] --zone=[ACTIVE_ZONE]
Switch to your RDP connection to wsfc-dc .
It can take a few moments for the load balancer to detect the move and
reroute the traffic.
After 30 seconds or so, refresh the page in Internet Explorer.
You should now see the name of the new active node displayed in the tab title.
For example, if you started with wsfc-1 active, you now see wsfc-2 in
the title. If you don't see the change right away or see a page-not-found error,
refresh the browser again.
Congratulations! You now have a working Windows Server 2016 failover cluster
running on GCP.
Troubleshooting
Here are some common issues you can check if things aren't working.
GCP firewall rules blocks health check
If the health check isn't working, double-check that you have a firewall rule to
enable incoming traffic from the IP addresses that the health check system uses:
130.211.0.0/22 and 35.191.0.0/16 .
Windows Firewall blocks health check
Make sure port 59998 is open in Windows Firewall on each cluster node. See
Open the Windows Firewall .
Cluster nodes using DHCP
It's important that each VM in the cluster has a static IP address. If a VM is
configured to use DHCP in Windows, change the networking settings in Windows to
make the IPv4 address match the IP address of the VM as shown in the Google Cloud console. Also set the gateway IP address to match the address of the
subnetwork gateway in the GCP VPC.
GCP network tags in firewall rules
If you use network tags in your firewall rules, be sure the correct tags are set
on every VM instance. This tutorial doesn't use tags, but if you've set them for
some other reason, they must be used consistently.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
After you finish the tutorial, you can clean up the resources that you created so that they
stop using quota and incurring charges. The following sections describe how to delete or turn off
these resources.
Deleting the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Cleaning up resources without deleting the project
If you need to keep your project, you can clean up the tutorial resources
by deleting them individually.
Deleting instances
To delete a Compute Engine instance:
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
Select the checkbox for
the instance that you want to delete.
To delete the instance, click more_vert More actions , click Delete ,
and then follow the instructions.
Deleting instance groups
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Select the checkbox for
the instance group that you want to delete.
To delete the instance group, click delete Delete .
Deleting a load balancer
To delete a load balancer:
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Select the checkbox next to the name of the load balancer you want to
delete.
Click the Delete button at the top of the page.
Deleting a VPC network
To delete a VPC network:
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the name of the network you want to delete.
Click the DELETE VPC NETWORK button at the top of the page.
Release reserved IP addresses
Use Cloud Shell to release the reserved IP addresses:
In the Google Cloud console, go to the Cloud Shell .
Go to Cloud Shell
Release the reserved IP addresses:
gcloud compute addresses delete cluster-access-point load-balancer-ip
Deleting persistent disks
To delete a persistent disk:
In the Google Cloud console, go to the Disks page.
Go to Disks
Select the checkbox next to the name of the disk you want to
delete.
Click the Delete button at the top of the page.
What's next
Tutorials about Active Directory .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
