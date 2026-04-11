---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:39:03.553Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Cloud Scheduler general availability"
feature_slug: "cloud-scheduler-general-availability"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml"
keywords:
  - "cloudscheduler.googleapis.com"
  - "cron-style schedule"
  - "Cloud Scheduler job"
  - "create schedule"
  - "scheduled job"
  - "scheduler service"
  - "Cloud Scheduler"
  - "Cloud Cron"
---

# Cloud Scheduler general availability

Product: App Engine flexible environment custom runtimes
Coverage: LOW

## Step 02 Summary

Cloud Scheduler reached general availability for running scheduled units of work (cron jobs).

## Extended Definition

In App Engine flexible environment, scheduled work is configured via `cron.yaml` using a `schedule` element, and the documentation states that Unix-cron-style expressions should be used through Cloud Scheduler. The feature appears to be the App Engine flexible path for managing scheduled jobs as schedules, with deployment and updates gated by Cloud Scheduler permissions and API readiness.

## Evidence Summary

The page provides schedule-syntax guidance in `cron.yaml`, ties cron-like scheduling to Cloud Scheduler, and specifies required IAM roles plus Cloud Scheduler API/tooling prerequisites for schedule deployment.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: The page documents scheduled job behavior and deployment details in App Engine and references the Cloud Scheduler Admin IAM role, which is relevant context for scheduling capability but does not define Cloud Scheduler GA status.

Evidence snippets:
- Formatting the schedule To specify when your job runs, you must define the schedule element using the following syntax: schedule : [ TYPE ] [ INTERVAL VALUE ] [ INTERVAL SCOPE ] Note: If you prefer to specify your jobs with unix-cron syntax , use Cloud Scheduler .
- To deploy or update schedules, your account requires one of the following Identity and Access Management roles: Owner Editor Cloud Scheduler Admin ( roles/cloudscheduler.admin ) You can set the permission on the IAM page in the Google Cloud console .
- To resolve this, make sure the Cloud Scheduler API is enabled in your project and your gcloud CLI is updated to at least version 322.0.0. .

