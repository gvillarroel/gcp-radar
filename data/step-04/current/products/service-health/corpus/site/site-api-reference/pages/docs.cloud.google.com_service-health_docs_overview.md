---
title: "Personalized Service Health overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/overview
  title: "Personalized Service Health overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Guides
Send feedback
Personalized Service Health overview
Stay organized with collections
Save and categorize content based on your preferences.
This document provides an overview of Personalized Service Health, which helps
you identify Google Cloud service health events relevant to your projects so you
can manage and respond to them efficiently. Details of these disruptions are
available in the Google Cloud console and a variety of integration points.
How Personalized Service Health works
The following diagram shows how Personalized Service Health makes service health
events available.
You can access service health events with the following:
Service Health dashboard : Track emerging and active Google Cloud
incidents relevant to your projects or organization.
Service Health API : Pull service health event information per project or
organization.
Alerts : Get notified of events relevant to your projects. Alerts are
based on logs in Cloud Logging.
Logs : Export logs related to Google Cloud events.
How Personalized Service Health fits into Google Cloud Incident Communication
Personalized Service Health is your primary channel for incident information and service
health events relevant to your projects.
Google Cloud uses multiple channels to communicate service health.
To understand the roles of Personalized Service Health and the public
Cloud Service Health (CSH) dashboard, see
Google Cloud incident communication .
View active and past Google Cloud incidents in the Service Health dashboard
The Service Health dashboard in the Google Cloud console shows
incidents that are relevant to your project, their state, and the impacted
Google Cloud products and locations.
See the quickstart to learn how to access the
Service Health dashboard.
View Google Cloud incidents and receive alerts on a mobile device
The Service Health dashboard is also available on a mobile device .
To receive alerts on your mobile device, you can
configure an alerting policy to send alerts
to your mobile device.
Request service health events using the Service Health API
The Service Health API lets you get service health events that might be
impacting or have impacted your project or organization, or get event details such as updates,
start and end times, impacted Google Cloud products and locations, and
state.
See the Service Health API reference for more information.
Configure alerts or export logs through Cloud Logging
Personalized Service Health logs service health events in
Cloud Logging , and lets you
set up alerts based on these logs. You can set up alerts for conditions such as
when new incidents are reported, when existing incidents are updated, or when
incidents for specific Google Cloud products or locations are created or
updated.
See the quickstart for setting up an alert in
the Service Health dashboard.
View Google Cloud incidents for your applications
If you manage Google Cloud resources using
App Hub ,
Cloud Hub lets you view Google Cloud
incidents for your applications. This feature supports incidents that meet both
of the following conditions:
Relate to
products that support App Hub
and Gemini Cloud Assist.
Have Related relevance .
If you don't have an application set up, do the following to display incidents
in Cloud Hub:
Configure a folder for application management .
Set up App Hub and create an application .
If needed, ensure that you have the following permissions:
servicehealth.events.list
apphub.applications.get on the specific application
apphub.applications.list
If needed, enable the App Hub API .
Check for incidents impacting your organization
You can see active incidents impacting Google Cloud products and services using
the following:
Organization Views : Provides a unified view of service health incidents
affecting any project within your Google Cloud organization. Instead of
checking individual projects, you can see aggregated information about
impacted services and projects at the organizational level. For more details,
see View organization incidents in Google Cloud console .
Service Health API : Lets you get service health events that might be
impacting or have impacted your organization. For more details, see the
Service Health API reference .
Next steps
Learn more about Google Cloud incident communication .
Review key Personalized Service Health concepts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
