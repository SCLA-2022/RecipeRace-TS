



export const UserInformation = {
    username: "User1",
    exp: 0,
    beginnerXp: 62,
    intermediate: 21,
    advanced: 0,
    achievements: [
        {
            
            id: 1,
            image: require('../assets/badge.png'),
        },

        {
            id: 2,
            image: require('../assets/badge2.png')
        },
    ],

}

export const levels = [
    {
        label: 'Beginner',
        xp: 62,
    },
    {
        label: 'Medium',
        xp: 100,
    },
    {
        label: 'Advanced',
        xp: 67,
    }
]