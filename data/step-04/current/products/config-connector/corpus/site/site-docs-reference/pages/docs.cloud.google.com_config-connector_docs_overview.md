---
title: "Config Connector overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/concepts/resources
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/overview
  title: "Config Connector overview \_|\_ Google Cloud Documentation"
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
Config Connector overview
Standard
Config Connector is an open source Kubernetes add-on that lets you manage
Google Cloud resources through Kubernetes.
Many cloud-native development teams work with a mix of configuration systems,
APIs, and tools to manage their infrastructure. This mix is often difficult to
understand, leading to reduced velocity and expensive mistakes. Config Connector
provides a method to configure many
Google Cloud services and resources
using Kubernetes tooling and APIs.
With Config Connector, your environments can use Kubernetes-managed
Resources
including:
RBAC for access control.
Events for visibility.
Single source of configuration and desired state management for reduced
complexity.
Eventual consistency through loosely-coupled dependencies.
You can manage your Google Cloud infrastructure the same way
you manage your Kubernetes applications, reducing the complexity and cognitive
load for developers.
How Config Connector works
Config Connector provides a collection of Kubernetes
Custom Resource Definitions
(CRDs) and controllers. The Config Connector CRDs allow Kubernetes to create and
manage Google Cloud resources when you configure and apply
Objects to your cluster.
For Config Connector CRDs to function correctly, Config Connector deploys Pods
to your nodes that have elevated RBAC permissions, such as the ability to
create, delete, get, and list CustomResourceDefinitions (CRDs). These
permissions are required for Config Connector to create and reconcile Kubernetes
resources.
To get started,
install Config Connector
and create your first resource .
Config Connector's
controllers
eventually reconcile your environment with your desired state.
Customizing Config Connector's behavior
Config Connector provides additional features beyond creating resources.
For example, you can manage
existing Google Cloud resources ,
and use Kubernetes Secrets to
provide sensitive data, such as passwords, to your resources. For more
information, see the list of how-to guides .
To learn more about how Config Connector uses custom resources, see
About Config Connector CRDs . For
the full list of Google Cloud resources supported by Config Connector, see
the Config Connector reference documentation .
What's next
Install Config Connector .
Get started by creating your
first resource.
Explore Config Connector source code . Config Connector is fully open sourced on GitHub.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
