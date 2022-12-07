# Magic nodes

## General info

- There are some implemented parts in the source code (mainly React components). For each such part there is a comment that describes the functionality.
- You can continue with the development or you can take it all in a different way. You just need to be able to defend your decision afterwards. The important thing is that the application has all the required features. So,
  - It's up to you how you want to manage state, write css etc...
  - But please, keep [https://tanstack.com/query/v4](https://tanstack.com/query/v4/) as fetching tool.
  - The API is generated and is located together with the API calls and TS interfaces in the `src/api` folder. You just need to call them from your code (and don't forget to turn on the server before that).
  - The [https://mui.com/](https://mui.com/) is installed in the project and it is again up to you whether you want to use it or not. But we recommend to use it, at least you will save time and without UI framework it is almost impossible to develop nowadays.
- The main goal is not so much the design but the cleanliness and quality of the code. In Notum, we use modern react 💪.
- Be creative and show what's in you!

## Features

- 👍 login (with error handling)
- 👍 remember logged user between page reloads
- 👍 show username of logged user
- 👍 load nodes from server
- 👍 save nodes to server
- 👍 display nodes as tree
- 👍 activate node
- 👍 delete node and all its children
- 👍 create new node as direct child of active node
- 👍 change nodes color - set background color to node and all its children until some of them don't have own color
- 👍...and other OMG features you want to impress us with

## OMG features

- awesome [Tailwind](https://tailwindcss.com/) css framework
- MUI free design
- custom Button, Input, AlertMessage components which replace MUI
- log out feature
- nicer design
- React Query dev tools
