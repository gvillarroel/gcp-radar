---
title: "Use Public NAT with GKE \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/nat/docs/gke-example
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/nat/docs
source_metadata:
  url: https://docs.cloud.google.com/nat/docs/gke-example
  title: "Use Public NAT with GKE \_|\_ Google Cloud Documentation"
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
Use Public NAT with GKE
This page shows you how to configure a sample Public NAT setup with
Google Kubernetes Engine (GKE). Before setting up Public NAT, read the
Public NAT overview .
Prerequisites
You need to do the following before setting up Public NAT.
Get IAM permissions
The roles/compute.networkAdmin
role gives you permissions to create a NAT gateway on Cloud Router,
reserve and assign NAT IP addresses, and specify subnetworks (subnets) whose
traffic should use network address translation by the NAT gateway.
Set up Google Cloud
Before you get started, set up the following items in Google Cloud.
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
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Note:
The Google Cloud CLI instructions on this page assume that you
have set your project ID before issuing commands. You can set a project ID
with the following command:
gcloud config set project PROJECT_ID
You can also view a project ID that is already set:
gcloud config list --format='text(core.project)'
Setting up the GKE example
Use this example if you want to see a simple Public NAT
configuration working with GKE.
Step 1: Create a VPC network and subnet
If you already have a network and subnet, you can skip this step.
Console
In the Google Cloud console, go to the VPC networks page.
Go to the VPC networks page
Click Create VPC network .
Enter a Name of custom-network1 .
Under Subnets , set Subnet creation mode to Custom .
Under New subnet , enter a Name of subnet-us-east-192 .
In Region , select us-east4 .
Enter an IP address range of 192.168.1.0/24 .
Click Done , and then click Create .
gcloud
Create a new custom mode Virtual Private Cloud (VPC) network in your project:
gcloud compute networks create custom-network1 \
--subnet-mode custom
Output:
NAME MODE IPV4_RANGE GATEWAY_IPV4
custom-network1 custom
Note: Because this is a VPC network, there is no
network-level IPv4 range or gateway IP address, so none is displayed.
Specify the subnet prefix for your first region. In this example, we
assign 192.168.1.0/24 to region us-east4 .
gcloud compute networks subnets create subnet-us-east-192 \
--network custom-network1 \
--region us-east4 \
--range 192.168.1.0/24
Output:
NAME REGION NETWORK RANGE
subnet-us-east-192 us-east4 custom-network1 192.168.1.0/24
Terraform
You can use a Terraform module
to create a custom Virtual Private Cloud network and subnet.
module "test-vpc-module" {
source = "terraform-google-modules/network/google"
version = "~> 13.0"
project_id = var.project_id # Replace this with your project ID in quotes
network_name = "custom-network1"
mtu = 1460
subnets = [
{
subnet_name = "subnet-us-east-192"
subnet_ip = "192.168.1.0/24"
subnet_region = "us-east4"
}
]
}
Step 2: Create a private cluster
Console
In the Google Cloud console, go to the Kubernetes clusters page.
Go to the Kubernetes clusters page
Click Create cluster .
For Name , enter nat-test-cluster .
Set the Location type to Zonal .
Set the Zone to us-east4-c .
In the navigation pane, click Networking .
Select Private cluster .
Clear the Access control plane using its external IP address checkbox.
Enter a Control plane IP range of 172.16.0.0/28 .
Set Network to custom-network1 .
To create and start the cluster, click Create .
gcloud
gcloud container clusters create "nat-test-cluster" \
--zone "us-east4-c" \
--cluster-version "latest" \
--machine-type "e2-medium" \
--disk-type "pd-standard" \
--disk-size "100" \
--scopes "https://www.googleapis.com/auth/compute","https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" \
--num-nodes "3" \
--enable-private-nodes \
--enable-private-endpoint \
--master-ipv4-cidr "172.16.0.0/28" \
--enable-ip-alias \
--network "projects/ PROJECT_ID /global/networks/custom-network1" \
--subnetwork "projects/ PROJECT_ID /regions/us-east4/subnetworks/subnet-us-east-192" \
--max-nodes-per-pool "110" \
--enable-master-authorized-networks \
--addons HorizontalPodAutoscaling,HttpLoadBalancing \
--enable-autoupgrade \
--enable-autorepair
Terraform
You can use a Terraform resource
to create a private cluster.
resource "google_container_cluster" "primary" {
project = var.project_id
name = "nat-test-cluster"
location = "us-east4-c"
initial_node_count = 3
network = var.network # Replace with a reference or self link to your network, in quotes
subnetwork = var.subnet # Replace with a reference or self link to your subnet, in quotes
private_cluster_config {
master_ipv4_cidr_block = "172.16.0.0/28"
enable_private_endpoint = true
enable_private_nodes = true
}
ip_allocation_policy {
}
master_authorized_networks_config {
}
}
Step 3: Create a firewall rule that allows SSH connections
Console
In the Google Cloud console, go to the Firewall policies page.
Go to the Firewall policies page
Click Create firewall rule .
Enter a Name of allow-ssh .
Specify a Network of custom-network1 .
Set Direction of traffic to Ingress .
Set Action on match to Allow .
Set Targets to All instances in the network .
Set Source filter to IPv4 ranges .
Set Source IP ranges to 35.235.240.0/20 .
Set Protocols and ports to Specified protocols and ports .
Select the tcp checkbox and enter port 22 .
Click Create .
gcloud
gcloud compute firewall-rules create allow-ssh \
--network custom-network1 \
--source-ranges 35.235.240.0/20 \
--allow tcp:22
Terraform
You can use a Terraform resource
to create a firewall rule.
resource "google_compute_firewall" "rules" {
project = var.project_id
name = "allow-ssh"
network = var.network
allow {
protocol = "tcp"
ports = ["22"]
}
source_ranges = ["35.235.240.0/20"]
}
Step 4: Create IAP SSH permissions for one of your nodes
In a later step, use IAP to connect to your node.
Console
In the Google Cloud console, go to the Identity-Aware Proxy page.
Go to the Identity-Aware Proxy page
Select the SSH and TCP resources tab.
Select the checkbox next to the first node in the list under
All Tunnel Resources > us-east4-c . Its name will be similar to
gke-nat-test-cluster-default-pool-b50db58d-075t .
Write down the name of the node; later you'll use it to test
connectivity.
In the right pane, click Add principal .
To grant users, groups, or service accounts access to the resources,
in the New principals field, specify their email addresses.
If you are just testing this feature, you can enter your own email
address.
To grant the principals access to the resources through Cloud
IAP's TCP forwarding feature, in the Role drop-down
list, select Cloud IAP > IAP-secured Tunnel User .
Click Save .
gcloud
For this step, use the Console instructions.
Step 5: Log in to the node and confirm that it cannot reach the internet
Console
In the Google Cloud console, go to the VM instances page.
Go to the VM instances page
Find the node that you created IAP SSH permissions for.
In the Connect column, click the SSH drop-down
arrow, and then select Open in browser window .
If this is the first time that you are connecting to the instance,
Google Cloud generates the SSH keys for you.
From the node prompt, find the process ID of the kube-dns container:
pgrep '^kube-dns$'
Access the container:
sudo nsenter --target PROCESS_ID --net /bin/bash
From kube-dns , attempt to connect to the internet:
curl example.com
You should get no result. If you do, you might not have created your
cluster as a private cluster, or there might be some other problem.
To troubleshoot, see
VMs can reach the internet unexpectedly without Public NAT .
To end the command, you might have to enter Ctrl+C .
gcloud
Find the name of one of your cluster nodes:
gcloud compute instances list
A node name looks something like
gke-nat-test-cluster-default-pool-1a4cbd06-3m8v . Make a note of
the node name and use that name wherever you see
NODE_NAME
in the following commands.
Connect to the node:
gcloud compute ssh NODE_NAME \
--zone us-east4-c \
--tunnel-through-iap
From the node prompt, find the process ID of the kube-dns container:
pgrep '^kube-dns$'
Access the container:
sudo nsenter --target PROCESS_ID --net /bin/bash
From kube-dns , attempt to connect to the internet:
curl example.com
You should get no result.To end the command, you might have to enter
Ctrl+C .
Step 6: Create a NAT configuration using Cloud Router
You must create the Cloud Router in the same region as the instances
that use Public NAT. Public NAT is only used to place NAT
information onto the VMs. It is not used as part of the actual NAT gateway.
This configuration allows all instances in the region to use Public NAT
for all primary and alias IP ranges . It also automatically
allocates the external IP addresses for the NAT gateway. For more options, see
the Google Cloud CLI documentation.
Note: Public NAT uses Cloud Router only to group NAT
configuration information (control plane). Public NAT does not
direct a Cloud Router to use BGP or to add routes. NAT traffic does
not pass through a Cloud Router (data plane).
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to the Cloud NAT page
Click Get started or Create NAT gateway .
Enter a Gateway name of nat-config .
Set the VPC network to custom-network1 .
Set the Region to us-east4 .
Under Cloud Router , select Create new router .
Enter a Name of nat-router .
Click Create .
Click Create .
gcloud
Create a Cloud Router:
gcloud compute routers create nat-router \
--network custom-network1 \
--region us-east4
Add a configuration to the router:
gcloud compute routers nats create nat-config \
--router-region us-east4 \
--router nat-router \
--nat-all-subnet-ip-ranges \
--auto-allocate-nat-external-ips
Terraform
You can use a Terraform resource
to create a Cloud Router.
resource "google_compute_router" "router" {
project = var.project_id
name = "nat-router"
network = var.network
region = "us-east4"
}
You can use a Terraform module
to create a NAT configuration.
module "cloud-nat" {
source = "terraform-google-modules/cloud-nat/google"
version = "~> 5.0"
project_id = var.project_id
region = "us-east4"
router = google_compute_router.router.name
name = "nat-config"
source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"
}
Step 7: Attempt to connect to the internet again
It might take up to three minutes for the NAT configuration to propagate, so
wait at least a minute before trying to access the internet again.
If you are not still logged in to kube-dns , reconnect by using the procedure
in Step 5 . After you are logged in, rerun the curl command:
curl example.com
You should see output that contains the following content:
<html>
<head>
<title>Example Domain</title>
...
...
...
</head>
<body>
<div>
<h1>Example Domain</h1>
<p>This domain is established to be used for illustrative examples in documents. You can use this
domain in examples without prior coordination or asking for permission.</p>
<p><a href="http://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
What's next
Set up a Public NAT gateway.
Create an example Compute Engine setup .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
