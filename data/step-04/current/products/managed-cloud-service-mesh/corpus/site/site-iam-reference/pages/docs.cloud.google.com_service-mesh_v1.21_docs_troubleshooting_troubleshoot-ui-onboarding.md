---
title: "Resolving issues enabling Cloud Service Mesh through Google Cloud console\
  \ \_|\_ Cloud Service Mesh v1.21 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-ui-onboarding
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-ui-onboarding
  title: "Resolving issues enabling Cloud Service Mesh through Google Cloud console\
    \ \_|\_ Cloud Service Mesh v1.21 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing archived v1.21 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.21
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Resolving issues enabling Cloud Service Mesh through
Google Cloud console
This section explains common Cloud Service Mesh problems and how to resolve them.
If you need additional assistance, see Getting support .
Ensure you have sufficient permissions
To enable Cloud Service Mesh while creating a GKE cluster, you
must have all of the following roles:
Kubernetes Engine Admin
GKE Hub Admin
Service Usage Viewer
For information on granting roles, see Grant or revoke a single role .
Failed to enable Cloud Service Mesh through Google Cloud console
When enabling Cloud Service Mesh on a cluster, the enablement may fail.
If the enablement fails, the Google Cloud console displays a message: "Cloud Service Mesh
installation failed."
Enabling Cloud Service Mesh through the Google Cloud console creates a
ControlPlaneRevision custom resource in the cluster. This resource's status is
updated when the managed control plane is provisioned or fails provisioning and
contains an error message if enablement failed.
kubectl describe controlplanerevision -n istio-system
The output is similar to:
Name: asm-managed
…
Status:
Conditions:
Last Transition Time: 2021-08-05T18:56:32Z
Message: The provisioning process has not completed successfully
Reason: NotProvisioned
Status: False
Type: Reconciled
Last Transition Time: 2021-08-05T18:56:32Z
Message: Provisioning has finished
Reason: ProvisioningFinished
Status: True
Type: ProvisioningFinished
Last Transition Time: 2021-08-05T18:56:32Z
Message: Unsupported Kubernetes version: v1.14.10
Reason: PreconditionFailed
Status: True
Type: Stalled
If the Type: Reconciled Status field is True , then the control plane is
running successfully. The Type: Stalled Status field will be True if
the managed control plane provisioning process has encountered an error.
If Stalled , the Message field will contain more information about
the specific error. See
Stalled codes
for more information about possible errors.
The installation will be retried every 15 minutes, and the
ControlPlaneRevision custom resource will be updated to reflect the latest
status. However, the error message displayed in the Google Cloud console will not be
updated, even if installation later succeeds. Run the above command on your
cluster to check current status (once every 15 minutes).
If the installation has not succeeded after addressing the error message and
then waiting 15 minutes, you can
Configure managed Cloud Service Mesh with asmcli
to enable Cloud Service Mesh.
Alternatively, if the installation failed during GKE cluster
creation, you can delete the cluster and try again.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
