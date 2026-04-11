---
title: "APIs and reference \_|\_ Cloud NAT \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/nat/docs/apis
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/nat/docs
source_metadata:
  url: https://docs.cloud.google.com/nat/docs/apis
  title: "APIs and reference \_|\_ Cloud NAT \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NAT
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
APIs and reference
This page describes individual resources that can be used with
Cloud NAT.
The Cloud NAT APIs and gcloud commands are part of
Compute Engine.
Cloud NAT is configured using new
Cloud Router commands and parameters.
gcloud CLI commands
Existing Cloud Router commands can be found in the Google Cloud CLI
interface documentation .
The following table lists the commonly used Cloud NAT commands:
Command
Description
gcloud compute routers nats create
Adds a NAT configuration to a router.
gcloud compute routers nats update
Updates a NAT configuration on a router.
gcloud compute routers nats delete
Removes a NAT configuration from a router.
gcloud compute routers nats list
Lists NAT configurations on a router.
gcloud compute routers nats describe
Shows a NAT configuration on a router.
gcloud compute routers get-status
Gets runtime information on the specified Cloud Router,
including the status of the NAT.
gcloud compute routers get-nat-mapping-info
Shows NAT IP:port-ranges.
gcloud compute routers get-nat-ip-info
Shows NAT IP address usage.
gcloud compute routers nats rules create
Adds a NAT rule to an existing NAT gateway.
gcloud compute routers nats rules update
Updates a single NAT rule.
gcloud compute routers nats rules delete
Deletes a NAT rule from a NAT gateway.
gcloud compute routers nats rules describe
Describes a NAT rule.
gcloud compute routers nats rules list
Lists all NAT rules in a NAT gateway.
Rest API
All NAT operations are performed on the
Router resource. They all require
OAuth 2.0 authentication.
The following table lists the commonly used Cloud Router APIs:
Command
Description
routers.insert
Creates a Cloud Router. You can specify a NAT configuration when
you create the router.
routers.update
Updates a Cloud Router. You can specify a NAT configuration
when you update the router.
routers.patch
Patches a Cloud Router. You can specify a NAT configuration
when you patch the router.
routers.getRouterStatus
Gets runtime information on the specified Cloud Router,
including the status of the NAT.
routers.getNatMappingInfo
Retrieves runtime NAT mapping information of VM endpoints.
routers.getNatIpInfo
Retrieves runtime NAT IP address information for the specified Cloud Router.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
