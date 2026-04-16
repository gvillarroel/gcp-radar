---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.692Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Reporting IAM roles"
feature_slug: "error-reporting-iam-roles"
latest_feature_date: "2017-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/iam"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/ruby"
  - "https://docs.cloud.google.com/error-reporting/docs/reference/authentication"
keywords:
  - "error"
  - "reporting"
  - "iam"
  - "roles"
  - "stackdriver"
  - "available"
  - "access"
  - "control"
---

# Error Reporting IAM roles

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

IAM roles for Stackdriver Error Reporting are available for access control.

## Extended Definition

IAM roles for Stackdriver Error Reporting are available for access control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/iam](https://docs.cloud.google.com/error-reporting/docs/iam)
- [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- [https://docs.cloud.google.com/error-reporting/docs/reference/authentication](https://docs.cloud.google.com/error-reporting/docs/reference/authentication)

## Supporting Pages

### Control access with IAM \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/iam](https://docs.cloud.google.com/error-reporting/docs/iam)
- Source ID: `site-docs-reference-required-1`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list errorreporting. applications. list errorreporting. errorEvents. delete errorreporting. errorEvents. list errorreporting.groupMetadata. errorreporting. groupMetadata. get errorreporting. groupMetadata. update errorreporting.groups.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get Error Reporting Viewer Beta ( roles/ errorreporting.viewer ) Provides read-only access to Error Reporting data.
- This page describes how you use Identity and Access Management (IAM) roles and permissions to control access to Error Reporting data in Google Cloud resources.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list errorreporting. errorreporting. applications. list errorreporting. errorEvents. create errorreporting. errorEvents. delete errorreporting. errorEvents. list errorreporting. groupMetadata. get errorreporting. groupMetadata. update errorreporting.groups.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get Error Reporting User Beta ( roles/ errorreporting.user ) Provides the permissions to read and write Error Reporting data, except for sending new error events.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list errorreporting. applications. list errorreporting. errorEvents. list errorreporting. groupMetadata. get errorreporting.groups.list logging.notificationRules.get logging.notificationRules.list resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get Error Reporting Writer Beta ( roles/ errorreporting.writer ) Provides the permissions to send error events to Error Reporting.

### Instrument Ruby apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end App Engine flexible environment App Engine grants the Error Reporting Writer role ( roles/errorreporting.writer ) to your default service account automatically.
- In the Identity and API access section, select a service account that has the Error Reporting Writer role ( roles/errorreporting.writer ).
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end View error groups In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- Using Ruby on Rails configuration interface To use the Error Reporting library for Ruby with the Ruby on Rails framework, provide the parameters through the Ruby on Rails configuration interface: Add this to config/environments/ .rb Rails . application . configure do config Stackdriver Error Reporting specific parameters config . google cloud . error reporting . project id = "YOUR-PROJECT-ID" config . google cloud . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Stackdriver gems using the following: Add this to config/environments/ .rb Rails . application . configure do config Stackdriver Shared parameters config . google cloud . project id = "YOUR-PROJECT-ID" config . google cloud . keyfile = "/path/to/service-account.json" end Error Reporting is enabled by default when Rails is running in production mode.

### Authenticate to Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/reference/authentication](https://docs.cloud.google.com/error-reporting/docs/reference/authentication)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the roles for Error Reporting, see Access control with IAM .
- Access control for Error Reporting After you authenticate to Error Reporting, you must be authorized to access Google Cloud resources.
- You can access the API in the following ways: Client libraries REST Client libraries The Error Reporting client libraries provide high-level language support for authenticating to Error Reporting programmatically.
- How you authenticate to Error Reporting depends on the interface you use to access the API and the environment where your code is running.

