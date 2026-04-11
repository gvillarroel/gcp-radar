---
title: "Defining a Canonical Service \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/define-canonical-service
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/cloud-run-api-reference
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/define-canonical-service
  title: "Defining a Canonical Service \_|\_ Cloud Service Mesh \_|\_ Google Cloud\
    \ Documentation"
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
Defining a Canonical Service
Note: Canonical Services are supported automatically
in Cloud Service Mesh version 1.6.8 and higher.
Canonical Services is a group of workloads
that implement the same service(s) and API(s). For supported workload types,
Cloud Service Mesh automatically creates Canonical Service resources based on existing
information from the Kubernetes API Server. This page explains what labels
automatically define Canonical Services and how you can manually adjust the
boundaries of your services.
The currently supported workload instance types are:
Kubernetes Pods (including via Kubernetes Deployments, Kube Run Services, etc.)
Virtual Machine instances
Mesh-external services (specifically, ServiceEntry resources with a location
of MESH_EXTERNAL )
What defines Canonical Services
Cloud Service Mesh determines the Canonical Service membership by reading the
service.istio.io/canonical-name
label
on the Kubernetes configuration resource associated with each workload instance:
For Pods, the label is in the Kubernetes Pod resource
For VMs, the label in the Istio WorkloadEntry resource
For external services, the label is in the Istio ServiceEntry resource
Canonical Services have the same
Kubernetes namespace
as their associated workload instances and cannot span namespaces.
Automatic labeling rules
Cloud Service Mesh automatically groups your Pod- and VM-based workloads into
Canonical Services with no action on your part.
You only need to take action to:
Adjust labels for user/reader clarity
Override the default behavior.
Automatic labeling in Kubernetes Pods
Canonical Services focus around the Kubernetes app.kubernetes.io/name and
app labels. Note that the former label takes precedence.
If you use either of these two labels on your workloads, no further work is
required.
Automatic labeling in Virtual Machines
To build Canonical Services on your VMs, you must add your VMs to a
service mesh by configuring a
WorkloadEntry resource
in your Kubernetes API server.
Manually labeling
To manually apply or override a Canonical Service label apply the
service.istio.io/canonical-name label to supported workload resource
configurations.
In order for an external service to be recognized as a Canonical Service, you
must manually label the applicable ServiceEntry.
Manual labeling in Kubernetes Pods
To deploy many Pods at once using a
Deployment ,
set the service.istio.io/canonical-name label on the PodTemplateSpec:
apiVersion : apps/v1
kind : Deployment
metadata :
name : my-deployment
namespace : my-namespace
spec :
replicas : 3
template :
metadata :
labels :
service.istio.io/canonical-name : my-service
spec :
containers :
...
To label the Canonical Service of a single Pod, add the
service.istio.io/canonical-name label to the labels section of your Pod
configuration:
apiVersion : v1
kind : Pod
metadata :
name : my-test-pod
namespace : my-namespace
labels :
service.istio.io/canonical-name : my-service
spec :
...
Label virtual machines manually
To label the Canonical Service of a single VM/WorkloadEntry, add the
service.istio.io/canonical-name label to the "labels" section of your
WorkloadEntry configuration:
apiVersion : networking.istio.io/v1alpha3
kind : WorkloadEntry
metadata :
name : my-vm-123
namespace : my-namespace
labels :
service.istio.io/canonical-name : my-service
spec :
...
Label external services manually
To label the Canonical Service of a single external service/ServiceEntry, add the
service.istio.io/canonical-name label to the "labels" section of your
ServiceEntry configuration:
apiVersion : networking.istio.io/v1alpha3
kind : ServiceEntry
metadata :
name : example-com
namespace : my-namespace
labels :
service.istio.io/canonical-name : an-external-service
spec :
location : MESH_EXTERNAL
...
What's next
Learn about Canonical Services
Learn about best practices in Canonical Services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
