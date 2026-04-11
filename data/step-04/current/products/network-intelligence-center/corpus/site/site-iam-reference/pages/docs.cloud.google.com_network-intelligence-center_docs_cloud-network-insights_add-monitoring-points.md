---
title: "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network Insights\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points
  title: "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\
    \ Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Cloud Network Insights
Guides
Add Monitoring Points
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Monitoring Points are lightweight software agents that execute the active
synthetic probes necessary to monitor your network and web application performance.
They are the source of all synthetic network traffic and can also be a target
of testing.
Monitoring architecture
Cloud Network Insights uses a centralized management model with Monitoring
Points.
Google Cloud project - the central control where you enable Cloud Network Insights. You use this project to do the following:
Download Monitoring Point installation packages (Docker, Helm,
OVA/QCOW2)
View the status and inventory of all your deployed Monitoring Points
Access Cloud Monitoring dashboards for metrics
Configure Alert Policies and Notification Channels in Google Cloud Observability based on logs from AppNeta
Monitoring locations - the target hosts in the environments you want to
monitor. This is where you install the Monitoring Points.
Deployment locations
When installing Monitoring Points in the monitoring locations, select critical
network segments, such as a central VPC, remote branch office, or specific cloud
region. The following environments are supported:
Google Cloud VPC networks in the same or different projects
Remote branch offices or retail locations
On-premises data centers
Other cloud environments, for example, AWS or Azure
If you need help to determine where to install Monitoring Points to target
strategic web application deployment, use VPC Flow Logs or vm_flow metrics in
a performance dashboard to understand where traffic is flowing in your network.
We don't recommend installing Monitoring Points on the project with Cloud Network Insights enabled or directly with the workloads you want to monitor.
For more information, see Best Practices or
AppNeta's Deployment Best Practices .
Supported Monitoring Point types
Cloud Network Insights supports the following Monitoring Point types.
Monitoring Point type
Best for
Link to AppNeta documentation
Containers
Docker container
Lightweight and ideal for cloud instances.
Linux VMs, Google
Compute Engine instances, or any Docker-enabled host, including
on-premises environments.
c50-Docker/Podman
Kubernetes (Helm)
Best for orchestrated environments.
Google Kubernetes Engine (GKE), Amazon EKS, Azure AKS, or on-premises Kubernetes clusters.
c50-Kubernetes (Helm)
Virtual Machines
VMware (OVA)
Deploys as a full virtual machine.
On-premises data centers
running VMware ESXi or vCenter.
v35-VMware
KVM (QCOW2)
Telco clouds or private Linux clouds.
Linux-based virtualized
environments such as OpenStack, custom Linux hypervisors.
v35-KVM
Before you begin
In addition to the Cloud Network Editor
( roles/networkmanagement.CloudNetworkInsightsEditor ) role, the deployment
environment and Monitoring Points have specific networking requirements to
ensure that the Monitoring Point can be installed successfully and communicate
back to Cloud Network Insights control plane.
Review the requirements in the following sections.
Firewall requirements
Since we recommend installing Monitoring Points behind your firewalls, you
might need to modify your firewall rules. Monitoring Points require outbound
internet access to communicate back to the Cloud Network Insights control
plane.
Protocol
Port
Description
TCP
443 (HTTPS)
Required. Connectivity to the Cloud Network Insights control plane
UDP
123 (NTP)
Required. Network Time Protocol. The Monitoring Point will fail
to connect if time is not synced
UDP/TCP
53 (DNS)
Required. Domain Name Service to resolve Cloud Network Insights endpoints
UDP
3239, 33434
Test Traffic. Required for standard Network Path monitoring
(dual-ended)
ICMP
Type 8 (echo request)
Test Traffic. Required for single-ended paths (for example, pinging
8.8.8.8).
For more information, see
Firewall Configuration from AppNeta .
Monitoring Point requirements
Review the AppNeta Monitoring Point specifications to ensure that you can
successfully deploy them.
Specifications – c50-Docker/Podman
Specifications – c50-Kubernetes (Helm)
Specifications – v35-VMware
Specifications – v35-KVM
Deploy Monitoring Points
When you're ready to deploy Monitoring Points in your network, do the
following:
Download the Monitoring Point installation bundle from Google Cloud.
Install the Monitoring Point using instructions from AppNeta.
Deploy containers (c50)
Get the installation bundles, and then install them on the target host.
Get the install bundles
Get the installation bundles and ensure that the bundle is on the target host.
Console
If you have administrator credentials to the target host or if you need to
download the installation bundle locally before transferring the file to the
target host, use the Google Cloud console.
In the Google Cloud console, navigate to Network Intelligence >
Cloud Network Insights > Monitoring Points .
Go to Cloud Network Insights
Click Add monitoring point .
In the Platform Type list, select Docker/Podman or Helm
(Kubernetes) , and then click Continue .
Enter the Hostname of the container. This is the name of the host
you're installing the Monitoring Point on.
In Download the Monitoring Point , choose how you want to download
the installation bundle.
To download the installation bundle on the target host using a terminal,
select Run a command on the host .
Click Open shell and generate token . You might
need to authorize Cloud Shell.
Press Enter to generate a token, and then copy and paste it
in the text field.
Open a terminal to your target host using administrator credentials,
and run the generated command to download the installation bundle.
The curl command is valid for one hour.
To download the installation bundle locally, select Download locally .
Click Download Monitoring Point .
Move the installation bundle to the target host.
gcloud
Use this method if your target host has Google Cloud CLI installed.
gcloud alpha network-management network-monitoring-providers \
monitoring-points download-install-script \
--network-monitoring-provider= PROVIDER_NAME --location=global \
--monitoring-point-type= MP_TYPE \
--hostname= HOST_NAME \
--output-file=compose. HOST_NAME .tar.gz
Replace the following:
PROVIDER_NAME : the provider name, external by default.
MP_TYPE : the Monitoring Point container type. Use one
of the following values:
Enter CONTAINER for Docker or Podman
Enter HELM for Helm (Kubernetes)
HOST_NAME : the name of the host you're installing the Monitoring Point on.
Install the container
Once the install bundle is on the target host, follow the instruction from
AppNeta to install the Monitoring Point.
Docker or Podman
Kubernetes (Helm)
You can't change the configuration settings for containers. If you need to
change the proxy, NTP, or timezone settings later, you delete the Monitoring
Point and add a new one.
Deploy virtual machines (v35)
Get the Monitoring Point images and then deploy them using VMware vSphere
(vCenter or ESXi) or Linux KVM (QCOW2).
Get image and configuration
You can download a zip file locally with the Monitoring Point images and
configuration files or generate a command to download the installation bundle
on the machine you're installing the Monitoring Point on.
In the Google Cloud console, navigate to Network Intelligence >
Cloud Network Insights > Monitoring Points .
Go to Cloud Network Insights
Click Add monitoring point .
In the Platform Type list, select either KVM or VMware , and
then click Continue .
Enter the Password for the virtual machine.
Choose your IP Configuration .
If the target network assigns IP addresses automatically, select
Obtain settings using DHCP .
If you want to use a static IP address, select Static IP .
Complete the following IP configuration fields. Fields are based on what
you selected for the IP Configuration .
IP Address : The IPv4 address that you want to assign to the
Monitoring Point.
Network Mask :The subnet mask (for example, 255.255.255.0).
Network Gateway : The default gateway IP address.
DNS 1 : The IPv4 address of your primary DNS servers (for
example, 8.8.8.8).
DNS 2 (optional): A backup name server to ensure
connectivity if the primary fails (for example, 1.1.1.1)
Domain name : The default DNS search domain for the Monitoring
Point.
Hostname : The unique name for this Monitoring Point.
Timezone (optional): The timezone of the virtual machine the
Monitoring Point is installed on.
NTP 1 (optional): The primary Network Time Protocol address
(IP or FQDN).
NTP 2 (optional): A backup time server used if the primary
address is unreachable.
Click Continue .
In Download the Monitoring Point , choose how you want to download
the installation bundle.
To download the installation bundle locally, select Download locally .
Click Download Monitoring Point .
For KVM : Download a ZIP file that contains an ISO file (boot/config drive).
For VMware : Download a ZIP file that contains a JSON file (deployment parameters).
Download the disk image. The available options depends on your
selected Platform Type .
Move the configuration file and the disk image to your
hypervisor management station.
To generate a command-line command to run on the host, select
Run a command on the host .
Click Open shell and generate token . You might need to authorize
Cloud Shell.
Press Enter to generate a token, and then copy and paste it
in the text field in Generate the command .
Open a terminal to your target host using administrator credentials,
and run the generated command to download the configuration files.
Download the disk image. The available options depends on your
selected Platform Type .
If necessary, move the configuration file and the disk image to your
hypervisor management station.
Deploy the Monitoring Point
Once you have the images, follow the instructions from AppNeta to deploy the
Monitoring Point.
VMware
Linux KVM (QCOW2)
After deploying the virtual machine, record the MAC Address of the primary
network adapter (eth0 or Network Adapter 1) from your hypervisor (vCenter or
KVM).
Username : admin
Default Password : The MAC address in UPPERCASE with no colons (for example,
00505681450A).
You need these credentials if you need to sign in to the Monitoring Point's
Web Administration interface to troubleshoot connectivity issues. For
more information, see AppNeta's documentation .
Configure the web proxy
If your network requires a proxy for outbound access, you must configure it
after the virtual machine is powered on.
KVM Web Proxy Configuration
VMWare Web Proxy Configuration
Verify the install
Open the Google Cloud console and navigate to Network Intelligence Center >
Cloud Network Insights . After 2–5 minutes, the Monitoring Point appears in the
table with the status Active. If it doesn't appear, see
Troubleshooting .
Remove Monitoring Points
To remove a Monitoring Point, delete it in AppNeta. For more information about
removing a Monitoring Point, see the AppNeta documentation
What's next
After you add Monitoring Points, it's time to create monitoring
policies to populate Cloud Network Insights with data.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
