---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.623Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Natural Language API v1beta1"
feature_slug: "natural-language-api-v1beta1"
latest_feature_date: "2017-05-02"
deprecation_date: "2017-05-02"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/reference/service_apis_overview"
  - "https://docs.cloud.google.com/natural-language/docs/apis"
  - "https://docs.cloud.google.com/natural-language/docs/reference/libraries"
  - "https://docs.cloud.google.com/natural-language/docs/audit-logging"
keywords:
  - "natural"
  - "language"
  - "api"
  - "v1beta1"
  - "is"
  - "the"
  - "beta"
  - "release"
---

# Natural Language API v1beta1

Product: Cloud Natural Language API
Coverage: MEDIUM

## Step 02 Summary

Natural Language API v1beta1 is the beta release of the API; deprecated on 2017-05-02.

## Extended Definition

Natural Language API v1beta1 is the beta release of the API; deprecated on 2017-05-02.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/reference/service_apis_overview](https://docs.cloud.google.com/natural-language/docs/reference/service_apis_overview)
- [https://docs.cloud.google.com/natural-language/docs/apis](https://docs.cloud.google.com/natural-language/docs/apis)
- [https://docs.cloud.google.com/natural-language/docs/reference/libraries](https://docs.cloud.google.com/natural-language/docs/reference/libraries)
- [https://docs.cloud.google.com/natural-language/docs/audit-logging](https://docs.cloud.google.com/natural-language/docs/audit-logging)

## Supporting Pages

### "Service APIs Overview \_|\_ Cloud Natural Language API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/reference/service_apis_overview](https://docs.cloud.google.com/natural-language/docs/reference/service_apis_overview)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: N/A

Evidence snippets:
- We recommend this approach only if your language or other needs are not met by our provided client libraries. gRPC API You can generate your own gRPC client libraries in any gRPC-supported language for the Cloud Natural Language API API from its .proto service definition using these resources: Cloud Natural Language API service definition gRPC documentation : Everything you need to generate and use your own gRPC client code RPC API Reference : Language-independent overview of the RPC surface REST/HTTP API There are a number of possible options for interacting with a service's REST interface.
- Home Documentation AI and ML Cloud Natural Language API Reference Send feedback Service APIs Overview Stay organized with collections Save and categorize content based on your preferences.
- If you don't want to use our client libraries to access the Cloud Natural Language API, you have the option of writing your own client libraries that use its REST/HTTP or gRPC API surface.
- Use the following resources to help you create your own clients for the REST API: REST API Reference Guidelines for working with Google HTTP APIs API Discovery Service : Exposes machine readable metadata about the REST/HTTP API surface, useful for creating client libraries, tools, and plugins.

### APIs and Reference \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/apis](https://docs.cloud.google.com/natural-language/docs/apis)
- Source ID: `site-api-reference`
- Final score: 255
- Re-rank relevance: N/A

Evidence snippets:
- Libraries and APIs Cloud Natural Language Client Libraries Start using the Cloud Natural Language API in your language of choice.
- The easiest and recommended way for most users to use the Cloud Natural Language API is with our provided client libraries .
- Home Documentation AI and ML Cloud Natural Language API Reference Send feedback APIs and Reference Stay organized with collections Save and categorize content based on your preferences.
- Other Reference Command-Line Reference Use the Cloud Natural Language API with the Google Cloud CLI.

### "Natural Language client libraries \_|\_ Cloud Natural Language API \_|\_\

- URL: [https://docs.cloud.google.com/natural-language/docs/reference/libraries](https://docs.cloud.google.com/natural-language/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page shows how to get started with the Cloud Client Libraries for the Cloud Natural Language API.
- DebugString () << " \n " ; } return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } Go // Sample language-quickstart uses the Google Cloud Natural API to analyze the // sentiment of "Hello, world!". package main import ( "context" "fmt" "log" language "cloud.google.com/go/language/apiv1" "cloud.google.com/go/language/apiv1/languagepb" ) func main () { ctx := context .
- PLAIN TEXT ) Detects the sentiment of the text. sentiment = client . analyze sentiment ( request = { "document" : document } ) . document sentiment print ( f "Text: { text } " ) print ( f "Sentiment: { sentiment . score } , { sentiment . magnitude } " ) Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-cloud-nl on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-nl on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-nl on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-nl on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-nl on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-nl on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-nl on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-nl on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .79.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - language < / artifactId > < / dependency > < / dependencies > If you are using Gradle , add the following to your dependencies: implementation ' com . google . cloud : google - cloud - language : 2.89.0 ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-language" % "2.89.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

### "Natural Language audit logging \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/audit-logging](https://docs.cloud.google.com/natural-language/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in Natural Language: Audit logs category Natural Language methods Data Access (DATA READ) audit logs LanguageService.AnalyzeSentiment LanguageService.AnalyzeEntitySentiment LanguageService.AnalyzeEntities LanguageService.AnalyzeSyntax LanguageService.ClassifyText LanguageService.ModerateText LanguageService.AnnotateText Audit log format Audit log entries include the following objects: The log entry itself, which is an object of type LogEntry .
- Service name Natural Language audit logs use the service name language.googleapis.com .
- This document describes the audit logs created by Cloud Natural Language as part of Cloud Audit Logs .
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.

