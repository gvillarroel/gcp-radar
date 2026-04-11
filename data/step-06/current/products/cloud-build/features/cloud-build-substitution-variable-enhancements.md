---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.766Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build substitution variable enhancements"
feature_slug: "cloud-build-substitution-variable-enhancements"
latest_feature_date: "2020-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
keywords:
  - "build"
  - "substitution"
  - "variable"
  - "enhancements"
  - "variables"
  - "now"
  - "referencing"
  - "other"
---

# Cloud Build substitution variable enhancements

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build substitution variables now support referencing other variables, bash-style string operations, and trigger event payload bindings.

## Extended Definition

Cloud Build substitution variables now support referencing other variables, bash-style string operations, and trigger event payload bindings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- You can specify that your app is deployed to an environment in your build config file and then use this field to define substitution variables specifying which environment this trigger should deploy to.
- Substitution variables (optional): If you selected the Cloud Build config file as your build config option, you can choose to define trigger-specific substitution variables using this field.
- Buildpack environment variables (optional): If you selected buildpacks as your configuration type, click Add pack environment variable to specify your buildpack environment variables and values.
- For information on specifying substitution values in build config files, see Substituting variable values .

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.
- Substitutions (optional): If you selected the build config file as your build config option, you can choose to define trigger-specific substitution variables using this field.
- Substitutions (optional): If you selected the build config file as your build config option, you can choose to define trigger-specific substitution variables using this field.

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, the inline build config file logs echoes "hello world": steps: - name: 'ubuntu' args: ['echo', 'hello world'] Substitutions (optional): If you selected the build config file as your build config option or created an inline build config file, you can choose to define trigger-specific substitution variables using this field.
- Filters (optional): You can create a rule within a trigger that determines whether or not your trigger will execute a build based on your substitution variables.
- Buildpack environment variables (optional): If you selected buildpacks as your configuration type, click Add pack environment variable to specify your buildpack environment variables and values.
- You can also obtain data using payload bindings when defining substitution variables values.

