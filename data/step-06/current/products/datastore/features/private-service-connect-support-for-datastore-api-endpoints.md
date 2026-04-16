---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.764Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Private Service Connect support for Datastore API endpoints"
feature_slug: "private-service-connect-support-for-datastore-api-endpoints"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client"
  - "https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices"
keywords:
  - "private"
  - "connect"
  - "for"
  - "datastore"
  - "api"
  - "endpoints"
  - "can"
  - "be"
---

# Private Service Connect support for Datastore API endpoints

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect can be used to connect to Datastore API regional and multi-regional endpoints.

## Extended Definition

Private Service Connect can be used to connect to Datastore API regional and multi-regional endpoints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices](https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices)

## Supporting Pages

### "Datastore Admin Client \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- Source ID: `site-python-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The request for [google.datastore.admin.v1.DatastoreAdmin.CreateIndex][google.datastore.admin.v1.DatastoreAdmin.CreateIndex]. retry ( google.api core.retry.Retry ) – Designation of what errors, if any, should be retried. timeout ( float ) – The timeout for this request. metadata ( Sequence Tuple [ str , Union [ str , [ bytes ] ] ] ) – Key/value pairs which should be sent along with the request as metadata.
- The request for [google.datastore.admin.v1.DatastoreAdmin.DeleteIndex][google.datastore.admin.v1.DatastoreAdmin.DeleteIndex]. retry ( google.api core.retry.Retry ) – Designation of what errors, if any, should be retried. timeout ( float ) – The timeout for this request. metadata ( Sequence Tuple [ str , Union [ str , [ bytes ] ] ] ) – Key/value pairs which should be sent along with the request as metadata.
- The request for [google.datastore.admin.v1.DatastoreAdmin.ListIndexes][google.datastore.admin.v1.DatastoreAdmin.ListIndexes]. retry ( google.api core.retry.Retry ) – Designation of what errors, if any, should be retried. timeout ( float ) – The timeout for this request. metadata ( Sequence Tuple [ str , Union [ str , [ bytes ] ] ] ) – Key/value pairs which should be sent along with the request as metadata.
- The request for [google.datastore.admin.v1.DatastoreAdmin.GetIndex][google.datastore.admin.v1.DatastoreAdmin.GetIndex]. retry ( google.api core.retry.Retry ) – Designation of what errors, if any, should be retried. timeout ( float ) – The timeout for this request. metadata ( Sequence Tuple [ str , Union [ str , [ bytes ] ] ] ) – Key/value pairs which should be sent along with the request as metadata.

### Cloud Datastore Transactions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions](https://docs.cloud.google.com/datastore/docs/concepts/cloud-datastore-transactions)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . int retries = 5 ; while ( true ) { try { transferFunds ( fromKey , toKey , 10 ); break ; } catch ( DatastoreException e ) { if ( retries == 0 ) { throw e ; } -- retries ; } } // Retry handling can also be configured and automatically applied using google-cloud-java.
- The Datastore API does not automatically retry transactions, but you can add your own logic to retry them, for instance to handle conflicts when another request updates the same entity at the same time.
- For more information, see Set up authentication for a local development environment . / Update two entities in a transaction. @param string $fromKeyId @param string $toKeyId @param int $amount @param string $namespaceId / function transfer funds( string $fromKeyId, string $toKeyId, int $amount, string $namespaceId = null ) { $datastore = new DatastoreClient(['namespaceId' => $namespaceId]); $transaction = $datastore->transaction(); $fromKey = $datastore->key('Account', $fromKeyId); $toKey = $datastore->key('Account', $toKeyId); // The option 'sort' is important here, otherwise the order of the result // might be different from the order of the keys. $result = $transaction->lookupBatch([$fromKey, $toKey], ['sort' => true]); if (count($result['found']) != 2) { $transaction->rollback(); } $fromAccount = $result['found'][0]; $toAccount = $result['found'][1]; $fromAccount['balance'] -= $amount; $toAccount['balance'] += $amount; $transaction->updateBatch([$fromAccount, $toAccount]); $transaction->commit(); } Python To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . task = nil datastore . transaction do tx task = tx . find task key if task . nil? task = datastore . entity task key do t t [ "category" ] = "Personal" t [ "done" ] = false t [ "priority" ] = 4 t [ "description" ] = "Learn Cloud Datastore" end tx . save task end end As before, a transaction is necessary to handle the case where another user is attempting to create or update an entity with the same string ID.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Extract the download: unzip master . zip Change directories to the TaskList application: cd google - cloud - ruby - master / google - cloud - datastore / samples Install the dependencies: bundle install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GOOGLE CLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! bundle exec ruby tasks . rb Creating an Authorized Service Object In order to make authenticated requests to Google Cloud APIs using the Google APIs Client libraries, you must: Fetch the credential to use for requests.
- Client , task id : str int ): with client . transaction (): Create a key for an entity of kind "Task", and with the supplied task id as its Id key = client . key ( "Task" , task id ) Use that key to load the entity task = client . get ( key ) if not task : raise ValueError ( f "Task { task id } does not exist." ) Update a field indicating that the associated work has been completed task [ "done" ] = True Persist the change back to Datastore client . put ( task ) Ruby To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . // Create an authorized Datastore service using Application Default Credentials. private final Datastore datastore = DatastoreOptions . getDefaultInstance (). getService (); // Create a Key factory to construct keys associated with this project. private final KeyFactory keyFactory = datastore . newKeyFactory (). setKind ( "Task" ); Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- The TaskList application will store entities of kind Task , with the following properties: description : a string specified by the user as the task description created : a date that shows when the task was initially created done : a boolean that indicates whether the task has been completed When the user adds a new task, the TaskList application creates a Task entity with values for the properties previously listed: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

### Cloud Datastore best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices](https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ancestor queries also rapidly scan an entity group with minimal I/O because the entities in an entity group are stored at physically close places on Datastore servers.
- Designing for scale Updates to a single entity group A single entity group in Datastore should not be updated too rapidly.
- For example, consider an application that needs the result of a synchronous lookup() and the results of a query before it can render a response.
- You can use the best practices listed here as a quick reference of what to keep in mind when building an application that uses Datastore.

