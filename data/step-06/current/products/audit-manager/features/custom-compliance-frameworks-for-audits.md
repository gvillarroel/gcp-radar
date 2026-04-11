---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:44.571Z"
product_name: "Audit Manager"
product_slug: "audit-manager"
feature_name: "Custom compliance frameworks for audits"
feature_slug: "custom-compliance-frameworks-for-audits"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient"
  - "https://docs.cloud.google.com/audit-manager/docs/run-audit"
keywords:
  - "frameworks"
  - "custom"
  - "audits"
  - "added"
  - "for"
  - "compliance"
  - "manager"
  - "audit"
---

# Custom compliance frameworks for audits

Product: Audit Manager
Coverage: LOW

## Step 02 Summary

Audit Manager added support for creating custom compliance frameworks and using them in audits, with the capability available in Preview.

## Extended Definition

Audit Manager added support for creating custom compliance frameworks and using them in audits, with the capability available in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient)
- [https://docs.cloud.google.com/audit-manager/docs/run-audit](https://docs.cloud.google.com/audit-manager/docs/run-audit)

## Supporting Pages

### "Class AuditManagerAsyncClient (0.1.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GenerateAuditScopeReportRequest ( scope="scope value", compliance standard="compliance standard value", report format="AUDIT SCOPE REPORT FORMAT ODF", compliance framework="compliance framework value", ) Make the request response = await client. generate audit scope report (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.auditmanager v1.types.GenerateAuditScopeReportRequest , dict]] The request object.
- GenerateAuditReportRequest ( gcs uri="gcs uri value", scope="scope value", compliance standard="compliance standard value", report format="AUDIT REPORT FORMAT ODF", compliance framework="compliance framework value", ) Make the request operation = client. generate audit report (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.auditmanager v1.types.GenerateAuditReportRequest , dict]] The request object.
- AuditScopeReport Generates a demo report highlighting different responsibilities (Google/Customer/ shared) required to be fulfilled for the customer's workload to be compliant with the given standard.
- Eg: FEDRAMP MODERATE This corresponds to the compliance standard field on the request instance; if request is provided, this should not be set. report format AuditScopeReportFormat Required.

### "Class AuditManagerClient (0.1.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerClient)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GenerateAuditScopeReportRequest ( scope="scope value", compliance standard="compliance standard value", report format="AUDIT SCOPE REPORT FORMAT ODF", compliance framework="compliance framework value", ) Make the request response = client. generate audit scope report (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.auditmanager v1.types.GenerateAuditScopeReportRequest , dict] The request object.
- Eg: FEDRAMP MODERATE This corresponds to the compliance standard field on the request instance; if request is provided, this should not be set. report format google.cloud.auditmanager v1.types.GenerateAuditScopeReportRequest.AuditScopeReportFormat Required.
- GenerateAuditReportRequest ( gcs uri="gcs uri value", scope="scope value", compliance standard="compliance standard value", report format="AUDIT REPORT FORMAT ODF", compliance framework="compliance framework value", ) Make the request operation = client. generate audit report (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.auditmanager v1.types.GenerateAuditReportRequest , dict] The request object.
- Eg: FEDRAMP MODERATE This corresponds to the compliance standard field on the request instance; if request is provided, this should not be set. report format google.cloud.auditmanager v1.types.GenerateAuditReportRequest.AuditReportFormat Required.

### "Run a compliance audit in Google Cloud \_|\_ Audit Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/audit-manager/docs/run-audit](https://docs.cloud.google.com/audit-manager/docs/run-audit)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: Running audits using the custom compliance frameworks ( Preview ) is available in Audit Manager Premium tier.
- HTTP method and URL: POST https://auditmanager.googleapis.com/ RESOURCE TYPE / RESOURCE ID /locations/ LOCATION /auditScopesReport:generate Request JSON body: { "compliance framework" : " COMPLIANCE TYPE " "report format" : " AUDIT REPORT FORMAT " } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For a custom compliance framework ( Preview ), specify the name of the framework in the following format: organizations/ ORG ID /locations/global/customComplianceFrameworks/ CUSTOM COMPLIANCE FRAMEWORK ID Replace the following: ORG ID : the organization ID CUSTOM COMPLIANCE FRAMEWORK ID : the ID of the custom compliance framework AUDIT REPORT FORMAT : the format of the output audit report.
- For a custom compliance framework ( Preview ), specify the name of the framework in the following format: organizations/ ORG ID /locations/global/customComplianceFrameworks/ CUSTOM COMPLIANCE FRAMEWORK ID Replace the following: ORG ID : the organization ID CUSTOM COMPLIANCE FRAMEWORK ID : the ID of the custom compliance framework AUDIT REPORT FORMAT : the format of the output audit report.

