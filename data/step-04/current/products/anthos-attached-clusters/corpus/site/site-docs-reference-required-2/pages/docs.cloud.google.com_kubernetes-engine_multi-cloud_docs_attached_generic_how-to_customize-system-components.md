---
title: "Customize system components on CNCF conformant clusters \_|\_ GKE attached\
  \ clusters \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/customize-system-components
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/customize-system-components
  title: "Customize system components on CNCF conformant clusters \_|\_ GKE attached\
    \ clusters \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE attached clusters
Guides
Send feedback
Customize system components on CNCF conformant clusters
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to customize Google-owned system components in your
GKE attached clusters by applying custom tolerations and labels. When you
customize these components, you have more precise management of where and how
these components operate within your environment.
Overview
When you attach a cluster to Google Cloud, by default, Google-owned system
components don't include customizable fields such as tolerations. As a result,
you might experience issues such as Pods failing to schedule on available nodes, which
impact overall cluster attachment and functionality. Additionally, you might require
control over placing and managing components on specific nodes that include the
ability to apply custom labels for organizational and operational purposes.
Customizing system components resolves these issues and lets you have more
control and flexibility over how these components operate in your cluster. You
can apply custom tolerations and labels to Google-owned system components:
Tolerations provide the ability for Google's components to schedule onto
nodes that have specific Kubernetes taints, which lets you enforce workload
separation or use specialized node pools. Custom tolerations directly resolve
issues where unmodifiable taints prevent proper component placement.
Labels offer a flexible way for you to categorize and identify Google's
system components according to your own operational standards. Custom labels
enable better integration with your existing monitoring, logging, and policy
enforcement tools.
Restrictions and limitations
The following restrictions and limitations apply:
You can only add custom tolerations and labels when you register your cluster .
You can add up to 10 custom tolerations and 10 custom labels to your cluster.
You can't use the following labels:
name
component
app
Any label which includes k8s.io or kubernetes.io since they belong to
reserved labels in Kubernetes
Any label which includes google
Any label which includes gke.io
Add custom tolerations
Google-owned system component Pods always include the following toleration:
- key: components.gke.io/gke-managed-components
operator: Exists
To specify custom tolerations, add the --system-component-tolerations flag to the
gcloud container attached clusters register command:
gcloud container attached clusters register CLUSTER_NAME \
--location = GOOGLE_CLOUD_REGION \
...
--system-component-tolerations = COMPONENT_TOLERATION \
Replace the following:
CLUSTER_NAME : the name of your cluster.
GOOGLE_CLOUD_REGION : the Google Cloud region to administer your cluster from.
COMPONENT_TOLERATION : the comma-separated list of the
tolerations that you want to add. You can provide a key, value, operator, and
effect in the following formats:
For the Equal operator : use the format key=value:operator:effect , for
example, workload=hpc:Equal:NoSchedule . This setting means that the Pod
tolerates a taint only if the taint has the exact key and value of
workload=hpc .
For the Exists operator : use the format key:operator:effect , for
example, workload:Exists:NoSchedule . This setting means that the Pod
tolerates any taint with the workload key on the node, regardless of the
value.
For scheduling on any node : use the format :operator:effect , for
example, :Exists:NoSchedule . This setting means that the Pod tolerates any
taint on the node that has the effect NoSchedule , and
ignores the key or value of the taint.
For a list of operators and effects that you
can use, see Taints and Tolerations
in the Kubernetes documentation.
Add custom labels
To specify custom labels, add the --system-component-labels flag to the
gcloud container attached clusters register command:
gcloud container attached clusters register CLUSTER_NAME \
--location = GOOGLE_CLOUD_REGION \
...
--system-component-labels = COMPONENT_LABEL \
Replace the following:
CLUSTER_NAME : the name of your cluster.
GOOGLE_CLOUD_REGION : the Google Cloud region to administer your cluster from.
COMPONENT_LABEL : the comma-separated list of one or more
labels that you want to add. You provide a label and value in the format of
key=value . For example, env=production,region=us-east-1 . Although every label
must have a key, the value associated with that key can be empty. For example,
backend="" .
What's next
Learn more about Taints and Tolerations in the Kubernetes documentation.
Learn how to attach your CNCF conformant cluster .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
