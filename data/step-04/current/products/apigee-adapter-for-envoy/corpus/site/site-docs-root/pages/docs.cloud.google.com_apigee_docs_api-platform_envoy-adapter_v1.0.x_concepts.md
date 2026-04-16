---
title: "Apigee Adapter for Envoy overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/envoy-adapter/v1.0.x/concepts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/envoy-adapter/v1.0.x/concepts
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/envoy-adapter/v1.0.x/concepts
  title: "Apigee Adapter for Envoy overview \_|\_ Google Cloud Documentation"
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
Apigee Adapter for Envoy overview
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
What is Apigee Adapter for Envoy?
Apigee Adapter for Envoy is an Apigee-managed API gateway that uses
Envoy to proxy API
traffic. Envoy is a popular, open source edge and service proxy designed for cloud-native
applications. You can run Apigee Adapter for Envoy on premises or in a multi-cloud environment.
With Apigee Adapter for Envoy, you get a relatively small footprint API gateway application
running close to your backend applications. Apigee Adapter for Envoy relies on Apigee for:
API authentication and authorization (with API keys and OAuth)
Quota management
API analytics
Installation options
You can use the Apigee Adapter for Envoy in the following context:
As a service deployed to the Istio service mesh integrated with Apigee hybrid.
See
Using Apigee Adapter for Envoy with Apigee hybrid .
Apigee Adapter for Envoy
The following figure shows the high level architecture for Apigee Adapter for Envoy.
This architecture consists of management plane components deployed on Google Cloud Platform (GCP)
and data plane components running remotely on premises or in a cloud provider environment. The
data plane includes the Envoy proxy and Apigee Remote Service. The role of each component
is described following the figure.
A consumer or client app accesses an API endpoint exposed by the Envoy proxy.
The Envoy proxy passes the security context (using HTTP headers) to the Apigee
Remote Service. The Apigee Remote Service acts as a policy decision point (PDP) and advises Envoy to allow or
deny access to the API consumer for the request.
If the call is allowed, the Envoy proxy forwards the request to the backend.
The Apigee Remote Service asynchronously polls the management plane and downloads proxy, API product, and
other configuration that it needs to operate.
Why use Apigee Adapter for Envoy?
Moving the API management component close to backend target applications can reduce network
latency. While you can install Apigee on-premises in a private cloud, a full deployment of
Apigee is necessarily large and complex to support its full feature-set and data-heavy
features like key management, monetization, and analytics. This means that deploying Apigee
on premises in each data-center is not always desirable.
Benefits of using Apigee Adapter for Envoy include:
Reduced latency of API traffic for services that run in close proximity.
Use of the full suite of Edge Analytics metrics, dashboards, and APIs.
Keeps API traffic within the enterprise-approved boundaries for security or compliance
purposes.
Asynchronous communication with Apigee allows API traffic data to be captured and
sent to Apigee without affecting latency.
If internet connection is lost, the Envoy proxy continues to operate
and process API calls normally. When connectivity is restored, the adapter syncs
to the Apigee management plane to pull down the latest configuration data.
Next step
Install Apigee Adapter for Envoy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
