---
title: "Moderate text \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/moderating-text
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/moderating-text
  title: "Moderate text \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Guides
Send feedback
Moderate text
Stay organized with collections
Save and categorize content based on your preferences.
Text moderation analyzes a document against a list of
safety attributes, which include "harmful categories" and topics that may be considered sensitive. To moderate
the text in a document, call the moderateText method.
A complete list of categories returned for the moderateText
method are found here:
Safety Attribute
Description
Toxic
Content that is rude, disrespectful, or unreasonable.
Derogatory
Negative or harmful comments targeting identity and/or protected attributes.
Violent
Describes scenarios depicting violence against an individual or group, or general descriptions of gore.
Sexual
Contains references to sexual acts or other lewd content.
Insult
Insulting, inflammatory, or negative comment towards a person or a group of people.
Profanity
Obscene or vulgar language such as cursing.
Death, Harm & Tragedy
Human deaths, tragedies, accidents, disasters, and self-harm.
Firearms & Weapons
Content that mentions knives, guns, personal weapons, and accessories such as ammunition, holsters, etc.
Public Safety
Services and organizations that provide relief and ensure public safety.
Health
Human health, including:
Health conditions, diseases, and disorders
Medical therapies, medication, vaccination, medical practices, and
resources for healing, including support groups.
Religion & Belief
Belief systems that deal with the possibility of supernatural laws and beings; religion, faith, belief, spiritual practice, churches, and places of worship. Includes astrology and the occult.
Illicit Drugs
Recreational and illicit drugs; drug paraphernalia and cultivation, headshops, etc. Includes medicinal use of drugs typically used recreationally (e.g. marijuana).
War & Conflict
War, military conflicts, and major physical conflicts involving large numbers of people. Includes discussion of military services, even if not directly related to a war or conflict.
Finance
Consumer and business financial services, such as banking, loans, credit, investing, and insurance.
Politics
Political news and media; discussions of social, governmental, and public policy.
Legal
Law-related content, including law firms, legal information, primary legal materials, paralegal services, legal publications and technology, expert witnesses, litigation consultants, and other legal service providers.
Safety attribute confidence scores
Each safety attribute has an associated confidence score
between 0.00 and 1.00, reflecting the likelihood of
the input or response belonging to a given category.
Sample response
{
"moderationCategories" : [
{
"name" : "Toxic" ,
"confidence" : 0.10
},
{
"name" : "Insult" ,
"confidence" : 0.12
},
{
"name" : "Profanity" ,
"confidence" : 0.07
},
{
"name" : "Derogatory" ,
"confidence" : 0.04
},
{
"name" : "Sexual" ,
"confidence" : 0.00
},
{
"name" : "Death, Harm & Tragedy" ,
"confidence" : 0.00
},
{
"name" : "Violent" ,
"confidence" : 0.00
},
{
"name" : "Firearms & Weapons" ,
"confidence" : 0.00
},
{
"name" : "Public Safety" ,
"confidence" : 0.01
},
{
"name" : "Health" ,
"confidence" : 0.01
},
{
"name" : "Religion & Belief" ,
"confidence" : 0.00
},
{
"name" : "Illicit Drugs" ,
"confidence" : 0.01
},
{
"name" : "War & Conflict" ,
"confidence" : 0.02
},
{
"name" : "Politics" ,
"confidence" : 0.01
},
{
"name" : "Finance" ,
"confidence" : 0.00
},
{
"name" : "Legal" ,
"confidence" : 0.00
}
]
}
Test your confidence thresholds
You can test Google's safety filters and define confidence thresholds that are
right for your business. By using these thresholds, you can take comprehensive
measures to detect content that violates Google's usage policies or terms of
service and take appropriate action.
The confidence scores are only predictions. You shouldn't depend on the
scores for reliability or accuracy. Google is not responsible for interpreting
or using these scores for business decisions.
Difference between probability and severity
The confidence scores indicate that
the content belongs to the specified category and not the severity. This is important to
consider because some content can have low probability of being unsafe even
though the severity of harm could still be high. For example, comparing the
sentences:
The robot punched me.
The robot slashed me up.
Sentence 1 might cause a higher probability of being unsafe but you might
consider sentence 2 to be a higher severity in terms of violence.
Therefore, it is important for you to carefully test and consider what the
appropriate level of blocking is for your use cases while
minimizing harm to end users.
Language support
Language
ISO-639-1
Support
English
es
yes
Spanish
es
yes
Portuguese
pt
yes
French
fr
yes
Italian
it
yes
German
de
yes
Chinese
zh
yes
Japanese
ja
yes
Korean
ko
yes
Dutch
nl
limited
Russian
ru
limited
Hindi
hi
limited
Indonesian
id
limited
Arabic
ar
limited
Note: The API does not have a hard restriction on language support, so unlisted languages will still return predictions. We cannot verify the quality of predictions for unlisted languages. Similarly, "limited" support means results may vary by type of text (eg. webpage, chat message, etc) for some attributes. In any case, we recommend thorough evaluation for your use case.
How to moderate text
This section demonstrates how to moderate text in a document.
You need to submit a separate request for each document.
Here is an example of moderating text provided as a string:
Protocol
To moderate content from a document, make a POST request to the
documents:moderateText
REST method and provide
the appropriate request body as shown in the following example.
The example uses the gcloud auth application-default print-access-token
command to obtain an access token for a service account set up for the
project using the Google Cloud Platform gcloud CLI .
For instructions on installing the gcloud CLI,
setting up a project with a service account
see the Quickstart .
curl -X POST \
-H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \
-H "Content-Type: application/json; charset=utf-8" \
--data "{
'document':{
'type':'PLAIN_TEXT',
'content':'Shut up!'
}
}" "https://language.googleapis.com/v1/documents:moderateText"
Moderate text from Cloud Storage
Here is an example of moderating text stored in a text file on Cloud Storage:
Protocol
To moderate text from a document stored in Cloud Storage,
make a POST request to the
documents:moderateText
REST method and provide
the appropriate request body with the path to the document
as shown in the following example.
curl -X POST \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
https://language.googleapis.com/v1/documents:moderateText -d "{
'document':{
'type':'PLAIN_TEXT',
'gcsContentUri':'gs:// <bucket-name> / <object-name> '
}
}"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
