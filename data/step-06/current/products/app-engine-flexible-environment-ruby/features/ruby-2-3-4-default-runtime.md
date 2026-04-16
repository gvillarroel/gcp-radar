---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.010Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Ruby 2.3.4 default runtime"
feature_slug: "ruby-2-3-4-default-runtime"
latest_feature_date: "2017-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "ruby"
  - "default"
  - "runtime"
  - "uses"
  - "interpreter"
  - "version"
---

# Ruby 2.3.4 default runtime

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Ruby runtime uses Ruby 2.3.4 as the default interpreter version.

## Extended Definition

The Ruby runtime uses Ruby 2.3.4 as the default interpreter version.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specify the operating system setting in your app.yaml file: runtime : ruby env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- If you don't provide a .ruby-version file, the Ruby runtime defaults to version 2.7.
- Support for other Ruby runtimes If you need to use a Ruby version that isn't supported , you can create a custom runtime and select a valid base image with the Ruby version you need.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specify the operating system setting in your app.yaml file: runtime : ruby env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- If you don't provide a .ruby-version file, the Ruby runtime defaults to version 2.7.
- Support for other Ruby runtimes If you need to use a Ruby version that isn't supported , you can create a custom runtime and select a valid base image with the Ruby version you need.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- Example: --version [YOUR VERSION ID] Include the --project flag to specify an alternate Google Cloud project ID to what you initialized as the default in the gcloud tool.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.

