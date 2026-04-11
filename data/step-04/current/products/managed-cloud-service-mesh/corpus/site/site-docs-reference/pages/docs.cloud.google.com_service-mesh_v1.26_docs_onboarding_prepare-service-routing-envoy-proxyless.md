---
title: "Prepare to set up on service routing APIs with Envoy and proxyless workloads\
  \ \_|\_ Cloud Service Mesh v1.26 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/prepare-service-routing-envoy-proxyless
  title: "Prepare to set up on service routing APIs with Envoy and proxyless workloads\
    \ \_|\_ Cloud Service Mesh v1.26 \_|\_ Google Cloud Documentation"
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
v1.26
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Prepare to set up on service routing APIs with Envoy and
proxyless workloads
This document provides information on the prerequisite tasks for setting up
Cloud Service Mesh using the service routing APIs with Envoy proxies or
with proxyless gRPC as the dataplane.
Note: This guide only supports Cloud Service Mesh with Google Cloud APIs and
does not support Istio APIs. For more information see,
Cloud Service Mesh overview .
Setting up Cloud Service Mesh includes several phases. This document
describes the first phase: instructions for preparing to configure
Cloud Service Mesh with VM instances or proxyless gRPC applications.
The additional phases are covered by the platform-specific guides listed in
Continue the setup process later in this document.
Before you read this guide, familiarize yourself with the following documents,
which provide an overview of using Cloud Service Mesh with the service
routing APIs and Gateway APIs:
Cloud Service Mesh overview
Cloud Service Mesh service routing APIs overview
Prerequisites
Prepare your environment by completing the following tasks:
Set up projects to suit your business needs.
Enable billing.
Grant the required permissions.
Enable the Traffic Director API and other APIs for your project.
Ensure that the service account has sufficient permissions to access the
Traffic Director API.
Enable the Cloud DNS API and configure Cloud DNS.
The following sections provide instructions for each task.
Set up projects
To set up and manage your projects, see
Creating and managing projects
and related documentation.
Enable billing
Make sure that billing is enabled for your Google Cloud project. For more
information, see Enable, disable, or change billing for a project .
Grant the required IAM permissions
You must have sufficient Identity and Access Management (IAM) permissions to create VM
instances and modify a network to configure Cloud Service Mesh. If you have the
role of project Owner or Editor
( roles/owner or roles/editor ) in the project where you are enabling
Cloud Service Mesh, you automatically have the correct permissions.
Otherwise, you must have all of the IAM roles shown in the
following table. If you have these roles, you also have their associated
permissions, as described in the Compute Engine IAM documentation .
Task
Required role
Set IAM policy for a service account.
Service Account Admin
( roles/iam.serviceAccountAdmin )
Enable Cloud Service Mesh.
Service Usage Admin
( roles/serviceusage.serviceUsageAdmin )
Create networks, subnets, meshes, gateways, and load balancer components.
Compute Network Admin
( roles/compute.networkAdmin )
Add and remove firewall rules.
Compute Security Admin
( roles/compute.securityAdmin )
Create instances.
Compute Instance Admin
( roles/compute.instanceAdmin )
Allows access to service accounts.
Service Account User
( roles/iam.serviceAccountUser )
Enable the service account to perform required tasks. This permission is
needed by the xDS data plane (Envoy or proxyless gRPC) to receive xDS
configuration from the control plane.
Traffic Director Client
( roles/trafficdirector.client)
The Compute Engine VMs must have the
https://www.googleapis.com/auth/cloud-platform
scope. For more information, see
Troubleshooting deployments that use proxyless gRPC .
Enable the service account to access the Traffic Director API
When you set up your data plane and connect it to Cloud Service Mesh, your
xDS clients, whether Envoy proxies or proxyless gRPC clients, connect to the trafficdirector.googleapis.com xDS server. These
xDS clients present a service account identity to the xDS server to ensure that
communications between the data plane and the control plane are properly
authorized.
For a Compute Engine VM, the xDS client uses the service account
assigned to the VM.
Unless you modify the configuration, Google Cloud uses the
Compute Engine default service account .
To grant the service account access to the Traffic Director API, use the following
instructions.
Console
In the Google Cloud console, go to the IAM & Admin
page.
Go to
IAM & Admin
Select your project.
Identify the service account to which you want to add a role:
If the service account isn't already on the Members list, it
doesn't have any roles assigned to it. Click Add and enter
the email address of the service account.
If the service account is already on the Members list, it has
existing roles. Select the service account, and then click the
Roles tab.
Expand the role. For the service account that you want to edit,
click edit Edit .
Select the Other > Traffic Director Client role.
To apply the role to the service account, click Save .
gcloud
Run the following command:
gcloud projects add-iam-policy-binding PROJECT \
--member serviceAccount: SERVICE_ACCOUNT_EMAIL \
--role=roles/trafficdirector.client
Replace the following:
PROJECT : enter gcloud config get-value project
SERVICE_ACCOUNT_EMAIL : the email associated with the
service account
Enable the required APIs
Enable the following required APIs.
osconfig.googleapis.com
trafficdirector.googleapis.com
compute.googleapis.com
networkservices.googleapis.com
To enable the required APIs, use the following instructions.
Console
In the Google Cloud console, go to the API Library page for your project.
Go to the API Library
In the Search for APIs & Services field, enter Traffic Director .
In the search results list, click Traffic Director API . If you don't see the
Traffic Director API listed, that means that you don't have the necessary
permissions to enable the Traffic Director API.
On the Traffic Director API page, click Enable .
In the Search for APIs & Services field, enter OS Config .
In the search results list, click OS Config . If you don't see the
OS Config API listed, that means that you don't have the necessary
permissions to enable the Traffic Director API.
On the OS Config API page, click Enable .
In the Search for APIs & Services field, enter Compute .
In the search results list, click Compute Engine API . If you don't see the
Compute Engine API listed, that means that you don't have the necessary
permissions to enable the Compute Engine API.
On the Compute Engine API page, click Enable .
In the Search for APIs & Services field, enter Network Services .
In the search results list, click Network Services API . If you don't see the
Network Services API listed, that means that you don't have the necessary
permissions to enable the Network Services API.
On the Network Services API page, click Enable .
gcloud
Run the following command:
gcloud services enable osconfig.googleapis.com \
trafficdirector.googleapis.com \
compute.googleapis.com \
networkservices.googleapis.com
xDS version
The service routing APIs require you to use xDS v3. For information on updating
your deployment from xDS v2 to xDS v3, see
xDS control plane APIs .
Additional requirements with Envoy proxies
This section describes additional requirements for using Cloud Service Mesh with
the service routing APIs and Envoy proxies. If you are deploying with proxyless
gRPC, see Additional requirements with proxyless gRPC .
How Envoy is installed
During the Cloud Service Mesh deployment process, you create a VM
template that automatically installs Envoy on the VMs where your applications
run.
About Envoy versions
Envoy must be version 1.20.0 or later to work with Cloud Service Mesh.
We recommend always using the most recent Envoy version to ensure that known
security vulnerabilities are mitigated.
If you decide to deploy Envoy by using one of our automated methods, we handle
this task for you as follows:
Automated Envoy deployment with Compute Engine VMs installs the Envoy
version that we have validated to work with Cloud Service Mesh.
When a new VM is created by using the instance template, the VM receives the
latest version that we have validated. If you have a long-running VM, you can
use a rolling update to replace your existing VMs and pick up the latest version .
For information about specific Envoy versions, see
Version history .
For information about security vulnerabilities, see
Security Advisories .
Additional requirements with proxyless gRPC
This section describes additional requirements for using Cloud Service Mesh with
the service routing APIs and proxyless gRPC. If you are deploying with Envoy
proxies, see Additional requirements with Envoy proxies .
Overall process with proxyless gRPC
Follow this overall procedure for setting up proxyless gRPC applications
in a service mesh:
Update your gRPC clients to the latest version of gRPC, with the most recent
patch.
Update your clients' gRPC name resolver scheme when you create a channel and
specify a Cloud Service Mesh bootstrap file.
Configure Cloud Service Mesh and Cloud Load Balancing resources.
This document provides information for completing the first two steps. The
configuration process that you use for step 3 depends on whether your
deployment uses
Compute Engine VMs or
GKE network endpoint groups (NEGs) .
Supported gRPC versions and languages
gRPC is an open source project and its release support is described on the
gRPC FAQ .
We recommend that you use the most recent version of gRPC to ensure that known
security vulnerabilities are mitigated. This also ensures that your applications
have access to the latest features supported by Cloud Service Mesh. The
service mesh features supported in various implementations and versions of
gRPC are listed on GitHub .
For a list of gRPC languages and features supported with Cloud Service Mesh and
proxyless gRPC services, see
Cloud Service Mesh features .
Cloud Service Mesh maintains compatibility with current and supported versions of
gRPC and endeavors to be compatible with gRPC versions less than one year
old, subject to the Google Cloud Platform Terms of Service .
Update your gRPC clients
Update the gRPC library in your application to the version that supports the
features that you require. For details, see the previous section.
Add the xDS name-resolver as a dependency to your gRPC applications.
Requirements per language for Java and Go are shown in the following sections.
Other languages don't have any additional requirements.
Java requirements
In Java, if you're using Gradle, add the grpc-xds dependency to your
build.gradle file. Replace LATEST_GRPC_VERSION with the
latest version of
gRPC .
dependencies {
runtimeOnly 'io.grpc:grpc-xds: LATEST_GRPC_VERSION '
}
If you're using Maven, add the following to the <dependencies> section
of pom.xml. Replace LATEST_GRPC_VERSION with the
latest version of gRPC.
<dependency>
<groupId>io.grpc</groupId>
<artifactId>grpc-xds</artifactId>
<version> LATEST_GRPC_VERSION </version>
<scope>runtime</scope>
</dependency>
Go requirements
If you're using Go, import the xds Go package .
Set gRPC name resolver to use xds
Set or change your gRPC applications to use the xds name resolution scheme in
the target URI, rather than DNS or any other resolver scheme. You do this by
using the prefix xds:/// in the target name when you create a gRPC channel.
Load balancing for gRPC clients is on a per-channel basis.
Include the service name used in the target URI in the
Cloud Service Mesh configuration. For example, in Java, you create the
channel by using this structure, in which the service name is helloworld :
ManagedChannelBuilder.forTarget("xds:///helloworld[:PORT_NUMBER]")
Create and configure a bootstrap file
The xds resolver scheme tells the gRPC application to connect to
Cloud Service Mesh to obtain configuration information for the target
service. Therefore, do the following:
Create a bootstrap file, as shown in the following sample. This file tells
gRPC to connect to an xDS server (Cloud Service Mesh) to get the configuration
for specific services.
Define an environment variable named GRPC_XDS_BOOTSTRAP , with the bootstrap
filename as the value of the environment variable.
The setup instructions have examples that show how to generate the bootstrap file.
For your convenience, you can use the latest version of Cloud Service Mesh gRPC
bootstrap generator .
A bootstrap file containing the information needed to connect to
Cloud Service Mesh must be included alongside the application. A sample
bootstrap file looks like this:
{
"xds_servers": [
{
"server_uri": "trafficdirector.googleapis.com:443",
"channel_creds": [
{
"type": "google_default"
}
],
"server_features": ["xds_v3"]
}
],
"node": {
"id": "projects/123456789012/networks/default/nodes/b7f9c818-fb46-43ca-8662-d3bdbcf7ec18",
"metadata": {
"TRAFFICDIRECTOR_NETWORK_NAME": "default"
},
"locality": {
"zone": "us-central1-a"
}
}
}
The following table explains the fields in the bootstrap file.
Field
Value and description
xds_servers
A list of xDS servers. gRPC uses only the first one in the list.
server_uri
Specify at least one. gRPC tries to connect to only the first xDS
server in the list of xds_servers . The default value is
trafficdirector.googleapis.com:443 .
channel_creds
Credentials to use with the xDS server.
type
Use the value google_default . For more information about
how credentials are obtained, see
How Application Default Credentials works .
server_features
A list of features supported by the server, such as
xDS v3 support .
The default value is empty.
node
Information about the client connecting to the xDS server.
id
The id must be in the following format as shown in
the preceding example:
projects/ PROJECT_NUMBER /networks/ NETWORK_NAME /nodes/ ID
Provide a unique string as the value of ID .
This helps identify the gRPC client that is connecting to
Cloud Service Mesh.
metadata
Information specific to the xDS server.
TRAFFICDIRECTOR_MESH_NAME
If the field is empty or not specified, then the value is set to
default .
locality
The Google Cloud zone in which the gRPC client is running.
Continue the setup process
After you complete the prerequisites described in this document, continue
with one of these documents if you are configuring Cloud Service Mesh
with the service routing APIs:
Set up proxyless gRPC services with a Mesh resource
Set up Envoy proxies with HTTP services
Set up an ingress gateway
Set up TCP services with a TCPRoute resource
Set up cross-project references with Mesh and Route resources
Set up Gateway TLS routing
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
