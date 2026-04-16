---
title: "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/python/specifying-dependencies
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes
  title: "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
About Custom runtimes
Stay organized with collections
Save and categorize content based on your preferences.
If you'd like to use an alternative implementation of Python,
Java, Node.js, Go,
Ruby, PHP, .NET or you write
code in any other language, then custom runtimes are for you. Custom runtimes
allow you to define new runtime environments, which might include additional
components like language interpreters or application servers.
To create a custom runtime, you create a Dockerfile with a base image of your
choice, and then add the docker commands that build your desired runtime
environment. It's important to remember that you are responsible for ensuring
that the components that you specified in your Dockerfile are compatible and
configured to deliver the desired performance.
When you use a custom runtime, you must write your application code to handle
certain flexible environment life-cycle and health checking requests. Start by
reading about how to build a custom
runtime before you begin
developing your application.
Applications that use custom runtimes take advantage of all the various
Google Cloud services by using the public REST APIs or client libraries,
such as the App Engine Admin API and the Google Client
Libraries .
Use the following table to understand how a custom runtime compares to the
existing set of App Engine runtimes:
Feature
Flexible runtime
Custom runtime
Dockerfile
Default file supplied automatically by the SDK
Hand-written by the developer
Dockerfile modifications permitted
Yes
Yes
Languages
Python, Java, Node.js, Go, Ruby, PHP, .NET
Any software that can service HTTP requests
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
