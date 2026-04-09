---
title: "API resources overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/apis-intro
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/apis-intro
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/apis-intro
  title: "API resources overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
API resources overview
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
In API hub, every registered API is represented as an API resource. It serves as a comprehensive, centralized record that captures all metadata, specifications, and usage information about your API. Using API resources, you can efficiently manage and govern your entire API portfolio.
How API resources are added to API hub
API resources can be added or registered in API hub in the following ways:
Auto-registration while attaching runtime projects : When you attach a runtime project to API hub, all APIs in the runtime project are automatically registered as API resources in API hub. This auto-registration process enables API hub to register API resources from multiple API gateways ensuring that all your APIs are captured in the central repository.
Manual registration of APIs : You can manually register an API resource in API hub by providing the API metadata and specification files. This manual process is useful for registering APIs that are not available in the runtime project. For more information about manual registration, see Register an API .
Using plugins
Plugins, also known as on-ramp plugins , provide the framework that allows API hub to discover and ingest metadata from various API management platforms. The actual ingestion of data and the registration of APIs as API resources is managed through plugin instances. Each instance serves as an active entry point for metadata collection from its designated source.
When you use auto-registration by attaching a Google Cloud runtime project, API hub automatically creates a plugin instance in the background for that specific gateway service to ingest metadata and register your APIs as API resources. Alternatively, for non-Google Cloud or custom data sources, you can explicitly create plugin instances that establish a configured connection to your gateways to manually bring in metadata and populate your centralized portfolio.
For more information about using plugins, see Plugins overview .
API resource components
An API resource is composed of several key concepts:
API version : A version represents the state of an API at a specific point in time. An API can have multiple versions, allowing you to track its evolution and manage different releases independently. See Versions overview for more details.
Specifications : Each API version can have one or more specification files attached to it. A specification is a machine-readable document that describes the interface of your API. API hub supports various specification types, including:
OpenAPI for REST APIs
gRPC proto files for gRPC APIs
MCP schema for Model Context Protocol (MCP) APIs
For more information about specifications, see Specifications overview .
API operations and MCP tools : These are the individual functions or capabilities represented as distinct entities of your API. API operations are of two types:
HTTP operations : exposed as operations for API styles like REST and SOAP.
MCP tools : exposed as tools for MCP APIs, which are designed for AI agents.
For more information about API operations and MCP tools, see API operations and MCP tools .
API deployments : A deployment represents a location where a specific version of your API is running. This allows you to track where your APIs are deployed and how they are being used across different environments. See Deployments overview for more details.
API attributes : Attributes are key-value pairs that you can use to add descriptive information to your API resources. This metadata helps with organization, discovery, and governance. API hub supports two types of attributes:
System attributes : These are predefined attributes provided by API hub, such as API style, Target users, and Maturity level
Additional attributes : These are custom attributes that you can create to meet your organization's specific needs.
For more information about adding and managing attributes, see Manage attributes .
What's next
Register an API
Register an MCP API
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
