---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.689Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Reporting notification recommendations and insights"
feature_slug: "error-reporting-notification-recommendations-and-insights"
latest_feature_date: "2022-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/notifications"
  - "https://docs.cloud.google.com/error-reporting/docs/iam"
  - "https://docs.cloud.google.com/error-reporting/docs/check-app-crash"
keywords:
  - "error"
  - "reporting"
  - "notification"
  - "recommendations"
  - "insights"
  - "provides"
---

# Error Reporting notification recommendations and insights

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting provides notification recommendations and insights.

## Extended Definition

Error Reporting provides notification recommendations and insights.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/notifications](https://docs.cloud.google.com/error-reporting/docs/notifications)
- [https://docs.cloud.google.com/error-reporting/docs/iam](https://docs.cloud.google.com/error-reporting/docs/iam)
- [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)

## Supporting Pages

### "Configure and manage notifications \_|\_ Error Reporting \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/error-reporting/docs/notifications](https://docs.cloud.google.com/error-reporting/docs/notifications)
- Source ID: `site-docs-reference-required-1`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select notification channels through the Google Cloud console To select an existing notification channel, you must have one of the following roles: Error Reporting User Error Reporting Admin Project Editor Project Owner To select where you want to send notifications when new error groups occur, complete the following steps.
- Resolution status If an error event occurs in a error group that has a resolution status of Resolved , even if previous error events have been deleted , the status of the error group is set to Open and Error Reporting sends a notification.
- Notification rate limit Error Reporting uses the following rules to limit the number of notifications you might receive due to error events: At most 5 notifications per error group can be sent in a 60-minute window.
- Home Documentation Observability Error Reporting Guides Send feedback Configure and manage notifications Stay organized with collections Save and categorize content based on your preferences.

### Control access with IAM \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/iam](https://docs.cloud.google.com/error-reporting/docs/iam)
- Source ID: `site-docs-reference-required-1`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list errorreporting. errorreporting. applications. list errorreporting. errorEvents. create errorreporting. errorEvents. delete errorreporting. errorEvents. list errorreporting. groupMetadata. get errorreporting. groupMetadata. update errorreporting.groups.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get Error Reporting User Beta ( roles/ errorreporting.user ) Provides the permissions to read and write Error Reporting data, except for sending new error events.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list errorreporting. applications. list errorreporting. errorEvents. delete errorreporting. errorEvents. list errorreporting.groupMetadata. errorreporting. groupMetadata. get errorreporting. groupMetadata. update errorreporting.groups.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get Error Reporting Viewer Beta ( roles/ errorreporting.viewer ) Provides read-only access to Error Reporting data.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list errorreporting. applications. list errorreporting. errorEvents. list errorreporting. groupMetadata. get errorreporting.groups.list logging.notificationRules.get logging.notificationRules.list resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get Error Reporting Writer Beta ( roles/ errorreporting.writer ) Provides the permissions to send error events to Error Reporting.
- Permissions for read-only access plus: errorreporting.errorEvents.delete Create errors (no Google Cloud console permissions needed). errorreporting.errorEvents.create Subscribe to notifications.

### "Quickstart: Check a crashed app for errors by using Error Reporting \_|\_\

- URL: [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)
- Source ID: `site-docs-reference-required-1`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check a crashed app for errors by using Error Reporting Error Reporting provides a single place to monitor error conditions from all apps and services in a Google Cloud project and from Amazon Elastic Compute Cloud (EC2) applications.
- Notifications aren't sent when there are new occurrences of existing errors: In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- Configure notifications You can configure Error Reporting to notify you when a new type of error arrives.
- Simulate an error To generate 11 sample errors, run the following script in Cloud Shell: COUNTER = 0 while [ $COUNTER -lt 11 ] ; do gcloud beta error-reporting events report --service tutorial --service-version v $(( COUNTER / 10 + 1 )) \ --message "java.lang.RuntimeException: Error rendering template $COUNTER at com.example.TestClass.test(TestClass.java:51) at com.example.AnotherClass(AnotherClass.java:25) at javax.servlet.http.HttpServlet.service (HttpServlet.java:617) at javax.servlet.http.HttpServlet.service (HttpServlet.java:717)" if [ $COUNTER -eq 10 ] ; then echo "All sample errors reported." fi let COUNTER = COUNTER+1 done When the script finishes generating all of the errors, it prints the following line: All sample errors reported.

