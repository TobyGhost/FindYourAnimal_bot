const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.kb_home.animal],
        [kb.kb_home.favorite]
    ],
    animal: [
        [kb.kb_animal.cat],
        [kb.kb_animal.dog],
        [kb.go_back]
    ],
    cat: [
        [kb.kb_cat.exotic, kb.kb_cat.maine_coon],
        [kb.kb_cat.ragdoll, kb.go_back_animal]
    ],
    dog: [
        [kb.kb_dog.akita_inui, kb.kb_dog.shepherd],
        [kb.kb_dog.bulldog, kb.go_back_animal]
    ]
}