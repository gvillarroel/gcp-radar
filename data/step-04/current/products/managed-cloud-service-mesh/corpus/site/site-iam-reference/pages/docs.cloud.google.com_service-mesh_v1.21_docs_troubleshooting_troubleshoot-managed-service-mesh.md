---
title: "Resolving managed Cloud Service Mesh issues \_|\_ Cloud Service Mesh v1.21\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh
  title: "Resolving managed Cloud Service Mesh issues \_|\_ Cloud Service Mesh v1.21\
    \ \_|\_ Google Cloud Documentation"
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
Resolving managed Cloud Service Mesh issues
This document explains common Cloud Service Mesh problems and how to resolve
them, such as when a pod is injected with istio.istio-system , the installation
tool generates errors such as HTTP 400 status codes and cluster membership
errors.
If you need additional assistance troubleshooting Cloud Service Mesh, see
Getting support .
Revision(s) reporting as unhealthy error
You may see a generic Revision(s) reporting unhealthy error if the service
agent for managed Cloud Service Mesh does not have the required
Identity and Access Management (IAM) role. Generally, this occurs when the role is revoked
by Terraform, Puppet, or CI/CD reconfiguration.
The steps required to troubleshoot this error depend on whether you are using
the Google Cloud console or the Google Cloud CLI.
Google Cloud console
In the Google Cloud console, navigate to the IAM & Admin >
IAM .
Select Include Google-provided role grants .
Review the Principal list.
If you see the service agent with the required IAM role in
the list, then it is configured correctly.
Note: The format of the service agent's identifier is
service- PROJECT_NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com ,
and the required IAM role is Anthos Service Mesh Service
Agent ( roles/anthosservicemesh.serviceAgent ).
If the list doesn't include the service agent and the required role, then
continue to the next step.
Grant the Anthos Service Mesh Service Agent role
( roles/anthosservicemesh.serviceAgent ) to the Cloud Service Mesh service
agent on the project. For instructions, see
Manage access to projects, folders, and organizations .
Note: Ensure that you do not have any automated tooling that will revert
this change. If the error recurs, then update any
relevant configurations or allow-lists.
Google Cloud CLI
In the Google Cloud CLI, run the following command to check if the
required IAM role has been granted:
gcloud projects get-iam-policy PROJECT_ID \
--flatten = "bindings[].members" \
--filter = "bindings.members:serviceAccount:service- PROJECT_NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com AND bindings.role:roles/anthosservicemesh.serviceAgent" \
--format = 'table(bindings.role)'
Review the ROLE list.
If you see any roles in the list, then it is configured correctly.
If you don't see any roles in the list, then the required role was
revoked.
To grant the required role to the service agent, run the following
command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount:service- PROJECT_NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \
--role = "roles/anthosservicemesh.serviceAgent"
Note: Ensure that you do not have any automated tooling that will revert
this change. If the error recurs, then update any relevant configurations or
allow-lists.
The install tool generates HTTP 400 errors
The installation tool might generate HTTP 400 errors like the following:
HealthCheckContainerError, message: Cloud Run error: Container failed to start.
Failed to start and then listen on the port defined by the PORT environment
variable. Logs for this revision might contain more information.
The error can occur if you did not enable
Workload Identity
on your Kubernetes cluster, which you can do by using the following command:
export CLUSTER_NAME = ...
export PROJECT_ID = ...
export LOCATION = ...
gcloud container clusters update $CLUSTER_NAME --zone $LOCATION \
--workload-pool = $PROJECT_ID .svc.id.goog
Managed data plane state
The following command displays the state of the
managed data plane :
gcloud container fleet mesh describe --project PROJECT_ID
The following table lists all possible managed data plane states:
State
Code
Description
ACTIVE
OK
The managed data plane is running normally.
DISABLED
DISABLED
The managed data plane will be in this state if no namespace or revision
is configured to use it. Follow the instructions to
enable managed Cloud Service Mesh via the fleet API , or
enable the managed data plane after provisioning managed Cloud Service Mesh with asmcli .
Note that the managed data plane status reporting is only available if you
enabled the managed data plane by annotating a namespace or revision.
Annotating individual pods causes those pods to be managed but with a
feature state of DISABLED if no namespaces or revisions are
annotated.
FAILED_PRECONDITION
MANAGED_CONTROL_PLANE_REQUIRED
The managed data plane requires an active managed Cloud Service Mesh control
plane.
PROVISIONING
PROVISIONING
The managed data plane is being provisioned. If this state persists for
more than 10 minutes, an error has likely occurred and you should
contact Support .
STALLED
INTERNAL_ERROR
The managed data plane is blocked from operating due to an internal error
condition. If the issue persists,
contact Support .
NEEDS_ATTENTION
UPGRADE_FAILURES
The managed data plane requires manual intervention in order to bring the
service back to the normal state. For more information and how to resolve
this issue, see
NEEDS_ATTENTION state .
NEEDS_ATTENTION state
If the gcloud container fleet mesh describe command shows that the managed
data plane state is in NEEDS_ATTENTION state and the code is
UPGRADE_FAILURES , then the managed data plane has failed to upgrade certain
workloads. These workloads will be labeled with dataplane-upgrade: failed by
the managed data plane service for further analysis. The proxies must be
restarted manually to be upgraded. To get the list of pods that require
attention, run the following command:
kubectl get pods --all-namespaces -l dataplane-upgrade = failed
Cluster membership error (No identity provider specified)
The installation tool might fail with Cluster membership errors like the
following:
asmcli: [ERROR]: Cluster has memberships.hub.gke.io CRD but no identity
provider specified. Please ensure that an identity provider is available for the
registered cluster.
The error can occur if you don't have
GKE workload identity enabled
before registering the cluster. You can re-register the cluster on the command
line by using the
gcloud container fleet memberships register --enable-workload-identity command .
Check the managed control plane status
To check the managed control plane status, run
gcloud container fleet mesh describe --project FLEET_PROJECT_ID .
In the response, the
membershipStates[].servicemesh.controlPlaneManagement.details field might
explain the specific error.
If you need more details, then check the ControlPlaneRevision custom resource
in the cluster, which is updated when the managed control plane is provisioned
or fails provisioning.
To inspect the status of the resource, replace NAME with the value
corresponding to each channel: asm-managed , asm-managed-stable , or
asm-managed-rapid .
kubectl describe controlplanerevision NAME -n istio-system
The output is similar to:
Name: asm-managed
…
Status:
Conditions:
Last Transition Time: 2021-08-05T18:56:32Z
Message: The provisioning process has completed successfully
Reason: Provisioned
Status: True
Type: Reconciled
Last Transition Time: 2021-08-05T18:56:32Z
Message: Provisioning has finished
Reason: ProvisioningFinished
Status: True
Type: ProvisioningFinished
Last Transition Time: 2021-08-05T18:56:32Z
Message: Provisioning has not stalled
Reason: NotStalled
Status: False
Type: Stalled
The Reconciled condition determines whether the managed control plane is
running correctly. If true , the control plane is running successfully.
Stalled determines whether the managed control plane provisioning process has
encountered an error. If Stalled , the Message field contains more
information about the specific error. See
Stalled codes for more information about possible errors.
ControlPlaneRevision Stalled Codes
There are multiple reasons the Stalled condition could become true in the
ControlPlaneRevisions status.
Reason
Message
Description
PreconditionFailed
Only GKE memberships are supported but ${CLUSTER_NAME} is not a GKE cluster.
The current cluster does not appear to be a GKE cluster. Managed control plane only works on
GKE clusters.
Unsupported ControlPlaneRevision name: ${NAME}
The name of the ControlPlaneRevision must be one of the following:
asm-managed
asm-managed-rapid
asm-managed-stable
Unsupported ControlPlaneRevision namespace: ${NAMESPACE}
The namespace of the ControlPlaneRevision must be istio-system .
Unsupported channel ${CHANNEL} for ControlPlaneRevision with name${NAME}. Expected ${OTHER_CHANNEL}
The name of the ControlPlaneRevision must match the channel of the ControlPlaneRevision with the following:
asm-managed -> regular
asm-managed-rapid -> rapid
asm-managed-stable -> stable
Channel must not be omitted or blank
Channel is a required field on the ControlPlaneRevision. It is missing or blank on the custom resource.
Unsupported control plane revision type: ${TYPE}
managed_service is the only allow field for the ControlPlaneRevisionType field.
Unsupported Kubernetes version: ${VERSION}
Kubernetes versions 1.15+ are supported.
Workload identity is not enabled
Please enable workload identity on your cluster.
Unsupported workload pool: ${POOL}
The workload pool must be of the form ${PROJECT_ID}.svc.id.goog .
ProvisioningFailed
An error occurred updating cluster resources
Google was unable to update your in-cluster resources such as CRDs and webhooks.
MutatingWebhookConfiguration "istiod-asm-managed" contains a webhook with URL of ${EXISTING_URL} but expected ${EXPECTED_URL}
Google will not overwrite existing webhooks to avoid breaking your installation. Update this manually if it is desired behavior.
ValidatingWebhookConfiguration ${NAME} contains a webhook with URL of ${EXISTING_URL} but expected ${EXPECTED_URL}
Google will not overwrite existing webhooks to avoid breaking your installation. Update this manually if it is desired behavior.
Managed Cloud Service Mesh is unable to connect to the GKE cluster
Between June 2022 and September 2022,
Google completed security work
related to Authorized Networks, Cloud Run and Cloud Run functions on
Google Kubernetes Engine (GKE). Projects that previously used managed Cloud Service Mesh
but stopped using it before the migration do not have the API required for the
communication between Cloud Run and GKE.
In this scenario, managed Cloud Service Mesh provisioning will fail and Cloud Logging will display the following error message:
Connect Gateway API has not been used in project [*PROJECT_NUMBER*] before or it is disabled.
Enable it by visiting https://console.developers.google.com/apis/api/connectgateway.googleapis.com/overview?project=[*PROJECT_NUMBER*] then retry.
If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.
Filter this message using the following query:
resource.type="istio_control_plane"
resource.labels.project_id=[*PROJECT_ID*]
resource.labels.location=[*REGION*]
severity=ERROR
jsonPayload.message=~"Connect Gateway API has not been used in project"
In the meantime, sidecar injection and deploying any Cloud Service Mesh related Kubernetes custom resources will also fail and
Cloud Logging will display the following warning message:
Error creating: Internal error occurred: failed calling webhook
"rev.namespace.sidecar-injector.istio.io": failed to call webhook: an error on
the server ("unknown") has prevented the request from succeeding.
Filter this message using the following query:
resource.type="k8s_cluster"
resource.labels.project_id=[*PROJECT_ID*]
resource.labels.location=[*REGION*]
resource.labels.cluster_name=[*CLUSTER_NAME*]
severity=WARNING
jsonPayload.message=~"Internal error occurred: failed calling webhook"
To resolve the issue:
Enable the required connectgateway API:
gcloud services enable connectgateway.googleapis.com --project =[ *PROJECT_ID* ]
Re-install managed Cloud Service Mesh .
Perform a rolling restart on the workloads.
Google Cloud APIs are not enabled
If your managed Cloud Service Mesh fleet uses the TRAFFIC_DIRECTOR
control plane implementation ,
then certain APIs must be enabled.
Enable all required APIs ,
including those listed as "Can Be Disabled" when not using managed Cloud Service Mesh.
gcloud services enable --project =[ *PROJECT_ID* ] \
trafficdirector.googleapis.com \
networkservices.googleapis.com \
networksecurity.googleapis.com
Ensure that you don't have any automated tooling that will revert this
change. If the error recurs, then update any relevant configurations or
allow-lists.
NodePool Workload Identity Federation for GKE is disabled
The following command displays the state of managed Cloud Service Mesh:
gcloud container fleet mesh describe
You may see the NODEPOOL_WORKLOAD_IDENTITY_FEDERATION_REQUIRED error code in
the Conditions field of your membership:
membershipStates:
projects/test-project/locations/us-central1/memberships/my-membership:
servicemesh:
conditions:
- code: NODEPOOL_WORKLOAD_IDENTITY_FEDERATION_REQUIRED
details: One or more node pools have workload identity federation disabled.
documentationLink: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
severity: ERROR
controlPlaneManagement:
details:
- code: REVISION_FAILED_PRECONDITION
details: Required in -cluster components are not ready. This will be retried
within 15 minutes.
implementation: TRAFFIC_DIRECTOR
state: FAILED_PRECONDITION
This error is shown if the GKE cluster does not have Workload Identity Federation
enabled on all node pools of that cluster, since this is a prerequisites for the
installation of Cloud Service Mesh.
To resolve this error message, you must follow instructions to
Enable Workload Identity Federation
on all node pools. Note that enablement may vary depending on your specific
cluster case.
After enablement, the error message should be automatically removed and your
cluster should go back to ACTIVE state. If the issue persists and you need
additional assistance, see Getting support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
