---
title: "reCAPTCHA audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/audit-logging
  title: "reCAPTCHA audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
reCAPTCHA audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for reCAPTCHA. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
reCAPTCHA audit logs use the service name recaptchaenterprise.googleapis.com .
Filter for this service:
protoPayload . serviceName = "recaptchaenterprise.googleapis.com"
Methods by permission type
DATA_WRITE audit logs for CreateAssessment and AnnotateAssessment methods are deprecated. To disable DATA_WRITE audit logs see Configure Data Access audit logs . To view logs for the CreateAssessment and AnnotateAssessment methods see Platform logs .
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
reCAPTCHA generates an audit log whose category is dependent on the
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
google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetFirewallPolicy google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetMetrics google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListFirewallPolicies google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListIpOverrides google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListKeys google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroupMemberships google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroups google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RetrieveLegacySecretKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.SearchRelatedAccountGroupMemberships
ADMIN_WRITE
google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AddIpOverride google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateFirewallPolicy google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteFirewallPolicy google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.MigrateKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RemoveIpOverride google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ReorderFirewallPolicies google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateFirewallPolicy google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateKey
DATA_WRITE
google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateAssessment
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for reCAPTCHA.
google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService
The following audit logs are associated with methods belonging to
google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService .
AddIpOverride
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AddIpOverride
Audit log type : Admin activity
Permissions : recaptchaenterprise.keys.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AddIpOverride"
AnnotateAssessment
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AnnotateAssessment
Audit log type : Data access
Permissions : recaptchaenterprise.assessments.annotate - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AnnotateAssessment"
Note: This audit log has been deprecated. To view logs for this method see Platform logs .
CreateAssessment
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateAssessment
Audit log type : Data access
Permissions : recaptchaenterprise.assessments.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateAssessment"
Note: This audit log has been deprecated. To view logs for this method see Platform logs .
CreateFirewallPolicy
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateFirewallPolicy
Audit log type : Admin activity
Permissions : recaptchaenterprise.firewallpolicies.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateFirewallPolicy"
CreateKey
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateKey
Audit log type : Admin activity
Permissions : recaptchaenterprise.keys.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateKey"
DeleteFirewallPolicy
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteFirewallPolicy
Audit log type : Admin activity
Permissions : recaptchaenterprise.firewallpolicies.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteFirewallPolicy"
DeleteKey
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteKey
Audit log type : Admin activity
Permissions : recaptchaenterprise.keys.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteKey"
GetFirewallPolicy
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetFirewallPolicy
Audit log type : Data access
Permissions : recaptchaenterprise.firewallpolicies.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetFirewallPolicy"
GetKey
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetKey
Audit log type : Data access
Permissions : recaptchaenterprise.keys.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetKey"
GetMetrics
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetMetrics
Audit log type : Data access
Permissions : recaptchaenterprise.metrics.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetMetrics"
ListFirewallPolicies
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListFirewallPolicies
Audit log type : Data access
Permissions : recaptchaenterprise.firewallpolicies.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListFirewallPolicies"
ListIpOverrides
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListIpOverrides
Audit log type : Data access
Permissions : recaptchaenterprise.keys.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListIpOverrides"
ListKeys
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListKeys
Audit log type : Data access
Permissions : recaptchaenterprise.keys.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListKeys"
ListRelatedAccountGroupMemberships
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroupMemberships
Audit log type : Data access
Permissions : recaptchaenterprise.relatedaccountgroupmemberships.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroupMemberships"
ListRelatedAccountGroups
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroups
Audit log type : Data access
Permissions : recaptchaenterprise.relatedaccountgroups.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroups"
MigrateKey
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.MigrateKey
Audit log type : Admin activity
Permissions : recaptchaenterprise.keys.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.MigrateKey"
RemoveIpOverride
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RemoveIpOverride
Audit log type : Admin activity
Permissions : recaptchaenterprise.keys.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RemoveIpOverride"
ReorderFirewallPolicies
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ReorderFirewallPolicies
Audit log type : Admin activity
Permissions : recaptchaenterprise.firewallpolicies.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ReorderFirewallPolicies"
RetrieveLegacySecretKey
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RetrieveLegacySecretKey
Audit log type : Data access
Permissions : recaptchaenterprise.keys.retrievelegacysecretkey - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RetrieveLegacySecretKey"
SearchRelatedAccountGroupMemberships
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.SearchRelatedAccountGroupMemberships
Audit log type : Data access
Permissions : recaptchaenterprise.relatedaccountgroupmemberships.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.SearchRelatedAccountGroupMemberships"
UpdateFirewallPolicy
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateFirewallPolicy
Audit log type : Admin activity
Permissions : recaptchaenterprise.firewallpolicies.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateFirewallPolicy"
UpdateKey
Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateKey
Audit log type : Admin activity
Permissions : recaptchaenterprise.keys.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateKey"
google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1
The following audit logs are associated with methods belonging to
google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1 .
CreateAssessment
Method : google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.CreateAssessment
Audit log type : Data access
Permissions : recaptchaenterprise.assessments.create - PERMISSION_TYPE_UNSPECIFIED
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.CreateAssessment"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.AnnotateAssessment
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
