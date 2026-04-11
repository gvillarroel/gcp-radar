---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.746Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "IAM-based deployment access guidance for App Engine"
feature_slug: "iam-based-deployment-access-guidance-for-app-engine"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "roles/appengine.appAdmin"
  - "IAM deploy permissions"
  - "service account for app deploy"
  - "deployer service account"
  - "IAM deployment access"
  - "App Engine deployment permissions"
  - "gcloud app deploy"
  - "deployment authorization"
---

# IAM-based deployment access guidance for App Engine

Product: App Engine flexible environment Go
Coverage: HIGH

## Step 02 Summary

Access control guidance for deploying App Engine applications with IAM roles and service accounts was improved.

## Extended Definition

This guidance describes IAM-based access requirements for deploying App Engine Flexible applications: before running `gcloud app deploy`, an administrator should grant the deployer project-level roles including App Engine Admin (`roles/appengine.appAdmin`), Cloud Build Editor (`roles/cloudbuild.builds.editor`), Storage Object Admin (`roles/storage.objectAdmin`), Logs Viewer (`roles/logging.viewer`), and Service Account User (`roles/iam.serviceAccountUser`) on the project. It also recommends granting Artifact Registry Reader, Cloud Build Service Account, and Storage Object Viewer roles on the App Engine default service account, making deployment authorization explicitly role-based for both the user and the target service account.

## Evidence Summary

The App Engine Flexible quickstart pages provide the exact deployment command and the IAM roles required for users and the default service account to complete deployment, directly documenting permission-based deployment access guidance.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Quickstart: Create a Go app in the App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/create-app](https://docs.cloud.google.com/appengine/docs/flexible/go/create-app)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: The quickstart lists required IAM roles for project creation and enabling APIs during setup, which provides useful access-control context but does not comprehensively define deployment IAM behavior.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: App Engine Admin ( roles/appengine.appAdmin ) on the project Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project Storage Object Admin ( roles/storage.objectAdmin ) on the project Logs Viewer ( roles/logging.viewer ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service account Ask your administrator to grant the following roles for the App Engine default service account: Artifact Registry Reader ( roles/artifactregistry.reader ) on the project Cloud Build Service Account ( roles/cloudbuild.builds.builder ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Deploy and run Hello World on App Engine To deploy your app to the App Engine flexible environment: Deploy the Hello World app by running the following command from the helloworld directory: gcloud app deploy Learn about the optional flags .
- Example: --project [YOUR PROJECT ID] Example: gcloud app deploy --version pre-prod-5 --project my-sample-app To learn more about deploying your app from the command line, see Testing and Deploying Your App .
- For a list of all the command flags, see the gcloud app deploy reference.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Deploying Hello World to App Engine When you are ready to deploy the sample app to App Engine, perform the following steps: From the directory where your app.yaml and Dockerfile are located, run the following command: gcloud app deploy Learn about the optional flags .
- Example: --project [YOUR PROJECT ID] Example: gcloud app deploy --version pre-prod-5 --project my-sample-app To learn more about deploying your app from the command line, see Testing and Deploying Your App .
- For a list of all the command flags, see the gcloud app deploy reference.

