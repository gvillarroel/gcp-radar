---
title: "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/cloud-run-api-reference
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed
  title: "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\
    \ \_|\_ Google Cloud Documentation"
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
Enable optional features on managed control plane
Note: This guide only supports Cloud Service Mesh with Istio APIs and does
not support Google Cloud APIs. For more information see,
Cloud Service Mesh overview .
This page describes how to enable optional features on managed
Cloud Service Mesh. For information on the in-cluster control plane, see
Enabling optional features on the in-cluster control plane .
Caution: There is a known issue with the TRAFFIC_DIRECTOR control plane
implementation. If you are using that implementation, then you must make changes
in the istio-asm-managed-rapid configmap, even if you are using a channel
other than rapid.
When you provision managed Cloud Service Mesh, supported features differ
based on the control plane implementation, and certain features are only
available via allowlist. See
supported features for details.
If you are using an IstioOperator based configuration today, the
Distroless proxy image
If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC_DIRECTOR
control plane implementation ,
then only the distroless image type is supported. You cannot change it.
If your fleet originally used the ISTIOD control plane implementation and was
migrated to the TRAFFIC_DIRECTOR implementation, your image type was left unchanged
during migration, and you can change the image type to distroless yourself.
As a best practice, you should restrict the contents of a container runtime to
only the necessary packages. This approach improves security and the
signal-to-noise ratio of Common Vulnerabilities and Exposures (CVE) scanners.
Istio provides proxy images based on distroless base images .
The distroless proxy image does not contain any binaries other than the proxy.
It is therefore not possible to exec a shell or use curl , ping , or other
debug utilities inside the container. However, you can use ephemeral containers
to attach to a running workload Pod to be able to inspect it and run custom
commands. For example, see
Collecting Cloud Service Mesh logs .
The following configuration enables distroless images for the entire Cloud Service Mesh.
An image type change requires each pod to restart and get re-injected to take effect.
apiVersion : v1
kind : ConfigMap
metadata :
name : istio- release-channel
namespace : istio-system
data :
mesh : |-
defaultConfig:
image:
imageType: distroless
You may override the imageType by using the following pod annotation.
sidecar.istio.io/proxyImageType : debug
After changing the image type of a deployment using the annotation, the
deployment should be restarted.
kubectl rollout restart deployment -n NAMESPACE DEPLOYMENT_NAME
Because it does not require a debug base image, most types of proxy debugging
should use gcloud beta container fleet mesh debug proxy-status / proxy-config
( details ).
Outbound Traffic Policy
By default outboundTrafficPolicy is set to ALLOW_ANY . In this mode, all
traffic to any external service is allowed. To control and restrict the traffic
to only the external services for which
service entries
are defined you can change the default behavior of ALLOW_ANY to
REGISTRY_ONLY .
Warning: You can overwrite your own changes. If you already have an existing
configmap, you must include all previous customization settings within the
mesh: section to preserve your changes.
The following configuration configures the outboundTrafficPolicy to
REGISTRY_ONLY :
apiVersion : v1
kind : ConfigMap
metadata :
name : istio- release-channel
namespace : istio-system
data :
mesh : |-
outboundTrafficPolicy:
mode: REGISTRY_ONLY
where release-channel is your release channel
( asm-managed , asm-managed-stable , or asm-managed-rapid ).
You can make the previous necessary config changes in the configmap using the
following command:
kubectl edit configmap istio- release-channel -n istio-system -o yaml
Run the following command to view the configmap:
kubectl get configmap istio- release-channel -n istio-system -o yaml
To verify that outboundTrafficPolicy is enabled with REGISTRY_ONLY , ensure
the following lines appear in the mesh: section.
...
apiVersion : v1
data :
mesh : |
outboundTrafficPolicy:
mode: REGISTRY_ONLY
...
End user authentication
You can configure managed Cloud Service Mesh user authentication for
browser-based end-user authentication and access control to your deployed
workloads. For more information, see
Configuring Cloud Service Mesh user authentication .
Configure the minimum TLS version for your workloads
If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC_DIRECTOR
control plane implementation ,
then you cannot change this setting.
You can use the minProtocolVersion field to specify the minimum TLS version
for the TLS connections among your workloads. For more information on setting
the minimum TLS version and checking the TLS configuration of your workloads,
see Istio Workload Minimum TLS Version Configuration .
Warning: The Istio guide linked in the preceding paragraph uses IstioOperator ,
which is not supported by managed Cloud Service Mesh. You must convert the
IstioOperator to an equivalent ConfigMap , such as the following example.
The following example shows a ConfigMap setting the minimum TLS version for
workloads to 1.3:
apiVersion : v1
kind : ConfigMap
metadata :
name : istio- release-channel
namespace : istio-system
data :
mesh : |-
meshMTLS:
minProtocolVersion: TLSV1_3
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
