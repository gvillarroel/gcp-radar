---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.341Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent Arm VM support for SLES 15 and OpenSUSE Leap 15"
feature_slug: "ops-agent-arm-vm-support-for-sles-15-and-opensuse-leap-15"
latest_feature_date: "2023-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
keywords:
  - "ops"
  - "agent"
  - "arm"
  - "vm"
  - "sles"
  - "15"
  - "opensuse"
  - "leap"
---

# Ops Agent Arm VM support for SLES 15 and OpenSUSE Leap 15

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent supports Compute Engine Arm VMs running SLES 15 and OpenSUSE Leap 15.

## Extended Definition

Ops Agent supports Compute Engine Arm VMs running SLES 15 and OpenSUSE Leap 15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)

## Supporting Pages

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- This section describes the differences between the beta and GA agent policies For information about creating and managing agent policies, see the following: Use agent policies (GA) Use agent policies (beta) Differences between beta and GA agent policies The beta and GA agent policies differ in the following ways: Creation mechanisms Beta agent policies are created by using the following: The gcloud beta compute instances ops-agents policies command group in the Google Cloud SDK.
- The following example creates a file called config.yaml that contains a policy that matches the label applied in the previous step: cat > config.yaml << EOF agentsRule: packageState: installed version: 2 .47.0 instanceFilter: inclusionLabels: - labels: KEY : VALUE EOF For more information about describing GA agent policies, see Configuration files for agent policies .

### Use agent policies \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/logging/managing-agent-policies)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- To view OS Config agent logs in Logs Explorer , use the following filter: resource . type = "gce instance" logId ( OSConfigAgent ) To view OS Config agent logs, do the following: CentOS, RHEL, SLES, SUSE Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/messages \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Debian, Ubuntu Run the following command: gcloud compute ssh INSTANCE ID \ --project PROJECT ID \ -- sudo cat /var/log/syslog \ grep "OSConfigAgent\ google-fluentd\ stackdriver-agent" Windows Connect to your instance using RDP or a similar tool and login to Windows.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Here is an example of a phased rollout plan for Debian 11 VMs in a project called my project : Phase 1: Create a policy named ops-agents-policy-safe-rollout to install the legacy Logging agent and Monitoring agent on all VMs with the labels env=test and app=myproduct . gcloud beta compute instances \ ops - agents policies create ops - agents - policy - safe - rollout \ -- agent - rules = "type=logging,version=current-major,package-state=installed,enable-autoupgrade=true;type=metrics,version=current-major,package-state=installed,enable-autoupgrade=true" \ -- os - types = short - name = debian , version = 11 \ -- group - labels = env = test , app = myproduct \ -- project = my project For more information about specifying the operating system, see gcloud beta compute instances ops-agents policies create .

### Ops Agent overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.
- The Ops Agent is supported for Arm VMs on the following OS images: Debian 12 (Bookworm): Ops Agent version 2.44.0 Debian 13 (Trixie): Ops Agent version 2.61.0 Ubuntu 22.04 LTS (Jammy Jellyfish): Ops Agent version 2.42.0 Ubuntu 24.04 LTS (Noble Numbat): Ops Agent version 2.47.0 Ubuntu 25.10 (Questing Quokka): Ops Agent version 2.62.0 RHEL 9: Ops Agent version 2.40.0 RHEL 10: Ops Agent version 2.64.0 Rocky Linux 8: Ops Agent version 2.51.0 Rocky Linux 9: Ops Agent version 2.40.0 Rocky Linux 10: Ops Agent version 2.64.0 CentOS Stream 10: Ops Agent version 2.64.0 SLES 15: Ops Agent version 2.43.0 The Ops Agent is supported on a subset of the images supported by Compute Engine.
- The agent supports the following Windows operating systems: Windows Server: windows-2016, windows-2019, windows-2022, windows-2025 Windows Server Core: windows-2016-core, windows-2019-core, windows-20h2-core, windows-2022-core, windows-2025-core Agent access requirements Installing the agent requires access to the following DNS names: Google Cloud package repository: packages.cloud.google.com Google downloads subdomain: dl.google.com Running the agent requires access to the following DNS names: OAuth2 token server: oauth2.googleapis.com Earlier versions of the agent may require access to www.googleapis.com (full URL: https://www.googleapis.com/oauth2/v3/token ).
- Monitoring APIs: monitoring.googleapis.com Logging APIs: logging.googleapis.com The agent uses TCP ports within the VM for inter-process communication.

