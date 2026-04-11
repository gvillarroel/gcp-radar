---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.560Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Severity Breakdown in Histogram"
feature_slug: "log-severity-breakdown-in-histogram"
latest_feature_date: "2021-03-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "log"
  - "severity"
  - "breakdown"
  - "in"
  - "histogram"
  - "logging"
  - "shows"
  - "the"
---

# Log Severity Breakdown in Histogram

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging shows the distribution of log severity levels in the Logs Explorer histogram pane.

## Extended Definition

Cloud Logging shows the distribution of log severity levels in the Logs Explorer histogram pane.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Run one of the following commands, depending on your Linux distribution: YUM: sudo yum remove -y google-fluentd-catch-all-config sudo yum install -y google-fluentd-catch-all-config-structured sudo service google-fluentd restart APT: sudo apt-get remove -y google-fluentd-catch-all-config sudo apt-get install -y google-fluentd-catch-all-config-structured sudo service google-fluentd restart For information about structured logging, refer to the structured logging guide.
- Run the following PowerShell command: Restart-Service -Name StackdriverLogging Upgrade the agent To upgrade the Logging agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.

### "Interface Logging (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging)
- Source ID: `site-java-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example of creating the exclusion: { @code String exclusionName = "my exclusion name"; Exclusion exclusion = Exclusion.of(exclusionName, "resource.type=gcs bucket severity<ERROR sample(insertId, 0.99)"); Exclusion exclusion = logging.create(exclusion); } Parameter Name Description exclusion Exclusion Returns Type Description Exclusion the created exclusion create(MetricInfo metric) public abstract Metric create ( MetricInfo metric ) Creates a new metric.
- String metricName = "my metric name" ; MetricInfo metricInfo = MetricInfo . newBuilder ( metricName , "severity>=ERROR" ). setDescription ( "new description" ) . build (); Metric metric = logging . update ( metricInfo ); Parameter Name Description metric MetricInfo Returns Type Description Metric the created metric update(SinkInfo sink) public abstract Sink update ( SinkInfo sink ) Updates a sink or creates one if it does not exist.
- Example of creating a metric for logs with severity higher or equal to ERROR. { @code String metricName = "my metric name"; MetricInfo metricInfo = MetricInfo.of(metricName, "severity>=ERROR"); Metric metric = logging.create(metricInfo); } Parameter Name Description metric MetricInfo Returns Type Description Metric the created metric create(SinkInfo sink) public abstract Sink create ( SinkInfo sink ) Creates a new sink.
- V2 ). setFilter ( "severity>=ERROR" ). build (); Sink sink = logging . update ( sinkInfo ); Parameter Name Description sink SinkInfo Returns Type Description Sink the created sink updateAsync(Exclusion exclusion) public abstract ApiFuture<Exclusion> updateAsync ( Exclusion exclusion ) Sends a request to change one or more properties of an existing exclusion.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each bar contains a three-color breakdown for the log-severity levels captured in each bar's time range.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- Get started To begin using the Logs Explorer, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Query returns an error If you issue a query over a resource without specifying a bucket, then Cloud Logging uses the history of the sinks in the Google Cloud project to determine where entries might have been written for that resource.

