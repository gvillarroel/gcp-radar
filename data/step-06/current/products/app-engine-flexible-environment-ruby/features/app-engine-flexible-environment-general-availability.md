---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.807Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible environment general availability"
feature_slug: "app-engine-flexible-environment-general-availability"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
keywords:
  - "99.95% SLA"
  - "Node.js runtime"
  - "GA launch"
  - "General Availability announcement"
  - "App Engine flexible environment GA"
  - "GA"
  - "Python runtime"
  - "Java runtime"
---

# App Engine flexible environment general availability

Product: App Engine flexible environment Ruby
Coverage: LOW

## Step 02 Summary

App Engine flexible environment reached general availability with a 99.95% SLA and support for Node.js, Ruby, Python, Java, and Go runtimes.

## Extended Definition

The provided excerpts do not explicitly document a standalone “App Engine flexible environment GA” announcement; they describe operational documentation for App Engine Flexible Environment, including app.yaml configuration options (health checks, networking, skipped files) and runtime-specific guidance patterns (notably Python and Java references). The authentication page adds context on user identity options for flexible apps but ties the cited 99.95% SLA to Identity Platform features, not directly to a flexible-environment GA milestone.

## Evidence Summary

These official pages provide flexible environment configuration and authentication documentation, but they do not provide direct evidence confirming the GA launch date, exact supported runtime set, or a GA SLA claim for App Engine flexible environment.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a generic app.yaml reference for App Engine flexible environment and mentions runtimes (including Ruby), but it does not discuss GA status, SLA, or formal launch availability.

Evidence snippets:
- Note that this value must be greater than timeout sec. failure threshold 4 checks 1-10 An instance is unhealthy after failing this number of consecutive checks. success threshold 2 checks 1-10 An unhealthy instance becomes healthy again after successfully responding to this number of consecutive checks. initial delay sec 300 seconds 0-3600 The delay, in seconds, after the instance starts during which health check responses are ignored.
- For example, if you want to forward TCP traffic from port 2222 : In the network settings of your app.yaml , include: network : forwarded ports : - 2222/tcp If you use the Python runtime, modify the app.yaml to include: entrypoint: gunicorn -b :$PORT -b :2222 main:app Specify a firewall rule in the Google Cloud console or using gcloud compute firewall-rules create to allow traffic from any source ( 0.0.0.0/0 ) and from tcp:2222 .
- For example, to skip files whose names end in .bak , add a skip files section like the following: skip files : - ^. \.bak$ Runtime-specific settings See the Python runtime page to learn more about specifying a Python interpreter using the runtime config settings.
- Home Documentation Application hosting App Engine Flexible environment Reference Send feedback app.yaml Configuration File Stay organized with collections Save and categorize content based on your preferences.

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

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Note: For the Java runtime, the file organization depends on which Java runtime you are using.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- For the Java runtime , configuration files are in the YAML format.
- See the appropriate Java runtime developer guide for details.

