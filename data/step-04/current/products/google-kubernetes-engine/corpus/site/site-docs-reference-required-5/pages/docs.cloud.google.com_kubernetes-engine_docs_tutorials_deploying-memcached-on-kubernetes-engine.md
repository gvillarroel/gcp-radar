---
title: "Deploying Memcached on GKE \_|\_ Kubernetes Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploying-memcached-on-kubernetes-engine
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploying-memcached-on-kubernetes-engine
  title: "Deploying Memcached on GKE \_|\_ Kubernetes Engine \_|\_ Google Cloud Documentation"
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
Deploying Memcached on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Standard
In this tutorial, you learn how to deploy a cluster of distributed
Memcached
servers on Google Kubernetes Engine (GKE)
using Kubernetes ,
Helm ,
and Mcrouter .
Memcached is a popular open source, multi-purpose caching system.
It usually serves as a temporary store for frequently used data to speed up web
applications and lighten database loads.
Memcached's characteristics
Memcached has two main design goals:
Simplicity : Memcached functions like a large
hash table
and offers a simple API to store and retrieve arbitrarily shaped objects by
key.
Speed : Memcached holds cache data exclusively in random-access memory
(RAM), making data access extremely fast.
Memcached is a distributed system that allows its hash table's capacity to scale
horizontally across a pool of servers. Each Memcached server operates
in complete isolation from the other servers in the pool.
Therefore, the routing and load balancing between the servers must be done at
the client level. Memcached clients apply a
consistent hashing
scheme to appropriately select the target servers. This scheme helps ensure the
following conditions:
The same server is always selected for the same key.
Memory usage is evenly balanced between the servers.
A minimum number of keys are relocated when the pool of servers is reduced
or expanded.
The following diagram illustrates at a high level the interaction between a
Memcached client and a distributed pool of Memcached servers.
Figure 1 : High-level interaction between a Memcached client and a
distributed pool of Memcached servers.
Objectives
Learn about some characteristics of Memcached's distributed architecture.
Deploy a Memcached service to GKE using Kubernetes and
Helm.
Deploy Mcrouter, an open source Memcached proxy, to improve the system's
performance.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
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
Enable the Compute Engine and GKE APIs.
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
Enable the Compute Engine and GKE APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Start a Cloud Shell instance.
Open Cloud Shell
Deploying a Memcached service
One simple way to deploy a Memcached service to GKE is to
use a
Helm
chart. To proceed with the deployment, follow these steps in
Cloud Shell:
Create a new GKE cluster of three nodes:
gcloud container clusters create demo-cluster --num-nodes 3 --location us-central1-f
Note: The cluster's zone specified here is arbitrary for the purposes of
this tutorial. You can select another zone for your cluster from the
available zones .
Download the helm binary archive:
HELM_VERSION=3.7.1
cd ~
wget https://get.helm.sh/helm-v ${ HELM_VERSION } -linux-amd64.tar.gz
Unzip the archive file to your local system:
mkdir helm-v ${ HELM_VERSION }
tar zxfv helm-v ${ HELM_VERSION } -linux-amd64.tar.gz -C helm-v ${ HELM_VERSION }
Add the helm binary's directory to your PATH environment variable:
export PATH = "$(echo ~)/helm-v${HELM_VERSION}/linux-amd64:$PATH"
This command makes the helm binary discoverable from any directory during
the current Cloud Shell session. To make this configuration persist
across multiple sessions, add the command to your Cloud Shell
user's ~/.bashrc file.
Install a new
Memcached Helm chart
release with the high-availability architecture:
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install mycache bitnami/memcached --set architecture="high-availability" --set autoscaling.enabled="true"
The Memcached Helm chart uses a
StatefulSet controller .
One benefit of using a StatefulSet controller is that the pods' names are
ordered and predictable. In this case, the names are
mycache-memcached-{0..2} . This ordering makes it easier for Memcached
clients to reference the servers.
To see the running pods, run the following command:
kubectl get pods
The Google Cloud console output looks like this:
NAME READY STATUS RESTARTS AGE
mycache-memcached-0 1/1 Running 0 45s
mycache-memcached-1 1/1 Running 0 35s
mycache-memcached-2 1/1 Running 0 25s
Note: The installation command from the previous step takes a moment to
complete. It might take about a minute before all three pods are ready and
running.
Discovering Memcached service endpoints
The Memcached Helm chart uses a
headless service .
A headless service exposes IP addresses for all of its pods so that they can be
individually discovered.
Verify that the deployed service is headless:
kubectl get service mycache-memcached -o jsonpath="{.spec.clusterIP}"
The output None confirms that the service has no clusterIP and that it
is therefore headless.
The service creates a DNS record for a hostname of the form:
[ SERVICE_NAME ] . [ NAMESPACE ] . svc . cluster . local
In this tutorial, the service name is mycache-memcached . Because a
namespace was not explicitly defined, the default namespace is used, and
therefore the entire host name is
mycache-memcached.default.svc.cluster.local . This hostname resolves to a
set of IP addresses and domains for all three pods exposed by the service.
If, in the future, some pods get added to the pool, or old ones get removed,
kube-dns
will automatically update the DNS record.
It is the client's responsibility to discover the Memcached service
endpoints, as described in the next steps.
Retrieve the endpoints' IP addresses:
kubectl get endpoints mycache-memcached
The output is similar to the following:
NAME ENDPOINTS AGE
mycache-memcached 10.36.0.32:11211,10.36.0.33:11211,10.36.1.25:11211 3m
Notice that each Memcached pod has a separate IP address, respectively
10.36.0.32 , 10.36.0.33 , and 10.36.1.25 . These IP addresses might
differ for your own server instances. Each pod listens to port 11211 ,
which is Memcached's default port.
For an alternative to step 2, perform a DNS inspection by using a
programming language like Python:
Start a Python interactive console inside your cluster:
kubectl run -it --rm python --image=python:3.10-alpine --restart=Never python
In the Python console, run these commands:
import socket
print ( socket . gethostbyname_ex ( 'mycache-memcached.default.svc.cluster.local' ))
exit ()
The output is similar to the following:
('mycache-memcached.default.svc.cluster.local', ['mycache-memcached.default.svc.cluster.local'], ['10.36.0.32', '10.36.0.33', '10.36.1.25'])
Test the deployment by opening a telnet session with one of the running
Memcached servers on port 11211 :
kubectl run -it --rm busybox --image=busybox:1.33 --restart=Never telnet mycache-memcached-0.mycache-memcached.default.svc.cluster.local 11211
At the telnet prompt, run these commands using the
Memcached ASCII protocol :
set mykey 0 0 5
hello
get mykey
quit
The resulting output is shown here in bold:
set mykey 0 0 5
hello
STORED
get mykey
VALUE mykey 0 5
hello
END
quit
Implementing the service discovery logic
You are now ready to implement the basic service discovery logic shown in
the following diagram.
Figure 2: Service discovery logic.
At a high level, the service discovery logic consists of the following steps:
The application queries kube-dns for the DNS record of
mycache-memcached.default.svc.cluster.local .
The application retrieves the IP addresses associated with that record.
The application instantiates a new Memcached client and provides it with the
retrieved IP addresses.
The Memcached client's integrated load balancer connects to the Memcached
servers at the given IP addresses.
You now implement this service discovery logic by using Python:
Deploy a new Python-enabled pod in your cluster and start a shell
session inside the pod:
kubectl run -it --rm python --image=python:3.10-alpine --restart=Never sh
Install the
pymemcache library:
pip install pymemcache
Start a Python interactive console by running the python command.
In the Python console, run these commands:
import socket
from pymemcache.client.hash import HashClient
_ , _ , ips = socket . gethostbyname_ex ( 'mycache-memcached.default.svc.cluster.local' )
servers = [( ip , 11211 ) for ip in ips ]
client = HashClient ( servers , use_pooling = True )
client . set ( 'mykey' , 'hello' )
client . get ( 'mykey' )
The output is as follows:
b'hello'
The b prefix signifies a
bytes literal ,
which is the format in which Memcached stores data.
Exit the Python console:
exit()
To exit the pod's shell session, press Control + D .
Enabling connection pooling
As your caching needs grow, and the pool scales up to dozens, hundreds, or
thousands of Memcached servers, you might run into some limitations. In
particular, the large number of open connections from Memcached clients might
place a heavy load on the servers, as the following diagram shows.
Figure 3: High number of open connections when all
Memcached clients access all Memcached servers directly.
To reduce the number of open connections, you must introduce a proxy to enable
connection pooling, as in the following diagram.
Figure 4: Using a proxy to reduce the number of open connections.
Mcrouter (pronounced "mick router"), a powerful open source Memcached proxy, enables
connection pooling. Integrating Mcrouter is seamless, because it uses the standard
Memcached ASCII protocol. To a Memcached client, Mcrouter behaves like a normal
Memcached server. To a Memcached server, Mcrouter behaves like a normal
Memcached client.
To deploy Mcrouter, run the following commands in Cloud Shell.
Delete the previously installed mycache Helm chart release:
helm delete mycache
Deploy new Memcached pods and Mcrouter pods by installing a new
Mcrouter Helm chart
release:
helm repo add stable https://charts.helm.sh/stable
helm install mycache stable/mcrouter --set memcached.replicaCount=3
The proxy pods are now ready to accept requests from client applications.
Test this setup by connecting to one of the proxy pods. Use the telnet
command on port 5000 , which is Mcrouter's default port.
MCROUTER_POD_IP=$(kubectl get pods -l app=mycache-mcrouter -o jsonpath="{.items[0].status.podIP}")
kubectl run -it --rm busybox --image=busybox:1.33 --restart=Never telnet $MCROUTER_POD_IP 5000
In the telnet prompt, run these commands:
set anotherkey 0 0 15
Mcrouter is fun
get anotherkey
quit
The commands set and echo the value of your key.
You have now deployed a proxy that enables connection pooling.
Reducing latency
To increase resilience, it is common practice to use a cluster with multiple
nodes. This tutorial uses a cluster with three nodes. However, using multiple
nodes also brings the risk of increased latency caused by heavier network
traffic between nodes.
Colocating proxy pods
You can reduce this risk by connecting client application pods only to a
Memcached proxy pod that is on the same node. The following diagram
illustrates this configuration.
Figure 5: Topology for the interactions between
application pods, Mcrouter pods, and Memcached pods across a cluster of three
nodes.
Perform this configuration as follows:
Ensure that each node contains one running proxy pod. A common approach is
to deploy the proxy pods with a
DaemonSet controller .
As nodes are added to the cluster, new proxy pods are automatically added to
them. As nodes are removed from the cluster, those pods are
garbage-collected. In this tutorial, the Mcrouter Helm chart that you
deployed earlier
uses a DaemonSet controller
by default. So, this step is already complete.
Set a hostPort value in the proxy container's Kubernetes parameters to
make the node listen to that port and redirect traffic to the proxy. In this
tutorial, the Mcrouter Helm chart uses this parameter by default for port
5000 . So this step is also already complete.
Expose the node name as an environment variable inside the application pods
by using the spec.env entry and selecting the spec.nodeName fieldRef
value. See more about this method in the
Kubernetes documentation .
Deploy sample application Pods. The following command applies a
Kubernetes Deployment. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster.:
cat << EOF | kubectl create -f -
apiVersion : apps / v1
kind : Deployment
metadata :
name : sample-application
spec :
selector :
matchLabels :
app : sample-application
replicas : 9
template :
metadata :
labels :
app : sample-application
spec :
containers :
- name : busybox
image : busybox : 1 . 33
command : [ "sh" , "-c" ]
args :
- while true ; do sleep 10 ; done ;
env :
- name : NODE_NAME
valueFrom :
fieldRef :
fieldPath : spec . nodeName
EOF
Verify that the node name is exposed, by looking inside one of the
sample application pods:
POD=$(kubectl get pods -l app=sample-application -o jsonpath="{.items[0].metadata.name}")
kubectl exec -it $POD -- sh -c 'echo $NODE_NAME'
This command outputs the node's name in the following form:
gke-demo-cluster-default-pool-XXXXXXXX-XXXX
Connecting the pods
The sample application pods are now ready to connect to the Mcrouter pod that
runs on their respective mutual nodes at port 5000 , which is Mcrouter's
default port.
Initiate a connection for one of the pods by opening a telnet session:
POD=$(kubectl get pods -l app=sample-application -o jsonpath="{.items[0].metadata.name}")
kubectl exec -it $POD -- sh -c 'telnet $NODE_NAME 5000'
In the telnet prompt, run these commands:
get anotherkey
quit
Resulting output:
Mcrouter is fun
Finally, as an illustration, the following Python code is a sample program
that performs this connection by retrieving the NODE_NAME variable from
the environment and using the pymemcache library:
import os
from pymemcache.client.base import Client
NODE_NAME = os . environ [ 'NODE_NAME' ]
client = Client (( NODE_NAME , 5000 ))
client . set ( 'some_key' , 'some_value' )
result = client . get ( 'some_key' )
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Run the following command to delete the GKE cluster:
gcloud container clusters delete demo-cluster --location us-central1-f
Optionally, delete the Helm binary:
cd ~
rm -rf helm-v3.7.1
rm helm-v3.7.1-linux-amd64.tar.gz
What's next
Explore the many other
features
that Mcrouter offers beyond simple connection pooling, such as failover
replicas, reliable delete streams, cold cache warmup, multi-cluster
broadcast.
Explore the source files of the
Memcached chart
and
Mcrouter chart
for more details on the respective Kubernetes configurations.
Read about
effective techniques
for using Memcached on App Engine. Some of them apply to other platforms,
such as GKE.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
