---
title: "Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options
  title: "Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Entity options
Stay organized with collections
Save and categorize content based on your preferences.
There are several entity options that change the behavior of entity matching
and data extraction.
These options are pre-configured for
system entities ,
so you can not change them for system entities.
However, you can change them for your own
custom entities .
You can create different kinds of entities,
depending on the options selected:
Map entity
List entity
Composite entity (a special kind of list entity)
Regexp entity
There are other options that do not determine the kind of entity,
but do affect the behavior of entity matching:
Automated expansion
Fuzzy matching
Redact in log
Entity exclusions
This document describes each of these options.
Where to find this data
When building an agent,
it is most common to use the
Dialogflow CX console ( visit documentation , open console ).
The instructions below focus on using the console.
To access entity options data:
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Select the Manage tab.
Click Entity Types .
See the following options for any existing entities
(some of these may only be visible after expanding Advanced options ):
Entities only (no synonyms)
Regexp entities
Automatically add entities
Fuzzy matching
Redact in log
Entity exclusions
If you are building an agent using the API instead of the console,
see the EntityType type.
The API field names are similar to the console field names.
The instructions below highlight any important differences
between the console and the API.
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
Map entity
Map entities provide a map from reference values
to synonyms for each reference value. Each map entity entry contains a single
reference value and a list of synonyms. Optionally, you can also
set a DTMF pattern for each entity .
For example, each of the following rows are entity entries for a size entity
type:
Entity
Synonyms
DTMF Pattern
S
S, small, tiny, little
M
M, medium, average
L
L, large, huge, big
Notice that the reference value is included in the synonym list
for each entity entry above.
In order for a reference value to be matched,
it needs to be included as a synonym itself.
When you initially enter a reference value with the console,
it is automatically added as a synonym.
If any of the synonyms are matched for an end-user input part,
the associated reference value is extracted for the match
and is used to resolve the associated
parameter
value.
It is okay for the reference value to be omitted from the synonym list.
This just means that it is not matched to an end-user input part,
but it is used as the extracted value when one of its synonyms is matched.
This is desirable when you use special strings for reference values
that are not typed or spoken by end-users.
Many system entities are map entities.
For example, the @sys.date system entity matches common date inputs
like "January 1, 2015" or "The first of January of 2015".
Both of those inputs are mapped to a reference value in ISO-8601 format:
"2015-01-01T12:00:00-03:00".
To create a map entity:
Using the console,
uncheck the Regexp entities option
and uncheck the Entities only option.
Using the API,
set the EntityType.kind field to KIND_MAP .
Use AI generation to auto-generate synonyms
Instead of entering synonyms manually, you can use an AI generator to
auto-generate synonyms for your reference value. To do this, check the
Auto-generate X syonyms per entity checkbox when you create a new reference
value. The default value is 3 synonyms. Generating more than 15 synonyms at a
time can lead to errors. As a best practice, be sure to fill in the entity
type's Description field to generate more accurate synonyms for your
reference value.
For information about using this feature to auto-generate and auto-translate
data for non-default languages, see the
multilingual agents documentation
List entity
List entities provide a list of single value entity entries.
They do not have reference values and synonyms.
For example, each of the following rows are entity entries
for a material entity type:
Value
fabric
wood
metal
If any value is matched for an end-user input part,
the value is extracted for the match
and is used to resolve the associated
parameter
value.
Many system entities are list entities.
For example, the @sys.color system entity matches common color inputs
like "red" or "blue".
When a color is matched,
the extracted value does not map to any reference value.
For example, shades of red, such as "scarlet" or "crimson",
are not mapped to "red" and are extracted
as their original values "scarlet" and "crimson".
To create a list entity:
Using the console,
uncheck the Regexp entities option
and check the Entities only option.
Using the API,
set the EntityType.kind field to KIND_LIST .
Composite entity
A composite entity is a special kind of list entity.
Entity entries for list entities typically contain simple words or phrases,
but they may also contain other entity types.
When an entity type is referenced in another entity type,
the reference is called an alias .
When a list entity contains aliases to other entity types,
it is called a composite entity.
When creating an alias,
you supply the name of the referenced entity type
and a property name of your choosing.
When a composite entity is matched at runtime,
the extracted value is returned as a JSON object,
with alias property names used as JSON property names.
The format for entering an alias is:
@entity-name:property-name
For example, you could create a place entity type
that matches either a city or a state with the following entity entries:
Value
@sys.geo-city:city
@sys.geo-state:state
If an end-user input contains a "Nashville" part,
the place entity type is matched.
The extracted value is returned as:
{"city": "Nashville"} .
You can also use multiple entity aliases in an entity entry.
Consider the following move custom entity type that contains
aliases to a direction entity type and the @sys.number system entity type:
Direction custom map entity type:
Reference value
Synonyms
forward
forward, forwards
back
back, backward, backwards
Move custom list entity type:
Value
@sys.number:steps steps @direction:direction
If the move entity is matched
to an end-user input that contains "five steps backward",
the move entity will be matched.
The extracted value is returned as:
{"steps": 5, "direction": "back"} .
Many system entities are composite entities.
For example, the @sys.unit-currency system entity
is used for matching amounts of money with a currency name.
It matches end-user inputs like "50 euros" or "twenty dollars and five cents".
The extracted value is returned as a JSON object like:
{"amount": 50, "currency": "EUR"}
Regexp entity
With regexp entities , you can provide regular expressions for matching.
For more information,
see Regexp entities .
To create a regexp entity:
Using the console,
check the Regexp entities option.
Using the API,
set the EntityType.kind field to KIND_REGEXP .
Automated expansion (automatically add entities)
You can enable automated expansion for a custom entity type.
When enabled, your agent can recognize values
that have not been explicitly provided.
For example, consider a shopping list entity type:
Value
bread
butter
milk
apple
ice cream
If an end-user input is "I need to buy some carrots",
"carrots" will be matched for this entity type,
even though it's not provided.
The agent recognizes that "carrots" is contextually similar to other values.
You should follow the best practices when considering automated expansion:
Enabling automated expansion doesn't guarantee entity extraction.
For a finite list, you should provide the complete list
instead of providing a partial list and enabling automated expansion.
If you enable automated expansion in more than one entity,
it may cause conflicts and unexpected classification results.
To ensure better parameter extraction quality,
it is crucial to provide diverse training data
which cover all the use-cases in
which a given entity can be found in the expected agent's traffic.
With not enough examples,
automated entities expansion might not work as expected.
To enable automated expansion:
Using the console,
check the Automatically add entities option.
Using the API,
set the EntityType.autoExpansionMode field to AUTO_EXPANSION_MODE_DEFAULT .
Fuzzy matching
You can enable fuzzy matching for a custom entity.
With fuzzy matching enabled,
the ordering of the words in a value or synonym does not matter.
For more information,
see Fuzzy matching .
To enable fuzzy matching:
Using the console,
check the Fuzzy matching option.
Using the API,
set the EntityType.enableFuzzyExtraction field to true .
Redact in log
If you enable entity redaction,
all runtime extracted parameter values for the entity type
will be redacted when logging.
As an alternative, you can
redact individual parameters .
Entity exclusions
You can add entity exclusions, which are phrases that shouldn't be matched.
For example, if you have a size entity type with entity giant (an adjective),
you might consider adding giants (a noun) as an exclusion.
Previous
arrow_back
Entities
Next
System entities
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
