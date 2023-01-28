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

- **POST**/sign-up

Body: 

```bash
{
    "name": ,
    "email": ,
    "password": ,
    "confirmPassword": 
}
```

- **POST**/sign-in

Body: 

```bash
{
    "email": ,
    "password": 
}
```

- **GET**/humors

Get all your records or filter by mood.

Response:

```bash
{
    "id": ,
    "date": ,
    "mood": ,
    "activities": ,
    "userId": 
}
```

- **POST**/humor

Post your record.

Body: 

```bash
{
    "date": ,
    "mood": ,
    "activities": 
}
```

- **PATCH**/humor/:id

Update your record.

Body:

```bash
{
    "mood": ,
    "activities": 
}
```

- **DELETE**/humor/:id

Delete your record.

- **GET**/analysis

Get all your records.

Response:

```bash
{
    "id": ,
    "humorWhy": ,
    "howToChange": ,
    "userId":
    
}
```

- **POST**/analysis

Post your record.

Body: 

```bash
{
    "humorWhy": ,
    "howToChange": ,
}
```

- **PATCH**/analysis/:id

Update your record.

Body:

```bash
{
    "humorWhy": ,
    "howToChange": 
}
```

- **DELETE**/analysis/:id

Delete your record.





