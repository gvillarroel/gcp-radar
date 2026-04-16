---
title: "Configuring your app with app.yaml \_|\_ App Engine flexible environment \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/java/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml
  title: "Configuring your app with app.yaml \_|\_ App Engine flexible environment\
    \ \_|\_ Google Cloud Documentation"
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
Configuring your app with app.yaml
Stay organized with collections
Save and categorize content based on your preferences.
Note: Some Java runtimes have reached end of support . You cannot re-deploy
versions that use runtimes after their end of support date. We recommend that
you upgrade your app
to use the latest version of Java.
An App Engine app is configured using an app.yaml
file, that contains CPU, memory, network and disk resources, scaling, and other
general settings including environment variables.
About app.yaml files
You can specify the runtime configuration for your Java app,
including versions and URLs, in the app.yaml file. This file acts as a deployment descriptor of a specific
service
version.
You must first create the app.yaml file for the default service of your app
before you can create and deploy app.yaml files for additional services.
The following app.yaml sample demonstrates how to configure your app for
the latest Java version .
For more information about using supported Java runtimes, see the
Java runtime .
runtime : java
env : flex
runtime_config :
operating_system : "ubuntu24"
runtime_version : "25"
manual_scaling :
instances : 1
Depending on the complexity of your app's service, you might only need to define
a few elements in the corresponding app.yaml file. The following example
demonstrates what a simple Java app might require in the
flexible environment:
You can specify a unique name for your app.yaml files, but then you must
specify the file name with the deployment
command
as well. For example, if you name your app.yaml file service-name-app.yaml
or app.flexible.yaml , then you must deploy your app using either:
gcloud app deploy service - name - app . yaml
gcloud app deploy app . flexible . yaml
To learn more about structuring multiple services and app.yaml files in your
app, see Structuring web services .
All configuration elements
For a complete list of all the supported elements in this configuration file,
see the
app.yaml reference .
Enabling Java Virtual Machine metrics collection
You can configure App Engine flexible environment for Java to collect common metrics for Java
Virtual Machine (JVM) processes. The metrics are collected using the same
JVM monitoring plugin
that Cloud Monitoring uses. To view the full list of metrics
for App Engine, see the Google Cloud metrics guide .
If you want to collect these JVM metrics for your app:
appengine.googleapis.com/flex/instance/jvm/gc/count
appengine.googleapis.com/flex/instance/jvm/gc/time
you'll need to set the following
JMX system
properties in the environment variables in your app.yaml and deploy your app.
JAVA_USER_OPTS : "-Djava.rmi.server.hostname=172.17.0.1 -Dcom.sun.management.jmxremote.port=10403 -
Dcom.sun.management.jmxremote.rmi.port=10403 -Dcom.sun.management.jmxremote.local.only=false -
Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false"
Note: The 172.17.0.1 IP enables your container to connect to the
JVM monitoring plugin running in App Engine flexible environment. Port 10403 is the reserved
JMX_PORT on the app container which the monitoring plugin connects to.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
