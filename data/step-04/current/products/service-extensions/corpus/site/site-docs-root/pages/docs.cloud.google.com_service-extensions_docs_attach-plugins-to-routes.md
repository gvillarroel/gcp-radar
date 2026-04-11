---
title: "Attach a plugin to a Media CDN route \_|\_ Service Extensions \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/attach-plugins-to-routes
  title: "Attach a plugin to a Media CDN route \_|\_ Service Extensions \_|\_ Google\
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
Attach a plugin to a Media CDN route
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes how to configure Service Extensions plugins in
Media CDN routes.
You can use Media CDN with Service Extensions
to add custom code to the request-response processing path. Such customization
unlocks a wide variety of lightweight use cases.
For more information, see
Media CDN extensions overview .
Before you begin
Create a Media CDN origin
Create a Media CDN service
Create a plugin by using Service Extensions
Note: Service Extensions plugins run after all other configurable
features of Media CDN have run.
Create a Wasm action for a plugin
When creating a Wasm action, you can't use a plugin that's already in use in a
Cloud Load Balancing extension.
Create a Wasm action for your Service Extensions plugin by running the
gcloud alpha service-extensions wasm-actions create command :
gcloud alpha service-extensions wasm-actions create WASM_ACTION \
--wasm-plugin= WASM_PLUGIN \
--supported-events=[ EVENT,... ]
Replace the following:
WASM_ACTION : the ID or the fully qualified name
of the Wasm action
WASM_PLUGIN : the name of the plugin to which you
want to attach the action
EVENT : the portion of the payload to be processed
by the plugin as indicated by either or both of these values:
request-headers or response-headers . If not specified, both
headers are processed.
It might take some time for a Wasm action to be created.
Attach a plugin to a route
To attach a plugin in a Media CDN route, follow these steps:
To export the current configuration of your service to a YAML file, run
the gcloud edge-cache services export command :
gcloud edge - cache services export SERVICE_NAME \
-- destination = FILENAME . yaml
Replace the following:
SERVICE_NAME : the name of the
Media CDN service
FILENAME : the name of the YAML file
Use a text editor to edit the YAML file.
Update the routes in the file to add the wasmAction header as shown in
the following example:
name : SERVICE_NAME
routing :
hostRules :
- hosts :
- DOMAIN_NAME
pathMatcher : routes
pathMatchers :
- name : routes
routeRules :
- priority : '1'
description : Route 1
matchRules :
- prefixMatch : /plugins
origin : projects/ PROJECT_NUMBER /locations/global/edgeCacheOrigins/ ORIGIN_NAME
routeAction :
wasmAction : projects/ PROJECT_NUMBER /locations/global/wasmActions/ WASM_ACTION
Replace the following:
SERVICE_NAME : the name of the
Media CDN service
DOMAIN_NAME : the domain of the
Media CDN service
PROJECT_NUMBER : the
project number
ORIGIN_NAME : the origin for the content
WASM_ACTION : the Service Extensions
Wasm action
Save the YAML file.
Run the gcloud edge-cache services import command :
gcloud edge - cache services import SERVICE_NAME \
-- source = FILENAME . yaml
It might take some time for the new plugin to be distributed across all
locations. The time might vary across locations because the plugin isn't
delivered to all locations simultaneously.
What's next
View log messages for plugins
Monitor plugins
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
