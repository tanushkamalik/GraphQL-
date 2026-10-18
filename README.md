# Student and College GraphQL API

A backend project built with Node.js, Express, and GraphQL to query student and college information through a single API endpoint.

## Features

- GraphQL API endpoint for querying data
- Student queries by ID and student list retrieval
- College queries by ID and college list retrieval
- Relationships between students and colleges
- JSON-based data loading
- GraphiQL interface for exploring and testing queries

## Tech Stack

- Node.js
- Express.js
- GraphQL
- JavaScript
- JSON

## Project Structure

```text
project/
├── server.js
├── schema.graphql
├── resolver.js
├── db.js
├── data/
│   ├── students.json
│   └── colleges.json
├── package.json
└── .gitignore
```

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

```bash
npm install
```

### Run the Server

```bash
node server.js
```

The configured endpoint is:

`http://localhost:9000/graphql`

## Example Query

```graphql
{
  students {
    id
    name
    age
    major
  }
}
```

## Data

The project is configured to load student and college records from JSON files in the `data/` directory.

## Purpose

This project demonstrates the fundamentals of building a GraphQL API, defining schemas, resolving queries, and representing relationships between data entities.
