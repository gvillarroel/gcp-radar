---
title: "About Config Connector CRDs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/concepts/resources
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/concepts/resources
  title: "About Config Connector CRDs \_|\_ Google Cloud Documentation"
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
About Config Connector CRDs
Config Connector includes a collection of
Custom Resource Definitions
(CRDs). Each CRD lets you configure a Google Cloud
resource from Kubernetes. Config Connector also lets you use a number
of Kubernetes features for managing Google Cloud resources.
This page introduces you to how Config Connector uses Kubernetes objects and
their metadata.
Kubernetes objects and Config Connector resources
For example, when you create a
Kubernetes Object
of kind: SQLInstance , Config Connector creates a Cloud SQL Instance.
This section describes how Config Connector extends object types.
Spec and Status
Each Config Connector resource is a
Kubernetes object
with a
Spec and a Status .
Spec
The spec field contains all the fields that define an object's desired
state, with the exception of Labels . The subfields of a spec
refer to the associated Google Cloud resource. When you change a
subfield, the Google Cloud resource's value is
eventually consistent with your intended value.
An example of a writable field is databaseVersion in a SQLInstance
resource.
Status
The status field is read-only and contains the current state of your object.
Config Connector periodically reads information on your Google Cloud
resource and updates the status . You can check a resource's error messages
or readiness by looking at the Status.Condition .
An example read-only status field is the connectionName of a
SQLInstance resource.
Object metadata
Each Config Connector resource includes a
metadata
field. This section describes how Config Connector uses subfields within
metadata.
Name
The name of a Config Connector resource. It should follow the
naming convention
of a Kubernetes object name. It is used by default as the name of the
corresponding Google Cloud resource. If the resourceID field is
supported in the Config Connector resource, you can specify a different
name, which follows the naming convention of the Google Cloud
resource, for the corresponding Google Cloud resource in the
spec.resourceID field. For more information, see
Managing resources with the resourceID field .
Namespace
The namespace you create a Config Connector resource in determines the
project that contains the Google Cloud resource. For more on
namespaces, see
Kubernetes Namespaces and Google Cloud Projects .
Labels
Labels in the metadata field of a Config Connector resource are also added
to the associated Google Cloud resource.
In addition, Config Connector adds a system label named managed-by-cnrm
with a value of true to your Google Cloud resources.
Annotations
Config Connector can take additional actions on your resources that are
not defined in the spec . These actions are defined in subfields of
metadata.annotations . Annotation values must be a string.
The types of annotations Config Connector supports
are described in annotations .
Folders and hierarchical resources
In addition to managing resources in Google Cloud products,
Config Connector supports creating and managing resources within
Google Cloud Folders and Organizations .
For more information, see Namespaces and projects .
Using RBAC for Access Control
Kubernetes
Role Based Access Control
(RBAC) secures your resources. You can control creation of Google Cloud
resources by assigning RBAC permissions. For more information, see
Securing access to resources .
Status Condition
Config Connector uses a ready condition in
status.condition for two purposes:
indicating when a resource is ready. When a resource is reconciled and
ready, its status.condition.status will be set to True . To check when
a resource is ready, see Waiting for resources to be ready
displaying additional error or information. The ready
condition has Message and Reason fields which provide additional
information on the resource's status.
Events
Important status changes for Config Connector resources are visible as
Kubernetes events. For more information, see
Viewing events .
Declarative configuration and eventual consistency
See Reconciliation .
What's next
Get started with Config Connector
Learn about the Resources
that Config Connector configures.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
