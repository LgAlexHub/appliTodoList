export default function () {
    return {
        current_list:null,
        nb_id:2,
        filter:"all",
        todolists: [
            {
                'id': 0,
                'name': 'liste_1',
                'todos': [
                    {
                        'id': 1,
                        'name': 'todo_1',
                        'completed': true
                    },
                    {
                        'id': 2,
                        'name': 'todo_2',
                        'completed': false
                    }
                ]
            },
            {
                'id': 1,
                'name': 'liste_2',
                'todos': [
                    {
                        'id': 1,
                        'name': 'todo_1',
                        'completed': false
                    }
                ]
            },
        ],
    }
}   