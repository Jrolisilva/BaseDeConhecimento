import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'font-awesome', 
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload ? 'Operação realizada com sucesso' : payload.msg,
    { type: 'success', icon: 'check'}
)

Vue.toasted.register(
    'defaultError',
    payload => !payload ? 'Ops.. Erro inesperado' : payload.msg,
    { type: 'erro', icon: 'times'}
)