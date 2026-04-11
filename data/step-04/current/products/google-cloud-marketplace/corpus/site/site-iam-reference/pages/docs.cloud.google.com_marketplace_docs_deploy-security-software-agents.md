---
title: "Deploying security software agents \_|\_ Google Cloud Marketplace \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents
  title: "Deploying security software agents \_|\_ Google Cloud Marketplace \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Guides
Send feedback
Deploying security software agents
Stay organized with collections
Save and categorize content based on your preferences.
You can deploy security software agents from Cloud Marketplace to the
VM instances in your project. If you need to uninstall a security software
agent, skip to Uninstalling a security agent .
Security software agents are typically a component of larger security products.
For example, if you have a subscription to a security product, the
product might include a security agent that you can install on your VM
instances. The agents gather data on vulnerabilities and suspicious behavior
on the VM instances, and send this data back to the software vendor. You can
see the security reports in a dashboard that the software vendor provides.
When you install a security agent from Cloud Marketplace, you must sign
up with the software vendor independently. The vendor charges you a fee
separately.
Before you begin
Enable OS Configuration Management:
Enable the OS Configuration Management API
Install the OS Configuration agent on your VMs
Configure the project metadata
You must have the following permissions:
osconfig.guestPolicies.create
osconfig.guestPolicies.delete
osconfig.guestPolicies.get
osconfig.guestPolicies.list
storage.buckets.create
storage.buckets.get
storage.objects.create
storage.objects.delete
We recommend creating an Identity and Access Management custom role
with these permissions, and assigning the role to users who can deploy
security software agents from Cloud Marketplace.
For example, if you want to create an Identity and Access Management custom role called Security Agent Deployer, you first create a SecurityAgentDeployer.yaml file:
title: SecurityAgentDeployer
description: Role for Users who deploy Security Agents in a project
stage: GA
includedPermissions:
- osconfig.guestPolicies.create
- osconfig.guestPolicies.delete
- osconfig.guestPolicies.get
- osconfig.guestPolicies.list
- storage.buckets.create
- storage.buckets.get
- storage.objects.create
- storage.objects.delete
After you create your YAML file, to create the {iam_name} custom role, run the following command:
gcloud iam roles create role-id --project=project-id \
--file=SecurityAgentDeployer.yaml
After you create the {iam_name} custom role Security Agent Deployer, grant it to your users who you expect to deploy security agents:
gcloud projects add - iam - policy - binding < project - id > \
--member=user:my-user@example.com \
--role=projects/<project-id>/roles/SecurityAgentDeployer
Configure the project metadata
You can use the Google Cloud console or Google Cloud CLI to configure the project metadata
for the OS Configuration agent installed in the VM instances.
Console
Open the Project Metadata page .
Click Edit
Click Add Item , and add the following property:
Key
Value
enable-osconfig
true
Additionally, although not required, the following metadata item can be added in order to include debugging messages in the Cloud Logging logs . This will facilitate the task of troubleshooting future deployments.
Key
Value
osconfig-log-level
debug
gcloud
Use this command to set up the project metadata for the OS Config agent:
gcloud compute project-info add-metadata --metadata=enable-osconfig=true
Additionnally, altough not required, the following command can be used to include debugging messages in the Cloud Logging logs . This will facilitate the task of troubleshooting future deployments.
gcloud compute project-info add-metadata --metadata=osconfig-log-level=debug
To verify that the metadata has been set up properly, use this command:
gcloud compute project-info describe --flatten="commonInstanceMetadata[]"
Deploying a security agent
To see the security agents available on Cloud Marketplace, use the
Security filter.
Go to security products
To deploy the security agent:
Choose the agent from Cloud Marketplace.
Sign up for the security agent on the vendor's website.
As part of signing up, the vendor typically provides you with identifiers
and credentials, such as a password, activation ID, or a license ID. You
use these identifiers to link your Google Cloud projects to
your subscription with the vendor.
After you sign up, open the Cloud Marketplace listing for the
security agent and follow the steps to configure the agent.
On the configuration page, enter the identifiers you got when you signed up
for the product. Then, under VM assignment , select the VM instances to
deploy the security agent to.
You can filter your VMs by the following fields:
Name prefixes
Group labels
The deployment creates a Cloud Storage bucket in your projects, and
copies the installation files to the bucket. Under Storage bucket details ,
select a region to create the Cloud Storage bucket for the deployment.
After you select the VM assignments and a choose a region for the
Cloud Storage bucket, click Deploy . The deployment might take several minutes to complete.
To track and verify the installation, use one of the following methods:
List the guest policies for a project ,
and then verify that new guest policies were created for the security
agent. Typically, the deployment creates one guest policy per operating
system.
Open the Logging viewer ,
and then check the logs for the VM Instance resource type and the
OSConfigAgent log type.
Uninstalling a security agent
At a high level, you must do the following to uninstall a security agent:
Delete all the guest policies for the agent . This
ensures that OS Configuration stops installing the agent on any new VM
instances that you create. If the agent is being installed on some VMs
when you delete the guest policies, the installations continue until they're
complete.
Create a new guest policy for the security agent ,
which removes the agent from VM instances that have the agent installed.
It might take several minutes for the security agent to be uninstalled from
your VMs.
Delete the guest policies
You can use the Google Cloud console or Google Cloud CLI to delete the guest policies
for the security agent.
Console
Open the Guest Policies page .
Select the guest policies for the security agent, and then click
Delete .
gcloud
Use this command to list all your guest policies:
gcloud beta compute os-config guest-policies list
From the list of guest policies, copy the IDs of the guest policies
for the security product, and then run this command to delete each
of the guest policies:
gcloud beta compute os-config guest-policies delete POLICY_ID
Create a guest policy to remove the agent
After you delete the guest policies for security agent, you must create
a new policy that removes the security agent from your VMs, using the
desiredState: REMOVED property.
For example, the following guest policy YAML file removes cloud-agent-package
from all Debian-based VM instances in the us-central1-f zone:
assignment :
groupLabels :
- labels :
agent : enabled # apply to VMs with the "agent" label set to "enabled"
zones :
- us-central1-f # apply to all VMs in this zone
name : projects/ YOUR_PROJECT_ID /guestPolicies/cloud-agent-remove
packages :
- desiredState : REMOVED
manager : APT # indicates Debian-based OS
name : cloud-agent-package # indicates the security agent's package name
You must configure your assignment section to match the same filters that you
set when you deployed the agent .
Learn more about creating guest policy YAML files .
After creating the guest policy YAML file, apply it by using the following
command:
gcloud beta compute os-config guest-policies create NEW_POLICY_ID --file YOUR_GUEST_POLICY_FILE
Troubleshooting
Debugging a Guest Policy
You can find general guidance for debugging Guest Policies at Debugging a guest policy
In particular, on how to
List existent Guest Policies
Inspect specific Guest Policies
Find which policies apply to a particular VM instance
Inspect Cloud Logging logs in search for potential error messages related to the deployment.
If a deployment is not successful in a specific VM instance, you can try to diagnose the issue by following these steps:
Find out if the deployment created a Guest Policy.
If so, verify that the created Guest Policy:
Refers to the expected Security Agent.
Targets the expected set of VM instances in its Assignment.
Verify that the VM instance lookup includes the new expected Guest Policy.
Check if there are any OS Config related error messages for that specific VM instance in the Cloud Logging logs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
