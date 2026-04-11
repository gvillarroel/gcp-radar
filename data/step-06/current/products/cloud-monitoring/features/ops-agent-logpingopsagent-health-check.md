---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.095Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent LogPingOpsAgent health check"
feature_slug: "ops-agent-logpingopsagent-health-check"
latest_feature_date: "2024-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "ops"
  - "agent"
  - "logpingopsagent"
  - "health"
  - "check"
  - "this"
  - "writes"
  - "an"
---

# Ops Agent LogPingOpsAgent health check

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This health check writes an informational payload to the ops-agent-health log every 10 minutes to verify log delivery.

## Extended Definition

This health check writes an informational payload to the ops-agent-health log every 10 minutes to verify log delivery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- To find the status information for an Ops Agent managed by VM Extension Manager, see the following: Agent health checks Agent self logs .
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .

### "Manage VMs covered by the Ops Agent OS policy \_|\_ Cloud Monitoring \_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- To show a list of Ops Agent OS policy assignments in a zone, run the following command: gcloud compute os-config os-policy-assignments list --location= ZONE --filter="ASSIGNMENT ID goog-ops-agent" To extend policy coverage to other VMs, use either the Google Cloud console or the gcloud CLI: Console In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- This document describes how to query those Ops Agent OS policies and manage the Ops Agent on VMs covered by the policies.
- Required permissions for installing the Ops Agent during VM creation: serviceusage.services.get serviceusage.services.enable osconfig.osPolicyAssignments.get osconfig.osPolicyAssignments.create osconfig.projectFeatureSettings.update compute.instances.create Required permissions for installing Ops Agent on existing VMs: serviceusage.services.get serviceusage.services.enable osconfig.osPolicyAssignments.get osconfig.osPolicyAssignments.create osconfig.projectFeatureSettings.update compute.instances.setMetadata compute.instances.setLabels You can find corresponding roles that provide those permissions in the IAM basic and predefined roles reference .
- 940df3e9-77fd-470b-84df-53fb24825c4a goog-ops-agent-v2-x86-template-1-0-0-us-central1-b SUCCEEDED 2022-01-28T05:23:41Z. qwareaff-efte-erew-aeet-faer234t4gga To view details about a specific Ops Agent OS policy assignment, run the following command: gcloud compute os-config os-policy-assignments describe POLICY ASSIGNMENT ID --location= ZONE Uninstall the Ops Agent on VMs covered by the Ops Agent OS policy If you manually uninstall the Ops Agent on a VM covered by the Ops Agent OS policy, then the policy re-installs it.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- Run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force Upgrade the agent To upgrade the Ops Agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.
- Verify that the Ops Agent is running To verify that the Ops Agent is running, you can use either of the following: VM Instances dashboard : This dashboard lets you view the agent installation status across your VM fleet.
- In this case, clicking Install/Update Ops Agent provides a series of commands to run in Cloud Shell.

