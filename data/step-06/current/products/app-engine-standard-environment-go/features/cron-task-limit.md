---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.313Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Cron task limit"
feature_slug: "cron-task-limit"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
keywords:
  - "cron"
  - "limit"
  - "task"
  - "supports"
---

# Cron task limit

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine cron supports up to 250 scheduled tasks per application.

## Extended Definition

App Engine cron supports up to 250 scheduled tasks per application.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- Resource Default limit Cron job 250 cron jobs URL Fetch URL Fetch API calls The total number of times the application accessed the URL fetch service to perform an HTTP or HTTPS request.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- For example, cron scheduled tasks satisfy the admin restriction, because App Engine sets an HTTP header X-Appengine-Cron: true on the respective requests.
- However, the requests would not satisfy the required login restriction, because cron scheduled tasks are not run as any user. mime type Optional.
- This is useful to limit the costs of a module. min instances Warning: For this feature to function properly, you must make sure that warmup requests are enabled and that your application handles warmup requests.
- This means requests can remain in the pending queue for up to 10s, the maximum pending request time limit , before new instance starts are triggered.

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Separation of deployment and traffic routing duties Many organizations prefer to separate the task of deploying an application version from the task of ramping up traffic to the newly created version, and to have these tasks done by different job functions.
- The App Engine Deployer and App Engine Service Admin roles provide this separation: App Engine Deployer plus Service Account User roles - Accounts are limited to deploying new versions and deleting old versions that are not serving traffic.
- The following types of roles grant access to App Engine: Basic roles which apply to all services and resources in a project, including but not limited App Engine.

