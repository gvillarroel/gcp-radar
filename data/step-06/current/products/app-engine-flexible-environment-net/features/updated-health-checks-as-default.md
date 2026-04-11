---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.761Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Updated health checks as default"
feature_slug: "updated-health-checks-as-default"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "gcloud app update --split-health-checks"
  - "updated health checks for new projects"
  - "health checks default setting"
  - "split health checks"
  - "new default health checks"
  - "updated health checks default"
  - "split checks"
---

# Updated health checks as default

Product: App Engine flexible environment .NET
Coverage: LOW

## Step 02 Summary

Updated health checks became the default for new App Engine projects, with upgrade supported via gcloud app update --split-health-checks.

## Extended Definition

Updated health checks became the default for new App Engine projects, with upgrade supported via gcloud app update --split-health-checks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- Learn more about split health check behaviors in the Migrating to Split Health Checks guide.
- By default, these health checks are enabled and are known as split health checks .

