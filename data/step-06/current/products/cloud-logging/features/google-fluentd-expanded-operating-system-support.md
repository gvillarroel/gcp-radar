---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.507Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "google-fluentd expanded operating system support"
feature_slug: "google-fluentd-expanded-operating-system-support"
latest_feature_date: "2015-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
keywords:
  - "fluentd"
  - "expanded"
  - "operating"
  - "system"
  - "logging"
  - "agent"
  - "supports"
  - "additional"
---

# google-fluentd expanded operating system support

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The google-fluentd logging agent supports additional operating systems including Debian, Ubuntu, Red Hat, and CentOS.

## Extended Definition

The google-fluentd logging agent supports additional operating systems including Debian, Ubuntu, Red Hat, and CentOS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)

## Supporting Pages

### Use agent policies (GA) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the operating system supports VM Manager, then you can install the OS Config agent manually.
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The prepare-for-ops-agents-policies.sh script The diagnose policies.sh script The prepare-for-ops-agents-policies.sh script After you download the prepare-for-ops-agents-policies.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- To apply the agent policy to a specific set of VMs in a zone, describe the VMs by using a combination of any of the following: Labels on the VM, either for inclusion or exclusion: inclusionLabels: exclusionLabels: Operating system: inventories: For example, the following filter applies the agent policy to the VMs with the specified operating systems that have the label "env=prod" and don't have the label "app=web": instanceFilter : inclusionLabels : - labels : env : prod exclusionLabels : - labels : app : web inventories : - osShortName : rhel osVersion : '7. ' - osShortName : debian osVersion : '11' For information about finding the operating-system values, see Find operating system information .
- Install on VMs based on operating system To install the latest version 2 of the Ops Agent on all VMs running Debian 11 or RHEL 7. in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : 2. . instanceFilter : inventories : - osShortName : rhel osVersion : '7. ' - osShortName : debian osVersion : '11' Terraform This section describes the examples in the examples directory of the terraform-google-cloud-operations repository.

### Use agent policies (beta) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the operating system supports VM Manager, then you can install the OS Config agent manually.
- Here is an example of a phased rollout plan for Debian 11 VMs in a project called my project : Phase 1: Create a policy named ops-agents-policy-safe-rollout to install the Ops Agent on all VMs with the labels env=test and app=myproduct . gcloud beta compute instances \ ops - agents policies create ops - agents - policy - safe - rollout \ -- agent - rules = "type=ops-agent,version=current-major,package-state=installed,enable-autoupgrade=true" \ -- os - types = short - name = debian , version = 11 \ -- group - labels = env = test , app = myproduct \ -- project = my project For more information about specifying the operating system, see gcloud beta compute instances ops-agents policies create .
- Get-Service google osconfig agent A sample output is: Status Name DisplayName ------ ---- ----------- Running google osconfig a… Google OSConfig Agent If the OS Config agent is not installed, then you might be using an operating system that doesn't support VM Manager.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, the following Prometheus metrics are exposed by the output plugin in prometheus mode: uptime with a version label: Uptime of the Logging agent. stackdriver successful requests count with grpc and code labels: The number of successful requests to the Logging API. stackdriver failed requests count with grpc and code labels: The number of failed requests to the Logging API, broken down by the error code. stackdriver ingested entries count with grpc and code labels: The number of log entries ingested by the Logging API. stackdriver dropped entries count with grpc and code labels: The number of log entries rejected by the Logging API. stackdriver retried entries count with grpc and code labels: The number of log entries that failed to be ingested by the Google Cloud fluentd output plugin due to a transient error and were retried. prometheus and prometheus monitor plugin configuration Note: The following default monitoring configuration is exclusive to Linux operating systems.
- Windows: C:\Program Files (x86)\Stackdriver\LoggingAgent\fluent.conf If you are running a Logging agent before v1-5, the location is: C:\GoogleStackdriverLoggingAgent\fluent.conf Syslog configuration Note: The following default syslog configuration, as part of the google-fluentd-catch-all-config package, is exclusive to Linux operating systems.
- When the agent is configured to ingest JSON content, the input must be formatted so that each JSON object is on a newline: {"name" : "zeeshan", "age" : 28} {"name" : "reeba", "age" : 15} To configure the Logging agent to ingest JSON formatted content, do the following: From the Linux command prompt, create a log file: touch /tmp/test-structured-log.log Create a new configuration file labeled test-structured-log.conf in the additional configuration directory /etc/google-fluentd/config.d : sudo tee /etc/google-fluentd/config.d/test-structured-log.conf <<EOF < source > @type tail <parse> 'json' indicates the log is structured (JSON). @type json </parse> The path of the log file. path /tmp/test-structured-log.log The path of the position file that records where in the log file we have processed already.
- To send logs via the fluentd in forward plugin, read the following instructions: Execute the following command on the VM with the Logging agent installed: echo '{"code": "send-log-via-fluent-cat", "message": "This is a log from in forward plugin."}' /opt/google-fluentd/embedded/bin/fluent-cat log-via-in-forward-plugin Check the Logs Explorer to see the ingested log entry: { insertId: "1kvvmhsg1ib4689" jsonPayload: { code: "send-log-via-fluent-cat" message: "This is a log from in forward plugin." } labels: { compute.googleapis.com/resource name: "add-structured-log-resource" } logName: "projects/my-sample-project-12345/logs/log-via-in-forward-plugin" receiveTimestamp: "2018-03-21T02:11:27.981020900Z" resource: { labels: { instance id: "5351724540900470204" project id: "my-sample-project-12345" zone: "us-central1-c" } type: "gce instance" } timestamp: "2018-03-21T02:11:22.717692494Z" } Streaming structured (JSON) log records from application code You can enable connectors in various languages to send structured logs from application code; for more information, review the fluentd documentation .

