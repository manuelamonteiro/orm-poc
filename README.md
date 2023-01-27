## Humor Analysis

Application to record your mood and activities.

## How to run for development

1. Clone this repository.

2. Install all dependencies:

```bash
npm i
```

3. Configure the `.env` file using the `.env.example` file.

4. Run the back-end in a development environment:

```bash
npm run dev
```

## Documentation

- **GET**/humors

Get all your records or filter by mood.

Response:

```bash
{
    "id": 1,
    "date": "21/01/2022",
    "hour": "20:56",
    "mood": "bem",
    "activities": "almoço com amigos"
}
```

- **POST**/humor

Post your record.

Body: 

```bash
{
    "date": "21/01/2022",
    "hour": "20:56",
    "mood": "bem",
    "activities": "almoço com amigos"
}
```

- **PUT**/humor/:id

Update your record.

Body:

```bash
{
    "mood": "bem",
    "activities": "almoço com amigos e praia"
}
```

- **DELETE**/humor/:id

Delete your record.





