---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.872Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "reCAPTCHA Enterprise log ingestion"
feature_slug: "recaptcha-enterprise-log-ingestion"
latest_feature_date: "2024-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
keywords:
  - "recaptcha"
  - "enterprise"
  - "log"
  - "ingestion"
  - "chronicle"
  - "now"
  - "supports"
  - "direct"
---

# reCAPTCHA Enterprise log ingestion

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Chronicle now supports direct ingestion and parsing of reCAPTCHA Enterprise logs from Google Cloud.

## Extended Definition

Chronicle now supports direct ingestion and parsing of reCAPTCHA Enterprise logs from Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)

## Supporting Pages

### Ingestion API \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CUSTOMER ID= CUSTOMER ID Create a credential using an Ingestion Service Account Credential file and the Google Security Operations API Scope. credentials = service account.Credentials.from service account file(ING SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) UDM Event example (example: US region) url = 'https://malachiteingestion-pa.googleapis.com/v2/udmevents:batchCreate' For other regions, you may need to use another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints json events are a collection of UDM events in (serialized) JSON format. body = { "customerId": CUSTOMER ID, "events": json.loads(json events), } response = http session.request("POST", url, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/blob/master/ingestion/create entities.py https://github.com/chronicle/api-samples-python/blob/master/ingestion/create udm events.py https://github.com/chronicle/api-samples-python/blob/master/ingestion/create unstructured log entries.py The Service Account Credential provided to you corresponds to one Google SecOps instance.
- The Ingestion supports: UDM events Unstructured logs Log types retrieval You can forward your data to Google SecOps using either of the following types of Ingestion endpoints: Unified Data Model (UDM) event Unstructured log If you have formatted your log data using Google SecOps UDM, you can forward UDM events to your Google SecOps account using the UDM API endpoint.
- Ingestion API Supported in: Google secops SIEM This document explains how to use Backstory Ingestion to forward logs directly to your Google Security Operations instance, eliminating the need for additional hardware or software (for example, forwarders) in your environment.
- Managed Security Service Providers (MSSPs) and Technology Partners can develop systems to call Ingestion directly and forward logs to Google SecOps.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.
- Definition of events and alerts An event is generated from a raw log source that is ingested into Google SecOps and processed by Google SecOps's ingestion and normalization process.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.
- BigQuery data lake December 31, 2024 April 30, 2025 The shutdown of managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project has been extended to April 30, 2025.
- Customers issuing queries against the udm events table through Cloud Console, API, or directly connecting to BQ should fully migrate queries to the new table by July 1 to avoid interruption.

