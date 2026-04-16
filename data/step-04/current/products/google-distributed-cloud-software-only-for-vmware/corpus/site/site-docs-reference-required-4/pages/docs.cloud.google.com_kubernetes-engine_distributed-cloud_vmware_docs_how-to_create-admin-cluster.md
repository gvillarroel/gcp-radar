---
title: "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\
  \ VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster
  title: "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\
    \ VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Create an admin cluster
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to create an admin cluster for Google Distributed Cloud. The admin
cluster manages user clusters that run your workloads. If you want to
use topology domains, see
Create an admin cluster for use with topology domains .
This page is for Admins, Architects, and Operators who set up,
monitor, and manage the tech infrastructure. To learn more about common roles
and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
For more details about the admin cluster, see the
installation overview .
In version 1.33 and higher, all new clusters are created as
advanced clusters . Be sure to review
Differences when running advanced clusters .
Before you begin
Make sure you have set up and can sign in to your admin workstation as
described in
Create an admin workstation .
Make sure the JSON key files for the service accounts are on your admin
workstation.
Review the
IP addresses planning document .
Ensure that you have enough IP addresses available for the three control-plane
nodes and a control-plane VIP. If you plan to create any
kubeception user clusters ,
then you must have enough IP addresses available for the control-plane nodes
of those user clusters.
Review the
load balancing overview and revisit
your decision about the kind of load balancer you want to use. For manual load
balancers, you must set up the load balancer before you create your admin
cluster.
If you are using gkectl to create the admin cluster, decide whether you want
to use a public or private registry for Google Distributed Cloud components. For
information on using a private Docker registry, see
privateRegistry .
Neither Terraform nor the Google Cloud console support using a private Docker
registry for system components.
Decide what type of operating system you want to run on your admin
cluster nodes.
If your organization requires outbound traffic to pass through a proxy
server, make sure to
allowlist required APIs and
the Artifact Registry address.
In version 1.29 and higher, server-side preflight checks are enabled by
default. Server-side preflight checks require additional firewall rules. In
Firewall rules for admin clusters ,
search for "Preflight checks" and make sure all required firewall rules are
configured.
Server-side preflight checks are run on the bootstrap cluster instead of
locally on the admin workstation.
Create an admin cluster with the tool of your choice
This section provides steps for creating an admin cluster using gkectl ,
Terraform, and the Google Cloud console. For information to help you choose a tool
and limitations with some tools, see
Choose a tool to manage cluster lifecycle .
gkectl
Procedure overview
These are the primary steps involved in creating an admin cluster:
Fill in your configuration files.
Specify the details for your new admin
cluster by completing and validating an admin cluster configuration file, a
credentials configuration file, and possibly an IP block file.
Import OS images to vSphere, and push container images to the private registry if applicable.
Run gkectl prepare .
Create an admin cluster.
Use gkectl to create a new admin cluster as specified in your
completed configuration files. When Google Distributed Cloud creates an admin
cluster, it deploys a Kubernetes in Docker (kind)
cluster to temporarily host the Kubernetes controllers needed to create the
admin cluster. This transient cluster is called a bootstrap cluster . User
clusters are created and upgraded by their managing admin without the use
of a bootstrap cluster.
Verify that your admin cluster is running.
Use kubectl to view your cluster nodes.
At the end of this procedure, you will have a running admin cluster that you can
use to create and manage user clusters.
If you use VPC Service Controls, you might see errors when you run some
gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP
service: [Stackdriver] could not get GCP services" . To avoid these errors, add
the --skip-validation-gcp parameter to your commands.
Fill in your configuration file
Make sure that your admin workstation has the required version of gkectl .
Typically, you use the same version of gkectl as the version that will be
used when you create the cluster. You specify the cluster version in the
gkeOnPremVersion field in the cluster configuration file. The following
version rules are enforced during cluster creation:
The gkectl minor version can't be lower than the minor version for the
cluster. For example, creating a 1.30 cluster using gkectl version 1.29
isn't allowed. Patch versions don't matter. For example, you can use
gkectl version 1.29.0-gke.1456 to create a cluster with a higher patch
version, such as 1.29.1000-gke.94.
The gkectl minor version can't be more than two minor versions
higher than the cluster version. For example, if you are creating a 1.28
cluster, the gkectl version can be 1.29 or 1.30. But you can't use
gkectl version 1.31 because that is three minor versions higher than the
cluster version.
If needed, see Download gkectl to
get a supported version of gkectl .
If you used gkeadm to create your admin workstation, it generated a configuration
file named admin-cluster.yaml .
If you didn't use gkeadm to create your admin workstation, then generate
admin-cluster.yaml by running this command on your admin workstation:
gkectl create-config admin
This configuration file is for creating your admin cluster.
Familiarize yourself with the configuration file by scanning the
admin cluster configuration file
document. You might want to keep this document open in a separate tab or window,
because you will refer to it as you complete the following steps.
name
If you want to specify a name for your admin cluster, fill in the
name field.
bundlePath
The bundle is a zipped file that contains cluster components. It is included
with the admin workstation. This field is already filled in for you.
vCenter
The fields in this section are already filled in with values that you entered
when you created your admin workstation.
enableAdvancedCluster
In version 1.31, if you want to enable the advanced cluster feature, set
enableAdvancedCluster
to true .
Note the following differences between versions:
In version 1.31, the advanced cluster feature is in preview:
You can enable advanced cluster at cluster creation time for new 1.31
clusters only.
After advanced cluster is enabled, you won't be able to upgrade the cluster
to 1.32. Only enable advanced cluster in a test environment.
In version 1.32, the advanced cluster feature is GA.
By default, admin clusters are created as advanced clusters. You have to
explicitly set enableAdvancedCluster to false if you want to create a
non-advanced cluster.
For clusters that have the advanced clusters feature enabled, cluster
upgrades are supported.
In version 1.33 and higher, all clusters are created as advanced clusters. If
you set enableAdvancedCluster to false , cluster creation fails.
network
Fill in the
network.controlPlaneIPBlock
section and the
network.hostConfig section. Also set
adminMaster.replicas
to 3 .
The
network.podCIDR
and
network.serviceCIDR
fields have prepopulated values that you can leave unchanged unless they
conflict with addresses already being used in your network. Kubernetes uses
these ranges to assign IP addresses to Pods and Services in your cluster.
Fill in the rest of the fields in the
network section of the configuration file
as needed.
loadBalancer
Set aside a VIP for the Kubernetes API server of your admin cluster. Provide
your VIP as the value for
loadBalancer.vips.controlPlaneVIP
For more information, see
VIPs in the admin cluster subnet .
Decide what type of load balancing you want to use. The options are:
MetalLB bundled load balancing. Set
loadBalancer.kind
to "MetalLB" .
Manual load balancing. Set loadBalancer.kind to "ManualLB" , and remove the
manualLB
section.
For more information about load balancing options, see
Overview of load balancing .
antiAffinityGroups
Set antiAffinityGroups.enabled
to true or false according to your preference.
Use this field to specify whether you want Google Distributed Cloud to create
VMware Distributed Resource Scheduler
(DRS) anti-affinity rules for your admin cluster nodes, causing them to be
spread across at least three physical hosts in your data center.
adminMaster
If you want to specify CPU and memory for the control-plane nodes of the admin
cluster, fill in the cpus and memoryMB fields in the
adminMaster
section.
Admin clusters must have three control plane nodes. Set the replicas field in
the adminMaster section to 3 .
proxy
If the network that will have your admin cluster nodes is behind a proxy server,
fill in the
proxy
section.
privateRegistry
Decide where you want to keep container images for the Google Distributed Cloud
components. The options are:
Artifact Registry
Your own private Docker registry.
If you want to use your own private registry, fill in the
privateRegistry
section.
For more information about using a private registry, including differences
between normal clusters and advanced clusters, see
Configure a private container registry .
componentAccessServiceAccountKeyPath
Google Distributed Cloud uses your component access service account to download
cluster components from Artifact Registry. This field holds the path of a JSON
key file for your component access service account.
This field is already filled in for you.
gkeConnect
Register your admin cluster
to a Google Cloud fleet by filling in the
gkeConnect
section. If you include the stackdriver and cloudAuditLogging sections in the
configuration file, the ID in gkeConnect.projectID must be the same as the ID
set in stackdriver.projectID and cloudAuditLogging.projectID . If the project
IDs aren't the same, cluster creation fails.
In 1.28 and later, you can optionally specify a region where the Fleet and
Connect services run in gkeConnect.location . If you don't include this field,
the cluster uses the global instances of these services.
If you include gkeConnect.location , the region that you specify must be the
same as the region configured in cloudAuditLogging.clusterLocation ,
stackdriver.clusterLocation , and gkeOnPremAPI.location . If the regions
aren't the same, cluster creation fails.
gkeOnPremAPI
If the GKE On-Prem API is enabled in your
Google Cloud project, all clusters in the project are
enrolled in the GKE On-Prem API
automatically in the region configured in stackdriver.clusterLocation .
The gkeOnPremAPI.location region must be the same as the region specified in
cloudAuditLogging.clusterLocation , gkeConnect.location ,
and stackdriver.clusterLocation . If the regions aren't the same, cluster
creation fails.
If you want to enroll all clusters in the project in the GKE On-Prem API,
be sure to do the steps in
Before you begin to
activate and use the GKE On-Prem API in the project.
If you don't want to enroll the cluster in the GKE On-Prem API, include
this section and set gkeOnPremAPI.enabled to false . If you don't
want to enroll any clusters in the project, disable
gkeonprem.googleapis.com (the service name for the GKE On-Prem API)
in the project. For instructions, see
Disabling services .
stackdriver
If you want to enable
Cloud Logging and Cloud Monitoring
for your cluster, fill in the
stackdriver
section.
This section is required by default. That is, if you don't fill in this
section, then you must include the --skip-validation-stackdriver flag when you
run gkectl create admin .
Note the following requirements:
If you
enable advanced cluster ,
you must specify the same path in cloudAuditLogging.serviceAccountKeyPath
and stackdriver.serviceAccountKeyPath .
The ID in stackdriver.projectID must be the same as the ID
in gkeConnect.projectID and cloudAuditLogging.projectID .
The Google Cloud region set in stackdriver.clusterLocation must be the same
as the region set in cloudAuditLogging.clusterLocation and
gkeConnect.location . Additionally, if gkeOnPremAPI.enabled is true , the
same region must be set in gkeOnPremAPI.location .
If the project IDs and regions aren't the same, cluster creation fails.
cloudAuditLogging
If you want to integrate the audit logs from your cluster's Kubernetes API
server with Cloud Audit Logs, fill in the
cloudAuditLogging
section.
Note the following requirements:
If you enable advanced cluster, you must specify the same path in
cloudAuditLogging.serviceAccountKeyPath and
stackdriver.serviceAccountKeyPath .
The ID in cloudAuditLogging.projectID must be the same as the ID
in gkeConnect.projectID and stackdriver.projectID .
The Google Cloud region set in cloudAuditLogging.clusterLocation must be
the same as the region set in stackdriver.clusterLocation and
gkeConnect.location (if the field is included in your configuration file).
Additionally, if gkeOnPremAPI.enabled is true , the same region must be
set in gkeOnPremAPI.location .
If the project IDs and regions aren't the same, cluster creation fails.
clusterBackup
If you want to enable
backing up of the admin cluster ,
set
clusterBackup.datastore
to the
vSphere datastore
where you want to save cluster backups.
If you enable advanced cluster, remove this section. Backing up the admin
cluster to a vSphere datastore isn't supported.
autoRepair
If you want to
enable automatic node repair
for your admin cluster, set
autoRepair.enabled
to true .
secretsEncryption
If you want to enable
always-on Secrets encryption ,
fill in the
secretsEncryption
section.
If you enable advanced cluster, set secretsEncryption.enabled to false .
Always-on Secrets encryption isn't supported.
osImageType
Decide what type of OS image you want to use for the admin cluster nodes, and
fill in the
osImageType
section accordingly.
If you enable advanced cluster, set osImageType to either ubuntu_cgroupv2 or
ubuntu_containerd .
Example of filled-in configuration files
Here is an example of a filled-in admin cluster configuration file. The
configuration enables some, but not all, of the available features.
vc-01-admin-cluster.yaml
apiVersion: v1
kind: AdminCluster
name: "gke-admin-01"
bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz"
vCenter:
address: "vc01.example"
datacenter: "vc-01"
cluster: "vc01-workloads-1"
resourcePool: "vc-01-pool-1"
datastore: "vc01-datastore-1"
caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem""
credentials:
fileRef:
path: "credential.yaml"
entry: "vCenter"
network:
hostConfig:
dnsServers:
- "203.0.113.1"
- "198.51.100.1"
ntpServers:
- "216.239.35.4"
serviceCIDR: "10.96.232.0/24"
podCIDR: "192.168.0.0/16"
vCenter:
networkName: "vc01-net-1"
controlPlaneIPBlock:
netmask: "255.255.248.0"
gateway: "21.0.143.254"
ips:
- ip: "21.0.140.226"
hostname: "admin-cp-vm-1"
- ip: "21.0.141.48"
hostname: "admin-cp-vm-2"
- ip: "21.0.141.65"
hostname: "admin-cp-vm-3"
loadBalancer:
vips:
controlPlaneVIP: "172.16.20.59"
kind: "MetalLB"
antiAffinityGroups:
enabled: true
adminMaster:
cpus: 4
memoryMB: 16384
replicas: 3
componentAccessServiceAccountKeyPath: "sa-key.json"
gkeConnect:
projectID: "my-project-123"
registerServiceAccountKeyPath: "connect-register-sa-2203040617.json"
stackdriver:
projectID: "my-project-123"
clusterLocation: "us-central1"
enableVPC: false
serviceAccountKeyPath: "log-mon-sa-2203040617.json"
disableVsphereResourceMetrics: false
clusterBackup:
datastore: "vc-01-datastore-bu"
autoRepair:
enabled: true
osImageType: "ubuntu_containerd"
Validate your configuration file
After you've filled in your admin cluster configuration file, run
gkectl check-config to verify that the file is valid:
gkectl check-config --config ADMIN_CLUSTER_CONFIG
Replace ADMIN_CLUSTER_CONFIG with the path of your admin cluster
configuration file.
If the command returns any failure messages, fix the issues and validate the
file again.
If you want to skip the more time-consuming validations, pass the --fast flag.
To skip individual validations, use the --skip-validation-xxx flags. To
learn more about the check-config command, see
Running preflight checks .
Get OS images
Run gkectl prepare to initialize your vSphere environment:
gkectl prepare --config ADMIN_CLUSTER_CONFIG
The gkectl prepare command performs the following preparatory tasks:
Imports OS images to vSphere and marks them as VM templates.
If you are using a private Docker registry, pushes the container images to
your registry.
Optionally, validates the container images' build attestations,
thereby verifying the images were built and signed by Google and are ready for
deployment.
Note: If you're using internal DNS names, or your workstation cannot access
Google public DNS addresses (8.8.8.8 or 8.8.4.4), you must specify your internal
nameserver in
/etc/resolv.conf .
Create the admin cluster
Create the admin cluster:
gkectl create admin --config ADMIN_CLUSTER_CONFIG
If you use VPC Service Controls, you might see errors when you run some
gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP
service: [Stackdriver] could not get GCP services" . To avoid these errors, add
the --skip-validation-gcp parameter to your commands.
Resume creation of the admin cluster after a failure
If the admin cluster creation fails or is canceled, you can run the create command again:
gkectl create admin --config ADMIN_CLUSTER_CONFIG
Locate the admin cluster kubeconfig file
The gkectl create admin command creates a kubeconfig file named
kubeconfig in the current directory. You will need this kubeconfig file
later to interact with your admin cluster.
The kubeconfig file contains the name of your admin cluster. To view the cluster name, you can run:
kubectl config get-clusters --kubeconfig ADMIN_CLUSTER_KUBECONFIG
The output shows the name of the cluster. For example:
NAME
gke-admin-tqk8x
If you like, you can change the name and location of your kubeconfig file.
Manage the checkpoint.yaml file
This section applies only to non-HA admin clusters. The checkpoint.yaml file
isn't used the creation of HA admin clusters.
When you ran the gkectl create admin command to create the admin cluster, it
created a checkpoint file in the same datastore folder as the admin
cluster data disk. By default, this file has the name
DATA_DISK_NAME ‑checkpoint.yaml . If the length of
DATA_DISK_NAME is greater than or equal to 245 characters, then, due
to the vSphere limit on filename length, the name is
DATA_DISK_NAME .yaml .
This file contains the admin cluster state and credentials, and is used for
future upgrades. Don't delete this file unless you
are following the process for
deleting an admin cluster .
If you have enabled VM encryption in your instance of vCenter Server, then you
must have the
Cryptographic operations.Direct Access
privilege before you create or upgrade your admin
cluster. Otherwise the checkpoint will not be uploaded. If you cannot obtain
this privilege, then you can disable uploading the checkpoint file by using the
hidden flag --disable-checkpoint when you run a relevant command.
The checkpoint.yaml file is automatically updated when you run the
gkectl upgrade admin command, or when you run a gkectl update command that
affects the admin cluster.
Verify that your admin cluster is running
Verify that your admin cluster is running:
kubectl get nodes --kubeconfig ADMIN_CLUSTER_KUBECONFIG
Replace ADMIN_CLUSTER_KUBECONFIG with the path of your admin cluster
kubeconfig file.
The output shows the admin cluster nodes. For example:
admin-cp-vm-1 Ready control-plane,master ...
admin-cp-vm-2 Ready control-plane,master ...
admin-cp-vm-3 Ready control-plane,master ...
Back up files
We recommend that you back up your admin cluster kubeconfig file. That is, copy
the kubeconfig file from your admin workstation to another location. Then if you
lose access to the admin workstation, or if the kubeconfig file on your admin
workstation gets accidentally deleted, you still have access to the admin
cluster.
We also recommend that you back up the private SSH key for your admin cluster.
Then if you lose access to the admin cluster, you can still use SSH to
connect to the admin cluster nodes. This will allow you to troubleshoot and
investigate any issues with connectivity to the admin cluster.
Extract the SSH key from the admin cluster to a file named
admin-cluster-ssh-key :
kubectl --kubeconfig ADMIN_CLUSTER_KUBECONFIG get secrets -n kube-system sshkeys \
-o jsonpath='{.data.vsphere_tmp}' | base64 -d > admin-cluster-ssh-key
Now you can back up admin-cluster-ssh-key to another location of your choice.
RBAC policies
When you fill in the
gkeConnect section
in your admin cluster configuration file, the cluster is registered to your
fleet during creation or update. To enable
fleet management functionality, Google Cloud deploys the
Connect agent and creates a Google
service account that represents the project that the cluster is registered to.
The Connect agent establishes a connection with the service account to handle
requests to the cluster's Kubernetes API server. This enables access to
cluster and workload management features in Google Cloud, including access
to the Google Cloud console , which lets you interact with
your cluster.
The admin cluster's Kubernetes API server needs to be able to authorize
requests from the Connect agent. To ensure this, the following
role-based access control (RBAC) policies
are configured on the service account:
An impersonation policy
that authorizes the Connect agent to send requests to the Kubernetes API
server on behalf of the service account.
A permissions policy that specifies the operations that are allowed on
other Kubernetes resources.
The service account and RBAC policies are needed so that you can manage the
lifecycle of your user clusters in the Google Cloud console.
Terraform
Procedure overview
Before you create the admin cluster, you need to run the
gkectl register bootstrap command on your admin workstation. This command
deploys a Kubernetes in Docker
( kind ) cluster on the admin workstation. This bootstrap cluster hosts the
Kubernetes controllers needed to create the admin cluster. When you create the
admin cluster, the controllers on the bootstrap cluster will provision nodes,
run preflight checks, and register the admin cluster to the fleet. The bootstrap
cluster is automatically deleted after the admin cluster is successfully
created.
The following are the high-level steps for creating an admin cluster using
Terraform:
Fill in your configuration file.
Use the
google_gkeonprem_vmware_admin_cluster resource and the example that
follows to create the main.tf configuration file.
Create a bootstrap cluster.
Run the gkectl register bootstrap to create the bootstrap cluster. When the
command finishes creating the bootstrap cluster, the output lets you know to
finish the admin cluster configuration. The process continues to run until the
admin cluster is created.
Create an admin cluster.
In another terminal window or on another computer that has access to the
GKE On-Prem API, run terraform commands to create a new admin cluster as
specified in your completed main.tf configuration file.
Fill in your configuration file
The following example shows creating a high-availability (HA) admin cluster
with three control-plane nodes with MetalLB. In 1.28 and higher, new admin
clusters must be highly available. Because of this requirement, you
must set control_plane_node.replicas to 3.
For more information and other examples, see the
google_gkeonprem_vmware_admin_cluster reference documentation . For information
on using a private registry for system images, see
Configure a private container registry .
Fill in the placeholder variables in the following example, then copy and paste
it to main.tf . If you used gkeadm to create your admin workstation, open
your admin workstation configuration file so you can copy values from the
vCenter section to the corresponding placeholder variables.
resource "google_gkeonprem_vmware_admin_cluster" "admin-cluster-metallb" {
provider = google-beta
name = " ADMIN_CLUSTER_NAME "
project = " PROJECT_ID "
location = " REGION "
description = " DESCRIPTION "
bootstrap_cluster_membership = "projects/ PROJECT_ID /locations/ REGION /memberships/bootstrap- ADMIN_CLUSTER_NAME "
on_prem_version = " VERSION "
image_type = " IMAGE_TYPE "
vcenter {
address = " VCENTER_ADDRESS "
datacenter = " DATA_CENTER "
cluster = " VCENTER_CLUSTER "
resource_pool = " RESOURCE_POOL "
datastore = " DATASTORE "
ca_cert_data = " CA_CERT_DATA "
}
network_config {
service_address_cidr_blocks = [" 10.96.232.0/24 "]
pod_address_cidr_blocks = [" 192.168.0.0/16 "]
vcenter_network = " NETWORK "
dhcp_ip_config {
enabled = true
}
host_config {
dns_servers = [" DNS_SERVERS "]
ntp_servers = [" NTP_SERVERS "]
}
ha_control_plane_config {
control_plane_ip_block {
gateway = " GATEWAY "
netmask = " NETMASK "
ips {
hostname = " CONTROL_PLANE_HOST_1 "
ip = " CONTROL_PLANE_NODE_IP_1 "
}
ips {
hostname = " CONTROL_PLANE_HOST_2 "
ip = " CONTROL_PLANE_NODE_IP_2 "
}
ips {
hostname = " CONTROL_PLANE_HOST_3 "
ip = " CONTROL_PLANE_NODE_IP_3 "
}
}
}
}
control_plane_node {
cpus = NUM_CPUS
memory = MEMORY
replicas = 3
}
load_balancer {
vip_config {
control_plane_vip = " CONTROL_PLANE_VIP "
}
metal_lb_config {
enabled = true
}
}
}
Replace the following:
ADMIN_CLUSTER_NAME : the name for the admin cluster.
The name has a maximum length of 20 characters.
PROJECT_ID : the Google Cloud project ID.
REGION : the Google Cloud region in which the
GKE On-Prem API ( gkeonprem.googleapis.com ), Fleet service
( gkehub.googleapis.com ), and the Connect service
( gkeconnect.googleapis.com ) run. Specify us-west1 or another
supported region .
The location field corresponds to the --location flag in the gkectl
register bootstrap command.
DESCRIPTION : a description of the admin cluster.
VERSION : the Google Distributed Cloud version for the cluster.
Creating a cluster using Terraform is supported only on versions 1.28 and
higher. The version you specify here must match the version of the bundle
that you specify in the --bundle-path flag in the gkectl register
bootstrap command. For a list of versions, see
Google Distributed Cloud versions .
IMAGE_TYPE : the type of OS image to run on your admin
cluster nodes. Specify one of the following: " ubuntu_containerd ", " cos ",
" ubuntu_cgv2 ", or " cos_cgv2 ".
VCENTER_ADDRESS : the
vCenter Server address .
Admin workstation configuration file : Use the value from the
vCenter.credentials.address field.
The vcenter.address field corresponds to the --vcenter-address flag in
the gkectl register bootstrap command.
DATA_CENTER : the name of your
vCenter data center .
Admin workstation configuration file : Use the value from the
vCenter.datacenter field.
The vcenter.datacenter field corresponds to the --vcenter-datacenter
flag in the gkectl register bootstrap command.
VCENTER_CLUSTER : the name of your
vCenter cluster .
Admin workstation configuration file : Use the value from the
vCenter.cluster field.
The vcenter.cluster field corresponds to the --vcenter-cluster flag in
the gkectl register bootstrap command.
RESOURCE_POOL : the name or path of your
vCenter resource pool .
Admin workstation configuration file : Use the value from the
vCenter.resourcePool field.
The vcenter.resource_pool field corresponds to the
--vcenter-resource-pool flag in the gkectl register bootstrap command.
DATASTORE : the name of your
vCenter datastore . The value you specify
must be a name, not a path. If you need to enter a path, add the following
field: folder = " FOLDER "
Admin workstation configuration file : Use the value from the
vCenter.datastore field.
The vcenter.datastore field corresponds to the --vcenter-datastore
flag in the gkectl register bootstrap command.
If you want to use a
VM storage policy for the cluster nodes,
remove the vcenter.datastore field and add vcenter.storage_policy_name
instead. Additionally, add the --vcenter-storage-policy flag to the
gkectl register bootstrap command. You must specify a value for either
vcenter.datastore or vcenter.storage_policy_name , but not both.
FOLDER : the name of the
vCenter folder where your cluster
VMs will be located. If you aren't using a folder, remove this field.
Admin workstation configuration file : Use the value from the
vCenter.folder field.
The vcenter.folder field corresponds to the --vcenter-folder flag
in the gkectl register bootstrap command.
CA_CERT_DATA : the vCenter CA certificate in PEM format
but with all the newlines replaced with the string \n .
Run the following command to replace newlines with \n :
awk 'ORS="\\n" {print}' CA_CERT_PATH_LOCAL
Replace CA_CERT_PATH_LOCAL with the path to the
root CA certificate for your
vCenter Server. If you used gkeadm to create your admin workstation, you
can use the value from the caCertPath field in the admin workstation
configuration file, which is the path on your local computer. gkeadm
copied the CA certificate file to your admin workstation. You must specify
the admin workstation path in the --vcenter-ca-cert-path flag in the
gkectl register bootstrap command.
Copy the output of the previous command and paste it into the
CA_CERT_DATA placeholder variable.
NETWORK : the name of your
vCenter network .
Admin workstation configuration file : use the value from the
vCenter.network field.
The network_config.vcenter_network field corresponds to the
--vcenter-network flag in the gkectl register bootstrap command.
GATEWAY : the IP address of the default gateway for the
subnet that has your control-plane cluster nodes.
NETMASK : the netmask for the subnet that has your
control-plane cluster nodes.
DNS_SERVERS : the IP address of the DNS server.
NTP_SERVERS : the IP address of the time (NTP) server.
Enter the IP addresses and optionally, the hostname for
the three control-plane nodes in the control_plane_ip_block.ips section. If
you don't enter a hostname, remove the hostname fields from the config.
NUM_CPUS : the number of vCPUs for each control-plane node
in the admin cluster. Must be a minimum of 4.
MEMORY : number of mebibytes of memory for each
control-plane node in the admin cluster. Must be a minimum of 8192, but we
recommend 16384.
CONTROL_PLANE_VIP : the IP address that you have chosen to
configure on the load balancer for the Kubernetes API server of the admin
cluster.
Optional: Configure a private registry
By default during cluster creation or upgrade, Google Distributed Cloud pulls system
images from gcr.io/gke-on-prem-release using the
component access service account .
Optionally, you can provide your own container registry server so that
system images are pulled from your private registry server instead.
To configure a private registry do the following:
Add the following to the admin cluster configuration file:
private_registry_config {
address = " ADDRESS "
ca_cert = " CA_CERT "
}
Replace the following:
ADDRESS : the IP address or FQDN (Fully Qualified
Domain Name) of the machine that runs your private registry.
CA_CERT : the CA certificate data of the public key
but with all the newlines replaced with the string \n .
Run the following command to replace newlines with \n :
awk 'ORS="\\n" {print}' PUBLIC_KEY_PATH
Replace PUBLIC_KEY_PATH with the path to the
public key.
Copy the output of the previous command and paste it into the
CA_CERT placeholder variable.
If your network is behind a proxy server, add the following:
proxy {
url : " PROXY_SERVER_ADDRESS "
no_proxy : " BYPASS_LIST "
}
Replace the following:
PROXY_SERVER_ADDRESS : the HTTP address of your
proxy server. Include the port number even if it's the same as the
scheme's default port.
BYPASS_LIST : a comma-separated list of IP
addresses, IP address ranges, host names, and domain names that
shouldn't go through the proxy server.
Example:
url : "http://my-proxy.example.local:80"
no_proxy : "192.0.2.0/24,my-host.example.local,198.51.100.0"
When Google Distributed Cloud sends a request to one of these addresses, hosts,
or domains, the request bypasses the proxy server and is sent directly
to the destination.
For more information about using a private registry, including differences
between normal clusters and advanced clusters, see
Configure a private container registry .
Verify the configuration file and plan
In the directory where main.tf is located, run the following commands:
Initialize Terraform:
terraform init
Terraform installs any needed libraries, such as the Google Cloud provider.
Fix any errors in maint.tf if needed.
Create the Terraform plan:
terraform plan -out tfplan
Review the configuration and make changes if needed.
Before you apply the plan, you must first create the bootstrap cluster as
described in the next section.
Create the bootstrap cluster
When you run the gkectl register bootstrap command, it prompts you for the
vCenter account username and password. Make sure you have the credentials
available. If you used gkeadm to create the admin workstation, the username
and password are in the file credential.yaml .
Log on to your admin workstation using SSH.
Authenticate with the Google Cloud CLI:
gcloud auth login
Run the following command to create the bootstrap cluster. Many of the
flag values are the same as in the main.tf fields. Note, however,
the command takes additional values that you must specify in the
provided placeholder variables.
gkectl register bootstrap \
--target-cluster-name= ADMIN_CLUSTER_NAME \
--project-id= PROJECT_ID \
--location= REGION \
--vcenter-address= VCENTER_ADDRESS \
--vcenter-datacenter= DATA_CENTER \
--vcenter-cluster= VCENTER_CLUSTER \
--vcenter-resource-pool= RESOURCE_POOL \
--vcenter-datastore= DATASTORE \
--vcenter-network= NETWORK \
--vcenter-ca-cert-path= CA_CERT_PATH \
--bundle-path= BUNDLE_PATH \
--component-access-service-account-key-path= COMPONENT_ACCESS_SA_PATH \
--register-service-account-key-path= CONNECT_REGISTER_SA_PATH \
--stackdriver-service-account-key-path= LOG_MON_SA_PATH \
--cloud-audit-logging-service-account-key-path= CLOUD_AUDIT_SA_PATH \
--admin-kubeconfig-out= KUBECONFIG_NAME
Replace the following with admin workstation paths:
CA_CERT_PATH : the path to the root CA certificate for
your vCenter Server.
BUNDLE_PATH : the path to the bundle file. If you used
gkeadm to create the admin workstation, the bundle file is located
in /var/lib/gke/bundles/ . The file name depends on the Google Distributed Cloud
version, for example, gke-onprem-vsphere-1.31.0-gke.889-full.tgz .
COMPONENT_ACCESS_SA_PATH : the path to key file
for the component access service account.
CONNECT_REGISTER_SA_PATH : the path to the key file
for the connect-register service account.
LOG_MON_SA_PATH : the path to the key file for the
logging-monitoring service account.
CLOUD_AUDIT_SA_PATH : the path to the audit logging
service account. If you didn't create an audit logging service account,
specify the path to the key file for the logging-monitoring service
account.
KUBECONFIG_NAME : the name for kubeconfig
file that the gkectl register bootstrap command creates. If you
don't specify this flag, the command creates the file with the name
kubeconfig in the current working directory. If there's an existing
file called kubeconfig , the command overwrites the file.
Modify the command as needed for the following flags:
If you specified a folder in main.tf , add the following flag:
--vcenter-folder= FOLDER
If you specified a VM storage policy in main.tf , remove
--vcenter-datastore and add the following flag:
--vcenter-storage-policy-name= STORAGE_POLICY_NAME
If your admin workstation will be on a network that's behind a proxy
server, add the following flags:
--proxy-url= PROXY_URL
--no-proxy= NO_PROXY
Replace the following:
PROXY_URL : the URL of the proxy server.
NO_PROXY : the value of the domains and IP addresses
excluded from proxying, separated by comma.
If you add a flag, make sure you add the command line continuation backslash
character (\).
When prompted, enter (or copy and paste) the vCenter username. The username
isn't echoed back to the screen.
When prompted, enter (or copy and paste) the vCenter password. The password
isn't echoed back to the screen.
The command runs numerous validations. After gkectl successfully creates the
bootstrap cluster, you see output similar to the following, which is
truncated for readability:
Running workstation validations
- Validation Category: Workstation
- [SUCCESS] Workstation OS
- [SUCCESS] Workstation Hardware
- [SUCCESS] Workstation Package
- [SUCCESS] Workstation NTP
- [SUCCESS] Workstation Docker
...
All validation results were SUCCESS.
Unpacking GKE on-prem bundle: /var/lib/gke/bundles/gke-onprem-vsphere-1.31.0-gke.889-full.tgz
...
Successfully created and registered the bootstrap cluster
...
Waiting for preflight checks to run or OnPremAdminCluster to be applied...... -
The process continues to run until the admin cluster is created.
Caution: Leave the command running while you create the admin cluster. After the
cluster is successfully created, the command automatically deletes the
bootstrap cluster and exits.
If you exit out of the gkectl register bootstrap command before the admin
cluster is created, the admin cluster creation fails, and you will need to
delete the bootstrap cluster using the following command:
gkectl delete bootstrap \
--target-cluster-name= ADMIN_CLUSTER_NAME \
--project-id= PROJECT_ID \
--location= REGION \
--register-service-account-key-path= CONNECT_REGISTER_SA_PATH
Create the admin cluster
Apply the Terraform plan to create the admin cluster:
terraform apply "tfplan"
It takes about 15 minutes or more to create the admin cluster. You can view
the cluster in the Google Cloud console on the
GKE clusters
page.
Connect to the admin cluster
The gkectl register bootstrap command creates a kubeconfig file for the
admin cluster on your admin workstation. If you didn't specify the
--admin-kubeconfig-out flag when you ran gkectl register bootstrap , the
command creates a kubeconfig file called kubeconfig in the directory in
which you ran the command.
You need to restrict access to this kubeconfig because it contains
authentication credentials for the cluster.
Additionally, you can run read-only kubectl commands through the
connect gateway.
Run the following command on a computer that has gcloud CLI on it
to get a kubeconfig entry that can access the cluster through the
connect gateway.
gcloud container fleet memberships get-credentials ADMIN_CLUSTER_NAME \
--project = PROJECT_ID
The output is similar to the following:
Starting to build Gateway kubeconfig...
Current project_id: PROJECT_ID
A new kubeconfig entry "connectgateway_ PROJECT_ID _global_ ADMIN_CLUSTER_NAME " has been generated and set as the current context.
You can now run read-only kubectl commands through the
connect gateway, such as the following:
kubectl get pods -A
If you need full administrative privileges to the admin cluster, see
Set up the connect gateway .
Console
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Procedure overview
Before you create the admin cluster, you need to run the
gkectl register bootstrap command on your admin workstation. This command
deploys a Kubernetes in Docker
( kind ) cluster on the admin workstation. This bootstrap cluster hosts the
Kubernetes controllers needed to create the admin cluster. When you create the
admin cluster, the controllers on the bootstrap cluster will provision nodes,
run preflight checks, and register the admin cluster to the fleet. The bootstrap
cluster is automatically deleted after the admin cluster is successfully
created.
The following are the high-level steps for creating an admin cluster using the
console:
In the console, you enter information that the
gkectl register bootstrap requires. The console displays
the gkectl register bootstrap command with the information that you
entered. The displayed command also includes flags for paths that you will
need to specify before you run the command.
On your admin workstation, you run gkectl register bootstrap to
create the bootstrap cluster. When the command finishes creating the
bootstrap cluster, the output lets you know to finish the admin
cluster configuration. The process continues to run until the admin cluster
is created.
You return to the console to finish entering the information
needed to create the cluster. During cluster creation, the
gkectl register bootstrap command outputs progress information and writes
logs on your admin workstation. When the admin cluster is created, the
bootstrap cluster is automatically deleted.
Begin configuring the cluster
In the console, go to the Create a cluster on VMware
page.
Go to Create a cluster on VMware
Select the Google Cloud project that you want to create the cluster in.
When you create the bootstrap cluster in a following section, the selected
project ID is displayed in the gkectl register bootstrap command in the
--project-id flag.
Make sure Create an admin cluster is selected.
Click Next: Install bootstrap environment .
Install bootstrap environment
In this section you enter the information that the gkectl register bootstrap
command requires. As you enter values in the UI fields, the
console copies the values to the corresponding flags for the
gkectl register bootstrap command that is displayed in the
Bootstrap environment from admin workstation section at the bottom of
the page.
Bootstrap environment basics
Enter a Name for the admin cluster. The console uses the
cluster name as the value for the --target-cluster-name flag in the
gkectl register bootstrap command displayed at the bottom of the page.
The name has a maximum length of 20 characters.
In the Google Cloud API Location field, select a Google Cloud
region from the
list. This setting specifies the region where the following APIs and
services run:
GKE On-Prem API ( gkeonprem.googleapis.com )
Fleet service ( gkehub.googleapis.com )
Connect service ( gkeconnect.googleapis.com )
This setting also controls the region in which the following are stored:
The cluster metadata that the GKE On-Prem API needs to manage the cluster
lifecycle
The Cloud Logging and Cloud Monitoring data of system components
The Admin Audit log created by Cloud Audit Logs
The Google Cloud API Location field corresponds to the --location flag
in the gkectl register bootstrap command.
In the Admin cluster version field, enter the version to use to create
the cluster. The version you select here must match the version of the
bundle that you specify in the --bundle-path flag in the gkectl register
bootstrap command.
vCenter configuration
If you used gkeadm to create your admin workstation, open your admin
workstation configuration file so you can copy values from the vCenter
section to the fields in the console. Note that the generated
admin cluster configuration file also contains this information.
Most of the fields in this section are immutable. Refer to the
vCenter section
in the admin cluster configuration file reference if you need to know if a field
is mutable or immutable.
In the Address field, enter the
vCenter Server address .
Admin workstation configuration file : Use the value from the
vCenter.credentials.address field.
The Address field corresponds to the --vcenter-address flag in the
gkectl register bootstrap command.
In the Datacenter field, enter the name of your
vCenter data center .
Admin workstation configuration file : Use the value from the
vCenter.datacenter field.
The Datacenter field corresponds to the --vcenter-datacenter flag
in the gkectl register bootstrap command.
In the Cluster Name field, enter the name of your
vCenter cluster .
Admin workstation configuration file : Use the value from the
vCenter.cluster field.
The Cluster Name field corresponds to the --vcenter-cluster flag in
the gkectl register bootstrap command.
In the Resource pool field, enter the name or path of your
vCenter resource pool .
Admin workstation configuration file : Use the value from the
vCenter.resourcePool field.
The Resource pool field corresponds to the --vcenter-resource-pool
flag in the gkectl register bootstrap command.
Configure a storage option, by enter one of the following:
Datastore field: Enter the name of your
vCenter datastore . The value you specify
must be a name, not a path. If you need to enter a path, enter it
in the Folder field.
Admin workstation configuration file : Use the value from the
vCenter.datastore field.
The Datastore field corresponds to the --vcenter-datastore
flag in the gkectl register bootstrap command.
Storage policy name field: Enter the name of the
VM storage policy for the cluster nodes. For
more information, see
Configure a storage policy .
Admin workstation configuration file : Use the value from the
vCenter.storagePolicyName field.
The Storage policy name field corresponds to the
--vcenter-storage-policy flag in the gkectl register bootstrap
command.
You must enter a value in either the Datastore field or the Storage
Policy Name field, but not both.
Optionally, in the Folder field, enter the name of the
vCenter folder where your cluster
VMs will be located.
Admin workstation configuration file : Use the value from the
vCenter.folder field.
The Folder field corresponds to the --vcenter-folder flag
in the gkectl register bootstrap command.
In the Network field, enter the name of your
vCenter network .
Admin workstation configuration file : Use the value from the
vCenter.network field.
The Network field corresponds to the --vcenter-network flag
in the gkectl register bootstrap command.
In the CA certificate path field, enter the path to the
root CA certificate for your
vCenter Server.
If you used gkeadm to create your admin workstation, gkeadm copied the
CA certificate file that you had locally to your admin workstation.
The CA certificate path field corresponds to the
--vcenter-ca-cert-path in the gkectl register bootstrap command.
Get the CA certificate
After you create the bootstrap cluster, you will need to provide the
vCenter CA certificate in PEM format in the CA certificate data
field on the Cluster basics page. Run the following command
to display the certificate:
cat CA_CERT_PATH
Replace CA_CERT_PATH with the path to the
root CA certificate for your vCenter Server. If you run this command
locally, use the path in vCenter.caCertPath in your admin workstation
configuration file.
Copy the entire certificate to a text editor so that you will be ready to
paste it in the CA certificate data field on the Cluster basics
page after the bootstrap cluster is created.
Bootstrap environment from admin workstation
When you run the gkectl register bootstrap command, it prompts you for the
vCenter account username and password. Make sure you have the credentials
available. If you used gkeadm to create the admin workstation, the username
and password are in the file credential.yaml .
Scroll to the Bootstrap environment from admin workstation section
to display the gkectl register bootstrap command.
Leave this page open while you go to your admin workstation to create the
bootstrap cluster.
Copy and paste the gkectl register bootstrap command into a text editor so
that you can specify values for the following flags:
./gkectl register bootstrap \
...
--bundle-path= BUNDLE_PATH \
...
--component-access-service-account-key-path= COMPONENT_ACCESS_SA_PATH \
--register-service-account-key-path= CONNECT_REGISTER_SA_PATH \
--stackdriver-service-account-key-path= LOG_MON_SA_PATH \
--cloud-audit-logging-service-account-key-path= CLOUD_AUDIT_SA_PATH \
--admin-kubeconfig-out= KUBECONFIG_NAME
Replace the following with admin workstation paths:
BUNDLE_PATH : the path to the bundle file. If you used
gkeadm to create the admin workstation, the bundle file is located
in /var/lib/gke/bundles/ . The file name depends on the Google Distributed Cloud
version, for example, gke-onprem-vsphere-1.31.0-gke.889-full.tgz .
COMPONENT_ACCESS_SA_PATH : the path to key file
for the component access service account.
CONNECT_REGISTER_SA_PATH : the path to the key file
for the connect-register service account.
LOG_MON_SA_PATH : the path to the key file for the
logging-monitoring service account.
CLOUD_AUDIT_SA_PATH : the path to the audit logging
service account. If you didn't create an audit logging service account,
specify the path to the key file for the logging-monitoring service
account.
KUBECONFIG_NAME : the name for kubeconfig
file that the gkectl register bootstrap command creates. If you
don't specify this flag, the command creates the file with the name
kubeconfig in the current working directory. If there's an existing
file called kubeconfig , the command overwrites the file.
Additionally, if you used gkeadm to create your admin workstation,
gkectl was downloaded to the /usr/bin/ directory. In this case,
remove ./ from the beginning of the command since gkectl isn't
in the current working directory.
Use SSH to connect to your admin workstation.
Copy the command and paste it in a terminal window on your admin
workstation.
When prompted, enter (or copy and paste) the vCenter username. The username
isn't echoed back to the screen.
When prompted, enter (or copy and paste) the vCenter password. The password
isn't echoed back to the screen.
The command runs numerous validations. After gkectl successfully creates the
bootstrap cluster, you see output similar to the following, which is
truncated for readability:
Running workstation validations
- Validation Category: Workstation
- [SUCCESS] Workstation OS
- [SUCCESS] Workstation Hardware
- [SUCCESS] Workstation Package
- [SUCCESS] Workstation NTP
- [SUCCESS] Workstation Docker
...
All validation results were SUCCESS.
Unpacking GKE on-prem bundle: /var/lib/gke/bundles/gke-onprem-vsphere-1.31.0-gke.889-full.tgz
...
Successfully created and registered the bootstrap cluster
...
Waiting for preflight checks to run or OnPremAdminCluster to be applied...... -
The process continues to run until the admin cluster is created.
Caution: Leave the command running while you create the admin cluster. After the
cluster is successfully created, the command automatically deletes the
bootstrap cluster and exits.
If you exit out of the gkectl register bootstrap command before the admin
cluster is created, the admin cluster creation fails, and you will need to
delete the bootstrap cluster using the following command:
gkectl delete bootstrap \
--target-cluster-name= ADMIN_CLUSTER_NAME \
--project-id= PROJECT_ID \
--location= REGION \
--register-service-account-key-path= CONNECT_REGISTER_SA_PATH
Finish configuring the admin cluster
Return to the console and do the following steps:
On the Install bootstrap environment page, click
Check Connection .
On success, the console displays
check_circle Connection established .
The connection to the bootstrap cluster must be established before you
continue. If the connection isn't established, check the arguments that
you specified to the gkectl register bootstrap command:
Make sure that the value for --target-cluster-name matches the
Admin cluster name displayed in the
Bootstrap environment basics section.
Make sure the value for --project-id matches the ID of the project
that you selected in the console.
If you need to change the bootstrap cluster name, the project ID, or
other flag values, do the following:
Enter Ctrl-C to exit out of gkectl register bootstrap .
Delete the bootstrap cluster:
gkectl delete bootstrap \
--target-cluster-name= ADMIN_CLUSTER_NAME \
--project-id= PROJECT_ID \
--location= REGION \
--register-service-account-key-path= CONNECT_REGISTER_SA_PATH
Re-run the gkectl register bootstrap command.
Click Next: Cluster basics to begin configuring the admin cluster.
Cluster basics
In the CA certificate data field, copy and paste the entire vCenter CA
certificate in PEM format as described previously in the
Get the CA certificate section.
In the Authorization section, enter the email addresses of users who
you want to grant the read-only Kubernetes clusterrole/view role.
Notice that your email address is automatically added. The role-based access
control (RBAC) policies that are applied let users run read-only
commands through the
connect gateway .
Click Next Control Plane .
Control plane
Review the default settings in Control plane section and change them
as needed.
In the Control plane node IPs section, enter the IP addresses in the
following fields:
Gateway : The IP address of the default gateway for the subnet that has
your cluster nodes.
Netmask : The netmask for the subnet that has your cluster nodes.
IP addresses : Enter the IP address and optionally, the hostname for
the three control-plane nodes.
Click Next: Networking .
Networking
In this section you specify the networking information needed to create the
admin cluster.
In the Service and Pod CIDRs section, either accept the default values
for the Kubernetes Service and Pod IP address ranges, or enter different
CIDR address ranges.
Service CIDR : Smallest possible range: /24 . Largest possible range:
/12 .
Pod CIDR : Smallest possible range: /18 . Largest possible range:
/8`.
In the Host config section, specify the NTP servers, DNS servers, and
optionally the DNS search domains used by the VMs that are your cluster
nodes. After the cluster is created, you cannot modify these values.
Click Next: Load balancer .
Load balancer
In this section, you select the type of load balancer to use. For additional
information, see
Overview of load balancing .
In the Load balancer type list, select a load balancer:
Bundled with MetalLB : The MetalLB load balancer is bundled with
and requires less configuration than manual load balancing. The MetalLB
components run on your cluster nodes, so you don't have to create
separate VMs for your load balancer.
Manual : You can use any load balancer of your choice as long as you
set it up before creating the cluster. With any load balancer
that you set up manually, you must configure mappings between virtual IPs
(VIPs), node addresses, and nodePort values.
In the Control plane VIP field, enter the VIP to be used for traffic sent
to the Kubernetes API server.
Click Verify and Create .
The console displays status messages as it verifies the settings and
creates the cluster in your data center.
If there is a problem with the configuration, the console displays an
error message that should be clear enough for you to fix the configuration
issue and try again to create the cluster.
Details about the cluster creation process are output on your admin
workstation. If the preflight checks pass, you see something like the
following:
[2023-03-22 23:12:47+0000] Waiting for cluster kubeconfig to become ready OK
[2023-03-22 23:15:47+0000] Writing kubeconfig file
[2023-03-22 23:15:47+0000] kubeconfig of cluster being created is present at gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig
[2023-03-22 23:15:47+0000] Please restrict access to this file as it contains authentication credentials of your cluster.
[2023-03-22 23:15:47+0000] Waiting for cluster to become ready OK
[2023-03-22 23:20:17+0000] Please run
[2023-03-22 23:20:17+0000] kubectl --kubeconfig gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig get nodes
[2023-03-22 23:20:17+0000] to get cluster nodes status.
[2023-03-22 23:20:17+0000] Waiting for node pools to become ready OK
[2023-03-22 23:20:37+0000] Waiting for metrics to become ready in GCP OK
[2023-03-22 23:25:38+0000] Waiting for cluster API provider to install in the created admin cluster OK
[2023-03-22 23:25:48+0000] Moving admin cluster resources to the created admin cluster
[2023-03-22 23:25:51+0000] Waiting for node update jobs to finish OK
[2023-03-22 23:27:41+0000] Flushing logs... OK
[2023-03-22 23:27:41+0000] Deleting membership... OK
[2023-03-22 23:27:42+0000] Deleting bootstrap cluster.
Connect to the admin cluster
The gkectl register bootstrap command creates a kubeconfig file for the
admin cluster on your admin workstation. If you didn't specify the
--admin-kubeconfig-out flag when you ran gkectl register bootstrap , the
command creates a kubeconfig file called kubeconfig in the directory in
which you ran the command.
You need to restrict access to this kubeconfig because it contains
authentication credentials for the cluster.
Additionally, you can run read-only kubectl commands through the
connect gateway.
Run the following command on a computer that has gcloud CLI on it
to get a kubeconfig entry that can access the cluster through the
connect gateway.
gcloud container fleet memberships get-credentials ADMIN_CLUSTER_NAME \
--project = PROJECT_ID
The output is similar to the following:
Starting to build Gateway kubeconfig...
Current project_id: PROJECT_ID
A new kubeconfig entry "connectgateway_ PROJECT_ID _global_ ADMIN_CLUSTER_NAME " has been generated and set as the current context.
You can now run read-only kubectl commands through the
connect gateway, such as the following:
kubectl get pods -A
If you need full administrative privileges to the admin cluster, see
Set up the connect gateway .
Troubleshooting
See
Troubleshooting cluster creation and upgrade .
What's next
Create a user cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
