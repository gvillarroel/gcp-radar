---
title: "Enabling and disabling the Canonical Service controller \_|\_ Cloud Service\
  \ Mesh v1.20 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/canonical-service-controller-enable-and-disable
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/canonical-service-controller-enable-and-disable
  title: "Enabling and disabling the Canonical Service controller \_|\_ Cloud Service\
    \ Mesh v1.20 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing legacy v1.20 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.20
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Enabling and disabling the Canonical Service controller
Note: Canonical Services are supported automatically
in Cloud Service Mesh version 1.6.8 and higher.
When you install or upgrade Cloud Service Mesh using the
asmcli , it deploys the
Canonical Service controller
to your cluster. The Canonical Service controller groups workloads belonging to
the same logical service, and is required for the full functionality of
the Services dashboard in the Google Cloud console. Deploying the controller
creates the canonical-service-controller-manager deployment in your cluster in
the asm-system namespace, and does not affect your services or workloads.
If you didn't use the asmcli tool to install Cloud Service Mesh, you might not have
the Canonical Service controller enabled on your cluster. To determine if the
Canonical Service controller is enabled on your cluster:
kubectl get services -n asm-system
Enable the in-cluster Canonical Service controller
If the Canonical Service controller isn't enabled, you can enable it with
the following steps:
Download the kpt package that contains the controller to the current working
directory:
kpt pkg get https : //github.com/GoogleCloudPlatform/anthos-service-mesh-packages.git/asm@release-1.28 asm
Apply the controller configuration:
kubectl apply -f asm/canonical-service/controller.yaml
Disable the in-cluster Canonical Service controller
If you want to disable the Canonical Service controller:
Download the kpt package that contains the controller to the current working
directory:
kpt pkg get https : //github.com/GoogleCloudPlatform/anthos-service-mesh-packages.git/asm@release-1.28 asm
Delete the controller from your cluster:
kubectl delete -f asm/canonical-service/controller.yaml
Enable the Managed Canonical Service Controller
Platform note: Managed Canonical Service Controller is not supported
on Google Distributed Cloud (includes Google Distributed Cloud and
Google Distributed Cloud).
If you would prefer not to install the in-cluster controller, you can instead
enable the Managed Canonical Service Controller, which performs the same
function for all the registered clusters in your mesh without the need to
install or manage the controller yourself.
The managed controller is designed to yield to the in-cluster controller.
If you are migrating from the in-cluster controller, you must delete the
in-cluster controller from each cluster it is running on for the managed
controller to take over. For more information, see
Disable the in-cluster Canonical Service controller .
To enable the Managed controller:
Anthos Features Page
In the Google Cloud console, go to the GKE Enterprise Clusters page.
Go to the GKE Enterprise Clusters page
"Register" all the clusters in your mesh.
In the Google Cloud console, go to the GKE Enterprise Features page.
Go to the GKE Enterprise Features page
Click Enable next to the "Service Mesh" feature
After a few minutes, the Managed controller activates and creates Canonical
Services for the workloads running on registered clusters in your mesh. Run
kubectl get canonicalservices --all-namespaces to confirm that some
Canonical Services have been created for the workloads in your mesh.
GKE cluster creation
If you used the Enable Cloud Service Mesh option when creating a new
GKE cluster , then the
Managed Canonical Service Controller was installed by default.
Ensure you are running the Managed Canonical Service Controller by running the
following command:
gcloud beta container hub mesh describe --project= PROJECT_ID
The description states that the Canonical Services are reconciled successfully:
projects/<your project number>/locations/global/memberships/<your cluster name>:
code: OK
description: |-
Revision(s) ready for use: asm-managed.
All Canonical Services have been reconciled successfully.
servicemeshFeatureState: {}
updateTime: '2021-11-16T21:10:36.289467777Z'
If the Canonical Services aren't reconciled successfully, there will either be
an error message, or an output similar to the following message:
projects/<your project number>/locations/global/memberships/<your cluster name>:
code: OK
description: |-
Revision(s) ready for use: istiod-asm-173-6.
The Managed Canonical Service Controller is yielding to the in-cluster controller. See https://cloud.google.com/service-mesh/v1.20/docs/canonical-service-controller-enable-and-disable#disable-in-cluster-service-controller for instructions on removing the in-cluster controller.
servicemeshFeatureState: {}
updateTime: '2021-11-16T21:05:43.286828851Z'
lifecycleState: ENABLED
Managed control plane installation
If you installed managed Cloud Service Mesh (with the
fleet API or with
asmcli ),
then the Managed Canonical Service Controller was installed by default.
Ensure you are running the Managed Canonical Service Controller by running the
following command:
gcloud beta container hub mesh describe --project= PROJECT_ID
The description states that the Canonical Services are reconciled successfully:
projects/<your project number>/locations/global/memberships/<your cluster name>:
code: OK
description: |-
Revision(s) ready for use: asm-managed.
All Canonical Services have been reconciled successfully.
servicemeshFeatureState: {}
updateTime: '2021-11-16T21:10:36.289467777Z'
If the Canonical Services aren't reconciled successfully, there will either be
an error message, or an output similar to the following message:
projects/<your project number>/locations/global/memberships/<your cluster name>:
code: OK
description: |-
Revision(s) ready for use: istiod-asm-173-6.
The Managed Canonical Service Controller is yielding to the in-cluster controller. See https://cloud.google.com/service-mesh/v1.20/docs/canonical-service-controller-enable-and-disable#disable-in-cluster-service-controller for instructions on removing the in-cluster controller.
servicemeshFeatureState: {}
updateTime: '2021-11-16T21:05:43.286828851Z'
lifecycleState: ENABLED
What's next
Learn about:
Canonical Services
Best practices in Canonical Services
Defining a Canonical Service
Resolving Canonical Service issues
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
