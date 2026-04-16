---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.290Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Build environment variables"
feature_slug: "build-environment-variables"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "variables"
  - "build"
  - "setting"
  - "supports"
---

# Build environment variables

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment supports setting build environment variables for application builds; App Engine standard environment supports setting build environment variables for application builds.

## Extended Definition

App Engine standard environment supports setting build environment variables for application builds; App Engine standard environment supports setting build environment variables for application builds.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.
- For Python, these variables are available in the os.environ dictionary: env variables : DJANGO SETTINGS MODULE : "myapp.settings" Also see the list of runtime environment variables that cannot be overwritten. error handlers Optional.
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . build env variables Optional.
- To learn more, see Using build environment variables . default expiration Optional.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Structure your files Your service will have the following file structure: go-app/ : directory for your Go service. app.yaml : Your service's configuration settings. main.go : Your application code.
- After you build your app, you can read other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- A service account can be used to authenticate from the following tools: gcloud CLI IDEs and build tools that use gcloud CLI tools to test and deploy App Engine apps Creating a user account Open the IAM page in the Google Cloud console.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Setting up access control Stay organized with collections Save and categorize content based on your preferences.
- In App Engine, there are a few separate use cases for setting up access control: Granting team members access to your Google Cloud project so they can set up services and deploy apps.

