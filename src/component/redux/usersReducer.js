const FOLLOW =  "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"


let initialsState ={
    users: [],
}


export const usersReducer = (state = initialsState, action) => {
 
 
    switch(action.type) {
        
        case FOLLOW: 
       
          return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.usersId ) {
                        return {...u, followed: true}
                    }
                    return u
                }
                )
          }

        case UNFOLLOW:  
           return {
                  ...state,
                  users: state.users.map((u) => {
                     if (u.id === action.usersId ) {
                         return {...u, followed: false}
                         }
                         return u
                    }
                    )
          }
        case SET_USERS: 
            return {
                  ...state,
                  users: [...state.users, ...action.users]

            }
            
        default: 
        return state;
    }
    
}
export const  followAC = (usersId) => ({type: FOLLOW, usersId})
export const unfollowAC = (usersId) =>({type: UNFOLLOW, usersId})
export const setUsersAC = (usersId) =>({type: SET_USERS, usersId})