---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.754Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "Updated health checks"
feature_slug: "updated-health-checks"
latest_feature_date: "2017-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "separate run checks and readiness checks"
  - "readiness check requirement"
  - "run check before deployment"
  - "App Engine deployment readiness check"
  - "health check requirement"
  - "readiness check"
  - "updated health checks"
  - "run check"
---

# Updated health checks

Product: App Engine flexible environment Go
Coverage: LOW

## Step 02 Summary

App Engine introduced updated health checks, enabling separate run and readiness checks and requiring readiness before successful deployment in beta.

## Extended Definition

App Engine introduced updated health checks, enabling separate run and readiness checks and requiring readiness before successful deployment in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: While app.yaml is where health-check settings are typically configured, the provided excerpt does not include the updated run/readiness check details or deployment-readiness requirements tied to this feature.

Evidence snippets:
- You can customize health check requests by adding an optional readiness check section to your app.yaml file, for example: readiness check : path : "/readiness check" check interval sec : 5 timeout sec : 4 failure threshold : 2 success threshold : 2 app start timeout sec : 300 The following settings are available for readiness checks: Field Default Range (Minimum-Maximum) Description path None If you want readiness checks to be forwarded to your application container, specify a URL path, such as "/readiness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 5 seconds 1-300 Time interval between checks, in seconds.
- If you want to extend health checks to your application, then specify a path for liveness checks or readiness checks .
- Instances that don't pass the readiness check are not added to the pool of available instances.
- Instances that fail the readiness check are not added to the pool of available instances.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- If a VM instance fails the readiness check, it means that the VM instance has not finished its startup and is not ready to receive requests.
- When the VM instance passes the readiness check and has completed its startup, it is added to the pool of available instances.
- Readiness checks detect that a VM instance is ready to accept incoming requests.

