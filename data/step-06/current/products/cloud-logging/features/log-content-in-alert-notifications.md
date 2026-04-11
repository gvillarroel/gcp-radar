---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.540Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log content in alert notifications"
feature_slug: "log-content-in-alert-notifications"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
keywords:
  - "log"
  - "content"
  - "in"
  - "alert"
  - "notifications"
  - "can"
  - "dynamically"
  - "include"
---

# Log content in alert notifications

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Alert notifications can dynamically include extracted log content for troubleshooting.

## Extended Definition

Alert notifications can dynamically include extracted log content for troubleshooting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)

## Supporting Pages

### Internet Information Services \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Detailed fields inside the LogEntry are as follows. iis access logs contain the following fields in the LogEntry : Field Type Description httpRequest.referer string Contents of the Referer header httpRequest.remoteIp string IP of the client that made the request httpRequest.requestMethod string HTTP method httpRequest.requestUrl string Request URL (typically just the path part of the URL) httpRequest.serverIp string The server's IP and port that was requested httpRequest.status number HTTP status code httpRequest.userAgent string Contents of the User-Agent header jsonPayload.sc substatus number The substatus error code jsonPayload.sc win32 status number The Windows status code jsonPayload.time taken number The length of time that the action took, in milliseconds jsonPayload.user string Authenticated username for the request timestamp string ( Timestamp ) Time the request was received Configure v1 metrics collection The Ops Agent on a Microsoft Windows VM automatically collects IIS v1 metrics.
- Add - Content ' C : \ Program Files \ Google \ Cloud Operations \ Ops Agent \ config \ config . yaml ' " metrics: receivers: iis v2: type: iis receiver version: 2 service: pipelines: iispipeline: receivers: - iis v2 logging: receivers: iis access: type: iis access service: pipelines: iis: receivers: - iis access " if ( Get - Service google - cloud - ops - agent - ErrorAction SilentlyContinue ) { ( Get - Service google - cloud - ops - agent ).
- A wild card ( ) can be used in the paths; for example, C:\inetpub\logs\LogFiles\W3SVC1\u ex . type The value must be iis access . record log file path false If set to true , then the path to the specific file from which the log record was obtained appears in the output log entry as the value of the agent.googleapis.com/log file path label.
- To configure a receiver for your iis access logs, specify the following fields: Field Default Description exclude paths [] A list of filesystem path patterns to exclude from the set matched by include paths . include paths ['C:\inetpub\logs\LogFiles\W3SVC1\u ex '] A list of filesystem paths to read by tailing each file.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- View or hide log entries that match a field You can view or hide log entries that match a field in a log entry, which lets you focus on entries that contain the same field content.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh When running the add-logging-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- To install a specific version of the agent, run: sudo bash add-logging-agent-repo.sh --also-install \ --version= MAJOR VERSION.MINOR VERSION.PATCH VERSION Restart the agent service A restart is required for the configurations that are installed by the catch-all packages above to take effect. sudo service google-fluentd restart You can delete the installation script after it runs successfully.

