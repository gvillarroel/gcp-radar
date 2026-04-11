---
title: "Class DisableServiceRequest (1.16.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.types.DisableServiceRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.types.DisableServiceRequest
  title: "Class DisableServiceRequest (1.16.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class DisableServiceRequest (1.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.0 (latest)
1.15.0
1.14.0
1.13.0
1.12.0
1.11.1
1.10.5
1.9.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.2
1.2.1
1.1.0
1.0.1
0.2.2
0.1.0
DisableServiceRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request message for the DisableService method.
Attributes
Name
Description
name
str
Name of the consumer and service to disable the service on.
The enable and disable methods currently only support
projects.
An example name would be:
projects/123/services/serviceusage.googleapis.com where
123 is the project number.
disable_dependent_services
bool
Indicates if services that are enabled and
which depend on this service should also be
disabled. If not set, an error will be generated
if any enabled services depend on the service to
be disabled. When set, the service, and any
enabled services that depend on it, will be
disabled together.
check_if_service_has_usage
google.cloud.service_usage_v1.types.DisableServiceRequest.CheckIfServiceHasUsage
Defines the behavior for checking service
usage when disabling a service.
Classes
CheckIfServiceHasUsage
CheckIfServiceHasUsage ( value )
Enum to determine if service usage should be checked when
disabling a service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
