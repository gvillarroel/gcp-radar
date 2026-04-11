---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:45:54.300Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Updated health checks"
feature_slug: "updated-health-checks"
latest_feature_date: "2017-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "separate liveness and readiness"
  - "liveness/readiness checks"
  - "health check probes"
  - "instance readiness"
  - "readiness check"
  - "liveness check"
  - "updated health checks"
  - "beta health checks"
---

# Updated health checks

Product: App Engine flexible environment Python
Coverage: LOW

## Step 02 Summary

Updated health checks were introduced, enabling separate liveness and readiness checks for instances in beta.

## Extended Definition

Updated health checks were introduced, enabling separate liveness and readiness checks for instances in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- If a VM instance fails the readiness check, it means that the VM instance has not finished its startup and is not ready to receive requests.
- When the VM instance passes the readiness check and has completed its startup, it is added to the pool of available instances.
- Liveness checks can fail due to the configured thresholds and time intervals, or due to the container crashing.

