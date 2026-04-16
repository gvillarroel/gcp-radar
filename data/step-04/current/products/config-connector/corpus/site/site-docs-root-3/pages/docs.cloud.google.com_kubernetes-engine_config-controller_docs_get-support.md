---
title: "Get support \_|\_ Config Controller \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/get-support
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/get-support
  title: "Get support \_|\_ Config Controller \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Controller
Resources
Send feedback
Get support
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to get support for Config Controller.
Before contacting support
Before contacting support, you can try and resolve issues yourself. For
troubleshooting tips, see
Troubleshoot Config Controller
and
Troubleshoot Config Connector .
Support options
Google Cloud offers a variety of support packages to accommodate your support
needs.
Google manages the lifecycle of the cluster
that backs your Config Controller instance including upgrading the cluster
and installing the latest version of Google-managed operators.
For open source Config Connector, you can get support by checking for existing issues
or opening a new issue in the
public GitHub issue tracker .
What Google doesn't support
Google doesn't support issues with customer-owned YAML file configurations.
Unsupported changes to Config Controller instances
Because Config Controller is a managed offering, you shouldn't make changes
to the Google Kubernetes Engine (GKE) cluster that backs your Config Controller
instance. To ensure you can receive Google Cloud Support
services, you should avoid the following:
Deleting a Config Controller instance with the GKE API or
associated Google Cloud CLI. If you want to delete a Config Controller
instance, you should use
gcloud anthos config controller delete .
Registering a Config Controller instance to a fleet or
enabling any fleet features.
Changing the cluster settings of the Config Controller instance, for
example projects.locations.clusters.update .
Creating or deleting the nodepool of a Config Controller instance, for
example projects.locations.clusters.nodePools.delete .
Don't edit, update, or delete the following namespaces and resources contained
within those namespaces:
cnrm-system
config-management-monitoring
config-management-system (you can edit, update, or delete rootsync and secret resources)
configconnector-operator-system
gatekeeper-system
krmapihosting-monitoring
krmapihosting-system
kube-node-lease
kube-system
resource-group-system
Don't edit, update, or delete the following cluster-scoped APIs:
MutatingWebhookConfigurations
ValidatingWebhookConfigurations
Don't edit, update, or delete the following
custom resources
used by API groups:
*.cloud.google.com
gatekeeper.sh
gke.io
Don't delete the following Objects:
Kind: ConfigConnector (Cluster Scoped), Name: configconnector.core.cnrm.cloud.google.com
File bugs or feature requests
You can submit a product issue by using one of the following procedures:
Config Controller issues and feature requests : Check for
existing issues
or
open new issues .
Config Connector issues and feature requests : Check for
existing issues or open new issues in the
public issue trackers .
Documentation issues : On the documentation page, select Send
feedback . This action opens a feedback form. The
Config Management team reviews and takes action on your comments.
Billing questions
Use the following resources to get help with billing questions:
To learn more about billing, read the
Google Cloud billing documentation .
Resolve billing concerns by using the
billing concerns troubleshooter .
Request help with billing questions by using the
billing support form .
What's next
For support details for products related to Config Controller,
see the following support pages:
Get support for Config Sync
Get support for Policy Controller
To review the compatibility between Google Kubernetes Engine features and
cluster product families, see
Version and upgrade support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
