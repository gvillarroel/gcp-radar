---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:47.722Z"
product_name: "Google Workspace Admin SDK"
product_slug: "google-workspace-admin-sdk"
feature_name: "Reseller API customer account details retrieval"
feature_slug: "reseller-api-customer-account-details-retrieval"
latest_feature_date: "2013-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/admin/reports/v1/guides/push"
  - "https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers"
  - "https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list"
keywords:
  - "reseller"
  - "customer"
  - "account"
  - "details"
  - "retrieval"
  - "can"
  - "return"
  - "full"
---

# Reseller API customer account details retrieval

Product: Google Workspace Admin SDK
Coverage: MEDIUM

## Step 02 Summary

The API can return full account settings for resold customers and basic identifiers for standalone or other-reseller-managed customers.

## Extended Definition

The API can return full account settings for resold customers and basic identifiers for standalone or other-reseller-managed customers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list)

## Supporting Pages

### Push notifications \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
- Source ID: `site-docs-reference-required-2`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples Notification messages for Activity resource events have the general form: POST https://mydomain.com/notifications Content-Type: application/json; utf-8 Content-Length: 0 X-Goog-Channel-ID: reportsApiId X-Goog-Channel-Token: 398348u3tu83ut8uu38 X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT X-Goog-Resource-ID: ret08u3rv24htgh289g X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/ userKey /applications/ applicationName X-Goog-Resource-State: eventName X-Goog-Message-Number: 10 { "kind": "admin#reports#activity", "id": { "time": datetime , "uniqueQualifier": long , "applicationName": string , "customerId": string }, "actor": { "callerType": string , "email": string , "profileId": long }, "ownerDomain": string , "ipAddress": string , "events": [ { "type": string , "name": string , "parameters": [ { "name": string , "value": string , "intValue": long , "boolValue": boolean } ] } ] } An example of an admin activity event: POST https://mydomain.com/notifications Content-Type: application/json; utf-8 Content-Length: 596 X-Goog-Channel-ID: reportsApiId X-Goog-Channel-Token: 245t1234tt83trrt333 X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT X-Goog-Resource-ID: ret987df98743md8g X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin?alt=json X-Goog-Resource-State: CREATE USER X-Goog-Message-Number: 23 { "kind": "admin#reports#activity", "id": { "time": "2013-09-10T18:23:35.808Z", "uniqueQualifier": "-0987654321", "applicationName": "admin", "customerId": "ABCD012345" }, "actor": { "callerType": "USER", "email": "admin@example.com", "profileId": "0123456789987654321" }, "ownerDomain": "apps-reporting.example.com", "ipAddress": "192.0.2.0", "events": [ { "type": "USER SETTINGS", "name": "CREATE USER", "parameters": [ { "name": "USER EMAIL", "value": "liz@example.com" } ] } ] } Respond to notifications To indicate success, you can return any of the following status codes: 200 , 201 , 202 , 204 , or 102 .
- The possible values include: admin calendar drive groups groups enterprise login mobile saml token user accounts id. customerId The unique identifier for a Google Workspace account. actor User doing the action. actor. callerType The type of author who performed the activity listed in the report.
- Watch response If the watch request successfully creates a notification channel, it returns an HTTP 200 OK status code.
- The message body of the watch response provides information about the notification channel you just created, as shown in the example below. { "kind": "api#channel", "id": "reportsApiId", "resourceId": "o3hgv1538sdjfh", "resourceUri": "https://admin.googleapis.com/admin/reports/v1/activity/ userKey /applications/ applicationName ", "token": "target=myApp-myFilesChannelDest", "expiration": 3600 } In addition to the properties you sent as part of your request, the returned information also includes the resourceId and resourceUri to identify the resource being watched on this notification channel.

### "Reports API: Customers Usage Report \_|\_ Admin console \_|\_ Google for\

- URL: [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- Source ID: `site-docs-reference-required-2`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- The maxResults query string shows this report returns two events per report page: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/2013-03-03 ?parameters=accounts:num 30day logins%2Caccounts:authorized apps&maxResults=2 JSON response for customer usage report { "kind" : "reports#usageReports" , "warnings" : [ { "code" : warning machine - readable code , "message" : warning human - readable message , "data" : [ { "key" : key for key - value pair that gives detailed warning information , "value" : value for key - value pair giving detailed warning information } ] } ], "nextPageToken" : "N:NNN:NNN:N:C03az79cb" , "usageReports" : [ { "kind" : "usageReport" , "date" : "2013-03-03" , "entity" : { "type" : "CUSTOMER" , "customerId" : "C03az79cb" }, "parameters" : [ { "name" : "accounts:num 1day logins" , "intValue" : "1" }, { "name" : "accounts:num 30day logins" , "intValue" : "1" }, { "name" : "accounts:num 7day logins" , "intValue" : "1" }, { "name" : "accounts:num disabled accounts" , "intValue" : "5" }, { "name" : "accounts:authorized apps" , "msgValue" : [ { "client id" : "1234.apps.googleusercontent.com" , "client name" : "www.example.com" , "num users" : 2 }, { "client id" : "4567.apps.googleusercontent.com" , "client name" : "Example" , "num users" : 1 }, ... ] } ] } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For readability, the following example is formatted with line returns: GET https://admin.googleapis.com/admin/reports/v1/usage/dates/ yyyy-mm-dd date ?parameters= app name: usage parameter ,... &customerId= the customer's ID &maxResults= number of events listed on each page of the report The dates value is the date the usage occurred and the timestamp is in the ISO 8601 format , yyyy-mm-dd.
- Retrieve a customer usage report To retrieve report of your account activities use the following GET HTTP request and include the authorization token described in the authorization documentation .
- The user usage report returns Google Workspace service usage information across your account.

### Method: chromeosdevices.list \_|\_ Admin console \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The follow-on request's pageToken query parameter is the nextPageToken from your previous response. projection enum ( Projection ) Determines whether the response contains the full list of properties or only a subset. query string Search string in the format given at chromeosdevices.list query operators . sortOrder enum ( SortOrder ) Whether to return results in ascending or descending order.
- As an account administrator, you can also use the my customer alias to represent your account's customerId .
- Path parameters Parameters customerId string The unique ID for the customer's Google Workspace account.
- The customerId is also returned as part of the Users resource .

