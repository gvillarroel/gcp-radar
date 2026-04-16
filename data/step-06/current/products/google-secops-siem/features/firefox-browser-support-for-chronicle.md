---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.638Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Firefox browser support for Chronicle"
feature_slug: "firefox-browser-support-for-chronicle"
latest_feature_date: "2023-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview"
keywords:
  - "firefox"
  - "browser"
  - "chronicle"
  - "now"
  - "mozilla"
---

# Firefox browser support for Chronicle

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle is now supported on the Mozilla Firefox browser.

## Extended Definition

Chronicle is now supported on the Mozilla Firefox browser.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Navigate search results using pagination To improve browser stability and performance when loading a large number of results, Google SecOps provides paginated search results.
- Navigate result sets To improve browser stability and performance when loading a large number of events, Google SecOps provides paginated search results.
- This list is saved in your browser session history across the Search, Rules, and Dashboard editors.

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference-required-1`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Regional addresses: africa-south1: https://chronicle.africa-south1.rep.googleapis.com asia-northeast1: https://chronicle.asia-northeast1.rep.googleapis.com asia-south1: https://chronicle.asia-south1.rep.googleapis.com asia-southeast1: https://chronicle.asia-southeast1.rep.googleapis.com asia-southeast2: https://chronicle.asia-southeast2.rep.googleapis.com australia-southeast1: https://chronicle.australia-southeast1.rep.googleapis.com europe-west12: https://chronicle.europe-west12.rep.googleapis.com europe-west2: https://chronicle.europe-west2.rep.googleapis.com europe-west3: https://chronicle.europe-west3.rep.googleapis.com europe-west6: https://chronicle.europe-west6.rep.googleapis.com europe-west9: https://chronicle.europe-west9.rep.googleapis.com me-central1: https://chronicle.me-central1.rep.googleapis.com me-central2: https://chronicle.me-central2.rep.googleapis.com me-west1: https://chronicle.me-west1.rep.googleapis.com northamerica-northeast2: https://chronicle.northamerica-northeast2.rep.googleapis.com southamerica-east1: https://chronicle.southamerica-east1.rep.googleapis.com us: https://chronicle.us.rep.googleapis.com eu: https://chronicle.eu.rep.googleapis.com For example, to get a list of all cases on a project in the US: GET https://chronicle.us.rep.googleapis.com/v1alpha/projects/my-project-name-or-id/locations/us/instances/408bfb7b-5746-4a50-885a-50a323023529/cases Update the authentication method The new API uses Google Cloud IAM for authentication.
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- Migration steps This section outlines the steps to successfully migrate your applications to Chronicle API: Review the documentation Familiarize yourself with the comprehensive documentation for the new API, including the Chronicle API reference guide.
- Migrate SOAR endpoints to Chronicle API Supported in: Google secops SOAR This document outlines the steps and considerations for migrating from the deprecated SOAR API surface to the unified Chronicle API.

### "Google SecOps APIs and libraries overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps recommends using the unified Chronicle API for the modern platform, case management and response workflows that provide a secure, compliant and extensible experience.
- Google SecOps recommends using the newer generation Chronicle API because it improves and expands on the functionality offered by Ingestion API.
- Google SecOps recommends using the newer generation Chronicle API for a more robust, secure, and extensible experience.
- Chronicle API also enables various services, including IAM for access control, Cloud Monitoring, and Cloud Audit Logs.

