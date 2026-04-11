---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.902Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "chronicle.soarViewer"
feature_slug: "chronicle-soarviewer"
latest_feature_date: "2026-03-02"
deprecation_date: "2026-03-02"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "chronicle"
  - "soarviewer"
  - "this"
  - "iam"
  - "role"
  - "for"
  - "soar"
  - "viewers"
---

# chronicle.soarViewer

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

This Cloud IAM role for SOAR viewers is being deprecated; deprecated on 2026-03-02.

## Extended Definition

This Cloud IAM role for SOAR viewers is being deprecated; deprecated on 2026-03-02.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Migrate SOAR endpoints to Chronicle API Supported in: Google secops SOAR This document outlines the steps and considerations for migrating from the deprecated SOAR API surface to the unified Chronicle API.
- Regional addresses: africa-south1: https://chronicle.africa-south1.rep.googleapis.com asia-northeast1: https://chronicle.asia-northeast1.rep.googleapis.com asia-south1: https://chronicle.asia-south1.rep.googleapis.com asia-southeast1: https://chronicle.asia-southeast1.rep.googleapis.com asia-southeast2: https://chronicle.asia-southeast2.rep.googleapis.com australia-southeast1: https://chronicle.australia-southeast1.rep.googleapis.com europe-west12: https://chronicle.europe-west12.rep.googleapis.com europe-west2: https://chronicle.europe-west2.rep.googleapis.com europe-west3: https://chronicle.europe-west3.rep.googleapis.com europe-west6: https://chronicle.europe-west6.rep.googleapis.com europe-west9: https://chronicle.europe-west9.rep.googleapis.com me-central1: https://chronicle.me-central1.rep.googleapis.com me-central2: https://chronicle.me-central2.rep.googleapis.com me-west1: https://chronicle.me-west1.rep.googleapis.com northamerica-northeast2: https://chronicle.northamerica-northeast2.rep.googleapis.com southamerica-east1: https://chronicle.southamerica-east1.rep.googleapis.com us: https://chronicle.us.rep.googleapis.com eu: https://chronicle.eu.rep.googleapis.com For example, to get a list of all cases on a project in the US: GET https://chronicle.us.rep.googleapis.com/v1alpha/projects/my-project-name-or-id/locations/us/instances/408bfb7b-5746-4a50-885a-50a323023529/cases Update the authentication method The new API uses Google Cloud IAM for authentication.
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- Migration steps This section outlines the steps to successfully migrate your applications to Chronicle API: Review the documentation Familiarize yourself with the comprehensive documentation for the new API, including the Chronicle API reference guide.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
- If you have granted the Service Account Token Creator IAM role to the python service account gke-init-python@soar-yyyyyy.iam.gserviceaccount.com , you must grant the same Service Account Token Creator IAM role to the new Python service account soar-python@yyyyyyyyyyy-tp.iam.gserviceaccount.com after the migration.
- What's Next SOAR migration pre-validation guide Migrate a SOAR standalone instance of an MSSP Migrate SOAR endpoints to the Chronicle API Migrate remote agents Migrate SOAR permissions to Google Cloud IAM Frequently asked questions Need more help?

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- It is now possible to configure alerts to be dropped if the source environment doesn't exist. (ID #00180834) July 12, 2023 Fixed Release Notes 6.2.30: Playbooks not always saved correctly within Platform (ID #00243484) amic include /release-notes/ chronicle-soar %} Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Fixed Error when trying to log in again to Chronicle SOAR (ID #46831483) Email HTML template shows blank page in Settings (ID #46912863) Users filter in the Search page not displaying all the users (ID #00249930) Active Directory Groups field removed from Settings Permission groups as it is not supported October 24, 2023 Feature Remote Agents 1.4.4 Added support for all SDK calls over remote agents Improved managing integrations over the remote agent leading to a more overall stable product experience Publisher Python version upgraded to Python 3.11 Fixed Remote Agents 1.4.4 Remote agent actions do not return script results in the same way local actions return them (ID #45682680) Users unable to change the remote agent environment via agent CLI October 03, 2023 Fixed Release 6.2.36 GA - 14th October, 2023 Internal security fixes September 27, 2023 Feature Release Notes 6.2.35 GA - 8th October Risk Score and Severity added Two new information fields have been added to the Alert Details widget which appears in the Alert overview tab.
- This release contains the following changes: Feature Structured SOAR Python integration logs Python integration logging has been upgraded to a structured format to eliminate visibility gaps and ensure comprehensive diagnostic coverage in Google Cloud.
- Fixed Unable to edit case comments via API (ID #49966652) Fixed Google SecOps SOAR fails to return API keys (ID #50630848) Fixed Event details search option in alert tab stops working (ID #00287518) Fixed Error when trying to add a user to Google SecOps SOAR Fixed Unable to re-run the playbooks (ID #00282282) Fixed SOAR filtering not working due to unsupported commas in names Fixed Unable to create or import advanced reports for certain Looker users (ID #00265303) May 17, 2024 Announcement Release 6.3.2 is now in General Availability.

