const reducer = (state = 0, action) => { //принимает на вход текущий state, вторым аргументом принимает action, возвращает новый стейт по аналогии с setState в реакте

    switch (action.type) {//если наше действие 'INC' - вернуть state +1
        case 'RND':
            return state + action.payload;

        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        default: //если не распознали действие возвращаем state и его не изменяем
            return state;
    }
};

export default reducer;