export default function () {
    return {
        current_list:null,
        nb_id:2,
        filter:"all",
        todolists: [
            {
                'id': 0,
                'name': 'Soirée Foot',
                'todos': [
                    {
                        'id': 1,
                        'name': '3 Pizzas',
                        'completed': true
                    },
                    {
                        'id': 2,
                        'name': 'Sauce piquante',
                        'completed': false
                    },
                    {
                        'id': 3,
                        'name': 'Rillettes',
                        'completed': true
                    },
                    {
                        'id': 3,
                        'name': 'Bières',
                        'completed': false
                    }
                ]
            },
            {
                'id': 1,
                'name': 'Projet 1A/2A',
                'todos': [
                    {
                        'id': 1,
                        'name': 'Réunion avec le client',
                        'completed': true
                    },
                    {
                        'id': 2,
                        'name': 'Planifier la webconférence avec le client',
                        'completed': false
                    },
                    {
                        'id': 3,
                        'name': 'Envoyer la newsletter par e-mail',
                        'completed': true
                    },
                    {
                        'id': 4,
                        'name': 'Publier le podcast',
                        'completed': false
                    },
                    {
                        'id': 5,
                        'name': 'Lancer le site Web',
                        'completed': true
                    }
                ]
            },
        ],
    }
}   