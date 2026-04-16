---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.712Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cluster notifications in Cloud Logging"
feature_slug: "cluster-notifications-in-cloud-logging"
latest_feature_date: "2025-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "cluster"
  - "notifications"
  - "logging"
  - "feature"
  - "lets"
  - "you"
  - "receive"
  - "gke"
---

# Cluster notifications in Cloud Logging

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This feature lets you receive GKE cluster notifications through Cloud Logging.

## Extended Definition

This feature lets you receive GKE cluster notifications through Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- You can receive these notifications on a Pub/Sub subscription, integrate with third-party services , and receive notifications in Cloud Logging .
- Best practices Upgrade your GKE infrastructure regularly Monitor your resources for security issues Enable security bulletin notifications Configure log collection Upgrade your GKE infrastructure regularly Recommended : keep your GKE version up to date to access new security features and apply security patches.
- In addition to system and workload logs, all GKE clusters send the following audit logs to Logging: Kubernetes audit logs : a chronological record of calls that have been made to the Kubernetes API server.
- Go to Policy details Configure log collection Recommended : to reduce operational overhead and to maintain a consolidated view of your logs, implement a consistent logging strategy across your clusters.

### "Configure clusters to receive notifications via email \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- Source ID: `site-docs-reference-required-5`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Pub/Sub Editor ( roles/pubsub.editor ) Application Integration Editor ( roles/integrations.editor ) Setup cluster notifications for your GKE cluster To use Pub/Sub to receive notifications about your GKE cluster, follow Receive cluster notifications through Pub/Sub .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Configure clusters to receive notifications via email Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard This tutorial shows you how to configure Application Integration to receive Google Kubernetes Engine (GKE) cluster notifications via email.
- You create an integration with a Pub/Sub trigger to listen to an existing topic that receives notifications from a GKE cluster.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- To receive a Pub/Sub notification when a patch is available for your channel, enable cluster notifications .
- To receive a Pub/Sub notification when a patch is available for your channel, enable cluster notifications .
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: Container-Optimized OS: 1.21.14-gke.7100 and later Ubuntu: 1.21.14-gke.9400 and later 1.22.15-gke.2400 and later 1.23.13-gke.800 and later 1.24.7-gke.800 and later 1.25.3-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.

