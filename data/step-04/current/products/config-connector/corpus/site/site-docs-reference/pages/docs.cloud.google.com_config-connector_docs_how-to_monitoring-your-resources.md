---
title: "Monitoring your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/concepts/resources
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources
  title: "Monitoring your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
Monitoring your resources
To get information on your resources, you can use kubectl .
Before you begin
To complete these steps, you need existing Config Connector resources.
For an example resource, see
Getting started with Config Connector .
Listing all resources
You can list the resources that Config Connector manages with, by running
the following command:
kubectl get gcp
Determining a resource's status
You can determine if your resource is ready by looking at its
status.condition .
Config Connector updates the status to reflect the current state of
your resource.
kubectl wait --for=condition=READY KIND NAME
Replace the following:
KIND : your resource's kind. For example, PubSubTopic .
NAME : your resource's name
Viewing events
Config Connector creates Kubernetes events with information and errors about
managing resources. You can view events for a specific resource, or all events
in your Config Connector environment.
Viewing events for a single resource
You can view the events for a single resource by examining the Events field
in the output of the following command:
kubectl describe KIND NAME
Replace the following:
KIND : your resource's kind
NAME : your resource's name
For example, if you had a Config Connector SQLInstance resource
named sqlinstance-sample , use the following command to view its events:
kubectl describe sqlinstance sqlinstance-sample
Viewing events for a namespace
To see the events for all Kubernetes resources in a given namespace, including
your Config Connector resources, run the following command:
kubectl --namespace CC_NAMESPACE get events
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Config Connector-specific events
Config Connector can create the following event types:
Updating
Occurs when a Config Connector resource's underlying Google Cloud
resource is being updated.
UpToDate
Occurs when a Config Connector resource's reconciliation has succeeded.
This event type means that the underlying Google Cloud resource now
matches the desired state specified by the Config Connector resource.
UpdateFailed
Occurs when a Config Connector resource's reconciliation has failed.
DependencyNotReady
Occurs when a referenced Config Connector resource is not ready. You can
determine whether a resource is ready by checking its
status .
DependencyNotFound
Occurs when a referenced Config Connector resource or Kubernetes Secret
is not found.
DependencyInvalid
Occurs when a reference is invalid. For example, if a Config Connector
resource references a Kubernetes Secret that exists but
does not contain the specified key, the reference is invalid.
Deleting
Occurs when Config Connector resource is being deleted from the Kubernetes
API Server.
Deleted
Occurs when a Config Connector resource has successfully been deleted from
the Kubernetes API Server.
DeleteFailed
Occurs when a Config Connector resource has failed to be deleted from the
Kubernetes API Server.
ManagementConflict
Occurs when a Config Connector resource fails to take ownership of the
underlying Google Cloud resource. When this occurs, it is usually
because another Config Connector resource already has ownership of the
Google Cloud resource. Read more about how Config Connector handles
conflicts between multiple Config Connector resources .
PreActuationTransformFailed
Occurs when a Config Connector resource fails to perform pre-actuation transformations.
This event type likely means that the resource configuration is invalid.
PostActuationTransformFailed
Occurs when a Config Connector resource fails to perform post-actuation transformations.
Unmanaged
Occurs when Config Connector is in
namespaced-mode
and the Config Connector resource is in a namespace where Config Connector
is not enabled (that is, the namespace does not have a
ConfigConnectorContext object).
This event can occur even if the namespace does have a
ConfigConnectorContext if the ConfigConnectorContext was created around
the same time as the Config Connector resource. You just need to wait
some time for Config Connector to start managing the resource.
What's next
Learn more about
Kubernetes application introspection .
Monitor your Config Connector installation with
Prometheus .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
