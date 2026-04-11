---
title: "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud Service\
  \ Mesh \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/cloud-run-api-reference
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster
  title: "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\
    \ Service Mesh \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrate in-cluster to managed control plane on a new cluster
This tutorial shows you how to migrate an application from a
Google Kubernetes Engine (GKE) cluster using in-cluster Cloud Service Mesh to a new cluster
using managed Cloud Service Mesh — Google's fully managed, Istio-compliant service
mesh.
In this tutorial, you:
Create a new Google Kubernetes Engine cluster, and install in-cluster Cloud Service Mesh
and the Cloud Service Mesh ingress gateway on the cluster. This cluster will act
as your existing cluster that you want to migrate away from.
Deploy the
Online Boutique
sample application onto the cluster with in-cluster Cloud Service Mesh.
Create another Google Kubernetes Engine cluster, in the same Google Cloud project.
Provision managed Cloud Service Mesh on the second cluster and deploy the
Cloud Service Mesh ingress gateway.
Deploy Online Boutique onto the cluster with managed Cloud Service Mesh to
replicate the deployment from the cluster with in-cluster Cloud Service Mesh.
Shift 50% of user traffic from the cluster with in-cluster Cloud Service Mesh to the
cluster with managed Cloud Service Mesh, by using Istio's traffic splitting
capabilities on the cluster with in-cluster Cloud Service Mesh.
Complete the migration from in-cluster Cloud Service Mesh to managed Cloud Service Mesh by
pointing the domain name system (DNS) entry of the cluster with
in-cluster Cloud Service Mesh to the cluster with managed Cloud Service Mesh.
Canary deployment
"Canary deployment" is a technique used in software development to test a new
version of some software before releasing that new version to all users. It
involves incrementally increasing the percentage of traffic sent to the new
version. In this tutorial, you will set up a new cluster with managed
Cloud Service Mesh and incrementally shift user traffic to it. You will start
by directing 0% of user traffic to the new cluster, then 50%, and, finally, 100%.
In production, you should use smaller and more increments. If at any point you
notice that the new cluster is incapable of handling a percentage of traffic,
you can rollback by reducing the percentage to 0%.
Canary control plane versus canary cluster
There are two commonly used strategies for migrations from in-cluster Cloud Service Mesh
to managed Cloud Service Mesh:
Canary cluster migration : In this strategy, you create a new cluster and
then provision managed Cloud Service Mesh on it.
Canary control plane migration : In this strategy, you provision
managed Cloud Service Mesh on the same cluster in which
in-cluster Cloud Service Mesh is installed. This is not a supported migration path
with Cloud Service Mesh.
In this tutorial, you will walk through the canary cluster migration strategy.
Costs
This tutorial uses the following billable components of Google Cloud:
Google Kubernetes Engine
Cloud Service Mesh
When you finish this tutorial, you can avoid ongoing costs by deleting the
resources you created. For more information, see Clean up .
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
Enable the required APIs.
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
Enable the required APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Launch Cloud Shell
In this tutorial you will use Cloud Shell , which is a shell
environment hosted on Google Cloud that lets you manage your
Google Cloud resources.
Cloud Shell comes preinstalled with the
Google Cloud CLI ,
kubectl , and
istioctl
command-line tools. The gcloud CLI provides the
primary CLI for Google Cloud.
Open a Cloud Shell session from the upper-right corner of this
page, click terminal and then click
Acknowledge . A Cloud Shell session opens inside a frame lower
on the page. Complete the following commands in that Cloud Shell
session.
Download sample code
Clone the git repositories containing the Kubernetes and Istio resources you
will use:
git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples.git
git clone https://github.com/GoogleCloudPlatform/microservices-demo.git
Set up the cluster with in-cluster Cloud Service Mesh
Create the cluster and install in-cluster Cloud Service Mesh
In the section, you create your cluster that uses in-cluster Cloud Service Mesh. In
practice, this would be the cluster(s) that you are already using.
Replace PROJECT_ID with your
project ID and create a
new cluster:
gcloud container clusters create cluster-with-in-cluster-asm \
--project = PROJECT_ID \
--zone = us-central1-a \
--machine-type = e2-standard-4 --num-nodes = 2 \
--workload-pool = PROJECT_ID .svc.id.goog
Note: This operation can take a few minutes to complete.
Rename the cluster context so that the cluster is easier to work with:
kubectl config rename-context \
gke_ PROJECT_ID _us-central1-a_cluster-with-in-cluster-asm \
cluster-with-in-cluster-asm
Check that the cluster context has been renamed:
kubectl config get-contexts --output = "name"
Download the version that installs Cloud Service Mesh 1.28.5 to
the current working directory:
curl https://storage.googleapis.com/csm-artifacts/asm/asmcli_1.28 > asmcli
You will be asked to type "y" and then press Enter.
The output is similar to:
% Total % Received % Xferd Average Speed Time Time Time Current
Dload Upload Total Spent Left Speed
100 167k 100 167k 0 0 701k 0 --:--:-- --:--:-- --:--:-- 701k
Make the asmcli script executable:
chmod +x asmcli
Install in-cluster Cloud Service Mesh using asmcli :
./asmcli install \
--project_id PROJECT_ID \
--cluster_name cluster-with-in-cluster-asm \
--cluster_location us-central1-a \
--output_dir . \
--enable_all \
--ca mesh_ca
It can take several minutes for the asmcli tool to finish. The tool outputs
informational messages so you can follow its progress.
Upon success, the output is similar to:
...
asmcli: Successfully installed ASM.
Deploy Cloud Service Mesh's ingress gateway
You will deploy the Cloud Service Mesh's ingress gateway into a separate
namespace called asm-ingress . Create the namespace:
kubectl \
--context cluster-with-in-cluster-asm \
create namespace asm-ingress
Use the istio.io/rev=asm-1285-9 label to add the asm-ingress
namespace to the service mesh and enable automatic sidecar proxy injection.
kubectl \
--context cluster-with-in-cluster-asm \
label --overwrite namespace asm-ingress istio.io/rev=asm-1285-9
The output is similar to:
namespace/asm-ingress labeled
Note: You may need to modify the istio.io/rev=asm-1285-9 label to
match your in-cluster Cloud Service Mesh version. You can see the version suffixed
in the name of your istiod-asm-* Service by running
kubectl get service --context=cluster-with-in-cluster-asm --namespace=istio-system
Deploy the Cloud Service Mesh
ingress gateway :
kubectl \
--context cluster-with-in-cluster-asm \
--namespace = asm-ingress \
apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml
kubectl \
--context cluster-with-in-cluster-asm \
--namespace = asm-ingress \
apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml
The output is similar to:
serviceaccount/asm-ingressgateway created
service/asm-ingressgateway created
deployment.apps/asm-ingressgateway created
gateway.networking.istio.io/asm-ingressgateway created
Note: You can browse the resources in the official
Cloud Service Mesh samples GitHub repository .
Deploy Online Boutique
You will deploy Online Boutique into a separate namespace called
onlineboutique . Create the namespace:
kubectl \
--context cluster-with-in-cluster-asm \
create namespace onlineboutique
Use the istio.io/rev=asm-1285-9 label to add the onlineboutique
namespace to the service mesh and enable automatic sidecar proxy injection.
kubectl \
--context cluster-with-in-cluster-asm \
label --overwrite namespace onlineboutique istio.io/rev=asm-1285-9
The output is similar to:
namespace/onlineboutique labeled
Deploy Online Boutique's 12 services, including the load generator that
imitates user traffic:
kubectl \
--context cluster-with-in-cluster-asm \
--namespace = onlineboutique \
apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml
kubectl \
--context cluster-with-in-cluster-asm \
--namespace = onlineboutique \
apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml
Get the external IP address of the Cloud Service Mesh ingress gateway:
kubectl \
--context cluster-with-in-cluster-asm \
--namespace asm-ingress \
get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}'
Copy the external IP address of the ingress gateway, and access it through
your web browser. You will see the Online Boutique sample app.
Set up the new cluster with managed Cloud Service Mesh
Create the cluster and provision managed Cloud Service Mesh
In this section, you create the cluster that you will migrate to. You will
provision managed Cloud Service Mesh, and deploy Online Boutique in order to
replicate the deployments from the cluster that uses in-cluster Cloud Service Mesh.
Create a new cluster:
gcloud container clusters create cluster-with-csm \
--project = PROJECT_ID --zone = us-central1-a \
--machine-type = e2-standard-4 --num-nodes = 2 \
--workload-pool PROJECT_ID .svc.id.goog
Note: This operation can take a few minutes to complete.
Rename the cluster context so that the cluster is easier to work with:
kubectl config rename-context \
gke_ PROJECT_ID _us-central1-a_cluster-with-csm \
cluster-with-csm
Check that the cluster context has been renamed:
kubectl config get-contexts --output = "name"
Enable Cloud Service Mesh on your project's fleet. A
fleet is a logical
grouping of Kubernetes clusters and other resources that can be managed
together.
gcloud container fleet mesh enable --project PROJECT_ID
The output is similar to:
Waiting for Feature Service Mesh to be created...done.
Register the cluster to the project's fleet:
gcloud container fleet memberships register cluster-with-csm-membership \
--gke-cluster = us-central1-a/cluster-with-csm \
--enable-workload-identity \
--project PROJECT_ID
The output is similar to:
Waiting for membership to be created...done.
Finished registering to the Fleet.
Enable managed Cloud Service Mesh on the cluster:
gcloud container fleet mesh update \
--management automatic \
--memberships cluster-with-csm-membership \
--project PROJECT_ID
The output is similar to:
Waiting for Feature Service Mesh to be updated...done.
Note: Managed Cloud Service Mesh takes cares of a lot of the manual maintenance
associated with upgrading, scaling, and securing your service mesh. Learn more
about about
Managed Cloud Service Mesh .
Verify that managed Cloud Service Mesh has been provisioned for the cluster and
is ready to be used:
gcloud container fleet mesh describe --project PROJECT_ID
It can take about 10 minutes for Cloud Service Mesh to provision and be
ready to use on the cluster. If you see
controlPlaneManagement.state: DISABLED or
controlPlaneManagement.state: PROVISIONING , you will need to re-run the
previous command every few minutes until you see
controlPlaneManagement.state: ACTIVE .
The output is similar to:
createTime: '2022-07-06T01:05:39.110120474Z'
membershipSpecs:
projects/123456789123/locations/global/memberships/cluster-with-csm-membership:
mesh:
management: MANAGEMENT_AUTOMATIC
membershipStates:
projects/123456789123/locations/global/memberships/cluster-with-csm-membership:
servicemesh:
controlPlaneManagement:
details:
- code: REVISION_READY
details: 'Ready: asm-managed'
state: ACTIVE
dataPlaneManagement:
details:
- code: OK
details: Service is running.
state: ACTIVE
state:
code: OK
description: 'Revision(s) ready for use: asm-managed.'
updateTime: '2022-07-06T01:19:24.243993678Z'
name: projects/your-project-id/locations/global/features/servicemesh
resourceState:
state: ACTIVE
spec: {}
state:
state: {}
updateTime: '2022-07-06T01:19:27.475885687Z'
Deploy Cloud Service Mesh's ingress gateway
You will deploy the Cloud Service Mesh's ingress gateway into a separate
namespace called asm-ingress . Create the namespace:
kubectl \
--context cluster-with-csm \
create namespace asm-ingress
Use the istio.io/rev=asm-managed label to add the asm-ingress namespace
to the service mesh and enable automatic sidecar proxy injection.
kubectl \
--context cluster-with-csm \
label namespace asm-ingress 'istio.io/rev=asm-managed'
Deploy the Cloud Service Mesh
ingress gateway :
kubectl \
--context cluster-with-csm \
--namespace = asm-ingress \
apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml
kubectl \
--context cluster-with-csm \
--namespace = asm-ingress \
apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml
The output is similar to:
namespace/asm-ingress configured
serviceaccount/asm-ingressgateway configured
service/asm-ingressgateway configured
deployment.apps/asm-ingressgateway configured
gateway.networking.istio.io/asm-ingressgateway configured
Note: You can browse the resources in the official
Cloud Service Mesh samples GitHub repository .
Deploy Online Boutique
You will deploy Online Boutique into a separate namespace called
onlineboutique . Create the namespace:
kubectl \
--context cluster-with-csm \
create namespace onlineboutique
Use the istio.io/rev=asm-managed label to add the onlineboutique
namespace to the service mesh and enable automatic sidecar proxy injection.
kubectl \
--context cluster-with-csm \
label namespace onlineboutique 'istio.io/rev=asm-managed'
Deploy Online Boutique's 12 services, including the load generator that
imitates user traffic:
kubectl \
--context cluster-with-csm \
--namespace = onlineboutique \
apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml
kubectl \
--context cluster-with-csm \
--namespace = onlineboutique \
apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml
Get the external IP address of the Cloud Service Mesh ingress gateway:
kubectl \
--context cluster-with-csm \
--namespace asm-ingress \
get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}'
Copy the external IP address of the asm-ingressgateway Service, and access
it through your web browser. You will see the Online Boutique sample app.
You will use the external IP address in the next section, so copy it into an
environment variable:
export INGRESS_IP_OF_CLUSTER_WITH_MANAGED_ASM = $( \
kubectl \
--context cluster-with-csm \
--namespace asm-ingress \
get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' \
)
Test the cluster with Cloud Service Mesh using a canary deployment
In this section, you configure the cluster with in-cluster Cloud Service Mesh such that
50% of the user traffic to Online Boutique is shifted to the instance of Online
Boutique on the cluster with managed Cloud Service Mesh. To achieve this, you deploy
two Istio resources to the cluster with in-cluster Cloud Service Mesh:
a ServiceEntry to tell in-cluster Cloud Service Mesh about the managed Cloud Service Mesh
cluster's Online Boutique endpoint
a VirtualService to tell the in-cluster Cloud Service Mesh ingress gateway to split the
traffic 50-50.
Note: In production, this traffic split to the cluster with
managed Cloud Service Mesh should be done in small increments — instead of an immediate
50% — and gradually be increased to 100%.
Set the IP address of the managed Cloud Service Mesh cluster's ingress gateway
inside the ServiceEntry resource:
sed -i "s/1.2.3.4/ ${ INGRESS_IP_OF_CLUSTER_WITH_MANAGED_ASM } /" anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml
Deploy the ServiceEntry to the cluster with in-cluster Cloud Service Mesh:
kubectl \
--context cluster-with-in-cluster-asm \
--namespace onlineboutique \
apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml
Deploy the VirtualService to the cluster with in-cluster Cloud Service Mesh:
kubectl \
--context cluster-with-in-cluster-asm \
--namespace onlineboutique \
apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/virtual-service-in-cluster-asm.yaml
Visit the IP address of the ingress gateway of the cluster with
in-cluster Cloud Service Mesh, in your web browser:
kubectl \
--context cluster-with-in-cluster-asm \
--namespace asm-ingress \
get service
Refresh the Online Boutique homepage multiple times, and check the footer of
the page each time. Notice that 50% of the requests are handled by a Pod on
the cluster with managed Cloud Service Mesh.
Migrate to the cluster with managed Cloud Service Mesh
This section assumes that you own a domain name and have access to its DNS
(Domain Name Server) settings.
Add an A record to the DNS settings to point the domain name (such as
example.com) to the IP address of the ingress gateway running on the cluster
with in-cluster Cloud Service Mesh.
Note: This operation can take a few minutes to complete.
Access Online Boutique by visiting the domain name in your web browser.
Minimize DNS record time to live (TTL) to ensure you can quickly revert the
DNS entry if you need to rollback.
Set the A record of your domain name to the external IP address of the
ingress gateway of the cluster with managed Cloud Service Mesh.
When the migration is successful, delete the cluster with
in-cluster Cloud Service Mesh:
gcloud container clusters delete cluster-with-in-cluster-asm \
--zone = us-central1-a \
--project = PROJECT_ID
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, either delete the project that contains the resources, or
keep the project and delete the individual resources.
Delete project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete the resources
Delete the cluster with managed Cloud Service Mesh:
gcloud container clusters delete cluster-with-managed-asm \
--zone = us-central1-a \
--project = PROJECT_ID
What's next
Learn about
Managed Cloud Service Mesh .
Learn about
Cloud Service Mesh security best practices .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
