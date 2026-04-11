---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.856Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine IAM-based deployment permissions"
feature_slug: "app-engine-iam-based-deployment-permissions"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
keywords:
  - "required IAM permissions"
  - "IAM-based deploy"
  - "App Engine Deployer role"
  - "App Engine deploy roles"
  - "App Engine deployment permissions"
  - "App Engine IAM deployment"
  - "service account deployment"
  - "gcloud app deploy"
---

# App Engine IAM-based deployment permissions

Product: App Engine flexible environment Java
Coverage: LOW

## Step 02 Summary

App Engine access control documentation was improved for deploying apps using IAM roles, service accounts, and required permissions.

## Extended Definition

App Engine access control documentation was improved for deploying apps using IAM roles, service accounts, and required permissions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)

## Supporting Pages

### "Quickstart: Create a Go app in the App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Deploy and run Hello World on App Engine To deploy your app to the App Engine flexible environment: Deploy the Hello World app by running the following command from the helloworld directory: gcloud app deploy Learn about the optional flags .
- Example: --project [YOUR PROJECT ID] Example: gcloud app deploy --version pre-prod-5 --project my-sample-app To learn more about deploying your app from the command line, see Testing and Deploying Your App .
- For a list of all the command flags, see the gcloud app deploy reference.

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the following emulators: Datastore Pub/Sub Bigtable Use the gcloud command to start them before you run your app: gcloud beta emulators datastore start gcloud beta emulators pubsub start gcloud beta emulators bigtable start Maven Add these lines in your maven pom.xml file to add the Jetty 9 Maven Plugin : < plugin > < groupId>org . eclipse . jetty < / groupId > < artifactId>jetty - maven - plugin < / artifactId > < version>9 .4.2 . v20170220 < / version > < / plugin > To run your app locally, use the Maven command: mvn jetty : run - exploded Gradle Follow the Creating a new Gradle project instructions to add the Gretty Gradle plugin to your build.gradle , and use the command: gradle jettyRun Deploy your app To initialize the Google Cloud CLI, run: gcloud init After completing the configurations, you can use the Google Cloud CLI to deploy this directory containing the app.yaml and WAR files using: gcloud app deploy app . yaml If you are using any of the optional configuration files ( index.yaml , cron.yaml , and dispatch.yaml ) deploy them separately with the gcloud command.
- To deploy using Maven, you must add the App Engine Maven plugin to your pom.xml : <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.1</version> </plugin> Other options for deploying include the gcloud app deploy command or the App Engine Gradle plugin .
- For example: gcloud app deploy cron . yaml Maven Use Maven to deploy your app: mvn package appengine:deploy -Dapp.deploy.projectId= PROJECT ID Replace PROJECT ID with the ID of your Google Cloud project.
- If you use any these files, you must deploy them separately with the gcloud app deploy command. web.xml is optional and only needed if you are not using Servlet 3.x annotations.

