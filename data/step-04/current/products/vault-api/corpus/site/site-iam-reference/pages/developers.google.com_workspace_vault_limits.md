---
title: "Usage limits \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/limits
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/vault/auth
source_metadata:
  url: https://developers.google.com/workspace/vault/limits
  title: "Usage limits \_|\_ Google Vault \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Vault
Guides
Send feedback
Usage limits
Stay organized with collections
Save and categorize content based on your preferences.
As the Google Vault API is a shared service, we apply quotas and limitations
to make sure it's used fairly by all users and to protect the overall
health of the Google Workspace system.
Product limits
You can have no more than 20 exports in progress across your organization.
API request quotas
Each organization is allowed 600 matter reads per minute, across all projects and users,
including requests through the Vault API and vault.google.com.
The following tables list the per-minute per-project request limits:
Read requests per minute per project
Export, matter, and saved query
120
Hold
228
Long-running operation
300
Write requests per minute per project
Export
20
Hold
60
Matter permissions
30
Matter
60
Saved query
45
Search (count) requests per minute per project
Search counts
20
Quota usage by method
The quota used by a request depends on the method called.
The following table lists the per-method quota usage:
Method
Quota costs
matters.close
matters.create
matters.delete
matters.reopen
matters.update
matters.undelete
1 matter read
1 matter write
matters.count
1 count
matters.get
1 matter read
matters.list
10 matter reads
matters.addPermissions
matters.removePermissions
1 matter read
1 matter write
1 matter permissions write
matters.exports.create
1 export read
10 export writes
matters.exports.delete
1 export write
matters.exports.get
1 export read
matters.exports.list
5 export reads
matters.holds.addHeldAccounts
matters.holds.create
matters.holds.delete
matters.holds.removeHeldAccounts
matters.holds.update
1 matter read
1 matter write
1 hold read
1 hold write
matters.holds.list
1 matter read
3 hold reads
matters.holds.accounts.create
matters.holds.accounts.delete
matters.holds.accounts.list
1 matter read
1 matter write
1 hold read
1 hold write
matters.savedQueries.create
matters.savedQueries.delete
1 matter read
1 matter write
1 saved query read
1 saved query write
matters.savedQueries.get
1 matter read
1 saved query read
matters.savedQueries.list
1 matter read
3 saved query reads
operations.get
1 long-running operation read
Resolve time-based quota errors
If you exceed a per-minute or per-organization quota, you usually get a
429: Too many requests HTTP status code response.
For all time-based errors (maximum of N requests per X minutes), we recommend
your code catches the exception and uses a truncated exponential backoff to make sure your
devices don't generate excessive load.
Exponential backoff is a standard error handling strategy for network applications. An
exponential backoff algorithm retries requests using exponentially increasing wait times
between requests, up to a maximum backoff time. If requests are still unsuccessful, it's
important that the delays between requests increase over time until the request is successful.
Example algorithm
An exponential backoff algorithm retries requests exponentially, increasing the wait time
between retries up to a maximum backoff time. For example:
Make a request to Google Vault API.
If the request fails, wait 1 + random_number_milliseconds and retry
the request.
If the request fails, wait 2 + random_number_milliseconds and retry
the request.
If the request fails, wait 4 + random_number_milliseconds and retry
the request.
And so on, up to a maximum_backoff time.
Continue waiting and retrying up to some maximum number of retries, but don't increase the wait
period between retries.
where:
The wait time is min(((2^n)+random_number_milliseconds), maximum_backoff) ,
with n incremented by 1 for each iteration (request).
random_number_milliseconds is a random number of milliseconds less than or
equal to 1,000. This helps to avoid cases in which many clients are synchronized by
some situation and all retry at once, sending requests in synchronized
waves. The value of random_number_milliseconds is recalculated after each
retry request.
maximum_backoff is typically 32 or 64 seconds. The appropriate value
depends on the use case.
The client can continue retrying after it has reached the maximum_backoff time.
Retries after this point don't need to continue increasing backoff time. For
example, if a client uses a maximum_backoff time of 64 seconds, then after reaching
this value, the client can retry every 64 seconds. At some point,
clients should be prevented from retrying indefinitely.
The wait time between retries and the number of retries depend on your use case
and network conditions.
Request a quota increase
Depending on your project's resource usage, you might want to request a quota
adjustment. API calls by a service account are considered to be using a
single account. Applying for an adjusted quota doesn't guarantee approval. Quota adjustment
requests that would significantly increase the quota value can take longer to be approved.
Not all projects have the same quotas. As you increasingly use Google Cloud over
time, your quota values might need to increase. If you expect a notable upcoming
increase in usage, you can proactively
request quota adjustments
from the Quotas page
in the Google Cloud console.
To learn more, see the following resources:
About quota adjustments
View your current quota usage and limits
Request a higher quota limit
Pricing
All use of Google Vault API is available at no additional cost to Google Workspace customers.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
