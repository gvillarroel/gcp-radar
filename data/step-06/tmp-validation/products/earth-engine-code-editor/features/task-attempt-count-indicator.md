---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.578Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Task attempt count indicator"
feature_slug: "task-attempt-count-indicator"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/access_control"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/computation_overview"
keywords:
  - "indicator"
  - "attempt"
  - "count"
  - "shows"
  - "manager"
  - "task"
---

# Task attempt count indicator

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The task manager now shows how many times a task has been attempted.

## Extended Definition

The task manager now shows how many times a task has been attempted.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)

## Supporting Pages

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These roles are: Role Title Description roles/earthengine.viewer Earth Engine Resource Viewer Provides permission to view and list Assets and tasks. roles/earthengine.writer Earth Engine Resource Writer Provides permission to read, create, modify and delete assets, import images and tables, read and update tasks, perform interactive computations, and create long running export tasks. roles/earthengine.admin Earth Engine Admin Provides permission for all Earth Engine resources including changing access controls for Earth Engine assets. roles/earthengine.appsPublisher Earth Engine Apps Publisher Provides permission to create a service account for use with an Earth Engine app.
- Permissions needed on the billing account billing.subscriptions.create (to change an Earth Engine plan) billing.subscriptions.list (to view the current Earth Engine plan) Suggested roles on the billing account Billing Account Viewer ( roles/billing.viewer ), to view the current Earth Engine plan Billing Account Administrator ( roles/billing.admin ), to change an Earth Engine plan Batch task management The following permissions pertain to configuring per-project limits on batch task concurrency .
- Permissions needed Billing account billing.resourceAssociations.create Cloud project resourcemanager.projects.createBillingAssignment Suggested roles Billing account Billing Account User ( roles/billing.user ) Cloud project Project Billing Manager ( roles/billing.projectManager ) Commercial Project Registration The following permissions pertain to registering projects for paid use .
- Viewing project-level batch task limits Permissions needed on the Cloud account earthengine.config.get Setting project-level batch task limits Permissions needed on the Cloud account earthengine.config.update Note: This permission also encompasses viewing the plan-level limits that are configured on the billing account.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 65
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Attempting to circumvent quota restrictions through the use of multiple Google accounts is a violation of the Earth Engine Terms of Service.
- Code Editor (JavaScript) Export . table . toDrive ({ collection : terribleAggregations , description : 'terribleAggregations' , fileFormat : 'CSV' }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .
- Export . table . toDrive ( collection = terrible aggregations , description = 'terrible aggregations' , fileFormat = 'CSV' , ) task.start() User memory limit exceeded One way your algorithms get parallelized in Earth Engine is by splitting the inputs into tiles, running the same computation separately on each tile, then combining the results.
- Feature ( None , ridiculous computation )]), description = 'ridiculous computation' , fileFormat = 'CSV' , ) task.start() Too many concurrent aggregations The "aggregations" part of this error refers to operations that are spread out over multiple machines (such as reductions that span more than one tile).

### Computation Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)
- Source ID: `site-docs-root-2`
- Final score: 59
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Count An indicator proportional to the number of times the operation described in 'Description' was invoked.
- EECU usage tracks the computational footprint of tasks and does not directly correspond to CPU-seconds or wall clock time due to the managed nature of the service.
- Metrics for failed requests Earth Engine doesn't provide performance metrics for failed requests/tasks, since these numbers would be inaccurate or misleading.
- As an example, if a job fails because a worker task became unresponsive, that worker's processing consumption wouldn't be able to factor into the total.

