# Documentation for a basic CRUD API

## POST request

https://simple-crud-app-1.herokuapp.com/user/add/

### Usage


```bash
{ 
   "name":John Doe",
   " email": "john@whatever.com",
   " country ": " Nigeria "
}
```

### Response

```bash
{
  "message": " user updated" 
  "user": { 
      "_id": 56008751249008765
      "name":John Doe",
      " email": "john@whatever.com",
      " country ": " Nigeria ",
      "__v": 0
    }
}
```

## GET request

https://simple-crud-app-1.herokuapp.com/user/:id

### Usage


```bash
https://simple-crud-app-1.herokuapp.com/user/56008751249008765
```

### Response

```bash
{
  "message": " user updated" 
  "user": { 
      "_id": 56008751249008765
      "name":John Doe",
      " email": "john@whatever.com",
      " country ": " Nigeria ",
      "__v": 0
    }
}
```

## PUT request

https://simple-crud-app-1.herokuapp.com/user/edit/:id

### Usage


https://simple-crud-app-1.herokuapp.com/user/edit/56008751249008765

```bash
{ 
   "name":John Doe",
   " email": "john@whatever.com",
   " country ": " Nigeria "
}
```

### Response

```bash
{
  "message": " user updated" 
  "user": { 
      "_id": 56008751249008765
      "name":John Doe",
      " email": "john@whatever.com",
      " country ": " Nigeria ",
      "__v": 0
    }
}
```

## DELETE request

https://simple-crud-app-1.herokuapp.com/user/remove/:id

### Usage


https://simple-crud-app-1.herokuapp.com/user/remove/56008751249008765

```bash
{ 
   "name":John Doe",
   " email": "john@whatever.com",
   " country ": " Nigeria "
}
```

### Response

```bash
{
  "message": " user updated" 
  "user": { 
      "_id": 56008751249008765
      "name":John Doe",
      " email": "john@whatever.com",
      " country ": " Nigeria ",
      "__v": 0
    }
}
```


## Github link

Https://github.com/kelvinakpobome/crud_app

## Hosted link


https://simple-crud-app-1.herokuapp.com/
