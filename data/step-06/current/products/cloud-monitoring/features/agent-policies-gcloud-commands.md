---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.965Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Agent Policies gcloud commands"
feature_slug: "agent-policies-gcloud-commands"
latest_feature_date: "2021-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
keywords:
  - "agent"
  - "policies"
  - "gcloud"
  - "commands"
  - "managing"
  - "available"
  - "beta"
---

# Agent Policies gcloud commands

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Gcloud commands for managing Agent Policies are available in beta.

## Extended Definition

Gcloud commands for managing Agent Policies are available in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)

## Supporting Pages

### Use agent policies (beta) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the other commands in the command group and the available options, see the gcloud beta compute instances ops-agents policies documentation.
- The ops-agents policy commands fail When a gcloud beta compute instances ops-agents policies command fails, the response shows a validation error.
- Here is an example of a phased rollout plan for Debian 11 VMs in a project called my project : Phase 1: Create a policy named ops-agents-policy-safe-rollout to install the Ops Agent on all VMs with the labels env=test and app=myproduct . gcloud beta compute instances \ ops - agents policies create ops - agents - policy - safe - rollout \ -- agent - rules = "type=ops-agent,version=current-major,package-state=installed,enable-autoupgrade=true" \ -- os - types = short - name = debian , version = 11 \ -- group - labels = env = test , app = myproduct \ -- project = my project For more information about specifying the operating system, see gcloud beta compute instances ops-agents policies create .
- Phase 2: Update that policy to target VMs in a single zone that have the labels env=prod and app=myproduct . gcloud beta compute instances \ ops-agents policies update ops-agents-policy-safe-rollout \ --group-labels=env=prod,app=myproduct \ --zones=us-central1-c \ Phase 3: Update that policy to clear the zones filter so it rolls out globally gcloud beta compute instances \ ops-agents policies update ops-agents-policy-safe-rollout \ --clear-zones Policies on VMs that predate OS Config You might need to manually install and configure the OS Config agent on VMs that predate OS Config.

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- This section describes the differences between the beta and GA agent policies For information about creating and managing agent policies, see the following: Use agent policies (GA) Use agent policies (beta) Differences between beta and GA agent policies The beta and GA agent policies differ in the following ways: Creation mechanisms Beta agent policies are created by using the following: The gcloud beta compute instances ops-agents policies command group in the Google Cloud SDK.
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- To convert beta agent policies to GA policies by using the Google Cloud SDK, do the following: Generate a list of all beta agent policies in your project by running the following command: gcloud beta compute instances ops-agents policies list --project PROJECT ID Identify the beta agent policies that you want to convert to GA policies.

### Use agent policies (GA) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about the other commands in the command group and the available options, see the gcloud compute instances ops-agents policies documentation.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-policy-access= [admin editor viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-policy-access= [admin editor viewer] The diagnose policies.sh script Given a project ID, a Compute Engine instance ID, a Compute Engine zone, and the agent policy ID, the diagnose policies.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS policy assignment The OS policy assignments that are applicable to this Compute Engine instance A description of this Compute Engine instance To invoke the script, run the following command: bash diagnose policies.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID \ --zone= ZONE Pricing The gcloud compute instances ops-agents policies commands are implemented by using OS policy assignment resources from VM Manager .
- Although there is a general gcloud CLI command group for managing OS policy assignments, gcloud compute os-config os-policy-assignments , the gcloud compute instances ops-agents policies command group is designed specifically for the agent policies described in this document.
- Before using the Google Cloud CLI or the Terraform module to create agent policies, complete the following steps: If you are going to use the gcloud compute instances ops-agents policies commands and if you haven't done so already, then install the Google Cloud CLI .

