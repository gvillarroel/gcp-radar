---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:23:07.207Z"
product_name: "Tasks API"
product_slug: "tasks-api"
feature_name: "Tasks API access to tasks assigned in Google Docs and Google Chat"
feature_slug: "tasks-api-access-to-tasks-assigned-in-google-docs-and-google-chat"
latest_feature_date: "2024-07-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android"
  - "https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert"
  - "https://developers.google.com/workspace/tasks/reference/rest/v1/tasks"
keywords:
  - "tasks"
  - "api"
  - "access"
  - "to"
  - "assigned"
  - "in"
  - "docs"
  - "and"
---

# Tasks API access to tasks assigned in Google Docs and Google Chat

Product: Tasks API
Coverage: LOW

## Step 02 Summary

The Tasks API now supports getting, editing, and deleting tasks assigned from Google Docs documents or Google Chat spaces.

## Extended Definition

The Tasks API now supports getting, editing, and deleting tasks assigned from Google Docs documents or Google Chat spaces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android](https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android)
- [https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert)
- [https://developers.google.com/workspace/tasks/reference/rest/v1/tasks](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks)

## Supporting Pages

### Use Tasks API on Android \_|\_ Google Tasks \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android](https://developers.google.com/workspace/tasks/oauth-and-tasks-on-android)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Manipulating Tasks through the API At this point you should have a fully set up Tasks API service Object which you can use to query the API as per the Tasks API developer's Guide , for example: // Getting all the Task lists List taskLists = service . tasklists . list (). execute (). items ; // Getting the list of tasks in the default task list List tasks = service . tasks . list ( "@default" ). execute (). items ; // Add a task to the default task list Task task = new Task (); task . title = "New Task" ; task . notes = "Please complete me" ; task . due = "2010-10-15T12:00:00.000Z" ; Task result = service . tasks . insert ( "@default" , task ). execute (); Don't forget to add the permission to access the Internet to your Android application manifest otherwise the above requests to the Tasks API endpoints will fail: <uses-permission android:name="android.permission.INTERNET" /> Sample application We recently added a new sample to the Google APIs Client Library for Java sample repository to help you getting started with the Tasks API and OAuth 2.0 on Android.
- You need to specify the API Key on your Tasks service Object: useTasksAPI(String accessToken) { // Setting up the Tasks API Service HttpTransport transport = AndroidHttp.newCompatibleTransport(); AccessProtectedResource accessProtectedResource = new GoogleAccessProtectedResource(accessToken); Tasks service = new Tasks(transport, accessProtectedResource, new JacksonFactory()); service.accessKey = INSERT YOUR API KEY; service.setApplicationName("Google-TasksSample/1.0"); // TODO: now use the service to query the Tasks API } The accessToken is only valid for a certain amount of time, so you will have to get a new one when it expires.
- In order for your Android application to use the Tasks API several steps are necessary, you need to: Select the Google Account of the user Get an OAuth 2.0 access token from the AccountManager for the Task API Identify your project and set up the Tasks service Object Make calls to the Tasks API Importing Google's client library The samples you will find in this document use the Google APIs client library for Java .
- To do that follow these steps: Create a project or use an existing one Enable the Tasks API on your project by toggling the Tasks API switch to ON The API Key can be found at API Access > Simple API Access > API Key Getting the API Key from the APIs Console The API Key is mandatory as it identifies your application and therefore allows the API to deduct quota and use the quota rules defined for your project.

### Method: tasks.insert \_|\_ Google Tasks \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Tasks assigned from Docs or Chat Spaces cannot be inserted from Tasks Public API; they can only be created by assigning them from Docs or Chat Spaces.
- A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-13 UTC."],[],[]]
- Home Google Workspace Google Tasks Reference Send feedback Method: tasks.insert Stay organized with collections Save and categorize content based on your preferences.

### REST Resource: tasks \_|\_ Google Tasks \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/tasks/reference/rest/v1/tasks](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- They can only be deleted by calling tasks.delete, in which case both the assigned task and the original task (in Docs or Chat Spaces) are deleted.
- This field is populated for tasks assigned to the current user and identifies where the task was assigned from.
- A task can be assigned to a user, currently possible from surfaces like Docs and Chat Spaces.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],[]]

