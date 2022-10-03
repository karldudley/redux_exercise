### Study Notes
| [Redux](https://github.com/getfutureproof/fp_guides_wiki/wiki/Redux) |

# Exercises
- Implement a Redux flow
    - This can be in an app you have already made or a new one
    - You must use at least one reducer but you can combine more than one if you like
    - Include the dev tools extension
    - Your reducer should be able to handle:
        - Adding a new item to a collection in your store
        - Updating an item in a collection in your store
        - Deleting an item in a collection in your store
    - At least one component in your app should have read access to the store:
        - Retrieve all items in a collection in your store
    - At least one component in your app should have write access to the store:
        - Add a new item
        - Update an item
        - Delete an item
  
### Bonus
- Add redux-thunk
    - create an async action which calls an API
    - dispatch an action to your reducer which contains data that you've retrieved from the API
    - add the API data to your store and read it from a component in your React app