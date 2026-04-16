---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.811Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Gemini AI-generated finding summaries"
feature_slug: "gemini-ai-generated-finding-summaries"
latest_feature_date: "2024-05-01"
deprecation_date: "2024-05-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFindingSummariesResponse"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "gemini"
  - "ai"
  - "generated"
  - "finding"
  - "summaries"
  - "preview"
  - "security"
  - "command"
---

# Gemini AI-generated finding summaries

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Preview Gemini-generated summaries for Security Command Center findings are discontinued and removed from the console; deprecated on 2024-05-01.

## Extended Definition

Preview Gemini-generated summaries for Security Command Center findings are discontinued and removed from the console; deprecated on 2024-05-01.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFindingSummariesResponse](https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFindingSummariesResponse)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- May 01, 2024 Deprecated AI summaries of finding are disabled in Security Command Center Effective May 1, 2024, the preview of Gemini AI-generated summaries of Security Command Center findings is discontinued.
- December 10, 2024 Deprecated AI summaries of attack paths are disabled in Security Command Center Effective December 13, 2024, the preview of Gemini AI-generated summaries of Security Command Center attack paths is discontinued.
- August 03, 2023 Feature AI-generated summaries of the simulated attack paths for Security Command Center findings are released to Preview .
- July 14, 2023 Feature AI-generated summaries of Security Command Center findings are released to Preview .

### "ListFindingSummariesResponse \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFindingSummariesResponse](https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ListFindingSummariesResponse)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Reference Send feedback ListFindingSummariesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "findingSummaries" : [ { object ( FindingSummary ) } ] , "nextPageToken" : string } Fields findingSummaries[] object ( FindingSummary ) List of finding summary by category. nextPageToken string Output only.
- JSON representation The response message for [ListFindingSummaries][].

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- To see these findings, enable any of the following GKE security posture dashboard features: GKE security posture dashboard pane Security Command Center finding class Workload configuration auditing 1 MISCONFIGURATION Top threats 2 THREAT Container OS vulnerability scanning 1 Language package vulnerability scanning 1 Actionable security bulletins 1 ( Preview ) Top software vulnerabilities 2 ( Preview ) VULNERABILITY Available only if you enable this feature in GKE.
- If you enable VM Manager with the Security Command Center Premium tier, VM Manager automatically writes high and critical findings from its vulnerability reports , which are in preview, to Security Command Center.
- Error findings are generated by the Security Command Center security source and have the finding class SCC errors .
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.

