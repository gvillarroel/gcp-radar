---
title: "Deploy a highly-available PostgreSQL database on GKE \_|\_ Kubernetes Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql
  title: "Deploy a highly-available PostgreSQL database on GKE \_|\_ Kubernetes Engine\
    \ \_|\_ Google Cloud Documentation"
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
Deploy a highly-available PostgreSQL database on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
PostgreSQL is an open source
object-relational database known for reliability and data integrity. It is
ACID -compliant, and supports
foreign keys, joins, views, triggers, and stored procedures.
This document is intended for database administrators, cloud architects, and
operations professionals interested in deploying a highly-available PostgreSQL
topology on Google Kubernetes Engine (GKE).
Objectives
In this tutorial, you will learn how to:
Use Terraform to create a regional GKE cluster.
Deploy a highly-available PostgreSQL database.
Set up monitoring for the PostgreSQL application.
Perform PostgreSQL database and GKE cluster upgrades.
Simulate cluster disruption and PostgreSQL replica failover.
Perform backup and restore of the PostgreSQL database.
Architecture
This section describes the architecture of the solution you'll build in this
tutorial.
You'll provision two GKE clusters in different regions: a primary
cluster and a backup cluster . For this tutorial, the primary cluster is in
the us-central1 region and the backup cluster is in the us-west1 region. This
architecture lets you provision a highly-available PostgreSQL database and
test for disaster recovery, as described later in this tutorial.
For the source cluster, you'll use a Helm chart
( bitnami/postgresql-ha ) to
set up a high-availability PostgreSQL cluster.
Figure 1 : Example architecture of a highly-available PostgreSQL cluster.
Costs
In this document, you use the following billable components of Google Cloud:
Artifact Registry
Backup for GKE
Compute Engine
GKE
Google Cloud Managed Service for Prometheus
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Set up your project
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Google Kubernetes Engine, Backup for GKE, Artifact Registry, Compute Engine, and IAM APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Google Kubernetes Engine, Backup for GKE, Artifact Registry, Compute Engine, and IAM APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Set up roles
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/storage.objectViewer, roles/logging.logWriter, roles/artifactregistry.Admin, roles/container.clusterAdmin, roles/container.serviceAgent, roles/serviceusage.serviceUsageAdmin, roles/iam.serviceAccountAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Set up your environment
In this tutorial, you use Cloud Shell to manage resources hosted on
Google Cloud. Cloud Shell comes preinstalled with the software you'll need
for this tutorial, including Docker , kubectl , the gcloud CLI , Helm ,
and Terraform .
To use Cloud Shell to set up your environment:
Launch a Cloud Shell session from the Google Cloud console, by clicking
Activate Cloud Shell in the Google Cloud console .
This launches a session in the bottom pane of Google Cloud console.
Set environment variables.
export PROJECT_ID = PROJECT_ID
export SOURCE_CLUSTER = cluster-db1
export REGION = us-central1
Replace the following values:
PROJECT_ID : your Google Cloud project ID .
Set the default environment variables.
gcloud config set project PROJECT_ID
Clone the code repository.
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
Change to the working directory.
cd kubernetes-engine-samples/databases/gke-stateful-postgres
Create your cluster infrastructure
In this section, you'll run a Terraform script to create a custom
Virtual Private Cloud (VPC), a
Artifact Registry repository to store PostgreSQL images, and two
regional GKE clusters .
One cluster will be deployed in us-central1 and the second cluster for backup
will be deployed in us-west1 .
Note: Because you'll use Google Cloud Managed Service for Prometheus
and Backup for GKE
for this tutorial, it might take up to 8 minutes to create and reconcile the cluster.
To create the cluster, follow these steps:
Autopilot
In Cloud Shell, run the following commands:
terraform -chdir = terraform/gke-autopilot init
terraform -chdir = terraform/gke-autopilot apply -var project_id = $PROJECT_ID
When prompted, type yes .
Understand the Terraform configuration
The Terraform configuration files create the following resources
to deploy your infrastructure:
Create a Artifact Registry repository to store the Docker images.
resource "google_artifact_registry_repository" "main" {
location = "us"
repository_id = "main"
format = "DOCKER"
project = var.project_id
}
Create the VPC network and subnet for the
VM's network interface.
module "gcp-network" {
source = "terraform-google-modules/network/google"
version = "< 8.0.0"
project_id = var.project_id
network_name = "vpc-gke-postgresql"
subnets = [
{
subnet_name = "snet-gke-postgresql-us-central1"
subnet_ip = "10.0.0.0/17"
subnet_region = "us-central1"
subnet_private_access = true
},
{
subnet_name = "snet-gke-postgresql-us-west1"
subnet_ip = "10.0.128.0/17"
subnet_region = "us-west1"
subnet_private_access = true
},
]
secondary_ranges = {
( "snet-gke-postgresql-us-central1" ) = [
{
range_name = "ip-range-pods-db1"
ip_cidr_range = "192.168.0.0/18"
},
{
range_name = "ip-range-svc-db1"
ip_cidr_range = "192.168.64.0/18"
},
],
( "snet-gke-postgresql-us-west1" ) = [
{
range_name = "ip-range-pods-db2"
ip_cidr_range = "192.168.128.0/18"
},
{
range_name = "ip-range-svc-db2"
ip_cidr_range = "192.168.192.0/18"
},
]
}
}
output "network_name" {
value = module.gcp-network.network_name
}
output "primary_subnet_name" {
value = module.gcp-network.subnets_names[0 ]
}
output "secondary_subnet_name" {
value = module.gcp-network.subnets_names[1 ]
}
Create a primary GKE cluster.
Terraform creates a private cluster in the us-central1 region, and
enables Backup for GKE for disaster recovery and
Managed Service for Prometheus for cluster monitoring.
Managed Service for Prometheus is only supported on Autopilot
clusters running GKE version 1.25 or later.
module "gke-db1-autopilot" {
source = "../modules/beta-autopilot-private-cluster"
project_id = var.project_id
name = "cluster-db1"
kubernetes_version = "1.25" # Will be ignored if use "REGULAR" release_channel
region = "us-central1"
regional = true
zones = [ "us-central1-a", "us-central1-b", "us-central1-c" ]
network = module.network.network_name
subnetwork = module.network.primary_subnet_name
ip_range_pods = "ip-range-pods-db1"
ip_range_services = "ip-range-svc-db1"
horizontal_pod_autoscaling = true
release_channel = "RAPID" # Default version is 1.22 in REGULAR. GMP on Autopilot requires V1.25 via var.kubernetes_version
enable_vertical_pod_autoscaling = true
enable_private_endpoint = false
enable_private_nodes = true
master_ipv4_cidr_block = "172.16.0.0/28"
create_service_account = false
}
Create a backup cluster in the us-west1 region for disaster recovery.
module "gke-db2-autopilot" {
source = "../modules/beta-autopilot-private-cluster"
project_id = var.project_id
name = "cluster-db2"
kubernetes_version = "1.25" # Will be ignored if use "REGULAR" release_channel
region = "us-west1"
regional = true
zones = [ "us-west1-a", "us-west1-b", "us-west1-c" ]
network = module.network.network_name
subnetwork = module.network.secondary_subnet_name
ip_range_pods = "ip-range-pods-db2"
ip_range_services = "ip-range-svc-db2"
horizontal_pod_autoscaling = true
release_channel = "RAPID" # Default version is 1.22 in REGULAR. GMP on Autopilot requires V1.25 via var.kubernetes_version
enable_vertical_pod_autoscaling = true
enable_private_endpoint = false
enable_private_nodes = true
master_ipv4_cidr_block = "172.16.0.16/28"
create_service_account = false
}
Standard
In Cloud Shell, run the following commands:
terraform -chdir = terraform/gke-standard init
terraform -chdir = terraform/gke-standard apply -var project_id = $PROJECT_ID
When prompted, type yes .
Understand the Terraform configuration
The Terraform configuration files create the following resources to
deploy your infrastructure:
Create a Artifact Registry repository to store the Docker images.
resource "google_artifact_registry_repository" "main" {
location = "us"
repository_id = "main"
format = "DOCKER"
project = var.project_id
}
resource "google_artifact_registry_repository_iam_binding" "binding" {
provider = google-beta
project = google_artifact_registry_repository.main.project
location = google_artifact_registry_repository.main.location
repository = google_artifact_registry_repository.main.name
role = "roles/artifactregistry.reader"
members = [
"serviceAccount:${module.gke-db1.service_account}" ,
]
}
Create the VPC network and subnet for the
VM's network interface.
module "gcp-network" {
source = "terraform-google-modules/network/google"
version = "< 8.0.0"
project_id = var.project_id
network_name = "vpc-gke-postgresql"
subnets = [
{
subnet_name = "snet-gke-postgresql-us-central1"
subnet_ip = "10.0.0.0/17"
subnet_region = "us-central1"
subnet_private_access = true
},
{
subnet_name = "snet-gke-postgresql-us-west1"
subnet_ip = "10.0.128.0/17"
subnet_region = "us-west1"
subnet_private_access = true
},
]
secondary_ranges = {
( "snet-gke-postgresql-us-central1" ) = [
{
range_name = "ip-range-pods-db1"
ip_cidr_range = "192.168.0.0/18"
},
{
range_name = "ip-range-svc-db1"
ip_cidr_range = "192.168.64.0/18"
},
],
( "snet-gke-postgresql-us-west1" ) = [
{
range_name = "ip-range-pods-db2"
ip_cidr_range = "192.168.128.0/18"
},
{
range_name = "ip-range-svc-db2"
ip_cidr_range = "192.168.192.0/18"
},
]
}
}
output "network_name" {
value = module.gcp-network.network_name
}
output "primary_subnet_name" {
value = module.gcp-network.subnets_names[0 ]
}
output "secondary_subnet_name" {
value = module.gcp-network.subnets_names[1 ]
}
Create a primary GKE cluster.
Terraform creates a private cluster in the us-central1 region, and
enables Backup for GKE for disaster recovery and
Managed Service for Prometheus for cluster monitoring.
module "gke-db1" {
source = "../modules/beta-private-cluster"
project_id = var.project_id
name = "cluster-db1"
regional = true
region = "us-central1"
network = module.network.network_name
subnetwork = module.network.primary_subnet_name
ip_range_pods = "ip-range-pods-db1"
ip_range_services = "ip-range-svc-db1"
create_service_account = true
enable_private_endpoint = false
enable_private_nodes = true
master_ipv4_cidr_block = "172.16.0.0/28"
network_policy = true
cluster_autoscaling = {
"autoscaling_profile" : "OPTIMIZE_UTILIZATION" ,
"enabled" : true ,
"gpu_resources" : [],
"min_cpu_cores" : 36 ,
"min_memory_gb" : 144 ,
"max_cpu_cores" : 48 ,
"max_memory_gb" : 192 ,
}
monitoring_enable_managed_prometheus = true
gke_backup_agent_config = true
node_pools = [
{
name = "pool-sys"
autoscaling = true
min_count = 1
max_count = 3
max_surge = 1
max_unavailable = 0
machine_type = "e2-standard-4"
node_locations = "us-central1-a,us-central1-b,us-central1-c"
auto_repair = true
},
{
name = "pool-db"
autoscaling = true
max_surge = 1
max_unavailable = 0
machine_type = "e2-standard-8"
node_locations = "us-central1-a,us-central1-b,us-central1-c"
auto_repair = true
},
]
node_pools_labels = {
all = {}
pool-db = {
"app.stateful/component" = "postgresql"
}
pool-sys = {
"app.stateful/component" = "postgresql-pgpool"
}
}
node_pools_taints = {
all = []
pool-db = [
{
key = "app.stateful/component"
value = "postgresql"
effect = "NO_SCHEDULE"
},
],
pool-sys = [
{
key = "app.stateful/component"
value = "postgresql-pgpool"
effect = "NO_SCHEDULE"
},
],
}
gce_pd_csi_driver = true
}
Create a backup cluster in the us-west1 region for disaster recovery.
module "gke-db2" {
source = "../modules/beta-private-cluster"
project_id = var.project_id
name = "cluster-db2"
regional = true
region = "us-west1"
network = module.network.network_name
subnetwork = module.network.secondary_subnet_name
ip_range_pods = "ip-range-pods-db2"
ip_range_services = "ip-range-svc-db2"
create_service_account = false
service_account = module.gke-db1.service_account
enable_private_endpoint = false
enable_private_nodes = true
master_ipv4_cidr_block = "172.16.0.16/28"
network_policy = true
cluster_autoscaling = {
"autoscaling_profile" : "OPTIMIZE_UTILIZATION" ,
"enabled" : true ,
"gpu_resources" : [],
"min_cpu_cores" : 10 ,
"min_memory_gb" : 144 ,
"max_cpu_cores" : 48 ,
"max_memory_gb" : 192 ,
}
monitoring_enable_managed_prometheus = true
gke_backup_agent_config = true
node_pools = [
{
name = "pool-sys"
autoscaling = true
min_count = 1
max_count = 3
max_surge = 1
max_unavailable = 0
machine_type = "e2-standard-4"
node_locations = "us-west1-a,us-west1-b,us-west1-c"
auto_repair = true
},
{
name = "pool-db"
autoscaling = true
max_surge = 1
max_unavailable = 0
machine_type = "e2-standard-8"
node_locations = "us-west1-a,us-west1-b,us-west1-c"
auto_repair = true
},
]
node_pools_labels = {
all = {}
pool-db = {
"app.stateful/component" = "postgresql"
}
pool-sys = {
"app.stateful/component" = "postgresql-pgpool"
}
}
node_pools_taints = {
all = []
pool-db = [
{
key = "app.stateful/component"
value = "postgresql"
effect = "NO_SCHEDULE"
},
],
pool-sys = [
{
key = "app.stateful/component"
value = "postgresql-pgpool"
effect = "NO_SCHEDULE"
},
],
}
gce_pd_csi_driver = true
}
Tip: To debug issues when running Terraform, you can capture debug
output by setting the Terraform log level environment variable TF_LOG .
For example: export TF_LOG="DEBUG" . Valid log levels are (in order of
decreasing verbosity): TRACE , DEBUG , INFO , WARN , or ERROR .
Deploy PostgreSQL on your cluster
In this section, you'll deploy a PostgreSQL database instance to run on
GKE by using a Helm chart.
Install PostgreSQL
To install PostgreSQL on your cluster, follow these steps.
Configure Docker access.
gcloud auth configure-docker us-docker.pkg.dev
Populate Artifact Registry with the required PostgreSQL Docker images.
./scripts/gcr.sh bitnami/postgresql-repmgr 15 .1.0-debian-11-r0
./scripts/gcr.sh bitnami/postgres-exporter 0 .11.1-debian-11-r27
./scripts/gcr.sh bitnami/pgpool 4 .3.3-debian-11-r28
The script pushes the following Bitnami images to the Artifact Registry for
Helm to install:
postgresql-repmgr :
This PostgreSQL cluster solution includes the
PostgreSQL replication manager (repmgr) ,
an open-source tool for managing replication and failover on PostgreSQL
clusters.
postgres-exporter :
PostgreSQL Exporter gathers PostgreSQL metrics for
Prometheus consumption.
pgpool : Pgpool-II
is the PostgreSQL proxy. It provides connection pooling and load balancing.
Verify that the correct images are stored in the repo.
gcloud artifacts docker images list us-docker.pkg.dev/ $PROJECT_ID /main \
--format = "flattened(package)"
The output is similar to the following:
---
image: us-docker.pkg.dev/[PROJECT_ID]/main/bitnami/pgpool
---
image: us-docker.pkg.dev/[PROJECT_ID]/main/bitnami/postgres-exporter
---
image: us-docker.pkg.dev/h[PROJECT_ID]/main/bitnami/postgresql-repmgr
Configure kubectl command line access to the primary cluster.
gcloud container clusters get-credentials $SOURCE_CLUSTER \
--location = $REGION --project = $PROJECT_ID
Create a namespace.
export NAMESPACE = postgresql
kubectl create namespace $NAMESPACE
If you are deploying to an Autopilot cluster, configure node
provisioning across three zones. You can skip this step if you are deploying
to a Standard cluster.
By default, Autopilot provisions resources in only two zones.
The deployment defined in prepareforha.yaml ensures that
Autopilot provisions nodes across three zones in your
cluster, by setting these values:
replicas:3
podAntiAffinity with
requiredDuringSchedulingIgnoredDuringExecution and
topologyKey: "topology.kubernetes.io/zone"
kubectl -n $NAMESPACE apply -f scripts/prepareforha.yaml
apiVersion : apps/v1
kind : Deployment
metadata :
name : prepare-three-zone-ha
labels :
app : prepare-three-zone-ha
app.kubernetes.io/name : postgresql-ha
spec :
replicas : 3
selector :
matchLabels :
app : prepare-three-zone-ha
app.kubernetes.io/name : postgresql-ha
template :
metadata :
labels :
app : prepare-three-zone-ha
app.kubernetes.io/name : postgresql-ha
spec :
affinity :
podAntiAffinity :
requiredDuringSchedulingIgnoredDuringExecution :
- labelSelector :
matchExpressions :
- key : app
operator : In
values :
- prepare-three-zone-ha
topologyKey : "topology.kubernetes.io/zone"
nodeAffinity :
preferredDuringSchedulingIgnoredDuringExecution :
- preference :
matchExpressions :
- key : cloud.google.com/compute-class
operator : In
values :
- "Scale-Out"
weight : 1
nodeSelector :
app.stateful/component : postgresql
tolerations :
- effect : NoSchedule
key : app.stateful/component
operator : Equal
value : postgresql
containers :
- name : prepare-three-zone-ha
image : busybox:latest
command :
- "/bin/sh"
- "-c"
- "while true; do sleep 3600; done"
resources :
limits :
cpu : "500m"
ephemeral-storage : "10Mi"
memory : "0.5Gi"
requests :
cpu : "500m"
ephemeral-storage : "10Mi"
memory : "0.5Gi"
Update the Helm dependency.
cd helm/postgresql-bootstrap
helm dependency update
Inspect and verify the charts that Helm will install.
helm -n postgresql template postgresql . \
--set global.imageRegistry = "us-docker.pkg.dev/ $PROJECT_ID /main"
Install the Helm chart.
helm -n postgresql upgrade --install postgresql . \
--set global.imageRegistry = "us-docker.pkg.dev/ $PROJECT_ID /main"
The output is similar to the following:
NAMESPACE: postgresql
STATUS: deployed
REVISION: 1
TEST SUITE: None
Verify that the PostgreSQL replicas are running.
kubectl get all -n $NAMESPACE
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
pod/postgresql-postgresql-bootstrap-pgpool-75664444cb-dkl24 1/1 Running 0 8m39s
pod/postgresql-postgresql-ha-pgpool-6d86bf9b58-ff2bg 1/1 Running 0 8m39s
pod/postgresql-postgresql-ha-postgresql-0 2/2 Running 0 8m39s
pod/postgresql-postgresql-ha-postgresql-1 2/2 Running 0 8m39s
pod/postgresql-postgresql-ha-postgresql-2 2/2 Running 0 8m38s
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
service/postgresql-postgresql-ha-pgpool ClusterIP 192.168.99.236 <none> 5432/TCP 8m39s
service/postgresql-postgresql-ha-postgresql ClusterIP 192.168.90.20 <none> 5432/TCP 8m39s
service/postgresql-postgresql-ha-postgresql-headless ClusterIP None <none> 5432/TCP 8m39s
service/postgresql-postgresql-ha-postgresql-metrics ClusterIP 192.168.127.198 <none> 9187/TCP 8m39s
NAME READY UP-TO-DATE AVAILABLE AGE
deployment.apps/postgresql-postgresql-bootstrap-pgpool 1/1 1 1 8m39s
deployment.apps/postgresql-postgresql-ha-pgpool 1/1 1 1 8m39s
NAME DESIRED CURRENT READY AGE
replicaset.apps/postgresql-postgresql-bootstrap-pgpool-75664444cb 1 1 1 8m39s
replicaset.apps/postgresql-postgresql-ha-pgpool-6d86bf9b58 1 1 1 8m39s
NAME READY AGE
statefulset.apps/postgresql-postgresql-ha-postgresql 3/3 8m39s
Create a test dataset
In this section, you'll create a database and a table with sample values. The
database serves as a test dataset for the failover process you'll test later in
this tutorial.
Connect to your PostgreSQL instance.
cd ../../
./scripts/launch-client.sh
The output is similar to the following:
Launching Pod pg-client in the namespace postgresql ...
pod/pg-client created
waiting for the Pod to be ready
Copying script files to the target Pod pg-client ...
Pod: pg-client is healthy
Start a shell session.
kubectl exec -it pg-client -n postgresql -- /bin/bash
Create a database and a table, and then insert some test rows.
psql -h $HOST_PGPOOL -U postgres -a -q -f /tmp/scripts/generate-db.sql
Verify the number of rows for each table.
psql -h $HOST_PGPOOL -U postgres -a -q -f /tmp/scripts/count-rows.sql
The output is similar to the following:
select COUNT(*) from tb01;
count
--------
300000
(1 row)
select COUNT(*) from tb02;
count
--------
300000
(1 row)
Tip: You could also use pgbench to create dummy data, but to more easily
differentiate query request traffic, we recommend using the provided
script to create a database and table for querying during read/write tests.
Generate test data.
export DB = postgres
pgbench -i -h $HOST_PGPOOL -U postgres $DB -s 50
The output is similar to the following:
dropping old tables...
creating tables...
generating data (client-side)...
5000000 of 5000000 tuples (100%) done (elapsed 29.85 s, remaining 0.00 s)
vacuuming...
creating primary keys...
done in 36.86 s (drop tables 0.00 s, create tables 0.01 s, client-side generate 31.10 s, vacuum 1.88 s, primary keys 3.86 s).
Exit the postgres client Pod.
exit
Monitor PostgreSQL
In this section, you'll view metrics and set up alerts for your PostgreSQL
instance. You'll use Google Cloud Managed Service for Prometheus
to perform monitoring and alerting.
View metrics
Your PostgreSQL deployment includes a postgresql-exporter sidecar
container. This container exposes a /metrics endpoint.
Google Cloud Managed Service for Prometheus is configured to monitor the PostgreSQL Pods on this
endpoint. You can view these metrics through Google Cloud console dashboards .
The Google Cloud console provides a few ways to create and save dashboard configuration:
Creation and Export : You can create dashboards directly in Google Cloud console,
then export and store them in a code repository. To do this, in the dashboard
toolbar, open the JSON editor and download the dashboard JSON file.
Storage and Import : You can import a dashboard from a JSON file by clicking
+Create Dashboard and uploading the dashboard's JSON content using the JSON editor menu).
To visualize data from your PostgreSQL application and GKE cluster,
follow these steps:
Create the following dashboards.
cd monitoring
gcloud monitoring dashboards create \
--config-from-file = dashboard/postgresql-overview.json \
--project = $PROJECT_ID
gcloud monitoring dashboards create \
--config-from-file dashboard/gke-postgresql.json \
--project $PROJECT_ID
In the Google Cloud console, navigate to the Cloud Monitoring Dashboard.
Go to the Cloud Monitoring Dashboard
Select Custom from the dashboard list. The following dashboards appear:
PostgreSQL Overview : Displays metrics from the PostgreSQL
application, including database uptime, database size, and transaction latency.
GKE PostgreSQL Cluster : Displays metrics
from the GKE cluster that PostgreSQL is running on, including
CPU usage, memory usage, and volume utilization.
Click on each link to examine the dashboards generated.
Set up alerts
Alerting gives you timely awareness of problems in your applications so you can
resolve the problems quickly. You can create an alerting policy
to specify the circumstances under which you want to be alerted and how you want
to be notified. You can also create notification channels that let you select where alerts are sent.
In this section, you'll use Terraform to configure the following example alerts:
db_max_transaction : Monitors the max lag of transactions in seconds; an
alert will be triggered if the value is greater than 10.
db_node_up : Monitors the status of database Pods; 0 means a Pod is down and
triggers an alert.
To set up alerts, follow these steps:
Configure alerts with Terraform.
EMAIL = YOUR_EMAIL
cd alerting/terraform
terraform init
terraform plan -var project_id = $PROJECT_ID -var email_address = $EMAIL
terraform apply -var project_id = $PROJECT_ID -var email_address = $EMAIL
Replace the following values:
YOUR_EMAIL : your email address.
The output is similar to the following :
Apply complete! Resources: 3 added, 0 changed, 0 destroyed.
Connect to the client Pod.
cd ../../../
kubectl exec -it --namespace postgresql pg-client -- /bin/bash
Generate a load test to test the db_max_transaction alert.
pgbench -i -h $HOST_PGPOOL -U postgres -s 200 postgres
The output is similar to the following:
dropping old tables...
creating tables...
generating data (client-side)...
20000000 of 20000000 tuples (100%) done (elapsed 163.22 s, remaining 0.00 s)
vacuuming...
creating primary keys...
done in 191.30 s (drop tables 0.14 s, create tables 0.01 s, client-side generate 165.62 s, vacuum 4.52 s, primary keys 21.00 s).
The alert triggers and sends an email to YOUR_EMAIL
with a subject line that starts with "[ALERT] Max Lag of transaction".
In the Google Cloud console, navigate to the Alert Policy page.
Go to Alert Policy
Select db_max_transaction from the listed policies. From the chart, you
should see a spike from the load test which exceeds the threshold hold of 10
for the Prometheus metric pg_stat_activity_max_tx_duration/gauge .
Exit the postgres client Pod.
exit
Manage PostgreSQL and GKE upgrades
Version updates for both PostgreSQL and Kubernetes are released on a regular
schedule. Follow operational best practices to update your software environment
regularly. By default, GKE manages cluster and node pool
upgrades for you.
Note: Autopilot clusters are automatically upgraded , based on the release channel you selected.
Upgrade PostgreSQL
This section shows how you can perform a version upgrade for PostgreSQL. For
this tutorial, you'll use a
rolling update strategy
for upgrading your Pods, so that at no point all of the Pods are down.
Tip: If you are upgrading using a Helm chart in production systems, consider
other best practices not covered in this tutorial, such as performing
data backups, using a canary deployment to test upgrades on a small subset of
nodes, and monitoring your cluster during the upgrade process.
To perform a version upgrade, follow these steps:
Push an updated version of the postgresql-repmgr image to Artifact Registry.
Define the new version (for example, postgresql-repmgr 15.1.0-debian-11-r1 ).
NEW_IMAGE = us-docker.pkg.dev/ $PROJECT_ID /main/bitnami/postgresql-repmgr:15.1.0-debian-11-r1
./scripts/gcr.sh bitnami/postgresql-repmgr 15 .1.0-debian-11-r1
Trigger a rolling update using kubectl .
kubectl set image statefulset -n postgresql postgresql-postgresql-ha-postgresql postgresql = $NEW_IMAGE
kubectl rollout restart statefulsets -n postgresql postgresql-postgresql-ha-postgresql
kubectl rollout status statefulset -n postgresql postgresql-postgresql-ha-postgresql
You will see the StatefulSet complete a rolling update , starting with the
highest ordinal replica to the lowest.
The output is similar to the following:
Waiting for 1 pods to be ready...
waiting for statefulset rolling update to complete 1 pods at revision postgresql-postgresql-ha-postgresql-5c566ccf49...
Waiting for 1 pods to be ready...
Waiting for 1 pods to be ready...
waiting for statefulset rolling update to complete 2 pods at revision postgresql-postgresql-ha-postgresql-5c566ccf49...
Waiting for 1 pods to be ready...
Waiting for 1 pods to be ready...
statefulset rolling update complete 3 pods at revision postgresql-postgresql-ha-postgresql-5c566ccf49...
Plan for GKE upgrades on Standard clusters
This section is applicable if you are running Standard clusters. You
can take proactive steps and set configurations to mitigate risk and
facilitate a smoother cluster upgrade when you are running stateful services,
including:
Follow GKE best practices for upgrading clusters . Choose an appropriate upgrade strategy to ensure the upgrades happen during the period of the maintenance window:
Choose surge upgrades if cost optimization is important and if your workloads can tolerate a graceful shutdown in less than 60 minutes.
Choose blue-green upgrades if your workloads are less tolerant of disruptions, and a temporary
cost increase due to higher resource usage is acceptable.
To learn more, see Upgrade a cluster running a stateful workload .
Use the Recommender service to check
for deprecation insights and recommendations to avoid service interruptions.
Use maintenance windows
to ensure upgrades happen when you intend them. Before the maintenance window,
ensure your database backups are successful.
Before allowing traffic to the upgraded nodes, use readiness
and liveness probes to ensure they are ready for traffic.
Create Probes that assess whether replication is in sync before accepting
traffic. This can be done through custom scripts, depending on the complexity
and scale of your database.
Verify database availability during Standard cluster upgrades
This section is applicable if you are running Standard clusters. To
verify PostgreSQL availability during upgrades, the general process is to generate
traffic against the PostgreSQL database during the
upgrade process. Then, use pgbench
to check that the database can handle a baseline level of traffic during an
upgrade, compared to when the database is fully available.
Connect to your PostgreSQL instance.
./scripts/launch-client.sh
The output is similar to the following:
Launching Pod pg-client in the namespace postgresql ...
pod/pg-client created
waiting for the Pod to be ready
Copying script files to the target Pod pg-client ...
Pod: pg-client is healthy
In Cloud Shell, shell into the client Pod.
kubectl exec -it -n postgresql pg-client -- /bin/bash
Initialize pgbench .
pgbench -i -h $HOST_PGPOOL -U postgres postgres
Use the following command to get baseline results for confirming that your
PostgreSQL application stays highly-available during the time window for an
upgrade. To get a baseline result, test with multi-connections via
multi jobs (threads) for 30 seconds.
pgbench -h $HOST_PGPOOL -U postgres postgres -c10 -j4 -T 30 -R 200
The output looks similar to the following:
pgbench (14.5)
starting vacuum...end.
transaction type: <builtin: TPC-B (sort of)>
scaling factor: 1
query mode: simple
number of clients: 10
number of threads: 4
duration: 30 s
number of transactions actually processed: 5980
latency average = 7.613 ms
latency stddev = 2.898 ms
rate limit schedule lag: avg 0.256 (max 36.613) ms
initial connection time = 397.804 ms
tps = 201.955497 (without initial connection time)
To ensure availability during upgrades, you can generate some load against
your database, and ensure that the PostgreSQL application provides a consistent
response rate during the upgrade.
To perform this test, generate some traffic
against the database, using the pgbench command. The following command will run
pgbench for one hour, targeting 200 TPS (transactions per second), and listing
the request rate every 2 seconds.
pgbench -h $HOST_PGPOOL -U postgres postgres --client = 10 --jobs = 4 --rate = 200 --time = 3600 --progress = 2 --select-only
Where:
--client : Number of clients simulated, that is, number of concurrent database sessions.
--jobs : Number of worker threads within pgbench. Using more than one thread can be helpful on multi-CPU machines. Clients are distributed as evenly as possible among available threads. The default is 1.
--rate : The rate is given in transactions per second
--progress : Show progress report every sec seconds.
The output is similar to the following:
pgbench ( 14 .5 )
starting vacuum...end.
progress: 5 .0 s, 354 .8 tps, lat 25 .222 ms stddev 15 .038
progress: 10 .0 s, 393 .8 tps, lat 25 .396 ms stddev 16 .459
progress: 15 .0 s, 412 .8 tps, lat 24 .216 ms stddev 14 .548
progress: 20 .0 s, 405 .0 tps, lat 24 .656 ms stddev 14 .066
In the Google Cloud console, navigate back to the PostgreSQL Overview
dashboard in Cloud Monitoring. Notice the spike on the Connection per DB
and Connection per Pod graphs.
Exit the client Pod.
exit
Delete the client Pod.
kubectl delete pod -n postgresql pg-client
Simulate a PostgreSQL service disruption
In this section, you'll simulate a service disruption in one of the PostgreSQL
replicas by stopping the replication manager service. This will prevent the
Pod from serving traffic to its peer replicas and its liveness probes to fail.
Open a new Cloud Shell session and configure kubectl command line
access to the primary cluster.
gcloud container clusters get-credentials $SOURCE_CLUSTER \
--location = $REGION --project = $PROJECT_ID
View the PostgreSQL events emitted in Kubernetes.
kubectl get events -n postgresql --field-selector = involvedObject.name = postgresql-postgresql-ha-postgresql-0 --watch
In the earlier Cloud Shell session, simulate a service failure by stopping PostgreSQL repmgr .
Attach your session to the database container.
kubectl exec -it -n $NAMESPACE postgresql-postgresql-ha-postgresql-0 -c postgresql -- /bin/bash
Stop the service using repmgr , and remove the checkpoint and the dry-run argument.
export ENTRY = '/opt/bitnami/scripts/postgresql-repmgr/entrypoint.sh'
export RCONF = '/opt/bitnami/repmgr/conf/repmgr.conf'
$ENTRY repmgr -f $RCONF node service --action = stop --checkpoint
The liveness probe configured for the PostgreSQL container will start to fail
within five seconds. This repeats every ten seconds, until the failure threshold
of six failures is reached. Once the failureThreshold value is reached, the
container is restarted. You can configure these parameters to decrease the
liveness probe tolerance to tune the SLO requirements of your deployment.
From the event stream, you will see the Pod's liveness and readiness probes fail,
and a message that the container needs to be restarted. The output is similar to
the following:
0s Normal Killing pod/postgresql-postgresql-ha-postgresql-0 Container postgresql failed liveness probe, will be restarted
0s Warning Unhealthy pod/postgresql-postgresql-ha-postgresql-0 Readiness probe failed: psql: error: connection to server at "127.0.0.1", port 5432 failed: Connection refused...
0s Normal Pulled pod/postgresql-postgresql-ha-postgresql-0 Container image "us-docker.pkg.dev/psch-gke-dev/main/bitnami/postgresql-repmgr:14.5.0-debian-11-r10" already present on machine
0s Normal Created pod/postgresql-postgresql-ha-postgresql-0 Created container postgresql
0s Normal Started pod/postgresql-postgresql-ha-postgresql-0 Started container postgresql
Prepare for disaster recovery
To ensure that your production workloads remain available in the event of a
service-interrupting event, you should prepare a disaster recovery (DR) plan.
To learn more about DR planning, see the
Disaster recovery planning guide .
Disaster recovery for Kubernetes can be implemented in two phases:
Backup involves creating a point-in-time snapshot of your state or data
before a service-interrupting event occurs.
Recovery involves restoring your state or data from a backup copy after the
occurrence of a disaster.
To backup and restore your workloads on GKE clusters, you can
use Backup for GKE .
You can enable this service on new and existing clusters .
This deploys a Backup for GKE agent that runs in your clusters; the agent is responsible for capturing configuration
and volume backup data and orchestrating recovery.
Tip: If you are using Autopilot clusters, check that your infrastructure works
with these Backup for GKE restrictions .
Backups and restores can be scoped to an entire cluster, a namespace, or an
application (defined by selectors such as matchLabels ).
Example PostgreSQL backup and restore scenario
The example in this section shows how you can perform a backup and restore operation
at the application scope, using the ProtectedApplication Custom Resource.
The following diagram shows the component resources in the ProtectedApplication,
namely a StatefulSet representing the postgresql-ha application and a deployment
of pgpool , which use the same label ( app.kubernetes.io/name: postgresql-ha ).
Figure 2 : Example backup-and-recovery solution for a highly-available PostgreSQL cluster.
To prepare to backup and restore your PostgreSQL workload, follow these steps:
Set up the environment variables. In this example you'll use a ProtectedApplication
to restore the PostgreSQL workload and its volumes from the source
GKE cluster ( us-central1 ), then restore to another
GKE cluster in a different region ( us-west1 ).
export SOURCE_CLUSTER = cluster-db1
export TARGET_CLUSTER = cluster-db2
export REGION = us-central1
export DR_REGION = us-west1
export NAME_PREFIX = g-db-protected-app
export BACKUP_PLAN_NAME = $NAME_PREFIX -bkp-plan-01
export BACKUP_NAME = bkp- $BACKUP_PLAN_NAME
export RESTORE_PLAN_NAME = $NAME_PREFIX -rest-plan-01
export RESTORE_NAME = rest- $RESTORE_PLAN_NAME
Verify that Backup for GKE is enabled on your clusters. It should
already be enabled as part of the Terraform setup you performed earlier.
gcloud container clusters describe $SOURCE_CLUSTER \
--project = $PROJECT_ID \
--location = $REGION \
--format = 'value(addonsConfig.gkeBackupAgentConfig)'
If Backup for GKE is enabled, the output of the command shows enabled=True .
Set up a backup plan and perform a restore
Backup for GKE allows you to create a
backup plan
as a cron job. A backup plan contains a backup configuration including the
source cluster, the selection of which workloads to back up, and the region in
which backup artifacts produced under this plan are stored.
To perform a backup and restore, follow these steps:
Verify the status of ProtectedApplication on cluster-db1 .
kubectl get ProtectedApplication -A
The output looks similar to the following:
NAMESPACE NAME READY TO BACKUP
postgresql postgresql-ha true
Create a backup plan for the ProtectedApplication.
export NAMESPACE = postgresql
export PROTECTED_APP = $( kubectl get ProtectedApplication -n $NAMESPACE | grep -v 'NAME' | awk '{ print $1 }' )
gcloud beta container backup-restore backup-plans create $BACKUP_PLAN_NAME \
--project = $PROJECT_ID \
--location = $DR_REGION \
--cluster = projects/ $PROJECT_ID /locations/ $REGION /clusters/ $SOURCE_CLUSTER \
--selected-applications = $NAMESPACE / $PROTECTED_APP \
--include-secrets \
--include-volume-data \
--cron-schedule = "0 3 * * *" \
--backup-retain-days = 7 \
--backup-delete-lock-days = 0
Manually create a backup.
gcloud beta container backup-restore backups create $BACKUP_NAME \
--project = $PROJECT_ID \
--location = $DR_REGION \
--backup-plan = $BACKUP_PLAN_NAME \
--wait-for-completion
Set up a restore plan.
gcloud beta container backup-restore restore-plans create $RESTORE_PLAN_NAME \
--project = $PROJECT_ID \
--location = $DR_REGION \
--backup-plan = projects/ $PROJECT_ID /locations/ $DR_REGION /backupPlans/ $BACKUP_PLAN_NAME \
--cluster = projects/ $PROJECT_ID /locations/ $DR_REGION /clusters/ $TARGET_CLUSTER \
--cluster-resource-conflict-policy = use-existing-version \
--namespaced-resource-restore-mode = delete-and-restore \
--volume-data-restore-policy = restore-volume-data-from-backup \
--selected-applications = $NAMESPACE / $PROTECTED_APP \
--cluster-resource-scope-selected-group-kinds = "storage.k8s.io/StorageClass" , "scheduling.k8s.io/PriorityClass"
Restore from the backup.
gcloud beta container backup-restore restores create $RESTORE_NAME \
--project = $PROJECT_ID \
--location = $DR_REGION \
--restore-plan = $RESTORE_PLAN_NAME \
--backup = projects/ $PROJECT_ID /locations/ $DR_REGION /backupPlans/ $BACKUP_PLAN_NAME /backups/ $BACKUP_NAME \
--wait-for-completion
Verify that your cluster is restored
To verify that the restored cluster has all the expected Pods, PersistentVolume,
and StorageClass resources, follow these steps:
Configure kubectl command line access to the backup cluster cluster-db2 .
gcloud container clusters get-credentials $TARGET_CLUSTER --location $DR_REGION --project $PROJECT_ID
Verify that the StatefulSet is ready with 3/3 Pods.
kubectl get all -n $NAMESPACE
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
pod/postgresql-postgresql-ha-pgpool-778798b5bd-k2q4b 1/1 Running 0 4m49s
pod/postgresql-postgresql-ha-postgresql-0 2/2 Running 2 (4m13s ago) 4m49s
pod/postgresql-postgresql-ha-postgresql-1 2/2 Running 0 4m49s
pod/postgresql-postgresql-ha-postgresql-2 2/2 Running 0 4m49s
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
service/postgresql-postgresql-ha-pgpool ClusterIP 192.168.241.46 <none> 5432/TCP 4m49s
service/postgresql-postgresql-ha-postgresql ClusterIP 192.168.220.20 <none> 5432/TCP 4m49s
service/postgresql-postgresql-ha-postgresql-headless ClusterIP None <none> 5432/TCP 4m49s
service/postgresql-postgresql-ha-postgresql-metrics ClusterIP 192.168.226.235 <none> 9187/TCP 4m49s
NAME READY UP-TO-DATE AVAILABLE AGE
deployment.apps/postgresql-postgresql-ha-pgpool 1/1 1 1 4m49s
NAME DESIRED CURRENT READY AGE
replicaset.apps/postgresql-postgresql-ha-pgpool-778798b5bd 1 1 1 4m49s
NAME READY AGE
statefulset.apps/postgresql-postgresql-ha-postgresql 3/3 4m49s
Verify all Pods in the postgres namespace are running.
kubectl get pods -n $NAMESPACE
The output is similar to the following:
postgresql-postgresql-ha-pgpool-569d7b8dfc-2f9zx 1/1 Running 0 7m56s
postgresql-postgresql-ha-postgresql-0 2/2 Running 0 7m56s
postgresql-postgresql-ha-postgresql-1 2/2 Running 0 7m56s
postgresql-postgresql-ha-postgresql-2 2/2 Running 0 7m56s
Verify the PersistentVolumes and StorageClass. During the restore process,
Backup for GKE creates a Proxy Class in the target workload to replace the
StorageClass provisioned in the source workload ( gce-pd-gkebackup-dn in the example output).
kubectl get pvc -n $NAMESPACE
The output is similar to the following:
NAME STATUS VOLUME CAPACITY ACCESS MODES STORAGECLASS AGE
data-postgresql-postgresql-ha-postgresql-0 Bound pvc-be91c361e9303f96 8Gi RWO gce-pd-gkebackup-dn 10m
data-postgresql-postgresql-ha-postgresql-1 Bound pvc-6523044f8ce927d3 8Gi RWO gce-pd-gkebackup-dn 10m
data-postgresql-postgresql-ha-postgresql-2 Bound pvc-c9e71a99ccb99a4c 8Gi RWO gce-pd-gkebackup-dn 10m
Validate that the expected data is restored
To validate that the expected data is restored, follow these steps:
Connect to your PostgreSQL instance.
./scripts/launch-client.sh
kubectl exec -it pg-client -n postgresql -- /bin/bash
Verify the number of rows for each table.
psql -h $HOST_PGPOOL -U postgres -a -q -f /tmp/scripts/count-rows.sql
select COUNT ( * ) from tb01 ;
You should see a similar result to the data you wrote earlier in the
Create a test dataset .
The output is similar to the following:
300000
( 1 row )
Exit the client Pod.
exit
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
The easiest way to avoid billing is to delete the project you created for
the tutorial.
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
Learn the best practices for deploying databases on GKE.
Explore Persistent Volumes in more detail.
See an example of how to use Pgpool-II for streaming replication with high-availability PostgreSQL clusters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
