---
title: "CountArtifactsResponse \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/reference/rest/v1/CountArtifactsResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/vault/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/vault/reference/rest/v1/CountArtifactsResponse
  title: "CountArtifactsResponse \_|\_ Google Vault \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Vault
Reference
Send feedback
CountArtifactsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
MailCountResult
JSON representation
GroupsCountResult
JSON representation
Definition of the response for method matters.count.
JSON representation
{
"totalCount" : string ,
"mailCountResult" : {
object ( MailCountResult )
} ,
"groupsCountResult" : {
object ( GroupsCountResult )
}
}
Fields
totalCount
string ( int64 format)
Total count of messages.
Union field corpus_count_result . Detailed count metrics for specific services. corpus_count_result can be only one of the following:
mailCountResult
object ( MailCountResult )
Count metrics for Gmail and classic Hangouts.
groupsCountResult
object ( GroupsCountResult )
Count metrics for Groups.
MailCountResult
Gmail and classic Hangouts-specific count metrics.
JSON representation
{
"queriedAccountsCount" : string ,
"matchingAccountsCount" : string ,
"nonQueryableAccounts" : [
string
] ,
"accountCountErrors" : [
{
object ( AccountCountError )
}
] ,
"accountCounts" : [
{
object ( AccountCount )
}
]
}
Fields
queriedAccountsCount
string ( int64 format)
Total number of accounts involved in this count operation.
matchingAccountsCount
string ( int64 format)
Total number of accounts that can be queried and have more than zero messages.
nonQueryableAccounts[]
string
When DataScope is HELD_DATA and when account emails are passed in explicitly, the list of accounts in the request that are not queried because they are not on hold in the matter. For other data scopes, this field is not set.
accountCountErrors[]
object ( AccountCountError )
Errors occurred when querying these accounts.
accountCounts[]
object ( AccountCount )
Subtotal count per matching account that have more than zero messages.
GroupsCountResult
Groups specific count metrics.
JSON representation
{
"queriedAccountsCount" : string ,
"matchingAccountsCount" : string ,
"nonQueryableAccounts" : [
string
] ,
"accountCountErrors" : [
{
object ( AccountCountError )
}
] ,
"accountCounts" : [
{
object ( AccountCount )
}
]
}
Fields
queriedAccountsCount
string ( int64 format)
Total number of accounts involved in this count operation.
matchingAccountsCount
string ( int64 format)
Total number of accounts that can be queried and have more than zero messages.
nonQueryableAccounts[]
string
When DataScope is HELD_DATA , these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set.
accountCountErrors[]
object ( AccountCountError )
Error occurred when querying these accounts.
accountCounts[]
object ( AccountCount )
Subtotal count per matching account that have more than zero messages.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],[]]
