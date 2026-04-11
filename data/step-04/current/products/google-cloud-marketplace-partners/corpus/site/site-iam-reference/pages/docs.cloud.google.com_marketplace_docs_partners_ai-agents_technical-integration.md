---
title: "Integrate your AI agent with Google Cloud Marketplace \_|\_ Google Cloud Marketplace\
  \ Partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/technical-integration
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/technical-integration
  title: "Integrate your AI agent with Google Cloud Marketplace \_|\_ Google Cloud\
    \ Marketplace Partners \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Partners
Develop
Send feedback
Integrate your AI agent with Google Cloud Marketplace
Stay organized with collections
Save and categorize content based on your preferences.
To offer an AI agent product through Google Cloud Marketplace, you must integrate your
product with Google Cloud.
Before you begin
Verify that your Partner Engineer has enabled access to the
Cloud Commerce Partner Procurement API. After your Partner Engineer has granted you access to
the Partner Procurement API, you don't need to take any additional steps to
enable the API in Google Cloud console.
Backend integration
You must integrate your app's backend with the following Google APIs and
services:
Integrate with Pub/Sub to receive notifications from
Cloud Marketplace, such as when a user signs up for your product. Your
Partner Engineer creates a Pub/Sub topic that you must
subscribe to for notifications.
For information on subscribing to a Pub/Sub topic, see
the Pub/Sub Subscriber Guide .
Integrate with the Partner Procurement API. This lets you do the
following:
Create accounts for customers.
Link customers' accounts with their Cloud Marketplace purchase.
Update the linked accounts when users change or cancel their
subscription plans.
If you've chosen a usage-based pricing model, integrate with
Service Control to report usage information.
For detailed information on integrating your app's backend with
Cloud Marketplace, see
Configure your app's backend .
For an example of integrating the backend of a basic product with
Cloud Marketplace and a walkthrough of the sample code, see the
codelab for integrating a software as a service (SaaS) product .
Integrate with Google APIs
You can integrate your AI agent product with Google APIs by
using client libraries , which give you
programmatic access to Google products. The client libraries are available for
most popular development platforms, such as Java, Python, and .NET.
Install the client libraries for your platform from the
API Client Libraries page .
With the client libraries, you can:
Connect to your Pub/Sub subscription, and handle incoming
messages.
If you chose usage-based pricing, connect to the Service Control API
to report usage data to Google.
To create linked accounts for customers, and to send and receive updates about
user accounts, you must also integrate with the Partner Procurement API.
Because the Partner Procurement API is restricted, you must build a
new client library for the API.
To build a new client library, you must install the Google client libraries,
and build a new library from the API discovery document. The discovery document
for the Partner Procurement API is at this URL:
https://cloudcommerceprocurement.googleapis.com/$discovery/rest?version=v1
For example, if you're building a Python client library for the
Partner Procurement API, use the
build()
method. For sample code that builds a client library, see the
codelab samples on GitHub .
What's next
Configure your app's backend .
Publish your AI agent to
Cloud Marketplace.
Previous
arrow_back
Add your Agent Card
Next
Publish your AI agent
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
