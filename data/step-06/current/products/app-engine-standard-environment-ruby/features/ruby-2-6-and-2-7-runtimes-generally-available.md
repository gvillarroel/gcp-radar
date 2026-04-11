---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.345Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Ruby 2.6 and 2.7 runtimes generally available"
feature_slug: "ruby-2-6-and-2-7-runtimes-generally-available"
latest_feature_date: "2020-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime"
keywords:
  - "makes"
  - "runtimes"
  - "generally"
  - "available"
  - "ruby"
  - "and"
  - "for"
  - "the"
---

# Ruby 2.6 and 2.7 runtimes generally available

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

Makes the Ruby 2.6 and Ruby 2.7 runtimes generally available for App Engine standard environment.

## Extended Definition

Makes the Ruby 2.6 and Ruby 2.7 runtimes generally available for App Engine standard environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)

## Supporting Pages

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Support for other Ruby runtimes If you need to use a Ruby version that isn't supported , you can create a custom runtime and select a valid base image with the Ruby version you need.
- Using C libraries with Ruby For Ruby libraries that require C extensions, the headers for the current Ruby version and the following Ubuntu packages are pre-installed on the system. autoconf build-essential ca-certificates cmake curl file git imagemagick libcurl3 libcurl3-gnutls libcurl4-openssl-dev libffi-dev libgdbm-dev libgit2-dev libgmp-dev libicu-dev libjemalloc-dev libjemalloc1 libmagickwand-dev libmysqlclient-dev libncurses5-dev libpq-dev libqdbm-dev libreadline6-dev libsqlite3-dev libssl-dev libxml2-dev libxslt-dev libyaml-dev libz-dev systemtap tzdata These packages allow the installation of most popular Ruby libraries.
- The runtime will install all dependencies before your entrypoint is called. source "https://rubygems.org" gem "rack" gem "puma" An example entrypoint using puma for a Rails application: entrypoint : bundle exec rails server Puma - p $PORT An example entrypoint using puma for any Rack application: entrypoint : bundle exec rackup - s Puma - p $PORT For applications that can handle requests without a Rack server, you can just execute a ruby script: entrypoint : bundle exec ruby app . rb Note: The entrypoint command will be executed by bash's exec function .
- The Ruby runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The following response headers that you can set in app.yaml influence how and when the Google Front End caches content: Cache-Control should be set to public for the Google Front End to cache content; it may also be cached by the Google Front End unless you specify a Cache-Control private or no-store directive.
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.

### "Ruby Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime](https://docs.cloud.google.com/appengine/docs/standard/ruby/runtime)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The runtime will install all dependencies before your entrypoint is called. source "https://rubygems.org" gem "rack" gem "puma" An example entrypoint using puma for a Rails application: entrypoint : bundle exec rails server Puma - p $PORT An example entrypoint using puma for any Rack application: entrypoint : bundle exec rackup - s Puma - p $PORT For applications that can handle requests without a Rack server, you can just execute a ruby script: entrypoint : bundle exec ruby app . rb Note: The entrypoint command will be executed by bash's exec function .
- This document explains the details of the Ruby runtime environment, including what headers are provided to your code and other information to successfully deploy your application on App Engine.
- Specify the Ruby runtime for App Engine in the standard environment in the app.yaml file: runtime : ruby VERSION Where VERSION is the Ruby MAJOR and MINOR version numbers.
- For other supported Ruby versions, and the corresponding Ubuntu version for your Ruby version, see the Runtime support schedule .

