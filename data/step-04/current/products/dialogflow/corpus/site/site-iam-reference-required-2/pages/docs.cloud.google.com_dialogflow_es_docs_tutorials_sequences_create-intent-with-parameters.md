---
title: "Creating the sequence flow intents \_|\_ Dialogflow ES \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-intent-with-parameters
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-intent-with-parameters
  title: "Creating the sequence flow intents \_|\_ Dialogflow ES \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Dialogflow
Dialogflow ES
Send feedback
Creating the sequence flow intents
Stay organized with collections
Save and categorize content based on your preferences.
Now that you have your sequence entity, you can create the intents to collect the
sequence from the end-user. You'll want at least three intents with these responsibilities:
A head intent "Sequence"
Catches utterances to start the sequence collection.
Invoked by follow-up events to continue capturing sequences until the
end-user says they're done.
A contextual intent "Sequence - Edit"
Catches utterances to correct the last sequence collected.
Programmatically loops back to the "Sequence" intent to collect the
corrected sequence.
A contextual intent "Sequence - Done"
Catches utterances that indicate the sequence is complete.
In the next section, you'll see how webhook will connect all of these, but first
let's set up the intents.
Create the "Sequence" intent
This is the main intent for collecting sequences. Configure it like so:
Leave the input contexts empty so end-users can trigger this intent at the start
of the call.
Add an output context "collecting-sequence". We'll use this context to enable
the correcting and finishing intents during the flow.
Add an output context "editing-sequence" and set the lifespan to 0. We'll
activate this context with a lifespan from the "Sequence - Edit" intent in
the next section, and it's important to clear that context here so that the
"editing-sequence" context is only active immediately after triggering
the "Edit" intent.
Add an event "continue-sequence" so your webhook can loop this intent to
collect all of the partial sequences.
Add training phrases so the end-user can trigger this intent to start the flow.
This example uses phrases like "what's my order status", "track my order",
"where is my order", etc.
Add an action name "handle-sequence" so the webhook knows when to fire.
You'll code the webhook in the next section of this tutorial, after all the
intents are set up.
Add a required parameter "new_sequence" using the regexp entity you created
to collect partial sequences in the previous section. Set the entity type to
"@alphanumeric" and the value to "$new_sequence".
Add an optional parameter "existing_sequence" with value
"#continue-sequence.existing_sequence" to extract the new existing sequence
from the event. You can leave the entity type empty.
Add an optional parameter "previous_sequence" with value
"#continue-sequence.previous_sequence" to extract the previous sequence
from the event. You can leave the entity type empty.
Enable webhook call for this intent and webhook call for slot filling.
Create the "Sequence - Edit" intent
This intent listens for utterances that indicate the previous sequence was
misheard by the agent. Set it up like this:
Add an input context "collecting-sequence" so that this intent is only called
when we're in the middle of the sequence flow. This is the same context
activated by the "Sequence" intent.
Add an output context "editing-sequence" for our fulfillment webhook to
reference. When this intent is activated, the webhook will loop Dialogflow
back to the main "Sequence" intent to collect the next sequence. The webhook
for the "Sequence" intent's slot-filling will check for an active
"editing-sequence" context to provide a sympathetic "try again" response to
the end-user.
Add training phrases like "no", "that's not right", etc.
Add the action name "handle-sequence". This is the same action as the
"Sequence" intent so we can reuse the same webhook logic.
Add a parameter "new_sequence" with value
"#collecting-sequence.previous_sequence" to extract the previous sequence
from the context, effcetively undoing the last utterance. We do not add an
"existing_sequence" parameter here so that the webhook will overwrite the
existing sequence with the previous one.
Enable webhook call for this intent.
Create a "Sequence - Done" intent.
Add an input context "collecting-sequence"
Add an output context "collecting-sequence" and set the lifespan to 0 to
clear the context. Clearing it prevents the "Edit" and "Done" intents from
triggering again now that the agent is done collecting the sequence.
Add training phrases like "that's it", "all done", etc.
Add a parameter "sequence" with value
"#collecting-sequence.existing_sequence" to extract the final
sequence from the context.
Enable webhook call for this intent.
Link the intents through webhook
You now have everything you need to code the logic for these intents. In the next
section, you'll see how to code the webhook to use all these contexts, actions,
parameters, and events to complete the sequence validation flow.
Previous
arrow_back
Create a sequence recognizer entity
Next
Create fulfillment using webhook
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
