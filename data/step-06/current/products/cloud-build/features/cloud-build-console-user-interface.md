---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.933Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Console user interface"
feature_slug: "cloud-build-console-user-interface"
latest_feature_date: "2017-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "interface"
  - "platform"
  - "became"
  - "generally"
  - "available"
  - "console"
  - "user"
---

# Cloud Build Console user interface

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

The Cloud Build user interface became generally available in Google Cloud Platform Console, including build history.

## Extended Definition

The Cloud Build user interface became generally available in Google Cloud Platform Console, including build history.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- Resource or API call Free Quota Total storage (documents and indexes) 0.25 GB Queries 1000 queries per day Adding documents to indexes 0.01 GB per day The application console quota section displays a raw count of API requests.
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A high maximum means users might wait longer for their requests to be served, if there are pending requests and no idle instances to serve them, but your application will cost less to run. <min-idle-instances> The number of instances to be kept running and ready to serve traffic.This setting only applies to the version that receives most of the traffic.
- Default: F1 is assigned if you don't specify an instance class along with the automatic scaling element. basic scaling When using basic scaling, the B1, B2, B4, B4 1G, and B8 instance classes are available.
- Default: B2 is assigned if you don't specify a instance class along with the basic scaling element. manual scaling When using manual scaling, the B1, B2, B4, B4 1G, and B8 instance classes are available.
- If a request tries to read the session data when memcache is not available (or the session data has been flushed), it will fail over to Datastore, which might not yet have the most recent session data.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Also: JavaMail API , com.google.appengine.api.mail.MailService , The Mail Java API in the Google App Engine Developer's Guide com.google.appengine.api.mail.jakarta Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a JavaMail interface.
- See Also: com.google.appengine.api.log.LogService com.google.appengine.api.mail Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a JavaMail interface.
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- OK ); } Results<ScoredDocument> results = index . search ( Query . newBuilder (). build ( query )); List<ScoredDocument> matched = new ArrayList<ScoredDocument> ( results . getNumberReturned ()); for ( ScoredDocument result : results ) { matched . add ( result ); } return matched ; } See Also: com.google.appengine.api.search.SearchServiceFactory com.google.appengine.api.search.checkers com.google.appengine.api.search.query com.google.appengine.api.taskqueue Provides a mechanism to perform work initiated by a user request, outside of that request.

