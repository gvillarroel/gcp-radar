---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.975Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM dashboard monitoring agent status"
feature_slug: "vm-dashboard-monitoring-agent-status"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "vm"
  - "dashboard"
  - "monitoring"
  - "agent"
  - "status"
  - "instances"
  - "inventory"
  - "table"
---

# VM dashboard monitoring agent status

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Monitoring VM Instances dashboard inventory table includes a Monitoring Agent Status column.

## Extended Definition

The Monitoring VM Instances dashboard inventory table includes a Monitoring Agent Status column.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- However, the status might be inaccurate if the VM lacks necessary access scopes or if the associated service account has insufficient IAM roles. gcpdiag : gcpdiag provides more reliable and robust information about agent status than the VM Instances dashboard, verifying both agent installation and transmission of telemetry from the VM.
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent, as shown in the following screenshot: The Agent column reports the following values: Not detected : Either you don't have an agent installed or it is not running.
- Verify that the Ops Agent is running To verify that the Ops Agent is running, you can use either of the following: VM Instances dashboard : This dashboard lets you view the agent installation status across your VM fleet.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- These policies can't manage versions of the Ops Agent earlier than version 2.58.0, Ops Agent instances installed by using other means, or any version of the legacy Monitoring agent or Logging agent .
- To determine the version of the installed agent, hover over the Ops Agent label on the Compute Engine or Monitoring dashboard.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Viewing agent information by using the Google Cloud console You can find status information about the agent on the pre-configured Monitoring VM Instances dashboard.
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent, as shown in the following screenshot: The Agent column reports the following values: Not detected : Either you don't have an agent installed or it is not running.
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.
- If the following scenario applies to you, then you might not have the proper credentials and must complete the Authorize the Monitoring agent procedures: Running very old Compute Engine instances or Compute Engine instances created without the default credentials.

