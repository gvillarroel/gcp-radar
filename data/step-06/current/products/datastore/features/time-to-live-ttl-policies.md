---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.783Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Time-to-live (TTL) policies"
feature_slug: "time-to-live-ttl-policies"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/backups"
  - "https://docs.cloud.google.com/datastore/docs/cmek"
  - "https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
keywords:
  - "time"
  - "to"
  - "live"
  - "ttl"
  - "policies"
  - "automatically"
  - "expire"
  - "and"
---

# Time-to-live (TTL) policies

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Time-to-live policies automatically expire and delete data based on configured retention rules; Time-to-live policies automatically expire and delete data based on configured retention rules.

## Extended Definition

Time-to-live policies automatically expire and delete data based on configured retention rules; Time-to-live policies automatically expire and delete data based on configured retention rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/backups](https://docs.cloud.google.com/datastore/docs/backups)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- [https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator](https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)

## Supporting Pages

### Back up and restore data \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/backups](https://docs.cloud.google.com/datastore/docs/backups)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TTL policies are not included in backups and are not automatically reapplied to restored databases.
- A backup does not contain database time to live policies.
- The output will include metadata , name , and response components: metadata: '@type': type.googleapis.com/google.firestore.admin.v1.RestoreDatabaseMetadata backup: projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID database: projects/ PROJECT ID /databases/ DATABASE ID operationState: PROCESSING progressPercentage: completedWork: '20' estimatedWork: '100' startTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID /operations/operation uuid response: '@type': type.googleapis.com/google.firestore.admin.v1.Database createTime: '2023-12-06T14:20:17.398325Z' name: projects/ PROJECT ID /databases/ DATABASE ID ...
- The restore operation will take some time and must complete before the database is accessible. gcloud Use the gcloud firestore databases restore command: gcloud firestore databases restore \ --source-backup=projects/ PROJECT ID /locations/ LOCATION /backups/ BACKUP ID \ --destination-database=' DATABASE ID \ --tags=[ KEY = VALUE ]' Replace the following: PROJECT ID : Your project ID.

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the database has time-to-live (TTL) policies , and if any expiration times get exceeded while the key is unavailable, data deletion by TTL will be delayed until the key gets reinstated.
- Index build operations, and operations enabling new TTL policies will stop making progress.
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Datastore mode point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### Running the Datastore Emulator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator](https://docs.cloud.google.com/datastore/docs/tools/datastore-emulator)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatically removing the variables If your application and the emulator run on the same machine, you can remove the environment variables automatically: Linux / macOS Run env-unset using command substitution: $(gcloud beta emulators datastore env-unset) Windows Create and run a batch file using output from env-unset : gcloud beta emulators datastore env - unset > remove vars . cmd && remove vars . cmd Your application will now connect to your production Datastore mode database.
- Automatically setting the variables If your application and the emulator run on the same machine, you can set the environment variables automatically: Linux / macOS Run env-init using command substitution: $(gcloud beta emulators datastore env-init) Windows Create and run a batch file using output from env-init : gcloud beta emulators datastore env - init > set vars . cmd && set vars . cmd Your application will now connect to the Datastore emulator.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Manually setting the variables If your application and the emulator run on different machines, set the environment variables manually: Run the env-init command: gcloud beta emulators datastore env-init On the machine that runs your application, set the environment variables and values as directed by the output of the env-init command.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- This is demonstrated with the Python code below. class Organization(db.Model): name = db.StringProperty() class Person(db.Model): given name = db.StringProperty() surname = db.StringProperty() class MainPage(webapp2.RequestHandler): def post(self): org = Organization.get or insert('ateam', name='ATeam') person = Person(parent=org) person.given name='GI' person.surname='Joe' person.put() q = db.GqlQuery("SELECT FROM Person WHERE ANCESTOR IS :1 ", org) people = [] for p in q.run(): people.append({'given name': p.given name, 'surname': p.surname}) This time, with the ancestor org specified in the GqlQuery, the query returns the entity just inserted.
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- So, by combining Memcache lookups and Datastore queries, it is possible to build a system that will minimize consistency issues most of the time.
- For large applications, apply best practices such as the use of scattered IDs and reduced indexing to decrease the time required for consistency.

