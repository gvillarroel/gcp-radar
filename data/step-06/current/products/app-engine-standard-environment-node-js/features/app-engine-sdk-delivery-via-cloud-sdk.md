---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.077Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "App Engine SDK delivery via Cloud SDK"
feature_slug: "app-engine-sdk-delivery-via-cloud-sdk"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc"
keywords:
  - "provided through gcloud"
  - "no standalone SDK"
  - "Cloud SDK distribution"
  - "Google Cloud CLI"
  - "gcloud app commands"
  - "App Engine SDK"
  - "Cloud SDK"
  - "gcloud app"
---

# App Engine SDK delivery via Cloud SDK

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine SDK capabilities are provided only through the Cloud SDK.

## Extended Definition

App Engine SDK capabilities are provided only through the Cloud SDK.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc)

## Supporting Pages

### "Test and deploy your application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To obtain access credentials for your user account, run: gcloud auth login Allow your local application to temporarily use your user credentials for API access: gcloud auth application-default login To start the local development server: In the directory that contains your app.yaml configuration file, run the dev appserver.py command and specify your project ID and path to your app.yaml file: python3 CLOUD SDK ROOT /bin/dev appserver.py --application = PROJECT ID app.yaml To change the port, include the --port option: python3 CLOUD SDK ROOT /bin/dev appserver.py --application = PROJECT ID app.yaml --port = 9999 To test a Python 3 app, run dev appserver.py with a Python 3 interpreter, you must specify the Python 3 binary in the --runtime python path flag, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py --runtime python path = /usr/bin/python3 --application = PROJECT ID app.yaml --port = 9999 To learn more about the dev appserver.py command options, see Local development server options .
- For example, to deploy the service defined by the app.yaml file to a specific Google Cloud project, assign it a custom version ID, and prevent traffic from being routed to the new version: gcloud app deploy --project PROJECT ID --version VERSION ID --no-promote For more information about this command, see the gcloud app deploy reference .
- For example, to test a new version of your default service: Deploy your new version, but prevent traffic from being automatically routed to the new version: gcloud app deploy --no-promote Access your new version by navigating to the following URL: https:// VERSION ID -dot-default-dot- PROJECT ID .
- You can specify multiple files with a single gcloud app deploy command: gcloud app deploy service1/app.yaml service2/app.yaml View build logs Cloud Build streams build and deploy logs that are viewable in the Cloud Build Build history section of the Google Cloud console.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: Each Google Cloud project can contain only a single App Engine application, and once created you cannot change the location of your App Engine application. gcloud After installing Google Cloud CLI , an account with the Google Cloud project Owner role can run the following gcloud commands to create a Google Cloud project and App Engine application: Run the following command to create a Google Cloud project: gcloud projects create PROJECT ID Replace PROJECT ID with the Google Cloud project ID.
- Shutting down a project You can disable billing and release all the Google Cloud resources that are being used in your Google Cloud project by shutting down that project. gcloud After installing the Google Cloud CLI , you run the following gcloud command to shut down a Google Cloud project: gcloud projects delete PROJECT ID Replace PROJECT ID with the Google Cloud project ID.
- Run the following command to select a region and create an App Engine application: gcloud app create More information about App Engine locations help outline Enable billing in the Billing page of the Google Cloud console, see Enabling billing for details.
- By using the --project flag when you deploy your app, for example: gcloud app deploy --project [YOUR PROJECT ID] If you use the Java runtime, you can specify the project ID during deployment using the Google Cloud plugin for IntelliJ .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- To delete a connector, use the Google Cloud console or the Google Cloud CLI: Console Go to the Serverless VPC Access overview page in the Google Cloud console: Go to Serverless VPC Access Select the connector you want to delete.
- Deploy the service: gcloud app deploy Disconnect a service from a VPC network To disconnect a service from a VPC network, remove the vpc access connector field from the app.yaml file and re-deploy the service.
- Deploy the service: gcloud app deploy After you deploy your service, it is able to send requests to internal IP addresses in order to access resources in your VPC network.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- To delete a connector, use the Google Cloud console or the Google Cloud CLI: Console Go to the Serverless VPC Access overview page in the Google Cloud console: Go to Serverless VPC Access Select the connector you want to delete.
- Deploy the service: gcloud app deploy Disconnect a service from a VPC network To disconnect a service from a VPC network, remove the vpc access connector field from the app.yaml file and re-deploy the service.
- Deploy the service: gcloud app deploy After you deploy your service, it is able to send requests to internal IP addresses in order to access resources in your VPC network.

