---
title: "Service Infrastructure \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/overview
  title: "Service Infrastructure \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Guides
Send feedback
Service Infrastructure
Stay organized with collections
Save and categorize content based on your preferences.
Service Infrastructure is a foundational platform for creating, managing,
securing, and consuming APIs and services across organizations. It is used
by Google APIs ,
Cloud APIs , Cloud Endpoints , and
API Gateway . Service Infrastructure
provides a wide range of features to service consumers and service producers,
including authentication, authorization, auditing, rate limiting, analytics,
billing, logging, and monitoring.
Architecture
Service Infrastructure is designed to support millions of service producers and
service consumers. In order to handle such scalability,
Service Infrastructure uses a distributed microservice architecture.
The system is divided into three planes based on their functionality:
The Management Plane, which lets developers manage configurations of their
services and their usage of services.
The Data Plane, which handles the data traffic between the clients and
the services. The data plane can run in different environments and
support both internal and external clients.
The Control Plane, which controls the data plane based on the
configurations coming from the management plane, such as rate limiting.
Service Infrastructure provides multiple public APIs for these planes. A developer
can use these APIs to integrate their service directly with Service Infrastructure,
or use a framework built on top of these APIs, such as
Cloud Endpoints and API Gateway .
Creating APIs and services
To create a managed service using Service Infrastructure, you need to
create a service configuration to define your service
settings and behaviors, such as service name and API surface. You then deploy
your service configuration to the Service Management API to create your
service and register it with Google Cloud.
For more information, see Managing Services in the
How-to Guides .
Running APIs and services
To run a managed service using Service Infrastructure, your service needs to
call the Service Control API for admission control on each request, and
telemetry reporting on each response, such as validating API keys and reporting
API metrics. It allows your service to leverage the rich set of features
provided by Google Cloud.
If your service has some internal components, such as billing pipelines, they
can also use the Service Control API for admission control and telemetry
reporting. For example, reporting billing metrics to
Cloud Billing .
For more information, see Integrating with Service Infrastructure in the
How-to Guides .
Managing APIs and services
If you are a service producer, you can use the Service Consumer Management API and
the Service Networking API to manage consumers of your service,
including creating tenant projects for your consumers, setting up network
peering between tenant projects and consumer projects, and managing the quota
limits of your consumers.
For more information, see Managing Service Consumers in the
How-to Guides .
Consuming APIs and services
If you are a service consumer, you can use the Service Usage to list, enable,
and disable APIs and services in your Google Cloud projects, and apply quota
restrictions to services used by your Google Cloud projects or within your
organization. You can manage both Google-provided services and services created using
Cloud Endpoints .
For more information, see the Service Usage
documentation.
Getting started
The recommended way for most use cases to use Service Infrastructure is to use
Cloud Endpoints to create and manage your services. To get
started, see
Cloud Endpoints Quickstart .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
