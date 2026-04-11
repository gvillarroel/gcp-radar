---
title: "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/access-control
source_metadata:
  url: https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview
  title: "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Guides
Send feedback
Overview of agent policies for the Ops Agent
Stay organized with collections
Save and categorize content based on your preferences.
Agent policies enable automated installation and maintenance of the
Ops Agent
across a fleet of Compute Engine VMs that match
user-specified criteria. You can create a policy for a
Google Cloud project that governs existing and new VMs associated with that
Google Cloud project, ensuring proper
installation and uninstallation of the Ops Agent
on those VMs.
Agent policies for the Ops Agent
Support for agent policies for the Ops Agent is available
at two release levels: GA and beta. Both types of policies rely on
OS Config features provided by
VM Manager , but the implementations are
different. We recommend using the GA policies when possible. In most cases,
you can convert beta policies to GA policies .
This section describes the differences between the beta and GA agent policies
For information about creating and managing agent policies, see the following:
Use agent policies (GA)
Use agent policies (beta)
Differences between beta and GA agent policies
The beta and GA agent policies differ in the following ways:
Creation mechanisms
Beta agent policies are created by using the following:
The gcloud beta compute instances ops-agents policies command group
in the Google Cloud SDK.
The agent-policy
Terraform module
GA agent policies are created by using the following:
The gcloud compute instances ops-agents policies command group
in the Google Cloud SDK.
The ops-agent-policy
Terraform module
Support for the legacy Monitoring agent and Logging agent
Beta agent policies can manage the legacy Monitoring agent and Logging agent
as well as the Ops Agent.
GA agent policies manage only the Ops Agent.
Automatic upgrade of agent version
Beta agent policies can keep the agent at the latest version by
upgrading the agent.
GA agent policies don't support an auto-upgrade operation. For
alternative approaches, see
Replace beta agent-upgrade policies .
Application of policy to named Compute Engine instances
Beta agent policies can be applied to a list of named
instances.
GA agent policies don't provide support for named instances.
For information about getting the same behavior with GA policies, see
Convert a beta named-instance policy to a GA
policy .
Global or zonal application of agent policies within a Google Cloud project
Beta agent policies are globally applied to all instances selected by the
policy criteria within your Google Cloud project.
GA agent policies are applied to all instances selected by the
policy criteria within the zone that the policy specifies. For example,
a policy created in the us-central1-a zone has no effect on
VMs in other zones.
The beta and GA policies are also structurally different:
Policies created by using gcloud beta compute instances ops-agents policies
describe agent policies by passing individual options to the commands, for
example:
gcloud beta compute instances ops-agents policies create ops-agents-test-policy \
--agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \
--description = "A test policy." \
--os-types = short-name = centos,version = 7 \
--instances = zones/us-central1-a/instances/test-instance \
--project PROJECT_ID
The agent-policy Terraform module provides the same
capabilities.
Pollicies created by using the
gcloud compute instances ops-agents policies
describe agent policy by using a YAML configuration
file and a zone, for example:
gcloud compute instances ops-agents policies create test-policy \
--zone us-central1-a \
--file test-policy.yaml \
--project PROJECT_ID
The ops-agent-policy Terraform module provides the same
capabilities.
Use of both beta and GA policies
You can use both beta and GA agent policies with the Ops Agent, as long as you
consider the differences between the policy types .
The biggest behavioral difference between beta and GA agent policies is that GA
policies are zonal, and beta agent policies are global within a project.
That is, GA agent policies select only VMs in the zone in which the
policy is created, but beta policies can select any VM in your
Google Cloud project.
If the beta policies select one set of VMs and the GA policies select a
different set of VMs, then the policies can't conflict.
You can have beta and GA agent policies that apply to the same VM, but you
need to ensure that the policies don't have conflicting purposes, for example,
a beta policy that installs the Ops Agent and a GA policy that uninstalls the
Ops Agent.
Convert beta policies to GA policies
You can convert your Ops Agent beta agent policies to GA agent policies, as
long as there are no differences between the policy types that
you can't work around. You can't convert beta agent policies for the legacy
Monitoring agent or Logging agent to GA agent policies.
To convert beta agent policies to GA policies by using the Google Cloud SDK,
do the following:
Generate a list of all beta agent policies in your project by running the
following command:
gcloud beta compute instances ops-agents policies list --project PROJECT_ID
Identify the beta agent policies that you want to convert to GA policies.
For each beta policy that you identify for conversion, do the following:
Create a YAML configuration file that is as close to the beta policy
as possible, given the
differences between the beta and GA policies .
For information about the YAML configuration format, see
Describe agent policies .
Create a GA agent policy in each zone where you need the policy.
For information about creating GA agent policies, see
Create an agent policy .
Delete the beta agent policy by running the following command:
gcloud beta compute instances ops-agents policies delete POLICY_ID --project PROJECT_ID
You might not be able to write a GA agent policy for the Ops Agent that is
exactly the same as an existing beta agent policy. However, with the exception
of the auto-upgrade option of the beta agent policy, you can get equivalent
behavior.
The following sections describe how to handle the following cases:
Beta agent policies that select named instances
Beta agent-upgrade policies
Convert a beta named-instance policy to a GA policy
To convert a beta agent policy that is applied to a named set of VM
instances, you can do the following:
Apply a label to the instances in the set of VMs you want to select.
To apply a label to an existing VM, use the gcloud compute instances
add-labels command,
as shown in the following command:
gcloud compute instances add-labels INSTANCE_NAME --labels = KEY = VALUE
Describe a GA agent policy that selects VMs with the new label by using
the instanceFilter structure in the
configuration. The following example creates a file called config.yaml
that contains a policy that matches the label applied in the previous
step:
cat > config.yaml << EOF
agentsRule:
packageState: installed
version: 2 .47.0
instanceFilter:
inclusionLabels:
- labels:
KEY : VALUE
EOF
For more information about describing GA agent policies, see
Configuration files for agent policies .
Create a GA agent policy in each zone that has VMs with the new label:
gcloud compute instances ops-agents policies create POLICY_ID \
--zone ZONE \
--file config.yaml
--project PROJECT_ID
For more information about creating GA agent policies, see
Create an agent policy .
Replace beta agent-upgrade policies
To replace beta agent policies that upgrade the agent, you have the following
options:
To make sure the Ops Agent is always up to date, use
OS Patch to create and run an
OS Patch job that keeps the agent at the latest
version.
To perform a one-time upgrade, do the following:
Determine the latest version of the Ops Agent by consulting
the Ops Agent release notes on
GitHub .
Create or modify an agent policy that installs the latest agent version.
For example, if the latest version is 2.64.0,
then you can use an agent-policy YAML that resembles the following:
agentsRule :
packageState : installed
version : 2.64.0
instanceFilter :
[ ... ]
Apply the policy to VMs in each zone.
Supported operating systems
You can apply an agent policy to Compute Engine
VM instances running the operating systems shown in the following table:
Operating system
Ops Agent
(GA & beta † policies)
Logging agent
(beta † policies only)
Monitoring agent
(beta † policies only)
CentOS 8
Rocky Linux 8
RHEL 6
RHEL 7:
rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha
‡
RHEL 8:
rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha
‡
Debian 9 (Stretch)
Debian 11 (Bullseye)
Deep Learning VM Images based on Debian 11 (Bullseye)
Ubuntu LTS 18.04 (Bionic Beaver):
ubuntu-1804-lts, ubuntu-minimal-1804-lts
Ubuntu LTS 20.04 (Focal Fossa):
ubuntu-2004-lts, ubuntu-minimal-2004-lts
Ubuntu LTS 22.04 (Jammy Jellyfish):
buntu-2204-lts, ubuntu-minimal-2204-lts
SLES 12: sles-12, sles-12-sp5-sap
SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap,
sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap
OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3-*,
opensuse-leap-15-4-*)
Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022
†
In beta agent policies, the agent columns map to an
agent type specified to the
gcloud beta compute instances ops-agents policies create invocation:
Ops Agent maps to agent type ops-agent .
Logging agent maps to agent type logging .
Monitoring agent maps to agent type metrics .
‡ The Monitoring agent is not
supported on rhel-7-9-sap-ha , rhel-8-2-sap-ha , or
rhel-8-4-sap-ha .
What's next
For information about using agent policies to manage the Ops Agent, see the
following:
Use agent policies (GA)
Use agent policies (beta)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
