---
title: "Regexp entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-regexp
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-regexp
  title: "Regexp entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Regexp entities
Stay organized with collections
Save and categorize content based on your preferences.
Some entities need to match patterns rather than specific terms.
For example, national identification numbers, IDs, license plates, and so on.
With regexp entities ,
you can provide
regular expressions
for matching.
Compound regular expressions
Each regexp entity corresponds to a single pattern,
but you can provide multiple regular expressions
if they all represent variations of a single pattern.
During agent training, all regular expressions of a single entity are combined
with the alternation operator ( | ) to form one compound regular expression .
For example, if you provide the following regular expressions for a phone number:
^[2-9]\d{2}-\d{3}-\d{4}$
^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$
The compound regular expression becomes:
^[2-9]\d{2}-\d{3}-\d{4}$|^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$
The ordering of regular expressions matters.
Each of the regular expressions in the compound regular expression are processed in order.
Searching stops once a valid match is found.
For example, for an end user expression of "Seattle":
Sea|Seattle matches "Sea"
Seattle|Sea matches "Seattle"
Special handling for speech recognition
Note: Enabling auto speech adaptation
is recommended
when using regexp entities.
Also see the speech adaptation
regexp-specific guidelines .
If your agent uses speech recognition
(also known as audio input, speech-to-text, or STT),
your regular expressions will need special handling when matching letters and numbers.
A spoken end-user utterance is first processed by the speech recognizer before entities are matched.
When an utterance contains a series of letters or numbers,
the recognizer may pad each character with spaces.
In addition, the recognizer may interpret digits in word form.
For example, an end-user utterance of "My ID is 123"
may be recognized as any of the following:
"My ID is 123"
"My ID is 1 2 3"
"My ID is one two three"
To accommodate three digit numbers,
you could use the following regular expressions:
\d{3}
\d \d \d
(zero|one|two|three|four|five|six|seven|eight|nine) (zero|one|two|three|four|five|six|seven|eight|nine) (zero|one|two|three|four|five|six|seven|eight|nine)
Create a regexp entity
Console
Open the Dialogflow CX console .
Choose your GCP project.
Select your agent.
Select the Manage tab.
Click Entity Types .
Click Create .
Check Regexp entities .
Complete remaining fields.
Click Save .
API
Set the EntityType.kind field to KIND_REGEXP .
Go to the EntityType API reference
Select a protocol and version for the EntityType reference:
Protocol
V3
V3beta1
REST
EntityType resource
EntityType resource
RPC
EntityType interface
EntityType interface
C++
EntityTypesClient
Not available
C#
EntityTypesClient
Not available
Go
EntityTypesClient
Not available
Java
EntityTypesClient
EntityTypesClient
Node.js
EntityTypesClient
EntityTypesClient
PHP
Not available
Not available
Python
EntityTypesClient
EntityTypesClient
Ruby
Not available
Not available
Close
Limitations
The following limitations apply:
Fuzzy matching
cannot be enabled for regexp entities.
These features are mutually exclusive.
Each agent can have a maximum of 50 regexp entities.
The compound regular expression for an entity
has a maximum length of 2000 characters.
Previous
arrow_back
Session entities
Next
Fuzzy matching
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
