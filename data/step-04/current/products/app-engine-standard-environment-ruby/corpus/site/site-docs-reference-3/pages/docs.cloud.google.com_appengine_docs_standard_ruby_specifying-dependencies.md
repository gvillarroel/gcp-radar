---
title: "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/ruby/specifying-dependencies
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/ruby/specifying-dependencies
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/ruby/specifying-dependencies
  title: "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Specifying dependencies
Stay organized with collections
Save and categorize content based on your preferences.
Dependencies for Ruby applications are declared in a
Gemfile
file.
For example:
source "https://rubygems.org"
gem "rails"
You can use any Linux-compatible Ruby package in the App Engine standard
environment, including packages that require native (C) extensions.
The Ruby runtime will automatically install all
dependencies declared in your Gemfile file during deployment.
Installing a web framework
You'll need to use a web framework to enable your app to serve web requests.
You can use any Ruby web framework including the following:
Ruby on Rails
Sinatra
Rack
To use a particular web framework, specify a startup command in your app.yaml
file:
runtime : ruby
entrypoint : rails server
Installing the Cloud Client Libraries
The Cloud Client Libraries for Ruby is a client
library for accessing Google Cloud services that significantly reduces
the boilerplate code you have to write. The library provides high-level API
abstractions so they're easier to understand and means you spend more time
creating code that matters to you.
To install the library locally:
gem install google - cloud
The client library can automatically handle authentication for you locally as
well by using Google Cloud CLI :
gcloud auth login
For details on configuring Cloud Client Libraries for Ruby to handle authentication
automatically, see Authenticate to Cloud services using client libraries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
