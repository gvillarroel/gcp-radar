---
title: "Configure global network firewall policy to deny egress connections to specific\
  \ geolocations \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation
  title: "Configure global network firewall policy to deny egress connections to specific\
    \ geolocations \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
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
Configure global network firewall policy to deny egress connections to specific geolocations
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial describes how to create and configure a global network firewall
policy to block egress traffic to specific geolocations in your network.
It walks through an example of creating a Virtual Private Cloud (VPC)
network with two subnets, setting up a firewall policy with geolocation
firewall rules, and then testing the firewall rules.
Objectives
This tutorial shows you how to complete the following tasks:
Create a custom VPC network with two subnets in different
regions.
Create a virtual machine (VM) instance in each of the following regions:
the US and Singapore.
Create a Cloud Router and a Cloud NAT
gateway, to allow the US VM to access the public internet.
Create a global network firewall policy and add a firewall rule to enable
Identity-Aware Proxy (IAP).
Install Apache server on the Singapore VM.
Add a firewall rule to block traffic to specific geolocations.
Test the geolocation firewall rule.
The following diagram shows traffic between VMs in the us-central1 and
asia-southeast1 regions within a custom VPC network.
A global network firewall policy blocks egress traffic to a specific
geolocation. The VM in the us-central1 region uses Cloud Router and a
Cloud NAT for internet access, without using an external IP address.
The VM in the us-central1 region uses the external IP address of the VM
in the asia-southeast1 region to test the firewall rule.
A global network firewall policy blocking egress traffic from a subnet to a specific geolocation (click to enlarge).
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
Make sure that you have the Compute Network Admin role ( roles/compute.networkAdmin ).
Enable the Compute Engine and Identity-Aware Proxy (IAP) APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
If you prefer to work from the command line, install the Google Cloud CLI. For the conceptual and installation information about the tool,
see gcloud CLI overview .
Note: If you haven't run the Google Cloud CLI previously, initialize
your gcloud CLI directory by running the
gcloud init command .
Create a custom VPC network with subnets
Create a custom mode VPC network with two IPv4 subnets.
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click Create VPC network .
For Name , enter vpc-geo-location .
For Subnet creation mode , select Custom .
In the New subnet section, specify the following configuration parameters for a subnet:
Name : subnet-1-us
Region : us-central1
IPv4 range : 10.0.0.0/24
Click Done .
Click Add subnet and specify the following configuration parameters:
Name : subnet-2-sg
Region : asia-southeast1
IPv4 range : 192.168.200.0/24
Click Done .
Click Create .
gcloud
To open the terminal, click Activate Cloud Shell .
To create a VPC network, run the following command:
gcloud compute networks create vpc-geo-location \
--subnet-mode=custom
In the Authorize cloud shell dialog, click Authorize .
To create a subnet, run the following command:
gcloud compute networks subnets create subnet-1-us \
--network=vpc-geo-location \
--region=us-central1 \
--range=10.0.0.0/24
To create another subnet, run the following command:
gcloud compute networks subnets create subnet-2-sg \
--network=vpc-geo-location \
--region=asia-southeast1 \
--range=192.168.200.0/24
Create VMs
In this section, you create two VMs in the subnets you configured in the
preceding section.
Create a VM in the us-central1 region
Create a VM in the us-central1 region without an external IP address.
Console
To create a VM in the us-central1 region, follow these steps:
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter instance-1-us .
For Region , select us-central1 (Iowa) .
In the navigation menu, click Networking .
In the Network interfaces section, click default and
specify the following configuration parameters:
Network : vpc-geo-location
Subnetwork : subnet-1-us IPv4 (10.0.0.0/24)
External IPv4 address : None
Click Done .
Click Create .
gcloud
To create a VM in the us-central1 region, run the following command:
gcloud compute instances create instance-1-us \
--network=vpc-geo-location \
--zone=us-central1-a \
--stack-type=IPV4_ONLY \
--no-address \
--subnet=subnet-1-us
Create a VM in the asia-southeast1 region
Console
To create a VM in the asia-southeast1 region, follow these steps:
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter instance-2-sg .
For Region , select asia-southeast1 (Singapore) .
In the navigation menu, click Networking .
In the Network interfaces section, click default and
specify the following configuration parameters:
Network : vpc-geo-location
Subnetwork : subnet-2-sg IPv4 (192.168.200.0/24)
External IPv4 address : None
Click Done .
Click Create .
gcloud
To create a VM in the asia-southeast1 region, run the following command:
gcloud compute instances create instance-2-sg \
--network=vpc-geo-location \
--zone=asia-southeast1-b \
--subnet=subnet-2-sg \
--stack-type=IPV4_ONLY
Create a Cloud Router and a Cloud NAT gateway
In the previous section, you created two VMs, instance-1-us and
asia-southeast1 . To allow instance-1-us VMs to
access the public internet, create a Cloud Router and a
Cloud NAT gateway.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click Get started or Create Cloud NAT gateway .
For Gateway name , enter nat-gateway .
For NAT type , select Public .
In the Select Cloud Router section, specify the following configuration parameters:
Network : vpc-geo-location
Region : us-central1
Cloud Router : Create new router .
For Name , enter router-fw-rules .
Click Create .
Click Create .
In the Google Cloud console, go to the IP addresses page.
Go to IP addresses
Click the External IP Addresses tab, and then copy the IP address of
your Cloud NAT ( nat-auto-ip ). This IP address is used when
you validate the connection between the instance-1-us VM and
instance-2-sg VM.
gcloud
To create a Cloud Router, run the following command:
gcloud compute routers create router-fw-rules \
--network=vpc-geo-location \
--region=us-central1
To create a Cloud NAT gateway, run the following command:
gcloud compute routers nats create nat-gateway \
--router=router-fw-rules \
--region=us-central1 \
--auto-allocate-nat-external-ips \
--nat-all-subnet-ip-ranges
To view the Cloud NAT IP address, run the following command:
gcloud compute routers get-nat-ip-info \
router-fw-rules \
--region=us-central1
Remember to copy the IP address of your Cloud NAT
( natIp ). This IP address is used when you validate the connection
between the instance-1-us VM and the instance-2-sg VM.
Create a global network firewall policy to enable IAP
In this section, you create a global network firewall policy and add a
firewall rule to enable
IAP. IAP allows administrative access to
the VM instances.
The firewall rule includes the following characteristics.
Ingress traffic from IP range 35.235.240.0/20 . This range contains all
IP addresses that IAP uses for TCP forwarding.
A connection to all ports that you want to be accessible by using
IAP TCP forwarding, for example, port 22 for SSH.
Console
To allow IAP access to all VM instances in the
vpc-geo-location network, follow these steps:
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Click Create firewall policy .
In the Configure policy section, for Policy name , enter fw-policy .
For Deployment scope , select Global and click Continue .
To create rules for your policy, in the Add rules section, click Add rule .
For Priority , enter 100 .
For Direction of traffic , select Ingress .
For Action on match , select Allow .
For Logs , select On .
In the Target section, for Target type , select All instances in the network .
In the Source section, for IP ranges , enter 35.235.240.0/20 .
In the Protocol and ports section, select Specified protocols and ports .
Select the TCP checkbox, and for Ports , enter 22 .
Click Create .
Click Continue .
To associate a VPC network with the policy, in the
Associate policy with VPC networks section, click Associate .
Select the checkbox of vpc-geo-location and click Associate .
Click Continue .
Click Create .
gcloud
To allow IAP access to all VM instances in the
vpc-geo-location network, run the following command:
To create a firewall policy, run the following command:
gcloud compute network-firewall-policies create fw-policy \
--global
To create a firewall rule that allows traffic to all destinations and
enables logs, run the following command:
gcloud compute network-firewall-policies rules create 100 \
--firewall-policy=fw-policy \
--direction=INGRESS \
--action=ALLOW \
--layer4-configs=tcp:22 \
--src-ip-ranges=35.235.240.0/20 \
--global-firewall-policy \
--enable-logging
To associate the firewall policy with the VPC network,
run the following command:
gcloud compute network-firewall-policies associations create \
--firewall-policy=fw-policy \
--network=vpc-geo-location \
--name=pol-association-fw-rules \
--global-firewall-policy
Create a firewall rule
In this section, you create a firewall rule to allow ingress connection on
the instance-2-sg VM.
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click fw-policy .
Click Create rule .
For Priority , enter 500 .
For Direction of traffic , select Ingress .
For Action on match , select Allow .
For Logs , select On .
In the Target section, for Target type , select All instances in the network .
In the Source section, for IP ranges ,
enter NAT_IP_ADDRESS .
Replace NAT_IP_ADDRESS with the IP address
assigned to your Cloud NAT. For more information, see
Create a Cloud Router and a Cloud NAT gateway .
Click Create .
gcloud
To update the firewall policy, run the following command:
gcloud compute network-firewall-policies rules create 500 \
--firewall-policy=fw-policy \
--direction=INGRESS \
--action=ALLOW \
--src-ip-ranges= NAT_IP_ADDRESS \
--layer4-configs=all \
--global-firewall-policy \
--enable-logging
Replace NAT_IP_ADDRESS with the IP address
assigned to your Cloud NAT. For more information, see
Create a Cloud Router and a Cloud NAT gateway .
Install the Apache server
In this section, you install the Apache server on the instance-2-sg VM.
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the Connect column of the instance-2-sg VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the
connection to establish.
To update the package lists on your instance, run the following command:
sudo apt-get update
When the process is finished, it generates the following message:
Reading package lists... Done.
To install the apache2 HTTP Server package, at the command prompt,
run the following command:
sudo apt-get install apache2 php7.0
While the process is in progress, it generates the following message:
After this operation, 56.0 MB of additional disk space will be used. Do you want to continue? [Y/n]
Press Y to confirm, and then press Enter .
To overwrite the Apache web server default web page, run the following command:
echo '<!doctype html><html><body><h1>Hello World!</h1></body></html>' | sudo tee /var/www/html/index.html
Close the SSH-in-browser dialog.
gcloud
To use SSH to connect to the instance-2-sg VM, run the
following command:
gcloud compute ssh instance-2-sg \
--zone=asia-southeast1-b \
--tunnel-through-iap
When prompted, press Y to confirm, and then press Enter .
Note: While the SSH connection to the instance-2-sg VM is
connected, ignore any warning messages you see.
To update the package lists on your instance, run the following command:
sudo apt-get update
When the process is finished, it generates the following message:
Reading package lists... Done.
To install the apache2 HTTP Server package, at the command prompt,
run the following command:
sudo apt-get install apache2 php7.0
While the process is in progress, it generates the following message:
After this operation, 56.0 MB of additional disk space will be used. Do you want to continue? [Y/n]
Press Y to confirm, and then press Enter .
To overwrite the Apache web server default web page, run the following command:
echo '<!doctype html><html><body><h1>Hello World!</h1></body></html>' | sudo tee /var/www/html/index.html
To close the SSH-in-browser , enter exit .
Validate the connection
After installing the Apache server on the instance-2-sg VM, connect to
the instance-1-us VM from the instance-2-sg VM using the
external IP address of the instance-2-sg VM.
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
From the External IP column of the instance-2-sg VM, copy the
external IP address of the VM.
In the Connect column of the instance-1-us VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the
connection to establish.
To verify the connection, run the following command:
curl EXTERNAL_IP -m 2
Replace EXTERNAL_IP with the IP address of the
instance-2-sg VM.
The expected response message is as follows:
<!doctype html><html><body><h1>Hello World!</h1></body></html>
Close the SSH-in-browser dialog.
gcloud
To view the external IP address of the instance-2-sg VM, run the
following command:
gcloud compute instances describe instance-2-sg \
--zone=asia-southeast1-b \
--format='get(networkInterfaces[0].accessConfigs[0].natIP)'
When prompted, press Y to confirm, and then press Enter .
Make sure to note the external IP address of the instance-2-sg VM.
To use SSH to connect to the instance-1-us VM, run the following command:
gcloud compute ssh instance-1-us \
--zone=us-central1-a \
--tunnel-through-iap
Note: While the SSH connection to the instance-1-us VM is
connected, ignore any warning messages you see.
To verify the connection, run the following command:
curl EXTERNAL_IP -m 2
Replace EXTERNAL_IP with the IP address of the
instance-2-sg VM.
The expected response message is as follows:
<!doctype html><html><body><h1>Hello World!</h1></body></html>
To close the SSH-in-browser , enter exit .
Add a firewall rule to block traffic to specific geolocations
In this section you add a firewall rule for the VPC vpc-geo-location
to block egress traffic to Italy, Poland, and Singapore.
Console
To add a new rule in the fw-policy that you created in the
Create a global network firewall policy
section, follow these steps:
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click fw-policy .
Click Create rule .
For Priority , enter 200 .
For Direction of traffic , select Egress .
For Action on match , select Deny .
For Logs , select On .
In the Destination section, for Geolocations , select
Singapore (SG) , Poland (PL) , and Italy (IT) .
Click OK .
Click Create .
gcloud
To add a new rule in the fw-policy that you created in the
Create a global network firewall policy
section, run the following command:
gcloud compute network-firewall-policies rules create 200 \
--firewall-policy=fw-policy \
--direction=EGRESS \
--action=DENY \
--dest-region-codes=SG,PL,IT \
--layer4-configs=all \
--global-firewall-policy \
--enable-logging
Test the geolocation firewall rule
Console
After you have added the rule to block egress traffic to
Singapore (SG), Poland (PL), and Italy (IT), follow these steps to test the
rule:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
From the External IP column of the instance-2-sg VM, copy the
external IP address of the VM.
In the Connect column of the instance-1-us VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the
connection to establish.
To verify that egress traffic to the instance-2-sg VM is blocked,
run the following command:
curl EXTERNAL_IP -m 2
Replace EXTERNAL_IP with the IP address of the
instance-2-sg VM.
The Connection timed out message is expected because you created a
firewall rule to deny external traffic from the US VM to the Singapore VM.
To verify that the egress traffic to Poland is blocked, run the following
command:
curl `https://www.gov.pl` -m 2
The Connection timed out message is expected because you created a
firewall rule to deny external traffic to the Poland website.
Note: You can use any website whose domain name resolves to an IP
address associated with the geolocation Poland (PL).
To verify that the egress traffic to Italy is blocked, run the following
command:
curl `https://www.esteri.it/it/` -m 2
The Connection timed out message is expected because you created a
firewall rule to deny external traffic to the Italy website.
Note: You can use any website whose domain name resolves to an IP
address associated with the geolocation Italy (IT).
Close the SSH-in-browser dialog.
gcloud
After you have added the rule to block egress traffic to
Singapore (SG), Poland (PL), and Italy (IT), run the following command to
test the rule:
To view the external IP address of the instance-2-sg VM, run the
following command:
gcloud compute instances describe instance-2-sg \
--format='get(networkInterfaces[0].accessConfigs[0].natIP)'
When prompted, press Y to confirm, and then press
Enter . Make sure to note the external IP address of the
instance-2-sg VM.
To use SSH to connect to the instance-1-us VM, run the following command:
gcloud compute ssh instance-1-us \
--zone=us-central1-a \
--tunnel-through-iap
Note: While the SSH connection to the instance-1-us VM is connected,
ignore any warning messages you see.
To verify that the egress traffic to Singapore is blocked, run the
following command:
curl EXTERNAL_IP -m 2
Replace EXTERNAL_IP with the IP address of the
instance-2-sg VM.
The Connection timed out message is expected because you created a
firewall rule to deny external traffic from the US VM to the Singapore VM.
To verify that the egress traffic to Poland is blocked, run the following
command:
curl https://www.gov.pl -m 2
The Connection timed out message is expected because you created a
firewall rule to deny external traffic from the Poland website.
Note: You can use any website whose domain name resolves to an IP
address associated with the geolocation Poland (PL).
To verify that the egress traffic to Italy is blocked, run the following
command:
curl https://www.esteri.it/it/ -m 2
The Connection timed out message is expected because you created a
firewall rule to deny external traffic to the Italy website.
Note: You can use any website whose domain name resolves to an IP
address associated with the geolocation Italy (IT).
To close the SSH-in-browser dialog, enter exit .
View the logs
You can verify that the firewall rules were applied to the egress traffic by
accessing the logs. To view the log details, follow these steps:
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click the fw-policy name.
Click view_column Column display options .
In the Displayed columns dialog, select Hit count and then click OK .
In the Hit count column, select the number for the rule you created
during Create a global network firewall policy .
The Logs Explorer page opens.
To view the firewall rule applied to the egress traffic, expand the
individual log. You can view the connection, disposition, and remote
location details.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, either delete the project that contains the resources,
or keep the project and delete the individual resources.
In this section, you delete the resources created in this tutorial.
Delete the firewall policy
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click the fw-policy name.
Click the Associations tab.
Select the checkbox of vpc-geo-location and click Remove association .
In the Remove a firewall policy association dialog, click Remove .
Next to the fw-policy title, click Delete .
In the Delete a firewall policy dialog, click Delete .
gcloud
Remove the association between the firewall policy and
VPC network.
gcloud compute network-firewall-policies associations delete \
--name=pol-association-fw-rules \
--firewall-policy=fw-policy \
--global-firewall-policy
Note: If you set up the association between the firewall policy and the
VPC network through Google Cloud console, don't
use the gcloud CLI command to remove the association.
If you can't remember how you created the association or get the
The network firewall policy does not have an association with pol-association-fw-rules.
error when you run the command, use the Google Cloud console to
remove the association.
Delete the firewall policy.
gcloud compute network-firewall-policies delete fw-policy \
--global
When prompted, press Y to confirm, and then press Enter .
Delete the VMs
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Select the checkboxes of instance-1-us and instance-2-sg VMs.
Click Delete .
In the Delete 2 instances? dialog, click Delete .
gcloud
To delete the instance-1-us VM, run the following command:
gcloud compute instances delete instance-1-us \
--zone=us-central1-a
When prompted, press Y to confirm, and then press Enter .
To delete the instance-2-sg VM, run the following command:
gcloud compute instances delete instance-2-sg \
--zone=asia-southeast1-b
When prompted, press Y to confirm, and then press Enter .
Delete the Cloud NAT gateway and Cloud Router
Console
In the Google Cloud console, go to the Cloud routers page.
Go to Cloud routers
Select the router-fw-rules checkbox.
Click Delete .
In the Delete router-fw-rules dialog, click Delete .
When you delete a Cloud Router, the associated Cloud NAT
gateway is also deleted.
gcloud
To delete the router-fw-rules Cloud Router, run the following
command:
gcloud compute routers delete router-fw-rules \
--region=us-central1
When prompted, press Y to confirm, and then press Enter .
When you delete a Cloud Router, the associated Cloud NAT
gateway is also deleted.
Delete the VPC network and its subnets
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
In the Name column, click vpc-geo-location .
Click Delete VPC network .
In the Delete a network dialog, click Delete .
When you delete a VPC, its subnets are also deleted.
gcloud
To delete the subnet subnet-1-us of the vpc-geo-location
VPC network, run the following command:
gcloud compute networks subnets delete subnet-1-us \
--region=us-central1
When prompted, press Y to confirm, and then press Enter .
To delete the subnet subnet-2-sg of the vpc-geo-location
VPC network, run the following command:
gcloud compute networks subnets delete subnet-2-sg \
--region=asia-southeast1
When prompted, press Y to confirm and press Enter .
To delete the vpc-geo-location VPC network,
run the following command:
gcloud compute networks delete vpc-geo-location
When prompted, press Y to confirm, and then press Enter .
What's next
For conceptual information about firewall policies, see Firewall policies .
For conceptual information about firewall policy rules, see Firewall policy rule components .
To create, update, monitor, and delete VPC firewall rules,
see Use VPC firewall rules .
To determine costs, see Cloud NGFW pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
