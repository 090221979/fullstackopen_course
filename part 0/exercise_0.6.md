```mermaid
sequenceDiagram
    participant Browser
    participant Server
Note: user navigates to input and enters value then pressess SAVE button
Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note over Browser: payload {content: "5454", date: "2026-08-14T08:46:56.897Z"}
Note: Javascript appends payload onto the notes Array<br/> and re-renders the page dynamically
Server-->>Browser: {"message":"note created"} 201
```
