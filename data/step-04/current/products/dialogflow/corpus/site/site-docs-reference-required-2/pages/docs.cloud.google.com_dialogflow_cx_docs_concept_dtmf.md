---
title: "DTMF for telephony integrations \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/region
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf
  title: "DTMF for telephony integrations \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
DTMF for telephony integrations
Stay organized with collections
Save and categorize content based on your preferences.
You can enable and configure DTMF (Dual-tone multi-frequency signaling)
for telephony
integrations . When enabled, end-user
telephone key-presses are converted to normal text and processed as end-user
input by the agent. This conversion can be as simple as the characters
associated with telephone keypresses ( 12*34# ), or you can use
regular expressions (Regex) for more
complicated sequences.
Matching rules
DTMF settings have three different matching rules:
Match to an intent .
Match to a custom entity .
Match to a system entity type
You can associate DTMF patterns with individual
intents and
entities to trigger a match to
end-user input sequences. When you enable DTMF globally, system entities are
enabled by default.
System entity rule
System entity rules are enabled by
default when you enable DTMF.
Type name
DTMF pattern
Example
sys.percentage
any integer number
29 -> 29%
sys.temperature
any integer number
30 -> 30C or 30F
sys.phone-number
any digit sequence
4081111111
sys.date
(depending on locale) YYYYMMDD (en-us) or MMDDYYY
20231001 -> 2023-10-01, 10-01-2023 -> 10-01-2023
sys.zip-code
any digit sequence
94043
sys.number
digit sequence with period represented by '*' key
123 -> 123, 123*45 -> 123.45
sys.cardinal
any digit sequence
12345
sys.number-integer
any digit sequence
12345
sys.number-sequence
any digit sequence
12345
sys.ordinal
any digit sequence
12345
Settings
This section outlines the additional settings that you can configure when you
enable DTMF.
Finish digit
This setting controls the keypress that will immediately terminate DTMF input,
without waiting for any more input. It is common to use # for this setting.
The finish digit is not included in the converted end-user input. For example,
if the finish digit is # , and the input is 123# , then the converted end-user
input provided to agent processing is 123 .
Disable speech detection
With this setting enabled, the agent ignores speech inputs and uses DTMF-only
input mode.
Interdigit timeout duration
An end-user might pause while entering a sequence of keypresses. If this pause
duration is greater than the interdigit timeout duration , Dialogflow
aborts DTMF processing for the sequence.
If Dialogflow aborts DTMF processing, it provides the unconverted
sequence captured up to that point to the agent as end-user input. This input is
unlikely to match any intent or form parameters, so Dialogflow will
likely invoke a
no-match event .
When using the console, this field is in seconds.
Endpointing timeout duration
After a match for a keypress sequence is made, Dialogflow continues to
process keypresses. Endpointing timeout duration is the duration that
Dialogflow will wait for more input after a match is made before
ending detection. This behavior handles scenarios where the sequence is a
variable length, like unbounded numbers.
If the end-user pauses entry for than the time set in endpointing timeout
duration , Dialogflow aborts DTMF processing and converts the
currently-matched sequence as it normally would.
Enable DTMF
Note: To enable this feature on a
form parameter you must set
dtmf to Required in the parameter's settings.
You can enable DTMF at the agent, page, or parameter level. DTMF will be
applied to everything within that scope. This section describes enabling DTMF
for an agent as an example. You can also enable DTMF using Page settings
(pages), Flow settings (flows), or by selecting a parameter and viewing the
settings menu. In all cases, DTMF settings are found at the bottom of the page.
Go to Agent settings and select the Speech and IVR tab.
Go to the bottom of the page and click the Enable DTMF checkbox.
Set the values for Finish digit , Interdigit timeout duration , and
Enpointing timeout duration . DTMF is now enabled for everything within the
scope of that agent. If set at a lower level, these settings now override any
upper-level settings. Any active intents or entity types of the active slots
within that scope might be triggered if they have DTMF patterns defined.
Add a DTMF pattern to an intent
In the left-hand navigation menu, select the Manage tab and click
Intents .
Select an intent from the list that appears and go to the DTMF pattern
box.
Enter a DTMF sequence. You can use
regex patterns in cases of more
complex DTMF patterns.
Click Save to save your changes.
Add a DTMF pattern to an entity
In the left-hand navigation menu, select the Manage tab and click
Entity types .
Select an entity type from the list that appears. Go to the DTMF Pattern
column in the Entities table.
Set a DTMF pattern for each entity in the table. You can use
regex patterns in cases of more
complex DTMF patterns.
Click Save to save your changes.
Use DTMF in the simulator
You can test your DTMF configuration in the Console simulator.
In the Dialogflow Console, click Test Agent in the upper right
hand corner of the screen.
In the panel that pops up, click the + symbol next to the Talk to
agent text input box. Select DTMF .
Enter the DTMF pattern you want to test and the DTMF finish digit. Make
sure that the Send new DTMF input box is checked, then click Send .
The response to the DTMF input will appear in the simulator.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
