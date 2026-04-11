---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.560Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Terraform Provisioning for Google Cloud Ops Agent"
feature_slug: "terraform-provisioning-for-google-cloud-ops-agent"
latest_feature_date: "2021-04-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation"
keywords:
  - "terraform"
  - "provisioning"
  - "for"
  - "ops"
  - "agent"
  - "can"
  - "provision"
  - "the"
---

# Terraform Provisioning for Google Cloud Ops Agent

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Terraform can provision the Google Cloud Ops Agent on Linux and Windows Compute Engine virtual machines.

## Extended Definition

Terraform can provision the Google Cloud Ops Agent on Linux and Windows Compute Engine virtual machines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)

## Supporting Pages

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The ops-agent-policy Terraform module Support for the legacy Monitoring agent and Logging agent Beta agent policies can manage the legacy Monitoring agent and Logging agent as well as the Ops Agent.
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- Pollicies created by using the gcloud compute instances ops-agents policies describe agent policy by using a YAML configuration file and a zone, for example: gcloud compute instances ops-agents policies create test-policy \ --zone us-central1-a \ --file test-policy.yaml \ --project PROJECT ID The ops-agent-policy Terraform module provides the same capabilities.
- You can have beta and GA agent policies that apply to the same VM, but you need to ensure that the policies don't have conflicting purposes, for example, a beta policy that installs the Ops Agent and a GA policy that uninstalls the Ops Agent.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Therefore, you can't stop or start the Ops Agent manually, and commands like the following don't work with the Ops Agent: Linux: sudo systemctl [stop start restart] Windows: Stop-Service , Start-Service , Restart-Service To stop or restart an Ops Agent managed by VM Extension Manager, you must uninstall the agent by deleting the extension policy.
- Install the Ops Agent with a custom configuration on all VMs To create a policy that installs the latest version of the Ops Agent on all VMs in a zone or globally, and provides custom configuration for the Ops Agent, do the following: Console To create a zonal policy, you can use the Google Cloud console.
- For example, you can use these policies to perform tasks like the following: Fleetwide installation: Install the Ops Agent on the following: All VMs in one or more zones in your Google Cloud project.
- A VM can be covered by multiple policies for an extension like the Ops Agent, but only one policy for the Ops Agent extension is effective on the VM.

### "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- This label identifies the policy, template, and version: Label key, the identifier for the policy: goog-ops-agent-policy Label value, the policy template and version: v2-x86-template- 1-0-0 When you create a VM in the Google Cloud console, you can select the Install Ops Agent for Monitoring and Logging checkbox.
- This document describes how the Google Cloud console can automatically install the Ops Agent for you when you create a VM instance.
- The Ops Agent OS policies then cover the following VMs based on the Ops Agent OS policy assignment IDs: OS Policy Assignment ID Covers VMs In: Covered VMs goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a us-central1-a instance-1 , instance-2 goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b us-east1-b instance-3 By default, instance-4 isn't covered because you didn't select Install Ops Agent for Monitoring and Logging , so it doesn't have the goog-ops-agent-policy:v2-x86-template- 1-0-0 label.
- A configuration policy is applied to a VM by using a mapping called an assignment ID , which looks like the following example: goog-ops-agent-v2-x86-template- 1-0-0 - ZONE An assignment ID for an Ops Agent OS policy consists of the following components: The name of the policy: "goog-ops-agent" A template for creating the policy: "v2-x86-template" A version string for the template.

