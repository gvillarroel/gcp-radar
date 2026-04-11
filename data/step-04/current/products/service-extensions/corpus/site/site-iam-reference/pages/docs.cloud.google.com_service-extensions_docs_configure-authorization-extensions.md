---
title: "Configure an authorization extension \_|\_ Service Extensions \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions
  title: "Configure an authorization extension \_|\_ Service Extensions \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Guides
Send feedback
Configure an authorization extension
Stay organized with collections
Save and categorize content based on your preferences.
Service Extensions enables Application Load Balancers to send callouts to
backend services to insert custom processing in the processing path.
Authorization extensions run in
the request processing path when the load balancer receives request headers and
after the URL map chooses the backend
service. This page describes how to configure authorization extensions to use a
custom authorization engine defined in an authorization policy .
For an overview about Application Load Balancer extensions, see
Cloud Load Balancing extensions overview .
Introduction
Cloud Load Balancing lets you configure authorization policies that enforce
access control on traffic entering load balancers. Sometimes, complex
authorization decisions cannot be readily expressed using an authorization
policy.
You can configure authorization policies with authorization extensions to
delegate authorization decisions to custom authorization engines. In the data
path, authorization extensions are executed after route extensions but
before traffic extensions. For each authorization request,
the load balancer forwards the request headers to the extension. Depending on
the response from the provider, the load balancer proxy either forwards or
rejects the request.
For information about the limits related to Application Load Balancer extensions,
see the Quotas and limits page.
Important: You can attach only one authorization extension to a forwarding rule.
Before you begin
Create the required resources as described in
Configure a callout backend service .
Configure an authorization extension
The following example shows how to configure an authorization extension,
my-authz-ext , with an authorization policy to delegate authorization
decisions for a regional internal Application Load Balancer in us-east1 .
gcloud
Configure the authorization extension.
Define the extension in a YAML file that associates it with the backend
service, authz-service . Use the sample values provided.
cat >authz-extension.yaml <<EOF
name: my-authz-ext
authority: ext11.com
loadBalancingScheme: INTERNAL_MANAGED
service: https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-west1/backendServices/authz-service
forwardHeaders:
- Authorization
failOpen: false
timeout: "0.1s"
wireFormat: EXT_AUTHZ_GRPC
forwardAttributes:
- request.mcp_param
- connection.client_cert_leaf
EOF
Replace PROJECT_ID with the
project ID .
By default, all Service Extensions callouts use the
Envoy External Processing or ext_proc protocol.
In the case of authorization callouts, the more optimally suited
External Authorization or ext_authz protocol
is also supported in Preview .
When the wireFormat option is set to
EXT_AUTHZ_GRPC , the callout uses the ext_authz protocol. If the
option isn't specified, the callout uses the ext_proc protocol.
For more information about the fields in the YAML file, see
ExtensionChain
in the API documentation. For information about supported attributes,
see Supported attributes .
Import the authorization extension. Use the
gcloud service-extensions authz-extensions import command with the following sample values.
gcloud service-extensions authz-extensions import my-authz-ext \
--source=authz-extension.yaml \
--location=us-east1
If you want to set the protocol to ext_authz , use the
gcloud beta service-extensions authz-extensions import command instead.
Configure an authorization policy with the extension.
Define an authorization policy that associates
the extension my-authz-ext with the forwarding rule fr1 .
Use the sample values provided. The CUSTOM action indicates that an
extension is being used.
cat >authz-policy.yaml <<EOF
name: my-authz-policy
target:
loadBalancingScheme: INTERNAL_MANAGED
resources:
- "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/us-east1/forwardingRules/fr1"
action: CUSTOM
customProvider:
authzExtension:
resources:
- "projects/ PROJECT_ID /locations/us-east1/authzExtensions/my-authz-ext"
EOF
Import the authorization policy to the project. Use the
gcloud network-security authz-policies import command
with the following sample values.
gcloud network-security authz-policies import my-authz-policy \
--source=authz-policy.yaml \
--location=us-east1
Limitations for authorization extensions
The following are some limitations of authorization extensions:
An authorization policy can have only one authorization extension.
A forwarding rule can be used with several authorization policies of which
only one can be a custom authorization policy.
For limitations that are applicable to all extensions, see
Limitations for extensions .
What's next
View Python and Go samples of ext_authz and ext_proc servers in the
Service Extensions
GitHub repository .
Configure a route extension
Configure a traffic extension
Manage extensions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
