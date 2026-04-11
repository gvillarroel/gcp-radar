---
title: "Web Security Scanner audit logging \_|\_ Security Command Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/audit-logging-web-security
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/audit-logging-web-security
  title: "Web Security Scanner audit logging \_|\_ Security Command Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Web Security Scanner audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
This document describes audit logging for Web Security Scanner. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Web Security Scanner audit logs use the service name websecurityscanner.googleapis.com .
Filter for this service:
protoPayload . serviceName = "websecurityscanner.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Web Security Scanner generates an audit log whose category is dependent on the
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
ADMIN_READ
google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanConfigs google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanRuns google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanConfigs google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanRuns
ADMIN_WRITE
google.cloud.websecurityscanner.v1.WebSecurityScanner.CreateScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.DeleteScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.StartScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.StopScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.UpdateScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.CreateScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.DeleteScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StopScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.UpdateScanConfig
DATA_READ
google.cloud.websecurityscanner.v1.WebSecurityScanner.GetFinding google.cloud.websecurityscanner.v1.WebSecurityScanner.ListCrawledUrls google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingTypeStats google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindings google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetFinding google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListCrawledUrls google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStats google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindings
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Web Security Scanner.
google.cloud.websecurityscanner.v1.WebSecurityScanner
The following audit logs are associated with methods belonging to
google.cloud.websecurityscanner.v1.WebSecurityScanner .
CreateScanConfig
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.CreateScanConfig
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scans.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.CreateScanConfig"
DeleteScanConfig
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.DeleteScanConfig
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scans.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.DeleteScanConfig"
GetFinding
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.GetFinding
Audit log type : Data access
Permissions : cloudsecurityscanner.results.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.GetFinding"
GetScanConfig
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanConfig
Audit log type : Data access
Permissions : cloudsecurityscanner.scans.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanConfig"
GetScanRun
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanRun
Audit log type : Data access
Permissions : cloudsecurityscanner.scanruns.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanRun"
ListCrawledUrls
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.ListCrawledUrls
Audit log type : Data access
Permissions : cloudsecurityscanner.crawledurls.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.ListCrawledUrls"
ListFindingTypeStats
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingTypeStats
Audit log type : Data access
Permissions : cloudsecurityscanner.scanruns.getSummary - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingTypeStats"
ListFindings
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindings
Audit log type : Data access
Permissions : cloudsecurityscanner.results.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindings"
ListScanConfigs
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanConfigs
Audit log type : Data access
Permissions : cloudsecurityscanner.scans.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanConfigs"
ListScanRuns
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanRuns
Audit log type : Data access
Permissions : cloudsecurityscanner.scanruns.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanRuns"
StartScanRun
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.StartScanRun
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scans.run - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.StartScanRun"
StopScanRun
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.StopScanRun
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scanruns.stop - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.StopScanRun"
UpdateScanConfig
Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.UpdateScanConfig
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scans.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.UpdateScanConfig"
google.cloud.websecurityscanner.v1beta.WebSecurityScanner
The following audit logs are associated with methods belonging to
google.cloud.websecurityscanner.v1beta.WebSecurityScanner .
CreateScanConfig
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.CreateScanConfig
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scans.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.CreateScanConfig"
DeleteScanConfig
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.DeleteScanConfig
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scans.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.DeleteScanConfig"
GetFinding
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetFinding
Audit log type : Data access
Permissions : cloudsecurityscanner.results.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetFinding"
GetScanConfig
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanConfig
Audit log type : Data access
Permissions : cloudsecurityscanner.scans.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanConfig"
GetScanRun
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanRun
Audit log type : Data access
Permissions : cloudsecurityscanner.scanruns.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanRun"
ListCrawledUrls
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListCrawledUrls
Audit log type : Data access
Permissions : cloudsecurityscanner.crawledurls.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListCrawledUrls"
ListFindingTypeStats
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStats
Audit log type : Data access
Permissions : cloudsecurityscanner.scanruns.getSummary - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStats"
ListFindings
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindings
Audit log type : Data access
Permissions : cloudsecurityscanner.results.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindings"
ListScanConfigs
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanConfigs
Audit log type : Data access
Permissions : cloudsecurityscanner.scans.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanConfigs"
ListScanRuns
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanRuns
Audit log type : Data access
Permissions : cloudsecurityscanner.scanruns.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanRuns"
StartScanRun
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRun
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scans.run - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRun"
StopScanRun
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StopScanRun
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scanruns.stop - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StopScanRun"
UpdateScanConfig
Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.UpdateScanConfig
Audit log type : Admin activity
Permissions : cloudsecurityscanner.scans.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.UpdateScanConfig"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
