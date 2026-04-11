---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.737Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Google Chat notifier"
feature_slug: "cloud-build-google-chat-notifier"
latest_feature_date: "2022-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
keywords:
  - "build"
  - "chat"
  - "notifier"
  - "can"
  - "send"
  - "status"
  - "notifications"
  - "to"
---

# Cloud Build Google Chat notifier

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can send build status notifications to Google Chat through a dedicated notifier.

## Extended Definition

Cloud Build can send build status notifications to Google Chat through a dedicated notifier.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- You can specify that your app is deployed to an environment in your build config file and then use this field to define substitution variables specifying which environment this trigger should deploy to.
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Stay organized with collections Save and categorize content based on your preferences.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub Enterprise repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Enterprise Stay organized with collections Save and categorize content based on your preferences.
- The following data is currently shared between Cloud Build and GitHub Enterprise: Cloud project ID Trigger name Build logs Note: Build logs are only shared if you configure your trigger to send build logs.
- You can specify that your app is deployed to an environment in your build config file and then use this field to define substitution variables specifying which environment this trigger should deploy to.

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- Home Documentation Application development Cloud Build Guides Send feedback Automate builds in response to Pub/Sub events Stay organized with collections Save and categorize content based on your preferences.
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.

