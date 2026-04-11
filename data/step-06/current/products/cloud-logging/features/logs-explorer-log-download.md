---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.562Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer log download"
feature_slug: "logs-explorer-log-download"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
keywords:
  - "logs"
  - "explorer"
  - "log"
  - "download"
  - "lets"
  - "users"
  - "entries"
  - "in"
---

# Logs Explorer log download

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Explorer lets users download log entries in JSON or CSV to a computer, Google Drive, or a new browser tab.

## Extended Definition

Logs Explorer lets users download log entries in JSON or CSV to a computer, Google Drive, or a new browser tab.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Logs Explorer interface The Logs Explorer interface lets you display log entries, parse and analyze them, and specify query parameters.
- You can also grant a role that contains the logging.logEntries.list permission, which lets a principal view and download logs.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- For information on viewing your logs, see Using the Logs Explorer .
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh When running the add-logging-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Installing a specific version of the agent To install a specific version of the agent, complete the following steps.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- The following command writes a log entry to a folder: gcloud logging write my-folder-log "A folder log entry" --folder= FOLDER ID To find your log entries, look in the Logs Explorer under the Global resource type.
- Examples List all the resource types that have instance in their names: gcloud logging resource - descriptors list -- filter = "type:instance" Result: TYPE DESCRIPTION KEY gce instance A virtual machine instance hosted in Compute Engine . project id , instance id , zone spanner instance A Cloud Spanner instance . project id , instance id , location , instance config redis instance A Redis instance hosted on Google Cloud MemoryStore . project id , region , instance id , node id gce instance group A Compute Engine instance group resource . project id , instance group id , instance group name , location gce instance group manager A Compute Engine instance group manager resource . project id , instance group manager id , instance group manager name , location gce instance template A Compute Engine instance template resource . project id , instance template id , instance template name Routing logs You route logs by creating sinks that send certain log entries to supported destinations.
- The log entries are to be shown in JSON format: gcloud logging read "resource.type=gce instance AND logName=projects/ PROJECT ID /logs/syslog AND textPayload:SyncAddress" -- limit 10 -- format json Following is an example of one returned log entry: { "insertId" : "2024-04-07 08:56:48.137651-07 10.162.32.129 -1509625619" , "logName" : "projects/[PROJECT ID]/logs/syslog" , "resource" : { "labels" : { "instance id" : "15543007601548829999" , "zone" : "global" } , "type" : "gce instance" } , "textPayload" : "Apr 7 15:56:47 my-gce-instance google-address-manager: ERROR SyncAddresses exception: HTTP Error 503: Service Unavailable" , "timestamp" : "2024-04-07T15:56:47.000Z" } To list logs in a folder, add the --folder flag.
- The destination is a new Pub/Sub topic in the current project, and the sink service account, shown in the output of the logging sinks create command, is granted an IAM role that lets the service account publish content to the topic. gcloud pubsub topics create syslog-sink-topic gcloud logging sinks create syslog-sink pubsub.googleapis.com/projects/MY-PROJECT/topics/syslog-sink-topic \ --log-filter="severity>=WARNING" gcloud pubsub topics add-iam-policy-binding syslog-sink-topic \ --member serviceAccount:LOG-SINK-SERVICE-ACCOUNT --role roles/pubsub.publisher Create a sink, folder-logs in a folder FOLDER ID that routes the Admin Activity audit logs from the folder.

