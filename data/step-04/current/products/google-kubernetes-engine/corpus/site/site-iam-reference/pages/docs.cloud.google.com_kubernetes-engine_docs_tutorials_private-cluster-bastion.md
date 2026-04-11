---
title: "Remotely access a private cluster using a bastion host \_|\_ Kubernetes Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/private-cluster-bastion
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/private-cluster-bastion
  title: "Remotely access a private cluster using a bastion host \_|\_ Kubernetes\
    \ Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Remotely access a private cluster using a bastion host
Stay organized with collections
Save and categorize content based on your preferences.
Warning: This page is archived and is not actively maintained. The commands
on this page might not work and could cause disruptions to your cluster. We
recommend that you create your cluster in version 1.29 and later for
customizable and simplified access to the control plane and cluster network.
To learn more see, Customize your network isolation in GKE .
This tutorial shows you how to access a private cluster in Google Kubernetes Engine (GKE)
over the internet by using a bastion host .
You can create GKE private clusters with
no client access to the public endpoint .
This access option improves the cluster security by preventing all internet
access to the control plane. However, disabling access to the public endpoint
prevents you from interacting with your cluster remotely, unless you add the IP
address of your remote client as an authorized network .
This tutorial shows you how to set up a bastion host , which is a special-purpose
host machine designed to withstand attack. The bastion host uses Tinyproxy to
forward client traffic to the cluster. You use Identity-Aware Proxy (IAP) to
securely access the bastion host from your remote client.
Note : This tutorial provides instructions for working with this
app: Tinyproxy. The
instructions might not represent newer versions of the app. For more information, see the
documentation:
Tinyproxy .
Objectives
Create a private cluster with no access to the public endpoint.
Deploy a Compute Engine virtual machine (VM) to act as a bastion host
in the cluster subnet.
Use IAP to connect a remote client to the cluster over
the internet.
Costs
In this document, you use the following billable components of Google Cloud:
GKE
Identity-Aware Proxy
Compute Engine
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
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
Enable the GKE, Compute Engine, Identity-Aware Proxy APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
After initializing the gcloud CLI, update it and install the required components:
gcloud components update
gcloud components install alpha beta
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
Enable the GKE, Compute Engine, Identity-Aware Proxy APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
After initializing the gcloud CLI, update it and install the required components:
gcloud components update
gcloud components install alpha beta
Create a private cluster
Create a new private cluster with no client access to the public endpoint. Place
the cluster in its own subnet. You can do this using the Google Cloud CLI or
the Google Cloud console.
gcloud
Run the following command:
gcloud container clusters create-auto CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION \
--create-subnetwork = name = SUBNET_NAME \
--enable-master-authorized-networks \
--enable-private-nodes \
--enable-private-endpoint
Replace the following:
CLUSTER_NAME : the name of the new cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster.
SUBNET_NAME : the name of the new subnetwork in which
you want to place the cluster.
Console
Create a Virtual Private Cloud subnetwork
Go to the VPC networks page in the Google Cloud console.
Go to VPC networks
Click the default network.
In the Subnets section, click Add subnet .
On the Add a subnet dialog, specify the following:
Name : A name for the new subnet.
Region : A region for the subnet. This must be the same as the
cluster region.
IP address range : Specify 10.2.204.0/22 or another range that
doesn't conflict with other ranges in the VPC network.
For Private Google Access , select the On option.
Click Add .
Create a private cluster
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click add_box Create .
Click Configure for GKE Autopilot .
Specify a Name and Region for the new cluster. The region must be
the same as the subnet.
In the Networking section, select the Private cluster option.
Clear the Access control plane using its external IP address checkbox.
From the Node subnet drop-down list, select the subnet you created.
Optionally, configure other settings for the cluster.
Click Create .
You can also use a GKE Standard cluster with the
--master-ipv4-cidr flag
specified.
Create a bastion host VM
Create a Compute Engine VM within the private cluster internal network
to act as a bastion host that can manage the cluster.
gcloud
Create a Compute Engine VM:
gcloud compute instances create INSTANCE_NAME \
--zone = COMPUTE_ZONE \
--machine-type = e2-micro \
--network-interface = no-address,network-tier = PREMIUM,subnet = SUBNET_NAME
Replace the following:
INSTANCE_NAME : the name of the VM.
COMPUTE_ZONE : the Compute Engine zone for
the VM. Place this in the same region as the cluster.
SUBNET_NAME : the subnetwork in which you want
to place the VM.
Note: We recommend that you create the VM in the same VPC subnet as the cluster.
If you create the VM in a different subnet, add the VM IP address range
as an authorized network
for the cluster.
Console
Go to the VM instances page in the Google Cloud console.
Go to VM instances
Click Create instance .
Specify the following:
Name : the name of your VM.
Region and Zone : the region and zone of your VM. Use the same
region as your cluster.
Machine type : a machine type. Choose a small machine type, such
as e2-micro .
For Network interfaces , select the same VPC network
and subnet as the cluster.
Optionally, configure other settings for the instance.
Click Create .
Note: Create the VM in the same VPC subnet as the cluster.
If you create the VM in a different subnet, add the VM IP address range
as an authorized network
for the cluster.
Note: You should automate bastion host setup and upgrades using a tool like
Terraform .
Create firewall rule
To allow IAP to connect to your bastion host VM, create a firewall rule .
Deploy the proxy
Note: Some commands in this section require administrator privileges.
With the bastion host and the private cluster configured, you must deploy
a proxy daemon in the host to forward traffic to the cluster control plane.
For this tutorial, you install Tinyproxy .
Start a session into your VM:
gcloud compute ssh INSTANCE_NAME --tunnel-through-iap --project = PROJECT_ID
Install Tinyproxy:
sudo apt install tinyproxy
Open the Tinyproxy configuration file:
sudo vi /etc/tinyproxy/tinyproxy.conf
In the file, do the following:
Verify that the port is 8888 .
Search for the Allow section:
/Allow 127
Add the following line to the Allow section:
Allow localhost
Save the file and restart Tinyproxy:
sudo service tinyproxy restart
Exit the session:
exit
Connect to your cluster from the remote client
After configuring Tinyproxy, you must set up the remote client with cluster
credentials and specify the proxy. Do the following on the remote client:
Get credentials for the cluster:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION \
--project = PROJECT_ID
Replace the following:
CLUSTER_NAME : the name of the private cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
PROJECT_ID : the ID of the Google Cloud project
of the cluster.
Tunnel to the bastion host using IAP:
gcloud compute ssh INSTANCE_NAME \
--tunnel-through-iap \
--project = PROJECT_ID \
--zone = COMPUTE_ZONE \
--ssh-flag = "-4 -L8888:localhost:8888 -N -q -f"
Specify the proxy:
export HTTPS_PROXY = localhost:8888
kubectl get ns
The output is a list of namespaces in the private cluster.
Stop listening on the remote client
If you want to revert the change on the remote client at any time,
you should end the listener process on TCP port 8888. The command to do this
is different depending on the client operating system.
netstat -lnpt | grep 8888 | awk '{print $7}' | grep -o '[0-9]\+' | sort -u | xargs sudo kill
Troubleshooting
Firewall restrictions in enterprise networks
If you're on an enterprise network with a strict firewall, you might not be able
to complete this tutorial without requesting an exception. If you request an
exception, the source IP range for the bastion host is 35.235.240.0/20 by
default.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
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
Delete individual resources
Delete the bastion host that you deployed in this tutorial:
gcloud compute instances delete INSTANCE_NAME \
--zone = COMPUTE_ZONE
Delete the cluster:
gcloud container clusters delete CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
Delete the subnet:
gcloud compute networks subnets delete SUBNET_NAME \
--region = CONTROL_PLANE_LOCATION
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
