---
title: "Class AuditReport (0.1.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.types.AuditReport
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.types.AuditReport
  title: "Class AuditReport (0.1.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class AuditReport (0.1.0)
Stay organized with collections
Save and categorize content based on your preferences.
AuditReport ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An audit report.
Attributes
Name
Description
name
str
Identifier. The name of this Audit Report, in
the format of scope given in request.
report_summary
google.cloud.auditmanager_v1.types.ReportSummary
Output only. Report summary with compliance,
violation counts etc.
operation_id
str
Output only. ClientOperationId
destination_details
google.cloud.auditmanager_v1.types.DestinationDetails
Output only. The location where the generated
report will be uploaded.
compliance_standard
str
Output only. Compliance Standard.
scope
str
Output only. The parent scope on which the
report was generated.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Creation time of the audit
report.
control_details
MutableSequence[ google.cloud.auditmanager_v1.types.ControlDetails ]
Output only. The overall status of controls
report_generation_state
google.cloud.auditmanager_v1.types.AuditReport.ReportGenerationState
Output only. The state of Audit Report
Generation.
compliance_framework
str
Output only. Compliance Framework of Audit
Report
scope_id
str
Output only. The ID/ Number for the scope on
which the audit report was generated.
Classes
ReportGenerationState
ReportGenerationState ( value )
The different states of the Audit Manager report generation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
