---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.110Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent Oracle Database integration"
feature_slug: "ops-agent-oracle-database-integration"
latest_feature_date: "2022-10-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "ops"
  - "agent"
  - "oracle"
  - "database"
  - "integration"
  - "the"
  - "can"
  - "collect"
---

# Ops Agent Oracle Database integration

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Ops Agent can collect Oracle Database logs and metrics.

## Extended Definition

The Ops Agent can collect Oracle Database logs and metrics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- The prometheus target resource has the following labels, which you can use for filtering and manipulating queried data: project id : The identifier of the Google Cloud project, like my-project , in which the Ops Agent is running. location : The Google Cloud region or zone in which the Ops Agent is running; for example, us-east1-a . cluster : Always gce for Prometheus metrics collected by using the Ops Agent. namespace : The Compute Engine instance ID of the VM on which the Ops Agent is running. job : The value of the job name field in the receiver configuration. instance : The instance label of the Prometheus target, taken from the receiver configuration; defaults to the target.
- To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Prometheus metrics in Cloud Monitoring You can use the tools provided by Cloud Monitoring with the data collected by the Prometheus receiver.
- When Prometheus metrics are emitted by an application, directly or by using a library or exporter, the metrics can then be collected by an Ops Agent configured with a Prometheus receiver.
- This document describes the configuration and use of an Ops Agent metrics receiver that you can use to collect metrics from Prometheus on Compute Engine.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- To disable self-log collection, add a global section to your user-specified configuration file and set the default self log file collection option to the value false : logging: ... metrics: ... global: default self log file collection: false Log-rotation configuration Starting with Ops Agent version 2.31.0, you can also set up the agent's log-rotation feature by using the configuration files.
- You can disable the collection of these self logs, starting with Ops Agent version 2.44.0, by using the default self log file collection option.
- This can be used to remove placeholder values, such as: httpRequest.referer : move from : jsonPayload.referer omit if : httpRequest.referer = "-" Sample Configurations The parse json processor would transform a JSON file containing { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } into a LogEntry structure that looks like this: { "jsonPayload" : { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } } This could then be transformed with modify fields into this LogEntry : { "httpRequest" : { "status" : 400 , "requestUrl" : "/index.html" , } } by using this Ops Agent configuration: logging : receivers : in : type : files include paths : - /var/log/http.json processors : parse json : type : parse json set http request : type : modify fields fields : httpRequest.status : move from : jsonPayload.http status type : integer httpRequest.requestUrl : move from : jsonPayload.path httpRequest.referer : move from : jsonPayload.referer omit if : jsonPayload.referer = "-" service : pipelines : pipeline : receivers : [ in ] processors : [ parse json , set http request ] This configuration reads JSON-formatted logs from /var/log/http.json and populates part of the httpRequest structure from fields in the logs.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- The following sections show how to manage the Ops Agent to do the following: Update the pinned version of the agent on all VMs Modify the configuration of the Ops Agent on all VMs Update the pinned version of the Ops Agent on all VMs in a zone To change the pinned version of the Ops Agent on all VMs in a zone, do the following: Console To create a zonal policy, you can use the Google Cloud console.
- Therefore, you can't stop or start the Ops Agent manually, and commands like the following don't work with the Ops Agent: Linux: sudo systemctl [stop start restart] Windows: Stop-Service , Start-Service , Restart-Service To stop or restart an Ops Agent managed by VM Extension Manager, you must uninstall the agent by deleting the extension policy.
- Install the Ops Agent with a custom configuration on all VMs To create a policy that installs the latest version of the Ops Agent on all VMs in a zone or globally, and provides custom configuration for the Ops Agent, do the following: Console To create a zonal policy, you can use the Google Cloud console.

