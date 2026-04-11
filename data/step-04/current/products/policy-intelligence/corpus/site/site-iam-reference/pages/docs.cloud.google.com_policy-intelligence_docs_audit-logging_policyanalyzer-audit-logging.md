---
title: "Policy Analyzer audit logging \_|\_ Policy Intelligence \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/policyanalyzer-audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/policyanalyzer-audit-logging
  title: "Policy Analyzer audit logging \_|\_ Policy Intelligence \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Guides
Send feedback
Policy Analyzer audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the audited methods for Cloud Policy Analyzer. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
To view the Cloud Policy Analyzer audit logs, do the following:
In the Google Cloud console, go to the Logs Explorer page:
Go to Logs Explorer
Copy and paste the following query into the Query field of the
Logs Explorer, and then click Run query .
protoPayload . serviceName = "policyanalyzer.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Policy Analyzer generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
DATA_READ
google.cloud.policyanalyzer.v1.ActivityAnalyzer.QueryActivity google.cloud.policyanalyzer.v1beta1.ActivityAnalyzer.QueryActivity
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Policy Analyzer.
google.cloud.policyanalyzer.v1.ActivityAnalyzer
The following audit logs are associated with methods belonging to
google.cloud.policyanalyzer.v1.ActivityAnalyzer .
QueryActivity
Method : google.cloud.policyanalyzer.v1.ActivityAnalyzer.QueryActivity
Audit log type : Data access
Permissions : policyanalyzer.resourceAuthorizationActivities.query - DATA_READ
policyanalyzer.serviceAccountKeyLastAuthenticationActivities.query - DATA_READ
policyanalyzer.serviceAccountLastAuthenticationActivities.query - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policyanalyzer.v1.ActivityAnalyzer.QueryActivity"
google.cloud.policyanalyzer.v1beta1.ActivityAnalyzer
The following audit logs are associated with methods belonging to
google.cloud.policyanalyzer.v1beta1.ActivityAnalyzer .
QueryActivity
Method : google.cloud.policyanalyzer.v1beta1.ActivityAnalyzer.QueryActivity
Audit log type : Data access
Permissions : policyanalyzer.serviceAccountKeyLastAuthenticationActivities.query - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policyanalyzer.v1beta1.ActivityAnalyzer.QueryActivity"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
