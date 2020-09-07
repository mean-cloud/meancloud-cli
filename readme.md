# meancloud-cli

Mean Cloud Project Generator Tool

## Getting Started

meancloud-cli is a cli package for generating instant Project Setup using NodeJS, MongoDB and more.

### Prerequisites

You'll need NodeJS version 10.x or greater.
Tested on NodeJS 12.x.

### Installing

Install the package as global.

```
npm i meancloud-cli -g
```

### Run

Run the following command and follow the instruction.

```
meancloud-cli
```

## Templates

Currently, we have only Node Mongoose Starter template.


#### NODE MONGOOSE STARTER v1.0

Production ready NodeJS project with Mongoose Modeling and service oriented architecture. 
With basic modules. 

- User [Basic User Model and methods]
- Auth [Basic Authentication like - Registration, Login, Logout, Authorization etc using JWT]
- Media [Basic Media upload]
- Post [Demo CRUD Module to start]

##### Project Structure

```
   ├─ .env
   ├─ .gitignore
   ├─ config
   │  ├─ config.js
   │  ├─ database.js
   │  ├─ routes.js
   │  └─ server.js
   ├─ index.js
   ├─ package.json
   └─ src
      ├─ controllers
      │  ├─ AuthController.js
      │  ├─ Controller.js
      │  ├─ MediaController.js
      │  └─ PostController.js
      ├─ helpers
      │  ├─ HttpError.js
      │  ├─ HttpResponse.js
      │  └─ Utility.js
      ├─ models
      │  ├─ Auth.js
      │  ├─ Media.js
      │  ├─ Post.js
      │  └─ User.js
      ├─ routes
      │  ├─ auth.js
      │  ├─ index.js
      │  ├─ media.js
      │  └─ post.js
      └─ services
         ├─ AuthService.js
         ├─ MediaService.js
         ├─ PostService.js
         ├─ Service.js
         └─ UserService.js
```

## Authors

* **[Sunil Kumar Samanta](https://github.com/sunilksamanta)**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
