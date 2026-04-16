---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.508Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "ThreatConnect TQL filtering"
feature_slug: "threatconnect-tql-filtering"
latest_feature_date: "2025-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
keywords:
  - "threatconnect"
  - "tql"
  - "filtering"
  - "connector"
  - "can"
  - "use"
  - "query"
  - "language"
---

# ThreatConnect TQL filtering

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The ThreatConnect connector can use ThreatConnect Query Language to run highly targeted indicator searches.

## Extended Definition

The ThreatConnect connector can use ThreatConnect Query Language to run highly targeted indicator searches.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- For more information see Overview of the YARA-L 2.0 language . labels fields for UDM nouns November 29, 2023 November 29, 2024 On or after November 29, 2023, the following Google Security Operations labels fields for UDM nouns are deprecated: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security result.about.labels , and target.labels .
- Feature Deprecated date Shutdown date Details v1 Cloud Storage Connectors April 15, 2026 March 15, 2027 Google SecOps is deprecating the v1 connector framework for GOOGLE CLOUD STORAGE , AMAZON S3 , AMAZON SQS , and AZURE BLOBSTORE .
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Request Detections for the latest version of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/detections Detections for a specific version of a rule with a given version identifier: GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/detections Detections for the all versions of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}@-/detections Detections for all versions of all rules: GET https://backstory.googleapis.com/v2/detect/rules/-/detections URL parameters Parameter Name Type Required Description alert state enum Optional Filter detections on if they are "ALERTING" or "NOT ALERTING" detection start time (deprecated) string Optional Time to begin returning detections, filtering on a detection's "detectionTime".
- Request Detections for a Google SecOps rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/curatedRules/{curatedRuleId}/detections Detections for all versions of all rules: GET https://backstory.googleapis.com/v2/detect/curatedRules/-/detections URL parameters Parameter Name Type Required Description alert state enum Optional Filter detections based on whether the alert state is ALERTING or NOT ALERTING . start time string Optional Start time of the time range to return detections for, filtering by the detection field specified in the list basis parameter.
- Sample response (specific version of rule - retrohunt done) { "retrohuntId": "oh 95805380-2d44-4aab-9306-929789eba814", "ruleId": "ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497", "versionId": "ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497@v 1612472807 179679000", "eventStartTime": "2021-01-01T23:00:00Z", "eventEndTime": "2021-01-30T23:00:00Z", "retrohuntStartTime": "2021-02-08T03:22:57.910122Z", "retrohuntEndTime": "2021-02-08T03:23:44.510819Z", "state": "DONE", "progressPercentage": 100 } Limitations See the detailed list of the Backstory API query limits .
- If not specified, then detections are not limited by a lower bound. end time string Optional End time of the time range to return detections for, filtering by the detection field specified by the list basis parameter.

