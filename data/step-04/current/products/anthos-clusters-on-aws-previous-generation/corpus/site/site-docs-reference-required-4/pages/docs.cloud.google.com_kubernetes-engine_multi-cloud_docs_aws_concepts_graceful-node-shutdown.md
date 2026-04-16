---
title: "Graceful node shutdown in GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/graceful-node-shutdown
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/graceful-node-shutdown
  title: "Graceful node shutdown in GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Graceful node shutdown in GKE on AWS
Stay organized with collections
Save and categorize content based on your preferences.
Starting from version 1.26, GKE on AWS automatically enables
Graceful Node Shutdown .
This feature manages the graceful termination of Pods during node shutdowns.
Graceful termination lets Pods save their state, and release resources before
the node is shut down. This method of terminating Pods minimizes the risk of
data loss. It also minimizes the risk of interruptions to other Pods and
services that rely on or interact with the Pods being shut down, thus enhancing
the resilience of your clusters.
How it works
An event such as scheduled maintenance, node scaling, or a hardware issue,
triggers a node shutdown. The kubelet component detects the event and
initiates the graceful node termination process by instructing systemd to
delay the system shutdown for a specified duration. This delay gives the node
time to drain and evict the Pods running on it.
The goal of graceful node termination is to gracefully terminate both non-system
and critical system Pods before the node shuts down. The following default
settings are used:
ShutdownGracePeriod : 30 seconds
ShutdownGracePeriodCriticalPods : 15 seconds
These settings give non-system Pods 15 seconds to gracefully terminate before
they are forcibly stopped. Critical system Pods have 15 seconds to shut down
after the non-system Pods have terminated. However, since the feature operates
on a best-effort basis, there's a possibility that a node might not be able to
shut down gracefully within the designated 30-second period.
Triggers and limitations
Events that trigger graceful node shutdown include planned events such as the
following:
User-commanded shutdowns
Termination of instances
Scheduled maintenance
Scaling down a cluster
In these scenarios, the kubelet detects the node shutdown event and initiates
the graceful node shutdown process.
In contrast, graceful node shutdown can't be activated when the shutdown command
doesn't trigger the systemd inhibitor lock mechanism that the kubelet
component relies on. Examples of those kinds of situations include the
following:
Network disconnections
Hardware malfunctions
Insufficient resources such as memory or CPU
Unexpected power outages.
In these cases, the node might shut down abruptly, potentially causing
disruptions or data loss.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
