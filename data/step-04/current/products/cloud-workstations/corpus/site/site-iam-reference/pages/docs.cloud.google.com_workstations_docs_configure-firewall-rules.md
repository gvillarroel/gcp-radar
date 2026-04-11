---
title: "Configure firewall rules \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/configure-firewall-rules
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/configure-firewall-rules
  title: "Configure firewall rules \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Configure firewall rules
Stay organized with collections
Save and categorize content based on your preferences.
Identify firewall rules needed
Your workstations connect to the control plane through
Private Service Connect. The following subsections provide example
gcloud CLI commands to allow ingress and egress.
For more information about these commands, see the
gcloud compute firewall-rules
reference information.
Allow ingress
For the connection to succeed, create a firewall rule to allow ingress to the control plane
IP address from the workstation VMs. Cloud Workstations automatically applies
the cloud-workstations-instance network tag to the workstation VMs, which can
be used when creating firewall rules that apply to workstation VMs. See the
following example gcloud CLI command:
gcloud compute firewall-rules create RULE_NAME \
--action = ALLOW \
--direction = INGRESS \
--network = NETWORK \
--rules = tcp \
--source-tags = cloud-workstations-instance \
--destination-ranges = CONTROL_PLANE_IP
Replace the following:
RULE_NAME : the name of the firewall rule to create
NETWORK : the network specified on the workstation cluster resource
CONTROL_PLANE_IP : the internal IP address of the control
plane for the workstation cluster.
To find this IP address, run the following command:
gcloud workstations clusters describe CLUSTER -- project = PROJECT -- region = REGION
Replace the following:
CLUSTER : the ID of the cluster or fully qualified
identifier for the cluster.
PROJECT : the project hosting the workstation cluster.
REGION : the region location of the workstation—for
example, us-central1 .
Allow egress
You also need firewall rules that allow egress to the control plane IP address
from VMs with the cloud-workstations-instance tag for the TCP protocol on
ports 980 and 443 as shown in the following gcloud CLI command:
gcloud compute firewall-rules create RULE_NAME \
--action = ALLOW \
--direction = EGRESS \
--network = NETWORK \
--rules = tcp:980,tcp:443 \
--target-tags = cloud-workstations-instance \
--destination-ranges = CONTROL_PLANE_IP
Replace the following:
RULE_NAME : the name of the firewall rule to create
NETWORK : the network to which this rule is attached. If
omitted, the rule attaches to the default network.
CONTROL_PLANE_IP : the internal IP address of the control
plane for the workstation cluster.
To find this IP address, run the following command:
gcloud workstations clusters describe CLUSTER -- project = PROJECT -- region = REGION
Replace the following:
CLUSTER : the ID of the cluster or fully qualified
identifier for the cluster.
PROJECT : the project hosting the workstation cluster.
REGION : the region location of the workstation—for
example, us-central1 .
For more information, see also the following topics:
WorkstationCluster
REST API
Allow internal ingress connections between VMs
Add firewall rules using custom network tags
You can configure custom network tags for your workstation VMs in the
Google Cloud console. When you create or edit a workstation configuration, update
your machine configuration to include your network tags in the Network tags
field. For details on how to add Network tags , see the instructions for
specifying Advanced options when creating your machine
configuration .
Alternatively, when using the API, apply custom network tags through the
host.gceInstance.tags option on the workstation configuration resource.
For more information about Virtual Private Cloud (VPC) firewall rules in
Google Cloud, see
Create VPC firewall rules
in the VPC documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
