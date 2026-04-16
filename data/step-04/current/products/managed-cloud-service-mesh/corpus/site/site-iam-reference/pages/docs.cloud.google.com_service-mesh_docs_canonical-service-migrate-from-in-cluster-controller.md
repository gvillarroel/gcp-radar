---
title: "Migrating from In-cluster to Managed Canonical Service Controller \_|\_ Cloud\
  \ Service Mesh \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller
  title: "Migrating from In-cluster to Managed Canonical Service Controller \_|\_\
    \ Cloud Service Mesh \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrating from In-cluster to Managed Canonical Service Controller
Note: Canonical Services are supported automatically
in Cloud Service Mesh version 1.6.8 and higher.
This guide describes the steps to migrate from in-cluster Canonical Service
Controller to the Managed Canonical Service Controller.
The in-cluster Canonical Service Controller has been deprecated and will no
longer receive updates. While existing deployments of in-cluster controller will
continue to operate, we strongly recommend migrating to the managed Canonical
Service Controller to ensure compatibility with future releases, access to the
latest features, and continued support. All the Cloud Service Mesh
installations with asmcli from version 1.25 will be provisioned with the managed
Canonical Service controller.
1. Enable the Cloud Service Mesh fleet feature
The Managed Canonical Service controller is installed as part of the
Cloud Service Mesh fleet feature, which is enabled using the following
command:
gcloud container fleet mesh enable --project FLEET_PROJECT_ID
Replace FLEET_PROJECT_ID with the ID of your Fleet Host project. Generally,
the FLEET_PROJECT_ID has the same name as the project.
Note that if you plan to register multiple clusters, enabling
Cloud Service Mesh happens at the fleet-level so you only have to run this
command once.
Grant permissions to the Cloud Service Mesh service accounts
If your cluster's project differs from your fleet host project, you must allow
Cloud Service Mesh service accounts in the fleet project to access the
cluster project.
You only need to do this once for each cluster project. If you previously
configured managed Cloud Service Mesh for this combination of cluster and
fleet projects, then these changes have already been applied and you don't
have to run the following commands.
Grant service accounts in the fleet project permission to access the cluster
project:
gcloud projects add-iam-policy-binding " CLUSTER_PROJECT_ID " \
--member "serviceAccount:service- FLEET_PROJECT_NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \
--role roles/anthosservicemesh.serviceAgent
Replace CLUSTER_PROJECT_ID with the project ID for your
cluster and the FLEET_PROJECT_NUMBER with the project number
for your fleet.
To determine the project number for your fleet, see the instructions on the
Google Cloud projects
document.
2. Disable the in-cluster Canonical Service Controller
The Managed Canonical Service Controller cannot function alongside the
In-cluster Canonical Service controller. Therefore, you must disable the
in-cluster controller.
Check for In-Cluster Controller : Verify if the in-cluster canonical
controller is present.
kubectl get deployment canonical-service-controller-manager -n asm-system
Delete the In-Cluster Controller : If the deployment is found, then you
can delete it (and the entirety of the asm-system namespace) by running the
following command:
kubectl delete namespace asm-system
3. Verify the Managed Canonical Controller is operational
The Managed Canonical Service Controller reports its status in the feature
state, so you can confirm the installation is working correctly by checking the
feature state:
Check Feature State: Retrieve the feature state using the following
command:
gcloud container fleet mesh describe --project FLEET_PROJECT_ID
Verify Status: Check the state of your cluster and verify that the
state.code is OK .
Important: It may take up to 15 minutes for the state to transition
to OK . Wait and re-run the command.
Proceed to the next step only when the state.code is OK .
If the state.code does not become OK after 15 minutes, refer to
Resolve Managed Canonical Service Controller issues
for troubleshooting guidance.
Example output:
membershipStates:
projects/<project-number>/locations/<location>/memberships/<membership-name>:
state:
code: OK
description:
Revision(s) ready for use: istiod-asm-183-2.
Check Managed Canonical Controller is functional: Verify that the
managed canonical controller is functioning correctly by deploying a pod
with sidecar injected and check if the controller automatically creates the
corresponding canonical service.
Create a namespace with automatic sidecar injection enabled:
kubectl create namespace NAMESPACE_NAME
Follow the section Enabling automatic sidecar injection to enable
automatic sidecar injection in the newly created namespace.
Create a YAML file named simple_pod.yaml with the following content:
apiVersion : v1
kind : Pod
metadata :
name : simple-pod
labels :
app : my-app
spec :
containers :
- name : my-container
image : nginx:latest
ports :
- containerPort : 80
The app label determines the name of the canonical service. For more
information, see Defining Canonical Service .
Deploy the pod with the following command. Replace NAMESPACE_NAME with the
name of the namespace where you enabled automatic sidecar injection.
kubectl apply -f simple_pod.yaml -n NAMESPACE_NAME
Confirm pod has been created:
kubectl get pods -n NAMESPACE_NAME
Example output:
NAME READY STATUS RESTARTS AGE
simple-pod 2/2 Running 0 9s
Note : Confirm that the READY column shows 2/2 . This indicates that
both the main container and the sidecar proxy are running correctly. If
you see a different value, it's likely that automatic sidecar injection
is not enabled for the namespace.
Verify Canonical Service Creation: Run the following command to list all
Canonical Services in the namespace. Verify that the Canonical Service
my-app is created.
kubectl get canonicalservices -n NAMESPACE_NAME
Example output:
NAME AGE
my-app 3s
Cleanup: Delete the pod, canonical service and the namespace:
kubectl delete -f simple_pod.yaml -n NAMESPACE_NAME
kubectl delete canonicalservices my-app -n NAMESPACE_NAME
kubectl delete namespace NAMESPACE_NAME
Troubleshooting:
If the required canonical service is not created, refer to
Resolving Canonical Service issues in Cloud Service Mesh .
If the issue persists, you can revert to the in-cluster controller. Refer
Revert to the In-Cluster Canonical Service Controller .
Revert back to the In-Cluster Canonical Service Controller
If you encounter issues with the Managed Canonical Service Controller, you can
reinstall the in-cluster controller with the following command:
kubectl apply -f \
https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-service-mesh-packages/release-1.28/asm/canonical-service/controller.yaml
What's next
Learn about:
Canonical Services
Best practices in Canonical Services
Define a Canonical Service
Resolving Canonical Service issues
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
