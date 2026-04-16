---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.695Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Detection Engine API"
feature_slug: "detection-engine-api"
latest_feature_date: "2021-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
keywords:
  - "detection"
  - "engine"
  - "lets"
  - "customers"
  - "programmatically"
  - "manage"
  - "functionality"
---

# Detection Engine API

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Detection Engine API lets customers programmatically manage Detection Engine functionality.

## Extended Definition

The Detection Engine API lets customers programmatically manage Detection Engine functionality.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)

## Supporting Pages

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detection Engine This document explains how to use the Detection Engine API Methods to create, run, and manage security rules that search data stored in your Google Security Operations account.
- São Paulo — https://southamerica-east1-backstory.googleapis.com Canada — https://northamerica-northeast2-backstory.googleapis.com Dammam — https://me-central2-backstory.googleapis.com Doha — https://me-central1-backstory.googleapis.com Europe Multi-Region — https://europe-backstory.googleapis.com Frankfurt — https://europe-west3-backstory.googleapis.com Jakarta — https://asia-southeast2-backstory.googleapis.com Johannesburg — https://africa-south1-backstory.googleapis.com London — https://europe-west2-backstory.googleapis.com Mumbai — https://asia-south1-backstory.googleapis.com Paris — https://europe-west9-backstory.googleapis.com Warsaw — https://europe-central2-backstory.googleapis.com Singapore — https://asia-southeast1-backstory.googleapis.com Sydney — https://australia-southeast1-backstory.googleapis.com Tel Aviv — https://me-west1-backstory.googleapis.com Tokyo — https://asia-northeast1-backstory.googleapis.com Turin — https://europe-west12-backstory.googleapis.com United States Multi-Region — https://backstory.googleapis.com Zurich — https://europe-west6-backstory.googleapis.com Detection Engine API reference This section describes the Backstory Detection Engine API methods.
- This is used by malware to execute core functionality and evade detection." }, { "ruleId": "ur mal CobaltStrike StartW", "ruleName": "Cobalt Strike Default Entrypoint", "severity": "Low", "ruleType": "SINGLE EVENT", "precision": "PRECISE", "tactics": [ "TA0004" ], "techniques": [ "T1548" ], "updateTime": "2022-11-16T18:28:45.062531Z", "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint." }, ], "nextPageToken": "CiQ0ODU4NWNjZS04MDZlLTExMjktNzY0MC0wMGViZDI4N2U1OTESGHVyX21hbF9MZW9WQlNfRG93bmxvYWRlcg==" } ListCuratedRuleDetections Return the detections for the specified Google SecOps rule.
- Sample response { "retrohuntId": "oh d738c8ea-8fd7-4cc1-b43d-25835b8e1785", "ruleId": "ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497", "versionId": "ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497@v 1612472807 179679000", "eventStartTime": "2021-01-14T23:00:00Z", "eventEndTime": "2021-01-30T23:00:00Z", "retrohuntStartTime": "2021-02-08T02:40:59.192113Z", "state": "RUNNING" } StreamDetectionAlerts Continuously receive Detection Engine results over an HTTP stream as the detections are discovered.

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Curated detections features The following are some of the key curated detections features: Curated Detection: curated detection created and managed by GCTI for Google SecOps customers.
- As part of these curated detections, GCTI provides and manages a set of YARA-L rules to help customers identify threats to their enterprise.
- This view lets you examine any of the detections associated with the rule and pivot to other views such as Asset view from the Timeline.
- These GCTI managed rules: Provide customers with immediately actionable intelligence which can be used against their ingested data.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.
- Google Security Operations's YARA-L detection engine is the preferred option for detection alerts because it offers enhanced transparency in detection logic and robust tuning capabilities.
- Migrate to alerting using the YARA-L detection engine by following the migration guide .
- We recommend that you migrate the existing CBN alerts to the YARA-L detection engine .

