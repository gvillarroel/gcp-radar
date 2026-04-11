---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.778Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build global environment variables"
feature_slug: "cloud-build-global-environment-variables"
latest_feature_date: "2019-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "build"
  - "global"
  - "environment"
  - "variables"
  - "allows"
  - "to"
  - "be"
  - "defined"
---

# Cloud Build global environment variables

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build allows environment variables to be defined globally for all build steps in a build.

## Extended Definition

Cloud Build allows environment variables to be defined globally for all build steps in a build.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the example below, the trigger is configured to respond to builds with a tag matching prod and an action matching INSERT based on the specified payload as defined by the substitution variable, IMAGE TAG . gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' IMAGE TAG = "$(body.message.data.tag)" , ' \ ' ACTION = "$(body.message.data.action)" ' \ -- subscription - filter = ' IMAGE TAG != "" && ACTION == "INSERT" ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- Buildpack environment variables (optional): If you selected buildpacks as your configuration type, click Add pack environment variable to specify your buildpack environment variables and values.
- Buildpack environment variables (optional): If you selected buildpacks as your configuration type, click Add pack environment variable to specify your buildpack environment variables and values.
- To learn more about buildpack environment variables, see Environment variables .

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Buildpack environment variables (optional): If you selected buildpacks as your configuration type, click Add pack environment variable to specify your buildpack environment variables and values.
- To learn more about buildpack environment variables, see Environment variables .
- Use the following command to invoke a webhook event: curl -X POST -H "Content-type: application/json" "https://cloudbuild.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ REGION } /triggers/ ${ TRIGGER NAME } :webhook?key= ${ API KEY } & secret= ${ SECRET VALUE } & trigger= ${ TRIGGER NAME } & projectId= ${ PROJECT ID } " -d "{}" After completing these steps, the Secret Manager Secret Accessor role will automatically be granted to your Cloud Build service agent, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- You can specify that your app is deployed to an environment in your build config file and then use this field to define substitution variables specifying which environment this trigger should deploy to.
- Buildpack environment variables (optional): If you selected buildpacks as your configuration type, click Add pack environment variable to specify your buildpack environment variables and values.
- To learn more about buildpack environment variables, see Environment variables .
- Each time you push a change to your source, Cloud Build looks through your changed files for included and ignored files to determine whether a build should be invoked: If you push a change to your repository on an existing branch, Cloud Build looks at the files changed between the commit you just pushed and the commit to which the branch previously pointed.

