---
title: "Preview web apps \_|\_ Cloud Shell \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/shell/docs/using-web-preview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/shell/docs
source_metadata:
  url: https://docs.cloud.google.com/shell/docs/using-web-preview
  title: "Preview web apps \_|\_ Cloud Shell \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Shell
Guides
Send feedback
Preview web apps
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use the web preview feature in Cloud Shell.
This feature allows you to run web applications on the Cloud Shell virtual
machine instance and preview them from the Google Cloud console .
The Web Preview button
can be found on the top right of the Cloud Shell taskbar.
Start the web application
You can run any web application that listens to HTTP requests on the
Cloud Shell virtual machine, including the App Engine development server. The web
application must listen for HTTP requests on ports within the permitted range
2000 to 65000. These ports are only available to the secure Cloud Shell proxy
service, which restricts access over HTTPS to your user account only.
Simple server example
To start a simple Python HTTP server from the Cloud Shell command
prompt:
cd `mktemp -d` \
&& echo '<html><body>Hello World</body></html>' >./index.html \
&& python -m http.server 8080
App Engine development server example
To clone a sample App Engine application and run it on the
App Engine development server:
git clone https://github.com/GoogleCloudPlatform/appengine-guestbook-python \
&& cd appengine-guestbook-python \
&& dev_appserver.py ./app.yaml
The development server runs on port 8080 by default.
Preview the application
Click the Web Preview button
and then select
the port number from the displayed menu. Cloud Shell opens the preview URL on
its proxy service in a new browser window.
You can also access the preview URL by combining the port with the environment
variable WEB_HOST in the Cloud Shell terminal using the format https://$PORT-$WEB_HOST ,
or by using the Cloud Shell API .
Accessing Streamlit applications
Web preview in Cloud Shell works through a series of HTTP proxies.
Streamlit applications require additional arguments to function when running
behind an HTTP proxy. When running these applications, make sure you specify
--browser.serverAddress=localhost --server.enableCORS=false --server.enableXsrfProtection=false
on the command line.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
