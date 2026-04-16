---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.684Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "GKE App Errors tab"
feature_slug: "gke-app-errors-tab"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/check-app-crash"
  - "https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.ErrorStatsServiceAsyncClient"
keywords:
  - "gke"
  - "app"
  - "errors"
  - "tab"
  - "error"
  - "reporting"
  - "shows"
  - "recent"
---

# GKE App Errors tab

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting shows recent application errors for Google Kubernetes Engine services and clusters on an App Errors tab.

## Extended Definition

Error Reporting shows recent application errors for Google Kubernetes Engine services and clusters on an App Errors tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.ErrorStatsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.ErrorStatsServiceAsyncClient)

## Supporting Pages

### "Class ReportErrorsServiceAsyncClient (1.15.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Callable [ [ ... ], google . cloud . errorreporting v1beta1 . services . report errors service . transports . base .
- Callable [ [ ... ], google . cloud . errorreporting v1beta1 . services . report errors service . transports . base .
- Union [ str , google . cloud . errorreporting v1beta1 . services . report errors service . transports . base .
- Union [ str , google . cloud . errorreporting v1beta1 . services . report errors service . transports . base .

### "Quickstart: Check a crashed app for errors by using Error Reporting \_|\_\

- URL: [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)
- Source ID: `site-docs-reference-required-1`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Simulate an error To generate 11 sample errors, run the following script in Cloud Shell: COUNTER = 0 while [ $COUNTER -lt 11 ] ; do gcloud beta error-reporting events report --service tutorial --service-version v $(( COUNTER / 10 + 1 )) \ --message "java.lang.RuntimeException: Error rendering template $COUNTER at com.example.TestClass.test(TestClass.java:51) at com.example.AnotherClass(AnotherClass.java:25) at javax.servlet.http.HttpServlet.service (HttpServlet.java:617) at javax.servlet.http.HttpServlet.service (HttpServlet.java:717)" if [ $COUNTER -eq 10 ] ; then echo "All sample errors reported." fi let COUNTER = COUNTER+1 done When the script finishes generating all of the errors, it prints the following line: All sample errors reported.
- To generate new types of errors, click terminal Activate Cloud shell and run the following script: COUNTER = 0 while [ $COUNTER -lt 3 ] ; do gcloud beta error-reporting events report --service tutorial --service-version v1 \ --message "java.lang.ArrayIndexOutOfBoundsException: $COUNTER at com.example.AppController.createUser(AppController.java:42) at com.example.User(User.java:31) at javax.servlet.http.HttpServlet.service (HttpServlet.java:617) at javax.servlet.http.HttpServlet.service (HttpServlet.java:717)" if [ $COUNTER -eq 10 ] ; then echo "All sample errors reported." fi let COUNTER = COUNTER+1 done When the script finishes generating all of the errors, it prints the following line: All sample errors reported.
- Generate error messages from a App Engine app While the sample messages you generated from the scripts fully simulate error conditions in Error Reporting, if you want to generate errors from a real service running in your Google Cloud project, follow the steps in this section.
- Check a crashed app for errors by using Error Reporting Error Reporting provides a single place to monitor error conditions from all apps and services in a Google Cloud project and from Amazon Elastic Compute Cloud (EC2) applications.

### "Class ErrorStatsServiceAsyncClient (1.15.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.ErrorStatsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.ErrorStatsServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ErrorStatsServiceAsyncClient () Initialize request argument(s) request = errorreporting v1beta1.
- ErrorStatsServiceAsyncClient () Initialize request argument(s) request = errorreporting v1beta1.
- ErrorStatsServiceAsyncClient () Initialize request argument(s) request = errorreporting v1beta1.
- Returns Type Description google.cloud.errorreporting v1beta1.types.DeleteEventsResponse Response message for deleting error events. error group path error group path ( project : str , group : str ) - > str Returns a fully-qualified error group string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.

