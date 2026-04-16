---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.343Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "IAM deny policy support for Cloud Logging permissions"
feature_slug: "iam-deny-policy-support-for-cloud-logging-permissions"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy"
keywords:
  - "iam"
  - "deny"
  - "policy"
  - "logging"
  - "permissions"
  - "policies"
  - "can"
  - "include"
---

# IAM deny policy support for Cloud Logging permissions

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

IAM deny policies can include supported Cloud Logging permissions.

## Extended Definition

IAM deny policies can include supported Cloud Logging permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Grant roles required to use VM Extension Manager To get the permissions that you need to create, view, modify, and delete VM extension policies, ask your administrator to grant you the following IAM roles on the project: To create extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To view extension policies: VM Extension Policy Viewer ( roles/compute.vmExtensionPolicyViewer ) VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To modify extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To delete extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create, view, modify, and delete VM extension policies: To create extension policies: compute.vmExtensionPolicies.create To view extension policies: compute.vmExtensionPolicies.list To view details of an extension policy: compute.vmExtensionPolicies.get To modify extension policies: compute.vmExtensionPolicies.update To delete extension policies: compute.vmExtensionPolicies.delete You might also be able to get these permissions with custom roles or other predefined roles .
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

### "Manage VMs covered by the Ops Agent OS policy \_|\_ Cloud Logging \_|\_\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions for installing the Ops Agent during VM creation: serviceusage.services.get serviceusage.services.enable osconfig.osPolicyAssignments.get osconfig.osPolicyAssignments.create osconfig.projectFeatureSettings.update compute.instances.create Required permissions for installing Ops Agent on existing VMs: serviceusage.services.get serviceusage.services.enable osconfig.osPolicyAssignments.get osconfig.osPolicyAssignments.create osconfig.projectFeatureSettings.update compute.instances.setMetadata compute.instances.setLabels You can find corresponding roles that provide those permissions in the IAM basic and predefined roles reference .
- INSTANCE ASSIGNMENT ID LOCATION UPDATE TIME SUMMARY instance-1 goog-ops-agent-v2-x86-template-1-0-0-us-east4-c us-east4-c 2023-04-28T02:11:15.118088Z 1/1 policies compliant instance-3 goog-ops-agent-v2-x86-template-1-0-0-us-east4-c us-east4-c 2023-04-28T02:11:15.118088Z 1/1 policies compliant Verify that a VM has an Ops Agent OS policy label To see which VMs in your Google Cloud project have the Ops Agent OS policy label, goog-ops-agent-policy , use either the Google Cloud console or the gcloud CLI.
- Save your changes. gcloud To extend policy coverage to a VM without coverage, run the following commands: gcloud compute instances update VM NAME --zone= ZONE --update-labels=goog-ops-agent-policy:v2-x86-template- 1-0-0 gcloud compute instances add-metadata VM NAME --zone= ZONE --metadata=enable-osconfig=TRUE Permission Ops Agent installation uses VM Manager and requires permissions to activate the VM Manager API and create a policy.
- If the VM is covered by an Ops Agent OS policy, then the OS policy id column includes goog-ops-agent-policy and the state is "Compliant". gcloud To display a list of Ops Agent OS policy assignments in a zone, run the following command: gcloud compute os-config os-policy-assignment-reports list --location= ZONE --filter="ASSIGNMENT ID goog-ops-agent" The output shows a list of VMs with an Ops Agent OS policy assignment.

### Policy \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditions Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy .
- Home Documentation Observability Cloud Logging Reference Send feedback Policy Stay organized with collections Save and categorize content based on your preferences.
- If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.
- Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy .

