---
title: "REST Resource: projects.locations.phraseSets \_|\_ Cloud Speech-to-Text \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/projects.locations.phraseSets
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/projects.locations.phraseSets
  title: "REST Resource: projects.locations.phraseSets \_|\_ Cloud Speech-to-Text\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Reference
Send feedback
REST Resource: projects.locations.phraseSets
Stay organized with collections
Save and categorize content based on your preferences.
Resource: PhraseSet
JSON representation
Phrase
JSON representation
State
Methods
Resource: PhraseSet
Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
JSON representation
{
"name" : string ,
"phrases" : [
{
object ( Phrase )
}
] ,
"boost" : number ,
"kmsKeyName" : string ,
"kmsKeyVersionName" : string ,
"uid" : string ,
"displayName" : string ,
"state" : enum ( State ) ,
"deleteTime" : string ,
"expireTime" : string ,
"annotations" : {
string : string ,
...
} ,
"etag" : string ,
"reconciling" : boolean
}
Fields
name
string
The resource name of the phrase set.
phrases[]
object ( Phrase )
A list of word and phrases.
boost
number
Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though boost can accept a wide range of positive values, most use cases are best served with values between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.
kmsKeyName
string
Output only. The KMS key name with which the content of the PhraseSet is encrypted. The expected format is projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} .
kmsKeyVersionName
string
Output only. The KMS key version name with which content of the PhraseSet is encrypted. The expected format is projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version} .
uid
string
Output only. System-assigned unique identifier for the PhraseSet. This field is not used.
displayName
string
Output only. User-settable, human-readable name for the PhraseSet. Must be 63 characters or less. This field is not used.
state
enum ( State )
Output only. The CustomClass lifecycle state. This field is not used.
deleteTime
string ( Timestamp format)
Output only. The time at which this resource was requested for deletion. This field is not used.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
expireTime
string ( Timestamp format)
Output only. The time at which this resource will be purged. This field is not used.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
annotations
map (key: string, value: string)
Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
etag
string
Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used.
reconciling
boolean
Output only. Whether or not this PhraseSet is in the process of being updated. This field is not used.
Phrase
A phrases containing words and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See usage limits .
List items can also include pre-built or custom classes containing groups of words that represent common concepts that occur in natural language. For example, rather than providing a phrase hint for every month of the year (e.g. "i was born in january", "i was born in febuary", ...), use the pre-built $MONTH class improves the likelihood of correctly transcribing audio that includes months (e.g. "i was born in $month"). To refer to pre-built classes, use the class' symbol prepended with $ e.g. $MONTH . To refer to custom classes that were defined inline in the request, set the class's customClassId to a string unique to all class resources and inline classes. Then use the class' id wrapped in $ {...} e.g. "${my-months}". To refer to custom classes resources, use the class' id wrapped in ${} (e.g. ${my-months} ).
Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint with matching us or eu location value.
JSON representation
{
"value" : string ,
"boost" : number
}
Fields
value
string
The phrase itself.
boost
number
Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though boost can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.
State
Set of states that define the lifecycle of a CustomClass.
Enums
STATE_UNSPECIFIED
Unspecified state. This is only used/useful for distinguishing unset values.
ACTIVE
The normal and active state.
DELETED
This CustomClass has been deleted.
Methods
create
Create a set of phrase hints.
delete
Delete a phrase set.
get
Get a phrase set.
list
List phrase sets.
patch
Update a phrase set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
