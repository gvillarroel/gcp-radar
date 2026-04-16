---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.436Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "gcloud Agent Policies Commands"
feature_slug: "gcloud-agent-policies-commands"
latest_feature_date: "2021-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
keywords:
  - "gcloud"
  - "agent"
  - "policies"
  - "commands"
  - "beta"
  - "includes"
  - "managing"
---

# gcloud Agent Policies Commands

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Gcloud beta includes commands for managing Agent Policies.

## Extended Definition

Gcloud beta includes commands for managing Agent Policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Use agent policies (beta) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the other commands in the command group and the available options, see the gcloud beta compute instances ops-agents policies documentation.
- The ops-agents policy commands fail When a gcloud beta compute instances ops-agents policies command fails, the response shows a validation error.
- Here is an example of a phased rollout plan for Debian 11 VMs in a project called my project : Phase 1: Create a policy named ops-agents-policy-safe-rollout to install the Ops Agent on all VMs with the labels env=test and app=myproduct . gcloud beta compute instances \ ops - agents policies create ops - agents - policy - safe - rollout \ -- agent - rules = "type=ops-agent,version=current-major,package-state=installed,enable-autoupgrade=true" \ -- os - types = short - name = debian , version = 11 \ -- group - labels = env = test , app = myproduct \ -- project = my project For more information about specifying the operating system, see gcloud beta compute instances ops-agents policies create .
- Phase 2: Update that policy to target VMs in a single zone that have the labels env=prod and app=myproduct . gcloud beta compute instances \ ops-agents policies update ops-agents-policy-safe-rollout \ --group-labels=env=prod,app=myproduct \ --zones=us-central1-c \ Phase 3: Update that policy to clear the zones filter so it rolls out globally gcloud beta compute instances \ ops-agents policies update ops-agents-policy-safe-rollout \ --clear-zones Policies on VMs that predate OS Config You might need to manually install and configure the OS Config agent on VMs that predate OS Config.

### Use agent policies (GA) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The goog-ops-agent-policy indicator includes several types of policies: Policies created by using the gcloud compute instances ops-agents policies commands.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-policy-access= [admin editor viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-policy-access= [admin editor viewer] The diagnose policies.sh script Given a project ID, a Compute Engine instance ID, a Compute Engine zone, and the agent policy ID, the diagnose policies.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS policy assignment The OS policy assignments that are applicable to this Compute Engine instance A description of this Compute Engine instance To invoke the script, run the following command: bash diagnose policies.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID \ --zone= ZONE Pricing The gcloud compute instances ops-agents policies commands are implemented by using OS policy assignment resources from VM Manager .
- Although there is a general gcloud CLI command group for managing OS policy assignments, gcloud compute os-config os-policy-assignments , the gcloud compute instances ops-agents policies command group is designed specifically for the agent policies described in this document.
- Before using the Google Cloud CLI or the Terraform module to create agent policies, complete the following steps: If you are going to use the gcloud compute instances ops-agents policies commands and if you haven't done so already, then install the Google Cloud CLI .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To update an extension policy that uses a custom rollout plan, use the following gcloud beta compute global-vm-extension-policies update command: gcloud beta compute global-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-custom-plan=projects/ PROJECT ID /locations/global/rolloutPlans/ NEW CUSTOM PLAN NAME \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

