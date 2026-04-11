---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:44.570Z"
product_name: "Audit Manager"
product_slug: "audit-manager"
feature_name: "Compliance document downloads"
feature_slug: "compliance-document-downloads"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient"
  - "https://docs.cloud.google.com/audit-manager/docs/view-audit"
keywords:
  - "downloading"
  - "downloads"
  - "document"
  - "supports"
  - "now"
  - "compliance"
  - "manager"
  - "audit"
---

# Compliance document downloads

Product: Audit Manager
Coverage: LOW

## Step 02 Summary

Audit Manager now supports downloading Google Cloud compliance documents.

## Extended Definition

Audit Manager now supports downloading Google Cloud compliance documents.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient)
- [https://docs.cloud.google.com/audit-manager/docs/view-audit](https://docs.cloud.google.com/audit-manager/docs/view-audit)

## Supporting Pages

### "Class AuditManagerAsyncClient (0.1.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GenerateAuditReportRequest ( gcs uri="gcs uri value", scope="scope value", compliance standard="compliance standard value", report format="AUDIT REPORT FORMAT ODF", compliance framework="compliance framework value", ) Make the request operation = client. generate audit report (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.auditmanager v1.types.GenerateAuditReportRequest , dict]] The request object.
- GenerateAuditScopeReportRequest ( scope="scope value", compliance standard="compliance standard value", report format="AUDIT SCOPE REPORT FORMAT ODF", compliance framework="compliance framework value", ) Make the request response = await client. generate audit scope report (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.auditmanager v1.types.GenerateAuditScopeReportRequest , dict]] The request object.
- Home Documentation Developer tools Python Client libraries Send feedback Class AuditManagerAsyncClient (0.1.0) Stay organized with collections Save and categorize content based on your preferences.
- Returns Type Description google.cloud.auditmanager v1.services.audit manager.pagers.ListControlsAsyncPager Response message with all the controls for a compliance standard.

### "Class AuditManagerClient (0.1.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient)
- Source ID: `site-python-reference`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GenerateAuditReportRequest ( gcs uri="gcs uri value", scope="scope value", compliance standard="compliance standard value", report format="AUDIT REPORT FORMAT ODF", compliance framework="compliance framework value", ) Make the request operation = client. generate audit report (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.auditmanager v1.types.GenerateAuditReportRequest , dict] The request object.
- GenerateAuditScopeReportRequest ( scope="scope value", compliance standard="compliance standard value", report format="AUDIT SCOPE REPORT FORMAT ODF", compliance framework="compliance framework value", ) Make the request response = client. generate audit scope report (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.auditmanager v1.types.GenerateAuditScopeReportRequest , dict] The request object.
- Eg: FEDRAMP MODERATE This corresponds to the compliance standard field on the request instance; if request is provided, this should not be set. report format google.cloud.auditmanager v1.types.GenerateAuditScopeReportRequest.AuditScopeReportFormat Required.
- Eg: FEDRAMP MODERATE This corresponds to the compliance standard field on the request instance; if request is provided, this should not be set. report format google.cloud.auditmanager v1.types.GenerateAuditReportRequest.AuditReportFormat Required.

### View an audit \_|\_ Audit Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/audit-manager/docs/view-audit](https://docs.cloud.google.com/audit-manager/docs/view-audit)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- The Basic information page displays the information about compliance controls in scope and the status of the automated compliance: check circle Compliant: Shows the configurations that meet all the requirements. error Violations: Shows the misconfigurations that are detected against a given control. warning Manual review needed: Shows the configurations that need user inputs to prove compliance and process control. sync Skipped: Shows the configurations that Audit Manager skipped for a given control.
- Home Documentation Security Audit Manager Guides Send feedback View an audit Stay organized with collections Save and categorize content based on your preferences.
- Go to Audit Manager In the Compliance audits section, click View audits .
- A control overview report looks similar to the following example: Control ID : COMPLIANT Service name of resources Status Resource Evaluation Details Resource ID Measured Field Current Value Expected Value Status Evidence Resource URI Evidence Timestamp Evidence for Project/Folder Evidence Link Total services in scope for this control Total resources in audit scope Compliance status Resource identifier Configuration to be measured for audit Observed values Compliant values Individual compliance status Timestamp when evidence was collected product1.googleapis.com 2 COMPLIANT Resource 1 abc 10 =10 COMPLIANT Resource 1 12/05/2023 12:55:16 Project 1 Link 1 def 15 =15 COMPLIANT Resource 4 12/05/2023 13:55:16 Project 1 Link 4 Resource 2 xyz 20 =20 COMPLIANT Resource 2 12/05/2023 14:55:16 Project 1 Link 2 product2.googleapis.com 1 COMPLIANT Resource 3 def 5 =5 COMPLIANT Resource 3 12/05/2023 15:55:16 Project 1 Link 3 Evidence Evidence includes all the resources evaluated for each control, including a raw dump of asset data along with the command that was run to produce the output.

