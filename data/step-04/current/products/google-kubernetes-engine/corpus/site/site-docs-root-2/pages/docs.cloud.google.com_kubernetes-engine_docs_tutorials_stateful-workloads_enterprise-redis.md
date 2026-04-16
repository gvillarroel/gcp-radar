---
title: "Deploy Redis to GKE using Redis Enterprise \_|\_ Kubernetes Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis
  title: "Deploy Redis to GKE using Redis Enterprise \_|\_ Kubernetes Engine \_|\_\
    \ Google Cloud Documentation"
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
Deploy Redis to GKE using Redis Enterprise
Stay organized with collections
Save and categorize content based on your preferences.
Standard
The guide shows you how to deploy
Redis Enterprise
to Google Kubernetes Engine (GKE) clusters.
Redis is an open source in-memory NoSQL
database primarily used for caching. It has built-in replication, Lua scripting,
LRU eviction, transactions, on-disk persistence, and high availability.
Redis Enterprise is an enterprise-grade solution that extends the Redis
open-source with simplified management including geo-replicated data
distribution, linear scaling of operations throughput, data tiering, advanced
security features, and more.
Redis Enterprise has different pricing for each deployment option, including:
Software ,
Cloud , or
Hybrid and Multi-cloud .
This guide is intended for platform administrators, cloud architects, and
operations professionals interested in deploying Redis Enterprise on
Google Kubernetes Engine (GKE).
Note: Redis Enterprise Software distributed under a
Redis Enterprise License ,
and license restrictions require users to have an active subscription after a
30 day trial to keep
using Redis Enterprise.
Objectives
Plan and deploy GKE infrastructure for Redis
Deploy the Redis Enterprise Operator
Deploy a Redis Enterprise Cluster
Create a Redis Enterprise Database
Demonstrate database authentication
Benefits
Redis Enterprise offers the following benefits:
A Kubernetes-native way to manage Redis Enterprise Cluster (REC) lifecycle and
Redis Enterprise Databases (REDBs)
Resource utilization by co-locating multiple Redis databases within a single
Kubernetes Pod
Reduced operational overhead by handling routine maintenance tasks such as
patching and upgrades
Support for Redis software images from private container registries, such
as Artifact Registry, to enhance the security and availability of containers
Support for Google Cloud Managed Service for Prometheus for database monitoring and
observability
Enhanced security features such as encryption, access controls, and
integration with Kubernetes RBAC (Role-Based Access Control)
Advanced authentication methods including LDAP and third party credential
managers like Vault
Ability to
configure scheduled backups
Deployment architecture
Redis Enterprise manages the following Kubernetes resources:
The Enterprise cluster and its configuration in a StatefulSet. The cluster
consists of Redis nodes (Pods) with installed Redis packages. These nodes have
running processes to ensure the node is part of a cluster. Each node provides
a container to run multiple database instances (shards). Although Kubernetes
best practices state that a Pod should represent one application with one
container, Redis Enterprise deploys multiple Redis databases to a single
container. This approach provides better resource utilization, performance,
and network throughput. Each container also has a zero-latency proxy to route
and manage traffic to specific Redis database processes within a container.
The RedisEnterpriseDatabase (REDBs) custom resource that represents the
Redis database instances created within the REC
Kubernetes Services that serve REDB instances as database endpoints
A controller Pod called Service Rigger that creates and deletes database
endpoints when a database is created or deleted
In this tutorial, you create a
one-to-many
deployment by deploying a REC into a dedicated namespace and using separate
namespaces for application deployments for better isolation.
The following diagram describes Redis Enterprise components and how they are
interconnected:
Figure 1 : An example Redis Enterprise architecture.
In this tutorial, you configure Redis Enterprise Cluster to be highly available.
To accomplish this, the REC requires an odd number of nodes and a minimum of
three nodes. You also set affinity, anti-affinity rules, and node taints that
ensure that each Redis node is placed in a different Kubernetes node and the
Redis nodes are spread evenly across the Kubernetes cluster.
Using multiple nodes and zones is crucial for achieving a high-available
GKE cluster for the following reasons:
Fault tolerance : Multiple nodes distribute the workload across the
cluster, ensuring that if one node fails, the other nodes can take over the
tasks, preventing downtime and service interruptions.
Scalability : Having multiple nodes allows for horizontal scaling by adding
or removing nodes as needed, ensuring optimal resource allocation and
accommodating increased traffic or workload demands.
High availability : Using multiple zones within a region ensures redundancy
and minimizes the risk of a single point of failure. If an entire availability
zone experiences an outage, the cluster can continue running in other zones,
maintaining service availability.
Geographic redundancy : By spanning nodes across regions, the cluster's
data and services are geographically distributed, providing resilience against
natural disasters, power outages, or other local disruptions that might impact
a single zone.
Rolling updates and maintenance : By using multiple nodes, you can perform
rolling updates and maintenance on individual nodes without impacting the
overall availability of the cluster. This ensures continuous service while
allowing you to perform necessary updates and apply patches seamlessly.
Service Level Agreements (SLAs) : Google Cloud provides SLAs for
multi-zone deployments, guaranteeing a minimum level of uptime and
availability.
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
Enable the Compute Engine, IAM, GKE, and Resource Manager APIs:
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
Enable the Compute Engine, IAM, GKE, and Resource Manager APIs:
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
In this tutorial, you use Cloud Shell to manage resources hosted on
Google Cloud. Cloud Shell comes preinstalled with the software you need
for this tutorial, including
kubectl , the
gcloud CLI , and Terraform .
To set up your environment with Cloud Shell, follow these steps:
Launch a Cloud Shell session from the Google Cloud console, by
clicking
Activate Cloud Shell in the
Google Cloud console .
This launches a session in the bottom pane of the Google Cloud console.
Set environment variables:
export PROJECT_ID= PROJECT_ID
export KUBERNETES_CLUSTER_PREFIX=redis
export REGION=us-central1
Replace PROJECT_ID : your Google Cloud with your
project ID .
Clone the GitHub repository:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
Change to the working directory:
cd kubernetes-engine-samples/databases/redis-enterprise-operator
Create your cluster infrastructure
In this section, you run a Terraform script to create a private,
highly-available, regional GKE cluster and VPC.
The following diagram shows a private regional Standard
GKE cluster deployed across three different zones:
To deploy this infrastructure, run the following commands from the
Cloud Shell:
cd terraform/gke-standard
export GOOGLE_OAUTH_ACCESS_TOKEN = $( gcloud auth print-access-token )
terraform init
terraform apply -var project_id = ${ PROJECT_ID } \
-var region = ${ REGION } \
-var cluster_prefix = ${ KUBERNETES_CLUSTER_PREFIX }
When prompted, type yes . It might take several minutes for this command to
complete and for the cluster to show a ready status.
Terraform creates the following resources:
A VPC network and private subnet for the Kubernetes nodes
A router to access the internet through NAT
A private GKE cluster in the us-central1 region
One node pool with auto-scaling enabled (One to two nodes per zone, one
node per zone minimum)
The output is similar to the following:
...
Apply complete! Resources: 14 added, 0 changed, 0 destroyed.
...
Connect to the cluster
Using Cloud Shell, configure kubectl to communicate with the cluster:
gcloud container clusters get-credentials ${ KUBERNETES_CLUSTER_PREFIX } -cluster --location ${ REGION }
Deploy the Redis Enterprise operator to your cluster
In this section, you deploy the
Redis Enterprise operator
to your Kubernetes cluster.
Create namespaces for the REC and its applications:
kubectl create namespace rec-ns
kubectl create namespace application
Label the namespaces:
kubectl label namespace rec-ns connection = redis
kubectl label namespace application connection = redis
Get the latest version of the Redis Enterprise Operator bundle:
VERSION = ` curl --silent https://api.github.com/repos/RedisLabs/redis-enterprise-k8s-docs/releases/latest | grep tag_name | awk -F '"' '{print $4}' `
Install the Redis Enterprise operator:
kubectl apply -n rec-ns -f https://raw.githubusercontent.com/RedisLabs/redis-enterprise-k8s-docs/ $VERSION /bundle.yaml
The output is similar to the following:
role.rbac.authorization.k8s.io/redis-enterprise-operator created
rolebinding.rbac.authorization.k8s.io/redis-enterprise-operator created
serviceaccount/redis-enterprise-operator created
service/admission created
customresourcedefinition.apiextensions.k8s.io/redisenterpriseclusters.app.redislabs.com created
customresourcedefinition.apiextensions.k8s.io/redisenterprisedatabases.app.redislabs.com created
customresourcedefinition.apiextensions.k8s.io/redisenterpriseremoteclusters.app.redislabs.com created
customresourcedefinition.apiextensions.k8s.io/redisenterpriseactiveactivedatabases.app.redislabs.com created
deployment.apps/redis-enterprise-operator created
Deploy Redis Enterprise Cluster
Apply the manifest to your cluster:
kubectl apply -n rec-ns -f manifests/01-basic-cluster/rec.yaml
The command might take several minutes to complete.
Check the status of the REC deployment:
kubectl get rec -n rec-ns
The output is similar to the following:
NAME NODES VERSION STATE SPEC STATUS LICENSE STATE SHARDS LIMIT LICENSE EXPIRATION DATE AGE
gke-rec 3 7.2.4-52 Running Valid Valid 4 2023-09-29T20:15:32Z 4m7s
The cluster is ready when STATE is RUNNING .
Optional: Configure the admission controller
You can optionally configure infrastructure for the database validation on
deployment.
Setup the admission controller and check if the admission tls Secret is
present:
kubectl get secret admission-tls -n rec-ns
Get the certificate:
export CERT = $( kubectl get secret admission-tls -n rec-ns -o jsonpath = '{.data.cert}' )
Copy the certificate into the webhook.yaml file:
sed -i -e 's/CRT/' $CERT '/g' manifests/01-basic-cluster/webhook.yaml
Deploy the validation webhook:
sed -i -e 's/CRT/' $CERT '/g' manifests/01-basic-cluster/webhook.yaml
The admission controller validates database syntax on labeled namespaces.
Verify the admission controller by creating a non-functional database:
kubectl apply -n rec-ns -f - << EOF
apiVersion: app.redislabs.com/v1alpha1
kind: RedisEnterpriseDatabase
metadata:
name: redis-enterprise-database
spec:
evictionPolicy: illegal
EOF
The output is similar to the following:
Error from server: error when creating "STDIN": admission webhook "redisenterprise.admission.redislabs" denied the request: 'illegal' is an invalid value for 'eviction_policy'. Possible values are ['volatile-lru', 'volatile-ttl', 'volatile-random', 'allkeys-lru', 'allkeys-random', 'noeviction', 'volatile-lfu', 'allkeys-lfu']
Create namespaces
By default, the Redis Enterprise Operator has no privileges to perform actions
outside its own namespace. To allow the Redis Enterprise Operator to create
REDB and database endpoints in other namespaces, you must configure RBAC.
Apply the corresponding role and role binding in the application namespace:
kubectl apply -f manifests/01-basic-cluster/role.yaml -n application
kubectl apply -f manifests/01-basic-cluster/role-binding.yaml -n application
Create cluster role and cluster role binding in the rec-ns namespace:
kubectl apply -n rec-ns -f manifests/01-basic-cluster/cluster_role.yaml
kubectl apply -n rec-ns -f manifests/01-basic-cluster/cluster_role_binding.yaml
Edit the REC ConfigMap to add control over the application namespace:
kubectl patch ConfigMap/operator-environment-config --type merge -p '{"data": {"REDB_NAMESPACES_LABEL": "connection=redis"}}' -n rec-ns
Each namespace labeled as ConfigMap is patched.
Check the status of the resources in your Redis infrastructure in the
rec-ns namespace:.
kubectl get pod,deploy,svc,rec,statefulset,cm,secrets -n rec-ns
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
pod/gke-rec-0 2/2 Running 0 172m
pod/gke-rec-1 2/2 Running 0 171m
pod/gke-rec-2 2/2 Running 0 168m
pod/gke-rec-services-rigger-5f885f59dc-gc79g 1/1 Running 0 172m
pod/redis-enterprise-operator-6668ccd8dc-kx29z 2/2 Running 2 (5m58s ago) 5h
NAME READY UP-TO-DATE AVAILABLE AGE
deployment.apps/gke-rec-services-rigger 1/1 1 1 172m
deployment.apps/redis-enterprise-operator 1/1 1 1 5h
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
service/admission ClusterIP 10.52.11.13 <none> 443/TCP 5h
service/gke-rec ClusterIP 10.52.5.44 <none> 9443/TCP,8001/TCP 172m
service/gke-rec-prom ClusterIP None <none> 8070/TCP 172m
service/gke-rec-ui ClusterIP 10.52.3.29 <none> 8443/TCP 172m
NAME NODES VERSION STATE SPEC STATUS LICENSE STATE SHARDS LIMIT LICENSE EXPIRATION DATE AGE
redisenterprisecluster.app.redislabs.com/gke-rec 3 7.2.4-52 Running Valid Valid 4 2023-10-05T11:07:20Z 172m
NAME READY AGE
statefulset.apps/gke-rec 3/3 172m
NAME DATA AGE
configmap/gke-rec-bulletin-board 1 172m
configmap/gke-rec-health-check 5 172m
configmap/kube-root-ca.crt 1 5h2m
configmap/operator-environment-config 1 5h
NAME TYPE DATA AGE
secret/admission-tls Opaque 2 5h
secret/gke-rec Opaque 2 172m
Deploy Redis Enterprise Databases
Create Redis Enterprise Databases in the application namespaces:
kubectl apply -f manifests/01-basic-cluster/a-rdb.yaml -n application
Check the REDB status:
kubectl get redb --all-namespaces
The output is similar to the following:
NAMESPACE NAME VERSION PORT CLUSTER SHARDS STATUS SPEC STATUS AGE
application app-db 7.2.0 12999 gke-rec 1 active Valid 15s
Verify that the Services for each REDB are running:
kubectl get svc --all-namespaces
The output is similar to the following:
NAMESPACE NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
application app-db ExternalName <none> redis-12999.rec-ns.svc.cluster.local 12999/TCP 72m
Verify that the Secret was created:
kubectl get secrets -n application
The output is similar to the following:
NAME TYPE DATA AGE
redb-app-db Opaque 3 96m
Authenticate using passwords
You can connect to REDB using a Pod with redis-cli in the application
namespace. The client Pod uses the secrets available in the application
namespace (REDB) to establish a connection.
Databases created with the Custom Resource REDB only support
password authentication without ACL .
Create the client Pod:
kubectl apply -n application -f manifests/03-auth/client_pod.yaml
Connect to the client Pod:
kubectl exec -n application -i -t redis-client -c redis-client -- /bin/sh
Connect to the database:
redis-cli -h $SERVICE -p $PORT --pass $PASS
Create a key:
SET mykey "Hello World"
The output is similar to the following:
OK
Get the key:
GET mykey
The output is similar to the following:
"Hello World"
Exit the Pod shell
exit
Understand how Prometheus collects metrics for your Redis cluster
The following diagram shows how Prometheus metrics collecting works:
In the diagram, a GKE private cluster contains:
A Redis Pod that gathers metrics on path / and port 8070
Prometheus-based collectors that process the metrics from the Redis Pod
A PodMonitoring resource that sends metrics to Cloud Monitoring
The Redis Enterprise operator exposes cluster metrics in Prometheus format.
Create the metrics-proxy Deployment:
kubectl apply -n rec-ns -f manifests/02-prometheus-metrics/metrics-proxy.yaml
Because the operator only provides an HTTPS endpoint with the self-signed
certificate and the PodMonitoring resource doesn't support disabling
TLS certificate verification, you use the metrics-proxy Pod as a reverse
proxy for this endpoint to expose the metrics on the HTTP port.
Create the
PodMonitoring
resource to scrape metrics by labelSelector :
kubectl apply -n rec-ns -f manifests/02-prometheus-metrics/pod-monitoring.yaml
In the Google Cloud console, go to the GKE Clusters Dashboard page.
Go to GKE Clusters Dashboard
The dashboard shows non-zero metrics ingestion rate.
Create a Dashboard
You can view the metrics by creating a dashboard.
Create the dashboard:
gcloud --project " ${ PROJECT_ID } " monitoring dashboards create --config-from-file monitoring/dashboard.json
The output is similar to the following:
Created [f4efbe4e-2605-46b4-9910-54b13d29b3be].
In the Google Cloud console, go to the Dashboards page.
Go to Dashboards
Open the Redis Enterprise Cluster dashboard . It might take several
minutes for the dashboard to auto-provision.
Verify the exported metrics
To verify the metrics, create new database and examine the metrics.
Open the Redis Enterprise Cluster dashboard .
Create an additional Redis database:
kubectl apply -n rec-ns -f manifests/02-prometheus-metrics/c-rdb.yaml
The Database Count on the dashboard should update.
Create a client Pod to connect to the new database:
kubectl apply -n rec-ns -f manifests/02-prometheus-metrics/client_pod.yaml
Connect to the client Pod and prepare variables:
kubectl exec -it redis-client-c -n rec-ns -- /bin/bash
Use the redis-cli tool to create new keys:
for i in { 1 ..50 } ; do \
redis-cli -h $SERVICE -p $PORT -a $PASS \
--no-auth-warning SET mykey- $i "myvalue- $i " ; \
done
Refresh the page and observe that graphs have been updated to show the
actual database state.
Exit the Pod shell
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
export KUBERNETES_CLUSTER_PREFIX = redis
export REGION = us-central1
Run the terraform destroy command:
export GOOGLE_OAUTH_ACCESS_TOKEN = $( gcloud auth print-access-token )
cd terraform/gke-standard
terraform destroy -var project_id = ${ PROJECT_ID } \
-var region = ${ REGION } \
-var cluster_prefix = ${ KUBERNETES_CLUSTER_PREFIX }
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
Delete the GitHub repository:
rm -r ~/kubernetes-engine-samples/
What's next
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
