---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.678Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "chronicle.soarAnalyst"
feature_slug: "chronicle-soaranalyst"
latest_feature_date: "2026-03-02"
deprecation_date: "2026-03-02"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
keywords:
  - "chronicle"
  - "soaranalyst"
  - "iam"
  - "role"
  - "soar"
  - "analysts"
  - "being"
  - "deprecated"
---

# chronicle.soarAnalyst

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

This Cloud IAM role for SOAR analysts is being deprecated; deprecated on 2026-03-02.

## Extended Definition

This Cloud IAM role for SOAR analysts is being deprecated; deprecated on 2026-03-02.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SOAR IAM Roles February 23, 2026 August 23, 2026 The chronicle.soarAnalyst , chronicle.soarViewer , and chronicle.soarEngineer roles in Cloud IAM are deprecated and will be removed.
- These roles were non-operational and are being replaced by Google Cloud IAM functionality as part of the SOAR Migration.
- For more information see Overview of the YARA-L 2.0 language . labels fields for UDM nouns November 29, 2023 November 29, 2024 On or after November 29, 2023, the following Google Security Operations labels fields for UDM nouns are deprecated: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security result.about.labels , and target.labels .
- SOAR infrastructure migration to Google Cloud June, 2025 December 31, 2025 Starting June 2025, the SOAR infrastructure is migrating to Google Cloud, including authentication migration to Workforce Identity Federation and Cloud Identity.

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate SOAR endpoints to Chronicle API Supported in: Google secops SOAR This document outlines the steps and considerations for migrating from the deprecated SOAR API surface to the unified Chronicle API.
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- Deprecation schedule The old API surface for SOAR is scheduled to be fully deprecated on September 30, 2026.
- Regional addresses: africa-south1: https://chronicle.africa-south1.rep.googleapis.com asia-northeast1: https://chronicle.asia-northeast1.rep.googleapis.com asia-south1: https://chronicle.asia-south1.rep.googleapis.com asia-southeast1: https://chronicle.asia-southeast1.rep.googleapis.com asia-southeast2: https://chronicle.asia-southeast2.rep.googleapis.com australia-southeast1: https://chronicle.australia-southeast1.rep.googleapis.com europe-west12: https://chronicle.europe-west12.rep.googleapis.com europe-west2: https://chronicle.europe-west2.rep.googleapis.com europe-west3: https://chronicle.europe-west3.rep.googleapis.com europe-west6: https://chronicle.europe-west6.rep.googleapis.com europe-west9: https://chronicle.europe-west9.rep.googleapis.com me-central1: https://chronicle.me-central1.rep.googleapis.com me-central2: https://chronicle.me-central2.rep.googleapis.com me-west1: https://chronicle.me-west1.rep.googleapis.com northamerica-northeast2: https://chronicle.northamerica-northeast2.rep.googleapis.com southamerica-east1: https://chronicle.southamerica-east1.rep.googleapis.com us: https://chronicle.us.rep.googleapis.com eu: https://chronicle.eu.rep.googleapis.com For example, to get a list of all cases on a project in the US: GET https://chronicle.us.rep.googleapis.com/v1alpha/projects/my-project-name-or-id/locations/us/instances/408bfb7b-5746-4a50-885a-50a323023529/cases Update the authentication method The new API uses Google Cloud IAM for authentication.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
- For example, a webhook defined on: https:// xxxx.siemplify-soar.com/api/external/v1 /webhooks/{webhook id}?api key=xxxx will need to be updated to: https:// us-chronicle.googleapis.com/v1alpha/projects/{project id}/locations/{location}/instances/{instance/{instance id} /webhooks/{webhook id}?api key=xxxx The authentication for webhooks remains unchanged.
- If you have granted the Service Account Token Creator IAM role to the python service account gke-init-python@soar-yyyyyy.iam.gserviceaccount.com , you must grant the same Service Account Token Creator IAM role to the new Python service account soar-python@yyyyyyyyyyy-tp.iam.gserviceaccount.com after the migration.

