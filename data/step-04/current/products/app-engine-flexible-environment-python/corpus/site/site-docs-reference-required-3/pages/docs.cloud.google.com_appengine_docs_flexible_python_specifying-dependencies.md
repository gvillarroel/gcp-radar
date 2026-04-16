---
title: "Specifying dependencies \_|\_ App Engine flexible environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/python/specifying-dependencies
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/python/specifying-dependencies
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/python/specifying-dependencies
  title: "Specifying dependencies \_|\_ App Engine flexible environment \_|\_ Google\
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
Flexible environment
Guides
Send feedback
Specifying dependencies
Stay organized with collections
Save and categorize content based on your preferences.
Dependencies for python applications are declared in a standard
requirements.txt
file. For example:
Flask == MAJOR . MINOR . PATCH
google - cloud - storage
Replace MAJOR , MINOR , and PATCH with the desired
Flask version numbers .
You can use any Linux-compatible Python package in the App Engine flexible
environment, including packages that require native (C) extensions.
The Python runtime will automatically install all dependencies
declared in your requirements.txt during deployment.
Installing dependencies locally
When developing and testing your application locally, we recommended you use
venv to isolate your application's dependencies from your system
packages. This also ensures that your dependencies will be the same version on
your local machine and the deployed application.
To use venv to install dependencies, complete the following
steps:
Mac OS / Linux
Note: These instructions describe how to set up a virtual environment in Python 3. For Python 2
apps, use virtualenv to set up a virtual environment.
Create an
isolated Python environment :
python3 -m venv env
source env/bin/activate
If you're not in the directory that contains the sample code, navigate
to the directory that contains the hello_world sample code. Then install
dependencies:
cd YOUR_SAMPLE_CODE_DIR
pip install -r requirements.txt
Windows
Note: These instructions describe how to set up a virtual environment in Python 3. For Python 2
apps, use virtualenv to set up a virtual environment.
Use
PowerShell to run your Python packages.
Locate your installation of
PowerShell .
Right-click on the shortcut to PowerShell and start it as an administrator.
Create an
isolated Python environment .
python -m venv env
. \e nv \S cripts \a ctivate
Navigate to your project directory and install dependencies. If you're not in the directory
that contains the sample code, navigate to the directory that contains the
hello_world sample code. Then, install dependencies:
cd YOUR_SAMPLE_CODE_DIR
pip install -r requirements.txt
This ensures that when you run your app locally, only the
dependencies that are declared in the requirements.txt file are available.
The dependencies installed by App Engine during deployment are based on
the contents of the requirements.txt file, not the contents of the env/
directory.
Tip: Often you will not know your exact dependencies. After you install
dependencies, you can use pip freeze
to write the name and version of all installed packages to your
requirements.txt .
Installing a web framework
You'll need to use a web framework to enable your app to serve web requests.
You can use any Python web framework including the following:
Flask
Django
Pyramid
Bottle
web.py
Tornado
To use a particular web framework, just add it to your requirements.txt :
Flask == MAJOR . MINOR . PATCH
Installing a WSGI server
Some web frameworks have built-in WSGI servers; however, few of them are
suitable for serving production traffic. Most web applications use a standalone
WSGI server such as
Gunicorn ,
uWSGI or
Waitress .
For more information on installing, configuring, and using a WSGI server see
application startup .
Installing the Cloud Client Libraries
The Cloud Client Libraries for Python is a client library for
accessing Google Cloud services that significantly reduces the boilerplate
code you have to write. The library provides high-level API abstractions so
they're easier to understand. It embraces idioms of Python, works well with the
standard Python library, and integrates better with your codebase.
For example, you can install the corresponding Python client library for
Datastore or Cloud Storage to integrate those
services with your app.
To install the Python client library for Cloud Datastore:
Install the client library locally by using pip :
pip install google-cloud-datastore
Set up authentication. You can configure the Cloud Client Libraries for Python
to handle authentication automatically .
The client library can automatically handle authentication for you locally as
well by using the Google Cloud CLI .
gcloud auth login
Use the Datastore Client Libraries reference to implement support for the Cloud Datastore service in your app.
For a complete list of all of the Cloud Client Libraries for Python for the supported
Google Cloud services, see APIs & Python Libraries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
