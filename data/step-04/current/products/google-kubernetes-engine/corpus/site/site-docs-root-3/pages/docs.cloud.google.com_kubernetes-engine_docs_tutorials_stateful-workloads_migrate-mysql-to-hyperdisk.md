---
title: "Migrate your MySQL data from Persistent Disk to Hyperdisk in GKE \_|\_ Kubernetes\
  \ Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn/get-started-with-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk
  title: "Migrate your MySQL data from Persistent Disk to Hyperdisk in GKE \_|\_ Kubernetes\
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
Migrate your MySQL data from Persistent Disk to Hyperdisk in GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial demonstrates how you can migrate your existing MySQL data from a Persistent Disk (PD) to Hyperdisk on Google Kubernetes Engine to upgrade your storage performance. Hyperdisk offers higher IOPS and throughput than Persistent Disk, which can improve MySQL performance by reducing latency for database queries and transactions. You can use disk snapshots to migrate your data to different disk types depending on machine type compatibility. For example, Hyperdisk volumes are compatible only with some third, fourth, and later generation machine types such as N4 , which do not support Persistent Disks. For more information, see available machine series .
To demonstrate the migration from Persistent Disk to Hyperdisk, this tutorial uses the Sakila database to provide a sample dataset. Sakila is a sample database provided by MySQL that you can use as a schema for tutorials and examples. It represents a fictional DVD rental store and includes tables for films, actors, customers, and rentals.
This guide is for Storage specialists and Storage administrators who create and allocate storage, and manage data security and data access. To learn more about common roles and example tasks that we reference in Google Cloud content, see Common GKE user roles and tasks .
Deployment architecture
The following diagram illustrates the migration process from a Persistent Disk to a Hyperdisk.
A MySQL application runs on a GKE node pool with N2 machine types, storing its data on a Persistent Disk SSD.
To ensure data consistency, the application is scaled down to prevent new writes.
A snapshot of the Persistent Disk is created, serving as a complete point-in-time backup of the data.
A new Hyperdisk is provisioned from the snapshot, and a new MySQL instance is deployed on a separate, Hyperdisk-compatible N4 node pool. This new instance attaches to the newly created Hyperdisk, finalizing the migration to the higher-performance storage.
Figure 1 : Migration of MySQL data from Persistent Disk to Hyperdisk using a snapshot.
Objectives
In this tutorial, you will learn how to do the following:
Deploy a MySQL cluster.
Upload a testing dataset.
Create a snapshot of your data.
Create a Hyperdisk from the snapshot.
Start a new MySQL cluster in a Hyperdisk-enabled N4 machine type node pool.
Verify data integrity to confirm a successful migration.
Costs
In this document, you use the following billable components of Google Cloud:
GKE
Compute Engine , which includes:
Storage capacity provisioned for both Persistent Disk and Hyperdisk.
Storage costs for the snapshots.
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
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
Enable the Compute Engine, GKE, Identity and Access Management Service Account Credentials APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Compute Engine, GKE, Identity and Access Management Service Account Credentials APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
roles/container.admin, roles/iam.serviceAccountAdmin, roles/compute.admin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Set up Cloud Shell
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
A Cloud Shell session starts and displays a command-line prompt. It can take a few seconds for the session to initialize.
Set your default project:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your project ID.
Prepare the environment
In the Cloud Shell, set the environment variables for your project, location, and cluster prefix.
export PROJECT_ID = PROJECT_ID
export EMAIL_ADDRESS = EMAIL_ADDRESS
export KUBERNETES_CLUSTER_PREFIX = offline-hyperdisk-migration
export LOCATION = us-central1-a
Replace the following:
PROJECT_ID : your Google Cloud project ID .
EMAIL_ADDRESS : your email address.
LOCATION : the zone where you want to create your deployment resources. For the purpose of this tutorial, use the us-central1-a zone.
Clone the sample code repository from GitHub:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
Navigate to the offline-hyperdisk-migration directory to start creating deployment resources:
cd kubernetes-engine-samples/databases/offline-hyperdisk-migration
Create the GKE cluster and node pools
This tutorial uses a zonal cluster for simplicity because Hyperdisk volumes are zonal resources and only accessible within a single zone.
Create a zonal GKE cluster:
gcloud container clusters create ${ KUBERNETES_CLUSTER_PREFIX } -cluster \
--location ${ LOCATION } \
--node-locations ${ LOCATION } \
--shielded-secure-boot \
--shielded-integrity-monitoring \
--machine-type "e2-micro" \
--num-nodes "1"
Add a node pool with a N2 machine type for the initial MySQL deployment:
gcloud container node-pools create regular-pool \
--cluster ${ KUBERNETES_CLUSTER_PREFIX } -cluster \
--machine-type n2-standard-4 \
--location ${ LOCATION } \
--num-nodes 1
Add a node pool with a N4 machine type on Hyperdisk where the MySQL deployment will be migrated and run:
gcloud container node-pools create hyperdisk-pool \
--cluster ${ KUBERNETES_CLUSTER_PREFIX } -cluster \
--machine-type n4-standard-4 \
--location ${ LOCATION } \
--num-nodes 1
Connect to the cluster:
gcloud container clusters get-credentials ${ KUBERNETES_CLUSTER_PREFIX } -cluster --location ${ LOCATION }
Deploy MySQL on Persistent Disk
In this section, you deploy a MySQL instance that uses a Persistent Disk for storage, and load it with sample data.
Create and apply a StorageClass for Hyperdisk. This StorageClass will be used later in the tutorial.
apiVersion : storage.k8s.io/v1
kind : StorageClass
metadata :
name : balanced-storage
provisioner : pd.csi.storage.gke.io
volumeBindingMode : WaitForFirstConsumer
allowVolumeExpansion : true
parameters :
type : hyperdisk-balanced
provisioned-throughput-on-create : "250Mi"
provisioned-iops-on-create : "7000"
kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml
Create and deploy a MySQL instance that includes node affinity to ensure Pods are scheduled on regular-pool nodes, and provisions a Persistent Disk SSD volume.
apiVersion : v1
kind : Service
metadata :
name : regular-mysql
labels :
app : mysql
spec :
ports :
- port : 3306
selector :
app : mysql
clusterIP : None
---
apiVersion : v1
kind : PersistentVolumeClaim
metadata :
name : mysql-pv-claim
labels :
app : mysql
spec :
accessModes :
- ReadWriteOnce
resources :
requests :
storage : 30Gi
storageClassName : premium-rwo
---
apiVersion : apps/v1
kind : Deployment
metadata :
name : existing-mysql
labels :
app : mysql
spec :
selector :
matchLabels :
app : mysql
strategy :
type : Recreate
template :
metadata :
labels :
app : mysql
spec :
containers :
- image : mysql:8.0
name : mysql
env :
- name : MYSQL_ROOT_PASSWORD
value : migration
- name : MYSQL_DATABASE
value : mysql
- name : MYSQL_USER
value : app
- name : MYSQL_PASSWORD
value : migration
ports :
- containerPort : 3306
name : mysql
volumeMounts :
- name : mysql-persistent-storage
mountPath : /var/lib/mysql
affinity :
nodeAffinity :
preferredDuringSchedulingIgnoredDuringExecution :
- weight : 1
preference :
matchExpressions :
- key : "node.kubernetes.io/instance-type"
operator : In
values :
- "n2-standard-4"
volumes :
- name : mysql-persistent-storage
persistentVolumeClaim :
claimName : mysql-pv-claim
kubectl apply -f manifests/02-mysql/mysql-deployment.yaml
This manifest creates a MySQL deployment and service, with a dynamically provisioned Persistent Disk for data storage.
The password for the root user is migration .
Deploy a MySQL client Pod to load data, and verify the data migration:
apiVersion : v1
kind : Pod
metadata :
name : mysql-client
spec :
containers :
- name : main
image : mysql:8.0
command : [ "sleep" , "360000" ]
resources :
requests :
memory : 1Gi
cpu : 500m
limits :
memory : 1Gi
cpu : "1"
env :
- name : MYSQL_ROOT_PASSWORD
value : migration
kubectl apply -f manifests/02-mysql/mysql-client.yaml
kubectl wait pods mysql-client --for condition = Ready --timeout = 300s
Connect to the client Pod:
kubectl exec -it mysql-client -- bash
From the client Pod shell, download and import the Sakila sample dataset:
# Download the dataset
curl --output dataset.tgz "https://downloads.mysql.com/docs/sakila-db.tar.gz"
# Extract the dataset
tar -xvzf dataset.tgz -C /home/mysql
# Import the dataset into MySQL (the password is "migration").
mysql -u root -h regular-mysql.default -p
SOURCE /sakila-db/sakila-schema.sql ;
SOURCE /sakila-db/sakila-data.sql ;
Verify that the data was imported:
USE sakila ;
SELECT table_name , table_rows FROM INFORMATION_SCHEMA . TABLES WHERE TABLE_SCHEMA = 'sakila' ;
The output shows a list of tables with row counts.
| TABLE_NAME | TABLE_ROWS |
+----------------------------+------------+
| actor | 200 |
| actor_info | NULL |
| address | 603 |
| category | 16 |
| city | 600 |
| country | 109 |
| customer | 599 |
| customer_list | NULL |
| film | 1000 |
| film_actor | 5462 |
| film_category | 1000 |
| film_list | NULL |
| film_text | 1000 |
| inventory | 4581 |
| language | 6 |
| nicer_but_slower_film_list | NULL |
| payment | 16086 |
| rental | 16419 |
| sales_by_film_category | NULL |
| sales_by_store | NULL |
| staff | 2 |
| staff_list | NULL |
| store | 2 |
+----------------------------+------------+
23 rows in set (0.01 sec)
Exit the mysql session:
exit ;
Exit the client Pod shell:
exit
Get the name of the PersistentVolume (PV) created for MySQL and store it in an environment variable:
export PV_NAME = $( kubectl get pvc mysql-pv-claim -o jsonpath = '{.spec.volumeName}' )
Migrate the data to a Hyperdisk volume
Now you have a MySQL workload with data stored on a Persistent Disk SSD volume. This section describes how to migrate this data to a Hyperdisk volume by using a snapshot. This migration approach also preserves the original Persistent Disk volume, which lets you roll back to using the original MySQL instance if necessary.
While you can create snapshots from disks without detaching them from workloads, to ensure data integrity for MySQL you must stop any new writes from occurring to your disk during snapshot creation. Scale down the MySQL deployment to 0 replicas to stop writes:
kubectl scale deployment regular-mysql --replicas = 0
Create a snapshot from the existing Persistent Disk:
gcloud compute disks snapshot ${ PV_NAME } --location = ${ LOCATION } --snapshot-name = original-snapshot --description = "snapshot taken from pd-ssd"
Create a new Hyperdisk volume named mysql-recovery from the snapshot:
gcloud compute disks create mysql-recovery --project = ${ PROJECT_ID } \
--type = hyperdisk-balanced \
--size = 150GB --location = ${ LOCATION } \
--source-snapshot = projects/ ${ PROJECT_ID } /global/snapshots/original-snapshot
Update the manifest file for the restored PV with your project ID:
apiVersion : v1
kind : PersistentVolume
metadata :
name : backup
spec :
storageClassName : balanced-storage
capacity :
storage : 150G
accessModes :
- ReadWriteOnce
claimRef :
name : hyperdisk-recovery
namespace : default
csi :
driver : pd.csi.storage.gke.io
volumeHandle : projects/PRJCTID/zones/us-central1-a/disks/mysql-recovery
fsType : ext4
---
apiVersion : v1
kind : PersistentVolumeClaim
metadata :
namespace : default
name : hyperdisk-recovery
spec :
storageClassName : balanced-storage
accessModes :
- ReadWriteOnce
resources :
requests :
storage : 150G
sed -i "s/PRJCTID/ $PROJECT_ID /g" manifests/02-mysql/restore_pv.yaml
Create the PersistentVolume (PVC) and PersistentVolumeClaim from the new Hyperdisk:
kubectl apply -f manifests/02-mysql/restore_pv.yaml
Verify the data migration
Deploy a new MySQL instance that uses the newly created Hyperdisk volume. This Pod will be scheduled on the hyperdisk-pool node pool which consists of N4 nodes.
Deploy the new MySQL instance:
apiVersion : v1
kind : Service
metadata :
name : recovered-mysql
labels :
app : new-mysql
spec :
ports :
- port : 3306
selector :
app : new-mysql
clusterIP : None
---
apiVersion : apps/v1
kind : Deployment
metadata :
name : new-mysql
labels :
app : new-mysql
spec :
selector :
matchLabels :
app : new-mysql
strategy :
type : Recreate
template :
metadata :
labels :
app : new-mysql
spec :
containers :
- image : mysql:8.0
name : mysql
env :
- name : MYSQL_ROOT_PASSWORD
value : migration
- name : MYSQL_DATABASE
value : mysql
- name : MYSQL_USER
value : app
- name : MYSQL_PASSWORD
value : migration
ports :
- containerPort : 3306
name : mysql
volumeMounts :
- name : mysql-persistent-storage
mountPath : /var/lib/mysql
affinity :
nodeAffinity :
preferredDuringSchedulingIgnoredDuringExecution :
- weight : 1
preference :
matchExpressions :
- key : "cloud.google.com/gke-nodepool"
operator : In
values :
- "hyperdisk-pool"
volumes :
- name : mysql-persistent-storage
persistentVolumeClaim :
claimName : hyperdisk-recovery
kubectl apply -f manifests/02-mysql/recovery_mysql_deployment.yaml
To verify data integrity, connect to the MySQL client Pod again:
kubectl exec -it mysql-client -- bash
Inside the client Pod, connect to the new MySQL database ( recovered-mysql.default ) and verify the data. The password is migration .
mysql -u root -h recovered-mysql.default -p
USE sakila ;
SELECT table_name, table_rows FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'sakila' ;
The data should be the same as in your original MySQL instance on Persistent Disk volume .
Success: You've successfully migrated your MySQL data from a Persistent Disk to a Hyperdisk.
Exit the mysql session:
exit ;
Exit the client Pod shell:
exit
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
If you used an existing project and you don't want to delete it, delete the
individual resources:
Set environment variables for cleanup and retrieve the name of the Persistent Disk volume created by the mysql-pv-claim PersistentVolumeClaim:
export PROJECT_ID = PROJECT_ID
export KUBERNETES_CLUSTER_PREFIX = offline-hyperdisk-migration
export location = us-central1-a
export PV_NAME = $( kubectl get pvc mysql-pv-claim -o jsonpath = '{.spec.volumeName}' )
Replace PROJECT_ID with your project ID.
Delete the snapshot:
gcloud compute snapshots delete original-snapshot --quiet
Delete the GKE cluster:
gcloud container clusters delete ${ KUBERNETES_CLUSTER_PREFIX } -cluster --location = ${ LOCATION } --quiet
Delete the Persistent Disk and Hyperdisk volumes:
gcloud compute disks delete ${ PV_NAME } --location = ${ LOCATION } --quiet
gcloud compute disks delete mysql-recovery --location = ${ LOCATION } --quiet
What's next
Look through more code samples in the GKE samples GitHub repository .
Learn how to scale your storage performance with Hyperdisk volumes .
Learn about using the Compute Engine Persistent Disk CSI Driver for managing Persistent Disk and Hyperdisk volumes.
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
