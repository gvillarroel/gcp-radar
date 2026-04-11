---
title: "View an audit \_|\_ Audit Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/audit-manager/docs/view-audit
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/audit-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/audit-manager/docs/view-audit
  title: "View an audit \_|\_ Audit Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Audit Manager
Guides
Send feedback
View an audit
Stay organized with collections
Save and categorize content based on your preferences.
When an audit is completed, Audit Manager creates and stores
the following types of artifacts in the destination storage buckets for you to
view:
Audit summary report
Control overview report
Evidence
Before you begin
Ensure that you have the following IAM roles:
One of the following Audit Manager roles for the resource:
Audit Manager Admin ( roles/auditmanager.admin )
Audit Manager Auditor ( roles/auditmanager.auditor )
One of the following Cloud Storage roles for the storage bucket that
contains Audit Manager reports:
Storage Admin ( roles/storage.admin )
Storage Legacy Bucket Owner ( roles/storage.legacyBucketOwner )
Storage Legacy Object Reader ( roles/storage.legacyObjectReader )
View Audit Manager reports
In the Google Cloud console, go to the Audit Manager page.
Go to Audit Manager
In the Compliance audits section, click View audits .
On the View assessments page, you can view the status of an
in-progress audit or a completed audit.
Depending on the type of audit information you want to view, follow the
instructions in the corresponding tab.
Audit summary report
To view the audit summary, click the link in the Status column.
The Basic information page displays the information about
compliance controls in scope and the status of the automated compliance:
check_circle Compliant: Shows the
configurations that meet all the requirements.
error
Violations: Shows the misconfigurations that are detected
against a given control.
warning
Manual review needed: Shows the configurations that need
user inputs to prove compliance and process control.
sync Skipped: Shows the configurations that
Audit Manager skipped for a given control.
To see the details of a status, click View .
To export the audit summary report, click Export .
The audit summary report is exported in the
ODS format.
Control overview report
You can use the Basic information
page to view the control overview report based on a control or status.
To view the control overview report based on a control, do the following:
Expand the required control.
To view the detailed compliance assessment against each rule, click the
corresponding hyperlink.
The controls page shows the responsibility, findings, and requirements.
To view the control report based on a status, do the following:
For the required status, click View .
From the list of controls, click the required hyperlink.
The controls page shows the responsibility, findings, and requirements.
To export the control overview report, click Export .In the
Bucket details page, click the control name and click
Download . The control overview report
is exported in the ODS format.
Evidence
To view the evidence for a finding, click the corresponding hyperlink in
the controls page. The Object details page with the evidence details
opens in a separate tab.
To download the evidence, click download
Download . The evidence is downloaded
in the JSON format.
Alternatively, you can download the required report and evidence directly from
the destination storage bucket. For the detailed instructions,
see Download an object from a bucket .
Audit summary report
An audit summary report is a comprehensive report that provides a high-level
overview of all compliance controls and a responsibilities matrix to help you
understand the system.
In the destination storage bucket, the audit summary report uses the following naming
convention:
audit-reports/audit_ CONTROL_PACKAGE_NAME _ TIMESTAMP / UNIQUE_ID /overall_report.ods
The placeholder values are described as follows:
CONTROL_PACKAGE_NAME : The name of the control package, such
as SOC2 2017 .
TIMESTAMP : A timestamp when the report was generated.
UNIQUE_ID : A unique ID for the report.
For each applicable control type, the following fields are populated in the
audit summary report:
Control type
Description
Control Info
A description and requirement for the control.
Google Responsibility
Google Cloud responsibility and implementation details.
Customer Responsibility
Customer responsibility and implementation details.
Assessment Status
Status of compliance for the control. Status can be one of the
following types:
Non-Compliant : Compliance drift detected
Compliant : System is compliant
Manual Review Needed : Artifacts are produced but user input
is required to conclude on status of compliance
Skipped : Manual control, automation not present
Control Report Link
A link to the control overview report.
Control overview report
A control overview report contains a detailed description of the compliance
evaluation for a single control. It provides assessment details for each
compliance check with observations and expected values.
In the destination storage bucket, the control overview report uses the following
naming convention:
audit-reports/audit_ CONTROL_PACKAGE_NAME _ TIMESTAMP / UNIQUE_ID / CONTROL_ID .ods
The placeholder values are described as follows:
CONTROL_PACKAGE_NAME : The name of the control package, such as
CIS_CONTROLS_V8 .
TIMESTAMP : A timestamp when the report was generated.
UNIQUE_ID : A unique ID for the report.
CONTROL_ID : The ID for the control.
A control overview report looks similar to the following example:
Control ID : COMPLIANT
Service name
# of resources
Status
Resource Evaluation Details
Resource ID
Measured Field
Current Value
Expected Value
Status
Evidence Resource URI
Evidence Timestamp
Evidence for Project/Folder
Evidence Link
Total services in scope for this control
Total resources in audit scope
Compliance status
Resource identifier
Configuration to be measured for audit
Observed values
Compliant values
Individual compliance status
Timestamp when evidence was collected
product1.googleapis.com
2
COMPLIANT
Resource 1
abc
10
>=10
COMPLIANT
Resource 1
12/05/2023 12:55:16
Project 1
Link 1
def
15
=15
COMPLIANT
Resource 4
12/05/2023 13:55:16
Project 1
Link 4
Resource 2
xyz
20
=20
COMPLIANT
Resource 2
12/05/2023 14:55:16
Project 1
Link 2
product2.googleapis.com
1
COMPLIANT
Resource 3
def
5
>=5
COMPLIANT
Resource 3
12/05/2023 15:55:16
Project 1
Link 3
Evidence
Evidence includes all the resources evaluated for each control, including a raw
dump of asset data along with the command that was run to produce the output.
In the destination storage bucket, evidence uses the following
naming convention:
audit-reports/audit_ CONTROL_PACKAGE_NAME _ TIMESTAMP / UNIQUE_ID /evidences/evidence EVIDENCE_ID .json
The placeholder values are described as follows:
CONTROL_PACKAGE_NAME : The name of the control package, such as
CIS_CONTROLS_V8 .
TIMESTAMP : A timestamp when the report was generated.
UNIQUE_ID : A unique ID for the report.
EVIDENCE_ID : A unique ID for the evidence.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
