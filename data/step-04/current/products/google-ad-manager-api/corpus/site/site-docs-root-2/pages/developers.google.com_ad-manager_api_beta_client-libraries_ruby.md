---
title: "Ruby \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/client-libraries/ruby
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/client-libraries/ruby
  title: "Ruby \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Ruby
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use the google-ads-ad_manager Ruby client library and RubyGems to interact with the Ad Manager API.
Authenticate using OAuth2 and Application Default Credentials (ADC), configuring credentials via environment variables, gcloud CLI, or Google Cloud service accounts.
Make API requests by creating a client object and request, then calling the corresponding method.
Log HTTP requests and responses by setting the GOOGLE_SDK_RUBY_LOGGING_GEMS environment variable or configuring the logger in your code.
Handle Ad Manager API errors which are subclasses of ::Google::Cloud::Error and can include a unique request_id for troubleshooting.
Google provides a Ruby client library for interacting with the Ad Manager API.
We recommend using the client library with RubyGems.
To get started, create a new project in the IDE of your choice or add the
dependency to an existing project. Google publishes client library to
RubyGems as
google-ads-ad_manager .
Gemfile:
gem 'google-ads-ad_manager', '~> 0.1.0'
Install directly:
gem install google-ads-ad_manager
Configure credentials
The Ruby client library uses OAuth2 and Application Default Credentials
(ADC) to authenticate.
ADC searches for credentials in order in the following locations:
GOOGLE_APPLICATION_CREDENTIALS environment variable.
User credentials set up through the Google Cloud CLI (gcloud CLI).
When running on Google Cloud, the service account attached to the Google Cloud resource.
For creating and configuring your ADC credentials, see
Authentication .
Make your first request
Each REST service has a has a corresponding Ruby class with methods for each
corresponding REST method. The following example reads a
Network .
require "google/ads/ad_manager/v1"
def get_network
# Create a client object. The client can be reused for multiple calls.
client = Google :: Ads :: AdManager :: V1 :: NetworkService :: Rest :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Ads :: AdManager :: V1 :: GetNetworkRequest . new ( name : => 'networks/ NETWORK_CODE )'
# Call the get_network method.
result = client . get_network request
# The returned object is of type Google::Ads::AdManager::V1::Network.
p result
end get_network . rb
For examples of other methods and resources, see the GitHub repository
googleapis/google-cloud-ruby .
Log HTTP requests and responses
The Ruby client library library uses the standard logger
library to log HTTP requests and responses. Logging is disabled by
default.
To enable logging, set the environment variable GOOGLE_SDK_RUBY_LOGGING_GEMS
to the value google-ads-ad_manager . If you use more than one Google API, you
can set the value to a comma-delimited list of client library gem names. The
default logging behavior writes logs to the standard error stream.
Alternatively, you can enable logging in your Ruby code by modifying the
logger configuration when constructing a client object.
require "google/ads/ad_manager/v1"
require "logger"
client = :: Google :: Ads :: AdManager :: V1 :: NetworkService :: Rest :: Client . new do | config |
config . logger = Logger . new "my-app.log"
end
Handle errors
All Ad Manager API errors are subclasses of
::Google::Cloud::Error
in the Ruby client library.
result = client . get_network request
rescue :: Google :: Cloud :: Error = > e
puts "An error of type #{ e . class } occurred with HTTP status #{ e . status_code } "
Ad Manager API errors also include a unique request_id you can
provide to support for assistance with
troubleshooting. The following example extracts the
request_id from the error details .
rescue :: Google :: Cloud :: Error = > e
request_info = e . details . find { | detail | detail . is_a? ( Google :: Rpc :: RequestInfo )}
puts request_info . request_id
Construct resource names
The client library provides helper classes for building resource names from
IDs.
require "google/ads/ad_manager/v1"
# Constructs a String in the format:
# "networks/{networkCode}/orders/{orderId}"
order_name = Google :: Ads :: AdManager :: V1 :: OrderService :: Paths :: order_path ( :network_code = > 123 , :order = > 456 )
Configure proxy settings
The Ruby client library respects both HTTP_PROXY and HTTPS_PROXY
environment variables.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
