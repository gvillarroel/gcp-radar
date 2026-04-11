---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:45:54.307Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine flexible environment general availability"
feature_slug: "app-engine-flexible-environment-general-availability"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
keywords:
  - "Node.js Ruby Python Java Go support"
  - "99.95% SLA"
  - "production-ready flexible environment"
  - "Go live"
  - "flexible environment GA"
  - "App Engine flexible environment general availability"
  - "GA"
  - "general availability"
---

# App Engine flexible environment general availability

Product: App Engine flexible environment Python
Coverage: LOW

## Step 02 Summary

The App Engine flexible environment reached general availability with 99.95% SLA and support for Node.js, Ruby, Python, Java, and Go workloads.

## Extended Definition

The available excerpts show that App Engine Flexible Environment documentation covers operational configuration (for example, `app.yaml` settings such as health check behavior and instance health thresholds) and application authentication guidance that can integrate Identity Platform/Firebase Authentication. The provided evidence does not explicitly confirm a general-availability milestone, the March 2017 GA date, or the exact runtime set (Node.js, Ruby, Python, Java, Go) for the flexible environment.

## Evidence Summary

The cited pages contribute implementation details for authentication and `app.yaml` configuration in the flexible environment, but they do not directly document the feature's GA status or release details requested.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)

## Supporting Pages

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- The recommended method when starting a new project, so you can use the capabilities of Identity Platform as well as the legacy features from Firebase Authentication .
- It offers enterprise features including multi-factor authentication, OIDC and SAML SSO support, multi-tenancy, 99.95% SLA, and more.

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: It is official documentation for the App Engine flexible environment, but it provides configuration syntax and settings rather than GA milestones, SLA, or platform-wide availability announcements.

Evidence snippets:
- Note that this value must be greater than timeout sec. failure threshold 4 checks 1-10 An instance is unhealthy after failing this number of consecutive checks. success threshold 2 checks 1-10 An unhealthy instance becomes healthy again after successfully responding to this number of consecutive checks. initial delay sec 300 seconds 0-3600 The delay, in seconds, after the instance starts during which health check responses are ignored.
- Home Documentation Application hosting App Engine Flexible environment Reference Send feedback app.yaml Configuration File Stay organized with collections Save and categorize content based on your preferences.
- The total amount of memory available to the application is set by the runtime environment as the environment variable GAE MEMORY MB .
- Warning: Legacy health checks using the / ah/health path are now deprecated, and you should migrate to use split health checks .

