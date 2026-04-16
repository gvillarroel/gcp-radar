---
title: "Build a Python app on App Engine \_|\_ App Engine standard environment \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27
  title: "Build a Python app on App Engine \_|\_ App Engine standard environment \_\
    |\_ Google Cloud Documentation"
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
Build a Python app on App Engine
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are deploying a new Python web service to Google Cloud,
we recommend getting started with
Cloud Run .
Use this guide to learn the basics of developing and deploying Python
web services to the App Engine standard environment .
In this guide, you iterate through building and deploying versions of a web
service, starting from a static page and building up to a personalized web
page that shows authenticated users their name, their email, and their recent
site request times.
The following tasks demonstrate the basic developer flow for creating
that web service using Firestore in Datastore mode (Datastore) data
storage and Firebase authentication :
Create your Google Cloud project
Learn how to create a Google Cloud project and then set up the
App Engine resources for your web service.
Write your web service
Learn how to write and locally test a basic web service, and then define
the configuration files that you need for deploying that web service to
App Engine.
Deploy your web service to App Engine
Learn how to deploy your Python code and then view your web
service running on App Engine.
Handle Data
Learn how to use Datastore to store and retrieve data about
site requests.
Add Firebase to your web service
Learn how to add
Firebase to your
Google Cloud project and web service.
Authenticate users with Firebase
Learn how to use Firebase Authentication to verify user credentials, serve
user information, and allow data access.
Personalize data for authenticated users
Learn how to use authentication to personalize data storage and retrieval
for authenticated users.
Clean up
Learn how to clean up your project and avoid the possibility of incurring
charges for resources you aren't using.
This guide assumes that you are already familiar with
Python , the
Flask framework , and basic web
development.
Costs
Running this sample app alone does not exceed the
free quotas . You will be charged only if you exceed those
quotas, for example, by running other samples and adding other services to the
same Google Cloud project.
Let's get started!
Create your Google Cloud project and set up the App Engine
resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
