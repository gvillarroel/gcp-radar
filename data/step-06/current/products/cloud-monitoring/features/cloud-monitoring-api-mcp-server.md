---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.074Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Cloud Monitoring API MCP server"
feature_slug: "cloud-monitoring-api-mcp-server"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/authorization"
keywords:
  - "monitoring"
  - "api"
  - "mcp"
  - "server"
  - "the"
  - "lets"
  - "agents"
  - "and"
---

# Cloud Monitoring API MCP server

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Cloud Monitoring API MCP server lets agents and AI applications interact with time series data.

## Extended Definition

The Cloud Monitoring API MCP server lets agents and AI applications interact with time series data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/authorization](https://docs.cloud.google.com/monitoring/agent/monitoring/authorization)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following documents: Google Cloud console: Charts with SQL queries API: Charts with SQL queries February 06, 2026 Feature You can use the Cloud Monitoring API MCP server to let agents and AI applications interact with your time series data.
- For more information, see the following documents: Display the most recent data in tabular form API Example: Dashboard with a TimeSeriesTable widget September 06, 2024 Feature The Metrics management page in Cloud Monitoring now shows you the sources of metric reads and lets you exclude unneeded metrics entirely, eliminating the cost of ingesting them.
- The API, part of the Stackdriver Monitoring API , lets you create, edit, and manage uptime checks .
- The API, part of the Stackdriver Monitoring API , lets you create and edit uptime checks .

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring APIs: monitoring.googleapis.com Installing the agent requires access to the following DNS names: (Linux) Google Cloud package repository: packages.cloud.google.com (Linux) Google downloads subdomain: dl.google.com (Windows) Legacy Stackdriver download server: repo.stackdriver.com Getting the Monitoring agent source code The source code for the Monitoring agent is available for only the Linux-hosted Monitoring agent.
- Windows operating systems: All versions of the Monitoring agent support the following Windows operating systems: Windows Server 2019 Windows Server Core 2019 Windows Server 2016 Windows Server Core 2016 The Monitoring agent does not presently support Windows Server Core 2019 for containers.
- Agent access requirements Running the agent requires access to the following DNS names: OAuth2 token server: oauth2.googleapis.com Earlier versions of the agent may require access to www.googleapis.com (full URL: https://www.googleapis.com/oauth2/v3/token ).
- However, if you have to run the legacy Logging agent on Windows and also need to collect metrics, you must use the legacy Monitoring agent; you can't run the Ops Agent and a legacy agent on the same machine.

### Authorize the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/authorization](https://docs.cloud.google.com/monitoring/agent/monitoring/authorization)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If https://www.googleapis.com/auth/cloud-platform isn't listed, then you require two access scopes, one from each of the following "logging" and "monitoring" pairs: https://www.googleapis.com/auth/logging.write or https://www.googleapis.com/auth/logging.admin https://www.googleapis.com/auth/monitoring.write or https://www.googleapis.com/auth/monitoring.admin To modify your access scopes, do the following: In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- For Stackdriver Logging API and Stackdriver Monitoring API entries, select the Write Only .
- In PowerShell, run the following commands as administrator to set the GOOGLE APPLICATION CREDENTIALS system environment variable for the Ops Agent to use: [ Environment ]:: SetEnvironmentVariable ( "GOOGLE APPLICATION CREDENTIALS" , " PATH TO CREDENTIAL FILE " , "Machine" ) Restart the agent by running the following command on your VM instance: Restart-Service -Name StackdriverMonitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Linux Edit the following configuration file, or create the file if it doesn't exist: /etc/default/stackdriver-agent Add the following to the configuration file: GOOGLE APPLICATION CREDENTIALS = PATH TO CREDENTIAL FILE Restart the agent by running the following command on your VM instance: sudo service stackdriver-agent restart Windows Note: Service account key files aren't supported by the Monitoring agent for Compute Engine VMs running Windows.

