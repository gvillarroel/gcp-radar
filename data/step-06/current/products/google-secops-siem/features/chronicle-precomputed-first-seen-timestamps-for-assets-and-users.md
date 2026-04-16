---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.661Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle precomputed first-seen timestamps for assets and users"
feature_slug: "chronicle-precomputed-first-seen-timestamps-for-assets-and-users"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
keywords:
  - "chronicle"
  - "precomputed"
  - "first"
  - "seen"
  - "timestamps"
  - "assets"
  - "users"
  - "precomputes"
---

# Chronicle precomputed first-seen timestamps for assets and users

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle precomputes first-seen timestamps for assets and users to speed up investigations.

## Extended Definition

Chronicle precomputes first-seen timestamps for assets and users to speed up investigations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)

## Supporting Pages

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- First seen Last seen Prevalence Scoped users can view the first seen and last seen data of users and assets if the first seen and last seen is calculated from data within the user's assigned scopes.
- Note: Users or service accounts that need access to global scope data, must have chronicle.globalDataAccessScopes.permit permission.
- The specific scope associated with a dashboard determines the level of interaction permitted for global and scoped users : Global users : Maintain full visibility and management capabilities across all dashboards, regardless of scope.
- Access permissions for users in reference lists The scopes that are associated with a reference list determine how global and scoped users can interact with it.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Rank recently used fields first : Displays your most recently used fields at the top of the list Suggest immediate child fields : Completes nested fields incrementally, one child node at a time.
- Search results are limited to 10K : If your search returns more than 10,000 results, the console displays only the first 10,000.

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference-required-1`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Regional addresses: africa-south1: https://chronicle.africa-south1.rep.googleapis.com asia-northeast1: https://chronicle.asia-northeast1.rep.googleapis.com asia-south1: https://chronicle.asia-south1.rep.googleapis.com asia-southeast1: https://chronicle.asia-southeast1.rep.googleapis.com asia-southeast2: https://chronicle.asia-southeast2.rep.googleapis.com australia-southeast1: https://chronicle.australia-southeast1.rep.googleapis.com europe-west12: https://chronicle.europe-west12.rep.googleapis.com europe-west2: https://chronicle.europe-west2.rep.googleapis.com europe-west3: https://chronicle.europe-west3.rep.googleapis.com europe-west6: https://chronicle.europe-west6.rep.googleapis.com europe-west9: https://chronicle.europe-west9.rep.googleapis.com me-central1: https://chronicle.me-central1.rep.googleapis.com me-central2: https://chronicle.me-central2.rep.googleapis.com me-west1: https://chronicle.me-west1.rep.googleapis.com northamerica-northeast2: https://chronicle.northamerica-northeast2.rep.googleapis.com southamerica-east1: https://chronicle.southamerica-east1.rep.googleapis.com us: https://chronicle.us.rep.googleapis.com eu: https://chronicle.eu.rep.googleapis.com For example, to get a list of all cases on a project in the US: GET https://chronicle.us.rep.googleapis.com/v1alpha/projects/my-project-name-or-id/locations/us/instances/408bfb7b-5746-4a50-885a-50a323023529/cases Update the authentication method The new API uses Google Cloud IAM for authentication.
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- Migration steps This section outlines the steps to successfully migrate your applications to Chronicle API: Review the documentation Familiarize yourself with the comprehensive documentation for the new API, including the Chronicle API reference guide.
- Migrate SOAR endpoints to Chronicle API Supported in: Google secops SOAR This document outlines the steps and considerations for migrating from the deprecated SOAR API surface to the unified Chronicle API.

