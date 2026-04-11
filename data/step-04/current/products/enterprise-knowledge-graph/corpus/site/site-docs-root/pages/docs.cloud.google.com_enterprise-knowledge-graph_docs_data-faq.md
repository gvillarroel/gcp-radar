---
title: "FAQs for the Pre-GA Enterprise Knowledge Graph API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/data-faq
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/enterprise-knowledge-graph/docs
source_metadata:
  url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/data-faq
  title: "FAQs for the Pre-GA Enterprise Knowledge Graph API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Enterprise Knowledge Graph
Resources
Send feedback
FAQs for the Pre-GA Enterprise Knowledge Graph API
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
You can process personal data for
this product
as outlined in the
Cloud Data
Processing Addendum , subject to the obligations and restrictions described in the
agreement under which you access Google Cloud.
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Can I use this pre-GA API to process production data?
Yes, you can use the API for production data. The API has allocated a low-tier quota for you to start with.
If you want to process a large data volume beyond the default quota, reach out to the Google Cloud sales or product team.
SLA does not apply to this API.
Can I use this pre-GA API to process personal data?
Yes. Although the use of the Enterprise Knowledge Graph service is governed by the Pre-GA Offerings Terms of the
Google Cloud Service Specific Terms ,
the
Cloud Data Processing Addendum
applies to this service as of October 10, 2022.
Does my Customer Data end up in the Google Knowledge Graph Search API?
No. This API only processes Customer Data under Google Cloud the Terms of Service.
Will Google share the Customer Data I send to this API?
No, it is not shared. Your Customer Data is stored in your own project.
We will not make the Customer Data that you send available to the public, or share it with anyone else.
Will the Custom Data I send to Enterprise Knowledge Graph, the results, or other
information about the request itself, be stored on Google servers? If so, how
long and where is the information kept, and do I have access to it?
When you start a reconciliation job in Enterprise Knowledge Graph, Google needs to
temporarily store that content to perform transformation, enrichment,
and clustering. Temp data is stored securely on Google servers,
and it is automatically removed after the job completes.
Can I select a specific region to process my Customer data for this API?
No. The service operates in multi-regions, and cannot be restricted to a single region today.
How often do Google Knowledge Graph Search API entities change?
Google Knowledge Graph Search API ingests real-time events data as well as batch offline updates, in order to bring the most recent updates and new entities to our customers. Keeping most up-to-date and fresh entities in the graph is a core feature of the product. As a result, you might see slightly different responses in certain cases, because there might be new data joining the graph, as well as the old data removed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
