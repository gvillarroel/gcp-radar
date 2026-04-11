---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.133Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Agent Policies gcloud commands"
feature_slug: "agent-policies-gcloud-commands"
latest_feature_date: "2021-01-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies"
keywords:
  - "agent"
  - "policies"
  - "gcloud"
  - "commands"
  - "for"
  - "managing"
  - "are"
  - "available"
---

# Agent Policies gcloud commands

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Gcloud commands for managing Agent Policies are available in beta.

## Extended Definition

Gcloud commands for managing Agent Policies are available in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)

## Supporting Pages

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- This section describes the differences between the beta and GA agent policies For information about creating and managing agent policies, see the following: Use agent policies (GA) Use agent policies (beta) Differences between beta and GA agent policies The beta and GA agent policies differ in the following ways: Creation mechanisms Beta agent policies are created by using the following: The gcloud beta compute instances ops-agents policies command group in the Google Cloud SDK.
- The agent-policy Terraform module GA agent policies are created by using the following: The gcloud compute instances ops-agents policies command group in the Google Cloud SDK.
- Pollicies created by using the gcloud compute instances ops-agents policies describe agent policy by using a YAML configuration file and a zone, for example: gcloud compute instances ops-agents policies create test-policy \ --zone us-central1-a \ --file test-policy.yaml \ --project PROJECT ID The ops-agent-policy Terraform module provides the same capabilities.

### Use agent policies (beta) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the other commands in the command group and the available options, see the gcloud beta compute instances ops-agents policies documentation.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- To verify that the OS Config metadata is enabled, you can run the following command: gcloud compute project-info describe \ --project PROJECT ID \ grep "enable-osconfig\ enable-guest-attributes" -A 1 The expected output follows: - key: enable-guest-attributes value: 'TRUE' - key: enable-osconfig value: 'TRUE' Observability agents are installed, but not functioning properly For information about debugging specific agents, see the following documents: Troubleshoot the Ops Agent Troubleshoot the legacy Logging agent Troubleshoot the legacy Monitoring agent Enable debug-level logs for the OS Config agent It can be useful to enable debug-level logging in the OS Config agent when reporting an issue.
- Here is an example of a phased rollout plan for Debian 11 VMs in a project called my project : Phase 1: Create a policy named ops-agents-policy-safe-rollout to install the Ops Agent on all VMs with the labels env=test and app=myproduct . gcloud beta compute instances \ ops - agents policies create ops - agents - policy - safe - rollout \ -- agent - rules = "type=ops-agent,version=current-major,package-state=installed,enable-autoupgrade=true" \ -- os - types = short - name = debian , version = 11 \ -- group - labels = env = test , app = myproduct \ -- project = my project For more information about specifying the operating system, see gcloud beta compute instances ops-agents policies create .

### Use agent policies (GA) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-policy-access= [admin editor viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-policy-access= [admin editor viewer] The diagnose policies.sh script Given a project ID, a Compute Engine instance ID, a Compute Engine zone, and the agent policy ID, the diagnose policies.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS policy assignment The OS policy assignments that are applicable to this Compute Engine instance A description of this Compute Engine instance To invoke the script, run the following command: bash diagnose policies.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID \ --zone= ZONE Pricing The gcloud compute instances ops-agents policies commands are implemented by using OS policy assignment resources from VM Manager .
- Before using the Google Cloud CLI or the Terraform module to create agent policies, complete the following steps: If you are going to use the gcloud compute instances ops-agents policies commands and if you haven't done so already, then install the Google Cloud CLI .
- For information about the other commands in the command group and the available options, see the gcloud compute instances ops-agents policies documentation.
- The examples assume that you put the YAML in a file named agent-policy-description.yaml and that you create the policy in the us-central1-a zone by using a command like the following: gcloud compute instances ops-agents policies create POLICY ID \ --zone us-central1-a \ --file agent-policy-description.yaml \ --project PROJECT ID Install on all VMs To install the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : all : True Remove from all VMs To remove the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : removed version : latest instanceFilter : all : True Install on VMs based on labels To install the latest version of the Ops Agent on all VMs in the us-central1-a zone with the label "env=prod" or "app=web", use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : inclusionLabels : - labels : env : prod - labels : app : web When you specify multiple labels: entries for inclusion or exclusion, a VM matches if any of the labels is present; that is, the sets of labels for inclusion or exclusion are matched as a logical OR operation, not a logical AND operation.

