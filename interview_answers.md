# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
<!-- 
    Passing state without the need for props drilling, and without the need for setting up a redux store
 -->

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
<!-- 
    actions: JS object that contain an action type and optionally a data payload
    reducers: Is a pure function that accepts a type and payload, to the update state
    store: a product of Redux, a store is a globally accessible repository of state
 -->

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
<!-- 
    Thunk allows us to return function upon dispatch. The allows our action creators to take on more complex actions like API calls
 -->

4. What is your favorite state management system you've learned and this sprint? Please explain why!
<!-- 
    Conext API for it's simplicity and the fact that it is native to React
 -->