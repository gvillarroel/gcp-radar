---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.758Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build user-specified build service accounts"
feature_slug: "cloud-build-user-specified-build-service-accounts"
latest_feature_date: "2021-01-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "build"
  - "user"
  - "specified"
  - "accounts"
  - "users"
  - "can"
  - "configure"
  - "custom"
---

# Cloud Build user-specified build service accounts

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Users can configure custom service accounts for Cloud Build to use when running builds.

## Extended Definition

Users can configure custom service accounts for Cloud Build to use when running builds.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 29, 2023 Feature You can now configure Cloud Build to generate Google-signed identity tokens for user-specified service accounts during a build.
- June 30, 2020 Feature Open-source notifiers for Slack and SMTP are now generally available .These notifiers can be configured to securely alert users about build status.
- September 13, 2022 Feature Users can now use Cloud Console to configure a trigger to send build logs to GitHub or GitHub Enterprise.
- November 07, 2022 Feature Users can now customize Slack notifications for their builds using notifier templates.

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Because your custom builder's users may specify any dir value, the builder should avoid hard-coding /workspace if possible.
- Note: Users can specify a working directory using the dir field in a build config file.
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- If the task you want to perform requires capabilities that are not provided by an existing image, you can build your own custom image and use it in a build step.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Security implications of build triggers The service account configured for a build trigger can provide elevated build-time permissions to users who employ triggers to invoke a build.
- This applies to both your Cloud Build default service account and user-specified service accounts.
- To learn more see Configure user-specified-service accounts .
- If you're using GitHub pull request triggers, any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the code in the pull request.

