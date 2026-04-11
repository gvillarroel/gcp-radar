---
title: "Install and manage the Ops Agent by using VM Extension Manager policies \_\
  |\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/access-control
source_metadata:
  url: https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies
  title: "Install and manage the Ops Agent by using VM Extension Manager policies\
    \ \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
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
Install and manage the Ops Agent by using VM Extension Manager policies
Stay organized with collections
Save and categorize content based on your preferences.
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can install and manage the Ops Agent on a fleet of Compute Engine VMs
globally or within a specific zone by using
VM Extension Manager policies.
For example, you can use these policies to perform tasks like the following:
Fleetwide installation: Install the Ops Agent on the following:
All VMs in one or more zones in your Google Cloud project.
All VMs globally (in your Google Cloud project).
A subset of VMs in a zone, identified by labels.
A subset of VMs across zones in your Google Cloud project, identified
by labels.
Version control:
Keep the Ops Agent updated to the latest version.
Pin the Ops Agent version to a specific release.
Configuration management: Apply a custom configuration to the Ops Agent
on all VMs managed by a policy.
With VM Extension Manager, you create policies that declare which
extensions you want to install on VMs. The Ops Agent is one of the available
extensions. VM Extension Manager policies can manage the
Ops Agent version 2.58.0 or newer, when the Ops Agent has
been installed by using VM Extension Manager. These policies
can't manage versions of the Ops Agent earlier than version
2.58.0, Ops Agent instances installed by using other means,
or any version of the legacy Monitoring agent or
Logging agent .
You can create and manage zonal VM extension policies by using the
Google Cloud console or the Google Cloud CLI, gcloud. You can
create and manage global VM extension policies by using gcloud.
Before you begin
Before starting to using VM Extension Manager extension
policies, do the following:
Review supported operating systems to verify that
both the Ops Agent and VM Extension Manager are supported
on your operating systems.
Grant the roles required to use
VM Extension Manager .
If you want to use a command-line interface to create and manage
extension policies, then install the Google Cloud CLI .
Uninstall any observability agents already installed
on your VMs.
Review supported operating systems
Before attempting to use VM Extension Manager policies to
manage the Ops Agent, verify that your target operating system is compatible
with both the Ops Agent and VM Extension Manager.
VM Extension Manager supports all operating systems supported
by the Ops Agent, except for SUSE Linux Enterprise Server (SLES) and Ubuntu.
For more information about the operating systems supported by the Ops Agent,
see Operating systems .
If your operating system is supported by both the Ops Agent and
VM Extension Manager, then follow the rest of this document.
Enable the APIs required to use the Ops Agent
To use the Ops Agent to write logs and metrics, you must enable the
Cloud Logging API and Cloud Monitoring API on your Google Cloud project.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Grant roles required to use the Ops Agent
To get the permissions that
you need to use the Ops Agent to write logs and metrics,
ask your administrator to grant you the
following IAM roles on your service account:
To write logs:
Logging Logs Writer ( roles/logging.logWriter )
To write metrics:
Monitoring Metric Writer ( roles/monitoring.metricWriter )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about roles and the Ops Agent, see
Authorize the Ops Agent .
Grant roles required to use VM Extension Manager
To get the permissions that
you need to create, view, modify, and delete VM extension policies,
ask your administrator to grant you the
following IAM roles on the project:
To create extension policies:
VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin )
To view extension policies:
VM Extension Policy Viewer ( roles/compute.vmExtensionPolicyViewer )
VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin )
To modify extension policies:
VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin )
To delete extension policies:
VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create, view, modify, and delete VM extension policies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create, view, modify, and delete VM extension policies:
To create extension policies:
compute.vmExtensionPolicies.create
To view extension policies:
compute.vmExtensionPolicies.list
To view details of an extension policy:
compute.vmExtensionPolicies.get
To modify extension policies:
compute.vmExtensionPolicies.update
To delete extension policies:
compute.vmExtensionPolicies.delete
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information about IAM roles and permissions in
Compute Engine, see
Compute Engine roles and permissions .
Install the Google Cloud CLI
You can create and manage VM extension policies by using the Google Cloud console
or the Google Cloud CLI, gcloud. To use gcloud,
you must first install it by performing the following steps:
If you haven't done so already, install the
Google Cloud CLI .
The extension policies described in this document use the beta command
group.
If you haven't done so already, install the beta component of the
gcloud CLI by running the following command:
gcloud components install beta
To check if you have the beta component installed, run
the following command:
gcloud components list
If you previously installed the beta component, verify that
have the latest version:
gcloud components update
Uninstall any observability agents
Before creating a VM Extension Manager policy to manage
the Ops Agent on a VM, ensure that there are no instances of the Ops Agent
or the legacy Monitoring agent and Logging agent already on the VM. Running the
Ops Agent and the legacy agents on the same VM can cause ingestion of
duplicate logs or conflicts in metrics ingestion.
If you use an extension policy to install the Ops Agent on a VM where another
observability agent is already installed, then the policy installs the agent, but the
agent fails to run because a conflict is detected.
How you remove existing agents depends on how those agents were installed.
Agents installed by a VM Manager OS Config policy, which includes
the following:
Ops Agent installed by using the
Google Cloud console during VM creation .
Ops Agent installed by a GA VM Manager OS Config policy .
Ops Agent, or legacy Monitoring agent or Logging agent installed by a beta
VM Manager OS Config policy .
For information about identifying VMs using these policies, see
Find VMs covered by Ops Agent OS policies .
For information about uninstalling the agent and removing the
OS Config policies, see Uninstall the Ops Agent on VMs covered by Ops Agent
OS policies .
Agents installed manually by using an installation script. For information
about uninstalling the agents, see the following:
Ops Agent:
Uninstall the agent .
Legacy Monitoring agent:
Uninstall the agent .
Legacy Logging agent:
Uninstall the agent .
Install the Ops Agent by creating VM extension policies
Create VM extension policies to automatically install and manage the
Ops Agent on a fleet of Compute Engine virtual machines (VMs). By defining
a policy, you can ensure that specific extensions, like the Ops Agent, are
installed and maintained on any VMs that match criteria you specify, such as
VM labels.
Policy conflicts and priorities
VM Extension Manager associates a priorty with each new policy,
with lower numbers indicating higher priorities; the default priority is
1000. A VM can be covered by
multiple policies for an extension like the Ops Agent, but only one policy
for the Ops Agent extension is effective on the VM.
VM Extension Manager uses priorities to resolve
conflicts among policies applied to a VM. For more information about the
resolution process, see Policy priority and conflict
resolution .
Policy rollout plans for global policies
VM Extension Manager global policies use a rollout plan to
determine how a policy is distributed to target VMs. There are two types of
rollout plans:
Predefined rollout plans. There are two predefined rollout plans,
chosen by the value used with the
--rollout-predefined-plan
option for gcloud CLI commands.
Slow rollout, which deploys the Ops Agent gradually across different
zones over a period of time. This rollout plan is recommended .
Specify this rollout plan by using the
--rollout-predefined-plan=slow_rollout option.
Fast rollout, which deploys the Ops Agent to all targeted VMs across all
zones and regions immediately.
Specify this rollout plan by using the
--rollout-predefined-plan=fast_rollout
option.
Custom rollout plans, specified by using the
--rollout-custom-plan
option for gcloud CLI commands.
Create custom rollout plans by adding them to the set of rollout plans
in your Google Cloud project; for more information, see the
Compute Engine API method
rolloutPlans.insert .
For more information about rollout plans, see
Rollout plans for global policies .
Install the latest Ops Agent on all VMs
To create a policy that installs the latest version of the Ops Agent on
all VMs in a zone or globally, and updates the Ops Agent when a new version
is released, do the following:
Console
To create a zonal policy, you can use the Google Cloud console.
In the Google Cloud console, go to the Extension policies page:
Go to Extension policies
If you use the search bar to find this page, then select the result whose
subheading is Compute Engine .
Click + Create .
In the Name field, enter a name for the policy.
Optional: In the Description field, enter a description for the policy.
In the Priority field, specify a priority number to resolve conflicts
between policies. Lower numbers indicate higher priority. The default
value is 1000.
In the Zone list, select the zone where you want to apply this policy.
In the Manage extensions section, click Add extension and do the
following:
From the Extension list, select
Google Cloud's Extension for Ops Agent .
Leave the Version field blank.
Click Create .
gcloud
To create a zonal or global policy, you can use the gcloud CLI.
Zonal
Use the following
gcloud beta compute zone-vm-extension-policies create
command to create the policy:
gcloud beta compute zone-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE \
--extensions=ops-agent
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
The gcloud beta compute zone-vm-extension-policies create takes an option --version option.
If you omit the --version option, then the policy installs the latest
version and updates the Ops Agent when a new version is released.
Global
Use the following
gcloud beta compute global-vm-extension-policies create
command to create the policy:
gcloud beta compute global-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-predefined-plan=slow_rollout
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
The gcloud beta compute global-vm-extension-policies create takes an option --version option.
If you omit the --version option, then the policy installs the latest
version and updates the Ops Agent when a new version is released.
Pin the Ops Agent to a specific version on all VMs
To create a policy that installs a specific version of the Ops Agent on
all VMs in a zone or globally, do the following:
Console
To create a zonal policy, you can use the Google Cloud console.
In the Google Cloud console, go to the Extension policies page:
Go to Extension policies
If you use the search bar to find this page, then select the result whose
subheading is Compute Engine .
Click + Create .
In the Name field, enter a name for the policy.
Optional: In the Description field, enter a description for the policy.
In the Priority field, specify a priority number to resolve conflicts
between policies. Lower numbers indicate higher priority. The default
value is 1000.
In the Zone list, select the zone where you want to apply this policy.
In the Manage extensions section, click Add extension and do the
following:
From the Extension list, select
Google Cloud's Extension for Ops Agent .
From the Version list, select the version to install.
Use version 2.58.0 or newer.
Click Create .
gcloud
To create a zonal or global policy, you can use the gcloud CLI.
Zonal
Use the following
gcloud beta compute zone-vm-extension-policies create
command to create the policy:
gcloud beta compute zone-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE \
--extensions=ops-agent \
--version=ops-agent= VERSION
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
VERSION : The version of the Ops Agent to install.
Use version 2.58.0 or newer.
If you omit the --version option,
then the policy installs the latest
version and updates the Ops Agent when a new version is released, as
shown in the example that installs the latest version .
Global
Use the following
gcloud beta compute global-vm-extension-policies create
command to create the policy:
gcloud beta compute global-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-predefined-plan=slow_rollout \
--version=ops-agent= VERSION
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
VERSION : The version of the Ops Agent to install.
Use version 2.58.0 or newer.
If you omit the --version option,
then the policy installs the latest
version and updates the Ops Agent when a new version is released, as
shown in the example that installs the latest version .
For a list of Ops Agent versions, see the Ops Agent
releases page on GitHub .
Install the Ops Agent on VMs that have a specific label
To create a policy that installs the latest version of Ops Agent on the VMs
in a zone or globally that have a specific label, do the following:
Console
To create a zonal policy, you can use the Google Cloud console.
In the Google Cloud console, go to the Extension policies page:
Go to Extension policies
If you use the search bar to find this page, then select the result whose
subheading is Compute Engine .
Click + Create .
In the Name field, enter a name for the policy.
Optional: In the Description field, enter a description for the policy.
In the Priority field, specify a priority number to resolve conflicts
between policies. Lower numbers indicate higher priority. The default
value is 1000.
In the Zone list, select the zone where you want to apply this policy.
In the Extensions section, click Add extension and do the
following:
From the Extension list, select
Google Cloud's Extension for Ops Agent .
Leave the Version field blank.
In the Target VM instances section, select the VMs for the policy. To
select VMs with specific labels, click Add labels and add the
key-value pair.
Click Create .
gcloud
To create a zonal or global policy, you can use the gcloud CLI.
Zonal
Use the --inclusion-labels option to the
gcloud beta compute zone-vm-extension-policies create command
to specify a comma-separated list of key-value pairs:
gcloud beta compute zone-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE \
--extensions=ops-agent
--inclusion-labels= KEY1 = VALUE1 , KEY2 = VALUE2
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
KEY1 = VALUE1 , KEY2 = VALUE2 : A comma-separated
list of key-value pairs that define inclusion labels for a selector. VMs
must have all the labels specified in a selector (logical AND) to be
included. If you specify the --inclusion_labels option multiple times,
then the policy targets the VMs that match all the labels in any of the
selectors (logical OR). If you omit this option, the policy targets all
VMs in the specified zone.
Global
Use the --inclusion-labels option to the
gcloud beta compute global-vm-extension-policies create command
to specify a comma-separated list of key-value pairs:
gcloud beta compute global-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-predefined-plan=slow_rollout \
--inclusion-labels= KEY1 = VALUE1 , KEY2 = VALUE2
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
KEY1 = VALUE1 , KEY2 = VALUE2 : A comma-separated
list of key-value pairs that define inclusion labels for a selector. VMs
must have all the labels specified in a selector (logical AND) to be
included. If you specify the --inclusion_labels option multiple times,
then the policy targets the VMs that match all the labels in any of the
selectors (logical OR). If you omit this option, the policy targets all
VMs in the specified zone.
Install the Ops Agent with a custom configuration on all VMs
To create a policy that installs the latest version of the Ops Agent on
all VMs in a zone or globally, and provides custom configuration for the
Ops Agent, do the following:
Console
To create a zonal policy, you can use the Google Cloud console.
In the Google Cloud console, go to the Extension policies page:
Go to Extension policies
If you use the search bar to find this page, then select the result whose
subheading is Compute Engine .
Click + Create .
In the Name field, enter a name for the policy.
Optional: In the Description field, enter a description for the policy.
In the Priority field, specify a priority number to resolve conflicts
between policies. Lower numbers indicate higher priority. The default
value is 1000.
In the Zone list, select the zone where you want to apply this policy.
In the Extensions section, click Add extension and do the
following:
From the Extension list, select
Google Cloud's Extension for Ops Agent .
Leave the Version field blank.
In the Config file content field, enter the
YAML configuration string
for the Ops Agent.
Click Create .
gcloud
To create a zonal or global policy, you can use the gcloud CLI.
Zonal
Use the --config-from-file option to the
gcloud beta compute zone-vm-extension-policies create command
to specify a configuration file:
gcloud beta compute zone-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE \
--extensions=ops-agent
--config-from-file=ops-agent=" OPS_AGENT_CONFIG_PATH "
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
OPS_AGENT_CONFIG_PATH : The path to a file containing the
YAML configuration string for the Ops Agent.
This file must exist in the environment where you run the gcloud
command.
Configuration YAML for the Ops Agent can be lengthy. Putting the
configuration into a file and passing the file to the gcloud CLI
is much less error-prone than attempting to enter properly formatted YAML
on the command line. Changing this file after creating the policy doesn't
update the policy; to update a policy, use the
gcloud beta compute zone-vm-extension-policies update command.
Global
Use the --config-from-file option to the
gcloud beta compute global-vm-extension-policies create command
to specify a configuration file:
gcloud beta compute global-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-predefined-plan=slow_rollout \
--config-from-file=ops-agent=" OPS_AGENT_CONFIG_PATH "
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
OPS_AGENT_CONFIG_PATH : The path to a file containing the
YAML configuration string for the Ops Agent.
This file must exist in the environment where you run the gcloud
command.
Configuration YAML for the Ops Agent can be lengthy. Putting the
configuration into a file and passing the file to the gcloud CLI
is much less error-prone than attempting to enter properly formatted YAML
on the command line. Changing this file after creating the policy doesn't
update the policy; to update a policy, use the
gcloud beta compute global-vm-extension-policies update command.
If you provide a custom configuration for the Ops Agent when creating
or updating an extension policy, then the policy deploys the Ops Agent with
the custom configuration. You don't need to manually restart the agent.
The configuration is stored with the extension policy, so don't include
sensitive data like passwords in the configuration. Because the configuration
is stored with the extension policy, modifying the configuration file does
not change the configuration of the agent. You must update the configuration
stored with the policy by using the appropriate
gcloud command:
For zonal policies, use the
gcloud beta compute zone-vm-extension-policies update command.
For global policies, use the
gcloud beta compute global-vm-extension-policies update command.
When you provide a custom configuration for the Ops Agent,
VM Extension Manager copies the configuration to the location
used by the Ops Agent for user-specified configuration
files on the target VM:
Linux: /etc/google-cloud-ops-agent/config.yaml
Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml
If there is a config.yaml file present on the VM, the extension policy
overwrites it.
For general information about using the
Google Cloud console and the gcloud CLI to create VM extension
policies, see
Install VM extensions by creating extension policies .
Install the Ops Agent with a fast rollout plan at higher priority (global only)
To create a global policy that installs the latest version of the Ops Agent
on by using a higher-than-default priority and the
fast-rollout plan , use the following
gcloud beta compute global-vm-extension-policies create command:
gcloud beta compute global-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-predefined-plan=fast_rollout \
--priority=500
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
Install the Ops Agent on a subset of zones in a Google Cloud project (global only)
To create a global policy that applies to only a subset of zones in a
Google Cloud project, you must use a custom rollout plan that specifies the
zones in which to apply the policy. For information about creating
custom rollout plans, see
About rollout plans .
To specify a set of zones, use the locationSelector.includedLocations field
when creating the rollout plan.
To create an extension policy that uses a custom rollout plan, use
the following
gcloud beta compute global-vm-extension-policies create command:
gcloud beta compute global-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-custom-plan=projects/ PROJECT_ID /locations/global/rolloutPlans/ CUSTOM_PLAN_NAME
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
CUSTOM_PLAN_NAME : The name associated with your custom
rollout plan.
Manage the Ops Agent by updating VM extension policies
To change how a policy manages the Ops Agent, update the policy.
When you update a policy, VM Extension Manager rolls out the changes to
all applicable VMs, typically within one minute. If you modify inclusion labels,
then the Ops Agent might be installed on new VMs or uninstalled from existing
VMs based on whether the VMs match the updated labels.
The following sections show how to manage the Ops Agent to do the following:
Update the pinned version of the agent on all VMs
Modify the configuration of the Ops Agent on all VMs
Update the pinned version of the Ops Agent on all VMs in a zone
To change the pinned version of the Ops Agent on all VMs in a zone,
do the following:
Console
To create a zonal policy, you can use the Google Cloud console.
In the Google Cloud console, go to the Extension policies page:
Go to Extension policies
If you use the search bar to find this page, then select the result whose
subheading is Compute Engine .
Select the policy that you want to update.
Click Edit .
In the Manage extensions section, do the following:
Select Google Cloud's Extension for Ops Agent .
Modify the Version field. Use version 2.58.0 or newer.
Click Done .
Click Save .
gcloud
To create a zonal or global policy, you can use the gcloud CLI.
Zonal
Use the gcloud beta compute zone-vm-extension-policies update
with the --version option command to modify the pinned agent version.
When you update a policy by using
gcloud, the request acts as a complete replacement.
Any optional fields you omit revert to their
default values instead of retaining existing values from the modified policy.
To change the version of the Ops Agent installed on all VMs in a zone by a
policy, use the following command:
gcloud beta compute zone-vm-extension-policies update POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE \
--extensions=ops-agent
--version=ops-agent= VERSION
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
VERSION : The version of the Ops Agent to install.
Use version 2.58.0 or newer.
For a list of versions, see the Ops Agent
releases page on GitHub .
If you omit the --version option,
then the policy installs the latest
version and updates the Ops Agent when a new version is released, as
shown in the example that installs the latest version .
Global
Use the gcloud beta compute global-vm-extension-policies update
with the --version option command to modify the pinned agent version.
When you update a policy by using
gcloud, the request acts as a complete replacement.
Any optional fields you omit revert to their
default values instead of retaining existing values from the modified policy.
To change the version of the Ops Agent installed on all VMs by a global
policy, use the following command:
gcloud beta compute global-vm-extension-policies update POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-predefined-plan=slow_rollout \
--version=ops-agent= VERSION
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
VERSION : The version of the Ops Agent to install.
Use version 2.58.0 or newer.
For a list of versions, see the Ops Agent
releases page on GitHub .
If you omit the --version option,
then the policy installs the latest
version and updates the Ops Agent when a new version is released, as
shown in the example that installs the latest version .
Modify the configuration of the Ops Agent on all VMs
To modify the configuration of the Ops Agent, do the
following:
Console
To create a zonal policy, you can use the Google Cloud console.
In the Google Cloud console, go to the Extension policies page:
Go to Extension policies
If you use the search bar to find this page, then select the result whose
subheading is Compute Engine .
Select the policy that you want to update.
Click Edit .
In the Manage extensions section, do the following:
Select Google Cloud's Extension for Ops Agent .
Modify the Config file content field.
Click Done .
Click Save .
gcloud
To create a zonal or global policy, you can use the gcloud CLI.
Zonal
Use the gcloud beta compute zone-vm-extension-policies update
with the --config-from-file option or the --config option
to specify a new configuration.
When you update a policy by using
gcloud, the request acts as a complete replacement.
Any optional fields you omit revert to their
default values instead of retaining existing values from the modified policy.
To change the configuration of the Ops Agent installed on all VMs in a zone
by a policy, use the following command:
gcloud beta compute zone-vm-extension-policies update POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE \
--extensions=ops-agent
--config-from-file=ops-agent=" OPS_AGENT_CONFIG_PATH "
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
OPS_AGENT_CONFIG_PATH : The path to a file containing the
YAML configuration string for the Ops Agent.
This file must exist in the environment where you run the gcloud
command.
Configuration YAML for the Ops Agent can be lengthy. Putting the
configuration into a file and passing the file to the gcloud CLI
is much less error-prone than attempting to enter properly formatted YAML
on the command line.
Global
Use the gcloud beta compute global-vm-extension-policies update
with the --config-from-file option or the --config option
to specify a new configuration.
When you update a policy by using
gcloud, the request acts as a complete replacement.
Any optional fields you omit revert to their
default values instead of retaining existing values from the modified policy.
To change the configuration of the Ops Agent installed on all VMs
by a policy, use the following command:
gcloud beta compute global-vm-extension-policies update POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-predefined-plan=slow_rollout \
--config-from-file=ops-agent=" OPS_AGENT_CONFIG_PATH "
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
OPS_AGENT_CONFIG_PATH : The path to a file containing the
YAML configuration string for the Ops Agent.
This file must exist in the environment where you run the gcloud
command.
Configuration YAML for the Ops Agent can be lengthy. Putting the
configuration into a file and passing the file to the gcloud CLI
is much less error-prone than attempting to enter properly formatted YAML
on the command line.
If you provide a custom configuration for the Ops Agent when creating
or updating an extension policy, then the policy deploys the Ops Agent with
the custom configuration. You don't need to manually restart the agent.
The configuration is stored with the extension policy, so don't include
sensitive data like passwords in the configuration. Because the configuration
is stored with the extension policy, modifying the configuration file does
not change the configuration of the agent. You must update the configuration
stored with the policy by using the appropriate
gcloud command:
For zonal policies, use the
gcloud beta compute zone-vm-extension-policies update command.
For global policies, use the
gcloud beta compute global-vm-extension-policies update command.
When you provide a custom configuration for the Ops Agent,
VM Extension Manager copies the configuration to the location
used by the Ops Agent for user-specified configuration
files on the target VM:
Linux: /etc/google-cloud-ops-agent/config.yaml
Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml
If there is a config.yaml file present on the VM, the extension policy
overwrites it.
For general information about using the
Google Cloud console and the gcloud CLI to manage VM extension
policies, see Modify
extensions by updating a VM extension policy .
Extend an existing global policy to include new zones (global only)
When VMs are created in new zones after a global policy has been created and
rolled out, VM Extension Manager does not automatically apply the
policy to the VMs in the new zones. To include the VMs in new zones, you
must restart the global policy rollout.
To restart a global policy rollout, use the
gcloud beta compute global-vm-extension-policies update command
and supply the --rollout-retry-uuid= UUID option.
For example, suppose you created and rolled out a global policy by using the
following command:
gcloud beta compute global-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--version=ops-agent=2.61.0 \
--rollout-predefined-plan=slow_rollout \
--config-from-file=ops-agent="/usr/ops-agent-config.yaml"
To extend the policy to VMs created in previously unused zones, restart the
rollout by using the following command:
gcloud beta compute global-vm-extension-policies update test-policy POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--version=ops-agent=2.61.0 \
--rollout-predefined-plan=slow_rollout \
--config-from-file=ops-agent="/usr/ops-agent-config.yaml" \
--rollout-retry-uuid= UUID
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
UUID : A universally unique identifier (UUID) that identifies the
retry request. You can use any UUID generator to create one. For more
information, see
Retry a rollout .
Update a global policy to exclude a set of zones (global only)
To update the zones to which a global policy that excludes some zones in a
Google Cloud project, you must use a new custom rollout plan that specifies the
zones in which to apply the policy. For information about creating
custom rollout plans, see
About rollout plans .
To specify a set of zones, use the locationSelector.includedLocations field
when creating the rollout plan.
To update an extension policy that uses a custom rollout plan, use
the following
gcloud beta compute global-vm-extension-policies update command:
gcloud beta compute global-vm-extension-policies update POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--rollout-custom-plan=projects/ PROJECT_ID /locations/global/rolloutPlans/ NEW_CUSTOM_PLAN_NAME \
--rollout-retry-uuid= UUID
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
NEW_CUSTOM_PLAN_NAME : The name associated with your
updated custom rollout plan.
UUID : A universally unique identifier (UUID) that identifies the
retry request. You can use any UUID generator to create one. For more
information, see
Retry a rollout .
Uninstall the Ops Agent by deleting VM extension policies
To uninstall the Ops Agent, delete the VM extension policy that manages
the agent. If another active, lower-priority policy applies to a VM and
also manages the Ops Agent, then the agent remains installed
on that VM based on the lower-priority policy.
VM Extension Manager removes the Ops Agent from all accessible VMs
within one minute of policy deletion. If a VM is inaccessible, then
VM Extension Manager skips deletion of the agent.
If the VM becomes available again, then VM Extension Manager
removes the agent at that time.
Console
In the Google Cloud console, go to the Extension policies page:
Go to Extension policies
If you use the search bar to find this page, then select the result whose
subheading is Compute Engine .
Select the policy that you want to delete.
Click Delete .
In the confirmation dialog, click Delete .
gcloud
Zonal
To delete the VM extension policy that manages the Ops Agent, use the
gcloud beta compute zone-vm-extension-policies delete command:
gcloud beta compute zone-vm-extension-policies delete POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
Global
To delete the global VM extension policy that manages the Ops Agent, use the
gcloud beta compute global-vm-extension-policies delete command:
gcloud beta compute global-vm-extension-policies delete POLICY_NAME \
--project= PROJECT_ID \
--rollout-predefined-plan=slow_rollout
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
To accelerate an already started deletion rollout, issue a new deletion
command that uses the fast_rollout plan. You must also specify the
--rollout-retry-uuid= UUID option:
gcloud beta compute global-vm-extension-policies delete POLICY_NAME \
--project= PROJECT_ID \
--rollout-predefined-plan=fast_rollout \
--rollout-retry-uuid= UUID
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
UUID : A universally unique identifier (UUID) that identifies the
retry request. You can use any UUID generator to create one. For more
information, see
Retry a rollout .
Retrieve information about VM extension policies
You can retrieve the following information about existing VM extension policies:
A list of all policies in your Google Cloud project.
Configuration information about a specific policy.
Console
In the Google Cloud console, go to the Extension policies page:
Go to Extension policies
If you use the search bar to find this page, then select the result whose
subheading is Compute Engine .
This page lists all the VM extension policies in your project.
To view details of a specific extension policy, click the name of the
policy.
gcloud
Zonal
List VM extension policies
To list information about all VM extension policies in a zone, use the
gcloud beta compute zone-vm-extension-policies list :
gcloud beta compute zone-vm-extension-policies list \
--project= PROJECT_ID \
--zone= ZONE \
--page-size= PAGE_SIZE_INTEGER
Replace the following variables in the command:
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
PAGE_SIZE_INTEGER : The number of policies to list per page; for example,
2 . For more information about sorting and filtering options, see
gcloud beta compute zone-vm-extension-policies list .
Describe a named VM extension policy
To retrieve the configuration of a named policy in a zone, use the
gcloud beta compute zone-vm-extension-policies describe :
gcloud beta compute zone-vm-extension-policies describe POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
Global
List global VM extension policies
To list information about global VM extension policies, use the
gcloud beta compute global-vm-extension-policies list :
gcloud beta compute global-vm-extension-policies list \
--project= PROJECT_ID \
--page-size= PAGE_SIZE_INTEGER
Replace the following variables in the command:
PROJECT_ID : The identifier of the project.
PAGE_SIZE_INTEGER : The number of policies to list per page; for example,
2 . For more information about sorting and filtering options, see
gcloud beta compute global-vm-extension-policies list .
Describe a named global VM extension policy
To retrieve the configuration of a named policy in a zone, use the
gcloud beta compute global-vm-extension-policies describe :
gcloud beta compute global-vm-extension-policies describe POLICY_NAME \
--project= PROJECT_ID
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
For general information about using the
Google Cloud console and the gcloud CLI to retrieve information
about VM extension policies, see
View extension policies .
Verify the installation of the Ops Agent
This section describes how to do the following:
Verify the status or version of an Ops Agent installation
Verify that the Ops Agent is collecting telemetry
Verify the status or version of an Ops Agent installation
To determine the status or version of the Ops Agent, use one of the following
Google Cloud console pages:
Compute Engine
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
Select a VM from the list.
Click the Observability tab.
Cloud Monitoring
In the Google Cloud console, go to the VM Instances page:
Go to VM Instances
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Select the List view.
When the Ops Agent has been installed on the VM and is collecting logs and
metrics, the agent's status is marked with a green checkmark next to the
Ops Agent label.
To determine the version of the installed agent, hover over the Ops Agent
label on the Compute Engine or Monitoring dashboard.
Verify that the Ops Agent is collecting telemetry
If the Ops Agent has been successfully installed and is running correctly,
then it sends metrics to Cloud Monitoring and logs to Cloud Logging.
For information about verifying collection of metrics, see
Agent is running, but data is not
ingested .
For information about verifying collection of logs, see Verify successful
log collection .
Restart an Ops Agent installed by an extension policy
When the Ops Agent is installed and managed by
VM Extension Manager, the Ops Agent isn't managed by the
system-management service of the operating system, that is, systemd on Linux
or the Windows Service Manager on Windows. Therefore, Linux systemctl
commands and Windows *-Service commands don't work with an Ops Agent
installed by an extension policy.
To restart an Ops Agent that was installed by an extension policy, do
one of the following:
Recreate the policy.
Delete the policy. Deleting the policy stops and
uninstalls the Ops Agent.
Create a new policy. The new policy installs the
Ops Agent and starts it.
Use a temporary, higher-priority policy. If the original policy
affects a large number of VMs but you only want to restart the Ops Agent
on a small number, add a label to those VMs and configure the new
policy to filter on the label.
For example, if a policy with priority 1000
failed to start the Ops Agent on a VM, you could add a label like
status=failed to the VM. Then create a new policy
with a higher priority, like 500. For example, a Google Cloud CLI
command might look like the following:
Zonal
gcloud beta compute zone-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--zone= ZONE \
--extensions=ops-agent \
--inclusion-labels=status=failed \
--priority=500 \
--config-from-file=ops-agent=/usr/ops-agent-config.yaml
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
ZONE : The target zone; for example, us-central1-f .
Global
gcloud beta compute global-vm-extension-policies create POLICY_NAME \
--project= PROJECT_ID \
--extensions=ops-agent \
--inclusion-labels=status=failed \
--priority=500 \
--config-from-file=ops-agent=/usr/ops-agent-config.yaml \
--rollout-predefined-plan=fast_rollout
Replace the following variables in the command:
POLICY_NAME : A name for the VM extension policy.
PROJECT_ID : The identifier of the project.
After the new policy successfully installs the Ops Agent, delete
the policy and remove the label from the VMs. The Ops Agent remains
installed on the VM because the original policy is still active.
Enable guest agent debug log on the VM
VM Extension Manager policies use the
Compute Engine guest agent to
manage the Ops Agent as a VM extension.
For information about enabling debug logging for the guest agent, see
View debug logs for the guest agent .
Troubleshoot extension policies
This section provides information about troubleshooting the use of
extension policies to manage the Ops Agent:
gcloud beta compute zone-vm-extension-policies commands fail
The extension policy is created, but the Ops Agent status is "not detected"
Linux systemctl and Windows Service Manager don't work with the Ops Agent
For information about troubleshooting the Ops Agent, see
Troubleshoot the Ops Agent .
gcloud beta compute zone-vm-extension-policies commands fail
When a gcloud beta compute zone-vm-extension-policies command fails, the response includes
troubleshooting suggestions. Correct any errors in the command
flags or arguments suggested by the error message.
If the output of the command mentions insufficient IAM
permissions, then review the necessary roles and permissions described in
Grant the roles required to use VM Extension Manager .
The extension policy is created, but the Ops Agent status is "not detected"
You successfully created an extension policy, but the Ops Agent shows a
"not detected" status on the VM.
The Ops Agent might show as "not detected" if either of the following occurs:
The extension policy fails to install the Ops Agent.
An installed Ops Agent encounters an error condition that prevents it from
running.
The following sections describe how to diagnose these cases.
Verify that the Ops Agent was installed by the policy
VM Extension Manager policies use the
Compute Engine guest agent to
manage the Ops Agent as a VM extension.
To determine if the Ops Agent was installed by the extension policy, use
one of the following to look for log entries from the guest agent:
Logs Explorer
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Enter the following query and click Run query :
log_id("GCEGuestAgentManager")
Linux
Run the following command on the Compute Engine VM:
journalctl -u google-guest-agent-manager
Windows
Run the following command on the Compute Engine VM:
Get-Eventlog -Source google_guest_agent_manager -LogName Application
If you see logs containing a string like Failed to install plugin
"ops-agent-plugin" ... , or the query returns no logs, then the
extension policy failed to install the Ops Agent. For next steps, see
Extension policy fails to install the Ops Agent .
If you see logs containing a string like Successfully installed plugin
"ops-agent_nnnnnnnn" , then the extension policy successfully installed the
Ops Agent. For next steps, see
Installed Ops Agent is "not detected" .
Extension policy fails to install the Ops Agent
An extension policy might be ineffective if one of the following is true:
The guest agent is not installed on the VM. To diagnose and fix this condition,
do the following:
Verify that the VM is using one of the
operating systems
supported for the Compute Engine guest environment.
View the packages installed on the
VM
to verify that google-guest-agent is included.
If the google-guest-agent is not installed,
then install the guest agent .
The guest agent is installed but outdated. To diagnose and fix this condition,
do the following:
Validate the guest environment
to determine the version of the google-guest-agent package.
VM Extension Manager requires version 20241209.01
or newer.
If the version of the google-guest-agent is older than 20241209.01 ,
then update the
guest environment .
The VM's operating system is not supported by
VM Extension Manager. For more
information, see Review supported operating systems .
Installed Ops Agent has status "not detected"
The Ops Agent can have a status of "not detected" if one of the following
is true:
There are observability agents installed on the VM already. Existing
agents can cause conflicts and must be uninstalled. For more information,
see Uninstall any observability agents .
After uninstalling any previously installed agents, you can
restart the Ops Agent .
The Ops Agent has insufficient permissions to send data to
Cloud Logging and Cloud Monitoring. For more information, see
Common reasons for telemetry-transmission failures .
Verify that the Ops Agent configuration is valid
You provided a custom configuration to the Ops Agent by creating or
updating an extension policy, but the agent status is "not detected".
The problem might be an error in your custom configuration. Use the
guest agent debug logs to look for configuration errors.
Enable guest agent debug logging
For information about enabling debug logging for the guest agent, see
View debug logs for the guest agent .
Examine debug logs
Logs Explorer
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Enter the following query and click Run query :
severity>=DEBUG log_id("GCEGuestAgentManager") "The agent config file is not valid"
Linux
Run the following command on the Linux Compute Engine VM:
journalctl -u google-guest-agent-manager | grep "The agent config file is not valid"
Windows
Run the following command on the Windows Compute Engine VM:
Get-Eventlog -Source google_guest_agent_manager -LogName Application |
Where-Object {$_.Message -like "*The agent config file is not valid*"}
If you see logs containing the string The agent config file is not valid ,
then the custom configuration for the Ops Agent you provided when
creating or updating the extension policy is invalid.
To fix this problem, do the following:
Correct the configuration by referring to
Configure the Ops Agent .
For information about the structure of an Ops Agent configuration file.
Update the extension policy with the corrected configuration.
Linux systemctl status and Windows Get-Service commands don't work with the Ops Agent
You run a command like sudo systemctl status google-cloud-ops-agent"*"
but it returns no information.
When the Ops Agent is installed and managed by
VM Extension Manager, the Ops Agent isn't managed by the
system-management service of the operating system, that is, systemd on Linux
or the Windows Service Manager on Windows.
To find the status information for an Ops Agent managed by
VM Extension Manager, see the following:
Agent health checks
Agent self logs .
Linux systemctl restart and Windows Restart-Service commands don't work with the Ops Agent
You run a command like sudo systemctl restart google-cloud-ops-agent
but the Ops Agent isn't restarted.
When the Ops Agent is installed and managed by
VM Extension Manager, the Ops Agent isn't managed by the
system-management service of the operating system, that is, systemd on Linux
or the Windows Service Manager on Windows. Therefore, you can't stop or start the Ops Agent manually,
and commands like the following don't work with the Ops Agent:
Linux: sudo systemctl [stop|start|restart]
Windows: Stop-Service , Start-Service , Restart-Service
To stop or restart an Ops Agent managed by VM Extension Manager,
you must uninstall the agent by deleting the extension policy. For more
information about stopping or restarting the Ops Agent, see
Restart an Ops Agent installed by an extension policy .
Additional troubleshooting information
For more information about troubleshooting the creation and use of
VM Extension Manager policies, see Troubleshoot
VM extensions .
For more information about troubleshooting the Ops Agent, see
Troubleshoot the Ops Agent .
Quota
For information about the number of extension policies you can create
in a Google Cloud project, see Quota .
Pricing
For information about costs associated with using
VM Extension Manager, see Pricing .
If you install the Ops Agent, then you might be charged for the metrics,
logs, or traces that the agent sends to your Google Cloud project. For pricing
information, see Google Cloud Observability pricing .
What's next
View detailed information about
configuring the Ops Agent .
Learn more about VM Extension Manager .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
