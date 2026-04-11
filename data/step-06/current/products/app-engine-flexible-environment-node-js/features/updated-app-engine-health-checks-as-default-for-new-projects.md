---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:05:36.404Z"
product_name: "App Engine flexible environment Node.js"
product_slug: "app-engine-flexible-environment-node-js"
feature_name: "Updated App Engine health checks as default for new projects"
feature_slug: "updated-app-engine-health-checks-as-default-for-new-projects"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "gcloud app update --split-health-checks"
  - "new projects default health checks"
  - "split-health-checks flag"
  - "split health checks"
  - "new health checks"
  - "health checks migration"
  - "updated health checks"
---

# Updated App Engine health checks as default for new projects

Product: App Engine flexible environment Node.js
Coverage: LOW

## Step 02 Summary

Updated health checks became the default setting for new App Engine projects, with migration from legacy checks via gcloud app update --split-health-checks.

## Extended Definition

Updated health checks became the default setting for new App Engine projects, with migration from legacy checks via gcloud app update --split-health-checks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "App Engine flexible environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- July 12, 2017 Feature You can now use updated health checks, which allow you to use separate checks to confirm that your instance is running and ready to serve content.
- Feature If you use updated health checks, deployments will fail if your application does not reach a ready state.
- To upgrade a project from legacy health checks, run the command gcloud app update --split-health-checks .
- Feature Updated health checks are now the default for new projects.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- Learn more about split health check behaviors in the Migrating to Split Health Checks guide.
- By default, these health checks are enabled and are known as split health checks .

