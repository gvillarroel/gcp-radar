---
title: "Partner Cross-Cloud Interconnect for AWS provisioning overview \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/provisioning-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/provisioning-overview
  title: "Partner Cross-Cloud Interconnect for AWS provisioning overview \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Send feedback
Partner Cross-Cloud Interconnect for AWS provisioning overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes the steps to successfully create and provision a
Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) connection.
You can initiate connectivity from either Google Cloud or from
Amazon Web Services. To achieve a successful connection, you must
create the transport resource. After a resource is created
and connectivity is up, the flow is identical regardless of where the
provisioning is initiated. You can manage the resource from either side to
enable, disable, or change the bandwidth on the resources.
Before you start the Partner Cross-Cloud Interconnect for AWS provisioning process,
ensure that the following conditions are met:
You must already have an AWS account.
You must also create a Virtual Private Cloud (VPC) network ,
if it doesn't already exist, to connect your transport to.
If you are a VPC Service Controls user, you must set up ingress and egress rules
using the networkconnectivity-transportmanager-clh@system.gserviceaccount.com
service account that is associated with Partner Cross-Cloud Interconnect for AWS.
Set up ingress and egress rules (for VPC Service Controls users)
If you are a VPC Service Controls user, follow the instructions to
Update ingress and egress policies for a service perimeter .
Google recommends that you set up rules to allow the account to access all
resources and operations within the VPC Service Controls security perimeter.
Use the networkconnectivity-transportmanager-clh@system.gserviceaccount.com
service account to set up the ingress and egress rules.
The following example shows an ingress rule YAML that you can apply.
- ingressFrom:
identities:
- serviceAccount:networkconnectivity-transportmanager-clh@system.gserviceaccount.com
sources:
- accessLevel: '*'
ingressTo:
operations:
- serviceName: '*'
methodSelectors:
- method: '*'
resources:
- '*'
The following is an example of an egress rule YAML.
- egressTo:
operations:
- serviceName: '*'
methodSelectors:
- method: '*'
resources:
- '*'
egressFrom:
identities:
- serviceAccount:networkconnectivity-transportmanager-clh@system.gserviceaccount.com
For information about ingress and egress rules, see Ingress and egress rules .
Note: For definitions of terms used on this page, see
Cloud Interconnect key terms .
Your workflow might differ based on whether you have an activation key from
AWS or not. For details, see the following sections.
Initiate connection from Google Cloud if you don't have an activation key
If you don't have an activation key from AWS, you can
initiate and provision a Partner Cross-Cloud Interconnect for AWS connection from
Google Cloud. To do so, follow these steps.
Choose a paired location .
Google Cloud regions are paired with specific AWS
regions. When you choose a specific Google Cloud region to create your
resources in, you must choose the corresponding AWS region.
List the available profiles in the region .
Select the correct profile and create the transport resource .
Use the generated activation key to create the connection in your
AWS account .
Establish VPC Network Peering .
Verify the connection
by listing the peered VPC networks and route tables.
Initiate a connection from AWS if you have an activation key
If you already have an activation key from AWS, you can
initiate and provision a Partner Cross-Cloud Interconnect for AWS connection from
AWS. To do so, follow these steps.
Activate your key by using the AWS Console.
Follow instructions to
create a connection from the AWS Console . You must provide the project and region where you want the
connection to land in Google Cloud. For a list of paired locations, see
Choose a paired location .
After the resource is created on the AWS side, create
the Google Cloud resource with the provided activation key.
Peer your VPC network to the transport's peering
VPC network .
Next
Choose a paired location
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
