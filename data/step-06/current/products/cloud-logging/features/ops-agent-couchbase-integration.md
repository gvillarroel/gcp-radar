---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.542Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent Couchbase integration"
feature_slug: "ops-agent-couchbase-integration"
latest_feature_date: "2022-07-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
keywords:
  - "ops"
  - "agent"
  - "couchbase"
  - "integration"
  - "can"
  - "collect"
  - "logs"
  - "and"
---

# Ops Agent Couchbase integration

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent can collect Couchbase logs and metrics.

## Extended Definition

Ops Agent can collect Couchbase logs and metrics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Verify that the Ops Agent is collecting telemetry If the Ops Agent has been successfully installed and is running correctly, then it sends metrics to Cloud Monitoring and logs to Cloud Logging.
- When the Ops Agent has been installed on the VM and is collecting logs and metrics, the agent's status is marked with a green checkmark next to the Ops Agent label.
- Running the Ops Agent and the legacy agents on the same VM can cause ingestion of duplicate logs or conflicts in metrics ingestion.
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.

### Couchbase \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You must restart the agent for the configuration to take effect. set -e Check if the file exists if [ ! -f /etc/google-cloud-ops-agent/config.yaml ]; then Create the file if it doesn't exist. sudo mkdir -p /etc/google-cloud-ops-agent sudo touch /etc/google-cloud-ops-agent/config.yaml fi Create a back up of the existing file so existing configurations are not lost. sudo cp /etc/google-cloud-ops-agent/config.yaml /etc/google-cloud-ops-agent/config.yaml.bak Configure the Ops Agent. sudo tee /etc/google-cloud-ops-agent/config.yaml > /dev/null << EOF metrics: receivers: couchbase: type: couchbase username: admin password: password To use the googlesecretmanager provider to replace plaintext passwords, refer to the example below. password: ${ googlesecretmanager : projects / < project - id > / secrets / < secret - id > / versions / < version - id > } collection interval: 30s service: pipelines: couchbase: receivers: - couchbase logging: receivers: couchbase general: type: couchbase general couchbase http access: type: couchbase http access couchbase goxdcr: type: couchbase goxdcr service: pipelines: couchbase: receivers: - couchbase general - couchbase http access - couchbase goxdcr EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- Configure the Ops Agent for Couchbase Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from Couchbase instances, and restart the agent .
- Example configuration The following commands create the configuration to collect and ingest telemetry for Couchbase: Configures Ops Agent to collect telemetry from the app.
- Any dashboards are automatically installed after you configure the integration and the Ops Agent has begun collecting metric data.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- This can be used to remove placeholder values, such as: httpRequest.referer : move from : jsonPayload.referer omit if : httpRequest.referer = "-" Sample Configurations The parse json processor would transform a JSON file containing { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } into a LogEntry structure that looks like this: { "jsonPayload" : { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } } This could then be transformed with modify fields into this LogEntry : { "httpRequest" : { "status" : 400 , "requestUrl" : "/index.html" , } } by using this Ops Agent configuration: logging : receivers : in : type : files include paths : - /var/log/http.json processors : parse json : type : parse json set http request : type : modify fields fields : httpRequest.status : move from : jsonPayload.http status type : integer httpRequest.requestUrl : move from : jsonPayload.path httpRequest.referer : move from : jsonPayload.referer omit if : jsonPayload.referer = "-" service : pipelines : pipeline : receivers : [ in ] processors : [ parse json , set http request ] This configuration reads JSON-formatted logs from /var/log/http.json and populates part of the httpRequest structure from fields in the logs.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.
- To disable self-log collection, add a global section to your user-specified configuration file and set the default self log file collection option to the value false : logging: ... metrics: ... global: default self log file collection: false Log-rotation configuration Starting with Ops Agent version 2.31.0, you can also set up the agent's log-rotation feature by using the configuration files.
- The valid types are: files : Collect logs by tailing files on disk. fluent forward (Ops Agent versions 2.12.0 and later): Collect logs sent via the Fluent Forward protocol over TCP. tcp (Ops Agent versions 2.3.0 and later): Collect logs in JSON format by listening to a TCP port.

