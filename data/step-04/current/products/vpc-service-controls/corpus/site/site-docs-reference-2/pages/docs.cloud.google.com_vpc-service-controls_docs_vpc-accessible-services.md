---
title: "VPC accessible services \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services
  title: "VPC accessible services \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
VPC accessible services
Stay organized with collections
Save and categorize content based on your preferences.
To define the services that can be accessed from a network inside your
service perimeter, use the VPC accessible services feature. The VPC accessible
services feature limits the set of services that are accessible from network
endpoints inside your service perimeter.
The VPC accessible services feature applies only to traffic from your VPC
network endpoints to Google APIs. Unlike service perimeters, the VPC accessible
services feature does not apply to the communication from one Google API to
another, or the networks of tenancy units , which are used to implement
certain Google Cloud services.
When configuring VPC accessible services for a perimeter, you can specify a
list of individual services, as well as include the RESTRICTED-SERVICES
value, which automatically includes all of the services protected by the
perimeter.
To ensure access to the expected services is fully limited, you must:
Configure the perimeter to protect the same set of services that you want to
make accessible.
Configure VPCs in the perimeter to use the restricted VIP .
Use layer 3 firewalls.
Example: VPC network with Cloud Storage access only
Assume you have a service perimeter, my-authorized-perimeter , that includes
two projects: my-authorized-compute-project and my-authorized-gcs-project .
The perimeter protects the Cloud Storage service.
my-authorized-gcs-project uses a number of services, including
Cloud Storage, Bigtable, and others.
my-authorized-compute-project hosts a VPC network.
Because the two projects share a perimeter, the VPC network in
my-authorized-compute-project has access to the resources of services in
my-authorized-gcs-project , regardless of whether the perimeter protects those
services. However, you want your VPC network to only have
access to Cloud Storage resources in my-authorized-gcs-project .
You are concerned that if the credentials for a VM in your VPC network are
stolen, an adversary could leverage that VM to exfiltrate data from any
available service in my-authorized-gcs-project .
You have already configured your VPC network to use the restricted VIP, which
limits access from your VPC network only to APIs that are supported by
VPC Service Controls. Unfortunately, that doesn't prevent your VPC network
from accessing supported services, such as the Bigtable resources
in my-authorized-gcs-project .
To limit the VPC network's access to only the storage service, you enable
VPC accessible services and set storage.googleapis.com as an allowed service:
gcloud access-context-manager perimeters update my-authorized-perimeter \
--enable-vpc-accessible-services \
--add-vpc-allowed-services = storage.googleapis.com
Success! The VPC network in my-authorized-compute-project is now limited to
accessing only resources for the Cloud Storage service. This
restriction also applies to any projects and VPC networks you later add to the
perimeter.
What's next?
Use VPC accessible services.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
