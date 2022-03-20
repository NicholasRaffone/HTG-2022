import {UserInt} from './profile'

export const users: UserInt[] = [
    {
        id:"0",
        name:"Jun Bin Ho",
        title:"Associate PM at Unemployed",
        bio:"I like stuff, asdlfjasdjfas dfa sdf asdf a sdf a sdf a sd fa sd fa sd f asd fa sdf a sdf as df",
        image:"https://media-exp1.licdn.com/dms/image/C5603AQHj7xXGAa-YtA/profile-displayphoto-shrink_800_800/0/1645634514951?e=2147483647&v=beta&t=n_5jup86Mmf2xj1aJaf2hPsrgM1taydrFeAejA3J8ro",
        location:"Abu Dhabi, UAE",
        skills:[
            {
                skill:"Communication",
                rating: 5,
            },
            {
                skill:"Strategy",
                rating: 5,
            },
            {
                skill:"Survey execution",
                rating: 3,
            },
            {
                skill:"Interview execution",
                rating:4
            }
        ],
        areas:["General", "Healthcare", "Financial Services"],
        partner:0,
        completed: 7,
    },
    {
        id:"1",
        name:"Yasmine Messaikeh",
        title:"BA Global Affairs",
        bio:"Yasmine Messaikeh’s expertise sits at the intersection of Higher Education Management, Corporate Finance, and Audit and Advisory Services",
        image:"https://media-exp1.licdn.com/dms/image/C5603AQF5UsZfF9cuJQ/profile-displayphoto-shrink_800_800/0/1614756376616?e=1653523200&v=beta&t=VxoZQuVMtABRnIq8XlPJBQBFr99yE-Xr0RZyyVJpgCU",
        location:"Singapore, Singapore",
        skills:[
            {
                skill:"Communication",
                rating: 5,
            },
            {
                skill:"Strategy",
                rating: 5,
            },
            {
                skill:"Survey execution",
                rating: 3,
            },
            {
                skill:"Interview execution",
                rating:4
            }
        ],
        areas:["General", "Healthcare", "Financial Services"],
        partner:2,
        completed: 6
    },
]
