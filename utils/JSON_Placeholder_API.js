const BaseApi = require('./my_base_api');


class JsonPlaceholderAPI extends BaseApi {
    constructor(url) {
        super(url);
    }

    async get_posts() {
        const POSTS_PARAM = 'posts';
        const response = await this.get(POSTS_PARAM);
        const posts = await response.json(); // Парсим JSON-ответ
        return posts; // Возвращаем массив постов
    }
}