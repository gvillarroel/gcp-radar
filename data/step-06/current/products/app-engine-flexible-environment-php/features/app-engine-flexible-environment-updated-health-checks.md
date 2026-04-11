---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:58.731Z"
product_name: "App Engine flexible environment PHP"
product_slug: "app-engine-flexible-environment-php"
feature_name: "App Engine flexible environment updated health checks"
feature_slug: "app-engine-flexible-environment-updated-health-checks"
latest_feature_date: "2017-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "serving status check"
  - "ready/serving checks"
  - "readiness check"
  - "liveness check"
  - "instance running status"
  - "dual health checks"
  - "running check"
  - "health checks for flexible environment"
---

# App Engine flexible environment updated health checks

Product: App Engine flexible environment PHP
Coverage: LOW

## Step 02 Summary

Updated health checks were introduced, enabling separate checks for instance running status and readiness to serve traffic.

## Extended Definition

Updated health checks were introduced, enabling separate checks for instance running status and readiness to serve traffic.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: This page is the App Engine flexible app.yaml reference, which likely includes the configuration schema used to define readiness/liveness behavior, but the provided excerpt does not itself state the updated-health-check semantics.

Evidence snippets:
- If you want to extend health checks to your application, then specify a path for liveness checks or readiness checks .
- You can customize health check requests by adding an optional readiness check section to your app.yaml file, for example: readiness check : path : "/readiness check" check interval sec : 5 timeout sec : 4 failure threshold : 2 success threshold : 2 app start timeout sec : 300 The following settings are available for readiness checks: Field Default Range (Minimum-Maximum) Description path None If you want readiness checks to be forwarded to your application container, specify a URL path, such as "/readiness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 5 seconds 1-300 Time interval between checks, in seconds.
- You can customize liveness check requests by adding an optional liveness check section to your app.yaml file, for example: liveness check : path : "/liveness check" check interval sec : 30 timeout sec : 4 failure threshold : 2 success threshold : 2 The following settings are available for liveness checks: Field Default Range (Minimum-Maximum) Description path None If you want liveness checks to be forwarded to your application container, specify a URL path, such as "/liveness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 30 seconds 1-300 Time interval between checks, in seconds.
- There are two types of health checks that you can use: Liveness checks confirm that the VM and Docker container are running.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- If a VM instance fails the readiness check, it means that the VM instance has not finished its startup and is not ready to receive requests.
- When the VM instance passes the readiness check and has completed its startup, it is added to the pool of available instances.
- Liveness checks can fail due to the configured thresholds and time intervals, or due to the container crashing.

