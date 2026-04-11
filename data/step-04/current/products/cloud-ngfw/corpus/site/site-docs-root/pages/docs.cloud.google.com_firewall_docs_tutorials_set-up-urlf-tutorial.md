---
title: "Set up URL filtering service in your network \_|\_ Cloud Next Generation Firewall\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/tutorials/set-up-urlf-tutorial
  title: "Set up URL filtering service in your network \_|\_ Cloud Next Generation\
    \ Firewall \_|\_ Google Cloud Documentation"
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
Set up URL filtering service in your network
Stay organized with collections
Save and categorize content based on your preferences.
URL filtering service
lets you filter your Google Cloud workload traffic by using the domain and
Server Name Indication (SNI) information that is available in the egress
HTTP or HTTPS messages. The service protects your network against threats by
blocking communication with a configured list of malicious URLs. To enable this
service on your network, you must set up multiple Cloud Next Generation Firewall components.
This tutorial describes the end-to-end workflow to configure URL filtering
service in your network.
Objectives
This tutorial shows you how to complete the following tasks:
Create a Virtual Private Cloud (VPC) network with two subnets.
Create a server virtual machine (VM) instance in the first subnet of the
VPC network and install the Apache server on the VM.
Create a client VM instance in the second subnet of the VPC
network.
Create a URL filtering security profile along with a security profile group.
Create a firewall endpoint and associate it with the VPC
network.
Add a global network firewall policy with the following firewall rules:
A firewall rule to enable Identity-Aware Proxy (IAP) access to the VM
instances in the VPC network.
A firewall rule to direct all egress traffic for Layer 7 inspection.
Verify whether traffic to the server VM instance is allowed.
Clean up the resources.
The following diagram shows the high-level architecture of the deployment setup
in this tutorial. The firewall policy fw-policy-urlf on VPC
vpc-urlf , redirects all egress traffic to the firewall endpoint endpoint-urlf
in the zone asia-southeast1-a . The endpoint inspects the domain
and SNI information available in the egress HTTP or HTTPS messages for a match against
the URL listed in the URL filtering security profile sec-profile-urlf .
If the endpoint finds a match, it allows the traffic; otherwise, it denies it.
URL filtering service in a custom VPC network (click to enlarge).
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
For Name , enter vpc-urlf .
For Description , enter VPC network to set up URL filtering service .
For Subnet creation mode , select Custom .
In the New subnet section, specify the following configuration parameters for a subnet:
Name : subnet-server-urlf
Region : asia-southeast1
IPv4 range : 10.0.0.0/24
Click Done .
Click Add subnet and specify the following configuration parameters:
Name : subnet-client-urlf
Region : us-central1
IPv4 range : 192.168.10.0/24
Click Done .
Click Create .
gcloud
To create a VPC network, run the following command:
gcloud compute networks create vpc-urlf \
--subnet-mode custom \
--description "VPC network to set up URL filtering service."
In the Authorize cloud shell dialog, click Authorize .
To create a subnet, run the following command:
gcloud compute networks subnets create subnet-server-urlf \
--network vpc-urlf \
--region asia-southeast1 \
--range 10.0.0.0/24
To create another subnet, run the following command:
gcloud compute networks subnets create subnet-client-urlf \
--network vpc-urlf \
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
For Gateway name , enter gateway-urlf .
For NAT type , select Public .
In the Select Cloud Router section, specify the following configuration parameters:
Network : vpc-urlf
Region : asia-southeast1
Cloud Router : Create new router .
For Name , enter router-urlf .
Click Create .
Click Create .
gcloud
To create a Cloud Router, run the following command:
gcloud compute routers create router-urlf \
--network=vpc-urlf \
--region=asia-southeast1
To create a Cloud NAT gateway, run the following command:
gcloud compute routers nats create gateway-urlf \
--router=router-urlf \
--region=asia-southeast1 \
--auto-allocate-nat-external-ips \
--nat-all-subnet-ip-ranges
Create VM instances
In this section, you create server and client VM instances. To view the
permissions and roles required to create VM instances, see Required roles .
Create the server VM instance
In this section, you create a VM instance in the subnet subnet-server-urlf and
install the Apache server on it.
Console
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter vm-server-urlf .
For Region , select asia-southeast1 (Singapore) .
For Zone , select asia-southeast1-a .
In the navigation menu, click OS and Storage .
In the Operating system and storage section, verify that Image is Debian GNU/Linux 12 (bookworm) . If it isn't, click Change and set the Operating system field to Debian and the Version field to Debian GNU/Linux 12 (bookworm) .
In the navigation menu, click Networking .
In the Network interfaces section, specify the following
configuration parameters:
Network : vpc-urlf
Subnetwork : subnet-server-urlf IPv4 (10.0.0.0/24)
External IPv4 address : None
Click Done .
In the navigation menu, click Advanced and enter the following script
in the Startup script field available in the Automation section:
#! /bin/bash
apt update
apt -y install apache2
cat <<EOF > /var/www/html/index.html
<html><body><p>Hello world.</p></body></html>
EOF
Click Create .
gcloud
To create the server VM, run the following command:
gcloud compute instances create vm-server-urlf \
--network vpc-urlf \
--zone asia-southeast1-a \
--network-interface=stack-type=IPV4_ONLY,subnet=subnet-server-urlf,no-address \
--image-project debian-cloud \
--image-family debian-12 \
--metadata=startup-script='#! /bin/bash
apt update
apt -y install apache2
cat <<EOF > /var/www/html/index.html
<html><body><p>Hello World.</p></body></html>
EOF'
Follow these steps to use a domain URL for the server VM:
If you don't have a registered domain, register a domain name .
Set up your domain using Cloud DNS .
Create the client VM instance
In this section, you create a VM instance in the subnet subnet-client-urlf .
Console
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter vm-client-urlf .
For Region , select us-central1 (Iowa) .
For Zone , select us-central1-a .
In the navigation menu, click Networking .
In the Network interfaces section, specify the following
configuration parameters:
Network : vpc-urlf
Subnetwork : subnet-client-urlf IPv4 (192.168.10.0/24)
External IPv4 address : None
Click Done .
Click Create .
gcloud
To create the client VM, run the following command:
gcloud compute instances create vm-client-urlf \
--network vpc-urlf \
--zone us-central1-a \
--network-interface=stack-type=IPV4_ONLY,subnet=subnet-client-urlf,no-address \
Create a URL filtering security profile
In this section, you create a security profile of type url-filtering in
your organization. To view the permissions and roles required to create a URL
filtering security profile, see Create a URL filtering security profile .
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
In the project selector menu, select your organization.
Select the Security profiles tab.
Click Create profile .
For Name , enter sec-profile-urlf .
For Description , enter Security profile to set up URL filtering service .
In the Purpose section, select Cloud NGFW Enterprise to specify that
you want to create a security profile associated with the firewall.
In the Type section, select URL Filtering to specify that you
want to create a security profile of type url-filtering .
In the URL filters section, click the Create URL filter button to create
a new URL filter. In the Create a URL filter pane, specify these
details:
Priority : specify the priority of the URL filter. For example, 1000 .
Action : specify Allow to allow traffic towards the server VM
instance.
URL list : specify the domain URL of the server VM instance. For example, www.example.com .
Click Create .
Note: The implicit deny URL filter that has the lowest priority, denies all
traffic by default.
gcloud
Create a YAML file with the following content for the security profile:
name: sec-profile-urlf
type: url-filtering
urlFilteringProfile:
urlFilters:
- filteringAction: ALLOW
priority: 1000
urls: URL
Note: The implicit deny URL filter that has the lowest priority, denies all
traffic by default.
To create a security profile using the YAML file, run the following command:
gcloud network-security security-profiles import sec-profile-urlf \
--location global \
--source FILE_NAME \
--organization ORGANIZATION_ID \
Replace the following:
URL : the domain URL of the server VM instance. For example, www.example.com .
FILE_NAME : the name of YAML file that you created.
ORGANIZATION_ID : the organization where the
security profile is created.
Create a security profile group
In this section, you create a security profile group to include the URL
filtering security profile that you created in the preceding section. To view
the permissions and roles required to create a security profile group,
see Create a security profile group .
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
In the project selector menu, select your organization.
Select the Security profile groups tab.
Click Create profile group .
For Name , enter sec-profile-group-urlf .
For Description , enter Security profile group to set up URL filtering service .
To create a security profile group for Cloud Next Generation Firewall Enterprise, in the
Purpose section, select Cloud NGFW Enterprise .
In the URL filtering profile list, select sec-profile-urlf .
Click Create .
gcloud
To create a security profile group, run the following command:
gcloud network-security security-profile-groups \
create sec-profile-group-urlf \
--organization ORGANIZATION_ID \
--location global \
--project PROJECT_ID \
--url-filtering-profile \
organizations/ ORGANIZATION_ID /locations/global/securityProfiles/sec-profile-urlf \
--description "Security profile group to set up URL filtering service."
Replace the following:
ORGANIZATION_ID : the organization where the security
profile group is created.
PROJECT_ID : a project ID to use for quotas and access
restrictions on the security profile group.
Create a firewall endpoint
In this section you create a firewall endpoint in a specific zone. To view the
permissions and roles required to create a firewall endpoint,
see Create a firewall endpoint .
Note : When you create a firewall endpoint, the state of
the firewall endpoint is set to Creating . After the firewall endpoint is
ready, the state changes to Active . You can
view an endpoint
to verify its state.
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
Click Create .
In the Region list, select asia-southeast1 (Singapore) .
In the Zone list, select asia-southeast1-a .
For Name , enter endpoint-urlf .
In the Billing project list, select the Google Cloud project that you
want to use for billing the firewall endpoint and then click Continue .
Click Create .
gcloud
To create a firewall endpoint, run the following command:
gcloud network-security firewall-endpoints \
create endpoint-urlf \
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
network that you created previously. To view the permissions and
roles required to create a firewall endpoint association,
see Create firewall endpoint associations .
Note : When you create a firewall endpoint association, its state
is set to Creating . After the firewall endpoint association is
ready, the state changes to Active . You can
view an endpoint association
to verify its state.
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the vpc-urlf network to show its VPC network details page.
Select the Firewall endpoints tab.
Click Create endpoint association .
In the Region list, select asia-southeast1 .
In the Zone list, select asia-southeast1-a .
In the Firewall endpoint list, select endpoint-urlf .
Click Create .
gcloud
To create a firewall endpoint association, run the following command:
gcloud network-security firewall-endpoint-associations \
create endpoint-association-urlf \
--endpoint organizations/ ORGANIZATION_ID /locations/asia-southeast1-a/firewallEndpoints/endpoint-urlf \
--network vpc-urlf \
--zone asia-southeast1-a \
--project PROJECT_ID
Replace the following:
ORGANIZATION_ID : the organization where the firewall
endpoint is created.
PROJECT_ID : a project ID where the association is created.
Create a global network firewall policy
In this section, you create a global network firewall policy that contains the
following two firewall rules:
An ingress firewall rule with priority 100 to allow TCP traffic to port
22 . This rule enables IAP access to the VM
instances in the VPC network.
An egress firewall rule with priority 200 to perform Layer 7 inspection on
the outgoing traffic to the server VM in a specific zone.
To view the permissions and roles required to create a global network firewall
policy and its rules, see Create a global network firewall policy ,
Create an ingress rule for VM targets ,
and Create an egress rule for VM targets .
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the project selector list, select your project within your organization.
Click Create firewall policy .
For Policy Name , enter fw-policy-urlf .
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
Select TCP , and for Ports , enter 22 .
Click Create .
Click Create firewall rule .
In the Priority field, enter 200 .
For Direction of traffic , select Egress .
For Action on match , select Apply security profile group .
In the Security profile group list, select sec-profile-group-urlf .
For Logs , select Enabled .
In the Destination filter, select IPv4 , and then in the IP ranges
field enter 0.0.0.0/0 .
In the Protocols and ports section, select Specified protocols and ports .
Select TCP , and for Ports , enter 80, 443 .
Click Create .
Click Continue to proceed to the Add mirroring rules section.
Click Continue again to open the Associate policy with networks
section.
Select vpc-urlf network.
Click Associate .
Click Create .
gcloud
To create a global network firewall policy, run the following command:
gcloud compute network-firewall-policies \
create fw-policy-urlf \
--global \
--project PROJECT_ID
Replace the following:
PROJECT_ID : a project ID where the global network
firewall policy is created.
To add the firewall rule to enable IAP access, run the following command:
gcloud compute network-firewall-policies rules create 100 \
--firewall-policy fw-policy-urlf \
--direction INGRESS \
--action ALLOW \
--src-ip-ranges 35.235.240.0/20 \
--layer4-configs tcp:22 \
--global-firewall-policy \
--enable-logging
To add the firewall rule to enable Layer 7 inspection for URL filtering,
run the following command:
gcloud compute network-firewall-policies rules create 200 \
--direction EGRESS \
--firewall-policy fw-policy-urlf \
--action apply_security_profile_group \
--dest-ip-ranges 0.0.0.0/0 \
--layer4-configs tcp:80, tcp:443 \
--global-firewall-policy \
--security-profile-group \
//networksecurity.googleapis.com/organizations/ ORGANIZATION_ID \
/locations/global/securityProfileGroups/sec-profile-group-urlf \
--enable-logging
Replace the following:
ORGANIZATION_ID : the organization where the secure
profile group is created.
To associate the firewall policy with the VPC network, run the
following command:
gcloud compute network-firewall-policies associations create \
--firewall-policy fw-policy-urlf \
--network vpc-urlf \
--name fw-pol-association-urlf \
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
In the Connect column of the vm-client-urlf VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the
connection to establish.
To verify whether a request to the server VM instance is allowed, run the following
command:
curl URL -m 2
Replace URL with the domain URL of the
vm-server-urlf server VM instance. For example, www.example.com .
The request is successful because the URL filter (with priority 1000 )
allows the packet.
Close the SSH-in-browser dialog.
gcloud
To connect to the vm-client-urlf VM, run the following command:
gcloud compute ssh vm-client-urlf \
--zone=us-central1-a \
--tunnel-through-iap
When prompted, press Y to confirm, and then press Enter .
Note: While the SSH to the vm-client-urlf VM is
connected, ignore any warning messages that you see.
To verify whether a request to the server VM instance is allowed, run the following command:
curl URL -m 2
Replace URL with the domain URL of the
vm-server-urlf server VM instance. For example, www.example.com .
The request is successful because the URL filter (with priority 1000 )
allows the packet.
To close the SSH-in-browser , enter exit .
View the URL filtering service logs
Go to the Logs Explorer .
Enter the following query in the Query pane. Replace
PROJECT_ID with the ID of your project.
resource.type="networksecurity.googleapis.com/FirewallEndpoint" logName="projects/ PROJECT_ID /logs/networksecurity.googleapis.com%2Ffirewall_url_filter"
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, either delete the project that contains the resources,
or keep the project and delete the individual resources.
In this section, you delete the resources created in this tutorial.
Delete the firewall endpoint association
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the vpc-urlf network to show its VPC network details page.
Select the Firewall endpoints tab. The tab shows a list of configured
firewall endpoint associations.
Select the checkbox next to endpoint-association-urlf , and then click Delete .
Click Delete again to confirm.
gcloud
To delete the firewall endpoint association, run the following command:
gcloud network-security firewall-endpoint-associations \
delete endpoint-association-urlf \
--zone asia-southeast1-a
Delete the firewall endpoint
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
Select endpoint-urlf , and then click Delete .
Click Delete again to confirm.
gcloud
To delete the firewall endpoint, run the following commands:
gcloud network-security firewall-endpoints delete endpoint-urlf \
--organization ORGANIZATION_ID \
--zone asia-southeast1-a
Replace the following:
ORGANIZATION_ID : the organization where the endpoint
is created.
Delete the global network firewall policy
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the project selector menu, select your project that contains the policy.
Click fw-policy-urlf .
Click the Associations tab.
Select all associations.
Click Remove Associations .
After all associations are removed, click Delete .
gcloud
To remove the association between firewall policy and VPC
network, run the following command:
gcloud compute network-firewall-policies associations delete \
--name fw-pol-association-urlf \
--firewall-policy fw-policy-urlf \
--global-firewall-policy
Note: If you set up the association between the firewall policy and the
VPC network through Google Cloud console, don't
use the gcloud CLI command to remove the association.
If you can't remember how you created the association or get the
The network firewall policy does not have an association with pol-association-fw-rules
error when you run the command, use the Google Cloud console to
remove the association.
Delete the firewall policy.
gcloud compute network-firewall-policies delete fw-policy-urlf --global
When prompted, press Y to confirm, and then press Enter .
Delete the security profile group
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profile groups tab.
Select sec-profile-group-urlf , and then click Delete .
Click Delete again to confirm.
gcloud
To delete the security profile group, run the following command:
gcloud network-security security-profile-groups \
delete sec-profile-group-urlf \
--organization ORGANIZATION_ID \
--location global
Replace the following:
ORGANIZATION_ID : the organization where the security
profile group is created.
Delete the URL filtering security profile
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
Select sec-profile-urlf , and then click Delete .
Click Delete again to confirm.
gcloud
To delete the security profile, run the following command:
gcloud network-security security-profiles url-filtering \
delete sec-profile-urlf \
--organization ORGANIZATION_ID \
--location global
Replace the following:
ORGANIZATION_ID : the organization where the security
profile is created.
Delete the VMs
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Select the checkboxes of both the vm-client-urlf and
vm-server-urlf VMs.
Click Delete .
In the Delete 2 instances dialog, click Delete .
gcloud
To delete the vm-client-urlf VM, run the following command:
gcloud compute instances delete vm-client-urlf \
--zone us-central1-a
When prompted, press Y to confirm, and then press Enter .
To delete the vm-server-urlf VM, run the following command:
gcloud compute instances delete vm-server-urlf \
--zone asia-southeast1-a
When prompted, press Y to confirm, and then press Enter .
Delete Cloud NAT gateway and Cloud Router
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Select the checkbox next to the gateway-urlf gateway configuration.
On the more_vert Menu ,
click Delete .
In the Google Cloud console, go to the Cloud Routers page.
Go to Cloud Routers
Select the checkbox next to the router-urlf router.
Click Delete .
gcloud
To delete the Cloud NAT gateway, run the following command:
gcloud compute routers nats delete gateway-urlf \
--router=router-urlf \
--region=asia-southeast1
To delete the Cloud Router, run the following command:
gcloud compute routers delete router-urlf \
--project= PROJECT_ID \
--region=asia-southeast1
Replace the following:
PROJECT_ID : the ID of the project that contains the
Cloud Router.
Delete the VPC network and its subnets
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
In the Name column, click vpc-urlf .
Click Delete VPC network .
In the Delete network dialog, click Delete .
When you delete a VPC, its subnets are also deleted.
gcloud
To delete the subnet subnet-client-urlf of the vpc-urlf VPC network,
run the following command:
gcloud compute networks subnets delete subnet-client-urlf \
--region us-central1
When prompted, press Y to confirm, and then press Enter .
To delete the subnet subnet-server-urlf of the vpc-urlf VPC network,
run the following command:
gcloud compute networks subnets delete subnet-server-urlf \
--region=asia-southeast1
When prompted, press Y to confirm, and then press Enter .
To delete the vpc-urlf VPC network, run the following command:
gcloud compute networks delete vpc-urlf
Delete the DNS zone
Delete the DNS zone that
you created for the server VM domain URL.
What's next
For conceptual information about URL filtering, see URL filtering service overview .
For conceptual information about firewall policies, see Firewall policies .
For conceptual information about firewall policy rules, see Firewall policy rules .
To determine costs, see Cloud NGFW pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
