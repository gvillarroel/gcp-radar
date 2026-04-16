---
title: "App Engine & Earth Engine Overview \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/guides/app_engine_intro
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/playground
source_metadata:
  url: https://developers.google.com/earth-engine/guides/app_engine_intro
  title: "App Engine & Earth Engine Overview \_|\_ Google Earth Engine \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
App Engine & Earth Engine Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google App Engine allows you to build and run custom applications on Google's servers, making them easy to create, maintain, and scale.
Earth Engine and App Engine can be combined to build scalable geospatial applications, using either a service account for public access or client-side authentication requiring user registration.
Using a service account in App Engine allows anyone to use your Earth Engine application without needing to log in or be a registered Earth Engine user.
Client-side authentication for Earth Engine in App Engine requires users to be registered and logged in, which helps avoid individual usage limits by utilizing the end user's credentials.
Example App Engine applications using Earth Engine are available in a GitHub demos directory to help developers get started.
Google App Engine lets you build
and run your own custom applications on Google’s servers. App Engine applications are easy
to create, maintain, and scale as your traffic and data storage needs
change. You simply upload your application source code and it’s ready to go. If you're
new to developing for App Engine, be sure to check out the App Engine
Python or
Node.js
quickstart before proceeding.
Earth Engine and App Engine can be used together to build scalable geospatial
applications. Typically, your App Engine code includes the
Earth
Engine Python client library and makes requests to the Earth Engine backend using a
service account . This is advantageous because it allows
anyone to use your app without logging in or being a registered Earth Engine user.
Note that the standard Earth Engine usage limits apply to each service
account.
Another development approach is to use
client-side authentication instead of a service account. With this approach,
visitors to your application must be registered for Earth Engine and log in. The
benefit of this approach is that requests to Earth Engine are made using the end user's
credentials, so you are less likely to hit usage limits. The challenge is that your users
must signup for Earth Engine and log in before using the application.
The Earth
Engine App Engine demos directory on GitHub contains a set of useful App
Engine examples. See the Example Apps page for a brief
description of each example. This doc provides instructions for how to set up and deploy
the examples or custom apps you create.
Deploying App Engine apps with Earth Engine
The following instructions explain how to deploy the
demo apps .
The Python instructions are intended for Mac OS and Linux. If you're using Python on Windows,
try this .
Enable the Earth Engine API on your Google Cloud project
Create or select a Google Cloud project and enable the Earth Engine API according to
these instructions .
Set up credentials
Service Account
A service account may be used to
authorize requests to Earth Engine on behalf of whomever is using your app. The
config.py file contains authentication code using the service account
email address and a private key file. To set up authentication with a service account,
follow these instructions to create the service account
and private key file. Name the key file .private-key.json and move it
into your project directory.
Python
If you haven't already, first set up the Earth Engine Python
API . Test the service account according to
these instructions .
If the test succeeds, update config.py (or an equivalent file in your source
code) with your service account email address. (The path to the key file should not change
since it's in your project directory).
Node.js
Install the project's dependencies by running npm install . The Earth Engine
Node.js API and any other dependencies will be copied to a ./node_modules
folder in your project directory. If installation fails, check that
a recent version of Node.js is installed .
const ee = require ( '@google/earthengine' );
ee . data . authenticateViaPrivateKey ( '.private-key.json' );
ee . initialize ();
OAuth 2.0 Client ID
If you want users to authenticate as themselves (rather than using a service account),
you need to set up an OAuth Client ID from your Cloud Project. To do that:
Set up a client ID according to
these instructions .
Update static/script.js (or an equivalent file in your source code)
to use your client ID.
Ensure ee_api_js.js is available in the /static/
directory (or equivalent). You can download it
directly from GitHub ,
install it from npm , or, if you've already cloned the entire EE API repo, copy it
from earthengine-api/javascript/build on your local filesystem.
Set up the local development environment
Python
Follow the instructions in each example directory on GitHub to download and build the
project. If there's a build.sh file, run it from your application root
folder with the command:
./build.sh
The setup script will download dependencies and install Google command line tools, if
they don't already exist on your system. The Earth Engine Python API and its
dependencies will be copied to a ./lib folder in your project directory.
Verify that the App Engine command line tools are available by running:
dev_appserver.py
If the command is not found, try manually downloading and installing the
Google
App Engine SDK for Python . If the command is available, it should fail with
"error: too few arguments".
Node.js
No setup needed.
Run locally
Once your service account is
registered
for Earth Engine access , you can use it to authenticate (see config.py )
when you test the examples. Try testing the examples locally first by going into your
project directory and running:
Python
dev_appserver.py .
Node.js
npm install
npm start
Point your browser to http://localhost:8080 to see
the app running on a local server. Any changes you make (and save) will be
automatically picked up when you refresh the page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2022-01-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2022-01-26 UTC."],[],[]]
