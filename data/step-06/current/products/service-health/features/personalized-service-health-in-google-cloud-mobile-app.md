---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.869Z"
product_name: "Service Health"
product_slug: "service-health"
feature_name: "Personalized Service Health in Google Cloud mobile app"
feature_slug: "personalized-service-health-in-google-cloud-mobile-app"
latest_feature_date: "2024-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-health/docs/view-events"
  - "https://docs.cloud.google.com/service-health/docs/overview"
  - "https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1"
  - "https://docs.cloud.google.com/service-health/docs/reference/libraries"
keywords:
  - "personalized"
  - "health"
  - "in"
  - "mobile"
  - "app"
  - "introduces"
  - "experience"
  - "the"
---

# Personalized Service Health in Google Cloud mobile app

Product: Service Health
Coverage: MEDIUM

## Step 02 Summary

Service Health introduces a personalized Service Health experience in the Google Cloud mobile app.

## Extended Definition

Service Health introduces a personalized Service Health experience in the Google Cloud mobile app.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-health/docs/view-events](https://docs.cloud.google.com/service-health/docs/view-events)
- [https://docs.cloud.google.com/service-health/docs/overview](https://docs.cloud.google.com/service-health/docs/overview)
- [https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1](https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1)
- [https://docs.cloud.google.com/service-health/docs/reference/libraries](https://docs.cloud.google.com/service-health/docs/reference/libraries)

## Supporting Pages

### "Quickstart: View service health events in the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/service-health/docs/view-events](https://docs.cloud.google.com/service-health/docs/view-events)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Find the Service Health dashboard on a mobile device To view Google Cloud incidents on your mobile device: Install the Google Cloud mobile application from https://cloud.google.com/app .
- Required roles To get the permissions that you need to access the Service Health dashboard, ask your administrator to grant you the Personalized Service Health Viewer ( roles/servicehealth.viewer ) IAM role on the project that you want to view events for.
- Home Documentation Security Personalized Service Health Guides Send feedback Quickstart: View service health events in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- Personalized Service Health will inform you by setting the relevance of the incident as Not Impacted .

### Personalized Service Health overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-health/docs/overview](https://docs.cloud.google.com/service-health/docs/overview)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If needed, ensure that you have the following permissions: servicehealth.events.list apphub.applications.get on the specific application apphub.applications.list If needed, enable the App Hub API .
- Configure alerts or export logs through Cloud Logging Personalized Service Health logs service health events in Cloud Logging , and lets you set up alerts based on these logs.
- To understand the roles of Personalized Service Health and the public Cloud Service Health (CSH) dashboard, see Google Cloud incident communication .
- How Personalized Service Health works The following diagram shows how Personalized Service Health makes service health events available.

### "Package google.cloud.servicehealth.logging.v1 \_|\_ Personalized Service\

- URL: [https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1](https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All further updates will be published to the parent event. update time Timestamp The time when the event was last modified. start time Timestamp The start time of the event, if applicable. end time Timestamp The end time of the event, if applicable. next update time Timestamp Incident-only field.
- Index EventLog (message) EventLog.DetailedCategory (enum) EventLog.DetailedState (enum) EventLog.EventCategory (enum) EventLog.Relevance (enum) EventLog.State (enum) EventLog Message describing the payload of service health logs.
- Home Documentation Security Personalized Service Health Reference Send feedback Package google.cloud.servicehealth.logging.v1 Stay organized with collections Save and categorize content based on your preferences.
- The incident does not have a resolution because no action or investigation happened.

### "Service Health client libraries \_|\_ Personalized Service Health \_|\_\

- URL: [https://docs.cloud.google.com/service-health/docs/reference/libraries](https://docs.cloud.google.com/service-health/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- C++ // Copyright 2024 Google LLC // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // https://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. //! [all] #include "google/cloud/servicehealth/v1/service health client.h" #include "google/cloud/location.h" #include <iostream> int main ( int argc , char argv []) try { if ( argc != 2 ) { std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ; return 1 ; } auto const location = google :: cloud :: Location ( argv [ 1 ], "global" ); namespace servicehealth = :: google :: cloud :: servicehealth v1 ; auto client = servicehealth :: ServiceHealthClient ( servicehealth :: MakeServiceHealthConnection ()); for ( auto e : client .
- To set request fields, pass in keyword arguments. request = Google :: Cloud :: ServiceHealth :: V1 :: GetEventRequest . new Call the get event method. result = client . get event request The returned object is of type Google::Cloud::ServiceHealth::V1::Event. p result end Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Node.js // Copyright 2024 Google LLC // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // https://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. // // This file is automatically generated by gapic-generator-typescript. // https://github.com/googleapis/gapic-generator-typescript // All changes to this file may be overwritten. 'use strict' ; function main ( parent , pageSize ) { / This snippet has been automatically generated and should be regarded as a code template only.
- ServiceHealthClient ; public class SyncGetEvent { public static void main ( String [] args ) throws Exception { syncGetEvent (); } public static void syncGetEvent () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ServiceHealthClient serviceHealthClient = ServiceHealthClient . create ()) { GetEventRequest request = GetEventRequest . newBuilder () . setName ( EventName . of ( "[PROJECT]" , "[LOCATION]" , "[EVENT]" ). toString ()) . build (); Event response = serviceHealthClient . getEvent ( request ); } } } .

