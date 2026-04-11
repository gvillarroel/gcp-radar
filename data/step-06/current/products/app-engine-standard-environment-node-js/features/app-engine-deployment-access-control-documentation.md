---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.089Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "App Engine deployment access-control documentation"
feature_slug: "app-engine-deployment-access-control-documentation"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml"
keywords:
  - "roles/appengine.deployer"
  - "required IAM permissions"
  - "deploy role"
  - "deployment permissions"
  - "gcloud app deploy"
  - "deploying App Engine applications"
  - "App Engine deployment access"
  - "deployment IAM"
---

# App Engine deployment access-control documentation

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

Access-control documentation was improved to describe IAM roles and permissions required for deploying App Engine applications.

## Extended Definition

Access-control documentation was improved to describe IAM roles and permissions required for deploying App Engine applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Test and deploy your application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to deploy the service defined by the app.yaml file to a specific Google Cloud project, assign it a custom version ID, and prevent traffic from being routed to the new version: gcloud app deploy --project PROJECT ID --version VERSION ID --no-promote For more information about this command, see the gcloud app deploy reference .
- For example, to test a new version of your default service: Deploy your new version, but prevent traffic from being automatically routed to the new version: gcloud app deploy --no-promote Access your new version by navigating to the following URL: https:// VERSION ID -dot-default-dot- PROJECT ID .
- You can specify multiple files with a single gcloud app deploy command: gcloud app deploy service1/app.yaml service2/app.yaml View build logs Cloud Build streams build and deploy logs that are viewable in the Cloud Build Build history section of the Google Cloud console.
- To deploy a version of your application's service, run the following command from the directory where the app.yaml file of your service is located: gcloud app deploy Specifying no files with the command deploys only the app.yaml file in your current directory.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you name your app.yaml file service-name-app.yaml or app.standard.yaml , then you must deploy your app using either: gcloud app deploy service-name-app.yaml gcloud app deploy app.standard.yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .
- If you don't create an app.yaml file, the gcloud app deploy command can create one when you deploy your application .

