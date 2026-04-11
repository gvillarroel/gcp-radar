---
title: "Best Practices \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/bestpractices
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/bestpractices
  title: "Best Practices \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Send feedback
Best Practices
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Reuse service clients/stubs to avoid the cost associated with fetching WSDL and allocating resources.
Use paging with LIMIT and OFFSET in get*ByStatement() to manage large result sets and prevent timeouts.
Batch update requests for the same object type to improve performance by reducing the number of individual requests.
Use bind parameters in PQL queries to improve readability, facilitate reuse, and easily substitute variable values.
Grant user privileges sparingly by assigning only necessary roles instead of administrator privileges.
Stay under API and system-specific quota limits and implement a retry strategy with exponential backoff for quota errors.
This page covers various best practices that should be considered when
developing applications against the Google Ad Manager API.
Reuse service clients/stubs during the course of an execution
Use paging when fetching objects
Batch update requests
Store the Ad Manager API client object when appropriate
Use bind parameters in PQL
Grant user privileges sparingly
Reuse service clients/stubs during the course of an
execution
Creating a new service client/stub has a marginal cost associated with
fetching the WSDL and allocating resources. If possible, create the service
client/stub once at the beginning of an execution and make it available to
classes and functions as needed.
Use paging when fetching objects
All of the services support a get*ByStatement() method, which
allows for the filtering of results using PQL
syntax. The LIMIT and OFFSET clauses can be used to
split large result sets into pages, preventing time outs and keeping the
response page sizes reasonable. The suggested page size is 200-500, depending
on the complexity of your objects.
Batch update requests
When changing multiple objects of the same type, you can get better
performance by sending all of the objects in the same update*()
request. There is a marginal overhead on the client and the server for each
request, and batching can be an effective means of reducing the number of
requests. For example, use updateOrders
to update a batch of Orders
rather than a single order in each call.
Use bind parameters in PQL
Bind parameters are a way to put variables into a PQL query statement. PQL
refers to a bind variable by a name without spaces starting with a colon,
e.g., :name . A code example is provided in the PQL syntax page.
We recommend using bind variables because they improve code readability by
removing the need to concatenate strings and variables into a query statement.
They also make it easy to reuse PQL statements, since new queries can be made
by substituting the bind parameter values.
Grant user privileges sparingly
When using UserService to
create/update user roles, be careful not to grant users privileges they do not
need. Many features of the API can be accessed with a combination of roles
rather than assigning the user an administrator role. Please refer to the permissions
documentation when deciding which roles to assign a user. Also, as a third party application developer, make sure to
determine what level of access your application needs when asking a network to
create a user for you; a role with fewer privileges than administrator may be
enough.
Stay under quota limits
The Ad Manager API enforces several quota limits for robustness. It's
important to keep your applications under these limits and that you know how to
respond to any of the quota errors the API can return.
API quota
The first quota applied to API requests is a network-level quota. For Ad Manager
360 accounts, the limit is 8 requests per second, and for Ad Manager accounts,
the limit is 2 requests per second. Going beyond this limit results in a
QuotaError.EXCEEDED_QUOTA error. All API requests made on your
network apply to this quota, including third-party applications that you or
someone at your company has granted API access to your network.
System-specific quotas
The API quota alone is not enough to adequately protect certain
resource-intensive systems within Ad Manager. The reporting and forecast systems
define their own quotas that can result in API errors:
QuotaError.REPORT_JOB_LIMIT and
ForecastError.EXCEEDED_QUOTA , respectively.
Handling quota errors
If your application encounters any of the above quota errors, carry out a
strategy for retrying the API request. We recommend waiting at least 5 seconds
first, and if you continue to get the error, use
exponential backoff to increase the time between retries. If retrying
doesn't succeed, perform an audit of your API applications to see if any users
on your network are draining your quota.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["Optimize Google Ad Manager API usage by reusing service clients, creating them once per execution. When retrieving objects, use paging with `LIMIT` and `OFFSET` clauses, aiming for 200-500 items per page. For updates, batch multiple objects in a single request. Employ bind parameters in PQL for readability and reusability. Grant user privileges sparingly, avoiding unnecessary administrative roles. Respect quota limits, implementing retry strategies with exponential backoff, particularly for reporting and forecast requests.\n"]]
