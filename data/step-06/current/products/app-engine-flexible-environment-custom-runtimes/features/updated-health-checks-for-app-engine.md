---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:39:03.560Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Updated health checks for App Engine"
feature_slug: "updated-health-checks-for-app-engine"
latest_feature_date: "2017-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "separate readiness checks"
  - "health check configuration"
  - "separate running checks"
  - "readiness probe"
  - "liveness check"
  - "readiness checks"
  - "App Engine health checks"
  - "running checks"
---

# Updated health checks for App Engine

Product: App Engine flexible environment custom runtimes
Coverage: LOW

## Step 02 Summary

Updated health checks were introduced for App Engine, allowing separate running and readiness checks while initially available in beta.

## Extended Definition

Updated health checks were introduced for App Engine, allowing separate running and readiness checks while initially available in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: The page is about app.yaml runtime and configuration syntax for App Engine flexible, but the provided excerpt does not specifically discuss updated running/readiness health checks or beta launch details.

Evidence snippets:
- If you want to extend health checks to your application, then specify a path for liveness checks or readiness checks .
- You can customize health check requests by adding an optional readiness check section to your app.yaml file, for example: readiness check : path : "/readiness check" check interval sec : 5 timeout sec : 4 failure threshold : 2 success threshold : 2 app start timeout sec : 300 The following settings are available for readiness checks: Field Default Range (Minimum-Maximum) Description path None If you want readiness checks to be forwarded to your application container, specify a URL path, such as "/readiness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 5 seconds 1-300 Time interval between checks, in seconds.
- You can customize liveness check requests by adding an optional liveness check section to your app.yaml file, for example: liveness check : path : "/liveness check" check interval sec : 30 timeout sec : 4 failure threshold : 2 success threshold : 2 The following settings are available for liveness checks: Field Default Range (Minimum-Maximum) Description path None If you want liveness checks to be forwarded to your application container, specify a URL path, such as "/liveness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 30 seconds 1-300 Time interval between checks, in seconds.
- There are two types of health checks that you can use: Liveness checks confirm that the VM and Docker container are running.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- Liveness checks can fail due to the configured thresholds and time intervals, or due to the container crashing.
- When a VM instance fails the liveness check, the instance is restarted automatically.
- Readiness checks detect that a VM instance is ready to accept incoming requests.

