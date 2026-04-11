---
title: "Apigee Operator for Kubernetes overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview
  title: "Apigee Operator for Kubernetes overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Apigee Operator for Kubernetes overview
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
The Apigee Operator for Kubernetes allows you to perform API management tasks,
such as defining API products
and operations , using Kubernetes tools. It is designed to support
cloud-native developers by providing a command-line interface that integrates with familiar Kubernetes tools like
kubectl . The operator works by using various APIM resources to keep your
Google Kubernetes Engine cluster synchronized with the Apigee runtime.
Note : The Apigee Operator for Kubernetes is designed to be used with
the Apigee runtime. It is not a standalone product.
Benefits
The Apigee Operator for Kubernetes can benefit your organization by providing:
Simplified API Management : The APIM Operator allows API producers to manage and
secure their APIs using Kubernetes resource definitions.
You can use the same tools and workflows for managing your APIs that you use for other Kubernetes resources.
Streamlined Networking : The operator enforces API policies at the load balancer
level, which streamlines the networking setup and reduces complexity in managing API access and security.
Fine-grained access control : The addition of Kubernetes' role-based access control (RBAC) to Apigee
custom resource definitions enables fine-grained access control for a range of roles, including API developers, platform administrators, and
infrastructure administrators.
Integration with Kubernetes : The operator integrates with native Kubernetes
concepts such as Custom Resource Definitions (CRDs) and Helm charts, providing a seamless experience for cloud-native developers.
Reduced Context Switching : By enabling API management directly from the Kubernetes environment,
the APIM Operator reduces the need for developers to switch between different tools and interfaces.
When to use Apigee Operator for Kubernetes
The Apigee Operator for Kubernetes is designed to be used by API producers who want to manage their APIs
using Kubernetes tools. It is especially useful for cloud-native developers who are familiar
with Kubernetes and want to use the same tools and workflows for managing their APIs that they use for other Kubernetes resources.
The Apigee Operator for Kubernetes enables existing Apigee customers to extend their API management
infrastructure with tools based on Cloud Native Computing Foundation (CNCF)
technologies.
How Apigee Operator for Kubernetes works
The Apigee Operator for Kubernetes uses the GKE gateway of an
Application Load Balancer , along with
a traffic extension to act as a policy enforcement point (PEP).
The traffic extension calls out to Apigee using the Apigee Extension Processor and Apigee acts as the policy decision point (PDP).
When configuring the Apigee Operator for Kubernetes, you can use one of the following approaches to describe the traffic extension:
Create an APIMExtensionPolicy . With this approach, the Apigee Operator for Kubernetes creates the required traffic extension on the GKE
gateway with the appropriate configuration. We recommend using this approach if you do not have other traffic extensions
or you do not want to create one yourself. Do not use the APIMExtensionPolicy if you have other traffic extensions on the GKE gateway
that need to work with the Apigee traffic extension.
See Create an APIMExtensionPolicy for more information on
using this approach to implement the Apigee Operator for Kubernetes.
Use an ApigeeBackendService . We recommend using this approach if you are creating and managing
Cloud Load Balancing traffic extensions
and you want to add Apigee as an extension in your traffic extension resource. You must use the
ApigeeBackendService if the Apigee traffic extension has to work in conjunction with other traffic extensions.
Note: The ApigeeBackendService requires GKE version 1.34.x or later.
See Create an ApigeeBackendService for more information on using this approach to implement the Apigee Operator for Kubernetes.
Requirements
Before you install the Apigee Operator for Kubernetes, note the following:
The Apigee Operator for Kubernetes requires a GKE cluster with GKE version 1.27 or later.
The Apigee Operator for Kubernetes is only supported for use with Apigee version 1-15-0-apigee-4 or later. It can't be used with
Apigee hybrid at this time.
The Apigee Operator for Kubernetes requires Helm version 3.13.3 or later.
Known limitations
The following limitations apply to the Apigee Operator for Kubernetes:
Only REST APIs are supported. gRPC and GraphQL are not supported.
A maximum of 25 regional or global GKE Gateway resources with API management policies
attached are supported.
A maximum of 50 APIM extension policies can be applied to a single environment. To add more APIM extension policies,
you must create a new environment.
API management policies can only be attached to Gateway resources and not to HTTPRoutes. API management policies
can't be used to govern HTTPRoutes. As an alternative, policies can be applied conditionally on a route (basepath or header), using
the conditional policy feature of the ApimTemplate resource .
Region expansion is not supported. Once configured, the
Apigee Operator for Kubernetes can't be expanded to additional regions.
If using the ApigeeBackendService to implement the
GKE traffic extensions, you must use GKE version 1.34.x or later and
deploy all gateway resources in the default namespace.
The API version has changed from the public preview (now apim.googleapis.com/v1 ). The GA version of Apigee Operator for Kubernetes is not
compatible with or upgradeable from the public preview version previously released.
What's next
Learn how to Install the Apigee Operator for Kubernetes .
Create an APIMExtensionPolicy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
