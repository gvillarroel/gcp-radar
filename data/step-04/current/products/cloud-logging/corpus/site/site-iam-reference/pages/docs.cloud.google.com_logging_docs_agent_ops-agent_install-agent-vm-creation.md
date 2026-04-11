---
title: "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation
  title: "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Guides
Send feedback
Install the Ops Agent during VM creation
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how the Google Cloud console can automatically install the
Ops Agent for you when you create a VM instance. During the installation
process, the Compute Engine VM Manager creates an
Ops Agent OS policy
that installs the agent and reinstalls it when necessary. The
VM Manager helps you get the Ops Agent running on your VM and ensures
that the agent is always installed.
Overview
The VM Manager uses OS policies to manage the Ops Agent
installation. A configuration policy is applied to a VM by using a mapping
called an assignment ID , which looks like the following example:
goog-ops-agent-v2-x86-template- 1-0-0 - ZONE
An assignment ID for an Ops Agent OS policy consists of the following
components:
The name of the policy: "goog-ops-agent"
A template for creating the policy: "v2-x86-template"
A version string for the template. The version, which might change over time,
is a value like " 1-0-0 ".
The zone to which the assignment ID applies, a value like "us-central1-a".
A VM is associated with an assignment ID by using the labels on the VM instance.
A Compute Engine VM is a monitored resource of type
gce_instance
and includes a zone label. When you use the Google Cloud console to
create a VM with the Ops Agent installed, the VM Manager adds another
label to the VM, which looks like goog-ops-agent-policy:v2-x86-template- 1-0-0 . This label identifies the
policy, template, and version:
Label key, the identifier for the policy: goog-ops-agent-policy
Label value, the policy template and version: v2-x86-template- 1-0-0
When you create a VM in the Google Cloud console, you can select the
Install Ops Agent for Monitoring and Logging checkbox. When you click
Create , VM Manager assigns the VM a label of goog-ops-agent-policy:v2-x86-template- 1-0-0 and
installs the Ops Agent. If the VM is the first VM in its zone, then
VM Manager also creates an Ops Agent OS policy and an Ops Agent OS
policy assignment for that zone.
While a zone has an Ops Agent OS policy assignment, the Ops Agent OS policy
monitors VMs that have the following characteristics:
The VM has the goog-ops-agent-policy:v2-x86-template- 1-0-0 label.
The VM is in the same zone as the Ops Agent OS policy assignment.
The Ops Agent OS policy checks every hour whether its
covered VMs have the Ops Agent installed. If the Ops Agent isn't
installed, then the Ops Agent OS policy installs the latest version
of the agent.
Create a VM with automatic installation of the Ops Agent
To install the Ops Agent automatically during VM creation and apply the
Ops Agent OS policy assignment to the VM, do the following:
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/osconfig.osPolicyAssignmentEditor
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Follow the steps in
Create a VM instance from a public image .
Before you click Create , select the
Install Ops Agent for Monitoring and Logging checkbox:
Note:
When you select the Install Ops Agent for Monitoring and Logging
checkbox during VM creation, the examples on the tabs in the
Equivalent code flyout are updated to include the steps for creating
the Ops Agent OS policy. There is no REST equivalent for creating an
Ops Agent OS policy.
Click Create .
When you install the Ops Agent automatically for the first time in a zone,
if you don't have VM Manager enabled for your Google Cloud project,
then the VM-creation process does the following:
Enables VM Manager to operate in
restricted mode .
Creates the Ops Agent OS policy and an Ops Agent OS policy assignment
for the zone. The Ops Agent OS policy is a field of the policy
assignment.
Enables Patch, OS policies, and OS inventory management by
setting the VM metadata label enable-osconfig to
TRUE .
Creates the VM and assigns it the Ops Agent OS policy label.
If you create a VM and automatically install the Ops Agent in a zone
where an Ops Agent OS policy assignment already exists, then the VM-creation
process creates the VM and assigns it the Ops Agent OS policy label.
Example
Your Google Cloud project doesn't have any Ops Agent OS
policy assignments. You create two VMs, instance-1 and instance-2 in the
us-central1-a zone. You
then create instance-3 and instance-4 in the us-east1-b zone. instance-1 , instance-2 , and
instance-3 had the Install Ops Agent for Monitoring and Logging checkbox
selected during creation.
When you create instance-1 , VM Manager creates an Ops Agent OS policy
for the us-central1-a zone and an OS policy
assignment with the ID goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a .
VM Manager then sets the policy label on instance-1 .
When you create instance-2 , VM Manager sets the
same policy label on instance-2 .
When you create instance-3 ,
VM Manager creates an Ops Agent OS policy for the us-east1-b zone
and an OS policy assignment with the ID
goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b . VM Manager then
assigns the policy label to instance-3 .
The Ops Agent OS policies then cover the following VMs based on the
Ops Agent OS policy assignment IDs:
OS Policy Assignment ID
Covers VMs In:
Covered VMs
goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a
us-central1-a
instance-1 , instance-2
goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b
us-east1-b
instance-3
By default, instance-4 isn't covered because you didn't select
Install Ops Agent for Monitoring and Logging , so it doesn't have the
goog-ops-agent-policy:v2-x86-template- 1-0-0 label. If you also want to apply the Ops Agent OS policy to
instance-4 , then see
Add Ops Agent OS policy coverage to an existing VM .
Manage Ops Agent versions on VMs covered by the Ops Agent OS policy
The Ops Agent OS policy doesn't update the Ops Agent when new versions of the
agent are released. As long as the VM has some version of the Ops Agent
installed, the policy does nothing. If you uninstall the Ops Agent, then the
policy detects that the Ops Agent isn't installed and then installs the latest
version.
To upgrade your VM to the latest version of the Ops Agent, uninstall the
version that you are currently running and let the Ops Agent OS policy
install the latest version.
If you need to install a previous version of the Ops Agent, you can
uninstall the Ops Agent on VMs covered by the Ops Agent OS policy
and then install a specific version of the agent .
Troubleshooting
For information about troubleshooting agent installation and Ops Agent OS
policies, see Manage VMs covered by the Ops Agent OS policy
and
Agent diagnostics tool for automatic installation policies .
Pricing
OS policies are generic tools for installing packages. By default, when
VM Manager is enabled because you've created a VM with the Ops Agent
automatically installed, VM Manager is enabled in the limited mode.
For information about VM Manager modes and pricing, see
VM Manager Pricing .
What's next
For information about managing VMs covered by the Ops Agent OS policy, see
Manage VMs covered by the Ops Agent OS policy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
