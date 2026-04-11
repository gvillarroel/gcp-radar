---
title: "Access global Google APIs through backends \_|\_ Virtual Private Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends
  title: "Access global Google APIs through backends \_|\_ Virtual Private Cloud \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Access global Google APIs through backends
This page describes how to access global Google APIs by using
Private Service Connect
backends that are based on
cross-region internal Application Load Balancers .
This configuration lets you target one or more
individual global Google APIs while applying the
visibility and control
that Private Service Connect backends provide.
You can configure custom hostnames, local to your Virtual Private Cloud (VPC) and
connected on-premises networks, that route traffic to your chosen global
Google APIs.
You can access the backends from any region, and the backend can load
balance traffic to Private Service Connect network endpoint
groups (NEGs) that are located in any region.
You can send traffic to the backends from peered VPC
networks.
For a list of the available global Google APIs, see
Global Google API targets .
Before you begin
To get the permissions that
you need to configure a backend to access global Google APIs,
ask your administrator to grant you the
following IAM roles on your Google Cloud project:
Compute Admin ( roles/compute.admin )
Certificate Manager Owner ( roles/certificatemanager.owner )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable
the Compute Engine API in your project.
Enable
the Certificate Manager API in
your project.
Create a private key and a signed certificate from a certificate authority
(CA). Follow the instructions in Step 1: Create a private key and
certificate .
The private key and certificate are needed to create a self-managed SSL
certificate with Certificate Manager.
Create a certificate resource for a cross-region internal Application Load Balancer by using the
private key and signed certificate that you created. When you
upload the certificate you must set the scope to
all-regions . For more information, see Upload a self-managed certificate to
Certificate Manager .
The certificate resource is needed to configure the target HTTPS proxy for the
load balancer.
Create a proxy-only subnet
if you don't already have one. There must be a single proxy-only subnet
in the VPC network and region where you intend to create the
cross-region internal Application Load Balancer's forwarding rule. This subnet is used by all
internal Application Load Balancers within that network and region.
Create a Private Service Connect NEG
For each global Google API that you want to access, create a
Private Service Connect NEG .
Private Service Connect NEGs are regional, even when they are
used to connect to global Google APIs.
A Private Service Connect NEG can't be updated after it is
created.
Console
In the Google Cloud console, go to the Create a network endpoint group
page.
Go to Create a network endpoint group
On the Create network endpoint group page, enter a Name for the
network endpoint group.
For the Network endpoint group type , select
Private Service Connect NEG (Regional) .
For Target , select Global Google APIs .
Select the Region for the network endpoint group.
Select the Target service for the network endpoint group.
Click Create .
gcloud
Use the network-endpoint-groups create command .
gcloud compute network-endpoint-groups create NEG_NAME \
--network-endpoint-type=private-service-connect \
--psc-target-service= TARGET_SERVICE \
--region= REGION
Replace the following:
NEG_NAME : a name for the network endpoint group.
TARGET_SERVICE : the global Google API target that you
want to connect to—for example, pubsub.googleapis.com . See the
list of supported global Google API targets .
REGION : the region to create the network endpoint group
in.
API
Make a POST request to the
regionNetworkEndpointGroups.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /networkEndpointGroups
{
"name": " NEG_NAME ",
"networkEndpointType": "PRIVATE_SERVICE_CONNECT",
"pscTargetService": " TARGET_SERVICE "
}
Replace the following:
PROJECT_ID : the project ID of the network endpoint
group.
REGION : the region to create the network endpoint group
in.
NEG_NAME : a name for the network endpoint group.
TARGET_SERVICE : the global Google API target that you
want to connect to—for example, pubsub.googleapis.com . See the
list of supported global Google API targets .
Configure the load balancer
To access global Google APIs, configure a cross-region internal Application Load Balancer.
Console
Select the load balancer type
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click Create load balancer .
For Type of load balancer , select Application Load Balancer
(HTTP/HTTPS) and click Next .
For Public facing or internal , select Internal and click
Next .
For Cross-region or single region deployment , select Best for
cross-region workloads and click Next .
Click Configure .
Basic configuration
Enter a Name for the load balancer.
Select a Network for the load balancer.
The network must contain a proxy-only subnet in the region where you
are creating the load balancer.
Frontend configuration
Click Frontend configuration .
Enter a Name for the load balancer's forwarding rule.
In the Protocol field, select HTTPS (includes HTTP/2 and HTTP/3) .
Select a Subnetwork region for the load balancer's subnetwork.
Select a Subnetwork for the load balancer.
Click IP address , and then do one of the following:
To automatically assign an ephemeral IP address, select
Ephemeral (Automatic) .
To choose an ephemeral IP address, select Ephemeral (Custom) , and
then enter a Custom ephemeral IP address from the IP address range
of the load balancer's subnet.
To reserve and use a static internal IP address, click
Create IP address , and then do the following:
Enter a Name for the IP address.
Click Static IP address , and then do one of the following:
To automatically assign a static IP address, select
Assign automatically .
To configure a specific IP address, select Let me choose ,
and then enter a Custom IP address from the IP address range
of the load balancer's subnet.
Click Reserve .
Ensure that the Port field is set to 443 , to allow HTTPS traffic.
Click the Certificate list, and then select your
self-managed certificate.
Click Done .
Backend configuration
Click Backend configuration .
For each global Google API that you want to access,
create a global backend service. To create a global backend service, do
the following:
From the Create or select backend services menu, select Create a
backend service .
Enter a Name for the backend service.
Set the Backend type to
Private Service Connect network endpoint group .
Set the Private Service Connect target type to
Global Google API .
Select HTTPS for the protocol.
In the Backends section, click the New backend menu, and select
a Private Service Connect network endpoint group.
If you need to create a new Private Service Connect
network endpoint group, click Create PSC NEG .
Click Done .
Click Create .
Ensure that each backend service that you want to add is selected in the
Create or select backend services menu, and then click OK .
Routing rules
The set of rules for routing incoming HTTPS requests to
specific backend services is called a URL map .
To learn more about URL maps, see
URL maps overview .
If you are configuring only one backend service for the load balancer, the
default routing rule is sufficient, and you can skip to
Review and finalize .
If you are configuring multiple backend services, you must create one path
matcher for each backend service. Each host rule can reference only one path
matcher, but two or more host rules can reference the same path matcher.
If you have more than one backend service, click Routing rules .
Select Simple host and path rule .
For each backend, do the following:
Click Add host and path rule .
For Host , enter the hostname that will be used to send requests to
this service—for example, pubsub.example.com .
For Paths , enter the path—for example, /* .
For Backends , select the backend service.
Review and finalize
Click Review and finalize to review the configuration.
Click Create .
gcloud
For each global Google API that you want to access, do the following:
To create a global backend service, use the
gcloud compute backend-services create command .
gcloud compute backend-services create BACKEND_SERVICE_NAME \
--load-balancing-scheme=INTERNAL_MANAGED \
--protocol=HTTPS \
--global
Replace BACKEND_SERVICE_NAME with the
name of the backend service.
To add a NEG to the corresponding backend service, use the
gcloud compute backend-services add-backend command .
gcloud compute backend-services add-backend BACKEND_SERVICE_NAME \
--network-endpoint-group= NEG_NAME \
--network-endpoint-group-region= REGION \
--global
Replace the following:
NEG_NAME : the name of the Private Service Connect NEG.
REGION : the region of the Private Service Connect NEG.
To create a global URL map for
the load balancer, use the
gcloud compute url-maps create command .
A URL map must reference a default backend service. If you're configuring
your load balancer with one backend service, set that backend service as
the default. If you're configuring your load balancer to use multiple
backend services, pick one of the backend services to be the URL map
default.
gcloud compute url-maps create URL_MAP_NAME \
--default-service= DEFAULT_BACKEND_SERVICE_NAME
Replace the following:
URL_MAP_NAME : a name for the URL map.
DEFAULT_BACKEND_SERVICE_NAME : the name of the load
balancer's default backend service. The default is used when no host
rule matches the requested hostname.
Optional: If you're configuring your load balancer to use multiple
backend services, complete this step. If your URL map only
references one backend service, skip this step.
To add additional backend services to the URL map, use the
gcloud compute url-maps add-path-matcher command .
For each backend service, add a path matcher and one or more host
rules. You must create one path matcher for each backend service.
Each host rule can reference only one path matcher, but two or more
host rules can reference the same path matcher.
gcloud compute url-maps add-path-matcher URL_MAP_NAME \
--path-matcher-name= PATH_MATCHER \
--default-service= BACKEND_SERVICE_NAME \
--new-hosts= HOSTNAMES
Replace the following:
PATH_MATCHER : a name for the path matcher.
BACKEND_SERVICE_NAME : the name of the backend service.
HOSTNAMES : one or more hostnames to send requests
to for the backend service—for example,
pubsub.example.com . You can enter multiple hostnames in a
comma-separated list.
To create a target HTTPS proxy, use the
gcloud compute target-https-proxies create command .
gcloud compute target-https-proxies create PROXY_NAME \
--url-map= URL_MAP_NAME \
--certificate-manager-certificates= CERTIFICATE_NAME
Replace the following:
PROXY_NAME : a name for the target HTTPS proxy.
URL_MAP_NAME : the name of the URL map.
CERTIFICATE_NAME : the name of the certificate
resource.
To create a global forwarding rule for your load balancer, use the
gcloud compute forwarding-rules create command .
gcloud compute forwarding-rules create RULE_NAME \
--load-balancing-scheme=INTERNAL_MANAGED \
--network= NETWORK \
--address= IP_ADDRESS \
--ports=443 \
--target-https-proxy= PROXY_NAME \
--subnet= SUBNET \
--subnet-region= SUBNET_REGION \
--global
Replace the following:
RULE_NAME : the name of the forwarding rule.
NETWORK : the VPC network of the
forwarding rule. This network must contain a proxy-only subnet in the
region where you are creating the load balancer.
IP_ADDRESS : the internal IP address of the
forwarding rule, which must be within the IP address range of the
forwarding rule's subnet. To use a specific ephemeral IP address, enter
the IP address—for example, 10.0.0.5 . To use a static internal
IP address, enter the name of the IP address. To let Google Cloud
select an ephemeral IP address, omit this flag.
SUBNET : the subnet of the forwarding rule.
SUBNET_REGION : the region of the forwarding
rule's subnet.
API
For each global Google API that you want to access, do the following:
To create a global backend service, make a POST request to the
backendServices.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/backendServices
{
"loadBalancingScheme": "INTERNAL_MANAGED",
"name": " BACKEND_SERVICE_NAME ",
"protocol": "HTTPS"
}
Replace the following:
PROJECT_ID : the project ID of your project.
BACKEND_SERVICE_NAME : the name of the backend
service.
To add a NEG to the corresponding backend service, make a PATCH
request to the backendServices.patch method .
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/backendServices/ BACKEND_SERVICE_NAME
{
"backends": [
{
"group": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /networkEndpointGroups/ NEG_NAME "
}
]
}
Replace the following:
REGION : the region of the NEG.
NEG_NAME : the name of the network endpoint group
to add.
To create a global URL map for
the load balancer, make a POST request to the
urlMaps.insert method .
A URL map must reference a default backend service. If you're configuring
your load balancer with one backend service, set that backend service as
the default. If you're configuring your load balancer to use multiple
backend services, pick one of the backend services to be the URL map
default.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/urlMaps
{
"defaultService": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/backendServices/ DEFAULT_BACKEND_SERVICE_NAME ",
"name": " URL_MAP_NAME "
}
Replace the following:
DEFAULT_BACKEND_SERVICE_NAME : the name of the load
balancer's default. The default is used when no host rule matches the
requested hostname.
URL_MAP_NAME : a name for the URL map.
If you're configuring your load balancer to use multiple
backend services, complete this step. If your URL map only
references one backend service, skip this step.
To add additional backend services to the URL map, make a PATCH request
to the urlMaps.patch method .
For each backend service, add a path matcher and one or more host
rules. You must create one path matcher for each backend service.
Each host rule can reference only one path matcher, but two or more
host rules can reference the same path matcher.
You can add multiple path matchers and host rules by making a single
API request.
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/urlMaps/ URL_MAP_NAME
{
"pathMatchers": [
{
"name": " PATH_MATCHER_NAME_1 ",
"defaultService": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/backendServices/ BACKEND_SERVICE_NAME_1 "
},
{
"name": " PATH_MATCHER_NAME_2 ",
"defaultService": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/backendServices/ BACKEND_SERVICE_NAME_2 "
}
],
"hostRules": [
{
"hosts": [" HOSTNAME_1 "],
"pathMatcher": " PATH_MATCHER_NAME_1 "
},
{
"hosts": [" HOSTNAME_2 "],
"pathMatcher": " PATH_MATCHER_NAME_2 "
}
]
}
Replace the following:
PATH_MATCHER_NAME_1 : a name for the first path
matcher.
BACKEND_SERVICE_NAME_1 : the name of the first
backend service.
PATH_MATCHER_NAME_2 : a name for the second path
matcher.
BACKEND_SERVICE_NAME_2 : the name of the second
backend service.
HOSTNAME_1 : the hostname to send requests to for
the first service—for example, pubsub.example.com .
HOSTNAME_2 : the hostname to send requests to for
the second service.
To create a target HTTPS proxy, make a POST request to the
targetHttpsProxies.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/targetHttpsProxies
{
"name": " PROXY_NAME ",
"sslCertificates": [
"https://certificatemanager.googleapis.com/v1/projects/ PROJECT_ID /locations/global/certificates/ CERTIFICATE_NAME "
],
"urlMap": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/urlMaps/ URL_MAP_NAME "
}
Replace the following:
PROJECT_ID : the ID of the project.
PROXY_NAME : a name for the target HTTPS proxy.
CERTIFICATE_NAME : the name of the certificate
resource.
URL_MAP_NAME : the name of the URL map.
To create a global forwarding rule for your load balancer, make a POST
request to the
globalForwardingRules.insert method .
The forwarding rule's network must contain a proxy-only subnet in the
subnet of your forwarding rule's region.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/forwardingRules
{
"IPAddress": " IP_ADDRESS ",
"loadBalancingScheme": "INTERNAL_MANAGED",
"name": " FORWARDING_RULE_NAME ",
"network": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/ NETWORK_NAME ",
"portRange": "443",
"subnetwork": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ SUBNET_REGION /subnetworks/ SUBNET_NAME ",
"target": "https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/targetHttpsProxies/ PROXY_NAME "
}
Replace the following:
IP_ADDRESS : the internal IP address of the
forwarding rule, which must be within the IP address range of the
forwarding rule's subnet. To use a specific ephemeral IP address,
provide the IP address—for example, 10.0.0.5 . To use a static
internal IP address, provide the name of the IP address. To let
Google Cloud select an ephemeral IP address, omit this field.
FORWARDING_RULE_NAME : the name of the forwarding
rule.
NETWORK_NAME : the name of the forwarding rule's
VPC network. This network must contain a proxy-only
subnet in the region where you are creating the load balancer.
SUBNET_REGION : the region of the forwarding rule's
subnet.
SUBNET_NAME : the name of the forwarding rule's
subnet.
Verify the configuration
To test your backend's connection to global Google APIs, do the following:
If you don't have one, create a virtual machine (VM) instance in the
VPC network where you configured the backend.
Ensure that you haven't created firewall rules or firewall policies that
override the implied IPv4 allow egress rule .
Connect to the VM.
From the VM, use curl to verify that you can query each API. This command
sets the Host header and bypasses DNS resolution by specifying a
user-defined IP address.
You can skip certificate validation using the -k flag. You might need to
skip validation if you used a self-signed certificate to configure the target
HTTPS proxy or if the VM doesn't have the certificate of the certificate
authority that signed your certificate.
curl -iv --resolve HOSTNAME :443: IP_ADDRESS \
'https:// HOSTNAME / RESOURCE_URI '
Replace the following:
HOSTNAME : the hostname that you configured in your
URL map—for example, pubsub.example.com .
IP_ADDRESS : the IP address of your load balancer's
forwarding rule.
RESOURCE_URI : the rest of the URI of the resource
that you want to use for verification. For example, if the load balancer
is forwarding requests to a regional endpoint for Pub/Sub,
you could use $discovery/rest?version=v1 .
Configure DNS records
Configure DNS records for each host that you added to the URL map, pointing to
the IP address of the forwarding rule. If you're using Cloud DNS to manage
DNS, see Add, modify, and delete records .
Otherwise, configure DNS records on your DNS server.
For example, say you have created the following configurations:
A Private Service Connect NEG that uses target service
pubsub.googleapis.com .
A cross-region internal Application Load Balancer that uses that Private Service Connect NEG
as a backend.
A URL map that defines a host rule for pubsub.example.com .
For this configuration to work correctly, you must create a DNS record that
points pubsub.example.com to the IP address of the forwarding rule.
With this configuration, any requests sent to pubsub.example.com are sent
to the load balancer, which forwards the request to pubsub.googleapis.com .
Configure clients to send requests to the backend
To send requests through the backend instead of the public service endpoints,
you must configure clients to send requests to the hostname that you defined in
the load balancer's URL map—for example, pubsub.example.com . See the
documentation for your client or client library for information about
configuring it to use custom endpoints. The following pages include
configuration steps for some common clients:
Python : you can configure api_endpoint in Client
options .
Go : you can configure WithEndpoint in
ClientOptions .
.NET : you can configure
Endpoint in
the client's builder class.
Java : you can configure setEndpoint in the
client's settings class.
gcloud : you can configure api_endpoint_overrides in the
gcloud CLI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
