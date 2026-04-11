---
title: "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime?hl=es
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime
  title: "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
The Ruby runtime
Stay organized with collections
Save and categorize content based on your preferences.
Note: Some Ruby runtimes have reached end of support . You cannot re-deploy
versions that use runtimes after their end of support date. We recommend that
you upgrade your app
to use the latest version of Ruby.
The Ruby runtime is the software stack responsible for
installing your application code and dependencies, and then running that
application in the flexible environment.
Ruby versions
Ruby 4.0 uses
buildpacks . For the full list of supported
Ruby versions, and their corresponding Ubuntu
version, see the Runtime support schedule .
To use a supported Ruby version, you must:
Specify a Ruby version in your Gemfile .
RUBY VERSION
ruby "4.0.x"
Install gcloud CLI version 420.0.0 or later . You can update
your CLI tooling by running the gcloud components update command. To view your installed version, you can run the gcloud version command.
Specify the operating_system setting in your app.yaml file:
runtime : ruby
env : flex
runtime_config :
operating_system : "ubuntu24"
Optionally, you can specify a version of the Ruby interpreter
using a .ruby-version file in your application directory. For example, 4.0.x
Previous versions
Warning: Ruby version 3.1 and earlier have reached end of
support. App Engine blocks you from deploying your applications using runtimes
that have reached end of support. We recommend that you migrate your app to use a
supported version of Ruby
or use a custom runtime .
To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby
interpreter using a .ruby-version file in your application directory.
When this file is present, the runtime installs the requested version of
Ruby when you deploy your application using
rbenv .
If the requested version cannot be installed, App Engine shows an error
message during deployment.
If you don't provide a .ruby-version file, the Ruby runtime defaults to
version 2.7. Note that the default can change at any time, so
it is recommended that your app specifies a Ruby version.
Support for other Ruby runtimes
If you need to use a Ruby version that isn't supported , you can create a
custom runtime and select a
valid base image with the Ruby version you need.
For Google-supplied base images or
Docker Ruby base images ,
see Building custom runtimes .
Dependencies
The runtime looks for a Gemfile
file in your application's source directory and uses
Bundler to install
any dependencies before starting your application. For more information on
declaring and managing packages, see Using Ruby Libraries .
Using C libraries with Ruby
For Ruby libraries that require C extensions, the headers for
the current Ruby version and the following
Ubuntu packages are pre-installed on the system.
autoconf
build-essential
ca-certificates
cmake
curl
file
git
imagemagick
libcurl3
libcurl3-gnutls
libcurl4-openssl-dev
libffi-dev
libgdbm-dev
libgit2-dev
libgmp-dev
libicu-dev
libjemalloc-dev
libjemalloc1
libmagickwand-dev
libmysqlclient-dev
libncurses5-dev
libpq-dev
libqdbm-dev
libreadline6-dev
libsqlite3-dev
libssl-dev
libxml2-dev
libxslt-dev
libyaml-dev
libz-dev
systemtap
tzdata
These packages allow the installation of most popular Ruby libraries. If your application
requires additional operating-system level dependencies, you will need to use a
custom runtime based on this runtime
to install the appropriate packages.
Application startup
The runtime starts your application using the entrypoint defined in
app.yaml . The entrypoint should start a process that
responds to HTTP requests on the port defined by the environment variable PORT .
For example:
entrypoint : bundle exec rails server - p $PORT
Most web applications use a Rack -supported web server
such as Puma , Unicorn or
Thin .
You must add the server as a dependency in your application's Gemfile
configuration file. The runtime will install all dependencies before your
entrypoint is called.
source "https://rubygems.org"
gem "rack"
gem "puma"
An example entrypoint using puma for a Rails application:
entrypoint : bundle exec rails server Puma - p $PORT
An example entrypoint using puma for any Rack application:
entrypoint : bundle exec rackup - s Puma - p $PORT
For applications that can handle requests without a Rack server, you can just execute a ruby script:
entrypoint : bundle exec ruby app . rb
Note: The entrypoint command will be executed by
bash's exec function .
Shell variables such as $PORT will be replaced normally, but shell syntax such
as if , for and while embedded in the entrypoint command will not
function.
Environment variables
The following environment variables are set by the runtime environment:
Environment Variable
Description
GAE_INSTANCE
The name of the current instance.
GAE_MEMORY_MB
The amount of memory available to the application process.
GAE_SERVICE
The service name specified in your application's app.yaml
file, or if no service name is specified, it is set to default .
GAE_VERSION
The version label of the current application.
GOOGLE_CLOUD_PROJECT
The Project ID associated with your application, which is visible in
the Google Cloud console
PORT
The port that will receive HTTP requests.
RACK_ENV
Set to production .
RAILS_ENV
Set to production .
RAILS_SERVE_STATIC_FILES
Set to true .
You can set additional environment variables with app.yaml .
Metadata server
Each instance of your application can use the
Compute Engine metadata server
to query information about the instance, including its hostname, external
IP address, instance ID, custom metadata, and service account information.
App Engine doesn't allow you to set custom metadata for each instance, but you
can set project-wide custom metadata
and read it from your App Engine and Compute Engine instances.
This example function uses the metadata server to get an external IP address of
an instance.
require "sinatra"
require "net/http"
get "/" do
uri = URI . parse (
"http://metadata.google.internal/computeMetadata/v1" +
"/instance/network-interfaces/0/access-configs/0/external-ip"
)
request = Net :: HTTP :: Get . new uri . path
request . add_field "Metadata-Flavor" , "Google"
http = Net :: HTTP . new uri . host , uri . port
response = http . request request
"External IP: #{ response . body } "
end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
