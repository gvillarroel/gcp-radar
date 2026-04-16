---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.974Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM dashboard monitoring agent installation workflow"
feature_slug: "vm-dashboard-monitoring-agent-installation-workflow"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "vm"
  - "dashboard"
  - "monitoring"
  - "agent"
  - "installation"
  - "workflow"
  - "instances"
  - "provides"
---

# VM dashboard monitoring agent installation workflow

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Monitoring VM Instances dashboard provides a UI workflow to install the Monitoring agent from the inventory table.

## Extended Definition

The Monitoring VM Instances dashboard provides a UI workflow to install the Monitoring agent from the inventory table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- However, the status might be inaccurate if the VM lacks necessary access scopes or if the associated service account has insufficient IAM roles. gcpdiag : gcpdiag provides more reliable and robust information about agent status than the VM Instances dashboard, verifying both agent installation and transmission of telemetry from the VM.
- Verify that the Ops Agent is running To verify that the Ops Agent is running, you can use either of the following: VM Instances dashboard : This dashboard lets you view the agent installation status across your VM fleet.
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- Use VM Instances dashboard In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- Pollicies created by using the gcloud compute instances ops-agents policies describe agent policy by using a YAML configuration file and a zone, for example: gcloud compute instances ops-agents policies create test-policy \ --zone us-central1-a \ --file test-policy.yaml \ --project PROJECT ID The ops-agent-policy Terraform module provides the same capabilities.
- This section describes the differences between the beta and GA agent policies For information about creating and managing agent policies, see the following: Use agent policies (GA) Use agent policies (beta) Differences between beta and GA agent policies The beta and GA agent policies differ in the following ways: Creation mechanisms Beta agent policies are created by using the following: The gcloud beta compute instances ops-agents policies command group in the Google Cloud SDK.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- These policies can't manage versions of the Ops Agent earlier than version 2.58.0, Ops Agent instances installed by using other means, or any version of the legacy Monitoring agent or Logging agent .
- To determine the version of the installed agent, hover over the Ops Agent label on the Compute Engine or Monitoring dashboard.

