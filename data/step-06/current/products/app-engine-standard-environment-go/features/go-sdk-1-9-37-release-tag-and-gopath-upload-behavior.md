---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.754Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go SDK 1.9.37 release tag and gopath upload behavior"
feature_slug: "go-sdk-1-9-37-release-tag-and-gopath-upload-behavior"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
keywords:
  - "go"
  - "sdk"
  - "37"
  - "release"
  - "tag"
  - "gopath"
  - "upload"
  - "behavior"
---

# Go SDK 1.9.37 release tag and gopath upload behavior

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine Go SDK 1.9.37 began using broader Go release tags during dev compilation and uploads all required gopath files required by those tags to prevent mismatch build errors.

## Extended Definition

App Engine Go SDK 1.9.37 began using broader Go release tags during dev compilation and uploads all required gopath files required by those tags to prevent mismatch build errors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid)
- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)

## Supporting Pages

### "Sending messages with third-party services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Structuring web services in App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. static files A static file pattern handler associates a URL pattern with paths to static files uploaded with the application.
- The URL pattern is a regular expression, with a grouping that is inserted into the path to the file. - url : /(. \.(gif png jpg))$ static files : static/\1 upload : static/. \.(gif png jpg)$ ...
- The following table lists the subelements of the handlers element that control the behavior for static files, static directories, scripts in runtimes other than Node.js, and other settings.
- App Engine can handle URLs by executing application code, or by serving static files uploaded with the code, such as images, CSS, or JavaScript.

