---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.562Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent"
feature_slug: "ops-agent"
latest_feature_date: "2020-10-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview"
keywords:
  - "ops"
  - "agent"
  - "is"
  - "unified"
  - "for"
  - "collecting"
  - "logs"
  - "and"
---

# Ops Agent

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent is a unified agent for collecting logs and metrics on Compute Engine instances.

## Extended Definition

Ops Agent is a unified agent for collecting logs and metrics on Compute Engine instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Verify that the Ops Agent is collecting telemetry If the Ops Agent has been successfully installed and is running correctly, then it sends metrics to Cloud Monitoring and logs to Cloud Logging.
- When the Ops Agent has been installed on the VM and is collecting logs and metrics, the agent's status is marked with a green checkmark next to the Ops Agent label.

### "Use log rotation for Ops Agent self logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Trigger the agent self log file to be larger than 1K by restarting the agent a few times: sudo service google-cloud-ops-agent restart Wait for the crontab or systemd timer to take effect to trigger the logrotate utility, or trigger the logrotate utility manually by running this command: sudo logrotate /etc/logrotate.d/google-cloud-ops-agent.conf Verify that you see rotated log files in the /var/log/google-cloud-ops-agent/subagents/ directory.
- Home Documentation Observability Cloud Logging Guides Send feedback Use log rotation for Ops Agent self logs Stay organized with collections Save and categorize content based on your preferences.
- The result, specifying all options and default values, looks like the following: logging: ... metrics: ... global: default self log file rotation: enabled: true max file size megabytes: 400 backup count: 1 Example configurations To disable log rotation by the Ops Agent, specify the enabled option with the value false : logging: ... metrics: ... global: default self log file rotation: enabled: false To rotate the log when the log file reaches 20 MB and keep 5 backups (6 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 20 backup count: 5 To rotate the log when the log file reaches 2,000 MB (2 GB) and keep 1 backup (2 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 2000 To rotate the log when the log file reaches 400 MB and keep 2 backups (3 files total): logging: ... metrics: ... global: default self log file rotation: backup count: 2 If you make frequent changes as you refine your log-rotation configuration, remember to restart the agent to apply your changes.
- This effectively limits the disk space used by the Ops Agent self log files. rotate 30 Log files are rotated when they grow bigger than maxsize even before the additionally specified time interval maxsize 256 M Skip rotation if the log file is missing. missingok Do not rotate the log if it is empty. notifempty Old versions of log files are compressed with gzip by default. compress Postpone compression of the previous log file to the next rotation cycle. delaycompress } EOF Set up crontab or systemd timer to trigger the logrotate utility periodically.

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This section describes the differences between the beta and GA agent policies For information about creating and managing agent policies, see the following: Use agent policies (GA) Use agent policies (beta) Differences between beta and GA agent policies The beta and GA agent policies differ in the following ways: Creation mechanisms Beta agent policies are created by using the following: The gcloud beta compute instances ops-agents policies command group in the Google Cloud SDK.
- What's next For information about using agent policies to manage the Ops Agent, see the following: Use agent policies (GA) Use agent policies (beta) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Delete the beta agent policy by running the following command: gcloud beta compute instances ops-agents policies delete POLICY ID --project PROJECT ID You might not be able to write a GA agent policy for the Ops Agent that is exactly the same as an existing beta agent policy.
- You can create a policy for a Google Cloud project that governs existing and new VMs associated with that Google Cloud project, ensuring proper installation and uninstallation of the Ops Agent on those VMs.

