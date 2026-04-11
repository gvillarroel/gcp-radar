---
title: "CapacityBuffer \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/capacitybuffer
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/capacitybuffer
  title: "CapacityBuffer \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
CapacityBuffer
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The CapacityBuffer CustomResourceDefinition (CRD) lets you provision
spare capacity within a cluster. A CapacityBuffer causes the cluster autoscaler to scale
up nodes in advance by simulating placeholder Pods in its memory, ensuring that
spare capacity is available to handle sudden workload spikes or to speed up
scaling events. These placeholder Pods are for internal cluster autoscaler use
only and are not visible in your cluster.
CapacityBuffer specification
spec :
provisioningStrategy : string
podTemplateRef :
name : string
scalableRef :
apiGroup : string
kind : string
name : string
replicas : integer
percentage : integer
limits :
string : string
Fields
spec.provisioningStrategy
optional
string
Defines how GKE provisions the buffer. "buffer.x-k8s.io/active-capacity" is the default strategy, where the buffer actively scales up the cluster by creating placeholder Pods.
spec.podTemplateRef
optional
object
A reference to a PodTemplate resource in the same namespace that defines the resource requirements for a single unit of buffer capacity. This template provides the specification for placeholder Pods which the cluster autoscaler simulates to provision buffer capacity. You must specify only one of podTemplateRef or scalableRef .
spec.scalableRef
optional
object
A reference to an object of a kind that has a scale subresource . This allows the CapacityBuffer to manage the buffer by scaling based on an existing scalable resource, such as a Deployment , ReplicaSet , StatefulSet , ReplicationController , or Job . You must specify only one of podTemplateRef or scalableRef .
spec.replicas
optional
integer
Defines the selected number of buffer units to provision. If you don't set replicas or percentage , GKE creates as many units as fit within defined resource limits. If both are set, GKE uses the maximum of the two values provided they both fit within the limits.
spec.percentage
optional
integer
Defines the selected buffer capacity as a percentage of the scalableRef 's current replicas. This is only applicable if scalableRef is set. This value can be greater than 100%. The absolute number of replicas is a calculation of the percentage, rounded up to a minimum of 1.
spec.limits
optional
map (string: quantity)
Limits the number of units GKE creates for this buffer based on total resource requests (for example, CPU and memory). If you set replicas or percentage , these limits serve as an upper bound, ensuring that buffer capacity does not exceed them. If you don't set replicas or percentage , GKE creates as many units as fit within defined resource limits.
CapacityBuffer status
The status section indicates the observed state of the CapacityBuffer resource.
Fields
status.podTemplateRef
object
The observed reference to the PodTemplate that was used to provision the buffer. If this field is not set, and the conditions indicate an error, it provides details about the error state.
status.replicas
integer
The number of buffer units that GKE should provision based on fields in the specification such as limits , percentage , and replicas .
status.podTemplateGeneration
integer
The observed generation of the PodTemplate , which determines if the status is up-to-date with the selected spec.podTemplateRef .
status.conditions
array (object)
List of status conditions for the buffer. The Ready condition indicates if GKE successfully provisioned the buffer. The ReadyForProvisioning condition type indicates if the buffer is compatible with the underlying infrastructure's billing model.
status.provisioningStrategy
string
The provisioning strategy used by the buffer.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
