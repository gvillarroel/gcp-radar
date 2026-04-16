---
title: "Build repositories from GitHub Enterprise in a private network \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network
  title: "Build repositories from GitHub Enterprise in a private network \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Build repositories from GitHub Enterprise in a private network
Stay organized with collections
Save and categorize content based on your preferences.
1st gen
2nd gen
Cloud Build enables you to create triggers on a GitHub Enterprise instance.
This page explains how you can use GitHub Enterprise triggers to invoke builds
in response to commits or pull requests from a GitHub Enterprise instance
and explains how you can build repositories from
GitHub Enterprise if your instance is hosted in a private network.
Before you begin
Enable the Cloud Build and Service Directory APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
If you have not created a private pool, follow the instructions in
Create and manage private pools
to create a private pool. You will need a private pool to
build in a private network.
Build repositories from GitHub Enterprise in a private network
Complete the following steps to connect your GitHub Enterprise instance
to Cloud Build from a private network:
Grant Service Directory access to the Cloud Build service agent:
export PROJECT_NUMBER = $( gcloud projects describe PROJECT_ID --format = "value(projectNumber)" )
export CLOUD_BUILD_SERVICE_AGENT = "service- $PROJECT_NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com"
gcloud projects add-iam-policy-binding PROJECT_ID_CONTAINING_SERVICE_DIRECTORY \
--member = "serviceAccount: $CLOUD_BUILD_SERVICE_AGENT " \
--role = "roles/servicedirectory.viewer"
Replace the following:
PROJECT_ID is your Cloud Build project ID.
PROJECT_ID_CONTAINING_SERVICE_DIRECTORY is the ID of your
Google Cloud project that contains your Service Directory.
Grant VPC network resource access to the Cloud Build service agent:
export PROJECT_NUMBER = $( gcloud projects describe PROJECT_ID --format = "value(projectNumber)" )
export CLOUD_BUILD_SERVICE_AGENT = "service- $PROJECT_NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com"
gcloud projects add-iam-policy-binding PROJECT_ID_CONTAINING_NETWORK_RESOURCE \
--member = "serviceAccount: $CLOUD_BUILD_SERVICE_AGENT " \
--role = "roles/servicedirectory.pscAuthorizedService"
Replace the following:
PROJECT_ID is your Cloud Build project ID.
PROJECT_ID_CONTAINING_NETWORK_RESOURCE is the ID of your
Google Cloud project that contains your network resource.
Set up a Service Directory service by completing the following steps:
Configure a namespace for your service:
gcloud service-directory namespaces create NAMESPACE --location= REGION --project= PROJECT_ID_CONTAINING_SERVICE_DIRECTORY
Replace the following:
NAMESPACE is the name of your Service Directory namespace.
LOCATION is the region where you create connections and link repositories.
PROJECT_ID_CONTAINING_SERVICE_DIRECTORY is the ID of your
Google Cloud project that contain your Service Directory.
Note: The region you specify in your namespace must match the region you specify in your Cloud Build host connection.
Configure a service for your namespace:
gcloud service-directory services create SERVICE --namespace= NAMESPACE --location= LOCATION
Replace the following:
SERVICE is the name of your Service Directory resource.
NAMESPACE is the name of your Service Directory namespace.
LOCATION is the region where you create connections and link repositories.
Configure an endpoint for your service:
gcloud service - directory endpoints create ENDPOINT_NAME \
-- namespace = NAMESPACE \
-- service = SERVICE \
-- location = LOCATION \
-- address = INSTANCE_IP_ADDRESS \
-- port = PORT \
-- network = projects / PROJECT_ID_CONTAINING_NETWORK / locations / global / networks / NETWORK
Replace the following:
ENDPOINT_NAME is the name of your endpoint.
NAMESPACE is the name of your Service Directory namespace.
SERVICE is the name of your Service Directory resource.
LOCATION is the region where you create connections and link repositories.
INSTANCE_IP_ADDRESS is the IP address of your GitHub Enterprise
instance in your network. For example, 123.45.67.89 . To learn more, see Use Service Directory to reach hosts outside Google Cloud .
PORT is the name of your port for HTTPS.
PROJECT_ID_CONTAINING_NETWORK is your Google Cloud project ID that contains your VPC network.
NETWORK is the name of your VPC network.
You can now use the service resource ( projects/{PROJECT_ID}/locations/{LOCATION}/namespaces/{NAMESPACE}/services/{SERVICE} ) to create your connection in the following steps.
Connect a GitHub Enterprise host .
Connect a GitHub Enterprise repository .
Create a GitHub Enterprise trigger to build repositories hosted on your
GitHub Enterprise instance.
Use Service Directory to reach hosts outside Google Cloud
Service Directory uses the IP address range 35.199.192.0/19 to
connect your host outside of Google Cloud. You must add this range to
an allowlist in your firewall. Additionally, your private network needs to be
configured to route this range through the Cloud VPN or Cloud Interconnect
connection.
If your connection uses a Cloud Router, you can configure your connection to
communicate
the range to your private network.
To learn more, see Configure private network access .
Use Cloud Load Balancing to reach hosts outside Google Cloud
If your network configuration does not allow you to route the
Service Directory IP address range 35.199.192.0/19 to the
Cloud VPN or Cloud Interconnect, you can
create a load balancer using
Cloud Load Balancing that directs traffic to your host.
When you create the Service Directory endpoint, make sure to use
the IP address of the forwarding rule of the load balancer instead of the IP
address of your host. You can use an
internal HTTPS load balancer
or an
internal transmission control protocol (TCP) load balancer
when creating your endpoint.
When creating your TCP load balancer, consider the following:
Only a hybrid connectivity network endpoint group (NEG) is required to reach
your host.
The TCP load balancer does not require the unencrypted private key for your
SSL certificate.
Your Cloud VPN setup needs to use Cloud Router with global
dynamic routing. If your Cloud VPN uses static routing, you can use
a proxy that uses Cloud Service Mesh instead. To learn more, see Set up network
edge services for hybrid
deployments .
To learn more about creating an HTTPS load balancer, see
Set up an internal Application Load Balancer with hybrid connectivity .
To learn more about creating a TCP load balancer, see
Set up a regional internal proxy Network Load Balancer with hybrid connectivity .
Next steps
Learn how to create and manage build triggers .
Learn how to perform blue/green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
