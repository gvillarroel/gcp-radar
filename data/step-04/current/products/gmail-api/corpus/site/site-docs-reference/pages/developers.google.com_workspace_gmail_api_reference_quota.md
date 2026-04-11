---
title: "Usage limits \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/quota
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/quota
  title: "Usage limits \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
Usage limits
Stay organized with collections
Save and categorize content based on your preferences.
The Gmail API is subject to usage limits which restrict the rate at which
methods of the API can be called. Limits are defined in terms of quota
units , an abstract unit of measurement representing
Gmail resource usage. There are two usage limits which are applied
simultaneously: a per project rate limit and a per user rate limit.
The following table details these limits:
Usage limit type
Limit
Error code
Per project rate limit
1,200,000 quota units per minute
rateLimitExceeded
Per user rate limit
15,000 quota units per minute per user
userRateLimitExceeded
For information on handling limit errors, see Resolve
errors .
Per-method quota usage
The number of quota units consumed by a request varies depending on the method
called. The following table outlines the per-method quota unit usage:
Method
Quota units
drafts.create
10
drafts.delete
10
drafts.get
5
drafts.list
5
drafts.send
100
drafts.update
15
getProfile
1
history.list
2
labels.create
5
labels.delete
5
labels.get
1
labels.list
1
labels.update
5
messages.attachments.get
5
messages.batchDelete
50
messages.batchModify
50
messages.delete
10
messages.get
5
messages.import
25
messages.insert
25
messages.list
5
messages.modify
5
messages.send
100
messages.trash
5
messages.untrash
5
settings.delegates.create
100
settings.delegates.delete
5
settings.delegates.get
1
settings.delegates.list
1
settings.filters.create
5
settings.filters.delete
5
settings.filters.get
1
settings.filters.list
1
settings.forwardingAddresses.create
100
settings.forwardingAddresses.delete
5
settings.forwardingAddresses.get
1
settings.forwardingAddresses.list
1
settings.getAutoForwarding
1
settings.getImap
1
settings.getPop
1
settings.getVacation
1
settings.sendAs.create
100
settings.sendAs.delete
5
settings.sendAs.get
1
settings.sendAs.list
1
settings.sendAs.update
100
settings.sendAs.verify
100
settings.updateAutoForwarding
5
settings.updateImap
5
settings.updatePop
100
settings.updateVacation
5
stop
50
threads.delete
20
threads.get
10
threads.list
10
threads.modify
10
threads.trash
10
threads.untrash
10
watch
100
When using the Gmail API, there's also a limit of 500 recipients per
email message.
Resolve time-based quota errors
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
Make a request to Gmail API.
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
Pricing
All use of the Gmail API is available at no additional cost. Exceeding the quota
request limits doesn't incur extra charges and your account is not billed.
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
Related topics
Improve performance
Limits for sending & getting mail
Gmail sending limits in Google Workspace
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
