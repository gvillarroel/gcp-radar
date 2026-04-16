---
title: "Configurations Overview \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration
  title: "Configurations Overview \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Configurations Overview
Stay organized with collections
Save and categorize content based on your preferences.
A configuration defines the structure of your deployment, including the
type and properties of the resources that are part of the deployment, any
templates the configuration should use, and additional subfiles that can be
executed to create your final configuration. You must always specify a
configuration in order to create a deployment.
In your configuration, you can define a variety of supported Google Cloud
platform resources from different services in a single configuration file.
Some example resources include:
All Compute Engine resources including:
Autoscaler
Instance groups and
managed instance groups
Kubernetes Engine
BigQuery
Cloud Storage
Cloud SQL
For a full list of resources, consult this table of
Supported resource types
or make a
list() request to the
Types collection .
Configuration language
You must write configuration files using
YAML syntax. To learn
how to create a configuration file, see
Create a Configuration .
Template languages
A configuration can import one or more template files that Deployment Manager
will expand during deployment to create the final configuration. You can
write templates in either Jinja or Python. It is possible to mix and match
templates. A single configuration can import both Jinja and Python templates. A
template can be a local file or a file hosted at a third-party URL.
Templates offer additional functionality, like the ability to use
environment variables, the ability to define custom variables, the ability
to use Python libraries, and so on.
For more information about templates, read
Creating a Basic Template .
Configuration limits
All configurations are expanded on the server side within a controlled
environment that Deployment Manager maintains. In order to prevent abuse,
this environment is closely managed by the Deployment Manager team
and has some limitations:
Neither your original configuration nor your expanded configuration can
exceed 1 MB.
Any configurations uploaded to Deployment Manager are limited in the
amount of time the configuration can take to run and the amount of processing
power the configuration consumes during expansion. If you run into this
limitation, consider splitting your configuration into smaller templates,
or simplify complex structures such as recursion and nested loops.
Any Python templates you use cannot make any system or network calls. These
templates will automatically be rejected.
What's next
Create a simple configuration .
Decide if you want to use templates .
If you are exposing your configuration to other users, consider
creating a schema .
Learn how you can host templates externally .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
