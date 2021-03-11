export default function () {
    return {
        current_list:null,
        nb_id:3,
        filter:"all",
        todolists: [
            {
                'id': 0,
                'title': 'liste_1',
                'todos': [
                    {
                        'id': 1,
                        'title': 'todo_1',
                        'completed': true
                    },
                    {
                        'id': 2,
                        'title': 'todo_2',
                        'completed': false
                    }
                ]
            },
            {
                'id': 2,
                'title': 'liste_2',
                'todos': [
                    {
                        'id': 1,
                        'title': 'todo_1',
                        'completed': false
                    }
                ]
            },
        ],
    }
}   