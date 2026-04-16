---
title: "Curations overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/curations
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/curations
  title: "Curations overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Curations overview
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
Curation is the process of transforming and enriching the API metadata ingested by plugins . This process ensures that API information from different sources becomes consistent and can be effectively used for governance, discovery, and management within API hub.
Curation provides a key functionality of generating a unique identifier for each API, known as a API fingerprint . API fingerprints are used to identify and track APIs across multiple runtime projects attached to API hub.
Curation types
API hub offers two types of curation to cater to different levels of data transformation and enrichment needs: default curation for basic data transformation and custom curation for more tailored data transformation and enrichment.
Default curation
Default curation is the basic level of curation offered in API hub and is auto-selected during the plugin instance creation process. Its primary function is to identify and merge duplicate APIs based on their display name. When plugin instances contain APIs with the same display name from multiple sources, the default curation logic consolidates them into a single API entity within API hub.
For example, consider a plugin instance that is attached to two Apigee projects: project-alpha (production) and project-beta (development) . If both projects have an API named Orders , the default curation process recognizes these as the same API based on their display name. API hub then creates a single Orders API with two deployments, one associated with project-alpha and the other with project-beta .
You can override the default curation behavior of a plugin instance by creating and attaching a custom curation logic.
Custom curation
If the default curation logic doesn't align with your organization's specific requirements for handling potential duplicate APIs, you can implement custom curation. This feature leverages the API's fingerprint field to uniquely identify an API and lets you to define your own logic for identifying and transforming API metadata.
A key aspect of custom curation is API hub's seamless integration with Application Integration . You can use Application Integration to build integrations that orchestrate and enrich the API metadata. This could involve adding more metadata, transforming data values, and mapping data fields.
With custom curation, you can:
Define custom logic for identifying duplicate APIs : instead of solely relying on the display name, you can implement more sophisticated rules within Application Integration to determine if APIs from different sources represent the same logical entity.
Implement custom data transformation and enrichment : fully utilize Application Integration's capabilities to build integration flows that transform and map API metadata according to your specific needs. This can involve:
Adding more metadata to APIs based on the source or other contextual information.
Transforming and mapping data fields to adhere to your internal standards.
Continuing the previous example, if you have the Orders API in both project-alpha (production) and project-beta (development) and you want to treat them as distinct APIs in API hub, you can create a custom curation. Using Application Integration, you can define an integration that prefixes the API name with the project name (for example, alpha-Orders and beta-Orders ). By attaching this custom curation to your plugin instance, API hub ingests these as two separate APIs.
To implement custom curation, you must create an integration flow in Application Integration. This integration will use the Collect API endpoint to retrieve the API metadata and then use the extensive range of data mapping and transformation tasks available in Application Integration to implement your desired logic. You will need to define the input and output variables of your integration flow to align with the API metadata being processed by API hub.
For information about creating and managing custom curations, see Manage curations .
What's next
For information about creating and managing custom curations, see Manage curations .
For information about creating and managing plugins, see Manage plugin instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
