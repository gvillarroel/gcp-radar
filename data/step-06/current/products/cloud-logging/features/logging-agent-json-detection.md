---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.480Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging agent JSON detection"
feature_slug: "logging-agent-json-detection"
latest_feature_date: "2017-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies"
keywords:
  - "logging"
  - "agent"
  - "json"
  - "detection"
  - "version"
  - "18"
  - "allows"
  - "enabled"
---

# Logging agent JSON detection

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logging agent version 1.5.18-1 allows JSON detection to be enabled through configuration.

## Extended Definition

Logging agent version 1.5.18-1 allows JSON detection to be enabled through configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)

## Supporting Pages

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON log field LogEntry field Cloud Logging agent function Example value severity severity The Logging agent attempts to match a variety of common severity strings, which includes the list of LogSeverity strings recognized by the Logging API. "severity":"ERROR" message textPayload (or part of jsonPayload ) The message that appears on the log entry line in the Logs Explorer. "message":"There was an error in the application." Note : message is saved as textPayload if it is the only field remaining after the Logging agent moves the other special-purpose fields and detect json wasn't enabled; otherwise message remains in jsonPayload . detect json is not applicable to managed logging environments like Google Kubernetes Engine.
- For more information, see traceSampled on the LogEntry page. "logging.googleapis.com/trace sampled": false Time-related fields In general, time-related information about a log entry is stored in the timestamp field of the LogEntry object: { insertId: "1ad8d08f-6529-47ea-832e-467f869a2da4" ... resource: {2} timestamp: "2023-10-30T16:33:15.505196Z" } When the source for a log entry is structured data, the Logging agent uses the following rules to search the fields in the jsonPayload entry for time-related information: Search for a timestamp field that is a JSON object that includes the seconds and nanos fields, representing, respectively, a signed number of seconds from the UTC epoch and a nonnegative number of fractional seconds: jsonPayload: { ... "timestamp": { "seconds": CURRENT SECONDS, "nanos": CURRENT NANOS } } If the previous search fails, then search for a pair of timestampSeconds and timestampNanos fields: jsonPayload: { ... "timestampSeconds": CURRENT SECONDS, "timestampNanos": CURRENT NANOS } If the previous search fails, then search for a time field that is a string in RFC 3339 format: jsonPayload: { ... "time": CURRENT TIME RFC3339 } When time-related information is found, the Logging agent uses that information to set the value of the LogEntry.timestamp , and it doesn't copy that information from the structured record into the LogEntry.jsonPayload object.
- To send logs via the fluentd in forward plugin, read the following instructions: Execute the following command on the VM with the Logging agent installed: echo '{"code": "send-log-via-fluent-cat", "message": "This is a log from in forward plugin."}' /opt/google-fluentd/embedded/bin/fluent-cat log-via-in-forward-plugin Check the Logs Explorer to see the ingested log entry: { insertId: "1kvvmhsg1ib4689" jsonPayload: { code: "send-log-via-fluent-cat" message: "This is a log from in forward plugin." } labels: { compute.googleapis.com/resource name: "add-structured-log-resource" } logName: "projects/my-sample-project-12345/logs/log-via-in-forward-plugin" receiveTimestamp: "2018-03-21T02:11:27.981020900Z" resource: { labels: { instance id: "5351724540900470204" project id: "my-sample-project-12345" zone: "us-central1-c" } type: "gce instance" } timestamp: "2018-03-21T02:11:22.717692494Z" } Streaming structured (JSON) log records from application code You can enable connectors in various languages to send structured logs from application code; for more information, review the fluentd documentation .
- In addition, the following Prometheus metrics are exposed by the output plugin in prometheus mode: uptime with a version label: Uptime of the Logging agent. stackdriver successful requests count with grpc and code labels: The number of successful requests to the Logging API. stackdriver failed requests count with grpc and code labels: The number of failed requests to the Logging API, broken down by the error code. stackdriver ingested entries count with grpc and code labels: The number of log entries ingested by the Logging API. stackdriver dropped entries count with grpc and code labels: The number of log entries rejected by the Logging API. stackdriver retried entries count with grpc and code labels: The number of log entries that failed to be ingested by the Google Cloud fluentd output plugin due to a transient error and were retried. prometheus and prometheus monitor plugin configuration Note: The following default monitoring configuration is exclusive to Linux operating systems.

### Use agent policies (beta) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- To verify that the OS Config metadata is enabled, you can run the following command: gcloud compute project-info describe \ --project PROJECT ID \ grep "enable-osconfig\ enable-guest-attributes" -A 1 The expected output follows: - key: enable-guest-attributes value: 'TRUE' - key: enable-osconfig value: 'TRUE' Observability agents are installed, but not functioning properly For information about debugging specific agents, see the following documents: Troubleshoot the Ops Agent Troubleshoot the legacy Logging agent Troubleshoot the legacy Monitoring agent Enable debug-level logs for the OS Config agent It can be useful to enable debug-level logging in the OS Config agent when reporting an issue.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Linux To verify that the OS Config agent is installed, run the following command: gcloud compute ssh instance-id \ --project project-id \ -- sudo systemctl status google-osconfig-agent A sample output is: google-osconfig-agent.service - Google OSConfig Agent Loaded: loaded (/lib/systemd/system/google-osconfig-agent.service; enabled; vendor preset: Active: active (running) since Wed 2020-01-15 00:14:22 UTC; 6min ago Main PID: 369 (google osconfig) Tasks: 8 (limit: 4374) Memory: 102.7M CGroup: /system.slice/google-osconfig-agent.service └─369 /usr/bin/google osconfig agent Windows To verify that the OS Config agent is installed, run the following steps: Connect to your instance using RDP or a similar tool and login to Windows.
- Here is an example of a phased rollout plan for Debian 11 VMs in a project called my project : Phase 1: Create a policy named ops-agents-policy-safe-rollout to install the Ops Agent on all VMs with the labels env=test and app=myproduct . gcloud beta compute instances \ ops - agents policies create ops - agents - policy - safe - rollout \ -- agent - rules = "type=ops-agent,version=current-major,package-state=installed,enable-autoupgrade=true" \ -- os - types = short - name = debian , version = 11 \ -- group - labels = env = test , app = myproduct \ -- project = my project For more information about specifying the operating system, see gcloud beta compute instances ops-agents policies create .

### Use agent policies (GA) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-policy-access= [admin editor viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-policy-access= [admin editor viewer] The diagnose policies.sh script Given a project ID, a Compute Engine instance ID, a Compute Engine zone, and the agent policy ID, the diagnose policies.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS policy assignment The OS policy assignments that are applicable to this Compute Engine instance A description of this Compute Engine instance To invoke the script, run the following command: bash diagnose policies.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID \ --zone= ZONE Pricing The gcloud compute instances ops-agents policies commands are implemented by using OS policy assignment resources from VM Manager .
- The examples assume that you put the YAML in a file named agent-policy-description.yaml and that you create the policy in the us-central1-a zone by using a command like the following: gcloud compute instances ops-agents policies create POLICY ID \ --zone us-central1-a \ --file agent-policy-description.yaml \ --project PROJECT ID Install on all VMs To install the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : all : True Remove from all VMs To remove the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : removed version : latest instanceFilter : all : True Install on VMs based on labels To install the latest version of the Ops Agent on all VMs in the us-central1-a zone with the label "env=prod" or "app=web", use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : inclusionLabels : - labels : env : prod - labels : app : web When you specify multiple labels: entries for inclusion or exclusion, a VM matches if any of the labels is present; that is, the sets of labels for inclusion or exclusion are matched as a logical OR operation, not a logical AND operation.
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The prepare-for-ops-agents-policies.sh script The diagnose policies.sh script The prepare-for-ops-agents-policies.sh script After you download the prepare-for-ops-agents-policies.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- Linux To verify that the OS Config agent is installed, run the following command: gcloud compute ssh instance-id \ --project project-id \ -- sudo systemctl status google-osconfig-agent A sample output is: google-osconfig-agent.service - Google OSConfig Agent Loaded: loaded (/lib/systemd/system/google-osconfig-agent.service; enabled; vendor preset: Active: active (running) since Wed 2020-01-15 00:14:22 UTC; 6min ago Main PID: 369 (google osconfig) Tasks: 8 (limit: 4374) Memory: 102.7M CGroup: /system.slice/google-osconfig-agent.service └─369 /usr/bin/google osconfig agent Windows To verify that the OS Config agent is installed, run the following steps: Connect to your instance using RDP or a similar tool and login to Windows.

