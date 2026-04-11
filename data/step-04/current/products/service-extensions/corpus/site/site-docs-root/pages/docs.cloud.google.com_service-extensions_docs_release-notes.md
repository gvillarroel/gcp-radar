---
title: "Service Extensions release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/release-notes
  title: "Service Extensions release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Resources
Send feedback
Service Extensions release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Service Extensions.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 10, 2026
Feature
When configuring extensions by using plugins or callouts, you can specify some
request and connection attributes to forward to backend services. For more
information, see supported attributes .
April 09, 2026
Feature
Google Kubernetes Engine (GKE) Gateway support for using extensions by using
callouts to add custom logic into the load balancing processing path is in
General Availability . For more information, see
GKE extensions .
December 08, 2025
Feature
You can use Service Extensions to implement dynamic forwarding , which helps you map tenants to endpoints programmatically, without having to update your URL maps. This feature is in Preview .
November 17, 2025
Feature
For authorization extensions, in addition to the ext_proc Envoy gRPC API, the
ext_authz gRPC API is also supported. This capability allows seamless integration with the broader authorization ecosystem. This feature is in Preview .
November 13, 2025
Feature
Regional external and internal Application Load Balancers support route and traffic extensions using plugins. This feature is in Preview .
Feature
Edge extensions help you manipulate request headers early in the processing lifecycle of global external Application Load Balancers to influence caching and routing decisions. This feature is in General Availability .
November 05, 2025
Feature
Cloud Load Balancing callouts have full duplex streaming support.
October 28, 2025
Feature
Authorization extensions help you configure Cloud Load Balancing authorization policies to use custom authorization engines. This feature is in General Availability .
September 15, 2025
Feature
To protect AI workloads, you can configure traffic extensions to call the Model Armor service on supported Application Load Balancers. This feature is in General Availability .
July 24, 2025
Feature
To upload your Wasm plugin code to Artifact Registry, you can use generic format repositories, in addition to Docker repositories. This feature is in Preview .
July 01, 2025
Feature
Plugins for Cloud Load Balancing help you insert WebAssembly (Wasm) code in a fully managed serverless environment directly into the data path of most Cloud Load Balancing Application Load Balancers. This feature is in General Availability .
June 23, 2025
Feature
Edge extensions help you manipulate request headers early in the request processing lifecycle of global external Application Load Balancers to influence caching and routing decisions. This feature is in Preview .
Learn how to configure an edge extension .
April 09, 2025
Feature
The Google Kubernetes Engine (GKE) Gateway supports using extensions to add custom logic into the load balancing processing path. For more information, see GKE extensions . This feature is in Preview .
Feature
You can configure Model Armor with Service Extensions to protect AI workloads on supported Application Load Balancers. For more information, see Callouts to Google services . This feature is in Preview .
February 12, 2025
Feature
Service Extensions plugins support Go-compiled Wasm, in addition to Rust and C++. For more information, see Prepare the plugin code .
October 30, 2024
Feature
Service Extensions plugins help you insert WebAssembly (Wasm) plugins in a fully managed serverless environment directly into the data path of most Cloud Load Balancing Application Load Balancers. This feature is in Preview .
For details, see Plugins for Cloud Load Balancing .
September 16, 2024
Feature
Authorization extensions help you configure Cloud Load Balancing authorization policies to use custom authorization engines. This feature is in Preview .
Feature
You can now also host an extension on a backend service that uses serverless NEGs pointing to Cloud Run services. For more information, see Supported backends for extension services .
April 02, 2024
Announcement
Service Extensions is Generally Available for callout extensions for most Google Cloud Application Load Balancers .
You can also configure Cloud Load Balancing user-managed callout extensions by using the Console.
October 17, 2023
Feature
Service Extensions callouts are available for Google Cloud Application Load Balancers, excluding Classic.
With the introduction of this feature, users instruct load balancers to forward traffic from within the Cloud Load Balancing data processing path through gRPC to user-managed or partner-hosted applications. These applications can apply various policies or functions, such as header or payload manipulation, security screening, or custom logging on the traffic before returning the traffic to the load balancer for further processing.
For details, see Cloud Load Balancing callouts overview .
October 28, 2022
Announcement
Initial release of Service Extensions .
Service Extensions helps you insert plugins inline in the Media CDN data path. You build these plugins by using WebAssembly (Wasm) and Proxy-Wasm ABI.
This product is in Preview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
