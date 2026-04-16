---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.694Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "C++ support"
feature_slug: "c-support"
latest_feature_date: "2016-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/setup/dotnet"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/ruby"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/go"
keywords:
  - "error"
  - "reporting"
  - "now"
  - "supports"
  - "applications"
---

# C++ support

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting now supports C++ applications.

## Extended Definition

Error Reporting now supports C++ applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/setup/dotnet](https://docs.cloud.google.com/error-reporting/docs/setup/dotnet)
- [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- [https://docs.cloud.google.com/error-reporting/docs/setup/go](https://docs.cloud.google.com/error-reporting/docs/setup/go)

## Supporting Pages

### Instrument C# apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/dotnet](https://docs.cloud.google.com/error-reporting/docs/setup/dotnet)
- Source ID: `site-docs-reference-required-1`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can send error events to Error Reporting from C# applications by using the Google.Cloud.Diagnostics set of libraries .
- Error Reporting displays the error events that are logged to Cloud Logging by applications running on those services.
- Error Reporting is automatically enabled for App Engine flexible environment applications.
- Configure the client library For more information and examples, see the following resources: Google.Cloud.Diagnostics.AspNetCore3 documentation Google.Cloud.Diagnostics.AspNetCore documentation Google.Cloud.Diagnostics.Common documentation Run apps on Google Cloud To create error groups by using projects.events.report , your service account requires the Error Reporting Writer role ( roles/errorreporting.writer ).

### Instrument Ruby apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end App Engine flexible environment App Engine grants the Error Reporting Writer role ( roles/errorreporting.writer ) to your default service account automatically.
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end View error groups In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- Other Rack-based applications can use the Rack Middleware provided by the library: require "google/cloud/error reporting" use Google :: Cloud :: ErrorReporting :: Middleware For more information on installation, read the documentation for the Error Reporting library for Ruby.
- Install the client library The Error Reporting library for Ruby lets you monitor and view error events reported by Ruby applications running nearly anywhere.

### Instrument Go apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/go](https://docs.cloud.google.com/error-reporting/docs/setup/go)
- Source ID: `site-docs-reference-required-1`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API Install the client library The Error Reporting package for Go lets you monitor and view error events reported by Go applications running nearly anywhere.
- Error Reporting displays the error events that are logged to Cloud Logging by applications running on those services.
- You can send error events to Error Reporting from Go applications by using the Error Reporting package for Go .
- Error Reporting is automatically enabled for App Engine flexible environment applications.

