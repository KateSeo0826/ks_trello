const cards = [
    {
        id: 'card-1',
        content: 'Learning how to cook',
    },

    {
        id: 'card-2',
        content: 'Making sandwich',
    },
    {
        id: 'card-3',
        content: 'Taking the trash out',
    },
];

const data = {
    lists: {
        'list-1':{
            id: 'list-1',
            title: 'ToDo',
            cards,
        },
    },
    listIds: ['list-1'],
};
    //     'list-2':{
    //         id: 'list-2',
    //         title: 'Doing',
    //         cards: [
    //            { 
    //                id: 'card-4',
    //                content: 'cloning trello',
    //            },
    //            { 
    //                id: 'card-5',
    //                content: 'upload video to youtube',
    //            },
    //         ],
    //     },
    // },

    export default data;