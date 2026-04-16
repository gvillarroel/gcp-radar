---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.955Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops agents on OpenSUSE Leap"
feature_slug: "ops-agents-on-opensuse-leap"
latest_feature_date: "2021-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
keywords:
  - "ops"
  - "agents"
  - "opensuse"
  - "leap"
  - "logging"
  - "agent"
  - "monitoring"
  - "can"
---

# Ops agents on OpenSUSE Leap

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Cloud Logging agent, Cloud Monitoring agent, and Ops Agent can be installed on VMs running OpenSUSE Leap 15, 15.1, and 15.2.

## Extended Definition

The Cloud Logging agent, Cloud Monitoring agent, and Ops Agent can be installed on VMs running OpenSUSE Leap 15, 15.1, and 15.2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)

## Supporting Pages

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- The ops-agent-policy Terraform module Support for the legacy Monitoring agent and Logging agent Beta agent policies can manage the legacy Monitoring agent and Logging agent as well as the Ops Agent.
- You can't convert beta agent policies for the legacy Monitoring agent or Logging agent to GA agent policies.

### Use agent policies \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- Here is an example of a phased rollout plan for Debian 11 VMs in a project called my project : Phase 1: Create a policy named ops-agents-policy-safe-rollout to install the legacy Logging agent and Monitoring agent on all VMs with the labels env=test and app=myproduct . gcloud beta compute instances \ ops - agents policies create ops - agents - policy - safe - rollout \ -- agent - rules = "type=logging,version=current-major,package-state=installed,enable-autoupgrade=true;type=metrics,version=current-major,package-state=installed,enable-autoupgrade=true" \ -- os - types = short - name = debian , version = 11 \ -- group - labels = env = test , app = myproduct \ -- project = my project For more information about specifying the operating system, see gcloud beta compute instances ops-agents policies create .
- To verify that the OS Config metadata is enabled, you can run the following command: gcloud compute project-info describe \ --project PROJECT ID \ grep "enable-osconfig\ enable-guest-attributes" -A 1 The expected output follows: - key: enable-guest-attributes value: 'TRUE' - key: enable-osconfig value: 'TRUE' Observability agents are installed, but not functioning properly For information about debugging specific agents, see the following documents: Troubleshoot the Ops Agent Troubleshoot the legacy Logging agent Troubleshoot the legacy Monitoring agent Enable debug-level logs for the OS Config agent It can be useful to enable debug-level logging in the OS Config agent when reporting an issue.
- Agent policies use the VM Manager suite of tools in Compute Engine to manage OS policies , which can automate the deployment and maintenance of software configurations like the Google Cloud Observability agents: the Ops Agent, the legacy Monitoring agent, and the legacy Logging agent.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring APIs: monitoring.googleapis.com Logging APIs: logging.googleapis.com The agent uses TCP ports within the VM for inter-process communication.
- Managed Service for Apache Spark instances prior to image version 2.2 have pre-installed legacy Monitoring agents with service-specific configurations.
- Dataflow instances have pre-installed legacy Monitoring agents with service-specific configurations.
- The agent supports the following Windows operating systems: Windows Server: windows-2016, windows-2019, windows-2022, windows-2025 Windows Server Core: windows-2016-core, windows-2019-core, windows-20h2-core, windows-2022-core, windows-2025-core Agent access requirements Installing the agent requires access to the following DNS names: Google Cloud package repository: packages.cloud.google.com Google downloads subdomain: dl.google.com Running the agent requires access to the following DNS names: OAuth2 token server: oauth2.googleapis.com Earlier versions of the agent may require access to www.googleapis.com (full URL: https://www.googleapis.com/oauth2/v3/token ).

