---
title: "Best practices for Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/best-practices
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/best-practices
  title: "Best practices for Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Best practices for Config Connector
This page explains best practices you should consider when using
Config Connector.
Manage API quota limits
If you've run into errors indicating that you've exceeded the API quota limit,
it could be that you have created too many Config Connector resources with the
same object kind, for example deployment , under the same quota project .
When you create a lot of resources, those resources can generate too many API
requests to the same API endpoint because of the
reconciliation strategy
that Config Connector uses.
One way to resolve this issue is to request a quota increase. Besides a quota
increase, if you've confirmed that the quota error is caused by GET requests
against the Google Cloud resources managed by your Config Connector
resources, you might consider one of the following options:
Increase the reconciliation interval for your
Config Connector resources
Split your resources into multiple projects
Switch Config Connector to namespaced mode
Increase the reconciliation interval
You can increase the time between Config Connector reconciling a resource to
avoid hitting API quotas. The recommendation is to set the reconciliation
interval to 1 hour.
To increase the reconciliation interval, follow the steps in
Configuring the reconciliation interval .
Split your resources into multiple projects
This approach spreads out your Config Connector resources across different
projects. This approach works well when adding new resources, but it can be
risky to split existing resources because you need to delete the existing
resources and recreate them under different projects. Deleting resources can
cause data loss with some types of resources, such as SpannerInstance or
BigtableTable resources. You should backup your data before deleting it.
To split existing Config Connector resources into different projects, complete
the following steps:
Decide which Config Connector resources you plan to move to different
projects.
Delete the Config Connector resources .
Make sure the cnrm.cloud.google.com/deletion-policy annotation is not set
to abandon .
Update the spec.projectRef field or cnrm.cloud.google.com/project-id
annotation in the YAML configuration of the Config Connector resources you
plan to move to the new projects.
Grant the IAM service account used by Config Connector proper
permissions on the new projects.
Apply the updated YAML configuration to
create the Config Connector resources .
Switch to namespaced mode
Note: To mitigate API quota limits, specify a different quota project as the
billingProject and requestProjectPolicy for each of your ConfigConnectorContext objects. This method
avoids the need to use and manage IAM service accounts from
different projects.
You can bind different IAM service accounts owned by different
Google Cloud projects to different namespaces where Config Connector is
installed in
namespaced mode ,
and split your resources into different namespaces. To achieve this,
complete the following steps:
Configure Config Connector to run in namespaced mode .
Create new IAM service accounts from different projects, and
bind them to different namespaces following the
instructions to configure Config Connector for each project .
Grant the new IAM service accounts proper permissions to
the project that contains the resources.
Decide which Config Connector resources you plan to move to different
namespaces.
Update the YAML configuration of the Config Connector resources and set the
cnrm.cloud.google.com/deletion-policy annotation abandon .
Apply the updated YAML configuration to update the Config Connector
resources' deletion policy.
Abandon the Config Connector resources .
Update the metadata.namespace field in the YAML configuration of the
Config Connector resources you plan to move to the different namespaces.
Apply the updated YAML configuration to
acquire the abandoned resources .
Manage node pools in GKE clusters
You might experience errors when you create a cluster by applying a
ContainerCluster resource in Config Connector, and then attempt to update the
nodeConfig or other node-related fields by applying an updated
ContainerCluster configuration. These errors are due to immutable fields such
as nodeConfig , nodeConfig.labels , nodeConfig.taint , which is a technical
limitation of the underlying
Google Cloud API .
If you need to update these fields, you can use the
ContainerNodePool
resource to manage node pools where these fields are not immutable. To manage
node pools using the ContainerNodePool resource, you must specify an
annotation cnrm.cloud.google.com/remove-default-node-pool: "true" . This
annotation removes the default node pool that gets created during cluster
creation. Then, to create separate node pools, specify nodeConfig fields in
ContainerNodePool instead of in ContainerCluster . See the
ContainerNodePool resource example
for reference.
You should set the annotation
cnrm.cloud.google.com/state-into-spec: absent
for both the ContainerCluster and ContainerNodePool resources. This
annotation avoids potential reconciliation errors during the interaction between
the Config Connector controller and the underlying APIs.
The following examples show a ContainerCluster and a ContainerNodePool
configuration with these annotations set:
apiVersion: container.cnrm.cloud.google.com/v1beta1
kind: ContainerCluster
metadata:
name: containercluster-sample
annotations:
cnrm.cloud.google.com/remove-default-node-pool: "true"
cnrm.cloud.google.com/state-into-spec: absent
spec:
description: A sample cluster.
location: us-west1
initialNodeCount: 1
apiVersion: container.cnrm.cloud.google.com/v1beta1
kind: ContainerNodePool
metadata:
labels:
label-one: "value-one"
name: containernodepool-sample
annotations:
cnrm.cloud.google.com/state-into-spec: absent
spec:
location: us-west1
autoscaling:
minNodeCount: 1
maxNodeCount: 3
nodeConfig:
machineType: n1-standard-1
preemptible: false
oauthScopes:
- "https://www.googleapis.com/auth/logging.write"
- "https://www.googleapis.com/auth/monitoring"
clusterRef:
name: containercluster-sample
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
