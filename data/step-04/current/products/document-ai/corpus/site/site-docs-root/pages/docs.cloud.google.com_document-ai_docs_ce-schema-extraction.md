---
title: "Automated schema generation \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/ce-schema-extraction
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/ce-schema-extraction
  title: "Automated schema generation \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Automated schema generation
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Document AI's automated schema generation lets you automatically generate a
document's schema from a test document you supply. Then, you can approve or
decline the schema and edit it manually. This saves time and effort when defining
the document schema for your custom processor and lets you focus on refining the
schema.
Automated schema generation also has a wider knowledge base on creating high
quality schemas. This can potentially improve document extraction quality.
Generate a schema
If you haven't already snapshotted or fine-tuned your processor, take the following steps.
Note: If you've snapshotted or fine-tuned the processor, the option in the first step isn't displayed. The existing fields can't be deleted.
On the Get started tab, select Generate schema from document . The
Edit schema page opens.
Use the input field to select a local file file to generate the schema, or
use the Browse option to upload a sample document.
Tip: Enter a prompt in Generate a schema prompt to provide additional input
and direction for the generator.
Select Generate Schema .
Review the generated schema preview. You can choose accept or reject the
schema with Apply schema or Abort schema , to try again with a different
sample document or prompt.
Tip: You can use the View More more_vert option by each
field to edit the auto-generated schema after applying it.
Optional: If the resulting schema doesn't serve your
needs, or requires more than manual editing, you can enter a prompt in Generate
a schema prompt to provide additional input and direction for the generator.
Try prompts such as: specifying the document type, stating the most important
parts of the document, or suggesting a target number of entities.
What's next
Learn about uptraining a specialized processor .
Explore derived signature detection .
Previous
arrow_back
Custom extractor mechanisms
Next
Custom-based extraction
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
