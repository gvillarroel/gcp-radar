---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.134Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM details event timeline"
feature_slug: "vm-details-event-timeline"
latest_feature_date: "2020-11-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install"
keywords:
  - "vm"
  - "details"
  - "event"
  - "timeline"
  - "the"
  - "page"
  - "includes"
  - "an"
---

# VM details event timeline

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The VM Details page includes an Event Timeline that shows important events and links to Incident Details.

## Extended Definition

The VM Details page includes an Event Timeline that shows important events and links to Incident Details.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- To view details of a specific extension policy, click the name of the policy. gcloud Zonal List VM extension policies To list information about all VM extension policies in a zone, use the gcloud beta compute zone-vm-extension-policies list : gcloud beta compute zone-vm-extension-policies list \ --project= PROJECT ID \ --zone= ZONE \ --page-size= PAGE SIZE INTEGER Replace the following variables in the command: PROJECT ID : The identifier of the project.
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create, view, modify, and delete VM extension policies: To create extension policies: compute.vmExtensionPolicies.create To view extension policies: compute.vmExtensionPolicies.list To view details of an extension policy: compute.vmExtensionPolicies.get To modify extension policies: compute.vmExtensionPolicies.update To delete extension policies: compute.vmExtensionPolicies.delete You might also be able to get these permissions with custom roles or other predefined roles .
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- October 09, 2023 Change When you install the Ops Agent on a Compute Engine VM by using the Cloud Monitoring VM Instances dashboard or the Observability tab on a Compute Engine VM details page, the agent is now installed with an Ops Agent OS policy.
- January 18, 2022 Change When you click on an entry in the Instances table on the Monitoring VM Instances dashboard, a sliding panel now appears with the instance details, replacing the VM Instance Details page.
- Change You can now update older versions of the Ops Agent from the Cloud Monitoring VM Instances page and from the Details panel for a selected Compute Engine instance.
- November 08, 2021 Feature You can now save a copy of a chart from the Observability tab on Compute Engine's VM instance details page to one of your custom dashboards.

### "Manage VMs covered by the Ops Agent OS policy \_|\_ Cloud Monitoring \_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- 940df3e9-77fd-470b-84df-53fb24825c4a goog-ops-agent-v2-x86-template-1-0-0-us-central1-b SUCCEEDED 2022-01-28T05:23:41Z. qwareaff-efte-erew-aeet-faer234t4gga To view details about a specific Ops Agent OS policy assignment, run the following command: gcloud compute os-config os-policy-assignments describe POLICY ASSIGNMENT ID --location= ZONE Uninstall the Ops Agent on VMs covered by the Ops Agent OS policy If you manually uninstall the Ops Agent on a VM covered by the Ops Agent OS policy, then the policy re-installs it.
- To show a list of Ops Agent OS policy assignments in a zone, run the following command: gcloud compute os-config os-policy-assignments list --location= ZONE --filter="ASSIGNMENT ID goog-ops-agent" To extend policy coverage to other VMs, use either the Google Cloud console or the gcloud CLI: Console In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- If the VM is covered by an Ops Agent OS policy, then the OS policy id column includes goog-ops-agent-policy and the state is "Compliant". gcloud To display a list of Ops Agent OS policy assignments in a zone, run the following command: gcloud compute os-config os-policy-assignment-reports list --location= ZONE --filter="ASSIGNMENT ID goog-ops-agent" The output shows a list of VMs with an Ops Agent OS policy assignment.
- Console In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .

