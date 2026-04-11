---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.530Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Saved query loading in Log Analytics"
feature_slug: "saved-query-loading-in-log-analytics"
latest_feature_date: "2023-11-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
keywords:
  - "saved"
  - "query"
  - "loading"
  - "in"
  - "log"
  - "analytics"
  - "can"
  - "load"
---

# Saved query loading in Log Analytics

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Log Analytics can load saved queries into the Query pane for editing before execution.

## Extended Definition

Log Analytics can load saved queries into the Query pane for editing before execution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)

## Supporting Pages

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh When running the add-logging-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- To install a specific version of the agent, run: sudo bash add-logging-agent-repo.sh --also-install \ --version= MAJOR VERSION.MINOR VERSION.PATCH VERSION Restart the agent service A restart is required for the configurations that are installed by the catch-all packages above to take effect. sudo service google-fluentd restart You can delete the installation script after it runs successfully.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- You can download up to 10,000 log entries, provided the time to query the logs and perform the download can complete within the timeout for the command.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Home Documentation Observability Cloud Logging Reference Send feedback OpsAnalyticsQuery Stay organized with collections Save and categorize content based on your preferences.
- A query builder configuration used in Log Analytics.
- A Log Analytics SQL query in text format.

