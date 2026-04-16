---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.696Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "App Engine standard environment error reporting"
feature_slug: "app-engine-standard-environment-error-reporting"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-standard-environment"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-flexible-environment"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/ruby"
keywords:
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "error"
  - "reporting"
  - "generally"
  - "available"
---

# App Engine standard environment error reporting

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting is generally available for the Google App Engine standard environment.

## Extended Definition

Error Reporting is generally available for the Google App Engine standard environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-standard-environment](https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-standard-environment)
- [https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-flexible-environment](https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-flexible-environment)
- [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)

## Supporting Pages

### "Setting up on App Engine standard environment \_|\_ Error Reporting \_|\_\

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-standard-environment](https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-standard-environment)
- Source ID: `site-docs-reference-required-1`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Error Reporting Guides Send feedback Setting up on App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.
- App Engine standard environment is configured to use Error Reporting automatically, but you might need to complete additional setup instructions, depending on your language .
- Note : If you see the message "Set up Error Reporting" on the Error Reporting page, then your Google Cloud project has no error groups to display.
- For information about viewing errors and exception data by using the Error Reporting page in the Google Cloud console, see View errors .

### "Setting up on App Engine flexible environment \_|\_ Error Reporting \_|\_\

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-flexible-environment](https://docs.cloud.google.com/error-reporting/docs/setup/app-engine-flexible-environment)
- Source ID: `site-docs-reference-required-1`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Error Reporting Guides Send feedback Setting up on App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- Error Reporting is automatically enabled for App Engine flexible environment applications.
- Examples using the instrumentation libraries If you'd like to customize the error information being sent to Error Reporting, you can use the instrumentation libraries available for a number of languages: Go Java Node.js PHP Python Ruby .NET Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Messages written from App Engine to stderr are analyzed and, if found to contain errors, will be displayed by Error Reporting.

### Instrument Ruby apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end App Engine flexible environment App Engine grants the Error Reporting Writer role ( roles/errorreporting.writer ) to your default service account automatically.
- Reporting errors manually You can manually report an error by calling the report method, as seen in the following example: require "google/cloud/error reporting" begin raise "Something went wrong" rescue StandardError = > e Google :: Cloud :: ErrorReporting . report e end Run apps in a local development environment To use the Error Reporting library for Ruby in a local development environment, such as running the library on your own workstation, you must provide your Error Reporting library for Ruby with the local application default credentials.
- Error Reporting is automatically enabled for App Engine flexible environment applications.
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end View error groups In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.

