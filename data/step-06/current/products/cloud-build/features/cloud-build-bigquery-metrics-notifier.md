---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.762Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build BigQuery metrics notifier"
feature_slug: "cloud-build-bigquery-metrics-notifier"
latest_feature_date: "2020-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
keywords:
  - "build"
  - "metrics"
  - "notifier"
  - "can"
  - "export"
  - "to"
  - "via"
  - "the"
---

# Cloud Build BigQuery metrics notifier

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can export build metrics to BigQuery via the BigQuery notifier.

## Extended Definition

Cloud Build can export build metrics to BigQuery via the BigQuery notifier.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- In the following example, the inline build config file logs echoes "hello world": steps: - name: 'ubuntu' args: ['echo', 'hello world'] Substitutions (optional): If you selected the build config file as your build config option or created an inline build config file, you can choose to define trigger-specific substitution variables using this field.
- Repository triggers let you filter incoming events and post build status back to the source provider, and can also be configured to work with a private network.
- If Cloud Build is unable to retrieve your API key, you can manually add your API key to the URL or learn how to obtain an API key if you don't have one yet.

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- If the task you want to perform requires capabilities that are not provided by an existing image, you can build your own custom image and use it in a build step.
- The Cloud Build developer community provides open-source builders that you can use to execute your tasks.
- Note: Users can specify a working directory using the dir field in a build config file.

