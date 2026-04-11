---
title: "Class Control (0.1.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.types.Control
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.types.Control
  title: "Class Control (0.1.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Control (0.1.0)
Stay organized with collections
Save and categorize content based on your preferences.
Control ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A control.
Attributes
Name
Description
id
str
Output only. The control identifier used to
fetch the findings. This is same as the control
report name.
display_name
str
Output only. Display name of the control.
family
google.cloud.auditmanager_v1.types.Control.Family
Output only. Group where the control belongs.
E.g. Access Control.
control_family
google.cloud.auditmanager_v1.types.ControlFamily
Output only. Regulatory Family of the control
E.g. Access Control
description
str
Output only. Regulatory control ask of the
control
responsibility_type
str
Output only. The type of responsibility for
implementing this control. It can be google,
customer or shared.
google_responsibility_description
str
Output only. Description of the google
responsibility for implementing this control.
google_responsibility_implementation
str
Output only. Implementation of the google
responsibility for implementing this control.
customer_responsibility_description
str
Output only. Description of the customer
responsibility for implementing this control.
customer_responsibility_implementation
str
Output only. Implementation of the customer
responsibility for implementing this control.
Classes
Family
Family ( value )
The family of the control. For example, Access Control.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
