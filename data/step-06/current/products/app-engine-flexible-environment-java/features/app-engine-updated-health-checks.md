---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.862Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine updated health checks"
feature_slug: "app-engine-updated-health-checks"
latest_feature_date: "2017-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "separate readiness and liveness checks"
  - "running state check"
  - "instance running check"
  - "liveness check"
  - "readiness check"
  - "App Engine health checks"
  - "Beta health checks"
  - "health checks"
---

# App Engine updated health checks

Product: App Engine flexible environment Java
Coverage: LOW

## Step 02 Summary

Updated App Engine health checks allow separate checks for instance running state and readiness to serve traffic, and this option is available in Beta.

## Extended Definition

Updated App Engine health checks allow separate checks for instance running state and readiness to serve traffic, and this option is available in Beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a flexible environment app.yaml reference and could define health-check-related config fields, but it does not describe the specific updated split-instance/running-state readiness behavior.

Evidence snippets:
- If you want to extend health checks to your application, then specify a path for liveness checks or readiness checks .
- There are two types of health checks that you can use: Liveness checks confirm that the VM and Docker container are running.
- You can customize health check requests by adding an optional readiness check section to your app.yaml file, for example: readiness check : path : "/readiness check" check interval sec : 5 timeout sec : 4 failure threshold : 2 success threshold : 2 app start timeout sec : 300 The following settings are available for readiness checks: Field Default Range (Minimum-Maximum) Description path None If you want readiness checks to be forwarded to your application container, specify a URL path, such as "/readiness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 5 seconds 1-300 Time interval between checks, in seconds.
- You can customize liveness check requests by adding an optional liveness check section to your app.yaml file, for example: liveness check : path : "/liveness check" check interval sec : 30 timeout sec : 4 failure threshold : 2 success threshold : 2 The following settings are available for liveness checks: Field Default Range (Minimum-Maximum) Description path None If you want liveness checks to be forwarded to your application container, specify a URL path, such as "/liveness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 30 seconds 1-300 Time interval between checks, in seconds.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.
- As the instance goes through these health checks, the App Engine logs can indicate that the instance is in any of the following states: Healthy .
- If a VM instance fails the readiness check, it means that the VM instance has not finished its startup and is not ready to receive requests.

