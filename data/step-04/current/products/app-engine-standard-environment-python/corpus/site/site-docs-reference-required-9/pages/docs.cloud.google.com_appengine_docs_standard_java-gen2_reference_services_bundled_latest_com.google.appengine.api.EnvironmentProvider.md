---
title: "Interface EnvironmentProvider (5.0.0) \_|\_ App Engine standard environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.EnvironmentProvider
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.EnvironmentProvider
  title: "Interface EnvironmentProvider (5.0.0) \_|\_ App Engine standard environment\
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
Standard environment
Reference
Send feedback
Interface EnvironmentProvider (5.0.0)
Stay organized with collections
Save and categorize content based on your preferences.
public interface EnvironmentProvider
An interface for providing environment variables.
Methods
getenv(String name)
public abstract String getenv ( String name )
Gets the value of the specified environment variable.
Parameter
Name
Description
name
String the name of the environment variable
Returns
Type
Description
String
the string value of the variable, or null if the variable is not defined
getenv(String name, String defaultValue)
public abstract String getenv ( String name , String defaultValue )
Gets the value of the specified environment variable, returning a default value if the variable
is not defined.
Parameters
Name
Description
name
String the name of the environment variable
defaultValue
String the default value to return
Returns
Type
Description
String
the string value of the variable, or the default value if the variable is not defined
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-28 UTC."],[],[]]
