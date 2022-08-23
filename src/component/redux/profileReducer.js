const ADD_POST =  "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialsState ={
    posts: [
        { id: 1, message: "Hi,how are you?", likesCount: "like 12" },
        { id: 2, message: "V's Birthday", likesCount: "like 11" },
        { id: 3, message: "Hi!", likesCount: "like 20" },
        { id: 4, message: " Birthday?", likesCount: "like 59" },

    ],
    newPostText: 'it-kamasutra'
}

export const profileReducer = (state = initialsState, action) => {

    switch(action.type) {
        case ADD_POST: { 
             let newPost = {
                   id: 5,
                  message: state.newPostText,
                 likesCount: 0
              };
              return {
                  ...state,
                  posts: [...state.posts, newPost], // вместо пуш пишется через запятую
                  newPostText: ' '
              };
            }
        case UPDATE_NEW_POST_TEXT: { 
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: 
        return state;
    }
    
}
export const  addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})
 