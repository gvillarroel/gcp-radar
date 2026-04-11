---
title: "Set up intrusion detection and prevention service in your network \_|\_ Cloud\
  \ Next Generation Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial
  title: "Set up intrusion detection and prevention service in your network \_|\_\
    \ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Set up intrusion detection and prevention service in your network
Stay organized with collections
Save and categorize content based on your preferences.
Intrusion detection and prevention service
monitors your Google Cloud workload traffic for any malicious activity and
takes preemptive actions to prevent it. To enable this service on your network,
you must set up multiple Cloud Next Generation Firewall components. This tutorial describes
the end-to-end workflow to configure intrusion detection and prevention service in your network.
Objectives
This tutorial shows you how to complete the following tasks:
Create a Virtual Private Cloud (VPC) network with two subnets.
Create a server virtual machine (VM) instance in the first subnet of the
VPC network and install the Apache server on the VM.
Create a client VM instance in the second subnet of the VPC
network.
Create a security profile and a security profile group.
Create a firewall endpoint and associate it with the VPC
network.
Add a global network firewall policy with the following firewall rules:
A firewall rule to enable Identity-Aware Proxy (IAP) access to the VM
instances in the VPC network.
A firewall rule to direct all ingress traffic for Layer 7 inspection.
Verify whether malicious traffic to the server VM instance is blocked.
Clean up the resources.
The following diagram shows the high-level architecture of the deployment setup
in this tutorial. The firewall policy fw-policy-ips on VPC
vpc-ips , redirects the ingress traffic to the firewall endpoint in zone
asia-southeast1-a . The firewall endpoint endpoint-ips inspects the traffic
for any threats. If any threat is detected, it applies the preventive actions by
using the directions specified in the security profile sec-profile-ips .
Intrusion detection and prevention service in a custom VPC network (click to enlarge).
Costs
There is a cost associated with creating the firewall endpoints. For pricing
details, see Cloud Next Generation Firewall pricing .
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
Enable the
Compute Engine API for your project.
Enable the Network Security API for your project.
Enable the Identity-Aware Proxy API for your project.
Have the Compute Network Admin ( roles/compute.networkAdmin ) IAM role on your organization.
If you prefer to work from the command line, install the Google Cloud CLI.
For conceptual and installation information about the tool, see gcloud CLI overview .
Note: If you haven't run the gcloud CLI previously, first
run
gcloud init to initialize
your gcloud CLI directory.
Create a custom VPC network with subnets
In this section, you create a custom mode VPC network with two
IPv4 subnets.
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click Create VPC network .
For Name , enter vpc-ips .
For Description , enter VPC network to set up intrusion detection and prevention service .
For Subnet creation mode , select Custom .
In the New subnet section, specify the following configuration parameters for a subnet:
Name : subnet-ips-server
Region : asia-southeast1
IPv4 range : 10.0.0.0/24
Click Done .
Click Add subnet and specify the following configuration parameters:
Name : subnet-ips-client
Region : us-central1
IPv4 range : 192.168.10.0/24
Click Done .
Click Create .
gcloud
To create a VPC network, run the following command:
gcloud compute networks create vpc-ips \
--subnet-mode custom \
--description "VPC network to set up intrusion detection and prevention service."
In the Authorize cloud shell dialog, click Authorize .
To create a subnet, run the following command:
gcloud compute networks subnets create subnet-ips-server \
--network vpc-ips \
--region asia-southeast1 \
--range 10.0.0.0/24
To create another subnet, run the following command:
gcloud compute networks subnets create subnet-ips-client \
--network vpc-ips \
--region us-central1 \
--range 192.168.10.0/24
Create a Cloud Router and a Cloud NAT gateway
Before you create client and server Linux VM instances without public IPv4 addresses in
the next section, you must create a Cloud Router and a Cloud NAT gateway,
which enables these VMs to access the public internet.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click Get started or Create Cloud NAT gateway .
For Gateway name , enter gateway-ips .
For NAT type , select Public .
In the Select Cloud Router section, specify the following configuration parameters:
Network : vpc-ips
Region : asia-southeast1
Cloud Router : Create new router .
For Name , enter router-ips .
Click Create .
Click Create .
gcloud
To create a Cloud Router, run the following command:
gcloud compute routers create router-ips \
--network=vpc-ips \
--region=asia-southeast1
To create a Cloud NAT gateway, run the following command:
gcloud compute routers nats create gateway-ips \
--router=router-ips \
--region=asia-southeast1 \
--auto-allocate-nat-external-ips \
--nat-all-subnet-ip-ranges
Create VM instances
In this section, you create server and client VM instances.
Create the server VM instance
In this section, you create a VM instance in the subnet subnet-ips-server and
install the Apache server on it.
Console
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter vm-server-ips .
For Region , select asia-southeast1 (Singapore) .
For Zone , select asia-southeast1-a .
In the navigation menu, click OS and Storage .
In the Operating system and storage section, verify that Image is Debian GNU/Linux 12 (bookworm) . If it isn't, click Change and set the Operating system field to Debian and the Version field to Debian GNU/Linux 12 (bookworm) .
In the navigation menu, click Networking .
In the Network interfaces section, click default and
specify the following configuration parameters:
Network : vpc-ips
Subnetwork : subnet-ips-server IPv4 (10.0.0.0/24)
External IPv4 address : None
Click Done .
In the navigation menu, click Advanced and enter the following script in the Startup script field:
#! /bin/bash
apt update
apt -y install apache2
cat <<EOF > /var/www/html/index.html
<html><body><p>Hello world.</p></body></html>
EOF
Click Create .
Make a note of the External IP address of the server VM after it is created.
gcloud
To create the server VM, run the following command:
gcloud compute instances create vm-server-ips \
--network vpc-ips \
--zone asia-southeast1-a \
--subnet subnet-ips-server \
--stack-type IPV4_ONLY \
--image-project debian-cloud \
--image-family debian-11 \
--metadata=startup-script='#! /bin/bash
apt update
apt -y install apache2
cat <<EOF > /var/www/html/index.html
<html><body><p>Hello World.</p></body></html>
EOF'
Make a note of the external IP address of the VM in the returned status.
Create the client VM instance
In this section, you create a VM instance in the subnet subnet-ips-client .
Console
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter vm-client-ips .
For Region , select us-central1 (Iowa) .
For Zone , select us-central1-a .
In the navigation menu, click Networking .
In the Network interfaces section, click default and
specify the following configuration parameters:
Network : vpc-ips
Subnetwork : subnet-ips-client IPv4 (192.168.10.0/24)
Click Done .
Click Create .
gcloud
To create the client VM, run the following command:
gcloud compute instances create vm-client-ips \
--network vpc-ips \
--zone us-central1-a \
--subnet subnet-ips-client \
--stack-type IPV4_ONLY
Create a threat prevention security profile
In this section, you create a security profile of type threat-prevention in
your organization. To view the permissions required to create a security
profile, see Create a threat prevention security profile .
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
In the project selector menu, select your organization.
Select the Security profiles tab.
Click Create profile .
For Name , enter sec-profile-ips .
For Description , enter Security profile to set up intrusion detection and prevention service .
To create a security profile for Cloud Next Generation Firewall Enterprise, in the Purpose
section, select Cloud NGFW Enterprise .
To create a threat prevention security profile, for Type ,
select Threat prevention .
Click Create .
gcloud
To create a security profile, run the following command:
gcloud network-security security-profiles \
threat-prevention \
create sec-profile-ips \
--organization ORGANIZATION_ID \
--location global \
--project PROJECT_ID \
--description "Security profile to set up intrusion detection and prevention service."
Replace the following:
ORGANIZATION_ID : the organization where the
security profile is created.
PROJECT_ID : a project ID to use for quotas and
access restrictions on the security profile.
Create a security profile group
In this section, you create a security profile group to include the security
profile that you created in the preceding section. To view the permissions
required to create a security profile group,
see Permissions required for this task .
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
In the project selector menu, select your organization.
Select the Security profile groups tab.
Click Create profile group .
For Name , enter sec-profile-group-ips .
For Description , enter Security profile group to set up intrusion detection and prevention service .
To create a security profile group for Cloud Next Generation Firewall Enterprise, in the
Purpose section, select Cloud NGFW Enterprise .
In the Threat prevention profile list, select sec-profile-ips .
Click Create .
gcloud
To create a security profile group, run the following command:
gcloud network-security security-profile-groups \
create sec-profile-group-ips \
--organization ORGANIZATION_ID \
--location global \
--project PROJECT_ID \
--threat-prevention-profile \
organizations/ ORGANIZATION_ID /locations/global/securityProfiles/sec-profile-ips \
--description "Security profile group to set up intrusion detection and prevention service."
Replace the following:
ORGANIZATION_ID : the organization where the security
profile group is created.
PROJECT_ID : a project ID to use for quotas and access
restrictions on the security profile group.
Create a firewall endpoint
In this section you create a firewall endpoint in a specific zone. To view the
permissions required to create a firewall endpoint,
see Permissions required for this task .
Note : When you create a firewall endpoint, the state of
the firewall endpoint is set to Creating . After the firewall endpoint is
ready, the state changes to Active .
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
Click Create .
In the Region list, select asia-southeast1 (Singapore) .
In the Zone list, select asia-southeast1-a .
For Name , enter endpoint-ips .
In the Billing project list, select the Google Cloud project that you want to
use for billing the firewall endpoint.
Click Create .
gcloud
To create a firewall endpoint, run the following command:
gcloud network-security firewall-endpoints \
create endpoint-ips \
--organization ORGANIZATION_ID \
--zone asia-southeast1-a \
--billing-project PROJECT_ID
Replace the following:
ORGANIZATION_ID : the organization where the firewall
endpoint is created.
PROJECT_ID : a project ID to use for the billing of the
firewall endpoint.
Create a firewall endpoint association
In this section, you associate the firewall endpoint to the VPC
network that you created in the preceding step.
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the vpc-ips network to show its VPC network details page.
Select the Firewall endpoints tab.
Click Create endpoint association .
In the Region list, select asia-southeast1 .
In the Zone list, select asia-southeast1-a .
In the Firewall endpoint list, select endpoint-ips .
Click Create .
gcloud
To create a firewall endpoint association, run the following command:
gcloud network-security firewall-endpoint-associations \
create endpoint-association-ips \
--endpoint organizations/ ORGANIZATION_ID /locations/asia-southeast1-a/firewallEndpoints/endpoint-ips \
--network vpc-ips \
--zone asia-southeast1-a \
--project PROJECT_ID
Replace the following:
ORGANIZATION_ID : the organization where the firewall
endpoint is created.
PROJECT_ID : a project ID where the association is created.
Create a global network firewall policy
In this section, you create a global network firewall policy that contains the
following two firewall rules:
An ingress firewall rule with priority 100 to allow TCP traffic to ports
3389 and 22 . This rule enables IAP access to the VM
instances in the VPC network.
An ingress firewall rule with priority 200 to perform Layer 7 inspection on
the incoming traffic to the server VM in a specific zone.
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the project selector list, select your project within your organization.
Click Create firewall policy .
For Policy name , enter fw-policy-ips .
For Policy type , select VPC policy .
For Deployment scope , select Global .
Click Continue , and then click Create firewall rule .
In the Priority field, enter 100 .
For Direction of traffic , select Ingress .
For Action on match , select Allow .
For Logs , select Enabled .
For the Source filter, select IPv4 , and then in the IP ranges
field enter 35.235.240.0/20 .
In the Protocols and ports section, select Specified protocols and ports .
Select TCP , and for Ports , enter 22,3389 .
Click Create .
Click Create firewall rule .
In the Priority field, enter 200 .
For Direction of traffic , select Ingress .
For Action on match , select Apply security profile group .
For Logs , select Enabled .
In the Security profile group list, select sec-profile-group-ips .
In the Destination filter, select IPv4 , and then in the IP ranges
field enter the external IP address of the server VM
that you created in the Create the server VM instances
section.
Click Create .
Click Continue to proceed to the Add mirroring rules section.
Click Continue again to open the Associate policy with networks
section.
Select vpc-ips network.
Click Associate .
Click Create .
gcloud
To create a global network firewall policy, run the following command:
gcloud compute network-firewall-policies \
create fw-policy-ips \
--global \
--project PROJECT_ID
Replace the following:
PROJECT_ID : a project ID where the global network
firewall policy is created.
To add the firewall rule to enable IAP access, run the following command:
gcloud compute network-firewall-policies rules create 100 \
--firewall-policy fw-policy-ips \
--direction INGRESS \
--action ALLOW \
--src-ip-ranges 35.235.240.0/20 \
--layer4-configs tcp:22, tcp:3389 \
--global-firewall-policy \
--enable-logging
To add the firewall rule to enable Layer 7 inspection for threat prevention
and detection, run the following command:
gcloud compute network-firewall-policies rules create 200 \
--direction INGRESS \
--firewall-policy fw-policy-ips \
--action apply_security_profile_group \
--dest-ip-ranges SERVER_VM_IP \
--layer4-configs tcp:0-65535 \
--global-firewall-policy \
--security-profile-group \
//networksecurity.googleapis.com/organizations/ ORGANIZATION_ID \
/locations/global/securityProfileGroups/sec-profile-group-ips \
--enable-logging
Replace the following:
SERVER_VM_IP : the external IP address of the
server VM that you created in the
Create the server VM instances section.
ORGANIZATION_ID : the organization where the secure
profile group is created.
To associate the firewall policy with the VPC network, run the
following command:
gcloud compute network-firewall-policies associations create \
--firewall-policy fw-policy-ips \
--network vpc-ips \
--name fw-pol-association-ips \
--global-firewall-policy \
--project PROJECT_ID
Replace the following:
PROJECT_ID : the project ID where the
VPC association is created.
Test the setup
In this section, you test the setup by generating traffic that is
intercepted by the endpoint, and the global network firewall policy is applied
to perform Layer 7 inspection.
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
From the External IP column of the vm-server-ips VM, copy the
external IP address of the VM.
In the Connect column of the vm-client-ips VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the
connection to establish.
To verify whether a non-threat request isn't blocked, run the following
command:
curl EXTERNAL_IP -m 2
Replace EXTERNAL_IP with the external IP of the
vm-server-ips VM.
The expected response message is as follows:
<!doctype html><html><body><h1>Hello World!</h1></body></html>
To verify that a malicious request is blocked, run the following command.
This command sends a request to access the password file, which is
forbidden.
curl -m 2 EXTERNAL_IP :80/cgi-bin/../../../../bin/cat%20/etc/passwd/
Replace EXTERNAL_IP with the external IP of
vm-server-ips VM.
A Connection timed out message is expected because the firewall endpoint
detects the threat in the request and blocks the packet.
Close the SSH-in-browser dialog.
gcloud
To connect to the vm-client-ips VM, run the following command:
gcloud compute ssh vm-client-ips \
--zone=us-central1-a \
--tunnel-through-iap
When prompted, press Y to confirm, and then press Enter .
Note: While the SSH to the vm-client-ips VM is
connected, ignore any warning messages that you see.
To verify whether a non-threat request isn't blocked, run the following command:
curl EXTERNAL_IP -m 2
Replace EXTERNAL_IP with the external IP of the
vm-server-ips VM.
The expected response message is as follows:
<!doctype html><html><body><h1>Hello World!</h1></body></html>
To verify that a malicious request is blocked, run the following command:
curl -m 2 EXTERNAL_IP :80/cgi-bin/../../../../bin/cat%20/etc/passwd/
Replace EXTERNAL_IP with the external IP of the
vm-server-ips VM.
A Connection timed out message is expected because the firewall endpoint
detects the threat in the request and blocks the packet.
To close the SSH-in-browser , enter exit .
View the threat logs
In the Google Cloud console, go to the Threats page.
Go to Threats
If necessary, select your Google Cloud project.
In the Threat section, you can see the logs entry for the threat
detected on your vpc-ips network.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, either delete the project that contains the resources,
or keep the project and delete the individual resources.
In this section, you delete the resources created in this tutorial.
Delete the firewall endpoint association
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the vpc-ips network to show its VPC network details page.
Select the Firewall endpoint tab. The tab shows a list of configured
firewall endpoint associations.
Select the checkbox next to endpoint-ips , and then click Delete .
Click Delete again to confirm.
gcloud
To delete the firewall endpoint association, run the following command:
gcloud network-security firewall-endpoint-association \
delete endpoint-ips \
--zone asia-southeast1-a
Delete the firewall endpoint
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
Select endpoint-ips , and then click Delete .
Click Delete again to confirm.
gcloud
To delete the firewall endpoint, run the following commands:
gcloud network-security firewall-endpoints delete endpoint-ips \
--organization ORGANIZATION_ID \
--zone asia-southeast1-a
Replace the following:
ORGANIZATION_ID : the organization where the endpoint
is created.
Delete the global network firewall endpoint policy
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the project selector menu, select your project that contains the policy.
Click fw-policy-ips .
Click the Associations tab.
Select all associations.
Click Remove Associations .
After all associations are removed, click Delete .
gcloud
To remove the association between firewall policy and VPC
network, run the following command:
gcloud compute network-firewall-policies associations delete \
--name fw-pol-association-ips \
--firewall-policy fw-policy-ips \
--global-firewall-policy
Note: If you set up the association between the firewall policy and the
VPC network through Google Cloud console, don't
use the gcloud CLI command to remove the association.
If you can't remember how you created the association or get the
The network firewall policy does not have an association with pol-association-fw-rules
error when you run the command, use the Google Cloud console to
remove the association.
Delete the firewall policy.
gcloud compute network-firewall-policies delete fw-policy-ips --global
When prompted, press Y to confirm, and then press Enter .
Delete the security profile group
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profile groups tab.
Select sec-profile-group-ips , and then click Delete .
Click Delete again to confirm.
gcloud
To delete the security profile group, run the following command:
gcloud network-security security-profile-groups \
delete sec-profile-group-ips \
--organization ORGANIZATION_ID \
--location global
Replace the following:
ORGANIZATION_ID : the organization where the security
profile group is created.
Delete the security profile
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
Select sec-profile-ips , and then click Delete .
Click Delete again to confirm.
gcloud
To delete the security profile, run the following command:
gcloud network-security security-profiles threat-prevention \
delete sec-profile-ips \
--organization ORGANIZATION_ID \
--location global
Replace the following:
ORGANIZATION_ID : the organization where the security
profile is created.
Delete the VMs
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Select the checkboxes of both the vm-client-ips and
vm-server-ips VMs.
Click Delete .
In the Delete 2 instances? dialog, click Delete .
gcloud
To delete the vm-client-ips VM, run the following command:
gcloud compute instances delete vm-client-ips \
--zone us-central1-a
When prompted, press Y to confirm, and then press Enter .
To delete the vm-server-ips VM, run the following command:
gcloud compute instances delete vm-server-ips \
--zone asia-southeast1-a
When prompted, press Y to confirm, and then press Enter .
Delete the VPC network and its subnets
Console
In the Google Cloud console, go to the VPC networks page.
Go to VM instances
In the Name column, click vpc-ips .
Click Delete VPC network .
In the Delete a network dialog, click Delete .
When you delete a VPC, its subnets are also deleted.
gcloud
To delete the subnet subnet-ips-client of the vpc-ips VPC network,
run the following command:
gcloud compute networks subnets delete subnet-ips-client \
--region us-central1
When prompted, press Y to confirm, and then press Enter .
To delete the subnet subnet-ips-server of the vpc-ips VPC network,
run the following command:
gcloud compute networks subnets delete subnet-ips-server \
--region=asia-southeast1
When prompted, press Y to confirm, and then press Enter .
To delete the vpc-ips VPC network, run the following command:
gcloud compute networks delete vpc-ips
What's next
For conceptual information about intrusion detection and prevention service, see Intrusion detection and prevention service overview .
For conceptual information about firewall policies, see Firewall policies .
For conceptual information about firewall policy rules, see Firewall policy rule components .
To determine costs, see Cloud NGFW pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
