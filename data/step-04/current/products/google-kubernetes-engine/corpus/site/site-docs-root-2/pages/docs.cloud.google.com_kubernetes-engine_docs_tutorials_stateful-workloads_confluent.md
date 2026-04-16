---
title: "Deploy Apache Kafka to GKE using Confluent \_|\_ Kubernetes Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/confluent
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/confluent
  title: "Deploy Apache Kafka to GKE using Confluent \_|\_ Kubernetes Engine \_|\_\
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
Deploy Apache Kafka to GKE using Confluent
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
The guide shows you how to use the
Confluent for Kubernetes (CFK)
operator to deploy Apache
Kafka
clusters on Google Kubernetes Engine (GKE).
Kafka is an open source, distributed publish-subscribe messaging system for
handling high-volume, high-throughput, and real-time streaming data. You can use
Kafka to build streaming data pipelines that move data reliably across different
systems and applications for processing and analysis.
This guide is intended for platform administrators, cloud architects, and
operations professionals interested in deploying Kafka clusters on
GKE.
You can also use the CFK operator to deploy other components of the
Confluent Platform ,
such as the web-based Confluent Control center, Schema Registry, or
KsqlDB. However, this guide focuses only on Kafka deployments.
Note: The CFK operator and most of the Confluent platform components are
distributed under a
Сonfluent Enterprise License ,
and license restrictions require users to have an active
subscription
after 30 days trial to keep using
the operator. The Developer License also is available for an indefinite
duration, however it's limited to a single broker configuration per cluster.
Objectives
Plan and deploy GKE infrastructure for Apache Kafka
Deploy and configure the CFK operator
Configure Apache Kafka using the CFK operator to ensure availability,
security, observability, and performance
Benefits
CFK offers the following benefits:
Automated rolling updates for configuration changes.
Automated rolling upgrades with no impact to Kafka availability.
If a failure occurs, CFK restores a Kafka Pod with the same Kafka broker ID,
configuration, and persistent storage volumes.
Automated rack awareness to spread replicas of a partition across different
racks (or zones), improving availability of Kafka brokers and limiting the
risk of data loss.
Support for aggregated metrics export to Prometheus.
Deployment architecture
Each data partition in a Kafka cluster has one leader broker and can have one
or more follower brokers. The leader broker handles all reads and writes to
the partition. Each follower broker passively replicates the leader broker.
In a typical Kafka setup, you also use an open source service called
ZooKeeper
to coordinate your Kafka clusters. This service helps by electing a leader
among the brokers and triggering failover in case of failures.
You can also deploy Kafka configuration without Zookeeper by activating
KRaft mode ,
but this method is not considered production-ready due to lack of support for
KafkaTopic resources ,
and credential authentication.
Availability and disaster recovery
This tutorial uses separate
node pools
and
zones
for Kafka and ZooKeeper clusters to ensure high availability and prepare for
disaster recovery.
Highly available Kubernetes clusters in Google Cloud rely on regional
clusters spanning multiple nodes and availability zones. This configuration
improves fault tolerance, scalability, and geographic redundancy. This
configuration also lets you perform rolling updates and maintenance while
providing SLAs for uptime and availability. For more information, see
Regional clusters .
Deployment diagram
The following diagram shows a Kafka cluster running on multiple nodes and
zones in a GKE cluster:
In the diagram, the Kafka StatefulSet is deployed across three nodes
in three different zones. You can control this configuration by setting the
required Pod
affinity
and
topology spread
rules on the Kafka custom resource specification.
If one zone fails, using the recommended configuration, GKE
reschedules Pods on new nodes and replicates data from the remaining replicas,
for both Kafka and Zookeeper.
The following diagram shows a ZooKeeper StatefulSet deployed across three
nodes in three different zones:
Costs
In this document, you use the following billable components of Google Cloud:
GKE
Managed Service for Prometheus
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
Enable the GKE, Backup for GKE, Compute Engine, Identity and Access Management, and Resource Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com iam.googleapis.com container.googleapis.com gkebackup.googleapis.com cloudresourcemanager.googleapis.com
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
Enable the GKE, Backup for GKE, Compute Engine, Identity and Access Management, and Resource Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com iam.googleapis.com container.googleapis.com gkebackup.googleapis.com cloudresourcemanager.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
role/storage.objectViewer, role/logging.logWriter, roles/container.clusterAdmin, role/container.serviceAgent, roles/iam.serviceAccountAdmin, roles/serviceusage.serviceUsageAdmin, roles/iam.serviceAccountAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Prepare the environment
In this tutorial, you use
Cloud Shell
to manage resources hosted
on Google Cloud. Cloud Shell is preinstalled with the software
you need for this tutorial, including
kubectl ,
the
gcloud CLI ,
Helm ,
and
Terraform .
To set up your environment with Cloud Shell, follow these steps:
Launch a Cloud Shell session from the Google Cloud console, by
clicking
Activate Cloud Shell in the
Google Cloud console .
This launches a session in the bottom pane of the Google Cloud console.
Set environment variables:
export PROJECT_ID= PROJECT_ID
export KUBERNETES_CLUSTER_PREFIX=kafka
export REGION=us-central1
Replace PROJECT_ID : your Google Cloud with your
project ID .
Clone the GitHub repository:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
Change to the working directory:
cd kubernetes-engine-samples/streaming
Create your cluster infrastructure
In this section, you run a Terraform script to create a private,
highly-available, regional GKE cluster. The following steps allow
public access to the control plane. To restrict access, create a
private cluster .
You can install the operator using a
Standard or Autopilot
cluster.
Standard
The following diagram shows a private regional Standard
GKE cluster deployed across three different zones:
To deploy this infrastructure, run the following commands from the
Cloud Shell:
export GOOGLE_OAUTH_ACCESS_TOKEN = $( gcloud auth print-access-token )
terraform -chdir = kafka/terraform/gke-standard init
terraform -chdir = kafka/terraform/gke-standard apply -var project_id = ${ PROJECT_ID } \
-var region = ${ REGION } \
-var cluster_prefix = ${ KUBERNETES_CLUSTER_PREFIX }
When prompted, type yes . It might take several minutes for this command
to complete and for the cluster to show a ready status.
Terraform creates the following resources:
A VPC network and private subnet for the Kubernetes nodes.
A router to access the internet through NAT.
A private GKE cluster in the us-central1 region.
2 node pools with autoscaling enabled (1-2 nodes per zone, 1 node per zone
minimum)
A ServiceAccount with logging and monitoring permissions.
Backup for GKE for disaster recovery.
Google Cloud Managed Service for Prometheus for cluster monitoring.
The output is similar to the following:
...
Apply complete! Resources: 14 added, 0 changed, 0 destroyed.
Outputs:
kubectl_connection_command = "gcloud container clusters get-credentials kafka-cluster --region us-central1"
Autopilot
The following diagram shows a private regional Autopilot
GKE cluster:
To deploy the infrastructure, run the following commands from the
Cloud Shell:
export GOOGLE_OAUTH_ACCESS_TOKEN = $( gcloud auth print-access-token )
terraform -chdir = kafka/terraform/gke-autopilot init
terraform -chdir = kafka/terraform/gke-autopilot apply -var project_id = ${ PROJECT_ID } \
-var region = ${ REGION } \
-var cluster_prefix = ${ KUBERNETES_CLUSTER_PREFIX }
When prompted, type yes . It might take several minutes for this command
to complete and for the cluster to show a ready status.
Terraform creates the following resources:
VPC network and private subnet for the Kubernetes nodes.
A router to access the internet through NAT.
A private GKE cluster in the us-central1 region.
A ServiceAccount with logging and monitoring permissions
Google Cloud Managed Service for Prometheus for cluster monitoring.
The output is similar to the following:
...
Apply complete! Resources: 12 added, 0 changed, 0 destroyed.
Outputs:
kubectl_connection_command = "gcloud container clusters get-credentials kafka-cluster --region us-central1"
Connect to the cluster
Configure kubectl to communicate with the cluster:
gcloud container clusters get-credentials ${ KUBERNETES_CLUSTER_PREFIX } -cluster --region ${ REGION }
Deploy the CFK operator to your cluster
In this section, you deploy the Confluent for Kubernetes (CFK) operator using a
Helm chart and then deploy a Kafka cluster.
Add the Confluent Helm Chart repository:
helm repo add confluentinc https://packages.confluent.io/helm
Add a namespace for the CFK operator and the Kafka cluster:
kubectl create ns kafka
Deploy the CFK cluster operator using Helm:
helm install confluent-operator confluentinc/confluent-for-kubernetes -n kafka
To enable CFK to manage resources across all namespaces, add the parameter
--set-namespaced=false to the Helm command.
Verify that the Confluent operator has been deployed successfully
using Helm:
helm ls -n kafka
The output is similar to the following:
NAME NAMESPACE REVISION UPDATED STATUS CHART APP VERSION
confluent-operator kafka 1 2023-07-07 10:57:45.409158 +0200 CEST deployed confluent-for-kubernetes-0.771.13 2.6.0
Deploy Kafka
In this section, you deploy Kafka in a basic configuration and then try various
advanced configuration scenarios to address availability, security, and
observability requirements.
Basic configuration
The basic configuration for the Kafka instance includes the following
components:
Three replicas of Kafka brokers, with a minimum of two available replicas
required for cluster consistency.
Three replicas of ZooKeeper nodes, forming a cluster.
Two Kafka listeners: one without authentication, and one utilizing TLS
authentication with a certificate generated by CFK.
Java MaxHeapSize and MinHeapSize set to 4 GB for Kafka.
CPU resource allocation of 1 CPU request and 2 CPU limits, and
5 GB memory requests and limits for Kafka (4 GB for the main service
and 0.5 GB for the metrics exporter) and 3 GB for Zookeeper
(2 GB for the main service and 0.5 GB for the metrics exporter).
100 GB of storage allocated to each Pod using the premium-rwo
storageClass, 100 for Kafka Data and 90/10 for Zookeeper Data/Log.
Tolerations, nodeAffinities, and podAntiAffinities configured for
each workload, ensuring proper distribution across nodes, utilizing their
respective node pools and different zones.
Communication inside the cluster secured by self-signed certificates using a
Certificate Authority that you provide.
This configuration represents the minimal setup required to create a
production-ready Kafka cluster. The following sections demonstrate custom
configurations to address aspects such as cluster security, Access Control Lists
(ACLs), topic management, certificate management and more.
Create a basic Kafka cluster
Generate a CA pair:
openssl genrsa -out ca-key.pem 2048
openssl req -new -key ca-key.pem -x509 \
-days 1000 \
-out ca.pem \
-subj "/C=US/ST=CA/L=Confluent/O=Confluent/OU=Operator/CN=MyCA"
Confluent for Kubernetes provides auto-generated certificates for Confluent
Platform components to use for TLS network encryption. You must generate and
provide a Certificate Authority (CA).
Create a Kubernetes Secret for the certificate authority:
kubectl create secret tls ca-pair-sslcerts --cert = ca.pem --key = ca-key.pem -n kafka
The name of the Secret is
predefined
Create a new Kafka cluster using the basic configuration:
kubectl apply -n kafka -f kafka-confluent/manifests/01-basic-cluster/my-cluster.yaml
This command creates a Kafka custom resource and Zookeeper custom resource
of the CFK operator that include CPU and memory requests and limits, block
storage requests, and taints and affinities to distribute the provisioned
Pods across Kubernetes nodes.
Wait a few minutes while Kubernetes starts the required workloads:
kubectl wait pods -l app = my-cluster --for condition = Ready --timeout = 300s -n kafka
Verify that the Kafka workloads were created:
kubectl get pod,svc,statefulset,deploy,pdb -n kafka
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
pod/confluent-operator-864c74d4b4-fvpxs 1/1 Running 0 49m
pod/my-cluster-0 1/1 Running 0 17m
pod/my-cluster-1 1/1 Running 0 17m
pod/my-cluster-2 1/1 Running 0 17m
pod/zookeeper-0 1/1 Running 0 18m
pod/zookeeper-1 1/1 Running 0 18m
pod/zookeeper-2 1/1 Running 0 18m
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
service/confluent-operator ClusterIP 10.52.13.164 <none> 7778/TCP 49m
service/my-cluster ClusterIP None <none> 9092/TCP,8090/TCP,9071/TCP,7203/TCP,7777/TCP,7778/TCP,9072/TCP 17m
service/my-cluster-0-internal ClusterIP 10.52.2.242 <none> 9092/TCP,8090/TCP,9071/TCP,7203/TCP,7777/TCP,7778/TCP,9072/TCP 17m
service/my-cluster-1-internal ClusterIP 10.52.7.98 <none> 9092/TCP,8090/TCP,9071/TCP,7203/TCP,7777/TCP,7778/TCP,9072/TCP 17m
service/my-cluster-2-internal ClusterIP 10.52.4.226 <none> 9092/TCP,8090/TCP,9071/TCP,7203/TCP,7777/TCP,7778/TCP,9072/TCP 17m
service/zookeeper ClusterIP None <none> 2181/TCP,7203/TCP,7777/TCP,3888/TCP,2888/TCP,7778/TCP 18m
service/zookeeper-0-internal ClusterIP 10.52.8.52 <none> 2181/TCP,7203/TCP,7777/TCP,3888/TCP,2888/TCP,7778/TCP 18m
service/zookeeper-1-internal ClusterIP 10.52.12.44 <none> 2181/TCP,7203/TCP,7777/TCP,3888/TCP,2888/TCP,7778/TCP 18m
service/zookeeper-2-internal ClusterIP 10.52.12.134 <none> 2181/TCP,7203/TCP,7777/TCP,3888/TCP,2888/TCP,7778/TCP 18m
NAME READY AGE
statefulset.apps/my-cluster 3/3 17m
statefulset.apps/zookeeper 3/3 18m
NAME READY UP-TO-DATE AVAILABLE AGE
deployment.apps/confluent-operator 1/1 1 1 49m
NAME MIN AVAILABLE MAX UNAVAILABLE ALLOWED DISRUPTIONS AGE
poddisruptionbudget.policy/my-cluster N/A 1 1 17m
poddisruptionbudget.policy/zookeeper N/A 1 1 18m
The operator creates the following resources:
Two StatefulSets for Kafka and ZooKeeper.
Three Pods for Kafka broker replicas.
Three Pods for ZooKeeper replicas.
Two PodDisruptionBudget resources, ensuring a maximum one unavailable
replica for cluster consistency.
The Service my-cluster which serves as the bootstrap server for Kafka
clients connecting from within the Kubernetes cluster. All internal Kafka
listeners are available in this Service.
The Service zookeeper which allows Kafka brokers to connect to
ZooKeeper nodes as clients.
Authentication and user management
This section shows you how to enable the authentication and authorization to
secure Kafka Listeners and share credentials with clients.
Confluent for Kubernetes supports various authentication methods for Kafka, such
as:
SASL/PLAIN authentication :
Clients use a username and password for authentication. The username and
password are stored server-side in a Kubernetes secret.
SASL/PLAIN with LDAP authentication :
Clients use a username and password for authentication. The credentials are
stored in an LDAP server.
mTLS authentication :
Clients use TLS certificates for authentication.
Limitations
CFK does not provide Custom Resources for user management. However, you can
store credentials in Secrets and refer to Secrets to in listener specs.
Although there's no Custom Resource to manage ACLs directly, the official
Confluent for Kubernetes
provides guidance on configuring ACLs using the Kafka CLI.
Create a user
This section shows you how to deploy a CFK operator that demonstrates user
management capabilities, including:
A Kafka cluster with password-based authentication (SASL/PLAIN) enabled
on one of the listeners
A KafkaTopic with 3 replicas
User credentials with read and write permissions
Create a Secret with user credentials:
export USERNAME = my-user
export PASSWORD = $( openssl rand -base64 12 )
kubectl create secret generic my-user-credentials -n kafka \
--from-literal = plain-users.json = "{\" $USERNAME \":\" $PASSWORD \"}"
Credentials should be stored in the following format:
{
"username1": "password1",
"username2": "password2",
...
"usernameN": "passwordN"
}
Configure Kafka cluster to use a listener with password-based
authentication SCRAM-SHA-512 authentication on port 9094:
kubectl apply -n kafka -f kafka-confluent/manifests/02-auth/my-cluster.yaml
Set up a topic and a client Pod to interact with your Kafka cluster and
execute Kafka commands:
kubectl apply -n kafka -f kafka-confluent/manifests/02-auth/my-topic.yaml
kubectl apply -n kafka -f kafka-confluent/manifests/02-auth/kafkacat.yaml
GKE mounts the Secret my-user-credentials to the client Pod
as a
Volume .
When the client Pod is ready, connect to it and start producing and
consuming messages using the provided credentials:
kubectl wait pod kafkacat --for = condition = Ready --timeout = 300s -n kafka
kubectl exec -it kafkacat -n kafka -- /bin/sh
Produce a message using the my-user credentials and then consume the
message to verify its receipt.
export USERNAME = $( cat /my-user/plain-users.json | cut -d '"' -f 2 )
export PASSWORD = $( cat /my-user/plain-users.json | cut -d '"' -f 4 )
echo "Message from my-user" | kcat \
-b my-cluster.kafka.svc.cluster.local:9094 \
-X security.protocol = SASL_SSL \
-X sasl.mechanisms = PLAIN \
-X sasl.username = $USERNAME \
-X sasl.password = $PASSWORD \
-t my-topic -P
kcat -b my-cluster.kafka.svc.cluster.local:9094 \
-X security.protocol = SASL_SSL \
-X sasl.mechanisms = PLAIN \
-X sasl.username = $USERNAME \
-X sasl.password = $PASSWORD \
-t my-topic -C
The output is similar to the following:
Message from my-user
% Reached end of topic my-topic [1] at offset 1
% Reached end of topic my-topic [2] at offset 0
% Reached end of topic my-topic [0] at offset 0
Type CTRL+C to stop the consumer process. If you get a Connect refused
error, wait a few minutes and then try again.
Exit the Pod shell
exit
Backups and disaster recovery
Using the Confluent operator, you can implement efficient backup strategies by
following certain patterns.
You can use
Backup for GKE
to backup:
Kubernetes resource manifests.
Confluent API custom resources and their definitions extracted from the
Kubernetes API server of the cluster undergoing backup.
Volumes that correspond to PersistentVolumeClaim resources found in the
manifests.
You can also perform a manual backup of your Kafka cluster. You should backup:
The Kafka configuration, which includes all custom resources of the
Confluent API such as KafkaTopics or Connect
The data, which is stored in the PersistentVolumes of the Kafka brokers
Storing Kubernetes resource manifests, including Confluent configurations, in
Git repositories can eliminate the need for a separate backup for Kafka
configuration as the resources can be reapplied to a new Kubernetes cluster when
necessary.
To safeguard Kafka data recovery in scenarios where a Kafka server instance, or
Kubernetes cluster where Kafka is deployed, is lost, we recommend that you
configure the Kubernetes storage class used for provisioning volumes for Kafka
brokers with the reclaimPolicy option set to Retain . We also recommended
that you take
snapshots
of Kafka broker volumes.
The following manifest describes a StorageClass that uses the reclaimPolicy
option Retain :
apiVersion : storage.k8s.io/v1
kind : StorageClass
metadata :
name : premium-rwo-retain
...
reclaimPolicy : Retain
volumeBindingMode : WaitForFirstConsumer
The following example shows the StorageClass added to the spec of a Kafka
cluster custom resource:
...
spec :
...
dataVolumeCapacity : 100Gi
storageClass :
name : premium-rwo-retain
With this configuration, PersistentVolumes provisioned using the storage class
are not deleted even when the corresponding PersistentVolumeClaim is deleted.
To recover the Kafka instance on a new Kubernetes cluster using the existing
configuration and broker instance data:
Apply the existing Confluent custom resources ( Kafka , KafkaTopic ,
Zookeeper , etc.) to a new Kubernetes cluster
Update the PersistentVolumeClaims with the name of the new Kafka broker
instances to the old PersistentVolumes using the spec.volumeName property
on the PersistentVolumeClaim.
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
Delete the individual resources
If you used an existing project and you don't want to delete it, delete the
individual resources.
Set environment variables:
export PROJECT_ID = PROJECT_ID
export KUBERNETES_CLUSTER_PREFIX = kafka
export REGION = us-central1
Run the terraform destroy command:
export GOOGLE_OAUTH_ACCESS_TOKEN = $( gcloud auth print-access-token )
terraform -chdir = kafka/terraform/ FOLDER destroy -var project_id = ${ PROJECT_ID } \
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
Learn how to backup your clusters by using Backup for GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
