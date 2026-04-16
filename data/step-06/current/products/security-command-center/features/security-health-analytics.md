---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.157Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Health Analytics"
feature_slug: "security-health-analytics"
latest_feature_date: "2020-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview"
keywords:
  - "security"
  - "health"
  - "analytics"
  - "now"
  - "generally"
  - "available"
  - "beta"
  - "can"
---

# Security Health Analytics

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Health Analytics is now generally available; Security Health Analytics is now in beta and can be enabled from the Sources Management page in Cloud SCC.

## Extended Definition

Security Health Analytics is now generally available; Security Health Analytics is now in beta and can be enabled from the Sources Management page in Cloud SCC.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview)

## Supporting Pages

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Standard-legacy, Standard, Premium, and Enterprise service tiers To get the permissions that you need to manage Security Health Analytics findings, ask your administrator to grant you the following IAM roles on your organization, folder, or project: Enable and disable detectors: Security Center Settings Editor ( roles/securitycenter.settingsEditor ) View and filter findings: Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Manage mute rules: Security Center Mute Configurations Editor ( roles/securitycenter.muteConfigsEditor ) Manage security marks: Security Center Finding Security Marks Writer ( roles/securitycenter.findingSecurityMarksWriter ) Programmatically manage findings: Security Center Findings Editor ( roles/securitycenter.findingsEditor ) Grant inbound access to a VPC Service Controls service perimeter: Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) Complete any task on this page: Security Center Settings Admin ( roles/securitycenter.settingsAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For brevity, this example shows a subset of all Security Health Analytics modules. { "effectiveEnablementState": "ENABLED", "intendedEnablementState": "ENABLED", "modules": { "ACCESS AWSCLOUDSHELLFULLACCESS RESTRICTED": { "effectiveEnablementState": "DISABLED" }, "ACCESS KEYS ROTATED 90 DAYS LESS": { "effectiveEnablementState": "ENABLED" }, "ACCESS TRANSPARENCY DISABLED": { "effectiveEnablementState": "ENABLED" }, "ADMIN SERVICE ACCOUNT": { "effectiveEnablementState": "ENABLED" }, "ALLOYDB AUTO BACKUP DISABLED": { "effectiveEnablementState": "DISABLED" } }, "name": "projects/1070293378382/locations/global/securityCenterServices/SECURITY HEALTH ANALYTICS", "updateTime": "2026-02-11T21:15:41.269584764Z" } Filtering findings in the Google Cloud console Standard-legacy, Standard, Premium, and Enterprise service tiers A large organization might have many vulnerability findings across their deployment to review, triage, and track.
- For brevity, this example shows a subset of all Security Health Analytics modules. effectiveEnablementState: ENABLED intendedEnablementState: ENABLED modules: ACCESS AWSCLOUDSHELLFULLACCESS RESTRICTED: effectiveEnablementState: DISABLED ACCESS KEYS ROTATED 90 DAYS LESS: effectiveEnablementState: ENABLED ACCESS TRANSPARENCY DISABLED: effectiveEnablementState: ENABLED ADMIN SERVICE ACCOUNT: effectiveEnablementState: ENABLED ALLOYDB AUTO BACKUP DISABLED: effectiveEnablementState: DISABLED name: projects/1070293378382/locations/global/securityCenterServices/SECURITY HEALTH ANALYTICS updateTime: '2026-02-11T21:15:41.269584764Z' REST The Security Command Center Management API's RESOURCE TYPE .locations.securityCenterServices.patch method updates the state of a Security Command Center service or module.
- Save the following content in a file called request.json : { " MODULE NAME " : { "intendedEnablementState" : " NEW STATE " } } Execute the gcloud scc manage services update command: Linux, macOS, or Cloud Shell gcloud scc manage services update security-health-analytics \ -- RESOURCE TYPE = RESOURCE ID \ --module-config-file = request.json Windows (PowerShell) gcloud scc manage services update security-health-analytics -- RESOURCE TYPE = RESOURCE ID --module-config-file = request.json Windows (cmd.exe) gcloud scc manage services update security-health-analytics ^ -- RESOURCE TYPE = RESOURCE ID ^ --module-config-file = request.json You should receive a response similar to the following.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- April 12, 2023 Feature The custom modules feature for Security Health Analytics is now generally available (GA).
- April 01, 2024 Fixed The following Security Health Analytics misconfiguration detectors have changed to check for overly restrictive flag values that might prevent error messages from being written to the logs: SQL LOG ERROR VERBOSITY SQL LOG MIN ERROR STATEMENT SEVERITY For the flag values that the detectors check for, see: SQL log error verbosity SQL log min error statement severity March 26, 2024 Feature GKE security posture recommendations released to Preview Recommendations from GKE security posture are now available as findings in all tiers of Security Command Center as a Preview release.
- Updated filters are available in the findings themselves and product documentation: Vulnerabilities findings Remediating Security Health Analytics findings If you have questions or need assistance, contact Google Cloud Support or Google Cloud Billing Support .
- October 14, 2019 Feature Security Health Analytics is now in beta and can now be enabled in the Sources Management page of Cloud SCC.

### When to expect findings in Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Health Analytics detections that do not support real-time scanning mode COMPUTE PROJECT WIDE SSH KEYS ALLOWED MFA NOT ENFORCED (previously named 2SV NOT ENFORCED) OS LOGIN DISABLED SQL NO ROOT PASSWORD SQL WEAK ROOT PASSWORD Attack path simulations Attack path simulations run every six hours, approximately.
- API activation As resources are discovered, Security Command Center enables parts of Google Cloud that are needed for Security Health Analytics, Event Threat Detection, Container Threat Detection, and Web Security Scanner to operate.
- Security Health Analytics Detection Latency Security Health Analytics detections run periodically in batch mode after the service is enabled, as well as when the configuration of a related asset changes.
- The first Security Health Analytics scans can take up to 12 hours to complete for Security Command Center Premium and Enterprise and 48 hours to complete for Security Command Center Standard.

