---
title: "Alpha clusters \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters
  title: "Alpha clusters \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
Alpha clusters
Stay organized with collections
Save and categorize content based on your preferences.
Standard
This page provides an overview of how alpha clusters work in
Google Kubernetes Engine (GKE). Access to alpha features and APIs works differently
with alpha clusters than with other types of GKE clusters. You
can create an alpha
cluster or learn more
about cluster configuration
choices .
Warning: Don't use alpha clusters or alpha features for production workloads.
Alpha clusters expire after 30 days and don't receive security updates. You must
migrate your data from alpha clusters before they expire. GKE
does not automatically save data stored on alpha clusters. For more information,
see Limitations .
You can experiment with Kubernetes alpha features by creating an alpha
cluster . Alpha clusters are short-lived clusters that run stable Kubernetes
releases. All Kubernetes APIs, including alpha APIs, are enabled. By default,
alpha clusters have all alpha feature gates enabled that are available with the
Kubernetes version. Some beta feature gates are enabled, depending on the
default for Kubernetes. You can also selectively enable or disable specific
alpha or beta feature gates during cluster creation. Alpha clusters are designed
for advanced users and early adopters to experiment with workloads that take
advantage of new features before those features are production-ready.
Limitations
Alpha clusters have the following limitations:
Not covered by the GKE SLA
Can't be upgraded
You must disable node auto-upgrade and auto-repair on alpha clusters
Can't be enrolled in a release channel
Are automatically deleted after 30 days
Don't receive security updates
Not supported with Windows Server node pools
Have additional limitations for enabling feature gates with alpha clusters
Difference between alpha clusters and alpha GKE versions
Alpha clusters don't necessarily run "alpha" versions of GKE. The
term alpha cluster means that alpha APIs are enabled regardless of the version
of Kubernetes the cluster runs. Periodically, Google offers customers the
ability to test and validate GKE versions that are not generally
available. These early-access versions can be run as alpha clusters or as
clusters without the Kubernetes alpha APIs enabled.
Feature gates and alpha clusters
Feature gates are a set of key-value pairs that toggle Kubernetes features. With
alpha clusters, GKE enables the following:
Alpha feature gates : all feature gates at the alpha stages that are
available with the Kubernetes version of your cluster
Beta feature gates : the feature gates at the beta stages that are
available with the Kubernetes version of your cluster, and which are enabled
by default by open source Kubernetes
For more information about which feature gates are available for a specific
Kubernetes version, and which beta features are enabled by default ( true ), see
Feature gates for Alpha or Beta features
in the Kubernetes documentation. However, you can selectively enable or disable
specific feature gates, modifying the default values set by GKE.
Feature gates are a distinct mechanism for feature enablement from Kubernetes
APIs, and are managed differently by GKE clusters. With alpha
clusters, all Kubernetes alpha APIs are enabled. If you enable or disable a
feature gate for an alpha cluster, the enablement of Kubernetes APIs isn't
affected. However, some Kubernetes APIs and Kubernetes feature gates work
together, so disabling feature gates might cause issues with related APIs.
Verify the connection between specific feature gates and APIs.
For more information about how GKE works with feature gates, see
Feature gates .
To enable a cluster with a specific feature gate configuration, use the
--alpha-cluster-feature-gates flag during cluster creation with the
Google Cloud CLI. When you include this flag, you can modify which alpha and beta
feature gates are enabled or disabled. For more information, see Create an
alpha
cluster .
Limitations for enabling feature gates with alpha clusters
When you enable feature gates with alpha clusters, understand the following
additional limitations:
You can only create alpha clusters with specific feature gates by using the
gcloud CLI. Cluster creation with the Google Cloud console or
Terraform isn't supported.
Kubernetes alpha features that require additional configuration beyond
enabling the feature gate aren't supported.
You can selectively enable or disable alpha or beta feature gates, but all
Kubernetes alpha APIs are enabled.
Latest Kubernetes alpha features
Most Kubernetes releases contain new alpha features that you can test in alpha
clusters. For a full list of Kubernetes releases and the features they include,
see the Kubernetes changelog .
About feature stages
New Kubernetes features are introduced in four stages: early development, alpha,
beta, and stable.
To provide stability and production quality, GKE clusters other
than alpha clusters enable only features that are beta or higher .
GKE doesn't enable alpha features on other types of
GKE clusters because the features aren't production-ready or
upgradeable.
Because GKE automatically upgrades the Kubernetes control plane
and, by default, the worker nodes, enabling alpha features in production can
jeopardize the reliability of the cluster if there are breaking changes in a new
version.
To learn more about the stages of Kubernetes features, see Alpha, Beta, and
Stable
Versions
in the Kubernetes documentation.
To learn more about determining which features are enabled for a given
GKE control plane version, see Feature
gates .
What's next
Learn more
about cluster configuration choices .
Create an alpha cluster .
Read the GKE overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
