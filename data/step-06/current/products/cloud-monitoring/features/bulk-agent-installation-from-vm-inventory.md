---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.945Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Bulk agent installation from VM inventory"
feature_slug: "bulk-agent-installation-from-vm-inventory"
latest_feature_date: "2021-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies"
keywords:
  - "bulk"
  - "agent"
  - "installation"
  - "vm"
  - "inventory"
  - "monitoring"
  - "instances"
  - "can"
---

# Bulk agent installation from VM inventory

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Cloud Monitoring VM Instances inventory can generate installation commands to install Logging and Monitoring agents on multiple VMs.

## Extended Definition

The Cloud Monitoring VM Instances inventory can generate installation commands to install Logging and Monitoring agents on multiple VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- However, the status might be inaccurate if the VM lacks necessary access scopes or if the associated service account has insufficient IAM roles. gcpdiag : gcpdiag provides more reliable and robust information about agent status than the VM Instances dashboard, verifying both agent installation and transmission of telemetry from the VM.
- Verify that the Ops Agent is running To verify that the Ops Agent is running, you can use either of the following: VM Instances dashboard : This dashboard lets you view the agent installation status across your VM fleet.
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- This section describes the differences between the beta and GA agent policies For information about creating and managing agent policies, see the following: Use agent policies (GA) Use agent policies (beta) Differences between beta and GA agent policies The beta and GA agent policies differ in the following ways: Creation mechanisms Beta agent policies are created by using the following: The gcloud beta compute instances ops-agents policies command group in the Google Cloud SDK.
- The following sections describe how to handle the following cases: Beta agent policies that select named instances Beta agent-upgrade policies Convert a beta named-instance policy to a GA policy To convert a beta agent policy that is applied to a named set of VM instances, you can do the following: Apply a label to the instances in the set of VMs you want to select.

### Use agent policies (GA) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The prepare-for-ops-agents-policies.sh script The diagnose policies.sh script The prepare-for-ops-agents-policies.sh script After you download the prepare-for-ops-agents-policies.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- To find values for the osShortName and osVersion fields for a VM, use the following commands: gcloud compute instances os-inventory describe INSTANCE NAME \ --zone ZONE grep "^ShortName: " gcloud compute instances os-inventory describe INSTANCE NAME \ --zone ZONE grep "^Version: " These commands require the OS Config agent to be installed on the VM.
- Cloud Monitoring VM Instances page The VM Instances page in Cloud Monitoring includes an Agent column that lists the agent installed on each VM, and for the Ops Agent, includes an indicator for installed agents that are older than the latest version.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-policy-access= [admin editor viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-policy-access= [admin editor viewer] The diagnose policies.sh script Given a project ID, a Compute Engine instance ID, a Compute Engine zone, and the agent policy ID, the diagnose policies.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS policy assignment The OS policy assignments that are applicable to this Compute Engine instance A description of this Compute Engine instance To invoke the script, run the following command: bash diagnose policies.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID \ --zone= ZONE Pricing The gcloud compute instances ops-agents policies commands are implemented by using OS policy assignment resources from VM Manager .

