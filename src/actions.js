export const inc = () => ({ type: 'INC' }); //action creator, создаем действие INC //благодаря тому что обернули круглыми скобками - мы избавились от слова return

export const dec = () => ({ type: 'DEC' });

export const rnd = () => {
    return {
        type: 'RND',
        payload: Math.floor(Math.random()*10)
    };
};