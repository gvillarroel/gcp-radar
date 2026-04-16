---
title: "Prerequisites \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/api/prereqs
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/api/prereqs
  title: "Prerequisites \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Prerequisites
Stay organized with collections
Save and categorize content based on your preferences.
This document explains the prerequisites for using the Compute Engine API.
Before you can start coding your first client application, there are a few things you need to do,
if you haven't done them already.
Get a Google Account
You need a Google Account to access the
Compute Engine API. If you have an existing account, then you already have access.
You may also want a separate Google Account for testing purposes.
Sign up and try out Compute Engine
To get started, you can create a VM instance on Compute Engine by using one of the
following guides:
Create a Linux VM
Create a Windows VM
Before you continue, it's important to become familiar with Compute Engine. The API
documentation assumes that you have used Compute Engine and you're familiar with web
programming concepts and web data formats.
Learn about authentication
There are different ways to authenticate to Compute Engine depending on how you access
the API. For more information, see
Authenticate to Compute Engine .
Learn about REST
There are two ways to invoke the API:
Sending HTTP requests and parsing the responses.
Using client libraries .
If you decide not to use client libraries, you'll need to understand the basics of REST.
REST basics
REST is a style of software architecture that provides a convenient and consistent approach to requesting and modifying data.
The term REST is short for " Representational State Transfer ." In the context of Google APIs, it refers to using HTTP verbs to retrieve and modify representations of data stored by Google.
In a RESTful system, resources are stored in a data store; a client sends a request that the server perform a particular action (such as creating, retrieving, updating, or deleting a resource), and the server performs the action and sends a response, often in the form of a representation of the specified resource.
In Google's RESTful APIs, the client specifies an action using an HTTP verb such as POST , GET , PUT , or DELETE . It specifies a resource by a globally-unique URI of the following form:
https://www.googleapis.com/ apiName / apiVersion / resourcePath ? parameters
Because all API resources have unique HTTP-accessible URIs, REST enables data caching and is optimized to work with the web's distributed infrastructure.
You may find the method definitions in the HTTP 1.1 standards documentation useful; they include specifications for GET , POST , PUT , and DELETE .
REST in the Compute Engine API
The Compute Engine API operations map directly to REST HTTP verbs.
The Compute Engine API uses the following format for URIs:
https://www.googleapis.com/compute/ API_VERSION / RESOURCE_PATH
The URI contains the following values:
API_VERSION : the API version that you want to use, which corresponds
to the launch stage of a Compute Engine
resource as follows:
For resources in GA: v1
For resources in Public Preview: beta
For resources in Private Preview: alpha
RESOURCE_PATH : the path to the specific Compute Engine
resource—for example, projects/example-project/aggregated/instances . To
see available resources for each API version, see the following:
Compute Engine API v1
Compute Engine API beta
Compute Engine API alpha
( Preview )
If you want to include query parameters, then include them in the URI after a question mark
( ? ):
https://www.googleapis.com/compute/ API_VERSION / RESOURCE_PATH ? QUERY_PARAMETERS
In the URI, QUERY_PARAMETERS is a list of query parameters, separated by ampersands
( & )—for example,
format=json & filter=zone=us-central1-a .
Learn about the JSON data format
The Compute Engine API returns data in JSON format.
JSON (JavaScript Object Notation) is a common, language-independent data format that provides a simple text representation of arbitrary data structures. For more information, see json.org .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
