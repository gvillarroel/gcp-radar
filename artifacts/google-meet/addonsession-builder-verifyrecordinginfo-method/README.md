# AddonSession.Builder.verifyRecordingInfo() method

Product: Google Meet
Feature slug: `addonsession-builder-verifyrecordinginfo-method`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The verifyRecordingInfo() method checks that the add-on's recording status matches Meet's recording status and terminates the session if they differ.

## Lifecycle

- Latest feature date: 2023-10-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))
- allow (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))
- auth (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))
- authorization (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))
- credential (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))
- identity (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))
- key (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))
- permission (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))
- token (evidence: [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts), [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants), [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize))

## Official Evidence

- [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/participants](https://developers.google.com/workspace/meet/api/guides/participants)
- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
