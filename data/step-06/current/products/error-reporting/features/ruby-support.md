---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.695Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Ruby support"
feature_slug: "ruby-support"
latest_feature_date: "2016-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/setup/ruby"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/ec2"
keywords:
  - "ruby"
  - "error"
  - "reporting"
  - "now"
  - "supports"
  - "applications"
---

# Ruby support

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting now supports Ruby applications.

## Extended Definition

Error Reporting now supports Ruby applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- [https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine](https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine)
- [https://docs.cloud.google.com/error-reporting/docs/setup/ec2](https://docs.cloud.google.com/error-reporting/docs/setup/ec2)

## Supporting Pages

### Instrument Ruby apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end App Engine flexible environment App Engine grants the Error Reporting Writer role ( roles/errorreporting.writer ) to your default service account automatically.
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end View error groups In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- Other Rack-based applications can use the Rack Middleware provided by the library: require "google/cloud/error reporting" use Google :: Cloud :: ErrorReporting :: Middleware For more information on installation, read the documentation for the Error Reporting library for Ruby.
- Install the client library The Error Reporting library for Ruby lets you monitor and view error events reported by Ruby applications running nearly anywhere.

### Setting up Error Reporting on Amazon EC2 \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/ec2](https://docs.cloud.google.com/error-reporting/docs/setup/ec2)
- Source ID: `site-docs-reference-required-1`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using client libraries Libraries exist in a limited number of languages to help you call the Error Reporting API from your application: ASP.NET Go Java Node.js Ruby Python PHP Samples ASP.NET The ASP.NET NuGet package reports uncaught exceptions from ASP.NET web applications to Error Reporting.
- Using Logging to report errors To connect your EC2 applications to Error Reporting, send your exceptions or other errors to Logging.
- You can send errors from your EC2 applications to Error Reporting in one of two ways: By logging to Cloud Logging .
- Ruby See Setting up Error Reporting for Ruby .

### Setting up on Compute Engine \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine](https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine)
- Source ID: `site-docs-reference-required-1`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using client libraries Libraries exist in a limited number of languages to help you call the Error Reporting API from your application: ASP.NET Go Java Node.js Ruby Python PHP Samples ASP.NET The ASP.NET NuGet package reports uncaught exceptions from ASP.NET web applications to Error Reporting.
- Using Logging to report errors To connect your Compute Engine applications to Error Reporting, send your exceptions or other errors to Logging.
- You can send errors from your Compute Engine applications to Error Reporting in one of two ways: By logging to Cloud Logging .
- Ruby See Setting up Error Reporting for Ruby .

