---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.072Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS Account Monitoring"
feature_slug: "aws-account-monitoring"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/authorization"
keywords:
  - "aws"
  - "account"
  - "monitoring"
  - "can"
  - "monitor"
  - "amazon"
  - "web"
  - "accounts"
---

# AWS Account Monitoring

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring can monitor Amazon Web Services accounts alongside Google Cloud projects.

## Extended Definition

Monitoring can monitor Amazon Web Services accounts alongside Google Cloud projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/authorization](https://docs.cloud.google.com/monitoring/agent/monitoring/authorization)

## Supporting Pages

### Authorize the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/authorization](https://docs.cloud.google.com/monitoring/agent/monitoring/authorization)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Linux Edit the following configuration file, or create the file if it doesn't exist: /etc/default/stackdriver-agent Add the following to the configuration file: GOOGLE APPLICATION CREDENTIALS = PATH TO CREDENTIAL FILE Restart the agent by running the following command on your VM instance: sudo service stackdriver-agent restart Windows Note: Service account key files aren't supported by the Monitoring agent for Compute Engine VMs running Windows.
- To authorize the Monitoring agent installed on a VM instance by using service account private keys, do the following: Transfer the service account key file from your local system to your VM instance: Create an environment variable to point to the service account key file on your local system.
- Authorize with an attached service account To authorize the Monitoring agent installed on a Compute Engine VM instance that has an attached service account, do the following: Ensure that you verified the access scopes of your VM .
- If your service account does not have the necessary roles for the Monitoring agent , then use the following steps to add the roles described in Create a service account : Click edit Edit in the entry for the service account.

### Troubleshoot the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generating new credentials If the credentials aren't valid, take the following steps: For each connected project containing instances that need to be authorized with a private key — each project containing Compute Engine instances that were created without including the access scope https://www.googleapis.com/auth/monitoring.write — create a service account and generate a private key, if they don't already exist.
- Repository changed its 'Origin' value (Linux) You might see an error message similar to the following when upgrading the agent, installing the agent, or running apt-get update on Debian/Ubuntu Linux: E : Repository ' https : //packages.cloud.google.com/apt google-cloud-monitoring-buster-all InRelease' changed its 'Origin' value from 'google-cloud-monitoring-buster' to 'namespaces/cloud-ops-agents-artifacts/repositories/google-cloud-monitoring-buster-all' E : Repository ' https : //packages.cloud.google.com/apt google-cloud-monitoring-buster-all InRelease' changed its 'Label' value from 'google-cloud-monitoring-buster' to 'namespaces/cloud-ops-agents-artifacts/repositories/google-cloud-monitoring-buster-all' This message indicates that the package repository cache may have diverged from its source.
- If both commands display a file, then the file denoted by GOOGLE APPLICATION CREDENTIALS is used. { "type" : "service account" , "project id" : "{your-project-id}" , "private key id" : "{your-private-key-id}" , "private key" : "{your-private-key}" , "client email" : "{your-project-number}-{your-key}@developer.gserviceaccount.com" , "client id" : "{your-client-id}" , "auth uri" : "https://accounts.google.com/o/oauth2/auth" , "token uri" : "https://accounts.google.com/o/oauth2/token" , "auth provider x509 cert url" : "{x509-cert-url}" , "client x509 cert url" : "{client-x509-cert-url}" } If there are no credential files present, then see Adding credentials .
- Verifying project and credentials If the Monitoring agent is reporting access or authorization errors, or if the agent seems to be running normally but there is no data or your alerting policies aren't working as you expect, then check that your VM instance's credentials are correct, including that they specify the correct project: If you are using a Compute Engine VM instance with standard (not private-key) credentials, then it is unlikely that data is going to the wrong project, but your credentials might still be deficient.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Cloud Monitoring services Cloud Monitoring provides different services that you can use to understand the health and performance of your applications, and of the other Google Cloud services that you use.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Cloud Monitoring overview Stay organized with collections Save and categorize content based on your preferences.

