---
title: "Cloud Billing Budget API Prerequisites \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/budget-api-prereqs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/budget-api-prereqs
  title: "Cloud Billing Budget API Prerequisites \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
APIs & Reference
Send feedback
Cloud Billing Budget API Prerequisites
Stay organized with collections
Save and categorize content based on your preferences.
Before you start coding your first Cloud Billing budget application, there
are a few things you need to do, if you haven't done them already.
Try out the Cloud Billing features in the Google Cloud console
This API documentation assumes that you've used Google Cloud, and
that you're familiar with the Cloud Billing features and concepts in
the Google Cloud console. If you're not already familiar with concepts like
Cloud Billing accounts, Google Cloud projects, Google Cloud
products, and Cloud Billing budgets and alerts, read the following
before starting to code:
Overview of Cloud Billing concepts
Manage your Cloud Billing account
View the projects linked to a Cloud Billing account
Budgets and budget alert rules
Access control for the Cloud Billing Budget API
After you are familiar with the Cloud Billing features and concepts, try out
the Google Cloud console user interface .
Key Cloud Billing concepts
Each individual Cloud Billing account can have
several thousand budgets
associated with it at a time. See
Quotas and limits
for the current limits and additional information.
A budget is linked to only one Cloud Billing account at a time.
A single Cloud Billing account is linked to, and pays for, one or more
Google Cloud projects.
A Google Cloud project is linked to only one Cloud Billing account
at a time.
You can create a budget to monitor your costs for an entire Cloud Billing
account, including all the Google Cloud projects paid for by that
billing account. You can also define the scope of the budget using
granular budget filters to monitor specific slices of your costs.
Filters include Google Cloud projects, services, the budget's time
period, and other filters applicable to your Cloud Billing account.
Learn REST basics
There are two ways to invoke the Cloud Billing Budget API:
Sending HTTP requests and parsing the responses.
Using client libraries
(recommended).
If you decide not to use client libraries, you'll need to understand the basics
of REST.
REST is a style of software architecture that provides a convenient and consistent approach to requesting and modifying data.
The term REST is short for " Representational State Transfer ." In the context of Google APIs, it refers to using HTTP verbs to retrieve and modify representations of data stored by Google.
In a RESTful system, resources are stored in a data store; a client sends a request that the server perform a particular action (such as creating, retrieving, updating, or deleting a resource), and the server performs the action and sends a response, often in the form of a representation of the specified resource.
In Google's RESTful APIs, the client specifies an action using an HTTP verb such as POST , GET , PUT , or DELETE . It specifies a resource by a globally-unique URI of the following form:
https://www.googleapis.com/ apiName / apiVersion / resourcePath ? parameters
Because all API resources have unique HTTP-accessible URIs, REST enables data caching and is optimized to work with the web's distributed infrastructure.
You may find the method definitions in the HTTP 1.1 standards documentation useful; they include specifications for GET , POST , PUT , and DELETE .
REST in the Cloud Billing Budget API
The Cloud Billing Budget API operations map directly to REST HTTP verbs.
The specific formats for Cloud Billing Budget API URIs are:
https://billingbudgets.googleapis.com/v1/ resourcePath ? parameters
The full set of URIs used for each supported operation in the API is summarized
in the Cloud Billing Budget API reference documents
( REST ,
RPC ).
Learn JSON basics
The Cloud Billing Budget API returns data in JSON format.
JSON (JavaScript Object Notation) is a common, language-independent data format that provides a simple text representation of arbitrary data structures. For more information, see json.org .
Previous
arrow_back
Get started with the Budget API
Next
Setup
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
