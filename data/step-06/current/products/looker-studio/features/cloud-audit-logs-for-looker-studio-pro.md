---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.133Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Cloud Audit Logs for Looker Studio Pro"
feature_slug: "cloud-audit-logs-for-looker-studio-pro"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/anthosaudit"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "audit"
  - "logs"
  - "looker"
  - "studio"
  - "pro"
  - "makes"
  - "available"
  - "explorer"
---

# Cloud Audit Logs for Looker Studio Pro

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Makes Looker Studio Pro logs available in Logs Explorer in the Google Cloud console.

## Extended Definition

Makes Looker Studio Pro logs available in Logs Explorer in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/anthosaudit](https://docs.cloud.google.com/iam/docs/roles-permissions/anthosaudit)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### "Anthos Audit API roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/anthosaudit](https://docs.cloud.google.com/iam/docs/roles-permissions/anthosaudit)
- Source ID: `site-iam-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . gkehub.features.get gkehub.locations. gkehub.locations.get gkehub.locations.list gkehub.memberships.get gkehub.memberships.list Anthos Audit API permissions There are no IAM permissions for this service.
- Home Documentation Security IAM Reference Send feedback Anthos Audit API roles and permissions Stay organized with collections Save and categorize content based on your preferences.
- Role Permissions Anthos Audit Service Agent ( roles/ anthosaudit.serviceAgent ) Gives the Anthos Audit service agent access to Cloud Platform resources.
- Anthos Audit API roles Anthos Audit API offers the following service agent roles.

### "Access Context Manager roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create, edit, and change access levels, access zones and authorized orgs descs. accesscontextmanager. accessLevels. accesscontextmanager. accessLevels. create accesscontextmanager. accessLevels. delete accesscontextmanager. accessLevels. get accesscontextmanager. accessLevels. list accesscontextmanager. accessLevels. replaceAll accesscontextmanager. accessLevels. update accesscontextmanager. authorizedOrgsDescs. accesscontextmanager. authorizedOrgsDescs. create accesscontextmanager. authorizedOrgsDescs. delete accesscontextmanager. authorizedOrgsDescs. get accesscontextmanager. authorizedOrgsDescs. list accesscontextmanager. authorizedOrgsDescs. update accesscontextmanager. policies. create accesscontextmanager. policies. delete accesscontextmanager. policies. get accesscontextmanager. policies. getIamPolicy accesscontextmanager. policies. list accesscontextmanager. policies. update accesscontextmanager. servicePerimeters. accesscontextmanager. servicePerimeters. commit accesscontextmanager. servicePerimeters. create accesscontextmanager. servicePerimeters. delete accesscontextmanager. servicePerimeters. get accesscontextmanager. servicePerimeters. list accesscontextmanager. servicePerimeters. replaceAll accesscontextmanager. servicePerimeters. update cloudasset. assets. searchAllResources resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Access Context Manager Reader ( roles/ accesscontextmanager.policyReader ) Read access to policies, access levels, access zones and authorized orgs descs. accesscontextmanager. accessLevels. get accesscontextmanager. accessLevels. list accesscontextmanager. authorizedOrgsDescs. get accesscontextmanager. authorizedOrgsDescs. list accesscontextmanager. policies. get accesscontextmanager. policies. getIamPolicy accesscontextmanager. policies. list accesscontextmanager. servicePerimeters. get accesscontextmanager. servicePerimeters. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list VPC Service Controls Troubleshooter Viewer ( roles/ accesscontextmanager.vpcScTroubleshooterViewer ) accesscontextmanager. accessLevels. get accesscontextmanager. accessLevels. list accesscontextmanager. authorizedOrgsDescs. get accesscontextmanager. authorizedOrgsDescs. list accesscontextmanager. policies. get accesscontextmanager. policies. getIamPolicy accesscontextmanager. policies. list accesscontextmanager. servicePerimeters. get accesscontextmanager. servicePerimeters. list logging.exclusions.get logging.exclusions.list logging.logEntries.list logging.logMetrics.get logging.logMetrics.list logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.sinks.get logging.sinks.list logging.usage.get resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Access Context Manager permissions Permission Included in roles accesscontextmanager. accessLevels. create Owner ( roles/ owner ) Editor ( roles/ editor ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) accesscontextmanager. authorizedOrgsDescs. create Owner ( roles/ owner ) Editor ( roles/ editor ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) accesscontextmanager. authorizedOrgsDescs. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) accesscontextmanager. authorizedOrgsDescs. get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) Access Context Manager Reader ( roles/ accesscontextmanager.policyReader ) VPC Service Controls Troubleshooter Viewer ( roles/ accesscontextmanager.vpcScTroubleshooterViewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) accesscontextmanager. authorizedOrgsDescs. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) Access Context Manager Reader ( roles/ accesscontextmanager.policyReader ) VPC Service Controls Troubleshooter Viewer ( roles/ accesscontextmanager.vpcScTroubleshooterViewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) accesscontextmanager. authorizedOrgsDescs. update Owner ( roles/ owner ) Editor ( roles/ editor ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) accesscontextmanager. gcpUserAccessBindings. create Owner ( roles/ owner ) Editor ( roles/ editor ) Cloud Access Binding Admin ( roles/ accesscontextmanager.gcpAccessAdmin ) accesscontextmanager. gcpUserAccessBindings. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Cloud Access Binding Admin ( roles/ accesscontextmanager.gcpAccessAdmin ) accesscontextmanager. gcpUserAccessBindings. get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Cloud Access Binding Admin ( roles/ accesscontextmanager.gcpAccessAdmin ) Cloud Access Binding Reader ( roles/ accesscontextmanager.gcpAccessReader ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Security Center Control Service Agent ( roles/ securitycenter.controlServiceAgent ) Security Center Service Agent ( roles/ securitycenter.serviceAgent ) accesscontextmanager. gcpUserAccessBindings. update Owner ( roles/ owner ) Editor ( roles/ editor ) Cloud Access Binding Admin ( roles/ accesscontextmanager.gcpAccessAdmin ) accesscontextmanager. policies. create Owner ( roles/ owner ) Editor ( roles/ editor ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) accesscontextmanager. policies. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) accesscontextmanager. policies. get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) Access Context Manager Reader ( roles/ accesscontextmanager.policyReader ) VPC Service Controls Troubleshooter Viewer ( roles/ accesscontextmanager.vpcScTroubleshooterViewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) accesscontextmanager. policies. getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) Access Context Manager Reader ( roles/ accesscontextmanager.policyReader ) VPC Service Controls Troubleshooter Viewer ( roles/ accesscontextmanager.vpcScTroubleshooterViewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) accesscontextmanager. policies. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) Access Context Manager Reader ( roles/ accesscontextmanager.policyReader ) VPC Service Controls Troubleshooter Viewer ( roles/ accesscontextmanager.vpcScTroubleshooterViewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) accesscontextmanager. servicePerimeters. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) Access Context Manager Reader ( roles/ accesscontextmanager.policyReader ) VPC Service Controls Troubleshooter Viewer ( roles/ accesscontextmanager.vpcScTroubleshooterViewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) SLZ BQDW Blueprint Organization Level Remediator ( roles/ securedlandingzone.bqdwOrgRemediator ) accesscontextmanager. servicePerimeters. replaceAll Owner ( roles/ owner ) Editor ( roles/ editor ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) accesscontextmanager. servicePerimeters. update Owner ( roles/ owner ) Editor ( roles/ editor ) Access Context Manager Admin ( roles/ accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/ accesscontextmanager.policyEditor ) SLZ BQDW Blueprint Organization Level Remediator ( roles/ securedlandingzone.bqdwOrgRemediator ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Live Stream API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Looker (Google Cloud core) Unsupported Alternatives: No alternatives available Looker Studio Unsupported Alternatives: No alternatives available Managed Service for Microsoft Active Directory GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Workforce Identity Federation users can't use IAP TCP forwarding to access the Active Directory management VM .
- This includes the following features: Looker Studio integration Risk assessment Shadow API discovery Local development with Apigee in Cloud Code isn't supported for Workforce Identity Federation users.
- The Add exempted principal text field in the Audit Logs page supports only autocompletion for service accounts.
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.

