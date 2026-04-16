---
title: "Agent Sandbox CRDs \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/agentsandbox
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/agentsandbox
  title: "Agent Sandbox CRDs \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
    \ Documentation"
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
Agent Sandbox CRDs
Stay organized with collections
Save and categorize content based on your preferences.
GKE Agent Sandbox features are configured with the following custom resource definitions (CRDs):
Sandbox
SandboxTemplate
SandboxClaim
SandboxWarmPool
To learn more about the Agent Sandbox claim model and warm pools, see About GKE Agent Sandbox .
Sandbox specification
Sandbox represents an isolated environment for running workloads.
spec :
podTemplate : ...
replicas : ...
shutdownPolicy : ...
shutdownTime : ...
volumeClaimTemplates : ...
Spec
Fields
spec.podTemplate
required
object
Template for Sandbox Pods. Follows the standard Kubernetes PodTemplateSpec .
spec.replicas
optional
integer
The number of ready Sandboxes you want to maintain in the warm pool.
spec.shutdownPolicy
optional
string
Configuration for shutdownPolicy.
spec.shutdownTime
optional
string
Configuration for shutdownTime.
spec.volumeClaimTemplates
optional
[]object
A list of standard Kubernetes PersistentVolumeClaim templates. Used to dynamically provision storage for the Sandbox.
Status
Fields
status.conditions
optional
array (object)
List of status conditions for the resource.
status.conditions[].lastTransitionTime
required
string
The last time the condition transitioned from one status to another.
status.conditions[].message
required
string
A human-readable message indicating details about the transition.
status.conditions[].observedGeneration
optional
integer
The most recent generation observed by the controller.
status.conditions[].reason
required
string
The reason for the condition's last transition.
status.conditions[].status
required
string
The status of the condition ( True , False , or Unknown ).
status.conditions[].type
required
string
The type of the condition.
status.replicas
required
integer
The current number of ready Sandboxes in the warm pool.
status.selector
optional
string
Configuration for selector.
status.service
optional
string
Configuration for service.
status.serviceFQDN
optional
string
Configuration for serviceFQDN.
SandboxTemplate specification
SandboxTemplate defines the reusable configuration for creating Sandboxes.
spec :
networkPolicy : ...
podTemplate : ...
Spec
Fields
spec.networkPolicy
optional
object
Defines the network policy for the Sandbox, including ingress and egress rules. This aligns with standard Kubernetes NetworkPolicy semantics.
spec.networkPolicy.egress
optional
[]object
List of egress rules to be applied to the selected Pods.
spec.networkPolicy.ingress
optional
[]object
List of ingress rules to be applied to the selected Pods.
spec.podTemplate
required
object
Template for Sandbox Pods. Follows the standard Kubernetes PodTemplateSpec .
Status
Fields
SandboxClaim specification
SandboxClaim requests a Sandbox from a given template, optionally satisfied immediately by a warm pool.
spec :
sandboxTemplateRef : ...
Spec
Fields
spec.sandboxTemplateRef
required
object
Reference to the SandboxTemplate resource that defines the configuration for this Sandbox.
spec.sandboxTemplateRef.name
required
string
The name of the SandboxTemplate resource.
Status
Fields
status.conditions
optional
array (object)
List of status conditions for the resource.
status.conditions[].lastTransitionTime
required
string
The last time the condition transitioned from one status to another.
status.conditions[].message
required
string
A human-readable message indicating details about the transition.
status.conditions[].observedGeneration
optional
integer
The most recent generation observed by the controller.
status.conditions[].reason
required
string
The reason for the condition's last transition.
status.conditions[].status
required
string
The status of the condition ( True , False , or Unknown ).
status.conditions[].type
required
string
The type of the condition.
status.sandbox
optional
object
Information about the provisioned Sandbox.
status.sandbox.Name
optional
string
The name of the allocated Sandbox.
SandboxWarmPool specification
SandboxWarmPool maintains a set of ready Sandboxes to decrease startup latency for new claims.
spec :
replicas : ...
sandboxTemplateRef : ...
Spec
Fields
spec.replicas
required
integer
The number of ready Sandboxes you want to maintain in the warm pool.
spec.sandboxTemplateRef
required
object
Reference to the SandboxTemplate resource that defines the configuration for this Sandbox.
spec.sandboxTemplateRef.name
required
string
The name of the SandboxTemplate resource.
Status
Fields
status.replicas
optional
integer
The current number of ready Sandboxes in the warm pool.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
