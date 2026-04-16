---
title: "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/python3
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/python3/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/python3
  title: "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\
    \ Google Cloud Documentation"
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
Python 3 Runtime Environment
Stay organized with collections
Save and categorize content based on your preferences.
The Python runtime is the software stack responsible for installing
your web service's code and its dependencies and running your App Engine service.
The Python runtime for App Engine in the standard environment is
declared in the app.yaml
file:
runtime : python VERSION
Where VERSION is the Python MAJOR and MINOR version numbers. For
example, to use the latest Python version, Python 3.14, specify
314 .
For other supported Python versions, and the corresponding Ubuntu version for your
Python version, see the Runtime support schedule .
Python 3 versions
The latest supported Python version is 3.14. The Python runtime uses the latest stable release of the
version that is specified in your app.yaml file.
App Engine automatically updates to new patch versions,
but it does not automatically update the minor version.
For example, your application might be deployed at Python 3.7.0 and later
automatically updated to Python 3.7.1, but it will not be automatically updated
to the next minor version Python 3.8.0.
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
App Engine performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try App Engine free
App Engine runs Python apps in a container secured by gVisor on an
up-to-date Ubuntu Linux distribution.
Dependencies
During deployment, App Engine uses the Python package manager
pip to install dependencies
defined in the requirements.txt
metadata file located in your project's root directory. You do not need to
upload dependencies as App Engine performs a fresh install.
Dependency specification using the Pipfile / Pipfile.lock standard is
currently not supported and your project must not have these files present.
Application startup
The runtime starts your app by running the command you specify in the
entrypoint field
in your app.yaml file. If you have configured a Gunicorn web server
entrypoint in the app.yaml file, you must also add gunicorn to your
requirements.txt file.
The entrypoint should start a web server that listens
on the port specified by the PORT environment variable. For example:
entrypoint : gunicorn - b : $ PORT main : app
The web framework that your app uses is responsible for routing requests to the
appropriate handlers in your app.
If your app meets the following requirements, App Engine will start
your app with the gunicorn web server if you don't
specify the entrypoint field:
The root of your app directory contains a main.py file with a
WSGI-compatible object called app .
Your app does not contain Pipfile or Pipfile.lock files.
If you do not specify an entrypoint for the Python 3 runtime, App Engine
configures and starts the default Gunicorn web server.
Note: The default timeout of
gunicorn is 30
seconds when the entrypoint field is specified. Workers silent for more than
this many seconds are killed and restarted. If your handler takes more than 30
seconds, you may face [CRITICAL] WORKER TIMEOUT error. To ensure that the
request successfully completes, based on your use-case, you can use the --
timeout flag in the
entrypoint field to increase the timeout.
Entrypoint best practices
Ensure the Python module required to run the specified entrypoint in
app.yaml is present in the requirements.txt file. Add gunicorn to the
requirements.txt file only if a gunicorn endpoint is explicitly specified
in the app.yaml file.
For the best performance, the entrypoint should be lightweight because it runs
whenever a new instance of your application is created.
You can use the entrypoint field to tune the performance of your app. For
example, if you use gunicorn as your web server, you can use the
--workers flag
in the entrypoint field to configure the number of workers serving your app.
The number of workers you specify should match the
instance class
of your App Engine app:
Instance class
Workers
F1
2
F2
4
F4
8
F4_1G
8
B1
2
B2
4
B4
8
B4_1G
8
B8
8
This guidance serves as a starting point for selecting the
number of workers. You may need to use a different number of workers
depending on your app's performance characteristics.
The example below shows an App Engine deployment that uses two
gunicorn workers for serving apps:
entrypoint : gunicorn - b : $ PORT - w 2 main : app
We recommend that you configure your web server to listen and respond to HTTP
requests on the port specified by your $PORT
environment variable . Using the default port 8080
prevents App Engine from using its NGINX layer to compress HTTP
responses. Note that if you use port 8080 , warnings about
port 8080 and NGINX will show in your app's log files.
Other web frameworks
In addition to Django and Flask, you can use other web frameworks with
App Engine, such as
uwsgi and
Tornado . The following example shows
how to use uwsgi with App Engine:
runtime : python313
entrypoint : uwsgi --http-socket :$PORT --wsgi-file main.py --callable app --master --processes 1 --threads 2
uwsgi==2.0.22
Flask==3.0.0
Environment variables
The following environment variables are set by the runtime:
Environment variable
Description
GAE_APPLICATION
The ID of your App Engine application.
This ID is prefixed with ' region code ~'
such as 'e~' for applications deployed in Europe.
GAE_DEPLOYMENT_ID
The ID of the current deployment.
GAE_ENV
The App Engine environment. Set to standard .
GAE_INSTANCE
The ID of the instance on which your service is currently running.
GAE_MEMORY_MB
The amount of memory available to the application process, in MB.
GAE_RUNTIME
The runtime specified in your app.yaml file.
GAE_SERVICE
The service name specified in your app.yaml file. If no service name is specified, it is set to default .
GAE_VERSION
The current version label of your service.
GOOGLE_CLOUD_PROJECT
The Google Cloud project ID associated with your application.
PORT
The port that receives HTTP requests.
NODE_ENV (Only available in the Node.js runtime)
Set to production when your service is deployed.
You can
define additional environment variables in your app.yaml file ,
but the above values cannot be overridden, except for NODE_ENV .
HTTPS and forwarding proxies
App Engine terminates HTTPS connections at the load balancer and
forwards requests to your application. Some applications need to determine
the original request IP and protocol. The user's IP address is available in
the standard X-Forwarded-For header. Applications that require this
information should configure their web framework to trust the proxy.
Filesystem
The runtime includes a full filesystem. The filesystem is read-only except for
the location /tmp , which is a virtual disk storing data in your
App Engine instance's RAM.
Metadata server
Each instance of your application can use the App Engine metadata server
to query information about the instance and your project.
Note: Custom metadata is not supported in the standard environment.
You can access the metadata server through the following endpoints:
http://metadata
http://metadata.google.internal
Requests sent to the metadata server must include the request header
Metadata-Flavor: Google . This header indicates that the request was sent with
the intention of retrieving metadata values.
The following table lists the endpoints where you can make HTTP requests for
specific metadata:
Metadata endpoint
Description
/computeMetadata/v1/project/numeric-project-id
The project number assigned to your project.
/computeMetadata/v1/project/project-id
The project ID assigned to your project.
/computeMetadata/v1/instance/region
The region the instance is running in.
/computeMetadata/v1/instance/service-accounts/default/aliases
/computeMetadata/v1/instance/service-accounts/default/email
The default service account email assigned to your project.
/computeMetadata/v1/instance/service-accounts/default/
Lists all the default service accounts for your project.
/computeMetadata/v1/instance/service-accounts/default/scopes
Lists all the supported scopes for the default service accounts.
/computeMetadata/v1/instance/service-accounts/default/token
Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
For example, to retrieve your project ID, send a request to
http://metadata.google.internal/computeMetadata/v1/project/project-id .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
