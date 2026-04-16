---
title: "Configure Cloud Service Mesh for Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run
  title: "Configure Cloud Service Mesh for Cloud Run \_|\_ Google Cloud Documentation"
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
Configure Cloud Service Mesh for
Cloud Run
Preview
— Cloud Service Mesh for Cloud Run
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page shows how to configure Cloud Service Mesh to run on a range of
computing infrastructures for Cloud Run services.
Cloud Service Mesh lets you enable mesh
advanced traffic management capabilities ,
such as weighted traffic splitting and global load balancing, as well as
observability and security policies for traffic from one Cloud Run
service to another. It also gives you a fully managed data plane solution that
removes the operational burden of maintaining your own service mesh sidecars.
Before you begin
Have familiarity with Cloud Service Mesh .
Set your project:
gcloud config set core/project PROJECT_ID
In the Google Cloud console, enable the following APIs for your project:
Cloud DNS API
Network Services API
Network Security API
Traffic Director API
Serverless VPC Access API
If you're using a Serverless VPC Access connector and not Direct VPC
for network egress.
Update gcloud components to the latest version (488.0.0 or above):
gcloud components update
Limitations
Cloud Run services using Cloud Service Mesh may
experience increased cold start latency. Refer to the
General development tips section
in the Cloud Run documentation for advice on improving startup
times.
Required roles
To get the permissions that you need to configure and deploy Cloud Run
services, ask your administrator to grant you the following IAM
roles:
Cloud Run Developer
( roles/run.developer ) on the Cloud Run service
Service Account User
( roles/iam.serviceAccountUser ) on the service identity
The Cloud Run client's service account must also have the
following roles:
Traffic Director Client
( roles/trafficdirector.client ) to access the
service routing APIs
Cloud Trace Agent ( roles/cloudtrace.agent ) to enable tracing
For a list of IAM roles and permissions that are associated with
Cloud Run, see
Cloud Run IAM roles
and Cloud Run IAM permissions .
If your Cloud Run service interfaces with
Google Cloud APIs, such as Cloud Client Libraries, see the
service identity configuration guide .
For more information about granting roles, see
deployment permissions
and manage access .
Call between Cloud Run services using Cloud Service Mesh
Cloud Run uses the Cloud Service Mesh
service routing APIs .
These APIs let a Cloud Run service call other
Cloud Run services using a customized URL rather than the
provided run.app URL. In addition, Cloud Run automatically
authenticates to the destination Cloud Run service so that you
don't have to configure your own authentication to attach request credentials to
other Cloud Run services.
To call from one Cloud Run service to another using
Cloud Service Mesh, follow these steps:
Set up a Cloud Service Mesh
Set up Cloud DNS
Create the destination Cloud Run service
Create the serverless NEG
Create the client Cloud Run service
Call the service from the mesh client
Set up a Cloud Service Mesh
To create a service route using the default URL, save the Mesh
specification in a file called mesh.yaml :
name: MESH_NAME
Replace MESH_NAME with the
mesh resource
name.
Import the Mesh resource from the specification by running the following
command:
gcloud network-services meshes import MESH_NAME \
--source = mesh.yaml \
--location = global
Replace MESH_NAME with the
mesh resource
name.
Set up Cloud DNS
Note: Cloud DNS is a paid service. See Cloud DNS pricing .
You can skip Cloud DNS setup and go to the
next section
if you use a Private Service Connect endpoint
with the full run.app URL address as the hostname because only private IP
addresses are captured.
When a mesh client calls the destination service , the hostname
used in the request must be resolvable through DNS. Any valid RFC 1918
IP address is acceptable because the sidecar captures all IP traffic to these IP
address ranges and redirects it appropriately.
The following example shows how to create a wildcard * entry in the Cloud DNS
zone that resolves to a single IP address. If you don't want to use an exclusive
Cloud DNS zone, create a Cloud DNS entry
for every hostname
corresponding to the Cloud Run services that you want to be
addressable from the mesh.
To create a Cloud DNS record in an exclusive zone, run the following
commands:
Create a private managed DNS zone in Cloud DNS for a service
mesh.
gcloud dns managed-zones create MESH_NAME \
--description = "Domain for DOMAIN_NAME service mesh routes" \
--dns-name = DOMAIN_NAME . \
--networks = VPC_NETWORK_NAME \
--visibility = private
Create a DNS record within the newly created private managed zone. Make
sure that the IP address 10.0.0.1 is unused.
gcloud dns record-sets create "*. DOMAIN_NAME ." \
--type = A \
--zone = " MESH_NAME " \
--rrdatas = 10 .0.0.1 \
--ttl = 3600
Replace the following:
DOMAIN_NAME : the name of the DNS domain.
MESH_NAME : the mesh resource name.
VPC_NETWORK_NAME : the name of your
VPC network; for example, "default".
Access internal services with Cloud Service Mesh
Cloud Run lets you restrict incoming network traffic to
"internal." If your service has this ingress restriction enabled, traffic that
travels from your mesh through the Virtual Private Cloud network can be set as "internal"
when you enable an access path to Cloud Run.
To access internal services with Cloud Service Mesh, use one of the
following methods:
Configure Private Google Access for your VPC network .
You don't need to set up a custom DNS record.
Attach a Private Service Connect endpoint to Cloud Service Mesh .
This requires custom DNS record setup for the default *.run.app URL to use the
Private Service Connect endpoint address.
Create the destination Cloud Run service
Note that the Cloud Run destination cannot have the
default URL disabled .
Deploy a new or existing Cloud Run service:
gcloud run deploy DESTINATION_SERVICE_NAME \
--no-allow-unauthenticated \
--region = REGION \
--image = IMAGE_URL
Replace the following:
DESTINATION_SERVICE_NAME : the name of the
destination Cloud Run service.
REGION : the name of the region.
IMAGE_URL : a reference to the container image,
such as us-docker.pkg.dev/cloudrun/container/hello:latest .
Create the serverless network endpoint group (NEG)
Create the destination NEG by running the following command:
gcloud compute network-endpoint-groups create DESTINATION_SERVICE_NAME -neg \
--region = REGION \
--network-endpoint-type = serverless \
--cloud-run-service = DESTINATION_SERVICE_NAME
Replace the following:
REGION : the name of the region.
DESTINATION_SERVICE_NAME : the name of the
destination Cloud Run service.
Create an internal self-managed backend service that references the
serverless NEG.
Create the backend service:
gcloud compute backend-services create DESTINATION_SERVICE_NAME - REGION \
--global \
--load-balancing-scheme = INTERNAL_SELF_MANAGED
Replace DESTINATION_SERVICE_NAME with the name of the destination service and REGION with the name of the region.
Add the serverless backend to the backend service:
gcloud compute backend-services add-backend DESTINATION_SERVICE_NAME - REGION \
--global \
--network-endpoint-group = DESTINATION_SERVICE_NAME -neg \
--network-endpoint-group-region = REGION
Replace DESTINATION_SERVICE_NAME with the name of the destination service and REGION with the name of the region.
Create an HTTP route that references the backend service.
The Mesh resource and services are configured. Connect them with an
HTTPRoute resource that associates a hostname with a backend service.
Create the HTTPRoute specification and save it to a file called
http_route.yaml :
name: " DESTINATION_SERVICE_NAME -route"
hostnames:
- " DESTINATION_SERVICE_NAME . DOMAIN_NAME "
meshes:
- "projects/ PROJECT_ID /locations/global/meshes/ MESH_NAME "
rules:
- action:
destinations:
- serviceName: "projects/ PROJECT_ID /locations/global/backendServices/ DESTINATION_SERVICE_NAME - REGION "
Set the hostnames to the names that you'd like to use to address the
service. All clients within the same service mesh can call this service
using the http://<HOSTNAME> URL, regardless of the region and project of
the caller. If you've set up Cloud DNS to use a private IP
address, the route hostname can also be the full run.app URL
address—in which case, you can skip the Cloud DNS setup step.
Replace the following:
DESTINATION_SERVICE_NAME : the name of the
destination Cloud Run service.
DOMAIN_NAME : the name of the DNS domain.
PROJECT_ID : the ID of the project.
MESH_NAME : the name of the mesh.
REGION : the name of the region.
Create the HTTPRoute resource by using the specification in the
http_route.yaml file:
gcloud network-services http-routes import DESTINATION_SERVICE_NAME -route \
--source=http_route.yaml \
--location=global
Grant the Cloud Run Invoker role
( roles/iam.invoker ) on the Cloud Run destination service by
running the following command:
gcloud run services add-iam-policy-binding DESTINATION_SERVICE_NAME \
--region REGION \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/run.invoker
Replace the following:
DESTINATION_SERVICE_NAME : the name of the
destination Cloud Run service.
REGION : the name of the region.
PROJECT_NUMBER : the number of the project.
Create the client Cloud Run service
Creating a client Cloud Run service creates an Envoy sidecar
whose resources relate to your QPS and total configuration size. Most of the
time, CPU usage is less than 1 percent of a vCPU and memory usage is less than
50 MB.
You must have network egress access
to a Virtual Private Cloud network.
To create the client service for testing, deploy the fortio app in Cloud Run
to allow forwarding traffic to HTTP routes:
gcloud beta run deploy CLIENT_SERVICE_NAME \
--region = REGION \
--image = fortio/fortio \
--network = VPC_NETWORK_NAME \
--subnet = SUBNET_NAME \
--mesh = "projects/ PROJECT_ID /locations/global/meshes/ MESH_NAME "
Replace the following:
CLIENT_SERVICE_NAME : the name of the
client Cloud Run service.
REGION : the name of your region.
VPC_NETWORK_NAME : the name of your
VPC network; for example, "default".
SUBNET_NAME : the name of your subnet; for example,
"default".
PROJECT_ID : the ID of your project.
MESH_NAME : the
mesh resource
name.
Note: If your container fails to start, make sure that you've enabled all APIs .
You might also need to give your service account access to Traffic Director by
running the following command:
gcloud projects add-iam-policy-binding PROJECT_ID --member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com --role = roles/trafficdirector.client
Call service from a mesh client
To forward a request to the destination route by using the fortio test app
from the previous Create client service section:
Fetch the URL of the Cloud Run client service that you
created by running the following command:
TEST_SERVICE_URL = $( gcloud run services describe CLIENT_SERVICE_NAME \
--region = REGION --format = "value(status.url)" \
--project = PROJECT_ID )
Replace the following:
CLIENT_SERVICE_NAME : the name of the client
Cloud Run service.
REGION : the name of your region.
PROJECT_ID : the ID of your project.
Use the curl command to send a request to the destination route of the
fortio endpoint from the previous step:
curl -H "Authorization: Bearer $( gcloud auth print-identity-token ) " " $TEST_SERVICE_URL /fortio/fetch/ DESTINATION_SERVICE_NAME . DOMAIN_NAME "
Replace the following:
DESTINATION_SERVICE_NAME : the name of the
destination Cloud Run service.
DOMAIN_NAME : the name of the DNS domain.
Call Compute Engine backend from Cloud Run
To deploy a Compute Engine and Cloud Service Mesh service route
using managed instance groups as backends,
configure the Compute Engine-based HTTP server in Cloud Service Mesh .
This lets Cloud Run clients use this backend service route to
send requests directly to Compute Engine instances.
Next steps
Explore common Cloud Run networking configurations for public and private networking
Configure private networking for Cloud Run
Set up Envoy proxies with HTTP services
Route traffic from Cloud Run Services to Cloud Service Mesh workloads on GKE
Route traffic from Cloud Service Mesh workloads to Cloud Run Services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
