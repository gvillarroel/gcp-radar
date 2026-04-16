---
title: "Build repositories from GitLab Enterprise Edition in a private network \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network
  title: "Build repositories from GitLab Enterprise Edition in a private network \_\
    |\_ Google Cloud Documentation"
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
Build repositories from GitLab Enterprise Edition in a private network
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Build enables you to create triggers to build from repositories
hosted on GitLab Enterprise Edition ,
allowing you to execute builds in response to events such as commit pushes or
merge requests associated with your GitLab Enterprise Edition repository.
This page explains how you can enable trigger functionality on a GitLab
Enterprise Edition instance if your instance is hosted in a private network.
Before you begin
Enable the Cloud Build, Secret Manager, Compute Engine, and Service Networking APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Follow the instructions to connect a GitLab Enterprise Edition host .
Follow the instructions to connect a GitLab Enterprise Edition repository .
Build repositories from GitLab Enterprise Edition in a private network
If your GitLab Enterprise Edition instance is only accessible within a
VPC network, you need to set up a
Service Directory service and build using private pools. The
project containing your VPC network can exist in a different
project than the one containing your Service Directory service.
Use the following instructions to ensure your instance is reachable prior to
creating triggers:
Enable the
Service Directory API .
Ensure you have the Project IAM Admin role granted to the
Google Cloud project you intend to create your
Service Directory service in. To learn how to grant
IAM roles, see
Configuring access to Cloud Build resources .
Set up a Service Directory service by completing the following steps:
Configure a namespace
for your Google Cloud project.
The region you specify in your namespace must match the region you
specify in your Cloud Build host connection.
Configure a service
in your namespace.
Configure an endpoint
for your registered service.
When configuring an endpoint, you must use an internal IP address and
specify an HTTPS port number in order for Cloud Build to reach your
service.
To learn more about private network access configuration, see
Configure private network access .
Service Directory also provides integration with services
such as load balancers and Google Kubernetes Engine (GKE).
To learn more, see
Service Directory and load balancing overview
or Service Directory for GKE overview .
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
Use private pools to run
your builds. If you have not created a private pool, see create a new
private pool .
Follow the instructions to
create a GitLab Enterprise Edition trigger
to build repositories hosted on a GitLab Enterprise Edition instance.
If you include a self-signed or private certificate when connecting your
GitLab Enterprise Edition host to Cloud Build, you must set the
host URI as the Subject Alternative Name (SAN) of your certificate.
Your GitLab Enterprise Edition trigger will now automatically invoke builds on
your GitLab Enterprise Edition instance based on your configuration.
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
Data sharing
The data sent to GitLab Enterprise Edition from Cloud Build helps you
identify triggers by name and see build results on your GitLab Enterprise
Edition repositories.
The following data is shared between Cloud Build and GitLab
Enterprise Edition:
Google Cloud project ID
Trigger name
What's next
Learn how to manage build triggers .
Learn how to perform blue/green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
