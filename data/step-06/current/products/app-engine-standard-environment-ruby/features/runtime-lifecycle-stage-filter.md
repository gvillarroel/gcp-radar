---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.396Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Runtime lifecycle stage filter"
feature_slug: "runtime-lifecycle-stage-filter"
latest_feature_date: "2024-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/lifecycle/support-schedule"
keywords:
  - "lifecycle"
  - "filter"
  - "stage"
  - "users"
  - "runtime"
  - "lets"
---

# Runtime lifecycle stage filter

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The runtime lifecycle stage filter lets users filter App Engine versions by lifecycle status and view warnings for versions nearing or past support milestones.

## Extended Definition

The runtime lifecycle stage filter lets users filter App Engine versions by lifecycle status and view warnings for versions nearing or past support milestones.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/support-schedule](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/support-schedule)

## Supporting Pages

### "Runtime lifecycle \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-4`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Runtime lifecycle GA-level support End of Support Deprecated Decommissioned Creation & redeployment Yes No 1 No No Project Configuration Updates Yes Yes No No Running existing workloads Yes Yes Yes May be disabled UI & CLI Warnings Yes Yes No No Language patches Automatic No automatic updates No automatic updates No automatic updates Patching APIs & SDKs Automatic No automatic updates No automatic updates No automatic updates Patching OS Automatic No automatic updates No automatic updates No automatic updates Customer Support GA-level support No runtime support No runtime support No runtime support Notification period App Engine will begin issuing in-app notifications 90 days before the application reaches end of support.
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Runtime lifecycle Stay organized with collections Save and categorize content based on your preferences.
- Google may make changes to any runtime's support schedule or lifecycle in accordance with the terms of your agreement for the use of Google Cloud platform services.
- For details, see the migration guides: Migrate from Python 2.7 to the latest Python runtime Migrate from PHP 5 to the latest PHP runtime Migrate from Go 1.11 to the latest Go runtime Migrate from Java 8 to the latest Java runtime In certain cases, Google may permit your Organization to re-enable deployments in unsupported runtimes, subject to service specific terms and conditions.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This solution works well if you are upgrading an existing app from a first-generation runtime to a second-generation runtime, and want to continue to use the Users API.
- Go Java Node.js PHP Python Ruby To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.

### "Runtime support schedule \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/support-schedule](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/support-schedule)
- Source ID: `site-docs-reference-4`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page provides key dates for App Engine standard environment language runtimes as described in the Runtime lifecycle page.
- Java Runtime Environment Runtime ID End of support Deprecated Decommissioned Java 25 Ubuntu 24.04 java25 Oct 2031 Java 21 Ubuntu 22.04 java21 Sept 2031 Java 17 Ubuntu 22.04 java17 Oct 2027 Java 11 Ubuntu 18.04 java11 2024-10-31 2025-10-31 Java 8 App Engine first-generation java8 2024-01-31 2026-01-31 2027-01-31 Node.js Runtime Environment Runtime ID End of support Deprecated Decommissioned Node.js 24 Ubuntu 24.04 nodejs24 2028-04-30 2029-04-30 Node.js 22 Ubuntu 22.04 nodejs22 2027-04-30 2028-04-30 Node.js 20 Ubuntu 22.04 nodejs20 2026-04-30 2027-04-30 Node.js 18 Ubuntu 22.04 nodejs18 2025-04-30 2026-04-30 Node.js 16 Ubuntu 18.04 nodejs16 2024-01-30 2025-01-31 Node.js 14 Ubuntu 18.04 nodejs14 2024-01-30 2025-01-31 Node.js 12 Ubuntu 18.04 nodejs12 2024-01-30 2025-01-31 Node.js 10 Ubuntu 18.04 nodejs10 2024-01-30 2025-01-31 Node.js 8 Ubuntu 18.04 nodejs8 2018-06-27 2019-10-01 Python Runtime Environment Runtime ID End of support Deprecated Decommissioned Python 3.14 Ubuntu 24.04 python314 2030-10-10 2031-10-10 Python 3.13 Ubuntu 22.04 python313 2029-10-10 2030-10-10 Python 3.12 Ubuntu 22.04 python312 2028-10-02 2029-10-02 Python 3.11 Ubuntu 22.04 python311 2027-10-24 2028-10-24 Python 3.10 Ubuntu 22.04 python310 2026-10-04 2027-10-01 Python 3.9 Ubuntu 18.04 python39 2025-10-05 2026-10-01 Python 3.8 Ubuntu 18.04 python38 2024-10-14 2025-10-01 Python 3.7 Ubuntu 18.04 python37 2024-01-30 2025-01-31 Python 2.7 App Engine first-generation python27 2024-01-31 2026-01-31 2027-01-31 PHP Runtime Environment Runtime ID End of support Deprecated Decommissioned PHP 8.5 Ubuntu 24.04 php85 2029-12-31 2030-12-31 PHP 8.4 Ubuntu 22.04 php84 2028-12-31 2029-12-31 PHP 8.3 Ubuntu 22.04 php83 2027-12-31 2028-12-31 PHP 8.2 Ubuntu 22.04 php82 2026-12-31 2027-12-31 PHP 8.1 Ubuntu 18.04 php81 2025-12-31 2026-12-31 PHP 7.4 Ubuntu 18.04 php74 2024-01-30 2025-01-31 PHP 7.3 Ubuntu 18.04 php73 2024-01-30 2025-01-31 PHP 7.2 Ubuntu 18.04 php72 2024-01-30 2025-01-31 PHP 5.5 App Engine first-generation php55 2024-01-30 2026-01-31 2027-01-31 Ruby Runtime Environment Runtime ID End of support Deprecated Decommission Ruby 4.0 Ubuntu 24.04 ruby40 2029-03-31 2030-03-31 Ruby 3.4 Ubuntu 22.04 ruby34 2028-03-31 2029-03-31 Ruby 3.3 Ubuntu 22.04 ruby33 2027-03-31 2028-03-31 Ruby 3.2 Ubuntu 22.04 ruby32 2026-03-31 2027-03-31 Ruby 3.0 Ubuntu 18.04 ruby30 2024-03-31 2025-03-31 Ruby 2.7 Ubuntu 18.04 ruby27 2024-01-30 2025-01-31 Ruby 2.6 Ubuntu 18.04 ruby26 2024-01-30 2025-01-31 Ruby 2.5 Ubuntu 18.04 ruby25 2024-01-30 2025-01-31 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Go Runtime Environment Runtime ID End of support Deprecated Decommissioned Go 1.26 Ubuntu 24.04 go126 Go 1.25 Ubuntu 22.04 go125 Go 1.24 Ubuntu 22.04 go124 2027-03-02 2028-03-02 Go 1.23 Ubuntu 22.04 go123 2026-08-21 2027-08-21 Go 1.22 Ubuntu 22.04 go122 2026-07-28 2027-07-28 Go 1.21 Ubuntu 22.04 go121 2026-03-03 2027-03-03 Go 1.20 Ubuntu 22.04 go120 2024-11-01 2025-11-01 Go 1.19 Ubuntu 22.04 go119 2024-04-30 2025-04-30 Go 1.18 Ubuntu 22.04 go118 2024-01-30 2025-01-31 Go 1.16 Ubuntu 18.04 go116 2024-01-30 2025-01-31 Go 1.15 Ubuntu 18.04 go115 2024-01-30 2025-01-31 Go 1.14 Ubuntu 18.04 go114 2024-01-30 2025-01-31 Go 1.13 Ubuntu 18.04 go113 2024-01-30 2025-01-31 Go 1.12 Ubuntu 18.04 go112 2024-01-30 2025-01-31 Go 1.11 Ubuntu 18.04 ( App Engine first-generation ) go111 2024-01-30 2026-01-31 2027-01-31 Note: Go's release policy states that each major Go release is supported until there are two newer major releases.
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Runtime support schedule Stay organized with collections Save and categorize content based on your preferences.

