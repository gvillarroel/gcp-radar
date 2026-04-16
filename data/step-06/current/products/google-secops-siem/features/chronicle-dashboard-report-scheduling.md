---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.664Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle dashboard report scheduling"
feature_slug: "chronicle-dashboard-report-scheduling"
latest_feature_date: "2023-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
keywords:
  - "chronicle"
  - "dashboard"
  - "report"
  - "scheduling"
  - "reports"
  - "can"
  - "scheduled"
  - "email"
---

# Chronicle dashboard report scheduling

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle dashboard reports can be scheduled for email delivery from default or custom dashboards.

## Extended Definition

Chronicle dashboard reports can be scheduled for email delivery from default or custom dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)

## Supporting Pages

### "Configure data RBAC for Dashboards \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards)
- Source ID: `site-docs-reference-required-1`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure data RBAC for Dashboards Supported in: Google secops SIEM This document explains how Google Security Operations administrators can assign scopes to dashboards.
- Grant user access to Dashboards To grant a user or group access to Dashboards, follow these steps: In the Google Cloud console, click IAM > Grant Access .
- The Dashboards feature of Google Security Operations is built from charts populated using YARA-L 2.0 properties.
- In the Select a role list, search for "Chronicle SIEM", and then select the required predefined or custom role.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- For example, if you add the following to your search, it limits the results to a maximum of 25: limit: 25 Note: You can also add the limit keyword to custom dashboards.
- This list is saved in your browser session history across the Search, Rules, and Dashboard editors.

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference-required-1`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Regional addresses: africa-south1: https://chronicle.africa-south1.rep.googleapis.com asia-northeast1: https://chronicle.asia-northeast1.rep.googleapis.com asia-south1: https://chronicle.asia-south1.rep.googleapis.com asia-southeast1: https://chronicle.asia-southeast1.rep.googleapis.com asia-southeast2: https://chronicle.asia-southeast2.rep.googleapis.com australia-southeast1: https://chronicle.australia-southeast1.rep.googleapis.com europe-west12: https://chronicle.europe-west12.rep.googleapis.com europe-west2: https://chronicle.europe-west2.rep.googleapis.com europe-west3: https://chronicle.europe-west3.rep.googleapis.com europe-west6: https://chronicle.europe-west6.rep.googleapis.com europe-west9: https://chronicle.europe-west9.rep.googleapis.com me-central1: https://chronicle.me-central1.rep.googleapis.com me-central2: https://chronicle.me-central2.rep.googleapis.com me-west1: https://chronicle.me-west1.rep.googleapis.com northamerica-northeast2: https://chronicle.northamerica-northeast2.rep.googleapis.com southamerica-east1: https://chronicle.southamerica-east1.rep.googleapis.com us: https://chronicle.us.rep.googleapis.com eu: https://chronicle.eu.rep.googleapis.com For example, to get a list of all cases on a project in the US: GET https://chronicle.us.rep.googleapis.com/v1alpha/projects/my-project-name-or-id/locations/us/instances/408bfb7b-5746-4a50-885a-50a323023529/cases Update the authentication method The new API uses Google Cloud IAM for authentication.
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- Migration steps This section outlines the steps to successfully migrate your applications to Chronicle API: Review the documentation Familiarize yourself with the comprehensive documentation for the new API, including the Chronicle API reference guide.
- Migrate SOAR endpoints to Chronicle API Supported in: Google secops SOAR This document outlines the steps and considerations for migrating from the deprecated SOAR API surface to the unified Chronicle API.

