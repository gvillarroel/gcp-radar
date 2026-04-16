---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.420Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Bulk Agent Installation from VM Instances Inventory"
feature_slug: "bulk-agent-installation-from-vm-instances-inventory"
latest_feature_date: "2021-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
keywords:
  - "bulk"
  - "agent"
  - "installation"
  - "vm"
  - "instances"
  - "inventory"
  - "monitoring"
  - "tab"
---

# Bulk Agent Installation from VM Instances Inventory

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Cloud Monitoring VM Instances Inventory tab can generate installation commands to install Logging and Monitoring agents on multiple VMs.

## Extended Definition

The Cloud Monitoring VM Instances Inventory tab can generate installation commands to install Logging and Monitoring agents on multiple VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- However, the status might be inaccurate if the VM lacks necessary access scopes or if the associated service account has insufficient IAM roles. gcpdiag : gcpdiag provides more reliable and robust information about agent status than the VM Instances dashboard, verifying both agent installation and transmission of telemetry from the VM.
- Verify that the Ops Agent is running To verify that the Ops Agent is running, you can use either of the following: VM Instances dashboard : This dashboard lets you view the agent installation status across your VM fleet.
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.

### Use agent policies (GA) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The prepare-for-ops-agents-policies.sh script The diagnose policies.sh script The prepare-for-ops-agents-policies.sh script After you download the prepare-for-ops-agents-policies.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- To find values for the osShortName and osVersion fields for a VM, use the following commands: gcloud compute instances os-inventory describe INSTANCE NAME \ --zone ZONE grep "^ShortName: " gcloud compute instances os-inventory describe INSTANCE NAME \ --zone ZONE grep "^Version: " These commands require the OS Config agent to be installed on the VM.
- Cloud Monitoring VM Instances page The VM Instances page in Cloud Monitoring includes an Agent column that lists the agent installed on each VM, and for the Ops Agent, includes an indicator for installed agents that are older than the latest version.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-policy-access= [admin editor viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-policy-access= [admin editor viewer] The diagnose policies.sh script Given a project ID, a Compute Engine instance ID, a Compute Engine zone, and the agent policy ID, the diagnose policies.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS policy assignment The OS policy assignments that are applicable to this Compute Engine instance A description of this Compute Engine instance To invoke the script, run the following command: bash diagnose policies.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID \ --zone= ZONE Pricing The gcloud compute instances ops-agents policies commands are implemented by using OS policy assignment resources from VM Manager .

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing agent information by using the Google Cloud console You can find status information about the agent on the pre-configured Monitoring VM Instances dashboard.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh When running the add-logging-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- To install a specific version of the agent, run: sudo bash add-logging-agent-repo.sh --also-install \ --version= MAJOR VERSION.MINOR VERSION.PATCH VERSION Restart the agent service A restart is required for the configurations that are installed by the catch-all packages above to take effect. sudo service google-fluentd restart You can delete the installation script after it runs successfully.
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent, as shown in the following screenshot: The Agent column reports the following values: Not detected : Either you don't have an agent installed or it is not running.

