Exercise 0.4

```mermaid
sequenceDiagram
Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>Browser: /notes	304	document
Browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Browser: main.css status(304) fileType(stylesheet)
Browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server-->>Browser: main.js	status(304)	fileType(script)
Browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>Browser: data.json status(200)	fileType(xhr)
Browser: locate input -> type request -> press SAVE button
Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Server-->>Browser: 302 status -> https://studies.cs.helsinki.fi/exampleapp/notes
Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>Browser: /notes	304	document
Browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Browser: main.css status(304) fileType(stylesheet)
Browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server-->>Browser: main.js	status(304)	fileType(script)
Browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>Browser: data.json status(200)	fileType(xhr)
```
