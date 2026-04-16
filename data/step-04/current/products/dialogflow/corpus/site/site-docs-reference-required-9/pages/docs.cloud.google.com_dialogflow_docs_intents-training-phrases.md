---
title: "Training phrases \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/intents-training-phrases
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/intents-training-phrases
  title: "Training phrases \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Training phrases
Stay organized with collections
Save and categorize content based on your preferences.
Note: There are many important best practices
for training phrases described in the
agent design best practices guide .
Training phrases are example phrases for what end-users might type or say,
referred to as end-user expressions .
For each intent, you create many training phrases.
When an end-user expression resembles one of these phrases,
Dialogflow matches the intent.
For example,
the training phrase "I want pizza" trains your agent to recognize end-user expressions
that are similar to that phrase,
like "Get a pizza" or "Order pizza".
You don't have to define every possible example,
because Dialogflow's built-in machine learning expands on your list with other,
similar phrases.
You should create at least 10-20 (depending on complexity of intent) training phrases,
so your agent can recognize a variety of end-user expressions.
For example, if you want your intent to recognize an end-user's expression about their favorite color,
you could define the following training phrases:
"I like red"
"My favorite color is yellow"
"black"
"Blue is my favorite"
...
Where to find this data
When building an agent,
it is most common to use the
Dialogflow ES console ( visit documentation , open console ).
The instructions below focus on using the console.
To access training phrase data:
Go to the Dialogflow ES console .
Select an agent.
Select Intents in the left sidebar menu.
Select an intent.
Scroll down to the Training phrases section.
If you are building an agent using the API instead of the console, see the
Intents reference .
The API field names are similar to the console field names.
The instructions below highlight any important differences between the console and the API.
Add training phrases
To add training phrases to an intent:
Click the text field that shows "Add user expression".
Type your training phrases and press the Enter key after each.
Annotate training phrases
Note: There are many important best practices
for training phrase annotations described in the
agent design best practices guide .
When an intent is matched at runtime,
Dialogflow provides the extracted values from the end-user expression as
parameters .
Each parameter has a type, called the
entity type ,
which dictates exactly how the data is extracted.
Unlike raw end-user input,
parameters are structured data that can easily be used to perform some logic or generate responses.
When building an agent,
you control how data is extracted by annotating
parts of your training phrases and configuring the associated parameters.
For example, consider a training phrase like
"What is the forecast tomorrow for Tokyo?"
You should annotate "tomorrow" with a date parameter and "Tokyo" with a location parameter.
When you annotate parts of a training phrase,
Dialogflow recognizes that these parts are just examples of actual values that will be provided by end-users at runtime.
For an end-user expression like
"What is the forecast on Friday for Sydney?",
Dialogflow would extract the date parameter from "Friday"
and the location parameter from "Sydney".
When building an agent with the console,
most annotations are automatically created for you when you add training phrases
that contain parts that can be matched to an existing
entity type .
These parts are highlighted in the console.
You can edit these annotations and parameters as needed.
To manually annotate a training phrase with the console:
Select the part of the training phrase that you want to annotate.
Select the desired entity type from the list.
A parameter is created for you in the parameter table below.
Click the Save button and wait until the Agent Training
dialog indicates that training is complete.
When building an agent with the API,
you must annotate training phrases and configure parameters manually.
See the TrainingPhrase and Parameter
types in the
Intents reference .
The Part.alias field associates training phrase annotations with particular parameters.
Implicit entities created by training phrases
Note: You should define entities explicitly,
rather than rely on implicitly defined custom entity values.
Most custom entities are defined explicitly by creating entity types
and adding entity entries.
However, custom entities may also contain implicit values.
This happens when you
annotate text of a training phrase ,
where the annotated text is not a value defined by the selected entity type.
The annotated text becomes an entity reference value
for the implicitly added entity entry.
If the entity type is a map entity,
the text also becomes a synonym for the entity entry.
Example and template modes
Caution: Template mode is deprecated. Always use example mode for new training phrases.
Each training phrase can be in one of two modes:
Example mode :
Indicated by format_quote to the left of the training phrase.
Training phrases in example mode are written in natural language
and are annotated for parameter extraction.
Template mode :
Indicated by alternate_email to the left of the training phrase.
Training phrases in template mode contain direct references to entity types.
Previous
arrow_back
Create and manage intents
Next
Actions and parameters
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
