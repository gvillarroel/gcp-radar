---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.164Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "View Logs from Charts"
feature_slug: "view-logs-from-charts"
latest_feature_date: "2015-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "view"
  - "logs"
  - "from"
  - "charts"
  - "include"
  - "option"
  - "in"
  - "their"
---

# View Logs from Charts

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Charts include a View Logs option in their settings menu.

## Extended Definition

Charts include a View Logs option in their settings menu.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- The App Hub Type column displays the App Hub registration type : Service ( ) Workload ( ) The Functional Type column displays the App Hub functional type : Agent ( robot 2 ) MCP server ( ) From the Services and Workloads tab, you can do all of the following: Modify the data the table displays by using the view column Columns button.
- To open the flyout that displays both metric and log data, do one of the following: To filter log data only by the resource type and applicable variables, in the chart's toolbar, click more vert More chart options , and then select Inspect related logs .
- View chart configuration To view details like the metric type and the aggregation options for a chart that displays metric data, go to the toolbar of a chart or table, and then click info Information .

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- September 29, 2015 Feature Charts now have a View Logs option in their settings menu.
- You can select the time window for the charts and view the corresponding logs from the integrated logs viewer panel.
- September 10, 2018 Change "Stackdriver accounts" have been renamed "Workspaces" to reflect their use as a "single pane of glass" through which you view resources from multiple projects and AWS accounts.
- Feature Observability for Google Kubernetes Engine: Charts on the Observability tab for each of your GKE clusters and workloads now includes an optional fleet ID filter, where applicable.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent, as shown in the following screenshot: The Agent column reports the following values: Not detected : Either you don't have an agent installed or it is not running.
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent.
- However, the status might be inaccurate if the VM lacks necessary access scopes or if the associated service account has insufficient IAM roles. gcpdiag : gcpdiag provides more reliable and robust information about agent status than the VM Instances dashboard, verifying both agent installation and transmission of telemetry from the VM.
- Reload the environment variables: sudo systemctl daemon - reload Restart the agent by running the following command on your VM instance: sudo systemctl restart google-cloud-ops-agent" " Windows If you use an HTTP proxy, run the following command from an administrator command prompt.

