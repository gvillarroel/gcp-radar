---
title: "Deploy PostgreSQL to GKE using CloudNativePG \_|\_ Kubernetes Engine \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg
  title: "Deploy PostgreSQL to GKE using CloudNativePG \_|\_ Kubernetes Engine \_\
    |\_ Google Cloud Documentation"
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
Deploy PostgreSQL to GKE using CloudNativePG
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
The guide shows you how to deploy PostgreSQL clusters on
Google Kubernetes Engine (GKE) using the CloudNativePG
operator.
PostgreSQL is an open-source object-relational
database with several decades of active development, ensuring stable client
performance. It offers a range of features, including replication, point-in-time
recovery, security features, and extendability. PostgreSQL is compatible with
major operating systems and fully complies with ACID (Atomicity, Consistency,
Isolation, Durability) standards.
This guide is intended for platform administrators, cloud architects, and
operations professionals interested in deploying Postgres clusters on
GKE. Running Postgres in GKE instead of using
Cloud SQL can give more flexibility and
configuration control to experienced database administrators.
Benefits
CloudNativePG is an open-source operator developed by
EDB under an Apache
2 license. It brings the following
features to PostgreSQL deployment:
A declarative and Kubernetes-native way to manage and configure and
PostgreSQL clusters
Backup management using volume snapshots
or
Cloud Storage
In-transit encrypted TLS
connection, the ability to use your own certificate authority and
integration with Certificate Manager for automated TLS
certificate issuance and rotation
Rolling updates for minor PostgreSQL releases
Use of Kubernetes API server to maintain a PostgreSQL cluster status and
failovers for high availability with no additional tools required
A built-in Prometheus exporter configuration through user-defined metrics
written in SQL
Objectives
Plan and deploy GKE infrastructure for Postgres
Deploy and configure the CloudNativePG Postgres operator with Helm
Deploy a PostgreSQL cluster
Configure PostgreSQL authentication and observability
Deployment architecture
PostgreSQL has various deployment options from a standalone database server to a
replicated highly-available cluster. This tutorial focuses on the
highly-available cluster deployment to GKE.
In this deployment, the PostgreSQL cluster workloads are distributed across
multiple availability zones within the regional GKE cluster,
ensuring high availability and redundancy. For more information, see regional
clusters .
The following diagram shows a Postgres cluster running on multiple nodes and
zones in a GKE cluster:
The default setup includes one main PostgreSQL server and two backup servers
ready to take over in case the main server fails, ensuring continuous
database availability.
The CloudNativePG operator resources use a separate namespace of the
GKE cluster for better resource isolation and recommended
microservices approach of one database per PostgreSQL cluster. The database
and its corresponding user (app user) are defined in the Kubernetes custom
resource representing the cluster.
Storage is a crucial component when discussing databases. Storage must
perform efficiently, ensure continuous availability, and guarantee data
consistency. For these reasons, we recommend the premium-rwo storage
class, which is based on SSD disks. The CloudNativePG operator automatically
creates PersistentVolumeClaims as needed when setting up Pods for the
PostgreSQL cluster.
Costs
In this document, you use the following billable components of Google Cloud:
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
Cloud Shell is preinstalled with the software you need for this
tutorial, including kubectl ,
the gcloud CLI , Helm , and
Terraform . If you don't use Cloud Shell, you must install
the gcloud CLI.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, IAM, GKE, Resource Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com iam.googleapis.com container.googleapis.com cloudresourcemanager.googleapis.com
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, IAM, GKE, Resource Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com iam.googleapis.com container.googleapis.com cloudresourcemanager.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/compute.securityAdmin, roles/compute.viewer, roles/container.clusterAdmin, roles/container.admin, roles/iam.serviceAccountAdmin, roles/iam.serviceAccountUser
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Set up your environment
To set up your environment, follow these steps:
Set environment variables:
export PROJECT_ID= PROJECT_ID
export KUBERNETES_CLUSTER_PREFIX=postgres
export REGION=us-central1
Replace PROJECT_ID with your Google Cloud project
ID .
Clone the GitHub repository:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
Change to the working directory:
cd kubernetes-engine-samples/databases/postgresql-cloudnativepg
Create your cluster infrastructure
In this section, you run a Terraform script to create a private,
highly-available, regional GKE cluster.
You can install the operator using a Standard or
Autopilot
cluster.
Standard
The following diagram shows a private regional Standard
GKE cluster deployed across three different zones:
To deploy this infrastructure, run the following commands:
export GOOGLE_OAUTH_ACCESS_TOKEN = $( gcloud auth print-access-token )
terraform -chdir = terraform/gke-standard init
terraform -chdir = terraform/gke-standard apply \
-var project_id = ${ PROJECT_ID } \
-var region = ${ REGION } \
-var cluster_prefix = ${ KUBERNETES_CLUSTER_PREFIX }
When prompted, type yes . It might take several minutes for this command to
complete and for the cluster to show a ready status.
Terraform creates the following resources:
A VPC network and private subnet for the Kubernetes nodes
A router to access the internet through NAT
A private GKE cluster in the us-central1 region
A node pools with auto scaling enabled (one to two nodes per zone, one
node per zone minimum)
The output is similar to the following:
...
Apply complete! Resources: 14 added, 0 changed, 0 destroyed.
...
Autopilot
The following diagram shows a private regional Autopilot
GKE cluster:
To deploy the infrastructure, run the following commands:
export GOOGLE_OAUTH_ACCESS_TOKEN = $( gcloud auth print-access-token )
terraform -chdir = terraform/gke-autopilot init
terraform -chdir = terraform/gke-autopilot apply \
-var project_id = ${ PROJECT_ID } \
-var region = ${ REGION } \
-var cluster_prefix = ${ KUBERNETES_CLUSTER_PREFIX }
When prompted, type yes . It might take several minutes for this command to
complete and for the cluster to show a ready status.
Terraform creates the following resources:
A VPC network and private subnet for the Kubernetes nodes
A router to access the internet through NAT
A private GKE cluster in the us-central1 region
A ServiceAccount with logging and monitoring permission
Google Cloud Managed Service for Prometheus for cluster monitoring
The output is similar to the following:
...
Apply complete! Resources: 12 added, 0 changed, 0 destroyed.
...
Connect to the cluster
Configure kubectl to communicate with the cluster:
gcloud container clusters get-credentials ${ KUBERNETES_CLUSTER_PREFIX } -cluster --location ${ REGION }
Deploy the CloudNativePG operator
Deploy the CloudNativePG to your Kubernetes cluster using a Helm chart:
Add the CloudNativePG operator Helm Chart repository:
helm repo add cnpg https://cloudnative-pg.github.io/charts
Deploy the CloudNativePG operator using the Helm command-line tool:
helm upgrade --install cnpg \
--namespace cnpg-system \
--create-namespace \
cnpg/cloudnative-pg
The output is similar to the following:
Release "cnpg" does not exist. Installing it now.
NAME: cnpg
LAST DEPLOYED: Fri Oct 13 13:52:36 2023
NAMESPACE: cnpg-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
...
Deploy Postgres
The following manifest describes a PostgreSQL cluster as defined by the
CloudNativePG operator's custom resource:
apiVersion : postgresql.cnpg.io/v1
kind : Cluster
metadata :
name : gke-pg-cluster
spec :
description : "Standard GKE PostgreSQL cluster"
imageName : ghcr.io/cloudnative-pg/postgresql:16.2
enableSuperuserAccess : true
instances : 3
startDelay : 300
primaryUpdateStrategy : unsupervised
postgresql :
pg_hba :
- host all all 10.48.0.0/20 md5
bootstrap :
initdb :
database : app
storage :
storageClass : premium-rwo
size : 2Gi
resources :
requests :
memory : "1Gi"
cpu : "1000m"
limits :
memory : "1Gi"
cpu : "1000m"
affinity :
enablePodAntiAffinity : true
tolerations :
- key : cnpg.io/cluster
effect : NoSchedule
value : gke-pg-cluster
operator : Equal
additionalPodAffinity :
preferredDuringSchedulingIgnoredDuringExecution :
- weight : 1
podAffinityTerm :
labelSelector :
matchExpressions :
- key : app.component
operator : In
values :
- "pg-cluster"
topologyKey : topology.kubernetes.io/zone
monitoring :
enablePodMonitor : true
This manifest has the following fields:
spec.instances : the number of cluster Pods
spec.primaryUpdateStrategy : the rolling update strategy:
Unsupervised : autonomously updates the primary cluster node after the
replica nodes
Supervised : manual switchover is required for the primary cluster node
spec.postgresql : postgres.conf file parameter overrides, such as
pg-hba
rules, LDAP, and requirements for sync replicas to be met.
spec.storage : storage-related settings, such as storage class, volume
size, and write-ahead
log settings.
spec.bootstrap : parameters of the initial database created in the cluster,
user credentials, and database restore options
spec.resources : requests and limits for cluster Pods
spec.affinity : affinity and anti-affinity rules of the cluster workloads
Create a basic Postgres cluster
Create a namespace:
kubectl create ns pg-ns
Create the PostgreSQL cluster using the custom resource:
kubectl apply -n pg-ns -f manifests/01-basic-cluster/postgreSQL_cluster.yaml
This command might take several minutes to complete.
Check the status of the cluster:
kubectl get cluster -n pg-ns --watch
Wait for the output to show a status of Cluster in healthy state before
you move to the next step.
NAME AGE INSTANCES READY STATUS PRIMARY
gke-pg-cluster 2m53s 3 3 Cluster in healthy state gke-pg-cluster-1
Inspect the resources
Confirm that GKE created the resources for the cluster:
kubectl get cluster,pod,svc,pvc,pdb,secret,cm -n pg-ns
The output is similar to the following:
NAME AGE INSTANCES READY STATUS PRIMARY
cluster.postgresql.cnpg.io/gke-pg-cluster 32m 3 3 Cluster in healthy state gke-pg-cluster-1
NAME READY STATUS RESTARTS AGE
pod/gke-pg-cluster-1 1/1 Running 0 31m
pod/gke-pg-cluster-2 1/1 Running 0 30m
pod/gke-pg-cluster-3 1/1 Running 0 29m
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
service/gke-pg-cluster-r ClusterIP 10.52.11.24 <none> 5432/TCP 32m
service/gke-pg-cluster-ro ClusterIP 10.52.9.233 <none> 5432/TCP 32m
service/gke-pg-cluster-rw ClusterIP 10.52.1.135 <none> 5432/TCP 32m
NAME STATUS VOLUME CAPACITY ACCESS MODES STORAGECLASS AGE
persistentvolumeclaim/gke-pg-cluster-1 Bound pvc-bbdd1cdd-bdd9-4e7c-8f8c-1a14a87e5329 2Gi RWO standard 32m
persistentvolumeclaim/gke-pg-cluster-2 Bound pvc-e7a8b4df-6a3e-43ce-beb0-b54ec1d24011 2Gi RWO standard 31m
persistentvolumeclaim/gke-pg-cluster-3 Bound pvc-dac7f931-6ac5-425f-ac61-0cfc55aae72f 2Gi RWO standard 30m
NAME MIN AVAILABLE MAX UNAVAILABLE ALLOWED DISRUPTIONS AGE
poddisruptionbudget.policy/gke-pg-cluster 1 N/A 1 32m
poddisruptionbudget.policy/gke-pg-cluster-primary 1 N/A 0 32m
NAME TYPE DATA AGE
secret/gke-pg-cluster-app kubernetes.io/basic-auth 3 32m
secret/gke-pg-cluster-ca Opaque 2 32m
secret/gke-pg-cluster-replication kubernetes.io/tls 2 32m
secret/gke-pg-cluster-server kubernetes.io/tls 2 32m
secret/gke-pg-cluster-superuser kubernetes.io/basic-auth 3 32m
NAME DATA AGE
configmap/cnpg-default-monitoring 1 32m
configmap/kube-root-ca.crt 1 135m
The operator creates the following resources:
A cluster custom resource representing the PostgreSQL cluster which is
controlled by the operator
PersistentVolumeClaim resources with corresponding Persistent Volumes
Secrets with user credentials for accessing the database and replication
between Postgres nodes.
Three database endpoint services: <name>-rw , <name>-ro , and <name>-r
to connect to the cluster. For more information, see PostgreSQL
architecture .
Authenticate to Postgres
You can connect to the PostgreSQL database and check access through different
service endpoints created by the operator. To do this, you use an additional Pod
with a PostgreSQL client and synchronized application user credentials mounted
as environment variables.
Run the client Pod to interact with your Postgres cluster:
kubectl apply -n pg-ns -f manifests/02-auth/pg-client.yaml
Run an exec command on the pg-client Pod and login to the
gke-pg-cluster-rw Service:
kubectl wait --for = condition = Ready -n pg-ns pod/pg-client --timeout = 300s
kubectl exec -n pg-ns -i -t pg-client -- /bin/sh
Login to the database using the gke-pg-cluster-rw Service to establish a
connection with Read-Write privileges:
psql postgresql:// $CLIENTUSERNAME : $CLIENTPASSWORD @gke-pg-cluster-rw.pg-ns/app
The terminal starts with your database name:
app=>
Create a table:
CREATE TABLE travel_agency_clients (
client VARCHAR ( 50 ) UNIQUE NOT NULL,
address VARCHAR ( 50 ) UNIQUE NOT NULL,
phone VARCHAR ( 50 ) UNIQUE NOT NULL ) ;
Insert data into the table:
INSERT INTO travel_agency_clients ( client, address, phone )
VALUES ( 'Tom' , 'Warsaw' , '+55555' )
RETURNING * ;
View the data that you created:
SELECT * FROM travel_agency_clients ;
The output is similar to the following:
client | address | phone
--------+---------+---------
Tom | Warsaw | +55555
(1 row)
Logout of the current database session:
exit
Login to the database using the gke-pg-cluster-ro Service to verify
read-only access. This Service permits querying data but restricts any write
operations:
psql postgresql:// $CLIENTUSERNAME : $CLIENTPASSWORD @gke-pg-cluster-ro.pg-ns/app
Attempt to insert new data:
INSERT INTO travel_agency_clients ( client, address, phone )
VALUES ( 'John' , 'Paris' , '+55555' )
RETURNING * ;
The output is similar to the following:
ERROR: cannot execute INSERT in a read-only transaction
Attempt to read data:
SELECT * FROM travel_agency_clients ;
The output is similar to the following:
client | address | phone
--------+---------+---------
Tom | Warsaw | +55555
(1 row)
Logout of the current database session:
exit
Exit the Pod shell:
exit
Understand how Prometheus collects metrics for your Postgres cluster
The following diagram shows how Prometheus metrics collecting works:
In the diagram, a GKE private cluster contains:
A Postgres Pod that gathers metrics on path / and port 9187
Prometheus-based collectors that process the metrics from the Postgres Pod
A PodMonitoring resource that sends metrics to Cloud Monitoring
To enable metrics to be collected from your Pods, perform the following steps:
Create the PodMonitoring
resource:
kubectl apply -f manifests/03-observability/pod-monitoring.yaml -n pg-ns
In the Google Cloud console, go to the Metrics explorer page:
Go to Metrics explorer
The dashboard shows a non-zero metrics ingestion rate.
In Select a metric , enter Prometheus Target .
In the Active Metric Categories section, select Cnpg .
Create a metrics dashboard
To visualize the exported metrics, create a metrics dashboard.
Deploy a dashboard:
gcloud --project " ${ PROJECT_ID } " monitoring dashboards create --config-from-file manifests/03-observability/gcp-pg.json
In the Google Cloud console, go to the Dashboards page.
Go to Dashboards
Select the PostgresQL Prometheus Overview dashboard.
To review how dashboards monitor functions you can reuse actions from the
Database authentication section, and apply read and write requests on
the database, then review gathered metrics visualization in a dashboard.
Connect to the client Pod:
kubectl exec -n pg-ns -i -t pg-client -- /bin/sh
Insert random data:
psql postgresql:// $CLIENTUSERNAME : $CLIENTPASSWORD @gke-pg-cluster-rw.pg-ns/app -c "CREATE TABLE test (id serial PRIMARY KEY, randomdata VARCHAR ( 50 ) NOT NULL);INSERT INTO test (randomdata) VALUES (generate_series(1, 1000));"
Refresh the dashboard. The graphs update with actualized metrics.
Exit the Pod shell:
exit
Clean up
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
Set environment variables.
export PROJECT_ID = ${ PROJECT_ID }
export KUBERNETES_CLUSTER_PREFIX = postgres
export REGION = us-central1
Run the terraform destroy command:
export GOOGLE_OAUTH_ACCESS_TOKEN = $( gcloud auth print-access-token )
terraform -chdir = terraform/ FOLDER destroy \
-var project_id = ${ PROJECT_ID } \
-var region = ${ REGION } \
-var cluster_prefix = ${ KUBERNETES_CLUSTER_PREFIX }
Replace FOLDER with either gke-autopilot or
gke-standard .
When prompted, type yes .
Find all unattached disks:
export disk_list = $( gcloud compute disks list --filter = "-users:* AND labels.name= ${ KUBERNETES_CLUSTER_PREFIX } -cluster" --format "value[separator=|](name,zone)" )
Delete the disks:
for i in $disk_list ; do
disk_name = $( echo $i | cut -d '|' -f1 )
disk_zone = $( echo $i | cut -d '|' -f2 | sed 's|.*/||' )
echo "Deleting $disk_name "
gcloud compute disks delete $disk_name --zone $disk_zone --quiet
done
What's next
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
