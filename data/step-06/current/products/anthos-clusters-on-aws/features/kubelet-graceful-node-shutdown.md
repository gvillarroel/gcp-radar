---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.365Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Kubelet graceful node shutdown"
feature_slug: "kubelet-graceful-node-shutdown"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/graceful-node-shutdown"
keywords:
  - "critical Pod grace period"
  - "15-second shutdown window"
  - "pod termination timeout"
  - "non-system Pods"
  - "kubelet graceful node shutdown"
  - "kubelet shutdown behavior"
  - "graceful node shutdown"
  - "graceful shutdown"
---

# Kubelet graceful node shutdown

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

Kubelet graceful node shutdown is enabled so non-system Pods terminate within 15 seconds and critical Pods have an additional 15 seconds to terminate gracefully.

## Extended Definition

Kubelet graceful node shutdown in GKE on AWS is a kubelet-managed process that starts when the node receives shutdown-related events such as user-commanded shutdowns, instance termination, scheduled maintenance, or cluster scale-down. In this mode, the defaults are `ShutdownGracePeriod: 30s` and `ShutdownGracePeriodCriticalPods: 15s`, and the documentation states these settings give non-system Pods 15 seconds to terminate gracefully before force-stop. The feature does not activate when the shutdown command does not trigger the systemd inhibitor lock mechanism required by kubelet.

## Evidence Summary

The cited page documents the shutdown event triggers, required systemd dependency, and default graceful-shutdown timing values for kubelet behavior on GKE on AWS.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/graceful-node-shutdown](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/graceful-node-shutdown)

## Supporting Pages

### Graceful node shutdown in GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/graceful-node-shutdown](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/graceful-node-shutdown)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly documents how GKE on AWS handles graceful node shutdown, including kubelet behavior, Pod termination order, and default grace periods.

Evidence snippets:
- Triggers and limitations Events that trigger graceful node shutdown include planned events such as the following: User-commanded shutdowns Termination of instances Scheduled maintenance Scaling down a cluster In these scenarios, the kubelet detects the node shutdown event and initiates the graceful node shutdown process.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback Graceful node shutdown in GKE on AWS Stay organized with collections Save and categorize content based on your preferences.
- The following default settings are used: ShutdownGracePeriod : 30 seconds ShutdownGracePeriodCriticalPods : 15 seconds These settings give non-system Pods 15 seconds to gracefully terminate before they are forcibly stopped.
- In contrast, graceful node shutdown can't be activated when the shutdown command doesn't trigger the systemd inhibitor lock mechanism that the kubelet component relies on.

