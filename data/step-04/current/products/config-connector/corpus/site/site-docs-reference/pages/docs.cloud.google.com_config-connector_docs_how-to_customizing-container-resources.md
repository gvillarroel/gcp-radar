---
title: "Configure container resources and replicas \_|\_ Config Connector \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/concepts/resources
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources
  title: "Configure container resources and replicas \_|\_ Config Connector \_|\_\
    \ Google Cloud Documentation"
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
Configure container resources and replicas
This pages describes how to configure container resources and replicas for
controllers in Config Connector.
Configure resource allocation for a Config Connector controller container
In Config Connector version 1.106 and later, you can configure the CPU and
memory (RAM) resources allocated to a container in a Config Connector controller
Pod. You can configure the following controllers:
cnrm-webhook-manager
cnrm-controller-manager
cnrm-deletiondefender
cnrm-resource-stats-recorder
cnrm-unmanaged-detector (Config Connector version 1.108 and later)
There are two types of custom resources used for configuration: ControllerResource and NamespacedControllerResource .
Use ControllerResource for cluster-scoped components
Use the ControllerResource custom resource to configure resources for Config Connector components that run as cluster-scoped deployments.
The following components are always cluster-scoped, even when Config Connector is installed in namespaced mode:
cnrm-webhook-manager
cnrm-deletiondefender
cnrm-resource-stats-recorder
cnrm-unmanaged-detector
The cnrm-controller-manager is also cluster-scoped when Config Connector is installed in cluster mode.
For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file:
apiVersion : customize.core.cnrm.cloud.google.com/v1beta1
kind : ControllerResource
metadata :
name : cnrm-webhook-manager
spec :
containers :
- name : webhook
resources :
limits :
memory : 512Mi
requests :
memory : 256Mi
Use NamespacedControllerResource for the namespaced controller manager
Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
The configuration of container resources for a namespaced controller is enabled in Config Connector version 1.108 and later.
The following YAML file shows an example configuration:
apiVersion : customize.core.cnrm.cloud.google.com/v1beta1
kind : NamespacedControllerResource
metadata :
name : cnrm-controller-manager # name should not contain the namespace ID suffix
namespace : NAMESPACE
spec :
containers :
- name : manager
resources :
limits :
cpu : 200m
memory : 512Mi
requests :
cpu : 100m
memory : 256Mi
Replace NAMESPACE with the name of your namespace.
Configure replicas for a Config Connector controller Pod
In Config Connector version 1.107 and later, you can configure the number of
replicas for a Config Connector controller. You can only configure the
cnrm-webhook-manager .
For example, the following steps show how to configure the number of replicas
for the cnrm-webhook-manager controller to 3 .
Create a file named configure-webhook-manager.yaml and copy the following
YAML into it:
apiVersion : customize.core.cnrm.cloud.google.com/v1beta1
kind : ControllerResource
metadata :
name : cnrm-webhook-manager
spec :
replicas : 3
containers :
- name : webhook
resources :
limits :
memory : 512Mi
requests :
memory : 256Mi
Use kubectl apply
to apply the modified configuration to your cluster:
kubectl apply -f configure-webhook-manager.yaml
Verify the successful configuration by running the following command.
kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}'
It should display status.healthy field set to true .
Verify the presence of 3 webhook Pods within your cluster.
kubectl get pods -n cnrm-system -l cnrm.cloud.google.com/component=cnrm-webhook-manager
Creating and recreating the Pods could take a few minutes.
Note: Config Connector includes a
HorizontalPodAutoscaler
that periodically adjusts the appropriate replicas for the
cnrm-webhook-manager controller. If you manually configure the replicas using
the configuration YAML, the Config Connector operator automatically adjusts the
minReplicas and maxReplicas of the HorizontalPodAutoscaler to ensure the
cluster maintains at least the specified number of replicas in the configuration
YAML.
Revert configuration changes in container resources and replicas
Use kubectl
delete
to delete the ControllerResource custom resources that you configured. After
deletion, the Config Connector operator recreates the controllers with the
default container resources and replicas.
kubectl delete -f configure-webhook-manager.yaml
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
